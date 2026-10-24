// 역사 창: 작은 여행자가 지난 게임 11개의 정거장을 걸어서 지나간다. 정거장에 서면 영상과 이야기가 열리고, 길 끝에서 감사 인사를 만난다.
(function () {
  var D = [
    { no: 1, icon: '🌟', title: '첫 번째 페이지', en: 'THE FIRST PAGE', tag: '2026.06 · 모든 것의 시작', color: '#ff6b8b', sky: ['#1a0a14', '#3a1224'],
      video: 'media/streamlit.mp4', cap: 'Streamlit 페이지 · 직접 플레이',
      quote: '“안녕하세요”라는 한 줄에서 시작됐다.',
      paras: ['2026년 6월 2일, streamlit_app.py라는 이름의 파일이 처음 만들어졌습니다. 환영 문구와 이름을 적는 칸, 그리고 「인사하기」 버튼이 전부였습니다. 그런데 이름을 적고 버튼을 누르자 화면이 나를 불러 주었습니다. 이 모든 이야기의 첫 장면입니다.',
        '이 작은 페이지는 멈추지 않고 자랐습니다. 업다운 게임, 뱀사다리, 쿼리도로 시작해 타워 디펜스, 드래곤 보육원, 리듬 게임까지. 사이드바에는 어느새 스무 개의 페이지가 줄을 섰습니다. 지금 보면 서툴러도, 가장 큰 용기가 필요했던 건 이때였습니다.'],
      chips: ['첫 커밋 6월 2일', 'Streamlit · 파이썬', '페이지 20개'], link: 'https://qkrtpdbs1-cajfntkjrpgleppcqjkg8n.streamlit.app/' },
    { no: 2, icon: '🧊', title: '평면을 벗어난 첫 세계', en: 'MY 3D GAME UNIVERSE', tag: '2026.07 · 처음 만든 3D', color: '#37d2ff', sky: ['#04101c', '#0b2f48'],
      video: 'media/portal3d.mp4', cap: '3D 포털 · Dragon Rider · 직접 플레이',
      quote: '처음으로 위와 아래가 생겼다.',
      paras: ['7월 말, 평평하던 화면에 깊이가 생겼습니다. React Three Fiber로 만든 「My 3D Game Universe」에는 액션 RPG, 알을 훔쳐 하늘로 날아오르는 드래곤 라이더, 점프맵 시련의 탑, 방탈출까지 네 개의 게임이 한 포털 안에 들어 있습니다.',
        '카메라가 돌아가고 하늘이 열리는 것만으로도 설레던 시기였습니다. 여럿이 같은 공간에서 만나는 멀티플레이까지 욕심을 냈고, 설치 없이 주소 하나로 어디서든 열리게 했습니다. 세계가 한 겹 넓어진 순간이었습니다.'],
      chips: ['첫 번째 3D', 'React Three Fiber', '게임 4종', '멀티플레이'], link: 'https://chimerical-licorice-8b602c.netlify.app/' },
    { no: 3, icon: '🐉', title: '용의 섬에서 만난 드래곤', en: 'DRAGON MASTER: LEGEND', tag: '2026.08 · 소환하고 키우고 싸우는 RPG', color: '#c77dff', sky: ['#14081f', '#3a1650'],
      video: 'media/dragon2.mp4', cap: '드래곤 마스터: 레전드 · 직접 플레이',
      quote: '이름을 정하고, 첫 드래곤을 고르고, 낯선 섬에서 눈을 떴다.',
      paras: ['8월 3일부터 만든 「드래곤 마스터: 레전드」입니다. 폭풍에 휩쓸려 이름 없는 섬에 닿은 당신이 첫 드래곤을 고르며 모험을 시작합니다. 화염, 빙결, 대지, 뇌전, 신비, 풍, 암흑, 빛. 여덟 속성 중 하나를 고르는 일이 첫 번째 선택입니다.',
        '소환진 위로 3D 드래곤이 날아오르는 연출, 속성 상성이 갈리는 턴제 전투, 갈림길 대사가 있는 10장 300스테이지 이야기, 그리고 500층 무한의 탑까지. 도감 100칸을 한 마리씩 채워 가는 게임입니다.'],
      chips: ['드래곤 100종', '속성 8가지', '캠페인 300스테이지', '무한의 탑 500층'], link: 'https://yeonny3209.github.io/qkrtpdbs1/' },
    { no: 4, icon: '🛡️', title: '코어를 지키는 일', en: 'NEON CORE DEFENSE', tag: '2026.09 · 설계도 위의 전선', color: '#5aa8ff', sky: ['#050c1c', '#0b2a55'],
      video: 'media/neondefense.mp4', cap: '네온 코어 디펜스 · 직접 플레이',
      quote: '한 칸에 한 개의 탑. 그것이 전부였다.',
      paras: ['9월, 설계도 위에 탑을 세우는 게임을 만들었습니다. 회랑을 따라 밀려오는 침공체 앞에 방어탑을 한 칸씩 놓는 일은, 작은 도시를 지키는 일처럼 느껴졌습니다.',
        '방어탑 52종과 증강 1250종. 가짓수를 늘릴수록 같은 판에서도 매번 다른 이야기가 생겼습니다. 정규 웨이브 30개와 지형 네 곳, 난이도 세 단계 모두 한 판의 긴장을 위해 있습니다.'],
      chips: ['방어탑 52종', '증강 1250종', '웨이브 30', '지형 4곳'], link: 'https://yeonny3209.github.io/neon-core-defense/' },
    { no: 5, icon: '⚔️', title: '가장 정성을 쏟은 검', en: 'BLADE RAID', tag: '2026.09 · 가장 잘 만든 게임', color: '#ff5ad1', sky: ['#06100a', '#143024'],
      video: 'media/bladeraid.mp4', cap: '블레이드 레이드 · 어둠의 숲 · 직접 플레이',
      quote: '그림도 소리도, 파일 없이 코드로 한 땀씩.',
      paras: ['검귀 카엘이 모닥불이 켜진 야영지에서 길을 나섭니다. 이미지도 음원도 가져오지 않고 캐릭터와 효과음을 전부 코드로 만들었고, 열 개의 던전마다 보스를 한 명씩 세웠습니다.',
        '스스로 「가장 잘 만든 게임」이라고 부르게 된 작품입니다. 모바일 앱으로도 설치할 수 있고, 무한의 탑에서는 누가 가장 높이 오르는지 겨루는 이벤트도 열었습니다.'],
      chips: ['던전 10곳', '보스 10명', '가장 잘 만든 게임', '웹 · APK'], link: 'https://yeonny3209.github.io/blade-raid/' },
    { no: 6, icon: '🎞️', title: '이야기를 담는 도구', en: 'MINICUT', tag: '2026.09 · 게임이 아닌 도구', color: '#6ff0c4', sky: ['#0b1118', '#1c2e36'],
      video: 'media/minicut.mp4', cap: 'MiniCut 영상 편집기 · 직접 사용',
      quote: '설치도, 서버도 없이. 파일 하나로.',
      paras: ['게임이 아닌 도구도 만들었습니다. MiniCut은 index.html 하나로 영상을 자르고 붙이고 자막을 얹는 브라우저 영상 편집기입니다.',
        '영상은 내 컴퓨터 안에서만 읽히기 때문에 인터넷을 끊어도 똑같이 돌아갑니다. 필터 12종, 효과 14종, 자막 스타일 10종, 되돌리기 60단계. 작지만 단단하게 만들었습니다.'],
      chips: ['HTML 파일 1개', '필터 12종', '효과 14종', '자막 10종'], link: 'https://yeonny3209.github.io/minicut/' },
    { no: 7, icon: '⚡', title: '끝까지 이어 간 이야기', en: 'OVERCLOCK', tag: '2026.10 · 시즌 3까지', color: '#29f0ff', sky: ['#0a0418', '#2a0d4a'],
      video: 'media/overclock.mp4', cap: '오버클럭 · 직접 플레이',
      quote: '누군가 부르면, 누군가는 대답해야 한다.',
      paras: ['10월 1일에 시작한 탑다운 로그라이트 슈팅입니다. 폭주한 도시 AI를 막는 이야기가 지하로, 그리고 도시 밖 황무지로 이어져 시즌 3까지 왔습니다. 요원 14명, 보스 12체, 엔딩 7종, 이벤트 90여 가지가 들어 있습니다.',
        '컷씬마다 마음을 담았고, 선택에 따라 결말이 갈립니다. 마지막 시즌의 주제는 「응답하라」입니다. 그리고 지금, 이 창을 열어 걸어와 준 당신이 그 대답입니다.'],
      chips: ['시즌 3', '요원 14명', '보스 12체', '엔딩 7종'], link: 'https://yeonny3209.github.io/overclock/' },
    { no: 8, icon: '🧱', title: '함께 쌓는 블록', en: 'BATTLE TETRIS', tag: '2026.09 · 같은 판 위에서', color: '#ffe14d', sky: ['#06101a', '#12303e'],
      video: 'media/tetris.mp4', cap: '대전 테트리스 · 직접 플레이',
      quote: '멀리 있어도, 같은 판 위에 서 있다.',
      paras: ['방 코드 하나로 최대 다섯 명이 한 판에 모입니다. 내가 지운 줄이 상대 보드의 바닥에서 솟아오르는 건, 멀리 있어도 같은 판 위에 서 있다는 신호였습니다.',
        '다음 블록 미리보기와 홀드, 4줄 지우기의 방해 줄, 5단계 연습 난이도까지. 실시간으로 함께 노는 즐거움을 가장 단순한 모양으로 담은 게임입니다.'],
      chips: ['2 ~ 5명', '방 코드', '실시간 대전', 'socket.io'], link: 'https://tgame-9sve.onrender.com/' },
    { no: 9, icon: '👑', title: '일곱 군주의 탁자', en: 'SEVEN LORDS’ TABLE', tag: '2026.10 · 가장 최근의 탁자', color: '#ffd25a', sky: ['#14100a', '#3a2a10'],
      video: 'media/sevenlords.mp4', cap: '일곱 군주의 탁자 · 직접 플레이',
      quote: '여기까지 걸어온 모든 것이 한 탁자에 모였다.',
      paras: ['AI 군주 일곱 명과 한 탁자에 앉아 마지막 한 명이 남을 때까지 겨루는 오토배틀러입니다. 배치는 전략이고, 승부를 가르는 것은 군주가 던지는 주문입니다.',
        '유닛 90종, 시너지 12종, 군주 주문 16종, 증강 80종. 페이지에서 입체로, 드래곤에서 탑으로, 칼에서 블록으로 지나온 길 위의 모든 시도가 이 탁자에 둘러앉았습니다.'],
      chips: ['유닛 90종', '시너지 12종', '군주 주문 16종', 'AI 군주 7명'], link: 'https://yeonny3209.github.io/seven-lords-table/' },
    { no: 10, icon: '🗡️', title: '함께 오르는 산', en: 'SWORD TRAIL ONLINE', tag: '2026.10 · 처음 세운 온라인 월드', color: '#7cc7ff', sky: ['#0b1220', '#1d3358'],
      video: 'media/swordtrail.mp4', cap: '검의 궤적 온라인 · 직접 플레이',
      quote: '혼자 걷던 길에 다른 사람의 발소리가 들렸다.',
      paras: ['10월 16일에 만들기 시작해 다음 날 인터넷에 공개한 「검의 궤적 온라인」입니다. 쿼터뷰 3D 액션 MMORPG로, 같은 월드에 접속한 사람들과 사냥하고, 채팅하고, 파티를 맺고, 거래하고, 결투장에서 겨룹니다.',
        '서버와 데이터베이스까지 직접 세워서, 마을 광장에 다른 플레이어의 이름이 나란히 떠 있는 풍경을 만들고 싶었습니다. 직업 4종, 레벨 40, 사냥터 4곳, 그리고 부러진 검들이 묻힌 산이 배경입니다.'],
      chips: ['온라인 MMORPG', '직업 4종', '레벨 40', '파티 · 거래 · 결투'], link: 'https://sword-trail-online.3d-rpg-game.workers.dev/' },
    { no: 11, icon: '💠', title: '다시, 코어를 지키러', en: 'NEON CORE DEFENSE: OVERLOAD', tag: '2026.10 · 가장 최근의 후속작', color: '#ff3d9a', sky: ['#07040f', '#3a0f3a'],
      video: 'media/neoncore2.mp4', cap: '네온 코어 디펜스: 오버로드 · 직접 플레이',
      quote: '“한 판만 더”라는 마음은 전작에서 이어졌다.',
      paras: ['9월에 만든 「네온 코어 디펜스」의 이야기를 이어받은 후속작입니다. 네온 세계를 그대로 두고 연출과 「한 판만 더」의 중독성에 집중했습니다. 방어탑 20종이 갈래로 진화해 40가지 모습이 되고, 캠페인 18스테이지와 거대 보스 3종, 끝없는 아수라장이 기다립니다.',
        '10월 18일에 첫 완성본을 내놓고, 23일에 저사양 기기를 위한 효과 절약과 새 광고 영상으로 한 번 더 다듬었습니다. 지금 이 길의 가장 마지막 정거장입니다.'],
      chips: ['방어탑 20종', '갈래 진화 40가지', '거대 보스 3종', '웹 · APK'], link: 'https://yeonny3209.github.io/neon-core-overload/' }
  ];
  var QUOTES = [
    '2026년 6월 2일. 파일 하나에서 시작된 이야기를, 걸어서 따라가 보세요.',
    '한 줄의 코드가 한 장의 페이지가 되었고, 그 페이지가 다음 계단이 되었다.',
    '평면에서 입체로. 세계가 넓어지면 마음도 함께 넓어진다.',
    '알을 지키던 마음은 이제 코어를 지키는 마음이 되었다.',
    '지키는 일에서 맞서는 일로. 이번에는 검 한 자루를 쥐었다.',
    '이야기를 만들다 보면, 이야기를 담을 도구가 필요해진다.',
    '도시가 어두워져도 누군가는 신호에 응답한다.',
    '혼자 달리던 길에 다른 사람의 발소리가 들리기 시작했다.',
    '혼자 만들던 길에 이제는 여럿이 앉는 탁자가 생겼다.',
    '탁자에서 일어나 검을 쥐고, 이번에는 모두와 함께 산을 오른다.',
    '산을 내려와 다시 코어를 지키러 간다. 이번에는 더 화려하게.',
    '이제 거의 다 왔어요. 조금만 더 걸어가 볼까요?'
  ];
  // 개발 기간(저장소의 첫 커밋 ~ 마지막 커밋)과 커밋 수. 2026.10.13 기준.
  var SPANS = [['2026-06-02', '2026-08-29', 120], ['2026-07-29', '2026-08-01', 20], ['2026-08-03', '2026-08-09', 21], ['2026-09-09', '2026-09-17', 14], ['2026-09-19', '2026-10-12', 37],
    ['2026-09-20', '2026-09-20', 4], ['2026-10-01', '2026-10-13', 34], ['2026-09-26', '2026-10-05', 15], ['2026-10-03', '2026-10-10', 7], ['2026-10-16', '2026-10-18', 36], ['2026-10-18', '2026-10-23', 6]];
  D.forEach(function (g, i) { g.span = SPANS[i]; });
  function dayOf(s) { return Math.round((new Date(s + 'T00:00:00') - new Date('2026-06-01T00:00:00')) / 86400000); }
  function spanHTML(sp) {
    var a = dayOf(sp[0]), b = dayOf(sp[1]), tot = 153, days = b - a + 1, fm = function (s) { return s.slice(0, 4) + '.' + s.slice(5, 7) + '.' + s.slice(8); };
    var mon = [['6월', 30], ['7월', 31], ['8월', 31], ['9월', 30], ['10월', 31]].map(function (m) { return '<span style="flex:' + m[1] + '">' + m[0] + '</span>'; }).join('');
    return '<div class="hs-span"><div class="hs-bar"><i style="left:' + (a / tot * 100).toFixed(2) + '%;width:' + Math.max(1.6, days / tot * 100).toFixed(2) + '%"></i></div><div class="hs-mon">' + mon + '</div>' +
      '<small>' + fm(sp[0]) + (sp[0] === sp[1] ? '' : ' ~ ' + fm(sp[1])) + ' · 개발 ' + days + '일 · 커밋 ' + sp[2] + '회</small></div>';
  }
  var N = D.length, START_X = 280, GAP = 1350, FIRST = 1150;
  function stX(i) { return FIRST + i * GAP; }
  var FIN_X = stX(N - 1) + 1500, WORLD = FIN_X + 900;
  function qX(i) { return i === 0 ? (START_X + stX(0)) / 2 : i === N ? (stX(N - 1) + FIN_X) / 2 : (stX(i - 1) + stX(i)) / 2; }

  // ---------- 색 도우미 ----------
  function hex(c) { var n = parseInt(c.slice(1), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; }
  function mix(a, b, t) { var A = hex(a), B = hex(b); return 'rgb(' + Math.round(A[0] + (B[0] - A[0]) * t) + ',' + Math.round(A[1] + (B[1] - A[1]) * t) + ',' + Math.round(A[2] + (B[2] - A[2]) * t) + ')'; }
  function mixA(a, b, t) { var A = hex(a), B = hex(b); return [A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t, A[2] + (B[2] - A[2]) * t]; }
  function rgb(a) { return 'rgb(' + Math.round(a[0]) + ',' + Math.round(a[1]) + ',' + Math.round(a[2]) + ')'; }
  function rgba(c, a) { var A = hex(c); return 'rgba(' + A[0] + ',' + A[1] + ',' + A[2] + ',' + a + ')'; }
  var NIGHT = ['#070618', '#17143a'], DAWN = ['#2c1b52', '#ff9a62'];
  var stops = [{ x: START_X, top: NIGHT[0], bot: NIGHT[1], c: '#8ff7d9' }];
  D.forEach(function (g, i) { stops.push({ x: stX(i), top: g.sky[0], bot: g.sky[1], c: g.color }); });
  stops.push({ x: FIN_X, top: DAWN[0], bot: DAWN[1], c: '#ffd25a' });
  function skyAt(x) {
    var i = 0; while (i < stops.length - 2 && x > stops[i + 1].x) i++;
    var a = stops[i], b = stops[i + 1], t = Math.max(0, Math.min(1, (x - a.x) / (b.x - a.x)));
    return { top: mixA(a.top, b.top, t), bot: mixA(a.bot, b.bot, t), c: mix(a.c, b.c, t), t: t, i: i };
  }

  // ---------- 상태 ----------
  var ov, cv, ctx, W = 0, H = 0, DPR = 1, k = 1, groundY = 0, camX = 0;
  var open = false, started = false, raf = 0, last = 0, T = 0;
  var P = { x: START_X, y: 0, vy: 0, vx: 0, face: 1, walk: 0, air: false };
  var keys = { l: 0, r: 0, run: 0 }, auto = false, autoWait = 0;
  var active = -1, seen = {}, endShown = false, muted = false, flashT = 0;
  var EGGS = [], found = {}, secretT = 0, idleT = 0, moon = { x: 0, y: 0, r: 40 }, meteors = [];
  var SECRET = { cm: '여기가 이 길의 맨 처음이에요. 2026년 6월 2일, 파일 하나가 만들어지던 자리입니다.', a: '스트림릿 앱의 사이드바에는 개미굴 대전, 검투사 아레나, 리듬 게임도 숨어 있어요.', b: '블레이드 레이드의 그림과 소리는 전부 코드로 만들었어요. 이 길의 별과 가로등처럼요.', c: '오버클럭 시즌 3의 주제는 「응답하라」였어요. 여기까지 걸어온 당신이 그 대답이에요.', moon: '달은 처음부터 끝까지, 늘 같은 자리에서 길을 비춰 주고 있었어요.', wish: '유성이 지나갔어요. 소원을 빌어 보세요. 다음 게임도 무사히 완성되기를.' };
  var stars = [], parts = [], flies = [], rockets = [], sparks = [], lanterns = [];
  var els = {}, bgm = null, pre = {};
  try { muted = localStorage.getItem('hsMute') === '1'; } catch (e) { }

  function buildEggs() { EGGS = [{ id: 'cm', x: 130 }, { id: 'a', x: qX(1) + 330 }, { id: 'b', x: qX(5) + 330 }, { id: 'c', x: qX(7) + 330 }]; found = {}; secretT = 0; idleT = 0; meteors = []; }
  function secretCount() { var n = 0; for (var k in found) n++; return n; }
  function discover(id, wx) {
    if (found[id]) return; found[id] = 1; secretT = 6.5; els.say.textContent = '🗝 ' + SECRET[id]; els.say.setAttribute('data-q', 'secret'); els.say.classList.add('show', 'secret');
    burst(wx, -70 * k, '#ffd25a', 22); els.sec.textContent = secretCount();
  }
  function buildStars() {
    stars = [];
    var segs = [[START_X + 260, stX(0) - 420]];
    for (var i = 0; i < N - 1; i++) segs.push([stX(i) + 420, stX(i + 1) - 420]);
    segs.push([stX(N - 1) + 420, FIN_X - 300]);
    segs.forEach(function (s, si) {
      for (var j = 0; j < 2; j++) stars.push({ x: s[0] + (s[1] - s[0]) * (j ? 0.7 : 0.32), h: j ? 118 : 74, got: false, ph: si + j });
    });
  }
  function buildFlies() { flies = []; for (var i = 0; i < 46; i++) flies.push({ x: Math.random() * 3000, y: Math.random(), sp: 0.3 + Math.random() * 0.6, ph: Math.random() * 6 }); }

  // ---------- DOM ----------
  function build() {
    ov = document.createElement('div'); ov.className = 'hs'; ov.hidden = true; ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true'); ov.setAttribute('aria-label', '역사');
    ov.innerHTML =
      '<canvas id="hsCv" aria-hidden="true"></canvas><div class="hs-flash"></div>' +
      '<div class="hs-top"><span class="hs-brand">YEONNY HISTORY</span><div class="hs-dots"></div>' +
        '<button type="button" class="hs-btn" data-a="auto" aria-pressed="false" aria-label="자동으로 걷기" title="자동으로 걷기">▶</button>' +
        '<button type="button" class="hs-btn" data-a="snd" aria-pressed="false" aria-label="소리 끄기" title="소리">🔊</button>' +
        '<button type="button" class="hs-btn" data-a="x" aria-label="역사 닫기" title="닫기">✕</button></div>' +
      '<div class="hs-stat" aria-live="polite">✦ 추억 조각 <b>0</b> / ' + (N + 1) * 2 + ' · 🗝 비밀 <b class="hs-sec">0</b> / 6</div>' +
      '<div class="hs-panel" aria-live="polite"><div class="hs-vid"><video muted loop playsinline preload="none"></video><span class="rec">PLAY FOOTAGE</span></div><div class="hs-txt"></div></div>' +
      '<div class="hs-say"></div>' +
      '<div class="hs-help">← → 또는 A D 로 걷기 · Shift 달리기 · Space 점프 · 별을 모아 보세요</div>' +
      '<div class="hs-pad"><div class="grp"><button type="button" data-k="l" aria-label="왼쪽으로 걷기">◀</button><button type="button" data-k="r" aria-label="오른쪽으로 걷기">▶</button></div><div class="grp"><button type="button" data-k="j" aria-label="점프">⤒</button></div></div>' +
      '<div class="hs-end"><div class="k">THANK YOU FOR PLAYING</div><h2>그동안 게임들을<br>플레이해주셔서 감사합니다.</h2>' +
        '<p>첫 번째 페이지에서 네온 코어 디펜스: 오버로드까지, 2026년 6월부터 10월까지의 길을 함께 걸어 주셔서 고맙습니다. 눌러 준 한 번의 플레이와 건네 준 한마디가 다음 게임을 만들었습니다. 이 길은 아직 끝나지 않았고, 다음 정거장에서 또 만나요.</p>' +
        '<div class="extra"></div><div class="sig">— 세윤 · YEONNY ARCADE</div><div class="row"><button type="button" data-a="again">처음부터 다시 걷기</button><button type="button" class="alt" data-a="x">게임 모음으로 돌아가기</button></div></div>' +
      '<div class="hs-intro"><div><div class="k">YEONNY ARCADE</div><h2>HISTORY</h2>' +
        '<p>처음 만든 페이지부터 가장 최근의 후속작까지.<br>열한 개의 이야기를 걸어서 지나가며, 영상과 글로 다시 만나 보세요.</p>' +
        '<div class="row"><button type="button" data-a="start">걸어서 출발하기</button></div><small>키보드 ← → · Space  /  휴대폰은 화면 아래 버튼  ·  소리가 함께 재생됩니다</small></div></div>';
    document.body.appendChild(ov);
    cv = ov.querySelector('#hsCv'); ctx = cv.getContext('2d');
    els.dots = ov.querySelector('.hs-dots'); els.panel = ov.querySelector('.hs-panel'); els.vid = ov.querySelector('.hs-vid video'); els.txt = ov.querySelector('.hs-txt');
    els.say = ov.querySelector('.hs-say'); els.help = ov.querySelector('.hs-help'); els.end = ov.querySelector('.hs-end'); els.extra = ov.querySelector('.hs-end .extra'); els.intro = ov.querySelector('.hs-intro');
    els.flash = ov.querySelector('.hs-flash'); els.stat = ov.querySelector('.hs-stat b'); els.sec = ov.querySelector('.hs-sec'); els.snd = ov.querySelector('[data-a=snd]'); els.auto = ov.querySelector('[data-a=auto]');
    D.forEach(function (g, i) {
      var b = document.createElement('button'); b.type = 'button'; b.className = 'hs-dot'; b.style.setProperty('--c', g.color); b.textContent = g.no;
      b.setAttribute('aria-label', g.no + '번째 이야기 ' + g.title + '로 이동'); b.addEventListener('click', function () { travel(i); }); els.dots.appendChild(b);
    });
    cv.addEventListener('pointerdown', function (e) { if (!started) return; var b = cv.getBoundingClientRect(); if (Math.hypot(e.clientX - b.left - moon.x, e.clientY - b.top - moon.y) < moon.r) discover('moon', P.x); });
    ov.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('[data-a]'); if (!a) return;
      var v = a.getAttribute('data-a');
      if (v === 'x') close(); else if (v === 'start') begin(); else if (v === 'again') { travel(-1); } else if (v === 'auto') setAuto(!auto); else if (v === 'snd') setMute(!muted);
    });
    var pad = ov.querySelector('.hs-pad');
    pad.querySelectorAll('button').forEach(function (b) {
      var kk = b.getAttribute('data-k');
      var on = function (e) { e.preventDefault(); b.classList.add('on'); setAuto(false); if (kk === 'j') jump(); else keys[kk] = 1; };
      var off = function (e) { e.preventDefault(); b.classList.remove('on'); if (kk !== 'j') keys[kk] = 0; };
      b.addEventListener('pointerdown', on); b.addEventListener('pointerup', off); b.addEventListener('pointercancel', off); b.addEventListener('pointerleave', off);
      b.addEventListener('contextmenu', function (e) { e.preventDefault(); });
    });
    window.addEventListener('resize', resize);
    setMute(muted, true);
  }

  function fillPanel(i) {
    var g = D[i];
    els.panel.style.setProperty('--c', g.color);
    els.txt.scrollTop = 0;
    els.txt.innerHTML = '<span class="hs-tag">' + esc(g.tag) + '</span><h3>' + esc(g.title) + '</h3><div class="hs-en">' + esc(g.en) + '</div><p class="hs-quote">“' + esc(g.quote.replace(/[“”]/g, '')) + '”</p>' +
      g.paras.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') +
      '<div class="hs-chips">' + g.chips.map(function (c) { return '<span>' + esc(c) + '</span>'; }).join('') + '</div>' + spanHTML(g.span) +
      '<a class="hs-go" href="' + g.link + '" target="_blank" rel="noopener">PLAY ▶</a>';
    els.panel.querySelector('.rec').textContent = g.cap;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function activate(i) {
    active = i; seen[i] = 1; fillPanel(i);
    var g = D[i];
    if (els.vid.getAttribute('data-src') !== g.video) { els.vid.setAttribute('data-src', g.video); els.vid.src = g.video; }
    var p = els.vid.play(); if (p && p.catch) p.catch(function () { });
    els.panel.classList.add('show'); els.say.classList.remove('show');
    refreshDots();
    // 다음 영상 미리 받기
    if (i + 1 < N) preload(i + 1);
  }
  function deactivate() {
    active = -1; els.panel.classList.remove('show'); try { els.vid.pause(); } catch (e) { } refreshDots();
  }
  function preload(i) { var s = D[i].video; if (pre[s]) return; var v = document.createElement('video'); v.preload = 'auto'; v.muted = true; v.src = s; pre[s] = v; }
  function refreshDots() {
    var ds = els.dots.children, near = nearestStation();
    for (var i = 0; i < ds.length; i++) { ds[i].classList.toggle('seen', !!seen[i]); ds[i].classList.toggle('now', i === (active >= 0 ? active : -2)); }
    void near;
  }
  function nearestStation() { var b = 0, bd = 1e9; for (var i = 0; i < N; i++) { var d = Math.abs(P.x - stX(i)); if (d < bd) { bd = d; b = i; } } return b; }

  function travel(i) {
    setAuto(false);
    var x = i < 0 ? START_X : stX(i) - 150;
    flashT = 1; els.flash.classList.add('on'); setTimeout(function () { els.flash.classList.remove('on'); }, 40);
    P.x = x; P.vx = 0; P.y = 0; P.vy = 0; P.face = 1; if (i < 0) { endShown = false; els.end.classList.remove('show'); }
    if (active >= 0) deactivate();
    camX = Math.max(0, Math.min(WORLD - W, P.x - W * 0.4));
    started && els.help.classList.remove('off');
  }
  function setAuto(v) { auto = v; autoWait = 0; els.auto.setAttribute('aria-pressed', v ? 'true' : 'false'); els.auto.textContent = v ? '⏸' : '▶'; }
  function setMute(v, silent) {
    muted = v; els.snd.setAttribute('aria-pressed', v ? 'true' : 'false'); els.snd.textContent = v ? '🔇' : '🔊'; els.snd.setAttribute('aria-label', v ? '소리 켜기' : '소리 끄기');
    try { localStorage.setItem('hsMute', v ? '1' : '0'); } catch (e) { }
    if (bgm) { if (v) bgm.pause(); else if (open && started) { var p = bgm.play(); if (p && p.catch) p.catch(function () { }); } }
    void silent;
  }

  // ---------- 열기 / 닫기 ----------
  function openIt() {
    if (!ov) build();
    if (open) return;
    open = true; started = false; seen = {}; active = -1; endShown = false;
    P.x = START_X; P.y = 0; P.vy = 0; P.vx = 0; P.face = 1; keys.l = keys.r = keys.run = 0; setAuto(false);
    buildStars(); buildFlies(); buildEggs(); els.sec.textContent = '0'; parts = []; rockets = []; sparks = []; lanterns = []; els.stat.textContent = '0';
    els.end.classList.remove('show'); els.panel.classList.remove('show'); els.say.classList.remove('show'); els.intro.classList.remove('off'); els.help.classList.remove('off');
    ov.hidden = false; document.body.classList.add('hs-lock'); resize();
    void ov.offsetWidth; ov.classList.add('open');
    last = performance.now(); cancelAnimationFrame(raf); raf = requestAnimationFrame(loop);
    preload(0);
    window.addEventListener('keydown', kd); window.addEventListener('keyup', ku);
    els.intro.querySelector('button').focus({ preventScroll: true });
  }
  function begin() {
    started = true; els.intro.classList.add('off');
    if (!bgm) { bgm = new Audio('hall-of-fame.mp3'); bgm.loop = true; bgm.volume = 0.32; }
    if (!muted) { var p = bgm.play(); if (p && p.catch) p.catch(function () { }); }
    setTimeout(function () { els.help.classList.add('off'); }, 9000);
  }
  function close() {
    if (!open) return;
    open = false; cancelAnimationFrame(raf); deactivate();
    if (bgm) bgm.pause();
    ov.classList.remove('open'); window.removeEventListener('keydown', kd); window.removeEventListener('keyup', ku);
    setTimeout(function () { if (!open) { ov.hidden = true; document.body.classList.remove('hs-lock'); } }, 600);
    var b = document.getElementById('hsOpen'); if (b) b.focus({ preventScroll: true });
  }
  function kd(e) {
    if (!open) return;
    var c = e.code;
    if (c === 'Escape') { close(); return; }
    if (!started) { if (c === 'Enter' || c === 'Space') { e.preventDefault(); begin(); } return; }
    if (c === 'ArrowLeft' || c === 'KeyA') { keys.l = 1; setAuto(false); e.preventDefault(); }
    else if (c === 'ArrowRight' || c === 'KeyD') { keys.r = 1; setAuto(false); e.preventDefault(); }
    else if (c === 'ShiftLeft' || c === 'ShiftRight') keys.run = 1;
    else if (c === 'Space' || c === 'ArrowUp' || c === 'KeyW') { e.preventDefault(); jump(); }
    else if (c === 'KeyP') setAuto(!auto);
    else if (c >= 'Digit1' && c <= 'Digit9') travel(+c.slice(5) - 1);
  }
  function ku(e) {
    var c = e.code;
    if (c === 'ArrowLeft' || c === 'KeyA') keys.l = 0; else if (c === 'ArrowRight' || c === 'KeyD') keys.r = 0; else if (c === 'ShiftLeft' || c === 'ShiftRight') keys.run = 0;
  }
  function jump() { if (!started || P.air) return; P.vy = -820; P.air = true; for (var i = 0; i < 6; i++) parts.push({ x: P.x, y: 0, vx: (Math.random() - .5) * 120, vy: -Math.random() * 60, life: .5, max: .5, c: '#ffffff', r: 2, g: 1, w: 1 }); }

  function resize() {
    DPR = Math.min(2, window.devicePixelRatio || 1); W = ov.clientWidth || innerWidth; H = ov.clientHeight || innerHeight;
    cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR); ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    k = Math.max(0.62, Math.min(1.25, Math.min(H / 700, W / 900 + 0.25))); groundY = Math.round(H * (H < 520 ? 0.84 : 0.8));
    var top = W < 760 ? 98 : H < 520 ? 70 : 96; els.panel.style.maxHeight = Math.max(150, groundY - top - 128 * k) + 'px';
  }

  // ---------- 갱신 ----------
  function update(dt) {
    T += dt;
    var dir = keys.r - keys.l, run = keys.run, sp;
    if (started) {
      if (auto) {
        if (active >= 0) { autoWait += dt; dir = autoWait > 9 ? 1 : 0; }
        else { autoWait = 0; var tx = nextTarget(); dir = tx - P.x > 12 ? 1 : 0; }
        if (dir && !P.air && Math.random() < dt * 0.6 && stars.some(function (s) { return !s.got && s.x - P.x > 20 && s.x - P.x < 90; })) jump();
      }
      sp = dir ? (run ? 430 : 250) : 0;
    } else sp = 0;
    var tv = dir * sp; P.vx += (tv - P.vx) * Math.min(1, dt * 10);
    if (Math.abs(P.vx) < 3 && !dir) P.vx = 0;
    P.x = Math.max(80, Math.min(FIN_X + 420, P.x + P.vx * dt));
    if (dir) P.face = dir > 0 ? 1 : -1; else if (P.vx) P.face = P.vx > 0 ? 1 : -1;
    if (P.air) { P.vy += 2300 * dt; P.y += P.vy * dt; if (P.y >= 0) { P.y = 0; P.vy = 0; P.air = false; for (var i = 0; i < 5; i++) parts.push({ x: P.x, y: 0, vx: (Math.random() - .5) * 140, vy: -Math.random() * 50, life: .45, max: .45, c: '#cfe9ff', r: 2, g: 1, w: 1 }); } }
    if (!P.air && Math.abs(P.vx) > 20) { P.walk += dt * (Math.abs(P.vx) / 28); if (Math.random() < dt * 14) parts.push({ x: P.x - P.face * 8, y: 0, vx: -P.face * 20, vy: -20, life: .5, max: .5, c: '#b9c4ff', r: 1.6, g: 0, w: 1 }); }
    else if (!P.air) P.walk += dt * 1.2;
    // 카메라
    var want = Math.max(0, Math.min(WORLD - W, P.x - W * (P.face > 0 ? 0.38 : 0.52)));
    camX += (want - camX) * Math.min(1, dt * 5);
    // 정거장
    var ni = nearestStation(), dd = Math.abs(P.x - stX(ni));
    if (started) {
      if (active < 0 && dd < 250) activate(ni);
      else if (active >= 0 && Math.abs(P.x - stX(active)) > 360) deactivate();
    }
    // 말풍선
    if (secretT > 0) { secretT -= dt; if (secretT <= 0) { els.say.classList.remove('show', 'secret'); els.say.setAttribute('data-q', ''); } }
    else {
      var qs = -1; if (started && active < 0) for (var q = 0; q <= N; q++) if (Math.abs(P.x - qX(q)) < 190) { qs = q; break; }
      if (qs >= 0) { if (els.say.getAttribute('data-q') !== String(qs)) { els.say.setAttribute('data-q', qs); els.say.textContent = QUOTES[qs]; } els.say.classList.remove('secret'); els.say.classList.add('show'); } else els.say.classList.remove('show');
    }
    // 비밀 상자 · 유성
    if (started) {
      EGGS.forEach(function (e) { if (!found[e.id] && Math.abs(P.x - e.x) < 54) discover(e.id, e.x); });
      if (active < 0 && !endShown && !P.air && Math.abs(P.vx) < 4 && !dir) idleT += dt; else idleT = 0;
      if (idleT > 12 && !found.wish) { discover('wish', P.x); for (var m = 0; m < 3; m++) meteors.push({ x: P.x - 500 + m * 220, y: -H * 0.62 - m * 40, vx: 520 + m * 60, vy: 260, life: 1.6 }); }
    }
    for (var mi = meteors.length - 1; mi >= 0; mi--) { var mt = meteors[mi]; mt.life -= dt; mt.x += mt.vx * dt; mt.y += mt.vy * dt; if (mt.life <= 0) meteors.splice(mi, 1); }
    // 추억 조각
    var got = 0;
    stars.forEach(function (s) {
      if (s.got) { got++; return; }
      if (Math.abs(s.x - P.x) < 34 * k && Math.abs(s.h * k + P.y * k) < 62 * k) { s.got = true; got++; burst(s.x, -(s.h + 34) * k, '#ffe9a0', 14); }
    });
    els.stat.textContent = got; var allStars = got === stars.length;
    // 엔딩
    var inEnd = P.x > FIN_X - 280;
    if (inEnd !== endShown) { endShown = inEnd; els.end.classList.toggle('show', inEnd); if (inEnd) els.extra.textContent = '추억 조각 ' + got + ' / ' + stars.length + ' · 비밀 ' + secretCount() + ' / 6' + (allStars && secretCount() === 6 ? '  —  전부 찾으셨네요! 고맙습니다.' : ''); if (inEnd) { for (var f = 0; f < 4; f++) launch(FIN_X + (Math.random() - .5) * 600); if (!muted && bgm) bgm.volume = 0.42; } else if (bgm) bgm.volume = 0.32; if (inEnd && auto) setAuto(false); }
    if (inEnd && Math.random() < dt * 0.9) launch(FIN_X + (Math.random() - .5) * 900);
    if (P.x > FIN_X - 900 && Math.random() < dt * 4) lanterns.push({ x: FIN_X + (Math.random() - .5) * 1100, y: 0, vy: 30 + Math.random() * 30, ph: Math.random() * 6, s: .6 + Math.random() * .7 });
    // 입자
    for (var j = parts.length - 1; j >= 0; j--) { var p = parts[j]; p.life -= dt; if (p.life <= 0) { parts.splice(j, 1); continue; } p.x += p.vx * dt; p.y += p.vy * dt; if (p.g) p.vy += 380 * dt; }
    for (var r = rockets.length - 1; r >= 0; r--) { var rk = rockets[r]; rk.y += rk.vy * dt; rk.vy += 160 * dt; if (rk.vy > -40 || rk.y < rk.top) { explode(rk); rockets.splice(r, 1); } }
    for (var s2 = sparks.length - 1; s2 >= 0; s2--) { var sp2 = sparks[s2]; sp2.life -= dt; if (sp2.life <= 0) { sparks.splice(s2, 1); continue; } sp2.x += sp2.vx * dt; sp2.y += sp2.vy * dt; sp2.vy += 120 * dt; sp2.vx *= 0.99; }
    for (var l = lanterns.length - 1; l >= 0; l--) { var ln = lanterns[l]; ln.y -= ln.vy * dt; ln.x += Math.sin(T * .8 + ln.ph) * 10 * dt; if (ln.y > H * 1.2) lanterns.splice(l, 1); }
  }
  function nextTarget() { for (var i = 0; i < N; i++) if (stX(i) > P.x + 40) return stX(i); return FIN_X; }
  function burst(wx, y, c, n) { for (var i = 0; i < n; i++) { var a = Math.random() * 6.28, v = 60 + Math.random() * 140; parts.push({ x: wx, y: y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 40, life: .7, max: .7, c: c, r: 2.2, g: 1 }); } }
  function launch(wx) { rockets.push({ x: wx, y: 0, vy: -(620 + Math.random() * 240), top: -(260 + Math.random() * 220), c: ['#ffe9a0', '#ff9bf3', '#8ff7d9', '#ffb27a'][Math.floor(Math.random() * 4)] }); }
  function explode(rk) { var n = 46; for (var i = 0; i < n; i++) { var a = i / n * 6.283, v = 80 + Math.random() * 120; sparks.push({ x: rk.x, y: rk.y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: 1.2 + Math.random() * .6, max: 1.6, c: rk.c }); } }

  // ---------- 그리기 ----------
  function glow(x, y, r, col, a) { var g = ctx.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, rgba(col, a)); g.addColorStop(1, rgba(col, 0)); ctx.fillStyle = g; ctx.fillRect(x - r, y - r, r * 2, r * 2); }
  function draw() {
    var sky = skyAt(P.x), dawn = Math.max(0, Math.min(1, (P.x - (FIN_X - 1400)) / 1300));
    var g = ctx.createLinearGradient(0, 0, 0, groundY); g.addColorStop(0, rgb(sky.top)); g.addColorStop(1, rgb(sky.bot)); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    // 별
    for (var i = 0; i < 90; i++) { var sx = (i * 197.3) % W, sy = (i * 71.7) % (groundY * 0.7), tw = 0.35 + 0.65 * Math.abs(Math.sin(T * (0.6 + (i % 5) * 0.2) + i)); ctx.globalAlpha = tw * (1 - dawn * 0.85) * 0.9; ctx.fillStyle = '#fff'; ctx.fillRect((sx - camX * 0.03 % W + W) % W, sy, i % 7 === 0 ? 2 : 1.3, i % 7 === 0 ? 2 : 1.3); }
    ctx.globalAlpha = 1;
    // 달 / 해
    var mx = W * 0.82 - camX * 0.01, my = groundY * 0.26 + dawn * groundY * 0.2; moon.x = mx; moon.y = my; moon.r = 44 * k;
    glow(mx, my, 150 * k, dawn > 0.4 ? '#ffd18a' : '#cfe0ff', 0.35); ctx.fillStyle = dawn > 0.4 ? '#ffe3b0' : '#f2f6ff'; ctx.beginPath(); ctx.arc(mx, my, 26 * k, 0, 6.283); ctx.fill();
    if (dawn < 0.4) { ctx.fillStyle = 'rgba(160,175,210,.35)'; ctx.beginPath(); ctx.arc(mx - 8 * k, my - 5 * k, 6 * k, 0, 6.283); ctx.arc(mx + 9 * k, my + 8 * k, 4 * k, 0, 6.283); ctx.fill(); }
    // 먼 산
    var far = rgb([sky.bot[0] * 0.5, sky.bot[1] * 0.5, sky.bot[2] * 0.5]);
    ctx.fillStyle = far; ctx.beginPath(); ctx.moveTo(0, groundY);
    for (var x = 0; x <= W + 8; x += 8) { var w = x + camX * 0.15; ctx.lineTo(x, groundY - (110 + Math.sin(w * 0.004) * 55 + Math.sin(w * 0.011 + 1) * 28) * k); }
    ctx.lineTo(W, groundY); ctx.fill();
    // 가까운 언덕
    ctx.fillStyle = 'rgba(0,0,0,0.34)'; ctx.beginPath(); ctx.moveTo(0, groundY);
    for (var x2 = 0; x2 <= W + 8; x2 += 8) { var w2 = x2 + camX * 0.32; ctx.lineTo(x2, groundY - (46 + Math.sin(w2 * 0.006 + 2) * 30 + Math.sin(w2 * 0.017) * 12) * k); }
    ctx.lineTo(W, groundY); ctx.fill();
    // 나무 실루엣
    var tp = 0.5, t0 = Math.floor(camX * tp / 150) - 1;
    for (var ti = t0; ti < t0 + W / 150 + 3; ti++) {
      var tx = ti * 150 - camX * tp + (ti * 37 % 60), th = (70 + (ti * 53 % 70)) * k;
      ctx.fillStyle = 'rgba(0,0,0,0.42)'; ctx.beginPath(); ctx.moveTo(tx - 22 * k, groundY); ctx.lineTo(tx, groundY - th); ctx.lineTo(tx + 22 * k, groundY); ctx.fill();
      ctx.beginPath(); ctx.moveTo(tx - 16 * k, groundY - th * 0.45); ctx.lineTo(tx, groundY - th * 1.25); ctx.lineTo(tx + 16 * k, groundY - th * 0.45); ctx.fill();
    }
    // 반딧불
    flies.forEach(function (f) { var fx = ((f.x - camX * 0.8) % (W + 200) + W + 200) % (W + 200) - 100, fy = groundY - (30 + f.y * 260) * k + Math.sin(T * f.sp + f.ph) * 14; var a = 0.45 + 0.45 * Math.sin(T * 1.6 + f.ph); glow(fx, fy, 14 * k, '#ffe9a0', a * 0.8); });
    // 땅
    var gg = ctx.createLinearGradient(0, groundY, 0, H); gg.addColorStop(0, 'rgba(10,8,24,0.97)'); gg.addColorStop(1, '#030208'); ctx.fillStyle = gg; ctx.fillRect(0, groundY, W, H - groundY);
    ctx.fillStyle = sky.c; ctx.globalAlpha = 0.55; ctx.fillRect(0, groundY, W, 2); ctx.globalAlpha = 1;
    for (var s = Math.floor(camX / 70) - 1; s < (camX + W) / 70 + 1; s++) { var px = s * 70 - camX + (s * 29 % 20); ctx.fillStyle = 'rgba(255,255,255,.05)'; ctx.beginPath(); ctx.ellipse(px, groundY + 22 * k, 22 * k, 5 * k, 0, 0, 6.283); ctx.fill(); if (s % 3 === 0) { ctx.strokeStyle = 'rgba(160,200,255,.18)'; ctx.beginPath(); ctx.moveTo(px - 10, groundY); ctx.lineTo(px - 14, groundY - 9 * k); ctx.moveTo(px, groundY); ctx.lineTo(px + 2, groundY - 12 * k); ctx.moveTo(px + 9, groundY); ctx.lineTo(px + 14, groundY - 8 * k); ctx.stroke(); } }
    // 가로등
    for (var li = Math.floor(camX / 520) - 1; li < (camX + W) / 520 + 1; li++) {
      var lx = li * 520 + 260 - camX; if (lx < -60 || lx > W + 60) continue; var wx = li * 520 + 260; var near = skyAt(wx).c, fl = 0.75 + 0.25 * Math.sin(T * 5 + li);
      ctx.strokeStyle = 'rgba(200,210,255,.45)'; ctx.lineWidth = 3 * k; ctx.beginPath(); ctx.moveTo(lx, groundY); ctx.lineTo(lx, groundY - 96 * k); ctx.stroke();
      glow(lx, groundY - 100 * k, 70 * k, '#ffe9a0', 0.45 * fl); ctx.fillStyle = '#fff2c4'; ctx.beginPath(); ctx.arc(lx, groundY - 100 * k, 6 * k, 0, 6.283); ctx.fill(); void near;
    }
    // 말풍선 푯말
    for (var q = 0; q <= N; q++) { var qx = qX(q) - camX; if (qx < -60 || qx > W + 60) continue; drawSign(qx); }
    // 정거장
    for (var si = 0; si < N; si++) { var sx = stX(si) - camX; if (sx < -300 || sx > W + 300) continue; drawStation(si, sx); }
    drawFinale();
    EGGS.forEach(function (e) {
      var x = e.x - camX; if (x < -60 || x > W + 60) return; var y = groundY - 20 * k, on = !found[e.id], p = 0.5 + 0.5 * Math.sin(T * 3 + e.x);
      if (on) glow(x, y - 6 * k, 46 * k, '#ffd25a', 0.3 + 0.3 * p);
      ctx.fillStyle = on ? '#2a1d46' : '#1a1230'; ctx.strokeStyle = on ? '#ffd25a' : 'rgba(255,210,90,.35)'; ctx.lineWidth = 2; rr(x - 17 * k, y - 18 * k, 34 * k, 26 * k, 5 * k); ctx.fill(); ctx.stroke();
      ctx.fillStyle = on ? '#ffe9a0' : 'rgba(255,233,160,.4)'; ctx.font = '700 ' + Math.round(17 * k) + 'px "Noto Sans KR",sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(on ? '?' : '✓', x, y - 5 * k);
    });
    meteors.forEach(function (m) { var x = m.x - camX, y = groundY + m.y, a = Math.max(0, Math.min(1, m.life)); var g = ctx.createLinearGradient(x, y, x - m.vx * 0.25, y - m.vy * 0.25); g.addColorStop(0, 'rgba(255,255,255,' + a + ')'); g.addColorStop(1, 'rgba(255,255,255,0)'); ctx.strokeStyle = g; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - m.vx * 0.25, y - m.vy * 0.25); ctx.stroke(); });
    // 추억 조각
    stars.forEach(function (st) { if (st.got) return; var x = st.x - camX; if (x < -30 || x > W + 30) return; var y = groundY - (st.h + 34) * k + Math.sin(T * 2 + st.ph) * 5; glow(x, y, 26 * k, '#ffe9a0', 0.55); drawStar(x, y, 11 * k, T * 0.8 + st.ph); });
    drawPlayer();
    // 불꽃놀이와 풍등
    lanterns.forEach(function (ln) { var x = ln.x - camX, y = groundY - ln.y; if (x < -40 || x > W + 40) return; glow(x, y, 34 * ln.s * k, '#ffb25a', 0.5); ctx.fillStyle = '#ffd28a'; ctx.fillRect(x - 6 * ln.s * k, y - 8 * ln.s * k, 12 * ln.s * k, 16 * ln.s * k); ctx.fillStyle = '#fff4cf'; ctx.fillRect(x - 3 * ln.s * k, y - 4 * ln.s * k, 6 * ln.s * k, 8 * ln.s * k); });
    rockets.forEach(function (rk) { ctx.fillStyle = rk.c; ctx.fillRect(rk.x - camX - 1.5, groundY + rk.y, 3, 10); });
    sparks.forEach(function (sp) { ctx.globalAlpha = Math.max(0, sp.life / sp.max); ctx.fillStyle = sp.c; ctx.beginPath(); ctx.arc(sp.x - camX, groundY + sp.y, 2.4, 0, 6.283); ctx.fill(); });
    ctx.globalAlpha = 1;
    parts.forEach(function (p) { ctx.globalAlpha = Math.max(0, p.life / p.max); ctx.fillStyle = p.c; ctx.beginPath(); ctx.arc(p.x - camX, groundY + p.y, p.r, 0, 6.283); ctx.fill(); });
    ctx.globalAlpha = 1;
    // 새벽 빛 번짐
    if (dawn > 0) { glow(W * 0.5, groundY, W * 0.8, '#ffb27a', 0.25 * dawn); }
    // 비네트
    var vg = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.45, W / 2, H / 2, Math.max(W, H) * 0.8); vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(1, 'rgba(0,0,0,0.42)'); ctx.fillStyle = vg; ctx.fillRect(0, 0, W, H);
  }
  function drawStar(x, y, r, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.fillStyle = '#ffe9a0'; ctx.beginPath();
    for (var i = 0; i < 10; i++) { var a = i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; ctx.lineTo(Math.cos(a) * rr, Math.sin(a) * rr); } ctx.closePath(); ctx.fill(); ctx.restore();
  }
  function drawSign(x) {
    ctx.fillStyle = '#2a1f14'; ctx.fillRect(x - 3 * k, groundY - 58 * k, 6 * k, 58 * k);
    ctx.fillStyle = '#5a3f22'; ctx.save(); ctx.translate(x, groundY - 66 * k); ctx.beginPath(); ctx.moveTo(-34 * k, -10 * k); ctx.lineTo(30 * k, -12 * k); ctx.lineTo(38 * k, 0); ctx.lineTo(30 * k, 12 * k); ctx.lineTo(-34 * k, 10 * k); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = '#e8c88a'; ctx.lineWidth = 1.5; ctx.stroke(); ctx.fillStyle = '#ffe9b8'; ctx.font = '700 ' + Math.round(11 * k) + 'px "Noto Sans KR",sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('· · ·', 0, 0); ctx.restore();
  }
  function drawStation(i, sx) {
    var g = D[i], col = g.color, on = active === i, p = on ? 1 : 0.55, bob = Math.sin(T * 1.8 + i) * 5 * k, hgt = 210 * k, hw = 92 * k;
    glow(sx, groundY - hgt * 0.5, 260 * k, col, 0.22 + 0.2 * p);
    // 바닥 룬
    ctx.strokeStyle = rgba(col, 0.5 + 0.4 * Math.sin(T * 2 + i)); ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(sx, groundY + 14 * k, 120 * k, 17 * k, 0, 0, 6.283); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(sx, groundY + 14 * k, 84 * k, 11 * k, 0, 0, 6.283); ctx.stroke();
    // 기둥과 보
    ctx.fillStyle = '#14102a'; ctx.strokeStyle = col; ctx.lineWidth = 2.5 * k; ctx.shadowColor = col; ctx.shadowBlur = on ? 18 : 8;
    [-1, 1].forEach(function (d) { ctx.beginPath(); ctx.rect(sx + d * hw - 8 * k, groundY - hgt, 16 * k, hgt); ctx.fill(); ctx.stroke(); });
    ctx.beginPath(); ctx.moveTo(sx - hw - 34 * k, groundY - hgt - 6 * k); ctx.quadraticCurveTo(sx, groundY - hgt - 34 * k, sx + hw + 34 * k, groundY - hgt - 6 * k); ctx.lineTo(sx + hw + 26 * k, groundY - hgt + 12 * k); ctx.lineTo(sx - hw - 26 * k, groundY - hgt + 12 * k); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.rect(sx - hw, groundY - hgt + 44 * k, hw * 2, 9 * k); ctx.fill(); ctx.stroke(); ctx.shadowBlur = 0;
    // 간판
    var sw = 262 * k, sh = 66 * k, sy = groundY - hgt + 60 * k;
    ctx.strokeStyle = rgba(col, 0.8); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(sx - sw * 0.35, groundY - hgt + 53 * k); ctx.lineTo(sx - sw * 0.35, sy); ctx.moveTo(sx + sw * 0.35, groundY - hgt + 53 * k); ctx.lineTo(sx + sw * 0.35, sy); ctx.stroke();
    ctx.fillStyle = 'rgba(8,6,24,.92)'; ctx.strokeStyle = col; ctx.lineWidth = 2; rr(sx - sw / 2, sy, sw, sh, 10 * k); ctx.fill(); ctx.stroke();
    ctx.fillStyle = col; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = '700 ' + Math.round(13 * k) + 'px Orbitron,sans-serif'; ctx.fillText('No.0' + g.no, sx, sy + 15 * k);
    ctx.fillStyle = '#fff'; ctx.font = '400 ' + Math.round(24 * k) + 'px "Black Han Sans","Noto Sans KR",sans-serif'; fitText(g.title, sx, sy + 44 * k, sw - 20 * k);
    // 아이콘
    glow(sx, groundY - hgt - 44 * k + bob, 54 * k, col, 0.5); ctx.font = Math.round(46 * k) + 'px "Segoe UI Emoji","Apple Color Emoji","Noto Color Emoji",sans-serif'; ctx.fillStyle = '#fff'; ctx.fillText(g.icon, sx, groundY - hgt - 44 * k + bob);
  }
  function fitText(t, x, y, maxW) { var s = ctx.font; var m = ctx.measureText(t).width; if (m > maxW) { var px = parseInt(s.match(/(\d+)px/)[1], 10); ctx.font = s.replace(/\d+px/, Math.floor(px * maxW / m) + 'px'); } ctx.fillText(t, x, y); ctx.font = s; }
  function rr(x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); }
  function drawFinale() {
    var fx = FIN_X - camX; if (fx < -400 || fx > W + 400) return;
    var pulse = 0.6 + 0.4 * Math.sin(T * 1.5);
    var bg = ctx.createLinearGradient(0, 0, 0, groundY); bg.addColorStop(0, 'rgba(255,225,160,0)'); bg.addColorStop(1, 'rgba(255,225,160,' + (0.22 * pulse + 0.1) + ')'); ctx.fillStyle = bg; ctx.fillRect(fx - 90 * k, 0, 180 * k, groundY);
    glow(fx, groundY - 150 * k, 300 * k, '#ffd25a', 0.35 * pulse);
    ctx.fillStyle = '#1a1230'; ctx.strokeStyle = '#ffe9a0'; ctx.lineWidth = 3 * k; ctx.shadowColor = '#ffd25a'; ctx.shadowBlur = 24;
    ctx.beginPath(); ctx.moveTo(fx - 120 * k, groundY); ctx.lineTo(fx - 120 * k, groundY - 200 * k); ctx.quadraticCurveTo(fx, groundY - 320 * k, fx + 120 * k, groundY - 200 * k); ctx.lineTo(fx + 120 * k, groundY); ctx.lineTo(fx + 84 * k, groundY); ctx.lineTo(fx + 84 * k, groundY - 196 * k); ctx.quadraticCurveTo(fx, groundY - 270 * k, fx - 84 * k, groundY - 196 * k); ctx.lineTo(fx - 84 * k, groundY); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.shadowBlur = 0;
    for (var i = -2; i <= 2; i++) { var lx = fx + i * 140 * k, ly = groundY - 40 * k - Math.abs(i) * 6 * k; glow(lx, ly, 34 * k, '#ffb25a', 0.5 * pulse); ctx.fillStyle = '#ffd28a'; ctx.fillRect(lx - 7 * k, ly - 10 * k, 14 * k, 20 * k); }
  }
  function drawPlayer() {
    var x = P.x - camX, y = groundY + P.y * k, f = P.face, s = k * 1.15, wk = P.walk, mv = Math.min(1, Math.abs(P.vx) / 240);
    // 그림자
    ctx.fillStyle = 'rgba(0,0,0,.35)'; ctx.beginPath(); ctx.ellipse(x, groundY + 4 * k, 17 * s * (1 - Math.min(.4, -P.y / 400)), 4.5 * s, 0, 0, 6.283); ctx.fill();
    ctx.save(); ctx.translate(x, y); ctx.scale(f * s, s);
    var bob = P.air ? 0 : Math.abs(Math.sin(wk)) * -3 * mv + Math.sin(T * 2) * 0.8;
    var sw = P.air ? 0.9 : Math.sin(wk) * 0.8 * mv;
    // 랜턴 불빛
    glow(20, -26 + bob, 80, '#ffd28a', 0.28);
    // 다리
    ctx.lineCap = 'round'; ctx.strokeStyle = '#2a2f5a'; ctx.lineWidth = 6;
    ctx.beginPath(); ctx.moveTo(-3, -17 + bob); ctx.lineTo(-3 + Math.sin(sw) * 11, -1); ctx.stroke(); ctx.beginPath(); ctx.moveTo(4, -17 + bob); ctx.lineTo(4 - Math.sin(sw) * 11, -1); ctx.stroke();
    ctx.strokeStyle = '#f5f1ff'; ctx.lineWidth = 6.5; ctx.beginPath(); ctx.moveTo(-3 + Math.sin(sw) * 11, -1); ctx.lineTo(-3 + Math.sin(sw) * 12.5, -1); ctx.moveTo(4 - Math.sin(sw) * 11, -1); ctx.lineTo(4 - Math.sin(sw) * 12.5, -1); ctx.stroke();
    // 목도리 꼬리
    var tail = Math.sin(T * 6) * 3 * mv; ctx.strokeStyle = '#ff6b8b'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(-6, -38 + bob); ctx.quadraticCurveTo(-18 - mv * 8, -34 + bob + tail, -26 - mv * 14, -30 + bob - tail * 1.5 + (P.air ? -6 : 0)); ctx.stroke();
    // 몸
    var bgd = ctx.createLinearGradient(0, -42, 0, -14); bgd.addColorStop(0, '#34d8c6'); bgd.addColorStop(1, '#1f8f9c'); ctx.fillStyle = bgd; rr(-10, -40 + bob, 20, 24, 7); ctx.fill(); ctx.fillStyle = '#ffd25a'; ctx.fillRect(-10, -22 + bob, 20, 3);
    // 팔과 랜턴
    ctx.strokeStyle = '#34d8c6'; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(-7, -35 + bob); ctx.lineTo(-10 - Math.sin(sw) * 6, -24 + bob); ctx.stroke(); ctx.beginPath(); ctx.moveTo(8, -35 + bob); ctx.lineTo(16 + Math.sin(sw) * 3, -27 + bob); ctx.stroke();
    ctx.fillStyle = '#ffe9b8'; ctx.fillRect(15, -25 + bob, 9, 12); ctx.strokeStyle = '#8a6a30'; ctx.lineWidth = 1.5; ctx.strokeRect(15, -25 + bob, 9, 12); ctx.beginPath(); ctx.moveTo(16, -25 + bob); ctx.lineTo(19.5, -30 + bob); ctx.lineTo(23, -25 + bob); ctx.stroke();
    // 머리
    ctx.fillStyle = '#ffdcbc'; ctx.beginPath(); ctx.arc(0, -52 + bob, 13, 0, 6.283); ctx.fill();
    ctx.fillStyle = '#2b2250'; ctx.beginPath(); ctx.arc(0, -55 + bob, 14, Math.PI * 1.02, Math.PI * 1.98); ctx.lineTo(10, -54 + bob); ctx.quadraticCurveTo(2, -59 + bob, -12, -53 + bob); ctx.fill();
    ctx.beginPath(); ctx.moveTo(2, -67 + bob); ctx.quadraticCurveTo(10, -78 + bob, 15, -70 + bob); ctx.quadraticCurveTo(8, -71 + bob, 5, -65 + bob); ctx.fill();
    ctx.fillStyle = '#2a1d3a'; var blink = (T % 4) < 0.12 ? 0.5 : 3; ctx.beginPath(); ctx.ellipse(4, -51 + bob, 1.8, blink, 0, 0, 6.283); ctx.fill(); ctx.beginPath(); ctx.ellipse(-4, -51 + bob, 1.8, blink, 0, 0, 6.283); ctx.fill();
    ctx.fillStyle = 'rgba(255,120,140,.5)'; ctx.beginPath(); ctx.arc(8, -47 + bob, 2.4, 0, 6.283); ctx.fill();
    ctx.strokeStyle = '#a0505a'; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.arc(3, -46 + bob, 2.5, 0.2, Math.PI - 0.2); ctx.stroke();
    ctx.restore();
  }

  function loop(now) {
    if (!open) return;
    var dt = Math.min(0.05, (now - last) / 1000); last = now;
    update(dt); draw(); raf = requestAnimationFrame(loop);
  }

  function init() {
    var b = document.getElementById('hsOpen'); if (b) b.addEventListener('click', openIt);
    window.HistoryWindow = { open: openIt, close: close, _t: function () { return { P: P, update: update, draw: draw, travel: travel, begin: begin, get active() { return active; }, get camX() { return camX; } }; } };
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
