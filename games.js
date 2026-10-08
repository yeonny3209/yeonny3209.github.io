// 게임 상세 창: 카드의 「상세 설명 보기」를 누르면 게임마다 다른 테마의 창이 열리고 플레이 영상이 재생된다.
(function () {
  var D = window.GAME_DETAILS || {};
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var ov = document.createElement('div');
  ov.className = 'gd'; ov.hidden = true; ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true');
  document.body.appendChild(ov);
  var lastFocus = null;

  function build(id) {
    var g = D[id];
    return '<div class="gd-win th-' + g.theme + '">' +
      '<button type="button" class="gd-x" aria-label="닫기">✕</button>' +
      '<div class="gd-hero">' +
        '<div class="gd-vid"><video muted autoplay loop playsinline preload="auto" src="' + g.video + '"></video><span class="rec">PLAY FOOTAGE</span></div>' +
        '<div class="gd-head"><span class="gd-en">' + esc(g.en) + '</span><h3 class="gd-title" id="gdTitle">' + esc(g.title) + '</h3>' +
          '<span class="gd-genre">' + esc(g.genre) + '</span><p class="gd-tag">' + esc(g.tagline) + '</p>' +
          '<a class="gd-play" href="' + g.url + '" target="_blank" rel="noopener">PLAY ▶</a></div>' +
      '</div>' +
      '<div class="gd-stats">' + g.stats.map(function (s) { return '<div class="gd-stat"><b>' + esc(s[1]) + '</b><span>' + esc(s[0]) + '</span></div>'; }).join('') + '</div>' +
      '<div class="gd-body"><div class="gd-main">' +
        '<h4>어떤 게임인가</h4><div class="gd-intro">' + g.intro.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</div>' +
        '<h4>핵심 시스템</h4><div class="gd-sys">' + g.systems.map(function (s) { return '<div class="gd-card"><span class="i" aria-hidden="true">' + s[0] + '</span><b>' + esc(s[1]) + '</b><p>' + esc(s[2]) + '</p></div>'; }).join('') + '</div>' +
      '</div><div class="gd-side">' +
        '<h4>조작법</h4><div class="gd-keys">' + g.controls.map(function (c) { return '<kbd>' + esc(c[0]) + '</kbd><span>' + esc(c[1]) + '</span>'; }).join('') + '</div>' +
        '<h4>공략 팁</h4><ul class="gd-list">' + g.tips.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>' +
        '<h4>제작 노트</h4><ul class="gd-list">' + g.notes.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>' +
      '</div></div></div>';
  }
  function open(id) {
    if (!D[id]) return;
    lastFocus = document.activeElement;
    ov.innerHTML = build(id); ov.setAttribute('aria-labelledby', 'gdTitle');
    ov.hidden = false; document.body.classList.add('gd-lock');
    void ov.offsetWidth; ov.classList.add('open');
    var v = ov.querySelector('video'); v.muted = true;
    var tryPlay = function () { var p = v.play(); if (p && p.catch) p.catch(function () { }); };
    tryPlay(); v.addEventListener('canplay', tryPlay, { once: true });
    ov.querySelector('.gd-x').addEventListener('click', close);
    ov.querySelector('.gd-x').focus({ preventScroll: true });
  }
  function close() {
    var v = ov.querySelector('video'); if (v) { v.pause(); v.removeAttribute('src'); v.load(); }
    ov.classList.remove('open');
    setTimeout(function () { ov.hidden = true; ov.innerHTML = ''; document.body.classList.remove('gd-lock'); }, 300);
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }
  ov.addEventListener('click', function (e) { if (e.target === ov) close(); });
  addEventListener('keydown', function (e) {
    if (ov.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'Tab') {
      var f = [].slice.call(ov.querySelectorAll('a[href],button')); if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  });
  document.addEventListener('click', function (e) { var b = e.target.closest && e.target.closest('.more-btn'); if (b) open(b.dataset.game); });
})();
