import * as THREE from 'three';
import { PLANETS } from '../data/planets';
import { DWARF_PLANETS, ASTEROIDS } from '../data/dwarfPlanets';
import { BEYOND_OBJECTS } from '../data/beyond';
import { buildPlanetTextures, createSaturnRingTexture } from '../utils/textures';
import { loadHybridTextures } from './loader';
import { SpacecraftManager } from './spacecraft';

export type FocusTarget = string | null;

export class SpaceScene {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  clock = new THREE.Clock();
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();

  // scene objects
  sun!: THREE.Mesh;
  planets: Map<string, THREE.Mesh> = new Map();
  planetGroups: Map<string, THREE.Group> = new Map();
  moonMeshes: THREE.Mesh[] = [];
  rings: Map<string, THREE.Mesh> = new Map();
  orbitLines: Map<string, THREE.Line> = new Map();
  asteroidGroup!: THREE.Group;
  starfieldPoints!: THREE.Points;
  beyondGroup!: THREE.Group;
  voyagerMarker!: THREE.Mesh;

  textures!: ReturnType<typeof buildPlanetTextures>;
  saturnRingTex!: THREE.Texture;
  realLoaded: string[] = [];
  useRealTextures = true;

  // spacecraft
  spacecraftManager!: SpacecraftManager;

  // dwarf + asteroids
  dwarfGroups: Map<string, THREE.Group> = new Map();
  dwarfMeshes: Map<string, THREE.Mesh> = new Map();
  asteroidDetails: THREE.Group[] = [];
  showDwarfs = true;
  showAsteroids = true;

  // state
  timeScale = 1;
  paused = false;
  showOrbits = true;
  showLabels = true;
  showSpacecraft = true;
  isBeyond = false;
  focusTarget: FocusTarget = null;
  hoveredId: string | null = null;
  onPlanetClick?: (id: string)=>void;
  onHover?: (id: string | null)=>void;
  onCraftClick?: (id: string)=>void;
  onTextureLoaded?: (count: number, list: string[])=>void;
  elapsed = 0;

  labelSprites: Map<string, THREE.Sprite> = new Map();

  // scale mode
  scaleMode: 'kid'|'real' = 'kid';
  originalScales = new Map<string, { radius: number, orbit: number }>();

  // camera controls manually (orbit)
  target = new THREE.Vector3(0,0,0);
  spherical = new THREE.Spherical(58, 1.15, 0.9);
  isDragging = false;
  lastDrag = {x:0,y:0};
  distance = 55;
  minDistance = 6;
  maxDistance = 220;

  // drag planet
  enableDrag = false;
  draggingPlanet: string | null = null;
  dragPlane = new THREE.Plane(new THREE.Vector3(0,1,0), 0);

  // tour
  tourTimer: number | null = null;
  tourIndex = 0;

  canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement){
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x020510);
    this.scene.fog = new THREE.FogExp2(0x020510, 0.0022);

    this.camera = new THREE.PerspectiveCamera(58, window.innerWidth/window.innerHeight, 0.1, 1200);
    this.updateCameraPos();

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias:true, alpha:false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // immediate fallback textures (procedural)
    this.textures = buildPlanetTextures() as any;
    this.saturnRingTex = createSaturnRingTexture();

    this.setupLights();
    this.createStarfield();
    this.createSun();
    this.createPlanets();
    this.createDwarfPlanets();
    this.createBeltAsteroids();
    this.createAsteroidBelt();
    this.createKuiperBelt();
    this.createBeyond();
    this.createVoyager();

    // async upgrade to real textures fetched from GitHub
    loadHybridTextures().then(({ textures, ringTex, realLoaded })=>{
      this.realLoaded = realLoaded;
      this.saturnRingTex = ringTex;
      if(realLoaded.length){
        // update existing planet materials maps
        for(const id of Object.keys(textures)){
          if(id.startsWith('_')) continue;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const t = (textures as any)[id];
          const mesh = this.planets.get(id) ?? (id==='sun'? this.sun as unknown as THREE.Mesh : null);
          if(mesh && t?.map){
            (mesh.material as THREE.MeshStandardMaterial).map = t.map;
            (mesh.material as THREE.MeshStandardMaterial).needsUpdate = true;
            // for earth also update clouds/night if present
            if(id==='earth' && (t as any).clouds){
              const cloudMesh = (mesh.userData as any).cloudMesh as THREE.Mesh | undefined;
              if(cloudMesh) (cloudMesh.material as THREE.MeshStandardMaterial).map = (t as any).clouds;
            }
          }
          // Sun
          if(id==='sun' && t?.map){
            (this.sun.material as THREE.MeshStandardMaterial).map = t.map;
            (this.sun.material as THREE.MeshStandardMaterial).emissiveMap = t.map;
          }
        }
        // rings
        const satRing = this.rings.get('saturn');
        if(satRing) (satRing.material as THREE.MeshBasicMaterial).map = this.saturnRingTex;
        this.onTextureLoaded?.(realLoaded.length, realLoaded);
      }
    });

    // spacecraft
    this.spacecraftManager = new SpacecraftManager();
    this.spacecraftManager.loadAll().then(group=>{
      this.scene.add(group);
    });

    this.bindEvents();
    this.animate();
  }

  private setupLights(){
    const ambient = new THREE.AmbientLight(0x404060, 0.55);
    this.scene.add(ambient);
    const sunLight = new THREE.PointLight(0xFFF6D0, 650, 400, 1.8);
    sunLight.position.set(0,0,0);
    sunLight.castShadow = false;
    this.scene.add(sunLight);
    const hemi = new THREE.HemisphereLight(0x6A8DFF, 0x020510, 0.22);
    this.scene.add(hemi);
    const dir = new THREE.DirectionalLight(0xFFF6D0, 1.6);
    dir.position.set(60, 20, 40);
    this.scene.add(dir);
  }

  private createStarfield(){
    const count = 15000;
    const geom = new THREE.BufferGeometry();
    const pos = new Float32Array(count*3);
    const color = new Float32Array(count*3);
    const size = new Float32Array(count);
    for(let i=0;i<count;i++){
      const r = 380 + Math.random()*460;
      const theta = Math.random()*Math.PI*2;
      const phi = Math.acos(2*Math.random()-1);
      pos[i*3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i*3+2] = r * Math.cos(phi);
      const t = Math.random();
      if (t>0.985){ color[i*3]=0.6; color[i*3+1]=0.75; color[i*3+2]=1.0; }
      else if (t>0.97){ color[i*3]=1.0; color[i*3+1]=0.85; color[i*3+2]=0.6; }
      else if (t>0.93){ color[i*3]=1.0; color[i*3+1]=0.45; color[i*3+2]=0.45; }
      else { color[i*3]=1; color[i*3+1]=1; color[i*3+2]=1; }
      size[i]= Math.random()*1.4+0.2;
      if (t>0.998) size[i]*=2.5;
    }
    geom.setAttribute('position', new THREE.BufferAttribute(pos,3));
    geom.setAttribute('color', new THREE.BufferAttribute(color,3));
    geom.setAttribute('size', new THREE.BufferAttribute(size,1));

    const mat = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vSize;
        void main(){
          vColor = color;
          vec4 mv = modelViewMatrix * vec4(position,1.0);
          gl_PointSize = size * (420.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
          vSize = size;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vSize;
        void main(){
          vec2 c = gl_PointCoord - 0.5;
          float d = dot(c,c);
          if (d>0.25) discard;
          float alpha = 1.0 - smoothstep(0.15,0.25,d);
          float glow = exp(-d*8.0);
          gl_FragColor = vec4(vColor * (0.8+ glow*0.6), alpha*0.95);
        }
      `,
      transparent:true, depthWrite:false, vertexColors:true, blending: THREE.AdditiveBlending
    });
    this.starfieldPoints = new THREE.Points(geom, mat);
    this.scene.add(this.starfieldPoints);

    const dustCount = 4000;
    const dustGeom = new THREE.BufferGeometry();
    const dpos = new Float32Array(dustCount*3);
    const dcol = new Float32Array(dustCount*3);
    for(let i=0;i<dustCount;i++){
      const r = 200 + Math.random()*180;
      const theta = Math.random()*Math.PI*2;
      const y = (Math.random()-0.5)*24 + Math.sin(theta*2)*8;
      dpos[i*3]= Math.cos(theta)*r;
      dpos[i*3+1]= y;
      dpos[i*3+2]= Math.sin(theta)*r;
      dcol[i*3]=0.55; dcol[i*3+1]=0.65; dcol[i*3+2]=1.0;
    }
    dustGeom.setAttribute('position', new THREE.BufferAttribute(dpos,3));
    dustGeom.setAttribute('color', new THREE.BufferAttribute(dcol,3));
    const dustMat = new THREE.PointsMaterial({ size:0.55, vertexColors:true, transparent:true, opacity:0.28, sizeAttenuation:true, depthWrite:false });
    const dust = new THREE.Points(dustGeom, dustMat);
    this.scene.add(dust);
  }

  private createSun(){
    const geo = new THREE.SphereGeometry(3.2, 64,64);
    const mat = new THREE.MeshStandardMaterial({
      map: (this.textures as any)['sun']?.map,
      emissive: new THREE.Color(0xFFB000),
      emissiveIntensity: 1.15,
      emissiveMap: (this.textures as any)['sun']?.map,
      roughness: 0.8,
    });
    this.sun = new THREE.Mesh(geo, mat);
    this.sun.name = 'sun';
    this.sun.userData.id='sun';
    this.scene.add(this.sun);

    const glowGeo = new THREE.SphereGeometry(3.6,32,32);
    const glowMat = new THREE.MeshBasicMaterial({ color:0xFFB000, transparent:true, opacity:0.18, side: THREE.BackSide, depthWrite:false });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    this.sun.add(glow);
    const glow2Geo = new THREE.SphereGeometry(4.3,32,32);
    const glow2Mat = new THREE.MeshBasicMaterial({ color:0xFF6A00, transparent:true, opacity:0.08, side: THREE.BackSide, depthWrite:false });
    const glow2 = new THREE.Mesh(glow2Geo, glow2Mat);
    this.sun.add(glow2);

    const sunLightHalo = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: this.createGlowTexture(),
        color: 0xFFCC66,
        transparent:true, opacity:0.35, blending:THREE.AdditiveBlending, depthWrite:false
      })
    );
    sunLightHalo.scale.set(14,14,1);
    this.sun.add(sunLightHalo);
  }

  private createGlowTexture(): THREE.Texture {
    const c=document.createElement('canvas'); c.width=256; c.height=256;
    const ctx=c.getContext('2d')!;
    const g=ctx.createRadialGradient(128,128,0,128,128,128);
    g.addColorStop(0,'rgba(255,210,100,1)');
    g.addColorStop(0.2,'rgba(255,160,40,0.6)');
    g.addColorStop(0.5,'rgba(255,110,10,0.25)');
    g.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=g; ctx.fillRect(0,0,256,256);
    const tex=new THREE.CanvasTexture(c); tex.needsUpdate=true; return tex;
  }

  private createPlanets(){
    for(const p of PLANETS){
      if(p.id==='sun') continue;
      const group = new THREE.Group();
      group.name = `orbit-${p.id}`;
      group.rotation.x = p.orbitInclination * 0.35;
      const startAngle = (PLANETS.indexOf(p) * 47) % 360 * Math.PI/180 + Math.random()*0.3;
      group.userData = { orbitRadius: p.orbitRadius, orbitSpeed: p.orbitSpeed, curAngle: startAngle, id: p.id };
      this.originalScales.set(p.id, { radius: p.radiusScale, orbit: p.orbitRadius });

      const geo = new THREE.SphereGeometry(p.radiusScale, 48,48);
      let mat: THREE.Material;
      const texInfo = (this.textures as any)[p.id];
      if(p.id==='earth' && texInfo){
        mat = new THREE.MeshStandardMaterial({ map: texInfo.map, roughness: 0.65, metalness: 0.02 });
      } else if(p.id==='saturn' || p.id==='jupiter'){
        mat = new THREE.MeshStandardMaterial({ map: texInfo?.map, roughness: 0.75 });
      } else {
        mat = new THREE.MeshStandardMaterial({ map: texInfo?.map, roughness: p.id==='venus'? 0.9 : 0.85, metalness: 0.02 });
      }
      const mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow=false; mesh.receiveShadow=true;
      mesh.name=p.id; mesh.userData.id=p.id;
      mesh.position.set(p.orbitRadius * Math.cos(startAngle), 0, p.orbitRadius * Math.sin(startAngle));
      mesh.rotation.z = parseFloat(p.tilt) * Math.PI/180 * 0.12;
      group.add(mesh);
      this.planets.set(p.id, mesh);
      this.planetGroups.set(p.id, group);
      this.scene.add(group);

      const orbitGeo = new THREE.BufferGeometry();
      const segments=128;
      const positions = new Float32Array((segments+1)*3);
      for(let i=0;i<=segments;i++){
        const a = (i/segments)*Math.PI*2;
        positions[i*3]= Math.cos(a)*p.orbitRadius;
        positions[i*3+1]= 0;
        positions[i*3+2]= Math.sin(a)*p.orbitRadius;
      }
      orbitGeo.setAttribute('position', new THREE.BufferAttribute(positions,3));
      const orbitMat = new THREE.LineBasicMaterial({ color: new THREE.Color(p.color).multiplyScalar(0.6), transparent:true, opacity: p.id==='pluto'?0.18:0.32, depthWrite:false });
      const line = new THREE.Line(orbitGeo, orbitMat);
      line.rotation.x = group.rotation.x;
      this.orbitLines.set(p.id, line);
      this.scene.add(line);

      if(p.id==='earth'){
        const moonGeo = new THREE.SphereGeometry(0.27, 24,24);
        const moonMat = new THREE.MeshStandardMaterial({ map: (this.textures as any)['moon']?.map, roughness:0.9 });
        const moonMesh = new THREE.Mesh(moonGeo, moonMat);
        moonMesh.name='moon';
        moonMesh.userData.id='moon';
        moonMesh.userData = { orbitRadius: 1.85, orbitSpeed: 0.025, curAngle: 0 };
        const pivot = new THREE.Group();
        pivot.add(moonMesh);
        moonMesh.position.set(1.85, 0.15, 0);
        group.add(pivot);
        (mesh.userData as any).moonPivot = pivot;
        (mesh.userData as any).moonMesh = moonMesh;
        this.moonMeshes.push(moonMesh);

        if(texInfo?.clouds){
          const cloudGeo = new THREE.SphereGeometry(p.radiusScale*1.006, 48,48);
          const cloudTex = texInfo?.clouds;
          const cloudMat = new THREE.MeshStandardMaterial({ map: cloudTex, transparent:true, opacity:0.42, depthWrite:false });
          const cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
          cloudMesh.name='earth-clouds';
          mesh.add(cloudMesh);
          (mesh.userData as any).cloudMesh = cloudMesh;
        }
        // Earth night lights layer will be added if real texture loaded later
        const atmoGeo = new THREE.SphereGeometry(p.radiusScale*1.12, 32,32);
        const atmoMat = new THREE.MeshBasicMaterial({ color: 0x6BAFFF, transparent:true, opacity:0.08, side: THREE.BackSide, depthWrite:false });
        const atmo = new THREE.Mesh(atmoGeo, atmoMat);
        mesh.add(atmo);
      } else if(p.id==='mars'){
        const phobosGeo = new THREE.SphereGeometry(0.09,12,12);
        const phMat = new THREE.MeshStandardMaterial({ color: 0x8B7355, roughness:1 });
        const phobos = new THREE.Mesh(phobosGeo, phMat);
        phobos.position.set(0.95, 0.08, 0);
        phobos.userData = { orbitRadius:0.95, orbitSpeed:0.04, curAngle: 0.6 };
        const dPivot = new THREE.Group(); dPivot.add(phobos); group.add(dPivot); (mesh.userData as any).marsMoons=[{mesh: phobos, pivot: dPivot}];
        const deimosGeo = new THREE.SphereGeometry(0.07,12,12);
        const deimos = new THREE.Mesh(deimosGeo, new THREE.MeshStandardMaterial({ color:0x9A9A9A, roughness:1 }));
        deimos.position.set(1.32, -0.05, 0);
        deimos.userData={ orbitRadius:1.32, orbitSpeed:0.022, curAngle:2.1 };
        const dPivot2=new THREE.Group(); dPivot2.add(deimos); group.add(dPivot2); (mesh.userData as any).marsMoons.push({mesh: deimos, pivot: dPivot2});
      } else if(p.id==='jupiter'){
        const moonDatas = [
          {r:0.08, dist:2.95, speed:0.035, col:0xE8D4A8},
          {r:0.09, dist:3.45, speed:0.022, col:0xAAD4FF},
          {r:0.14, dist:4.3, speed:0.012, col:0xC2B280},
          {r:0.13, dist:5.4, speed:0.007, col:0x8A7D6B},
        ];
        const arr: any[]=[];
        moonDatas.forEach(md=>{
          const mg=new THREE.SphereGeometry(md.r,16,16);
          const mm=new THREE.Mesh(mg, new THREE.MeshStandardMaterial({ color: md.col, roughness:0.85 }));
          mm.position.set(md.dist, (Math.random()-0.5)*0.2, 0);
          mm.userData={ orbitRadius: md.dist, orbitSpeed: md.speed, curAngle: Math.random()*Math.PI*2 };
          const piv=new THREE.Group(); piv.add(mm); group.add(piv); arr.push({mesh:mm, pivot:piv});
        });
        (mesh.userData as any).jupiterMoons=arr;
      } else if(p.id==='saturn'){
        const inner= p.radiusScale*1.55, outer= p.radiusScale*2.85;
        const ringGeo = new THREE.RingGeometry(inner, outer, 64, 8);
        const pos = ringGeo.attributes.position;
        const uv = ringGeo.attributes.uv;
        for(let i=0;i<pos.count;i++){
          const v = new THREE.Vector3().fromBufferAttribute(pos as any, i);
          const dist = Math.sqrt(v.x*v.x + v.y*v.y);
          const t = (dist - inner)/(outer-inner);
          uv.setXY(i, t, 0);
        }
        ringGeo.attributes.uv.needsUpdate=true;
        const ringMat = new THREE.MeshBasicMaterial({ map: this.saturnRingTex, transparent:true, side: THREE.DoubleSide, depthWrite:false, opacity:0.9 });
        ringMat.alphaTest=0.02;
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.x = Math.PI/2 + 0.18;
        ringMesh.rotation.y = 0.08;
        mesh.add(ringMesh);
        this.rings.set(p.id, ringMesh);
        const titanGeo=new THREE.SphereGeometry(0.14,16,16);
        const titan=new THREE.Mesh(titanGeo, new THREE.MeshStandardMaterial({ color:0xD4A76A, roughness:0.8 }));
        titan.position.set(4.2,0.12,0); titan.userData={orbitRadius:4.2, orbitSpeed:0.009, curAngle:1.2};
        const tp=new THREE.Group(); tp.add(titan); group.add(tp); (mesh.userData as any).saturnMoons=[{mesh:titan,pivot:tp}];
      } else if(p.id==='uranus'){
        const ringGeo = new THREE.RingGeometry(p.radiusScale*1.35, p.radiusScale*1.85, 64, 2);
        const ringMat = new THREE.MeshBasicMaterial({ color:0x8FAAC8, transparent:true, opacity:0.28, side:THREE.DoubleSide, depthWrite:false });
        const rM = new THREE.Mesh(ringGeo, ringMat); rM.rotation.x = Math.PI/2+ 1.35; mesh.add(rM);
      } else if(p.id==='neptune'){
        const ringGeo = new THREE.RingGeometry(p.radiusScale*1.25, p.radiusScale*1.65, 64, 2);
        const ringMat = new THREE.MeshBasicMaterial({ color:0x4A6FC5, transparent:true, opacity:0.24, side:THREE.DoubleSide, depthWrite:false });
        const rM = new THREE.Mesh(ringGeo, ringMat); rM.rotation.x = Math.PI/2 + 0.2; mesh.add(rM);
        const tritonGeo=new THREE.SphereGeometry(0.18,16,16);
        const triton=new THREE.Mesh(tritonGeo, new THREE.MeshStandardMaterial({ color:0xC9A0B0, roughness:0.85 }));
        triton.position.set(2.8,0.2,0); triton.userData={orbitRadius:2.8, orbitSpeed:-0.014, curAngle:0.8};
        const tp=new THREE.Group(); tp.add(triton); group.add(tp); (mesh.userData as any).neptuneMoons=[{mesh:triton,pivot:tp}];
      } else if(p.id==='pluto'){
        const charGeo=new THREE.SphereGeometry(0.16,16,16);
        const char=new THREE.Mesh(charGeo, new THREE.MeshStandardMaterial({ color:0xA0A0A0, roughness:0.9 }));
        char.position.set(0.82,0.05,0); char.userData={orbitRadius:0.82, orbitSpeed:0.018, curAngle:0};
        const cp=new THREE.Group(); cp.add(char); group.add(cp); (mesh.userData as any).plutoMoons=[{mesh: char, pivot: cp}];
      }

      const label = this.makeLabel(p.name);
      label.position.set(0, p.radiusScale+0.85, 0);
      const labelGroup = new THREE.Group();
      labelGroup.position.copy(mesh.position);
      labelGroup.add(label);
      group.add(labelGroup);
      (mesh.userData as any).labelGroup = labelGroup;
      this.labelSprites.set(p.id, label);
    }
  }

  private createDwarfPlanets(){
    // Dwarf planets orbit groups — smaller, inclined, with labels
    for(const p of DWARF_PLANETS){
      const group = new THREE.Group();
      group.name = `dwarf-${p.id}`;
      group.rotation.x = p.orbitInclination * 0.5;
      const startAngle = (Math.random()*360) * Math.PI/180;
      group.userData = { orbitRadius: p.orbitRadius, orbitSpeed: p.orbitSpeed, curAngle: startAngle, id: p.id, isDwarf: true };

      const geo = new THREE.SphereGeometry(p.radiusScale, 28,28);
      // Dwarf texture: reuse procedural or mix with noise
      const hue = new THREE.Color(p.color);
      const mat = new THREE.MeshStandardMaterial({ color: hue, roughness: 0.88 });
      // If we have a generated texture for dwarf like Ceres we could reuse earth moon texture but color tint enough
      const mesh = new THREE.Mesh(geo, mat);
      mesh.name = p.id; mesh.userData.id = p.id; mesh.userData.isDwarf = true;
      mesh.position.set(p.orbitRadius * Math.cos(startAngle), 0, p.orbitRadius * Math.sin(startAngle));
      group.add(mesh);
      this.dwarfMeshes.set(p.id, mesh);
      this.dwarfGroups.set(p.id, group);
      // also register in planets map for generic handling? Keep separate but add to raycast list
      // keep in planetGroups for unified orbit update? Use separate iteration but reuse same code path
      this.planetGroups.set(p.id, group); // so animate loop picks it up
      this.scene.add(group);

      // orbit line dotted style (dimmer, dashed)
      const orbitGeo = new THREE.BufferGeometry();
      const seg=96;
      const pos = new Float32Array((seg+1)*3);
      for(let i=0;i<=seg;i++){ const a=(i/seg)*Math.PI*2; pos[i*3]=Math.cos(a)*p.orbitRadius; pos[i*3+1]=0; pos[i*3+2]=Math.sin(a)*p.orbitRadius; }
      orbitGeo.setAttribute('position', new THREE.BufferAttribute(pos,3));
      const orbitMat = new THREE.LineDashedMaterial({ color: new THREE.Color(p.color).multiplyScalar(0.55), transparent:true, opacity:0.28, dashSize:0.5, gapSize:0.35 });
      const line = new THREE.Line(orbitGeo, orbitMat);
      line.computeLineDistances();
      line.rotation.x = group.rotation.x;
      this.orbitLines.set(p.id, line);
      this.scene.add(line);

      // label
      const label = this.makeLabel(`${p.name} ★`);
      label.scale.set(2.6,0.66,1);
      label.position.set(0, p.radiusScale+0.55, 0);
      const lg = new THREE.Group(); lg.position.copy(mesh.position); lg.add(label); group.add(lg);
      (mesh.userData as any).labelGroup = lg;
      this.labelSprites.set(p.id, label);

      // Haumea ring
      if(p.hasRings){
        const ringGeo = new THREE.RingGeometry(p.radiusScale*1.35, p.radiusScale*1.85, 32);
        const ringMat = new THREE.MeshBasicMaterial({ color:0xC8D8E8, transparent:true, opacity:0.26, side:THREE.DoubleSide, depthWrite:false });
        const rm = new THREE.Mesh(ringGeo, ringMat); rm.rotation.x = Math.PI/2; mesh.add(rm);
      }
    }
  }

  private createBeltAsteroids(){
    // Named asteroids as clickable tiny spheres with orbits + labels
    for(const a of ASTEROIDS){
      const group = new THREE.Group();
      group.name=`ast-${a.id}`;
      group.rotation.x = (Math.random()-0.5)*0.15;
      const startAngle = Math.random()*Math.PI*2;
      group.userData = { orbitRadius: a.orbitRadius, orbitSpeed: a.orbitSpeed, curAngle: startAngle, id: a.id, isAsteroid: true };

      const geo = new THREE.SphereGeometry(0.09 + Math.random()*0.05, 12,12);
      // perturb to make irregular
      const posAttr = geo.attributes.position as THREE.BufferAttribute;
      for(let i=0;i<posAttr.count;i++){
        const v = new THREE.Vector3().fromBufferAttribute(posAttr,i);
        v.multiplyScalar(0.9 + Math.random()*0.22);
        posAttr.setXYZ(i, v.x, v.y, v.z);
      }
      posAttr.needsUpdate=true; geo.computeVertexNormals();
      const mat = new THREE.MeshStandardMaterial({ color: new THREE.Color(a.color), roughness: 0.96 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.name=a.id; mesh.userData.id=a.id; mesh.userData.isAsteroid=true;
      mesh.position.set(a.orbitRadius * Math.cos(startAngle), (Math.random()-0.5)*0.6, a.orbitRadius * Math.sin(startAngle));
      group.add(mesh);
      this.dwarfGroups.set(a.id, group);
      this.planetGroups.set(a.id, group); // reuse animate
      this.scene.add(group);

      const orbitGeo = new THREE.BufferGeometry();
      const pos = new Float32Array(4*3);
      // simple small arc hint? We'll make full orbit but very dim
      // Actually make faint line: 64 segments
      const seg=48;
      const opos = new Float32Array((seg+1)*3);
      for(let i=0;i<=seg;i++){ const ang=(i/seg)*Math.PI*2; opos[i*3]=Math.cos(ang)*a.orbitRadius; opos[i*3+2]=Math.sin(ang)*a.orbitRadius; }
      const oGeo=new THREE.BufferGeometry(); oGeo.setAttribute('position', new THREE.BufferAttribute(opos,3));
      const oMat=new THREE.LineBasicMaterial({ color: new THREE.Color(a.color).multiplyScalar(0.5), transparent:true, opacity:0.12 });
      const line=new THREE.Line(oGeo, oMat); line.rotation.x=group.rotation.x; this.orbitLines.set(a.id, line); this.scene.add(line);

      // tiny label only when zoomed? Keep hidden until focus but add
      const label=this.makeLabel(a.name);
      label.scale.set(1.9,0.48,1);
      label.position.set(0,0.35,0);
      const lg=new THREE.Group(); lg.position.copy(mesh.position); lg.add(label); group.add(lg);
      (mesh.userData as any).labelGroup=lg;
      this.labelSprites.set(a.id, label);
    }
  }

  private makeLabel(text: string): THREE.Sprite {
    const c=document.createElement('canvas'); c.width=512; c.height=128;
    const ctx=c.getContext('2d')!;
    ctx.clearRect(0,0,c.width,c.height);
    ctx.fillStyle='rgba(10,15,40,0.72)';
    ctx.beginPath(); (ctx as any).roundRect(16, 22, 480, 84, 18); ctx.fill();
    ctx.strokeStyle='rgba(120,160,255,0.35)'; ctx.lineWidth=1.5; ctx.stroke();
    ctx.fillStyle='#E6EFFF';
    ctx.font='600 32px "Space Grotesk", Inter, system-ui, sans-serif';
    ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText(text, 256, 64);
    const tex=new THREE.CanvasTexture(c); tex.colorSpace=THREE.SRGBColorSpace;
    const mat=new THREE.SpriteMaterial({ map: tex, transparent:true, depthWrite:false, depthTest:false, sizeAttenuation:true });
    const spr=new THREE.Sprite(mat);
    spr.scale.set(3.2,0.8,1);
    spr.renderOrder=10;
    return spr;
  }

  private createAsteroidBelt(){
    this.asteroidGroup = new THREE.Group();
    const count=1100;
    const geom = new THREE.IcosahedronGeometry(0.05,0);
    const mat = new THREE.MeshStandardMaterial({ color:0x6B5E4F, roughness:0.95 });
    const inst = new THREE.InstancedMesh(geom, mat, count);
    const dummy = new THREE.Object3D();
    for(let i=0;i<count;i++){
      const angle = Math.random()*Math.PI*2;
      const r = 22.2 + Math.random()*5.6 + Math.sin(angle*3)*0.6;
      const y = (Math.random()-0.5)*1.4 + (Math.random()-0.5)*0.7*Math.sin(angle);
      const s = 0.35 + Math.random()*0.9;
      dummy.position.set(Math.cos(angle)*r, y, Math.sin(angle)*r);
      dummy.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, Math.random()*Math.PI);
      dummy.scale.set(s,s,s);
      dummy.updateMatrix();
      inst.setMatrixAt(i, dummy.matrix);
    }
    inst.instanceMatrix.needsUpdate=true;
    this.asteroidGroup.add(inst);
    this.scene.add(this.asteroidGroup);
  }

  private createKuiperBelt(){
    const count=600;
    const g=new THREE.BufferGeometry();
    const pos=new Float32Array(count*3);
    const col=new Float32Array(count*3);
    for(let i=0;i<count;i++){
      const angle=Math.random()*Math.PI*2;
      const r= 64 + Math.random()*10;
      pos[i*3]=Math.cos(angle)*r;
      pos[i*3+1]=(Math.random()-0.5)*2.5;
      pos[i*3+2]=Math.sin(angle)*r;
      col[i*3]=0.45; col[i*3+1]=0.42; col[i*3+2]=0.48;
    }
    g.setAttribute('position', new THREE.BufferAttribute(pos,3));
    g.setAttribute('color', new THREE.BufferAttribute(col,3));
    const m=new THREE.PointsMaterial({ size:0.14, vertexColors:true, transparent:true, opacity:0.55, sizeAttenuation:true, depthWrite:false });
    const pts=new THREE.Points(g,m);
    this.scene.add(pts);
  }

  private createBeyond(){
    this.beyondGroup = new THREE.Group();
    for(const obj of BEYOND_OBJECTS){
      const r = obj.radius;
      const theta = obj.theta * Math.PI * 1.9;
      const phi = obj.phi;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.cos(phi);
      const z = r * Math.sin(phi) * Math.sin(theta);
      const group = new THREE.Group();
      group.position.set(x,y,z);
      group.userData.id=obj.id;
      group.userData.color=obj.color;
      let mesh: THREE.Mesh | THREE.Points | THREE.Sprite;
      if(obj.type==='Galaxy'){
        const g=new THREE.SphereGeometry(obj.size*1.2, 24,24);
        const m=new THREE.MeshBasicMaterial({ color: obj.color, transparent:true, opacity:0.28, depthWrite:false });
        mesh=new THREE.Mesh(g,m);
        const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.createSpiralTexture(obj.color), transparent:true, opacity:0.45, blending: THREE.AdditiveBlending, depthWrite:false }));
        sprite.scale.set(6,6,1);
        group.add(sprite);
      } else if(obj.type==='Nebula'){
        const g=new THREE.SphereGeometry(obj.size,16,16);
        const m=new THREE.MeshBasicMaterial({ color: obj.color, transparent:true, opacity:0.22, depthWrite:false });
        mesh=new THREE.Mesh(g,m);
        const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.createNebulaTexture(obj.color), transparent:true, opacity:0.55, blending: THREE.AdditiveBlending, depthWrite:false }));
        sprite.scale.set(7,7,1);
        group.add(sprite);
      } else if(obj.type==='Black Hole'){
        const g=new THREE.SphereGeometry(1.0,20,20);
        const m=new THREE.MeshBasicMaterial({ color: 0x000000 });
        mesh=new THREE.Mesh(g,m);
        const ringGeo=new THREE.RingGeometry(1.25,2.2,32);
        const ringMat=new THREE.MeshBasicMaterial({ color:0xFF8C00, transparent:true, opacity:0.65, side:THREE.DoubleSide, depthWrite:false, blending:THREE.AdditiveBlending });
        const ring=new THREE.Mesh(ringGeo, ringMat); ring.rotation.x=Math.PI/2; group.add(ring);
        const halo=new THREE.Sprite(new THREE.SpriteMaterial({ map:this.createGlowTexture(), color:0xFF5500, transparent:true, opacity:0.55, blending:THREE.AdditiveBlending, depthWrite:false }));
        halo.scale.set(6,6,1); group.add(halo);
      } else if(obj.type==='Probe'){
        const g=new THREE.BoxGeometry(0.18,0.18,0.45);
        const m=new THREE.MeshStandardMaterial({ color: obj.color, emissive: obj.color, emissiveIntensity:0.6 });
        mesh=new THREE.Mesh(g,m);
        const ant=new THREE.Mesh(new THREE.ConeGeometry(0.12,0.22,8), new THREE.MeshBasicMaterial({ color:0xFFFFFF }));
        ant.position.z=0.3; ant.rotation.x=Math.PI; group.add(ant);
      } else {
        const g=new THREE.SphereGeometry(obj.size*0.55,16,16);
        const m=new THREE.MeshBasicMaterial({ color: obj.color });
        mesh=new THREE.Mesh(g,m);
        const glow=new THREE.Sprite(new THREE.SpriteMaterial({ map:this.createGlowTexture(), color:obj.color, transparent:true, opacity:0.55, blending:THREE.AdditiveBlending, depthWrite:false }));
        glow.scale.set(obj.size*4.5, obj.size*4.5,1);
        group.add(glow);
        if(obj.type==='Exoplanet'){
          for(let i=0;i<3;i++){
            const pdot=new THREE.Mesh(new THREE.SphereGeometry(0.08,8,8), new THREE.MeshBasicMaterial({ color: i===1? '#4B9CD3': '#C9C9C9'}));
            pdot.position.set((Math.random()-0.5)*1.2, (Math.random()-0.5)*1.2, (Math.random()-0.5)*1.2);
            group.add(pdot);
          }
        }
      }
      (mesh as THREE.Mesh).userData={ id: obj.id, isBeyond: true };
      group.add(mesh as any);
      const label=this.makeLabel(obj.name);
      label.scale.set(4.2,1.05,1);
      label.position.y = obj.size+1.1;
      group.add(label);
      this.beyondGroup.add(group);
    }
    this.scene.add(this.beyondGroup);
    this.beyondGroup.visible = false;
  }

  private createSpiralTexture(colorStr:string): THREE.Texture {
    const c=document.createElement('canvas'); c.width=256; c.height=256; const ctx=c.getContext('2d')!;
    ctx.clearRect(0,0,256,256);
    ctx.translate(128,128);
    for(let arm=0; arm<2; arm++){
      ctx.rotate(Math.PI);
      ctx.beginPath();
      for(let i=0;i<300;i++){
        const t=i/300 * Math.PI*4;
        const r= (i/300)*100;
        const x=Math.cos(t)*r, y=Math.sin(t)*r*0.42;
        if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
      }
      ctx.lineWidth=14; ctx.strokeStyle=colorStr; ctx.stroke();
    }
    const tex=new THREE.CanvasTexture(c); tex.needsUpdate=true; return tex;
  }

  private createNebulaTexture(colorStr:string): THREE.Texture {
    const c=document.createElement('canvas'); c.width=256; c.height=256; const ctx=c.getContext('2d')!;
    const g=ctx.createRadialGradient(128,128,0,128,128,128);
    g.addColorStop(0, colorStr);
    g.addColorStop(0.3, colorStr+'88');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle=g; ctx.fillRect(0,0,256,256);
    for(let i=0;i<12;i++){ ctx.fillStyle='rgba(255,255,255,0.04)'; ctx.beginPath(); ctx.ellipse(128 + (Math.random()-0.5)*60,128+(Math.random()-0.5)*60, Math.random()*50+10, Math.random()*30+10,Math.random()*Math.PI,0,Math.PI*2); ctx.fill(); }
    const tex=new THREE.CanvasTexture(c); tex.needsUpdate=true; return tex;
  }

  private createVoyager(){
    const geo=new THREE.SphereGeometry(32,32,32);
    const mat=new THREE.MeshBasicMaterial({ color:0x6DA8FF, transparent:true, opacity:0.035, side: THREE.BackSide, depthWrite:false, wireframe:false });
    this.voyagerMarker=new THREE.Mesh(geo,mat);
    this.scene.add(this.voyagerMarker);
    const vg1=new THREE.Mesh(new THREE.BoxGeometry(0.18,0.12,0.35), new THREE.MeshStandardMaterial({ color:0xFFD700, emissive:0xFFD700, emissiveIntensity:0.7 }));
    vg1.position.set(34, 2.5, 10); vg1.userData={id:'voyager1', isBeyond:false};
    this.scene.add(vg1);
    const vg2=new THREE.Mesh(new THREE.BoxGeometry(0.18,0.12,0.35), new THREE.MeshStandardMaterial({ color:0xFFD700 }));
    vg2.position.set(31, -2.0, -12);
    this.scene.add(vg2);
  }

  // Controls & Interaction
  private bindEvents(){
    window.addEventListener('resize', ()=> this.onResize());
    this.canvas.addEventListener('pointerdown', (e)=> this.onPointerDown(e));
    this.canvas.addEventListener('pointermove', (e)=> this.onPointerMove(e));
    window.addEventListener('pointerup', ()=> this.onPointerUp());
    this.canvas.addEventListener('wheel', (e)=> this.onWheel(e), {passive:false});
    this.canvas.addEventListener('click', (e)=> this.onClick(e));
    this.canvas.addEventListener('dblclick', (e)=> this.onDblClick(e));
    window.addEventListener('keydown', (e)=>{
      if(e.key===' '){ this.paused=!this.paused; e.preventDefault(); }
      if(e.key==='o'){ this.showOrbits=!this.showOrbits; this.orbitLines.forEach(l=> l.visible=this.showOrbits); }
      if(e.key==='Escape'){ this.clearFocus(); this.onPlanetClick?.(null as any); }
    });
  }

  private onResize(){
    this.camera.aspect = window.innerWidth/window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
  private onPointerDown(e: PointerEvent){
    this.isDragging=true;
    this.lastDrag={x:e.clientX, y:e.clientY};
    (e.target as HTMLElement).setPointerCapture(e.pointerId);

    // check drag start on planet if enableDrag
    if(this.enableDrag && !this.isBeyond){
      const rect=this.canvas.getBoundingClientRect();
      this.mouse.x = ((e.clientX - rect.left)/rect.width)*2 -1;
      this.mouse.y = -((e.clientY - rect.top)/rect.height)*2 +1;
      this.raycaster.setFromCamera(this.mouse, this.camera);
      const meshes=Array.from(this.planets.values());
      const hits=this.raycaster.intersectObjects(meshes,false);
      if(hits.length){
        this.draggingPlanet = (hits[0].object.userData as any).id;
        // prevent camera drag while dragging planet
        // we will handle in move
      }
    }
  }
  private onPointerMove(e: PointerEvent){
    const rect=this.canvas.getBoundingClientRect();
    this.mouse.x = ((e.clientX - rect.left)/rect.width)*2 -1;
    this.mouse.y = -((e.clientY - rect.top)/rect.height)*2 +1;

    // planet drag handling
    if(this.draggingPlanet && this.enableDrag){
      this.raycaster.setFromCamera(this.mouse, this.camera);
      const hit = new THREE.Vector3();
      this.raycaster.ray.intersectPlane(this.dragPlane, hit);
      // radius from sun
      const r = Math.sqrt(hit.x*hit.x + hit.z*hit.z);
      const clamped = THREE.MathUtils.clamp(r, 6, 72);
      // update orbit radius for that planet
      const group = this.planetGroups.get(this.draggingPlanet);
      if(group){
        group.userData.orbitRadius = clamped;
        // update orbit line geometry
        const line = this.orbitLines.get(this.draggingPlanet);
        if(line){
          const seg=128;
          const pos = (line.geometry.attributes.position as THREE.BufferAttribute);
          for(let i=0;i<=seg;i++){
            const a=(i/seg)*Math.PI*2;
            pos.setXYZ(i, Math.cos(a)*clamped, 0, Math.sin(a)*clamped);
          }
          pos.needsUpdate=true;
        }
        // immediately update mesh position to be on new radius at same angle
        const mesh = this.planets.get(this.draggingPlanet);
        if(mesh){
          const ang = group.userData.curAngle;
          mesh.position.set(Math.cos(ang)*clamped, 0, Math.sin(ang)*clamped);
          const lg = (mesh.userData as any).labelGroup as THREE.Group|undefined;
          if(lg) lg.position.copy(mesh.position);
        }
      }
      return; // don't do camera when dragging planet
    }

    if(this.isDragging && !this.draggingPlanet){
      const dx=e.clientX - this.lastDrag.x;
      const dy=e.clientY - this.lastDrag.y;
      this.spherical.theta -= dx * 0.0045;
      this.spherical.phi += dy * 0.0045;
      this.spherical.phi = Math.max(0.08, Math.min(Math.PI-0.08, this.spherical.phi));
      this.lastDrag={x:e.clientX, y:e.clientY};
      this.updateCameraPos();
    } else if(!this.draggingPlanet) {
      this.raycaster.setFromCamera(this.mouse, this.camera);
      const planetMeshes = Array.from(this.planets.values()).concat([this.sun]);
      const hits = this.raycaster.intersectObjects(planetMeshes, false);
      // also test spacecraft
      const craftMeshes: THREE.Object3D[]=[];
      if(this.spacecraftManager) this.spacecraftManager.group.traverse(o=> { if((o as any).isMesh && (o.parent?.userData?.isCraft || (o as any).userData?.isCraft)) craftMeshes.push(o); });
      // simpler: raycast spacecraft group
      let craftHits: THREE.Intersection[] = [];
      if(craftMeshes.length) {
        craftHits = this.raycaster.intersectObjects(craftMeshes, true);
      } else if(this.spacecraftManager){
        craftHits = this.raycaster.intersectObject(this.spacecraftManager.group, true);
      }
      if(craftHits.length){
        const id = craftHits[0].object.parent?.userData?.id ?? (craftHits[0].object as any).userData?.id ?? 'spacecraft';
        if(id!==this.hoveredId){ this.hoveredId=id; this.onHover?.(id); this.canvas.style.cursor='pointer'; }
        return;
      }
      const beyondMeshes: THREE.Object3D[]=[];
      if(this.isBeyond) {
        this.beyondGroup.traverse(o=> { if((o as any).userData?.id && o instanceof THREE.Mesh) beyondMeshes.push(o); });
        const bhits = this.raycaster.intersectObjects(beyondMeshes, false);
        if(bhits.length){ const id=(bhits[0].object.userData as any).id; if(id!==this.hoveredId){ this.hoveredId=id; this.onHover?.(id); this.canvas.style.cursor='pointer'; } return; }
      }
      if(hits.length){
        const id=(hits[0].object.userData as any).id;
        if(id!==this.hoveredId){ this.hoveredId=id; this.onHover?.(id); this.canvas.style.cursor='pointer'; }
      } else {
        if(this.hoveredId!==null){ this.hoveredId=null; this.onHover?.(null); this.canvas.style.cursor='grab'; }
      }
    }
  }
  private onPointerUp(){
    if(this.draggingPlanet){
      // snap? keep new orbit
      this.draggingPlanet=null;
    }
    this.isDragging=false;
  }
  private onWheel(e: WheelEvent){
    e.preventDefault();
    const delta = e.deltaY * 0.015;
    const newRadius = THREE.MathUtils.clamp(this.spherical.radius + delta * (this.spherical.radius*0.08), this.minDistance, this.maxDistance);
    this.spherical.radius = newRadius;
    this.updateCameraPos();
  }
  private onClick(e: MouseEvent){
    if(this.draggingPlanet) return;
    const rect=this.canvas.getBoundingClientRect();
    this.mouse.x=((e.clientX-rect.left)/rect.width)*2-1;
    this.mouse.y=-((e.clientY-rect.top)/rect.height)*2+1;
    this.raycaster.setFromCamera(this.mouse, this.camera);

    // craft click first
    if(this.spacecraftManager){
      const hits = this.raycaster.intersectObject(this.spacecraftManager.group, true);
      if(hits.length){
        const top = hits[0].object;
        // walk up to find wrapper with id
        let cur: any = top;
        while(cur && !cur.userData?.isCraft) cur = cur.parent;
        const id = cur?.userData?.id;
        if(id){ this.onCraftClick?.(id); return; }
      }
    }

    if(this.isBeyond){
      const meshes: THREE.Object3D[]=[];
      this.beyondGroup.traverse(o=> { if((o as any).userData?.id && o instanceof THREE.Mesh) meshes.push(o); });
      const hits=this.raycaster.intersectObjects(meshes,false);
      if(hits.length){ const id=(hits[0].object.userData as any).id; this.onPlanetClick?.(id); this.focusBeyondObject(id); return; }
      return;
    }

    const planetMeshes=Array.from(this.planets.values()).concat([this.sun]);
    const hits=this.raycaster.intersectObjects(planetMeshes,false);
    if(hits.length){
      const id=(hits[0].object.userData as any).id;
      this.onPlanetClick?.(id);
      this.focusOnPlanet(id);
      this.pulsePlanet(id);
    }
  }
  private onDblClick(e: MouseEvent){
    // double click to toggle drag? Or trigger tour? We'll just focus
    const rect=this.canvas.getBoundingClientRect();
    this.mouse.x=((e.clientX-rect.left)/rect.width)*2-1;
    this.mouse.y=-((e.clientY-rect.top)/rect.height)*2+1;
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const planetMeshes=Array.from(this.planets.values()).concat([this.sun]);
    const hits=this.raycaster.intersectObjects(planetMeshes,false);
    if(hits.length){
      const id=(hits[0].object.userData as any).id;
      this.focusOnPlanet(id);
      // little supernova easter egg if clicking Sun 5 times? handled in main
    }
  }

  private pulsePlanet(id:string){
    const m=this.planets.get(id) || (id==='sun'? this.sun as unknown as THREE.Mesh: undefined);
    if(!m) return;
    const s0 = m.scale.x;
    let t=0;
    const step=()=>{
      t+=0.08;
      if(t>1){ m.scale.set(s0,s0,s0); return; }
      const k=1+ Math.sin(t*Math.PI)*0.18;
      m.scale.set(s0*k, s0*k, s0*k);
      requestAnimationFrame(step);
    }; step();
  }

  updateCameraPos(){
    const pos = new THREE.Vector3().setFromSpherical(this.spherical).add(this.target);
    this.camera.position.copy(pos);
    this.camera.lookAt(this.target);
  }

  focusOnPlanet(id: string){
    this.focusTarget=id;
    const mesh = id==='sun'? this.sun as unknown as THREE.Mesh : this.planets.get(id);
    if(!mesh) return;
    const worldPos = new THREE.Vector3();
    mesh.getWorldPosition(worldPos);
    const startTarget = this.target.clone();
    const startRadius = this.spherical.radius;
    const desiredRadius = id==='sun'? 12 : Math.max(4.5, (mesh.geometry as THREE.SphereGeometry).parameters.radius * 5.5 + 3 );
    const desiredTarget = worldPos.clone();
    const startPhi = this.spherical.phi;
    let t=0;
    const anim=()=>{
      t+=0.025;
      if(t>=1){ this.target.copy(desiredTarget); this.spherical.radius = desiredRadius; this.updateCameraPos(); return; }
      const ease = 1 - Math.pow(1-t,3);
      this.target.lerpVectors(startTarget, desiredTarget, ease);
      this.spherical.radius = THREE.MathUtils.lerp(startRadius, desiredRadius, ease);
      this.spherical.phi = THREE.MathUtils.lerp(startPhi, 1.15, ease*0.6);
      this.updateCameraPos();
      requestAnimationFrame(anim);
    }; anim();
  }

  focusBeyondObject(id:string){
    const obj = BEYOND_OBJECTS.find(b=> b.id===id);
    if(!obj) return;
    let g: THREE.Group | undefined;
    this.beyondGroup.children.forEach(ch=>{
      if((ch as any).userData.id===id) g=ch as THREE.Group;
    });
    if(!g) return;
    const worldPos=g.position.clone();
    const startTarget=this.target.clone();
    const startRadius=this.spherical.radius;
    const desTarget=worldPos.clone();
    const desRadius= 8;
    let t=0;
    const anim=()=>{
      t+=0.03;
      if(t>=1){ this.target.copy(desTarget); this.spherical.radius=desRadius; this.updateCameraPos(); return; }
      const ease=1-Math.pow(1-t,3);
      this.target.lerpVectors(startTarget, desTarget, ease);
      this.spherical.radius=THREE.MathUtils.lerp(startRadius, desRadius, ease);
      this.updateCameraPos();
      requestAnimationFrame(anim);
    }; anim();
  }

  clearFocus(){
    this.focusTarget=null;
    const startTarget=this.target.clone();
    const startRadius=this.spherical.radius;
    const desTarget=new THREE.Vector3(0,0,0);
    const desRadius=this.isBeyond? 95 : 58;
    let t=0;
    const anim=()=>{
      t+=0.025;
      if(t>=1){ this.target.copy(desTarget); this.spherical.radius=desRadius; this.updateCameraPos(); return; }
      const ease=1-Math.pow(1-t,3);
      this.target.lerpVectors(startTarget, desTarget, ease);
      this.spherical.radius=THREE.MathUtils.lerp(startRadius, desRadius, ease);
      this.updateCameraPos();
      requestAnimationFrame(anim);
    }; anim();
  }

  toggleBeyond(enable: boolean){
    this.isBeyond=enable;
    let t=0;
    const startRadius=this.spherical.radius;
    const desRadius= enable? 110 : 58;
    const startTarget=this.target.clone();
    const desTarget= enable? new THREE.Vector3(0,-6,0) : new THREE.Vector3(0,0,0);
    const anim=()=>{
      t+=0.02;
      if(t>=1){
        this.target.copy(desTarget); this.spherical.radius=desRadius; this.updateCameraPos();
        this.beyondGroup.visible=enable;
        this.sun.visible=!enable;
        this.planetGroups.forEach(g=> g.visible = !enable);
        this.asteroidGroup.visible=!enable;
        this.orbitLines.forEach(l=> l.visible = !enable && this.showOrbits);
        this.labelSprites.forEach(l=> l.visible=!enable);
        if(this.spacecraftManager) this.spacecraftManager.group.visible=!enable || false; // hide spacecraft beyond? Keep voyager separate
        if(enable) this.beyondGroup.visible=true;
        return;
      }
      const ease=1-Math.pow(1-t,3);
      this.target.lerpVectors(startTarget, desTarget, ease*0.7);
      this.spherical.radius=THREE.MathUtils.lerp(startRadius, desRadius, ease);
      this.updateCameraPos();
      const opacity = enable? 1-t : t;
      (this.sun.material as any).opacity=opacity;
      requestAnimationFrame(anim);
    };
    if(!enable){
      this.sun.visible=true;
      this.planetGroups.forEach(g=> g.visible=true);
      this.orbitLines.forEach(l=> l.visible=this.showOrbits);
      this.labelSprites.forEach(l=> l.visible=this.showLabels);
      this.asteroidGroup.visible=true;
      if(this.spacecraftManager) this.spacecraftManager.group.visible=this.showSpacecraft;
    }
    anim();
    this.scene.fog = new THREE.FogExp2(enable? 0x080818 : 0x020510, enable? 0.0012 : 0.0022);
  }

  // NEW INTERACTIVITY

  setUseRealTextures(v:boolean){
    this.useRealTextures=v;
    // if we already loaded real, toggle by restoring procedural? Simplified: reload page
  }
  setShowSpacecraft(v:boolean){
    this.showSpacecraft=v;
    if(this.spacecraftManager) this.spacecraftManager.group.visible=v && !this.isBeyond;
  }
  setEnableDrag(v:boolean){
    this.enableDrag=v;
    this.canvas.style.cursor = v ? 'move' : 'grab';
  }
  setScaleMode(mode:'kid'|'real'){
    if(mode===this.scaleMode) return;
    this.scaleMode=mode;
    // interpolate planet scales and orbit radii to real proportions (more extreme)
    for(const p of PLANETS){
      if(p.id==='sun') continue;
      const g = this.planetGroups.get(p.id);
      const mesh = this.planets.get(p.id);
      if(!g || !mesh) continue;
      const orig = this.originalScales.get(p.id)!;
      // kid scale already stored; real scale: use true diameter proportion vs Earth (log)
      // Real diameter scale: normalize to Sun? Use diameterKm / 139820 * 8 for Jupiter~8 but Sun 3.2
      // For kid, we already have radiusScale inflated for visibility. For real, shrink
      let targetRadius: number, targetOrbit: number;
      if(mode==='real'){
        // real: planet radius = (diameterKm / 12742) * 0.35 (earth 0.35) ; Sun keep 3.2
        targetRadius = p.id==='pluto' ? 0.12 : (p.diameterKm / 12742) * 0.35;
        // orbit: AU * 14 (earth orbit) => 1 AU =14, so Mercury 5.46 etc.
        targetOrbit = p.distanceAU * 14;
        if(p.id==='pluto') targetOrbit = 39.5*1.2; // compress a bit
      } else {
        targetRadius = orig.radius;
        targetOrbit = orig.orbit;
      }
      // animate
      const startR = (mesh.geometry as THREE.SphereGeometry).parameters.radius;
      const startO = g.userData.orbitRadius;
      let t=0;
      const anim=()=>{
        t+=0.04;
        if(t>=1){
          // final set
          const s = targetRadius / startR;
          mesh.scale.set(s,s,s); // but geometry radius remains startR * scale? Easier: replace geometry?
          // Instead scale mesh directly from 1 to targetRatio
          // Reset scale then set geometry? We'll use scale
          g.userData.orbitRadius = targetOrbit;
          this.updateOrbitLine(p.id, targetOrbit);
          return;
        }
        const ease = 1 - Math.pow(1-t,3);
        const curR = THREE.MathUtils.lerp(startR, targetRadius, ease);
        const curO = THREE.MathUtils.lerp(startO, targetOrbit, ease);
        const scaleFac = curR / startR;
        mesh.scale.set(scaleFac, scaleFac, scaleFac);
        g.userData.orbitRadius = curO;
        this.updateOrbitLine(p.id, curO);
        // update mesh pos radius
        const ang = g.userData.curAngle;
        mesh.position.set(Math.cos(ang)*curO, 0, Math.sin(ang)*curO);
        const lg = (mesh.userData as any).labelGroup as THREE.Group|undefined;
        if(lg) lg.position.copy(mesh.position);
        requestAnimationFrame(anim);
      }; anim();
    }
  }
  private updateOrbitLine(id:string, radius:number){
    const line=this.orbitLines.get(id);
    if(!line) return;
    const pos = line.geometry.attributes.position as THREE.BufferAttribute;
    for(let i=0;i<=128;i++){
      const a=(i/128)*Math.PI*2;
      pos.setXYZ(i, Math.cos(a)*radius, 0, Math.sin(a)*radius);
    }
    pos.needsUpdate=true;
  }

  resetOrbits(){
    // reset any drag changes back to original
    for(const p of PLANETS){
      if(p.id==='sun') continue;
      const orig=this.originalScales.get(p.id);
      if(!orig) continue;
      const g=this.planetGroups.get(p.id);
      if(g) g.userData.orbitRadius=orig.orbit;
      this.updateOrbitLine(p.id, orig.orbit);
      // reset geometry scale to 1
      const mesh=this.planets.get(p.id);
      if(mesh) mesh.scale.set(1,1,1);
    }
    this.setScaleMode('kid');
  }

  // Tour mode: automatically visits planets in order
  startTour(onVisit?: (id:string)=>void){
    if(this.tourTimer) this.stopTour();
    const order = PLANETS.filter(p=> p.id!=='sun').map(p=> p.id);
    let idx=0;
    const visit=()=>{
      const id=order[idx % order.length];
      this.focusOnPlanet(id);
      onVisit?.(id);
      idx++;
    };
    visit();
    this.tourTimer = window.setInterval(visit, 5200) as unknown as number;
  }
  stopTour(){
    if(this.tourTimer){ clearInterval(this.tourTimer as unknown as number); this.tourTimer=null; }
  }

  getPlanetWorldPos(id:string): THREE.Vector3 | null {
    const mesh = id==='sun' ? this.sun as unknown as THREE.Mesh : this.planets.get(id);
    if(!mesh) return null;
    const v=new THREE.Vector3(); mesh.getWorldPosition(v); return v;
  }

  setTimeScale(s: number){ this.timeScale=s; }
  setPaused(p:boolean){ this.paused=p; }
  setShowOrbits(v:boolean){ this.showOrbits=v; this.orbitLines.forEach(l=> l.visible=v && !this.isBeyond); }
  setShowLabels(v:boolean){ this.showLabels=v; this.labelSprites.forEach(l=> l.visible=v && !this.isBeyond); }

  private animate = ()=>{
    requestAnimationFrame(this.animate);
    const dt = this.clock.getDelta();
    this.elapsed += dt;

    if(this.starfieldPoints){
      (this.starfieldPoints.material as THREE.ShaderMaterial).uniforms.time.value = this.elapsed;
      this.starfieldPoints.rotation.y += dt * 0.004 * this.timeScale;
    }
    if(this.sun){
      this.sun.rotation.y += 0.0015 * (this.paused?0: this.timeScale);
    }
    if(!this.paused){
      const scaledDt = dt * this.timeScale;
      this.planetGroups.forEach(group=>{
        const data = group.userData;
        data.curAngle += data.orbitSpeed * scaledDt * 60;
        const mesh = group.children.find(c=> (c as THREE.Mesh).geometry instanceof THREE.SphereGeometry) as THREE.Mesh | undefined;
        if(mesh){
          mesh.position.x = Math.cos(data.curAngle) * data.orbitRadius;
          mesh.position.z = Math.sin(data.curAngle) * data.orbitRadius;
          const planetData = PLANETS.find(p=> p.id===data.id);
          if(planetData) mesh.rotation.y += planetData.rotationSpeed * scaledDt * 60;
          const lg = (mesh.userData as any).labelGroup as THREE.Group | undefined;
          if(lg) lg.position.copy(mesh.position);
          const cm = (mesh.userData as any).cloudMesh as THREE.Mesh | undefined;
          if(cm) cm.rotation.y += 0.008 * scaledDt * 60;
          const moonPivot = (mesh.userData as any).moonPivot as THREE.Group | undefined;
          if(moonPivot){
            const mm = (mesh.userData as any).moonMesh as THREE.Mesh;
            const md = mm.userData as any;
            md.curAngle += md.orbitSpeed * scaledDt * 60;
            mm.position.x = Math.cos(md.curAngle) * md.orbitRadius;
            mm.position.z = Math.sin(md.curAngle) * md.orbitRadius;
          }
          const marsMoons = (mesh.userData as any).marsMoons as any[] | undefined;
          if(marsMoons){ marsMoons.forEach(entry=>{ const md=entry.mesh.userData as any; md.curAngle+= md.orbitSpeed*scaledDt*60; entry.mesh.position.x=Math.cos(md.curAngle)*md.orbitRadius; entry.mesh.position.z=Math.sin(md.curAngle)*md.orbitRadius; }); }
          const jMoons = (mesh.userData as any).jupiterMoons as any[] | undefined;
          if(jMoons){ jMoons.forEach(entry=>{ const md=entry.mesh.userData as any; md.curAngle+=md.orbitSpeed*scaledDt*60; entry.mesh.position.x=Math.cos(md.curAngle)*md.orbitRadius; entry.mesh.position.z=Math.sin(md.curAngle)*md.orbitRadius; }); }
          const sMoons = (mesh.userData as any).saturnMoons as any[] | undefined;
          if(sMoons){ sMoons.forEach(entry=>{ const md=entry.mesh.userData as any; md.curAngle+=md.orbitSpeed*scaledDt*60; entry.mesh.position.x=Math.cos(md.curAngle)*md.orbitRadius; entry.mesh.position.z=Math.sin(md.curAngle)*md.orbitRadius; }); }
          const nMoons = (mesh.userData as any).neptuneMoons as any[] | undefined;
          if(nMoons){ nMoons.forEach(entry=>{ const md=entry.mesh.userData as any; md.curAngle+=md.orbitSpeed*scaledDt*60; entry.mesh.position.x=Math.cos(md.curAngle)*md.orbitRadius; entry.mesh.position.z=Math.sin(md.curAngle)*md.orbitRadius; }); }
          const pMoons = (mesh.userData as any).plutoMoons as any[] | undefined;
          if(pMoons){ pMoons.forEach(entry=>{ const md=entry.mesh.userData as any; md.curAngle+=md.orbitSpeed*scaledDt*60; entry.mesh.position.x=Math.cos(md.curAngle)*md.orbitRadius; entry.mesh.position.z=Math.sin(md.curAngle)*md.orbitRadius; }); }
        }
      });
      if(this.asteroidGroup) this.asteroidGroup.rotation.y += 0.0006 * scaledDt * 60;
      if(this.spacecraftManager) this.spacecraftManager.update(dt, this.timeScale, (id)=> this.getPlanetWorldPos(id));
      if(this.focusTarget){
        const mesh=this.focusTarget==='sun'? this.sun as unknown as THREE.Mesh : this.planets.get(this.focusTarget);
        if(mesh){
          const wp=new THREE.Vector3(); mesh.getWorldPosition(wp);
          this.target.lerp(wp, 0.06);
          this.updateCameraPos();
        }
      }
    }
    this.renderer.render(this.scene, this.camera);
  }
}
