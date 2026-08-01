/* ============================================================
   CLAUTARTAS — funciones que dibujan el contenido dinámico
   usando los datos de js/data.js
   ============================================================ */

/* Convierte un precio en formato "$29.990" a un valor referencial en USD,
   usando la tasa SITE.usdRate definida en js/data.js */
function clpToUsd(clpString) {
  const num = Number(String(clpString).replace(/[^\d]/g, ""));
  if (!num || !SITE.usdRate) return "";
  const usd = num / SITE.usdRate;
  return "US$" + usd.toFixed(2);
}

const RESOURCE_ICONS = { pdf: ICONS.pdf, planilla: ICONS.planilla, wsp: ICONS.whatsapp, telegram: ICONS.telegram, videos: ICONS.videos };

function resourceChip(tipo, url) {
  if (!url) return "";
  const labels = { pdf: "PDF", planilla: "Planilla de costo", wsp: "Grupo WSP", telegram: "Grupo Telegram", videos: "Videos" };
  return `<span class="resource-info">${RESOURCE_ICONS[tipo]} ${labels[tipo]}</span>`;
}

function resourceRow(tipo, url) {
  if (!url) return "";
  const labels = { pdf: "Documentos PDF", planilla: "Planilla de costo", wsp: "Grupo WSP", telegram: "Grupo Telegram", videos: "videos paso a paso" };
  if (url === "#") {
    return `
      <div class="resource-row resource-row-static">
        <span class="ic">${RESOURCE_ICONS[tipo]}</span>
        <span>${labels[tipo]}</span>
      </div>`;
  } 
  return `
    <a class="resource-row" href="${url}" target="_blank" rel="noopener">
      <span class="ic">${RESOURCE_ICONS[tipo]}</span>
      <span>${labels[tipo]}</span>
    </a>`;
}

/* ---------- HERO CAROUSEL (index.html) ---------- */
function renderCarousel() {
  const el = document.getElementById("heroCarousel");
  if (!el) return;
  const destacados = CURSOS.filter(c => c.badgeNuevo).length ? CURSOS.filter(c => c.badgeNuevo) : CURSOS.slice(0, 3);
  const slides = destacados.slice(0, 3);

  el.innerHTML = `
    <div class="carousel-track">
      ${slides.map((c, i) => `
        <div class="carousel-slide ${i === 0 ? "active" : ""}" data-index="${i}">
          <a href="curso.html?id=${c.id}">
            <img src="${c.imagen}" alt="${c.titulo}" loading="${i === 0 ? "eager" : "lazy"}">
            <div class="carousel-caption">
              <span class="ribbon">${c.categoria}</span>
              <h2>${c.titulo}</h2>
              <p>${c.subtitulo}</p>
            </div>
          </a>
        </div>
      `).join("")}
    </div>
    <div class="carousel-dots">
      ${slides.map((_, i) => `<button data-index="${i}" class="${i === 0 ? "active" : ""}" aria-label="Ir a imagen ${i + 1}"></button>`).join("")}
    </div>
  `;

  const slideEls = el.querySelectorAll(".carousel-slide");
  const dotEls = el.querySelectorAll(".carousel-dots button");
  let current = 0;
  function show(idx) {
    slideEls.forEach((s, i) => s.classList.toggle("active", i === idx));
    dotEls.forEach((d, i) => d.classList.toggle("active", i === idx));
    current = idx;
  }
  dotEls.forEach(d => d.addEventListener("click", () => show(Number(d.dataset.index))));
  if (slides.length > 1) {
    setInterval(() => show((current + 1) % slides.length), 4500);
  }
}

/* ---------- COURSE CARD (index.html) ---------- */
function courseCardHTML(c) {
  const chips = ["pdf", "planilla", "wsp", "telegram", "videos"]
    .map(tipo => resourceChip(tipo, c.recursos[tipo])).join("");
  return `
    <article class="course-card">
      <a class="course-media" href="curso.html?id=${c.id}">
        ${c.badgeNuevo ? '<span class="badge-new">Nuevo</span>' : ""}
        <img src="${c.imagen}" alt="${c.titulo}" loading="lazy">
        <div class="play-badge"><span>${ICONS.arrowRight}</span></div>
      </a>
      <div class="course-body">
        <span class="course-tag">${c.categoria}</span>
        <h3>${c.titulo}</h3>
        <p class="course-desc">${c.descripcionCorta}</p>
        <div class="course-price">
          ${c.precioOferta ? `<span class="clp-tachado">${c.precio}</span><span class="clp-oferta">${c.precioOferta}</span>` : `<span class="clp">${c.precio}</span>`}
          <span class="usd">${clpToUsd(c.precioOferta || c.precio)}</span>
        </div>
        ${chips ? `<div class="course-resources"><span class="resources-label">Incluye:</span>${chips}</div>` : ""}
        <a class="course-cta" href="curso.html?id=${c.id}">Ver curso ${ICONS.arrowRight}</a>
      </div>
    </article>
  `;
}

function renderCourseList() {
  const el = document.getElementById("courseList");
  if (!el) return;
  el.innerHTML = CURSOS.map(courseCardHTML).join("");
}

/* ---------- TESTIMONIOS (resultados.html) ---------- */
function renderTestimonials() {
  const el = document.getElementById("testiGrid");
  if (!el) return;

  const mediaHTML = (t) => {
    if (t.video) {
      const miniSrc = t.miniatura || t.foto;
      const hasMini = !!miniSrc;
      return `
        <button type="button" class="testi-video-thumb" data-video="${t.video}"
          aria-label="Reproducir video de ${t.nombre}"
          style="${hasMini ? `background-image:url('${miniSrc}')` : ""}">
          ${!hasMini ? `<span class="testi-video-fallback">${ICONS.tiktok}<span>Ver video</span></span>` : ""}
          <span class="play-badge"><span>${ICONS.play}</span></span>
        </button>`;
    }
    return `<img src="${t.foto}" alt="${t.nombre}" loading="lazy">`;
  };

  el.innerHTML = TESTIMONIOS.map(t => `
    <div class="testi-card">
      ${mediaHTML(t)}
      <p class="testi-quote">“${t.quote}”</p>
      <div class="testi-author">${t.nombre}</div>
      <div class="testi-role">${t.rol}</div>
    </div>
  `).join("");

  /* Nada de TikTok se carga aquí: el embed real solo se pide
     cuando la persona hace clic en una miniatura (ver openTikTokModal) */
  el.querySelectorAll(".testi-video-thumb").forEach(btn => {
    btn.addEventListener("click", () => openTikTokModal(btn.dataset.video));
  });
}

/* ---------- MODAL DE VIDEO TIKTOK (lazy load real: solo carga al hacer clic) ---------- */
function getVideoModal() {
  let overlay = document.getElementById("videoModalOverlay");
  if (overlay) return overlay;

  overlay = document.createElement("div");
  overlay.id = "videoModalOverlay";
  overlay.className = "video-modal-overlay";
  overlay.innerHTML = `
    <div class="video-modal-card">
      <button class="video-modal-close" aria-label="Cerrar video">&times;</button>
      <div class="video-modal-body"></div>
    </div>
  `;
  document.body.appendChild(overlay);

  const close = () => {
    overlay.classList.remove("active");
    overlay.querySelector(".video-modal-body").innerHTML = "";
  };
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay || e.target.classList.contains("video-modal-close")) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  return overlay;
}

function openTikTokModal(url) {
  const overlay = getVideoModal();
  const body = overlay.querySelector(".video-modal-body");
  const videoId = (url.split("/video/")[1] || "").split("?")[0];

  /* Iframe directo: no depende del script externo de TikTok (embed.js),
     que en algunos navegadores móviles puede manipular el DOM de forma
     impredecible. El iframe queda contenido siempre dentro del modal. */
  body.innerHTML = `
    <div class="tiktok-iframe-wrap">
      <iframe
        src="https://www.tiktok.com/embed/v2/${videoId}"
        allow="encrypted-media; picture-in-picture"
        allowfullscreen
        loading="lazy"
        title="Video de TikTok"
      ></iframe>
    </div>
  `;
  overlay.classList.add("active");
}

function renderStats() {
  const el = document.getElementById("statsRow");
  if (!el) return;
  el.innerHTML = STATS.map(s => `
    <div class="stat-box">
      <span class="num">${s.num}</span>
      <span class="label">${s.label}</span>
    </div>
  `).join("");
}

/* ---------- PUNTOS DE VENTA ---------- */
function renderPuntosVenta(filtro) {
  const el = document.getElementById("pvList");
  if (!el) return;

  const f = (filtro || "").trim().toLowerCase();
  const data = !f ? PUNTOS_VENTA : PUNTOS_VENTA.filter(p =>
    (p.nombre || "").toLowerCase().includes(f) ||
    (p.ciudad || "").toLowerCase().includes(f) ||
    (p.contacto || "").toLowerCase().includes(f)
  );

  if (!data.length) {
    el.innerHTML = `<p class="pv-empty">No encontramos puntos de venta para “${filtro}”.</p>`;
    return;
  }

  el.innerHTML = `
    <div class="pv-table">
      <div class="pv-row pv-row-head">
        <span>Nombre</span><span>Ciudad</span><span>Contacto</span><span></span>
      </div>
      ${data.map(p => {
        const tel = (p.contacto || "").replace(/\D/g, "");
        const msg = encodeURIComponent(`Hola ${p.nombre}, te encontre en Clautartas.com, quiero cotizar.`);
        return `
        <div class="pv-row">
          <span class="pv-nombre">${p.nombre}</span>
          <span class="pv-ciudad">${p.ciudad || "—"}</span>
          <span class="pv-contacto">${p.contacto || "—"}</span>
          ${tel ? `
            <a class="pv-wsp-btn" href="https://wa.me/${tel}?text=${msg}" target="_blank" rel="noopener" aria-label="Escribir por WhatsApp a ${p.nombre}">
              ${ICONS.whatsapp} <span>WhatsApp</span>
            </a>
          ` : `<span></span>`}
        </div>
      `;
      }).join("")}
    </div>
  `;
}

/* ---------- CURSO DETALLE (curso.html) ---------- */
function renderCursoDetalle() {
  const wrap = document.getElementById("cursoDetalle");
  if (!wrap) return;

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const curso = CURSOS.find(c => c.id === id) || CURSOS[0];

  document.title = `${curso.titulo} — Clautartas`;
  const metaDesc = document.getElementById("metaDescripcion");
  if (metaDesc) metaDesc.setAttribute("content", curso.descripcionCorta);
  const ogTitulo = document.getElementById("ogTitulo");
  if (ogTitulo) ogTitulo.setAttribute("content", `${curso.titulo} — Clautartas`);
  const ogDesc = document.getElementById("ogDescripcion");
  if (ogDesc) ogDesc.setAttribute("content", curso.descripcionCorta);

  const temasHTML = curso.temas.map(t => `<li>${ICONS.check}<span>${t}</span></li>`).join("");

  const galeriaHTML = curso.fotos.length ? `
    <h2>Fotos del curso</h2>
    <div class="gallery-grid">
      ${curso.fotos.map(f => `<img src="${f}" alt="${curso.titulo}" loading="lazy" class="lightbox-img">`).join("")}
    </div>
  ` : "";

  const tiktoksHTML = curso.tiktoks.length ? `
    <h2>Videos de TikTok</h2>
    <div class="tiktok-grid">
      ${curso.tiktoks.map(url => `
        <div class="tiktok-iframe-wrap">
          <iframe
            src="https://www.tiktok.com/embed/v2/${(url.split("/video/")[1] || "").split("?")[0]}"
            allow="encrypted-media; picture-in-picture"
            allowfullscreen
            loading="lazy"
            title="Video de TikTok"
          ></iframe>
        </div>
      `).join("")}
    </div>
  ` : "";

  const resourcesHTML = ["pdf", "planilla", "wsp", "telegram", "videos"]
    .map(tipo => resourceRow(tipo, curso.recursos[tipo])).join("");

  wrap.innerHTML = `
    <div class="curso-hero">
      <img src="${curso.imagen}" alt="${curso.titulo}">
      <div class="curso-hero-overlay">
        <div>
          <span class="course-tag">${curso.categoria}</span>
          <h1>${curso.titulo}</h1>
        </div>
      </div>
    </div>

    <div class="curso-layout">
      <div class="curso-main">
        <h2>Sobre el curso</h2>
        <p>${curso.descripcionLarga}</p>

        <h2>Qué vas a aprender</h2>
        <ul class="temas-list">${temasHTML}</ul>

        ${tiktoksHTML}
        ${galeriaHTML}

        <a class="back-link" href="index.html">${ICONS.arrowLeft} Volver a todos los cursos</a>
      </div>

      <aside class="curso-sidebar">
        <div class="price-card">
          ${curso.precioOferta ? `<div class="precio-tachado">${curso.precio}</div><div class="precio">${curso.precioOferta}</div>` : `<div class="precio">${curso.precio}</div>`}
          <div class="precio-usd">${clpToUsd(curso.precioOferta || curso.precio)}</div>
          <div class="precio-note">${curso.precioNota}</div>
          <a class="btn btn-primary" href="${waLink(`Hola Clau! Quiero comprar el curso "${curso.titulo}" (${curso.precioOferta || curso.precio}). ¿Cómo sigo?`)}" target="_blank" rel="noopener">Comprar por WhatsApp ${ICONS.arrowRight}</a>
          <a class="btn btn-outline" href="${waLink(`Hola! Tengo una consulta sobre el curso "${curso.titulo}"`)}" target="_blank" rel="noopener">Consultar antes de comprar</a>
        </div>

        ${resourcesHTML ? `<div class="resource-panel">${resourcesHTML}</div>` : ""}
      </aside>
    </div>
  `;

  /* Related courses row */
  renderRelated(curso);

  /* Enable click-to-zoom lightbox on gallery photos */
  initLightbox(wrap);
}

/* ---------- LIGHTBOX (zoom de fotos, funciona igual en PC y celular) ---------- */
function getLightbox() {
  let overlay = document.getElementById("lightboxOverlay");
  if (overlay) return overlay;

  overlay = document.createElement("div");
  overlay.id = "lightboxOverlay";
  overlay.className = "lightbox-overlay";
  overlay.innerHTML = `
    <button class="lightbox-close" aria-label="Cerrar">&times;</button>
    <img class="lightbox-img-full" src="" alt="">
  `;
  document.body.appendChild(overlay);

  const close = () => overlay.classList.remove("active");
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay || e.target.classList.contains("lightbox-close")) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  return overlay;
}

function openLightbox(src, alt) {
  const overlay = getLightbox();
  const img = overlay.querySelector(".lightbox-img-full");
  img.src = src;
  img.alt = alt || "";
  overlay.classList.add("active");
}

function initLightbox(scope) {
  const root = scope || document;
  root.querySelectorAll(".lightbox-img").forEach(img => {
    img.addEventListener("click", () => openLightbox(img.src, img.alt));
  });
}

function renderRelated(curso) {
  const el = document.getElementById("relatedCourses");
  if (!el) return;
  const others = CURSOS.filter(c => c.id !== curso.id).slice(0, 4);
  el.innerHTML = others.map(c => `
    <a class="course-cta" style="background:#fff;color:var(--berry);border:2px solid var(--pink-frost);" href="curso.html?id=${c.id}">${c.titulo}</a>
  `).join("");
}

/* ---------- POPUP DE PROMOCIONES (index.html) ---------- */
function resolvePromoLink(link) {
  if (!link) return "#";
  if (link.startsWith("WSP:")) return waLink(link.slice(4).trim());
  return link;
}

function renderPromoPopup() {
  if (typeof PROMOS === "undefined" || !PROMOS.length) return;
  if (sessionStorage.getItem("clautartasPromoShown")) return;

  const overlay = document.createElement("div");
  overlay.className = "promo-overlay";
  overlay.innerHTML = `
    <div class="promo-card">
      <button class="promo-close" aria-label="Cerrar promoción">&times;</button>
      <div class="promo-track">
        ${PROMOS.map((p, i) => {
          const href = resolvePromoLink(p.link);
          const external = /^https?:\/\//.test(href);
          return `
            <a class="promo-slide ${i === 0 ? "active" : ""}" data-index="${i}" href="${href}" ${external ? 'target="_blank" rel="noopener"' : ""}>
              <img src="${p.imagen}" alt="${p.alt || "Promoción Clautartas"}">
            </a>`;
        }).join("")}
      </div>
      ${PROMOS.length > 1 ? `
        <div class="promo-dots">
          ${PROMOS.map((_, i) => `<button data-index="${i}" class="${i === 0 ? "active" : ""}" aria-label="Ver promoción ${i + 1}"></button>`).join("")}
        </div>
      ` : ""}
    </div>
  `;
  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add("active"));

  const close = () => {
    overlay.classList.remove("active");
    sessionStorage.setItem("clautartasPromoShown", "1");
    setTimeout(() => overlay.remove(), 250);
  };

  overlay.querySelector(".promo-close").addEventListener("click", close);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
  document.addEventListener("keydown", function escClose(e) {
    if (e.key === "Escape") { close(); document.removeEventListener("keydown", escClose); }
  });

  if (PROMOS.length > 1) {
    const slideEls = overlay.querySelectorAll(".promo-slide");
    const dotEls = overlay.querySelectorAll(".promo-dots button");
    dotEls.forEach(d => d.addEventListener("click", (e) => {
      e.preventDefault();
      const idx = Number(d.dataset.index);
      slideEls.forEach((s, i) => s.classList.toggle("active", i === idx));
      dotEls.forEach((dd, i) => dd.classList.toggle("active", i === idx));
    }));
  }
}
