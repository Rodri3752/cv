# CV Premium 2026 — Rodrigo Artero

> Senior Full Stack Software Engineer · SaaS Architect · Product Engineer

CV editorial diseñado con estándares de consultoría de Executive Search. HTML + CSS + JavaScript puro. ATS-friendly. Optimizado para impresión A4 y exportación a PDF con Puppeteer.

---

## Estructura del proyecto

```
cv-premium/
├── index.html          # Documento HTML5 semántico
├── style.css           # CSS moderno (variables, grid, flex, clamp, print)
├── script.js           # Microinteracciones (scroll reveal, keyboard nav)
├── generate-pdf.js     # Script Puppeteer para exportar a PDF
├── package.json        # Dependencias y scripts npm
├── README.md           # Este archivo
└── assets/
    ├── icons/          # (vacío — sin íconos por diseño minimalista)
    └── fonts/          # (vacío — Inter cargada desde Google Fonts)
```

---

## Requisitos

- **Node.js** 18 o superior
- **npm** 9 o superior

---

## Instalación

```bash
cd cv-premium
npm install
```

Esto instala Puppeteer y descarga Chromium automáticamente.

---

## Ejecutar en el navegador

### Opción A — Servidor local con `serve`

```bash
npm start
```

Abre `http://localhost:3000` en tu navegador.

### Opción B — Abrir directamente

Abre `index.html` en cualquier navegador moderno (Chrome, Firefox, Safari, Edge).

---

## Generar PDF

```bash
npm run pdf
```

Esto ejecuta `generate-pdf.js` con Puppeteer y genera:

```
Rodrigo_Artero_CV_2026.pdf
```

**Configuración del PDF:**

| Parámetro | Valor |
|---|---|
| Formato | A4 |
| printBackground | `true` |
| Márgenes | `0` (controlados por CSS `@page`) |
| preferCSSPageSize | `true` |

---

## Modificar contenido

Todo el contenido está en `index.html`. No hay frameworks ni build steps.

### Cambiar datos personales

Edita la sección `<header class="cv-header">` en `index.html`:

```html
<h1 class="cv-name">Rodrigo Artero</h1>
<p class="cv-title">Senior Full Stack Software Engineer ...</p>
```

### Cambiar experiencia

Edita los `<article class="experience-item">` dentro de `<section class="cv-experience">`.

### Cambiar proyectos

Edita los `<article class="project-item">` dentro de `<section class="cv-projects">`.

### Cambiar stack

Edita los `<article class="stack-group">` dentro de `<section class="cv-stack">`.

### Cambiar colores

Edita las CSS Custom Properties en `:root` al inicio de `style.css`:

```css
:root {
  --color-accent: #2563EB;  /* Azul Microsoft — único color de acento */
  --color-text: #111111;     /* Negro */
  --color-text-secondary: #666666;  /* Gris */
  --color-border: #EAEAEA;   /* Gris claro */
}
```

### Cambiar tipografía

El CV usa **Inter** desde Google Fonts. El fallback es **IBM Plex Sans** y luego **SF Pro Display**.

Para cambiar la fuente, edita el `<link>` en `index.html` y la variable `--font-primary` en `style.css`.

---

## Características de diseño

- **Tipografía:** Inter (Google Fonts) con fallback a IBM Plex Sans / SF Pro Display
- **Paleta:** Blanco absoluto, Negro `#111111`, Gris `#666`, Gris claro `#EAEAEA`, Azul `#2563EB`
- **Layout:** Una columna, grid profesional, márgenes amplios, mucho espacio en blanco
- **Responsive:** Desktop, laptop, tablet y mobile con `clamp()` y media queries
- **Print:** `@media print` con `@page A4`, `page-break-inside: avoid`, sin cortes
- **ATS:** Texto 100% seleccionable, sin imágenes para contenido, HTML semántico
- **Accesibilidad:** `prefers-reduced-motion`, focus visible, ARIA labels, HTML semántico
- **Microinteracciones:** Scroll reveal con IntersectionObserver, hover elegante en links, transiciones suaves

---

## Licencia

Uso personal — Rodrigo Artero © 2026
