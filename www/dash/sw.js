const CACHE_NAME = 'camper-dashboard-v1';
const urlsToCache = [
    // HTML Seiten
    '/dash/index.html',
    '/dash/control.html',
    // CSS & JS
    '/dash/style.css',
    '/dash/config.js',
    '/dash/mqtt.min.js',
    '/dash/sw.js', // Service Worker selbst
    // Images (Mindestens das Logo und die Icons)
    '/dash/imag/felix.png',
    '/dash/imag/icon-192x192.png',
    '/dash/imag/icon-512x512.png'
];

self.addEventListener('install', event => {
    // Ressourcen in den Cache legen
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
    // Sofort aktivieren, um das Dashboard schneller nutzbar zu machen
    self.skipWaiting();
});

self.addEventListener('fetch', event => {
    // Wenn das Netzwerk verfügbar ist, nutze das Netzwerk.
    // Ansonsten den Cache. Dies ist eine "Cache-first, then network" Strategie.
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            // Cache Treffer - gib die gecachte Version zurück
            if (response) {
                return response;
            }
            // Kein Cache Treffer - Anforderung über das Netzwerk holen
            return fetch(event.request);
        })
    );
});

self.addEventListener('activate', event => {
    // Alte Caches löschen
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});