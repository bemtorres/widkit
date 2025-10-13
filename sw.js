const CACHE_NAME = 'widkit-v1.0.0a';
const STATIC_CACHE = 'widkit-static-v1.0.0a';
const DYNAMIC_CACHE = 'widkit-dynamic-v1.0.0a';

// Archivos estáticos para cachear en la instalación
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/offline.html',
  '/example.html',
  '/faq.html',
  '/casos-uso.html',
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
  
  // Estrategia: Cache First con Network Fallback
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          console.log('[SW] Sirviendo desde caché:', request.url);
          // Actualizar caché en segundo plano
          fetch(request).then(response => {
            if (response && response.status === 200) {
              caches.open(DYNAMIC_CACHE).then(cache => {
                cache.put(request, response);
              });
            }
          }).catch(() => {});
          return cachedResponse;
        }
        
        // Si no está en caché, buscar en la red
        console.log('[SW] Buscando en red:', request.url);
        return fetch(request)
          .then((response) => {
            // No cachear respuestas inválidas
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }
            
            // Clonar la respuesta porque solo se puede usar una vez
            const responseToCache = response.clone();
            
            // Guardar en caché dinámica
            caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(request, responseToCache);
            });
            
            return response;
          })
          .catch((error) => {
            console.error('[SW] Error al buscar en red:', request.url, error);
            
            // Si es una página HTML, devolver página offline personalizada
            if (request.headers.get('accept').includes('text/html')) {
              return caches.match('/offline.html').then(response => {
                return response || caches.match('/index.html');
              });
            }
            
            // Para otros recursos, simplemente fallar
            return new Response('Offline - Recurso no disponible', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain'
              })
            });
          });
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

