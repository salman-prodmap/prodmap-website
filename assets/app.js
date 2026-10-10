/* Renders the one-page ProdMap site from window.SITE (content/site.js). No text lives here. */
(function () {
  const S = window.SITE;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pad = n => String(n).padStart(2, '0');
  const wp = id => pad(S.nav.findIndex(n => n.id === id) + 1);
  const label = id => S.nav.find(n => n.id === id).label;
  const eyebrow = id => `<p class="eyebrow"><span class="wp">WP ${wp(id)}</span>${esc(label(id))}</p>`;

  // compass mark used in the logo
  const mark = `<svg class="mark" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="14" fill="currentColor"/><path d="M32 12 L40 32 L32 52 L24 32 Z" fill="none" stroke="#fff" stroke-width="3" stroke-linejoin="round"/><path d="M32 12 L40 32 L24 32 Z" fill="#00E676"/></svg>`;

  // decorative contour lines + route for the hero
  const contours = `<svg class="contours" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    ${[0, 1, 2, 3, 4, 5, 6].map(i => `<ellipse cx="610" cy="250" rx="${70 + i * 46}" ry="${44 + i * 32}" transform="rotate(-18 610 250)"/>`).join('')}
    ${[0, 1, 2, 3].map(i => `<ellipse cx="120" cy="560" rx="${60 + i * 50}" ry="${36 + i * 30}" transform="rotate(12 120 560)"/>`).join('')}
  </svg>`;
  const route = () => `<svg class="route" viewBox="0 0 400 320" aria-hidden="true">
    <path d="M30 290 C 110 270, 80 190, 170 175 S 280 150, 270 90 S 330 40, 370 30" />
    <circle cx="30" cy="290" r="7" class="start"/><circle cx="170" cy="175" r="6"/><circle cx="270" cy="90" r="6"/>
    <g class="flag" transform="translate(370 30)"><circle r="10"/><circle r="4" class="dot"/></g>
    ${S.routeLabels.map((t, i) => `<text x="${[44,184,284,300][i]}" y="${[306,190,104,22][i]}">${esc(t)}</text>`).join('')}
  </svg>`;

  // header
  document.querySelector('.top').innerHTML = `<div class="wrap bar">
    <a class="logo" href="#home">${mark}<span><b>${esc(S.brand.short)}</b> Consulting</span></a>
    <nav class="nav">${S.nav.map(n => `<a href="#${n.id}" data-id="${n.id}">${esc(n.label)}</a>`).join('')}</nav>
    <a class="btn btn-sm" href="#contact">${esc(S.navCta)}</a>
  </div>`;

  const H = S.home, V = S.services, A = S.about, C = S.contactSection;

  document.querySelector('main').innerHTML = `
  <section id="home" class="hero">
    ${contours}
    <div class="wrap hero-grid">
      <div>
        <p class="slogan"><span class="pin"></span>${esc(S.brand.name)}: ${esc(S.brand.slogan)}</p>
        <h1>${esc(H.title)}</h1>
        <p class="lede">${esc(H.text)}</p>
        <div class="actions">
          <a class="btn" href="#contact">${esc(H.ctaPrimary)} →</a>
          <a class="link" href="#services">${esc(H.ctaSecondary)}</a>
        </div>
      </div>
      <div class="hero-map">${route()}</div>
    </div>
    <div class="wrap why">
      <h2 class="h-small">${esc(H.whyTitle)}</h2>
      <div class="grid-3">${H.why.map((w, i) => `<div class="card"><span class="num">${pad(i + 1)}</span><h3>${esc(w.title)}</h3><p>${esc(w.text)}</p></div>`).join('')}</div>
    </div>
  </section>

  <section id="services" class="section">
    <div class="wrap">
      ${eyebrow('services')}
      <h2>${esc(V.title)}</h2>
      <ol class="services">${V.items.map((s, i) => `<li class="service">
        <span class="stop">${pad(i + 1)}</span>
        <div><h3>${esc(s.title)}</h3><p class="first">${esc(s.paras[0])}</p>${s.paras.slice(1).map(p => `<p>${esc(p)}</p>`).join('')}</div>
      </li>`).join('')}</ol>
    </div>
  </section>

  <section id="about" class="section soft">
    <div class="wrap">
      ${eyebrow('about')}
      <h2>${esc(A.title)}</h2>
      <p class="founded">${esc(A.founded)}</p>

      <h3 class="h-small">${esc(A.teamTitle)}</h3>
      <div class="team">${A.team.map(t => `<div class="person">
        <span class="avatar">${esc(t.initials)}</span>
        <div><b>${esc(t.name)}</b><span class="role">${esc(t.role)}</span>
        <a class="link" href="${esc(t.profile)}" target="_blank" rel="noopener">${esc(S.about.profileLabel)} ↗</a></div>
      </div>`).join('')}</div>

      <h3 class="h-small">${esc(A.valuesTitle)}</h3>
      <div class="grid-3">${A.values.map((v, i) => `<div class="card"><span class="bearing">${['N', 'E', 'S'][i]}</span><h3>${esc(v.title)}</h3><p>${esc(v.text)}</p></div>`).join('')}</div>

      <div class="approach">
        <h3 class="h-small">${esc(A.approachTitle)}</h3>
        <div class="approach-text">${A.approach.map(p => `<p>${esc(p)}</p>`).join('')}</div>
      </div>
    </div>
  </section>

  <section id="contact" class="section dark">
    <div class="wrap contact-grid${C.form.on ? '' : ' no-form'}">
      <div>
        ${eyebrow('contact')}
        <h2>${esc(C.title)}</h2>
        <div class="info">
          <span class="info-label">${esc(C.infoTitle)}</span>
          <a href="mailto:${esc(S.contact.email)}">${esc(S.contact.email)}</a>
        </div>
      </div>
      ${C.form.on ? `<form class="form" novalidate>
        <label><span>${esc(C.form.name)}</span><input name="name" required autocomplete="name"></label>
        <label><span>${esc(C.form.email)}</span><input name="email" type="email" required autocomplete="email"></label>
        <label><span>${esc(C.form.company)}</span><input name="company" autocomplete="organization"></label>
        <label><span>${esc(C.form.message)}</span><textarea name="message" rows="5" required></textarea></label>
        <button class="btn btn-accent" type="submit">${esc(C.form.submit)} →</button>
        <p class="note">${esc(C.form.note)}</p>
      </form>` : ''}
    </div>
  </section>`;

  document.querySelector('.foot').innerHTML = `<div class="wrap foot-bar">
    <span>© ${new Date().getFullYear()} ${esc(S.brand.name)}</span>
    <span class="mono">${esc(S.brand.slogan)}</span>
  </div>`;

  // contact form → visitor's email app
  const form = document.querySelector('.form');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const f = Object.fromEntries(new FormData(form));
    const body = `${f.message}\n\n${f.name}\n${f.email}${f.company ? '\n' + f.company : ''}`;
    location.href = `mailto:${S.contact.email}?subject=${encodeURIComponent(C.form.subject + ' — ' + f.name)}&body=${encodeURIComponent(body)}`;
  });

  // end the dashed services route at the last stop
  const fit = () => { const ol = document.querySelector('.services'), last = ol.lastElementChild; ol.style.setProperty('--last', (last.offsetTop + 22) + 'px'); };
  fit(); addEventListener('resize', fit);

  // highlight current section in the menu
  const links = [...document.querySelectorAll('.nav a')];
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) links.forEach(a => a.classList.toggle('on', a.dataset.id === en.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  S.nav.forEach(n => { const el = document.getElementById(n.id); if (el) io.observe(el); });
})();
