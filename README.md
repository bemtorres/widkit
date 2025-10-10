# ⏰ TimeMachine - Temporizadores y Calculador de Semanas

Proyecto web con Tailwind CSS, HTML y JavaScript para crear cuentas regresivas y calcular semanas de trabajo. Diseñado específicamente para ser embebido en iframes.

## 🚀 Demo en Vivo

Visita `index.html` para ver ejemplos interactivos de todas las funcionalidades.

## 📋 Contenido del Proyecto

### 1. **temporizador.html** - Cuenta Regresiva Personalizable

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

*Si no se proporcionan, se usa la fecha actual.

#### Ejemplos de Uso:

**Cuenta regresiva para Año Nuevo:**
```
temporizador.html?title=Año Nuevo 2026&y=2026&m=1&d=1&h=0&min=0
```

**Cuenta regresiva para Navidad:**
```
temporizador.html?title=Navidad 2025&y=2025&m=12&d=25&h=18&min=30
```

**Embeber en iframe:**
```html
<iframe 
    src="temporizador.html?title=Mi Evento&y=2026&m=6&d=15" 
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

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **Tailwind CSS** (CDN) - Estilos modernos y responsivos
- **JavaScript Vanilla** - Lógica y manipulación del DOM
- Sin dependencias externas adicionales

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
- **Temporizador:** `https://TU_USUARIO.github.io/timemachine/temporizador.html`
- **Calculador:** `https://TU_USUARIO.github.io/timemachine/semana.html`

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

### Cambiar colores del temporizador:
Edita las clases de Tailwind en `temporizador.html`:
```html
<!-- Fondo del body -->
<body class="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500">

<!-- Tarjetas de tiempo -->
<div class="bg-gradient-to-br from-purple-500 to-purple-600">
```

### Cambiar colores del calculador:
Edita las clases de Tailwind en `semana.html`:
```html
<!-- Fondo del body -->
<body class="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500">
```

## 📱 Compatibilidad

- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)
- ✅ Dispositivos móviles (iOS y Android)

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
