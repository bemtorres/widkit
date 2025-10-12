# 🦉 WidKit - Widgets Educativos PWA

<div align="center">

**Widgets educativos listos para usar en Moodle, Blackboard, Canvas y cualquier LMS**

[![PWA Ready](https://img.shields.io/badge/PWA-Ready-success?style=for-the-badge&logo=pwa)](https://web.dev/progressive-web-apps/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)](https://github.com/bemtorres)

[🌐 Demo en Vivo](https://widkit.lol/) • [📱 Instalar App](#-instalación-como-pwa) • [📚 Documentación](#-widgets-disponibles)

</div>

---

## ✨ Características

- 🚀 **Progressive Web App (PWA)** - Instálala como app nativa
- 📴 **Funciona Offline** - Gracias al Service Worker
- ⚡ **Carga Rápida** - Sistema de caché inteligente
- 🎨 **8 Widgets Diferentes** - Listos para usar
- 🔧 **Sin Backend** - Todo funciona por URL
- 📱 **100% Responsive** - Funciona en todos los dispositivos
- 🆓 **Completamente Gratis** - Sin registro ni anuncios
- 🎯 **Cero Configuración** - Copia y pega el iframe

## 🎯 Widgets Disponibles

| Widget | Descripción | Demo |
|--------|-------------|------|
| ⏱️ **Cuenta Regresiva** | Temporizador para exámenes y entregas | [Ver demo](app/cuentaregresiva.html) |
| 🥇 **Cronómetro** | Tiempo transcurrido desde un evento | [Ver demo](app/cronometro.html) |
| 📅 **Calculador de Semanas** | Organiza tu curso por semanas | [Ver demo](app/semana.html) |
| 🎲 **Sorteo Interactivo** | Sorteos con animación y confetti | [Ver demo](app/sorteo.html) |
| 📱 **Generador de QR** | Códigos QR personalizables | [Ver demo](app/qr.html) |
| 🎯 **Selector de Estudiante** | Selección aleatoria rápida | [Ver demo](app/ruleta.html) |
| 🔢 **Calculadora de Notas** | Promedio ponderado y más | [Ver demo](app/notas.html) |
| 👥 **Generador de Equipos** | Divide en equipos balanceados | [Ver demo](app/equipos.html) |

## 📱 Instalación como PWA

### Para Usuarios:

1. **En el navegador:**
   - Busca el ícono de instalación (⊕) en la barra de direcciones
   - O haz clic en el botón flotante "📱 Instalar App"

2. **En móvil:**
   - Chrome: Menú (⋮) → "Instalar aplicación"
   - Safari: Compartir → "Agregar a pantalla de inicio"

3. **¡Listo!** La app aparecerá en tu pantalla de inicio

### Para Desarrolladores:

```bash
# Clonar el repositorio
git clone https://github.com/bemtorres/widkit.git
cd widkit

# Iniciar servidor local con Node.js
npm start

# O usa Python
python -m http.server 8080

# O usa npx serve
npx serve .
```

Luego abre `http://localhost:8080` en tu navegador.

## 🎨 Generar Iconos PWA

**Opción 1: Generador Incluido (Más Fácil)**

```bash
# Abre el generador en tu navegador:
http://localhost:8080/icon-generator.html

# 1. Personaliza el emoji/texto y color
# 2. Haz clic en "Generar Todos los Iconos"
# 3. Los iconos se descargarán automáticamente
# 4. Coloca los archivos en assets/img/
```

**Opción 2: Herramienta Online**
- Ve a [PWA Asset Generator](https://www.pwabuilder.com/imageGenerator)
- Sube tu logo (512x512px recomendado)
- Descarga y coloca en `assets/img/`

**Opción 3: ImageMagick (Línea de Comandos)**
```bash
# Generar todos los tamaños desde logo.png
for size in 72 96 128 144 152 192 384 512; do
  convert logo.png -resize ${size}x${size} assets/img/icon-${size}x${size}.png
done
```

## 🔧 Integración en LMS

### Moodle
```html
1. Activa el modo edición en tu curso
2. Añade una "Etiqueta" o "Página"
3. Haz clic en el botón HTML (</>)
4. Pega el código iframe:

<iframe src="https://tu-dominio.com/app/cuentaregresiva.html?title=Examen&y=2025&m=12&d=15" 
        width="100%" height="450" frameborder="0"></iframe>
```

### Blackboard
```html
1. Ve al área de contenido
2. Selecciona "Crear contenido" → "Elemento"
3. En el editor, cambia a vista HTML
4. Pega el código iframe
5. Envía y ¡funciona!
```

### Canvas
```html
1. Edita una página o módulo
2. Haz clic en "Editor HTML" (icono </>)
3. Pega el código iframe
4. Guarda cambios
```

## 🚀 Despliegue

### GitHub Pages
```bash
git add .
git commit -m "Deploy PWA"
git push origin main

# Activa GitHub Pages en Settings → Pages
# Source: main branch / root
```

### Netlify
```bash
# 1. Conecta tu repositorio en netlify.com
# 2. Build command: (vacío)
# 3. Publish directory: .
# 4. Deploy!
```

### Vercel
```bash
vercel deploy
```

## 📊 Verificar PWA

### Lighthouse Audit
1. Abre Chrome DevTools (F12)
2. Pestaña "Lighthouse"
3. Selecciona "Progressive Web App"
4. "Generate report"
5. **Objetivo: 100/100** ✅

### Service Worker
1. DevTools → Application
2. Service Workers (sidebar)
3. Debe mostrar "activated and running"

### Manifest
1. DevTools → Application
2. Manifest (sidebar)
3. Verifica nombre, iconos y colores

## 🛠️ Estructura del Proyecto

```
widkit/
├── index.html              # Página principal (PWA ready)
├── manifest.json           # Configuración de la PWA
├── sw.js                   # Service Worker
├── offline.html            # Página sin conexión
├── icon-generator.html     # Generador de iconos
├── server.js               # Servidor de desarrollo
├── package.json            # Dependencias npm
├── PWA-SETUP.md           # Guía detallada de PWA
│
├── admin/                  # Páginas de configuración
│   ├── cronometro.html
│   ├── equipos.html
│   ├── notas.html
│   ├── qr.html
│   ├── ruleta.html
│   ├── semana.html
│   ├── sorteo.html
│   ├── temporizador.html
│   └── js/                 # Scripts de admin
│
├── app/                    # Widgets embebibles
│   ├── cronometro.html
│   ├── cuentaregresiva.html
│   ├── equipos.html
│   ├── notas.html
│   ├── qr.html
│   ├── ruleta.html
│   ├── semana.html
│   └── sorteo.html
│
└── assets/
    ├── css/
    ├── js/
    └── img/
        ├── icon-*.png      # Iconos de la PWA (genera con icon-generator.html)
        ├── Moodle-logo.png
        ├── Blackboard-Original.png
        └── canvas-lms-logo.png
```

## 🧪 Desarrollo

### Requisitos
- Navegador moderno (Chrome, Edge, Firefox)
- Node.js (opcional, para servidor local)

### Comandos
```bash
# Iniciar servidor de desarrollo
npm start

# O usar Python
python -m http.server 8080

# O usar npx
npx serve .
```

### Actualizar Service Worker
```javascript
// En sw.js, incrementa la versión:
const CACHE_NAME = 'widkit-v1.1.0';  // ← Cambia esto
```

Los usuarios recibirán una notificación para actualizar.

## 🌐 Arquitectura PWA

### Archivos Clave

- **manifest.json**: Define metadatos, iconos, colores y shortcuts
- **sw.js**: Service Worker para caché y funcionalidad offline
- **offline.html**: Página mostrada cuando no hay conexión

### Estrategia de Caché

- **Cache First**: Archivos estáticos (HTML, CSS, JS)
- **Network First**: Contenido dinámico con fallback a caché
- **Stale While Revalidate**: Imágenes y assets

### Características PWA Implementadas

✅ Instalable en escritorio y móvil  
✅ Funciona sin conexión  
✅ Actualizaciones automáticas  
✅ Shortcuts a widgets populares  
✅ Notificación de actualizaciones  
✅ Modo standalone (sin barra del navegador)  
✅ Splash screen personalizado  
✅ Tema color adaptable  

## 📱 Compatibilidad

### Navegadores Soportados
| Navegador | Versión Mínima | PWA Support |
|-----------|----------------|-------------|
| Chrome | 90+ | ✅ Completo |
| Firefox | 88+ | ✅ Completo |
| Safari | 14+ | ⚠️ Limitado |
| Edge | 90+ | ✅ Completo |
| Opera | 76+ | ✅ Completo |

### Dispositivos
- 📱 **Móviles:** iOS 14+, Android 5+
- 📱 **Tablets:** iPad, Android tablets
- 💻 **Desktop:** Windows, macOS, Linux
- 🖥️ **Pantallas grandes:** 4K, ultrawide

## 🐛 Solución de Problemas

### El Service Worker no se registra:
- Verifica que estés usando HTTPS o localhost
- Revisa la consola del navegador para errores
- Asegúrate de que `sw.js` esté en la raíz del proyecto

### Los iconos no se muestran:
- Verifica que los archivos existen en `assets/img/`
- Revisa las rutas en `manifest.json`
- Limpia el caché del navegador
- Usa el generador: `icon-generator.html`

### La instalación no aparece:
- Verifica que todos los criterios de PWA se cumplan (Lighthouse)
- En Chrome, ve a chrome://flags y busca "bypass-app-banner-engagement-checks"
- Limpia el cache y recarga

### El widget no funciona offline:
- Verifica que el Service Worker esté activo (DevTools → Application)
- Carga la página al menos una vez con conexión
- Revisa que los archivos estén en STATIC_ASSETS (sw.js)

## 📄 Licencia

MIT License - Uso libre y gratuito

```
Copyright (c) 2025 WidKit

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

## 👨‍💻 Autor

Desarrollado con ❤️ por [@bemtorres](https://github.com/bemtorres)

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! 

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📚 Recursos Adicionales

- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [Service Workers Guide](https://developers.google.com/web/fundamentals/primers/service-workers)
- [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [PWA-SETUP.md](PWA-SETUP.md) - Guía completa de configuración

## ⭐ Apóyanos

Si te gusta WidKit, dale una ⭐ en GitHub y compártelo con otros educadores.

---

<div align="center">

**[🌐 Visita widkit.lol](https://widkit.lol/)** • **[📱 Prueba la PWA](https://widkit.lol/)** • **[💬 Issues](https://github.com/bemtorres/widkit/issues)**

Hecho con 🦉 para educadores

</div>
