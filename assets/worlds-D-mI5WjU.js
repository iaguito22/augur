import{m as S,n as L,a as M,d as n,i as u,R as p,o as O,I,e as d,r as T,p as D,j as C}from"./comun-wHHcaYzn.js";const c=document.getElementById("app");S("worlds");const s=await L(c,()=>M("worlds")),i=a=>`${Math.round(a*100)}`,y=a=>`${(a*100).toFixed(1).replace(".",",")} %`,h=a=>`${a>0?"+":a<0?"−":""}${Math.abs(Math.round(a*100))} %`,R=a=>new Date(a).toLocaleDateString("es-ES",{day:"numeric",month:"long"}),W={must:"Prioridad máxima",alta:"Prioridad alta",media:"Prioridad media"},$={TOP:"var(--r-top)",JUNGLE:"var(--r-jng)",MIDDLE:"var(--r-mid)",BOTTOM:"var(--r-bot)",UTILITY:"var(--r-sup)"},A=["TOP","JUNGLE","MIDDLE","BOTTOM","UTILITY"],k=Math.max(.1,...[...s.suben,...s.bajan].map(a=>Math.abs(a.cambioPot))),l=(a,e="")=>`<img class="${e}" src="${u.campeon(a)}" alt="" loading="lazy">`,m=s.prioridad,U=["must","alta","media"].map(a=>[a,m.filter(e=>e.nivel===a)]).filter(([,a])=>a.length),q=m[0]?.fase1||1;c.innerHTML=`
  <header class="w2-cab contenedor">
    <span class="w2-sello">Worlds 2026 · parche ${n(s.parche)}</span>
    <h1>Qué se va a jugar</h1>
    <p>El draft de Worlds antes de que empiece: qué se pelea en la primera fase, cómo se responde, qué se esconde y qué puede sorprender. Sale de ${s.fuente.partidas.toLocaleString("es-ES")} partidas profesionales y de lo que el parche cambia en los números.</p>
  </header>

  <section class="contenedor w2-prio aparece">
    <h2 class="w2-t">Prioridad</h2>
    <p class="w2-sub">Campeones que se banean o se escogen en la primera fase del draft (los tres primeros bans de cada equipo y la primera rotación de picks). Cuanto más arriba, antes hay que decidir qué hacer con ellos.</p>
    ${U.map(([a,e])=>`
      <div class="w2-grupo" data-n="${a}">
        <h3>${W[a]}</h3>
        <div class="${a==="must"?"w2-must":"w2-filas"}">
          ${e.map(t=>a==="must"?`
            <button type="button" class="w2-carta" data-c="${t.campeon}" style="--img:url('${u.splash(t.campeon)}')">
              <span class="w2-rol" style="--c:${$[t.rolPrincipal]}">${n(p[t.rolPrincipal])}</span>
              <span class="w2-num">${i(t.fase1)}<small>%</small></span>
              <span class="w2-nombre">${n(t.nombre)}</span>
              <span class="w2-mini">${i(t.fase1Bans)} % ban · ${i(t.fase1Picks)} % pick</span>
            </button>`:`
            <button type="button" class="w2-fila" data-c="${t.campeon}">
              ${l(t.campeon)}
              <span class="nom">${n(t.nombre)}<em style="--c:${$[t.rolPrincipal]}">${n(p[t.rolPrincipal])}</em></span>
              <span class="bar"><i class="bn" style="width:${t.fase1Bans/q*100}%"></i><i class="pk" style="width:${t.fase1Picks/q*100}%"></i></span>
              <span class="val">${i(t.fase1)} %</span>
            </button>`).join("")}
        </div>
      </div>`).join("")}
    <p class="w2-nota"><i class="bn"></i> bans de primera fase <i class="pk"></i> picks de primera rotación · toca un campeón para ver cómo se responde</p>
  </section>

  <section class="contenedor w2-rol-sec aparece" id="roles">
    <div class="w2-barra-sup">
      <h2 class="w2-t">Ranking por rol</h2>
      <div class="segmentado" role="group" aria-label="Rol">
        ${O.map(([a,e])=>`<button data-rol="${a}" aria-pressed="${a==="MIDDLE"}">${I[a]}${e}</button>`).join("")}
      </div>
    </div>
    <p class="w2-nota"><i class="pk"></i> picks <i class="bn"></i> bans · la barra mide la presencia prevista; toca una fila para ver el detalle</p>
    <ol class="w2-lista"></ol>
    <button class="w2-mas" type="button">Ver todos</button>
  </section>

  <section class="contenedor w2-resp aparece" id="respuestas">
    <h2 class="w2-t">Cómo se responde</h2>
    <p class="w2-sub">Elige un campeón prioritario: qué se le pone enfrente en la misma línea en profesional, y qué cruces le salen peor en ranked de EUW (mucha más muestra, pero otro nivel).</p>
    <div class="w2-sel">${m.slice(0,10).map(a=>`<button type="button" data-c="${a.campeon}" aria-pressed="false">${l(a.campeon)}${n(a.nombre)}</button>`).join("")}</div>
    <div class="w2-panel vidrio"></div>
  </section>

  ${s.flex.length?`<section class="contenedor w2-flex aparece">
    <h2 class="w2-t">Flex</h2>
    <p class="w2-sub">Se juegan en más de un rol, así que quien los coge pronto no revela dónde irán. Obligan al rival a esperar.</p>
    <div class="w2-flexl">
      ${s.flex.map(a=>`
        <div class="w2-fx">
          ${l(a.campeon)}
          <span class="nom">${n(a.nombre)}</span>
          <span class="reparto">${A.filter(e=>a.roles[e]>=.05).sort((e,t)=>a.roles[t]-a.roles[e]).map(e=>`<i style="flex:${a.roles[e]};background:${$[e]}" title="${n(p[e])} ${i(a.roles[e])} %"><b>${n(p[e])} ${i(a.roles[e])}</b></i>`).join("")}</span>
        </div>`).join("")}
    </div>
  </section>`:""}

  ${s.pocket.length?`<section class="contenedor w2-pocket aparece">
    <h2 class="w2-t">Pocket picks</h2>
    <p class="w2-sub">Jugadores de equipos de Worlds que sacan un campeón mucho más que el resto de su rol, y ganan con él. Son los picks que no esperas.</p>
    <div class="w2-pk">
      ${s.pocket.map(a=>`
        <a class="w2-pp vidrio" href="${d.campeon(a.campeon,a.rol)}">
          ${l(a.campeon)}
          <span class="quien"><b>${n(a.jugador)}</b> · ${n(a.nombre)}</span>
          <span class="equipo">${n(a.equipo)} · ${n(p[a.rol])}</span>
          <span class="dato">${a.n} partidas · ${i(a.wr)} % victorias · lo juega el ${i(a.uso)} % de las veces</span>
        </a>`).join("")}
    </div>
  </section>`:""}

  <section class="contenedor w2-bans aparece">
    <h2 class="w2-t">Bans más disputados</h2>
    <div class="w2-bl">
      ${s.bans.map((a,e)=>`<div class="w2-bn"><span class="pos">${e+1}</span>${l(a.campeon)}<span class="nom">${n(a.nombre)}</span><span class="bar"><i class="bn" style="width:${a.ban/s.bans[0].ban*100}%"></i></span><span class="val">${i(a.ban)} %</span></div>`).join("")}
    </div>
  </section>

  <section class="contenedor w2-cambios aparece">
    <h2 class="w2-t">Lo que mueve el parche</h2>
    <p class="w2-sub">Cuánto sube o baja la presencia esperada de cada campeón por lo que ha cambiado entre los parches en que se jugó y el ${n(s.parche)}: se mide en cómo ha cambiado su uso en ranked de EUW, así entran también los nerfs y buffs que la teoría no ve. Solo aparecen los que ya pesan en el draft.</p>
    <div class="w2-div">
      ${[...s.bajan,...s.suben].sort((a,e)=>a.cambioPot-e.cambioPot).map(a=>`
        <a class="w2-dv ${a.cambioPot<0?"neg":"pos"}" href="${d.campeon(a.campeon,a.rol)}">
          <span class="izq">${a.cambioPot<0?`<b>${h(a.cambioPot)}</b><i style="width:${Math.abs(a.cambioPot)/k*100}%"></i>`:""}</span>
          <span class="mid">${l(a.campeon)}${n(a.nombre)}</span>
          <span class="der">${a.cambioPot>0?`<i style="width:${a.cambioPot/k*100}%"></i><b>${h(a.cambioPot)}</b>`:""}</span>
        </a>`).join("")}
    </div>
  </section>

  ${s.apuestas.length?`<section class="contenedor w2-apuestas aparece">
    <h2 class="w2-t">Podrían sorprender</h2>
    <p class="w2-sub">Fuertes en teoría y en ranked, con casi nada de presencia profesional.</p>
    <div class="w2-fila-ap">
      ${s.apuestas.map(a=>`
        <a class="w2-ap" href="${d.campeon(a.campeon,a.rol)}" style="--img:url('${u.splash(a.campeon)}')">
          <span class="w2-rol">${n(p[a.rol])}</span><span class="w2-nombre">${n(a.nombre)}</span>
        </a>`).join("")}
    </div>
  </section>`:""}

  <section class="contenedor w2-metodo aparece">
    <details>
      <summary>Cómo se calcula y qué tan fiable es</summary>
      <ul>
        <li><b>Datos:</b> ${s.fuente.partidas.toLocaleString("es-ES")} partidas de las grandes ligas, el MSI, el EWC y el First Stand hasta el ${R(s.hasta)}, y ${s.fuente.menores.toLocaleString("es-ES")} de ligas menores con un décimo de peso.</li>
        <li><b>Peso:</b> cada partida vale la mitad cada ${s.fuente.vidaMedia} días, los playoffs el doble y las de los ${s.fuente.equipos} equipos de Worlds, ×${s.fuente.pesoEquipo}.</li>
        <li><b>Prueba:</b> repetido sobre ${n(s.backtest.eventos)}, acierta el orden de presencia (correlación ${String(s.backtest.rho[0]).replace(".",",")}–${String(s.backtest.rho[1]).replace(".",",")}) y ${s.backtest.de25[0]}–${s.backtest.de25[1]} de los 25 más disputados. El winrate profesional no mejoraba la predicción, así que no se usa para ordenar. La prioridad, las respuestas y los pocket picks no se han podido validar de la misma forma.</li>
        <li><b>Prioridad:</b> primeros tres bans de cada equipo y primera rotación de picks (azul 1, rojo 1 y 2). <b>Respuestas:</b> con pocas partidas por cruce en profesional, por eso se enseña también ranked. <b>Pocket:</b> al menos 3 partidas y un 10 % de las del jugador.</li>
        <li><b>Límite:</b> las grandes ligas acaban en el parche ${n(s.fuente.ultimoParche)} y Worlds se juega en el ${n(s.parche)}. El ajuste de parche (uso en ranked de EUW elevado a ${String(s.ajuste.beta).replace(".",",")}, entre ×${s.ajuste.minFactor} y ×${s.ajuste.maxFactor}) mejoró algo el acierto en una prueba con el 16.20, pero es pequeña; tómalo como orientación, no como medida exacta.</li>
      </ul>
    </details>
  </section>`;const B=c.querySelector(".w2-panel"),P=c.querySelectorAll(".w2-sel button");function f(a){const e=s.contras[a],t=s.campeones[a];if(!e)return;P.forEach(r=>r.setAttribute("aria-pressed",String(r.dataset.c===a)));const o=(r,j)=>`<a class="w2-rs" href="${d.campeon(r.campeon,e.rol)}">${l(r.campeon)}<span class="nom">${n(r.nombre)}</span><span class="d">${j}</span></a>`;B.innerHTML=`
    <div class="w2-ph"><img src="${u.retrato(a)}" alt=""><div><h3>${n(t.nombre)}</h3><span>${n(p[e.rol])} · ${i(t.fase1)} % de prioridad</span></div></div>
    <div class="w2-cols">
      <div><h4>Lo que más se le pone enfrente</h4>${e.frecuentes.length?e.frecuentes.map(r=>o(r,`${r.n} partidas · ${i(1-r.wr)} % de victorias`)).join(""):'<p class="vacio">Sin muestra</p>'}</div>
      <div><h4>Le ganan más en profesional</h4>${e.mejores.length?e.mejores.map(r=>o(r,`${i(r.wr)} % de victorias · ${r.n} partidas`)).join(""):'<p class="vacio">Sin cruces suficientes</p>'}</div>
      <div><h4>Peores cruces en ranked EUW</h4>${e.euw.length?e.euw.map(r=>o(r,`${i(r.wr)} % de victorias · ${r.n} partidas`)).join(""):'<p class="vacio">Sin muestra</p>'}</div>
    </div>`}P.forEach(a=>a.addEventListener("click",()=>f(a.dataset.c)));c.querySelectorAll(".w2-prio [data-c]").forEach(a=>a.addEventListener("click",()=>{s.contras[a.dataset.c]&&(f(a.dataset.c),document.getElementById("respuestas").scrollIntoView({behavior:"smooth",block:"start"}))}));m[0]&&f(m[0].campeon);let w="MIDDLE",b=!1;const E=c.querySelector(".w2-lista"),v=c.querySelector(".w2-mas");function g(){const a=s.roles[w],e=a[0]?.presencia||1,t=b?a:a.slice(0,10);E.innerHTML=t.map((o,r)=>`
    <li class="w2-item">
      <button type="button" class="w2-fila" aria-expanded="false">
        <span class="pos">${r+1}</span>${l(o.campeon)}
        <span class="nom">${n(o.nombre)}${o.cambioPot>=.04?'<em class="sube">▲</em>':o.cambioPot<=-.04?'<em class="baja">▼</em>':""}</span>
        <span class="bar"><i class="pk" style="width:${o.pick/e*100}%"></i><i class="bn" style="width:${o.ban/e*100}%"></i></span>
        <span class="val">${i(o.presencia)} %</span>
      </button>
      <div class="w2-det" hidden>
        <dl>
          <dt>Picks</dt><dd>${y(o.pick)}</dd>
          <dt>Bans</dt><dd>${y(o.ban)}</dd>
          <dt>Victorias en profesional</dt><dd>${(o.wrPro*100).toFixed(1).replace(".",",")} % · ${o.partidas} partidas</dd>
          <dt>Cambio por el parche ${n(s.parche)}</dt><dd>${o.cambioPot===0&&!o.cambiado?"Sin cambios":h(o.cambioPot)}</dd>
          ${o.tierEuw?`<dt>Ranked EUW</dt><dd>Tier ${o.tierEuw} (${o.notaEuw})</dd>`:""}
        </dl>
        <a href="${d.campeon(o.campeon,w)}">Ver sus builds →</a>
      </div>
    </li>`).join(""),v.hidden=a.length<=10,v.textContent=b?"Ver menos":`Ver los ${a.length}`,E.querySelectorAll(".w2-fila").forEach(o=>o.addEventListener("click",()=>{const r=o.getAttribute("aria-expanded")==="true";o.setAttribute("aria-expanded",String(!r)),o.nextElementSibling.hidden=r}))}v.addEventListener("click",()=>{b=!b,g()});c.querySelectorAll(".w2-rol-sec .segmentado button").forEach(a=>a.addEventListener("click",()=>{w=a.dataset.rol,c.querySelectorAll(".w2-rol-sec .segmentado button").forEach(e=>e.setAttribute("aria-pressed",String(e===a))),g()}));g();T(c);const F=D();C().then(a=>{F.querySelector(".estado-datos").textContent=a.texto}).catch(()=>{});
