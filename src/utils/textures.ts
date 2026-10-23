// Procedural texture generation — no external images, pure Canvas API
export function createCanvasTexture(draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void, w = 1024, h = 512): HTMLCanvasElement {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d')!;
  draw(ctx, w, h);
  return c;
}

import * as THREE from 'three';

function canvasToTexture(canvas: HTMLCanvasElement): THREE.CanvasTexture {
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}

// Helpers
function noise(ctx: CanvasRenderingContext2D, w: number, h: number, scale: number, amount: number, base: string, tint: string) {
  ctx.fillStyle = base;
  ctx.fillRect(0,0,w,h);
  // simple pseudo noise via random rects
  for (let i=0;i< amount; i++) {
    const x = Math.random()*w;
    const y = Math.random()*h;
    const r = Math.random()*scale + 1;
    const a = Math.random()*0.4+0.1;
    ctx.fillStyle = tint;
    ctx.globalAlpha = a;
    ctx.beginPath();
    ctx.ellipse(x,y,r,r*0.7, Math.random()*Math.PI,0,Math.PI*2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function bandedJupiter(ctx: CanvasRenderingContext2D, w:number,h:number){
  const grad = ctx.createLinearGradient(0,0,0,h);
  grad.addColorStop(0, '#E8DCC3');
  grad.addColorStop(0.18, '#C19A6B');
  grad.addColorStop(0.28, '#FAF7E8');
  grad.addColorStop(0.42, '#D4B896');
  grad.addColorStop(0.55, '#8B7355');
  grad.addColorStop(0.68, '#E6D5B8');
  grad.addColorStop(0.78, '#A67C52');
  grad.addColorStop(1, '#E7D8B8');
  ctx.fillStyle = grad;
  ctx.fillRect(0,0,w,h);
  // add turbulence
  for(let i=0;i<1800;i++){
    const x=Math.random()*w, y=Math.random()*h, r=Math.random()*7+2;
    ctx.fillStyle = Math.random()>0.5 ? 'rgba(139,115,80,0.18)' : 'rgba(255,255,255,0.14)';
    ctx.beginPath(); ctx.ellipse(x,y,r, r*0.5, 0,0,Math.PI*2); ctx.fill();
    // wavy streaks
    if (i%12===0){
      ctx.strokeStyle = 'rgba(90,70,50,0.12)';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, y); ctx.bezierCurveTo(w*0.3, y+ (Math.random()-0.5)*6, w*0.6, y+ (Math.random()-0.5)*6, w, y); ctx.stroke();
    }
  }
  // Great Red Spot
  ctx.fillStyle = 'rgba(180, 60, 30, 0.85)';
  ctx.beginPath(); ctx.ellipse(w*0.28, h*0.42, 48, 28, -0.15, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = 'rgba(220,90,45,0.5)'; ctx.beginPath(); ctx.ellipse(w*0.28, h*0.42, 36, 18, -0.15, 0, Math.PI*2); ctx.fill();
  // white ovals
  for(let i=0;i<5;i++){
    ctx.fillStyle = 'rgba(255,255,255,0.55)';
    ctx.beginPath(); ctx.ellipse(w*(0.15+Math.random()*0.6), h*(0.25+Math.random()*0.4), 16, 10, 0,0, Math.PI*2); ctx.fill();
  }
}

function earthDraw(ctx:CanvasRenderingContext2D,w:number,h:number){
  // ocean base
  const g = ctx.createLinearGradient(0,0,0,h);
  g.addColorStop(0, '#1a4d8f');
  g.addColorStop(0.3, '#2E86C1');
  g.addColorStop(0.6, '#3AA0E0');
  g.addColorStop(1, '#1a4d8f');
  ctx.fillStyle=g; ctx.fillRect(0,0,w,h);
  // continents - rough shapes
  ctx.fillStyle = '#2E8B57';
  const continents = [
    // Africa/Europe-ish
    () => { ctx.beginPath(); ctx.moveTo(w*0.52, h*0.25); ctx.bezierCurveTo(w*0.60,h*0.22,w*0.62,h*0.55,w*0.56,h*0.70); ctx.bezierCurveTo(w*0.50,h*0.72,w*0.48,h*0.50,w*0.52,h*0.25); ctx.fill(); ctx.fillStyle='#3CB371'; ctx.beginPath(); ctx.ellipse(w*0.54,h*0.42, w*0.04, h*0.12,0,0,Math.PI*2); ctx.fill(); },
    // Americas
    () => { ctx.fillStyle='#228B22'; ctx.beginPath(); ctx.moveTo(w*0.18,h*0.15); ctx.bezierCurveTo(w*0.28,h*0.12,w*0.30,h*0.40,w*0.22,h*0.68); ctx.bezierCurveTo(w*0.18,h*0.52,w*0.15,h*0.30,w*0.18,h*0.15); ctx.fill(); ctx.fillStyle='#32CD32'; ctx.beginPath(); ctx.moveTo(w*.10,h*.78); ctx.ellipse(w*0.12, h*0.82, w*0.05, h*0.06,0,0,Math.PI*2); ctx.fill(); },
    // Asia/Australia
    () => { ctx.fillStyle='#2E8B57'; ctx.beginPath(); ctx.moveTo(w*0.68,h*0.20); ctx.bezierCurveTo(w*0.85,h*0.18,w*0.88,h*0.45,w*0.78,h*0.50); ctx.bezierCurveTo(w*0.70,h*0.42,w*0.66,h*0.28,w*0.68,h*0.20); ctx.fill(); ctx.fillStyle='#D2B48C'; ctx.beginPath(); ctx.ellipse(w*0.82,h*0.68,w*0.06,h*0.05,0,0,Math.PI*2); ctx.fill(); },
  ];
  continents.forEach(f=> { ctx.fillStyle = '#2E8B57'; f(); });
  // ice caps
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  ctx.fillRect(0,0,w,h*0.08); ctx.fillRect(0,h*0.92,w,h*0.08);
  // subtle clouds will be separate layer, but add slight shading
  for(let i=0;i<900;i++){
    ctx.fillStyle = `rgba(255,255,255,${Math.random()*0.15+0.05})`;
    ctx.beginPath(); ctx.arc(Math.random()*w, Math.random()*h, Math.random()*5+2,0,Math.PI*2); ctx.fill();
  }
}

function marsDraw(ctx:CanvasRenderingContext2D,w:number,h:number){
  ctx.fillStyle='#8B4513'; ctx.fillRect(0,0,w,h);
  // base rust variations
  for(let i=0;i<2000;i++){
    const c = Math.random()>0.5? '#A0522D':'#CD5C2D';
    ctx.fillStyle = c; ctx.globalAlpha = 0.18;
    ctx.beginPath(); ctx.arc(Math.random()*w, Math.random()*h, Math.random()*10+3,0,Math.PI*2); ctx.fill();
  }
  ctx.globalAlpha=1;
  // dark regions (Syrthis Major etc)
  ctx.fillStyle='rgba(60,20,10,0.22)';
  ctx.beginPath(); ctx.ellipse(w*0.40,h*0.40,w*0.18,h*0.20, -0.3,0,Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(w*0.70,h*0.55,w*0.12,h*0.18,0.2,0,Math.PI*2); ctx.fill();
  // polar ice
  ctx.fillStyle='rgba(255,255,255,0.85)'; ctx.fillRect(0,0,w,h*0.07); ctx.fillStyle='rgba(230,240,255,0.5)'; ctx.fillRect(0,h*0.93,w,h*0.07);
  // canyons
  ctx.strokeStyle='rgba(40,15,5,0.3)'; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(w*0.35,h*0.45); ctx.lineTo(w*0.62,h*0.48); ctx.stroke();
}

export function buildPlanetTextures(): Record<string, { map: THREE.Texture, bumpMap?: THREE.Texture, specMap?: THREE.Texture, clouds?: THREE.Texture }> {
  const out: Record<string, any> = {};

  // SUN
  {
    const c = createCanvasTexture((ctx,w,h)=>{
      const g=ctx.createRadialGradient(w/2,h/2,0,w/2,h/2,w/2.2);
      g.addColorStop(0,'#FFF8A0'); g.addColorStop(0.25,'#FFD24D'); g.addColorStop(0.6,'#FF8C00'); g.addColorStop(1,'#E25800');
      ctx.fillStyle=g; ctx.fillRect(0,0,w,h);
      for(let i=0;i<1500;i++){
        ctx.fillStyle=`rgba(255,${200+Math.random()*55}, ${50+Math.random()*80}, ${0.12+Math.random()*0.2})`;
        ctx.beginPath(); ctx.arc(Math.random()*w, Math.random()*h, Math.random()*5+1,0,Math.PI*2); ctx.fill();
      }
      // granulation
      for(let i=0;i<800;i++){ ctx.fillStyle='rgba(255,150,0,0.15)'; ctx.fillRect(Math.random()*w, Math.random()*h, 2,2); }
    }, 1024,512);
    out['sun']={ map: canvasToTexture(c) };
  }
  // MERCURY
  {
    const c = createCanvasTexture((ctx,w,h)=>{
      ctx.fillStyle='#9A9A9A'; ctx.fillRect(0,0,w,h);
      for(let i=0;i<2500;i++){
        const shade = Math.random()>0.5? '#7A7A7A':'#B8B8B8';
        ctx.fillStyle=shade; ctx.globalAlpha=0.15+Math.random()*0.15;
        ctx.beginPath(); ctx.arc(Math.random()*w, Math.random()*h, Math.random()*12+2,0,Math.PI*2); ctx.fill();
        if (Math.random()>0.98){ // crater
          ctx.strokeStyle='rgba(50,50,50,0.3)'; ctx.lineWidth=1.5; ctx.beginPath(); ctx.arc(Math.random()*w, Math.random()*h, Math.random()*18+6,0,Math.PI*2); ctx.stroke();
          ctx.fillStyle='rgba(40,40,40,0.18)'; ctx.beginPath(); ctx.arc(Math.random()*w, Math.random()*h, Math.random()*8+3,0,Math.PI*2); ctx.fill();
        }
      } ctx.globalAlpha=1;
    });
    out['mercury']={ map: canvasToTexture(c) };
  }
  // VENUS
  {
    const c = createCanvasTexture((ctx,w,h)=>{
      const g=ctx.createLinearGradient(0,0,0,h);
      g.addColorStop(0,'#E9D5A8'); g.addColorStop(0.5,'#D4B27A'); g.addColorStop(1,'#C7A36A');
      ctx.fillStyle=g; ctx.fillRect(0,0,w,h);
      for(let i=0;i<1500;i++){
        ctx.fillStyle=`rgba(255,255,255,${0.08+Math.random()*0.12})`;
        ctx.beginPath(); ctx.ellipse(Math.random()*w, Math.random()*h, Math.random()*60+10, Math.random()*10+4, Math.random()*0.3,0,Math.PI*2); ctx.fill();
      }
      // swirls
      for(let i=0;i<60;i++){
        ctx.strokeStyle='rgba(180,150,100,0.18)'; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(0, Math.random()*h); ctx.bezierCurveTo(w*0.3, Math.random()*h, w*0.6, Math.random()*h, w, Math.random()*h); ctx.stroke();
      }
    });
    out['venus']={ map: canvasToTexture(c) };
  }
  // EARTH
  {
    const c = createCanvasTexture(earthDraw, 2048,1024);
    const clouds = createCanvasTexture((ctx,w,h)=>{
      ctx.clearRect(0,0,w,h);
      for(let i=0;i<600;i++){
        ctx.fillStyle=`rgba(255,255,255,${0.18+Math.random()*0.35})`;
        const x=Math.random()*w, y=Math.random()*h;
        ctx.beginPath(); ctx.ellipse(x,y, Math.random()*28+12, Math.random()*14+6, Math.random()*Math.PI,0,Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(x+6,y, Math.random()*18+8, Math.random()*10+4,0,0,Math.PI*2); ctx.fill();
      }
    }, 1024,512);
    out['earth']={ map: canvasToTexture(c), clouds: canvasToTexture(clouds) };
  }
  // MARS
  {
    const c = createCanvasTexture(marsDraw, 1024,512);
    out['mars']={ map: canvasToTexture(c) };
  }
  // JUPITER
  {
    const c = createCanvasTexture(bandedJupiter, 2048,1024);
    out['jupiter']={ map: canvasToTexture(c) };
  }
  // SATURN
  {
    const c = createCanvasTexture((ctx,w,h)=>{
      const g=ctx.createLinearGradient(0,0,0,h);
      g.addColorStop(0,'#F5E6B8'); g.addColorStop(0.2,'#E8D5A0'); g.addColorStop(0.4,'#D8C99A'); g.addColorStop(0.6,'#E9D8B0'); g.addColorStop(0.8,'#D4C18E'); g.addColorStop(1,'#EFE0B0');
      ctx.fillStyle=g; ctx.fillRect(0,0,w,h);
      for(let i=0;i<1200;i++){
        ctx.fillStyle='rgba(140,120,90,0.12)'; ctx.fillRect(0, Math.random()*h, w, Math.random()*3+1);
      }
      // shadow of rings slight
      ctx.fillStyle='rgba(0,0,0,0.12)'; ctx.beginPath(); ctx.ellipse(w*0.5, h*0.52, w*0.45, h*0.02,0,0,Math.PI*2); ctx.fill();
    },1024,512);
    out['saturn']={ map: canvasToTexture(c) };
  }
  // URANUS
  {
    const c = createCanvasTexture((ctx,w,h)=>{
      const g=ctx.createLinearGradient(0,0,0,h);
      g.addColorStop(0,'#8AD9FF'); g.addColorStop(0.5,'#43B0F1'); g.addColorStop(1,'#2A8AC0');
      ctx.fillStyle=g; ctx.fillRect(0,0,w,h);
      for(let i=0;i<800;i++){
        ctx.fillStyle=`rgba(255,255,255,${0.07+Math.random()*0.08})`;
        ctx.beginPath(); ctx.ellipse(Math.random()*w, Math.random()*h, Math.random()*40+8, Math.random()*4+2,0,0,Math.PI*2); ctx.fill();
      }
    },1024,512);
    out['uranus']={ map: canvasToTexture(c) };
  }
  // NEPTUNE
  {
    const c = createCanvasTexture((ctx,w,h)=>{
      const g=ctx.createLinearGradient(0,0,0,h);
      g.addColorStop(0,'#2E68F7'); g.addColorStop(0.5,'#1A3D9C'); g.addColorStop(1,'#2E68F7');
      ctx.fillStyle=g; ctx.fillRect(0,0,w,h);
      for(let i=0;i<1000;i++){
        ctx.fillStyle='rgba(255,255,255,0.10)'; ctx.beginPath(); ctx.ellipse(Math.random()*w, Math.random()*h, Math.random()*30+10, Math.random()*6+2,0,0,Math.PI*2); ctx.fill();
      }
      // Great Dark Spot-ish
      ctx.fillStyle='rgba(0,0,60,0.45)'; ctx.beginPath(); ctx.ellipse(w*0.35,h*0.45,28,18,0.2,0,Math.PI*2); ctx.fill();
    },1024,512);
    out['neptune']={ map: canvasToTexture(c) };
  }
  // PLUTO
  {
    const c = createCanvasTexture((ctx,w,h)=>{
      ctx.fillStyle='#CDBAAA'; ctx.fillRect(0,0,w,h);
      // heart (Tombaugh Regio) approx
      ctx.fillStyle='rgba(255,240,220,0.95)';
      ctx.beginPath();
      // heart shape
      const hx=w*0.32, hy=h*0.42;
      ctx.moveTo(hx, hy+20);
      ctx.bezierCurveTo(hx-40, hy-10, hx-80, hy+10, hx, hy+45);
      ctx.bezierCurveTo(hx+80, hy+10, hx+40, hy-10, hx, hy+20);
      ctx.fill();
      for(let i=0;i<800;i++){
        ctx.fillStyle=`rgba(120,90,70,${0.10+Math.random()*0.15})`;
        ctx.beginPath(); ctx.arc(Math.random()*w, Math.random()*h, Math.random()*4+1,0,Math.PI*2); ctx.fill();
      }
      ctx.fillStyle='rgba(60,40,30,0.18)'; ctx.beginPath(); ctx.ellipse(w*0.65,h*0.65,w*0.14,h*0.18,0,0,Math.PI*2); ctx.fill();
    },1024,512);
    out['pluto']={ map: canvasToTexture(c) };
  }
  // MOON
  {
    const c = createCanvasTexture((ctx,w,h)=>{
      ctx.fillStyle='#A0A0A0'; ctx.fillRect(0,0,w,h);
      for(let i=0;i<1800;i++){
        ctx.fillStyle = Math.random()>0.5?'#7D7D7D':'#BABABA'; ctx.globalAlpha=0.18;
        ctx.beginPath(); ctx.arc(Math.random()*w, Math.random()*h, Math.random()*8+2,0,Math.PI*2); ctx.fill();
      }
      ctx.globalAlpha=1;
      for(let i=0;i<40;i++){
        const x=Math.random()*w, y=Math.random()*h, r=Math.random()*14+5;
        ctx.strokeStyle='rgba(50,50,50,0.25)'; ctx.lineWidth=1; ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.stroke();
      }
      // maria
      ctx.fillStyle='rgba(70,70,70,0.22)'; ctx.beginPath(); ctx.ellipse(w*0.45,h*0.40,w*0.12,h*0.10,0,0,Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(w*0.60,h*0.55,w*0.08,h*0.08,0,0,Math.PI*2); ctx.fill();
    },512,512);
    out['moon']={ map: canvasToTexture(c) };
  }

  return out;
}

export function createStarfieldTexture(): THREE.CanvasTexture {
  const c = createCanvasTexture((ctx,w,h)=>{
    ctx.fillStyle='#020510'; ctx.fillRect(0,0,w,h);
    for(let i=0;i<600;i++){
      const x=Math.random()*w, y=Math.random()*h, r=Math.random()*0.8+0.2;
      const col = Math.random()>0.85? (Math.random()>0.5?'#8AB4FF':'#FFD580') : '#FFFFFF';
      ctx.fillStyle=col; ctx.globalAlpha= Math.random()*0.6+0.4; ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fill();
    }
    ctx.globalAlpha=1;
  }, 1024,512);
  return canvasToTexture(c);
}

export function createSaturnRingTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas'); c.width=1024; c.height=64;
  const ctx=c.getContext('2d')!;
  // transparent
  ctx.clearRect(0,0,c.width,c.height);
  const bands = [
    {a:0.02,b:0.18, col:'rgba(180,160,140,0.0)'},
    {a:0.18,b:0.28, col:'rgba(210,200,180,0.55)'},
    {a:0.28,b:0.30, col:'rgba(0,0,0,0.65)'}, // Cassini Division
    {a:0.30,b:0.54, col:'rgba(230,220,200,0.75)'},
    {a:0.54,b:0.56, col:'rgba(0,0,0,0.4)'},
    {a:0.56,b:0.82, col:'rgba(200,190,170,0.35)'},
    {a:0.82,b:1.0, col:'rgba(180,170,160,0.0)'},
  ];
  bands.forEach(b=>{
    const x0=b.a*c.width, x1=b.b*c.width;
    // gradient within band
    const g=ctx.createLinearGradient(x0,0,x1,0);
    g.addColorStop(0, b.col.replace(/0\.\d+\)/, '0.15)'));
    g.addColorStop(0.5, b.col);
    g.addColorStop(1, b.col.replace(/0\.\d+\)/, '0.12)'));
    ctx.fillStyle=g; ctx.fillRect(x0,0,x1-x0,c.height);
  });
  // add fine ringlets via lines
  for(let i=0;i<300;i++){ ctx.fillStyle='rgba(0,0,0,0.22)'; ctx.fillRect(Math.random()*c.width,0,1,c.height); }
  const tex=new THREE.CanvasTexture(c);
  tex.colorSpace=THREE.SRGBColorSpace; tex.needsUpdate=true;
  return tex;
}
