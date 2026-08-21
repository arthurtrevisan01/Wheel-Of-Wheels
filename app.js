// WHEEL OF WHEELS — SINGLE FILE (sem imports) — FIEL À FOTO
// Dados, Wheel, Race e App juntos para corrigir travamento

const CATEGORIES = [
  {
    id: 'engine', label: 'ENGINE SIZE', title: 'Tamanho do Motor',
    desc: 'Cilindrada define potência bruta. Igual à foto: 1.0L a 6.0L.',
    statKey: 'hp',
    options: [
      { name: '1.0L', chance: 18, stars: 1, color: '#7A1A1A', hp: 95, rarity:'Comum' },
      { name: '1.5L', chance: 16, stars: 1, color: '#9A7B1A', hp: 135, rarity:'Comum' },
      { name: '2.0L', chance: 14, stars: 2, color: '#6B7A1A', hp: 210, rarity:'Incomum' },
      { name: '2.5L', chance: 12, stars: 2, color: '#1F8A2B', hp: 285, rarity:'Incomum' },
      { name: '3.0L', chance: 10, stars: 2, color: '#1A6B3A', hp: 360, rarity:'Incomum' },
      { name: '3.5L', chance: 9, stars: 3, color: '#2B7A8A', hp: 440, rarity:'Raro' },
      { name: '4.0L', chance: 7, stars: 3, color: '#1E2B5A', hp: 520, rarity:'Raro' },
      { name: '4.5L', chance: 5.5, stars: 3, color: '#3B2B8A', hp: 610, rarity:'Raro' },
      { name: '5.0L', chance: 4, stars: 4, color: '#5B2B7A', hp: 720, rarity:'Épico' },
      { name: '5.5L', chance: 2.8, stars: 4, color: '#7A2B5A', hp: 840, rarity:'Épico' },
      { name: '6.0L', chance: 1.7, stars: 5, color: '#5A1A10', hp: 980, rarity:'Lendário' },
    ]
  },
  {
    id: 'cylinders', label: 'CYLINDERS', title: 'Cilindros', desc: 'Arquitetura do motor.', statKey: 'mult',
    options: [
      { name: 'I3', chance: 18, stars: 1, color: '#252E4A', mult: 0.92, rarity:'Comum' },
      { name: 'I4', chance: 18, stars: 1, color: '#2A3552', mult: 1.0, rarity:'Comum' },
      { name: 'Boxer 4', chance: 10, stars: 2, color: '#32405E', mult: 1.05, rarity:'Incomum' },
      { name: 'V6', chance: 14, stars: 2, color: '#3A4A6E', mult: 1.12, rarity:'Incomum' },
      { name: 'V8', chance: 12, stars: 3, color: '#4B3A8A', mult: 1.22, rarity:'Raro' },
      { name: 'V10', chance: 7, stars: 3, color: '#5A2E8A', mult: 1.28, rarity:'Raro' },
      { name: 'V12', chance: 6, stars: 4, color: '#7A1840', mult: 1.35, rarity:'Épico' },
      { name: 'W16', chance: 2.8, stars: 5, color: '#8A6A00', mult: 1.52, rarity:'Lendário' },
      { name: 'Boxer 6', chance: 6.2, stars: 2, color: '#32405E', mult: 1.08, rarity:'Incomum' },
      { name: 'I5', chance: 6, stars: 2, color: '#32405E', mult: 1.04, rarity:'Incomum' },
    ]
  },
  {
    id: 'induction', label: 'INDUCTION', title: 'Indução', desc: 'Turbo sibila, Supercharger uiva.', statKey: 'mult',
    options: [
      { name: 'N/A', chance: 20, stars: 1, color: '#242F4A', mult: 1.0, rarity:'Comum' },
      { name: 'Roots Blower', chance: 14, stars: 1, color: '#26334E', mult: 1.18, rarity:'Comum' },
      { name: 'Turbo', chance: 18, stars: 2, color: '#2B4A6A', mult: 1.38, rarity:'Incomum' },
      { name: 'Supercharger', chance: 12, stars: 2, color: '#2F4A6A', mult: 1.45, rarity:'Incomum' },
      { name: 'ProCharger', chance: 8, stars: 3, color: '#4B3A8A', mult: 1.55, rarity:'Raro' },
      { name: 'Twin Turbo', chance: 12, stars: 3, color: '#4B3A8A', mult: 1.62, rarity:'Raro' },
      { name: 'E-Turbo Hybrid', chance: 7, stars: 4, color: '#006A7A', mult: 1.82, rarity:'Épico' },
      { name: 'Twin SC', chance: 6, stars: 4, color: '#7A1840', mult: 1.75, rarity:'Épico' },
      { name: 'Quad Turbo', chance: 3, stars: 5, color: '#8A6A00', mult: 2.05, rarity:'Lendário' },
    ]
  },
  {
    id: 'weight', label: 'WEIGHT', title: 'Peso', desc: 'Menor é melhor. Carbono é ouro.', statKey: 'kg', lowerIsBetter: true,
    options: [
      { name: '3000 KG Truck', chance: 12, stars: 1, color: '#242F4A', kg: 3000, rarity:'Comum' },
      { name: '2500 KG SUV', chance: 14, stars: 1, color: '#26334E', kg: 2500, rarity:'Comum' },
      { name: '2000 KG Sedan', chance: 18, stars: 1, color: '#2B3D5A', kg: 2000, rarity:'Comum' },
      { name: '1800 KG Wagon', chance: 10.5, stars: 1, color: '#2B3D5A', kg: 1800, rarity:'Comum' },
      { name: '1500 KG Coupe', chance: 16, stars: 2, color: '#35577A', kg: 1500, rarity:'Incomum' },
      { name: '1200 KG Light', chance: 12, stars: 3, color: '#4B3A8A', kg: 1200, rarity:'Raro' },
      { name: '1000 KG Carbon', chance: 8, stars: 4, color: '#7A1840', kg: 1000, rarity:'Épico' },
      { name: '850 KG Track', chance: 6, stars: 4, color: '#7A1840', kg: 850, rarity:'Épico' },
      { name: '750 KG Hyper', chance: 3.5, stars: 5, color: '#8A6A00', kg: 750, rarity:'Lendário' },
    ]
  },
  {
    id: 'drive', label: 'DRIVE TYPE', title: 'Tração', desc: 'FWD/AWD/RWD.', statKey: 'grip',
    options: [
      { name: 'FWD', chance: 28, stars: 1, color: '#242F4A', grip: 0.86, rarity:'Comum' },
      { name: 'RWD', chance: 34, stars: 2, color: '#32405E', grip: 0.92, rarity:'Incomum' },
      { name: 'AWD', chance: 24, stars: 3, color: '#4B3A8A', grip: 1.08, rarity:'Raro' },
      { name: 'AWD Vectoring', chance: 9, stars: 4, color: '#7A1840', grip: 1.18, rarity:'Épico' },
      { name: 'RWD Drag Spec', chance: 5, stars: 5, color: '#8A6A00', grip: 1.22, rarity:'Lendário' },
    ]
  },
  {
    id: 'tyres', label: 'TYRES', title: 'Pneus', desc: 'Borracha é tudo.', statKey: 'grip',
    options: [
      { name: 'Cheap', chance: 18, stars: 1, color: '#242F4A', grip: 0.72, rarity:'Comum' },
      { name: 'Road', chance: 18, stars: 1, color: '#2A3552', grip: 0.88, rarity:'Comum' },
      { name: 'Semi-Slick', chance: 13.5, stars: 2, color: '#32405E', grip: 1.02, rarity:'Incomum' },
      { name: 'Race Hard', chance: 14, stars: 2, color: '#32405E', grip: 0.98, rarity:'Incomum' },
      { name: 'Race Medium', chance: 14, stars: 2, color: '#3A4A6E', grip: 1.06, rarity:'Incomum' },
      { name: 'Race Soft', chance: 10, stars: 3, color: '#4B3A8A', grip: 1.14, rarity:'Raro' },
      { name: 'Drag Slicks', chance: 8, stars: 4, color: '#7A1840', grip: 1.28, rarity:'Épico' },
      { name: 'Drag Radials Pro', chance: 4.5, stars: 5, color: '#8A6A00', grip: 1.38, rarity:'Lendário' },
    ]
  },
  {
    id: 'gearbox', label: 'GEARBOX', title: 'Câmbio', desc: '2 a 8 marchas.', statKey: 'eff',
    options: [
      { name: 'CVT (lol)', chance: 13, stars: 1, color: '#242F4A', gears: 2, eff: 0.78, rarity:'Comum' },
      { name: 'Manual 4-Speed', chance: 14, stars: 1, color: '#242F4A', gears: 4, eff: 0.88, rarity:'Comum' },
      { name: 'Manual 5-Speed', chance: 16, stars: 1, color: '#2A3552', gears: 5, eff: 0.92, rarity:'Comum' },
      { name: 'Manual 6-Speed', chance: 16, stars: 2, color: '#32405E', gears: 6, eff: 0.97, rarity:'Incomum' },
      { name: 'Auto 6-Speed', chance: 14, stars: 2, color: '#3A4A6E', gears: 6, eff: 0.95, rarity:'Incomum' },
      { name: 'Auto 8-Speed', chance: 12, stars: 3, color: '#4B3A8A', gears: 8, eff: 1.02, rarity:'Raro' },
      { name: 'DCT 7-Speed', chance: 10, stars: 4, color: '#7A1840', gears: 7, eff: 1.08, rarity:'Épico' },
      { name: 'DCT 8-Speed Pro', chance: 5, stars: 5, color: '#8A6A00', gears: 8, eff: 1.14, rarity:'Lendário' },
    ]
  },
  {
    id: 'brakes', label: 'BRAKES', title: 'Freios', desc: 'Carbono aguenta.', statKey: 'bonus',
    options: [
      { name: 'Drum', chance: 16, stars: 1, color: '#242F4A', bonus: 0.86, rarity:'Comum' },
      { name: 'Street Disc', chance: 20, stars: 1, color: '#2A3552', bonus: 0.92, rarity:'Comum' },
      { name: 'Sport', chance: 18, stars: 2, color: '#32405E', bonus: 1.0, rarity:'Incomum' },
      { name: 'Drilled Sport', chance: 19, stars: 2, color: '#32405E', bonus: 1.02, rarity:'Incomum' },
      { name: 'Race Steel', chance: 14, stars: 3, color: '#4B3A8A', bonus: 1.06, rarity:'Raro' },
      { name: 'Carbon Ceramic', chance: 9, stars: 4, color: '#7A1840', bonus: 1.12, rarity:'Épico' },
      { name: 'Carbon-Carbon Pro', chance: 4, stars: 5, color: '#8A6A00', bonus: 1.18, rarity:'Lendário' },
    ]
  },
  {
    id: 'suspension', label: 'SUSPENSION', title: 'Suspensão', desc: 'Drag Squat.', statKey: 'bonus',
    options: [
      { name: 'Soft Stock', chance: 18, stars: 1, color: '#242F4A', bonus: 0.90, rarity:'Comum' },
      { name: 'Air Ride', chance: 20.5, stars: 1, color: '#242F4A', bonus: 0.92, rarity:'Comum' },
      { name: 'Street', chance: 18, stars: 1, color: '#2A3552', bonus: 0.96, rarity:'Comum' },
      { name: 'Sport Lowered', chance: 16, stars: 2, color: '#32405E', bonus: 1.02, rarity:'Incomum' },
      { name: 'Race Coilovers', chance: 14, stars: 3, color: '#4B3A8A', bonus: 1.08, rarity:'Raro' },
      { name: 'Drag 4-Link', chance: 9, stars: 4, color: '#7A1840', bonus: 1.16, rarity:'Épico' },
      { name: 'Active Aero', chance: 4.5, stars: 5, color: '#8A6A00', bonus: 1.22, rarity:'Lendário' },
    ]
  },
  {
    id: 'exhaust', label: 'EXHAUST', title: 'Escapamento', desc: 'Chamas.', statKey: 'bonus',
    options: [
      { name: 'Stock Muffler', chance: 20, stars: 1, color: '#242F4A', bonus: 0.95, rarity:'Comum' },
      { name: 'Side Exit', chance: 22.5, stars: 1, color: '#242F4A', bonus: 0.98, rarity:'Comum' },
      { name: 'Cat-Back', chance: 18, stars: 2, color: '#32405E', bonus: 1.02, rarity:'Incomum' },
      { name: 'Straight Pipe', chance: 16, stars: 2, color: '#3A4A6E', bonus: 1.05, rarity:'Incomum' },
      { name: 'Titanium Race', chance: 12, stars: 3, color: '#4B3A8A', bonus: 1.09, rarity:'Raro' },
      { name: 'Inconel F1', chance: 8, stars: 4, color: '#7A1840', bonus: 1.14, rarity:'Épico' },
      { name: 'Flames Pro', chance: 3.5, stars: 5, color: '#8A6A00', bonus: 1.19, rarity:'Lendário' },
    ]
  },
  {
    id: 'shape', label: 'CAR SHAPE', title: 'Carroceria', desc: 'Aero.', statKey: 'aero',
    options: [
      { name: 'Pickup', chance: 11, stars: 1, color: '#242F4A', aero: 0.84, icon:'🛻', rarity:'Comum' },
      { name: 'SUV', chance: 12, stars: 1, color: '#26334E', aero: 0.86, icon:'🚙', rarity:'Comum' },
      { name: 'Wagon', chance: 12, stars: 1, color: '#242F4A', aero: 0.88, icon:'🚐', rarity:'Comum' },
      { name: 'Sedan', chance: 16, stars: 1, color: '#2A3552', aero: 0.96, icon:'🚗', rarity:'Comum' },
      { name: 'Hatch Hot', chance: 14, stars: 2, color: '#32405E', aero: 0.98, icon:'🚗', rarity:'Incomum' },
      { name: 'Coupe', chance: 16, stars: 2, color: '#32405E', aero: 1.02, icon:'🏎️', rarity:'Incomum' },
      { name: 'Supercar', chance: 10, stars: 3, color: '#4B3A8A', aero: 1.10, icon:'🏁', rarity:'Raro' },
      { name: 'Hypercar', chance: 6, stars: 4, color: '#7A1840', aero: 1.16, icon:'🚀', rarity:'Épico' },
      { name: 'F1 Single', chance: 3, stars: 5, color: '#8A6A00', aero: 1.28, icon:'🏎️', rarity:'Lendário' },
    ]
  },
  {
    id: 'paint', label: 'PAINT', title: 'Pintura', desc: 'PBR.', statKey: 'stars',
    options: [
      { name: 'Primer Grey', chance: 18, stars: 1, color: '#5A5A5A', rarity:'Comum' },
      { name: 'Racing White', chance: 16, stars: 1, color: '#E8E8E8', rarity:'Comum' },
      { name: 'Nardo Grey', chance: 12, stars: 2, color: '#8A9BA8', rarity:'Incomum' },
      { name: 'Midnight Black', chance: 16, stars: 2, color: '#0A0A0A', rarity:'Incomum' },
      { name: 'Cyber Cyan', chance: 12, stars: 3, color: '#00B8D4', rarity:'Raro' },
      { name: 'Neon Purple', chance: 10, stars: 3, color: '#5A2E8A', rarity:'Raro' },
      { name: 'Sunset Chameleon', chance: 6, stars: 4, color: '#7A1840', rarity:'Épico' },
      { name: 'Carbon Exposed', chance: 7, stars: 4, color: '#1A1A1A', rarity:'Épico' },
      { name: 'Gold Chrome', chance: 3, stars: 5, color: '#8A6A00', rarity:'Lendário' },
    ]
  },
  {
    id: 'rims', label: 'RIMS', title: 'Rodas', desc: 'Forged.', statKey: 'bonus',
    options: [
      { name: 'Stock Hubcap', chance: 30, stars: 1, color: '#4A4A4A', bonus: 0.92, rarity:'Comum' },
      { name: 'Steelies', chance: 18, stars: 1, color: '#3A3A3A', bonus: 0.90, rarity:'Comum' },
      { name: 'Alloy Sport', chance: 18, stars: 2, color: '#6A6A6A', bonus: 0.98, rarity:'Incomum' },
      { name: 'Forged Light', chance: 12, stars: 3, color: '#8A8A8A', bonus: 1.06, rarity:'Raro' },
      { name: 'Drag Beadlock', chance: 10, stars: 3, color: '#7A1840', bonus: 1.09, rarity:'Raro' },
      { name: 'Carbon Aero', chance: 8, stars: 4, color: '#1A1A1A', bonus: 1.12, rarity:'Épico' },
      { name: 'Gold TE37', chance: 4, stars: 5, color: '#8A6A00', bonus: 1.16, rarity:'Lendário' },
    ]
  },
  {
    id: 'underglow', label: 'UNDERGLOW', title: 'Neon Underglow', desc: 'Cyberpunk.', statKey: 'stars',
    options: [
      { name: 'Off', chance: 22, stars: 1, color: '#080A14', glow:'none', rarity:'Comum' },
      { name: 'Ice Blue', chance: 24, stars: 1, color: '#006A7A', glow:'#00B8D4', rarity:'Comum' },
      { name: 'White Glow', chance: 16, stars: 1, color: '#E0E0E0', glow:'#fff', rarity:'Comum' },
      { name: 'Cyan Pulse', chance: 14, stars: 2, color: '#00B8D4', glow:'#00E5FF', rarity:'Incomum' },
      { name: 'Purple Haze', chance: 12, stars: 3, color: '#5A2E8A', glow:'#7C4DFF', rarity:'Raro' },
      { name: 'Magma Flow', chance: 8, stars: 4, color: '#7A1840', glow:'#FF3D8A', rarity:'Épico' },
      { name: 'Aurora RGB', chance: 4, stars: 5, color: '#8A6A00', glow:'rainbow', rarity:'Lendário' },
    ]
  },
];

const SCENARIOS = [
  { id:'city', name:'Neon City', dist:402, icon:'🌃', accent:'#00E5FF', desc:'1/4 milha • Noturna', bg:['#05071A','#0A1430'], fog:'#7C4DFF' },
  { id:'desert', name:'Desert Dunes', dist:804, icon:'🏜️', accent:'#FF8A00', desc:'1/2 milha • Areia', bg:['#1A0F08','#3A2210'], fog:'#FF6B00' },
  { id:'forest', name:'Forest Pass', dist:201, icon:'🌲', accent:'#00C853', desc:'1/8 milha • Neblina', bg:['#06140D','#0F2A1A'], fog:'#00E676' },
  { id:'harbor', name:'Harbor Dock', dist:402, icon:'⚓', accent:'#7C4DFF', desc:'1/4 milha • Chuva', bg:['#05141E','#0A2230'], fog:'#00B8D4' },
  { id:'snow', name:'Snow Peak', dist:1000, icon:'🏔️', accent:'#E0F0FF', desc:'1000m • Gelo', bg:['#070F1E','#12233A'], fog:'#B0C4DE' },
];
const OPPONENTS = [
  {name:"Ryo Tanaka", tier:1, mult:0.92},{name:"Mika Sato", tier:1, mult:0.96},
  {name:"Alex Rivera", tier:2, mult:1.0},{name:"Kenji Drag", tier:2, mult:1.04},
  {name:"Luna Vex", tier:3, mult:1.08},{name:"Dom Torv", tier:3, mult:1.12},
  {name:"Jett Nitro", tier:4, mult:1.16},{name:"Sakura Drift", tier:4, mult:1.18},
  {name:"Blaze K.", tier:5, mult:1.24},{name:"Neon Ace", tier:5, mult:1.28},{name:"Ghost K.", tier:5, mult:1.32},
];
function calculateStats(build){
  const eng=build[0], cyl=build[1], ind=build[2], w=build[3], drive=build[4], tyre=build[5], gear=build[6], exh=build[9], shape=build[10], rims=build[12], susp=build[8];
  let pwr=0;
  if(eng && cyl && ind){ pwr = eng.hp * cyl.mult * ind.mult; if(exh) pwr*=exh.bonus; if(rims) pwr*= (0.98 + (rims.bonus-0.90)*0.15); pwr=Math.round(pwr); }
  const mass = w ? w.kg : 1500;
  let grip=1; if(drive && tyre) grip=drive.grip*tyre.grip; if(susp) grip*=susp.bonus;
  const aero = shape ? shape.aero : 1.0;
  let top=0; if(pwr){ const pw=pwr/(mass/1000); top=Math.round((pw*0.62+90)*aero*(0.95+grip*0.06)); if(gear) top=Math.round(top*gear.eff); top=Math.min(520,Math.max(120,top)); }
  let zero100=9.5; if(pwr && mass){ const pw=pwr/mass; zero100=Math.max(1.6, 6.8 - pw*3.2 + (2-grip)*0.9 - (aero-1)*0.4); zero100=Math.round(zero100*100)/100; }
  let quarter=15.5 - (pwr/150) + (mass/800) - (grip-1)*1.2; quarter=Math.max(7.1,Math.min(16,quarter)); if(gear) quarter-= (gear.eff-1)*1.4; quarter=Math.round(quarter*1000)/1000;
  return { pwr, mass, grip: Math.round(grip*100)/100, aero, top, zero100, quarter };
}
function getBetterOptions(cat, cur){
  if(!cur) return cat.options;
  const key=cat.statKey, curVal=cur[key] ?? cur.stars, lower=cat.lowerIsBetter;
  return cat.options.filter(o=>{
    if(o.name===cur.name) return false;
    if(o.stars > cur.stars) return true;
    if(o.stars < cur.stars) return false;
    const v=o[key] ?? o.stars; return lower ? v < curVal : v > curVal;
  });
}

// === WHEEL CLASS ===
class Wheel {
  constructor(canvas){
    this.canvas=canvas; this.ctx=canvas.getContext('2d'); this.opts=[]; this.rotation=0; this.dpr=Math.max(1, window.devicePixelRatio||1);
    this.resize(); window.addEventListener('resize', ()=> this.resize());
  }
  resize(){
    const s=560;
    this.canvas.width=s*this.dpr; this.canvas.height=s*this.dpr;
    this.canvas.style.width=s+'px'; this.canvas.style.height=s+'px';
    this.ctx.setTransform(this.dpr,0,0,this.dpr,0,0);
    this.draw();
  }
  setOptions(opts){ this.opts=opts||[]; this.rotation=0; this.draw(); }
  draw(){
    const ctx=this.ctx, W=560, H=560, CX=280, CY=280, R=228;
    ctx.clearRect(0,0,W,H);
    if(!this.opts || !this.opts.length){
      // desenha placeholder para não ficar tela preta
      ctx.fillStyle='#0A0F2A'; ctx.beginPath(); ctx.arc(CX,CY,R,0,Math.PI*2); ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.08)'; ctx.font='600 13px Space Grotesk'; ctx.textAlign='center'; ctx.fillText('Carregando...', CX, CY);
      return;
    }
    // rim externo metálico
    const rimGrad=ctx.createRadialGradient(CX,CY,R+6,CX,CY,R+18);
    rimGrad.addColorStop(0,'#E8ECF2'); rimGrad.addColorStop(0.5,'#9AA4B5'); rimGrad.addColorStop(1,'#5A6575');
    ctx.fillStyle=rimGrad; ctx.beginPath(); ctx.arc(CX,CY,R+14,0,Math.PI*2); ctx.fill();
    ctx.fillStyle='#0A0E22'; ctx.beginPath(); ctx.arc(CX,CY,R+8,0,Math.PI*2); ctx.fill();
    const total=this.opts.length, anglePer=(Math.PI*2)/total;
    for(let i=0;i<total;i++){
      const opt=this.opts[i], start=-Math.PI/2 + this.rotation + i*anglePer, end=start+anglePer;
      ctx.beginPath(); ctx.moveTo(CX,CY); ctx.arc(CX,CY,R,start,end); ctx.closePath();
      const g=ctx.createRadialGradient(CX,CY,28,CX,CY,R);
      g.addColorStop(0, lighten(opt.color, 26)); g.addColorStop(0.6, opt.color); g.addColorStop(1, darken(opt.color, 24));
      ctx.fillStyle=g; ctx.fill();
      ctx.strokeStyle='rgba(255,255,255,0.10)'; ctx.lineWidth=1.1; ctx.stroke();
      ctx.save();
      const mid=(start+end)/2, tx=CX+Math.cos(mid)*(R*0.62), ty=CY+Math.sin(mid)*(R*0.62);
      ctx.translate(tx,ty); ctx.rotate(mid+Math.PI/2);
      ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.font='800 11px Outfit, sans-serif'; ctx.fillStyle='rgba(255,255,255,0.97)'; ctx.shadowColor='rgba(0,0,0,0.65)'; ctx.shadowBlur=6;
      wrapText(ctx, opt.name, 0, -7, 88, 11);
      ctx.shadowBlur=0;
      const ch=opt.chance.toFixed(1)+'%';
      ctx.font='700 9px JetBrains Mono'; const tw=ctx.measureText(ch).width;
      ctx.fillStyle='rgba(0,0,0,0.42)'; ctx.beginPath(); ctx.roundRect(-tw/2-6, 10, tw+12, 14, 7); ctx.fill();
      ctx.fillStyle= opt.stars>=3? '#FFE9A8':'rgba(180,220,255,0.96)'; ctx.fillText(ch,0,17);
      ctx.font='8.5px Space Grotesk'; ctx.fillStyle= opt.stars>=5? '#FFD54A': opt.stars>=4? '#FF6B8A':'rgba(255,255,255,0.72)'; ctx.fillText('★'.repeat(opt.stars),0,31);
      ctx.restore();
    }
    // hub
    const hubR=60; const hg=ctx.createRadialGradient(CX,CY,18,CX,CY,hubR);
    hg.addColorStop(0,'#2A2F45'); hg.addColorStop(0.6,'#1A1E33'); hg.addColorStop(1,'#070A18');
    ctx.fillStyle=hg; ctx.beginPath(); ctx.arc(CX,CY,hubR,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle='rgba(255,255,255,0.13)'; ctx.lineWidth=1.2; ctx.stroke();
    for(let r=22;r<58;r+=7){ ctx.beginPath(); ctx.arc(CX,CY,r,0,Math.PI*2); ctx.strokeStyle='rgba(255,255,255,0.05)'; ctx.lineWidth=1; ctx.stroke(); }
    ctx.beginPath(); ctx.arc(CX,CY,4.2,0,Math.PI*2); ctx.fillStyle='#E8ECF2'; ctx.fill();
    function lighten(hex,amt){ try{let c=hex.replace('#',''); if(c.length===3) c=c.split('').map(x=>x+x).join(''); const n=parseInt(c,16); let r=Math.min(255,(n>>16&255)+amt), g=Math.min(255,(n>>8&255)+amt), b=Math.min(255,(n&255)+amt); return `rgb(${r},${g},${b})`}catch{return hex}}
    function darken(hex,amt){ try{let c=hex.replace('#',''); if(c.length===3) c=c.split('').map(x=>x+x).join(''); const n=parseInt(c,16); let r=Math.max(0,(n>>16&255)-amt), g=Math.max(0,(n>>8&255)-amt), b=Math.max(0,(n&255)-amt); return `rgb(${r},${g},${b})`}catch{return hex}}
    function wrapText(ctx,text,x,y,maxW,lh){ const words=text.split(' '); let line='', lines=[]; for(let n=0;n<words.length;n++){ const test=line+words[n]+' '; if(ctx.measureText(test).width>maxW && n>0){ lines.push(line.trim()); line=words[n]+' '; } else line=test; } lines.push(line.trim()); if(lines.length>2){ lines=[lines[0], lines.slice(1).join(' ')]; if(ctx.measureText(lines[1]).width>maxW) lines[1]=lines[1].slice(0,13)+'.'; } const sy=y-(lines.length-1)*lh/2; lines.forEach((l,i)=> ctx.fillText(l,x,sy+i*lh)); }
  }
  spinTo(winnerIndex, opts={duration:4300}){
    return new Promise(resolve=>{
      const total=this.opts.length, anglePer=(Math.PI*2)/total;
      let target= -winnerIndex*anglePer - anglePer/2;
      const extra=6+Math.random()*1.6; let cur=this.rotation%(Math.PI*2), fin=target; while(fin<cur) fin+=Math.PI*2; fin+=extra*Math.PI*2;
      const over=anglePer*0.72, overFin=fin+over, bounceFin=fin, start=this.rotation, dur=opts.duration, t0=performance.now();
      let last=-1; const onTick=opts.onTick;
      const anim=(now)=>{
        const t=Math.min(1,(now-t0)/dur); let rot;
        if(t<0.88){ const tt=t/0.88, e=1-Math.pow(1-tt,3.4); rot=start+e*(overFin-start); }
        else { const tt=(t-0.88)/0.12, e=1-Math.pow(1-tt,2.6); rot=overFin+e*(bounceFin-overFin); }
        const tick=Math.floor((rot-start)/anglePer);
        if(tick!==last){ last=tick; const sp=1-t; if(onTick) onTick(sp,t); if(navigator.vibrate && t<0.93 && tick%(t<0.55?1:2)===0) navigator.vibrate(7); }
        this.rotation=rot; this.draw();
        if(t<1) requestAnimationFrame(anim); else { this.rotation=((target%(Math.PI*2))+Math.PI*2)%(Math.PI*2); this.draw(); resolve(winnerIndex); }
      };
      requestAnimationFrame(anim);
    });
  }
}

// === RACE CLASS ===
class RaceEngine {
  constructor(canvas, onUpdate, onFinish){
    this.canvas=canvas; this.ctx=canvas.getContext('2d'); this.onUpdate=onUpdate; this.onFinish=onFinish;
    this.dpr=Math.max(1,window.devicePixelRatio||1); this.w=440; this.h=640; this.reset();
    this.resize(); window.addEventListener('resize', ()=> this.resize());
    this._pat=null;
  }
  resize(){ const w=440,h=640; this.canvas.width=w*this.dpr; this.canvas.height=h*this.dpr; this.canvas.style.width=w+'px'; this.canvas.style.height=h+'px'; this.ctx.setTransform(this.dpr,0,0,this.dpr,0,0); this.w=w; this.h=h; this.draw(0,0,this.scenario); }
  reset(){ this.state='idle'; this.time=0; this.distance=0; this.oppDistance=0; this.speed=0; this.oppSpeed=0; this.rpm=900; this.gear=1; this.shiftCooldown=0; this.particles=[]; this.carBuild=null; this.reaction=null; this.perfectShifts=0; this.totalShifts=0; this.boost=0; this.scenario=null; this.raceDistance=402; }
  setBuild(build, stats, scenario, dist){ this.carBuild=build; this.stats=stats; this.scenario=scenario; this.raceDistance=dist||scenario.dist; const base=stats.quarter*(this.raceDistance/402); const jitter=(Math.random()*0.16-0.08); this.oppQuarter=Math.max(4.2, base*(1+jitter)); this.draw(0,0,scenario); }
  getPat(){
    if(this._pat) return this._pat;
    const c=document.createElement('canvas'); c.width=96; c.height=96; const g=c.getContext('2d');
    g.fillStyle='#0D1020'; g.fillRect(0,0,96,96);
    for(let i=0;i<220;i++){ const x=Math.random()*96,y=Math.random()*96,r=Math.random()*1.1; g.fillStyle=`rgba(255,255,255,${0.035+Math.random()*0.045})`; g.beginPath(); g.arc(x,y,r,0,Math.PI*2); g.fill(); }
    g.strokeStyle='rgba(255,255,255,0.04)'; g.lineWidth=0.6; for(let i=0;i<6;i++){ g.beginPath(); g.moveTo(Math.random()*96,0); g.bezierCurveTo(Math.random()*96,32,Math.random()*96,64,Math.random()*96,96); g.stroke(); }
    this._pat=this.ctx.createPattern(c,'repeat'); return this._pat;
  }
  draw(pDist,oDist,sc){
    const ctx=this.ctx,w=this.w,h=this.h, s=sc||this.scenario||{bg:['#05071A','#0A1430'], accent:'#00E5FF', fog:'#7C4DFF', id:'city'};
    ctx.clearRect(0,0,w,h);
    const sky=ctx.createLinearGradient(0,0,0,140); sky.addColorStop(0,s.bg[0]); sky.addColorStop(1,s.bg[1]); ctx.fillStyle=sky; ctx.fillRect(0,0,w,140);
    const glow=ctx.createRadialGradient(w/2,90,0,w/2,90,320); glow.addColorStop(0,s.fog+'33'); glow.addColorStop(1,'transparent'); ctx.fillStyle=glow; ctx.fillRect(0,0,w,160);
    ctx.save();
    if(s.id==='desert'){ ctx.fillStyle='#2A1A0C'; ctx.beginPath(); ctx.moveTo(0,120); ctx.quadraticCurveTo(w*0.2,85,w*0.45,105); ctx.quadraticCurveTo(w*0.7,125,w,95); ctx.lineTo(w,140); ctx.lineTo(0,140); ctx.closePath(); ctx.fill(); ctx.fillStyle='#3A2614'; ctx.beginPath(); ctx.moveTo(0,125); ctx.quadraticCurveTo(w*0.3,100,w*0.6,118); ctx.quadraticCurveTo(w*0.85,135,w,115); ctx.lineTo(w,140); ctx.lineTo(0,140); ctx.closePath(); ctx.fill(); ctx.fillStyle='rgba(255,160,60,0.9)'; ctx.beginPath(); ctx.arc(w*0.78,38,18,0,Math.PI*2); ctx.fill(); }
    else if(s.id==='forest'){ ctx.fillStyle='#0A1F14'; for(let i=0;i<14;i++){ const x=(i/13)*w+Math.random()*10, tw=18+Math.random()*14; ctx.beginPath(); ctx.moveTo(x,140); ctx.lineTo(x-tw/2,140); ctx.lineTo(x,70+Math.random()*18); ctx.lineTo(x+tw/2,140); ctx.closePath(); ctx.fill(); } }
    else if(s.id==='city'){ ctx.fillStyle='#0A0F2A'; const bs=[38,52,44,62,36,58,48,42,55]; let x=0,bw=w/bs.length; bs.forEach(hb=>{ ctx.fillRect(x+2,140-hb,bw-4,hb); x+=bw; }); }
    else if(s.id==='harbor'){ ctx.fillStyle='#0A1E2A'; ctx.fillRect(0,98,w,42); ctx.strokeStyle='rgba(124,77,255,0.55)'; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(44,140); ctx.lineTo(44,92); ctx.lineTo(88,92); ctx.stroke(); ctx.beginPath(); ctx.moveTo(w-60,140); ctx.lineTo(w-60,98); ctx.lineTo(w-22,98); ctx.stroke(); }
    else if(s.id==='snow'){ ctx.fillStyle='#0D1A2E'; ctx.beginPath(); ctx.moveTo(0,120); ctx.lineTo(w*0.32,78); ctx.lineTo(w*0.55,96); ctx.lineTo(w*0.78,72); ctx.lineTo(w,98); ctx.lineTo(w,140); ctx.lineTo(0,140); ctx.closePath(); ctx.fill(); }
    ctx.restore();
    const fg=ctx.createLinearGradient(0,110,0,160); fg.addColorStop(0,'transparent'); fg.addColorStop(1,'rgba(0,0,0,0.35)'); ctx.fillStyle=fg; ctx.fillRect(0,110,w,50);
    const tTop=138, tBot=h-24, tWTop=132, tWBot=w-22;
    ctx.save(); ctx.beginPath(); ctx.moveTo((w-tWTop)/2,tTop); ctx.lineTo((w+tWTop)/2,tTop); ctx.lineTo((w+tWBot)/2,tBot); ctx.lineTo((w-tWBot)/2,tBot); ctx.closePath(); ctx.fillStyle=this.getPat(); ctx.fill();
    const tg=ctx.createLinearGradient(0,tTop,0,tBot); tg.addColorStop(0,'rgba(0,0,0,0.12)'); tg.addColorStop(1,'rgba(0,0,0,0.32)'); ctx.fillStyle=tg; ctx.fill();
    ctx.strokeStyle=s.accent; ctx.lineWidth=1.8; ctx.shadowColor=s.accent; ctx.shadowBlur=10; ctx.beginPath(); ctx.moveTo(w/2,tTop); ctx.lineTo(w/2,tBot); ctx.stroke(); ctx.shadowBlur=0;
    ctx.setLineDash([10,10]); ctx.strokeStyle='rgba(255,255,255,0.32)'; ctx.lineWidth=1.2; ctx.beginPath(); ctx.moveTo((w-tWTop)/2+tWTop*0.25,tTop); ctx.lineTo((w-tWBot)/2+tWBot*0.25,tBot); ctx.stroke(); ctx.beginPath(); ctx.moveTo((w-tWTop)/2+tWTop*0.75,tTop); ctx.lineTo((w-tWBot)/2+tWBot*0.75,tBot); ctx.stroke(); ctx.setLineDash([]);
    ctx.strokeStyle=s.accent; ctx.lineWidth=2.2; ctx.shadowColor=s.accent; ctx.shadowBlur=12; ctx.beginPath(); ctx.moveTo((w-tWTop)/2,tTop); ctx.lineTo((w-tWBot)/2,tBot); ctx.stroke(); ctx.beginPath(); ctx.moveTo((w+tWTop)/2,tTop); ctx.lineTo((w+tWBot)/2,tBot); ctx.stroke(); ctx.shadowBlur=0;
    ctx.fillStyle='#E8ECF2'; ctx.fillRect((w-tWTop)/2,tTop,tWTop,5);
    ctx.fillStyle='rgba(255,255,255,0.52)'; ctx.font='700 9px JetBrains Mono'; ctx.textAlign='center';
    const tot=this.raceDistance||402;
    for(let d=100; d<tot; d+= d>=500?200:100){ const p=d/tot, y=tTop+p*(tBot-tTop), wt=tWTop+p*(tWBot-tWTop); ctx.fillText(d+'M',w/2,y-6); ctx.fillStyle='rgba(255,255,255,0.18)'; ctx.fillRect((w-wt)/2,y,wt,1); ctx.fillStyle='rgba(255,255,255,0.52)'; }
    ctx.restore();
    const pP=Math.min(1,pDist/tot), oP=Math.min(1,oDist/tot), py=tTop+pP*(tBot-tTop-30), oy=tTop+oP*(tBot-tTop-30), ps=0.58+pP*0.74, os=0.58+oP*0.74;
    const lane=(prog)=>{ const wt=tWTop+prog*(tWBot-tWTop); return wt*0.25; };
    this.drawCar(w/2-lane(pP), py, ps, true); this.drawCar(w/2+lane(oP), oy, os, false);
    this.particles.forEach(p=>{ ctx.globalAlpha=p.alpha; ctx.fillStyle=p.color; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill(); }); ctx.globalAlpha=1;
    if(pP>0.97||oP>0.97){ const fy=tBot-10; ctx.fillStyle='#F0F3F7'; for(let i=0;i<20;i++) if(i%2===0) ctx.fillRect((w-tWBot)/2+i*(tWBot/20),fy,tWBot/20,6); ctx.fillStyle='#070A1E'; ctx.font='800 10px Space Grotesk'; ctx.fillText('FINISH • '+tot+'M',w/2,fy+16); }
  }
  drawCar(x,y,sc,isPlayer){
    const ctx=this.ctx; ctx.save(); ctx.translate(x,y); ctx.scale(sc,sc);
    ctx.fillStyle='rgba(0,0,0,0.42)'; ctx.beginPath(); ctx.ellipse(0,13,19,8,0,0,Math.PI*2); ctx.fill();
    const body=isPlayer?(this.carBuild?.[11]?.color||'#0A6B7A'):'#7A1840', acc=isPlayer?(this.carBuild?.[13]?.glow||'#00E5FF'):'#FF3D8A';
    ctx.fillStyle=body; ctx.strokeStyle='rgba(255,255,255,0.14)'; ctx.lineWidth=1; ctx.beginPath(); ctx.roundRect(-15.5,-20,31,40,5); ctx.fill(); ctx.stroke();
    ctx.fillStyle='rgba(255,255,255,0.08)'; ctx.fillRect(-12,-17,24,1.2);
    ctx.fillStyle='#0A1020'; ctx.beginPath(); ctx.roundRect(-9.5,-9,19,14,2.2); ctx.fill();
    ctx.fillStyle='rgba(180,220,255,0.96)'; ctx.beginPath(); ctx.roundRect(-8.5,-7.5,17,5.5,1.2); ctx.fill();
    ctx.fillStyle='rgba(255,255,255,0.42)'; ctx.fillRect(-7,-6.5,7,1);
    ctx.fillStyle='#0A0E1E'; ctx.fillRect(-13.5,-21.5,27,4); ctx.fillRect(-12,18,24,3.2);
    [[-16,-12],[12,-12],[-16,6],[12,6]].forEach(([wx,wy])=>{ ctx.fillStyle='#080A12'; ctx.beginPath(); ctx.roundRect(wx-1.5,wy-1,5,9,1.5); ctx.fill(); ctx.fillStyle='#D0D6E0'; ctx.beginPath(); ctx.arc(wx+1,wy+3.5,1.8,0,Math.PI*2); ctx.fill(); });
    ctx.fillStyle='rgba(0,0,0,0.22)'; ctx.fillRect(-15.5,-4,2.5,8); ctx.fillRect(13,-4,2.5,8);
    if(isPlayer && acc!=='none'){ const g=acc==='rainbow'?'#D4A017':acc; ctx.shadowColor=g; ctx.shadowBlur=16; ctx.strokeStyle=g; ctx.lineWidth=1.6; ctx.strokeRect(-15.5,-20,31,40); ctx.shadowBlur=0; ctx.fillStyle=g+'22'; ctx.beginPath(); ctx.ellipse(0,14,22,6,0,0,Math.PI*2); ctx.fill(); }
    else if(!isPlayer){ ctx.shadowColor='#FF3D8A'; ctx.shadowBlur=10; ctx.strokeStyle='rgba(255,61,138,0.85)'; ctx.lineWidth=1.2; ctx.strokeRect(-15.5,-20,31,40); ctx.shadowBlur=0; }
    if(isPlayer && this.boost>0.12){ ctx.globalAlpha=0.75+Math.random()*0.25; const grd=ctx.createRadialGradient(0,22,0,0,22,10); grd.addColorStop(0,'#FFF0A0'); grd.addColorStop(0.35,'#FF8A00'); grd.addColorStop(1,'transparent'); ctx.fillStyle=grd; ctx.beginPath(); ctx.moveTo(-6,20.5); ctx.quadraticCurveTo(0,30+Math.random()*5,6,20.5); ctx.lineTo(0,22); ctx.closePath(); ctx.fill(); ctx.globalAlpha=1; }
    ctx.restore();
  }
  async startCountdown(lights){
    this.state='countdown'; this.time=0; this.distance=0; this.oppDistance=0; this.speed=0; this.rpm=1100; this.gear=1; this.shiftCooldown=0; this.particles=[]; lights.forEach(l=>l.classList.remove('on','green'));
    for(let i=0;i<5;i++){ await new Promise(r=> setTimeout(r,620)); if(this.state!=='countdown') return false; lights[i].classList.add('on'); this.playTick(440+i*60,0.12); }
    await new Promise(r=> setTimeout(r,400+Math.random()*700)); if(this.state!=='countdown') return false;
    lights.forEach(l=>{l.classList.remove('on'); l.classList.add('green');}); this.playTick(880,0.25); if(navigator.vibrate) navigator.vibrate(35);
    this.state='racing'; this.greenTime=performance.now(); this.startTime=performance.now(); this.last=performance.now(); this.raf=requestAnimationFrame(()=> this.loop()); setTimeout(()=> lights.forEach(l=>l.classList.remove('green')),900); return true;
  }
  playTick(f,v){ try{ if(!this.audio) this.audio=new (window.AudioContext||window.webkitAudioContext)(); if(this.audio.state==='suspended') this.audio.resume(); const o=this.audio.createOscillator(),g=this.audio.createGain(); o.type='square'; o.frequency.value=f; g.gain.value=v; o.connect(g); g.connect(this.audio.destination); o.start(); g.gain.exponentialRampToValueAtTime(0.001,this.audio.currentTime+0.18); o.stop(this.audio.currentTime+0.19);}catch{} }
  launch(){ if(this.state==='countdown'){ this.falseStart=true; this.playTick(180,0.3); return {falseStart:true}; } if(this.state==='racing' && this.time<0.62){ const rt=(performance.now()-this.greenTime)/1000; this.reaction=rt; if(rt>=0.08&&rt<=0.28){ this.boost=0.92; this.perfectLaunch=true; } else if(rt<0.08) this.boost=-0.4; else this.boost=0; return {reaction:rt, perfect:this.perfectLaunch}; } return null; }
  shift(){ if(this.state!=='racing') return; if(this.shiftCooldown>0) return {cooldown:true}; this.totalShifts++; let res='bad'; if(this.rpm>=6200&&this.rpm<=7600){ res='perfect'; this.perfectShifts++; this.boost=Math.min(1,this.boost+0.45); } else if(this.rpm>=5600&&this.rpm<=7800){ res='good'; this.boost=Math.min(1,this.boost+0.18); } else { res='bad'; this.boost=Math.max(-0.2,this.boost-0.18); } const max=this.carBuild?.[6]?.gears||6; if(this.gear<max){ this.gear++; this.rpm=Math.max(3200,this.rpm-2600+Math.random()*300); this.shiftCooldown=0.18; for(let i=0;i<9;i++) this.particles.push({x:(this.w/2-50)+(Math.random()-0.5)*10, y:this.getY(this.distance)+19, r:2+Math.random()*3.5, alpha:0.9, color: res==='perfect'?'#00E676':'#FF8A00', vy:1+Math.random()*2.2, vx:(Math.random()-0.5)*2.2}); this.playTick(res==='perfect'?880:res==='good'?660:320,0.18); if(navigator.vibrate) navigator.vibrate(res==='perfect'?26:12); } else res='max'; return {result:res, rpm:this.rpm, gear:this.gear}; }
  getY(d){ const p=Math.min(1,d/this.raceDistance); return 138+p*(640-24-138-30); }
  loop(){
    if(this.state!=='racing') return;
    const now=performance.now(), dt=Math.min(0.033,(now-(this.last||now))/1000); this.last=now; this.time=(now-this.startTime)/1000;
    const s=this.stats, pwr=s.pwr, grip=s.grip, mass=s.mass;
    const ratio=[0,3.2,2.1,1.45,1.1,0.85,0.7,0.58,0.5][this.gear]||1;
    let target=900 + (this.speed*3.6)*ratio*38 + (pwr/100)*2;
    this.rpm+=(target-this.rpm)*Math.min(1,dt*6); this.rpm=Math.max(900,Math.min(8600,this.rpm)); if(this.rpm>8200) this.rpm-=180;
    let pf=1; const rn=this.rpm; if(rn<3500) pf=0.55+(rn-900)/2600*0.45; else if(rn<6000) pf=1.0; else if(rn<7600) pf=1.02-(rn-6000)/1600*0.12; else pf=0.72;
    const eg=grip*(this.falseStart?0.72:1)*(this.perfectLaunch?1.08:1);
    let acc=(pwr*pf*eg*(0.9+this.boost*0.35)/mass)*13.2; acc-= (this.speed*this.speed)*0.0021; const ge=this.carBuild?.[6]?.eff||1; acc*=ge; acc*=(0.92+s.aero*0.08);
    if(this.scenario?.id==='desert') acc*=0.97; if(this.scenario?.id==='snow') acc*=0.92; if(this.scenario?.id==='harbor') acc*=0.98;
    this.speed+=acc*dt; if(this.speed<0) this.speed=0; const top=s.top/3.6; if(this.speed>top) this.speed=top;
    this.distance+=this.speed*dt;
    const p=Math.min(1,this.time/this.oppQuarter), eased=p<0.5?2*p*p:1-Math.pow(-2*p+2,2)/2, wob=Math.sin(this.time*9)*1.1*(p<0.9?1:0);
    this.oppDistance=this.raceDistance*Math.pow(eased,1.08)+wob;
    if(this.shiftCooldown>0) this.shiftCooldown-=dt; if(this.boost>0) this.boost=Math.max(0,this.boost-dt*0.55); if(this.boost<0) this.boost=Math.min(0,this.boost+dt*0.7);
    this.particles.forEach(p=>{p.y+=p.vy; p.x+=p.vx; p.alpha-=dt*1.8; p.r*=0.985;}); this.particles=this.particles.filter(p=>p.alpha>0);
    if(this.distance>=this.raceDistance || this.oppDistance>=this.raceDistance){
      let pt=this.time+(this.falseStart?1.2:0); pt-=this.perfectShifts*0.045; pt=Math.max(4.2,pt); let ot=this.oppQuarter+(Math.random()*0.12-0.06); const win=pt<ot;
      this.state='finished'; this.draw(this.distance,this.oppDistance,this.scenario); this.onUpdate({speed:this.speed*3.6,rpm:this.rpm,gear:this.gear,time:this.time,distance:this.distance,oppDistance:this.oppDistance,boost:this.boost,perfectShifts:this.perfectShifts}); this.onFinish({win,playerTime:pt,oppTime:ot,reaction:this.reaction,falseStart:this.falseStart,perfectShifts:this.perfectShifts,scenario:this.scenario,raceDistance:this.raceDistance}); return;
    }
    this.draw(this.distance,this.oppDistance,this.scenario); this.onUpdate({speed:this.speed*3.6,rpm:this.rpm,gear:this.gear,time:this.time,distance:this.distance,oppDistance:this.oppDistance,boost:this.boost}); this.raf=requestAnimationFrame(()=> this.loop());
  }
  stop(){ this.state='idle'; if(this.raf) cancelAnimationFrame(this.raf); }
}

// === APP ===
const $=s=> document.querySelector(s);
const els={
  sceneCanvas: $('#sceneCanvas'), wheelCanvas: $('#wheelCanvas'), resultCard: $('#resultCard'), resultStars: $('#resultStars'), resultName: $('#resultName'), resultChance: $('#resultChance'),
  spinLeft: $('#spinLeft'), spinRight: $('#spinRight'), nextBtn: $('#nextBtn'), yourCarList: $('#yourCarList'), bestDots: $('#bestDots'), bestLabel: $('#bestLabel'), moneyDisplay: $('#moneyDisplay'),
  autoBtn: $('#autoBtn'), shopBtn: $('#shopBtn'), shopModal: $('#shopModal'), closeShop: $('#closeShop'), shopRemove: $('#shopRemove'), closeBtn: $('#closeBtn'),
  raceView: $('#raceView'), raceCanvas: $('#raceCanvas'), hudGear: $('#hudGear'), hudSpeed: $('#hudSpeed'), hudTime: $('#hudTime'), hudOpponent: $('#hudOpponent'), rpmFill: $('#rpmFill'), rpmVal: $('#rpmVal'),
  lights: [...document.querySelectorAll('#lights .light')], launchLeft: $('#launchLeft'), launchRight: $('#launchRight'), shiftLeft: $('#shiftLeft'), shiftRight: $('#shiftRight'), launchControls: $('#launchControls'), shiftControls: $('#shiftControls'), raceStartBtn: $('#raceStartBtn'), raceHint: $('#raceHint'), backToBuild: $('#backToBuild'),
  resultModal: $('#resultModal'), modalTitle: $('#modalTitle'), modalSub: $('#modalSub'), modalTime: $('#modalTime'), modalOppTime: $('#modalOppTime'), modalPB: $('#modalPB'), modalReward: $('#modalReward'), modalIcon: $('#modalIcon'), rewardBreak: $('#rewardBreak'), upgradeBtn: $('#upgradeBtn'), againBtn: $('#againBtn'), rebuildBtn: $('#rebuildBtn'), pickModal: $('#pickModal'), pickGrid: $('#pickGrid'), closePick: $('#closePick'),
};
let state={ money:2800, pb:null, currentCat:0, build:Array(14).fill(null), filtered:Array(14).fill(null), spinning:false, auto:false, sound:true, scenario:SCENARIOS[0], opponent:OPPONENTS[0] };
const wheel=new Wheel(els.wheelCanvas);
const race=new RaceEngine(els.raceCanvas, onRaceUpdate, onRaceFinish);
let audioCtx=null; function ensureAudio(){ if(!audioCtx) audioCtx=new (window.AudioContext||window.webkitAudioContext)(); if(audioCtx.state==='suspended') audioCtx.resume(); }
function tickSound(s,p){ if(!state.sound) return; try{ ensureAudio(); const o=audioCtx.createOscillator(),g=audioCtx.createGain(),f=audioCtx.createBiquadFilter(); o.type='square'; o.frequency.value=700-p*360+Math.random()*50; f.type='highpass'; f.frequency.value=780; g.gain.value=0.08*(0.4+s*0.9); o.connect(f); f.connect(g); g.connect(audioCtx.destination); o.start(); g.gain.exponentialRampToValueAtTime(0.001,audioCtx.currentTime+0.09); o.stop(audioCtx.currentTime+0.10);}catch{} }
function winSound(win){ if(!state.sound) return; try{ ensureAudio(); const seq=win?[440,554,659,880]:[220,175,140]; seq.forEach((f,i)=>{ const o=audioCtx.createOscillator(),g=audioCtx.createGain(); o.frequency.value=f; o.type=win?'sine':'triangle'; g.gain.value=0.14; o.connect(g); g.connect(audioCtx.destination); const t=audioCtx.currentTime+i*0.12; o.start(t); g.gain.exponentialRampToValueAtTime(0.001,t+0.32); o.stop(t+0.33);});}catch{}}
function vibrate(p){ if(navigator.vibrate) try{navigator.vibrate(p)}catch{} }

// EXPOSIÇÃO 360
const sCtx=els.sceneCanvas.getContext('2d'); let ang=0, sRAF=null;
function resizeScene(){ const dpr=Math.max(1,window.devicePixelRatio||1), r=els.sceneCanvas.getBoundingClientRect(); els.sceneCanvas.width=r.width*dpr; els.sceneCanvas.height=r.height*dpr; sCtx.setTransform(dpr,0,0,dpr,0,0); }
window.addEventListener('resize', resizeScene); resizeScene();
function drawScene(){
  try{
    const w=els.sceneCanvas.getBoundingClientRect().width, h=els.sceneCanvas.getBoundingClientRect().height;
    sCtx.clearRect(0,0,w,h);
    const bg=sCtx.createLinearGradient(0,0,0,h); bg.addColorStop(0,'#040512'); bg.addColorStop(0.55,'#080B1E'); bg.addColorStop(1,'#0A0F1E'); sCtx.fillStyle=bg; sCtx.fillRect(0,0,w,h);
    sCtx.fillStyle='rgba(255,255,255,0.55)';
    for(let i=0;i<28;i++){ const x=(Math.sin(i*12.7)*0.5+0.5)*w, y=(Math.cos(i*9.3)*0.5+0.5)*h*0.35, r=i%3===0?1.1:0.6; sCtx.globalAlpha=0.35+Math.sin(ang*0.02+i)*0.25; sCtx.beginPath(); sCtx.arc(x,y,r,0,Math.PI*2); sCtx.fill(); } sCtx.globalAlpha=1;
    const cx=w/2, gy=h*0.62, orbitX=Math.sin(ang*0.012)*w*0.08, topY=gy, botY=h*0.92, topW=w*0.08, botW=w*0.95;
    sCtx.fillStyle='#0B0B14'; sCtx.beginPath(); sCtx.moveTo(cx-topW+orbitX*0.2,topY); sCtx.lineTo(cx+topW+orbitX*0.2,topY); sCtx.lineTo(cx+botW,botY); sCtx.lineTo(cx-botW,botY); sCtx.closePath(); sCtx.fill();
    sCtx.strokeStyle='#FF3B9A'; sCtx.lineWidth=2.2; sCtx.shadowColor='#FF3B9A'; sCtx.shadowBlur=10; sCtx.beginPath(); const py1=gy+h*0.04, py2=gy+h*0.14; sCtx.moveTo(-20+orbitX*0.3,py1); sCtx.lineTo(w*0.85+orbitX*0.3,py2); sCtx.stroke(); sCtx.shadowBlur=0;
    sCtx.strokeStyle='rgba(255,255,255,0.92)'; sCtx.lineWidth=3; sCtx.beginPath(); sCtx.moveTo(cx-topW*0.9+orbitX*0.2,topY+6); sCtx.lineTo(cx-botW*0.82,botY); sCtx.stroke(); sCtx.beginPath(); sCtx.moveTo(cx+topW*0.9+orbitX*0.2,topY+6); sCtx.lineTo(cx+botW*0.82,botY); sCtx.stroke();
    const bx=w*0.78+Math.sin(ang*0.012)*10, by=gy+h*0.06; sCtx.fillStyle='#0F1A2E'; sCtx.fillRect(bx-8,by,16,h*0.10); sCtx.fillStyle='#E8F4FF'; sCtx.beginPath(); sCtx.moveTo(bx-10,by); sCtx.lineTo(bx+10,by); sCtx.lineTo(bx+8,by-8); sCtx.lineTo(bx-8,by-8); sCtx.closePath(); sCtx.fill(); sCtx.shadowColor='rgba(180,220,255,0.7)'; sCtx.shadowBlur=12; sCtx.fillStyle='rgba(180,220,255,0.9)'; sCtx.beginPath(); sCtx.arc(bx,by-2,6,0,Math.PI*2); sCtx.fill(); sCtx.shadowBlur=0;
    const carCX=cx+Math.sin(ang*0.012)*6, carCY=gy+h*0.11;
    drawLowPolyCar(sCtx, carCX, carCY, ang);
  }catch(e){ console.error('scene',e); }
  ang+=0.38; sRAF=requestAnimationFrame(drawScene);
}
function drawLowPolyCar(ctx,cx,cy,ang){
  const rad=(ang*0.9)*Math.PI/180, cos=Math.cos(rad), sin=Math.sin(rad);
  function P(x,y,z){ const xr=x*cos - z*sin, zr=x*sin+z*cos, sc=200/(200+zr+120), px=cx+xr*sc, py=cy - y*sc + zr*0.18*sc; return {x:px,y:py,sc,zr}; }
  const L=92,W=46,H=22,CH=16;
  const pts={ a:[-L/2,0,-W/2], b:[L/2,0,-W/2], c:[L/2,0,W/2], d:[-L/2,0,W/2], e:[-L/2,H,-W/2], f:[L/2,H,-W/2], g:[L/2,H,W/2], h:[-L/2,H,W/2], i:[-L*0.18,H,-W*0.32], j:[L*0.38,H,-W*0.32], k:[L*0.38,H,W*0.32], l:[-L*0.18,H,W*0.32], m:[-L*0.18,H+CH,-W*0.32], n:[L*0.38,H+CH,-W*0.32], o:[L*0.38,H+CH,W*0.32], p:[-L*0.18,H+CH,W*0.32] };
  const G={}; for(let k in pts) G[k]=P(...pts[k]);
  function face(ps,col,stroke){ ctx.fillStyle=col; ctx.beginPath(); ctx.moveTo(ps[0].x,ps[0].y); for(let i=1;i<ps.length;i++) ctx.lineTo(ps[i].x,ps[i].y); ctx.closePath(); ctx.fill(); if(stroke){ ctx.strokeStyle=stroke; ctx.lineWidth=1; ctx.stroke(); } }
  ctx.fillStyle='rgba(0,0,0,0.32)'; ctx.beginPath(); ctx.ellipse(cx,cy+18,58,14,0,0,Math.PI*2); ctx.fill();
  face([G.e,G.f,G.g,G.h],'#6B7280','rgba(0,0,0,0.25)');
  face([G.f,G.g,G.c,G.b],'#4B5563','rgba(0,0,0,0.25)');
  face([G.e,G.f,G.b,G.a],'#525A6B','rgba(0,0,0,0.25)');
  if((G.h.zr+G.g.zr)/2 < (G.e.zr+G.f.zr)/2) face([G.h,G.g,G.c,G.d],'#5A6478','rgba(0,0,0,0.25)');
  face([G.m,G.n,G.o,G.p],'#3A4458'); face([G.i,G.j,G.n,G.m],'#2E3648'); face([G.j,G.k,G.o,G.n],'#2E3648');
  [[-L*0.35,-W*0.5],[L*0.35,-W*0.5],[-L*0.35,W*0.5],[L*0.35,W*0.5]].forEach(([x,z])=>{ const p=P(x,-2,z), s=p.sc; ctx.fillStyle='#0A0A0F'; ctx.beginPath(); ctx.ellipse(p.x,p.y+6*s,9*s,9*s,0,0,Math.PI*2); ctx.fill(); ctx.fillStyle='#3A3A42'; ctx.beginPath(); ctx.arc(p.x,p.y+5*s,2.2*s,0,Math.PI*2); ctx.fill(); });
  const glow=state.build[13]?.glow; if(glow && glow!=='none'){ const col=glow==='rainbow'?'#FFD54A':glow; ctx.shadowColor=col; ctx.shadowBlur=14; ctx.strokeStyle=col; ctx.lineWidth=1.5; ctx.strokeRect(G.e.x,G.e.y,(G.g.x-G.e.x),2); ctx.shadowBlur=0; }
}

function load(){ try{ const s=JSON.parse(localStorage.getItem('wow-v4')||'null'); if(s){ state.money=s.money??2800; state.pb=s.pb??null; if(s.build && s.build.length===14){ // valida
    let ok=true; for(let i=0;i<14;i++){ if(s.build[i] && !CATEGORIES[i].options.find(o=>o.name===s.build[i].name)) ok=false; }
    if(ok) state.build=s.build; } const n=state.build.findIndex(v=>!v); state.currentCat=n===-1?14:n; } }catch{} }
function save(){ localStorage.setItem('wow-v4', JSON.stringify({money:state.money, pb:state.pb, build:state.build})); }
function updateMoney(){ els.moneyDisplay.textContent='$' + state.money.toLocaleString('pt-BR'); const can=state.money>=250 && !state.spinning && state.currentCat<14; if(els.shopRemove) els.shopRemove.disabled=!can; }
function updateBest(){ const best=state.build.filter(v=>v&&v.stars===5).length; els.bestLabel.textContent=`BEST ${best}/${state.build.length}`; els.bestDots.innerHTML=''; for(let i=0;i<state.build.length;i++){ const s=document.createElement('span'); if(state.build[i]){ if(state.build[i].stars===5) s.className='best'; else s.className='filled'; } els.bestDots.appendChild(s); } }
function updateCar(){ const labels=['PWR','MASS','DRIVE','TYRES','GEARS','BRAKES','SUSP','EXHAUST','RIMS','AERO','TOP']; const st=calculateStats(state.build); const vals=[ st.pwr?st.pwr+' HP':'—', st.mass?st.mass+' KG':'—', state.build[4]?.name||'—', state.build[5]?.name||'—', state.build[6]?.name||'—', state.build[7]?.name||'—', state.build[8]?.name||'—', state.build[9]?.name||'—', state.build[12]?.name||'—', st.aero?st.aero.toFixed(2):'—', st.top?st.top+' KM/H':'—']; els.yourCarList.innerHTML=''; labels.forEach((l,i)=>{ const li=document.createElement('li'); li.innerHTML=`<span>${l}</span><b>${vals[i]}</b>`; els.yourCarList.appendChild(li); }); }

function showCategory(idx){
  if(idx>=14){ showReady(); return; }
  state.currentCat=idx;
  const cat=CATEGORIES[idx], opts=state.filtered[idx]||cat.options;
  document.querySelector('.engine-label').textContent=cat.label;
  wheel.setOptions(opts);
  els.resultCard.classList.add('hidden'); els.nextBtn.classList.add('hidden');
  els.spinLeft.disabled=false; els.spinRight.disabled=false;
  updateCar(); updateBest(); updateMoney();
  els.raceView.classList.add('hidden');
  document.querySelector('.wheel-layer').style.display='flex';
  document.querySelector('.ui-overlay').style.display='block';
}
function showReady(){
  state.currentCat=14; document.querySelector('.engine-label').textContent='PRONTO PARA CORRIDA';
  els.resultCard.classList.add('hidden'); els.spinLeft.disabled=true; els.spinRight.disabled=true;
  els.nextBtn.classList.remove('hidden'); els.nextBtn.textContent='🏁 CORRER AGORA →'; els.nextBtn.onclick=enterRace;
  updateCar(); updateBest();
}
function weightedPick(opts){ const tot=opts.reduce((a,b)=>a+b.chance,0); let r=Math.random()*tot; for(let i=0;i<opts.length;i++){ r-=opts[i].chance; if(r<=0) return i; } return opts.length-1; }
async function doSpin(){
  if(state.spinning) return; if(state.currentCat>=14) return;
  const opts=state.filtered[state.currentCat]||CATEGORIES[state.currentCat].options;
  if(!opts.length) return;
  state.spinning=true; els.spinLeft.disabled=true; els.spinRight.disabled=true; els.nextBtn.classList.add('hidden'); els.resultCard.classList.add('hidden');
  const wi=weightedPick(opts), win=opts[wi]; vibrate(16);
  await wheel.spinTo(wi, {duration: 4300+Math.random()*400, onTick: tickSound});
  state.build[state.currentCat]=win; state.filtered[state.currentCat]=null; save();
  els.resultName.textContent=win.name; els.resultChance.textContent=win.chance.toFixed(1)+'% CHANCE'; els.resultStars.textContent='★'.repeat(win.stars)+'☆'.repeat(5-win.stars); els.resultCard.classList.remove('hidden');
  updateCar(); updateBest(); updateMoney(); vibrate(win.stars>=4?[26,18,42]:22); if(win.stars>=4) winSound(true);
  state.spinning=false; els.spinLeft.disabled=false; els.spinRight.disabled=false;
  if(state.build.every(v=>v)){ els.nextBtn.classList.remove('hidden'); els.nextBtn.textContent='🏁 CORRER AGORA →'; els.nextBtn.onclick=enterRace; if(state.auto) setTimeout(enterRace,900); }
  else { els.nextBtn.classList.remove('hidden'); els.nextBtn.textContent='CONTINUAR →'; els.nextBtn.onclick=()=>{ const nxt=state.build.findIndex((v,i)=> i>state.currentCat && !v); if(nxt!==-1) showCategory(nxt); else { const f=state.build.findIndex(v=>!v); if(f!==-1) showCategory(f); } }; if(state.auto) setTimeout(()=> els.nextBtn.click(),900); }
}
function removeWorst(){
  if(state.money<250||state.spinning) return; const idx=state.currentCat; if(idx>=14) return; const cat=CATEGORIES[idx], cur=state.filtered[idx]||cat.options; if(cur.length<=3) return;
  let worst=0,score=Infinity; cur.forEach((o,i)=>{ const s=o.stars*100+o.chance; if(s<score){score=s; worst=i;}}); const nxt=cur.filter((_,i)=>i!==worst); state.filtered[idx]=nxt; state.money-=250; save(); updateMoney(); wheel.setOptions(nxt); vibrate(16);
}
function enterRace(){
  const st=calculateStats(state.build); if(!st.pwr || state.build.some(v=>!v)){ alert('Monte as 14 peças!'); const f=state.build.findIndex(v=>!v); if(f!==-1) showCategory(f); return; }
  state.scenario=SCENARIOS[Math.floor(Math.random()*SCENARIOS.length)];
  const pool= st.top>380? OPPONENTS.filter(o=>o.tier>=3) : st.top>300? OPPONENTS.filter(o=>o.tier>=2): OPPONENTS;
  state.opponent=pool[Math.floor(Math.random()*pool.length)];
  document.querySelector('.wheel-layer').style.display='none'; document.querySelector('.ui-overlay').style.display='none'; els.raceView.classList.remove('hidden');
  race.reset(); race.setBuild(state.build, st, state.scenario, state.scenario.dist);
  els.hudGear.textContent='N'; els.hudSpeed.textContent='0'; els.hudTime.textContent='0.000s'; els.hudOpponent.textContent='—'; els.rpmFill.style.width='8%'; els.lights.forEach(l=>l.classList.remove('on','green'));
  els.launchControls.classList.remove('hidden'); els.shiftControls.classList.add('hidden'); els.raceStartBtn.classList.remove('hidden'); els.raceStartBtn.textContent='PREPARAR LARGADA'; els.raceStartBtn.disabled=false;
  els.raceHint.textContent=`${state.scenario.icon} ${state.scenario.dist}m • Acerte o verde!`; race.draw(0,0,state.scenario);
}
async function startRace(){ els.raceStartBtn.disabled=true; els.raceStartBtn.textContent='AGUARDE AS LUZES...'; els.raceHint.textContent='LAUNCH no verde!'; els.launchControls.classList.remove('hidden'); els.shiftControls.classList.add('hidden'); const ok=await race.startCountdown(els.lights); if(!ok) return; els.raceStartBtn.classList.add('hidden'); els.raceHint.textContent='SHIFT no verde!'; els.launchControls.classList.add('hidden'); els.shiftControls.classList.remove('hidden'); }
function handleLaunch(){ const r=race.launch(); if(r?.falseStart){ els.raceHint.textContent='⚠️ QUEIMA! +1.2s'; vibrate([40,30,40]); } else if(r?.reaction!=null){ els.raceHint.textContent= r.perfect? `🚀 PERFECT ${r.reaction.toFixed(3)}s`:`Largada ${r.reaction.toFixed(3)}s`; if(r.perfect) vibrate(22); } }
function handleShift(){ const r=race.shift(); if(!r) return; if(r.result==='perfect') els.raceHint.textContent='✨ PERFECT!'; else if(r.result==='good') els.raceHint.textContent='✓ Boa'; else if(r.result==='bad') els.raceHint.textContent='✕ Fora'; els.hudGear.textContent=r.gear||race.gear; }
function onRaceUpdate(d){ els.hudSpeed.textContent=Math.round(d.speed).toString(); els.hudTime.textContent=d.time.toFixed(3)+'s'; const diff=d.distance-d.oppDistance; els.hudOpponent.textContent=(diff>=0?'+':'')+diff.toFixed(1)+'m'; els.hudOpponent.style.color=diff>=0?'#00E676':'#FF3B9A'; els.hudGear.textContent= race.gear===1 && d.time<0.4? '1': race.gear; const pct=Math.max(0,Math.min(100,(d.rpm/8000)*100)); els.rpmFill.style.width=pct+'%'; els.rpmVal.textContent=Math.round(d.rpm).toString(); }
function onRaceFinish(res){
  const st=calculateStats(state.build), pQ=st.quarter*(res.raceDistance/402), diff=pQ/res.oppTime, distF=res.raceDistance/402, tierM=state.opponent.tier*0.22+0.45;
  let base=res.win?620:110; let rew=Math.round(base*diff*distF*tierM + res.raceDistance*0.65); rew+=res.perfectShifts*(res.win?140:40); if(res.falseStart) rew=Math.round(rew*0.45); rew=Math.round(rew*(0.92+Math.random()*0.16)); rew=Math.max(60,rew);
  state.money+=rew; if(!state.pb || res.playerTime < state.pb) state.pb=res.playerTime; save(); updateMoney();
  els.modalTitle.textContent=res.win?'VITÓRIA!':'DERROTA'; els.modalIcon.textContent=res.win?'🏆':'💥'; els.modalSub.textContent=res.win?`Venceu ${state.opponent.name} por ${(Math.abs(res.playerTime-res.oppTime)).toFixed(2)}s em ${res.scenario.name}`:`${state.opponent.name} venceu por ${(res.oppTime-res.playerTime).toFixed(2)}s • ${res.scenario.name}`;
  els.modalTime.textContent=res.playerTime.toFixed(3)+'s'+(res.falseStart?' (+PENALTY)':''); els.modalOppTime.textContent=res.oppTime.toFixed(3)+'s'; els.modalPB.textContent=state.pb.toFixed(3)+'s'; els.modalReward.textContent='+ $'+rew.toLocaleString('pt-BR');
  els.rewardBreak.innerHTML=`Cenário ${res.scenario.icon} ${res.raceDistance}m ×${distF.toFixed(2)} • Dif. ×${diff.toFixed(2)} • Tier ${state.opponent.tier} ×${tierM.toFixed(2)} • Perfect ${res.perfectShifts}`;
  els.resultModal.classList.remove('hidden'); winSound(res.win); vibrate(res.win?[26,32,48]:[44,26,44]);
}
function bind(){
  els.spinLeft.addEventListener('click', doSpin); els.spinRight.addEventListener('click', doSpin);
  els.nextBtn.addEventListener('click', ()=> els.nextBtn.onclick && els.nextBtn.onclick());
  els.autoBtn.addEventListener('click', ()=>{ state.auto=!state.auto; els.autoBtn.classList.toggle('active',state.auto); els.autoBtn.textContent= state.auto?'AUTO: ON':'AUTO: OFF'; if(state.auto && !state.spinning && !state.build[state.currentCat]) doSpin(); else if(state.auto && state.build[state.currentCat]) els.nextBtn.click(); });
  els.shopBtn.addEventListener('click', ()=> els.shopModal.classList.remove('hidden')); els.closeShop.addEventListener('click', ()=> els.shopModal.classList.add('hidden')); els.shopRemove.addEventListener('click', removeWorst); els.shopModal.querySelector('.modal-backdrop').addEventListener('click', ()=> els.shopModal.classList.add('hidden'));
  els.closeBtn.addEventListener('click', ()=>{ if(confirm('Reiniciar?')){ localStorage.removeItem('wow-v4'); location.reload(); } });
  window.addEventListener('keydown', e=>{ if(e.code==='Space'){ e.preventDefault(); if(!els.raceView.classList.contains('hidden')){ if(race.state==='countdown') handleLaunch(); else if(race.state==='racing') handleShift(); } else if(!state.spinning && state.currentCat<14) doSpin(); }});
  els.raceStartBtn.addEventListener('click', startRace);
  ['click','touchstart'].forEach(ev=>{ els.launchLeft.addEventListener(ev, e=>{e.preventDefault(); handleLaunch();}); els.launchRight.addEventListener(ev, e=>{e.preventDefault(); handleLaunch();}); els.shiftLeft.addEventListener(ev, e=>{e.preventDefault(); handleShift();}); els.shiftRight.addEventListener(ev, e=>{e.preventDefault(); handleShift();}); });
  els.backToBuild.addEventListener('click', ()=>{ race.stop(); els.raceView.classList.add('hidden'); document.querySelector('.wheel-layer').style.display='flex'; document.querySelector('.ui-overlay').style.display='block'; });
  els.upgradeBtn.addEventListener('click', ()=>{ els.resultModal.classList.add('hidden'); openPick(); });
  els.againBtn.addEventListener('click', ()=>{ els.resultModal.classList.add('hidden'); enterRace(); });
  els.rebuildBtn.addEventListener('click', ()=>{ if(!confirm('Novo carro?')) return; els.resultModal.classList.add('hidden'); state.build=Array(14).fill(null); state.filtered=Array(14).fill(null); save(); showCategory(0); els.raceView.classList.add('hidden'); document.querySelector('.wheel-layer').style.display='flex'; document.querySelector('.ui-overlay').style.display='block'; });
  els.closePick.addEventListener('click', ()=> els.pickModal.classList.add('hidden')); els.pickModal.querySelector('.modal-backdrop').addEventListener('click', ()=> els.pickModal.classList.add('hidden')); els.resultModal.querySelector('.modal-backdrop').addEventListener('click', ()=> els.resultModal.classList.add('hidden'));
}
function openPick(){
  els.pickGrid.innerHTML=''; CATEGORIES.forEach((cat,i)=>{
    const cur=state.build[i], better=getBetterOptions(cat,cur), has=better.length>0;
    const b=document.createElement('button'); b.className=has?'':'disabled';
    b.innerHTML=`<strong>${cat.label}</strong><br><span style="font-size:11px;color:#9AA4C8">Atual: ${cur?cur.name:'—'}</span><br><b>${has?`↑ ${better.length} melhores`:'★ Já é o melhor'}</b>`;
    if(has) b.onclick=()=>{ els.pickModal.classList.add('hidden'); els.resultModal.classList.add('hidden'); state.filtered[i]=better; document.querySelector('.wheel-layer').style.display='flex'; document.querySelector('.ui-overlay').style.display='block'; els.raceView.classList.add('hidden'); showCategory(i); document.querySelector('.engine-label').textContent=cat.label+' • UPGRADE'; };
    els.pickGrid.appendChild(b);
  }); els.pickModal.classList.remove('hidden');
}

// INIT
load(); updateCar(); updateBest(); updateMoney(); showCategory(state.currentCat); bind(); drawScene();
window.WOW={state, CATEGORIES};
