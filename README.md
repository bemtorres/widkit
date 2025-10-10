# 🦉 WidKit - Widgets que Funcionan para Todo

> **"Como el búho sabio, WidKit conoce todo sobre tu tiempo"**

**WidKit** es una plataforma de widgets educativos embebibles diseñada para docentes y profesionales. Crea, configura e inserta temporizadores, calculadores de semanas y herramientas interactivas en cualquier página web, **sin base de datos** y totalmente personalizables.

## ✨ ¿Por qué WidKit?

🎯 **Para educación:** Calendarios de curso, planificación de entregas, seguimiento de semanas de clase

⏰ **Cuentas regresivas:** Para exámenes, eventos o entregas importantes

🎲 **Herramientas interactivas:** Sorteos, ruletas, selección de estudiantes

🖼️ **Embebible en cualquier web:** Fácil de integrar con un simple iframe

🌈 **Totalmente personalizable:** Colores, tipografías, títulos y contenido configurable por URL

🚀 **Sin dependencias:** No requiere base de datos ni backend, funciona directamente

---

## 🚀 Inicio Rápido

### 📦 Explora WidKit
Abre `index.html` para ver el dashboard interactivo con todas las herramientas.

### ⚙️ Configura tu Widget
Ve a `admin.html` para crear y personalizar tus widgets con el panel de administración visual.

## 📋 Herramientas Incluidas en WidKit

### 🆕 **admin.html** - Centro de Control

Panel de administración intuitivo con 3 secciones para crear y configurar todos tus widgets sin escribir código.

#### Características:
- 🎛️ Interfaz visual para configurar todos los parámetros
- 👁️ Vista previa en tiempo real
- 📋 Generación automática de URLs
- 🎨 Selector de colores visual
- 📝 Editor de actividades por semana
- 📱 Diseño totalmente responsive
- 🔄 Actualización automática del preview

**¡Empieza aquí si no quieres escribir URLs manualmente!**

Accede directamente: `admin.html`

---

### 1. **cuentaregresiva.html** - Cuenta Regresiva

Crea una cuenta regresiva elegante y animada hacia cualquier fecha y hora.

#### Características:
- ✨ Diseño moderno y responsivo con gradientes animados
- ⏱️ Actualización en tiempo real (segundos, minutos, horas, días)
- 🎨 Interfaz atractiva con Tailwind CSS
- 📱 Totalmente responsive
- 🖼️ Listo para embeber en iframes

#### Parámetros URL:

| Parámetro | Descripción | Ejemplo | Requerido |
|-----------|-------------|---------|-----------|
| `title` | Título del evento | `Año Nuevo 2026` | No |
| `y` | Año objetivo | `2026` | No* |
| `m` | Mes objetivo (1-12) | `12` | No* |
| `d` | Día objetivo (1-31) | `25` | No* |
| `h` | Hora objetivo (0-23) | `18` | No |
| `min` | Minutos objetivo (0-59) | `30` | No |
| `c1` | Color primario (hex) | `#3b82f6` | No |
| `c2` | Color secundario (hex) | `#60a5fa` | No |
| `c3` | Color terciario (hex) | `#93c5fd` | No |

*Si no se proporcionan, se usa la fecha actual.

**Colores por defecto:** Paleta minimalista azul (#3b82f6, #60a5fa, #93c5fd)

#### Ejemplos de Uso:

**Cuenta regresiva para Año Nuevo:**
```
cuentaregresiva.html?title=Año Nuevo 2026&y=2026&m=1&d=1&h=0&min=0
```

**Cuenta regresiva para Navidad:**
```
cuentaregresiva.html?title=Navidad 2025&y=2025&m=12&d=25&h=18&min=30
```

**Embeber en iframe:**
```html
<iframe 
    src="cuentaregresiva.html?title=Mi Evento&y=2026&m=6&d=15" 
    width="100%" 
    height="400"
    frameborder="0">
</iframe>
```

---

### 2. **semana.html** - Calculador de Semanas con Actividades

Calcula en qué semana estamos desde una fecha de inicio y muestra actividades programadas para cada semana.

#### Características:
- 📅 Cálculo automático del número de semana actual
- 📝 Visualización de actividades por semana
- 🎯 Destacado de la semana actual
- 📊 Vista completa de todas las semanas programadas
- 🖼️ Diseño optimizado para iframes
- 📱 Totalmente responsive

#### Parámetros URL:

| Parámetro | Descripción | Ejemplo | Requerido |
|-----------|-------------|---------|-----------|
| `y` | Año de inicio del período | `2025` | No* |
| `m` | Mes de inicio (1-12) | `1` | No* |
| `d` | Día de inicio (1-31) | `1` | No* |
| `activities` | JSON con actividades (URL encoded) | Ver abajo | No |

*Si no se proporcionan, se usa el 1 de enero del año actual.

#### Formato del JSON de Actividades:

```json
{
  "1": ["Entrega de documentos", "Análisis de sistema"],
  "2": ["Evaluación 30%", "Análisis de sistema"],
  "3": ["Desarrollo de prototipos", "Reunión de equipo"],
  "4": ["Presentación final", "Entrega de proyecto"]
}
```

#### Ejemplos de Uso:

**Calculador básico (sin actividades):**
```
semana.html?y=2025&m=1&d=1
```

**Con actividades programadas:**
```javascript
// Primero, crea tu objeto de actividades
const activities = {
  "1": ["Entrega de documentos", "Análisis de sistema"],
  "2": ["Evaluación 30%", "Análisis de sistema"]
};

// Codifica el JSON para la URL
const encodedActivities = encodeURIComponent(JSON.stringify(activities));

// Construye la URL completa
const url = `semana.html?y=2025&m=1&d=1&activities=${encodedActivities}`;
```

**Embeber en iframe:**
```html
<iframe 
    src="semana.html?y=2025&m=1&d=1&activities=%7B%221%22%3A%5B%22Tarea%201%22%5D%7D" 
    width="100%" 
    height="600"
    frameborder="0">
</iframe>
```

---

### 3. **index.html** - Página de Demostración

Página principal que muestra ejemplos en vivo de ambas herramientas con documentación interactiva.

---

---

## 🛠️ Tecnología

WidKit está construido con tecnologías web modernas y eficientes:

| Tecnología | Propósito |
|------------|-----------|
| **HTML5** | Estructura semántica y accesible |
| **Tailwind CSS** | Estilos modernos y responsivos (vía CDN) |
| **JavaScript Vanilla** | Lógica pura sin frameworks pesados |
| **CSS Variables** | Sistema de temas personalizables |
| **Google Fonts** | Tipografías elegantes opcionales |

✅ **Sin backend** - Todo funciona en el cliente
✅ **Sin base de datos** - Configuración por URL
✅ **Sin npm install** - Abre y usa directamente

## 📦 Instalación y Uso Local

### Opción 1: Abrir directamente
Simplemente abre cualquier archivo `.html` en tu navegador preferido. No requiere servidor.

### Opción 2: Servidor local (recomendado)

Con Python:
```bash
# Python 3
python -m http.server 8000
```

Con Node.js:
```bash
# Instalar http-server globalmente
npm install -g http-server

# Ejecutar servidor
http-server -p 8000
```

Luego visita: `http://localhost:8000`

## 🌐 Despliegue en GitHub Pages

### Pasos para desplegar:

1. **Crear repositorio en GitHub**
   - Ve a GitHub y crea un nuevo repositorio
   - Nombra el repositorio (ej: `timemachine`)

2. **Subir código**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: TimeMachine project"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/timemachine.git
   git push -u origin main
   ```

3. **Activar GitHub Pages**
   - Ve a Settings → Pages
   - En "Source", selecciona la rama `main`
   - En "Folder", selecciona `/ (root)`
   - Haz clic en "Save"

4. **Acceder a tu sitio**
   Tu sitio estará disponible en:
   ```
   https://TU_USUARIO.github.io/timemachine/
   ```

### URLs de las herramientas:
- **Demo principal:** `https://TU_USUARIO.github.io/timemachine/`
- **Administrador:** `https://TU_USUARIO.github.io/timemachine/admin.html`
- **Cuenta Regresiva:** `https://TU_USUARIO.github.io/timemachine/cuentaregresiva.html`
- **Calculador de Semanas:** `https://TU_USUARIO.github.io/timemachine/semana.html`

## 💡 Casos de Uso

### Para Educación:
- Calendarios de curso con semanas de clase
- Cuentas regresivas para exámenes
- Planificación de entregas de proyectos

### Para Proyectos:
- Sprints de desarrollo
- Hitos del proyecto
- Fechas límite importantes

### Para Eventos:
- Lanzamientos de productos
- Conferencias y webinars
- Celebraciones especiales

## 🎨 Personalización

### Opción 1: Usar el Administrador (Recomendado)
La forma más fácil es usar `admin.html` que incluye selectores de color visuales.

### Opción 2: Parámetros URL
Ambas herramientas aceptan 3 colores personalizables vía URL:

**Ejemplos de paletas:**

**Paleta Verde:**
```
?c1=%2310b981&c2=%2334d399&c3=%236ee7b7
```

**Paleta Rosa:**
```
?c1=%23ec4899&c2=%23f472b6&c3=%23f9a8d4
```

**Paleta Naranja:**
```
?c1=%23f59e0b&c2=%23fbbf24&c3=%23fcd34d
```

**Paleta Morada (por defecto):**
```
?c1=%239333ea&c2=%23a855f7&c3=%23c084fc
```

### Opción 3: Editar el código
Para cambios permanentes, edita las variables CSS en los archivos HTML:
```css
:root {
    --color-1: #3b82f6;
    --color-2: #60a5fa;
    --color-3: #93c5fd;
}
```

## 📱 Compatibilidad y Responsividad

### Navegadores:
- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)

### Dispositivos:
- 📱 **Móviles** (320px+): Layout optimizado para pantallas pequeñas
- 📱 **Tablets** (640px+): Diseño adaptado a pantallas medianas
- 💻 **Desktop** (1024px+): Experiencia completa
- 🖥️ **Pantallas grandes** (1920px+): Aprovechamiento total del espacio

### Breakpoints de Tailwind CSS:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

Todas las páginas son **100% responsive** y se adaptan automáticamente a cualquier tamaño de pantalla.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar el proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🐛 Reportar Problemas

Si encuentras algún bug o tienes sugerencias, por favor abre un issue en el repositorio de GitHub.

## 📞 Contacto

¿Preguntas? ¿Sugerencias? No dudes en contactar.

---

**Hecho con ❤️ usando Tailwind CSS**
