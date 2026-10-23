import './style.css';
import { PLANETS, PlanetData } from './data/planets';
import { BEYOND_OBJECTS, BeyondObject } from './data/beyond';
import { SpaceScene } from './three/scene';

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
const leftRail = document.getElementById('leftRail')!;
const bottomBar = document.getElementById('bottomBar')!;
const factsheet = document.getElementById('factsheet')!;
const sheetScroll = document.getElementById('sheetScroll')!;
const btnCloseSheet = document.getElementById('btnCloseSheet')!;
const btnPause = document.getElementById('btnPause')!;
const chkOrbits = document.getElementById('chkOrbits') as HTMLInputElement;
const chkLabels = document.getElementById('chkLabels') as HTMLInputElement;
const chkMotion = document.getElementById('chkMotion') as HTMLInputElement;
const topbarStats = document.getElementById('topbarStats')!;
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

// State
let hasEntered = false;
let currentSheetId: string | null = null;
let activeTab: 'overview'|'numbers'|'moons'|'fun' = 'overview';
let quizState: Record<string, number> = {}; // planet id -> chosen index

let scene: SpaceScene;

// Helper: show toast
function showToast(msg: string, timeout=2200){
  toast.textContent = msg;
  toast.classList.add('is-visible');
  clearTimeout((toast as any)._t);
  (toast as any)._t = setTimeout(()=> toast.classList.remove('is-visible'), timeout);
}

// Build planet icon helpers (use unicode emoji fallback + colors)
const PLANET_EMOJI: Record<string, string> = {
  sun: '☀️',
  mercury: '☿',
  venus: '♀',
  earth: '🌍',
  mars: '♂',
  jupiter: '♃',
  saturn: '♄',
  uranus: '♅',
  neptune: '♆',
  pluto: '♇',
};

function planetEmoji(id: string){
  return PLANET_EMOJI[id] ?? '●';
}

// Render left rail
function renderRail(){
  railList.innerHTML='';
  for(const p of PLANETS){
    const btn=document.createElement('button');
    btn.className='rail-btn';
    btn.dataset.id=p.id;
    btn.innerHTML=`
      <span class="rail-dot" style="background:${p.color}; color:${p.color}"></span>
      <b>${p.name==='The Sun' ? 'Sun' : p.name}</b>
      <small>${p.type.split(' ')[0]}</small>
    `;
    btn.addEventListener('click',()=>{
      ensureEntered();
      // if in beyond and clicking solar planet, return first
      if(scene.isBeyond) toggleBeyond(false);
      scene.focusOnPlanet(p.id);
      openSheet(p.id);
      setActiveRail(p.id);
    });
    railList.appendChild(btn);
  }
}
function setActiveRail(id: string | null){
  railList.querySelectorAll('.rail-btn').forEach(b=>{
    const bid=(b as HTMLElement).dataset.id;
    b.classList.toggle('is-active', bid===id);
  });
  const p= PLANETS.find(x=> x.id===id);
  statFocus.textContent = p ? p.name : (scene?.isBeyond ? 'Beyond — Interstellar Space' : 'Solar System');
}

// hero peek grid
function renderHeroPeek(){
  heroPeek.innerHTML='';
  const picks = PLANETS.filter(p=> ['earth','mars','jupiter','saturn','neptune','sun','uranus','pluto'].includes(p.id)).slice(0,8);
  for(const p of picks){
    const el=document.createElement('button');
    el.className='peek-item';
    el.innerHTML=`<div class="peek-dot" style="background:${p.color}; color:${p.color}; ${p.id==='saturn' ? 'box-shadow:0 0 0 3px rgba(255,255,255,0.12), 0 0 12px '+p.color : ''} "></div><b>${p.name.replace('The ','')}</b><span>${p.subtitle}</span>`;
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

// beyond legend
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
  Object.entries(types).forEach(([k,v])=>{
    const el=document.createElement('span'); el.className='legend-item';
    el.innerHTML=`<i style="background:${v.color}; color:${v.color}"></i> ${v.label}`;
    beyondLegend.appendChild(el);
  });
}

// Sheet templating
function openSheet(id: string){
  const data = PLANETS.find(p=> p.id===id) as PlanetData | undefined;
  const beyond = BEYOND_OBJECTS.find(b=> b.id===id) as BeyondObject | undefined;
  if(data) renderPlanetSheet(data);
  else if(beyond) renderBeyondSheet(beyond);
  else return;
  currentSheetId = id;
  factsheet.classList.add('is-open');
  sheetScroll.scrollTop = 0;
}

function closeSheet(){
  factsheet.classList.remove('is-open');
  currentSheetId = null;
  setActiveRail(null);
}

function renderPlanetSheet(p: PlanetData){
  setActiveRail(p.id);
  // build comparisons
  const earthDiameter = 12742;
  const sizePct = Math.min(100, (p.diameterKm / 139820) * 100 * 1.1); // relative to Jupiter-ish for visual
  const earthPct = (earthDiameter / 139820)*100;

  const moonsHtml = p.moons.length ? p.moons.map(m=> `
    <div class="moon-card">
      <span style="font-size:20px">🌙</span>
      <div>
        <b>${m.name} <small style="color:var(--muted)">— ${m.diameterKm.toLocaleString()} km</small></b>
        <p>${m.fact} <br><small>Distance from ${p.name}: ${m.distanceKm.toLocaleString()} km • Discovered: ${m.discovered}</small></p>
      </div>
    </div>
  `).join('') : `<p style="color:var(--muted); font-size:13px">No moons — ${p.name} travels alone.</p>`;

  // quiz: simple question per planet
  const quizQ = quizForPlanet(p);
  const quizHtml = quizQ ? `
    <div class="quiz-box" id="quizBox">
      <h4>🧠 Quick quiz</h4>
      <p>${quizQ.q}</p>
      ${quizQ.opts.map((o,i)=> `<button class="quiz-opt" data-qi="${i}">${o}</button>`).join('')}
      <div class="quiz-feedback" id="quizFeedback"></div>
    </div>
  ` : '';

  // tab content
  const overviewContent = `
    <p style="color:var(--muted); font-size:13px; line-height:1.6; margin:10px 0 10px">
      ${p.type} • ${p.classification} • Discovered: ${p.discovered}
      <br><span style="color:var(--text)">${p.compareEarth}</span>
    </p>
    <div class="kid-callout"><i>💡</i> <span><b>For kids:</b> ${p.kidWow}</span></div>
    <div style="margin-top:12px">
      <h4 style="margin:0 0 6px; font:700 12px 'Space Grotesk'; letter-spacing:0.08em; text-transform:uppercase; color:var(--muted)">What makes it special?</h4>
      <ul class="bullet-list">
        ${p.funFacts.slice(0,3).map(f=> `<li>${f}</li>`).join('')}
      </ul>
    </div>
    ${quizHtml}
    <div class="sheet-actions">
      <button class="sheet-btn primary" data-action="focus">🎯 Fly to ${p.name.replace('The ','')}</button>
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
      <div class="fact"><h4>Tilt</h4><p><b>${p.tilt}</b><br><small>Axial tilt creates seasons (where atmosphere exists)</small></p></div>
    </div>
    <div style="margin-top:12px; background:rgba(255,255,255,0.06); border:1px solid var(--line); border-radius:12px; padding:10px">
      <h4 style="margin:0 0 4px; font:700 11px 'Space Grotesk'; letter-spacing:0.10em; text-transform:uppercase; color:var(--muted)">Composition</h4>
      <p style="margin:0; font-size:12px; color:var(--muted)">${p.composition.join(' • ')}</p>
      <h4 style="margin:10px 0 4px; font:700 11px 'Space Grotesk'; letter-spacing:0.10em; text-transform:uppercase; color:var(--muted)">Atmosphere</h4>
      <p style="margin:0; font-size:12px; color:var(--muted)">${p.atmosphere.join(' • ')}</p>
    </div>
  `;
  const moonsContent = `
    <p style="color:var(--muted); font-size:13px; margin:0 0 8px">${p.name} has <b style="color:var(--text)">${p.moonsCount} moon${p.moonsCount===1?'':'s'}</b> confirmed. ${p.id==='earth'?'Our Moon stabilizes seasons and tides.': p.id==='jupiter'?'Four are Galilean giants visible with binoculars!': p.id==='saturn'?'146 and counting — more than any planet.':''}</p>
    ${moonsHtml}
    ${p.hasRings? `<div style="margin-top:10px; background: rgba(255,210,100,0.10); border:1px solid rgba(255,210,100,0.22); border-radius:12px; padding:10px"><b>💍 Rings:</b> <span style="color:var(--muted); font-size:12px">${p.id==='saturn'?'Huge icy rings — wide enough for 23 Earths, thinner than a house!': p.id==='jupiter'?'Faint dusty rings found 1979 — dark and hard to see.': p.id==='uranus'?'Dark narrow rings, discovered 1977 by star occultation.': 'Faint arcs that shouldn’t be stable — still mysterious.'}</span></div>` : ''}
  `;
  const funContent = `
    <ul class="bullet-list">
      ${p.funFacts.map(f=> `<li>${f}</li>`).join('')}
    </ul>
    <div class="kid-callout" style="margin-top:12px"><i>🚀</i> <span><b>Try this:</b> Ask an adult to help you find ${p.name} in the night sky — ${p.id==='earth'?'look down! You’re standing on it.': p.id==='mercury'?'look low at sunset/sunrise — it’s tricky!': p.id==='venus'?'look at sunset or sunrise — brightest “star”.': p.id==='mars'?'look for a reddish star that doesn’t twinkle as much.': p.id==='jupiter'?'look for the brightest star-like object — that’s Jupiter. Binoculars show 4 moons!': p.id==='saturn'?'find it near Jupiter often — golden dot. Telescope shows rings!': p.id==='uranus'?'needs binoculars — pale blue-green dot.': p.id==='neptune'?'needs telescope — deep blue dot.': p.id==='pluto'?'needs big telescope — Pluto is super dim (mag 14).': 'look with a star map app!'}</span></div>
  `;

  let tabContent = '';
  if(activeTab==='overview') tabContent = overviewContent;
  if(activeTab==='numbers') tabContent = numbersContent;
  if(activeTab==='moons') tabContent = moonsContent;
  if(activeTab==='fun') tabContent = funContent;

  // discovery info snippet
  const discoveryInfo = p.discoveredBy ? `<p style="color:var(--muted); font-size:11px; margin-top:10px">Discovery: ${p.discovered} • ${p.discoveredBy}</p>` : '';

  sheetScroll.innerHTML = `
    <div class="sheet-hero" style="--planet-color: ${p.color}">
      <div class="sheet-planet-icon" style="background: radial-gradient(circle at 30% 30%, ${p.color}, ${p.accent} 68%); color:${p.color}">${planetEmoji(p.id)}</div>
      <div>
        <h2 class="sheet-title">${p.name}</h2>
        <p class="sheet-subtitle">${p.subtitle}</p>
        <div class="sheet-badges">
          <span class="badge accent">${p.classification}</span>
          <span class="badge">${p.type}</span>
          ${p.hasRings? `<span class="badge" style="border-color:rgba(255,210,100,0.35); color:#FFD166">Has rings</span>`:''}
          <span class="badge">${p.moonsCount} moon${p.moonsCount===1?'':'s'}</span>
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
  `;

  // wire tabs
  sheetScroll.querySelectorAll('.sheet-tab').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      activeTab = (btn as HTMLElement).dataset.tab as any;
      renderPlanetSheet(p);
    });
  });

  // wire quiz
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
        feedback.textContent = isCorrect ? `✅ ${quizQ!.explain}` : `❌ Not quite. ${quizQ!.explain}`;
        if(isCorrect){
          showToast(`🌟 Correct! You know ${p.name} well!`);
        }
      });
    });
  }

  // wire sheet actions
  const focusBtn = sheetScroll.querySelector('[data-action="focus"]') as HTMLButtonElement | null;
  if(focusBtn) focusBtn.addEventListener('click', ()=> scene.focusOnPlanet(p.id));
  const compBtn = sheetScroll.querySelector('[data-action="compare"]') as HTMLButtonElement | null;
  if(compBtn) compBtn.addEventListener('click', ()=>{
    activeTab='numbers'; renderPlanetSheet(p);
    sheetScroll.querySelector('[data-panel]')?.scrollIntoView({behavior:'smooth'});
  });
}

function renderBeyondSheet(b: BeyondObject){
  setActiveRail(null);
  const typeBadge = `<span class="badge accent">${b.type}</span> <span class="badge">${b.distanceLy}</span>`;
  sheetScroll.innerHTML = `
    <div class="sheet-hero">
      <div class="sheet-planet-icon" style="background: radial-gradient(circle at 30% 30%, ${b.color}, #0B1220 70%); color:${b.color}">◈</div>
      <div>
        <h2 class="sheet-title">${b.name}</h2>
        <p class="sheet-subtitle">${b.subtitle} ${b.constellation? `• ${b.constellation}`:''}</p>
        <div class="sheet-badges">${typeBadge}</div>
      </div>
    </div>
    <div class="kid-callout"><i>✦</i> <span><b>Kid wow:</b> ${b.kidWow}</span></div>
    <p style="color:var(--muted); font-size:12px; margin:10px 0 6px"><b style="color:var(--text)">${b.distanceNote}</b></p>
    <ul class="bullet-list">
      ${b.facts.map(f=> `<li>${f}</li>`).join('')}
    </ul>
    <div class="sheet-actions">
      <button class="sheet-btn primary" data-action="focusBeyond">🎯 Fly to ${b.name}</button>
      <button class="sheet-btn" data-action="backSolar">← Solar System</button>
    </div>
    <p style="color:var(--muted); font-size:11px; margin-top:10px">Tip: Distances in Beyond are compressed like a map — real space is vastly emptier.</p>
  `;
  sheetScroll.querySelector('[data-action="focusBeyond"]')?.addEventListener('click', ()=> scene.focusBeyondObject(b.id));
  sheetScroll.querySelector('[data-action="backSolar"]')?.addEventListener('click', ()=> toggleBeyond(false));
}

function quizForPlanet(p: PlanetData): {q:string, opts:string[], answer:number, explain:string} | null {
  const bank: Record<string, {q:string, opts:string[], answer:number, explain:string}> = {
    sun: {q: "How much of the Solar System's mass is the Sun?", opts:["99.86% — almost everything","About half","Only 10%"], answer:0, explain:"The Sun is 99.86% of total mass — everything else is dust by comparison."},
    mercury: {q:"How long is a year on Mercury vs a day?", opts:["Year (88d) shorter than day","Day shorter than year","They are equal"], answer:0, explain:"A year (88d) is shorter than a solar day (176d) — two sunrises per year!"},
    venus: {q:"Why is Venus hotter than Mercury even though Mercury is closer?", opts:["Venus CO₂ traps heat like a blanket","Venus is bigger","Venus is closer"], answer:0, explain:"Venus thick CO₂ creates runaway greenhouse — 462°C everywhere!"},
    earth: {q:"What stabilizes Earth's tilt and seasons?", opts:["The Moon","Mars","The Sun"], answer:0, explain:"The Moon keeps tilt steady at 23.5° — without it, seasons would swing wildly."},
    mars: {q:"What’s Olympus Mons on Mars?", opts:["Tallest volcano in Solar System","Largest ocean","Deepest canyon"], answer:0, explain:"Olympus Mons is 22km high, 3× Everest, as wide as France!"},
    jupiter: {q:"What is the Great Red Spot?", opts:["Storm bigger than Earth, 350+ years","A moon","An ocean"], answer:0, explain:"Great Red Spot is a giant storm 1.3× Earth, raging for centuries!"},
    saturn: {q:"What are Saturn's rings made of?", opts:["Mostly water ice chunks","Solid metal","Gas clouds"], answer:0, explain:"Rings are countless water-ice pieces, thin as a house, wide enough for 23 Earths!"},
    uranus: {q:"Why is Uranus tipped on its side?", opts:["Giant collision long ago","Its moons pulled it","It was born that way"], answer:0, explain:"Uranus rolls 98° sideways — likely hit by Earth-sized object early on."},
    neptune: {q:"How fast are Neptune's winds?", opts:["2,100 km/h — faster than sound","100 km/h","500 km/h"], answer:0, explain:"Neptune has fastest winds: 2,100 km/h — 6× Earth hurricane!"},
    pluto: {q:"What is Tombaugh Regio on Pluto?", opts:["Heart-shaped nitrogen glacier","A volcano","A crater"], answer:0, explain:"Pluto's heart (Tombaugh Regio) is 1,600km wide nitrogen ice plain!"},
  };
  return bank[p.id] ?? null;
}

// Enter flow
function ensureEntered(){
  if(hasEntered) return;
  hasEntered=true;
  hero.classList.add('is-hidden');
  // enable controls visible via CSS sibling
  showToast('🚀 Engines on! Drag to look around, click a planet to board.');
}

function enterSolar(){
  ensureEntered();
  toggleBeyond(false);
  // reset camera a bit
  scene.clearFocus();
}
function enterBeyond(){
  ensureEntered();
  toggleBeyond(true);
  showToast('◈ Warp complete — welcome to interstellar space! Click a star to inspect.');
}

// Beyond toggle
function toggleBeyond(on: boolean){
  if(on===scene.isBeyond) return;
  scene.toggleBeyond(on);
  // UI updates
  if(on){
    beyondHud.classList.add('is-visible');
    btnBeyondTop.classList.add('is-active');
    btnRailBeyond.textContent='← Solar System';
    (btnRailBeyond as any)._beyond=true;
    statFocus.textContent='Beyond — Interstellar Space';
    // close solar sheet if open solar? keep but allow beyond clicks to override
  } else {
    beyondHud.classList.remove('is-visible');
    btnBeyondTop.classList.remove('is-active');
    btnRailBeyond.innerHTML='<span>◈</span> Go Beyond <small>Voyager’s view</small>';
    (btnRailBeyond as any)._beyond=false;
    statFocus.textContent='Solar System';
  }
}

// Init loading simulation + scene
function init(){
  // fake loader progress (real textures are procedural instant, but we simulate for polish)
  let p=0;
  const iv=setInterval(()=>{
    p+= Math.random()*18+6;
    if(p>=100){ p=100; clearInterval(iv); loaderFill.style.width='100%'; setTimeout(()=> loader.classList.add('is-hidden'), 400); }
    else loaderFill.style.width=p+'%';
  }, 120);

  // init scene after slight delay to let loader show
  setTimeout(()=>{
    scene = new SpaceScene(canvas);
    // wire callbacks
    scene.onPlanetClick = (id:string)=>{
      if(!hasEntered) ensureEntered();
      openSheet(id);
    };
    scene.onHover = (id:string|null)=>{
      if(id){
        const planet = PLANETS.find(p=> p.id===id);
        const beyond = BEYOND_OBJECTS.find(b=> b.id===id);
        const name = planet ? planet.name : beyond ? beyond.name : id;
        bottomBar.querySelector('#bbHint')!.textContent = `◉ ${name} — click to inspect`;
      } else {
        (document.getElementById('bbHint') as HTMLElement).textContent = hasEntered ? `☄︎ Tip: Click the Sun for its secrets, or Saturn for its 146 moons. Press O to hide orbits, Space to pause.` : `Hover a planet and click — or press Explore Space to start.`;
      }
    };
    // initial camera
    scene.spherical.radius=58;
    scene.updateCameraPos();

    // render UI
    renderRail();
    renderHeroPeek();
    renderBeyondLegend();

    // time controls wire
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
      showToast(scene.paused ? '⏸︎ Paused — press Space or click Play' : '▶︎ Resumed');
    });
    chkOrbits.addEventListener('change', ()=> scene.setShowOrbits(chkOrbits.checked));
    chkLabels.addEventListener('change', ()=> scene.setShowLabels(chkLabels.checked));
    chkMotion.addEventListener('change', ()=>{
      // motion blur fake via fog density
      scene.scene.fog = new THREE.FogExp2(chkMotion.checked ? 0x020510 : 0x040818, chkMotion.checked?0.0022:0.0012);
    });

    // buttons
    btnExplore.addEventListener('click', enterSolar);
    btnHeroBeyond.addEventListener('click', enterBeyond);
    btnBeyondTop.addEventListener('click', ()=> toggleBeyond(!scene.isBeyond));
    btnRailBeyond.addEventListener('click', ()=> toggleBeyond(!scene.isBeyond));
    btnReturnSolar.addEventListener('click', ()=> toggleBeyond(false));
    btnResetView.addEventListener('click', ()=> { scene.clearFocus(); closeSheet(); showToast('↺ View reset'); });
    btnCloseSheet.addEventListener('click', closeSheet);
    heroScroll.addEventListener('click', ()=> { ensureEntered(); showToast('Drag to look, scroll to zoom, click planets!'); });

    // keyboard space = pause
    window.addEventListener('keydown', (e)=>{
      if(e.code==='Space'){ scene.setPaused(!scene.paused); btnPause.textContent = scene.paused ? '▶︎ Play' : '⏸︎ Pause'; e.preventDefault(); }
      if(e.key==='r' || e.key==='R'){ scene.clearFocus(); }
      if(e.key==='Escape'){ if(factsheet.classList.contains('is-open')) closeSheet(); else if(scene.isBeyond) toggleBeyond(false); }
    });

    // About dialog
    btnAbout.addEventListener('click', ()=> aboutDialog.showModal());
    btnCloseAbout.addEventListener('click', ()=> aboutDialog.close());

    // click on factsheet close when clicking outside? handle via button only

    // initial hint
    statTime.textContent='1×';
  }, 500);
}

import * as THREE from 'three';

// start
init();
