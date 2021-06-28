self.addEventListener('install', e => {
    e.waitUntil(caches.open('static').then(cache => {
        return cache.addAll([
            '/favicon.ico',
            '/icon.png',
            '/javascript/main.js',
            '/stylesheet/main.css',
            '/stylesheet/bulma/css/bulma.min.css'
        ])
    }))
});

self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request)),
    );
});