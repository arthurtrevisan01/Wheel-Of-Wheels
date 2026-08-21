(() => {
"use strict";

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const clamp = (n,a,b) => Math.max(a,Math.min(b,n));
const fmt = n => Math.round(n).toLocaleString("en-US");

const CATS = ["Engine","Turbo","Exhaust","Tires","Transmission","Drive","Brakes","Suspension","Wheels","Aero"];
const OPTIONS = {
  Engine:[["I3 1.2L",90,0,1200],["I4 2.0L",145,0,1500],["I5 2.5L",190,0,1900],["V6 3.0L",260,0,2600],["V8 5.0L",410,0,5200]],
  Turbo:[["NA",0,0,0],["Single Turbo",65,0,1800],["Twin Turbo",120,0,3200],["Electric Assist",165,8,4600]],
  Exhaust:[["Street",8,0,500],["Sport",18,0,900],["Race",32,0,1500],["Titanium",48,0,2500]],
  Tires:[["Street",0,18,500],["Sport",0,30,1000],["Semi Slick",0,45,1900],["Drag Slick",0,62,3200]],
  Transmission:[["5-Speed",0,0,600],["6-Speed",0,2,1100],["7-Speed DCT",8,7,2300],["6-Speed Race",18,10,3500]],
  Drive:[["FWD",0,10,400],["RWD",0,14,700],["AWD",12,28,2400]],
  Brakes:[["Stock",0,3,300],["Sport",0,7,700],["Race",0,12,1400]],
  Suspension:[["Street",0,4,400],["Sport",0,10,900],["Race",0,16,1700]],
  Wheels:[["Heavy 18\"",0,-8,450],["Sport 18\"",0,-18,900],["Forged 17\"",0,-28,1700],["Carbon 18\"",12,-34,3000]],
  Aero:[["Stock",0,2,500],["Lip",3,7,800],["Track Kit",12,16,2100],["GT Wing",18,23,2800]]
};
const RARITY = ["COMMON","UNCOMMON","RARE","EPIC","LEGENDARY"];
const COLORS = ["#f2f4f7","#4d6bff","#67e8a5","#b77cff","#ffb84d"];

let state = JSON.parse(localStorage.getItem("wow-save") || "null") || {
  money: 2500, rank: 1, tier: 0, color: "#ff5b35",
  parts: Object.fromEntries(CATS.map(c => [c,0])),
  best: null
};
const save = () => localStorage.setItem("wow-save", JSON.stringify(state));

function derived() {
  let hp=0, grip=25, weight=1320, drag=0.32;
  CATS.forEach(cat => {
    const [name,h,g,cost] = OPTIONS[cat][state.parts[cat] || 0];
    hp += h; grip += g;
    if(cat==="Wheels") weight += OPTIONS[cat][state.parts[cat]||0][2] || 0;
    if(cat==="Aero") drag = Math.max(.21, drag - (state.parts[cat]||0)*.02);
  });
  return {hp:Math.max(80,hp),grip,weight:Math.max(900,weight),drag};
}
function tierName(){return ["STREET","SPORT","PRO","ELITE","LEGEND"][state.tier] || "LEGEND";}
function rival(){const base=120+state.tier*115+state.rank*18; const power=Math.round(base*(.9+Math.random()*.24)); return {name:["Torque Jack","Redline","Night Shift","Apex","Vandal","Ghost"][Math.floor(Math.random()*6)],power};}

function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove("show"),1800)}
function show(name){$$(".screen").forEach(s=>s.classList.toggle("active",s.id==="screen-"+name)); updateUI(); if(name==="home") drawCar($("#homeCar")); if(name==="garage") drawGarage();}

$$("[data-screen]").forEach(b=>b.addEventListener("click",()=>show(b.dataset.screen)));

function drawCar(canvas, speed=0, rivalCar=false){
  const ctx=canvas.getContext("2d"), w=canvas.width,h=canvas.height;
  ctx.clearRect(0,0,w,h);
  const g=ctx.createLinearGradient(0,0,0,h);g.addColorStop(0,"#1a2330");g.addColorStop(1,"#090d13");ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
  ctx.strokeStyle="#273241";ctx.lineWidth=2;
  for(let y=h*.55;y<h;y+=34){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke()}
  for(let x=-w;x<w*2;x+=110){ctx.beginPath();ctx.moveTo(w/2+(x-w/2)*.35,h*.52);ctx.lineTo(x,h);ctx.stroke()}
  const s=Math.min(w/900,h/500), x=w*.5+Math.sin(speed/180)*5, y=h*.58;
  ctx.save();ctx.translate(x,y);ctx.scale(s,s);
  // shadow
  ctx.fillStyle="rgba(0,0,0,.55)";ctx.beginPath();ctx.ellipse(0,62,350,35,0,0,Math.PI*2);ctx.fill();
  // wheels
  ctx.fillStyle="#05070a"; for(const wx of [-230,230]){ctx.beginPath();ctx.roundRect(wx-42,12,84,112,18);ctx.fill();ctx.fillStyle="#697382";ctx.beginPath();ctx.arc(wx,68,23,0,Math.PI*2);ctx.fill();ctx.fillStyle="#05070a"}
  // body
  ctx.fillStyle=rivalCar?"#4b5c70":state.color;ctx.beginPath();ctx.moveTo(-330,28);ctx.lineTo(-275,-20);ctx.lineTo(-165,-60);ctx.lineTo(-55,-115);ctx.lineTo(155,-110);ctx.lineTo(255,-52);ctx.lineTo(330,8);ctx.lineTo(305,65);ctx.lineTo(-310,65);ctx.closePath();ctx.fill();
  ctx.fillStyle="#101720";ctx.beginPath();ctx.moveTo(-115,-68);ctx.lineTo(-50,-103);ctx.lineTo(70,-99);ctx.lineTo(138,-56);ctx.closePath();ctx.fill();
  ctx.fillStyle="#dbe5ef";ctx.fillRect(232,12,52,10);ctx.fillStyle="#ff4f4f";ctx.fillRect(-292,13,40,11);
  ctx.fillStyle="#0a0d12";ctx.fillRect(-160,50,320,9);
  ctx.restore();
}

function updateUI(){
  $("#money").textContent=fmt(state.money);$("#rank").textContent=state.rank;
  const d=derived();$("#homeStats").textContent=`${fmt(d.hp)} HP • ${fmt(d.grip)} GRIP • ${fmt(d.weight)} KG`;
  $("#gHp").textContent=fmt(d.hp)+" HP";$("#gGrip").textContent=fmt(d.grip);$("#gWeight").textContent=fmt(d.weight)+" KG";$("#gDrag").textContent=d.drag.toFixed(2);
  $("#tierName").textContent=tierName();
  $("#partsList").innerHTML=CATS.map(c=>`<div class="part-row"><small>${c}</small><b>${OPTIONS[c][state.parts[c]||0][0]}</b></div>`).join("");
  renderUpgrades();
}
function renderUpgrades(){
  const d=derived();
  $("#upgradeList").innerHTML=CATS.map(cat=>{
    const i=state.parts[cat]||0, next=OPTIONS[cat][i+1], locked=!next;
    const cost=next?next[3]:0;
    return `<div class="upgrade"><div><b>${cat}</b><small>${OPTIONS[cat][i][0]} ${locked?"• MAX":""}</small></div><button ${locked||state.money<cost?"disabled":""} data-up="${cat}">${locked?"MAX":"$"+fmt(cost)}</button></div>`;
  }).join("");
  $$("#upgradeList [data-up]").forEach(b=>b.onclick=()=>buy(b.dataset.up));
}
function buy(cat){const i=state.parts[cat]||0,n=OPTIONS[cat][i+1];if(!n)return;if(state.money<n[3])return toast("Not enough cash");state.money-=n[3];state.parts[cat]++;save();toast(`${cat} upgraded`);updateUI();drawGarage();}
function drawGarage(){drawCar($("#garageCar"));}

function startRace(){
  show("race"); const r=rival(); race={...r,gear:1,rpm:1000,speed:0,distance:0,combo:1,perfect:0,started:performance.now(),last:performance.now(),ended:false,gearCount:6};
  $("#rivalName").textContent=r.name;$("#rivalPower").textContent=fmt(r.power);
}
let race=null, raf=0;
function raceLoop(now){
  if(!race || race.ended)return;
  const dt=Math.min(32,now-race.last);race.last=now;
  const d=derived(); const target=620+d.hp*.62;
  race.rpm += dt*(900 + race.gear*120) - (race.speed*.95);
  race.rpm=clamp(race.rpm,900,8200);
  race.speed += dt*.0007*(target*(1+race.combo*.018)) - dt*.00008;
  race.speed=clamp(race.speed,0,330);
  race.distance += race.speed*dt*.00035;
  const pct=clamp(race.rpm/8200*100,0,100);$("#revNeedle").style.left=pct+"%";
  $("#speed").textContent=Math.round(race.speed)+" KM/H";$("#rpm").textContent=Math.round(race.rpm);$("#gear").textContent=race.gear;$("#combo").textContent="x"+race.combo.toFixed(1);
  const ctx=$("#raceCanvas").getContext("2d"),w=$("#raceCanvas").width,h=$("#raceCanvas").height;ctx.clearRect(0,0,w,h);
  drawCar($("#raceCanvas"),race.distance*30);
  // overlay progress and opponent
  ctx.fillStyle="rgba(8,11,18,.75)";ctx.fillRect(0,0,w,42);ctx.fillStyle="#fff";ctx.font="700 15px system-ui";ctx.fillText("YOU",24,27);
  ctx.fillStyle="#ffb84d";ctx.fillText(race.name.toUpperCase(),w-150,27);
  if(race.distance>=100){finishRace(true);return}
  raf=requestAnimationFrame(raceLoop);
}
function shift(){
  if(!race||race.ended)return;
  const sweet=6500+race.gear*120;
  const delta=Math.abs(race.rpm-sweet);
  if(delta<450){race.perfect++;race.combo=clamp(race.combo+.25,1,3);race.speed+=16; beep(680,0.07);toast("PERFECT SHIFT")}
  else if(delta<1050){race.combo=clamp(race.combo+.08,1,3);race.speed+=5;beep(430,.05);toast("GOOD SHIFT")}
  else {race.combo=Math.max(1,race.combo-.25);race.speed*=.93;beep(180,.08);toast("MISSED SHIFT")}
  race.gear++;
  if(race.gear>race.gearCount){finishRace(true);return}
  race.rpm=5200;
}
function finishRace(win){
  if(!race||race.ended)return;race.ended=true;cancelAnimationFrame(raf);
  const elapsed=(performance.now()-race.started)/1000, d=derived(), winChance=d.hp+ d.grip*2.2 - d.weight*.05;
  const opponentScore=race.power*(.82+Math.random()*.28), actualWin=win && winChance>opponentScore*.72;
  const reward=actualWin?Math.round(450+state.tier*180+race.perfect*65):Math.round(120+state.tier*35);
  if(actualWin){state.money+=reward;state.rank++;if(state.rank%5===0&&state.tier<4)state.tier++;} else state.money+=reward;
  state.best=state.best?Math.min(state.best,elapsed):elapsed;save();
  $("#resultEyebrow").textContent=actualWin?"RACE COMPLETE":"RACE LOST";
  $("#resultTitle").textContent=actualWin?"YOU WIN":"YOU LOSE";
  $("#resultTime").textContent=elapsed.toFixed(2)+"s";$("#resultReward").textContent="$"+fmt(reward);$("#resultScore").textContent=Math.round(race.perfect/Math.max(1,race.gearCount)*100)+"%";
  $("#resultMessage").textContent=actualWin?`Clean run. ${race.perfect} perfect shift${race.perfect===1?"":"s"} pushed the build over the line.`:"Your build is not strong enough yet. Upgrade the weak link and try again.";
  show("result");
}
function beep(freq,dur){try{const c=beep.ctx||(beep.ctx=new AudioContext()),o=c.createOscillator(),g=c.createGain();o.frequency.value=freq;o.type="square";g.gain.setValueAtTime(.035,c.currentTime);g.gain.exponentialRampToValueAtTime(.001,c.currentTime+dur);o.connect(g);g.connect(c.destination);o.start();o.stop(c.currentTime+dur)}catch{}}

$("#shiftBtn").addEventListener("pointerdown",e=>{e.preventDefault();shift()});
window.addEventListener("keydown",e=>{if((e.code==="Space"||e.code==="KeyW")&&!e.repeat){e.preventDefault();shift()}});
$$('[data-screen="race"]').forEach(b=>b.addEventListener("click",startRace));

let wheel={catIndex:0,spinning:false,angle:0};
function rarityFor(i){return i===0?"COMMON":i===1?"UNCOMMON":i===2?"RARE":i===3?"EPIC":"LEGENDARY"}
function drawWheel(){
  const canvas=$("#wheelCanvas"),ctx=canvas.getContext("2d"),w=canvas.width,h=canvas.height,cx=w/2,cy=h/2,r=235;
  ctx.clearRect(0,0,w,h); const cat=CATS[wheel.catIndex], opts=OPTIONS[cat];
  const weights=opts.map((_,i)=>Math.pow(.35,i)),sum=weights.reduce((a,b)=>a+b,0);let a=wheel.angle;
  opts.forEach((o,i)=>{const span=Math.PI*2*weights[i]/sum;ctx.beginPath();ctx.moveTo(cx,cy);ctx.arc(cx,cy,r,a,a+span);ctx.closePath();ctx.fillStyle=COLORS[i];ctx.globalAlpha=.82;ctx.fill();ctx.globalAlpha=1;ctx.strokeStyle="#0b0f16";ctx.lineWidth=3;ctx.stroke();ctx.save();ctx.translate(cx,cy);ctx.rotate(a+span/2);ctx.textAlign="right";ctx.fillStyle="#10151e";ctx.font="800 13px system-ui";ctx.fillText(o[0],r-16,4);ctx.restore();a+=span});
  ctx.beginPath();ctx.arc(cx,cy,52,0,Math.PI*2);ctx.fillStyle="#0b1018";ctx.fill();ctx.strokeStyle="#344052";ctx.lineWidth=3;ctx.stroke();ctx.fillStyle="#fff";ctx.textAlign="center";ctx.font="900 18px system-ui";ctx.fillText(cat.toUpperCase(),cx,cy+6);
}
function spin(){
  if(wheel.spinning)return;wheel.spinning=true;$("#spinBtn").disabled=true;
  const cat=CATS[wheel.catIndex],opts=OPTIONS[cat],weights=opts.map((_,i)=>Math.pow(.35,i)),sum=weights.reduce((a,b)=>a+b,0);
  let rnd=Math.random()*sum,idx=0;for(;idx<weights.length-1;idx++){if((rnd-=weights[idx])<0)break}
  let start=wheel.angle, full=Math.PI*2*(5+Math.random()*2), target=start+full;
  let a=start, chosen=0, elapsed=0, duration=1600;
  const tick=performance.now();
  function frame(now){elapsed=now-tick;const t=clamp(elapsed/duration,0,1),ease=1-Math.pow(1-t,4);wheel.angle=start+full*ease;drawWheel();if(t<1){requestAnimationFrame(frame);return}
    // Normalize and locate selected wedge at pointer (top).
    const weights=opts.map((_,i)=>Math.pow(.35,i)),sum=weights.reduce((a,b)=>a+b,0);
    const span=2*Math.PI*weights[idx]/sum;let before=weights.slice(0,idx).reduce((a,b)=>a+b,0)*2*Math.PI/sum;
    const desired= -Math.PI/2 - (before+span/2); wheel.angle += desired-wheel.angle%(Math.PI*2);
    drawWheel(); state.parts[cat]=idx; save(); const stars=idx>=4?5:idx>=3?4:idx>=2?3:idx>=1?2:1;
    toast(`${opts[idx][0]} • ${"★".repeat(stars)}`);
    wheel.catIndex++;wheel.spinning=false;$("#spinBtn").disabled=false;
    if(wheel.catIndex>=CATS.length){wheel.catIndex=0;show("garage")}else{updateWheelLabels();drawWheel()}
  }
  requestAnimationFrame(frame);
}
function updateWheelLabels(){const cat=CATS[wheel.catIndex];$("#wheelTitle").textContent="SPIN FOR "+cat.toUpperCase();$("#wheelSubtitle").textContent=`Land a ${cat.toLowerCase()} part. Rare parts have sharply lower odds.`}
$("#spinBtn").addEventListener("click",spin);

function openWheel(){wheel={catIndex:0,spinning:false,angle:0};show("wheel");updateWheelLabels();drawWheel()}
$$('[data-screen="wheel"]').forEach(b=>b.addEventListener("click",openWheel));

function boot(){updateUI();drawCar($("#homeCar"));drawGarage();updateWheelLabels();drawWheel();}
boot();
})();
