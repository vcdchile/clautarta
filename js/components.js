/* ============================================================
   CLAUTARTAS — componentes compartidos
   Inyecta: logo + banner redes, menú flotante, botón WhatsApp
   flotante y pie de página, en TODAS las páginas.
   Para cambiar tu número de WhatsApp o redes sociales, edita
   el objeto SITE en js/data.js — se actualiza en todo el sitio.
   ============================================================ */

const ICONS = {
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.82a4.7 4.7 0 0 1-3.77-4.68h-3.4v14.2a2.8 2.8 0 1 1-2-2.68v-3.44a6.2 6.2 0 1 0 5.4 6.15V9.4a8.1 8.1 0 0 0 4.77 1.53V7.53a4.7 4.7 0 0 1-1-.03z" transform="scale(0.9) translate(1.2,1.1)"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.6h2.55l.38-3h-2.93V8.4c0-.87.24-1.46 1.5-1.46h1.6V4.26C16.34 4.18 15.44 4 14.4 4c-2.2 0-3.7 1.34-3.7 3.8v2.6H8.13v3h2.57V21h2.8z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 32 32" fill="currentColor"><path d="M16.02 3C9.4 3 4.02 8.38 4.02 15c0 2.24.6 4.34 1.65 6.15L3 29l8.06-2.6a12 12 0 0 0 4.96 1.06h.01c6.62 0 12-5.38 12-12S22.64 3 16.02 3zm0 21.8h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-4.78 1.54 1.56-4.66-.23-.38a9.78 9.78 0 0 1-1.5-5.2c0-5.4 4.4-9.8 9.82-9.8 2.62 0 5.08 1.02 6.94 2.88a9.72 9.72 0 0 1 2.87 6.92c0 5.4-4.4 9.8-9.31 9.8z"/><path d="M21.2 18.02c-.28-.14-1.66-.82-1.92-.91-.26-.1-.44-.14-.63.14-.19.28-.72.91-.88 1.1-.16.19-.32.21-.6.07-.28-.14-1.17-.43-2.23-1.37-.83-.74-1.38-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.1-.19.05-.35-.02-.5-.07-.14-.63-1.53-.87-2.1-.23-.55-.46-.47-.63-.48h-.54c-.19 0-.5.07-.76.35-.26.28-1 .98-1 2.4s1.02 2.78 1.16 2.97c.14.19 2 3.05 4.84 4.28.68.29 1.2.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.66-.68 1.9-1.34.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>`,
  pdf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>`,
  planilla: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 10v10"/></svg>`,
  telegram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4z"/></svg>`,
  videos: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  arrowLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
};

function waLink(customMsg) {
  const msg = encodeURIComponent(customMsg || SITE.mensajeWspGenerico);
  return `https://wa.me/${SITE.whatsapp}?text=${msg}`;
}

/* ---------- LOGO (festoneado, estilo boceto) ---------- */
function logoSVG() {
  return `
  <svg class="logo-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    ${Array.from({length: 18}).map((_, i) => {
      const angle = (i / 18) * 2 * Math.PI;
      const x = 50 + 44 * Math.cos(angle);
      const y = 50 + 44 * Math.sin(angle);
      return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="6.2" fill="#F3B8C4"/>`;
    }).join("")}
    <circle cx="50" cy="50" r="40" fill="#FDF8F3"/>
    <g transform="translate(50,54)">
      <path d="M-16,0 L16,0 L12,20 a12,12 0 0 1 -24,0 Z" fill="#B23A5C"/>
      <path d="M-16,0 C-16,-9 -8,-15 0,-15 C8,-15 16,-9 16,0 Z" fill="#FBE1E6" stroke="#4A2E28" stroke-width="1.5"/>
      <circle cx="0" cy="-19" r="4.2" fill="#D9A441"/>
    </g>
    <text x="50" y="34" text-anchor="middle" font-family="Fraunces, serif" font-style="italic" font-weight="700" font-size="15" fill="#B23A5C">Clau</text>
  </svg>`;
}

/* ---------- HEADER + NAV + WHATSAPP FLOAT + FOOTER ---------- */
function renderHeader(activePage) {
  const pages = [
    { href: "index.html", label: "Principal" },
    { href: "resultados.html", label: "Resultados" },
    { href: "puntos-venta.html", label: "Puntos de venta" },
    { href: "contacto.html", label: "Contacto" },
  ];

  const desktopLinks = pages.map(p =>
    `<a href="${p.href}" class="${activePage === p.href ? "active" : ""}">${p.label}</a>`
  ).join("");

  const mobileLinks = pages.map(p =>
    `<a href="${p.href}" class="${activePage === p.href ? "active" : ""}">${p.label}</a>`
  ).join("");

  const header = document.getElementById("site-header");
  if (header) {
    header.innerHTML = `
      <div class="container header-row">
        <a href="index.html" class="logo-link">
          ${logoSVG()}
          <span class="logo-text">Clautartas</span>
        </a>
        <nav class="social-banner" aria-label="Redes sociales">
          <a href="${SITE.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>
          <a href="${SITE.tiktokPerfil}" target="_blank" rel="noopener" aria-label="TikTok">${ICONS.tiktok}</a>
          <a href="${SITE.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${ICONS.facebook}</a>
        </nav>
      </div>

      <div class="nav-wrap">
        <div class="nav-bar">
          <span class="nav-brand-mini">Clautartas</span>
          <div class="nav-links">${desktopLinks}</div>
          <button class="nav-toggle" id="navToggle" aria-label="Abrir menú" aria-expanded="false">
            ${ICONS.menu}
          </button>
        </div>
        <div class="nav-mobile-panel" id="navMobilePanel">
          ${mobileLinks}
        </div>
      </div>
    `;

    const toggle = document.getElementById("navToggle");
    const panel = document.getElementById("navMobilePanel");
    let open = false;
    toggle.addEventListener("click", () => {
      open = !open;
      panel.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.innerHTML = open ? ICONS.close : ICONS.menu;
    });
  }

  /* Floating WhatsApp button — every page */
  if (!document.getElementById("waFloat")) {
    const wa = document.createElement("a");
    wa.id = "waFloat";
    wa.className = "wa-float";
    wa.href = waLink();
    wa.target = "_blank";
    wa.rel = "noopener";
    wa.setAttribute("aria-label", "Escríbenos por WhatsApp");
    wa.innerHTML = ICONS.whatsapp;
    document.body.appendChild(wa);
  }
}

function renderFooter() {
  const footer = document.getElementById("site-footer");
  if (!footer) return;
  footer.innerHTML = `
    <div class="container footer-grid">
      <div>
        <div class="footer-brand">Clautartas</div>
        <p>Cursos online de repostería para emprender vendiendo tartas y postres desde casa.</p>
        <div class="footer-social">
          <a href="${SITE.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>
          <a href="${SITE.tiktokPerfil}" target="_blank" rel="noopener" aria-label="TikTok">${ICONS.tiktok}</a>
          <a href="${SITE.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${ICONS.facebook}</a>
        </div>
      </div>
      <div>
        <h4>Navegación</h4>
        <a href="index.html">Principal</a>
        <a href="resultados.html">Resultados</a>
        <a href="puntos-venta.html">Puntos de venta</a>
        <a href="contacto.html">Contacto</a>
      </div>
      <div>
        <h4>Contacto</h4>
        <a href="${waLink()}" target="_blank" rel="noopener">WhatsApp: +${SITE.whatsapp}</a>
        <a href="mailto:${SITE.email}">${SITE.email}</a>
      </div>
    </div>
    <div class="footer-bottom">© ${new Date().getFullYear()} Clautartas. Todos los derechos reservados.</div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.getAttribute("data-page") || "index.html";
  renderHeader(page);
  renderFooter();
});
