// Helper to load real textures from GitHub-fetched assets (public/textures)
// Falls back to procedural canvas textures if fetch fails
import * as THREE from 'three';
import { buildPlanetTextures, createSaturnRingTexture } from '../utils/textures';

export type LoadedTextures = ReturnType<typeof buildPlanetTextures> & {
  _realCount?: number;
  _provenance?: string;
};

const REMOTE_MAP: Record<string, string> = {
  sun: 'sun.jpg',
  mercury: 'mercury.jpg',
  venus: 'venus.jpg',
  earth: 'earth.jpg',
  moon: 'moon.jpg',
  mars: 'mars.jpg',
  jupiter: 'jupiter.jpg',
  saturn: 'saturn.jpg',
  uranus: 'uranus.jpg',
  neptune: 'neptune.jpg',
};

export async function loadHybridTextures(): Promise<{ textures: LoadedTextures, ringTex: THREE.Texture, realLoaded: string[] }> {
  const procedural = buildPlanetTextures();
  const loader = new THREE.TextureLoader();
  loader.setCrossOrigin('anonymous');
  const realLoaded: string[] = [];

  async function tryLoad(id: string, file: string): Promise<THREE.Texture | null> {
    return new Promise(res=>{
      loader.load(
        `./textures/${file}`,
        tex=>{
          tex.colorSpace = THREE.SRGBColorSpace;
          tex.wrapS = THREE.RepeatWrapping;
          tex.wrapT = THREE.RepeatWrapping;
          realLoaded.push(id);
          res(tex);
        },
        undefined,
        ()=> res(null) // fallback
      );
    });
  }

  // try each planet texture in parallel
  const promises = Object.entries(REMOTE_MAP).map(async ([id, file])=>{
    const tex = await tryLoad(id, file);
    if(tex) procedural[id].map = tex;
  });
  await Promise.all(promises);

  // Special: earth clouds + night via extra files
  const extra = [
    { id: 'earth', extraKey: 'clouds', file: 'earth-clouds.jpg' },
    { id: 'earth', extraKey: 'night', file: 'earth-night.jpg' },
  ];
  // For earth, if real earth.jpg loaded, attach clouds as separate plane later
  // We'll store night texture as procedural[id].night
  await Promise.all(extra.map(async e=>{
    const tex = await new Promise<THREE.Texture | null>(res=>{
      loader.load(`./textures/${e.file}`, t=> { t.colorSpace=THREE.SRGBColorSpace; realLoaded.push(e.file); res(t); }, undefined, ()=> res(null));
    });
    if(tex){
      if(e.extraKey==='clouds') (procedural as any)['earth'].clouds = tex;
      if(e.extraKey==='night') (procedural as any)['earth'].night = tex;
    }
  }));

  // Saturn ring from real texture?
  let ringTex: THREE.Texture = createSaturnRingTexture();
  const ringReal = await new Promise<THREE.Texture | null>(res=>{
    loader.load('./textures/saturn-ring.png', t=> { realLoaded.push('saturn-ring.png'); res(t); }, undefined, ()=> res(null));
  });
  if(ringReal){
    ringReal.colorSpace = THREE.SRGBColorSpace;
    ringTex = ringReal;
  }

  (procedural as any)._realCount = realLoaded.length;
  return { textures: procedural as LoadedTextures, ringTex, realLoaded };
}
