import{m as g,n as y,a as b,d as i,o as S,I as L,e as m,p as q,j as E,i as u,c as C,r as M,f as j,R as D,h as I}from"./comun-wHHcaYzn.js";/* empty css                 */const n=document.getElementById("app");g("tierlist");const d=await y(n,()=>b("resumen")),A=(()=>{try{return localStorage.getItem("potentialdamage:rol")}catch{return null}})();let o=new URLSearchParams(location.search).get("rol")??A??"MIDDLE";d.tier[o]||(o="MIDDLE");const z={S:"Lo mejor del parche",A:"Muy buena elección",B:"Cumplen bien",C:"Algo flojos ahora",D:"Mejor otro día"};n.innerHTML=`
  <header class="tl-cabecera">
    <div class="tl-fondo"></div>
    <div class="contenedor">
      <span class="etiqueta">Parche ${i(d.parche)}</span>
      <h1 class="tl-titulo">Tier list</h1>
      <p class="tl-intro">Cada nota junta lo que dicen los números del parche y lo que pasa en partidas reales. ${matchMedia("(hover: hover)").matches?"Pasa el ratón por un campeón para ver por qué está ahí.":"Toca un campeón para ver su ficha y por qué está ahí."}</p>
      <div class="tl-controles">
        <div class="segmentado" role="group" aria-label="Rol">
          ${S.map(([e,a])=>`<button data-rol="${e}" aria-pressed="${e===o}">${L[e]}${a}</button>`).join("")}
        </div>
        <div class="filtro"><input type="search" placeholder="Filtrar…" aria-label="Filtrar campeones"></div>
      </div>
    </div>
  </header>
  <section class="contenedor"><div class="tiers"></div>
    <div class="leyenda">
      <span><i></i> Sobre todo teoría (aún pocas partidas)</span>
      <span style="color:var(--bien)">▲ mejora con el parche</span>
      <span style="color:var(--mal)">▼ empeora con el parche</span>
    </div>
  </section>
  <div class="flotante"></div>`;const p=n.querySelector(".tiers"),l=n.querySelector(".flotante"),v=n.querySelector(".filtro input");function h(){const e=d.tier[o]??[],a=e[0],r=n.querySelector(".tl-fondo");a&&(r.classList.add("saliendo"),setTimeout(()=>{r.style.backgroundImage=`url('${u.splash(a.campeon)}')`,r.classList.remove("saliendo")},250),C(u.splash(a.campeon))),p.innerHTML=["S","A","B","C","D"].map(t=>{const c=e.filter(s=>s.tier===t);return`<div class="fila-tier vidrio aparece" data-t="${t}">
      <div class="lado"><div class="letra">${t}</div><span>${z[t]}</span></div>
      <div class="caras-tier">${c.map(s=>`
        <a class="cara ${s.peso.potencial>.75?"teoria":""}" href="${m.campeon(s.campeon,o)}" data-c="${s.campeon}">
          <img src="${u.campeon(s.campeon)}" alt="" loading="lazy">
          <span class="n">${i(s.nombre)}</span>
          <span class="v">${s.nota}${s.sube?'<span class="sube">▲</span>':s.baja?'<span class="baja">▼</span>':""}</span>
        </a>`).join("")||'<span class="vacio">Nadie aquí</span>'}</div>
    </div>`}).join(""),f(),M(p),p.querySelectorAll(".cara").forEach(t=>{t.addEventListener("mouseenter",()=>R(t)),t.addEventListener("mouseleave",()=>l.classList.remove("visible"))})}function R(e){const a=d.tier[o].find($=>$.campeon===e.dataset.c);if(!a)return;const r=Math.round(a.peso.real*100);l.innerHTML=`
    <div class="cab">${j(a.nota)}<div><h3>${i(a.nombre)}</h3><span class="sub" style="font-size:13px">Tier ${a.tier} · ${i(D[o])}</span></div></div>
    ${a.razon?`<p class="razon"><b>${i(a.razon)}</b></p>`:""}
    <div class="peso-linea">${r<5?"Solo números del parche (sin partidas aún)":`${100-r} % números · ${r} % partidas (${a.n.toLocaleString("es-ES")})`}<div class="barra"><i style="width:${Math.max(3,100-r)}%"></i></div></div>
    <span class="sub" style="font-size:12px">Clic para ver sus builds</span>`,I(l);const t=e.getBoundingClientRect(),c=320;let s=t.right+12;s+c>innerWidth-12&&(s=t.left-c-12),l.style.left=`${Math.max(12,s)}px`,l.style.top=`${Math.max(80,Math.min(innerHeight-260,t.top-20))}px`,l.classList.add("visible")}function f(){const e=v.value.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().trim();p.querySelectorAll(".cara").forEach(a=>{const r=a.querySelector(".n").textContent.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();a.classList.toggle("apagada",!!e&&!r.includes(e))})}v.addEventListener("input",f);n.querySelectorAll(".segmentado button").forEach(e=>e.addEventListener("click",()=>{o=e.dataset.rol;try{localStorage.setItem("potentialdamage:rol",o)}catch{}history.replaceState(null,"",m.tierlist(o)),n.querySelectorAll(".segmentado button").forEach(a=>a.setAttribute("aria-pressed",String(a===e))),h()}));h();const T=q();E().then(e=>{T.querySelector(".estado-datos").textContent=e.texto}).catch(()=>{});
