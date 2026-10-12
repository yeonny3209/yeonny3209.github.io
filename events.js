// 이벤트 안내 창: 접속하면 떠 있고, 제목줄을 끌어 옮기거나 ✕ · Esc · 「오늘 하루 보지 않기」로 끌 수 있다.
(function () {
  var EV = [
    { id: 'overclock', tab: '오버클럭 · 끝없는 신호', tag: 'OVERCLOCK EVENT', title: '끝없는 신호', sub: '무한 아레나 최고 웨이브 챌린지',
      poster: 'media/overclock-event-poster.jpg', alt: '오버클럭 이벤트 끝없는 신호 포스터',
      text: '오버클럭의 무한 아레나에서 가장 많은 웨이브를 돌파한 사람에게 상금 5피스를 드립니다. 결과 화면의 「기록 카드 저장」 버튼으로 카드를 만들어 보내면 참가가 끝납니다.',
      list: ['기간 : 2026.10.12 ~ 11.12 (1개월)', '순위 : 돌파 웨이브 우선, 같으면 플레이 타임이 짧은 순', '제출 : 기록 카드 이미지와 닉네임을 세윤에게 개인 카톡으로'],
      notice: 'overclock-event.html', play: 'https://yeonny3209.github.io/overclock/' },
    { id: 'bladeraid', tab: '블레이드 레이드 · 탑을 오르는 자들', tag: 'BLADE RAID EVENT', title: '탑을 오르는 자들', sub: '무한의 탑 최고층 챌린지',
      poster: 'media/bladeraid-event-poster.jpg', alt: '블레이드 레이드 이벤트 탑을 오르는 자들 포스터',
      text: '블레이드 레이드의 무한의 탑에서 가장 높이 오른 사람에게 상금 5피스를 드립니다. 던전 3개를 클리어하면 탑이 열리고, 게임오버 화면의 「기록 카드 저장」 버튼으로 기록을 남길 수 있습니다.',
      list: ['기간 : 2026.10.12 ~ 11.12 (1개월)', '순위 : 보통 난이도 기록만 인정, 돌파 층수 우선, 같으면 클리어 타임이 짧은 순', '제출 : 기록 카드 이미지와 닉네임을 세윤에게 개인 카톡으로'],
      notice: 'https://yeonny3209.github.io/blade-raid/event.html', play: 'https://yeonny3209.github.io/blade-raid/' }
  ];
  var KEY = 'evHideDate', win, sel = 0, openBtn;
  function today() { var d = new Date(), p = function (n) { return String(n).padStart(2, '0'); }; return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()); }
  function hiddenToday() { try { return localStorage.getItem(KEY) === today(); } catch (e) { return false; } }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function render() {
    var e = EV[sel];
    win.querySelectorAll('.evw-tab').forEach(function (t, i) { t.setAttribute('aria-selected', i === sel ? 'true' : 'false'); });
    var ext = /^https?:/.test(e.notice) ? ' target="_blank" rel="noopener"' : '';
    win.querySelector('.evw-body').innerHTML =
      '<a class="evw-poster" href="' + e.poster + '" target="_blank" rel="noopener" aria-label="포스터 크게 보기"><img src="' + e.poster + '" alt="' + esc(e.alt) + '"></a>' +
      '<div class="evw-txt"><span class="evw-tag">' + esc(e.tag) + '</span><h3>' + esc(e.title) + '</h3><p class="evw-sub">' + esc(e.sub) + '</p><p>' + esc(e.text) + '</p>' +
      '<ul>' + e.list.map(function (l) { return '<li>' + esc(l) + '</li>'; }).join('') + '</ul>' +
      '<div class="evw-btns"><a class="evw-go" href="' + e.notice + '"' + ext + '>공지 자세히 보기</a><a class="evw-go alt" href="' + e.play + '" target="_blank" rel="noopener">게임 하러 가기 ▶</a></div></div>';
  }
  function place(x, y) {
    var w = win.offsetWidth, h = win.offsetHeight, vw = window.innerWidth, vh = window.innerHeight;
    x = Math.max(8 - w + 120, Math.min(vw - 120, x)); y = Math.max(0, Math.min(vh - 48, y));
    win.style.left = x + 'px'; win.style.top = y + 'px';
  }
  function center() { var w = win.offsetWidth, h = win.offsetHeight; place((window.innerWidth - w) / 2, Math.max(10, (window.innerHeight - h) / 2)); }

  function build() {
    win = document.createElement('div'); win.className = 'evw'; win.hidden = true; win.setAttribute('role', 'dialog'); win.setAttribute('aria-label', '진행 중인 이벤트');
    win.innerHTML = '<div class="evw-bar"><span class="evw-ttl">🎁 진행 중인 이벤트<small>EVENT</small></span><button type="button" class="evw-x" aria-label="이벤트 창 닫기">✕</button></div>' +
      '<div class="evw-tabs" role="tablist">' + EV.map(function (e, i) { return '<button type="button" class="evw-tab" role="tab" data-i="' + i + '">' + esc(e.tab) + '</button>'; }).join('') + '</div>' +
      '<div class="evw-body"></div>' +
      '<div class="evw-foot"><span>제목줄을 끌어서 옮길 수 있어요</span><span><button type="button" data-a="today">오늘 하루 보지 않기</button> <button type="button" data-a="close">닫기</button></span></div>';
    document.body.appendChild(win);
    win.querySelector('.evw-x').addEventListener('click', close);
    win.addEventListener('click', function (e) {
      var t = e.target.closest && e.target.closest('.evw-tab'); if (t) { sel = +t.getAttribute('data-i'); render(); return; }
      var a = e.target.closest && e.target.closest('[data-a]'); if (!a) return;
      if (a.getAttribute('data-a') === 'today') { try { localStorage.setItem(KEY, today()); } catch (er) { } }
      close();
    });
    // 끌어서 옮기기
    var bar = win.querySelector('.evw-bar'), ox = 0, oy = 0, drag = false;
    bar.addEventListener('pointerdown', function (e) {
      if (e.target.closest('button')) return;
      drag = true; ox = e.clientX - win.offsetLeft; oy = e.clientY - win.offsetTop; win.classList.add('drag'); bar.setPointerCapture(e.pointerId); e.preventDefault();
    });
    bar.addEventListener('pointermove', function (e) { if (drag) place(e.clientX - ox, e.clientY - oy); });
    var end = function () { drag = false; win.classList.remove('drag'); };
    bar.addEventListener('pointerup', end); bar.addEventListener('pointercancel', end);
    window.addEventListener('resize', function () { if (!win.hidden) place(win.offsetLeft, win.offsetTop); });
    window.addEventListener('keydown', function (e) { if (!win.hidden && e.key === 'Escape') { var o = document.querySelector('.hof-ov.open,.hs.open,.gd.open'); if (!o) close(); } });
  }
  function open() {
    if (!win) build();
    render(); win.hidden = false; center(); void win.offsetWidth; win.classList.add('show');
    var x = win.querySelector('.evw-x'); if (x) x.focus({ preventScroll: true });
  }
  function close() {
    if (!win || win.hidden) return;
    win.classList.remove('show'); setTimeout(function () { win.hidden = true; }, 250);
    if (openBtn) openBtn.focus({ preventScroll: true });
  }
  function init() {
    openBtn = document.getElementById('evOpen'); if (openBtn) openBtn.addEventListener('click', open);
    if (!hiddenToday()) setTimeout(function () { if (!document.querySelector('.hof-ov.open,.hs.open')) open(); }, 700);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
