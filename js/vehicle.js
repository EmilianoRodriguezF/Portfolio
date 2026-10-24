const YT_ID="2ncdQ5AG4fM";/* paste the YouTube video ID here */
const vid=document.getElementById('vid');
vid.addEventListener('click',()=>{if(!YT_ID)return;vid.outerHTML='<iframe class="vph" style="border:0;width:100%;aspect-ratio:4/5;border-style:solid" src="https://www.youtube-nocookie.com/embed/'+YT_ID+'?autoplay=1&rel=0&playsinline=1&modestbranding=1" title="Project video" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe>';});
const cv=document.getElementById('cv');cv.muted=true;const pl=()=>{const p=cv.play();if(p&&p.catch)p.catch(()=>{});};pl();document.addEventListener('visibilitychange',()=>{if(!document.hidden)pl();});
const tr=document.getElementById('track');[...tr.children].forEach(c=>{const n=c.cloneNode(true);n.setAttribute('aria-hidden','true');n.alt='';tr.appendChild(n);});
function dur(){tr.style.setProperty('--dur',Math.max(20,(tr.scrollWidth/2)/55)+'s');}dur();window.addEventListener('load',dur);window.addEventListener('resize',dur);
