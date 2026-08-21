export class RaceEngine {
  constructor(canvas, onUpdate, onFinish){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.onUpdate = onUpdate;
    this.onFinish = onFinish;
    this.dpr = Math.max(1, window.devicePixelRatio||1);
    this.w = 440; this.h = 640;
    this.resize();
    this.reset();
    window.addEventListener('resize', ()=> this.resize());
    this._asphaltPattern=null;
  }
  resize(){
    const w=440, h=640;
    this.canvas.width = w*this.dpr;
    this.canvas.height = h*this.dpr;
    this.canvas.style.width = w+'px';
    this.canvas.style.height = h+'px';
    this.ctx.setTransform(this.dpr,0,0,this.dpr,0,0);
    this.w=w; this.h=h;
    this.draw(0,0, this.scenario || null);
  }
  reset(){
    this.state='idle';
    this.time=0; this.distance=0; this.oppDistance=0;
    this.speed=0; this.oppSpeed=0;
    this.rpm=900; this.gear=1; this.oppGear=1;
    this.shiftCooldown=0;
    this.particles=[];
    this.carBuild=null;
    this.oppStats=null;
    this.reaction=null;
    this.perfectShifts=0; this.totalShifts=0;
    this.boost=0;
    this.scenario=null;
    this.raceDistance=402;
  }
  setBuild(build, stats, scenario, raceDistance){
    this.carBuild = build;
    this.stats = stats;
    this.scenario = scenario;
    this.raceDistance = raceDistance || scenario.dist;
    // opponent quarter adjusted for distance
    const baseQuarter = stats.quarter * (raceDistance/402);
    const jitter = (Math.random()*0.16 -0.08);
    this.oppQuarter = Math.max(4.2, baseQuarter * (1 + jitter));
    this.draw(0,0, scenario);
  }
  getAsphaltPattern(){
    if(this._asphaltPattern) return this._asphaltPattern;
    const c=document.createElement('canvas'); c.width=96; c.height=96;
    const g=c.getContext('2d');
    g.fillStyle='#0D1020'; g.fillRect(0,0,96,96);
    for(let i=0;i<220;i++){
      const x=Math.random()*96, y=Math.random()*96, r=Math.random()*1.1;
      g.fillStyle=`rgba(255,255,255,${0.035+Math.random()*0.045})`;
      g.beginPath(); g.arc(x,y,r,0,Math.PI*2); g.fill();
    }
    // cracks
    g.strokeStyle='rgba(255,255,255,0.04)'; g.lineWidth=0.6;
    for(let i=0;i<6;i++){ g.beginPath(); g.moveTo(Math.random()*96,0); g.bezierCurveTo(Math.random()*96,32,Math.random()*96,64,Math.random()*96,96); g.stroke(); }
    this._asphaltPattern = this.ctx.createPattern(c,'repeat');
    return this._asphaltPattern;
  }
  draw(playerDist, oppDist, scenario){
    const ctx=this.ctx; const w=this.w, h=this.h;
    const sc = scenario || this.scenario || {bg:['#05071A','#0A1430'], accent:'#00E5FF', fog:'#7C4DFF', name:'Neon City'};
    ctx.clearRect(0,0,w,h);
    // sky gradient
    const skyGrad = ctx.createLinearGradient(0,0,0,140);
    skyGrad.addColorStop(0, sc.bg[0]);
    skyGrad.addColorStop(1, sc.bg[1]);
    ctx.fillStyle=skyGrad; ctx.fillRect(0,0,w,140);
    // horizon glow
    const glow = ctx.createRadialGradient(w/2, 90, 0, w/2, 90, 320);
    glow.addColorStop(0, sc.fog+'33');
    glow.addColorStop(1,'transparent');
    ctx.fillStyle=glow; ctx.fillRect(0,0,w,160);
    // scenario environment silhouettes
    ctx.save();
    ctx.globalAlpha=0.95;
    if(sc.id==='desert'){
      // dunes
      ctx.fillStyle='#2A1A0C';
      ctx.beginPath(); ctx.moveTo(0,120); ctx.quadraticCurveTo(w*0.2, 85, w*0.45, 105); ctx.quadraticCurveTo(w*0.7, 125, w, 95); ctx.lineTo(w,140); ctx.lineTo(0,140); ctx.closePath(); ctx.fill();
      ctx.fillStyle='#3A2614'; ctx.beginPath(); ctx.moveTo(0,125); ctx.quadraticCurveTo(w*0.3, 100, w*0.6, 118); ctx.quadraticCurveTo(w*0.85, 135, w, 115); ctx.lineTo(w,140); ctx.lineTo(0,140); ctx.closePath(); ctx.fill();
      // sun
      ctx.fillStyle='rgba(255,160,60,0.9)'; ctx.beginPath(); ctx.arc(w*0.78, 38, 18,0,Math.PI*2); ctx.fill();
      ctx.fillStyle='rgba(255,160,60,0.18)'; ctx.beginPath(); ctx.arc(w*0.78,38,32,0,Math.PI*2); ctx.fill();
    } else if(sc.id==='forest'){
      // trees
      ctx.fillStyle='#0A1F14';
      for(let i=0;i<14;i++){
        const x = (i/13)*w + Math.random()*10;
        const tw = 18 + Math.random()*14;
        ctx.beginPath(); ctx.moveTo(x, 140); ctx.lineTo(x-tw/2, 140); ctx.lineTo(x, 70+Math.random()*18); ctx.lineTo(x+tw/2,140); ctx.closePath(); ctx.fill();
      }
      ctx.fillStyle='#142A18'; for(let i=0;i<8;i++){ const x=(i/7)*w+6; ctx.fillRect(x, 110, 2, 30); }
    } else if(sc.id==='city'){
      // skyline
      ctx.fillStyle='#0A0F2A';
      const buildings=[38,52,44,62,36,58,48,42,55];
      let x=0; const bw=w/buildings.length;
      buildings.forEach(hb=>{ ctx.fillRect(x+2, 140-hb, bw-4, hb); // windows
        ctx.fillStyle='rgba(0,229,255,0.45)'; for(let wy=140-hb+8; wy<135; wy+=9){ for(let wx=x+6; wx<x+bw-6; wx+=7){ if(Math.random()>0.35) ctx.fillRect(wx, wy, 3,3); } } ctx.fillStyle='#0A0F2A'; x+=bw;
      });
    } else if(sc.id==='harbor'){
      ctx.fillStyle='#0A1E2A';
      ctx.fillRect(0, 98, w, 42);
      // cranes
      ctx.strokeStyle='rgba(124,77,255,0.55)'; ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(44,140); ctx.lineTo(44,92); ctx.lineTo(88,92); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(w-60,140); ctx.lineTo(w-60,98); ctx.lineTo(w-22,98); ctx.stroke();
      // water reflection
      ctx.fillStyle='rgba(0,229,255,0.08)'; ctx.fillRect(0,133,w,7);
    } else if(sc.id==='snow'){
      ctx.fillStyle='#0D1A2E';
      ctx.beginPath(); ctx.moveTo(0,120); ctx.lineTo(w*0.32, 78); ctx.lineTo(w*0.55, 96); ctx.lineTo(w*0.78, 72); ctx.lineTo(w, 98); ctx.lineTo(w,140); ctx.lineTo(0,140); ctx.closePath(); ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.85)'; ctx.beginPath(); ctx.moveTo(w*0.32,78); ctx.lineTo(w*0.35,84); ctx.lineTo(w*0.29,84); ctx.closePath(); ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.55)'; ctx.beginPath(); ctx.moveTo(w*0.78,72); ctx.lineTo(w*0.81,78); ctx.lineTo(w*0.75,78); ctx.closePath(); ctx.fill();
    }
    ctx.restore();
    // fog gradient over horizon
    const fogGrad = ctx.createLinearGradient(0,110,0,160);
    fogGrad.addColorStop(0,'transparent'); fogGrad.addColorStop(1,'rgba(0,0,0,0.35)');
    ctx.fillStyle=fogGrad; ctx.fillRect(0,110,w,50);

    // track geometry
    const trackTop=138, trackBottom=h-24, trackWTop=132, trackWBottom=w-22;
    // asphalt with pattern
    ctx.save();
    ctx.beginPath();
    ctx.moveTo((w-trackWTop)/2, trackTop);
    ctx.lineTo((w+trackWTop)/2, trackTop);
    ctx.lineTo((w+trackWBottom)/2, trackBottom);
    ctx.lineTo((w-trackWBottom)/2, trackBottom);
    ctx.closePath();
    ctx.fillStyle = this.getAsphaltPattern();
    ctx.fill();
    // inner vignette
    const trackGrad = ctx.createLinearGradient(0,trackTop,0,trackBottom);
    trackGrad.addColorStop(0,'rgba(0,0,0,0.12)'); trackGrad.addColorStop(1,'rgba(0,0,0,0.32)');
    ctx.fillStyle=trackGrad; ctx.fill();
    // lane divider neon
    ctx.strokeStyle= sc.accent; ctx.lineWidth=1.8; ctx.shadowColor=sc.accent; ctx.shadowBlur=10;
    ctx.beginPath(); ctx.moveTo(w/2, trackTop); ctx.lineTo(w/2, trackBottom); ctx.stroke();
    ctx.shadowBlur=0;
    // dashed lane centers
    ctx.setLineDash([10,10]); ctx.strokeStyle='rgba(255,255,255,0.32)'; ctx.lineWidth=1.2;
    ctx.beginPath(); ctx.moveTo((w-trackWTop)/2 + trackWTop*0.25, trackTop); ctx.lineTo((w-trackWBottom)/2 + trackWBottom*0.25, trackBottom); ctx.stroke();
    ctx.beginPath(); ctx.moveTo((w-trackWTop)/2 + trackWTop*0.75, trackTop); ctx.lineTo((w-trackWBottom)/2 + trackWBottom*0.75, trackBottom); ctx.stroke();
    ctx.setLineDash([]);
    // side walls with texture
    ctx.fillStyle='rgba(255,255,255,0.06)';
    ctx.fillRect((w-trackWTop)/2 -6, trackTop, 6, trackBottom-trackTop);
    ctx.fillRect((w+trackWTop)/2, trackTop, 6, trackBottom-trackTop);
    // neon side lines
    ctx.strokeStyle=sc.accent; ctx.lineWidth=2.2; ctx.shadowColor=sc.accent; ctx.shadowBlur=12;
    ctx.beginPath(); ctx.moveTo((w-trackWTop)/2, trackTop); ctx.lineTo((w-trackWBottom)/2, trackBottom); ctx.stroke();
    ctx.beginPath(); ctx.moveTo((w+trackWTop)/2, trackTop); ctx.lineTo((w+trackWBottom)/2, trackBottom); ctx.stroke();
    ctx.shadowBlur=0;
    // start line
    ctx.fillStyle='#E8ECF2';
    ctx.fillRect((w-trackWTop)/2, trackTop, trackWTop, 5);
    ctx.fillStyle='rgba(0,0,0,0.45)'; for(let i=0;i<trackWTop;i+=14){ if(i%28===0) ctx.fillRect((w-trackWTop)/2 + i, trackTop, 14,5); }
    // distance markers
    ctx.fillStyle='rgba(255,255,255,0.52)'; ctx.font='700 9px JetBrains Mono'; ctx.textAlign='center';
    const totalDist = this.raceDistance || 402;
    for(let d=100; d<totalDist; d+= d>=500?200:100){
      const prog = d/totalDist;
      const y = trackTop + prog*(trackBottom-trackTop);
      const wt = trackWTop + prog*(trackWBottom-trackWTop);
      ctx.fillText(d+'M', w/2, y-6);
      ctx.fillStyle='rgba(255,255,255,0.18)'; ctx.fillRect((w-wt)/2, y, wt, 1); ctx.fillStyle='rgba(255,255,255,0.52)';
    }
    ctx.restore();

    // cars
    const pProg = Math.min(1, playerDist/totalDist);
    const oProg = Math.min(1, oppDist/totalDist);
    const py = trackTop + pProg*(trackBottom-trackTop - 30);
    const oy = trackTop + oProg*(trackBottom-trackTop - 30);
    const pScale = 0.58 + pProg*0.74;
    const oScale = 0.58 + oProg*0.74;
    const laneOffset = (prog)=> {
      const wt = trackWTop + prog*(trackWBottom-trackWTop);
      return wt*0.25;
    };
    const px = w/2 - laneOffset(pProg);
    const ox = w/2 + laneOffset(oProg);
    this.drawCar(px, py, pScale, true);
    this.drawCar(ox, oy, oScale, false);

    // particles
    this.particles.forEach(p=>{
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fill();
    });
    ctx.globalAlpha=1;

    // finish line when near
    if(pProg>0.97 || oProg>0.97){
      const fy = trackBottom - 10;
      ctx.fillStyle='#F0F3F7';
      for(let i=0;i<20;i++){
        if(i%2===0) ctx.fillRect((w-trackWBottom)/2 + i* (trackWBottom/20), fy, trackWBottom/20, 6);
      }
      ctx.fillStyle='#070A1E'; ctx.font='800 10px Space Grotesk'; ctx.fillText('FINISH • '+totalDist+'M', w/2, fy+16);
    }
  }
  drawCar(x,y,scale,isPlayer){
    const ctx=this.ctx;
    ctx.save();
    ctx.translate(x,y);
    ctx.scale(scale, scale);
    // contact shadow with blur
    ctx.fillStyle='rgba(0,0,0,0.42)';
    ctx.beginPath(); ctx.ellipse(0, 13, 19, 8, 0, 0, Math.PI*2); ctx.fill();
    // body base
    const bodyColor = isPlayer ? (this.carBuild?.[11]?.color || '#0A6B7A') : '#7A1840';
    const accent = isPlayer ? (this.carBuild?.[13]?.glow || '#00E5FF') : '#FF3D8A';
    // main hull with bevel
    ctx.fillStyle = bodyColor;
    ctx.strokeStyle='rgba(255,255,255,0.14)'; ctx.lineWidth=1;
    ctx.beginPath(); ctx.roundRect(-15.5, -20, 31, 40, 5); ctx.fill(); ctx.stroke();
    // hood line
    ctx.fillStyle='rgba(255,255,255,0.08)'; ctx.fillRect(-12, -17, 24, 1.2);
    // cockpit
    ctx.fillStyle='#0A1020';
    ctx.beginPath(); ctx.roundRect(-9.5, -9, 19, 14, 2.2); ctx.fill();
    ctx.fillStyle='rgba(180,220,255,0.96)';
    ctx.beginPath(); ctx.roundRect(-8.5, -7.5, 17, 5.5, 1.2); ctx.fill();
    // reflection
    ctx.fillStyle='rgba(255,255,255,0.42)'; ctx.fillRect(-7, -6.5, 7,1);
    // front splitter
    ctx.fillStyle='#0A0E1E';
    ctx.fillRect(-13.5, -21.5, 27, 4);
    ctx.fillStyle= isPlayer? '#1A1F33' : '#2A0F18';
    ctx.fillRect(-11, -22, 22, 1.2);
    // rear wing
    ctx.fillStyle='#0A0E1E';
    ctx.fillRect(-12, 18, 24, 3.2);
    ctx.fillStyle= bodyColor;
    ctx.fillRect(-10, 18.5, 20, 1);
    // wheels with rim
    const wheelY = [-12, 7];
    wheelY.forEach(wy=>{
      [-16, 14].forEach(wx=>{
        ctx.fillStyle='#080A12'; ctx.beginPath(); ctx.roundRect(wx-1.5, wy-1, 5, 9, 1.5); ctx.fill();
        ctx.fillStyle= isPlayer? '#D0D6E0' : '#8A8A8A'; ctx.beginPath(); ctx.arc(wx+1, wy+3.5, 1.8,0,Math.PI*2); ctx.fill();
        ctx.fillStyle='#080A12'; ctx.beginPath(); ctx.arc(wx+1, wy+3.5, 0.7,0,Math.PI*2); ctx.fill();
      });
    });
    // side vents
    ctx.fillStyle='rgba(0,0,0,0.22)'; ctx.fillRect(-15.5, -4, 2.5, 8); ctx.fillRect(13, -4, 2.5, 8);
    // neon underglow + rim glow
    if(isPlayer && accent!=='none'){
      const glow = accent==='rainbow' ? '#D4A017' : accent;
      ctx.shadowColor = glow; ctx.shadowBlur=16;
      ctx.strokeStyle= glow; ctx.lineWidth=1.6; ctx.strokeRect(-15.5, -20, 31, 40);
      ctx.shadowBlur=0;
      // ground neon spill
      ctx.fillStyle= glow+'22'; ctx.beginPath(); ctx.ellipse(0, 14, 22, 6, 0,0,Math.PI*2); ctx.fill();
    } else if(!isPlayer){
      ctx.shadowColor='#FF3D8A'; ctx.shadowBlur=10; ctx.strokeStyle='rgba(255,61,138,0.85)'; ctx.lineWidth=1.2; ctx.strokeRect(-15.5,-20,31,40); ctx.shadowBlur=0;
    }
    // flame if boosting
    if(isPlayer && this.boost>0.12){
      const fAlpha = 0.75 + Math.random()*0.25;
      ctx.globalAlpha=fAlpha;
      const flameGrad = ctx.createRadialGradient(0,22,0,0,22,10);
      flameGrad.addColorStop(0,'#FFF0A0'); flameGrad.addColorStop(0.35,'#FF8A00'); flameGrad.addColorStop(1,'transparent');
      ctx.fillStyle=flameGrad;
      ctx.beginPath(); ctx.moveTo(-6, 20.5); ctx.quadraticCurveTo(0, 30+Math.random()*5, 6,20.5); ctx.lineTo(0,22); ctx.closePath(); ctx.fill();
      ctx.globalAlpha=1;
    }
    ctx.restore();
  }
  async startCountdown(lightEls){
    this.state='countdown';
    this.time=0; this.distance=0; this.oppDistance=0; this.speed=0; this.oppSpeed=0; this.rpm=1100; this.gear=1; this.oppGear=1;
    this.shiftCooldown=0; this.particles=[];
    lightEls.forEach(l=> l.classList.remove('on','green'));
    for(let i=0;i<5;i++){
      await this.delay(620);
      if(this.state!=='countdown') return false;
      lightEls[i].classList.add('on');
      this.playTick(440 + i*60, 0.12);
    }
    await this.delay(400 + Math.random()*700);
    if(this.state!=='countdown') return false;
    lightEls.forEach(l=> {l.classList.remove('on'); l.classList.add('green');});
    this.playTick(880, 0.25);
    if(navigator.vibrate) navigator.vibrate(35);
    this.state='racing';
    this.greenTime = performance.now();
    this.startTime = performance.now();
    this.last = performance.now();
    this.raf = requestAnimationFrame(()=> this.loop());
    setTimeout(()=> lightEls.forEach(l=> l.classList.remove('green')), 900);
    return true;
  }
  delay(ms){ return new Promise(r=> setTimeout(r, ms)); }
  playTick(freq, vol){
    try{
      if(!this.audio) this.audio = new (window.AudioContext||window.webkitAudioContext)();
      if(this.audio.state==='suspended') this.audio.resume();
      const o=this.audio.createOscillator(), g=this.audio.createGain();
      o.type='square'; o.frequency.value=freq; g.gain.value=vol;
      o.connect(g); g.connect(this.audio.destination);
      o.start(); g.gain.exponentialRampToValueAtTime(0.001, this.audio.currentTime+0.18);
      o.stop(this.audio.currentTime+0.19);
    }catch{}
  }
  launch(){
    if(this.state==='countdown'){
      this.falseStart=true;
      this.playTick(180,0.3);
      return {falseStart:true};
    }
    if(this.state==='racing' && this.time<0.62){
      const rt = (performance.now() - this.greenTime)/1000;
      this.reaction = rt;
      if(rt>=0.08 && rt<=0.28){
        this.boost=0.92;
        this.perfectLaunch=true;
      } else if(rt<0.08){
        this.boost=-0.4;
      } else {
        this.boost=0;
      }
      return {reaction:rt, perfect:this.perfectLaunch};
    }
    return null;
  }
  shift(){
    if(this.state!=='racing') return;
    if(this.shiftCooldown>0) return {cooldown:true};
    this.totalShifts++;
    let result='bad';
    if(this.rpm>=6200 && this.rpm<=7600) { result='perfect'; this.perfectShifts++; this.boost = Math.min(1, this.boost+0.45);}
    else if(this.rpm>=5600 && this.rpm<=7800) { result='good'; this.boost = Math.min(1, this.boost+0.18);}
    else { result='bad'; this.boost = Math.max(-0.2, this.boost-0.18); }
    const maxGears = this.carBuild?.[6]?.gears || 6;
    if(this.gear < maxGears){
      this.gear++;
      this.rpm = Math.max(3200, this.rpm - 2600 + Math.random()*300);
      this.shiftCooldown=0.18;
      for(let i=0;i<9;i++) this.particles.push({x: (this.w/2 - (this.distance<200?50:0)) + (Math.random()-0.5)*10, y: this.getCarY(this.distance)+19, r: 2+Math.random()*3.5, alpha:0.9, color: result==='perfect'?'#00E676':'#FF8A00', vy: 1+Math.random()*2.2, vx: (Math.random()-0.5)*2.2});
      this.playTick(result==='perfect'? 880: result==='good'? 660: 320, 0.18);
      if(navigator.vibrate) navigator.vibrate(result==='perfect'? 26: 12);
    } else {
      result='max';
    }
    return {result, rpm:this.rpm, gear:this.gear};
  }
  getCarY(dist){
    const prog = Math.min(1, dist/this.raceDistance); return 138 + prog*(640-24-138-30);
  }
  loop(){
    if(this.state!=='racing') return;
    const now = performance.now();
    const dt = Math.min(0.033, (now - (this.last||now))/1000);
    this.last = now;
    this.time = (now - this.startTime)/1000;
    const s = this.stats;
    const mass = s.mass;
    const pwr = s.pwr;
    const grip = s.grip;
    const gearRatio = [0, 3.2, 2.1, 1.45, 1.1, 0.85, 0.7, 0.58, 0.5];
    const ratio = gearRatio[this.gear] || 1;
    let targetRpm = 900 + (this.speed * 3.6) * ratio * 38;
    targetRpm += (pwr/100) * 2;
    this.rpm += (targetRpm - this.rpm) * Math.min(1, dt*6);
    this.rpm = Math.max(900, Math.min(8600, this.rpm));
    if(this.rpm>8200) this.rpm -= 180;
    let powerFactor = 1;
    const rpmNorm = this.rpm;
    if(rpmNorm<3500) powerFactor = 0.55 + (rpmNorm-900)/2600*0.45;
    else if(rpmNorm<6000) powerFactor = 1.0;
    else if(rpmNorm<7600) powerFactor = 1.02 - (rpmNorm-6000)/1600*0.12;
    else powerFactor = 0.72;
    const effGrip = grip * (this.falseStart?0.72:1) * (this.perfectLaunch?1.08:1);
    let acc = (pwr * powerFactor * effGrip * (0.9 + this.boost*0.35) / mass) * 13.2;
    acc -= (this.speed*this.speed)*0.0021;
    const gearEff = this.carBuild?.[6]?.eff || 1;
    acc *= gearEff;
    acc *= (0.92 + s.aero*0.08);
    // scenario surface modifier
    if(this.scenario?.id==='desert') acc *= 0.97;
    if(this.scenario?.id==='snow') acc *= 0.92;
    if(this.scenario?.id==='harbor') acc *= 0.98;
    this.speed += acc * dt;
    if(this.speed<0) this.speed=0;
    const topMps = s.top / 3.6;
    if(this.speed > topMps) this.speed = topMps;
    this.distance += this.speed * dt;
    const oppProg = Math.min(1, this.time / this.oppQuarter);
    const eased = oppProg<0.5 ? 2*oppProg*oppProg : 1 - Math.pow(-2*oppProg+2,2)/2;
    const wobble = Math.sin(this.time*9)*1.1 * (oppProg<0.9?1:0);
    this.oppDistance = this.raceDistance * Math.pow(eased, 1.08) + wobble;
    this.oppSpeed = (this.raceDistance/this.oppQuarter) * (0.7 + 0.6*eased);
    if(this.shiftCooldown>0) this.shiftCooldown -= dt;
    if(this.boost>0) this.boost = Math.max(0, this.boost - dt*0.55);
    if(this.boost<0) this.boost = Math.min(0, this.boost + dt*0.7);
    this.particles.forEach(p=>{ p.y += p.vy; p.x += p.vx; p.alpha -= dt*1.8; p.r *= 0.985;});
    this.particles = this.particles.filter(p=> p.alpha>0);
    const playerFinished = this.distance>=this.raceDistance;
    const oppFinished = this.oppDistance>=this.raceDistance;
    if(playerFinished || oppFinished){
      let pTime = this.time + (this.falseStart?1.2:0);
      pTime -= this.perfectShifts * 0.045;
      pTime = Math.max(4.2, pTime);
      let oTime = this.oppQuarter + (Math.random()*0.12 -0.06);
      const win = pTime < oTime;
      this.state='finished';
      this.draw(this.distance, this.oppDistance, this.scenario);
      this.onUpdate({speed:this.speed*3.6, rpm:this.rpm, gear:this.gear, time:this.time, distance:this.distance, oppDistance:this.oppDistance, boost:this.boost, perfectShifts:this.perfectShifts});
      this.onFinish({win, playerTime:pTime, oppTime:oTime, reaction:this.reaction, falseStart:this.falseStart, perfectShifts:this.perfectShifts, scenario:this.scenario, raceDistance:this.raceDistance});
      return;
    }
    this.draw(this.distance, this.oppDistance, this.scenario);
    this.onUpdate({speed:this.speed*3.6, rpm:this.rpm, gear:this.gear, time:this.time, distance:this.distance, oppDistance:this.oppDistance, boost:this.boost});
    this.raf = requestAnimationFrame(()=> this.loop());
  }
  stop(){
    this.state='idle';
    if(this.raf) cancelAnimationFrame(this.raf);
  }
}
