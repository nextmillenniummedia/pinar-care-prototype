// Purpose-made editorial illustrations: no implied photos of actual residents or homes.
function scene(kind){
 const colors={older:['#e7d8bf','#ad643f'],lda:['#d0e4df','#347b79'],child:['#eedbd9','#b46678'],home:['#dce5d6','#54755b']};
 const [bg,accent]=colors[kind]||colors.home;
 const room='<rect x="35" y="50" width="235" height="230" rx="100" fill="#fff8df"/><path d="M152 50v230M35 170h235" stroke="'+bg+'" stroke-width="12"/><path d="M0 380Q300 340 600 400V600H0" fill="#c1c9ae"/><rect x="350" y="240" width="180" height="150" rx="35" fill="'+accent+'"/><path d="M380 390v40m120-40v40" stroke="#304e43" stroke-width="12"/>';
 const people='<circle cx="190" cy="260" r="37" fill="#bf8762"/><path d="M150 252q0-65 65-32l20 35q-45-32-85-3" fill="'+(kind==='older'?'#eee9da':'#293e35')+'"/><path d="M125 400q0-110 65-110t65 110" fill="#f4e8ce"/><path d="M150 400l-15 95m90-95 22 95" stroke="#3d5d53" stroke-width="30" stroke-linecap="round"/><circle cx="375" cy="270" r="33" fill="#e0af87"/><path d="M343 267q-5-60 55-33l16 37q-30-25-71-4" fill="#453c31"/><path d="M320 405q0-104 55-104t60 104" fill="'+accent+'"/><path d="M344 403l-10 90m65-90 17 90" stroke="#304b42" stroke-width="27" stroke-linecap="round"/><path d="M230 327l62 26 48-23" fill="none" stroke="#bf8762" stroke-width="19" stroke-linecap="round"/>';
 const house='<path d="M70 300L300 120l230 180" fill="#6b7967"/><rect x="105" y="290" width="390" height="210" rx="6" fill="#e2b99b"/><rect x="265" y="360" width="70" height="140" rx="32" fill="#476859"/><g fill="#fff4cd" stroke="#fff9eb" stroke-width="9"><path d="M145 335h65v65h-65zM390 335h65v65h-65z"/></g><path d="M280 500l-40 100h160l-80-100" fill="#efe3ca"/>';
 const svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><rect width="600" height="600" fill="'+bg+'"/>'+ (kind==='home'?house:room+people)+'<path d="M540 520V360m0 70q-60-15-40-60 40 0 40 60m0-20q60-15 40-65-40 0-40 65" fill="#63866a" stroke="#63866a" stroke-width="7"/><rect x="511" y="499" width="60" height="60" rx="8" fill="#bb7d59"/></svg>';
 return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
}
const imageThemes={hero:'older',older:'older',olderHero:'older',lda:'lda',ldaHero:'lda',child:'child',childHero:'child',garden:'home',interior:'home',hands:'lda'};
const baseHome=home;
function refine(){main.querySelectorAll('img').forEach(img=>{img.loading=img.closest('.hero,.segment-hero,.directory-hero,.about-hero')?'eager':'lazy';});}
const originalRender=render;
render=function(){originalRender();refine();};
window.removeEventListener('hashchange',originalRender);
window.addEventListener('hashchange',()=>{render();if(location.hash==='#services')document.getElementById('services')?.scrollIntoView();});
document.addEventListener('click',e=>{const a=e.target.closest('[data-scroll]');if(a){e.preventDefault();if(location.hash!=='#/')history.pushState(null,'','#/');render();document.getElementById(a.dataset.scroll)?.scrollIntoView();}if(!e.target.closest('.site-header'))closeMenus();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenus();});
render();
