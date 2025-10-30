// Incrementa estas versiones en cada despliegue para forzar limpieza
const CACHE_VERSION = 'v1.0.1';
const CACHE_NAME = `widkit-${CACHE_VERSION}`;
const STATIC_CACHE = `widkit-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `widkit-dynamic-${CACHE_VERSION}`;

// Archivos estáticos para cachear en la instalación
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/offline.html',
  '/example.html',
  '/faq.html',
  '/casos-uso.html',
  '/nosotros.html',
  '/sitemap.xml',
  '/robots.txt',
  
  // Admin pages
  '/admin/cronometro.html',
  '/admin/equipos.html',
  '/admin/leaderboard.html',
  '/admin/notas.html',
  '/admin/pomodoro.html',
  '/admin/qr.html',
  '/admin/ruleta.html',
  '/admin/semana.html',
  '/admin/sorteo.html',
  '/admin/temporizador.html',
  '/admin/quiz.html',
  '/admin/steps.html',
  '/admin/nubes.html',
  '/admin/fuego-salto.html',
  
  // App pages
  '/app/cronometro.html',
  '/app/cuentaregresiva.html',
  '/app/equipos.html',
  '/app/leaderboard.html',
  '/app/notas.html',
  '/app/pomodoro.html',
  '/app/qr.html',
  '/app/ruleta.html',
  '/app/semana.html',
  '/app/sorteo.html',
  '/app/quiz.html',
  '/app/steps.html',
  '/app/nubes.html',
  '/app/fuego-salto.html',
  
  // Assets
  '/assets/img/Moodle-logo.png',
  '/assets/img/Blackboard-Original.png',
  '/assets/img/canvas-lms-logo.png',
  '/assets/img/github-mark.svg',
  '/assets/img/github-mark-white.svg'
];

// Instalar el Service Worker y cachear los recursos estáticos
self.addEventListener('install', (event) => {
  console.log('[SW] Instalando Service Worker...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      console.log('[SW] Cacheando archivos estáticos');
      // Cachear archivos individuales, ignorando los que fallen
      return Promise.allSettled(
        STATIC_ASSETS.map(url => 
          cache.add(url).catch(err => {
            console.warn(`[SW] No se pudo cachear: ${url}`, err);
          })
        )
      );
    })
  );
  
  // Activar inmediatamente el nuevo service worker
  self.skipWaiting();
});

// Activar el Service Worker y limpiar cachés antiguas
self.addEventListener('activate', (event) => {
  console.log('[SW] Activando Service Worker...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('[SW] Eliminando caché antigua:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  // Tomar control de todas las páginas inmediatamente
  return self.clients.claim();
});

// Interceptar las peticiones y responder con la estrategia de caché
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Solo interceptar peticiones del mismo origen
  if (url.origin !== location.origin) {
    // Para recursos externos (CDN, etc.), intentar red primero
    event.respondWith(
      fetch(request)
        .then(response => {
          // No cachear recursos externos
          return response;
        })
        .catch(() => {
          // Si falla, intentar desde caché
          return caches.match(request);
        })
    );
    return;
  }
  
  // HTML: estrategia network-first (para evitar servir versiones viejas)
  const isHtml = request.mode === 'navigate' || (request.headers.get('accept') || '').includes('text/html');
  if (isHtml) {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const clone = res.clone();
          caches.open(DYNAMIC_CACHE).then((c) => c.put(request, clone));
          return res;
        })
        .catch(() => caches.match(request).then((r) => r || caches.match('/index.html')))
    );
    return;
  }

  // Estáticos (css/js/img): stale-while-revalidate
  event.respondWith(
    caches.match(request).then((cached) => {
      const fetchPromise = fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(DYNAMIC_CACHE).then((c) => c.put(request, clone));
          }
          return response;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })
  );
});

// Manejar mensajes desde el cliente
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            return caches.delete(cacheName);
          })
        );
      }).then(() => {
        console.log('[SW] Caché limpiada');
        event.ports[0].postMessage({ success: true });
      })
    );
  }
});

// Sincronización en segundo plano (opcional)
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-data') {
    event.waitUntil(
      // Aquí podrías sincronizar datos cuando vuelva la conexión
      console.log('[SW] Sincronizando datos en segundo plano...')
    );
  }
});

// Notificaciones push (opcional, para futuras implementaciones)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Nueva actualización disponible',
    icon: '/assets/img/icon-192x192.png',
    badge: '/assets/img/icon-96x96.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  
  event.waitUntil(
    self.registration.showNotification('WidKit', options)
  );
});

// Manejar clicks en notificaciones
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('/')
  );
});

