const cv=document.getElementById('cv');cv.muted=true;const pl=()=>{const p=cv.play();if(p&&p.catch)p.catch(()=>{});};pl();document.addEventListener('visibilitychange',()=>{if(!document.hidden)pl();});
const tr=document.getElementById('track');[...tr.children].forEach(c=>{const n=c.cloneNode(true);n.setAttribute('aria-hidden','true');n.alt='';tr.appendChild(n);});
function dur(){tr.style.setProperty('--dur',Math.max(20,(tr.scrollWidth/2)/55)+'s');}dur();window.addEventListener('load',dur);window.addEventListener('resize',dur);
document.querySelectorAll('.pm.lt').forEach(m=>{const i=m.querySelector('img'),b=document.createElement('div');b.className='bgb';b.style.backgroundImage='url('+i.src+')';m.insertBefore(b,i);});
const cs=[...document.querySelectorAll('.pc')],ds=[...document.querySelectorAll('.dot')];let cur=-1;
function setCur(i){if(i===cur)return;cur=i;cs.forEach((c,k)=>c.dataset.s=k<cur?'-1':String(k-cur));ds.forEach((d,k)=>d.classList.toggle('on',k===cur));}
const rr=document.getElementById('rr');
function onScroll(){if(innerWidth<=860)return;const r=rr.getBoundingClientRect();const p=(innerHeight*.45-r.top)/r.height;setCur(Math.min(cs.length-1,Math.max(0,Math.floor(p*cs.length))));}
addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll);setCur(0);onScroll();
document.getElementById('deck').addEventListener('click',()=>setCur((cur+1)%cs.length));
ds.forEach(d=>d.addEventListener('click',()=>setCur(+d.dataset.k)));
