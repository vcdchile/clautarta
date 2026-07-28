/* ============================================================
   CLAUTARTAS — datos del sitio
   ------------------------------------------------------------
   Este es el ÚNICO archivo que necesitas editar para:
   - Agregar / quitar / modificar cursos
   - Cambiar testimonios y resultados
   - Cambiar puntos de venta
   - Cambiar tu número de WhatsApp y redes sociales

   Para AGREGAR un curso nuevo: copia un objeto completo dentro
   de CURSOS (desde { hasta },) pégalo al final, cambia el "id"
   por uno nuevo (que no se repita) y reemplaza los datos.
   El sitio se actualiza solo, no hay que tocar el HTML.

   PRECIOS DE OFERTA:
   Para poner un curso en oferta, agrega el campo "precioOferta"
   con el precio rebajado (ej: precioOferta: "$25.000"). El precio
   normal ("precio") se mostrará tachado arriba y la oferta se
   verá destacada. Si un curso NO tiene oferta, simplemente no
   agregues ese campo (o déjalo como null).
   ============================================================ */

const SITE = {
  nombre: "Clautartas",
  whatsapp: "56944108100", // sin +, sin espacios
  mensajeWspGenerico: "Hola Clau! Quiero más información sobre tus cursos 🍰",
  instagram: "https://instagram.com/clautartas",
  tiktokPerfil: "https://tiktok.com/@clautartas",
  email: "clautartas@gmail.com",
  facebook: "https://facebook.com/clautartas",
  telegramCanal: "https://t.me/+RVUXrFt7kidjZmVh",
  // Tasa de cambio referencial CLP -> USD para mostrar el precio en dólares.
  // Actualízala cuando quieras (ej: revisa el valor del dólar y cámbialo aquí).
  usdRate: 800,
};

/* Imágenes: reemplaza estas URLs de ejemplo por fotos reales tuyas.
   Basta con subir tus fotos a la carpeta /img y escribir "img/nombre.jpg" */
const CURSOS = [
  {
    id: 1,
    slug: "tartas-para-emprender-semifrio",
    categoria: "Destacado",
    badgeNuevo: true,
    titulo: "Tartas para Emprender — Semifrío sin Horno",
    subtitulo: "El curso insignia: aprende a vender tartas desde tu casa",
    imagen: "img/semi-frio1.jpg",
    descripcionCorta: "Aprende a hacer tartas semifrías sin horno, listas para vender, paso a paso.",
    descripcionLarga: "Un curso pensado para quienes quieren emprender vendiendo tartas desde casa, sin necesidad de horno ni equipos caros. Vas a aprender las bases de las tartas semifrías, cómo armarlas, decorarlas y calcular tus costos para que tu negocio sea rentable desde el primer día.",
    temas: [
      "Más de 14 recetas Premium" ,
	  "Bases para tartas semifrías: masa Quety",
      "Preparación de rellenos Premium de bajo costo y larga duración",
	  "Decoración económica y llamativa",
	  "Diferentes tipos de coberturas y ganach",
      "Técnicas de Porcionado y refrigeración",
      "Opciones de venta en diferentes presentaciones",
      "Cálculo de costos y precio de venta al detalle y x mayor",
	  "soporte por grupo de wsp",
      "respaldo en grupo de telegram",
	  "respaldo en grupo de facebook",
    ],
    fotos: [
      "img/chees500x500.webp",
      "img/maracu.webp",
      "img/maracuya500x500x1.webp",
      "img/oreo500x500.jpg",
	  "img/semi-frio500x5004.webp",
	  "img/semi-frio500x5005.webp",
    ],
    tiktoks: [
      "https://www.tiktok.com/@clautartas/video/7523843164252228869",
      "https://www.tiktok.com/@clautartas/video/7642553756269202706",
    ],
    precio: "$50.000",
    precioOferta: "$40.000",
    precioNota: "Pago único • acceso de por vida - Full",
    recursos: {
      pdf: "#",
      planilla: "#",
      wsp: "#",
      telegram: null,
      videos: "#",
    },
  },
  {
    id: 2,
    slug: "Horneado",
    categoria: "Destacado",
    badgeNuevo: false,
    titulo: "Curso Horneado",
    subtitulo: "Textura perfecta, larga duración, ideal para emprender",
    imagen: "img/horneado.webp",
    descripcionCorta: "La receta y técnica exacta para lograr kuchen y Pies perfectos y sin fallas.",
    descripcionLarga: "Vas a dominar la técnica del Horneado, relleno cremoso que corta bien y coberturas que enamoran a simple vista. Ideal para vender por porciones o tartas enteras.",
    temas: [
      "Masa Base ( quety)",
	  "Más de 14 recetas Premium ",
      "Rellenos cremoso a prueba de errores de fácil Preparación",
      "Diferentes tipos de coberturas y ganach",
      "Diferentes tipos de presentaciones para la venta",
      "Armado de Mix de sabores",
	  "Técnicas de Porcionado y refrigeración",
      "Diferentes tipos de coberturas y ganach",
      "Calcular costo al detalle y por mayor",
	  "soporte por grupo de wsp",
      "respaldo en grupo de telegram",
	  "respaldo en grupo de facebook",
    ],
    fotos: [
	  "img/horn1.jpg",
	  "img/horn2.jpg",
	  "img/horn3.webp",
	  "img/horn5.jpg",
	  "img/horn4.webp",
	  "img/horn6.webp",
    
    ],
    tiktoks: [
      "https://www.tiktok.com/@clautartas/video/7521602746387156230",
	  "https://www.tiktok.com/@clautartas/video/7642553756269202706",
    ],
    precio: "$50.000",
    precioOferta: "$40.000",
    precioNota: "Pago único • acceso de por vida - Full",
    recursos: {
      pdf: "#",
      planilla: "#",
      wsp: "#",
      telegram: null,
      videos: "#",
    },
  },
  {
    id: 3,
    slug: "Recetario 3",
    categoria: "Talleres",
    badgeNuevo: false,
    titulo: "Recetario 3 Tartas Horneadas",
    subtitulo: "9 recetas Complementarias de Hornedos",
    imagen: "img/recetario3.jpg",
    descripcionCorta: "Tartas Horneadas a bajo costo.",
    descripcionLarga: "Tartas con sabores exclusivos de excelente venta, proceso muy rapido, especial para emprender a bajo costo.",
    temas: [
      "Masa Base ( quety)",
	  "9 recetas Premium de rellenos ",
      "Rellenos cremoso a prueba de errores de fácil Preparación",
      "sabores exclusivos paso a paso",
      "Diferentes tipos de presentaciones para la venta",
      "Sabores para armado de Mix de sabores",
	  "soporte por grupo de wsp",
      "respaldo en grupo de telegram",
	  "respaldo en grupo de facebook",
    ],
    fotos: [
	  "img/re1.jpg",
	  "img/re2.webp",
	  "img/re3.webp",
	  "img/re4.webp",
	  "img/re5.webp",
	  "img/re6.webp",
    ],
    tiktoks: [],
    precio: "$20.000",
    precioOferta: "$15.000",
    precioNota: "Pago único • acceso de por vida - Full",
    recursos: {
      pdf: "#",
      planilla: null,
      wsp: "#",
      telegram: "#",
      videos: null,
    },
  },
  {
    id: 4,
    slug: "Pan de Pascua",
    categoria: "horneados",
    badgeNuevo: false,
    titulo: "Pan de Pascua Premium",
    subtitulo: "Sin preservantes - sin conservantes - sin aromatizantes - sin colorantes - 100% natural",
    imagen: "img/pan.jpg",
    descripcionCorta: "2 Recetas completas paso a paso premium ideal para Emprender",
    descripcionLarga: "Sin preservantes - sin conservantes - sin aromatizantes - sin colorantes - 100% natural. De costo muy económico y facil preparacion. Te apoyamos desde un principio por todas las plataformas, además de videos paso a paso",
    temas: [
      "Receta Pan de Pascua Premium",
      "Receta Budin Navideño",
      "Preparación Tradicional 100% Natural",
      "Diferentes Tipos de Glace ",
	  "Soporte WhatsApp 4/7",
	  "Videos paso a paso del proceso",
	  "Material para imprimir (etiquetas)",
	  "soporte por grupo de wsp",
      "respaldo en grupo de telegram",
	  "respaldo en grupo de facebook",
    ],
    fotos: [
	  "img/pan1.jpg",
	  "img/pan2.jpg",
	  "img/pan3.jpg",
	  "img/pan4.jpg",
	  "img/pan5.jpg",
	  "img/pan6.jpg",
    ],
    tiktoks: [
      "https://www.tiktok.com/@clautartas/video/7569384252488387848",
	  "https://www.tiktok.com/@clautartas/video/7571849253425843474",
    ],
    precio: "$20.000",
    precioOferta: "$15.000",
    precioNota: "Pago único • acceso de por vida - Full",
    recursos: {
      pdf: "#",
      planilla: "#",
      wsp: "#",
      telegram: "#",
      videos: "#",
    },
  },
  {
    id: 5,
    slug: "Taller cookies",
    categoria: "galletas Horneadas",
    badgeNuevo: true,
    titulo: "Taller cookies para emprender",
    subtitulo: "Produce para venta x mayor y al detalle, especial para eventos y grandes pedidos",
    imagen: "img/cookie.jpg",
    descripcionCorta: "Taller completo especial para emprender con cookies. Economico y fácil de preparar.",
    descripcionLarga: "Taller completo especial para emprender con cookies, economico y fácil de preparar. Larga duración y excelente recepcióndel publico.",
    temas: [
      "Recetas en Video paso a paso",
      "Recetas realizadas con Margarina no con Mantequilla",
      "Varias opciones de presentación y Decoración",
      "Estilo Subway",
	  "Estilo de la Casa",
	  "Estilo New York",
	  "Mini cookie",
	  "Estilo chewy",
	  "Maicenas",
	  "Craquelada",
	  "soporte por grupo de wsp",
      "respaldo en grupo de telegram",
	  "respaldo en grupo de facebook",
	  
    ],
    fotos: [
	  "img/cook1.jpg",
	  "img/cook2.jpg",
	  "img/cook3.jpg",
	  "img/cook4.jpg",
	  "img/cook5.jpg",
	  "img/cook6.jpg",
    ],
    tiktoks: [],
    precio: "$20.000",
    precioOferta: "$15.000",
    precioNota: "Pago único • acceso de por vida - Full",
    recursos: {
      pdf: "#",
      planilla: "#",
      wsp: "#",
      telegram: "#",
      videos: "#",
    },
  },
  {
    id: 6,
    slug: "Trufones",
    categoria: "emprender",
    badgeNuevo: true,
    titulo: "Taller de Trufones",
    subtitulo: "Excelente opcion para emprender en ventas al detalle y x mayor",
    imagen: "img/trufon.jpg",
    descripcionCorta: "Excelente opcion para emprender en ventas al detalle y x mayor. facil de preparar y muy bajo costo de producción",
    descripcionLarga: "Una excelente opcion para comenzar a emprender o aumentar tus ventas. Larga duración sin necesidad de refrigeración",
    temas: [
      "Receta Economica ",
      "Facil Preparación",
      "Video paso a paso",
      "Cómo calcular el costo real de una receta",
	  "Acceso a grupos de wsp y telegram para siempre",
	  "soporte por grupo de wsp",
      "respaldo en grupo de telegram",
	  "respaldo en grupo de facebook",
    ],
    fotos: [
	  "img/tru1.jpg",
	  "img/tru2.jpg",
	  "img/tru3.jpg",
	  "img/tru4.jpg",
	  "img/tru5.jpg",
	  "img/tru6.jpg",
    ],
    tiktoks: [
      "https://www.tiktok.com/@clautartas/video/7540759734303919416",
    ],
    precio: "$20.000",
    precioOferta: "$15.000",
    precioNota: "Pago único • incluye planilla descargable",
    recursos: {
      pdf: "#",
      planilla: "#",
      wsp: "#",
      telegram: "#",
      videos: "#",
    },
  },
  {
    id: 7,
    slug: "Dulces de Leche",
    categoria: "Dulces",
    badgeNuevo: true,
    titulo: "Dulces de leche",
    subtitulo: "Dulces de Leche",
    imagen: "img/leche.jpg",
    descripcionCorta: "Domina las técnicas base de manga y boquillas para decorar tartas y cupcakes.",
    descripcionLarga: "Desde tomar la manga correctamente hasta lograr rosetones, ondas y bordes limpios. Un curso práctico para subir el nivel visual de tus productos sin necesidad de cursos de repostería avanzada.",
    temas: [
      "Tipos de boquillas y para qué sirve cada una",
      "Consistencia correcta de la crema",
      "Rosetones, ondas y bordes",
      "Errores comunes y cómo corregirlos",
	  "soporte por grupo de wsp",
      "respaldo en grupo de telegram",
	  "respaldo en grupo de facebook",
    ],
    fotos: [
	  "img/co1.jpg",
	  "img/co2.jpg",
	  "img/co3.jpg",
	  "img/co4.jpg",
	  "img/co5.jpg",
	  "img/co6.jpg",
    ],
    tiktoks: [
      "https://www.tiktok.com/@clautartas/video/7659270856517881096",
	  "https://www.tiktok.com/@clautartas/video/7577783187896667399"
    ],
    precio: "$20.000",
    precioOferta: "$15.000",
    precioNota: "Pago único • acceso de por vida",
    recursos: {
      pdf: "#",
      planilla: "#",
      wsp: "#",
      telegram: "#",
      videos: "#",
    },
  },
  {
    id: 8,
    slug: "Torta Hojarasca",
    categoria: "Torta",
    badgeNuevo: false,
    titulo: "Torta Hojarasca Curicana",
    subtitulo: "Amplía tu público con opciones especiales",
    imagen: "img/hojarasca.jpg",
    descripcionCorta: "Recetas mejorada para lograr un resultado fácil y económico.",
    descripcionLarga: "Recetas mejorada para lograr un resultado fácil y económico. Aprenderas desde cero el proceso paso a paso en video y en pdf. Con esta receta podras realizar ademásde tortas, pasteles y todo lo que tu creatividad lo permita",
    temas: [
      "Proceso desde cero  paso a paso",
      "Relleno y Decoración",
      "soporte por grupo de wsp",
      "respaldo en grupo de telegram",
	  "respaldo en grupo de facebook",
    ],
    fotos: [
	  "img/tor1.jpg",
	  "img/tor2.jpg",
	  "img/tor3.jpg",
	  "img/tor4.jpg",
	  "img/tor5.jpg",
	  "img/tor6.jpg",
    ],
    tiktoks: [],
    precio: "$20.000",
    precioOferta: "$15.0000",
    precioNota: "Pago único • acceso de por vida",
    recursos: {
      pdf: "#",
      planilla: "#",
      wsp: "#",
      telegram: "#",
      videos: "#",
    },
  },
  {
    id: 9,
    slug: "postres-para-redes-sociales",
    categoria: "Marketing",
    badgeNuevo: false,
    titulo: "Postres para Redes Sociales",
    subtitulo: "Fotografía, video y venta desde tu celular",
    imagen: "https://placehold.co/900x700/D9A441/4A2E28?text=Redes+Sociales",
    descripcionCorta: "Aprende a fotografiar y grabar tus postres para vender más por Instagram y TikTok.",
    descripcionLarga: "No necesitas cámara profesional: te enseño a usar tu celular, luz natural y edición simple para que tus postres se vean irresistibles en redes, y cómo convertir esas publicaciones en pedidos reales.",
    temas: [
      "Luz, ángulos y fondos con lo que tienes en casa",
      "Edición simple desde el celular",
      "Guion básico para videos de TikTok",
      "Cómo transformar seguidores en clientes",
    ],
    fotos: [
      "https://placehold.co/500x500/D9A441/4A2E28?text=Foto+1",
      "https://placehold.co/500x500/F3B8C4/4A2E28?text=Foto+2",
    ],
    tiktoks: [
      "https://www.tiktok.com/@clautartas/video/0000000000000000007",
      "https://www.tiktok.com/@clautartas/video/0000000000000000008",
    ],
    precio: "$21.990",
    precioOferta: "$14.990",
    precioNota: "Pago único • acceso de por vida",
    recursos: {
      pdf: "#",
      planilla: null,
      wsp: "#",
      telegram: "#",
      videos: "#",
    },
  },
  {
    id: 10,
    slug: "kuchen-y-tartas-alemanas",
    categoria: "Tradicionales",
    badgeNuevo: false,
    titulo: "Kuchen y Tartas Alemanas",
    subtitulo: "Clásicos de siempre, con técnica profesional",
    imagen: "https://placehold.co/900x700/F3B8C4/4A2E28?text=Kuchen",
    descripcionCorta: "Los kuchen clásicos chilenos con receta afinada para vender: de manzana, nuez y más.",
    descripcionLarga: "Los sabores de siempre, pero con receta profesional: masa que no se pone dura, relleno en su punto justo y presentación que se ve casera pero cuidada. Perfecto para cafeterías y ferias.",
    temas: [
      "Masa base para kuchen",
      "Kuchen de manzana, nuez y frutos secos",
      "Conservación y venta por porciones",
      "Adaptación de recetas familiares a escala de venta",
    ],
    fotos: [
      "https://placehold.co/500x500/F3B8C4/4A2E28?text=Foto+1",
      "https://placehold.co/500x500/D9A441/4A2E28?text=Foto+2",
    ],
    tiktoks: [],
    precio: "$17.990",
    precioOferta: "$12.990",
    precioNota: "Pago único • acceso de por vida",
    recursos: {
      pdf: "#",
      planilla: "#",
      wsp: "#",
      telegram: null,
      videos: null,
    },
  },
  {
    id: 11,
    slug: "tartas-personalizadas-para-cumpleanos",
    categoria: "Personalizadas",
    badgeNuevo: false,
    titulo: "Tartas Personalizadas para Cumpleaños",
    subtitulo: "El producto estrella para pedidos especiales",
    imagen: "https://placehold.co/900x700/FBE1E6/4A2E28?text=Tartas+de+Cumplea%C3%B1os",
    descripcionCorta: "Diseña tartas personalizadas temáticas que se cobran mejor y fidelizan clientes.",
    descripcionLarga: "Las tartas personalizadas son de las que mejor se cobran. Aprende a cotizarlas bien, planificar el diseño con el cliente y ejecutar decoraciones temáticas sin estrés de último minuto.",
    temas: [
      "Cómo cotizar un diseño personalizado",
      "Conversación y brief con el cliente",
      "Técnicas de decoración temática",
      "Planificación de tiempos para no atrasarte",
    ],
    fotos: [
      "https://placehold.co/500x500/FBE1E6/4A2E28?text=Foto+1",
      "https://placehold.co/500x500/F3B8C4/4A2E28?text=Foto+2",
      "https://placehold.co/500x500/D9A441/4A2E28?text=Foto+3",
    ],
    tiktoks: [
      "https://www.tiktok.com/@clautartas/video/0000000000000000009",
    ],
    precio: "$24.990",
    precioOferta: "$16.990",
    precioNota: "Pago único • acceso de por vida",
    recursos: {
      pdf: "#",
      planilla: "#",
      wsp: "#",
      telegram: "#",
      videos: "#",
    },
  },
];

/* Testimonios / resultados de alumnas — edita o agrega libremente.
   Cada testimonio puede mostrar UNA FOTO o UN VIDEO DE TIKTOK (no ambos):
   - Si agregas el campo "video" con el link del TikTok, se muestra el video.
   - Si NO agregas "video" (o lo dejas como null), se muestra la "foto".
   Ejemplo con video:
   {
     nombre: "Javiera R.",
     rol: "Alumna — Curso de Costos y Precios",
     video: "https://www.tiktok.com/@clautartas/video/0000000000000000010",
     foto: null,
     quote: "...",
   } */
const TESTIMONIOS = [
  {
    nombre: "Javiera R.",
    rol: "Alumna — Curso de Costos y Precios",
    foto: "https://placehold.co/500x400/F3B8C4/4A2E28?text=Javiera",
    video: null,
    quote: "Antes vendía casi sin ganar nada. Con la planilla de costos por fin supe cuánto cobrar y mi negocio empezó a dejar plata de verdad.",
  },
  {
    nombre: "Constanza M.",
    rol: "Alumna — Tartas para Emprender",
    foto: "https://placehold.co/500x400/D9A441/4A2E28?text=Constanza",
    video: null,
    quote: "Empecé sin saber nada de pastelería y en un mes ya estaba vendiendo tartas los fines de semana. Las clases son súper claras.",
  },
  {
    nombre: "Fernanda P.",
    rol: "Alumna — Decoración con Manga",
    foto: "https://placehold.co/500x400/FBE1E6/4A2E28?text=Fernanda",
    video: null,
    quote: "Mis tartas se veían caseras y ahora se ven de pastelería. Mis clientas lo notaron altiro y empecé a subir precios.",
  },
  {
    nombre: "Daniela S.",
    rol: "Alumna — Postres para Redes Sociales",
    foto: "https://placehold.co/500x400/F3B8C4/4A2E28?text=Daniela",
    video: null,
    quote: "Aprendí a grabar con el celular no más y mis videos empezaron a tener más vistas. De ahí me llegaron mis primeros pedidos grandes.",
  },
  {
    nombre: "Valentina T.",
    rol: "Alumna — Tartas de Cumpleaños",
    foto: "https://placehold.co/500x400/D9A441/4A2E28?text=Valentina",
    video: null,
    quote: "Aprendí a cotizar bien las tartas personalizadas. Ahora las cobro como corresponde y no me quedo trabajando gratis.",
  },
  {
    nombre: "Camila G.",
    rol: "Alumna — Cheesecakes sin Horno",
    foto: "https://placehold.co/500x400/FBE1E6/4A2E28?text=Camila",
    video: null,
    quote: "Se me rajaban todos los cheesecakes hasta que hice este curso. Ahora me salen perfectos todas las veces.",
  },
];

const STATS = [
  { num: "500+", label: "Alumnas activas" },
  { num: "11", label: "Cursos disponibles" },
  { num: "4.9★", label: "Valoración promedio" },
  { num: "+300", label: "Emprendimientos iniciados" },
];

/* Puntos de venta — físicos o de referencia.
   Edita/agrega los que necesites. Campos:
   - nombre: nombre del punto de venta o servicio
   - ciudad: ciudad donde se ubica (o "Online" si aplica)
   - contacto: teléfono, WhatsApp o usuario de contacto
   - link (opcional): si tienes un link (mapa, WhatsApp, etc.)
   - linkTexto (opcional): texto del botón del link */
const PUNTOS_VENTA = [
  {
    nombre: "Feria Costanera — Stand Clautartas",
    ciudad: "Curicó",
    contacto: "+56 9 4410 8100",
    detalle: "Sábados y domingos, 10:00 a 18:00 hrs.",
    link: "#",
    linkTexto: "Ver ubicación",
  },
  {
    nombre: "Despacho a domicilio Región Metropolitana",
    ciudad: "Santiago",
    contacto: "+56 9 4410 8100",
    detalle: "Pedidos con 48 hrs de anticipación.",
    link: "#",
    linkTexto: "Coordinar por WhatsApp",
  },
  {
    nombre: "Tienda online — Cursos digitales",
    ciudad: "Online (todo Chile)",
    contacto: "clautartas@gmail.com",
    detalle: "Acceso inmediato desde cualquier parte de Chile.",
    link: "#",
    linkTexto: "Ver cursos",
  },
];
