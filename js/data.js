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
   ============================================================ */

const SITE = {
  nombre: "Clautartas",
  whatsapp: "56944108100", // sin +, sin espacios
  mensajeWspGenerico: "Hola Clau! Quiero más información sobre tus cursos 🍰",
  instagram: "https://instagram.com/clautartas",
  tiktokPerfil: "https://tiktok.com/@clautartas",
  email: "contacto@clautartas.com",
  facebook: "https://facebook.com/clautartas",
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
    imagen: "https://placehold.co/900x700/F3B8C4/4A2E28?text=Tartas+Semifr%C3%ADo",
    descripcionCorta: "Aprende a hacer tartas semifrías sin horno, listas para vender, paso a paso.",
    descripcionLarga: "Un curso pensado para quienes quieren emprender vendiendo tartas desde casa, sin necesidad de horno ni equipos caros. Vas a aprender las bases de las tartas semifrías, cómo armarlas, decorarlas y calcular tus costos para que tu negocio sea rentable desde el primer día.",
    temas: [
      "Bases para tartas semifrías: masa, mousse y relleno",
      "Técnicas de armado y congelado",
      "Decoración simple y vistosa para redes sociales",
      "Cómo fotografiar y presentar tu producto",
      "Cálculo de costos y precio de venta",
    ],
    fotos: [
      "https://placehold.co/500x500/F3B8C4/4A2E28?text=Foto+1",
      "https://placehold.co/500x500/FBE1E6/4A2E28?text=Foto+2",
      "https://placehold.co/500x500/D9A441/4A2E28?text=Foto+3",
    ],
    tiktoks: [
      "https://www.tiktok.com/@clautartas/video/0000000000000000001",
      "https://www.tiktok.com/@clautartas/video/0000000000000000002",
    ],
    precio: "$29.990",
    precioNota: "Pago único • acceso de por vida",
    linkCompra: "https://hotmart.com/es/marketplace",
    recursos: {
      pdf: "#",
      planilla: "#",
      wsp: "#",
      telegram: "#",
      videos: "#",
    },
  },
  {
    id: 2,
    slug: "cheesecakes-cremosos-sin-horno",
    categoria: "Sin horno",
    badgeNuevo: false,
    titulo: "Cheesecakes Cremosos sin Horno",
    subtitulo: "Textura perfecta, sin rajaduras, sin horno",
    imagen: "https://placehold.co/900x700/FBE1E6/4A2E28?text=Cheesecakes",
    descripcionCorta: "La receta y técnica exacta para lograr un cheesecake cremoso, firme y sin fallas.",
    descripcionLarga: "Vas a dominar el cheesecake sin horno perfecto: base crocante, relleno cremoso que corta bien y coberturas que enamoran a simple vista. Ideal para vender por porciones o tartas enteras.",
    temas: [
      "Base y proporciones para que no se desarme",
      "Relleno cremoso a prueba de errores",
      "Coberturas: frutos rojos, caramelo, chocolate",
      "Conservación y transporte para venta",
    ],
    fotos: [
      "https://placehold.co/500x500/FBE1E6/4A2E28?text=Foto+1",
      "https://placehold.co/500x500/F3B8C4/4A2E28?text=Foto+2",
    ],
    tiktoks: [
      "https://www.tiktok.com/@clautartas/video/0000000000000000003",
    ],
    precio: "$24.990",
    precioNota: "Pago único • acceso de por vida",
    linkCompra: "https://hotmart.com/es/marketplace",
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
    slug: "tartas-de-temporada-con-frutas",
    categoria: "Frutales",
    badgeNuevo: false,
    titulo: "Tartas de Temporada con Frutas",
    subtitulo: "Saca el máximo provecho a la fruta de estación",
    imagen: "https://placehold.co/900x700/D9A441/4A2E28?text=Tartas+de+Fruta",
    descripcionCorta: "Tartas frescas y coloridas usando fruta de temporada, con técnicas de brillo y armado.",
    descripcionLarga: "Aprende a diseñar tartas frutales que se ven espectaculares y aprovechan lo mejor de cada temporada, bajando tus costos y subiendo el atractivo visual de tu vitrina.",
    temas: [
      "Selección y preparación de fruta",
      "Cremas base: pastelera, diplomata, chantilly",
      "Técnicas de brillo y conservación",
      "Armado y distribución para vender por porción",
    ],
    fotos: [
      "https://placehold.co/500x500/D9A441/4A2E28?text=Foto+1",
      "https://placehold.co/500x500/F3B8C4/4A2E28?text=Foto+2",
      "https://placehold.co/500x500/FBE1E6/4A2E28?text=Foto+3",
    ],
    tiktoks: [],
    precio: "$24.990",
    precioNota: "Pago único • acceso de por vida",
    linkCompra: "https://hotmart.com/es/marketplace",
    recursos: {
      pdf: "#",
      planilla: "#",
      wsp: "#",
      telegram: "#",
      videos: null,
    },
  },
  {
    id: 4,
    slug: "mousse-y-postres-en-vaso",
    categoria: "Postres individuales",
    badgeNuevo: false,
    titulo: "Mousse y Postres en Vaso",
    subtitulo: "Postres individuales, ideales para eventos",
    imagen: "https://placehold.co/900x700/F3B8C4/4A2E28?text=Postres+en+Vaso",
    descripcionCorta: "Postres en vaso fáciles de producir en volumen, perfectos para catering y eventos.",
    descripcionLarga: "Una línea de productos muy rentable: postres individuales en vaso que se preparan con anticipación, se transportan fácil y tienen excelente margen para eventos y encargos grandes.",
    temas: [
      "Mousses base: chocolate, maracuyá, frutos rojos",
      "Armado en capas y presentación",
      "Producción en volumen para eventos",
      "Packaging y transporte",
    ],
    fotos: [
      "https://placehold.co/500x500/F3B8C4/4A2E28?text=Foto+1",
      "https://placehold.co/500x500/D9A441/4A2E28?text=Foto+2",
    ],
    tiktoks: [
      "https://www.tiktok.com/@clautartas/video/0000000000000000004",
    ],
    precio: "$19.990",
    precioNota: "Pago único • acceso de por vida",
    linkCompra: "https://hotmart.com/es/marketplace",
    recursos: {
      pdf: "#",
      planilla: null,
      wsp: "#",
      telegram: null,
      videos: "#",
    },
  },
  {
    id: 5,
    slug: "tartas-frias-para-eventos",
    categoria: "Eventos",
    badgeNuevo: false,
    titulo: "Tartas Frías para Eventos",
    subtitulo: "Produce para matrimonios, cumpleaños y grandes pedidos",
    imagen: "https://placehold.co/900x700/FBE1E6/4A2E28?text=Tartas+para+Eventos",
    descripcionCorta: "Planifica y produce tartas frías para pedidos grandes sin perder calidad ni plata.",
    descripcionLarga: "Este curso está enfocado en la logística: cómo organizar tu producción, tus tiempos y tus costos cuando te llegan pedidos grandes para eventos, sin que se te desordene el negocio.",
    temas: [
      "Planificación de producción por volumen",
      "Recetas que escalan bien",
      "Cotización de pedidos grandes",
      "Logística de entrega y armado en el lugar",
    ],
    fotos: [
      "https://placehold.co/500x500/FBE1E6/4A2E28?text=Foto+1",
      "https://placehold.co/500x500/F3B8C4/4A2E28?text=Foto+2",
    ],
    tiktoks: [],
    precio: "$27.990",
    precioNota: "Pago único • acceso de por vida",
    linkCompra: "https://hotmart.com/es/marketplace",
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
    slug: "costos-y-precios-para-tu-negocio",
    categoria: "Negocio",
    badgeNuevo: true,
    titulo: "Costos y Precios para tu Negocio de Postres",
    subtitulo: "La planilla y método para no perder plata nunca más",
    imagen: "https://placehold.co/900x700/D9A441/4A2E28?text=Costos+y+Precios",
    descripcionCorta: "Aprende a calcular el costo real de tus recetas y fijar precios rentables, con planilla incluida.",
    descripcionLarga: "El curso más pedido por mis alumnas: paso a paso para calcular el costo real de cada receta (ingredientes, tiempo, envases, delivery) y transformarlo en un precio de venta justo y rentable. Incluye la planilla de costos lista para usar.",
    temas: [
      "Cómo calcular el costo real de una receta",
      "Márgenes de ganancia según tipo de producto",
      "Uso de la planilla de costeo paso a paso",
      "Errores comunes al poner precios",
    ],
    fotos: [
      "https://placehold.co/500x500/D9A441/4A2E28?text=Foto+1",
      "https://placehold.co/500x500/FBE1E6/4A2E28?text=Foto+2",
    ],
    tiktoks: [
      "https://www.tiktok.com/@clautartas/video/0000000000000000005",
    ],
    precio: "$17.990",
    precioNota: "Pago único • incluye planilla descargable",
    linkCompra: "https://hotmart.com/es/marketplace",
    recursos: {
      pdf: "#",
      planilla: "#",
      wsp: "#",
      telegram: "#",
      videos: null,
    },
  },
  {
    id: 7,
    slug: "decoracion-con-manga-y-boquillas",
    categoria: "Decoración",
    badgeNuevo: false,
    titulo: "Decoración con Manga y Boquillas",
    subtitulo: "Técnicas base para decorar como profesional",
    imagen: "https://placehold.co/900x700/F3B8C4/4A2E28?text=Decoraci%C3%B3n",
    descripcionCorta: "Domina las técnicas base de manga y boquillas para decorar tartas y cupcakes.",
    descripcionLarga: "Desde tomar la manga correctamente hasta lograr rosetones, ondas y bordes limpios. Un curso práctico para subir el nivel visual de tus productos sin necesidad de cursos de repostería avanzada.",
    temas: [
      "Tipos de boquillas y para qué sirve cada una",
      "Consistencia correcta de la crema",
      "Rosetones, ondas y bordes",
      "Errores comunes y cómo corregirlos",
    ],
    fotos: [
      "https://placehold.co/500x500/F3B8C4/4A2E28?text=Foto+1",
      "https://placehold.co/500x500/D9A441/4A2E28?text=Foto+2",
      "https://placehold.co/500x500/FBE1E6/4A2E28?text=Foto+3",
    ],
    tiktoks: [
      "https://www.tiktok.com/@clautartas/video/0000000000000000006",
    ],
    precio: "$19.990",
    precioNota: "Pago único • acceso de por vida",
    linkCompra: "https://hotmart.com/es/marketplace",
    recursos: {
      pdf: "#",
      planilla: null,
      wsp: "#",
      telegram: null,
      videos: "#",
    },
  },
  {
    id: 8,
    slug: "tartas-veganas-y-sin-gluten",
    categoria: "Especiales",
    badgeNuevo: false,
    titulo: "Tartas Veganas y Sin Gluten",
    subtitulo: "Amplía tu público con opciones especiales",
    imagen: "https://placehold.co/900x700/FBE1E6/4A2E28?text=Veganas+%2F+Sin+Gluten",
    descripcionCorta: "Recetas veganas y sin gluten que no sacrifican sabor ni textura, para ampliar tu carta.",
    descripcionLarga: "Cada vez más clientes buscan opciones veganas o sin gluten. Este curso te enseña reemplazos, técnicas y recetas probadas para que puedas ofrecer estas alternativas sin perder calidad.",
    temas: [
      "Reemplazos de huevo, lácteos y gluten",
      "Bases y masas sin gluten que funcionan",
      "Recetas veganas de mousse y cremas",
      "Cómo comunicar y vender estos productos",
    ],
    fotos: [
      "https://placehold.co/500x500/FBE1E6/4A2E28?text=Foto+1",
      "https://placehold.co/500x500/F3B8C4/4A2E28?text=Foto+2",
    ],
    tiktoks: [],
    precio: "$22.990",
    precioNota: "Pago único • acceso de por vida",
    linkCompra: "https://hotmart.com/es/marketplace",
    recursos: {
      pdf: "#",
      planilla: "#",
      wsp: "#",
      telegram: null,
      videos: null,
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
    precioNota: "Pago único • acceso de por vida",
    linkCompra: "https://hotmart.com/es/marketplace",
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
    precioNota: "Pago único • acceso de por vida",
    linkCompra: "https://hotmart.com/es/marketplace",
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
    precioNota: "Pago único • acceso de por vida",
    linkCompra: "https://hotmart.com/es/marketplace",
    recursos: {
      pdf: "#",
      planilla: "#",
      wsp: "#",
      telegram: "#",
      videos: "#",
    },
  },
];

/* Testimonios / resultados de alumnas — edita o agrega libremente */
const TESTIMONIOS = [
  {
    nombre: "Javiera R.",
    rol: "Alumna — Curso de Costos y Precios",
    foto: "https://placehold.co/500x400/F3B8C4/4A2E28?text=Javiera",
    quote: "Antes vendía casi sin ganar nada. Con la planilla de costos por fin supe cuánto cobrar y mi negocio empezó a dejar plata de verdad.",
  },
  {
    nombre: "Constanza M.",
    rol: "Alumna — Tartas para Emprender",
    foto: "https://placehold.co/500x400/D9A441/4A2E28?text=Constanza",
    quote: "Empecé sin saber nada de pastelería y en un mes ya estaba vendiendo tartas los fines de semana. Las clases son súper claras.",
  },
  {
    nombre: "Fernanda P.",
    rol: "Alumna — Decoración con Manga",
    foto: "https://placehold.co/500x400/FBE1E6/4A2E28?text=Fernanda",
    quote: "Mis tartas se veían caseras y ahora se ven de pastelería. Mis clientas lo notaron altiro y empecé a subir precios.",
  },
  {
    nombre: "Daniela S.",
    rol: "Alumna — Postres para Redes Sociales",
    foto: "https://placehold.co/500x400/F3B8C4/4A2E28?text=Daniela",
    quote: "Aprendí a grabar con el celular no más y mis videos empezaron a tener más vistas. De ahí me llegaron mis primeros pedidos grandes.",
  },
  {
    nombre: "Valentina T.",
    rol: "Alumna — Tartas de Cumpleaños",
    foto: "https://placehold.co/500x400/D9A441/4A2E28?text=Valentina",
    quote: "Aprendí a cotizar bien las tartas personalizadas. Ahora las cobro como corresponde y no me quedo trabajando gratis.",
  },
  {
    nombre: "Camila G.",
    rol: "Alumna — Cheesecakes sin Horno",
    foto: "https://placehold.co/500x400/FBE1E6/4A2E28?text=Camila",
    quote: "Se me rajaban todos los cheesecakes hasta que hice este curso. Ahora me salen perfectos todas las veces.",
  },
];

const STATS = [
  { num: "500+", label: "Alumnas activas" },
  { num: "11", label: "Cursos disponibles" },
  { num: "4.9★", label: "Valoración promedio" },
  { num: "+300", label: "Emprendimientos iniciados" },
];

/* Puntos de venta — físicos o de referencia. Edita/agrega los que necesites */
const PUNTOS_VENTA = [
  {
    nombre: "Feria Costanera — Stand Clautartas",
    detalle: "Sábados y domingos, 10:00 a 18:00 hrs.",
    link: "#",
    linkTexto: "Ver ubicación",
  },
  {
    nombre: "Despacho a domicilio Región Metropolitana",
    detalle: "Pedidos con 48 hrs de anticipación.",
    link: "#",
    linkTexto: "Coordinar por WhatsApp",
  },
  {
    nombre: "Tienda online — Cursos digitales",
    detalle: "Acceso inmediato desde cualquier parte de Chile.",
    link: "#",
    linkTexto: "Ver cursos",
  },
];
