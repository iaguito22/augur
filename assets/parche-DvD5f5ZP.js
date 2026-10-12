import{m as g,n as j,a as f,i as r,d as o,c as y,r as q,R as $,e as m,k as E}from"./comun-wHHcaYzn.js";const c=document.getElementById("app");g("parche");const A=await j(c,()=>f("resumen")),e=A.cambiosParche,h=a=>`${a>=0?"+":"−"}${E(Math.abs(a),1)}`,v=a=>a>0?'<i class="sube">▲</i>':a<0?'<i class="baja">▼</i>':'<i class="neutro">•</i>',d={1:["Mejora","sube"],"-1":["Empeora","baja"],0:["Ajuste","neutro"]};if(!e)c.innerHTML='<section class="contenedor pa-vacio"><h1 class="pa-titulo">Cambios del parche</h1><p class="pa-intro">Aún no hay datos de cambios para este parche: se calculan al terminar la simulación.</p></section>';else{const a=e.campeones[0]??e.arrastrados[0];c.innerHTML=`
    <header class="pa-cabecera">
      <div class="pa-fondo" ${a?`style="background-image:url('${r.splash(a.campeon)}')"`:""}></div>
      <div class="contenedor">
        <span class="etiqueta">Parche ${o(e.parche)}${e.anterior?` · frente al ${o(e.anterior)}`:""}</span>
        <h1 class="pa-titulo">Cambios del parche</h1>
        <p class="pa-intro">Lo que ha tocado Riot, sacado de los datos del juego, y cuánto cambia cada uno en la simulación: el mismo cálculo de las builds, con los números de antes y de ahora.</p>
        <div class="pa-cifras">
          <span><b>${e.campeones.length}</b> campeones tocados</span>
          <span><b>${e.objetos.length}</b> objetos tocados</span>
          <span><b>${e.arrastrados.length}</b> cambian sin que les toquen</span>
        </div>
        <div class="segmentado pa-filtro" role="group" aria-label="Filtrar">
          <button data-f="todos" aria-pressed="true">Todos</button>
          <button data-f="1" aria-pressed="false">Mejoran</button>
          <button data-f="-1" aria-pressed="false">Empeoran</button>
        </div>
      </div>
    </header>
    <section class="contenedor pa-seccion">
      <h2>Campeones</h2>
      <div class="pa-rejilla" id="campeones">${e.campeones.map(M).join("")||'<p class="vacio">Ningún campeón tocado en este parche.</p>'}</div>
    </section>
    ${e.arrastrados.length?`<section class="contenedor pa-seccion">
      <h2>Cambian sin que les toquen</h2>
      <p class="pa-sub">No tienen cambios propios, pero con los objetos de este parche su build rinde distinto.</p>
      <div class="pa-chips" id="arrastrados">${e.arrastrados.map(C).join("")}</div>
    </section>`:""}
    <section class="contenedor pa-seccion">
      <h2>Objetos</h2>
      <div class="pa-rejilla" id="objetos">${e.objetos.map(N).join("")||'<p class="vacio">Ningún objeto tocado en este parche.</p>'}</div>
    </section>`,a&&y(r.splash(a.campeon));for(const i of c.querySelectorAll(".pa-filtro button"))i.addEventListener("click",()=>{for(const t of c.querySelectorAll(".pa-filtro button"))t.setAttribute("aria-pressed",String(t===i));for(const t of c.querySelectorAll("[data-signo]"))t.hidden=i.dataset.f!=="todos"&&t.dataset.signo!==i.dataset.f});q(c)}function M(a){const[i,t]=d[a.signo]??d[0],l=new Map;for(const s of a.cambios){const p=s.donde==="Base"?"Estadísticas":s.donde?`${s.donde}${s.habilidad?` · ${s.habilidad}`:""}`:"General";l.has(p)||l.set(p,[]),l.get(p).push(s)}const n=[...l].map(([s,p])=>`<div class="pa-grupo"><span class="pa-donde">${o(s)}</span>
    <ul>${p.map(b=>`<li>${v(b.signo)}<span>${o(b.texto)}</span></li>`).join("")}</ul></div>`).join(""),u=a.roles.filter(s=>s.delta!=null).map(s=>`<span class="${s.delta>.002?"sube":s.delta<-.002?"baja":"neutro"}">${o($[s.rol]??s.rol)} ${Math.abs(s.delta)<.002?"≈":h(s.delta)}</span>`).join("");return`<a class="tarjeta pa-tarjeta aparece" data-signo="${a.signo}" href="${m.campeon(a.campeon,a.roles[0]?.rol)}">
    <div class="pa-cab"><img src="${r.campeon(a.campeon)}" alt="" loading="lazy"><div><h3>${o(a.nombre)}</h3>
      <span class="pa-veredicto ${t}">${a.nuevo?"Nuevo":i}</span></div></div>
    ${u?`<div class="pa-sim"><span class="pa-donde">En la simulación</span><div>${u}</div></div>`:""}
    ${n}</a>`}function C(a){return`<a class="pa-chip aparece" data-signo="${a.signo}" href="${m.campeon(a.campeon,a.roles[0]?.rol)}">
    <img src="${r.campeon(a.campeon)}" alt="" loading="lazy"><span>${o(a.nombre)}</span><b class="${a.delta>0?"sube":"baja"}">${h(a.delta)}</b></a>`}function N(a){const[i,t]=d[a.signo]??d[0],l=a.usan.map(n=>`<a href="${m.campeon(n.campeon,n.rol)}" title="${o(n.nombre)} (${o($[n.rol]??n.rol)})"><img src="${r.campeon(n.campeon)}" alt="${o(n.nombre)}" loading="lazy"></a>`).join("");return`<div class="tarjeta pa-tarjeta aparece" data-signo="${a.signo}">
    <div class="pa-cab"><img class="obj" src="${r.objeto(a.id)}" alt="" loading="lazy"><div><h3>${o(a.nombre)}</h3>
      <span class="pa-veredicto ${t}">${a.nuevo?"Nuevo":i}</span></div></div>
    <ul>${a.cambios.map(n=>`<li>${v(n.signo)}<span>${o(n.texto)}</span></li>`).join("")}</ul>
    ${a.nUsan?`<div class="pa-usan"><span class="pa-donde">En la build principal de ${a.nUsan} campeón${a.nUsan===1?"":"es"}</span><div>${l}${a.nUsan>a.usan.length?`<span class="mas">+${a.nUsan-a.usan.length}</span>`:""}</div></div>`:""}
  </div>`}
