export class Wheel {
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.opts = [];
    this.rotation = 0;
    this.animId = null;
    this.dpr = Math.max(1, window.devicePixelRatio || 1);
    this.resize();
    window.addEventListener('resize', ()=> this.resize());
  }
  resize(){
    const s = 520;
    this.canvas.width = s * this.dpr;
    this.canvas.height = s * this.dpr;
    this.canvas.style.width = '520px';
    this.canvas.style.height = '520px';
    this.ctx.setTransform(this.dpr,0,0,this.dpr,0,0);
    this.draw();
  }
  setOptions(opts){
    this.opts = opts;
    this.rotation = 0;
    this.draw();
  }
  draw(){
    const ctx = this.ctx;
    const W = 520, H = 520, CX = 260, CY = 260, R = 224;
    ctx.clearRect(0,0,W,H);
    if(!this.opts.length) return;

    // outer chrome rim with brutally improved texture
    const rimGrad = ctx.createRadialGradient(CX,CY,R+6,CX,CY,R+18);
    rimGrad.addColorStop(0,'#E8ECF2');
    rimGrad.addColorStop(0.25,'#9AA4B5');
    rimGrad.addColorStop(0.5,'#E8ECF2');
    rimGrad.addColorStop(0.75,'#6B778A');
    rimGrad.addColorStop(1,'#E8ECF2');
    ctx.beginPath();
    ctx.arc(CX,CY,R+14,0,Math.PI*2);
    ctx.fillStyle = rimGrad;
    ctx.fill();
    // inner dark bevel
    ctx.beginPath();
    ctx.arc(CX,CY,R+9,0,Math.PI*2);
    ctx.fillStyle = '#0A0E22';
    ctx.fill();
    ctx.strokeStyle='rgba(255,255,255,0.08)';
    ctx.lineWidth=1; ctx.stroke();
    // bolts
    for(let b=0;b<12;b++){
      const a = (b/12)*Math.PI*2;
      const bx = CX + Math.cos(a)*(R+9);
      const by = CY + Math.sin(a)*(R+9);
      const g = ctx.createRadialGradient(bx,by,0,bx,by,4.5);
      g.addColorStop(0,'#F0F3F7'); g.addColorStop(1,'#5A6575');
      ctx.fillStyle=g; ctx.beginPath(); ctx.arc(bx,by,3.2,0,Math.PI*2); ctx.fill();
    }

    const total = this.opts.length;
    const anglePer = (Math.PI*2)/total;

    // draw sectors with texture
    for(let i=0;i<total;i++){
      const opt = this.opts[i];
      const start = -Math.PI/2 + this.rotation + i*anglePer;
      const end = start + anglePer;
      ctx.beginPath();
      ctx.moveTo(CX,CY);
      ctx.arc(CX,CY,R,start,end);
      ctx.closePath();
      // base color with radial + linear for depth
      const base = opt.color;
      const grad = ctx.createRadialGradient(CX,CY,22,CX,CY,R);
      grad.addColorStop(0, this.lighten(base, 28));
      grad.addColorStop(0.55, base);
      grad.addColorStop(1, this.darken(base, 22));
      ctx.fillStyle = grad;
      ctx.fill();
      // subtle noise overlay (grain)
      ctx.save();
      ctx.clip();
      ctx.globalAlpha = 0.07;
      ctx.fillStyle = this.getNoisePattern(ctx);
      ctx.fillRect(CX-R,CY-R,R*2,R*2);
      ctx.restore();
      // sector border with inner highlight
      ctx.strokeStyle='rgba(255,255,255,0.11)';
      ctx.lineWidth=1.2;
      ctx.stroke();
      // inner highlight line
      ctx.beginPath();
      ctx.arc(CX,CY,R-0.5,start,end);
      ctx.strokeStyle='rgba(255,255,255,0.07)';
      ctx.lineWidth=1; ctx.stroke();

      // text
      ctx.save();
      const mid = (start+end)/2;
      const tx = CX + Math.cos(mid) * (R*0.62);
      const ty = CY + Math.sin(mid) * (R*0.62);
      ctx.translate(tx,ty);
      ctx.rotate(mid + Math.PI/2);
      ctx.textAlign='center';
      ctx.textBaseline='middle';
      // rarity glow for high tiers
      if(opt.stars>=4){
        ctx.shadowColor = opt.stars>=5 ? 'rgba(212,160,23,0.9)' : 'rgba(192,38,74,0.7)';
        ctx.shadowBlur = 10;
      }
      ctx.font = '800 10.5px Outfit, Space Grotesk, sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.96)';
      ctx.shadowColor='rgba(0,0,0,0.65)';
      ctx.shadowBlur=7;
      this.wrapText(ctx, opt.name, 0, -7, 84, 11);
      ctx.shadowBlur=0;
      // chance pill
      const chanceText = opt.chance.toFixed(1)+'%';
      ctx.font = '700 9px JetBrains Mono';
      const tw = ctx.measureText(chanceText).width;
      ctx.fillStyle='rgba(0,0,0,0.42)';
      ctx.beginPath(); ctx.roundRect(-tw/2 -6, 9, tw+12, 14, 7); ctx.fill();
      ctx.fillStyle = opt.stars>=3 ? '#FFE9A8' : 'rgba(180,220,255,0.96)';
      ctx.fillText(chanceText, 0, 16);
      // stars
      ctx.font = '8.5px Space Grotesk';
      ctx.fillStyle = opt.stars>=5 ? '#FFD54A' : opt.stars>=4 ? '#FF6B8A' : 'rgba(255,255,255,0.72)';
      ctx.fillText('★'.repeat(opt.stars), 0, 30);
      ctx.restore();
    }

    // center hub with machined texture
    // outer hub ring
    const hubR=62;
    const hubGrad = ctx.createRadialGradient(CX,CY,18,CX,CY,hubR);
    hubGrad.addColorStop(0,'#2A2F45');
    hubGrad.addColorStop(0.35,'#1A1E33');
    hubGrad.addColorStop(0.68,'#0F1222');
    hubGrad.addColorStop(1,'#070A18');
    ctx.beginPath(); ctx.arc(CX,CY,hubR,0,Math.PI*2); ctx.fillStyle=hubGrad; ctx.fill();
    ctx.strokeStyle='rgba(255,255,255,0.14)'; ctx.lineWidth=1.2; ctx.stroke();
    // machined rings
    for(let r=22;r<58;r+=7){
      ctx.beginPath(); ctx.arc(CX,CY,r,0,Math.PI*2);
      ctx.strokeStyle='rgba(255,255,255,0.05)'; ctx.lineWidth=1; ctx.stroke();
    }
    // inner glass
    ctx.beginPath(); ctx.arc(CX,CY,38,0,Math.PI*2);
    const glass = ctx.createRadialGradient(CX-10,CY-12,0,CX,CY,38);
    glass.addColorStop(0,'rgba(255,255,255,0.11)');
    glass.addColorStop(0.5,'rgba(255,255,255,0.03)');
    glass.addColorStop(1,'rgba(0,0,0,0.22)');
    ctx.fillStyle=glass; ctx.fill();
    // center dot
    ctx.beginPath(); ctx.arc(CX,CY,4.2,0,Math.PI*2);
    ctx.fillStyle='#E8ECF2'; ctx.fill();
    ctx.strokeStyle='rgba(0,0,0,0.35)'; ctx.lineWidth=1; ctx.stroke();
  }
  getNoisePattern(ctx){
    if(this._noise) return this._noise;
    const c=document.createElement('canvas'); c.width=64; c.height=64;
    const g=c.getContext('2d');
    const img=g.createImageData(64,64);
    for(let i=0;i<img.data.length;i+=4){
      const v= 120+ Math.random()*60;
      img.data[i]=v; img.data[i+1]=v; img.data[i+2]=v; img.data[i+3]=28;
    }
    g.putImageData(img,0,0);
    this._noise = ctx.createPattern(c,'repeat');
    return this._noise;
  }
  wrapText(ctx, text, x, y, maxWidth, lineHeight){
    const words = text.split(' ');
    let line=''; let lines=[];
    for(let n=0;n<words.length;n++){
      const test = line + words[n] + ' ';
      if(ctx.measureText(test).width > maxWidth && n>0){ lines.push(line.trim()); line = words[n]+' '; } else line = test;
    }
    lines.push(line.trim());
    if(lines.length>2){ lines = [lines[0], lines.slice(1).join(' ')]; if(ctx.measureText(lines[1]).width>maxWidth) lines[1]=lines[1].slice(0,13)+'.';}
    const startY = y - (lines.length-1)*lineHeight/2;
    lines.forEach((l,i)=> ctx.fillText(l, x, startY + i*lineHeight));
  }
  lighten(hex, amt){
    try{
      let c = hex.replace('#','');
      if(c.length===3) c = c.split('').map(x=>x+x).join('');
      const num = parseInt(c,16);
      let r = Math.min(255, (num>>16 &255)+amt);
      let g = Math.min(255, (num>>8 &255)+amt);
      let b = Math.min(255, (num &255)+amt);
      return `rgb(${r},${g},${b})`;
    }catch{ return hex}
  }
  darken(hex, amt){
    try{
      let c = hex.replace('#','');
      if(c.length===3) c = c.split('').map(x=>x+x).join('');
      const num = parseInt(c,16);
      let r = Math.max(0, (num>>16 &255)-amt);
      let g = Math.max(0, (num>>8 &255)-amt);
      let b = Math.max(0, (num &255)-amt);
      return `rgb(${r},${g},${b})`;
    }catch{ return hex}
  }
  spinTo(winnerIndex, opts={duration:4300}){
    return new Promise(resolve=>{
      const total = this.opts.length;
      const anglePer = (Math.PI*2)/total;
      let target = -winnerIndex * anglePer - anglePer/2;
      const extraTurns = 6 + Math.random()*1.6;
      let current = this.rotation % (Math.PI*2);
      let final = target;
      while(final < current) final += Math.PI*2;
      final += extraTurns * Math.PI*2;
      const overshoot = anglePer * 0.72;
      const overshootFinal = final + overshoot;
      const bounceFinal = final;
      const start = this.rotation;
      const dur = opts.duration;
      const startTime = performance.now();
      let lastTickIndex = -1;
      const tickSound = opts.onTick;
      const animate = (now)=>{
        const elapsed = now - startTime;
        let t = Math.min(1, elapsed / dur);
        let rot;
        if(t < 0.88){
          const tt = t/0.88;
          const eased = 1 - Math.pow(1-tt, 3.4);
          rot = start + eased * (overshootFinal - start);
        } else {
          const tt = (t-0.88)/0.12;
          const eased = 1 - Math.pow(1-tt, 2.6);
          rot = overshootFinal + eased * (bounceFinal - overshootFinal);
        }
        const tickIdx = Math.floor((rot - start)/anglePer);
        if(tickIdx !== lastTickIndex){
          lastTickIndex = tickIdx;
          const speed = 1 - t;
          if(tickSound) tickSound(speed, t);
          if(navigator.vibrate && t < 0.93){
            if(tickIdx % (t<0.55?1:2)===0) navigator.vibrate(7);
          }
        }
        this.rotation = rot;
        this.draw();
        if(t < 1){
          this.animId = requestAnimationFrame(animate);
        } else {
          this.rotation = ((target % (Math.PI*2))+Math.PI*2)%(Math.PI*2);
          this.draw();
          resolve(winnerIndex);
        }
      };
      cancelAnimationFrame(this.animId);
      requestAnimationFrame(animate);
    });
  }
}
