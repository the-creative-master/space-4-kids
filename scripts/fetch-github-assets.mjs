#!/usr/bin/env node
// Fetches real planet textures + NASA spacecraft GLBs from GitHub via api.github.com
// Allowed hosts: api.github.com, codeload.github.com, github.com
// Saves to public/textures and public/models so app can load them locally
// Also logs provenance for UI display

import fs from 'fs';
import path from 'path';
import https from 'https';

const outTex = 'public/textures';
const outModels = 'public/models';
fs.mkdirSync(outTex, { recursive: true });
fs.mkdirSync(outModels, { recursive: true });

const headers = {
  'User-Agent': 'space-4-kids-fetch',
  'Accept': 'application/vnd.github.v3+json',
};

// If GITHUB_TOKEN present, use it for higher rate limit
if (process.env.GITHUB_TOKEN) headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
else if (process.env.GH_TOKEN) headers['Authorization'] = `Bearer ${process.env.GH_TOKEN}`;

function fetchJson(url){
  return new Promise((res, rej)=>{
    const u = new URL(url);
    const opts = { hostname: u.hostname, path: u.pathname + u.search, method:'GET', headers, rejectUnauthorized: false };
    const req = https.request(opts, r=>{
      let d=''; r.on('data', c=> d+=c); r.on('end', ()=>{
        if(r.statusCode>=400) return rej(new Error(`${r.statusCode} ${d.slice(0,400)} for ${url}`));
        try { res(JSON.parse(d)); } catch(e){ rej(e) }
      });
    });
    req.on('error', rej); req.end();
  });
}
function fetchBuffer(url, headersExtra={}){
  return new Promise((res, rej)=>{
    const u = new URL(url);
    const h = { ...headers, ...headersExtra };
    const opts = { hostname: u.hostname, path: u.pathname + u.search, method:'GET', headers: h, rejectUnauthorized: false };
    const req = https.request(opts, r=>{
      const chunks=[]; r.on('data', c=> chunks.push(c)); r.on('end', ()=>{
        if(r.statusCode>=300 && r.statusCode<400 && r.headers.location){
          // follow redirect (1 level)
          fetchBuffer(r.headers.location, headersExtra).then(res, rej);
          return;
        }
        if(r.statusCode>=400) return rej(new Error(`${r.statusCode} for ${url}`));
        res(Buffer.concat(chunks));
      });
    });
    req.on('error', rej); req.end();
  });
}

async function getFileViaApi(repo, filePath, destPath){
  // filePath e.g. "static/textures/earth.jpg" or "3D Models/Voyager Probe (A)/Voyager Probe (A).glb"
  const encoded = filePath.split('/').map(encodeURIComponent).join('/');
  const url = `https://api.github.com/repos/${repo}/contents/${encoded}`;
  console.log(`→ ${repo}:${filePath}`);
  try{
    const meta = await fetchJson(url);
    if(Array.isArray(meta)) throw new Error('Path is directory, not file: '+filePath);
    let buf;
    if(meta.content && !meta.truncated){
      buf = Buffer.from(meta.content, 'base64');
      console.log(`  ✓ from content (${(buf.length/1024).toFixed(1)}KB)`);
    } else {
      // fetch via git blob
      const sha = meta.sha;
      const blobUrl = `https://api.github.com/repos/${repo}/git/blobs/${sha}`;
      console.log(`  ↳ fetching blob ${sha.slice(0,7)} ...`);
      const blob = await fetchJson(blobUrl);
      if(blob.encoding !== 'base64') throw new Error('Unexpected blob encoding '+blob.encoding);
      buf = Buffer.from(blob.content, 'base64');
      console.log(`  ✓ from blob (${(buf.length/1024).toFixed(1)}KB)`);
    }
    fs.writeFileSync(destPath, buf);
    return { repo, path: filePath, dest: destPath, size: buf.length, sha: meta.sha };
  } catch(e){
    console.warn(`  ⚠ skip ${filePath}: ${e.message}`);
    return null;
  }
}

// Planet textures from KyleGough/solar-system
const textures = [
  { src: 'static/textures/sun.jpg', dest: 'sun.jpg' },
  { src: 'static/textures/mercury.jpg', dest: 'mercury.jpg' },
  { src: 'static/textures/venus.jpg', dest: 'venus.jpg' },
  { src: 'static/textures/earth.jpg', dest: 'earth.jpg' },
  { src: 'static/textures/earth-clouds.jpg', dest: 'earth-clouds.jpg' },
  { src: 'static/textures/earth-night.jpg', dest: 'earth-night.jpg' },
  { src: 'static/textures/moon.jpg', dest: 'moon.jpg' },
  { src: 'static/textures/mars.jpg', dest: 'mars.jpg' },
  { src: 'static/textures/jupiter.jpg', dest: 'jupiter.jpg' },
  { src: 'static/textures/saturn.jpg', dest: 'saturn.jpg' },
  { src: 'static/textures/saturn-ring.png', dest: 'saturn-ring.png' },
  { src: 'static/textures/uranus.jpg', dest: 'uranus.jpg' },
  { src: 'static/textures/neptune.jpg', dest: 'neptune.jpg' },
  { src: 'static/textures/triton.jpg', dest: 'triton.jpg' },
  { src: 'static/textures/titan.webp', dest: 'titan.webp' },
];

const spacecraft = [
  { src: '3D Models/Voyager Probe (A)/Voyager Probe (A).glb', dest: 'voyager.glb', label: 'Voyager Probe' },
  { src: '3D Models/Hubble Space Telescope (A)/Hubble Space Telescope (A).glb', dest: 'hubble.glb', label: 'Hubble Space Telescope' },
  { src: '3D Models/International Space Station (ISS) (A)/International Space Station (ISS) (A).glb', dest: 'iss.glb', label: 'ISS' },
  { src: '3D Models/Apollo Lunar Module/Apollo Lunar Module.glb', dest: 'apollo-lm.glb', label: 'Apollo Lunar Module' },
  { src: '3D Models/Parker Solar Probe/Parker Solar Probe.glb', dest: 'parker.glb', label: 'Parker Solar Probe' },
  { src: '3D Models/Mars Reconnaissance Orbiter (MRO) (A)/Mars Reconnaissance Orbiter (MRO) (A).glb', dest: 'mro.glb', label: 'MRO' },
  // small GLB exists for Curiosity? Actually Curiosity is blend only, skip
];

async function main(){
  console.log('Fetching planet textures from GitHub (KyleGough/solar-system)…');
  const texResults=[];
  for(const t of textures){
    const r = await getFileViaApi('KyleGough/solar-system', t.src, path.join(outTex, t.dest));
    if(r) texResults.push(r);
    // rate limit courtesy
    await new Promise(r=> setTimeout(r, 300));
  }
  console.log(`\nFetched ${texResults.length}/${textures.length} textures`);

  console.log('\nFetching NASA spacecraft GLBs from GitHub (nasa/NASA-3D-Resources)…');
  const scResults=[];
  for(const s of spacecraft){
    const r = await getFileViaApi('nasa/NASA-3D-Resources', s.src, path.join(outModels, s.dest));
    if(r) scResults.push({ ...r, label: s.label });
    await new Promise(r=> setTimeout(r, 400));
  }
  console.log(`\nFetched ${scResults.length}/${spacecraft.length} spacecraft models`);

  // Write manifest for UI to show provenance
  const manifest = {
    fetchedAt: new Date().toISOString(),
    textures: texResults.map(r=> ({ file: path.basename(r.dest), repo: r.repo, path: r.path, sha: r.sha, size: r.size })),
    spacecraft: scResults.map(r=> ({ file: path.basename(r.dest), repo: r.repo, path: r.path, label: r.label, sha: r.sha, size: r.size })),
  };
  fs.writeFileSync('public/github-assets.json', JSON.stringify(manifest, null, 2));
  fs.writeFileSync('src/data/githubManifest.json', JSON.stringify(manifest, null, 2));
  console.log('\n✔ Manifest written to public/github-assets.json + src/data/githubManifest.json');
  console.log(JSON.stringify(manifest, null, 2));
}

main().catch(e=>{ console.error(e); process.exit(1); });
