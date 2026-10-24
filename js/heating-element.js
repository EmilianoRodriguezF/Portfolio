const tr=document.getElementById('track');[...tr.children].forEach(c=>{const n=c.cloneNode(true);n.setAttribute('aria-hidden','true');n.alt='';tr.appendChild(n);});
function dur(){tr.style.setProperty('--dur',Math.max(20,(tr.scrollWidth/2)/55)+'s');}dur();window.addEventListener('load',dur);window.addEventListener('resize',dur);
const mz=[...document.querySelectorAll('.mz')],lb=document.getElementById('lb2'),li=document.getElementById('lbi'),lc=document.getElementById('lbc');let cur=0;
function show(i){cur=(i+mz.length)%mz.length;const m=mz[cur],im=m.querySelector('img');li.src=im.src;li.alt=im.alt;lc.textContent=m.dataset.cap;lb.classList.add('open');}
function hide(){lb.classList.remove('open');}
mz.forEach((m,i)=>m.addEventListener('click',()=>show(i)));
document.getElementById('lbp').onclick=()=>show(cur-1);document.getElementById('lbn').onclick=()=>show(cur+1);document.getElementById('lbx').onclick=hide;
lb.addEventListener('click',e=>{if(e.target===lb)hide();});
document.addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;if(e.key==='Escape')hide();if(e.key==='ArrowRight')show(cur+1);if(e.key==='ArrowLeft')show(cur-1);});
