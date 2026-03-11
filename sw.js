const CACHE_NAME = 'geracao-inabalavel-v1';
const ASSETS = [
  './',
  './index.html',
  './1.html',
  './2.html',
  './3.html',
  './4.html',
  './5.html',
  './6.html',
  './7.html',
  './8.html',
    './9.html',
  './10.html',
  './manifest.json',
  './capa.jpg',
  './img.png',
  './logo-192.png',
  './logo-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});