// 앱으로 설치: 설치할 수 있는 브라우저에서는 버튼이 나타나고, iPhone·iPad는 홈 화면에 추가하는 방법을 알려 준다.
(function () {
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () { }); });
  }
  var standalone = (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
  if (standalone) return;
  var ios = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var deferred = null, btn = null;
  function make() {
    if (btn) return btn;
    btn = document.createElement('button'); btn.type = 'button'; btn.className = 'hs-open pwa-open'; btn.id = 'pwaOpen';
    btn.innerHTML = '<span class="ico">📲</span>앱으로 설치';
    var anchor = document.getElementById('evOpen') || document.getElementById('hsOpen'); if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(btn, anchor.nextSibling);
    btn.addEventListener('click', function () {
      if (deferred) { deferred.prompt(); deferred.userChoice.then(function () { deferred = null; if (btn) btn.hidden = true; }); return; }
      tip();
    });
    return btn;
  }
  function tip() {
    var t = document.getElementById('pwaTip'); if (t) { t.remove(); return; }
    t = document.createElement('div'); t.id = 'pwaTip'; t.className = 'pwa-tip'; t.setAttribute('role', 'status');
    t.innerHTML = ios ? 'Safari 아래의 <b>공유 버튼(□↑)</b>을 누르고 <b>「홈 화면에 추가」</b>를 선택하세요.' : '브라우저 메뉴에서 <b>「앱 설치」</b> 또는 <b>「홈 화면에 추가」</b>를 선택하세요.';
    t.addEventListener('click', function () { t.remove(); }); document.body.appendChild(t); setTimeout(function () { if (t.parentNode) t.remove(); }, 9000);
  }
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); deferred = e; make().hidden = false; });
  window.addEventListener('appinstalled', function () { if (btn) btn.hidden = true; });
  if (ios) { var go = function () { make(); }; if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go(); }
})();
