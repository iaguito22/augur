import{m as q,n as P,a as F,b as M,e as z,r as L,p as K,j as U,d as c,i as I}from"./comun-wHHcaYzn.js";/* empty css                 */const g=document.getElementById("app");q("pickems");const[r,R]=await Promise.all([P(g,()=>F("pickems")),M()]),f=Object.fromEntries(r.equipos.map(s=>[s.id,s])),t=s=>s==null?"—":s>=.995?"99 %":s>0&&s<.005?"<1 %":`${Math.round(s*100)} %`,h=(s,a)=>R.campeones?.[s]?.nombre??a,S=s=>new Date(s).toLocaleDateString("es-ES",{day:"numeric",month:"long"}),A={top:"Top",jng:"Jungle",mid:"Mid",bot:"ADC",sup:"Support"},O={LPL:"r-lpl",LCK:"r-lck",LEC:"r-lec",LCS:"r-lcs",LCP:"r-lcp",CBLOL:"r-cbl"},m=(s,a="")=>`<span class="eq ${O[f[s]?.region]??""} ${a}" title="${c(f[s]?.nombre??s)}"><b>${c(s)}</b></span>`,y=(s,a="")=>`<span class="barra ${a}"><i style="width:${Math.round(s*100)}%"></i></span>`,E=[["playin","Play-In"],["swiss","Swiss"],["knockouts","Knockouts"],["bola","Bola de cristal"]];let $=new URLSearchParams(location.search).get("v");E.some(([s])=>s===$)||($="playin");g.innerHTML=`
  <header class="tl-cabecera">
    <div class="contenedor">
      <span class="etiqueta">Worlds 2026 · datos hasta el ${S(r.hasta)}</span>
      <h1 class="tl-titulo">Pick'Em</h1>
      <p class="tl-intro">Lo que yo pondría en los Pick'Ems y en la bola de cristal. Sale de simular Worlds ${r.iteraciones.toLocaleString("es-ES")} veces, partida a partida, con ${r.fuente.partidas.toLocaleString("es-ES")} partidas profesionales de este año.</p>
      <div class="tl-controles"><div class="segmentado" role="group" aria-label="Sección">
        ${E.map(([s,a])=>`<button data-v="${s}" aria-pressed="${s===$}">${a}</button>`).join("")}
      </div></div>
    </div>
  </header>
  <section class="contenedor pk-cuerpo"></section>
  <section class="contenedor w-metodo vidrio">
    <h2>Cómo se calcula y qué tan fiable es</h2>
    <ul>
      <li><b>Fuerza de los equipos:</b> una regresión logística sobre ${r.fuente.partidas.toLocaleString("es-ES")} partidas de las grandes ligas, el MSI, el EWC, el First Stand y la Americas Cup. Cada liga tiene su propio nivel y los torneos internacionales los conectan. Las partidas valen la mitad cada 75 días. Las ligas quedan ordenadas LCK, LPL, LEC, LCS, CBLOL, LCP. Eso sale de pocos duelos entre regiones, así que es la parte más incierta.</li>
      <li><b>Cada partida simulada:</b> sale un draft según la presencia prevista del parche (la misma que usa la página Worlds), cada jugador saca una línea de estadísticas de sus partidas, ganadas o perdidas según el resultado, y cada campeón saca sus muertes. De ahí sale la bola de cristal.</li>
      <li><b>Pick'Em de Play-In:</b> se enumeran los 64 desenlaces posibles del cuadro y se elige el que más puntos espera, contando 5 puntos por partido y 10 por la final. Supongo que un pick puntúa si ese equipo gana ese partido del cuadro.</li>
      <li><b>Swiss y Knockouts:</b> Riot los abre el 19/10 y el 1/11. Aquí se simulan con el sorteo de grupos oficial de la ronda 1 y emparejamientos al azar entre equipos con el mismo récord, sin repeticiones. Los Bo3 son las series que deciden pase o eliminación. El formato de picks que muestro es el de 2025, no el confirmado.</li>
      <li><b>Límites:</b> el CSV llega hasta el ${S(r.hasta)}; no hay datos de Worlds 2026 y los equipos pueden haber cambiado de parche. En la pregunta de campeones distintos se juntan dos rangos vecinos, y en el winrate y las muertes por campeón con mínimo 5 partidas casi todo es ruido.</li>
    </ul>
  </section>`;const j=g.querySelector(".pk-cuerpo"),b=(s,a,i,o,n,p,e="")=>`
  <div class="pk-m ${e}">
    <span class="pk-mt">${s}</span>
    ${[[a,o],[i,n]].map(([l,v])=>`<div class="pk-t ${l===p?"gana":""}">${m(l)}<span class="pk-tn">${c(f[l].nombre)}</span><span class="mono pk-tp">${t(v)}</span></div>`).join("")}
  </div>`;function B(){const s=r.playin,a=Object.fromEntries(s.partidos.map(u=>[u.k,u])),[i,o,n,p,e]=s.partidos.map(u=>u.pick),l=i==="FUR"?"MVK":"FUR",v=o==="C9"?"KC":"C9",w=n===i?o:i,d=(u,k)=>a[u].probabilidades[k]??0;return`
    <div class="pk-resumen vidrio aparece">
      <div><span class="sub">Puntos esperados</span><strong class="mono">${s.puntosEsperados.toFixed(1).replace(".",",")} <small>de ${s.puntosMax}</small></strong></div>
      <div><span class="sub">Quién se lleva el Play-In</span><div class="pk-gana">${Object.entries(s.ganador).sort((u,k)=>k[1]-u[1]).map(([u,k])=>`<span>${m(u)}<b class="mono">${t(k)}</b></span>`).join("")}</div></div>
    </div>
    <p class="pk-aviso">Se cierra el 15 de octubre. Este es el cuadro con mis 6 picks: el equipo resaltado es el que elijo y el porcentaje, la probabilidad de que gane ese partido.</p>
    <div class="pk-llaves vidrio aparece">
      <div class="br br-pi">
        <h4 class="br-h" style="grid-column:1/4">Upper Bracket</h4>
        <div class="br-c" style="grid-column:1;grid-row:2/4">${b("Upper Semifinals 1 · 5 pts","FUR","MVK",d("ubs1","FUR"),d("ubs1","MVK"),i,"s")}</div>
        <div class="br-c" style="grid-column:1;grid-row:4/6">${b("Upper Semifinals 2 · 5 pts","C9","KC",d("ubs2","C9"),d("ubs2","KC"),o,"s")}</div>
        <div class="br-c j" style="grid-column:2;grid-row:2/6">${b("Upper Finals · 5 pts",i,o,d("ubf",i),d("ubf",o),n,"s")}</div>
        <div class="br-c j gf" style="grid-column:3;grid-row:2/10">${b("Finals · 10 pts",n,e,d("gf",n),d("gf",e),s.partidos[5].pick)}</div>
        <h4 class="br-h" style="grid-column:1/3;grid-row:6">Lower Bracket</h4>
        <div class="br-c" style="grid-column:1;grid-row:7/9">${b("Lower Semifinals · 5 pts",l,v,d("lbs",l),d("lbs",v),p,"s")}</div>
        <div class="br-c j1" style="grid-column:2;grid-row:7/9">${b("Lower Finals · 5 pts",p,w,d("lbf",p),d("lbf",w),e,"s")}</div>
      </div>
      <p class="pk-nota">Lower Finals: el ganador de las Lower Semifinals contra el perdedor de las Upper Finals.</p>
    </div>`}function D(){const s=r.swiss.picks,a=(e,l)=>`<div class="pk-pk vidrio aparece"><h4>${l}</h4><div>${e.map(v=>m(v,"grande")).join("")}</div></div>`,i=r.equipos.filter(e=>e.swiss).sort((e,l)=>l.swiss.avanza*l.swiss.juega-e.swiss.avanza*e.swiss.juega),o=new Set([...s.w30,...s.avanzan,...s.l03]),n=r.equipos.filter(e=>e.swiss&&e.swiss.juega>=.99&&!o.has(e.id)).sort((e,l)=>e.swiss.avanza-l.swiss.avanza).map(e=>e.id),p=`El 16.º equipo sale del Play-In (${Object.entries(r.playin.ganador).sort((e,l)=>l[1]-e[1]).filter(([,e])=>e>=.005).map(([e,l])=>`${e} ${t(l)}`).join(", ")}) y está en la tabla de abajo.`;return`
    <p class="pk-aviso">Riot abre el Swiss el 19/10 (se cierra el 23/10), así que aún no se puede picar. Esto es lo que daría hoy: <b>el Play-In sigue sin decidir al 16.º equipo</b> y se promedia entre los cuatro posibles.</p>
    <div class="pk-picks pk-picks4">${a(s.w30,"3-0")}${a(s.avanzan,"Pasan (3-1 o 3-2)")}${a(n,"Eliminados (1-3 o 2-3)")}${a(s.l03,"0-3")}</div>
    <p class="pk-nota">Los 16 del Swiss: 2 + 6 pasan y 6 + 2 caen. ${c(p)}</p>
    <p class="pk-nota">${c(s.formato)}</p>
    <div class="pk-tabla vidrio aparece">
      <div class="cab"><span>Equipo</span><span>3-0</span><span>Pasa</span><span>0-3</span><span class="oculto-movil">Elo</span></div>
      ${i.map(e=>`<div class="fila">
        <span class="pk-eq">${m(e.id)}${e.swiss.juega<.99?`<small class="pj">juega ${t(e.swiss.juega)}</small>`:""}<span class="pk-n">${c(e.nombre)}${e.swiss.juega<.99?` <em>(solo juega si gana el Play-In, ${t(e.swiss.juega)}; los % valen si juega)</em>`:""}</span></span>
        <span>${y(e.swiss.w30,"bien")}<b class="mono">${t(e.swiss.w30)}</b></span>
        <span>${y(e.swiss.avanza)}<b class="mono">${t(e.swiss.avanza)}</b></span>
        <span>${y(e.swiss.l03,"mal")}<b class="mono">${t(e.swiss.l03)}</b></span>
        <span class="mono oculto-movil">${e.elo}</span></div>`).join("")}
    </div>
    <p class="pk-nota">${c(r.swiss.bo)}.</p>`}function W(){const s=r.knockouts.proyeccion,a=(o,n,p="")=>b(o,n.a,n.b,n.p,1-n.p,n.gana,p),i=r.equipos.filter(o=>o.ko.campeon>0).sort((o,n)=>n.ko.campeon-o.ko.campeon);return`
    <p class="pk-aviso">El cuadro de Knockouts se abre el 1/11, cuando el Swiss ya ha dicho quién pasa. Mientras tanto, esto es lo más probable hoy: el resaltado es el favorito de cada serie.</p>
    <div class="pk-llaves vidrio aparece">
      <div class="br br-ko">
        <h4 class="br-h r1" style="grid-column:1">Quarterfinals</h4><h4 class="br-h r2" style="grid-column:2">Semifinals</h4><h4 class="br-h r3" style="grid-column:3">Finals</h4>
        ${s.qf.map((o,n)=>`<div class="br-c r1" style="grid-column:1;grid-row:${2+n*2}/${4+n*2}">${a(`Quarterfinals ${n+1}`,o,"s")}</div>`).join("")}
        ${s.sf.map((o,n)=>`<div class="br-c j r2" style="grid-column:2;grid-row:${2+n*4}/${6+n*4}">${a(`Semifinals ${n+1}`,o,"s")}</div>`).join("")}
        <div class="br-c j r3" style="grid-column:3;grid-row:2/10">${a("Finals",s.final)}</div>
        <div class="br-campeon" style="grid-column:3;grid-row:8/10"><span class="sub">Campeón proyectado</span>${m(s.final.gana,"grande")}</div>
      </div>
      <p class="pk-nota">${c(s.aviso)}</p>
    </div>
    <div class="pk-tabla vidrio aparece">
      <div class="cab k"><span>Equipo</span><span>Cuartos</span><span>Semis</span><span>Final</span><span>Campeón</span></div>
      ${i.map(o=>`<div class="fila k"><span class="pk-eq">${m(o.id)}<span class="pk-n">${c(o.nombre)}</span></span>
        <span><b class="mono">${t(o.ko.qf)}</b></span><span><b class="mono">${t(o.ko.sf)}</b></span><span><b class="mono">${t(o.ko.f)}</b></span><span>${y(Math.min(1,o.ko.campeon*2))}<b class="mono">${t(o.ko.campeon)}</b></span></div>`).join("")}
    </div>`}function Q(){const s=(a,i,o)=>{const n=a.tipo==="ranking"||a.tipo==="ranking-equipos"?i.p1:i.p;let p="";a.tipo==="ranking"&&i.id?p=`<img src="${I.campeon(i.id)}" alt="" loading="lazy">`:a.tipo==="ranking"&&i.equipo?p=m(i.equipo):a.tipo==="ranking-equipos"&&(p=m(i.id));const e=a.tipo==="ranking"&&i.id?h(i.id,i.nombre):i.nombre,l=a.tipo==="ranking"||a.tipo==="ranking-equipos"?`<span class="pk-esp mono" title="Puntos esperados">${String(i.esperados).replace(".",",")} pts</span>`:"";return`<div class="pk-op ${o===0?"elegido":""}">${p}<span class="pk-n">${c(e)}${i.rol?` <em>${c(A[i.rol])}</em>`:""}</span>${y(n)}<span class="mono pk-p">${t(n)}</span>${l}</div>`};return`<p class="pk-aviso">Se cierra el 16 de octubre. En las preguntas con podio, el porcentaje es la probabilidad de quedar primero y los puntos son los esperados (50 el primero, 20 el segundo, 10 el tercero).</p>
    <div class="pk-bola">${r.bola.map(a=>{const i=a.puntos?`${a.puntos} pts`:"50 pts",o=a.tipo==="ranking"&&a.opciones[0]?.id?h(a.opciones[0].id,a.pick):a.pick;return`<article class="pk-q vidrio aparece"><span class="pk-num mono">${a.n} · ${i}</span><h3>${c(a.texto)}</h3>
        <div class="pk-pick">${c(o)}</div>
        <div class="pk-ops">${a.opciones.slice(0,a.tipo==="opciones"?6:4).map((n,p)=>s(a,n,p)).join("")}</div>
        ${a.media?`<p class="pk-nota">Media simulada: ${String(a.media).replace(".",",")} campeones distintos</p>`:""}</article>`}).join("")}</div>`}function C(){j.innerHTML={playin:B,swiss:D,knockouts:W,bola:Q}[$](),L(j)}g.querySelectorAll(".segmentado button").forEach(s=>s.addEventListener("click",()=>{$=s.dataset.v,history.replaceState(null,"",`${z.pickems()}?v=${$}`),g.querySelectorAll(".segmentado button").forEach(a=>a.setAttribute("aria-pressed",String(a===s))),C()}));C();L(g);const T=K();U().then(s=>{T.querySelector(".estado-datos").textContent=s.texto}).catch(()=>{});
