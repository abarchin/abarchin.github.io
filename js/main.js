const LINKS={linkedin:"https://linkedin.com/in/alvarobarchin",github:"https://github.com/abarchin",email:"alvarobarchin.work@gmail.com"};
const START=new Date(2021,3,1); // first engineering role
const D={
 en:{modes:["STATS","ITEMS","DATA"],subs:[["Status","Perks","Education"],null,["Quests","Local Map","Radio"]],
  role:"Software Engineer",summary:"Software Engineer with a focus on backend architecture and DevOps. Currently expanding my work with RAG systems and AI applications, with a proven track record of automating AWS production workflows and CI/CD pipelines.",
  perks:[["Downtime Down","-40%","System downtime cut with containerized Docker deployments.","Vodafone"],["Fast Draw","+30%","Faster API execution on secure Python and Java REST services.","Vodafone"],["Efficiency Expert","+15%","Operational efficiency gained with a full-stack employee management system.","Afronta"]],
  edu:{school:"Universidad de Alcalá",deg:"Computer Science",years:"2017 – 2022"},
  inv:{"AI":["Generative AI (RAG)","ChromaDB"],"Languages":["Python (FastAPI)","Kotlin","Java"],"Data":["Kafka","Redis"],"Infra":["AWS","Docker","Kubernetes","Jenkins (CI/CD)","Datadog"]},
  used:"Field use",listed:"Listed on CV",
  notes:{"Generative AI (RAG)":["Thoughtworks · internal knowledge base fed from Jira, GitHub and ServiceNow"],"ChromaDB":["Thoughtworks · vector store for the RAG system"],
    "Python (FastAPI)":["Thoughtworks · RAG service API","Vodafone · secure REST APIs with JWT/OAuth2"],"Kotlin":["Thoughtworks · automotive sales application"],
    "Java":["Vodafone · Spring Boot REST APIs","Afronta · POS microservices, JSF employee system"],"Kafka":["Thoughtworks · automotive sales application"],
    "AWS":["Thoughtworks · AI solution and automotive production path"],"Docker":["Vodafone · containerized deployments, -40% downtime"],
    "Jenkins (CI/CD)":["Vodafone · CI/CD pipelines"],"Datadog":["Thoughtworks · observability for the automotive app"]},
  active:"ACTIVE",done:"COMPLETE",now:"Present",
  map:{sub:"Madrid region · base of operations",note:"Open to hybrid and remote roles."},
  stations:[["Email","email"],["LinkedIn","linkedin"],["GitHub","github"],["CV (PDF)","cv"]],tune:"Tune a station to open the channel.",cv:"Download CV (PDF)",pdf:"cv/alvaro-barchin-rubio-resume.pdf",
  lvl:"LVL",yrs:"YRS",sound:"Sound effects",mute:"Mute sound effects",unmute:"Unmute sound effects"},
 es:{modes:["STATS","ITEMS","DATA"],subs:[["Estado","Logros","Formación"],null,["Misiones","Mapa local","Radio"]],
  role:"Ingeniero de Software",summary:"Ingeniero de Software centrado en arquitectura backend y DevOps. Actualmente expandiendo mi trabajo con sistemas RAG y aplicaciones de IA, con una trayectoria demostrada en la automatización de flujos de producción en AWS y pipelines de CI/CD.",
  perks:[["Cero Caídas","-40%","Downtime reducido con despliegues en contenedores Docker.","Vodafone"],["Desenfundado Rápido","+30%","Mayor velocidad de ejecución en APIs REST seguras en Python y Java.","Vodafone"],["Experto en Eficiencia","+15%","Eficiencia operativa con un sistema full-stack de gestión de empleados.","Afronta"]],
  edu:{school:"Universidad de Alcalá",deg:"Ingeniería Informática",years:"2017 – 2022"},
  inv:{"IA":["IA Generativa (RAG)","ChromaDB"],"Lenguajes":["Python (FastAPI)","Kotlin","Java"],"Datos":["Kafka","Redis"],"Infra":["AWS","Docker","Kubernetes","Jenkins (CI/CD)","Datadog"]},
  used:"Uso en campo",listed:"Incluido en el CV",
  notes:{"IA Generativa (RAG)":["Thoughtworks · base de conocimiento interna con datos de Jira y GitHub"],"ChromaDB":["Thoughtworks · base vectorial del sistema RAG"],
    "Python (FastAPI)":["Thoughtworks · API del servicio RAG","Vodafone · APIs REST seguras"],"Kotlin":["Thoughtworks · aplicación de la industria automotriz"],
    "Java":["Vodafone · APIs REST","Afronta · microservicios POS en Spring Boot"],"Kafka":["Thoughtworks · aplicación automotriz"],
    "AWS":["Thoughtworks · solución de IA y paso a producción"],"Docker":["Vodafone · despliegues en contenedores, -40% downtime"],
    "Jenkins (CI/CD)":["Vodafone · pipelines de CI/CD"],"Datadog":["Thoughtworks · observabilidad de la app automotriz"]},
  active:"ACTIVA",done:"COMPLETADA",now:"Actualidad",
  map:{sub:"Comunidad de Madrid · base de operaciones",note:"Abierto a puestos híbridos y remotos."},
  stations:[["Email","email"],["LinkedIn","linkedin"],["GitHub","github"],["CV (PDF)","cv"]],tune:"Sintoniza una emisora para abrir el canal.",cv:"Descargar CV (PDF)",pdf:"cv/alvaro-barchin-rubio-curriculum.pdf",
  lvl:"NVL",yrs:"AÑOS",sound:"Efectos de sonido",mute:"Silenciar efectos de sonido",unmute:"Activar efectos de sonido"}
};
D.en.jobs=[
 {co:"Thoughtworks",role:"Software Engineer",from:"Jan 2025",to:null,b:["Architected and led the end-to-end development of an AI RAG system using ChromaDB and FastAPI, integrating Jira, GitHub and ServiceNow into an internal knowledge base.","Deployed a full-stack AI solution with a Vercel web UI and AWS infrastructure, with automated security and code quality scans.","Engineered the production path for a major automotive sales application in Kotlin, using Datadog, Kafka and AWS for observability and debugging."]},
 {co:"Vodafone",role:"Backend Software Engineer",from:"Jan 2023",to:"Dec 2024",b:["Developed secure REST APIs in Python (FastAPI) and Java (Spring Boot) with JWT/OAuth2, improving execution speed by 30%.","Orchestrated containerized deployments with Docker, reducing system downtime by 40%.","Built observability stacks with Fluentd, Loki and Grafana for log parsing and real-time issue tracking.","Designed CI/CD pipelines in Jenkins and managed GitHub repositories for consistent delivery."]},
 {co:"Afronta Quality Solutions",role:"Backend Junior Software Developer",from:"Apr 2021",to:"Dec 2022",b:["Developed a microservices POS backend for a multinational retailer in Java (Spring Boot).","Led an Android scanning app from requirements analysis to deployment.","Raised operational efficiency 15% with a full-stack employee management system (Java JSF, MySQL)."]},
 {co:"Telefónica",role:"IT Support Technician",from:"Sep 2020",to:"Oct 2020",b:["Deployed and configured enterprise apps on Android tablets.","Managed inventory and led a deployment team to on-time completion."]}];
D.es.jobs=[
 {co:"Thoughtworks",role:"Software Engineer",from:"Ene 2025",to:null,b:["Diseñé y lideré el desarrollo integral de un sistema de IA RAG con ChromaDB y FastAPI, integrando datos de Jira y GitHub en una base de conocimiento interna.","Despliegue de una solución de IA full-stack con Vercel y AWS, con escaneos automáticos de seguridad y calidad de código.","Optimización del paso a producción de una aplicación de la industria automotriz en Kotlin, mejorando la observabilidad con Datadog y Kafka."]},
 {co:"Vodafone",role:"Backend Software Engineer",from:"Ene 2023",to:"Dic 2024",b:["Desarrollo de APIs REST seguras en Python y Java, mejorando la velocidad de ejecución un 30%.","Orquestación de despliegues en contenedores con Docker, reduciendo el downtime un 40%.","Flujos de observabilidad con Loki y Grafana para análisis de logs y seguimiento de incidencias en tiempo real.","Pipelines de CI/CD en Jenkins y gestión de repositorios en GitHub."]},
 {co:"Afronta Quality Solutions",role:"Backend Junior Software Developer",from:"Abr 2021",to:"Dic 2022",b:["Backend de microservicios para una aplicación POS de un minorista multinacional en Java (Spring Boot).","Lideré el desarrollo de una app de escaneo para Android, desde los requisitos hasta el despliegue.","Aumenté la eficiencia operativa un 15% con un sistema full-stack de gestión de empleados con MySQL."]},
 {co:"Telefónica",role:"Técnico de Soporte IT",from:"Sep 2020",to:"Oct 2020",b:["Configuración y despliegue de aplicaciones empresariales en tabletas Android.","Gestión de inventario y liderazgo del equipo de despliegue."]}];

let L="en",mode=0,sub=0,sel=0,raf=0,wheelPos=0;
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
const css=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim();
const subsOf=m=>D[L].subs[m]||Object.keys(D[L].inv);

const sounds=Object.fromEntries(["mode","tab","scroll","select","tuner","light_on","light_off"].map(name=>{
  const audio=new Audio(`assets/audio/ui_pipboy_${name}.wav`);audio.preload="auto";audio.volume=.35;return [name,audio];
}));
let soundEnabled=true,activeSound;
try{soundEnabled=localStorage.getItem("pipboy-sound")!=="off"}
catch(error){console.warn("Could not read sound preference:",error)}
function updateSoundButton(){const button=$("sound-toggle"),d=D[L];
  button.setAttribute("aria-pressed",String(soundEnabled));button.setAttribute("aria-label",d.sound);button.title=soundEnabled?d.mute:d.unmute;
}
function playSound(name){if(!soundEnabled)return;
  if(activeSound){activeSound.pause();activeSound.currentTime=0}
  activeSound=sounds[name];activeSound.currentTime=0;
  activeSound.play().catch(error=>{if(error.name!=="AbortError")console.warn(`Could not play ${name} sound:`,error)});
}
$("sound-toggle").onclick=()=>{
  soundEnabled=!soundEnabled;
  if(!soundEnabled&&activeSound){activeSound.pause();activeSound.currentTime=0}
  try{localStorage.setItem("pipboy-sound",soundEnabled?"on":"off")}
  catch(error){console.warn("Could not save sound preference:",error)}
  updateSoundButton();if(soundEnabled)playSound("select");
};

let bootTimer;
function finishBoot(){
  clearTimeout(bootTimer);
  const boot=$("boot");if(!boot)return;
  const restoreFocus=boot.contains(document.activeElement);
  boot.remove();
  for(const id of ["hud","main","subs"])$(id).inert=false;
  if(restoreFocus)$("sub-"+sub).focus({preventScroll:true});
}
$("boot-skip").onclick=()=>{finishBoot();playSound("select")};

// Fit the existing desktop UI into the reference casing without clipping its HUD.
new ResizeObserver(([entry])=>{
  $("unit").style.setProperty("--screen-scale",Math.min(1,entry.contentRect.width/680));
}).observe(document.querySelector(".bezel"));

// worn paint: dark grime speckle plus a few chips showing bare steel
(()=>{const c=document.createElement("canvas");c.width=c.height=256;const x=c.getContext("2d");
  for(let i=0;i<2200;i++){x.fillStyle=`rgba(0,0,0,${Math.random()*.18})`;x.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*2,1+Math.random()*2)}
  for(let i=0;i<7;i++){x.fillStyle=`rgba(154,166,168,${.15+Math.random()*.25})`;x.beginPath();const cx=Math.random()*256,cy=Math.random()*256;
    for(let k=0;k<6;k++){const a=k/6*Math.PI*2,r=1+Math.random()*3.5;x.lineTo(cx+Math.cos(a)*r*1.6,cy+Math.sin(a)*r)}x.fill()}
  document.documentElement.style.setProperty("--grime",`url(${c.toDataURL()})`)})();

function items(){const d=D[L];
  if(mode===0)return sub===1?d.perks.map(p=>p[0]):[];
  if(mode===1)return d.inv[subsOf(1)[sub]];
  if(sub===0)return d.jobs.map(j=>j.co);
  if(sub===2)return d.stations.map(s=>s[0]);
  return [];
}
function render(){const d=D[L],tabs=subsOf(mode);cancelAnimationFrame(raf);updateSoundButton();
  // Both three- and four-tab modes align with the fixed 25-degree scale marks.
  $("knob").style.transform=`rotate(${45+sub*150/Math.max(1,tabs.length-1)}deg)`;
  const y=(Date.now()-START)/(365.25*864e5),yrs=Math.floor(y),now=new Date();
  $("hud").innerHTML=`<span class="mode">${d.modes[mode]}</span><span class="hl"><span>${d.lvl} ${yrs}</span><span>XP <span class="xp"><i style="width:${Math.round(y%1*100)}%"></i></span></span><span class="yrs">${yrs} ${d.yrs}</span><span class="loc">ALCALÁ</span><span class="clock" id="clock">${now.toTimeString().slice(0,5)}</span><span class="lang" role="group" aria-label="Language"><button id="lang-en" aria-pressed="${L==="en"}" data-l="en">EN</button><button id="lang-es" aria-pressed="${L==="es"}" data-l="es">ES</button></span></span>`;
  $("btns").innerHTML=d.modes.map((m,i)=>`<div class="btn"><label for="btn-${i}">${m}</label><button id="btn-${i}" data-m="${i}" aria-pressed="${i===mode}" aria-label="${m}"></button></div>`).join("");
  $("subs").innerHTML=tabs.map((s,i)=>`<button role="tab" id="sub-${i}" data-s="${i}" aria-selected="${i===sub}">${esc(s)}</button>`).join("");
  $("sub-"+sub).scrollIntoView({block:"nearest",inline:"nearest"});
  const its=items();$("main").classList.toggle("wide",!its.length);
  $("list").innerHTML=its.map((t,i)=>`<button id="item-${i}" data-i="${i}" aria-current="${i===sel}">${esc(t)}<small>${mode===2&&sub===0&&!d.jobs[i].to?"◆":""}</small></button>`).join("");
  detail();
}
function detail(){const d=D[L],el=$("detail");
  if(mode===0){
    if(sub===0)el.innerHTML=`<h2>Álvaro Barchín Rubio</h2><p class="meta">${d.role} · Alcalá de Henares</p><div class="rule"></div><p>${esc(d.summary)}</p>`;
    if(sub===1){const p=d.perks[sel];el.innerHTML=`<div class="big">${p[1]}</div><h2>${esc(p[0])}</h2><p class="meta">${p[3]}</p><div class="rule"></div><p>${esc(p[2])}</p>`}
    if(sub===2)el.innerHTML=`<h2>${d.edu.school}</h2><p class="meta">${d.edu.deg} · ${d.edu.years}</p><div class="rule"></div><ul class="obj"><li class="done">${d.edu.deg}</li></ul>`;
  }
  if(mode===1){const name=items()[sel],notes=d.notes[name];
    el.innerHTML=`<h2>${esc(name)}</h2><p class="meta">${subsOf(1)[sub]}</p><div class="rule"></div><h3>${notes?d.used:d.listed}</h3>${notes?`<ul class="obj">${notes.map(x=>`<li class="done">${esc(x)}</li>`).join("")}</ul>`:`<p class="meta">—</p>`}`}
  if(mode===2){
    if(sub===0){const j=d.jobs[sel];el.innerHTML=`<h2>${esc(j.co)}</h2><p class="meta">${esc(j.role)} · ${j.from} – ${j.to||d.now} · ${j.to?d.done:d.active}</p><div class="rule"></div><ul class="obj">${j.b.map(b=>`<li class="${j.to?"done":""}">${esc(b)}</li>`).join("")}</ul>`}
    if(sub===1){el.innerHTML=`<h2>Alcalá de Henares</h2><p class="meta">${d.map.sub} · 40.48°N 3.36°W</p><canvas class="full" id="map" width="640" height="360"></canvas><p class="meta" style="margin-top:8px">${d.map.note}</p>`;drawMap()}
    if(sub===2){const [label,k]=d.stations[sel];
      const link=k==="email"?`<a href="mailto:${LINKS.email}">${LINKS.email}</a>`:k==="cv"?`<a href="${d.pdf}" download>${d.cv}</a>`:`<a href="${LINKS[k]}" target="_blank" rel="noopener">${LINKS[k].replace("https://","")}</a>`;
      el.innerHTML=`<h2>${label}</h2><p class="meta">${d.tune}</p><canvas class="full" id="osc" width="640" height="360"></canvas><p style="margin-top:10px;font-size:20px">${link}</p>`;drawOsc(sel)}
  }
}
function drawMap(){const c=$("map"),x=c.getContext("2d"),G=css("--phos"),Dm=css("--phos-dim");
  x.fillStyle="#031207";x.fillRect(0,0,640,360);x.strokeStyle="rgba(61,255,122,.12)";x.lineWidth=1;
  for(let i=0;i<=640;i+=40){x.beginPath();x.moveTo(i,0);x.lineTo(i,360);x.stroke()}for(let i=0;i<=360;i+=40){x.beginPath();x.moveTo(0,i);x.lineTo(640,i);x.stroke()}
  // ~1px = 100m. Madrid at (170,230), Alcalá ~30km ENE at (460,160)
  x.setLineDash([6,6]);x.strokeStyle=Dm;x.lineWidth=2;x.beginPath();x.moveTo(380,0);x.bezierCurveTo(420,80,430,130,500,180);x.bezierCurveTo(560,220,600,280,640,310);x.stroke(); // Henares
  x.setLineDash([]);x.strokeStyle=G;x.lineWidth=3;x.beginPath();x.moveTo(170,230);x.lineTo(300,195);x.lineTo(460,160);x.lineTo(640,100);x.stroke(); // A-2
  x.lineWidth=2;x.beginPath();x.arc(170,230,46,0,7);x.stroke(); // M-30 ring
  x.fillStyle=G;x.font="20px 'Share Tech Mono', monospace";x.fillText("MADRID",120,300);x.fillText("A-2",300,185);
  x.fillStyle=Dm;x.fillText("RÍO HENARES",470,232);
  x.fillStyle=G;x.font="26px VT323, monospace";x.fillText("ALCALÁ DE HENARES",400,130);
  let t=0;const pulse=()=>{x.fillStyle="#031207";x.fillRect(430,140,60,40);
    x.strokeStyle=G;x.lineWidth=2;const r=6+((t%60)/60)*14;x.globalAlpha=1-(t%60)/60;x.beginPath();x.arc(460,160,r,0,7);x.stroke();x.globalAlpha=1;
    x.fillStyle=G;x.beginPath();x.moveTo(460,152);x.lineTo(468,160);x.lineTo(460,168);x.lineTo(452,160);x.closePath();x.fill();
    t++;if(!reduce)raf=requestAnimationFrame(pulse)};pulse();
}
function drawOsc(k){const c=$("osc"),x=c.getContext("2d"),G=css("--phos");let t=0;const f=[2,3.5,5,1.4][k],a=[.6,.45,.35,.7][k];
  const frame=()=>{x.fillStyle="rgba(3,18,7,.45)";x.fillRect(0,0,640,360);x.strokeStyle="rgba(61,255,122,.12)";x.lineWidth=1;
    for(let i=0;i<=640;i+=64){x.beginPath();x.moveTo(i,0);x.lineTo(i,360);x.stroke()}for(let i=0;i<=360;i+=45){x.beginPath();x.moveTo(0,i);x.lineTo(640,i);x.stroke()}
    x.strokeStyle=G;x.lineWidth=3;x.shadowColor=G;x.shadowBlur=10;x.beginPath();
    for(let i=0;i<=640;i+=3){const u=i/640,y=180+Math.sin(u*Math.PI*2*f+t)*a*135*Math.sin(u*Math.PI)+Math.sin(u*40+t*3)*6;i?x.lineTo(i,y):x.moveTo(i,y)}
    x.stroke();x.shadowBlur=0;t+=.06;if(!reduce)raf=requestAnimationFrame(frame)};frame();
}
function setMode(m){finishBoot();mode=(m+3)%3;sub=0;sel=0;render();playSound("mode")}
function setSub(s){finishBoot();const n=subsOf(mode).length;sub=(s+n)%n;sel=0;render();playSound("tab")}
function setSel(i,dir=1,sound="scroll"){finishBoot();const n=items().length;if(!n)return;sel=(i+n)%n;wheelPos+=dir*10;$("wheel").style.backgroundPosition=`0 0,0 ${wheelPos}px`;render();$("item-"+sel)?.focus({preventScroll:true});playSound(mode===2&&sub===2?"tuner":sound)}
$("btns").addEventListener("click",e=>{const b=e.target.closest("button[data-m]");if(b)setMode(+b.dataset.m)});
$("subs").addEventListener("click",e=>{const b=e.target.closest("button[data-s]");if(b)setSub(+b.dataset.s)});
$("hud").addEventListener("click",e=>{const b=e.target.closest("button[data-l]");if(b){L=b.dataset.l;document.documentElement.lang=L;render();playSound("select")}});
$("list").addEventListener("click",e=>{const b=e.target.closest("button[data-i]");if(b)setSel(+b.dataset.i,1,"select")});
$("detail").addEventListener("click",e=>{if(e.target.closest("a"))playSound("select")});
$("knob").onclick=()=>setSub(sub+1);
$("wheel").onclick=()=>setSel(sel+1);
$("wheel").addEventListener("wheel",e=>{e.preventDefault();const d=Math.sign(e.deltaY);if(d)setSel(sel+d,d)},{passive:false});
$("flash").onclick=e=>{finishBoot();const on=e.currentTarget.getAttribute("aria-pressed")!=="true";e.currentTarget.setAttribute("aria-pressed",on);$("unit").classList.toggle("lit",on);playSound(on?"light_on":"light_off")};
addEventListener("keydown",e=>{if(e.target.closest("a"))return;const k=e.key;
  if(k==="Escape"){finishBoot();return}
  if(k==="1"||k==="2"||k==="3")setMode(+k-1);if(k==="ArrowRight")setSub(sub+1);if(k==="ArrowLeft")setSub(sub-1);
  if(k==="ArrowDown"){e.preventDefault();setSel(sel+1)}if(k==="ArrowUp"){e.preventDefault();setSel(sel-1,-1)}});
setInterval(()=>{const c=$("clock");if(c)c.textContent=new Date().toTimeString().slice(0,5)},10000);
render();
if(reduce)finishBoot();else{$("boot").classList.add("booting");bootTimer=setTimeout(finishBoot,2000)}
