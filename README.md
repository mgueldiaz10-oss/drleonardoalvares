# Molecular Spectroscopy Laboratory Website
**Principal Investigator:** Dr. Leonardo Álvarez Valtierra  
**Institution:** Universidad de Guanajuato (División de Ciencias e Ingenierías - Campus León)

Sitio web oficial, moderno y de alto prestigio académico para el **Molecular Spectroscopy Lab**, optimizado con enfoque *Mobile-First*, diseño 100% responsivo, alto contraste visual (Clean UI), tipografía de rigor científico y soporte completo bilingüe (**Español** e **Inglés**).

---

## 🔬 Arquitectura y Estructura del Sitio Web

El sitio implementa una arquitectura modular con páginas dedicadas para evitar sobrecargar la página principal:

### 1. Páginas Principales (Home):
- **Español:** `index.html`
- **Inglés:** `en/index.html`
- **Contenido:**
  - Header institucional sticky con logotipo oficial de la Universidad de Guanajuato.
  - Conmutador de idioma visible y accesible en cabecera y menú móvil (*Versión en Español* / *English Version*).
  - Sección Hero con biografía del Dr. Leonardo Álvarez Valtierra (Ph.D., Full Professor, SNI II), fotografía oficial con bordes redondeados y botón directo para descargar su CV en PDF.
  - Sección **Our Team**: Contenedor con regla CSS estricta `object-position: center 18%;` y `object-fit: cover;` para garantizar que **todos los rostros de los miembros y del profesor sean 100% visibles sin recortes**.
  - **Teaser de Laboratorio:** Presentación general de las 5 ramificaciones con botón destacado hacia la página dedicada de laboratorio.
  - **Teaser de Publicaciones:** Resumen del repositorio con botón destacado hacia la página dedicada de publicaciones.
  - Sección **Colaboradores y Exalumnos:** Cuadrícula de tarjetas con avatares abstractos, cargos e instituciones (*University of Pittsburgh, CINVESTAV, UdeG, UG*).
  - Footer formal con dirección oficial, teléfonos y correos institucionales.

### 2. Repositorio Completo de Publicaciones Científicas:
- **Español:** `publicaciones.html`
- **Inglés:** `en/publications.html`
- **Contenido:**
  - Los **26 artículos arbitrados completos** (2000–2020) del Dr. Leonardo Álvarez Valtierra y colaboradores.
  - Buscador reactivo en tiempo real por título, autor, año o revista.
  - Enlaces directos a los DOI correspondientes.
  - Botón de un clic para copiar la cita académica con notificación interactiva (*Toast*).

### 3. Ramificaciones del Laboratorio e Instalaciones:
- **Español:** `laboratorio.html` (completamente traducido y redactado en riguroso español científico)
- **Inglés:** `en/laboratory.html` (versión en inglés con conmutador hacia español)
- **Contenido:**
  - Barra lateral (*sidebar*) sticky para navegación fluida con ScrollSpy entre las 5 áreas.
  - **Ramificación 01 · High Resolution Laser Lab:** Cavidades láser, bombeo Spectra Physics Millennia (532 nm), colorante en anillo Matisse DS y módulo SHG Wavetrain. Con sus 5 fotografías de instrumentación.
  - **Ramificación 02 · Molecular Beam Machine:** Cámara de acero inoxidable de vacío diferencial en 3 etapas ($10^{-5}$ a $10^{-7}$ Torr), bombas de difusión de silicona y sistema booster con sus 5 fotografías.
  - **Ramificación 03 · Molecular Quantum Computing:** Modelado computacional ab initio/DFT con Gaussian 16 y Deamon para ajuste de Hamiltonianos rotacionales.
  - **Ramificación 04 · Photocatalysis & Photodegradation Techniques:** Reactores fotocatalíticos, cinética de degradación con láser UV y espectrofotometría.
  - **Ramificación 05 · Lab Technician (Dr. Eduardo Montes Ramírez):** Ficha formal del técnico académico profesional A (SNI I), reseña biográfica, proyectos y correo de contacto.

---

## 📂 Organización de Archivos

```
magical-lovelace/
│
├── index.html               # Página de inicio en Español (Mobile-first, Clean UI)
├── laboratorio.html         # Página dedicada en Español: 5 Ramificaciones del Laboratorio
├── publicaciones.html       # Repositorio completo en Español: 26 Publicaciones Oficiales
│
├── en/                      # Versión completa en idioma Inglés (Bilingual Mirror)
│   ├── index.html           # Home page en Inglés con conmutador hacia español
│   ├── laboratory.html      # Dedicated Laboratory page (5 branches with verbatim text)
│   └── publications.html    # Dedicated Publications repository (all 26 papers)
│
├── favicon.svg              # Favicon vectorial en alta resolución (Láser y orbitales moleculares)
├── favicon.png              # Favicon institucional (Escudo Universidad de Guanajuato)
│
├── css/
│   └── styles.css           # Estilos completos, grid, flexbox, variables y responsive
│
├── js/
│   └── main.js              # Menú móvil, sticky header, scrollspy, búsqueda y copiado de citas
│
└── README.md                # Documentación técnica del proyecto
```

---

## 🎨 Paleta de Colores y Tipografía

- **Azul Marino Institucional Profundo:** `#0a192f` / `#112240`
- **Azul Acento Académico:** `#1d4ed8` / `#2563eb`
- **Dorado Académico Sutil:** `#c28e2b` / `#d97706`
- **Fondos Claros y Pulcros:** `#ffffff` / `#f8fafc` / `#f1f5f9`
- **Tipografías:**
  - Textos y UI: `Inter` / `Roboto` (Sans-Serif de alta legibilidad en pantalla)
  - Títulos y Acentos: `Merriweather` (Serif académica y moderna)
  - Identificadores Técnicos: `JetBrains Mono`

---

## 🚀 Cómo Visualizarlo

Abre cualquiera de los siguientes archivos directamente en tu navegador web preferido:
- [Página Principal en Español](file:///c:/Users/madia/Documents/antigravity/magical-lovelace/index.html)
- [Página de Laboratorio (5 Ramificaciones)](file:///c:/Users/madia/Documents/antigravity/magical-lovelace/laboratorio.html)
- [Catálogo de Publicaciones (26 Artículos)](file:///c:/Users/madia/Documents/antigravity/magical-lovelace/publicaciones.html)
- [Home Page en Inglés (en/index.html)](file:///c:/Users/madia/Documents/antigravity/magical-lovelace/en/index.html)
- [Laboratory Branches en Inglés (en/laboratory.html)](file:///c:/Users/madia/Documents/antigravity/magical-lovelace/en/laboratory.html)
- [Publications Catalog en Inglés (en/publications.html)](file:///c:/Users/madia/Documents/antigravity/magical-lovelace/en/publications.html)
