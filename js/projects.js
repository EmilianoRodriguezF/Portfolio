const LINKS=["vehicle.html","boat.html","heating-element.html","packaging-line.html"];
const IMG={cap:"assets/img/projects-accessibility-vehicle.jpg",boat:"assets/img/projects-loon-e.jpg",shaper:"assets/img/projects-heating-element.jpg",line:"assets/img/projects-packaging-line.jpg"};
const P=[
{t:"Electrically Assisted Accessibility Vehicle",img:IMG.cap,d:"A two-person electrically assisted accessibility vehicle designed for high-load operation and compact indoor transport, featuring a detachable cabin, hydraulic steering and braking, and automated emergency braking.",tools:["FEA","FMEA","CAD","DFM","Machining","Analytical Model","Project Management"]},
{t:"Autonomous Boat “Loon-E”",img:IMG.boat,d:"Led the electrical system design of an autonomous boat competing internationally in RoboBoat 2025 and Njord Challenge 2026. Designed custom PCBs, power systems, wiring, and battery redundancy while contributing to develop autonomy and mechanical systems.",tools:["KiCad","PCB design","3D printing","Prototyping","ROS","Gazebo"]},
{t:"Automated Heating Element Forming System",img:IMG.shaper,d:"Designed an automated heating-element forming machine capable of accurately producing a wide range of shapes and bend radii while maintaining a flexible and mechanically simple design.",tools:["Research & Development","Prototyping","CAD","Data Analysis"]},
{t:"Packaging Assembly Line",img:IMG.line,d:"Designed an automated cardboard box forming and sealing line using pneumatics, sensors, and embedded control. Developed the pneumatic system, sensor integration, simulations, and low-level assembly-language control.",tools:["Pneumatics","Assembly Programming","Electrical Circuits","Project Management"]}];
const tg=a=>'<div class="tags">'+a.map(x=>'<span>'+x.replace(/&/g,'&amp;')+'</span>').join('')+'</div>';
const S=["Two-person electric accessibility vehicle with a detachable cabin, hydraulic steering, and automated emergency braking.","Autonomous boat for RoboBoat 2025 and Njord Challenge 2026, where I led the electrical system design.","Automated machine that forms heating elements into a wide range of shapes and bend radii.","Automated box forming and sealing line built on pneumatics, sensors, and embedded control."];

const gal=document.getElementById('gal'),lb=document.getElementById('lb'),lbc=document.getElementById('lbc');let cur=0;
gal.innerHTML=P.map((p,i)=>`<button class="tile" data-i="${i}" aria-label="${p.t}"><img src="${p.img}" alt="${p.t}"><div class="ov"><span>${p.t}</span><div class="s">${S[i]}</div></div></button>`).join('');
function show(i){cur=(i+P.length)%P.length;const p=P[cur];lbc.innerHTML=`<button class="lb-x" aria-label="Close">✕</button><div class="im"><img src="${p.img}" alt="${p.t}"></div><div class="lb-body"><h3>${p.t}</h3><p>${p.d}</p>${tg(p.tools)}<div class="lb-nav"><a class="btn sm" href="${LINKS[cur]}" style="background:var(--navy);color:#fff">Learn More</a><button class="btn sm" id="pv">← Previous</button><button class="btn sm" id="nx">Next →</button></div></div>`;lb.classList.add('open');
lbc.querySelector('.lb-x').onclick=close;lbc.querySelector('#pv').onclick=()=>show(cur-1);lbc.querySelector('#nx').onclick=()=>show(cur+1);}
function close(){lb.classList.remove('open');}
gal.addEventListener('click',e=>{const t=e.target.closest('.tile');if(t)show(+t.dataset.i);});
lb.addEventListener('click',e=>{if(e.target===lb)close();});
document.addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowRight')show(cur+1);if(e.key==='ArrowLeft')show(cur-1);});
