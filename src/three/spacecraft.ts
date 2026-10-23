import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

export type CraftInfo = {
  id: string;
  file: string;
  label: string;
  parent: string; // planet id or 'sun' or 'free'
  orbitRadius: number;
  orbitSpeed: number;
  scale: number;
  offsetY?: number;
};

export const CRAFTS: CraftInfo[] = [
  { id: 'iss', file: 'iss.glb', label: 'ISS — International Space Station', parent: 'earth', orbitRadius: 1.55, orbitSpeed: 0.08, scale: 0.035 },
  { id: 'hubble', file: 'hubble.glb', label: 'Hubble Space Telescope', parent: 'earth', orbitRadius: 1.42, orbitSpeed: -0.06, scale: 0.028 },
  { id: 'apollo', file: 'apollo-lm.glb', label: 'Apollo Lunar Module', parent: 'moon', orbitRadius: 0.55, orbitSpeed: 0.04, scale: 0.022 },
  { id: 'voyager', file: 'voyager.glb', label: 'Voyager 1 — Interstellar Probe', parent: 'free', orbitRadius: 84, orbitSpeed: 0.0012, scale: 0.06 },
  { id: 'parker', file: 'parker.glb', label: 'Parker Solar Probe — Touching the Sun', parent: 'sun', orbitRadius: 5.2, orbitSpeed: 0.09, scale: 0.025 },
  { id: 'mro', file: 'mro.glb', label: 'Mars Reconnaissance Orbiter', parent: 'mars', orbitRadius: 0.92, orbitSpeed: 0.07, scale: 0.03 },
];

export class SpacecraftManager {
  loader: GLTFLoader;
  draco: DRACOLoader;
  group = new THREE.Group();
  crafts = new Map<string, { mesh: THREE.Group, info: CraftInfo, angle: number }>();

  constructor(){
    this.loader = new GLTFLoader();
    this.draco = new DRACOLoader();
    this.draco.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    this.loader.setDRACOLoader(this.draco);
  }

  async loadAll(onProgress?: (id:string, ok:boolean)=>void){
    for(const c of CRAFTS){
      try{
        const gltf = await this.loader.loadAsync(`./models/${c.file}`);
        const root = gltf.scene || (gltf as any).scenes?.[0];
        // normalize: center and scale
        const box = new THREE.Box3().setFromObject(root);
        const size = new THREE.Vector3(); box.getSize(size);
        const max = Math.max(size.x, size.y, size.z);
        const s = c.scale * (max ? 1 : 1);
        // Actually GLBs from NASA are in meters, need small scale
        root.scale.setScalar(s * 0.6);
        // center
        const center = new THREE.Vector3(); box.getCenter(center);
        root.position.sub(center.multiplyScalar(s * 0.6));

        // add subtle emissive trail?
        const wrapper = new THREE.Group();
        wrapper.add(root);
        wrapper.userData = { id: c.id, label: c.label, isCraft: true, parent: c.parent };
        // store parent orbit
        this.crafts.set(c.id, { mesh: wrapper, info: c, angle: Math.random()*Math.PI*2 });
        this.group.add(wrapper);
        onProgress?.(c.id, true);
      } catch(e){
        console.warn('Failed to load spacecraft', c.id, e);
        onProgress?.(c.id, false);
        // fallback placeholder: small box
        const geo = new THREE.BoxGeometry(0.18,0.12,0.35);
        const mat = new THREE.MeshStandardMaterial({ color: 0xFFD700, emissive: 0xFFD700, emissiveIntensity: 0.4 });
        const placeholder = new THREE.Mesh(geo, mat);
        const wrapper = new THREE.Group(); wrapper.add(placeholder);
        wrapper.userData = { id: c.id, label: c.label, isCraft: true, parent: c.parent };
        this.crafts.set(c.id, { mesh: wrapper, info: c, angle: Math.random()*Math.PI*2 });
        this.group.add(wrapper);
      }
    }
    return this.group;
  }

  // update positions: if parent is planet, find planet world pos and offset
  update(dt: number, timeScale: number, getPlanetPos: (id:string)=> THREE.Vector3 | null){
    const scaled = dt * timeScale * 60;
    for(const [id, entry] of this.crafts){
      entry.angle += entry.info.orbitSpeed * scaled * 0.06;
      const r = entry.info.orbitRadius;
      const x = Math.cos(entry.angle) * r;
      const z = Math.sin(entry.angle) * r;
      const y = (entry.info.offsetY ?? 0) + Math.sin(entry.angle*0.7)*0.08;

      if(entry.info.parent==='free'){
        entry.mesh.position.set(x, y, z);
      } else if(entry.info.parent==='sun'){
        // orbit around sun
        entry.mesh.position.set(x, y, z);
      } else {
        const parentPos = getPlanetPos(entry.info.parent);
        if(parentPos){
          entry.mesh.position.copy(parentPos).add(new THREE.Vector3(x,y,z));
        } else {
          entry.mesh.position.set(x,y,z);
        }
      }
      entry.mesh.rotation.y += 0.008 * scaled;
      entry.mesh.rotation.x += 0.002 * scaled;
    }
  }
}
