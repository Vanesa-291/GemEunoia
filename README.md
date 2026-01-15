# 🌸 Eunoia - Pulseras de Macramé Artesanales

![Eunoia Banner](./img/pulsera-01.jpg)

> **Eunoia** significa "hermosos pensamientos" en griego. Cada pulsera está hecha con amor, paciencia y materiales de primera calidad.

---

## 🌐 Demo en Vivo

🔗 **[Ver sitio web](https://vanesa-291.github.io/GemEunoia/)**

---

## 📋 Descripción del Proyecto

Eunoia es un sitio web de e-commerce especializado en pulseras de macramé artesanales hechas a mano. El proyecto fue desarrollado como parte del curso de Desarrollo Web en **Coderhouse**, aplicando las mejores prácticas de HTML5, CSS3, SASS y diseño responsive.

### 🎯 Características Principales

- ✨ **5 páginas completas**: Inicio, Productos, Nosotros, Contacto, FAQ
- 🎨 **Diseño 100% responsive**: Adaptado para mobile, tablet y desktop
- 🚀 **Arquitectura SASS profesional**: Patrón 7-1 con variables, mixins y utilidades
- 🎭 **Animaciones suaves**: Transiciones, hover effects y keyframe animations
- 📱 **Bootstrap 5**: Grid system, navbar responsive y componentes
- ♿ **Accesibilidad**: Etiquetas semánticas, ARIA labels, alt text
- 🔍 **SEO optimizado**: Meta tags, estructura jerárquica, URLs amigables
- 📧 **Formulario funcional**: Validación con JavaScript
- 🎯 **Filtros interactivos**: Sistema de filtrado de productos con JavaScript

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones
- **SASS/SCSS** - Preprocesador CSS
- **JavaScript ES6** - Interactividad y validaciones
- **Bootstrap 5.3** - Framework CSS responsive

### Herramientas de Desarrollo
- **Git & GitHub** - Control de versiones
- **GitHub Pages** - Hosting gratuito
- **VS Code** - Editor de código
- **Node.js & npm** - Compilación de SASS

### Librerías Externas
- **Font Awesome 6.0** - Iconos
- **Google Fonts** - Tipografías

---

## 📁 Estructura del Proyecto
```
GemEunoia/
│
├── index.html                 # Página de inicio
│
├── pages/                     # Páginas secundarias
│   ├── productos.html
│   ├── nosotros.html
│   ├── contacto.html
│   └── faq.html
│
├── css/                       # Estilos compilados
│   ├── styles.css
│   └── styles.css.map
│
├── scss/                      # Código fuente SASS
│   ├── abstracts/
│   │   ├── _variables.scss   # Variables de diseño
│   │   └── _mixins.scss      # Mixins reutilizables
│   ├── base/
│   │   └── _reset.scss       # Reset CSS
│   ├── components/
│   │   ├── _navbar.scss      # Navegación
│   │   ├── _buttons.scss     # Botones
│   │   ├── _cards.scss       # Tarjetas
│   │   └── _forms.scss       # Formularios
│   ├── layout/
│   │   ├── _header.scss      # Encabezado
│   │   ├── _footer.scss      # Pie de página
│   │   ├── _main.scss        # Contenido principal
│   │   └── _hero.scss        # Sección hero
│   ├── pages/
│   │   ├── _home.scss        # Estilos página inicio
│   │   ├── _productos.scss   # Estilos página productos
│   │   ├── _contacto.scss    # Estilos página contacto
│   │   ├── _nosotros.scss    # Estilos página nosotros
│   │   └── _faq.scss         # Estilos página FAQ
│   ├── utilities/
│   │   ├── _extends.scss     # Extends reutilizables
│   │   └── _helpers.scss     # Clases utilitarias
│   └── styles.scss           # Archivo principal
│
├── js/                        # Scripts JavaScript
│   ├── contacto.js           # Validación formulario
│   └── productos.js          # Filtros de productos
│
├── img/                       # Imágenes del sitio
│   ├── pulsera-01.jpg
│   ├── pulsera-02.jpg
│   └── ...
│
├── .gitignore                 # Archivos ignorados por Git
├── package.json               # Dependencias del proyecto
└── README.md                  # Este archivo
```

---

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (v14 o superior)
- npm o yarn
- Git

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/vanesa-291/GemEunoia.git
cd GemEunoia
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Compilar SASS**
```bash
npm run sass
```

O en modo watch (recompila automáticamente):
```bash
npm run sass:watch
```

4. **Abrir en el navegador**
- Abre `index.html` con Live Server (VS Code)
- O simplemente haz doble clic en `index.html`

---

## 📱 Diseño Responsive

El sitio está optimizado para:

- 📱 **Mobile**: 320px - 767px
- 📱 **Tablet**: 768px - 991px
- 💻 **Desktop**: 992px en adelante

### Breakpoints Principales
```scss
$breakpoint-mobile: 768px;
$breakpoint-tablet: 992px;
$breakpoint-desktop: 1200px;
```

---

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| **Primary** | `#CD9C8A` | Color principal (beige/rosado) |
| **Accent** | `#FF5100` | Acentos y CTAs (naranja) |
| **Background** | `#FFF8E1` | Fondo general (crema) |
| **Dark** | `#333333` | Texto principal |
| **White** | `#FFFFFF` | Texto sobre fondos oscuros |

---

## 📊 Arquitectura SASS

El proyecto sigue el patrón **7-1** de SASS:

1. **abstracts/** - Variables y mixins
2. **base/** - Estilos base y reset
3. **components/** - Componentes reutilizables
4. **layout/** - Estructura del layout
5. **pages/** - Estilos específicos por página
6. **utilities/** - Clases utilitarias
7. **styles.scss** - Archivo principal que importa todo

### Características SASS Utilizadas
- ✅ Variables centralizadas
- ✅ Mixins reutilizables
- ✅ Nesting (anidamiento)
- ✅ @extend para herencia
- ✅ @each para iteraciones
- ✅ @for para loops
- ✅ Operadores (lighten, darken)
- ✅ Partials y @use

---

## ✨ Funcionalidades Implementadas

### 1. Sistema de Navegación
- Navbar responsive con Bootstrap
- Colapsa en hamburger menu en mobile
- Links activos según la página actual

### 2. Hero Section
- Imagen de fondo fullscreen
- Overlay con gradiente
- Call-to-action destacado

### 3. Galería de Productos
- Grid responsive (1-3 columnas según dispositivo)
- Sistema de filtros por categoría
- Cards con hover effects

### 4. Formulario de Contacto
- Validación en tiempo real con JavaScript
- Campos obligatorios marcados
- Mensajes de éxito/error

### 5. FAQ Interactivo
- Diseño limpio y organizado
- Iconos Font Awesome
- Hover effects en cada item

---

## 🔍 SEO y Accesibilidad

### SEO
- ✅ Meta descriptions únicas por página
- ✅ Meta keywords relevantes
- ✅ Títulos jerárquicos (H1-H3)
- ✅ URLs semánticas
- ✅ Alt text en todas las imágenes
- ✅ Sitemap implícito

### Accesibilidad
- ✅ Etiquetas semánticas HTML5
- ✅ ARIA labels en iconos
- ✅ Contraste de colores WCAG AA
- ✅ Navegación por teclado
- ✅ Textos alternativos descriptivos

---

## 📈 Optimizaciones

- ✅ Imágenes optimizadas para web
- ✅ CSS minificado en producción
- ✅ Uso de CDN para librerías externas
- ✅ Carga asíncrona de JavaScript
- ✅ .gitignore configurado (node_modules, .sass-cache)

---

## 🤝 Contribuciones

Este es un proyecto educativo, pero si deseas sugerir mejoras:

1. Haz un fork del proyecto
2. Crea una rama (`git checkout -b feature/MejoraNueva`)
3. Commit tus cambios (`git commit -m 'Add: Nueva característica'`)
4. Push a la rama (`git push origin feature/MejoraNueva`)
5. Abre un Pull Request

---

## 📧 Contacto

**Vanesa** - Desarrolladora Web

- 📧 Email: eunoiagems3@gmail.com
- 🌐 Portfolio: [GemEunoia](https://vanesa-291.github.io/GemEunoia/)
- 💼 LinkedIn: [Tu perfil] (si tienes)
- 📸 Instagram: [@gems.eunoia](https://www.instagram.com/gems.eunoia/)

---

## 📜 Licencia

Este proyecto fue desarrollado con fines educativos como parte del curso de **Desarrollo Web** en **Coderhouse**.

---

## 🙏 Agradecimientos

- **Coderhouse** - Por la formación en Desarrollo Web
- **Bootstrap Team** - Por el framework
- **Font Awesome** - Por los iconos
- **Unsplash/Pexels** - Por las imágenes de ejemplo (si aplica)

---

## 🔗 Enlaces Útiles

- [Documentación de Bootstrap 5](https://getbootstrap.com/docs/5.3/)
- [Guía de SASS](https://sass-lang.com/guide)
- [MDN Web Docs](https://developer.mozilla.org/)
- [GitHub Pages](https://pages.github.com/)

---

<div align="center">

### ⭐ Si te gustó el proyecto, ¡dale una estrella! ⭐

**Hecho con 💜 y ☕ por Vanesa**

</div>