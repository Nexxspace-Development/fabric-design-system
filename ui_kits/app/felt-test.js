// Felt test harness: applies .fabric-felt-surface to chosen app surfaces and measures frame cost.
(() => {
  const KEY = 'fabric.feltTest';
  const PLACES = [
    ['focus', 'Focus card', '.fa-focus'],
    ['intention', 'Intention card', '.fa-intention'],
    ['rail', 'Focus rail', '.fa-rail'],
    ['sidebar', 'Sidebar', '.fa-side'],
    ['header', 'Header', '.fa-head'],
    ['login', 'Login card', '.fa-login__card'],
  ];
  const COLORS = [['sage', '--sage-600'], ['terracotta', '--terracotta-600'], ['ochre', '--ochre-700'], ['marsh', '--marsh-600'], ['stone', '--stone-600']];
  const COLOR_CLS = COLORS.map(([c]) => 'fabric-felt-surface--' + c);
  let st = { on: ['focus'], color: 'sage', dense: false };
  try { st = { ...st, ...JSON.parse(localStorage.getItem(KEY) || '{}') }; } catch (e) {}
  const save = () => localStorage.setItem(KEY, JSON.stringify(st));

  const apply = () => {
    for (const [id, , sel] of PLACES) {
      document.querySelectorAll(sel).forEach((el) => {
        const on = st.on.includes(id);
        el.classList.toggle('fabric-felt-surface', on);
        el.classList.toggle('fabric-felt-surface--dense', on && st.dense);
        COLOR_CLS.forEach((c) => el.classList.toggle(c, on && c === 'fabric-felt-surface--' + st.color));
      });
    }
  };

  const btn = (label, pressed, onClick, extra) => {
    const b = document.createElement('button');
    b.type = 'button'; b.textContent = label; b.setAttribute('aria-pressed', pressed);
    b.onclick = onClick; if (extra) extra(b); return b;
  };
  const grp = (label) => {
    const g = document.createElement('div'); g.className = 'ft__grp';
    const l = document.createElement('span'); l.className = 'ft__lbl'; l.textContent = label; g.appendChild(l); return g;
  };

  let perfEl;
  const render = () => {
    let bar = document.querySelector('.ft');
    if (!bar) { bar = document.createElement('div'); bar.className = 'ft'; document.body.appendChild(bar); }
    bar.innerHTML = '';
    const g1 = grp('Felt on');
    PLACES.forEach(([id, label]) => g1.appendChild(btn(label, st.on.includes(id), () => {
      st.on = st.on.includes(id) ? st.on.filter((x) => x !== id) : [...st.on, id];
      if (id === 'login' && st.on.includes('login')) localStorage.setItem('fabric.screen', 'login');
      save(); apply(); render();
      if (id === 'login' && st.on.includes('login') && !document.querySelector('.fa-login')) location.reload();
    })));
    const g2 = grp('Wool');
    COLORS.forEach(([c, v]) => g2.appendChild(btn('', st.color === c, () => { st.color = c; save(); apply(); render(); },
      (b) => { b.className = 'ft__sw'; b.title = c; b.style.background = `var(${v})`; })));
    g2.appendChild(btn('Dense', st.dense, () => { st.dense = !st.dense; save(); apply(); render(); }));
    const g3 = grp('Cost');
    g3.appendChild(btn('Repaint ×60', false, stress));
    perfEl = document.createElement('span'); perfEl.className = 'ft__perf'; perfEl.textContent = '— fps';
    g3.appendChild(perfEl);
    bar.append(g1, g2, g3);
  };

  // Live fps
  let frames = 0, last = performance.now(), busy = false;
  const tick = (t) => {
    frames++;
    if (t - last >= 1000 && !busy) { if (perfEl) perfEl.textContent = Math.round(frames * 1000 / (t - last)) + ' fps idle'; frames = 0; last = t; }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);

  // Force the felt layers to re-rasterize every frame (1px size nudge) and time it.
  function stress() {
    const els = [...document.querySelectorAll('.fabric-felt-surface')];
    if (!els.length) { perfEl.textContent = 'no felt on screen'; return; }
    busy = true; perfEl.textContent = 'measuring…';
    const base = st.dense ? 320 : 480; let i = 0, prev = performance.now(), worst = 0; const times = [];
    const step = (t) => {
      const dt = t - prev; prev = t; if (i > 0) { times.push(dt); worst = Math.max(worst, dt); }
      if (i++ < 60) {
        const s = base + (i % 2); els.forEach((el) => { el.style.backgroundSize = s + 'px ' + s + 'px'; });
        requestAnimationFrame(step);
      } else {
        els.forEach((el) => { el.style.backgroundSize = ''; });
        const avg = times.reduce((a, b) => a + b, 0) / times.length;
        perfEl.textContent = `${avg.toFixed(1)} ms avg · ${worst.toFixed(0)} ms worst · ${els.length} el`;
        busy = false; frames = 0; last = performance.now();
      }
    };
    requestAnimationFrame(step);
  }

  const start = () => {
    render(); apply();
    new MutationObserver(apply).observe(document.getElementById('root'), { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
