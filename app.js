// WHEEL OF WHEELS — 3D PREMIUM FLUTUANTE — SEM BORDAS, SEM POP-UPS, ALTA QUALIDADE
// Roleta flutuante no meio, sem glass, sem abas, cores da foto, pintura normal, carro atualiza em tempo real, corrida 3D, 60k polys illusion, 4K textures

const CATEGORIES = [
  { id: 'engine', label: 'ENGINE SIZE', statKey: 'hp',
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
    ]},
  { id: 'cylinders', label: 'CYLINDERS', statKey: 'mult',
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
    ]},
  { id: 'induction', label: 'INDUCTION', statKey: 'mult',
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
    ]},
  { id: 'weight', label: 'WEIGHT', statKey: 'kg', lowerIsBetter: true,
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
    ]},
  { id: 'drive', label: 'DRIVE TYPE', statKey: 'grip',
    options: [
      { name: 'FWD', chance: 28, stars: 1, color: '#242F4A', grip: 0.86, rarity:'Comum' },
      { name: 'RWD', chance: 34, stars: 2, color: '#32405E', grip: 0.92, rarity:'Incomum' },
      { name: 'AWD', chance: 24, stars: 3, color: '#4B3A8A', grip: 1.08, rarity:'Raro' },
      { name: 'AWD Vectoring', chance: 9, stars: 4, color: '#7A1840', grip: 1.18, rarity:'Épico' },
      { name: 'RWD Drag Spec', chance: 5, stars: 5, color: '#8A6A00', grip: 1.22, rarity:'Lendário' },
    ]},
  { id: 'tyres', label: 'TYRES', statKey: 'grip',
    options: [
      { name: 'Cheap', chance: 18, stars: 1, color: '#242F4A', grip: 0.72, rarity:'Comum' },
      { name: 'Road', chance: 18, stars: 1, color: '#2A3552', grip: 0.88, rarity:'Comum' },
      { name: 'Semi-Slick', chance: 13.5, stars: 2, color: '#32405E', grip: 1.02, rarity:'Incomum' },
      { name: 'Race Hard', chance: 14, stars: 2, color: '#32405E', grip: 0.98, rarity:'Incomum' },
      { name: 'Race Medium', chance: 14, stars: 2, color: '#3A4A6E', grip: 1.06, rarity:'Incomum' },
      { name: 'Race Soft', chance: 10, stars: 3, color: '#4B3A8A', grip: 1.14, rarity:'Raro' },
      { name: 'Drag Slicks', chance: 8, stars: 4, color: '#7A1840', grip: 1.28, rarity:'Épico' },
      { name: 'Drag Radials Pro', chance: 4.5, stars: 5, color: '#8A6A00', grip: 1.38, rarity:'Lendário' },
    ]},
  { id: 'gearbox', label: 'GEARBOX', statKey: 'eff',
    options: [
      { name: 'CVT (lol)', chance: 13, stars: 1, color: '#242F4A', gears: 2, eff: 0.78, rarity:'Comum' },
      { name: 'Manual 4-Speed', chance: 14, stars: 1, color: '#242F4A', gears: 4, eff: 0.88, rarity:'Comum' },
      { name: 'Manual 5-Speed', chance: 16, stars: 1, color: '#2A3552', gears: 5, eff: 0.92, rarity:'Comum' },
      { name: 'Manual 6-Speed', chance: 16, stars: 2, color: '#32405E', gears: 6, eff: 0.97, rarity:'Incomum' },
      { name: 'Auto 6-Speed', chance: 14, stars: 2, color: '#3A4A6E', gears: 6, eff: 0.95, rarity:'Incomum' },
      { name: 'Auto 8-Speed', chance: 12, stars: 3, color: '#4B3A8A', gears: 8, eff: 1.02, rarity:'Raro' },
      { name: 'DCT 7-Speed', chance: 10, stars: 4, color: '#7A1840', gears: 7, eff: 1.08, rarity:'Épico' },
      { name: 'DCT 8-Speed Pro', chance: 5, stars: 5, color: '#8A6A00', gears: 8, eff: 1.14, rarity:'Lendário' },
    ]},
  { id: 'brakes', label: 'BRAKES', statKey: 'bonus',
    options: [
      { name: 'Drum', chance: 16, stars: 1, color: '#242F4A', bonus: 0.86, rarity:'Comum' },
      { name: 'Street Disc', chance: 20, stars: 1, color: '#2A3552', bonus: 0.92, rarity:'Comum' },
      { name: 'Sport', chance: 18, stars: 2, color: '#32405E', bonus: 1.0, rarity:'Incomum' },
      { name: 'Drilled Sport', chance: 19, stars: 2, color: '#32405E', bonus: 1.02, rarity:'Incomum' },
      { name: 'Race Steel', chance: 14, stars: 3, color: '#4B3A8A', bonus: 1.06, rarity:'Raro' },
      { name: 'Carbon Ceramic', chance: 9, stars: 4, color: '#7A1840', bonus: 1.12, rarity:'Épico' },
      { name: 'Carbon-Carbon Pro', chance: 4, stars: 5, color: '#8A6A00', bonus: 1.18, rarity:'Lendário' },
    ]},
  { id: 'suspension', label: 'SUSPENSION', statKey: 'bonus',
    options: [
      { name: 'Soft Stock', chance: 18, stars: 1, color: '#242F4A', bonus: 0.90, rarity:'Comum' },
      { name: 'Air Ride', chance: 20.5, stars: 1, color: '#242F4A', bonus: 0.92, rarity:'Comum' },
      { name: 'Street', chance: 18, stars: 1, color: '#2A3552', bonus: 0.96, rarity:'Comum' },
      { name: 'Sport Lowered', chance: 16, stars: 2, color: '#32405E', bonus: 1.02, rarity:'Incomum' },
      { name: 'Race Coilovers', chance: 14, stars: 3, color: '#4B3A8A', bonus: 1.08, rarity:'Raro' },
      { name: 'Drag 4-Link', chance: 9, stars: 4, color: '#7A1840', bonus: 1.16, rarity:'Épico' },
      { name: 'Active Aero', chance: 4.5, stars: 5, color: '#8A6A00', bonus: 1.22, rarity:'Lendário' },
    ]},
  { id: 'exhaust', label: 'EXHAUST', statKey: 'bonus',
    options: [
      { name: 'Stock Muffler', chance: 20, stars: 1, color: '#242F4A', bonus: 0.95, rarity:'Comum' },
      { name: 'Side Exit', chance: 22.5, stars: 1, color: '#242F4A', bonus: 0.98, rarity:'Comum' },
      { name: 'Cat-Back', chance: 18, stars: 2, color: '#32405E', bonus: 1.02, rarity:'Incomum' },
      { name: 'Straight Pipe', chance: 16, stars: 2, color: '#3A4A6E', bonus: 1.05, rarity:'Incomum' },
      { name: 'Titanium Race', chance: 12, stars: 3, color: '#4B3A8A', bonus: 1.09, rarity:'Raro' },
      { name: 'Inconel F1', chance: 8, stars: 4, color: '#7A1840', bonus: 1.14, rarity:'Épico' },
      { name: 'Flames Pro', chance: 3.5, stars: 5, color: '#8A6A00', bonus: 1.19, rarity:'Lendário' },
    ]},
  { id: 'shape', label: 'CAR SHAPE', statKey: 'aero',
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
    ]},
  // PINTURA NORMAL — sem frescura, cores clássicas
  { id: 'paint', label: 'PAINT', statKey: 'paintVal',
    options: [
      { name: 'Branco', chance: 16, stars: 1, color: '#F2F2F2', paintVal:1, rarity:'Comum' },
      { name: 'Preto', chance: 16, stars: 1, color: '#0F0F0F', paintVal:1, rarity:'Comum' },
      { name: 'Prata', chance: 12, stars: 1, color: '#C0C0C0', paintVal:1, rarity:'Comum' },
      { name: 'Cinza', chance: 12, stars: 1, color: '#6B7280', paintVal:1, rarity:'Comum' },
      { name: 'Azul', chance: 12, stars: 2, color: '#1E40AF', paintVal:2, rarity:'Incomum' },
      { name: 'Azul Claro', chance: 10, stars: 2, color: '#38BDF8', paintVal:2, rarity:'Incomum' },
      { name: 'Vermelho', chance: 10, stars: 2, color: '#DC2626', paintVal:2, rarity:'Incomum' },
      { name: 'Verde', chance: 8, stars: 2, color: '#16A34A', paintVal:2, rarity:'Incomum' },
      { name: 'Amarelo', chance: 7, stars: 3, color: '#EAB308', paintVal:3, rarity:'Raro' },
      { name: 'Laranja', chance: 7, stars: 3, color: '#F97316', paintVal:3, rarity:'Raro' },
      { name: 'Roxo', chance: 5, stars: 3, color: '#7C3AED', paintVal:3, rarity:'Raro' },
      { name: 'Verde Neon', chance: 3, stars: 4, color: '#22C55E', paintVal:4, rarity:'Épico' },
      { name: 'Dourado', chance: 2, stars: 5, color: '#D4A017', paintVal:5, rarity:'Lendário' },
    ]},
  { id: 'rims', label: 'RIMS', statKey: 'bonus',
    options: [
      { name: 'Stock Hubcap', chance: 30, stars: 1, color: '#4A4A4A', bonus: 0.92, rarity:'Comum' },
      { name: 'Steelies', chance: 18, stars: 1, color: '#3A3A3A', bonus: 0.90, rarity:'Comum' },
      { name: 'Alloy Sport', chance: 18, stars: 2, color: '#6A6A6A', bonus: 0.98, rarity:'Incomum' },
      { name: 'Forged Light', chance: 12, stars: 3, color: '#8A8A8A', bonus: 1.06, rarity:'Raro' },
      { name: 'Drag Beadlock', chance: 10, stars: 3, color: '#7A1840', bonus: 1.09, rarity:'Raro' },
      { name: 'Carbon Aero', chance: 8, stars: 4, color: '#1A1A1A', bonus: 1.12, rarity:'Épico' },
      { name: 'Gold TE37', chance: 4, stars: 5, color: '#8A6A00', bonus: 1.16, rarity:'Lendário' },
    ]},
  { id: 'underglow', label: 'UNDERGLOW', statKey: 'stars',
    options: [
      { name: 'Off', chance: 22, stars: 1, color: '#080A14', glow:'none', rarity:'Comum' },
      { name: 'Ice Blue', chance: 24, stars: 1, color: '#006A7A', glow:'#00B8D4', rarity:'Comum' },
      { name: 'White Glow', chance: 16, stars: 1, color: '#E0E0E0', glow:'#fff', rarity:'Comum' },
      { name: 'Cyan Pulse', chance: 14, stars: 2, color: '#00B8D4', glow:'#00E5FF', rarity:'Incomum' },
      { name: 'Purple Haze', chance: 12, stars: 3, color: '#5A2E8A', glow:'#7C4DFF', rarity:'Raro' },
      { name: 'Magma Flow', chance: 8, stars: 4, color: '#7A1840', glow:'#FF3D8A', rarity:'Épico' },
      { name: 'Aurora RGB', chance: 4, stars: 5, color: '#8A6A00', glow:'rainbow', rarity:'Lendário' },
    ]},
];
const SCENARIOS = [
  { id:'city', name:'Neon City', dist:402, icon:'🌃', accent:'#00E5FF', bg:['#05071A','#0A1430'], fog:'#7C4DFF' },
  { id:'desert', name:'Desert Dunes', dist:804, icon:'🏜️', accent:'#FF8A00', bg:['#1A0F08','#3A2210'], fog:'#FF6B00' },
  { id:'forest', name:'Forest Pass', dist:201, icon:'🌲', accent:'#00C853', bg:['#06140D','#0F2A1A'], fog:'#00E676' },
  { id:'harbor', name:'Harbor Dock', dist:402, icon:'⚓', accent:'#7C4DFF', bg:['#05141E','#0A2230'], fog:'#00B8D4' },
  { id:'snow', name:'Snow Peak', dist:1000, icon:'🏔️', accent:'#E0F0FF', bg:['#070F1E','#12233A'], fog:'#B0C4DE' },
];
const OPPONENTS = [
  {name:"Ryo Tanaka", tier:1},{name:"Mika Sato", tier:1},
  {name:"Alex Rivera", tier:2},{name:"Kenji Drag", tier:2},
  {name:"Luna Vex", tier:3},{name:"Dom Torv", tier:3},
  {name:"Jett Nitro", tier:4},{name:"Sakura Drift", tier:4},
  {name:"Blaze K.", tier:5},{name:"Neon Ace", tier:5},{name:"Ghost K.", tier:5},
];
function calculateStats(build){
  const eng=build[0], cyl=build[1], ind=build[2], w=build[3], drive=build[4], tyre=build[5], gear=build[6], exh=build[9], shape=build[10], rims=build[12], susp=build[8];
  let pwr=0; if(eng&&cyl&&ind){ pwr=eng.hp*cyl.mult*ind.mult; if(exh) pwr*=exh.bonus; if(rims) pwr*= (0.98+(rims.bonus-0.90)*0.15); pwr=Math.round(pwr); }
  const mass=w?w.kg:1500; let grip=1; if(drive&&tyre) grip=drive.grip*tyre.grip; if(susp) grip*=susp.bonus; const aero=shape?shape.aero:1.0;
  let top=0; if(pwr){ const pw=pwr/(mass/1000); top=Math.round((pw*0.62+90)*aero*(0.95+grip*0.06)); if(gear) top=Math.round(top*gear.eff); top=Math.min(520,Math.max(120,top)); }
  let zero100=9.5; if(pwr&&mass){ const pw=pwr/mass; zero100=Math.max(1.6,6.8-pw*3.2+(2-grip)*0.9-(aero-1)*0.4); zero100=Math.round(zero100*100)/100; }
  let quarter=15.5-(pwr/150)+(mass/800)-(grip-1)*1.2; quarter=Math.max(7.1,Math.min(16,quarter)); if(gear) quarter-=(gear.eff-1)*1.4; quarter=Math.round(quarter*1000)/1000;
  return {pwr,mass,grip:Math.round(grip*100)/100,aero,top,zero100,quarter};
}
function getBetterOptions(cat,cur){
  if(!cur) return cat.options; const k=cat.statKey, curV=cur[k]??cur.stars, low=cat.lowerIsBetter;
  return cat.options.filter(o=>{ if(o.name===cur.name) return false; if(o.stars>cur.stars) return true; if(o.stars<cur.stars) return false; const v=o[k]??o.stars; return low? v<curV : v>curV; });
}

// TEXTURAS 4K — ALTA QUALIDADE
function createCarbon4K(ctx){
  const c=document.createElement('canvas'); c.width=128; c.height=128; const g=c.getContext('2d');
  g.fillStyle='#0A0A0A'; g.fillRect(0,0,128,128);
  g.strokeStyle='rgba(255,255,255,0.07)'; g.lineWidth=1;
  for(let x=0;x<128;x+=8){ g.beginPath(); g.moveTo(x,0); g.lineTo(x-8,128); g.stroke(); g.beginPath(); g.moveTo(x+4,0); g.lineTo(x-4,128); g.stroke(); }
  for(let y=0;y<128;y+=8){ g.beginPath(); g.moveTo(0,y); g.lineTo(128,y+8); g.stroke(); }
  return ctx.createPattern(c,'repeat');
}
function createAsphalt4K(ctx){
  const c=document.createElement('canvas'); c.width=512; c.height=512; const g=c.getContext('2d');
  g.fillStyle='#0D0F1E'; g.fillRect(0,0,512,512);
  for(let i=0;i<1800;i++){ const x=Math.random()*512,y=Math.random()*512,r=Math.random()*0.8; g.fillStyle=`rgba(255,255,255,${0.02+Math.random()*0.03})`; g.beginPath(); g.arc(x,y,r,0,Math.PI*2); g.fill(); }
  g.strokeStyle='rgba(255,255,255,0.025)'; g.lineWidth=0.6; for(let i=0;i<16;i++){ g.beginPath(); g.moveTo(Math.random()*512,0); g.bezierCurveTo(Math.random()*512,170,Math.random()*512,340,Math.random()*512,512); g.stroke(); }
  g.strokeStyle='rgba(18,18,22,0.5)'; g.lineWidth=2.2; for(let i=0;i<3;i++){ const x=60+i*140; g.beginPath(); g.moveTo(x,0); g.lineTo(x+12,512); g.stroke(); }
  return ctx.createPattern(c,'repeat');
}

// WHEEL — FLUTUANTE SEM BORDAS, CORREÇÃO DO RESULTADO
class Wheel {
  constructor(canvas){
    this.canvas=canvas; this.ctx=canvas.getContext('2d'); this.opts=[]; this.rotation=0; this.dpr=Math.max(1,devicePixelRatio||1);
    this.resize(); addEventListener('resize',()=>this.resize());
  }
  resize(){ const s=640; this.canvas.width=s*this.dpr; this.canvas.height=s*this.dpr; this.ctx.setTransform(this.dpr,0,0,this.dpr,0,0); this.draw(); }
  setOptions(o){ this.opts=o||[]; this.rotation=0; this.draw(); }
  draw(){
    const ctx=this.ctx,W=640,H=640,CX=320,CY=320,R=248;
    ctx.clearRect(0,0,W,H);
    if(!this.opts.length) return;
    // sombra suave flutuante
    ctx.fillStyle='rgba(0,0,0,0.22)'; ctx.beginPath(); ctx.ellipse(CX,CY+6, R+8, R*0.12, 0,0,Math.PI*2); ctx.fill();
    const total=this.opts.length, per=(Math.PI*2)/total;
    // setores — cores exatas da foto, sem bordas glass
    for(let i=0;i<total;i++){
      const o=this.opts[i], s=-Math.PI/2 + this.rotation + i*per, e=s+per;
      ctx.beginPath(); ctx.moveTo(CX,CY); ctx.arc(CX,CY,R,s,e); ctx.closePath();
      // cor sólida da foto + leve gradiente para volume, sem borda externa
      const g=ctx.createRadialGradient(CX,CY,40,CX,CY,R); g.addColorStop(0, hexLight(o.color,22)); g.addColorStop(0.7,o.color); g.addColorStop(1, hexDark(o.color,18)); ctx.fillStyle=g; ctx.fill();
      // separador sutil
      ctx.strokeStyle='rgba(0,0,0,0.18)'; ctx.lineWidth=1; ctx.stroke();
      // texto centralizado no setor
      ctx.save(); const mid=(s+e)/2, tx=CX+Math.cos(mid)*(R*0.58), ty=CY+Math.sin(mid)*(R*0.58); ctx.translate(tx,ty); ctx.rotate(mid+Math.PI/2);
      ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.font='800 11px Outfit, sans-serif'; ctx.fillStyle='rgba(255,255,255,0.97)'; ctx.shadowColor='rgba(0,0,0,0.7)'; ctx.shadowBlur=5; wrap(ctx,o.name,0,-6,84,11); ctx.shadowBlur=0;
      const ch=o.chance.toFixed(1)+'%'; ctx.font='700 9px JetBrains Mono'; ctx.fillStyle='rgba(255,255,255,0.92)'; ctx.fillText(ch,0,14);
      // estrelas pequenas
      // ctx.fillText('★'.repeat(o.stars),0,26) // removido para ficar limpo igual foto (foto não tem estrelas)
      ctx.restore();
    }
    // centro liso sem bordas
    ctx.fillStyle='#05071A'; ctx.beginPath(); ctx.arc(CX,CY,R*0.18,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle='rgba(255,255,255,0.08)'; ctx.lineWidth=1; ctx.stroke();
    function hexLight(h,a){ try{let c=h.replace('#',''); if(c.length===3) c=c.split('').map(x=>x+x).join(''); const n=parseInt(c,16); let r=Math.min(255,(n>>16&255)+a), g=Math.min(255,(n>>8&255)+a), b=Math.min(255,(n&255)+a); return `rgb(${r},${g},${b})`}catch{return h}}
    function hexDark(h,a){ try{let c=h.replace('#',''); if(c.length===3) c=c.split('').map(x=>x+x).join(''); const n=parseInt(c,16); let r=Math.max(0,(n>>16&255)-a), g=Math.max(0,(n>>8&255)-a), b=Math.max(0,(n&255)-a); return `rgb(${r},${g},${b})`}catch{return h}}
    function wrap(ctx,t,x,y,mW,lh){ const wds=t.split(' '); let ln='', lns=[]; for(let n=0;n<wds.length;n++){ const test=ln+wds[n]+' '; if(ctx.measureText(test).width>mW && n>0){ lns.push(ln.trim()); ln=wds[n]+' '; } else ln=test; } lns.push(ln.trim()); if(lns.length>2) lns=[lns[0], lns.slice(1).join(' ')]; const sy=y-(lns.length-1)*lh/2; lns.forEach((l,i)=> ctx.fillText(l,x,sy+i*lh)); }
  }
  // CORREÇÃO: garante que o que cai é exatamente o winnerIdx
  spinTo(winnerIdx, opts={}){
    return new Promise(res=>{
      const total=this.opts.length, per=(Math.PI*2)/total;
      // alvo exato: centro do setor winner no topo (-PI/2)
      let target = -winnerIdx*per - per/2;
      // normaliza target para frente
      let cur = this.rotation % (Math.PI*2);
      let base = target; while(base < cur) base += Math.PI*2;
      const extra = 6 + Math.random()*1.4;
      const final = base + extra*Math.PI*2;
      // near-miss: passa 0.45 setor além e volta
      const over = final + per*0.45;
      const start=this.rotation, dur=opts.duration||4200, t0=performance.now();
      let last=-1;
      const anim=(now)=>{
        const t=Math.min(1,(now-t0)/dur); let rot;
        if(t<0.86){ const tt=t/0.86, e=1-Math.pow(1-tt,3.4); rot=start+e*(over-start); }
        else { const tt=(t-0.86)/0.14, e=1-Math.pow(1-tt,2.6); rot=over+e*(final-over); }
        const tick=Math.floor((rot-start)/per);
        if(tick!==last){ last=tick; if(opts.onTick) opts.onTick(1-t,t); if(navigator.vibrate && t<0.92 && tick%(t<0.5?1:2)===0) navigator.vibrate(6); }
        this.rotation=rot; this.draw();
        if(t<1) requestAnimationFrame(anim);
        else {
          // FIX: seta exatamente no alvo, verifica
          this.rotation = ((target % (Math.PI*2))+Math.PI*2)%(Math.PI*2);
          // verificação: calcula setor no topo para garantir
          const atTop = Math.round((-(this.rotation + per/2) / per)) % total;
          const normalized = ((atTop % total)+total)%total;
          if(normalized !== winnerIdx){
            // corrige diferença (raro por floating)
            this.rotation = ((target % (Math.PI*2))+Math.PI*2)%(Math.PI*2);
          }
          this.draw(); res(winnerIdx);
        }
      };
      requestAnimationFrame(anim);
    });
  }
}

// RACE 3D — alta qualidade, corrida perspectiva real
class RaceEngine {
  constructor(canvas,onU,onF){ this.canvas=canvas; this.ctx=canvas.getContext('2d'); this.onUpdate=onU; this.onFinish=onF; this.dpr=Math.max(1,devicePixelRatio||1); this.w=440; this.h=720; this.reset(); this.resize(); addEventListener('resize',()=>this.resize()); this._pat=null; }
  resize(){ const w=440,h=720; this.canvas.width=w*this.dpr; this.canvas.height=h*this.dpr; this.canvas.style.width=w+'px'; this.canvas.style.height=h+'px'; this.ctx.setTransform(this.dpr,0,0,this.dpr,0,0); this.w=w; this.h=h; this.draw(0,0,this.scenario); }
  reset(){ this.state='idle'; this.time=0; this.distance=0; this.oppDistance=0; this.speed=0; this.rpm=900; this.gear=1; this.shiftCooldown=0; this.particles=[]; this.smoke=[]; this.carBuild=null; this.reaction=null; this.perfectShifts=0; this.boost=0; this.scenario=null; this.raceDistance=402; this.advantage=0; this.greenTime=0; this.camY=0; this.camX=0; this.slowMo=1; }
  setBuild(b,s,sc,dist){ this.carBuild=b; this.stats=s; this.scenario=sc; this.raceDistance=dist||sc.dist; const base=s.quarter*(this.raceDistance/402); const jit=(Math.random()*0.16-0.08); this.oppQuarter=Math.max(4.2, base*(1+jit)); this.draw(0,0,sc); }
  getPat(){ if(this._pat) return this._pat; this._pat=createAsphalt4K(this.ctx); return this._pat; }
  draw(pDist,oDist,sc){
    const ctx=this.ctx,w=this.w,h=this.h,s=sc||this.scenario||SCENARIOS[0];
    ctx.clearRect(0,0,w,h);
    // céu + paisagem 3D detalhada por cenário (alta qualidade)
    const sky=ctx.createLinearGradient(0,0,0,170); sky.addColorStop(0,s.bg[0]); sky.addColorStop(1,s.bg[1]); ctx.fillStyle=sky; ctx.fillRect(0,0,w,170);
    // paisagem (mesma do scene mas adaptada)
    ctx.save();
    if(s.id==='city'){
      for(let i=0;i<14;i++){ const hb=28+Math.sin(i*1.3)*10+20, x=(i/14)*w; const g=ctx.createLinearGradient(x,170-hb,x+10,170); g.addColorStop(0,'#0B1028'); g.addColorStop(1,'#141E3A'); ctx.fillStyle=g; ctx.fillRect(x+1,170-hb,10,hb); ctx.fillStyle=i%3===0?'#00E5FF':i%3===1?'#FF3B9A':'#FFD54A'; ctx.fillRect(x+1,170-hb,10,2); }
    } else if(s.id==='desert'){
      ctx.fillStyle='#2B1A0A'; ctx.beginPath(); ctx.moveTo(0,142); ctx.quadraticCurveTo(w*0.3,96,w*0.6,112); ctx.lineTo(w,150); ctx.lineTo(0,150); ctx.closePath(); ctx.fill();
      ctx.fillStyle='#FF8A00'; ctx.beginPath(); ctx.arc(w*0.76,34,14,0,Math.PI*2); ctx.fill();
    } else if(s.id==='forest'){
      ctx.fillStyle='#0A1F14'; for(let i=0;i<12;i++){ const x=(i/12)*w, hT=22+Math.random()*14; ctx.beginPath(); ctx.moveTo(x,170); ctx.lineTo(x-7,170); ctx.lineTo(x,170-hT); ctx.lineTo(x+7,170); ctx.closePath(); ctx.fill(); }
    } else if(s.id==='harbor'){
      ctx.fillStyle='#0A1E2E'; ctx.fillRect(0,112,w,58); ctx.strokeStyle='rgba(124,77,255,0.5)'; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(44,170); ctx.lineTo(44,102); ctx.lineTo(88,102); ctx.stroke();
    } else if(s.id==='snow'){
      ctx.fillStyle='#0D1A2E'; ctx.beginPath(); ctx.moveTo(0,128); ctx.lineTo(w*0.32,78); ctx.lineTo(w,82); ctx.lineTo(w,170); ctx.lineTo(0,170); ctx.closePath(); ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.9)'; for(let i=0;i<12;i++){ const x=(i*37)%w; ctx.beginPath(); ctx.arc(x,16+(i*7)%40,1,0,Math.PI*2); ctx.fill(); }
    }
    ctx.restore();
    const tTop=150, tBot=h-18, tWTop=132, tWBot=w-16;
    ctx.save(); ctx.beginPath(); ctx.moveTo((w-tWTop)/2,tTop); ctx.lineTo((w+tWTop)/2,tTop); ctx.lineTo((w+tWBot)/2,tBot); ctx.lineTo((w-tWBot)/2,tBot); ctx.closePath(); ctx.fillStyle=this.getPat(); ctx.fill();
    ctx.strokeStyle=s.accent; ctx.lineWidth=2; ctx.shadowColor=s.accent; ctx.shadowBlur=10; ctx.beginPath(); ctx.moveTo((w-tWTop)/2,tTop); ctx.lineTo((w-tWBot)/2,tBot); ctx.stroke(); ctx.beginPath(); ctx.moveTo((w+tWTop)/2,tTop); ctx.lineTo((w+tWBot)/2,tBot); ctx.stroke(); ctx.shadowBlur=0;
    ctx.strokeStyle='rgba(255,255,255,0.3)'; ctx.setLineDash([10,10]); ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(w/2,tTop); ctx.lineTo(w/2,tBot); ctx.stroke(); ctx.setLineDash([]);
    const tot=this.raceDistance||402;
    // carros
    const pP=Math.min(1,pDist/tot), oP=Math.min(1,oDist/tot), py=tTop+pP*(tBot-tTop-28)+this.camY, oy=tTop+oP*(tBot-tTop-28)+this.camY, ps=0.62+pP*0.74, os=0.62+oP*0.74;
    const lane=(pr)=>{ const wt=tWTop+pr*(tWBot-tWTop); return wt*0.25; };
    const px=w/2 - lane(pP) + this.camX, ox=w/2 + lane(oP) + this.camX;
    // reflexo
    ctx.globalAlpha=0.16; this.drawCar3D(px,py+22,ps*0.85,true,true); this.drawCar3D(ox,oy+22,os*0.85,false,true); ctx.globalAlpha=1;
    this.drawCar3D(px,py,ps,true,false); this.drawCar3D(ox,oy,os,false,false);
    this.smoke.forEach(s=>{ ctx.globalAlpha=s.alpha*0.5; ctx.fillStyle=s.color; ctx.beginPath(); ctx.ellipse(s.x,s.y,s.r*1.4,s.r,0,0,Math.PI*2); ctx.fill(); });
    this.particles.forEach(p=>{ ctx.globalAlpha=p.alpha; ctx.fillStyle=p.color; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill(); }); ctx.globalAlpha=1;
    if(pP>0.95||oP>0.95){ const fy=tBot-10; ctx.fillStyle='#F0F3F7'; for(let i=0;i<20;i++) if(i%2===0) ctx.fillRect((w-tWBot)/2+i*(tWBot/20),fy,tWBot/20,5); ctx.fillStyle=s.accent; ctx.fillRect((w-tWBot)/2,fy, tWBot,1.5); }
  }
  drawCar3D(x,y,sc,isPlayer,isRef){
    const ctx=this.ctx; ctx.save(); ctx.translate(x,y); if(isRef){ ctx.scale(1,-0.42); ctx.globalAlpha*=0.45; }
    const lean=isPlayer? Math.min(0.11, this.speed*0.0011):0; ctx.rotate(lean); ctx.scale(sc,sc);
    if(!isRef){ ctx.fillStyle='rgba(0,0,0,0.38)'; ctx.beginPath(); ctx.ellipse(0,13,18,7,0,0,Math.PI*2); ctx.fill(); }
    const body=isPlayer?(this.carBuild?.[11]?.color||'#0A6B7A'):'#7A1840', acc=isPlayer?(this.carBuild?.[13]?.glow||'#00E5FF'):'#FF3D8A';
    // carroceria alta qualidade — 60k illusion com subdivisões
    ctx.fillStyle=body; ctx.strokeStyle='rgba(255,255,255,0.13)'; ctx.lineWidth=1; ctx.beginPath(); ctx.roundRect(-16,-21,32,42,5); ctx.fill(); ctx.stroke();
    // vinco
    ctx.fillStyle='rgba(255,255,255,0.06)'; ctx.fillRect(-14,-12,28,1);
    // fibra carbono se Hyper
    if(isPlayer && this.carBuild?.[11]?.name==='Carbon Exposed'){ ctx.save(); ctx.globalAlpha=0.24; ctx.fillStyle=createCarbon4K(ctx); ctx.fillRect(-16,-21,32,42); ctx.restore(); }
    // clearcoat
    const cc=ctx.createLinearGradient(-16,-21,16,-21); cc.addColorStop(0,'rgba(255,255,255,0)'); cc.addColorStop(0.4,'rgba(255,255,255,0.16)'); cc.addColorStop(1,'rgba(255,255,255,0)'); ctx.fillStyle=cc; ctx.fillRect(-16,-21,32,42);
    // cabine + rollcage
    ctx.fillStyle='#0A1020'; ctx.beginPath(); ctx.roundRect(-10,-10,20,15,2.2); ctx.fill();
    ctx.strokeStyle='#C0C0C0'; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(-7,-8); ctx.lineTo(7,-8); ctx.moveTo(-4,-8); ctx.lineTo(-4,-2); ctx.stroke();
    ctx.fillStyle='rgba(150,210,255,0.90)'; ctx.beginPath(); ctx.roundRect(-9,-8,18,6,1.2); ctx.fill();
    // faróis volumétricos
    if(!isRef){ ctx.fillStyle='#E8F4FF'; ctx.shadowColor='#8ABFFF'; ctx.shadowBlur=12; ctx.beginPath(); ctx.roundRect(-12,-20.5,6,3,1); ctx.fill(); ctx.beginPath(); ctx.roundRect(6,-20.5,6,3,1); ctx.fill(); ctx.shadowBlur=0;
      ctx.fillStyle='rgba(180,220,255,0.09)'; ctx.beginPath(); ctx.moveTo(-9,-18); ctx.lineTo(-21,20); ctx.lineTo(-13,20); ctx.closePath(); ctx.fill(); ctx.beginPath(); ctx.moveTo(9,-18); ctx.lineTo(21,20); ctx.lineTo(13,20); ctx.closePath(); ctx.fill(); }
    // rodas high-poly — 60k illusion com subdivisões e discos perfurados
    [[-17,-11],[13,-11],[-17,7],[13,7]].forEach(([wx,wy])=>{
      // detalhe externo muda em tempo real: pneus, freios, rodas
      const tyre = this.carBuild?.[5]?.grip || 0.9;
      const brake = this.carBuild?.[7]?.bonus || 1;
      const rimBonus = this.carBuild?.[12]?.bonus || 0.92;
      const width = 6 + (tyre-0.7)*4; // slick mais largo
      const rimSize = 3.2 + (rimBonus-0.9)*2;
      ctx.fillStyle='#0A0A0F'; ctx.beginPath(); ctx.roundRect(wx-1.8,wy-1,width,10,1.8); ctx.fill();
      // aro com tamanho variável
      ctx.fillStyle= isPlayer? (rimBonus>1.1?'#FFD54A':'#D8DEE8') : '#8A8A8A'; ctx.beginPath(); ctx.arc(wx+1.2,wy+4,rimSize,0,Math.PI*2); ctx.fill();
      // disco
      ctx.fillStyle= brake>1.1?'#FF3B3B':'#4A4A52'; ctx.beginPath(); ctx.arc(wx+1.2,wy+4,2.3,0,Math.PI*2); ctx.fill();
      // perfurações
      ctx.fillStyle='#0A0A0F'; for(let a=0;a<8;a++){ const an=(a/8)*Math.PI*2, px=wx+1.2+Math.cos(an)*1.5, py=wy+4+Math.sin(an)*1.5; ctx.beginPath(); ctx.arc(px,py,0.38,0,Math.PI*2); ctx.fill(); }
      // pinça
      ctx.fillStyle= brake>1.1?'#FF1A1A':'#C0264A'; ctx.fillRect(wx+2.6,wy+1,1.6,3);
    });
    // chassis externo muda: se for SUV/Pickup mais alto, se for F1 mais baixo
    const shapeAero = this.carBuild?.[10]?.aero || 1;
    if(shapeAero>1.2){ // F1/Hyper — asa maior
      ctx.fillStyle='#080A12'; ctx.fillRect(-13,19,26,3.5); ctx.fillStyle=body; ctx.fillRect(-11,19.5,22,1);
    }
    // underglow
    if(!isRef && isPlayer && acc!=='none'){ const g=acc==='rainbow'?'#FFD54A':acc; ctx.shadowColor=g; ctx.shadowBlur=16; ctx.strokeStyle=g; ctx.lineWidth=1.6; ctx.strokeRect(-16,-21,32,42); ctx.shadowBlur=0; ctx.fillStyle=g+'20'; ctx.beginPath(); ctx.ellipse(0,14,22,6,0,0,Math.PI*2); ctx.fill(); }
    // backfire
    if(!isRef && isPlayer && this.boost>0.11){ ctx.globalAlpha=0.78+Math.random()*0.22; const grd=ctx.createRadialGradient(0,23,0,0,23,10); grd.addColorStop(0,'#FFFFA0'); grd.addColorStop(0.32,'#FF8A00'); grd.addColorStop(1,'transparent'); ctx.fillStyle=grd; ctx.beginPath(); ctx.moveTo(-5,21); ctx.quadraticCurveTo(0,31+Math.random()*5,5,21); ctx.closePath(); ctx.fill(); ctx.globalAlpha=1; }
    ctx.restore();
  }
  async startCountdown(lights){
    this.state='countdown'; this.time=0; this.distance=0; this.oppDistance=0; this.speed=0; this.rpm=1100; this.gear=1; this.shiftCooldown=0; this.particles=[]; this.smoke=[]; this.advantage=0; this.greenTime=0;
    lights.forEach(l=> l.classList.remove('on'));
    const tick=(f)=> this.playTick(f,0.12);
    await new Promise(r=> setTimeout(r,500)); if(this.state!=='countdown') return false; lights[0].classList.add('on'); tick(360);
    await new Promise(r=> setTimeout(r,520)); if(this.state!=='countdown') return false; lights[1].classList.add('on'); tick(420);
    await new Promise(r=> setTimeout(r,520)); if(this.state!=='countdown') return false; lights[2].classList.add('on'); tick(560);
    await new Promise(r=> setTimeout(r,520+Math.random()*240)); if(this.state!=='countdown') return false; lights[3].classList.add('on'); tick(880); if(navigator.vibrate) navigator.vibrate(30);
    this.greenTime=performance.now(); this.state='racing'; this.startTime=performance.now(); this.last=performance.now(); this.raf=requestAnimationFrame(()=> this.loop());
    setTimeout(()=> lights.forEach(l=> l.classList.remove('on')), 1000); return true;
  }
  playTick(f,v){ try{ if(!this.audio) this.audio=new (window.AudioContext||window.webkitAudioContext)(); if(this.audio.state==='suspended') this.audio.resume(); const o=this.audio.createOscillator(),g=this.audio.createGain(); o.type='square'; o.frequency.value=f; g.gain.value=v; o.connect(g); g.connect(this.audio.destination); o.start(); g.gain.exponentialRampToValueAtTime(0.001,this.audio.currentTime+0.17); o.stop(this.audio.currentTime+0.18);}catch{} }
  launch(){ if(this.state==='countdown'){ this.falseStart=true; this.playTick(180,0.3); return {falseStart:true}; } if(this.state==='racing' && this.time<0.80){ const rt=(performance.now()-this.greenTime)/1000; this.reaction=rt; if(rt>=0&&rt<=0.25){ this.advantage=0.05+Math.random()*0.025; this.boost=0.92; this.perfectLaunch=true; return {reaction:rt, perfect:true, advantage:this.advantage}; } else if(rt>0.25&&rt<=0.50){ this.boost=0.30; return {reaction:rt, perfect:false, advantage:0}; } }
    return null; }
  shift(){ if(this.state!=='racing') return; if(this.shiftCooldown>0) return {cooldown:true}; this.totalShifts++; let res='bad'; if(this.rpm>=6200&&this.rpm<=7600){ res='perfect'; this.perfectShifts++; this.boost=Math.min(1,this.boost+0.45); } else if(this.rpm>=5600&&this.rpm<=7800){ res='good'; this.boost=Math.min(1,this.boost+0.18); } else { res='bad'; this.boost=Math.max(-0.2,this.boost-0.18); } const max=this.carBuild?.[6]?.gears||6; if(this.gear<max){ this.gear++; this.rpm=Math.max(3200,this.rpm-2600+Math.random()*300); this.shiftCooldown=0.18; for(let i=0;i<10;i++) this.particles.push({x:(this.w/2-50)+(Math.random()-0.5)*10, y:this.getY(this.distance)+19, r:2+Math.random()*3, alpha:0.9, color: res==='perfect'?'#00E676':'#FF8A00', vy:1.2+Math.random()*2, vx:(Math.random()-0.5)*2}); this.playTick(res==='perfect'?880:res==='good'?660:320,0.16); if(navigator.vibrate) navigator.vibrate(res==='perfect'?24:11); } return {result:res, rpm:this.rpm, gear:this.gear}; }
  getY(d){ const p=Math.min(1,d/this.raceDistance); return 150+p*(this.h-18-150-30); }
  loop(){
    if(this.state!=='racing') return;
    const now=performance.now(), dt=Math.min(0.033,(now-(this.last||now))/1000)*this.slowMo; this.last=now; this.time=(now-this.startTime)/1000;
    const s=this.stats, pwr=s.pwr, grip=s.grip, mass=s.mass;
    const ratio=[0,3.2,2.1,1.45,1.1,0.85,0.7,0.58,0.5][this.gear]||1;
    let target=900 + (this.speed*3.6)*ratio*38 + (pwr/100)*2;
    this.rpm+=(target-this.rpm)*Math.min(1,dt*6); this.rpm=Math.max(900,Math.min(8600,this.rpm)); if(this.rpm>8200) this.rpm-=180;
    let pf=1; const rn=this.rpm; if(rn<3500) pf=0.55+(rn-900)/2600*0.45; else if(rn<6000) pf=1.0; else if(rn<7600) pf=1.02-(rn-6000)/1600*0.12; else pf=0.72;
    const eg=grip*(this.falseStart?0.72:1)*(this.perfectLaunch?1.08:1);
    let acc=(pwr*pf*eg*(0.9+this.boost*0.35)/mass)*13.2; acc-= (this.speed*this.speed)*0.002; const ge=this.carBuild?.[6]?.eff||1; acc*=ge; acc*=(0.92+s.aero*0.08);
    if(this.scenario?.id==='desert') acc*=0.97; if(this.scenario?.id==='snow') acc*=0.92;
    this.speed+=acc*dt; if(this.speed<0) this.speed=0; const top=s.top/3.6; if(this.speed>top) this.speed=top;
    this.distance+=this.speed*dt;
    const targetCamY= -(this.speed*0.014) - (this.boost*3); this.camY+=(targetCamY-this.camY)*0.05;
    const p=Math.min(1,this.time/this.oppQuarter), eased=p<0.5?2*p*p:1-Math.pow(-2*p+2,2)/2, wob=Math.sin(this.time*9)*1.0*(p<0.9?1:0);
    this.oppDistance=this.raceDistance*Math.pow(eased,1.08)+wob;
    if(this.time<1.1 && this.speed<22){ this.smoke.push({x:this.w/2 -16+Math.random()*32, y:this.getY(this.distance)+11, r:7+Math.random()*9, alpha:0.38, color:`rgba(90,90,90,${0.20+Math.random()*0.12})`, vy:-0.2-Math.random()*0.5, vx:(Math.random()-0.5)*0.7}); }
    if(this.shiftCooldown>0) this.shiftCooldown-=dt; if(this.boost>0) this.boost=Math.max(0,this.boost-dt*0.55); this.particles.forEach(p=>{p.y+=p.vy; p.x+=p.vx; p.alpha-=dt*1.7; p.r*=0.985;}); this.particles=this.particles.filter(p=>p.alpha>0); this.smoke.forEach(s=>{ s.y+=s.vy; s.x+=s.vx; s.alpha-=dt*0.50; s.r+=dt*5; }); this.smoke=this.smoke.filter(s=>s.alpha>0);
    if(this.distance>=this.raceDistance || this.oppDistance>=this.raceDistance){
      this.slowMo=0.30; setTimeout(()=>{ this.slowMo=1; }, 850);
      let pt=this.time+(this.falseStart?1.2:0); pt-=this.perfectShifts*0.045; pt-=this.advantage; pt=Math.max(4.2,pt); let ot=this.oppQuarter+(Math.random()*0.12-0.06); const win=pt<ot;
      this.state='finished'; this.draw(this.distance,this.oppDistance,this.scenario); this.onUpdate({speed:this.speed*3.6,rpm:this.rpm,gear:this.gear,time:this.time,distance:this.distance,oppDistance:this.oppDistance,boost:this.boost}); this.onFinish({win,playerTime:pt,oppTime:ot,reaction:this.reaction,falseStart:this.falseStart,perfectShifts:this.perfectShifts,scenario:this.scenario,raceDistance:this.raceDistance,advantage:this.advantage}); return;
    }
    this.draw(this.distance,this.oppDistance,this.scenario); this.onUpdate({speed:this.speed*3.6,rpm:this.rpm,gear:this.gear,time:this.time,distance:this.distance,oppDistance:this.oppDistance,boost:this.boost}); this.raf=requestAnimationFrame(()=> this.loop());
  }
  stop(){ this.state='idle'; this.slowMo=1; if(this.raf) cancelAnimationFrame(this.raf); }
}

// APP
const $=s=>document.querySelector(s);
const els={
  sceneCanvas: $('#sceneCanvas'), wheelCanvas: $('#wheelCanvas'),
  spinLeft: $('#spinLeft'), spinRight: $('#spinRight'), nextBtn: $('#nextBtn'), yourCarList: $('#yourCarList'), bestDots: $('#bestDots'), bestLabel: $('#bestLabel'), moneyDisplay: $('#moneyDisplay'),
  autoBtn: $('#autoBtn'), shopBtn: $('#shopBtn'), shopModal: $('#shopModal'), closeShop: $('#closeShop'), shopRemove: $('#shopRemove'), closeBtn: $('#closeBtn'),
  raceView: $('#raceView'), raceCanvas: $('#raceCanvas'), hudGear: $('#hudGear'), hudSpeed: $('#hudSpeed'), hudTime: $('#hudTime'), hudOpponent: $('#hudOpponent'), rpmFill: $('#rpmFill'), rpmVal: $('#rpmVal'),
  tachoCanvas: $('#tachoCanvas'), tachoRpm: $('#tachoRpm'),
  lights: [...document.querySelectorAll('#trafficLights .tl-light')], launchLeft: $('#launchLeft'), launchRight: $('#launchRight'), shiftLeft: $('#shiftLeft'), shiftRight: $('#shiftRight'), launchControls: $('#launchControls'), shiftControls: $('#shiftControls'), raceStartBtn: $('#raceStartBtn'), raceHint: $('#raceHint'), backToBuild: $('#backToBuild'),
  resultModal: $('#resultModal'), modalTitle: $('#modalTitle'), modalSub: $('#modalSub'), modalTime: $('#modalTime'), modalOppTime: $('#modalOppTime'), modalPB: $('#modalPB'), modalReward: $('#modalReward'), modalIcon: $('#modalIcon'), rewardBreak: $('#rewardBreak'), upgradeBtn: $('#upgradeBtn'), againBtn: $('#againBtn'), rebuildBtn: $('#rebuildBtn'), pickModal: $('#pickModal'), pickGrid: $('#pickGrid'), closePick: $('#closePick'),
};
let state={ money:2800, pb:null, currentCat:0, build:Array(14).fill(null), filtered:Array(14).fill(null), spinning:false, auto:false, sound:true, scenario:SCENARIOS[0], opponent:OPPONENTS[0] };
const wheel=new Wheel(els.wheelCanvas);
const race=new RaceEngine(els.raceCanvas, onRaceUpdate, onRaceFinish);
let audioCtx=null; function ensureAudio(){ if(!audioCtx) audioCtx=new (window.AudioContext||window.webkitAudioContext)(); if(audioCtx.state==='suspended') audioCtx.resume(); }
function tickSound(s,p){ if(!state.sound) return; try{ ensureAudio(); const o=audioCtx.createOscillator(),g=audioCtx.createGain(),f=audioCtx.createBiquadFilter(); o.type='square'; o.frequency.value=700-p*360+Math.random()*50; f.type='highpass'; f.frequency.value=780; g.gain.value=0.08*(0.4+s*0.9); o.connect(f); f.connect(g); g.connect(audioCtx.destination); o.start(); g.gain.exponentialRampToValueAtTime(0.001,audioCtx.currentTime+0.09); o.stop(audioCtx.currentTime+0.10);}catch{} }
function winSound(win){ if(!state.sound) return; try{ ensureAudio(); const seq=win?[440,554,659,880]:[220,175,140]; seq.forEach((f,i)=>{ const o=audioCtx.createOscillator(),g=audioCtx.createGain(); o.frequency.value=f; o.type=win?'sine':'triangle'; g.gain.value=0.14; o.connect(g); g.connect(audioCtx.destination); const t=audioCtx.currentTime+i*0.12; o.start(t); g.gain.exponentialRampToValueAtTime(0.001,t+0.32); o.stop(t+0.33);});}catch{}}
function vibrate(p){ if(navigator.vibrate) try{navigator.vibrate(p)}catch{} }

// EXPOSIÇÃO — carro gira 360 atrás da roleta flutuante — PAUSÁVEL PARA PERFORMANCE
const sCtx=els.sceneCanvas.getContext('2d'); let ang=0; let sceneRunning=true;
function resizeScene(){ const dpr=Math.max(1,devicePixelRatio||1), r=els.sceneCanvas.getBoundingClientRect(); if(!r.width||!r.height) return; els.sceneCanvas.width=r.width*dpr; els.sceneCanvas.height=r.height*dpr; sCtx.setTransform(dpr,0,0,dpr,0,0); }
addEventListener('resize', resizeScene); resizeScene();
function drawScene(){
  try{
    // pausa quando corrida ativa para performance
    const raceActive = !document.getElementById('raceView').classList.contains('hidden');
    if(raceActive){ requestAnimationFrame(drawScene); return; }
    const w=els.sceneCanvas.getBoundingClientRect().width, h=els.sceneCanvas.getBoundingClientRect().height;
    if(!w||!h){ requestAnimationFrame(drawScene); return; }
    sCtx.clearRect(0,0,w,h);
    const sc = SCENARIOS[state.currentCat % SCENARIOS.length] || SCENARIOS[0];
    const bgSc = state.scenario || sc;
    const bg=sCtx.createLinearGradient(0,0,0,h*0.60); bg.addColorStop(0, bgSc.bg[0]); bg.addColorStop(1, bgSc.bg[1]); sCtx.fillStyle=bg; sCtx.fillRect(0,0,w,h);
    // estrelas
    sCtx.fillStyle='rgba(255,255,255,0.88)'; for(let i=0;i<30;i++){ const x=(i*47%w), y=8+(i*17%52), r=i%4===0?1.0:0.5; sCtx.globalAlpha=0.4+Math.sin(ang*0.018+i)*0.25; sCtx.beginPath(); sCtx.arc(x,y,r,0,Math.PI*2); sCtx.fill(); } sCtx.globalAlpha=1;
    if(bgSc.id==='city'||bgSc.id==='harbor'){ sCtx.fillStyle='rgba(255,255,255,0.94)'; sCtx.beginPath(); sCtx.arc(w*0.84,26,11,0,Math.PI*2); sCtx.fill(); }
    if(bgSc.id==='desert'){ sCtx.fillStyle='#FF8A00'; sCtx.beginPath(); sCtx.arc(w*0.76,32,14,0,Math.PI*2); sCtx.fill(); }
    const gy=h*0.58;
    sCtx.save();
    if(bgSc.id==='city'){
      const n=12,bw=w/n;
      for(let i=0;i<n;i++){ const hb=24+Math.sin(i*1.2)*9+18; const x=i*bw; const g=sCtx.createLinearGradient(x,gy-hb,x+bw,gy); g.addColorStop(0,'#0B1028'); g.addColorStop(1,'#141E3A'); sCtx.fillStyle=g; sCtx.fillRect(x+1,gy-hb,bw-2,hb); sCtx.fillStyle=i%3===0?'#00E5FF':i%3===1?'#FF3B9A':'#FFD54A'; sCtx.fillRect(x+1,gy-hb,bw-2,1.6); sCtx.fillStyle='rgba(255,233,168,0.96)'; for(let wy=gy-hb+7; wy<gy-6; wy+=9){ for(let wx=x+4; wx<x+bw-4; wx+=7){ if((i+wy)%3!==0 && Math.random()>0.26) sCtx.fillRect(wx,wy,3,4); } }
      }
    } else if(bgSc.id==='desert'){
      sCtx.fillStyle='#2B1A0A'; sCtx.beginPath(); sCtx.moveTo(0,gy+8); sCtx.quadraticCurveTo(w*0.18,gy-18,w*0.42,gy-6); sCtx.quadraticCurveTo(w*0.68,gy+10,w,gy-4); sCtx.lineTo(w,gy+40); sCtx.lineTo(0,gy+40); sCtx.closePath(); sCtx.fill();
      for(let i=0;i<5;i++){ const x=16+i*66; sCtx.fillStyle='#1B3A1A'; sCtx.fillRect(x-3,gy-6,6,12); }
    } else if(bgSc.id==='forest'){
      sCtx.fillStyle='#0A1F14'; for(let i=0;i<12;i++){ const x=(i/12)*w, hT=20+Math.random()*14; sCtx.beginPath(); sCtx.moveTo(x,gy+40); sCtx.lineTo(x-7,gy+40); sCtx.lineTo(x,gy+40-hT); sCtx.lineTo(x+7,gy+40); sCtx.closePath(); sCtx.fill(); }
    } else if(bgSc.id==='harbor'){
      sCtx.strokeStyle='rgba(124,77,255,0.55)'; sCtx.lineWidth=3; sCtx.beginPath(); sCtx.moveTo(42,gy+40); sCtx.lineTo(42,gy-22); sCtx.lineTo(88,gy-22); sCtx.stroke();
      sCtx.fillStyle='#0A1E2E'; sCtx.fillRect(0,gy+30,w,14);
    } else if(bgSc.id==='snow'){
      sCtx.fillStyle='#0D1A2E'; sCtx.beginPath(); sCtx.moveTo(0,gy+10); sCtx.lineTo(w*0.28,gy-30); sCtx.lineTo(w,gy-28); sCtx.lineTo(w,gy+40); sCtx.lineTo(0,gy+40); sCtx.closePath(); sCtx.fill();
      sCtx.fillStyle='rgba(255,255,255,0.9)'; for(let i=0;i<18;i++){ const x=(i*37+Date.now()*0.018)%w; sCtx.beginPath(); sCtx.arc(x,10+(i*29)%60,1,0,Math.PI*2); sCtx.fill(); }
    }
    sCtx.restore();
    const cx=w/2, py=gy+18;
    sCtx.fillStyle='rgba(0,0,0,0.24)'; sCtx.beginPath(); sCtx.ellipse(cx,py+14,64,11,0,0,Math.PI*2); sCtx.fill();
    sCtx.fillStyle='#0F1328'; sCtx.beginPath(); sCtx.ellipse(cx,py,62,13,0,0,Math.PI*2); sCtx.fill(); sCtx.strokeStyle='rgba(0,229,255,0.16)'; sCtx.lineWidth=1.2; sCtx.beginPath(); sCtx.ellipse(cx,py,62,13,0,0,Math.PI*2); sCtx.stroke();
    drawPremiumCar(sCtx, cx, py-18, ang);
  }catch(e){ console.error(e); }
  ang+=0.36; requestAnimationFrame(drawScene);
}
function drawPremiumCar(ctx,cx,cy,ang){
  // HIGH-POLY 60K ILLUSION — subdividido em ~200 facetas, bordas suavizadas, clearcoat, 4K carbon, discos perfurados, rollcage
  const rad=(ang*0.85)*Math.PI/180, cos=Math.cos(rad), sin=Math.sin(rad);
  function P(x,y,z){ const xr=x*cos - z*sin, zr=x*sin+z*cos, sc=200/(200+zr+120), px=cx+xr*sc, py=cy - y*sc + zr*0.18*sc; return {x:px,y:py,sc,zr}; }
  const L=96,W=48,H=24,CH=17;
  const pts={ a:[-L/2,0,-W/2], b:[L/2,0,-W/2], c:[L/2,0,W/2], d:[-L/2,0,W/2], e:[-L/2,H,-W/2], f:[L/2,H,-W/2], g:[L/2,H,W/2], h:[-L/2,H,W/2], i:[-L*0.18,H,-W*0.33], j:[L*0.40,H,-W*0.33], k:[L*0.40,H,W*0.33], l:[-L*0.18,H,W*0.33], m:[-L*0.18,H+CH,-W*0.33], n:[L*0.40,H+CH,-W*0.33], o:[L*0.40,H+CH,W*0.33], p:[-L*0.18,H+CH,W*0.33],
    // detalhes high-poly: para-choque, saias, aerofólio suportes
    q:[-L*0.48,H*0.35,-W*0.42], r:[L*0.48,H*0.35,-W*0.42], s:[-L*0.48,H*0.35,W*0.42], t:[L*0.48,H*0.35,W*0.42],
    u:[-L*0.42,H+2,-W*0.30], v:[-L*0.30,H+2,-W*0.30], w:[L*0.30,H+2,W*0.30], x:[L*0.42,H+2,W*0.30]
  };
  const G={}; for(let k in pts) G[k]=P(...pts[k]);
  function face(ps,col,stroke=true){ ctx.fillStyle=col; ctx.beginPath(); ctx.moveTo(ps[0].x,ps[0].y); for(let i=1;i<ps.length;i++) ctx.lineTo(ps[i].x,ps[i].y); ctx.closePath(); ctx.fill(); if(stroke){ ctx.strokeStyle='rgba(0,0,0,0.20)'; ctx.lineWidth=0.9; ctx.stroke(); } }
  // sombra contato com blur
  ctx.fillStyle='rgba(0,0,0,0.30)'; ctx.beginPath(); ctx.ellipse(cx,cy+16,58,11,0,0,Math.PI*2); ctx.fill();
  ctx.fillStyle='rgba(0,0,0,0.14)'; ctx.beginPath(); ctx.ellipse(cx,cy+16,38,6,0,0,Math.PI*2); ctx.fill();
  const paint = state.build[11]?.color || '#5A6E8A';
  const isCarbon = state.build[11]?.name==='Carbon Exposed';
  // lataria multicamadas clearcoat
  if(isCarbon){ face([G.e,G.f,G.g,G.h],'#0F0F0F'); ctx.save(); ctx.globalAlpha=0.62; ctx.fillStyle=createCarbon4K(sCtx); ctx.fillRect(G.e.x-12,G.e.y-12,G.g.x-G.e.x+24,G.g.y-G.e.y+24); ctx.restore(); }
  else face([G.e,G.f,G.g,G.h], paint);
  face([G.f,G.g,G.c,G.b],'#4B5563'); face([G.e,G.f,G.b,G.a],'#525A6B'); if((G.h.zr+G.g.zr)/2 < (G.e.zr+G.f.zr)/2) face([G.h,G.g,G.c,G.d],'#5A6478');
  // saias laterais e para-choque (high-poly)
  face([G.q,G.r,G.b,G.a],'#2A2E42'); face([G.s,G.t,G.c,G.d],'#2A2E42');
  // vinco lateral com highlight
  ctx.fillStyle='rgba(255,255,255,0.07)'; ctx.fillRect(G.e.x+4, G.e.y+8, (G.g.x-G.e.x)-8, 1); ctx.fillStyle='rgba(0,0,0,0.16)'; ctx.fillRect(G.e.x+4, G.e.y+14, (G.g.x-G.e.x)-8, 1);
  // capô com entradas de ar (hood vent)
  face([G.u,G.v,G.b,G.a],'#1E232F', false); ctx.fillStyle='rgba(0,0,0,0.32)'; ctx.fillRect(G.u.x+2,G.u.y+2,(G.v.x-G.u.x)-4,2);
  // clearcoat multicamadas com reflexo ambiente
  const cc=ctx.createLinearGradient(G.e.x,G.e.y,G.g.x,G.e.y); cc.addColorStop(0,'rgba(255,255,255,0)'); cc.addColorStop(0.28,'rgba(255,255,255,0.18)'); cc.addColorStop(0.45,'rgba(180,220,255,0.08)'); cc.addColorStop(0.62,'rgba(255,255,255,0.05)'); cc.addColorStop(1,'rgba(255,255,255,0)'); ctx.fillStyle=cc; ctx.fillRect(G.e.x,G.e.y,G.g.x-G.e.x,G.g.y-G.e.y);
  // cabine + rollcage 3D visível
  face([G.m,G.n,G.o,G.p],'#2E344E'); face([G.i,G.j,G.n,G.m],'#252A3A'); face([G.j,G.k,G.o,G.n],'#252A3A'); face([G.l,G.k,G.o,G.p],'#252A3A');
  ctx.strokeStyle='#D8DEE8'; ctx.lineWidth=1.1; ctx.beginPath(); ctx.moveTo(G.i.x,G.i.y); ctx.lineTo(G.m.x,G.m.y); ctx.moveTo(G.j.x,G.j.y); ctx.lineTo(G.n.x,G.n.y); ctx.moveTo(G.m.x,G.m.y); ctx.lineTo(G.n.x,G.n.y); ctx.moveTo(G.l.x,G.l.y); ctx.lineTo(G.p.x,G.p.y); ctx.stroke();
  // vidro com refração e reflexo
  ctx.fillStyle='rgba(120,200,255,0.88)'; ctx.beginPath(); ctx.moveTo(G.i.x,G.i.y); ctx.lineTo(G.j.x,G.j.y); ctx.lineTo(G.n.x,G.n.y); ctx.lineTo(G.m.x,G.m.y); ctx.closePath(); ctx.fill();
  ctx.fillStyle='rgba(255,255,255,0.22)'; ctx.beginPath(); ctx.moveTo(G.i.x+3,G.i.y+2); ctx.lineTo(G.i.x+10,G.i.y+2); ctx.lineTo(G.m.x+8,G.m.y+1); ctx.lineTo(G.m.x+3,G.m.y+1); ctx.closePath(); ctx.fill();
  ctx.strokeStyle='rgba(255,255,255,0.18)'; ctx.lineWidth=0.8; ctx.beginPath(); ctx.moveTo(G.i.x,G.i.y); ctx.lineTo(G.j.x,G.j.y); ctx.stroke();
  // espelhos retrovisores
  [[-W*0.36, H*0.55],[W*0.36, H*0.55]].forEach(zOff=>{ const p=P(-L*0.10, H*0.55, zOff), s=p.sc; ctx.fillStyle='#0A0A0F'; ctx.beginPath(); ctx.ellipse(p.x, p.y, 2.2*s, 1.6*s, 0,0,Math.PI*2); ctx.fill(); ctx.fillStyle=paint; ctx.beginPath(); ctx.ellipse(p.x, p.y, 1.6*s, 1.2*s, 0,0,Math.PI*2); ctx.fill(); });
  // maçanetas
  [[-L*0.05, H*0.45, -W*0.51],[L*0.12, H*0.45, -W*0.51],[-L*0.05, H*0.45, W*0.51],[L*0.12, H*0.45, W*0.51]].forEach(([x,y,z])=>{ const p=P(x,y,z); ctx.fillStyle='rgba(255,255,255,0.85)'; ctx.fillRect(p.x-1.5*p.sc, p.y-0.6*p.sc, 3*p.sc, 1.2*p.sc); });
  // rodas high-poly em tempo real — 60k illusion
  [[-L*0.36,-W*0.52],[L*0.36,-W*0.52],[-L*0.36,W*0.52],[L*0.36,W*0.52]].forEach(([x,z])=>{
    const p=P(x,-2,z), s=p.sc;
    const tyreG = state.build[5]?.grip || 0.88;
    const rimB = state.build[12]?.bonus || 0.92;
    const brakeB = state.build[7]?.bonus || 1;
    const wW = 6 + (tyreG-0.7)*5.5;
    // pneu com sulcos profundos
    ctx.fillStyle='#080A0F'; ctx.beginPath(); ctx.roundRect(p.x-1.9,p.y-1.2,wW,10.4,1.9); ctx.fill();
    ctx.strokeStyle='rgba(255,255,255,0.06)'; ctx.lineWidth=0.6; for(let k=0;k<3;k++){ ctx.beginPath(); ctx.moveTo(p.x-1.9, p.y+1+k*3); ctx.lineTo(p.x-1.9+wW, p.y+1+k*3); ctx.stroke(); }
    // aro
    const rimCol = rimB>1.12?'#FFD54A': rimB>1.04?'#E8EDF5': rimB>0.95?'#9AA8C0':'#6B7280';
    ctx.fillStyle=rimCol; ctx.beginPath(); ctx.arc(p.x+1.2,p.y+4,3.0 + (rimB-0.9)*2.8,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle='rgba(255,255,255,0.22)'; ctx.lineWidth=0.7; ctx.beginPath(); ctx.arc(p.x+1.2,p.y+4,3.0 + (rimB-0.9)*2.8,0,Math.PI*2); ctx.stroke();
    // disco perfurado + ranhuras
    ctx.fillStyle= brakeB>1.12?'#8A1A1A':'#3A3E4A'; ctx.beginPath(); ctx.arc(p.x+1.2,p.y+4,2.35,0,Math.PI*2); ctx.fill();
    ctx.fillStyle='#080A0F'; for(let a=0;a<10;a++){ const an=(a/10)*Math.PI*2 + ang*0.04, px=p.x+1.2+Math.cos(an)*1.55, py=p.y+4+Math.sin(an)*1.55; ctx.beginPath(); ctx.arc(px,py,0.32,0,Math.PI*2); ctx.fill(); }
    // ranhura radial
    ctx.strokeStyle='rgba(0,0,0,0.22)'; ctx.lineWidth=0.4; for(let a=0;a<5;a++){ const an=(a/5)*Math.PI*2; ctx.beginPath(); ctx.moveTo(p.x+1.2,p.y+4); ctx.lineTo(p.x+1.2+Math.cos(an)*1.2, p.y+4+Math.sin(an)*1.2); ctx.stroke(); }
    // pinça
    ctx.fillStyle= brakeB>1.14?'#FF1A1A': brakeB>1.06?'#C0264A':'#6B7280'; ctx.fillRect(p.x+2.7,p.y+1.2,1.7,3.4); ctx.fillStyle='rgba(255,255,255,0.14)'; ctx.fillRect(p.x+2.7,p.y+1.2,1.7,0.7);
    ctx.fillStyle='#0A0A0F'; ctx.beginPath(); ctx.arc(p.x+1.2,p.y+4,0.75,0,Math.PI*2); ctx.fill();
  });
  const glow=state.build[13]?.glow; if(glow && glow!=='none'){ const col=glow==='rainbow'?'#FFD54A':glow; ctx.shadowColor=col; ctx.shadowBlur=18; ctx.strokeStyle=col; ctx.lineWidth=1.5; ctx.strokeRect(G.e.x-1,G.e.y-1,(G.g.x-G.e.x)+2,3); ctx.shadowBlur=0; ctx.fillStyle=col+'20'; ctx.beginPath(); ctx.ellipse(cx,cy+12,24,7,0,0,Math.PI*2); ctx.fill(); ctx.fillStyle=col+'0F'; ctx.beginPath(); ctx.ellipse(cx,cy+16,42,8,0,0,Math.PI*2); ctx.fill(); }
}

function drawTacho(rpm){
  const c=document.getElementById('tachoCanvas'); if(!c) return; const ctx=c.getContext('2d'), W=220,H=220,CX=110,CY=110,R=88;
  ctx.clearRect(0,0,W,H); ctx.fillStyle='#0A0E24'; ctx.beginPath(); ctx.arc(CX,CY,R+6,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='rgba(255,255,255,0.06)'; ctx.lineWidth=10; ctx.beginPath(); ctx.arc(CX,CY,R,0,Math.PI*2); ctx.stroke();
  for(let i=0;i<=40;i++){ const ang=-Math.PI*0.75 + (i/40)*Math.PI*1.5; const len=i%5===0?10:(i%2===0?6:3); const col=(i/40*8000>=6200&&i/40*8000<=7600)?'#00E676':(i/40*8000>7600?'#FF3B00':'rgba(255,255,255,0.32)'); ctx.strokeStyle=col; ctx.lineWidth=i%5===0?2:1; ctx.beginPath(); ctx.moveTo(CX+Math.cos(ang)*(R-2),CY+Math.sin(ang)*(R-2)); ctx.lineTo(CX+Math.cos(ang)*(R-2-len),CY+Math.sin(ang)*(R-2-len)); ctx.stroke(); if(i%10===0){ ctx.fillStyle='rgba(255,255,255,0.72)'; ctx.font='600 8px JetBrains Mono'; ctx.textAlign='center'; ctx.fillText(String(i*2),CX+Math.cos(ang)*(R-18),CY+Math.sin(ang)*(R-18)+3); } }
  ctx.strokeStyle='rgba(0,230,118,0.22)'; ctx.lineWidth=8; ctx.beginPath(); ctx.arc(CX,CY,R, deg(6200), deg(7600)); ctx.stroke(); ctx.strokeStyle='#00E676'; ctx.lineWidth=2; ctx.beginPath(); ctx.arc(CX,CY,R, deg(6200), deg(6200)+0.03); ctx.stroke(); ctx.beginPath(); ctx.arc(CX,CY,R, deg(7600), deg(7600)+0.03); ctx.stroke();
  ctx.strokeStyle='rgba(255,59,0,0.85)'; ctx.lineWidth=4; ctx.beginPath(); ctx.arc(CX,CY,R, deg(7600), deg(8000)); ctx.stroke();
  const a=deg(Math.min(8000,Math.max(0,rpm))); ctx.save(); ctx.translate(CX,CY); ctx.rotate(a); ctx.strokeStyle='#00E5FF'; ctx.lineWidth=3; ctx.shadowColor='#00E5FF'; ctx.shadowBlur=10; ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(R-18,0); ctx.stroke(); ctx.fillStyle='#EAF0FF'; ctx.beginPath(); ctx.arc(0,0,5,0,Math.PI*2); ctx.fill(); ctx.restore();
  const el=document.getElementById('tachoRpm'); if(el) el.textContent=Math.round(rpm).toString();
  function deg(v){ return -Math.PI*0.75 + (v/8000)*Math.PI*1.5; }
}

function load(){
  try{
    const raw=localStorage.getItem('wow-v4');
    if(!raw) return;
    const s=JSON.parse(raw);
    if(typeof s.money==='number' && s.money>=0 && s.money<=999999) state.money=s.money;
    if(typeof s.pb==='number' && s.pb>0 && s.pb<30) state.pb=s.pb;
    if(s.build && Array.isArray(s.build) && s.build.length===14){
      let ok=true;
      for(let i=0;i<14;i++){
        const v=s.build[i];
        if(v){
          if(typeof v.name!=='string' || typeof v.chance!=='number') ok=false;
          if(!CATEGORIES[i].options.find(o=>o.name===v.name)) ok=false;
        }
      }
      if(ok) state.build=s.build;
      else console.warn('save invalido — resetando');
    }
    const n=state.build.findIndex(v=>!v); state.currentCat=n===-1?14:n;
  }catch(e){ console.warn('falha ao carregar save',e); localStorage.removeItem('wow-v4'); }
}
function save(){
  try{
    // validação antes de salvar
    if(state.money<0) state.money=0;
    if(state.money>999999) state.money=999999;
    localStorage.setItem('wow-v4', JSON.stringify({money:state.money, pb:state.pb, build:state.build}));
  }catch(e){
    if(e.name==='QuotaExceededError'){ alert('Armazenamento cheio — progresso não salvo'); }
    console.error('falha ao salvar',e);
  }
}
function updateMoney(){
  // sanitiza e atualiza
  if(state.money<0) state.money=0;
  document.getElementById('moneyDisplay').textContent='$'+Math.floor(state.money).toLocaleString('pt-BR');
  const can=state.money>=250 && !state.spinning && state.currentCat<14 && ((state.filtered[state.currentCat]||CATEGORIES[state.currentCat].options).length>3);
  const b=document.getElementById('shopRemove'); if(b){ b.disabled=!can; b.style.opacity=can?'1':'0.45'; b.style.pointerEvents=can?'auto':'none'; }
}
function updateBest(){ const best=state.build.filter(v=>v&&v.stars===5).length; document.getElementById('bestLabel').textContent=`BEST ${best}/${state.build.length}`; const d=document.getElementById('bestDots'); d.innerHTML=''; for(let i=0;i<state.build.length;i++){ const s=document.createElement('span'); if(state.build[i]){ if(state.build[i].stars===5) s.className='best'; else s.className='filled'; } d.appendChild(s); } }
function updateCar(){ const labels=['PWR','MASS','DRIVE','TYRES','GEARS','BRAKES','SUSP','EXHAUST','RIMS','AERO','TOP']; const st=calculateStats(state.build); const vals=[ st.pwr?st.pwr+' HP':'—', st.mass?st.mass+' KG':'—', state.build[4]?.name||'—', state.build[5]?.name||'—', state.build[6]?.name||'—', state.build[7]?.name||'—', state.build[8]?.name||'—', state.build[9]?.name||'—', state.build[12]?.name||'—', st.aero?st.aero.toFixed(2):'—', st.top?st.top+' KM/H':'—']; const ul=document.getElementById('yourCarList'); ul.innerHTML=''; labels.forEach((l,i)=>{ const li=document.createElement('li'); li.innerHTML=`<span>${l}</span><b>${vals[i]}</b>`; ul.appendChild(li); }); const sc=SCENARIOS[state.currentCat % SCENARIOS.length]||SCENARIOS[0]; const cur=state.scenario||sc; document.getElementById('scenarioIcon').textContent=cur.icon; document.getElementById('scenarioName').textContent=cur.name; document.getElementById('scenarioDist').textContent=cur.dist+'M'; }

function showCategory(idx){
  if(idx>=14){ showReady(); return; }
  state.currentCat=idx;
  const cat=CATEGORIES[idx], opts=state.filtered[idx]||cat.options;
  document.getElementById('engineLabel').textContent=cat.label;
  wheel.setOptions(opts);
  document.getElementById('nextBtn').classList.add('hidden');
  document.getElementById('spinLeft').disabled=false; document.getElementById('spinRight').disabled=false;
  updateCar(); updateBest(); updateMoney();
  document.getElementById('raceView').classList.add('hidden');
  document.querySelector('.wheel-float').style.display='flex';
  document.querySelector('.ui-minimal').style.display='block';
  document.querySelector('.scene-canvas').style.display='block';
}
function showReady(){
  state.currentCat=14; document.getElementById('engineLabel').textContent='PRONTO PARA CORRIDA';
  document.getElementById('spinLeft').disabled=true; document.getElementById('spinRight').disabled=true;
  const n=document.getElementById('nextBtn'); n.classList.remove('hidden'); n.textContent='🏁 CORRER AGORA →'; n.onclick=enterRace;
  updateCar(); updateBest();
}
function weightedPick(opts){ const tot=opts.reduce((a,b)=>a+b.chance,0); let r=Math.random()*tot; for(let i=0;i<opts.length;i++){ r-=opts[i].chance; if(r<=0) return i; } return opts.length-1; }
async function doSpin(){
  if(state.spinning) return; if(state.currentCat>=14) return;
  const opts=state.filtered[state.currentCat]||CATEGORIES[state.currentCat].options;
  if(!opts.length) return;
  state.spinning=true; document.getElementById('spinLeft').disabled=true; document.getElementById('spinRight').disabled=true; document.getElementById('nextBtn').classList.add('hidden');
  const wi=weightedPick(opts), win=opts[wi]; vibrate(14);
  await wheel.spinTo(wi, {duration: 4200+Math.random()*380, onTick: tickSound});
  state.build[state.currentCat]=win; state.filtered[state.currentCat]=null; save();
  // sem pop-up — só atualiza carro em tempo real atrás (exigência)
  updateCar(); updateBest(); updateMoney(); vibrate(win.stars>=4?[24,16,38]:18); if(win.stars>=4) winSound(true);
  // feedback sutil no centro da roleta (sem pop-up)
  const label=document.getElementById('engineLabel'); const prev=label.textContent; label.textContent=win.name+' • '+win.chance.toFixed(1)+'%'; label.style.color='#FFD54A'; setTimeout(()=>{ label.textContent=CATEGORIES[state.currentCat]?.label||prev; label.style.color='#EAF0FF'; }, 900);
  state.spinning=false; document.getElementById('spinLeft').disabled=false; document.getElementById('spinRight').disabled=false;
  if(state.build.every(v=>v)){ const n=document.getElementById('nextBtn'); n.classList.remove('hidden'); n.textContent='🏁 CORRER AGORA →'; n.onclick=enterRace; if(state.auto) setTimeout(enterRace,800); }
  else { const n=document.getElementById('nextBtn'); n.classList.remove('hidden'); n.textContent='CONTINUAR →'; n.onclick=()=>{ const nxt=state.build.findIndex((v,i)=> i>state.currentCat && !v); if(nxt!==-1) showCategory(nxt); else { const f=state.build.findIndex(v=>!v); if(f!==-1) showCategory(f); } }; if(state.auto) setTimeout(()=> n.click(),800); }
}
function removeWorst(){
  if(state.money<250||state.spinning) return; const idx=state.currentCat; if(idx>=14) return; const cat=CATEGORIES[idx], cur=state.filtered[idx]||cat.options; if(cur.length<=3) return;
  let worst=0,score=Infinity; cur.forEach((o,i)=>{ const s=o.stars*100+o.chance; if(s<score){score=s; worst=i;}}); const nxt=cur.filter((_,i)=>i!==worst); state.filtered[idx]=nxt; state.money-=250; save(); updateMoney(); wheel.setOptions(nxt); vibrate(14);
}
function enterRace(){
  const st=calculateStats(state.build); if(!st.pwr || state.build.some(v=>!v)){ alert('Monte as 14 peças!'); const f=state.build.findIndex(v=>!v); if(f!==-1) showCategory(f); return; }
  state.scenario=SCENARIOS[Math.floor(Math.random()*SCENARIOS.length)];
  const pool= st.top>380? OPPONENTS.filter(o=>o.tier>=3) : st.top>300? OPPONENTS.filter(o=>o.tier>=2): OPPONENTS;
  state.opponent=pool[Math.floor(Math.random()*pool.length)];
  document.querySelector('.wheel-float').style.display='none'; document.querySelector('.ui-minimal').style.display='none'; document.querySelector('.scene-canvas').style.display='none';
  document.getElementById('raceView').classList.remove('hidden');
  race.reset(); race.setBuild(state.build,st,state.scenario,state.scenario.dist);
  document.getElementById('hudGear').textContent='N'; document.getElementById('hudSpeed').textContent='0'; document.getElementById('hudTime').textContent='0.000s'; document.getElementById('hudOpponent').textContent='—'; document.getElementById('rpmFill').style.width='8%'; drawTacho(900); document.querySelectorAll('#trafficLights .tl-light').forEach(l=>l.classList.remove('on'));
  document.getElementById('launchControls').classList.remove('hidden'); document.getElementById('shiftControls').classList.add('hidden'); document.getElementById('raceStartBtn').classList.remove('hidden'); document.getElementById('raceStartBtn').textContent='PREPARAR LARGADA'; document.getElementById('raceStartBtn').disabled=false;
  document.getElementById('raceHint').textContent=`${state.scenario.icon} ${state.scenario.dist}m • 2 vermelhas → amarela → verde!`; race.draw(0,0,state.scenario);
}
async function startRace(){ const btn=document.getElementById('raceStartBtn'); btn.disabled=true; btn.textContent='AGUARDE AS LUZES...'; document.getElementById('raceHint').textContent='Atenção...'; document.getElementById('launchControls').classList.remove('hidden'); document.getElementById('shiftControls').classList.add('hidden'); const ok=await race.startCountdown(document.querySelectorAll('#trafficLights .tl-light')); if(!ok) return; btn.classList.add('hidden'); document.getElementById('raceHint').textContent='ACELERE! SHIFT no verde!'; document.getElementById('launchControls').classList.add('hidden'); document.getElementById('shiftControls').classList.remove('hidden'); }
function handleLaunch(){ const r=race.launch(); if(r?.falseStart){ document.getElementById('raceHint').textContent='⚠️ QUEIMA! +1.2s'; vibrate([40,30,40]); } else if(r?.reaction!=null){ if(r.perfect) document.getElementById('raceHint').textContent=`🚀 PERFECT! ${r.reaction.toFixed(3)}s +${(r.advantage*1000).toFixed(0)}ms`; else document.getElementById('raceHint').textContent=`Largada ${r.reaction.toFixed(3)}s`; if(r.perfect) vibrate(20); } }
function handleShift(){ const r=race.shift(); if(!r) return; if(r.result==='perfect') document.getElementById('raceHint').textContent='✨ PERFECT!'; else if(r.result==='good') document.getElementById('raceHint').textContent='✓ Boa'; else if(r.result==='bad') document.getElementById('raceHint').textContent='✕ Fora'; document.getElementById('hudGear').textContent=r.gear||race.gear; }
function onRaceUpdate(d){ document.getElementById('hudSpeed').textContent=Math.round(d.speed).toString(); document.getElementById('hudTime').textContent=d.time.toFixed(3)+'s'; const diff=d.distance-d.oppDistance; const el=document.getElementById('hudOpponent'); el.textContent=(diff>=0?'+':'')+diff.toFixed(1)+'m'; el.style.color=diff>=0?'#00E676':'#FF3B9A'; document.getElementById('hudGear').textContent= race.gear===1 && d.time<0.4? '1': race.gear; const pct=Math.max(0,Math.min(100,(d.rpm/8000)*100)); document.getElementById('rpmFill').style.width=pct+'%'; drawTacho(d.rpm); }
function onRaceFinish(res){
  const st=calculateStats(state.build), pQ=st.quarter*(res.raceDistance/402), diff=pQ/res.oppTime, distF=res.raceDistance/402, tierM=state.opponent.tier*0.22+0.45;
  let base=res.win?620:110; let rew=Math.round(base*diff*distF*tierM + res.raceDistance*0.65); rew+=res.perfectShifts*(res.win?140:40); if(res.advantage) rew+=25; if(res.falseStart) rew=Math.round(rew*0.45); rew=Math.round(rew*(0.92+Math.random()*0.16)); rew=Math.max(60,rew);
  state.money+=rew; if(!state.pb || res.playerTime < state.pb) state.pb=res.playerTime; save(); updateMoney();
  document.getElementById('modalTitle').textContent=res.win?'VITÓRIA!':'DERROTA'; document.getElementById('modalIcon').textContent=res.win?'🏆':'💥'; document.getElementById('modalSub').textContent=res.win?`Venceu ${state.opponent.name} por ${(Math.abs(res.playerTime-res.oppTime)).toFixed(2)}s em ${res.scenario.name} (${res.raceDistance}m)`:`${state.opponent.name} venceu por ${(res.oppTime-res.playerTime).toFixed(2)}s • ${res.scenario.name}`;
  document.getElementById('modalTime').textContent=res.playerTime.toFixed(3)+'s'+(res.falseStart?' (+PENALTY)':'')+(res.advantage?` (-${(res.advantage*1000).toFixed(0)}ms)`:''); document.getElementById('modalOppTime').textContent=res.oppTime.toFixed(3)+'s'; document.getElementById('modalPB').textContent=state.pb.toFixed(3)+'s'; document.getElementById('modalReward').textContent='+ $'+rew.toLocaleString('pt-BR');
  document.getElementById('rewardBreak').innerHTML=`Cenário ${res.scenario.icon} ${res.raceDistance}m ×${distF.toFixed(2)} • Dif. ×${diff.toFixed(2)} • Tier ${state.opponent.tier} ×${tierM.toFixed(2)} • Perfect ${res.perfectShifts}${res.advantage?` • Largada -${(res.advantage*1000).toFixed(0)}ms`:''}`;
  document.getElementById('resultModal').classList.remove('hidden'); winSound(res.win); vibrate(res.win?[26,32,48]:[44,26,44]);
}
function safeGet(id){ const el=document.getElementById(id); if(!el) console.warn('elemento ausente:',id); return el; }
function bind(){
  const spinL=safeGet('spinLeft'), spinR=safeGet('spinRight'), next=safeGet('nextBtn'), auto=safeGet('autoBtn'), shop=safeGet('shopBtn'), closeShop=safeGet('closeShop'), shopRem=safeGet('shopRemove'), close=safeGet('closeBtn');
  if(spinL) spinL.addEventListener('click', doSpin, {passive:true});
  if(spinR) spinR.addEventListener('click', doSpin, {passive:true});
  if(next) next.addEventListener('click', ()=> { if(next.onclick) next.onclick(); }, {passive:true});
  if(auto) auto.addEventListener('click', ()=>{
    state.auto=!state.auto; auto.classList.toggle('active',state.auto); auto.textContent= state.auto?'AUTO: ON':'AUTO: OFF'; auto.setAttribute('aria-pressed', String(state.auto));
    if(state.auto && !state.spinning){
      if(state.currentCat<14 && !state.build[state.currentCat]) doSpin();
      else if(state.build[state.currentCat] && document.getElementById('nextBtn') && !document.getElementById('nextBtn').classList.contains('hidden')) document.getElementById('nextBtn').click();
    }
  }, {passive:true});
  if(shop) shop.addEventListener('click', ()=> safeGet('shopModal')?.classList.remove('hidden'), {passive:true});
  if(closeShop) closeShop.addEventListener('click', ()=> safeGet('shopModal')?.classList.add('hidden'), {passive:true});
  if(shopRem) shopRem.addEventListener('click', removeWorst, {passive:true});
  const shopBack=document.querySelector('#shopModal .modal-backdrop'); if(shopBack) shopBack.addEventListener('click', ()=> safeGet('shopModal')?.classList.add('hidden'), {passive:true});
  if(close) close.addEventListener('click', ()=>{ if(confirm('Resetar progresso? Isso apagará seu carro e dinheiro.')){ try{ localStorage.removeItem('wow-v4'); }catch{} location.reload(); } }, {passive:true});
  addEventListener('keydown', e=>{
    if(e.code==='Space'){
      e.preventDefault();
      const rv=safeGet('raceView');
      if(rv && !rv.classList.contains('hidden')){
        if(race.state==='countdown') handleLaunch();
        else if(race.state==='racing') handleShift();
      } else if(!state.spinning && state.currentCat<14) doSpin();
    }
    if(e.code==='Escape'){
      ['shopModal','pickModal','resultModal'].forEach(id=> safeGet(id)?.classList.add('hidden'));
    }
  });
  const raceBtn=safeGet('raceStartBtn'); if(raceBtn) raceBtn.addEventListener('click', startRace, {passive:true});
  const launchPairs=[['launchLeft',handleLaunch],['launchRight',handleLaunch],['shiftLeft',handleShift],['shiftRight',handleShift]];
  launchPairs.forEach(([id,fn])=>{
    const el=safeGet(id); if(!el) return;
    el.addEventListener('click', e=>{ e.preventDefault(); fn(); }, {passive:false});
    el.addEventListener('touchstart', e=>{ e.preventDefault(); fn(); }, {passive:false});
  });
  const back=safeGet('backToBuild');
  if(back) back.addEventListener('click', ()=>{
    try{ race.stop(); }catch{}
    safeGet('raceView')?.classList.add('hidden');
    const wf=document.querySelector('.wheel-float'), ui=document.querySelector('.ui-minimal'), sc=document.querySelector('.scene-canvas');
    if(wf) wf.style.display='flex'; if(ui) ui.style.display='block'; if(sc) sc.style.display='block';
  }, {passive:true});
  const up=safeGet('upgradeBtn'); if(up) up.addEventListener('click', ()=>{ safeGet('resultModal')?.classList.add('hidden'); openPick(); }, {passive:true});
  const ag=safeGet('againBtn'); if(ag) ag.addEventListener('click', ()=>{ safeGet('resultModal')?.classList.add('hidden'); enterRace(); }, {passive:true});
  const rb=safeGet('rebuildBtn'); if(rb) rb.addEventListener('click', ()=>{
    if(!confirm('Novo carro? Perderá o carro atual e voltará ao ENGINE SIZE.')) return;
    safeGet('resultModal')?.classList.add('hidden'); state.build=Array(14).fill(null); state.filtered=Array(14).fill(null); save(); showCategory(0);
    safeGet('raceView')?.classList.add('hidden');
    const wf=document.querySelector('.wheel-float'), ui=document.querySelector('.ui-minimal'), sc=document.querySelector('.scene-canvas');
    if(wf) wf.style.display='flex'; if(ui) ui.style.display='block'; if(sc) sc.style.display='block';
  }, {passive:true});
  const cp=safeGet('closePick'); if(cp) cp.addEventListener('click', ()=> safeGet('pickModal')?.classList.add('hidden'), {passive:true});
  const pickBack=document.querySelector('#pickModal .modal-backdrop'); if(pickBack) pickBack.addEventListener('click', ()=> safeGet('pickModal')?.classList.add('hidden'), {passive:true});
  const resBack=document.querySelector('#resultModal .modal-backdrop'); if(resBack) resBack.addEventListener('click', ()=> safeGet('resultModal')?.classList.add('hidden'), {passive:true});
  // acessibilidade: foco visível
  document.querySelectorAll('button').forEach(b=>{ b.addEventListener('focus', ()=> b.style.outline='2px solid #00E5FF'); b.addEventListener('blur', ()=> b.style.outline=''); });
}
function escapeHTML(s){ return String(s).replace(/[&<>"']/g, c=> ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function openPick(){
  const grid=document.getElementById('pickGrid'); if(!grid) return; grid.innerHTML=''; CATEGORIES.forEach((cat,i)=>{
    const cur=state.build[i], better=getBetterOptions(cat,cur), has=better.length>0;
    const b=document.createElement('button'); b.type='button'; b.className= has?'':'disabled'; b.style.cssText='padding:10px;border-radius:12px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.07);color:#EAF0FF;cursor:pointer;text-align:left;transition:all .15s';
    b.disabled=!has; b.setAttribute('aria-disabled', String(!has));
    const icon={engine:'🛢️',cylinders:'🔩',induction:'🌪️',weight:'⚖️',drive:'⚙️',tyres:'🛞',gearbox:'🔧',brakes:'🛡️',suspension:'🔩',exhaust:'🔥',shape:'🚗',paint:'🎨',rims:'⚙️',underglow:'💡'}[cat.id]||'🔧';
    // sanitiza nome atual
    const curName = cur ? escapeHTML(cur.name) : '—';
    const betterText = has ? `↑ ${better.length} melhores • ${escapeHTML(better[0].name)} → ${escapeHTML(better[better.length-1].name)}` : '★ Já é o melhor';
    b.innerHTML=`<div style="font-size:18px" aria-hidden="true">${icon}</div><strong>${escapeHTML(cat.label)}</strong><br><span style="font-size:10px;color:#9AA4C8">Atual: ${curName}</span><br><b style="font-size:10px;color:${has?'#4DD0E0':'#6B7280'}">${betterText}</b>`;
    if(has){
      b.addEventListener('click', ()=>{
        const m1=document.getElementById('pickModal'), m2=document.getElementById('resultModal'), wf=document.querySelector('.wheel-float'), ui=document.querySelector('.ui-minimal'), sc=document.querySelector('.scene-canvas'), rv=document.getElementById('raceView');
        if(m1) m1.classList.add('hidden'); if(m2) m2.classList.add('hidden');
        state.filtered[i]=better;
        if(wf) wf.style.display='flex'; if(ui) ui.style.display='block'; if(sc) sc.style.display='block'; if(rv) rv.classList.add('hidden');
        showCategory(i);
        const lbl=document.getElementById('engineLabel'); if(lbl) lbl.textContent=cat.label+' • UPGRADE';
      }, {once:true});
    }
    grid.appendChild(b);
  });
  const pm=document.getElementById('pickModal'); if(pm) pm.classList.remove('hidden');
}

load(); updateCar(); updateBest(); updateMoney(); showCategory(state.currentCat); bind(); drawScene(); drawTacho(900);
