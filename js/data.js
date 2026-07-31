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
    descripcionCorta: "Domina la nueva técnica en dulces.",
    descripcionLarga: "Con este taller podras dominar completamente la nueva técnica de dulces de leche. Un innovador producto para ofrecer a sus clientes con un sabor exclusivos. Los sabores y colores quedan a su creatividad. Les vamos a enseñar mas de 5 sabores base.    .",
    temas: [
      "Variedades de Sabores",
      "variedades de colores",
      "Colorear Azucar",
	  "Colorear coco",
      "producto de larga duración",
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
    tiktoks: [
      "https://www.tiktok.com/@clautartas/video/7525439299119058232",
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
    id: 9,
    slug: "Focaccia y Ciabata",
    categoria: "Marketing",
    badgeNuevo: false,
    titulo: "Focaccia y Ciabata sin amasar",
    subtitulo: "Focaccia y Ciabata sin amasar",
    imagen: "img/foccacia.jpg",
    descripcionCorta: "Aprende a realizar la mejor focaccia y ciabatta sin amasar, con sabor a masa madre.",
    descripcionLarga: "Aprende a realizar la mejor focaccia y ciabatta sin amasar, con sabor a masa madre. Excelente sabor, de fácil preparación con un proceso muy comodo y duradero. se puede hasta congelar con una durabilidad de más de 1 mes. .",
    temas: [
      "Principios de la focaccia y ciabatta",
      "Pre fermentos Poolish",
      "Podras realizar con la msima mezcla tanto ciabatta como focaccia",
      "soporte por grupo de wsp",
      "respaldo en grupo de telegram",
	  "respaldo en grupo de facebook",
    ],
    fotos: [
	  "img/fo1.jpg",
	  "img/fo2.jpg",
	  "img/fo3.jpg",
	  "img/fo4.jpg",
	  "img/fo5.jpg",
	  "img/fo6.jpg",
    ],
    tiktoks: [
      "https://www.tiktok.com/@clautartas/video/7606860297365671175",
      "https://www.tiktok.com/@clautartas/video/7604167662226214162",
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
    id: 10,
    slug: "Masas Para Tartas",
    categoria: "masas",
    badgeNuevo: false,
    titulo: "Masas para Tartas",
    subtitulo: "10 Recetas perfectas para tartas frias y horneadas",
    imagen: "img/masa.jpg",
    descripcionCorta: "10 Recetas perfectas para tartas frias y horneadas paso a paso.",
    descripcionLarga: "10 Recetas perfectas para tartas frias y horneadas paso a paso, testeadas y modificadas por nosotros. Siempre pensando en emprender con este producto,.",
    temas: [
      "Varias opciones de Masa base para kuchen",
      "Varias opciones de Masa base para semi frio",
      "Varias opciones de Masa base para congelar",
      "Masa Quety Masa - Saludable - Masa Avena - Masa Rapida - masa neutra - masa Brisee - Masa Frola - Masa Murbe - Masa Sucree",
	  "PDF explicativo paso a paso",
      "soporte por grupo de wsp",
    ],
    fotos: [
	  "img/ma1.jpg",
	  "img/ma2.jpg",
	  "img/ma3.jpg",
	  "img/ma4.jpg",
	  "img/ma5.jpg",
	  "img/ma6.jpg",
    ],
    tiktoks: [
      "https://www.tiktok.com/@clautartas/video/7522983179456761094",
      "https://www.tiktok.com/@clautartas/video/7515941251934407942",
    ],
    precio: "$15.000",
    precioOferta: "$10.000",
    precioNota: "Pago único • acceso de por vida",
    recursos: {
      pdf: "#",
      planilla: null,
      wsp: "#",
      telegram: null,
      videos: null,
    },
  },
 {
    id: 11,
    slug: "Empanadas Dulces ",
    categoria: "Personalizadas",
    badgeNuevo: false,
    titulo: "Empanadas Dulces Exclusivas",
    subtitulo: "El producto estrella para pedidos especiales",
    imagen: "img/empanada.jpg",
    descripcionCorta: "pronto",
    descripcionLarga: "pronto.",
    temas: [
      "PDF paso a paso ",
      "Videos paso a paso",
      "grupo de telegram",
      "soporte grupo de wsp",
    ],
    fotos: [
      "https://placehold.co/500x500/FBE1E6/4A2E28?text=Foto+1",
      "https://placehold.co/500x500/F3B8C4/4A2E28?text=Foto+2",
      "https://placehold.co/500x500/D9A441/4A2E28?text=Foto+3",
    ],
    tiktoks: [
      "https://www.tiktok.com/@clautartas/video/0000000000000000009",
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
];

/* Promociones — se muestran en una ventana emergente (popup) al entrar
   a la página principal, una sola vez por visita.

   Cada promo necesita:
   - imagen: la foto/banner de la promo (súbela a /img)
   - alt: texto alternativo corto (para SEO y accesibilidad)
   - link: a dónde va la persona al hacer clic en la imagen. Dos opciones:
       a) Directo a WhatsApp con mensaje pre-armado:
          link: "WSP:Hola Clau! Vi la promo y quiero más info 🍰"
          (tiene que empezar con "WSP:" seguido del mensaje)
       b) A una página con el detalle de la promo:
          link: "promo-verano.html"  (o cualquier URL)

   Si el array está vacío [], no se muestra ningún popup.
   Si agregas más de una promo, el popup las muestra con puntos
   de navegación (igual que el carrusel del inicio). */
const PROMOS = [
  {
   imagen: "img/promo.jpg",
    alt: "Ofertas cyber week",
   link: "WSP:Hola Clau! Vi la promo de cyber week y quiero más información",
  },
];

/* Testimonios / resultados de alumnas — edita o agrega libremente.
   Cada testimonio puede mostrar UNA FOTO o UN VIDEO DE TIKTOK (no ambos):
   - Si agregas el campo "video" con el link del TikTok, se muestra una
     MINIATURA clickeable (el video NO se carga hasta que la persona hace
     clic — así la página no se llena de reproductores pesados).
   - Si NO agregas "video" (o lo dejas como null), se muestra la "foto".

   Para los videos, agrega también "miniatura" con una imagen de portada
   (puede ser un pantallazo del video). Si no la agregas, se muestra un
   ícono de TikTok genérico como portada mientras subes las miniaturas reales.

   Ejemplo con video:
   {
     nombre: "Javiera R.",
     rol: "Alumna — Curso de Costos y Precios",
     video: "https://www.tiktok.com/@clautartas/video/0000000000000000010",
     miniatura: "img/testi-javiera-portada.jpg", // opcional
     foto: null,
     quote: "...",
   } */
const TESTIMONIOS = [
  {
    nombre: "Dulce Septiembre.",
    rol: "Alumna — Variso Cursos",
    foto: "img/alumna-septiembre.jpg",
    video:"https://www.tiktok.com/@clautartas/video/7650228291047116039",
    quote: "Berny Casanova<br>Wsp +56974426290<br>STGO" ,
  },
  {
    nombre: "NEFERCAKE.",
    rol: "Alumna — Variso Cursos",
    foto: "img/alumna-nefer.jpg",
    video:"https://www.tiktok.com/@clautartas/video/7646273787222134023",
    quote: "Natalia <br>Wsp +56920282253<br>Recoleta" ,
  },
  {
    nombre: "HILDA RODRIGUEZ.",
    rol: "Alumna — Variso Cursos",
    foto: "img/alumna-hilda.jpg",
    video:"https://www.tiktok.com/@clautartas/video/7645729246962388232",
    quote: "Hilda <br>Wsp +56987958657<br>Viña" ,
  },
  {
    nombre: "Carolina.",
    rol: "Alumna — Variso Cursos",
    foto: "img/alumna-fran.jpg",
    video:"https://www.tiktok.com/@clautartas/video/7645007275798564104",
    quote: "Carolina <br>Wsp +56999839098<br>Las Cabras - Rapel" ,
  },
   {
    nombre: "Betel.",
    rol: "Alumna — Variso Cursos",
    foto: "img/alumna-betel.jpg",
    video:"https://www.tiktok.com/@clautartas/video/7644339942931418376",
    quote: "Andrea <br>Wsp +56931094838<br>Cabreros" ,
  },
   {
    nombre: "Dulce Polita.",
    rol: "Alumna — Variso Cursos",
    foto: "img/alumna-polita.jpg",
    video:"https://www.tiktok.com/@clautartas/video/7644268807891995912",
    quote: "juan <br>Wsp +56934039949<br>santiago" ,
  },
    {
    nombre: "Carolina.",
    rol: "Alumna — Variso Cursos",
    foto: "img/alumna-fran.jpg",
    video:"https://www.tiktok.com/@clautartas/video/7645007275798564104",
    quote: "Carolina <br>Wsp +56999839098<br>Las Cabras - Rapel" ,
  },
    {
    nombre: "Carolina.",
    rol: "Alumna — Variso Cursos",
    foto: "img/alumna-fran.jpg",
    video:"https://www.tiktok.com/@clautartas/video/7645007275798564104",
    quote: "Carolina <br>Wsp +56999839098<br>Las Cabras - Rapel" ,
  },
    {
    nombre: "Carolina.",
    rol: "Alumna — Variso Cursos",
    foto: "img/alumna-fran.jpg",
    video:"https://www.tiktok.com/@clautartas/video/7645007275798564104",
    quote: "Carolina <br>Wsp +56999839098<br>Las Cabras - Rapel" ,
  },
    {
    nombre: "Carolina.",
    rol: "Alumna — Variso Cursos",
    foto: "img/alumna-fran.jpg",
    video:"https://www.tiktok.com/@clautartas/video/7645007275798564104",
    quote: "Carolina <br>Wsp +56999839098<br>Las Cabras - Rapel" ,
  },
    {
    nombre: "Carolina.",
    rol: "Alumna — Variso Cursos",
    foto: "img/alumna-fran.jpg",
    video:"https://www.tiktok.com/@clautartas/video/7645007275798564104",
    quote: "Carolina <br>Wsp +56999839098<br>Las Cabras - Rapel" ,
  },
    {
    nombre: "Carolina.",
    rol: "Alumna — Variso Cursos",
    foto: "img/alumna-fran.jpg",
    video:"https://www.tiktok.com/@clautartas/video/7645007275798564104",
    quote: "Carolina <br>Wsp +56999839098<br>Las Cabras - Rapel" ,
  },
    {
    nombre: "Carolina.",
    rol: "Alumna — Variso Cursos",
    foto: "img/alumna-fran.jpg",
    video:"https://www.tiktok.com/@clautartas/video/7645007275798564104",
    quote: "Carolina <br>Wsp +56999839098<br>Las Cabras - Rapel" ,
  },
    {
    nombre: "Carolina.",
    rol: "Alumna — Variso Cursos",
    foto: "img/alumna-fran.jpg",
    video:"https://www.tiktok.com/@clautartas/video/7645007275798564104",
    quote: "Carolina <br>Wsp +56999839098<br>Las Cabras - Rapel" ,
  },
    {
    nombre: "Carolina.",
    rol: "Alumna — Variso Cursos",
    foto: "img/alumna-fran.jpg",
    video:"https://www.tiktok.com/@clautartas/video/7645007275798564104",
    quote: "Carolina <br>Wsp +56999839098<br>Las Cabras - Rapel" ,
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
    nombre: "Berny Casanova ",
    ciudad: "Santiago",
    contacto: "56974426290",
    detalle: "al detalle y x mayor",
    link: "#",
    linkTexto: "Coordinar por WhatsApp",
  },
  {
    nombre: "Nefercake  - Natalia",
    ciudad: "Recoleta",
    contacto: "56920282253",
    detalle: "al detalle y x mayor.",
    link: "#",
    linkTexto: "Coordinar por WhatsApp",
  },
  {
    nombre: "Hilda",
    ciudad: "Viña",
    contacto: "56987958657",
    detalle: "al detalle y x mayor.",
    link: "#",
    linkTexto: "Coordinar por WhatsApp",
  },
    {
    nombre: "Betel  - Andrea",
    ciudad: "cabrero",
    contacto: "56931094838",
    detalle: "al detalle y x mayor.",
    link: "#",
    linkTexto: "Coordinar por WhatsApp",
  },
    {
    nombre: "Dulce Polita - Juan",
    ciudad: "San Miguel",
    contacto: "56934039949",
    detalle: "al detalle y x mayor.",
    link: "#",
    linkTexto: "Coordinar por WhatsApp",
  },
    {
    nombre: "Nefercake  - Natalia",
    ciudad: "Recoleta",
    contacto: "56920282253",
    detalle: "al detalle y x mayor.",
    link: "#",
    linkTexto: "Coordinar por WhatsApp",
  },
    {
    nombre: "Nefercake  - Natalia",
    ciudad: "Recoleta",
    contacto: "56920282253",
    detalle: "al detalle y x mayor.",
    link: "#",
    linkTexto: "Coordinar por WhatsApp",
  },
    {
    nombre: "Nefercake  - Natalia",
    ciudad: "Recoleta",
    contacto: "56920282253",
    detalle: "al detalle y x mayor.",
    link: "#",
    linkTexto: "Coordinar por WhatsApp",
  },
    {
    nombre: "Nefercake  - Natalia",
    ciudad: "Recoleta",
    contacto: "56920282253",
    detalle: "al detalle y x mayor.",
    link: "#",
    linkTexto: "Coordinar por WhatsApp",
  },
    {
    nombre: "Nefercake  - Natalia",
    ciudad: "Recoleta",
    contacto: "56920282253",
    detalle: "al detalle y x mayor.",
    link: "#",
    linkTexto: "Coordinar por WhatsApp",
  },
];
