/* ============================================================
   CLAUTARTAS — funciones que dibujan el contenido dinámico
   usando los datos de js/data.js
   ============================================================ */

function resourceChip(tipo, url) {
  if (!url) return "";
  const labels = { pdf: "PDF", planilla: "Planilla de costo", wsp: "Grupo WSP", telegram: "Grupo Telegram", videos: "Videos" };
  return `<span class="resource-chip">${ICONS[tipo]} ${labels[tipo]}</span>`;
}

function resourceRow(tipo, url) {
  if (!url) return "";
  const labels = { pdf: "Descargar PDF", planilla: "Planilla de costo", wsp: "Unirme al grupo WSP", telegram: "Unirme a Telegram", videos: "Ver videos paso a paso" };
  return `
    <a class="resource-row" href="${url}" target="_blank" rel="noopener">
      <span class="ic">${ICONS[tipo]}</span>
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
        <div class="course-resources">${chips}</div>
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
  el.innerHTML = TESTIMONIOS.map(t => `
    <div class="testi-card">
      <img src="${t.foto}" alt="${t.nombre}" loading="lazy">
      <p class="testi-quote">“${t.quote}”</p>
      <div class="testi-author">${t.nombre}</div>
      <div class="testi-role">${t.rol}</div>
    </div>
  `).join("");
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
function renderPuntosVenta() {
  const el = document.getElementById("pvList");
  if (!el) return;
  el.innerHTML = PUNTOS_VENTA.map(p => `
    <div class="pv-card">
      <span class="pv-icon">${ICONS.pin}</span>
      <div>
        <h3>${p.nombre}</h3>
        <p>${p.detalle}</p>
        <a class="pv-link" href="${p.link}" target="_blank" rel="noopener">${p.linkTexto} ${ICONS.arrowRight}</a>
      </div>
    </div>
  `).join("");
}

/* ---------- CURSO DETALLE (curso.html) ---------- */
function renderCursoDetalle() {
  const wrap = document.getElementById("cursoDetalle");
  if (!wrap) return;

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const curso = CURSOS.find(c => c.id === id) || CURSOS[0];

  document.title = `${curso.titulo} — Clautartas`;

  const temasHTML = curso.temas.map(t => `<li>${ICONS.check}<span>${t}</span></li>`).join("");

  const galeriaHTML = curso.fotos.length ? `
    <h2>Fotos del curso</h2>
    <div class="gallery-grid">
      ${curso.fotos.map(f => `<img src="${f}" alt="${curso.titulo}" loading="lazy">`).join("")}
    </div>
  ` : "";

  const tiktoksHTML = curso.tiktoks.length ? `
    <h2>Videos de TikTok</h2>
    <div class="tiktok-grid">
      ${curso.tiktoks.map(url => `
        <blockquote class="tiktok-embed" cite="${url}" data-video-id="${(url.split("/video/")[1] || "").split("?")[0]}" style="max-width:340px;min-width:240px;margin:0;">
          <section><a target="_blank" rel="noopener" href="${url}">Ver video en TikTok</a></section>
        </blockquote>
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
          <div class="precio">${curso.precio}</div>
          <div class="precio-note">${curso.precioNota}</div>
          <a class="btn btn-primary" href="${curso.linkCompra}" target="_blank" rel="noopener">Comprar curso ${ICONS.arrowRight}</a>
          <a class="btn btn-outline" href="${waLink(`Hola! Tengo una consulta sobre el curso "${curso.titulo}"`)}" target="_blank" rel="noopener">Preguntar por WhatsApp</a>
        </div>

        ${resourcesHTML ? `<div class="resource-panel">${resourcesHTML}</div>` : ""}
      </aside>
    </div>
  `;

  /* Load TikTok embed script only if this course has tiktoks */
  if (curso.tiktoks.length) {
    const s = document.createElement("script");
    s.src = "https://www.tiktok.com/embed.js";
    s.async = true;
    document.body.appendChild(s);
  }

  /* Related courses row */
  renderRelated(curso);
}

function renderRelated(curso) {
  const el = document.getElementById("relatedCourses");
  if (!el) return;
  const others = CURSOS.filter(c => c.id !== curso.id).slice(0, 4);
  el.innerHTML = others.map(c => `
    <a class="course-cta" style="background:#fff;color:var(--berry);border:2px solid var(--pink-frost);" href="curso.html?id=${c.id}">${c.titulo}</a>
  `).join("");
}
