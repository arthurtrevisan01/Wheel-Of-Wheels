// WHEEL OF WHEELS — PREMIUM FOTORREALISTA — SEM LIMITES
// High-Poly 30-60k illusion, PBR Clearcoat 4K, Wet Asphalt 4K, Underglow Bloom, Burnout, Backfire, Spring Camera, SlowMo, Neumorphism Glass

const CATEGORIES = [
  { id: 'engine', label: 'ENGINE SIZE', title: 'Tamanho do Motor', desc: '1.0L a 6.0L — cores da foto.', statKey: 'hp',
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
  { id: 'cylinders', label: 'CYLINDERS', title: 'Cilindros', desc: 'I3 → W16', statKey: 'mult',
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
  { id: 'induction', label: 'INDUCTION', title: 'Indução', desc: 'N/A → Quad Turbo', statKey: 'mult',
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
  { id: 'weight', label: 'WEIGHT', title: 'Peso', desc: '750kg → 3000kg', statKey: 'kg', lowerIsBetter: true,
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
  { id: 'drive', label: 'DRIVE TYPE', title: 'Tração', desc: 'FWD/RWD/AWD', statKey: 'grip',
    options: [
      { name: 'FWD', chance: 28, stars: 1, color: '#242F4A', grip: 0.86, rarity:'Comum' },
      { name: 'RWD', chance: 34, stars: 2, color: '#32405E', grip: 0.92, rarity:'Incomum' },
      { name: 'AWD', chance: 24, stars: 3, color: '#4B3A8A', grip: 1.08, rarity:'Raro' },
      { name: 'AWD Vectoring', chance: 9, stars: 4, color: '#7A1840', grip: 1.18, rarity:'Épico' },
      { name: 'RWD Drag Spec', chance: 5, stars: 5, color: '#8A6A00', grip: 1.22, rarity:'Lendário' },
    ]},
  { id: 'tyres', label: 'TYRES', title: 'Pneus', desc: 'Cheap → Drag Radials', statKey: 'grip',
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
  { id: 'gearbox', label: 'GEARBOX', title: 'Câmbio', desc: '2-8 marchas', statKey: 'eff',
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
  { id: 'brakes', label: 'BRAKES', title: 'Freios', desc: 'Disco perfurado', statKey: 'bonus',
    options: [
      { name: 'Drum', chance: 16, stars: 1, color: '#242F4A', bonus: 0.86, rarity:'Comum' },
      { name: 'Street Disc', chance: 20, stars: 1, color: '#2A3552', bonus: 0.92, rarity:'Comum' },
      { name: 'Sport', chance: 18, stars: 2, color: '#32405E', bonus: 1.0, rarity:'Incomum' },
      { name: 'Drilled Sport', chance: 19, stars: 2, color: '#32405E', bonus: 1.02, rarity:'Incomum' },
      { name: 'Race Steel', chance: 14, stars: 3, color: '#4B3A8A', bonus: 1.06, rarity:'Raro' },
      { name: 'Carbon Ceramic', chance: 9, stars: 4, color: '#7A1840', bonus: 1.12, rarity:'Épico' },
      { name: 'Carbon-Carbon Pro', chance: 4, stars: 5, color: '#8A6A00', bonus: 1.18, rarity:'Lendário' },
    ]},
  { id: 'suspension', label: 'SUSPENSION', title: 'Suspensão', desc: 'Coilovers → Active Aero', statKey: 'bonus',
    options: [
      { name: 'Soft Stock', chance: 18, stars: 1, color: '#242F4A', bonus: 0.90, rarity:'Comum' },
      { name: 'Air Ride', chance: 20.5, stars: 1, color: '#242F4A', bonus: 0.92, rarity:'Comum' },
      { name: 'Street', chance: 18, stars: 1, color: '#2A3552', bonus: 0.96, rarity:'Comum' },
      { name: 'Sport Lowered', chance: 16, stars: 2, color: '#32405E', bonus: 1.02, rarity:'Incomum' },
      { name: 'Race Coilovers', chance: 14, stars: 3, color: '#4B3A8A', bonus: 1.08, rarity:'Raro' },
      { name: 'Drag 4-Link', chance: 9, stars: 4, color: '#7A1840', bonus: 1.16, rarity:'Épico' },
      { name: 'Active Aero', chance: 4.5, stars: 5, color: '#8A6A00', bonus: 1.22, rarity:'Lendário' },
    ]},
  { id: 'exhaust', label: 'EXHAUST', title: 'Escapamento', desc: 'Backfire flames', statKey: 'bonus',
    options: [
      { name: 'Stock Muffler', chance: 20, stars: 1, color: '#242F4A', bonus: 0.95, rarity:'Comum' },
      { name: 'Side Exit', chance: 22.5, stars: 1, color: '#242F4A', bonus: 0.98, rarity:'Comum' },
      { name: 'Cat-Back', chance: 18, stars: 2, color: '#32405E', bonus: 1.02, rarity:'Incomum' },
      { name: 'Straight Pipe', chance: 16, stars: 2, color: '#3A4A6E', bonus: 1.05, rarity:'Incomum' },
      { name: 'Titanium Race', chance: 12, stars: 3, color: '#4B3A8A', bonus: 1.09, rarity:'Raro' },
      { name: 'Inconel F1', chance: 8, stars: 4, color: '#7A1840', bonus: 1.14, rarity:'Épico' },
      { name: 'Flames Pro', chance: 3.5, stars: 5, color: '#8A6A00', bonus: 1.19, rarity:'Lendário' },
    ]},
  { id: 'shape', label: 'CAR SHAPE', title: 'Carroceria', desc: 'Wagon → F1', statKey: 'aero',
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
  { id: 'paint', label: 'PAINT', title: 'Pintura', desc: 'Clearcoat 4K', statKey: 'stars',
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
    ]},
  { id: 'rims', label: 'RIMS', title: 'Rodas', desc: 'Forged → Carbon', statKey: 'bonus',
    options: [
      { name: 'Stock Hubcap', chance: 30, stars: 1, color: '#4A4A4A', bonus: 0.92, rarity:'Comum' },
      { name: 'Steelies', chance: 18, stars: 1, color: '#3A3A3A', bonus: 0.90, rarity:'Comum' },
      { name: 'Alloy Sport', chance: 18, stars: 2, color: '#6A6A6A', bonus: 0.98, rarity:'Incomum' },
      { name: 'Forged Light', chance: 12, stars: 3, color: '#8A8A8A', bonus: 1.06, rarity:'Raro' },
      { name: 'Drag Beadlock', chance: 10, stars: 3, color: '#7A1840', bonus: 1.09, rarity:'Raro' },
      { name: 'Carbon Aero', chance: 8, stars: 4, color: '#1A1A1A', bonus: 1.12, rarity:'Épico' },
      { name: 'Gold TE37', chance: 4, stars: 5, color: '#8A6A00', bonus: 1.16, rarity:'Lendário' },
    ]},
  { id: 'underglow', label: 'UNDERGLOW', title: 'Neon Underglow', desc: 'Bloom premium', statKey: 'stars',
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
  let pwr=0; if(eng && cyl && ind){ pwr=eng.hp*cyl.mult*ind.mult; if(exh) pwr*=exh.bonus; if(rims) pwr*= (0.98+(rims.bonus-0.90)*0.15); pwr=Math.round(pwr); }
  const mass=w?w.kg:1500; let grip=1; if(drive&&tyre) grip=drive.grip*tyre.grip; if(susp) grip*=susp.bonus; const aero=shape?shape.aero:1.0;
  let top=0; if(pwr){ const pw=pwr/(mass/1000); top=Math.round((pw*0.62+90)*aero*(0.95+grip*0.06)); if(gear) top=Math.round(top*gear.eff); top=Math.min(520,Math.max(120,top)); }
  let zero100=9.5; if(pwr&&mass){ const pw=pwr/mass; zero100=Math.max(1.6,6.8-pw*3.2+(2-grip)*0.9-(aero-1)*0.4); zero100=Math.round(zero100*100)/100; }
  let quarter=15.5-(pwr/150)+(mass/800)-(grip-1)*1.2; quarter=Math.max(7.1,Math.min(16,quarter)); if(gear) quarter-=(gear.eff-1)*1.4; quarter=Math.round(quarter*1000)/1000;
  return {pwr,mass,grip:Math.round(grip*100)/100,aero,top,zero100,quarter};
}
function getBetterOptions(cat,cur){
  if(!cur) return cat.options; const key=cat.statKey, curVal=cur[key]??cur.stars, lower=cat.lowerIsBetter;
  return cat.options.filter(o=>{ if(o.name===cur.name) return false; if(o.stars>cur.stars) return true; if(o.stars<cur.stars) return false; const v=o[key]??o.stars; return lower? v<curVal : v>curVal; });
}
const ICONS={ engine:'🛢️', cylinders:'🔩', induction:'🌪️', weight:'⚖️', drive:'⚙️', tyres:'🛞', gearbox:'🔧', brakes:'🛡️', suspension:'🔩', exhaust:'🔥', shape:'🚗', paint:'🎨', rims:'⚙️', underglow:'💡' };

// === TEXTURAS 4K ===
function createCarbonPattern(ctx){
  const c=document.createElement('canvas'); c.width=64; c.height=64; const g=c.getContext('2d');
  g.fillStyle='#0A0A0A'; g.fillRect(0,0,64,64);
  g.strokeStyle='rgba(255,255,255,0.06)'; g.lineWidth=1;
  for(let x=0;x<64;x+=8){ g.beginPath(); g.moveTo(x,0); g.lineTo(x-8,64); g.stroke(); g.beginPath(); g.moveTo(x+4,0); g.lineTo(x-4,64); g.stroke(); }
  for(let y=0;y<64;y+=8){ g.beginPath(); g.moveTo(0,y); g.lineTo(64,y+8); g.stroke(); }
  g.fillStyle='rgba(255,255,255,0.04)'; for(let i=0;i<8;i++){ g.fillRect(i*8+2,2,4,2); }
  return ctx.createPattern(c,'repeat');
}
function createAsphaltTexture(ctx){
  const c=document.createElement('canvas'); c.width=256; c.height=256; const g=c.getContext('2d');
  g.fillStyle='#0E1020'; g.fillRect(0,0,256,256);
  // ruído
  for(let i=0;i<900;i++){ const x=Math.random()*256,y=Math.random()*256,r=Math.random()*0.9; g.fillStyle=`rgba(255,255,255,${0.025+Math.random()*0.035})`; g.beginPath(); g.arc(x,y,r,0,Math.PI*2); g.fill(); }
  // imperfeições
  g.strokeStyle='rgba(255,255,255,0.03)'; g.lineWidth=0.8; for(let i=0;i<12;i++){ g.beginPath(); g.moveTo(Math.random()*256,0); g.bezierCurveTo(Math.random()*256,85,Math.random()*256,170,Math.random()*256,256); g.stroke(); }
  // marcas de frenagem
  g.strokeStyle='rgba(20,20,20,0.45)'; g.lineWidth=2; for(let i=0;i<3;i++){ const x=40+i*70; g.beginPath(); g.moveTo(x,0); g.lineTo(x+8,256); g.stroke(); }
  return ctx.createPattern(c,'repeat');
}
function createNoiseTexture(ctx){
  const c=document.createElement('canvas'); c.width=80; c.height=80; const g=c.getContext('2d'); const d=g.createImageData(80,80);
  for(let i=0;i<d.data.length;i+=4){ const v=120+Math.random()*40; d.data[i]=v; d.data[i+1]=v; d.data[i+2]=v; d.data[i+3]=18; } g.putImageData(d,0,0);
  return ctx.createPattern(c,'repeat');
}

// === WHEEL ===
class Wheel {
  constructor(canvas){
    this.canvas=canvas; this.ctx=canvas.getContext('2d'); this.opts=[]; this.rotation=0; this.dpr=Math.max(1,window.devicePixelRatio||1);
    this.resize(); window.addEventListener('resize',()=>this.resize());
  }
  resize(){ const s=640; this.canvas.width=s*this.dpr; this.canvas.height=s*this.dpr; this.ctx.setTransform(this.dpr,0,0,this.dpr,0,0); this.draw(); }
  setOptions(o){ this.opts=o||[]; this.rotation=0; this.draw(); }
  draw(){
    const ctx=this.ctx,W=640,H=640,CX=320,CY=320,R=258;
    ctx.clearRect(0,0,W,H);
    if(!this.opts||!this.opts.length){ ctx.fillStyle='#0A0F2A'; ctx.beginPath(); ctx.arc(CX,CY,R,0,Math.PI*2); ctx.fill(); ctx.fillStyle='rgba(255,255,255,0.5)'; ctx.font='600 14px Space Grotesk'; ctx.textAlign='center'; ctx.fillText('Carregando...',CX,CY); return; }
    // rim metálico com reflexo
    const rim=ctx.createRadialGradient(CX,CY,R+8,CX,CY,R+20); rim.addColorStop(0,'#F0F4FF'); rim.addColorStop(0.3,'#9AA8C0'); rim.addColorStop(0.6,'#E8EDF5'); rim.addColorStop(1,'#5A6578');
    ctx.fillStyle=rim; ctx.beginPath(); ctx.arc(CX,CY,R+16,0,Math.PI*2); ctx.fill();
    ctx.fillStyle='#080B1E'; ctx.beginPath(); ctx.arc(CX,CY,R+9,0,Math.PI*2); ctx.fill();
    // parafusos
    for(let i=0;i<16;i++){ const a=(i/16)*Math.PI*2, x=CX+Math.cos(a)*(R+9), y=CY+Math.sin(a)*(R+9); const g=ctx.createRadialGradient(x,y,0,x,y,4); g.addColorStop(0,'#FFF'); g.addColorStop(1,'#6B768A'); ctx.fillStyle=g; ctx.beginPath(); ctx.arc(x,y,3,0,Math.PI*2); ctx.fill(); }
    const total=this.opts.length, per=(Math.PI*2)/total;
    for(let i=0;i<total;i++){
      const o=this.opts[i], s=-Math.PI/2+this.rotation+i*per, e=s+per;
      ctx.beginPath(); ctx.moveTo(CX,CY); ctx.arc(CX,CY,R,s,e); ctx.closePath();
      const g=ctx.createRadialGradient(CX,CY,30,CX,CY,R); g.addColorStop(0, lighten(o.color,28)); g.addColorStop(0.55,o.color); g.addColorStop(1,darken(o.color,26)); ctx.fillStyle=g; ctx.fill();
      // textura carbono sutil nas lendárias
      if(o.stars>=4){ ctx.save(); ctx.clip(); ctx.globalAlpha=0.10; ctx.fillStyle=createCarbonPattern(ctx); ctx.fillRect(CX-R,CY-R,R*2,R*2); ctx.restore(); }
      ctx.strokeStyle='rgba(255,255,255,0.11)'; ctx.lineWidth=1.2; ctx.stroke();
      ctx.save(); const mid=(s+e)/2, tx=CX+Math.cos(mid)*(R*0.60), ty=CY+Math.sin(mid)*(R*0.60); ctx.translate(tx,ty); ctx.rotate(mid+Math.PI/2); ctx.textAlign='center'; ctx.textBaseline='middle';
      if(o.stars>=4){ ctx.shadowColor=o.stars>=5?'rgba(255,213,74,0.9)':'rgba(255,100,120,0.7)'; ctx.shadowBlur=12; }
      ctx.font='800 11.5px Outfit, sans-serif'; ctx.fillStyle='rgba(255,255,255,0.98)'; ctx.shadowColor='rgba(0,0,0,0.65)'; ctx.shadowBlur=7; wrapText(ctx,o.name,0,-8,92,11); ctx.shadowBlur=0;
      const ch=o.chance.toFixed(1)+'%'; ctx.font='700 9px JetBrains Mono'; const tw=ctx.measureText(ch).width; ctx.fillStyle='rgba(0,0,0,0.44)'; ctx.beginPath(); ctx.roundRect(-tw/2-6,10,tw+12,14,7); ctx.fill(); ctx.fillStyle=o.stars>=3?'#FFE9A8':'rgba(180,220,255,0.97)'; ctx.fillText(ch,0,17);
      ctx.font='9px Space Grotesk'; ctx.fillStyle=o.stars>=5?'#FFD54A':o.stars>=4?'#FF6B8A':'rgba(255,255,255,0.72)'; ctx.fillText('★'.repeat(o.stars),0,32); ctx.restore();
    }
    const hubR=66; const hg=ctx.createRadialGradient(CX,CY,20,CX,CY,hubR); hg.addColorStop(0,'#2E344E'); hg.addColorStop(0.5,'#1A1E32'); hg.addColorStop(1,'#070A18'); ctx.fillStyle=hg; ctx.beginPath(); ctx.arc(CX,CY,hubR,0,Math.PI*2); ctx.fill(); ctx.strokeStyle='rgba(255,255,255,0.14)'; ctx.lineWidth=1.3; ctx.stroke();
    for(let r=24;r<62;r+=7){ ctx.beginPath(); ctx.arc(CX,CY,r,0,Math.PI*2); ctx.strokeStyle='rgba(255,255,255,0.06)'; ctx.lineWidth=1; ctx.stroke(); }
    ctx.fillStyle='rgba(255,255,255,0.08)'; ctx.beginPath(); ctx.arc(CX,CY,42,0,Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(CX,CY,4.5,0,Math.PI*2); ctx.fillStyle='#E8ECF2'; ctx.fill();
    function lighten(hex,a){ try{let c=hex.replace('#',''); if(c.length===3) c=c.split('').map(x=>x+x).join(''); const n=parseInt(c,16); let r=Math.min(255,(n>>16&255)+a), g=Math.min(255,(n>>8&255)+a), b=Math.min(255,(n&255)+a); return `rgb(${r},${g},${b})`}catch{return hex}}
    function darken(hex,a){ try{let c=hex.replace('#',''); if(c.length===3) c=c.split('').map(x=>x+x).join(''); const n=parseInt(c,16); let r=Math.max(0,(n>>16&255)-a), g=Math.max(0,(n>>8&255)-a), b=Math.max(0,(n&255)-a); return `rgb(${r},${g},${b})`}catch{return hex}}
    function wrapText(ctx,t,x,y,mW,lh){ const wds=t.split(' '); let ln='', lns=[]; for(let n=0;n<wds.length;n++){ const test=ln+wds[n]+' '; if(ctx.measureText(test).width>mW && n>0){ lns.push(ln.trim()); ln=wds[n]+' '; } else ln=test; } lns.push(ln.trim()); if(lns.length>2){ lns=[lns[0], lns.slice(1).join(' ')]; if(ctx.measureText(lns[1]).width>mW) lns[1]=lns[1].slice(0,13)+'.'; } const sy=y-(lns.length-1)*lh/2; lns.forEach((l,i)=> ctx.fillText(l,x,sy+i*lh)); }
  }
  spinTo(idx, opts={duration:4400}){
    return new Promise(res=>{
      const total=this.opts.length, per=(Math.PI*2)/total;
      let target= -idx*per - per/2;
      const extra=6.5+Math.random()*1.8; let cur=this.rotation%(Math.PI*2), fin=target; while(fin<cur) fin+=Math.PI*2; fin+=extra*Math.PI*2;
      const over=per*0.78, overFin=fin+over, bounceFin=fin, start=this.rotation, dur=opts.duration, t0=performance.now();
      let last=-1; const onTick=opts.onTick;
      const anim=(now)=>{
        const t=Math.min(1,(now-t0)/dur); let rot;
        if(t<0.88){ const tt=t/0.88, e=1-Math.pow(1-tt,3.5); rot=start+e*(overFin-start); }
        else { const tt=(t-0.88)/0.12, e=1-Math.pow(1-tt,2.7); rot=overFin+e*(bounceFin-overFin); }
        const tick=Math.floor((rot-start)/per);
        if(tick!==last){ last=tick; const sp=1-t; if(onTick) onTick(sp,t); if(navigator.vibrate && t<0.93 && tick%(t<0.55?1:2)===0) navigator.vibrate(7); }
        this.rotation=rot; this.draw();
        if(t<1) requestAnimationFrame(anim); else { this.rotation=((target%(Math.PI*2))+Math.PI*2)%(Math.PI*2); this.draw(); res(idx); }
      };
      requestAnimationFrame(anim);
    });
  }
}

// ===================== RACE (FOTORREALISTA) =====================
class RaceEngine {
  constructor(canvas, onUpdate, onFinish){
    this.canvas=canvas; this.ctx=canvas.getContext('2d'); this.onUpdate=onUpdate; this.onFinish=onFinish;
    this.dpr=Math.max(1,window.devicePixelRatio||1); this.w=440; this.h=720; this.reset();
    this.resize(); window.addEventListener('resize',()=>this.resize());
    this._pat=null; this._carbon=null;
  }
  resize(){ const w=440,h=720; this.canvas.width=w*this.dpr; this.canvas.height=h*this.dpr; this.canvas.style.width=w+'px'; this.canvas.style.height=h+'px'; this.ctx.setTransform(this.dpr,0,0,this.dpr,0,0); this.w=w; this.h=h; this.draw(0,0,this.scenario); }
  reset(){ this.state='idle'; this.time=0; this.distance=0; this.oppDistance=0; this.speed=0; this.rpm=900; this.gear=1; this.shiftCooldown=0; this.particles=[]; this.smoke=[]; this.carBuild=null; this.reaction=null; this.perfectShifts=0; this.totalShifts=0; this.boost=0; this.scenario=null; this.raceDistance=402; this.advantage=0; this.greenTime=0; this.cameraX=0; this.cameraY=0; this.slowMo=1; }
  setBuild(b,s,sc,dist){ this.carBuild=b; this.stats=s; this.scenario=sc; this.raceDistance=dist||sc.dist; const base=s.quarter*(this.raceDistance/402); const jit=(Math.random()*0.16-0.08); this.oppQuarter=Math.max(4.2, base*(1+jit)); this.draw(0,0,sc); }
  getPat(){ if(this._pat) return this._pat; this._pat=createAsphaltTexture(this.ctx); return this._pat; }
  draw(pDist,oDist,sc){
    const ctx=this.ctx,w=this.w,h=this.h, s=sc||this.scenario||SCENARIOS[0];
    ctx.clearRect(0,0,w,h);
    // motion blur trail (suave)
    ctx.fillStyle='rgba(4,5,18,0.08)'; ctx.fillRect(0,0,w,h);
    // céu
    const sky=ctx.createLinearGradient(0,0,0,180); sky.addColorStop(0,s.bg[0]); sky.addColorStop(1,s.bg[1]); ctx.fillStyle=sky; ctx.fillRect(0,0,w,190);
    const glow=ctx.createRadialGradient(w/2,100,0,w/2,100,380); glow.addColorStop(0,s.fog+'28'); glow.addColorStop(1,'transparent'); ctx.fillStyle=glow; ctx.fillRect(0,0,w,200);
    // nuvens volumétricas lentas
    ctx.fillStyle='rgba(255,255,255,0.04)'; for(let i=0;i<3;i++){ const x=(w*0.2 + i*120 + Date.now()*0.008)%w, y=28+i*18; ctx.beginPath(); ctx.ellipse(x,y,44+i*6,10+i*2,0,0,Math.PI*2); ctx.fill(); }
    // paisagem ultra detalhada (mesma do scene mas adaptada para pista)
    ctx.save();
    if(s.id==='city'){
      ctx.fillStyle='rgba(255,255,255,0.9)'; for(let i=0;i<36;i++){ const x=(i*41)%w, y=10+(i*17)%58, r=i%5===0?1.1:0.6; ctx.globalAlpha=0.5+Math.sin(i)*0.25; ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fill(); } ctx.globalAlpha=1;
      const n=14,bw=w/n; for(let i=0;i<n;i++){ const hb=30+Math.sin(i*1.3)*12+Math.cos(i*2.1)*10+20, x=i*bw; const g=ctx.createLinearGradient(x,190-hb,x+bw,190); g.addColorStop(0,'#0B1028'); g.addColorStop(1,'#141E3A'); ctx.fillStyle=g; ctx.fillRect(x+1,190-hb,bw-2,hb); ctx.fillStyle= i%3===0?'#00E5FF':i%3===1?'#FF3B9A':'#FFD54A'; ctx.fillRect(x+1,190-hb,bw-2,2); ctx.fillStyle='rgba(255,233,168,0.96)'; for(let wy=190-hb+8; wy<184; wy+=10){ for(let wx=x+4; wx<x+bw-4; wx+=7){ if((i+wy)%3!==0 && Math.random()>0.28) ctx.fillRect(wx,wy,3,4); } } }
      // ponte estaiada ao fundo
      ctx.strokeStyle='rgba(0,229,255,0.18)'; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(w*0.1,148); ctx.lineTo(w*0.5,118); ctx.lineTo(w*0.9,148); ctx.stroke();
      for(let i=1;i<5;i++){ const x=w*0.1 + (w*0.8/5)*i; ctx.beginPath(); ctx.moveTo(x,148); ctx.lineTo(w*0.5,118); ctx.stroke(); }
    } else if(s.id==='desert'){
      ctx.fillStyle='#FF8A00'; ctx.beginPath(); ctx.arc(w*0.76,38,16,0,Math.PI*2); ctx.fill(); ctx.fillStyle='rgba(255,138,0,0.14)'; ctx.beginPath(); ctx.arc(w*0.76,38,30,0,Math.PI*2); ctx.fill();
      ctx.fillStyle='#2B1A0A'; ctx.beginPath(); ctx.moveTo(0,142); ctx.quadraticCurveTo(w*0.18,92,w*0.42,112); ctx.quadraticCurveTo(w*0.68,142,w,102); ctx.lineTo(w,190); ctx.lineTo(0,190); ctx.closePath(); ctx.fill();
      ctx.fillStyle='#3D2614'; ctx.beginPath(); ctx.moveTo(0,148); ctx.quadraticCurveTo(w*0.26,108,w*0.54,126); ctx.quadraticCurveTo(w*0.78,158,w,122); ctx.lineTo(w,190); ctx.lineTo(0,190); ctx.closePath(); ctx.fill();
      for(let i=0;i<6;i++){ const x=16+i*66+(i%2?6:-6), y=142- (i%3)*5; ctx.fillStyle='#1B3A1A'; ctx.fillRect(x-3,y-14,6,14); ctx.beginPath(); ctx.arc(x-4,y-6,3.2,Math.PI*0.5,Math.PI*1.6); ctx.fill(); }
    } else if(s.id==='forest'){
      ctx.fillStyle='#0A1F14'; ctx.beginPath(); ctx.moveTo(0,118); ctx.lineTo(w*0.22,76); ctx.lineTo(w*0.44,100); ctx.lineTo(w*0.62,72); ctx.lineTo(w*0.82,96); ctx.lineTo(w,82); ctx.lineTo(w,190); ctx.lineTo(0,190); ctx.closePath(); ctx.fill();
      for(let lay=0; lay<2; lay++){ const a=lay===0?0.96:0.55; ctx.globalAlpha=a; for(let i=0;i<16;i++){ const x=(i/15)*w+Math.sin(i*1.7)*7, hT=26+Math.random()*20, wT=15+Math.random()*11; ctx.fillStyle= i%3===0?'#0F3A1F':i%3===1?'#143D1E':'#0B2F16'; ctx.beginPath(); ctx.moveTo(x,190); ctx.lineTo(x-wT/2,190); ctx.lineTo(x,190-hT); ctx.lineTo(x+wT/2,190); ctx.closePath(); ctx.fill(); } } ctx.globalAlpha=1;
      const fog=ctx.createLinearGradient(0,138,0,190); fog.addColorStop(0,'rgba(220,255,230,0)'); fog.addColorStop(1,'rgba(220,255,230,0.14)'); ctx.fillStyle=fog; ctx.fillRect(0,138,w,52);
    } else if(s.id==='harbor'){
      ctx.fillStyle='#0A1E2E'; ctx.fillRect(0,108,w,82); ctx.strokeStyle='rgba(124,77,255,0.58)'; ctx.lineWidth=3; ctx.beginPath(); ctx.moveTo(42,190); ctx.lineTo(42,102); ctx.lineTo(92,102); ctx.stroke();
      ctx.strokeStyle='rgba(0,229,255,0.48)'; ctx.lineWidth=2.5; ctx.beginPath(); ctx.moveTo(w-70,190); ctx.lineTo(w-70,108); ctx.lineTo(w-18,108); ctx.stroke();
      const cols=['#7A1A1A','#1A6B3A','#1E2B5A','#9A7B1A']; for(let i=0;i<4;i++){ ctx.fillStyle=cols[i]; ctx.fillRect(10+i*28,162,24,12); ctx.strokeStyle='rgba(255,255,255,0.14)'; ctx.strokeRect(10+i*28,162,24,12); }
      ctx.fillStyle='rgba(0,229,255,0.08)'; for(let i=0;i<w;i+=14) ctx.fillRect(i,178,10,2);
      ctx.strokeStyle='rgba(180,220,255,0.36)'; ctx.lineWidth=1; for(let i=0;i<30;i++){ const x=(i*23)%w, y=14+(i*19)%72; ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(x-4,y+9); ctx.stroke(); }
    } else if(s.id==='snow'){
      const aur=ctx.createLinearGradient(0,0,0,100); aur.addColorStop(0,'rgba(120,255,180,0.14)'); aur.addColorStop(1,'transparent'); ctx.fillStyle=aur; ctx.fillRect(0,0,w,100);
      ctx.fillStyle='#0D1A2E'; ctx.beginPath(); ctx.moveTo(0,128); ctx.lineTo(w*0.28,78); ctx.lineTo(w*0.48,102); ctx.lineTo(w*0.68,68); ctx.lineTo(w*0.86,94); ctx.lineTo(w,82); ctx.lineTo(w,190); ctx.lineTo(0,190); ctx.closePath(); ctx.fill();
      for(let i=0;i<12;i++){ const x=(i/11)*w+Math.sin(i)*5, hT=20+Math.random()*16; ctx.fillStyle='#0A1F14'; ctx.beginPath(); ctx.moveTo(x,190); ctx.lineTo(x-7,190); ctx.lineTo(x,190-hT); ctx.lineTo(x+7,190); ctx.closePath(); ctx.fill(); ctx.fillStyle='rgba(255,255,255,0.86)'; ctx.beginPath(); ctx.moveTo(x,190-hT); ctx.lineTo(x-3,190-hT+5); ctx.lineTo(x+3,190-hT+5); ctx.closePath(); ctx.fill(); }
      ctx.fillStyle='rgba(255,255,255,0.9)'; for(let i=0;i<22;i++){ const x=(i*37 + Date.now()*0.018)%w, y=10+(i*29)%88; ctx.beginPath(); ctx.arc(x,y,1.1,0,Math.PI*2); ctx.fill(); }
    }
    ctx.restore();
    // pista 4K wet asphalt
    const tTop=150, tBot=h-22, tWTop=132, tWBot=w-18;
    // sombra da pista
    ctx.fillStyle='rgba(0,0,0,0.35)'; ctx.beginPath(); ctx.ellipse(w/2,tBot+6,w*0.42,6,0,0,Math.PI*2); ctx.fill();
    ctx.save(); ctx.beginPath(); ctx.moveTo((w-tWTop)/2,tTop); ctx.lineTo((w+tWTop)/2,tTop); ctx.lineTo((w+tWBot)/2,tBot); ctx.lineTo((w-tWBot)/2,tBot); ctx.closePath();
    ctx.fillStyle=this.getPat(); ctx.fill();
    // wet reflection overlay
    ctx.fillStyle='rgba(0,229,255,0.06)'; ctx.fill();
    // brilho molhado
    const wet=ctx.createLinearGradient((w-tWTop)/2,tTop,(w+tWTop)/2,tTop); wet.addColorStop(0,'rgba(255,255,255,0)'); wet.addColorStop(0.5,'rgba(255,255,255,0.07)'); wet.addColorStop(1,'rgba(255,255,255,0)'); ctx.fillStyle=wet; ctx.fill();
    const tg=ctx.createLinearGradient(0,tTop,0,tBot); tg.addColorStop(0,'rgba(0,0,0,0.08)'); tg.addColorStop(1,'rgba(0,0,0,0.28)'); ctx.fillStyle=tg; ctx.fill();
    // guardrails metálicos reflexivos
    ctx.fillStyle='#6B7280'; ctx.fillRect((w-tWTop)/2-8,tTop,8,tBot-tTop); ctx.fillRect((w+tWTop)/2,tTop,8,tBot-tTop);
    ctx.fillStyle='#8A94A8'; ctx.fillRect((w-tWTop)/2-8,tTop,8,2); ctx.fillRect((w+tWTop)/2,tTop,8,2);
    ctx.fillStyle='rgba(255,255,255,0.18)'; ctx.fillRect((w-tWTop)/2-8,tTop,2,tBot-tTop); ctx.fillRect((w+tWTop)/2+6,tTop,2,tBot-tTop);
    // neon侧线
    ctx.strokeStyle=s.accent; ctx.lineWidth=2.4; ctx.shadowColor=s.accent; ctx.shadowBlur=12; ctx.beginPath(); ctx.moveTo((w-tWTop)/2,tTop); ctx.lineTo((w-tWBot)/2,tBot); ctx.stroke(); ctx.beginPath(); ctx.moveTo((w+tWTop)/2,tTop); ctx.lineTo((w+tWBot)/2,tBot); ctx.stroke(); ctx.shadowBlur=0;
    // linhas brancas
    ctx.setLineDash([10,10]); ctx.strokeStyle='rgba(255,255,255,0.32)'; ctx.lineWidth=1.2; ctx.beginPath(); ctx.moveTo((w-tWTop)/2+tWTop*0.25,tTop); ctx.lineTo((w-tWBot)/2+tWBot*0.25,tBot); ctx.stroke(); ctx.beginPath(); ctx.moveTo((w-tWTop)/2+tWTop*0.75,tTop); ctx.lineTo((w-tWBot)/2+tWBot*0.75,tBot); ctx.stroke(); ctx.setLineDash([]);
    // centro neon
    ctx.strokeStyle=s.accent; ctx.lineWidth=1.8; ctx.shadowColor=s.accent; ctx.shadowBlur=10; ctx.beginPath(); ctx.moveTo(w/2,tTop); ctx.lineTo(w/2,tBot); ctx.stroke(); ctx.shadowBlur=0;
    ctx.fillStyle='#E8ECF2'; ctx.fillRect((w-tWTop)/2,tTop,tWTop,5);
    // marcas de frenagem
    ctx.strokeStyle='rgba(20,20,20,0.35)'; ctx.lineWidth=2; for(let i=0;i<2;i++){ const x=w/2-18+i*36; ctx.beginPath(); ctx.moveTo(x,tTop+20); ctx.lineTo(x+6,tBot-30); ctx.stroke(); }
    // distância
    ctx.fillStyle='rgba(255,255,255,0.55)'; ctx.font='700 9px JetBrains Mono'; ctx.textAlign='center';
    const tot=this.raceDistance||402;
    for(let d=100; d<tot; d+= d>=500?200:100){ const p=d/tot, y=tTop+p*(tBot-tTop), wt=tWTop+p*(tWBot-tWTop); ctx.fillText(d+'M',w/2,y-6); ctx.fillStyle='rgba(255,255,255,0.14)'; ctx.fillRect((w-wt)/2,y,wt,1); ctx.fillStyle='rgba(255,255,255,0.55)'; }
    ctx.restore();
    // carros com spring camera
    const pP=Math.min(1,pDist/tot), oP=Math.min(1,oDist/tot), py=tTop+pP*(tBot-tTop-30) + this.cameraY, oy=tTop+oP*(tBot-tTop-30) + this.cameraY, ps=0.60+pP*0.76, os=0.60+oP*0.76;
    const lane=(prog)=>{ const wt=tWTop+prog*(tWBot-tWTop); return wt*0.25; };
    const px=w/2 - lane(pP) + this.cameraX, ox=w/2 + lane(oP) + this.cameraX;
    // reflexo molhado (espelho invertido)
    ctx.globalAlpha=0.18; this.drawCarPremium(px, py+26, ps*0.85, true, true); this.drawCarPremium(ox, oy+26, os*0.85, false, true); ctx.globalAlpha=1;
    this.drawCarPremium(px, py, ps, true, false); this.drawCarPremium(ox, oy, os, false, false);
    // fumaça burnout densa
    this.smoke.forEach(s=>{ ctx.globalAlpha=s.alpha*0.55; ctx.fillStyle=s.color; ctx.beginPath(); ctx.ellipse(s.x,s.y,s.r*1.6,s.r,0,0,Math.PI*2); ctx.fill(); });
    // partículas flames
    this.particles.forEach(p=>{ ctx.globalAlpha=p.alpha; ctx.fillStyle=p.color; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill(); }); ctx.globalAlpha=1;
    // LED arch na chegada
    if(pP>0.94||oP>0.94){
      const fy=tBot-12; // arco
      ctx.strokeStyle=s.accent; ctx.lineWidth=4; ctx.shadowColor=s.accent; ctx.shadowBlur=18;
      ctx.beginPath(); ctx.moveTo((w-tWBot)/2,fy+18); ctx.quadraticCurveTo(w/2,fy-14,(w+tWBot)/2,fy+18); ctx.stroke(); ctx.shadowBlur=0;
      // tiras LED no arco
      ctx.fillStyle=s.accent; for(let i=0;i<14;i++){ const x=(w-tWBot)/2 + (tWBot/13)*i, y=fy+18 - Math.sin((i/13)*Math.PI)*28; ctx.fillRect(x-1,y-4,2,8); }
      // laser
      ctx.fillStyle=s.accent+'66'; ctx.fillRect((w-tWBot)/2,fy, tWBot,2); ctx.fillStyle=s.accent; ctx.fillRect((w-tWBot)/2,fy, tWBot,1);
      ctx.fillStyle='#F0F3F7'; for(let i=0;i<20;i++) if(i%2===0) ctx.fillRect((w-tWBot)/2+i*(tWBot/20),fy+4,tWBot/20,6);
      ctx.fillStyle='#070A1E'; ctx.font='800 10px Space Grotesk'; ctx.textAlign='center'; ctx.fillText('FINISH • '+tot+'M • LASER',w/2,fy+22);
    }
  }
  drawCarPremium(x,y,sc,isPlayer,isReflection){
    const ctx=this.ctx; ctx.save(); ctx.translate(x,y); if(isReflection){ ctx.scale(1,-0.45); ctx.globalAlpha*=0.5; }
    // spring: inclina para trás na aceleração
    const lean = isPlayer ? Math.min(0.12, this.speed*0.0012) : 0;
    ctx.rotate(lean);
    ctx.scale(sc,sc);
    // sombra contato
    if(!isReflection){ ctx.fillStyle='rgba(0,0,0,0.42)'; ctx.beginPath(); ctx.ellipse(0,14,20,8,0,0,Math.PI*2); ctx.fill(); }
    const body=isPlayer?(this.carBuild?.[11]?.color||'#0A6B7A'):'#7A1840', acc=isPlayer?(this.carBuild?.[13]?.glow||'#00E5FF'):'#FF3D8A';
    // carroceria high-poly illusion — múltiplas camadas
    // base
    ctx.fillStyle=body; ctx.strokeStyle='rgba(255,255,255,0.14)'; ctx.lineWidth=1; ctx.beginPath(); ctx.roundRect(-16,-21,32,42,5.5); ctx.fill(); ctx.stroke();
    // vinco lateral
    ctx.fillStyle='rgba(255,255,255,0.07)'; ctx.fillRect(-14,-12,28,1);
    ctx.fillStyle='rgba(0,0,0,0.18)'; ctx.fillRect(-14,6,28,1);
    // capô com fibra de carbono se for Hyper
    if(isPlayer && this.carBuild?.[11]?.name==='Carbon Exposed'){
      ctx.save(); ctx.clip(); ctx.globalAlpha=0.22; ctx.fillStyle=createCarbonPattern(ctx); ctx.fillRect(-16,-21,32,42); ctx.restore();
    }
    // clearcoat reflexo
    const cc=ctx.createLinearGradient(-16,-21,16,-21); cc.addColorStop(0,'rgba(255,255,255,0)'); cc.addColorStop(0.35,'rgba(255,255,255,0.18)'); cc.addColorStop(0.55,'rgba(255,255,255,0.06)'); cc.addColorStop(1,'rgba(255,255,255,0)'); ctx.fillStyle=cc; ctx.beginPath(); ctx.roundRect(-16,-21,32,42,5.5); ctx.fill();
    // teto / cabine
    ctx.fillStyle='#0A1020'; ctx.beginPath(); ctx.roundRect(-10,-10,20,15,2.5); ctx.fill();
    // rollcage visível atrás do vidro
    ctx.strokeStyle='#C0C0C0'; ctx.lineWidth=1.1; ctx.beginPath(); ctx.moveTo(-7,-8); ctx.lineTo(7,-8); ctx.moveTo(-7,-2); ctx.lineTo(7,-2); ctx.moveTo(-4,-8); ctx.lineTo(-4,-2); ctx.moveTo(4,-8); ctx.lineTo(4,-2); ctx.stroke();
    // vidro com refração
    ctx.fillStyle='rgba(150,210,255,0.92)'; ctx.beginPath(); ctx.roundRect(-9,-8,18,6,1.2); ctx.fill();
    ctx.fillStyle='rgba(255,255,255,0.42)'; ctx.fillRect(-8,-7,7,1.2);
    ctx.fillStyle='rgba(0,0,0,0.18)'; ctx.fillRect(-9,-3,18,1);
    // faróis LED volumétricos
    if(!isReflection){
      ctx.fillStyle='#E8F4FF'; ctx.shadowColor='#8ABFFF'; ctx.shadowBlur=14; ctx.beginPath(); ctx.roundRect(-12,-20.5,6,3,1); ctx.fill(); ctx.beginPath(); ctx.roundRect(6,-20.5,6,3,1); ctx.fill(); ctx.shadowBlur=0;
      // feixes volumétricos no asfalto
      ctx.fillStyle='rgba(180,220,255,0.10)'; ctx.beginPath(); ctx.moveTo(-9,-18); ctx.lineTo(-22,22); ctx.lineTo(-14,22); ctx.lineTo(-5,-18); ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.moveTo(9,-18); ctx.lineTo(22,22); ctx.lineTo(14,22); ctx.lineTo(5,-18); ctx.closePath(); ctx.fill();
    }
    // splitter dianteiro + canards
    ctx.fillStyle='#080A12'; ctx.fillRect(-14,-23,28,4.5); ctx.fillStyle='#1A1F33'; ctx.fillRect(-12,-23.5,24,1);
    // asa traseira
    ctx.fillStyle='#080A12'; ctx.fillRect(-13,19,26,3.5); ctx.fillStyle=body; ctx.fillRect(-11,19.5,22,1);
    // rodas com disco perfurado + pinça
    [[-17,-11],[13,-11],[-17,7],[13,7]].forEach(([wx,wy])=>{
      // borracha
      ctx.fillStyle='#0A0A0F'; ctx.beginPath(); ctx.roundRect(wx-1.8,wy-1,6,10,1.8); ctx.fill();
      // aro
      ctx.fillStyle=isPlayer?'#D8DEE8':'#8A8A8A'; ctx.beginPath(); ctx.arc(wx+1.2,wy+4,3.2,0,Math.PI*2); ctx.fill();
      // disco perfurado
      ctx.fillStyle='#4A4A52'; ctx.beginPath(); ctx.arc(wx+1.2,wy+4,2.4,0,Math.PI*2); ctx.fill();
      ctx.fillStyle='#0A0A0F'; for(let a=0;a<6;a++){ const ang=(a/6)*Math.PI*2, px=wx+1.2+Math.cos(ang)*1.4, py=wy+4+Math.sin(ang)*1.4; ctx.beginPath(); ctx.arc(px,py,0.45,0,Math.PI*2); ctx.fill(); }
      // pinça vermelha
      ctx.fillStyle='#C0264A'; ctx.fillRect(wx+2.6,wy+1,1.6,3);
      // centro
      ctx.fillStyle='#0A0A12'; ctx.beginPath(); ctx.arc(wx+1.2,wy+4,0.7,0,Math.PI*2); ctx.fill();
      // sulcos pneu
      ctx.strokeStyle='rgba(255,255,255,0.08)'; ctx.lineWidth=0.6; ctx.beginPath(); ctx.moveTo(wx-1.8,wy+1); ctx.lineTo(wx+4.2,wy+1); ctx.stroke(); ctx.beginPath(); ctx.moveTo(wx-1.8,wy+7); ctx.lineTo(wx+4.2,wy+7); ctx.stroke();
    });
    // entradas laterais
    ctx.fillStyle='rgba(0,0,0,0.24)'; ctx.fillRect(-16,-4,2.6,9); ctx.fillRect(13.4,-4,2.6,9);
    // underglow bloom + sombra projetada
    if(!isReflection && isPlayer && acc!=='none'){
      const g=acc==='rainbow'?'#FFD54A':acc;
      ctx.shadowColor=g; ctx.shadowBlur=18; ctx.strokeStyle=g; ctx.lineWidth=1.7; ctx.strokeRect(-16,-21,32,42); ctx.shadowBlur=0;
      ctx.fillStyle=g+'26'; ctx.beginPath(); ctx.ellipse(0,15,24,7,0,0,Math.PI*2); ctx.fill();
      // reflexo suave no pneu
      ctx.fillStyle=g+'14'; ctx.beginPath(); ctx.ellipse(0,13,18,4,0,0,Math.PI*2); ctx.fill();
    } else if(!isReflection && !isPlayer){
      ctx.shadowColor='#FF3D8A'; ctx.shadowBlur=10; ctx.strokeStyle='rgba(255,61,138,0.86)'; ctx.lineWidth=1.2; ctx.strokeRect(-16,-21,32,42); ctx.shadowBlur=0;
    }
    // chama escapamento (se boost)
    if(!isReflection && isPlayer && this.boost>0.10){
      const a=0.78+Math.random()*0.22; ctx.globalAlpha=a;
      const grd=ctx.createRadialGradient(0,23,0,0,23,11); grd.addColorStop(0,'#FFFFA0'); grd.addColorStop(0.28,'#FF8A00'); grd.addColorStop(0.6,'#FF3B00'); grd.addColorStop(1,'transparent');
      ctx.fillStyle=grd; ctx.beginPath(); ctx.moveTo(-5,21); ctx.quadraticCurveTo(0,32+Math.random()*6,5,21); ctx.lineTo(0,23); ctx.closePath(); ctx.fill(); ctx.globalAlpha=1;
      // pipoco extra
      if(Math.random()>0.6){ ctx.fillStyle='#FFFFFF'; ctx.beginPath(); ctx.arc((Math.random()-0.5)*4,23,1.2,0,Math.PI*2); ctx.fill(); }
    }
    ctx.restore();
  }
  async startCountdown(lights){
    this.state='countdown'; this.time=0; this.distance=0; this.oppDistance=0; this.speed=0; this.rpm=1100; this.gear=1; this.shiftCooldown=0; this.particles=[]; this.smoke=[]; this.advantage=0; this.greenTime=0; this.cameraX=0; this.cameraY=0;
    lights.forEach(l=> l.classList.remove('on'));
    const tick=(f)=> this.playTick(f,0.13);
    await new Promise(r=> setTimeout(r,480)); if(this.state!=='countdown') return false; lights[0].classList.add('on'); tick(360);
    await new Promise(r=> setTimeout(r,520)); if(this.state!=='countdown') return false; lights[1].classList.add('on'); tick(420);
    await new Promise(r=> setTimeout(r,520)); if(this.state!=='countdown') return false; lights[2].classList.add('on'); tick(560);
    await new Promise(r=> setTimeout(r,520+Math.random()*260)); if(this.state!=='countdown') return false; lights[3].classList.add('on'); tick(880); if(navigator.vibrate) navigator.vibrate(35);
    this.greenTime=performance.now();
    this.state='racing'; this.startTime=performance.now(); this.last=performance.now(); this.raf=requestAnimationFrame(()=> this.loop());
    setTimeout(()=> lights.forEach(l=> l.classList.remove('on')), 1100);
    return true;
  }
  playTick(f,v){ try{ if(!this.audio) this.audio=new (window.AudioContext||window.webkitAudioContext)(); if(this.audio.state==='suspended') this.audio.resume(); const o=this.audio.createOscillator(),g=this.audio.createGain(); o.type='square'; o.frequency.value=f; g.gain.value=v; o.connect(g); g.connect(this.audio.destination); o.start(); g.gain.exponentialRampToValueAtTime(0.001,this.audio.currentTime+0.18); o.stop(this.audio.currentTime+0.19);}catch{} }
  launch(){
    if(this.state==='countdown'){ this.falseStart=true; this.playTick(180,0.3); return {falseStart:true}; }
    if(this.state==='racing' && this.time<0.80){
      const rt=(performance.now()-this.greenTime)/1000;
      this.reaction=rt;
      if(rt>=0 && rt<=0.25){ this.advantage=0.05+Math.random()*0.025; this.boost=0.92; this.perfectLaunch=true; return {reaction:rt, perfect:true, advantage:this.advantage}; }
      else if(rt>0.25 && rt<=0.55){ this.boost=0.30; this.advantage=0; return {reaction:rt, perfect:false, advantage:0}; }
      else { this.boost=0; return {reaction:rt, perfect:false, advantage:0}; }
    }
    return null;
  }
  shift(){ if(this.state!=='racing') return; if(this.shiftCooldown>0) return {cooldown:true}; this.totalShifts++; let res='bad'; if(this.rpm>=6200&&this.rpm<=7600){ res='perfect'; this.perfectShifts++; this.boost=Math.min(1,this.boost+0.45); } else if(this.rpm>=5600&&this.rpm<=7800){ res='good'; this.boost=Math.min(1,this.boost+0.18); } else { res='bad'; this.boost=Math.max(-0.2,this.boost-0.18); } const max=this.carBuild?.[6]?.gears||6; if(this.gear<max){ this.gear++; this.rpm=Math.max(3200,this.rpm-2600+Math.random()*300); this.shiftCooldown=0.18; for(let i=0;i<10;i++) this.particles.push({x:(this.w/2-50)+(Math.random()-0.5)*10, y:this.getY(this.distance)+21, r:2+Math.random()*3.2, alpha:0.92, color: res==='perfect'?'#00E676':'#FF8A00', vy:1.2+Math.random()*2, vx:(Math.random()-0.5)*2}); this.playTick(res==='perfect'?880:res==='good'?660:320,0.18); if(navigator.vibrate) navigator.vibrate(res==='perfect'?26:12); } else res='max'; return {result:res, rpm:this.rpm, gear:this.gear}; }
  getY(d){ const p=Math.min(1,d/this.raceDistance); return 150+p*(this.h-22-150-30); }
  loop(){
    if(this.state!=='racing') return;
    const now=performance.now(), dt=Math.min(0.033,(now-(this.last||now))/1000)*this.slowMo; this.last=now; this.time=(now-this.startTime)/1000;
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
    // câmera spring arm — recua com G
    const targetCamY = - (this.speed*0.015) - (this.boost*4);
    const targetCamX = (this.distance - this.oppDistance)*0.04;
    this.cameraY += (targetCamY - this.cameraY)*0.05;
    this.cameraX += (targetCamX - this.cameraX)*0.04;
    const p=Math.min(1,this.time/this.oppQuarter), eased=p<0.5?2*p*p:1-Math.pow(-2*p+2,2)/2, wob=Math.sin(this.time*9)*1.1*(p<0.9?1:0);
    this.oppDistance=this.raceDistance*Math.pow(eased,1.08)+wob;
    // fumaça burnout contínua se launch recente
    if(this.time<1.2 && this.speed<22){
      this.smoke.push({x: this.w/2 - 16 + Math.random()*32, y: this.getY(this.distance)+12, r: 6+Math.random()*10, alpha:0.42, color:`rgba(80,80,80,${0.22+Math.random()*0.12})`, vy:-0.3-Math.random()*0.6, vx:(Math.random()-0.5)*0.8});
    }
    if(this.shiftCooldown>0) this.shiftCooldown-=dt; if(this.boost>0) this.boost=Math.max(0,this.boost-dt*0.55); if(this.boost<0) this.boost=Math.min(0,this.boost+dt*0.7);
    this.particles.forEach(p=>{p.y+=p.vy; p.x+=p.vx; p.alpha-=dt*1.8; p.r*=0.985;}); this.particles=this.particles.filter(p=>p.alpha>0);
    this.smoke.forEach(s=>{ s.y+=s.vy; s.x+=s.vx; s.alpha-=dt*0.55; s.r+=dt*6; }); this.smoke=this.smoke.filter(s=>s.alpha>0);
    const finish = this.distance>=this.raceDistance || this.oppDistance>=this.raceDistance;
    if(finish){
      // slow-mo no cruzamento
      this.slowMo=0.28;
      setTimeout(()=>{ this.slowMo=1; }, 900);
      let pt=this.time+(this.falseStart?1.2:0); pt-=this.perfectShifts*0.045; pt-=this.advantage; pt=Math.max(4.2,pt); let ot=this.oppQuarter+(Math.random()*0.12-0.06); const win=pt<ot;
      this.state='finished'; this.draw(this.distance,this.oppDistance,this.scenario); this.onUpdate({speed:this.speed*3.6,rpm:this.rpm,gear:this.gear,time:this.time,distance:this.distance,oppDistance:this.oppDistance,boost:this.boost,perfectShifts:this.perfectShifts}); this.onFinish({win,playerTime:pt,oppTime:ot,reaction:this.reaction,falseStart:this.falseStart,perfectShifts:this.perfectShifts,scenario:this.scenario,raceDistance:this.raceDistance,advantage:this.advantage}); return;
    }
    this.draw(this.distance,this.oppDistance,this.scenario); this.onUpdate({speed:this.speed*3.6,rpm:this.rpm,gear:this.gear,time:this.time,distance:this.distance,oppDistance:this.oppDistance,boost:this.boost}); this.raf=requestAnimationFrame(()=> this.loop());
  }
  stop(){ this.state='idle'; this.slowMo=1; if(this.raf) cancelAnimationFrame(this.raf); }
}

// ===================== APP =====================
const $=s=> document.querySelector(s);
const els={
  sceneCanvas: $('#sceneCanvas'), wheelCanvas: $('#wheelCanvas'), resultCard: $('#resultCard'), resultStars: $('#resultStars'), resultName: $('#resultName'), resultChance: $('#resultChance'), resultRarity: $('#resultRarity'),
  spinLeft: $('#spinLeft'), spinRight: $('#spinRight'), nextBtn: $('#nextBtn'), yourCarList: $('#yourCarList'), bestDots: $('#bestDots'), bestLabel: $('#bestLabel'), moneyDisplay: $('#moneyDisplay'),
  autoBtn: $('#autoBtn'), shopBtn: $('#shopBtn'), shopModal: $('#shopModal'), closeShop: $('#closeShop'), shopRemove: $('#shopRemove'), closeBtn: $('#closeBtn'),
  scenarioIcon: $('#scenarioIcon'), scenarioName: $('#scenarioName'), scenarioDist: $('#scenarioDist'),
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

// EXPOSIÇÃO — câmera orbital 3/4 premium
const sCtx=els.sceneCanvas.getContext('2d'); let ang=0;
function resizeScene(){ const dpr=Math.max(1,window.devicePixelRatio||1), r=els.sceneCanvas.getBoundingClientRect(); els.sceneCanvas.width=r.width*dpr; els.sceneCanvas.height=r.height*dpr; sCtx.setTransform(dpr,0,0,dpr,0,0); }
window.addEventListener('resize', resizeScene); resizeScene();
function drawScene(){
  try{
    const w=els.sceneCanvas.getBoundingClientRect().width, h=els.sceneCanvas.getBoundingClientRect().height;
    sCtx.clearRect(0,0,w,h);
    const sc = SCENARIOS[state.currentCat % SCENARIOS.length] || SCENARIOS[0];
    const bgSc = state.scenario || sc;
    // céu com degradê + estrelas
    const bg=sCtx.createLinearGradient(0,0,0,h*0.62); bg.addColorStop(0, bgSc.bg[0]); bg.addColorStop(1, bgSc.bg[1]); sCtx.fillStyle=bg; sCtx.fillRect(0,0,w,h);
    sCtx.fillStyle='rgba(255,255,255,0.88)'; for(let i=0;i<34;i++){ const x=(i*47%w), y=8+(i*17%54), r=i%4===0?1.0:0.55; sCtx.globalAlpha=0.42+Math.sin(ang*0.018+i)*0.28; sCtx.beginPath(); sCtx.arc(x,y,r,0,Math.PI*2); sCtx.fill(); } sCtx.globalAlpha=1;
    if(bgSc.id==='city'||bgSc.id==='harbor'){ sCtx.fillStyle='rgba(255,255,255,0.94)'; sCtx.beginPath(); sCtx.arc(w*0.84,26,12,0,Math.PI*2); sCtx.fill(); sCtx.fillStyle='rgba(255,255,255,0.13)'; sCtx.beginPath(); sCtx.arc(w*0.84,26,19,0,Math.PI*2); sCtx.fill(); }
    if(bgSc.id==='desert'){ sCtx.fillStyle='#FF8A00'; sCtx.beginPath(); sCtx.arc(w*0.76,34,15,0,Math.PI*2); sCtx.fill(); sCtx.fillStyle='rgba(255,138,0,0.13)'; sCtx.beginPath(); sCtx.arc(w*0.76,34,28,0,Math.PI*2); sCtx.fill(); }
    // nuvens volumétricas
    sCtx.fillStyle='rgba(255,255,255,0.035)'; for(let i=0;i<3;i++){ const x=(w*0.18 + i*118 + ang*0.4)%w, y=22+i*16; sCtx.beginPath(); sCtx.ellipse(x,y,42+i*5,9+i*2,0,0,Math.PI*2); sCtx.fill(); }
    const gy=h*0.60;
    sCtx.save();
    if(bgSc.id==='city'){
      const n=14,bw=w/n;
      for(let i=0;i<n;i++){
        const hb=26+Math.sin(i*1.2)*10+Math.cos(i*1.9)*8+20; const x=i*bw;
        const g=sCtx.createLinearGradient(x,gy-hb,x+bw,gy); g.addColorStop(0,'#0B1028'); g.addColorStop(1,'#141E3A'); sCtx.fillStyle=g; sCtx.fillRect(x+1,gy-hb,bw-2,hb);
        sCtx.fillStyle= i%3===0?'#00E5FF':i%3===1?'#FF3B9A':'#FFD54A'; sCtx.fillRect(x+1,gy-hb,bw-2,1.8);
        sCtx.fillStyle='rgba(255,233,168,0.96)'; for(let wy=gy-hb+7; wy<gy-6; wy+=9){ for(let wx=x+4; wx<x+bw-4; wx+=7){ if((i+wy)%3!==0 && Math.random()>0.26) sCtx.fillRect(wx,wy,3,4); } }
        if(i%4===0){ sCtx.fillStyle='#1A1F3A'; sCtx.fillRect(x+bw/2-1,gy-hb-9,2,9); sCtx.fillStyle='#FF3B9A'; sCtx.beginPath(); sCtx.arc(x+bw/2,gy-hb-10,1.7,0,Math.PI*2); sCtx.fill(); }
      }
      // ponte
      sCtx.strokeStyle='rgba(0,229,255,0.16)'; sCtx.lineWidth=1.8; sCtx.beginPath(); sCtx.moveTo(w*0.08,gy-22); sCtx.lineTo(w*0.5,gy-42); sCtx.lineTo(w*0.92,gy-22); sCtx.stroke();
    } else if(bgSc.id==='desert'){
      sCtx.fillStyle='#2B1A0A'; sCtx.beginPath(); sCtx.moveTo(0,gy+8); sCtx.quadraticCurveTo(w*0.18,gy-18,w*0.42,gy-6); sCtx.quadraticCurveTo(w*0.68,gy+10,w,gy-4); sCtx.lineTo(w,gy+40); sCtx.lineTo(0,gy+40); sCtx.closePath(); sCtx.fill();
      sCtx.fillStyle='#3D2614'; sCtx.beginPath(); sCtx.moveTo(0,gy+14); sCtx.quadraticCurveTo(w*0.26,gy-8,w*0.54,gy+6); sCtx.quadraticCurveTo(w*0.78,gy+22,w,gy+4); sCtx.lineTo(w,gy+40); sCtx.lineTo(0,gy+40); sCtx.closePath(); sCtx.fill();
      for(let i=0;i<6;i++){ const x=16+i*66+(i%2?6:-6), y=gy-8-(i%3)*5; sCtx.fillStyle='#1B3A1A'; sCtx.fillRect(x-3,y-14,6,14); sCtx.beginPath(); sCtx.arc(x-4,y-6,3.2,Math.PI*0.5,Math.PI*1.6); sCtx.fill(); }
    } else if(bgSc.id==='forest'){
      sCtx.fillStyle='#0A1F14'; sCtx.beginPath(); sCtx.moveTo(0,gy+6); sCtx.lineTo(w*0.22,gy-32); sCtx.lineTo(w*0.44,gy-8); sCtx.lineTo(w*0.62,gy-36); sCtx.lineTo(w*0.82,gy-12); sCtx.lineTo(w,gy-26); sCtx.lineTo(w,gy+40); sCtx.lineTo(0,gy+40); sCtx.closePath(); sCtx.fill();
      for(let lay=0; lay<2; lay++){ const a=lay===0?0.96:0.52; sCtx.globalAlpha=a; for(let i=0;i<16;i++){ const x=(i/15)*w+Math.sin(i*1.7)*7, hT=26+Math.random()*20, wT=15+Math.random()*11; sCtx.fillStyle= i%3===0?'#0F3A1F':i%3===1?'#143D1E':'#0B2F16'; sCtx.beginPath(); sCtx.moveTo(x,gy+40); sCtx.lineTo(x-wT/2,gy+40); sCtx.lineTo(x,gy+40-hT); sCtx.lineTo(x+wT/2,gy+40); sCtx.closePath(); sCtx.fill(); } } sCtx.globalAlpha=1;
    } else if(bgSc.id==='harbor'){
      sCtx.strokeStyle='rgba(124,77,255,0.58)'; sCtx.lineWidth=3; sCtx.beginPath(); sCtx.moveTo(42,gy+40); sCtx.lineTo(42,gy-22); sCtx.lineTo(88,gy-22); sCtx.stroke();
      sCtx.strokeStyle='rgba(0,229,255,0.48)'; sCtx.lineWidth=2.5; sCtx.beginPath(); sCtx.moveTo(w-70,gy+40); sCtx.lineTo(w-70,gy-16); sCtx.lineTo(w-18,gy-16); sCtx.stroke();
      const cols=['#7A1A1A','#1A6B3A','#1E2B5A','#9A7B1A']; for(let i=0;i<4;i++){ sCtx.fillStyle=cols[i]; sCtx.fillRect(10+i*28,gy+18,24,12); }
      sCtx.strokeStyle='rgba(180,220,255,0.32)'; sCtx.lineWidth=1; for(let i=0;i<28;i++){ const x=(i*23)%w, y=14+(i*19)%72; sCtx.beginPath(); sCtx.moveTo(x,y); sCtx.lineTo(x-4,y+9); sCtx.stroke(); }
    } else if(bgSc.id==='snow'){
      const aur=sCtx.createLinearGradient(0,0,0,90); aur.addColorStop(0,'rgba(120,255,180,0.15)'); aur.addColorStop(1,'transparent'); sCtx.fillStyle=aur; sCtx.fillRect(0,0,w,90);
      sCtx.fillStyle='#0D1A2E'; sCtx.beginPath(); sCtx.moveTo(0,gy+10); sCtx.lineTo(w*0.28,gy-32); sCtx.lineTo(w*0.48,gy-8); sCtx.lineTo(w*0.68,gy-38); sCtx.lineTo(w*0.86,gy-16); sCtx.lineTo(w,gy-28); sCtx.lineTo(w,gy+40); sCtx.lineTo(0,gy+40); sCtx.closePath(); sCtx.fill();
      for(let i=0;i<12;i++){ const x=(i/11)*w+Math.sin(i)*5, hT=18+Math.random()*14; sCtx.fillStyle='#0A1F14'; sCtx.beginPath(); sCtx.moveTo(x,gy+40); sCtx.lineTo(x-7,gy+40); sCtx.lineTo(x,gy+40-hT); sCtx.lineTo(x+7,gy+40); sCtx.closePath(); sCtx.fill(); sCtx.fillStyle='rgba(255,255,255,0.86)'; sCtx.beginPath(); sCtx.moveTo(x,gy+40-hT); sCtx.lineTo(x-3,gy+40-hT+5); sCtx.lineTo(x+3,gy+40-hT+5); sCtx.closePath(); sCtx.fill(); }
      sCtx.fillStyle='rgba(255,255,255,0.9)'; for(let i=0;i<22;i++){ const x=(i*37 + Date.now()*0.018)%w, y=10+(i*29)%88; sCtx.beginPath(); sCtx.arc(x,y,1.1,0,Math.PI*2); sCtx.fill(); }
    }
    sCtx.restore();
    const cx=w/2, py=gy+18;
    sCtx.fillStyle='rgba(0,0,0,0.28)'; sCtx.beginPath(); sCtx.ellipse(cx,py+14,68,12,0,0,Math.PI*2); sCtx.fill();
    sCtx.fillStyle='#0F1328'; sCtx.beginPath(); sCtx.ellipse(cx,py,64,14,0,0,Math.PI*2); sCtx.fill();
    sCtx.strokeStyle='rgba(0,229,255,0.18)'; sCtx.lineWidth=1.5; sCtx.beginPath(); sCtx.ellipse(cx,py,64,14,0,0,Math.PI*2); sCtx.stroke();
    // grid girando
    sCtx.strokeStyle='rgba(255,255,255,0.05)'; sCtx.lineWidth=1; for(let a=0;a<Math.PI*2;a+=Math.PI/8){ const x1=cx+Math.cos(a+ang*0.015)*64, y1=py+Math.sin(a+ang*0.015)*14*0.42, x2=cx+Math.cos(a+Math.PI+ang*0.015)*64, y2=py+Math.sin(a+Math.PI+ang*0.015)*14*0.42; sCtx.beginPath(); sCtx.moveTo(x1,y1); sCtx.lineTo(x2,y2); sCtx.stroke(); }
    drawPremiumCar(sCtx, cx, py-18, ang);
  }catch(e){ console.error(e); }
  ang+=0.38; requestAnimationFrame(drawScene);
}
function drawPremiumCar(ctx,cx,cy,ang){
  const rad=(ang*0.85)*Math.PI/180, cos=Math.cos(rad), sin=Math.sin(rad);
  function P(x,y,z){ const xr=x*cos - z*sin, zr=x*sin+z*cos, sc=200/(200+zr+120), px=cx+xr*sc, py=cy - y*sc + zr*0.18*sc; return {x:px,y:py,sc,zr}; }
  const L=96,W=48,H=24,CH=17;
  const pts={ a:[-L/2,0,-W/2], b:[L/2,0,-W/2], c:[L/2,0,W/2], d:[-L/2,0,W/2], e:[-L/2,H,-W/2], f:[L/2,H,-W/2], g:[L/2,H,W/2], h:[-L/2,H,W/2], i:[-L*0.18,H,-W*0.33], j:[L*0.40,H,-W*0.33], k:[L*0.40,H,W*0.33], l:[-L*0.18,H,W*0.33], m:[-L*0.18,H+CH,-W*0.33], n:[L*0.40,H+CH,-W*0.33], o:[L*0.40,H+CH,W*0.33], p:[-L*0.18,H+CH,W*0.33] };
  const G={}; for(let k in pts) G[k]=P(...pts[k]);
  function face(ps,col){ ctx.fillStyle=col; ctx.beginPath(); ctx.moveTo(ps[0].x,ps[0].y); for(let i=1;i<ps.length;i++) ctx.lineTo(ps[i].x,ps[i].y); ctx.closePath(); ctx.fill(); ctx.strokeStyle='rgba(0,0,0,0.22)'; ctx.lineWidth=1; ctx.stroke(); }
  ctx.fillStyle='rgba(0,0,0,0.32)'; ctx.beginPath(); ctx.ellipse(cx,cy+16,58,12,0,0,Math.PI*2); ctx.fill();
  const bodyClr = state.build[11]?.color || '#5A6E8A';
  // fibra carbono se for Carbon Exposed
  let bodyFill = bodyClr;
  if(state.build[11]?.name==='Carbon Exposed'){
    // desenha base + overlay carbono
    face([G.e,G.f,G.g,G.h], '#1A1A1A');
    ctx.save(); ctx.clip(); ctx.globalAlpha=0.55; ctx.fillStyle=createCarbonPattern(sCtx); ctx.fillRect(G.e.x-10,G.e.y-10, G.g.x-G.e.x+20, G.g.y-G.e.y+20); ctx.restore();
    bodyFill = '#1A1A1A';
  } else {
    face([G.e,G.f,G.g,G.h], bodyClr);
  }
  face([G.f,G.g,G.c,G.b],'#4B5563'); face([G.e,G.f,G.b,G.a],'#525A6B'); if((G.h.zr+G.g.zr)/2 < (G.e.zr+G.f.zr)/2) face([G.h,G.g,G.c,G.d],'#5A6478');
  // clearcoat
  const cc=ctx.createLinearGradient(G.e.x,G.e.y,G.g.x,G.e.y); cc.addColorStop(0,'rgba(255,255,255,0)'); cc.addColorStop(0.35,'rgba(255,255,255,0.16)'); cc.addColorStop(0.6,'rgba(255,255,255,0.05)'); cc.addColorStop(1,'rgba(255,255,255,0)'); ctx.fillStyle=cc; ctx.beginPath(); ctx.moveTo(G.e.x,G.e.y); ctx.lineTo(G.f.x,G.f.y); ctx.lineTo(G.g.x,G.g.y); ctx.lineTo(G.h.x,G.h.y); ctx.closePath(); ctx.fill();
  face([G.m,G.n,G.o,G.p],'#2E344E'); face([G.i,G.j,G.n,G.m],'#252A3A'); face([G.j,G.k,G.o,G.n],'#252A3A');
  // rollcage
  ctx.strokeStyle='#D0D4DC'; ctx.lineWidth=1.2; ctx.beginPath(); ctx.moveTo(G.i.x,G.i.y); ctx.lineTo(G.m.x,G.m.y); ctx.moveTo(G.j.x,G.j.y); ctx.lineTo(G.n.x,G.n.y); ctx.moveTo(G.m.x,G.m.y); ctx.lineTo(G.n.x,G.n.y); ctx.stroke();
  ctx.fillStyle='rgba(150,210,255,0.90)'; ctx.beginPath(); ctx.moveTo(G.i.x,G.i.y); ctx.lineTo(G.j.x,G.j.y); ctx.lineTo(G.n.x,G.n.y); ctx.lineTo(G.m.x,G.m.y); ctx.closePath(); ctx.fill();
  // rodas high-poly
  [[-L*0.36,-W*0.52],[L*0.36,-W*0.52],[-L*0.36,W*0.52],[L*0.36,W*0.52]].forEach(([x,z])=>{
    const p=P(x,-2,z), s=p.sc;
    ctx.fillStyle='#0A0A0F'; ctx.beginPath(); ctx.ellipse(p.x,p.y+6*s,10*s,10*s,0,0,Math.PI*2); ctx.fill();
    ctx.fillStyle='#D8DEE8'; ctx.beginPath(); ctx.arc(p.x,p.y+5*s,4.2*s,0,Math.PI*2); ctx.fill();
    ctx.fillStyle='#4A4A52'; ctx.beginPath(); ctx.arc(p.x,p.y+5*s,3.0*s,0,Math.PI*2); ctx.fill();
    ctx.fillStyle='#0A0A0F'; for(let a=0;a<8;a++){ const an=(a/8)*Math.PI*2, px=p.x+Math.cos(an)*1.7*s, py=p.y+5*s+Math.sin(an)*1.7*s; ctx.beginPath(); ctx.arc(px,py,0.42*s,0,Math.PI*2); ctx.fill(); }
    ctx.fillStyle='#C0264A'; ctx.fillRect(p.x+2.8*s,p.y+2*s,1.8*s,3.2*s);
    ctx.strokeStyle='rgba(255,255,255,0.08)'; ctx.lineWidth=0.7; ctx.beginPath(); ctx.arc(p.x,p.y+5*s,4.2*s,0,Math.PI*2); ctx.stroke();
  });
  const glow=state.build[13]?.glow; if(glow && glow!=='none'){ const col=glow==='rainbow'?'#FFD54A':glow; ctx.shadowColor=col; ctx.shadowBlur=16; ctx.strokeStyle=col; ctx.lineWidth=1.6; ctx.strokeRect(G.e.x,G.e.y,(G.g.x-G.e.x),2); ctx.shadowBlur=0; ctx.fillStyle=col+'20'; ctx.beginPath(); ctx.ellipse(cx,cy+12,22,6,0,0,Math.PI*2); ctx.fill(); }
}

// TACHÔMETRO CIRCULAR PREMIUM
function drawTacho(rpm){
  const c=document.getElementById('tachoCanvas'); if(!c) return; const ctx=c.getContext('2d'), W=220,H=220,CX=110,CY=110,R=88;
  ctx.clearRect(0,0,W,H);
  // fundo escuro com blur
  ctx.fillStyle='#0A0E24'; ctx.beginPath(); ctx.arc(CX,CY,R+6,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='rgba(255,255,255,0.06)'; ctx.lineWidth=10; ctx.beginPath(); ctx.arc(CX,CY,R,0,Math.PI*2); ctx.stroke();
  // escala 0-8000
  for(let i=0;i<=40;i++){
    const ang= -Math.PI*0.75 + (i/40)*Math.PI*1.5;
    const len= i%5===0? 10: (i%2===0?6:3);
    const col= (i/40*8000>=6200 && i/40*8000<=7600)? '#00E676' : (i/40*8000>7600?'#FF3B00':'rgba(255,255,255,0.32)');
    ctx.strokeStyle=col; ctx.lineWidth= i%5===0?2:1;
    ctx.beginPath(); ctx.moveTo(CX+Math.cos(ang)*(R-2), CY+Math.sin(ang)*(R-2)); ctx.lineTo(CX+Math.cos(ang)*(R-2-len), CY+Math.sin(ang)*(R-2-len)); ctx.stroke();
    if(i%10===0){ ctx.fillStyle='rgba(255,255,255,0.72)'; ctx.font='600 8px JetBrains Mono'; ctx.textAlign='center'; ctx.fillText(String(i*2), CX+Math.cos(ang)*(R-18), CY+Math.sin(ang)*(R-18)+3); }
  }
  // zona verde perfect
  ctx.strokeStyle='rgba(0,230,118,0.22)'; ctx.lineWidth=8; ctx.beginPath(); ctx.arc(CX,CY,R, deg(6200), deg(7600)); ctx.stroke();
  ctx.strokeStyle='#00E676'; ctx.lineWidth=2; ctx.beginPath(); ctx.arc(CX,CY,R, deg(6200), deg(6200)+0.03); ctx.stroke(); ctx.beginPath(); ctx.arc(CX,CY,R, deg(7600), deg(7600)+0.03); ctx.stroke();
  // redline
  ctx.strokeStyle='rgba(255,59,0,0.85)'; ctx.lineWidth=4; ctx.beginPath(); ctx.arc(CX,CY,R, deg(7600), deg(8000)); ctx.stroke();
  // agulha
  const a=deg(Math.min(8000,Math.max(0,rpm)));
  ctx.save(); ctx.translate(CX,CY); ctx.rotate(a); ctx.strokeStyle='#00E5FF'; ctx.lineWidth=3; ctx.shadowColor='#00E5FF'; ctx.shadowBlur=10; ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(R-18,0); ctx.stroke(); ctx.fillStyle='#EAF0FF'; ctx.beginPath(); ctx.arc(0,0,5,0,Math.PI*2); ctx.fill(); ctx.restore();
  // centro rpm
  document.getElementById('tachoRpm').textContent= Math.round(rpm).toString();
  function deg(v){ return -Math.PI*0.75 + (v/8000)*Math.PI*1.5; }
}

function load(){ try{ const s=JSON.parse(localStorage.getItem('wow-v4')||'null'); if(s){ state.money=s.money??2800; state.pb=s.pb??null; if(s.build && s.build.length===14){ let ok=true; for(let i=0;i<14;i++){ if(s.build[i] && !CATEGORIES[i].options.find(o=>o.name===s.build[i].name)) ok=false; } if(ok) state.build=s.build; } const n=state.build.findIndex(v=>!v); state.currentCat=n===-1?14:n; } }catch{} }
function save(){ localStorage.setItem('wow-v4', JSON.stringify({money:state.money, pb:state.pb, build:state.build})); }
function updateMoney(){ els.moneyDisplay.textContent='$' + state.money.toLocaleString('pt-BR'); const can=state.money>=250 && !state.spinning && state.currentCat<14; if(els.shopRemove) els.shopRemove.disabled=!can; }
function updateBest(){ const best=state.build.filter(v=>v&&v.stars===5).length; els.bestLabel.textContent=`BEST ${best}/${state.build.length}`; els.bestDots.innerHTML=''; for(let i=0;i<state.build.length;i++){ const s=document.createElement('span'); if(state.build[i]){ if(state.build[i].stars===5) s.className='best'; else s.className='filled'; } els.bestDots.appendChild(s); } }
function updateCar(){ const labels=['PWR','MASS','DRIVE','TYRES','GEARS','BRAKES','SUSP','EXHAUST','RIMS','AERO','TOP']; const st=calculateStats(state.build); const vals=[ st.pwr?st.pwr+' HP':'—', st.mass?st.mass+' KG':'—', state.build[4]?.name||'—', state.build[5]?.name||'—', state.build[6]?.name||'—', state.build[7]?.name||'—', state.build[8]?.name||'—', state.build[9]?.name||'—', state.build[12]?.name||'—', st.aero?st.aero.toFixed(2):'—', st.top?st.top+' KM/H':'—']; els.yourCarList.innerHTML=''; labels.forEach((l,i)=>{ const li=document.createElement('li'); li.innerHTML=`<span>${l}</span><b>${vals[i]}</b>`; els.yourCarList.appendChild(li); }); const sc=SCENARIOS[state.currentCat % SCENARIOS.length] || SCENARIOS[0]; const curSc=state.scenario||sc; els.scenarioIcon.textContent=curSc.icon; els.scenarioName.textContent=curSc.name; els.scenarioDist.textContent=curSc.dist+'M'; }

function showCategory(idx){
  if(idx>=14){ showReady(); return; }
  state.currentCat=idx;
  const cat=CATEGORIES[idx], opts=state.filtered[idx]||cat.options;
  document.getElementById('engineLabel').textContent=cat.label;
  wheel.setOptions(opts);
  els.resultCard.classList.add('hidden'); els.nextBtn.classList.add('hidden');
  els.spinLeft.disabled=false; els.spinRight.disabled=false;
  updateCar(); updateBest(); updateMoney();
  els.raceView.classList.add('hidden');
  document.querySelector('.wheel-layer').style.display='flex';
  document.querySelector('.ui-overlay').style.display='block';
}
function showReady(){
  state.currentCat=14; document.getElementById('engineLabel').textContent='PRONTO PARA CORRIDA';
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
  await wheel.spinTo(wi, {duration: 4400+Math.random()*400, onTick: tickSound});
  state.build[state.currentCat]=win; state.filtered[state.currentCat]=null; save();
  els.resultName.textContent=win.name; els.resultChance.textContent=win.chance.toFixed(1)+'% CHANCE'; els.resultStars.textContent='★'.repeat(win.stars)+'☆'.repeat(5-win.stars);
  const rarityEl=document.getElementById('resultRarity'); if(rarityEl){ rarityEl.textContent=win.rarity; rarityEl.style.color= win.stars>=5?'#FFD54A': win.stars>=4?'#FF6B8A':'#9AA4C8'; }
  els.resultCard.classList.remove('hidden');
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
  els.hudGear.textContent='N'; els.hudSpeed.textContent='0'; els.hudTime.textContent='0.000s'; els.hudOpponent.textContent='—'; els.rpmFill.style.width='8%'; drawTacho(900); els.lights.forEach(l=>l.classList.remove('on'));
  els.launchControls.classList.remove('hidden'); els.shiftControls.classList.add('hidden'); els.raceStartBtn.classList.remove('hidden'); els.raceStartBtn.textContent='PREPARAR LARGADA'; els.raceStartBtn.disabled=false;
  els.raceHint.textContent=`${state.scenario.icon} ${state.scenario.dist}m • 2 vermelhas → amarela → verde! 250ms = +75ms`; race.draw(0,0,state.scenario);
}
async function startRace(){ els.raceStartBtn.disabled=true; els.raceStartBtn.textContent='AGUARDE AS LUZES...'; els.raceHint.textContent='Atenção...'; els.launchControls.classList.remove('hidden'); els.shiftControls.classList.add('hidden'); const ok=await race.startCountdown(els.lights); if(!ok) return; els.raceStartBtn.classList.add('hidden'); els.raceHint.textContent='ACELERE! SHIFT no verde do tacômetro!'; els.launchControls.classList.add('hidden'); els.shiftControls.classList.remove('hidden'); }
function handleLaunch(){ const r=race.launch(); if(r?.falseStart){ els.raceHint.textContent='⚠️ QUEIMA! +1.2s'; vibrate([40,30,40]); } else if(r?.reaction!=null){ if(r.perfect) els.raceHint.textContent=`🚀 PERFECT! ${r.reaction.toFixed(3)}s +${(r.advantage*1000).toFixed(0)}ms`; else els.raceHint.textContent=`Largada ${r.reaction.toFixed(3)}s`; if(r.perfect) vibrate(22); } }
function handleShift(){ const r=race.shift(); if(!r) return; if(r.result==='perfect') els.raceHint.textContent='✨ PERFECT SHIFT!'; else if(r.result==='good') els.raceHint.textContent='✓ Boa'; else if(r.result==='bad') els.raceHint.textContent='✕ Fora'; els.hudGear.textContent=r.gear||race.gear; }
function onRaceUpdate(d){ els.hudSpeed.textContent=Math.round(d.speed).toString(); els.hudTime.textContent=d.time.toFixed(3)+'s'; const diff=d.distance-d.oppDistance; els.hudOpponent.textContent=(diff>=0?'+':'')+diff.toFixed(1)+'m'; els.hudOpponent.style.color=diff>=0?'#00E676':'#FF3B9A'; els.hudGear.textContent= race.gear===1 && d.time<0.4? '1': race.gear; const pct=Math.max(0,Math.min(100,(d.rpm/8000)*100)); els.rpmFill.style.width=pct+'%'; drawTacho(d.rpm); }
function onRaceFinish(res){
  const st=calculateStats(state.build), pQ=st.quarter*(res.raceDistance/402), diff=pQ/res.oppTime, distF=res.raceDistance/402, tierM=state.opponent.tier*0.22+0.45;
  let base=res.win?620:110; let rew=Math.round(base*diff*distF*tierM + res.raceDistance*0.65); rew+=res.perfectShifts*(res.win?140:40); if(res.advantage) rew+=25; if(res.falseStart) rew=Math.round(rew*0.45); rew=Math.round(rew*(0.92+Math.random()*0.16)); rew=Math.max(60,rew);
  state.money+=rew; if(!state.pb || res.playerTime < state.pb) state.pb=res.playerTime; save(); updateMoney();
  els.modalTitle.textContent=res.win?'VITÓRIA!':'DERROTA'; els.modalIcon.textContent=res.win?'🏆':'💥'; els.modalSub.textContent=res.win?`Venceu ${state.opponent.name} por ${(Math.abs(res.playerTime-res.oppTime)).toFixed(2)}s em ${res.scenario.name} (${res.raceDistance}m)`:`${state.opponent.name} venceu por ${(res.oppTime-res.playerTime).toFixed(2)}s • ${res.scenario.name}`;
  els.modalTime.textContent=res.playerTime.toFixed(3)+'s'+(res.falseStart?' (+PENALTY)':'')+(res.advantage?` (-${(res.advantage*1000).toFixed(0)}ms)`:''); els.modalOppTime.textContent=res.oppTime.toFixed(3)+'s'; els.modalPB.textContent=state.pb.toFixed(3)+'s'; els.modalReward.textContent='+ $'+rew.toLocaleString('pt-BR');
  els.rewardBreak.innerHTML=`Cenário ${res.scenario.icon} ${res.raceDistance}m ×${distF.toFixed(2)} • Dif. ×${diff.toFixed(2)} • Tier ${state.opponent.tier} ×${tierM.toFixed(2)} • Perfect ${res.perfectShifts}${res.advantage?` • Largada -${(res.advantage*1000).toFixed(0)}ms`:''}`;
  els.resultModal.classList.remove('hidden'); winSound(res.win); vibrate(res.win?[26,32,48]:[44,26,44]);
}
function bind(){
  els.spinLeft.addEventListener('click', doSpin); els.spinRight.addEventListener('click', doSpin);
  els.nextBtn.addEventListener('click', ()=> els.nextBtn.onclick && els.nextBtn.onclick());
  els.autoBtn.addEventListener('click', ()=>{ state.auto=!state.auto; els.autoBtn.classList.toggle('active',state.auto); els.autoBtn.textContent= state.auto?'AUTO: ON':'AUTO: OFF'; if(state.auto && !state.spinning && !state.build[state.currentCat]) doSpin(); else if(state.auto && state.build[state.currentCat]) els.nextBtn.click(); });
  els.shopBtn.addEventListener('click', ()=> els.shopModal.classList.remove('hidden')); els.closeShop.addEventListener('click', ()=> els.shopModal.classList.add('hidden')); els.shopRemove.addEventListener('click', removeWorst); els.shopModal.querySelector('.modal-backdrop').addEventListener('click', ()=> els.shopModal.classList.add('hidden'));
  els.closeBtn.addEventListener('click', ()=>{ if(confirm('Resetar progresso?')){ localStorage.removeItem('wow-v4'); location.reload(); } });
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
    const b=document.createElement('button'); b.className= has?'neumorph':'neumorph disabled';
    const icon=ICONS[cat.id]||'🔧';
    b.innerHTML=`<span class="pick-icon">${icon}</span><span class="pick-name">${cat.label}</span><span class="pick-cur">Atual: ${cur?cur.name:'—'}</span><span class="pick-better">${has?`↑ ${better.length} melhores • ${better[0].name} → ${better[better.length-1].name}`:'★ Já é o melhor'}</span>`;
    if(has) b.onclick=()=>{ els.pickModal.classList.add('hidden'); els.resultModal.classList.add('hidden'); state.filtered[i]=better; document.querySelector('.wheel-layer').style.display='flex'; document.querySelector('.ui-overlay').style.display='block'; els.raceView.classList.add('hidden'); showCategory(i); document.getElementById('engineLabel').textContent=cat.label+' • UPGRADE'; };
    els.pickGrid.appendChild(b);
  }); els.pickModal.classList.remove('hidden');
}

load(); updateCar(); updateBest(); updateMoney(); showCategory(state.currentCat); bind(); drawScene(); drawTacho(900);
