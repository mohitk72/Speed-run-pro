const CACHE_NAME = 'speedrun-max-final-v3';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
  './ramp.png',
  './train.png',
  './jetpack.png',
  './boots.png',
  './magnet.png',
  'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
