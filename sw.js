// Yeonny Arcade 서비스 워커: 메인 페이지 자체 파일만 다룬다. 항상 네트워크를 먼저 시도하고, 끊겼을 때만 저장본을 쓴다.
// (같은 도메인의 다른 게임 주소는 건드리지 않고 그대로 통과시킨다.)
const CACHE = 'yeonny-hub-v2';
const SHELL = ['./', 'index.html', 'games.css?v=3', 'history.css?v=3', 'events.css?v=3', 'games-data.js?v=2', 'games.js?v=3', 'history.js?v=3', 'events.js?v=1', 'pwa.js?v=1',
  'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png', 'icons/apple-touch-icon.png',
  'media/overclock-event-poster.jpg', 'media/bladeraid-event-poster.jpg', 'overclock-event.html'];
const OWN = new Set(SHELL.map(u => new URL(u, self.registration.scope).href));
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(SHELL.map(u => c.add(new Request(u, { cache: 'reload' })).catch(() => { })))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  const own = u.origin === location.origin && (OWN.has(u.origin + u.pathname + u.search) || u.pathname === new URL(self.registration.scope).pathname);
  if (!own || /\.(mp4|mp3)$/.test(u.pathname)) return;      // 영상 · 음악은 저장하지 않는다
  e.respondWith(fetch(r).then(res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(r, copy)); } return res; }).catch(() => caches.match(r, { ignoreSearch: false }).then(m => m || (r.mode === 'navigate' ? caches.match('index.html') : undefined))));
});
