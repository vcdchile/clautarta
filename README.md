# Clautartas — sitio web

Sitio web para vender cursos online de repostería. Mobile-first, funciona igual en PC.

## Estructura

```
clautartas/
├── index.html          → Principal (banner rotativo + catálogo de cursos)
├── curso.html           → Detalle de un curso (usa ?id=1, ?id=2, etc.)
├── resultados.html       → Testimonios y resultados de alumnas
├── puntos-venta.html     → Puntos de venta / despacho
├── contacto.html         → Contacto
├── css/style.css         → Todos los estilos y colores
├── js/data.js            → ⭐ AQUÍ EDITAS TODO EL CONTENIDO
├── js/components.js       → Menú, logo, footer, botón WhatsApp (no hace falta tocarlo)
├── js/render.js           → Lógica que dibuja el contenido (no hace falta tocarlo)
└── CNAME                  → Necesario para el dominio clautartas.com
```

## Cómo editar el contenido (lo único que necesitas tocar)

Todo el contenido del sitio vive en **`js/data.js`**:

- **Agregar un curso nuevo**: copia uno de los bloques `{ ... }` dentro de `CURSOS`,
  pégalo al final del arreglo, cambia el `id` (usa un número que no se repita, ej. 12)
  y reemplaza título, descripción, imagen, precio, link de compra, etc.
  El curso aparece automáticamente en la página principal y tiene su propia
  página de detalle en `curso.html?id=12` — no hay que crear ningún archivo nuevo.
- **Quitar un curso**: borra su bloque completo dentro de `CURSOS`.
- **Cambiar tu número de WhatsApp o redes sociales**: edita el objeto `SITE` al
  principio del archivo — se actualiza en todo el sitio automáticamente.
- **Testimonios**: edita el arreglo `TESTIMONIOS`.
- **Puntos de venta**: edita el arreglo `PUNTOS_VENTA`.

### Sobre las imágenes

Las imágenes de ejemplo usan `placehold.co` (imágenes de relleno con el nombre
del curso). Para poner tus fotos reales:

1. Sube tus fotos a la carpeta `img/`.
2. En `js/data.js`, reemplaza la URL de ejemplo (ej. `https://placehold.co/...`)
   por la ruta local, ej. `img/tarta-chocolate.jpg`.

### Sobre los videos de TikTok

En cada curso, el campo `tiktoks` es una lista de links a tus videos de TikTok
(cópialos desde "Compartir → Copiar link" en la app). Se insertan automáticamente
como videos embebidos en la página del curso.

## Publicar en GitHub Pages con el dominio clautartas.com

1. Crea un repositorio nuevo en GitHub (puede ser público o privado con GitHub Pro).
2. Sube todos estos archivos y carpetas a la raíz del repositorio (respetando la
   estructura de carpetas `css/`, `js/`, `img/`).
3. En el repositorio, ve a **Settings → Pages**.
4. En "Build and deployment", elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
5. En "Custom domain", escribe `clautartas.com` y guarda (esto ya está preconfigurado
   en el archivo `CNAME` que subiste, pero GitHub te lo pedirá confirmar).
6. En el proveedor donde compraste el dominio (ej. NIC Chile, GoDaddy), configura
   los DNS apuntando a GitHub Pages:
   - Registros **A** apuntando a: `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - O un registro **CNAME** apuntando a `tu-usuario.github.io` si usas un subdominio
     como `www.clautartas.com`.
7. Espera a que propague el DNS (puede tardar desde minutos hasta 24 horas) y
   activa "Enforce HTTPS" en Settings → Pages una vez que el dominio esté verificado.

## Notas

- El botón flotante de WhatsApp aparece en todas las páginas automáticamente.
- El sitio es 100% mobile-first: se ve bien en celular y se expande de forma
  natural en pantallas más grandes (tablet/PC), sin necesidad de una versión aparte.
- No requiere build ni instalación de nada: son archivos HTML/CSS/JS planos,
  compatibles con GitHub Pages tal cual.
