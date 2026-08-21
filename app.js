import { CATEGORIES, SCENARIOS, OPPONENTS, calculateStats, getBetterOptions, rarityLabel } from './data.js';
import { Wheel } from './wheel.js';
import { RaceEngine } from './race.js';

const $ = s=> document.querySelector(s);
const els = {
  sceneCanvas: $('#sceneCanvas'),
  wheelCanvas: $('#wheelCanvas'),
  resultCard: $('#resultCard'),
  resultStars: $('#resultStars'),
  resultName: $('#resultName'),
  resultChance: $('#resultChance'),
  spinLeft: $('#spinLeft'),
  spinRight: $('#spinRight'),
  nextBtn: $('#nextBtn'),
  yourCarList: $('#yourCarList'),
  bestDots: $('#bestDots'),
  bestLabel: $('#bestLabel'),
  moneyDisplay: $('#moneyDisplay'),
  autoBtn: $('#autoBtn'),
  shopBtn: $('#shopBtn'),
  shopModal: $('#shopModal'),
  closeShop: $('#closeShop'),
  shopRemove: $('#shopRemove'),
  closeBtn: $('#closeBtn'),
  raceView: $('#raceView'),
  raceCanvas: $('#raceCanvas'),
  hudGear: $('#hudGear'),
  hudSpeed: $('#hudSpeed'),
  hudTime: $('#hudTime'),
  hudOpponent: $('#hudOpponent'),
  rpmFill: $('#rpmFill'),
  rpmVal: $('#rpmVal'),
  lights: [...document.querySelectorAll('#lights .light')],
  launchLeft: $('#launchLeft'),
  launchRight: $('#launchRight'),
  shiftLeft: $('#shiftLeft'),
  shiftRight: $('#shiftRight'),
  launchControls: $('#launchControls'),
  shiftControls: $('#shiftControls'),
  raceStartBtn: $('#raceStartBtn'),
  raceHint: $('#raceHint'),
  backToBuild: $('#backToBuild'),
  resultModal: $('#resultModal'),
  modalTitle: $('#modalTitle'),
  modalSub: $('#modalSub'),
  modalTime: $('#modalTime'),
  modalOppTime: $('#modalOppTime'),
  modalPB: $('#modalPB'),
  modalReward: $('#modalReward'),
  modalIcon: $('#modalIcon'),
  rewardBreak: $('#rewardBreak'),
  upgradeBtn: $('#upgradeBtn'),
  againBtn: $('#againBtn'),
  rebuildBtn: $('#rebuildBtn'),
  pickModal: $('#pickModal'),
  pickGrid: $('#pickGrid'),
  closePick: $('#closePick'),
};

// state
let state = {
  money: 2800,
  pb: null,
  currentCat: 0,
  build: Array(14).fill(null),
  filtered: Array(14).fill(null),
  spinning: false,
  auto: false,
  sound: true,
  scenario: SCENARIOS[0],
  opponent: OPPONENTS[0],
};

const wheel = new Wheel(els.wheelCanvas);
const race = new RaceEngine(els.raceCanvas, onRaceUpdate, onRaceFinish);

// audio
let audioCtx=null;
function ensureAudio(){ if(!audioCtx) audioCtx=new (window.AudioContext||window.webkitAudioContext)(); if(audioCtx.state==='suspended') audioCtx.resume(); }
function tickSound(speed, progress){
  if(!state.sound) return;
  try{ ensureAudio(); const o=audioCtx.createOscillator(), g=audioCtx.createGain(), f=audioCtx.createBiquadFilter();
    o.type='square'; o.frequency.value= 700 - progress*360 + Math.random()*50; f.type='highpass'; f.frequency.value=780; g.gain.value=0.08*(0.4+speed*0.9);
    o.connect(f); f.connect(g); g.connect(audioCtx.destination); o.start(); g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime+0.09); o.stop(audioCtx.currentTime+0.10);
  }catch{}
}
function winSound(win){ if(!state.sound) return; try{ ensureAudio(); const seq= win?[440,554,659,880]:[220,175,140];
  seq.forEach((f,i)=>{ const o=audioCtx.createOscillator(), g=audioCtx.createGain(); o.frequency.value=f; o.type=win?'sine':'triangle'; g.gain.value=0.14; o.connect(g); g.connect(audioCtx.destination); const t=audioCtx.currentTime+i*0.12; o.start(t); g.gain.exponentialRampToValueAtTime(0.001,t+0.32); o.stop(t+0.33); });
}catch{}}
function vibrate(p){ if(navigator.vibrate) try{navigator.vibrate(p)}catch{} }

// === SCENE 3D EXPOSIÇÃO — CÂMERA ORBITANDO 360 DEVAGAR ===
const sceneCtx = els.sceneCanvas.getContext('2d');
let angle = 0;
let sceneRAF=null;

function resizeScene(){
  const dpr = Math.max(1, window.devicePixelRatio||1);
  const rect = els.sceneCanvas.getBoundingClientRect();
  els.sceneCanvas.width = rect.width * dpr;
  els.sceneCanvas.height = rect.height * dpr;
  sceneCtx.setTransform(dpr,0,0,dpr,0,0);
}
window.addEventListener('resize', resizeScene);
resizeScene();

// car 3D points (box)
function drawScene(){
  const w = els.sceneCanvas.getBoundingClientRect().width;
  const h = els.sceneCanvas.getBoundingClientRect().height;
  // clear
  sceneCtx.clearRect(0,0,w,h);
  // background — dark with subtle stars
  const bg = sceneCtx.createLinearGradient(0,0,0,h);
  bg.addColorStop(0, '#040512');
  bg.addColorStop(0.55, '#080B1E');
  bg.addColorStop(1, '#0A0F1E');
  sceneCtx.fillStyle=bg; sceneCtx.fillRect(0,0,w,h);
  // stars
  sceneCtx.fillStyle='rgba(255,255,255,0.55)';
  for(let i=0;i<28;i++){
    const x = (Math.sin(i*12.7)*0.5+0.5)*w;
    const y = (Math.cos(i*9.3)*0.5+0.5)*h*0.35;
    const r = (i%3===0?1.1:0.6);
    sceneCtx.globalAlpha = 0.35 + Math.sin(angle*0.02 + i)*0.25;
    sceneCtx.beginPath(); sceneCtx.arc(x,y,r,0,Math.PI*2); sceneCtx.fill();
  }
  sceneCtx.globalAlpha=1;
  // ground perspective — rotating with camera
  // We simulate orbit by rotating ground lines angle offset
  const cx = w/2, gy = h*0.62;
  // horizon line
  sceneCtx.strokeStyle='rgba(255,255,255,0.06)'; sceneCtx.lineWidth=1;
  sceneCtx.beginPath(); sceneCtx.moveTo(0, gy); sceneCtx.lineTo(w, gy); sceneCtx.stroke();
  // road — two white lines + pink neon, with perspective, rotated by angle
  // base road as trapezoid, but we add orbit offset to vanishing point
  const orbitX = Math.sin(angle*0.012) * w*0.08;
  const topY = gy, botY = h*0.92;
  const topW = w*0.08, botW = w*0.95;
  // road fill dark
  sceneCtx.fillStyle='#0B0B14';
  sceneCtx.beginPath();
  sceneCtx.moveTo(cx - topW + orbitX*0.2, topY);
  sceneCtx.lineTo(cx + topW + orbitX*0.2, topY);
  sceneCtx.lineTo(cx + botW, botY);
  sceneCtx.lineTo(cx - botW, botY);
  sceneCtx.closePath(); sceneCtx.fill();
  // pink neon center line (as in photo)
  sceneCtx.strokeStyle='#FF3B9A'; sceneCtx.lineWidth=2.2; sceneCtx.shadowColor='#FF3B9A'; sceneCtx.shadowBlur=10;
  sceneCtx.beginPath();
  // diagonal pink line across upper part (like photo)
  const pinkY1 = gy + h*0.04, pinkY2 = gy + h*0.14;
  const px1 = orbitX*0.5, px2 = w*0.35;
  sceneCtx.moveTo(-20 + orbitX*0.3, pinkY1);
  sceneCtx.lineTo(w*0.85 + orbitX*0.3, pinkY2);
  sceneCtx.stroke(); sceneCtx.shadowBlur=0;
  // white side lines with perspective
  sceneCtx.strokeStyle='rgba(255,255,255,0.92)'; sceneCtx.lineWidth=3;
  sceneCtx.beginPath();
  sceneCtx.moveTo(cx - topW*0.9 + orbitX*0.2, topY+6);
  sceneCtx.lineTo(cx - botW*0.82, botY);
  sceneCtx.stroke();
  sceneCtx.beginPath();
  sceneCtx.moveTo(cx + topW*0.9 + orbitX*0.2, topY+6);
  sceneCtx.lineTo(cx + botW*0.82, botY);
  sceneCtx.stroke();
  // secondary white lines near bottom
  sceneCtx.strokeStyle='rgba(255,255,255,0.72)'; sceneCtx.lineWidth=2;
  sceneCtx.beginPath();
  const wx1 = cx - botW*0.42, wx2 = cx + botW*0.42;
  sceneCtx.moveTo(wx1, botY - h*0.18); sceneCtx.lineTo(wx1 - w*0.08, botY); sceneCtx.stroke();
  sceneCtx.beginPath(); sceneCtx.moveTo(wx2, botY - h*0.18); sceneCtx.lineTo(wx2 + w*0.08, botY); sceneCtx.stroke();

  // bollard light (right side, as in photo)
  const bx = w*0.78 + Math.sin(angle*0.012)*10, by = gy + h*0.06;
  sceneCtx.fillStyle='#0F1A2E'; sceneCtx.fillRect(bx-8, by, 16, h*0.10);
  sceneCtx.fillStyle='#E8F4FF'; sceneCtx.beginPath(); sceneCtx.moveTo(bx-10, by); sceneCtx.lineTo(bx+10, by); sceneCtx.lineTo(bx+8, by-8); sceneCtx.lineTo(bx-8, by-8); sceneCtx.closePath(); sceneCtx.fill();
  sceneCtx.shadowColor='rgba(180,220,255,0.7)'; sceneCtx.shadowBlur=12; sceneCtx.fillStyle='rgba(180,220,255,0.9)'; sceneCtx.beginPath(); sceneCtx.arc(bx, by-2, 6,0,Math.PI*2); sceneCtx.fill(); sceneCtx.shadowBlur=0;

  // --- LOW-POLY CAR 3D — rotacionando na plataforma ---
  // Car at center slightly above road
  const carCX = cx + Math.sin(angle*0.012)*6;
  const carCY = gy + h*0.11;
  // 3D box rotation
  drawLowPolyCar(sceneCtx, carCX, carCY, angle);

  angle += 0.38; // velocidade da órbita 360 devagar (~24s volta)
  sceneRAF = requestAnimationFrame(drawScene);
}

function drawLowPolyCar(ctx, cx, cy, ang){
  // ang in degrees-ish (0.38 per frame). Convert to rad
  const rad = (ang*0.9) * Math.PI/180;
  const cos = Math.cos(rad), sin = Math.sin(rad);
  // helper to rotate point around Y and project isometric
  function project(x,y,z){
    // rotate around Y
    const xr = x*cos - z*sin;
    const zr = x*sin + z*cos;
    // simple perspective: larger z = farther (smaller)
    const scale = 200 / (200 + zr + 120);
    // isometric-like: y is up, z is depth
    const px = cx + xr * scale;
    const py = cy - y * scale + zr*0.18*scale; // slight depth offset
    return {x:px, y:py, scale, zr};
  }
  // Car dimensions (low-poly as in photo: boxy)
  const L= 92, W=46, H=22, CH=16; // length, width, height, cabin height
  // chassis corners (bottom box)
  const pts = {
    // bottom rectangle (y=0)
    a: [-L/2, 0, -W/2], b:[ L/2, 0, -W/2], c:[ L/2, 0,  W/2], d:[-L/2, 0,  W/2],
    // top of chassis (y=H)
    e: [-L/2, H, -W/2], f:[ L/2, H, -W/2], g:[ L/2, H,  W/2], h:[-L/2, H,  W/2],
    // cabin (smaller, centered back)
    i: [-L*0.18, H, -W*0.32], j:[ L*0.38, H, -W*0.32], k:[ L*0.38, H,  W*0.32], l:[-L*0.18, H,  W*0.32],
    m: [-L*0.18, H+CH, -W*0.32], n:[ L*0.38, H+CH, -W*0.32], o:[ L*0.38, H+CH,  W*0.32], p:[-L*0.18, H+CH,  W*0.32],
    // hood bump
    q: [-L*0.42, H, -W*0.28], r:[-L*0.08, H, -W*0.28], s:[-L*0.08, H+6, -W*0.28], t:[-L*0.42, H+6, -W*0.28],
  };
  const P={}; for(let k in pts) P[k]=project(...pts[k]);
  // depth sort: draw far faces first
  // Determine visible faces based on rotation: compute normals
  // Simplify: draw all but with alpha based on z
  // Chassis side faces
  function face(points, color, stroke){
    ctx.fillStyle=color; ctx.strokeStyle= stroke||'rgba(0,0,0,0.25)'; ctx.lineWidth=1;
    ctx.beginPath(); ctx.moveTo(points[0].x, points[0].y);
    for(let i=1;i<points.length;i++) ctx.lineTo(points[i].x, points[i].y);
    ctx.closePath(); ctx.fill(); if(stroke) ctx.stroke();
  }
  // order: bottom, back, sides
  // Dark bottom shadow
  ctx.fillStyle='rgba(0,0,0,0.32)'; ctx.beginPath(); ctx.ellipse(cx, cy+18, 58, 14, 0,0,Math.PI*2); ctx.fill();
  // Chassis top
  face([P.e,P.f,P.g,P.h], '#6B7280');
  // Chassis front (f-g-c-b)
  face([P.f,P.g,P.c,P.b], '#4B5563');
  // Chassis side left (e-f-b-a)
  face([P.e,P.f,P.b,P.a], '#525A6B');
  // Chassis side right (h-g-c-d) — visible when rotated
  const avgZ_sideR = (P.h.zr+P.g.zr+P.c.zr+P.d.zr)/4;
  const avgZ_sideL = (P.e.zr+P.f.zr+P.b.zr+P.a.zr)/4;
  if(avgZ_sideR < avgZ_sideL){
    face([P.h,P.g,P.c,P.d], '#5A6478');
  }
  // Cabin
  face([P.m,P.n,P.o,P.p], '#3A4458'); // top
  face([P.i,P.j,P.n,P.m], '#2E3648'); // front
  face([P.j,P.k,P.o,P.n], '#2E3648'); // side
  // Hood
  face([P.q,P.r,P.s,P.t], '#5A6478');
  // Wheels — 4 small ellipses at corners, with perspective scale
  const wheels = [ {x:-L*0.35, z:-W*0.5}, {x:L*0.35, z:-W*0.5}, {x:-L*0.35, z:W*0.5}, {x:L*0.35, z:W*0.5} ];
  wheels.forEach(w=>{
    const p = project(w.x, -2, w.z);
    const s = p.scale;
    ctx.fillStyle='#0A0A0F'; ctx.beginPath(); ctx.ellipse(p.x, p.y+6*s, 9*s, 9*s, 0,0,Math.PI*2); ctx.fill();
    ctx.fillStyle='#1A1A1E'; ctx.beginPath(); ctx.ellipse(p.x, p.y+5*s, 7*s, 7*s, 0,0,Math.PI*2); ctx.fill();
    ctx.fillStyle='#3A3A42'; ctx.beginPath(); ctx.arc(p.x, p.y+5*s, 2.2*s,0,Math.PI*2); ctx.fill();
  });
  // underglow if player has
  const glow = state.build[13]?.glow;
  if(glow && glow!=='none'){
    const col = glow==='rainbow' ? '#FFD54A' : glow;
    ctx.shadowColor=col; ctx.shadowBlur=14; ctx.strokeStyle=col; ctx.lineWidth=1.5;
    ctx.strokeRect(P.e.x, P.e.y, (P.g.x-P.e.x), 2); ctx.shadowBlur=0;
    ctx.fillStyle= col+'18'; ctx.beginPath(); ctx.ellipse(cx, cy+14, 62, 10, 0,0,Math.PI*2); ctx.fill();
  }
  // paint reflection if has paint
  const paint = state.build[11]?.color;
  if(paint && paint!=='#0A0A0A'){
    ctx.fillStyle= paint+'22'; ctx.beginPath(); ctx.moveTo(P.e.x, P.e.y); ctx.lineTo(P.f.x, P.f.y); ctx.lineTo(P.f.x, P.f.y+6); ctx.lineTo(P.e.x, P.e.y+6); ctx.closePath(); ctx.fill();
  }
}

// load/save
function load(){
  try{
    const s= JSON.parse(localStorage.getItem('wow-save-v3')||'null');
    if(s){ state.money=s.money??2800; state.pb=s.pb??null; if(s.build) state.build=s.build; const n=state.build.findIndex(v=>!v); state.currentCat=n===-1?14:n; }
  }catch{}
}
function save(){ localStorage.setItem('wow-save-v3', JSON.stringify({money:state.money, pb:state.pb, build:state.build})); }
function updateMoney(){
  els.moneyDisplay.textContent = '$' + state.money.toLocaleString('pt-BR');
  const canRemove = state.money>=250 && !state.spinning && state.currentCat<14;
  if(els.shopRemove) els.shopRemove.disabled=!canRemove;
}
function updateBest(){
  const filled = state.build.filter(Boolean).length;
  const best = state.build.filter(v=> v && v.stars===5).length;
  els.bestLabel.textContent = `BEST ${best}/${state.build.length}`;
  els.bestDots.innerHTML='';
  for(let i=0;i<state.build.length;i++){
    const s=document.createElement('span');
    if(state.build[i]){
      if(state.build[i].stars===5) s.className='best';
      else s.className='filled';
    }
    els.bestDots.appendChild(s);
  }
}
function updateYourCar(){
  const labels = ['PWR','MASS','DRIVE','TYRES','GEARS','BRAKES','SUSP','EXHAUST','RIMS','AERO','TOP'];
  const stats = calculateStats(state.build);
  const vals = [
    stats.pwr? stats.pwr+' HP':'—',
    stats.mass? stats.mass+' KG':'—',
    state.build[4]?.name || '—',
    state.build[5]?.name || '—',
    state.build[6]?.name || '—',
    state.build[7]?.name || '—',
    state.build[8]?.name || '—',
    state.build[9]?.name || '—',
    state.build[12]?.name || '—',
    stats.aero? stats.aero.toFixed(2):'—',
    stats.top? stats.top+' KM/H':'—',
  ];
  const ul = els.yourCarList; ul.innerHTML='';
  labels.forEach((lab,i)=>{
    const li=document.createElement('li');
    li.innerHTML=`<span>${lab}</span><b>${vals[i]}</b>`;
    ul.appendChild(li);
  });
}

let currentCat = 0;
function showCategory(idx){
  if(idx>=14){ showReadyToRace(); return; }
  currentCat = idx; state.currentCat=idx;
  const cat = CATEGORIES[idx];
  const opts = state.filtered[idx] || cat.options;
  document.querySelector('.engine-label').textContent = cat.label;
  // wheel
  wheel.setOptions(opts);
  els.resultCard.classList.add('hidden');
  els.nextBtn.classList.add('hidden');
  els.spinLeft.disabled=false; els.spinRight.disabled=false;
  updateYourCar(); updateBest(); updateMoney();
  // ensure scene visible, race hidden
  els.raceView.classList.add('hidden');
  document.querySelector('.wheel-layer').style.display='flex';
  document.querySelector('.ui-overlay').style.display='block';
}
function showReadyToRace(){
  state.currentCat=14;
  document.querySelector('.engine-label').textContent='PRONTO PARA CORRIDA';
  els.resultCard.classList.add('hidden');
  els.spinLeft.disabled=true; els.spinRight.disabled=true;
  els.nextBtn.classList.remove('hidden');
  els.nextBtn.textContent='🏁 CORRER AGORA →';
  els.nextBtn.onclick=enterRace;
  updateYourCar(); updateBest();
}

function weightedPick(opts){
  const total=opts.reduce((a,b)=>a+b.chance,0);
  let r=Math.random()*total;
  for(let i=0;i<opts.length;i++){ r-=opts[i].chance; if(r<=0) return i; }
  return opts.length-1;
}
async function doSpin(){
  if(state.spinning) return;
  if(state.currentCat>=14) return;
  const cat=CATEGORIES[state.currentCat];
  const opts= state.filtered[state.currentCat] || cat.options;
  if(!opts.length) return;
  state.spinning=true;
  els.spinLeft.disabled=true; els.spinRight.disabled=true; els.nextBtn.classList.add('hidden');
  els.resultCard.classList.add('hidden');
  const winnerIdx= weightedPick(opts);
  const winner= opts[winnerIdx];
  vibrate(16);
  await wheel.spinTo(winnerIdx, {duration: 4300 + Math.random()*400, onTick: tickSound});
  state.build[state.currentCat]=winner;
  state.filtered[state.currentCat]=null;
  save();
  els.resultName.textContent=winner.name;
  els.resultChance.textContent=winner.chance.toFixed(1)+'% CHANCE';
  els.resultStars.textContent='★'.repeat(winner.stars)+'☆'.repeat(5-winner.stars);
  els.resultCard.classList.remove('hidden');
  updateYourCar(); updateBest(); updateMoney();
  vibrate(winner.stars>=4?[26,18,42]:22);
  if(winner.stars>=4) winSound(true);
  state.spinning=false;
  els.spinLeft.disabled=false; els.spinRight.disabled=false;
  const allDone = state.build.every(v=>v);
  if(allDone){
    els.nextBtn.classList.remove('hidden');
    els.nextBtn.textContent='🏁 CORRER AGORA →';
    els.nextBtn.onclick=enterRace;
    if(state.auto) setTimeout(enterRace, 900);
  } else {
    els.nextBtn.classList.remove('hidden');
    els.nextBtn.textContent='CONTINUAR →';
    els.nextBtn.onclick=()=>{
      const nxt = state.build.findIndex((v,i)=> i>state.currentCat && !v);
      if(nxt!==-1) showCategory(nxt);
      else { const f=state.build.findIndex(v=>!v); if(f!==-1) showCategory(f); }
    };
    if(state.auto) setTimeout(()=> els.nextBtn.click(), 900);
  }
}
function removeWorst(){
  if(state.money<250 || state.spinning) return;
  const idx=state.currentCat;
  if(idx>=14) return;
  const cat=CATEGORIES[idx];
  const cur= state.filtered[idx] || cat.options;
  if(cur.length<=3) return;
  let worst=0, score=Infinity;
  cur.forEach((o,i)=>{ const s=o.stars*100+o.chance; if(s<score){score=s; worst=i;} });
  const nxt=cur.filter((_,i)=> i!==worst);
  state.filtered[idx]=nxt;
  state.money-=250; save(); updateMoney();
  wheel.setOptions(nxt);
  vibrate(16);
}
function enterRace(){
  const stats=calculateStats(state.build);
  if(!stats.pwr || state.build.some(v=>!v)){ alert('Monte as 14 peças antes de correr!'); const f=state.build.findIndex(v=>!v); if(f!==-1) showCategory(f); return; }
  // pick scenario & opponent
  state.scenario = SCENARIOS[Math.floor(Math.random()*SCENARIOS.length)];
  const pool = stats.top>380? OPPONENTS.filter(o=>o.tier>=3) : stats.top>300? OPPONENTS.filter(o=>o.tier>=2) : OPPONENTS;
  state.opponent = pool[Math.floor(Math.random()*pool.length)];
  // hide wheel/ui, show race
  document.querySelector('.wheel-layer').style.display='none';
  document.querySelector('.ui-overlay').style.display='none';
  els.raceView.classList.remove('hidden');
  race.reset();
  race.setBuild(state.build, stats, state.scenario, state.scenario.dist);
  els.hudGear.textContent='N'; els.hudSpeed.textContent='0'; els.hudTime.textContent='0.000s'; els.hudOpponent.textContent='—';
  els.rpmFill.style.width='8%'; els.lights.forEach(l=>l.classList.remove('on','green'));
  els.launchControls.classList.remove('hidden'); els.shiftControls.classList.add('hidden');
  els.raceStartBtn.classList.remove('hidden'); els.raceStartBtn.textContent='PREPARAR LARGADA'; els.raceStartBtn.disabled=false;
  els.raceHint.textContent=`${state.scenario.icon} ${state.scenario.dist}m • Acerte o verde!`;
  race.draw(0,0,state.scenario);
}
async function startRace(){
  els.raceStartBtn.disabled=true; els.raceStartBtn.textContent='AGUARDE AS LUZES...';
  els.raceHint.textContent='Fique atento... LAUNCH no verde!';
  els.launchControls.classList.remove('hidden'); els.shiftControls.classList.add('hidden');
  const ok= await race.startCountdown(els.lights);
  if(!ok) return;
  els.raceStartBtn.classList.add('hidden');
  els.raceHint.textContent='ACELERE! SHIFT no verde!';
  els.launchControls.classList.add('hidden'); els.shiftControls.classList.remove('hidden');
}
function handleLaunch(){ const r=race.launch(); if(r?.falseStart){ els.raceHint.textContent='⚠️ QUEIMA! +1.2s'; vibrate([40,30,40]); } else if(r?.reaction!=null){ els.raceHint.textContent= r.perfect? `🚀 PERFECT ${r.reaction.toFixed(3)}s`:`Largada ${r.reaction.toFixed(3)}s`; if(r.perfect) vibrate(22); } }
function handleShift(){ const r=race.shift(); if(!r) return; if(r.result==='perfect') els.raceHint.textContent='✨ PERFECT SHIFT!'; else if(r.result==='good') els.raceHint.textContent='✓ Boa'; else if(r.result==='bad') els.raceHint.textContent='✕ Fora do ponto'; els.hudGear.textContent=r.gear||race.gear; }
function onRaceUpdate(d){
  els.hudSpeed.textContent=Math.round(d.speed).toString();
  els.hudTime.textContent=d.time.toFixed(3)+'s';
  const diff=d.distance - d.oppDistance; els.hudOpponent.textContent=(diff>=0?'+':'')+diff.toFixed(1)+'m'; els.hudOpponent.style.color=diff>=0?'#00E676':'#FF3B9A';
  els.hudGear.textContent= race.gear===1 && d.time<0.4? '1': race.gear;
  const pct=Math.max(0,Math.min(100,(d.rpm/8000)*100)); els.rpmFill.style.width=pct+'%'; els.rpmVal.textContent=Math.round(d.rpm).toString();
}
function onRaceFinish(result){
  const stats=calculateStats(state.build);
  const playerQuarter= stats.quarter * (result.raceDistance/402);
  const difficulty= playerQuarter / result.oppTime;
  const distFactor= result.raceDistance/402;
  const tierMult= state.opponent.tier*0.22+0.45;
  let base= result.win?620:110;
  let reward= Math.round(base * difficulty * distFactor * tierMult + result.raceDistance*0.65);
  reward += result.perfectShifts * (result.win?140:40);
  if(result.falseStart) reward=Math.round(reward*0.45);
  reward=Math.round(reward*(0.92+Math.random()*0.16)); reward=Math.max(60,reward);
  state.money+=reward; if(!state.pb || result.playerTime < state.pb) state.pb=result.playerTime; save(); updateMoney();
  els.modalTitle.textContent= result.win? 'VITÓRIA!':'DERROTA';
  els.modalIcon.textContent= result.win? '🏆':'💥';
  els.modalSub.textContent= result.win? `Venceu ${state.opponent.name} por ${(Math.abs(result.playerTime-result.oppTime)).toFixed(2)}s em ${result.scenario.name}`:`${state.opponent.name} venceu por ${(result.oppTime-result.playerTime).toFixed(2)}s • ${result.scenario.name}`;
  els.modalTime.textContent= result.playerTime.toFixed(3)+'s' + (result.falseStart?' (+PENALTY)':'');
  els.modalOppTime.textContent= result.oppTime.toFixed(3)+'s';
  els.modalPB.textContent= state.pb.toFixed(3)+'s';
  els.modalReward.textContent= '+ $'+reward.toLocaleString('pt-BR');
  els.rewardBreak.innerHTML=`Cenário ${result.scenario.icon} ${result.scenario.dist}m ×${distFactor.toFixed(2)} • Dificuldade ×${difficulty.toFixed(2)} • Tier ${state.opponent.tier} ×${tierMult.toFixed(2)} • Perfect ${result.perfectShifts}`;
  showModal(els.resultModal); winSound(result.win); vibrate(result.win?[26,32,48]:[44,26,44]);
}
function showModal(el){ el.classList.remove('hidden'); }
function hideModal(el){ el.classList.add('hidden'); }
function openPick(){
  els.pickGrid.innerHTML='';
  CATEGORIES.forEach((cat,i)=>{
    const cur=state.build[i];
    const better=getBetterOptions(cat, cur);
    const has=better.length>0;
    const btn=document.createElement('button');
    btn.className= has?'':'disabled';
    btn.innerHTML=`<strong>${cat.label}</strong><br><span style="font-size:11px;color:#9AA4C8">Atual: ${cur?cur.name:'—'}</span><br><b>${has?`↑ ${better.length} melhores`:'★ Já é o melhor'}</b>`;
    if(has) btn.onclick=()=>{
      hideModal(els.pickModal); hideModal(els.resultModal);
      state.filtered[i]=better;
      document.querySelector('.wheel-layer').style.display='flex';
      document.querySelector('.ui-overlay').style.display='block';
      els.raceView.classList.add('hidden');
      showCategory(i);
      document.querySelector('.engine-label').textContent= cat.label+' • UPGRADE';
    };
    els.pickGrid.appendChild(btn);
  });
  showModal(els.pickModal);
}
function bind(){
  els.spinLeft.addEventListener('click', doSpin);
  els.spinRight.addEventListener('click', doSpin);
  els.nextBtn.addEventListener('click', ()=> els.nextBtn.onclick && els.nextBtn.onclick());
  els.autoBtn.addEventListener('click', ()=>{
    state.auto=!state.auto;
    els.autoBtn.classList.toggle('active', state.auto);
    els.autoBtn.textContent= state.auto? 'AUTO: ON':'AUTO: OFF';
    if(state.auto && !state.spinning && !state.build[state.currentCat]) doSpin();
    else if(state.auto && state.build[state.currentCat]) els.nextBtn.click();
  });
  els.shopBtn.addEventListener('click', ()=> showModal(els.shopModal));
  els.closeShop.addEventListener('click', ()=> hideModal(els.shopModal));
  els.shopRemove.addEventListener('click', removeWorst);
  els.shopModal.querySelector('.modal-backdrop').addEventListener('click', ()=> hideModal(els.shopModal));
  els.closeBtn.addEventListener('click', ()=>{
    if(confirm('Sair? Progresso salvo.')) { if(els.raceView.classList.contains('hidden')) showCategory(0); else { els.raceView.classList.add('hidden'); document.querySelector('.wheel-layer').style.display='flex'; document.querySelector('.ui-overlay').style.display='block'; } }
  });
  window.addEventListener('keydown', e=>{
    if(e.code==='Space'){ e.preventDefault(); if(!els.raceView.classList.contains('hidden')){ if(race.state==='countdown') handleLaunch(); else if(race.state==='racing') handleShift(); } else if(!state.spinning && state.currentCat<14) doSpin(); }
  });
  els.raceStartBtn.addEventListener('click', startRace);
  ['click','touchstart'].forEach(ev=>{
    els.launchLeft.addEventListener(ev, e=>{e.preventDefault(); handleLaunch();});
    els.launchRight.addEventListener(ev, e=>{e.preventDefault(); handleLaunch();});
    els.shiftLeft.addEventListener(ev, e=>{e.preventDefault(); handleShift();});
    els.shiftRight.addEventListener(ev, e=>{e.preventDefault(); handleShift();});
  });
  els.backToBuild.addEventListener('click', ()=>{ race.stop(); els.raceView.classList.add('hidden'); document.querySelector('.wheel-layer').style.display='flex'; document.querySelector('.ui-overlay').style.display='block'; });
  els.upgradeBtn.addEventListener('click', ()=>{ hideModal(els.resultModal); openPick(); });
  els.againBtn.addEventListener('click', ()=>{ hideModal(els.resultModal); enterRace(); });
  els.rebuildBtn.addEventListener('click', ()=>{
    if(!confirm('Novo carro? Perderá o atual.')) return;
    hideModal(els.resultModal); state.build=Array(14).fill(null); state.filtered=Array(14).fill(null); save(); showCategory(0);
    els.raceView.classList.add('hidden'); document.querySelector('.wheel-layer').style.display='flex'; document.querySelector('.ui-overlay').style.display='block';
  });
  els.closePick.addEventListener('click', ()=> hideModal(els.pickModal));
  els.pickModal.querySelector('.modal-backdrop').addEventListener('click', ()=> hideModal(els.pickModal));
  els.resultModal.querySelector('.modal-backdrop').addEventListener('click', ()=> hideModal(els.resultModal));
}

load();
updateYourCar(); updateBest(); updateMoney();
showCategory(state.currentCat);
bind();
drawScene();

window.WOW={state, CATEGORIES};
