export const CATEGORIES = [
  {
    id: 'engine',
    label: 'ENGINE SIZE',
    title: 'Tamanho do Motor',
    desc: 'Cilindrada define potência bruta. Igual à foto: 1.0L a 6.0L com cores idênticas.',
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
    id: 'cylinders',
    label: 'CYLINDERS',
    title: 'Cilindros',
    desc: 'Arquitetura do motor altera curva de potência e som.',
    statKey: 'mult',
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
    id: 'induction',
    label: 'INDUCTION',
    title: 'Indução',
    desc: 'Aspiração natural vs pressão. Turbo sibila, Supercharger uiva.',
    statKey: 'mult',
    options: [
      { name: 'N/A', chance: 20, stars: 1, color: '#242F4A', mult: 1.0, sound:'na', rarity:'Comum' },
      { name: 'Roots Blower', chance: 14, stars: 1, color: '#26334E', mult: 1.18, sound:'roots', rarity:'Comum' },
      { name: 'Turbo', chance: 18, stars: 2, color: '#2B4A6A', mult: 1.38, sound:'turbo', rarity:'Incomum' },
      { name: 'Supercharger', chance: 12, stars: 2, color: '#2F4A6A', mult: 1.45, sound:'sc', rarity:'Incomum' },
      { name: 'ProCharger', chance: 8, stars: 3, color: '#4B3A8A', mult: 1.55, sound:'pro', rarity:'Raro' },
      { name: 'Twin Turbo', chance: 12, stars: 3, color: '#4B3A8A', mult: 1.62, sound:'twint', rarity:'Raro' },
      { name: 'E-Turbo Hybrid', chance: 7, stars: 4, color: '#006A7A', mult: 1.82, sound:'hybrid', rarity:'Épico' },
      { name: 'Twin SC', chance: 6, stars: 4, color: '#7A1840', mult: 1.75, sound:'twinsc', rarity:'Épico' },
      { name: 'Quad Turbo', chance: 3, stars: 5, color: '#8A6A00', mult: 2.05, sound:'quad', rarity:'Lendário' },
    ]
  },
  {
    id: 'weight',
    label: 'WEIGHT',
    title: 'Peso',
    desc: 'Menos peso = mais aceleração. Carbono é ouro. Menor é melhor.',
    statKey: 'kg',
    lowerIsBetter: true,
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
    id: 'drive',
    label: 'DRIVE TYPE',
    title: 'Tração',
    desc: 'FWD patina, RWD perigoso, AWD cola no chão.',
    statKey: 'grip',
    options: [
      { name: 'FWD', chance: 28, stars: 1, color: '#242F4A', grip: 0.86, acc: 0.92, rarity:'Comum' },
      { name: 'RWD', chance: 34, stars: 2, color: '#32405E', grip: 0.92, acc: 1.0, rarity:'Incomum' },
      { name: 'AWD', chance: 24, stars: 3, color: '#4B3A8A', grip: 1.08, acc: 1.12, rarity:'Raro' },
      { name: 'AWD Vectoring', chance: 9, stars: 4, color: '#7A1840', grip: 1.18, acc: 1.18, rarity:'Épico' },
      { name: 'RWD Drag Spec', chance: 5, stars: 5, color: '#8A6A00', grip: 1.22, acc: 1.26, rarity:'Lendário' },
    ]
  },
  {
    id: 'tyres',
    label: 'TYRES',
    title: 'Pneus',
    desc: 'Borracha é tudo na arrancada. Slick aquece e gruda.',
    statKey: 'grip',
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
    id: 'gearbox',
    label: 'GEARBOX',
    title: 'Câmbio',
    desc: 'Mais marchas = faixa ideal por mais tempo. DCT troca em 80ms.',
    statKey: 'eff',
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
    id: 'brakes',
    label: 'BRAKES',
    title: 'Freios',
    desc: 'Não ganha corrida, mas evita muro. Carbono aguenta.',
    statKey: 'bonus',
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
    id: 'suspension',
    label: 'SUSPENSION',
    title: 'Suspensão',
    desc: 'Transferência de peso na largada. Drag Squat é vida.',
    statKey: 'bonus',
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
    id: 'exhaust',
    label: 'EXHAUST',
    title: 'Escapamento',
    desc: 'Fluxo e barulho. Chamas no backfire dão +5hp psicológico.',
    statKey: 'bonus',
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
    id: 'shape',
    label: 'CAR SHAPE',
    title: 'Carroceria',
    desc: 'Afeta aerodinâmica e estilo. De Wagon a Hypercar.',
    statKey: 'aero',
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
    id: 'paint',
    label: 'PAINT',
    title: 'Pintura',
    desc: 'PBR com reflexo e metal flake. Neon reflete.',
    statKey: 'stars',
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
    id: 'rims',
    label: 'RIMS',
    title: 'Rodas',
    desc: 'Leveza rotacional. Forged vale cada grama.',
    statKey: 'bonus',
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
    id: 'underglow',
    label: 'UNDERGLOW',
    title: 'Neon Underglow',
    desc: 'Pura estética cyberpunk. Brilha na pista escura.',
    statKey: 'stars',
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

export const SCENARIOS = [
  { id:'city', name:'Neon City', dist:402, icon:'🌃', accent:'#00E5FF', desc:'1/4 milha • Noturna', bg:['#05071A','#0A1430'], fog:'#7C4DFF' },
  { id:'desert', name:'Desert Dunes', dist:804, icon:'🏜️', accent:'#FF8A00', desc:'1/2 milha • Areia quente', bg:['#1A0F08','#3A2210'], fog:'#FF6B00' },
  { id:'forest', name:'Forest Pass', dist:201, icon:'🌲', accent:'#00C853', desc:'1/8 milha • Neblina', bg:['#06140D','#0F2A1A'], fog:'#00E676' },
  { id:'harbor', name:'Harbor Dock', dist:402, icon:'⚓', accent:'#7C4DFF', desc:'1/4 milha • Chuva fina', bg:['#05141E','#0A2230'], fog:'#00B8D4' },
  { id:'snow', name:'Snow Peak', dist:1000, icon:'🏔️', accent:'#E0F0FF', desc:'1000m • Gelo • Alta', bg:['#070F1E','#12233A'], fog:'#B0C4DE' },
];

export const OPPONENTS = [
  {name:"Ryo Tanaka", tier:1, mult:0.92},
  {name:"Mika Sato", tier:1, mult:0.96},
  {name:"Alex Rivera", tier:2, mult:1.0},
  {name:"Kenji Drag", tier:2, mult:1.04},
  {name:"Luna Vex", tier:3, mult:1.08},
  {name:"Dom Torv", tier:3, mult:1.12},
  {name:"Jett Nitro", tier:4, mult:1.16},
  {name:"Sakura Drift", tier:4, mult:1.18},
  {name:"Blaze K.", tier:5, mult:1.24},
  {name:"Neon Ace", tier:5, mult:1.28},
  {name:"Ghost K.", tier:5, mult:1.32},
];

export function calculateStats(build){
  const eng = build[0]; const cyl = build[1]; const ind = build[2]; const w = build[3];
  const drive = build[4]; const tyre = build[5]; const gear = build[6];
  const brake = build[7]; const susp = build[8]; const exh = build[9];
  const shape = build[10]; const rims = build[12];
  let pwr = 0;
  if(eng && cyl && ind){
    pwr = eng.hp * cyl.mult * ind.mult;
    if(exh) pwr *= exh.bonus;
    if(rims) pwr *= (0.98 + (rims.bonus-0.90)*0.15);
    pwr = Math.round(pwr);
  }
  const mass = w ? w.kg : 1500;
  let grip = 1;
  if(drive && tyre) grip = drive.grip * tyre.grip;
  if(susp) grip *= susp.bonus;
  const aero = shape ? shape.aero : 1.0;
  let top = 0;
  if(pwr){
    const powerWeight = pwr / (mass/1000);
    top = Math.round( (powerWeight * 0.62 + 90) * aero * (0.95 + grip*0.06) );
    if(gear) top = Math.round(top * gear.eff);
    top = Math.min(520, Math.max(120, top));
  }
  let zero100 = 9.5;
  if(pwr && mass){
    const pw = pwr / mass;
    zero100 = Math.max(1.6, 6.8 - pw*3.2 + (2 - grip)*0.9 - (aero-1)*0.4);
    zero100 = Math.round(zero100*100)/100;
  }
  let quarter = 15.5 - (pwr/150) + (mass/800) - (grip-1)*1.2;
  quarter = Math.max(7.1, Math.min(16, quarter));
  if(gear) quarter -= (gear.eff -1)*1.4;
  quarter = Math.round(quarter*1000)/1000;
  return { pwr, mass, grip: Math.round(grip*100)/100, aero, top, zero100, quarter };
}

export function getBetterOptions(category, currentOpt){
  if(!currentOpt) return category.options;
  const key = category.statKey;
  const currentVal = currentOpt[key] ?? currentOpt.stars;
  const isLowerBetter = category.lowerIsBetter;
  return category.options.filter(o=>{
    if(o.name===currentOpt.name) return false;
    if(o.stars > currentOpt.stars) return true;
    if(o.stars < currentOpt.stars) return false;
    // same stars -> compare stat
    const v = o[key] ?? o.stars;
    if(isLowerBetter) return v < currentVal;
    return v > currentVal;
  });
}

export function rarityLabel(stars){
  if(stars>=5) return 'LENDÁRIO';
  if(stars>=4) return 'ÉPICO';
  if(stars>=3) return 'RARO';
  if(stars>=2) return 'INCOMUM';
  return 'COMUM';
}
export function rarityColor(stars){
  if(stars>=5) return '#D4A017';
  if(stars>=4) return '#C0264A';
  if(stars>=3) return '#5B2EC0';
  if(stars>=2) return '#2E6B9E';
  return '#6B7A90';
}
