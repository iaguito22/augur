import{m as q,n as w,b as L,t as b,r as M,p as S,c as H,i as r,h as T,d as e,e as l,R as m,l as $,g as x,j as E,a as f,f as O}from"./comun-wHHcaYzn.js";/* empty css               */const n=document.getElementById("app");q("inicio");const i=await w(n,()=>f("resumen")),j=await L();let u=0;function P(s){return`
  <section class="hero">
    <div class="hero-fondo" style="background-image:url('${r.splash(s.campeon)}')"></div>
    <div class="hero-velo"></div>
    <div class="contenedor hero-contenido">
      <div class="hero-texto">
        <span class="pildora tinta"><span class="punto"></span>Debería estar OP · Parche ${e(i.parche)}</span>
        <h1 class="hero-nombre">${e(s.nombre)}</h1>
        <p class="hero-titulo">${e(s.titulo)}</p>
        <p class="hero-razon"><b>${e(s.titular)}.</b> ${e(s.razones[0]?.texto??"")}</p>
        <div class="acciones">
          <a class="boton" href="${l.campeon(s.campeon,s.rol)}">Ver sus builds <span class="flecha">→</span></a>
          <a class="boton fantasma" href="${l.tierlist(s.rol)}">Tier list de ${e(m[s.rol])}</a>
        </div>
      </div>
      <div class="hero-widgets">
        <div class="widget vidrio w-nota">
          ${O(s.nota)}
          <div class="linea"><strong>Tier ${e(s.tier)} en ${e(m[s.rol])}</strong><span class="peso"></span><div class="barra-peso"><i></i></div></div>
        </div>
        <div class="widget vidrio w-build"><span class="etiqueta">Build que debería funcionar</span><div class="fila">…</div></div>
        <div class="widget vidrio w-otros"><span class="etiqueta">Más que deberían estar OP</span><div class="caras">
          ${i.destacados.map((a,t)=>`<button aria-pressed="${t===u}" data-i="${t}" title="${e(a.nombre)}"><img src="${r.campeon(a.campeon)}" alt="${e(a.nombre)}"></button>`).join("")}
        </div></div>
      </div>
    </div>
    <div class="bajar"><span>Más del parche</span><i></i></div>
  </section>`}async function z(s){const a=n.querySelector(".hero"),t=await f(`campeon/${s.campeon}?rol=${s.rol}`).then(d=>d.ficha).catch(()=>null);if(!t)return;const o=t.build.principal,c=[o?.bota,...o?.objetos??[]].filter(Boolean),v=await Promise.all(c.map($));a.querySelector(".w-build .fila").innerHTML=c.map((d,h)=>`${h===1?'<span class="sep"></span>':""}<img class="icono" src="${r.objeto(d)}" alt="${e(j.objetos[d]?.nombre??"")}" data-tip="${v[h]}">`).join("");const p=Math.round(t.peso.real*100);a.querySelector(".w-nota .peso").textContent=p<5?"Sobre todo por sus números":`${100-p} % números · ${p} % partidas`,a.querySelector(".barra-peso i").style.width=`${Math.max(4,100-p)}%`,b(a)}function g(){const s=i.destacados[u],a=n.querySelector(".hero"),t=document.createElement("div");t.innerHTML=P(s);const o=t.firstElementChild;a?a.replaceWith(o):n.prepend(o),H(r.splash(s.campeon)),T(o),z(s),o.querySelectorAll(".w-otros button").forEach(c=>c.addEventListener("click",()=>{u=Number(c.dataset.i),o.querySelector(".hero-fondo").classList.add("saliendo"),setTimeout(g,280)}))}function D(){const s=i.destacados;return`
  <section class="seccion contenedor" id="destacados">
    <div class="cabecera aparece">
      <div><span class="etiqueta">Parche ${e(i.parche)}</span><h2 class="titulo-seccion">Deberían estar OP</h2>
      <p class="sub">No es lo que más gana hoy, sino lo que los números, el meta y las builds poco vistas dicen que va a pegar fuerte.</p></div>
      <a class="boton fantasma" href="${l.tierlist()}">Ver la tier list <span class="flecha">→</span></a>
    </div>
    <div class="bento">
      ${s.map((a,t)=>`
      <a class="carta aparece ${t===0?"grande":t===3?"ancha":""}" href="${l.campeon(a.campeon,a.rol)}">
        <img class="fondo" src="${r.splash(a.campeon)}" alt="" loading="lazy">
        <div class="arriba"><span class="pildora">${e(m[a.rol])}</span><span class="tier" data-t="${a.tier}">${a.tier}</span></div>
        <h3>${e(a.nombre)}</h3>
        <p class="titular">${e(a.titular)}</p>
        ${t===0?`<p>${e(a.razones[0]?.texto??"")}</p>`:`<p>${e(a.razones[0]?.corta??"")}</p>`}
      </a>`).join("")}
    </div>
  </section>`}async function A(){if(!i.objetos?.length)return"";const s=await Promise.all(i.objetos.map(a=>$(a.id)));return`
  <section class="seccion contenedor">
    <div class="cabecera aparece">
      <div><span class="etiqueta">Objetos</span><h2 class="titulo-seccion">Objetos del parche</h2>
      <p class="sub">Los que mejoran este parche o le quedan como un guante a campeones fuertes.</p></div>
    </div>
    <div class="objetos">
      ${i.objetos.map((a,t)=>`
      <article class="objeto tarjeta aparece">
        <div class="cab">
          <img class="icono" src="${r.objeto(a.id)}" alt="" data-tip="${s[t]}">
          <div><h3>${e(a.nombre)}</h3>
          ${a.cambios?.length?`<span class="pildora tinta cambio"><span class="punto"></span>${a.mejora?"Mejora este parche":"Cambia este parche"}</span>`:`<span class="sub" style="font-size:13px">${x(j.objetos[a.id]?.precio)} de oro</span>`}
          </div>
        </div>
        <p>${e(a.texto)}</p>
        <div class="en"><div class="caras-pila">${a.en.map(o=>`<a href="${l.campeon(o.campeon,o.rol)}" title="${e(o.nombre)} · ${e(m[o.rol])}"><img src="${r.campeon(o.campeon)}" alt="${e(o.nombre)}"></a>`).join("")}</div>Encaja en ${e([...new Set(a.en.map(o=>o.nombre))].slice(0,2).join(" y "))}</div>
      </article>`).join("")}
    </div>
  </section>`}n.innerHTML="";g();n.insertAdjacentHTML("beforeend",D());n.insertAdjacentHTML("beforeend",await A());b(n);M(n);const B=S();async function y(){const s=await E().catch(()=>null);s&&(B.querySelector(".estado-datos").innerHTML=`<span class="aviso">${s.vivo?'<span class="punto-vivo"></span>':""}${e(s.texto)}</span>`)}y();setInterval(y,15e3);addEventListener("scroll",()=>{const s=n.querySelector(".hero-fondo");s&&scrollY<innerHeight&&(s.style.transform=`scale(1.04) translateY(${scrollY*.18}px)`)},{passive:!0});
