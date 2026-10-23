import './style.css';
import { PLANETS, PlanetData } from './data/planets';
import { DWARF_PLANETS, ASTEROIDS } from './data/dwarfPlanets';
import { BEYOND_OBJECTS, BeyondObject } from './data/beyond';
import { SpaceScene } from './three/scene';
import manifest from './data/githubManifest.json';
import * as THREE from 'three';

// DOM refs
const canvas = document.getElementById('spaceCanvas') as HTMLCanvasElement;
const hero = document.getElementById('hero')!;
const loader = document.getElementById('loader')!;
const loaderFill = document.getElementById('loaderFill') as HTMLElement;
const btnExplore = document.getElementById('btnExplore') as HTMLButtonElement;
const btnHeroBeyond = document.getElementById('btnHeroBeyond') as HTMLButtonElement;
const btnBeyondTop = document.getElementById('btnBeyondTop') as HTMLButtonElement;
const btnAbout = document.getElementById('btnAbout') as HTMLButtonElement;
const btnResetView = document.getElementById('btnResetView') as HTMLButtonElement;
const railList = document.getElementById('railList')!;
const heroPeek = document.getElementById('heroPeek')!;
const factsheet = document.getElementById('factsheet')!;
const sheetScroll = document.getElementById('sheetScroll')!;
const btnCloseSheet = document.getElementById('btnCloseSheet')!;
const btnPause = document.getElementById('btnPause')!;
const chkOrbits = document.getElementById('chkOrbits') as HTMLInputElement;
const chkLabels = document.getElementById('chkLabels') as HTMLInputElement;
const chkMotion = document.getElementById('chkMotion') as HTMLInputElement;
const chkSpacecraft = document.getElementById('chkSpacecraft') as HTMLInputElement;
const chkDrag = document.getElementById('chkDrag') as HTMLInputElement;
const statFocus = document.getElementById('statFocus')!;
const statTime = document.getElementById('statTime')!;
const toast = document.getElementById('toast')!;
const beyondHud = document.getElementById('beyondHud')!;
const btnReturnSolar = document.getElementById('btnReturnSolar')!;
const btnRailBeyond = document.getElementById('btnRailBeyond')!;
const heroScroll = document.getElementById('heroScroll')!;
const aboutDialog = document.getElementById('aboutDialog') as HTMLDialogElement;
const btnCloseAbout = document.getElementById('btnCloseAbout')!;
const beyondLegend = document.getElementById('beyondLegend')!;
const planetSearch = document.getElementById('planetSearch') as HTMLInputElement;
const btnTour = document.getElementById('btnTour') as HTMLButtonElement;
const btnScaleKid = document.getElementById('btnScaleKid') as HTMLButtonElement;
const btnScaleReal = document.getElementById('btnScaleReal') as HTMLButtonElement;
const btnResetOrbits = document.getElementById('btnResetOrbits') as HTMLButtonElement;
const btnCompare = document.getElementById('btnCompare') as HTMLButtonElement;
const realBadge = document.getElementById('realBadge') as HTMLElement;
const scaleHint = document.getElementById('scaleHint') as HTMLElement;
const miniMapCanvas = document.getElementById('miniMapCanvas') as HTMLCanvasElement;

// State
let hasEntered = false;
let currentSheetId: string | null = null;
let activeTab: 'overview'|'numbers'|'moons'|'fun' = 'overview';
let tourActive = false;
let compareMode = false;

let scene: SpaceScene;

function showToast(msg: string, timeout=2200){
  toast.textContent = msg;
  toast.classList.add('is-visible');
  clearTimeout((toast as any)._t);
  (toast as any)._t = setTimeout(()=> toast.classList.remove('is-visible'), timeout);
}

function iconStyle(id:string, color:string, size:'sm'|'md'|'lg'|'rail'='rail'): string {
  // Use real texture if exists as background, else color gradient
  const texMap: Record<string,string> = {
    sun:'sun.jpg', mercury:'mercury.jpg', venus:'venus.jpg', earth:'earth.jpg',
    mars:'mars.jpg', jupiter:'jupiter.jpg', saturn:'saturn.jpg', uranus:'uranus.jpg',
    neptune:'neptune.jpg', moon:'moon.jpg', pluto:'saturn.jpg' // fallback
  };
  const file = texMap[id];
  if(file){
    return `background-image:url(./textures/${file}); background-size:cover; background-position:center; color:${color}`;
  }
  return `background:radial-gradient(circle at 28% 28%, ${color} 0%, ${color} 65%, #0B1220 100%); color:${color}`;
}

function renderRail(filter=''){
  railList.innerHTML='';
  const allBodies = [...PLANETS, ...DWARF_PLANETS.map(d=> ({...d, type: d.type} as any)), ...ASTEROIDS.map(a=> ({...a, name: a.name, id: a.id, color: a.color, type: a.type} as any))];
  const list = filter ? allBodies.filter(p=> p.name.toLowerCase().includes(filter.toLowerCase()) || p.id.includes(filter.toLowerCase())) : allBodies;
  // Limit to first 20 to keep rail scrollable
  const display = filter ? list : list.slice(0, 26);
  for(const p of display){
    const btn=document.createElement('button');
    btn.className='rail-btn';
    btn.dataset.id=p.id;
    btn.innerHTML=`
      <span class="icon-sphere rail" style="${iconStyle(p.id, p.color, 'rail')}"></span>
      <b>${p.name==='The Sun' ? 'Sun' : p.name}</b>
      <small>${p.type.split(' ')[0]}</small>
    `;
    btn.addEventListener('click',()=>{
      ensureEntered();
      if(scene.isBeyond) toggleBeyond(false);
      scene.focusOnPlanet(p.id);
      openSheet(p.id);
      setActiveRail(p.id);
    });
    railList.appendChild(btn);
  }
  if(list.length===0){
    const empty=document.createElement('div');
    empty.style.cssText='text-align:center; color:var(--muted); font-size:12px; padding:10px';
    empty.textContent='No matches';
    railList.appendChild(empty);
  }
}
function setActiveRail(id: string | null){
  railList.querySelectorAll('.rail-btn').forEach(b=>{
    const bid=(b as HTMLElement).dataset.id;
    b.classList.toggle('is-active', bid===id);
  });
  const p= PLANETS.find(x=> x.id===id) ?? DWARF_PLANETS.find(x=> x.id===id) as any ?? ASTEROIDS.find(x=> x.id===id) as any;
  statFocus.textContent = p ? p.name : (scene?.isBeyond ? 'Beyond — Interstellar Space' : 'Solar System');
}

function renderHeroPeek(){
  heroPeek.innerHTML='';
  const picks = [...PLANETS.filter(p=> ['earth','mars','jupiter','saturn','neptune','sun','uranus','pluto'].includes(p.id)), ...DWARF_PLANETS.slice(0,2)].slice(0,8);
  for(const p of picks){
    const el=document.createElement('button');
    el.className='peek-item';
    el.innerHTML=`<div class="icon-sphere sm" style="${iconStyle(p.id, p.color, 'sm')}"></div><b>${p.name.replace('The ','')}</b><span>${p.subtitle}</span>`;
    el.addEventListener('click', ()=>{
      ensureEntered();
      if(scene.isBeyond) toggleBeyond(false);
      scene.focusOnPlanet(p.id);
      openSheet(p.id);
      setActiveRail(p.id);
    });
    heroPeek.appendChild(el);
  }
}

function renderBeyondLegend(){
  beyondLegend.innerHTML='';
  const types: Record<string, {label:string, color:string}> = {
    'Star': {label:'Stars', color:'#FFD93D'},
    'Exoplanet': {label:'Exoplanets', color:'#4B9CD3'},
    'Nebula': {label:'Nebulae', color:'#DA70D6'},
    'Galaxy': {label:'Galaxy', color:'#87CEEB'},
    'Black Hole': {label:'Black hole', color:'#FF6B6B'},
    'Probe': {label:'Probes', color:'#FFD700'},
    'Cluster': {label:'Clusters', color:'#B0E0E6'},
  };
  Object.entries(types).forEach(([_,v])=>{
    const el=document.createElement('span'); el.className='legend-item';
    el.innerHTML=`<i style="background:${v.color}; color:${v.color}"></i> ${v.label}`;
    beyondLegend.appendChild(el);
  });
}

function openSheet(id: string){
  const data = PLANETS.find(p=> p.id===id) as PlanetData | undefined;
  const dwarf = DWARF_PLANETS.find(d=> d.id===id) as any;
  const asteroid = ASTEROIDS.find(a=> a.id===id) as any;
  const beyond = BEYOND_OBJECTS.find(b=> b.id===id) as BeyondObject | undefined;
  const isCraft = ['iss','hubble','voyager','apollo','parker','mro'].includes(id);
  if(isCraft){
    renderCraftSheet(id);
  } else if(data) renderPlanetSheet(data);
  else if(dwarf) renderDwarfSheet(dwarf);
  else if(asteroid) renderAsteroidSheet(asteroid);
  else if(beyond) renderBeyondSheet(beyond);
  else return;
  currentSheetId = id;
  factsheet.classList.add('is-open');
  sheetScroll.scrollTop = 0;
}

function renderDwarfSheet(d: any){
  setActiveRail(d.id);
  sheetScroll.innerHTML = `
    <div class="sheet-hero">
      <div class="icon-sphere lg" style="${iconStyle(d.id, d.color, 'lg')}"></div>
      <div>
        <h2 class="sheet-title">${d.name}</h2>
        <p class="sheet-subtitle">${d.subtitle}</p>
        <div class="sheet-badges"><span class="badge accent">Dwarf Planet</span><span class="badge">${d.type}</span><span class="badge">${d.moonsCount} moons</span></div>
      </div>
    </div>
    <div class="kid-callout"><span class="kid-dot" style="width:18px;height:18px;border-radius:50%;background:radial-gradient(circle at 30% 30%,#fff,${d.color});flex-shrink:0"></span> <span><b>For kids:</b> ${d.kidWow}</span></div>
    <div class="fact-grid" style="margin-top:12px">
      <div class="fact"><h4>Diameter</h4><p><b>${d.diameterKm.toLocaleString()} km</b></p></div>
      <div class="fact"><h4>Distance</h4><p><b>${d.distanceAU} AU</b><br><small>${d.orbitPeriod}</small></p></div>
      <div class="fact"><h4>Day</h4><p><b>${d.dayLength}</b></p></div>
      <div class="fact"><h4>Discovered</h4><p><b>${d.year}</b><br><small>${d.discoverer}</small></p></div>
    </div>
    <ul class="bullet-list" style="margin-top:12px">
      ${d.funFacts.map((f:string)=> `<li>${f}</li>`).join('')}
    </ul>
    <p style="color:var(--muted); font-size:12px; margin-top:10px">Composition: ${d.composition.join(' • ')}</p>
    <div class="sheet-actions"><button class="sheet-btn primary" data-action="focus">Fly to ${d.name}</button><button class="sheet-btn" data-action="close">Close</button></div>
  `;
  sheetScroll.querySelector('[data-action="focus"]')?.addEventListener('click', ()=> scene.focusOnPlanet(d.id));
  sheetScroll.querySelector('[data-action="close"]')?.addEventListener('click', ()=> closeSheet());
}
function renderAsteroidSheet(a: any){
  setActiveRail(a.id);
  sheetScroll.innerHTML = `
    <div class="sheet-hero">
      <div class="icon-sphere lg" style="${iconStyle(a.id, a.color, 'lg')}"></div>
      <div>
        <h2 class="sheet-title">${a.name}</h2>
        <p class="sheet-subtitle">${a.subtitle}</p>
        <div class="sheet-badges"><span class="badge accent">${a.type}</span><span class="badge">${a.diameterKm} km</span></div>
      </div>
    </div>
    <div class="kid-callout"><span class="kid-dot" style="width:18px;height:18px;border-radius:50%;background:${a.color};flex-shrink:0"></span> <span><b>Asteroid:</b> Tiny worldlets — ${a.type}. Click drag orbits to move it!</span></div>
    <ul class="bullet-list" style="margin-top:12px">
      ${a.funFacts.map((f:string)=> `<li>${f}</li>`).join('')}
    </ul>
    <div class="sheet-actions"><button class="sheet-btn primary" data-action="focus">Fly to ${a.name}</button><button class="sheet-btn" data-action="close">Close</button></div>
  `;
  sheetScroll.querySelector('[data-action="focus"]')?.addEventListener('click', ()=> scene.focusOnPlanet(a.id));
  sheetScroll.querySelector('[data-action="close"]')?.addEventListener('click', ()=> closeSheet());
}
function closeSheet(){
  factsheet.classList.remove('is-open');
  currentSheetId = null;
  setActiveRail(null);
}

function renderCraftSheet(id: string){
  const labels: Record<string, {name:string, desc:string, repo:string}> = {
    iss: { name: 'ISS', desc: 'International Space Station — 109m wide, orbits Earth every 93 min. Real GLB 39KB from NASA.', repo: 'nasa/NASA-3D-Resources: International Space Station (ISS) (A)' },
    hubble: { name: 'Hubble Space Telescope', desc: 'Hubble — 2.4m mirror, launched 1990, 1.6MB GLB from NASA. Orbits Earth, sees to edge of observable universe.', repo: 'nasa/NASA-3D-Resources: Hubble Space Telescope (A)' },
    voyager: { name: 'Voyager 1', desc: 'Voyager 1 — farthest human object (162 AU), Golden Record onboard. 279KB GLB from NASA. Heading to interstellar space.', repo: 'nasa/NASA-3D-Resources: Voyager Probe (A)' },
    apollo: { name: 'Apollo Lunar Module', desc: 'Apollo LM — landed 6 crews on Moon 1969-72. 700KB GLB from NASA.', repo: 'nasa/NASA-3D-Resources: Apollo Lunar Module' },
    parker: { name: 'Parker Solar Probe', desc: 'Parker — fastest spacecraft, touches Sun corona (430KB GLB). Launched 2018.', repo: 'nasa/NASA-3D-Resources: Parker Solar Probe' },
    mro: { name: 'Mars Reconnaissance Orbiter', desc: 'MRO — hi-res Mars imager, 2.5MB GLB. Mapping Mars since 2006.', repo: 'nasa/NASA-3D-Resources: MRO (A)' },
  };
  const info = labels[id] ?? { name: id, desc: 'Real NASA model fetched from GitHub via api.github.com.', repo: 'nasa/NASA-3D-Resources' };
  sheetScroll.innerHTML = `
    <div class="sheet-hero">
      <div class="icon-sphere lg" style="background:radial-gradient(circle at 28% 28%, #FFF7CC 0%, #FFD700 22%, #FF8C00 62%); flex-shrink:0; color:#FFD700"></div>
      <div>
        <h2 class="sheet-title">${info.name}</h2>
        <p class="sheet-subtitle">Real NASA 3D Model • GLB from GitHub</p>
        <div class="sheet-badges"><span class="badge accent">Spacecraft</span><span class="badge">${info.repo.split(':')[0]}</span></div>
      </div>
    </div>
    <div class="kid-callout"><span class="kid-dot" style="width:22px;height:22px;border-radius:50%;background:#0B1220;display:inline-block;flex-shrink:0;background:radial-gradient(circle at 30% 30%,#fff,#FFD700)"></span> <span><b>Real 3D:</b> ${info.desc}<br><small>Fetched via <code>api.github.com</code> → <code>codeload.github.com</code> → saved to <code>public/models/${id}.glb</code></small></span></div>
    <p style="color:var(--muted); font-size:12px; margin:10px 0">These models are <b style="color:var(--text)">public domain NASA</b>, rendered with THREE.GLTFLoader + Draco. They orbit their parent body live — click Tour to watch them move.</p>
    <div class="sheet-actions">
      <button class="sheet-btn primary" data-action="focusCraft">Follow ${info.name}</button>
      <button class="sheet-btn" data-action="back">Back</button>
    </div>
    <p style="color:var(--muted); font-size:11px; margin-top:10px">Provenance: <code>${info.repo}</code> • SHA from <code>public/github-assets.json</code> • Fetched ${manifest.fetchedAt.slice(0,10)}</p>
  `;
  sheetScroll.querySelector('[data-action="focusCraft"]')?.addEventListener('click', ()=>{
    // find craft world pos
    const entry = (scene as any).spacecraftManager?.crafts.get(id);
    if(entry){
      const pos = entry.mesh.position.clone();
      // fly to it
      (scene as any).target.copy(pos);
      (scene as any).spherical.radius=3.5;
      scene.updateCameraPos();
      showToast(`Following ${info.name} — it orbits live!`);
    }
  });
  sheetScroll.querySelector('[data-action="back"]')?.addEventListener('click', ()=> closeSheet());
}

function renderPlanetSheet(p: PlanetData){
  setActiveRail(p.id);
  const earthDiameter = 12742;
  const moonsHtml = p.moons.length ? p.moons.map(m=> `
    <div class="moon-card">
      <span class="icon-sphere sm" style="${iconStyle('moon',' #A0A0A0','sm')}; flex-shrink:0"></span>
      <div>
        <b>${m.name} <small style="color:var(--muted)">— ${m.diameterKm.toLocaleString()} km</small></b>
        <p>${m.fact} <br><small>Distance from ${p.name}: ${m.distanceKm.toLocaleString()} km • Discovered: ${m.discovered}</small></p>
      </div>
    </div>
  `).join('') : `<p style="color:var(--muted); font-size:13px">No moons — ${p.name} travels alone.</p>`;

  const quizQ = quizForPlanet(p);
  const quizHtml = quizQ ? `
    <div class="quiz-box" id="quizBox">
      <h4>Quick quiz</h4>
      <p>${quizQ.q}</p>
      ${quizQ.opts.map((o,i)=> `<button class="quiz-opt" data-qi="${i}">${o}</button>`).join('')}
      <div class="quiz-feedback" id="quizFeedback"></div>
    </div>
  ` : '';

  // provenance badge if real texture loaded
  const realBadgeHtml = scene?.realLoaded?.includes(p.id+'.jpg') || scene?.realLoaded?.includes(p.id) ? `<span class="badge" style="border-color:rgba(34,197,94,0.35); color:#22C55E">Real texture from GitHub</span>` : `<span class="badge">Procedural fallback</span>`;

  const overviewContent = `
    <p style="color:var(--muted); font-size:13px; line-height:1.6; margin:10px 0 10px">
      ${p.type} • ${p.classification} • Discovered: ${p.discovered}
      <br><span style="color:var(--text)">${p.compareEarth}</span>
    </p>
    <div class="kid-callout"><span class="kid-dot" style="width:18px;height:18px;border-radius:50%;background:radial-gradient(circle at 30% 30%,#fff,#FFD166);flex-shrink:0"></span> <span><b>For kids:</b> ${p.kidWow}</span></div>
    <div style="margin-top:12px">
      <h4 style="margin:0 0 6px; font:700 12px 'Space Grotesk'; letter-spacing:0.08em; text-transform:uppercase; color:var(--muted)">What makes it special?</h4>
      <ul class="bullet-list">
        ${p.funFacts.slice(0,3).map(f=> `<li>${f}</li>`).join('')}
      </ul>
    </div>
    ${quizHtml}
    <div class="sheet-actions">
      <button class="sheet-btn primary" data-action="focus">Fly to ${p.name.replace('The ','')}</button>
      <button class="sheet-btn" data-action="compare">Compare to Earth</button>
    </div>
  `;
  const numbersContent = `
    <div class="fact-grid">
      <div class="fact"><h4>Diameter</h4><p><b>${p.diameterKm.toLocaleString()} km</b><br><small>${p.compareEarth}</small></p>
        <div class="compare-bar"><div class="compare-fill" style="width:${(p.diameterKm/139820*100).toFixed(1)}%"></div></div><div class="compare-label"><span>vs Jupiter max</span><span>${(p.diameterKm/139820*100).toFixed(1)}%</span></div>
      </div>
      <div class="fact"><h4>Gravity</h4><p><b>${p.gravity} m/s²</b><br><small>${(p.gravity/9.81).toFixed(2)}× Earth — you’d weigh ${(p.gravity/9.81*100).toFixed(0)}%</small></p></div>
      <div class="fact"><h4>Distance from Sun</h4><p><b>${p.distanceKm}</b><br><small>${p.distanceAU} AU${p.distanceAU? ` • Light: ${(p.distanceAU*8.3).toFixed(1)} min` : ''}</small></p></div>
      <div class="fact"><h4>Year & Day</h4><p><b>${p.orbitPeriod}</b><br><small>Year • Day: ${p.dayLength}</small></p></div>
      <div class="fact"><h4>Temperature</h4><p><b>${p.avgTemp}</b><br><small>${p.tempRange}</small></p></div>
      <div class="fact"><h4>Tilt</h4><p><b>${p.tilt}</b><br><small>Axial tilt creates seasons</small></p></div>
    </div>
    <div style="margin-top:12px; background:rgba(255,255,255,0.06); border:1px solid var(--line); border-radius:12px; padding:10px">
      <h4 style="margin:0 0 4px; font:700 11px 'Space Grotesk'; letter-spacing:0.10em; text-transform:uppercase; color:var(--muted)">Composition</h4>
      <p style="margin:0; font-size:12px; color:var(--muted)">${p.composition.join(' • ')}</p>
      <h4 style="margin:10px 0 4px; font:700 11px 'Space Grotesk'; letter-spacing:0.10em; text-transform:uppercase; color:var(--muted)">Atmosphere</h4>
      <p style="margin:0; font-size:12px; color:var(--muted)">${p.atmosphere.join(' • ')}</p>
    </div>
  `;
  const moonsContent = `
    <p style="color:var(--muted); font-size:13px; margin:0 0 8px">${p.name} has <b style="color:var(--text)">${p.moonsCount} moon${p.moonsCount===1?'':'s'}</b> confirmed.</p>
    ${moonsHtml}
    ${p.hasRings? `<div style="margin-top:10px; background: rgba(255,210,100,0.10); border:1px solid rgba(255,210,100,0.22); border-radius:12px; padding:10px"><b>Rings:</b> <span style="color:var(--muted); font-size:12px">${p.id==='saturn'?'Huge icy rings — 23 Earths wide, thinner than a house!': p.id==='jupiter'?'Faint dusty rings found 1979.': p.id==='uranus'?'Dark narrow rings, discovered 1977.': 'Faint arcs — still mysterious.'}</span></div>` : ''}
  `;
  const funContent = `
    <ul class="bullet-list">
      ${p.funFacts.map(f=> `<li>${f}</li>`).join('')}
    </ul>
    <div class="kid-callout" style="margin-top:12px"><span class="kid-dot" style="width:18px;height:18px;border-radius:50%;background:radial-gradient(circle at 30% 30%,#fff,#6EA8FF);flex-shrink:0"></span> <span><b>Try this:</b> Ask an adult to find ${p.name} in sky — ${p.id==='earth'?'look down!': p.id==='mercury'?'low at sunset/sunrise': p.id==='venus'?'sunset/sunrise brightest “star”': p.id==='mars'?'reddish star': p.id==='jupiter'?'brightest star-like': p.id==='saturn'?'golden dot near Jupiter': p.id==='uranus'?'needs binoculars': p.id==='neptune'?'needs telescope': 'needs big telescope'}</span></div>
  `;

  let tabContent = '';
  if(activeTab==='overview') tabContent = overviewContent;
  if(activeTab==='numbers') tabContent = numbersContent;
  if(activeTab==='moons') tabContent = moonsContent;
  if(activeTab==='fun') tabContent = funContent;

  const discoveryInfo = p.discoveredBy ? `<p style="color:var(--muted); font-size:11px; margin-top:10px">Discovery: ${p.discovered} • ${p.discoveredBy}</p>` : '';

  sheetScroll.innerHTML = `
    <div class="sheet-hero" style="--planet-color: ${p.color}">
      <div class="icon-sphere lg" style="${iconStyle(p.id, p.color, 'lg')}"></div>
      <div>
        <h2 class="sheet-title">${p.name}</h2>
        <p class="sheet-subtitle">${p.subtitle}</p>
        <div class="sheet-badges">
          <span class="badge accent">${p.classification}</span>
          <span class="badge">${p.type}</span>
          ${p.hasRings? `<span class="badge" style="border-color:rgba(255,210,100,0.35); color:#FFD166">Has rings</span>`:''}
          <span class="badge">${p.moonsCount} moon${p.moonsCount===1?'':'s'}</span>
          ${realBadgeHtml}
        </div>
      </div>
    </div>

    <div class="sheet-tabs" role="tablist">
      <button class="sheet-tab ${activeTab==='overview'?'is-active':''}" data-tab="overview">Overview</button>
      <button class="sheet-tab ${activeTab==='numbers'?'is-active':''}" data-tab="numbers">Numbers</button>
      <button class="sheet-tab ${activeTab==='moons'?'is-active':''}" data-tab="moons">Moons${p.hasRings?' & Rings':''}</button>
      <button class="sheet-tab ${activeTab==='fun'?'is-active':''}" data-tab="fun">All facts</button>
    </div>

    <div class="sheet-tab-panel" data-panel>
      ${tabContent}
    </div>
    ${discoveryInfo}
    <p style="color:var(--muted); font-size:11px; margin-top:10px">Texture: <code>${scene?.realLoaded?.includes(p.id+'.jpg') ? `public/textures/${p.id}.jpg (KyleGough/solar-system)` : 'procedural canvas fallback'}</code> • 3D: SphereGeometry 48seg</p>
  `;

  sheetScroll.querySelectorAll('.sheet-tab').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      activeTab = (btn as HTMLElement).dataset.tab as any;
      renderPlanetSheet(p);
    });
  });
  const quizBox = sheetScroll.querySelector('#quizBox');
  if(quizBox){
    sheetScroll.querySelectorAll('.quiz-opt').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const idx = parseInt((btn as HTMLElement).dataset.qi!);
        const feedback = sheetScroll.querySelector('#quizFeedback') as HTMLElement;
        const correct = quizQ!.answer;
        const isCorrect = idx===correct;
        sheetScroll.querySelectorAll('.quiz-opt').forEach(b=> {
          const bi = parseInt((b as HTMLElement).dataset.qi!);
          if(bi===correct) b.classList.add('is-correct');
          else if(bi===idx && !isCorrect) b.classList.add('is-wrong');
          (b as HTMLButtonElement).disabled=true;
        });
        feedback.textContent = isCorrect ? `${quizQ!.explain}` : `Not quite. ${quizQ!.explain}`;
        if(isCorrect) showToast(`Correct! You know ${p.name} well!`);
      });
    });
  }
  const focusBtn = sheetScroll.querySelector('[data-action="focus"]') as HTMLButtonElement | null;
  if(focusBtn) focusBtn.addEventListener('click', ()=> scene.focusOnPlanet(p.id));
  const compBtn = sheetScroll.querySelector('[data-action="compare"]') as HTMLButtonElement | null;
  if(compBtn) compBtn.addEventListener('click', ()=>{
    activeTab='numbers'; renderPlanetSheet(p);
  });
}

function renderBeyondSheet(b: BeyondObject){
  setActiveRail(null);
  const typeBadge = `<span class="badge accent">${b.type}</span> <span class="badge">${b.distanceLy}</span>`;
  sheetScroll.innerHTML = `
    <div class="sheet-hero">
      <div class="icon-sphere lg" style="background:radial-gradient(circle at 28% 28%, ${b.color}, #0B1220 80%); color:${b.color}"></div>
      <div>
        <h2 class="sheet-title">${b.name}</h2>
        <p class="sheet-subtitle">${b.subtitle} ${b.constellation? `• ${b.constellation}`:''}</p>
        <div class="sheet-badges">${typeBadge}</div>
      </div>
    </div>
    <div class="kid-callout"><span class="kid-dot" style="width:18px;height:18px;border-radius:50%;background:radial-gradient(circle at 30% 30%,#fff,${b.color});flex-shrink:0"></span> <span><b>Kid wow:</b> ${b.kidWow}</span></div>
    <p style="color:var(--muted); font-size:12px; margin:10px 0 6px"><b style="color:var(--text)">${b.distanceNote}</b></p>
    <ul class="bullet-list">
      ${b.facts.map(f=> `<li>${f}</li>`).join('')}
    </ul>
    <div class="sheet-actions">
      <button class="sheet-btn primary" data-action="focusBeyond">Fly to ${b.name}</button>
      <button class="sheet-btn" data-action="backSolar">Back to Solar System</button>
    </div>
  `;
  sheetScroll.querySelector('[data-action="focusBeyond"]')?.addEventListener('click', ()=> scene.focusBeyondObject(b.id));
  sheetScroll.querySelector('[data-action="backSolar"]')?.addEventListener('click', ()=> toggleBeyond(false));
}

function quizForPlanet(p: PlanetData): {q:string, opts:string[], answer:number, explain:string} | null {
  const bank: Record<string, {q:string, opts:string[], answer:number, explain:string}> = {
    sun: {q: "How much Solar System mass is the Sun?", opts:["99.86% — almost everything","About half","Only 10%"], answer:0, explain:"99.86% — everything else is dust."},
    mercury: {q:"How long is a year on Mercury vs a day?", opts:["Year (88d) shorter than day","Day shorter than year","Equal"], answer:0, explain:"Year 88d < solar day 176d — two sunrises/year!"},
    venus: {q:"Why is Venus hotter than Mercury?", opts:["Venus CO₂ traps heat","Bigger","Closer"], answer:0, explain:"Thick CO₂ greenhouse — 462°C!"},
    earth: {q:"What stabilizes Earth's tilt?", opts:["The Moon","Mars","Sun"], answer:0, explain:"Moon keeps tilt 23.5° — stable seasons."},
    mars: {q:"What’s Olympus Mons?", opts:["Tallest volcano in System","Largest ocean","Deepest canyon"], answer:0, explain:"22km high, 3× Everest!"},
    jupiter: {q:"What is the Great Red Spot?", opts:["Storm bigger than Earth, 350+ yrs","A moon","Ocean"], answer:0, explain:"Giant storm 1.3× Earth!"},
    saturn: {q:"What are Saturn's rings made of?", opts:["Mostly water ice","Solid metal","Gas"], answer:0, explain:"Countless water-ice pieces!"},
    uranus: {q:"Why is Uranus tipped?", opts:["Giant collision","Moons pulled","Born that way"], answer:0, explain:"98° sideways — hit by Earth-sized body."},
    neptune: {q:"How fast are Neptune's winds?", opts:["2,100 km/h","100 km/h","500 km/h"], answer:0, explain:"2,100 km/h — fastest!"},
    pluto: {q:"What is Tombaugh Regio?", opts:["Heart-shaped nitrogen glacier","Volcano","Crater"], answer:0, explain:"1,600km wide nitrogen heart!"},
  };
  return bank[p.id] ?? null;
}

function ensureEntered(){
  if(hasEntered) return;
  hasEntered=true;
  hero.classList.add('is-hidden');
  showToast('Engines on! Drag to look, click planet to board. Try Tour or Drag-orbits!');
}
function enterSolar(){ ensureEntered(); toggleBeyond(false); scene.clearFocus(); }
function enterBeyond(){ ensureEntered(); toggleBeyond(true); showToast('Warp complete — welcome to interstellar space!'); }
function toggleBeyond(on: boolean){
  if(on===scene.isBeyond) return;
  scene.toggleBeyond(on);
  if(on){
    beyondHud.classList.add('is-visible');
    btnBeyondTop.classList.add('is-active');
    btnRailBeyond.textContent='← Solar System';
    statFocus.textContent='Beyond — Interstellar Space';
  } else {
    beyondHud.classList.remove('is-visible');
    btnBeyondTop.classList.remove('is-active');
    btnRailBeyond.innerHTML='<span class="beyond-dot" style="width:10px;height:10px;border-radius:50%;background:#6EA8FF;box-shadow:0 0 8px #6EA8FF;display:inline-block;vertical-align:middle"></span> Go Beyond <small>Voyager’s view</small>';
    statFocus.textContent='Solar System';
  }
}

// Mini-map top-down canvas
function drawMiniMap(){
  if(!scene) return;
  const ctx = miniMapCanvas.getContext('2d')!;
  const w=120, h=120;
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle='#0A0E22'; ctx.fillRect(0,0,w,h);
  // sun center
  ctx.fillStyle='#FDB813'; ctx.beginPath(); ctx.arc(w/2,h/2,3,0,Math.PI*2); ctx.fill();
  // orbits and planets + dwarfs + asteroids
  const allBodies = [...PLANETS.filter(p=> p.id!=='sun'), ...DWARF_PLANETS, ...ASTEROIDS];
  for(const p of allBodies){
    const g = scene?.planetGroups.get(p.id);
    if(!g) continue;
    const r = Math.min(54, (g.userData.orbitRadius / 82) * 54);
    // orbit
    ctx.strokeStyle= (p as any).color || '#888'; ctx.globalAlpha= (DWARF_PLANETS.find(d=> d.id===p.id) ? 0.22 : ASTEROIDS.find(a=> a.id===p.id) ? 0.10 : 0.35); ctx.lineWidth= (ASTEROIDS.find(a=> a.id===p.id) ? 0.5 : 1); ctx.beginPath(); ctx.arc(w/2,h/2,r,0,Math.PI*2); ctx.stroke(); ctx.globalAlpha=1;
    // planet dot
    const ang = g.userData.curAngle ?? 0;
    const x = w/2 + Math.cos(ang)*r;
    const y = h/2 + Math.sin(ang)*r;
    ctx.fillStyle=(p as any).color || '#fff'; const dotR = (p.id==='jupiter'||p.id==='saturn'?2.2: DWARF_PLANETS.find(d=> d.id===p.id) ? 1.2 : ASTEROIDS.find(a=> a.id===p.id) ? 0.9 : 1.6);
    ctx.beginPath(); ctx.arc(x,y, dotR,0,Math.PI*2); ctx.fill();
    if(scene.focusTarget===p.id){
      ctx.strokeStyle='white'; ctx.lineWidth=1.5; ctx.beginPath(); ctx.arc(x,y,4,0,Math.PI*2); ctx.stroke();
    }
  }
  // spacecraft
  if(scene?.spacecraftManager){
    for(const [,entry] of scene.spacecraftManager.crafts){
      const pos = entry.mesh.position;
      // project to top-down (x,z) scaled
      const mx = w/2 + (pos.x/70)*54;
      const my = h/2 + (pos.z/70)*54;
      if(mx<0||mx>w||my<0||my>h) continue;
      ctx.fillStyle='#FFD700'; ctx.fillRect(mx-1,my-1,2,2);
    }
  }
}

function init(){
  let p=0;
  const iv=setInterval(()=>{
    p+= Math.random()*26+14;
    if(p>=100){ p=100; clearInterval(iv); loaderFill.style.width='100%'; setTimeout(()=> loader.classList.add('is-hidden'), 220); }
    else loaderFill.style.width=p+'%';
  }, 65);

  setTimeout(()=>{
    scene = new SpaceScene(canvas);
    scene.onPlanetClick = (id:string)=>{
      if(!hasEntered) ensureEntered();
      openSheet(id);
    };
    scene.onCraftClick = (id:string)=>{
      openSheet(id);
      showToast(`${id.toUpperCase()} — real NASA model from GitHub! Click Follow to track.`);
    };
    scene.onHover = (id:string|null)=>{
      if(id){
        const planet = PLANETS.find(p=> p.id===id);
        const beyond = BEYOND_OBJECTS.find(b=> b.id===id);
        const craft = ['iss','hubble','voyager','apollo','parker','mro'].includes(id);
        const name = craft ? id.toUpperCase()+' spacecraft' : planet ? planet.name : beyond ? beyond.name : id;
        (document.getElementById('bbHint') as HTMLElement).textContent = `${name} — click to inspect`;
      } else {
        (document.getElementById('bbHint') as HTMLElement).textContent = hasEntered ? `Tip: Click Sun/Saturn, drag orbits, try Tour, double-click to dock.` : `Hover planet and click — or press Explore Space.`;
      }
    };
    scene.onTextureLoaded = (count, list)=>{
      realBadge.style.display='inline-block';
      realBadge.textContent=`${count} real textures from GitHub`;
      showToast(`Loaded ${count} real planet textures from GitHub`);
      // also update about? 
    };
    scene.spherical.radius=58; scene.updateCameraPos();
    renderRail(); renderHeroPeek(); renderBeyondLegend();

    // controls
    const segs = document.querySelectorAll('.tseg');
    segs.forEach(s=>{
      s.addEventListener('click', ()=>{
        segs.forEach(x=> x.classList.remove('is-active'));
        s.classList.add('is-active');
        const sp = parseFloat((s as HTMLElement).dataset.speed!);
        scene.setTimeScale(sp);
        statTime.textContent = sp+'×';
      });
    });
    btnPause.addEventListener('click', ()=>{
      scene.setPaused(!scene.paused);
      btnPause.textContent = scene.paused ? '▶︎ Play' : '⏸︎ Pause';
      btnPause.style.background = scene.paused ? 'white' : '';
      btnPause.style.color = scene.paused ? '#0B1220' : '';
      showToast(scene.paused ? 'Paused' : 'Resumed');
    });
    chkOrbits.addEventListener('change', ()=> scene.setShowOrbits(chkOrbits.checked));
    chkLabels.addEventListener('change', ()=> scene.setShowLabels(chkLabels.checked));
    chkMotion.addEventListener('change', ()=>{
      scene.scene.fog = new THREE.FogExp2(chkMotion.checked ? 0x020510 : 0x040818, chkMotion.checked?0.0022:0.0012);
    });
    chkSpacecraft.addEventListener('change', ()=> scene.setShowSpacecraft(chkSpacecraft.checked));
    chkDrag.addEventListener('change', ()=> {
      scene.setEnableDrag(chkDrag.checked);
      showToast(chkDrag.checked ? 'Drag mode: grab a planet to move its orbit!' : 'Drag mode off');
    });

    btnExplore.addEventListener('click', enterSolar);
    btnHeroBeyond.addEventListener('click', enterBeyond);
    btnBeyondTop.addEventListener('click', ()=> toggleBeyond(!scene.isBeyond));
    btnRailBeyond.addEventListener('click', ()=> toggleBeyond(!scene.isBeyond));
    btnReturnSolar.addEventListener('click', ()=> toggleBeyond(false));
    btnResetView.addEventListener('click', ()=> { scene.clearFocus(); closeSheet(); showToast('View reset'); });
    btnCloseSheet.addEventListener('click', closeSheet);
    heroScroll.addEventListener('click', ()=> { ensureEntered(); });

    // new interactivity
    planetSearch.addEventListener('input', ()=> renderRail(planetSearch.value));
    btnTour.addEventListener('click', ()=>{
      if(tourActive){
        scene.stopTour(); tourActive=false; btnTour.textContent='Tour'; showToast('Tour stopped');
      } else {
        tourActive=true; btnTour.textContent='Stop Tour'; btnTour.style.background='white'; btnTour.style.color='#0B1220';
        scene.startTour((id)=> { openSheet(id); setActiveRail(id); });
        showToast('Tour started — visiting every planet');
      }
    });
    btnScaleKid.addEventListener('click', ()=> {
      scene.setScaleMode('kid');
      btnScaleKid.style.background='white'; btnScaleKid.style.color='#0B1220';
      btnScaleReal.style.background=''; btnScaleReal.style.color='';
      scaleHint.textContent='Kid Scale (visible) • Real scale would be invisible!';
      showToast('Kid Scale — exaggerated for learning');
    });
    btnScaleReal.addEventListener('click', ()=>{
      scene.setScaleMode('real');
      btnScaleReal.style.background='white'; btnScaleReal.style.color='#0B1220';
      btnScaleKid.style.background=''; btnScaleKid.style.color='';
      scaleHint.textContent='True Scale (real AU & diameters) — notice how tiny planets become!';
      showToast('True Scale — Earth 0.35, Jupiter 3.9× Earth, distances in AU');
    });
    btnResetOrbits.addEventListener('click', ()=> { scene.resetOrbits(); showToast('Orbits reset to kid scale'); });
    btnCompare.addEventListener('click', ()=>{
      compareMode=!compareMode;
      if(compareMode){
        // show overlay comparing selected vs Earth
        const overlay=document.createElement('div'); overlay.id='compareOverlay'; overlay.className='compare-strip';
        overlay.innerHTML=`<b>Earth vs Selected</b><div class="bar"><div class="fill" style="width:100%"></div></div><button class="tbtn small" onclick="this.parentElement.remove()">✕</button>`;
        document.body.appendChild(overlay);
        showToast('Compare: Earth 1× vs others — see Numbers tab for details');
        btnCompare.style.background='white'; btnCompare.style.color='#0B1220';
      } else {
        document.getElementById('compareOverlay')?.remove();
        btnCompare.style.background=''; btnCompare.style.color='';
      }
    });

    // mini-map click to jump
    miniMapCanvas.addEventListener('click', (e)=>{
      const rect=miniMapCanvas.getBoundingClientRect();
      const x=(e.clientX-rect.left)/rect.width*120 -60;
      const y=(e.clientY-rect.top)/rect.height*120 -60;
      // find closest planet to click
      let best: string| null=null, bestD=1e9;
      for(const p of PLANETS){
        if(p.id==='sun') continue;
        const g=scene.planetGroups.get(p.id); if(!g) continue;
        const r=Math.min(54, (g.userData.orbitRadius/70)*54);
        const ang=g.userData.curAngle; const px=Math.cos(ang)*r, py=Math.sin(ang)*r;
        const d=Math.hypot(px-x, py-y);
        if(d<bestD){ bestD=d; best=p.id; }
      }
      if(best && bestD<8){ scene.focusOnPlanet(best); openSheet(best); }
    });

    // easter egg: click Sun 5 times -> supernova
    let sunClicks=0;
    const origOnPlanetClick = scene.onPlanetClick;
    scene.onPlanetClick = (id:string)=>{
      if(id==='sun'){ sunClicks++; if(sunClicks===5){ triggerSupernova(); sunClicks=0; } }
      origOnPlanetClick(id);
    };

    function triggerSupernova(){
      showToast('SUPERNOVA! Sun expands…');
      scene.sun.scale.set(1.4,1.4,1.4);
      (scene.sun.material as any).emissiveIntensity=2.5;
      scene.scene.background=new THREE.Color(0xFF4500);
      setTimeout(()=>{
        scene.sun.scale.set(1,1,1); (scene.sun.material as any).emissiveIntensity=1.15;
        scene.scene.background=new THREE.Color(0x020510);
        showToast('...and collapses. That is how Betelgeuse will go!');
      }, 2200);
    }

    window.addEventListener('keydown', (e)=>{
      if(e.code==='Space'){ scene.setPaused(!scene.paused); btnPause.textContent = scene.paused ? '▶︎ Play' : '⏸︎ Pause'; e.preventDefault(); }
      if(e.key==='r' || e.key==='R'){ scene.clearFocus(); }
      if(e.key==='Escape'){ if(factsheet.classList.contains('is-open')) closeSheet(); else if(scene.isBeyond) toggleBeyond(false); }
    });

    btnAbout.addEventListener('click', ()=> aboutDialog.showModal());
    btnCloseAbout.addEventListener('click', ()=> aboutDialog.close());

    statTime.textContent='1×';

    // mini-map loop
    setInterval(drawMiniMap, 200);
    // initial show provenance toast
    if(manifest.textures.length) realBadge.style.display='inline-block', realBadge.textContent=`Fetching ${manifest.textures.length} textures + ${manifest.spacecraft.length} GLBs from GitHub…`;
    // expose for debug
    // @ts-ignore
    (window as any).scene = scene;
  }, 500);
}

init();
