const CV = {
  pdf:{en:"cv/alvaro-barchin-rubio-resume.pdf",es:"cv/alvaro-barchin-rubio-curriculum.pdf"},
  name:"ÁLVARO BARCHÍN RUBIO",
  links:{linkedin:"https://linkedin.com/in/alvarobarchin",github:"https://github.com/alvarikoke99",email:"alvarobarchin.work@gmail.com"},
  en:{
    role:"Software Engineer", loc:"Alcalá de Henares, Madrid",
    summary:"Software Engineer with a focus on backend architecture and DevOps. Currently expanding my work with RAG systems and AI applications, with a proven track record of automating AWS production workflows and CI/CD pipelines.",
    now:"NOW",
    jobs:[
      {co:"THOUGHTWORKS",role:"Software Engineer",from:"2025-01",to:null,b:[
        "Architected and led the end-to-end development of an AI RAG system using ChromaDB and FastAPI, integrating data from Jira, GitHub and ServiceNow into an internal knowledge base.",
        "Deployed a full-stack AI solution with a Vercel web UI and AWS infrastructure, with automated security and code quality scans.",
        "Engineered the production path for a major automotive sales application in Kotlin, using Datadog, Kafka and AWS to improve observability and debugging."]},
      {co:"VODAFONE",role:"Backend Software Engineer",from:"2023-01",to:"2024-12",b:[
        "Developed secure REST APIs in Python (FastAPI) and Java (Spring Boot) with JWT/OAuth2, cutting execution time by 30%.",
        "Orchestrated containerized deployments with Docker, reducing system downtime by 40%.",
        "Built observability stacks with Fluentd, Loki and Grafana for log parsing and real-time issue tracking.",
        "Designed CI/CD pipelines in Jenkins and managed GitHub repositories for consistent delivery."]},
      {co:"AFRONTA QUALITY SOLUTIONS",role:"Backend Junior Software Developer",from:"2021-04",to:"2022-12",b:[
        "Developed a microservices POS backend for a multinational retailer in Java (Spring Boot).",
        "Led an Android scanning app from requirements analysis to deployment.",
        "Raised operational efficiency 15% with a full-stack employee management system (Java JSF, MySQL)."]},
      {co:"TELEFÓNICA",role:"IT Support Technician",from:"2020-09",to:"2020-10",b:[
        "Deployed and configured enterprise apps on Android tablets.",
        "Managed inventory and led a deployment team to on-time completion."]}],
    edu:{school:"UNIVERSIDAD DE ALCALÁ",deg:"Computer Science",years:"2017 – 2022"},
    skills:{"ai/":["Generative AI (RAG)","ChromaDB"],"lang/":["Python (FastAPI)","Kotlin","Java"],"data/":["Kafka","Redis"],"infra/":["AWS","Docker","Kubernetes","Jenkins (CI/CD)","Datadog"]},
    t:{help:"Available commands:",cmds:{whoami:"who is this",experience:"work history",skills:"tech stack",education:"degree",contact:"get in touch",cv:"download the PDF",lang:"lang es | lang en",clear:"clear screen"},
       notfound:c=>`${c}: command not found. Type 'help'.`,boot:"Memory test",ok:"OK",loading:"Loading profile",hint:"Type a command or press a key below.",
       cvmsg:"Download my CV (PDF):",langset:"Language set to English.",sudo:"Permission granted. Contact channel opened:",session:"guest session"}
  },
  es:{
    role:"Ingeniero de Software", loc:"Alcalá de Henares, Madrid",
    summary:"Ingeniero de Software centrado en arquitectura backend y DevOps. Actualmente expandiendo mi trabajo con sistemas RAG y aplicaciones de IA, con una trayectoria demostrada en la automatización de flujos de producción en AWS y pipelines de CI/CD.",
    now:"HOY",
    jobs:[
      {co:"THOUGHTWORKS",role:"Software Engineer",from:"2025-01",to:null,b:[
        "Diseñé y lideré el desarrollo integral de un sistema de IA RAG con ChromaDB y FastAPI, integrando datos de Jira y GitHub en una base de conocimiento interna.",
        "Despliegue de una solución de IA full-stack con Vercel y AWS, con escaneos automáticos de seguridad y calidad de código.",
        "Optimización del paso a producción de una aplicación de la industria automotriz en Kotlin, mejorando la observabilidad con Datadog y Kafka."]},
      {co:"VODAFONE",role:"Backend Software Engineer",from:"2023-01",to:"2024-12",b:[
        "Desarrollo de APIs REST seguras en Python y Java, mejorando la velocidad de ejecución un 30%.",
        "Orquestación de despliegues en contenedores con Docker, reduciendo el downtime un 40%.",
        "Flujos de observabilidad con Loki y Grafana para análisis de logs y seguimiento de incidencias en tiempo real.",
        "Pipelines de CI/CD en Jenkins y gestión de repositorios en GitHub."]},
      {co:"AFRONTA QUALITY SOLUTIONS",role:"Backend Junior Software Developer",from:"2021-04",to:"2022-12",b:[
        "Backend de microservicios para una aplicación POS de un minorista multinacional en Java (Spring Boot).",
        "Lideré el desarrollo de una app de escaneo para Android, desde los requisitos hasta el despliegue.",
        "Aumenté la eficiencia operativa un 15% con un sistema full-stack de gestión de empleados con MySQL."]},
      {co:"TELEFÓNICA",role:"Técnico de Soporte IT",from:"2020-09",to:"2020-10",b:[
        "Configuración y despliegue de aplicaciones empresariales en tabletas Android.",
        "Gestión de inventario y liderazgo del equipo de despliegue."]}],
    edu:{school:"UNIVERSIDAD DE ALCALÁ",deg:"Ingeniería Informática",years:"2017 – 2022"},
    skills:{"ia/":["IA Generativa (RAG)","ChromaDB"],"lenguajes/":["Python (FastAPI)","Kotlin","Java"],"datos/":["Kafka","Redis"],"infra/":["AWS","Docker","Kubernetes","Jenkins (CI/CD)","Datadog"]},
    t:{help:"Comandos disponibles:",cmds:{whoami:"quién es",experience:"experiencia",skills:"tecnologías",education:"formación",contact:"contacto",cv:"descargar el PDF",lang:"lang es | lang en",clear:"limpiar pantalla"},
       notfound:c=>`${c}: comando no encontrado. Escribe 'help'.`,boot:"Test de memoria",ok:"OK",loading:"Cargando perfil",hint:"Escribe un comando o pulsa una tecla.",
       cvmsg:"Descarga mi CV (PDF):",langset:"Idioma: español.",sudo:"Permiso concedido. Canal de contacto abierto:",session:"sesión invitado"}
  }
};
let L="en";
const out=document.getElementById("out"),cmd=document.getElementById("cmd");
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
const esc=s=>s.replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
const line=(html="",cls="")=>{const p=document.createElement("p");if(cls)p.className=cls;p.innerHTML=html;out.appendChild(p);out.scrollTop=out.scrollHeight;return p};
const wrap=(s,indent,w)=>{const words=s.split(" ");let rows=[],cur="";for(const x of words){if((cur+" "+x).trim().length>w){rows.push(cur);cur=x}else cur=(cur+" "+x).trim()}rows.push(cur);return rows.map((r,i)=>(i?" ".repeat(indent):"")+r).join("\n")};
const cols=()=>Math.max(28,Math.floor(out.clientWidth/(parseFloat(getComputedStyle(out).fontSize)*.5))-4);

const C={
  help(){const d=CV[L].t;line(d.help,"hot");for(const[k,v]of Object.entries(d.cmds))line(`  <a href="#" data-run="${k}">${k.padEnd(12)}</a><span class="dim">${v}</span>`)},
  whoami(){const d=CV[L];
    line(`<span class="head">${CV.name}</span>`);
    line(`${d.role} <span class="dim">·</span> ${d.loc}`);
    line(esc(wrap(d.summary,0,Math.min(cols(),72))),"");
  },
  experience(){const d=CV[L],w=Math.min(cols(),76);
    for(const j of d.jobs){
      line(`<span class="head">${j.co}</span>`);
      line(`<span class="hot">${j.role}</span>  <span class="dim">[${j.from} → ${j.to||d.now}]</span>`);
      for(const b of j.b)line(esc("  > "+wrap(b,4,w-4)));
    }},
  skills(){const d=CV[L];line(`<span class="dim">$ tree ~/skills</span>`);
    const dirs=Object.entries(d.skills);
    dirs.forEach(([dir,items],i)=>{const last=i===dirs.length-1;line(`${last?"└──":"├──"} <span class="hot">${dir}</span>`);
      items.forEach((s,k)=>line(`${last?"    ":"│   "}${k===items.length-1?"└──":"├──"} ${esc(s)}`))});
    line(`<span class="dim">${dirs.length} directories, ${dirs.reduce((a,[,x])=>a+x.length,0)} files</span>`)},
  education(){const e=CV[L].edu;line(`<span class="head">${e.school}</span>`);line(`${e.deg}  <span class="dim">[${e.years}]</span>`)},
  contact(){const l=CV.links;line(`  cv        <a href="${CV.pdf[L]}" download>${CV.pdf[L].split("/").pop()}</a>`);
    line(`  email     <a href="mailto:${l.email}">${l.email}</a>`);
    line(`  linkedin  <a href="${l.linkedin}" target="_blank" rel="noopener">linkedin.com/in/alvarobarchin</a>`);
    line(`  github    <a href="${l.github}" target="_blank" rel="noopener">github.com/alvarikoke99</a>`)},
  cv(){const f=CV.pdf[L];line(CV[L].t.cvmsg,"dim");line(`  <a href="${f}" download>${f.split("/").pop()}</a>`)},
  clear(){out.innerHTML=""},
  lang(a){if(a[0]==="es"||a[0]==="en")setLang(a[0]);else line("usage: lang es | lang en","dim")},
  sudo(a){if(a.join(" ").includes("hire")){line(CV[L].t.sudo,"hot");C.contact()}else line("guest is not in the sudoers file. This incident will be reported.","dim")},
  exit(){line("logout","dim");setTimeout(()=>{out.innerHTML="";boot()},700)}
};
const alias={exp:"experience",work:"experience",about:"whoami",edu:"education",ls:"help",man:"help","?":"help",stack:"skills"};
// each command gets the screen to itself instead of appending
function run(raw,echo=true){
  const [name,...args]=raw.trim().split(/\s+/);if(!name)return;
  booting=false;out.innerHTML="";
  const key=alias[name.toLowerCase()]||name.toLowerCase();
  if(key!=="lang")last=raw;
  document.querySelectorAll("#keys button").forEach(b=>b.setAttribute("aria-pressed",b.id==="key-"+key));
  if(echo)line(`<span class="hot">guest@barchin:~$</span> ${esc(raw)}`);
  const fn=C[alias[name.toLowerCase()]||name.toLowerCase()];
  fn?fn(args):line(esc(CV[L].t.notfound(name)));
  line("");
}
function setLang(l){L=l;
  document.querySelectorAll(".lang button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.l===l));
  document.documentElement.lang=l;document.getElementById("sess").textContent=CV[l].t.session;
  keys();run(last);
}
function keys(){const k=document.getElementById("keys");k.innerHTML="";
  ["whoami","experience","skills","education","contact","cv","help"].forEach((c,i)=>{const b=document.createElement("button");b.type="button";b.id="key-"+c;
    b.innerHTML=`<span class="fn">F${i+1}</span>${c}`;b.onclick=()=>{run(c);if(matchMedia("(pointer:fine)").matches)cmd.focus({preventScroll:true})};k.appendChild(b)});
  const badge=document.createElement("span");badge.className="badge";badge.innerHTML=`<span class="led"></span>ABR-9000 MONOCHROME`;k.appendChild(badge);
}
document.getElementById("form").addEventListener("submit",e=>{e.preventDefault();const v=cmd.value;cmd.value="";hist.unshift(v);hi=-1;run(v)});
const hist=[];let hi=-1;
cmd.addEventListener("keydown",e=>{if(e.key==="ArrowUp"&&hist[hi+1]!==undefined){cmd.value=hist[++hi];e.preventDefault()}if(e.key==="ArrowDown"){hi=Math.max(-1,hi-1);cmd.value=hi<0?"":hist[hi]}});
addEventListener("keydown",e=>{const m=e.key.match(/^F([1-7])$/);if(m){e.preventDefault();document.querySelectorAll("#keys button")[m[1]-1].click()}});
out.addEventListener("click",e=>{const a=e.target.closest("[data-run]");if(a){e.preventDefault();run(a.dataset.run)}});
document.querySelectorAll(".lang button").forEach(b=>b.onclick=()=>setLang(b.dataset.l));
setInterval(()=>document.getElementById("clock").textContent=new Date().toTimeString().slice(0,8),1000);

const sleep=ms=>new Promise(r=>setTimeout(r,reduce?0:ms));
async function type(s){const p=line(`<span class="hot">guest@barchin:~$</span> `);for(const ch of s){p.innerHTML+=ch;await sleep(55);if(!booting)return}await sleep(150)}
let booting=true,last="whoami";
async function boot(){booting=true;
  const t=CV[L].t;
  line("ABR BIOS v4.51PG  (C) 1999 Barchín Rubio Systems","dim");
  const m=line(`${t.boot}: 0K`,"dim");
  for(let k=0;k<=640;k+=64){m.textContent=`${t.boot}: ${k}K`;await sleep(40);if(!booting)return}
  m.textContent+=" "+t.ok;
  const ld=line(`${t.loading} `,"dim");for(let i=0;i<12;i++){ld.textContent+="█";await sleep(30);if(!booting)return}
  line("");
  await type("whoami");if(!booting)return;C.whoami();line("");
  line(t.hint,"dim");line("");
}
keys();boot();
