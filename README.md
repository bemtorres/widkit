# 🦉 WidKit - Widgets Educativos Embebibles

> **"Como el búho sabio, WidKit conoce todo sobre tu tiempo"**

**WidKit** es una colección de widgets educativos interactivos diseñados para integrarse fácilmente en Moodle, Blackboard, Canvas o cualquier sitio web mediante iframes. **Sin instalación, sin base de datos, sin backend**. Todo funciona por URL.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://tu-dominio.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## ✨ Cualidades Principales

### 🚀 **Cero Configuración Técnica**
- **Sin instalación:** Solo copia y pega el código iframe
- **Sin base de datos:** Toda la configuración va en la URL
- **Sin backend:** HTML, CSS y JavaScript puro
- **Sin dependencias:** Funciona con solo un navegador

### ⚡ **Integración Instantánea**
- **Compatible con LMS:** Moodle, Blackboard, Canvas, Google Classroom
- **Embebible en cualquier sitio:** WordPress, Wix, Squarespace, HTML estático
- **Código iframe simple:** Un solo `<iframe>` tag y listo
- **Funciona al instante:** Sin compilación ni configuración

### 🎨 **Totalmente Personalizable**
- **Panel visual:** Configura sin tocar código
- **Colores personalizados:** 3 colores por widget
- **6 tipografías:** Desde elegante hasta moderna
- **Responsive:** Se adapta a móvil, tablet y desktop
- **Vista previa en vivo:** Ve los cambios al instante

### 🎯 **Arquitectura Inteligente**
- **Stateless:** Sin sesiones ni cookies
- **URL-driven:** Toda la configuración en parámetros GET
- **Portable:** Funciona en cualquier servidor o CDN
- **Cacheable:** Archivos estáticos para máxima velocidad
- **SEO friendly:** HTML semántico

### 📦 **Ultraligero y Rápido**
- **< 50KB por widget:** Sin frameworks pesados
- **Tailwind CDN:** Solo CSS necesario
- **Carga instantánea:** < 100ms típico
- **Sin jQuery:** JavaScript vanilla moderno
- **Optimizado para móvil:** Touch-friendly

### 🔒 **Seguro y Privado**
- **Sin tracking:** No recopilamos datos
- **Sin cookies:** Privacidad por diseño
- **Sin APIs externas:** Todo self-contained
- **CORS-friendly:** Funciona embebido en cualquier dominio

---

## 📦 Widgets Incluidos

### 1. ⏱️ **Cuenta Regresiva**
Temporizador elegante para exámenes, entregas y eventos importantes.

**Características:**
- ⏰ Actualización en tiempo real (días, horas, minutos, segundos)
- 🎨 3 colores personalizables
- 📝 Mensaje personalizado al finalizar
- 🔤 6 tipografías disponibles
- 📱 Totalmente responsive
- 🎛️ Dos estilos: minimalista (default) o con cards

**Ejemplo rápido:**
```html
<iframe src="https://tu-dominio.com/app/cuentaregresiva.html?title=Examen Final&y=2025&m=12&d=15&h=14" 
        width="100%" height="450" frameborder="0"></iframe>
```

**Parámetros disponibles:**
- `title` - Título del evento
- `message` - Mensaje al finalizar
- `y`, `m`, `d`, `h`, `min` - Fecha objetivo
- `c1`, `c2`, `c3` - Colores (hex con #)
- `bg` - Color de fondo
- `font` - Tipografía (system, serif, mono, rounded, elegant, modern)
- `showCards` - Mostrar números con cards (0 o 1)

---

### 2. 📅 **Calculador de Semanas**
Planifica tu curso por semanas con actividades automáticas.

**Características:**
- 📊 Cálculo automático de semana actual
- 🗓️ Fechas de inicio y fin por semana
- ✅ Semana actual destacada visualmente
- 📝 Actividades por semana en JSON
- 🎨 Colores personalizables
- ⏱️ Actualización diaria automática

**Ejemplo rápido:**
```html
<iframe src="https://tu-dominio.com/app/semana.html?y=2025&m=1&d=1&activities=%7B%221%22%3A%5B%22Clase 1%22%2C%22Tarea 1%22%5D%7D" 
        width="100%" height="650" frameborder="0"></iframe>
```

**Parámetros disponibles:**
- `y`, `m`, `d` - Fecha de inicio del período
- `activities` - JSON con actividades por semana (URL encoded)
- `c1`, `c2`, `c3` - Colores
- `bg` - Color de fondo
- `font` - Tipografía

**Formato del JSON de actividades:**
```json
{
  "1": ["Entrega de documentos", "Análisis"],
  "2": ["Evaluación 30%", "Desarrollo"],
  "3": ["Presentación final"]
}
```

---

### 3. 🎲 **Sorteo Interactivo**
Sorteos animados con ruleta, confetti y efectos visuales.

**Características:**
- 🎯 Animación de ruleta suave
- ⏰ Cuenta regresiva personalizable
- 🏆 3 estilos de medallones (medals, trophies, stars)
- 🎊 Efectos de confetti
- 🔊 Sonidos opcionales
- 👥 Múltiples ganadores

**Ejemplo rápido:**
```html
<iframe src="https://tu-dominio.com/app/sorteo.html?title=Sorteo de Premios&list=Ana,Luis,María,Pedro,Juan&time=3&win=3" 
        width="100%" height="700" frameborder="0"></iframe>
```

**Parámetros disponibles:**
- `title` - Título del sorteo
- `subtitle` - Subtítulo
- `list` - Participantes separados por comas
- `time` - Segundos de cuenta regresiva (0-60)
- `win` - Número de ganadores o "all"
- `style` - Estilo (medal, trophy, star)
- `c1`, `c2`, `c3` - Colores del degradado

---

## 🚀 Inicio en 30 Segundos

### Para Usuarios (No Técnicos)

1. **Abre el configurador:** Ve a `https://tu-dominio.com/`
2. **Elige tu widget:** Cuenta Regresiva, Semanas o Sorteo
3. **Personaliza:** Colores, textos, fechas (interfaz visual)
4. **Copia el código:** Botón "Copiar código embebido"
5. **Pégalo en tu LMS:** En Moodle, Blackboard, Canvas, etc.

¡Listo! El widget funciona instantáneamente.

---

### Para Desarrolladores

```bash
# 1. Clona el repositorio
git clone https://github.com/tu-usuario/widkit.git
cd widkit

# 2. Abre index.html en tu navegador
# No necesitas instalar nada, es HTML puro

# 3. Despliega a GitHub Pages, Netlify, Vercel o cualquier hosting estático
```

---

## 🎨 Panel de Configuración

Accede al panel de administración visual para cada widget:

- **Cuenta Regresiva:** `/admin/temporizador.html`
- **Calculador de Semanas:** `/admin/semana.html`
- **Sorteo Interactivo:** `/admin/sorteo.html`

### Características del Panel:
- ⚙️ **Interfaz visual:** Sin tocar código
- 👁️ **Vista previa en vivo:** Ve cambios al instante
- 🎨 **Selectores de color:** Elige colores visualmente
- 📋 **Generación automática:** URL e iframe listos para copiar
- 📱 **Responsive:** Funciona en cualquier dispositivo

---

## 🌐 Integración en Plataformas LMS

### 🎓 Moodle

1. Activa el modo edición en tu curso
2. Añade una "Etiqueta" o "Página"
3. Haz clic en el botón HTML (`</>`)
4. Pega el código iframe
5. Guarda ¡y listo!

### 📚 Blackboard

1. Ve al área de contenido
2. Selecciona "Crear contenido" → "Elemento"
3. En el editor, cambia a vista HTML
4. Pega el código iframe
5. Envía ¡y funciona!

### 🖼️ Canvas

1. Edita una página o módulo
2. Haz clic en "Editor HTML" (icono `</>`)
3. Pega el código iframe
4. Guarda cambios
5. ¡Listo para usar!

### 🌐 WordPress / Sitio Web

1. Edita tu página o entrada
2. Agrega un bloque "HTML personalizado"
3. Pega el código iframe
4. Publica
5. ¡Visible al instante!

---

## 📂 Estructura del Proyecto

```
widkit/
├── index.html              # Página principal con info de widgets
├── admin/                  # Configuradores visuales
│   ├── temporizador.html   # Configurador de cuenta regresiva
│   ├── semana.html         # Configurador de semanas
│   ├── sorteo.html         # Configurador de sorteo
│   └── js/                 # Controladores JavaScript
│       ├── temporizador.js
│       ├── semana.js
│       └── sorteo.js
├── app/                    # Widgets embebibles
│   ├── cuentaregresiva.html
│   ├── semana.html
│   └── sorteo.html
└── README.md
```

**Arquitectura:**
- **HTML puro:** Sin frameworks, sin compilación
- **Tailwind CDN:** Estilos utility-first
- **JavaScript vanilla:** Sin jQuery ni dependencias
- **Stateless:** Todo en parámetros URL

---

## 🎯 Casos de Uso Reales

### 📚 **Educación**
- Cuenta regresiva para exámenes finales
- Planificación de curso por semanas
- Sorteos de participación en clase
- Calendario de entregas
- Recordatorios de fechas importantes

### 💼 **Proyectos**
- Sprints de desarrollo con semanas
- Deadlines de milestones
- Sorteos de revisores de código
- Planificación de releases

### 🎉 **Eventos**
- Lanzamientos de productos
- Conferencias y webinars
- Sorteos de entradas o premios
- Cuentas regresivas de festivales

### 🏢 **Empresas**
- Reuniones importantes
- Plazos de entrega
- Sorteos de equipos
- Planning de proyectos

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Propósito |
|------------|-----------|
| **HTML5** | Estructura semántica |
| **Tailwind CSS** (CDN) | Estilos utility-first |
| **JavaScript Vanilla** | Lógica de widgets |
| **Google Fonts** | Tipografías opcionales |
| **Canvas Confetti** | Efectos visuales de sorteo |

**Ventajas de esta arquitectura:**
- ✅ Sin compilación
- ✅ Sin node_modules
- ✅ Sin build steps
- ✅ Funciona directamente
- ✅ Fácil de modificar
- ✅ Desplegable en cualquier servidor

---

## 🌐 Despliegue

### GitHub Pages (Gratis)

1. **Sube tu código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: WidKit inicial"
   git remote add origin https://github.com/tu-usuario/widkit.git
   git push -u origin main
   ```

2. **Activa GitHub Pages:**
   - Settings → Pages
   - Source: Deploy from branch
   - Branch: main / (root)
   - Save

3. **Tu sitio estará en:** `https://tu-usuario.github.io/widkit/`

### Netlify (1-Click Deploy)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

### Vercel (1-Click Deploy)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Cualquier Hosting Estático

Sube los archivos a:
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- Cloudflare Pages
- Render
- Surge.sh

---

## 📱 Compatibilidad

### Navegadores Soportados
| Navegador | Versión Mínima |
|-----------|----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Opera | 76+ |

### Dispositivos
- 📱 **Móviles:** iOS, Android (320px+)
- 📱 **Tablets:** iPad, Android tablets (640px+)
- 💻 **Desktop:** Windows, macOS, Linux (1024px+)
- 🖥️ **Pantallas grandes:** 4K, ultrawide (1920px+)

---

## 🎨 Personalización Avanzada

### Cambiar Colores Globalmente

Edita las variables CSS en cada widget:

```css
:root {
    --color-1: #3b82f6;  /* Azul principal */
    --color-2: #60a5fa;  /* Azul medio */
    --color-3: #93c5fd;  /* Azul claro */
}
```

### Agregar Nuevas Tipografías

1. Importa desde Google Fonts en el `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=TuFuente:wght@400;700&display=swap" rel="stylesheet">
```

2. Agrega la clase en el CSS:
```css
.font-tufuente { font-family: 'TuFuente', sans-serif; }
```

3. Actualiza el selector en el admin

---

## 📊 Ventajas Competitivas

### vs. Plugins de LMS
- ✅ **Sin permisos de administrador**
- ✅ **Funciona en cualquier LMS**
- ✅ **No requiere actualizaciones**
- ✅ **Sin problemas de compatibilidad**

### vs. Servicios SaaS
- ✅ **Gratis para siempre**
- ✅ **Sin límites de uso**
- ✅ **Sin cuentas ni registro**
- ✅ **Código abierto**

### vs. Widgets de terceros
- ✅ **Sin ads ni tracking**
- ✅ **Hospedado por ti**
- ✅ **Totalmente personalizable**
- ✅ **Sin dependencias externas**

---

## 🔧 Desarrollo y Contribución

### Estructura de Código

Cada widget sigue este patrón:

1. **Lectura de parámetros URL:** `URLSearchParams`
2. **Aplicación de estilos:** CSS variables
3. **Lógica de negocio:** JavaScript puro
4. **Actualización del DOM:** Vanilla JS

### Agregar un Nuevo Widget

1. Crea el widget en `app/nuevo-widget.html`
2. Crea el configurador en `admin/nuevo-widget.html`
3. Crea el controlador en `admin/js/nuevo-widget.js`
4. Agrega la card en `index.html`
5. Documenta en README.md

### Contribuir

1. Fork el proyecto
2. Crea una rama: `git checkout -b feature/mi-feature`
3. Commit: `git commit -m 'feat: nueva característica'`
4. Push: `git push origin feature/mi-feature`
5. Abre un Pull Request

---

## 🐛 Solución de Problemas

### El widget no se muestra en iframe

**Problema:** Política CORS o X-Frame-Options

**Solución:** Asegúrate de hospedar en un servidor con headers correctos:
```
X-Frame-Options: SAMEORIGIN
Content-Security-Policy: frame-ancestors 'self' https://tu-lms.com
```

### Los colores no se actualizan

**Problema:** Caché del navegador

**Solución:** Agrega un parámetro de versión:
```
?v=2&c1=%23color
```

### El iframe es muy grande/pequeño

**Problema:** Altura fija

**Solución:** Ajusta el `height` en el iframe:
- Cuenta regresiva: 450px
- Semanas: 650px
- Sorteo: 700px

---

## 📄 Licencia

MIT License - Libre para uso personal y comercial.

```
Copyright (c) 2025 WidKit

Por la presente se concede permiso, libre de cargos, a cualquier persona 
que obtenga una copia de este software para usarlo sin restricción...
```

---

## 🙏 Créditos

**Creado con:**
- 💙 Tailwind CSS para estilos
- 🎨 Google Fonts para tipografías
- 🎊 canvas-confetti para efectos visuales

**Inspirado por:**
- La necesidad de herramientas educativas simples
- La filosofía "menos es más"
- La web abierta y descentralizada

---

## 📞 Soporte y Comunidad

- 🐛 **Issues:** [GitHub Issues](https://github.com/tu-usuario/widkit/issues)
- 💬 **Discusiones:** [GitHub Discussions](https://github.com/tu-usuario/widkit/discussions)
- 📧 **Email:** tu-email@example.com
- 🌐 **Website:** [widkit.com](https://widkit.com)

---

## 🚀 Roadmap

### ✅ Versión 1.0 (Actual)
- [x] Cuenta Regresiva
- [x] Calculador de Semanas
- [x] Sorteo Interactivo
- [x] Panel de administración visual
- [x] Responsive design

### 🔜 Próximas Características
- [ ] Pomodoro Timer
- [ ] Calendario de eventos
- [ ] Quiz interactivo
- [ ] Gráficos de progreso
- [ ] Modo oscuro
- [ ] Temas predefinidos
- [ ] Exportar configuración como JSON
- [ ] Compartir configuración vía URL corta

---

## ⭐ ¿Te Gusta WidKit?

Si este proyecto te resultó útil:

- ⭐ Dale una estrella en GitHub
- 🔀 Comparte con colegas
- 🐛 Reporta bugs
- 💡 Sugiere mejoras
- 🤝 Contribuye con código

---

**Construido con ❤️ para educadores y estudiantes**

*"La mejor herramienta es la que no se interpone en tu camino"*

---

### 📈 Stats

![GitHub stars](https://img.shields.io/github/stars/tu-usuario/widkit?style=social)
![GitHub forks](https://img.shields.io/github/forks/tu-usuario/widkit?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/tu-usuario/widkit?style=social)

---

**[↑ Volver arriba](#-widkit---widgets-educativos-embebibles)**
