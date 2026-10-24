const YT_ID="8GU1KMEp9jY";
const cv=document.getElementById('cv');cv.muted=true;const pl=()=>{const p=cv.play();if(p&&p.catch)p.catch(()=>{});};pl();document.addEventListener('visibilitychange',()=>{if(!document.hidden)pl();});
const tr=document.getElementById('track');
const yt=document.getElementById('yt');yt.style.backgroundImage='url('+tr.children[1].src+')';
function playYT(){yt.outerHTML='<iframe class="ytf" src="https://www.youtube-nocookie.com/embed/'+YT_ID+'?autoplay=1&rel=0&playsinline=1&modestbranding=1" title="Packaging assembly line video" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe>';}
yt.addEventListener('click',playYT);yt.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();playYT();}});
[...tr.children].forEach(c=>{const n=c.cloneNode(true);n.setAttribute('aria-hidden','true');n.alt='';tr.appendChild(n);});
function dur(){tr.style.setProperty('--dur',Math.max(20,(tr.scrollWidth/2)/55)+'s');}dur();window.addEventListener('load',dur);window.addEventListener('resize',dur);
