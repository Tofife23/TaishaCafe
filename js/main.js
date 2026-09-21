// CSS is loaded from index.html for direct browser usage.

const images = {
  hero: 'https://images.pexels.com/photos/16514703/pexels-photo-16514703.jpeg?auto=compress&cs=tinysrgb&w=1800',
  menu: '../img/kava.jpg',
  locationOne: 'https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg?auto=compress&cs=tinysrgb&w=1200',
  locationTwo: 'https://images.pexels.com/photos/17593509/pexels-photo-17593509.jpeg?auto=compress&cs=tinysrgb&w=1200',
  story: 'https://images.pexels.com/photos/8474151/pexels-photo-8474151.jpeg?auto=compress&cs=tinysrgb&w=1200',
  galleryOne: 'https://images.pexels.com/photos/34104248/pexels-photo-34104248.jpeg?auto=compress&cs=tinysrgb&w=1000',
  galleryTwo: 'https://images.pexels.com/photos/27362267/pexels-photo-27362267.jpeg?auto=compress&cs=tinysrgb&w=1000',
  galleryThree: 'https://images.pexels.com/photos/36737003/pexels-photo-36737003.jpeg?auto=compress&cs=tinysrgb&w=1000',
}

const announcementText = 'MATCHA • COFFEE • TEA • JAPANESE DESSERTS'
const announcementItems = Array.from({ length: 12 }, () => `<span>${announcementText}</span>`).join('')

document.querySelector('#app').innerHTML = `
    <div class="announcement-bar" aria-label="Announcement">
    <div class="announcement-track">
      <div class="announcement-group" aria-label="MATCHA • COFFEE • TEA • JAPANESE DESSERTS">${announcementItems}</div>
      <div class="announcement-group" aria-hidden="true">${announcementItems}</div>
    </div>
  </div>

  <header class="site-header" id="top">
    <a class="brand" href="#top" aria-label="Taisha — domů">TAISHA<span class="brand-dot">.</span></a>
    <nav class="desktop-nav" aria-label="Hlavní navigace">
      <a href="../menu/">Menu</a>
      <a href="#locations">Pobočky</a>
      <a href="#about">O nás</a>
      <a href="#space">Prostor</a>
      <a href="https://www.instagram.com/taisha.cafe/" target="_blank" rel="noopener noreferrer">Instagram</a>
    </nav>
    <a class="header-visit" href="#find-us">Navštívit <span>↗</span></a>
    <button class="menu-toggle" type="button" aria-label="Otevřít menu" aria-expanded="false">
      <span></span><span></span>
    </button>
  </header>

  <main>
    <section class="hero section-pad">
      <div class="hero-copy reveal">
        <p class="eyebrow"><em>Matcha · Coffee · Tea</em></p>
        <h1>Taisha<br /><em>kavárna</em></h1>
        <p class="hero-intro">Výběrová káva, japonská matcha. Taisha – kde chvíle chutnají lépe.</p>
        <div class="hero-actions">
          <a class="button button-dark" href="../menu/">Zobrazit menu <span>↗</span></a>
          <a class="text-link" href="#locations">Kde nás najdete <span>↘</span></a>
        </div>
      </div>
      <div class="hero-visual reveal reveal-delay">
        <img src="${images.hero}" alt="Interiér kavárny s dřevěným posezením" />
        <div class="hero-stamp" aria-hidden="true"><span>MATCHA<br />KÁVA<br />DEZERTY</span></div>
        <p class="image-caption">Campus<br /><span>Brno</span></p>
      </div>
      <div class="scroll-note"><span class="scroll-line"></span>Posuňte se dolů</div>
    </section>

    <section class="locations section-pad" id="locations">
      <div class="section-heading reveal">
        <p class="eyebrow">Pobočka v Brně</p>
        <h2>Kde nás<br /><em>najdete</em></h2>
      </div>
      <div class="location-grid">
        <article class="location-card reveal">
          <div class="card-image"><img src="${images.locationOne}" alt="Taisha — Campus, Brno" /><span class="card-number">01</span></div>
          <div class="card-content"><div><p class="eyebrow">Brno</p><h3>Campus</h3></div><a class="circle-arrow" href="#find-us" aria-label="Zobrazit pobočku Campus">↗</a><p class="location-meta">OC Campus, Netroufalky 770, Brno<br /><span>Po–Pá 7:30–20:00 · So–Ne 8:00–20:00</span></p></div>
        
          </article>
        
        <!--
        <article class="location-card reveal reveal-delay coming-soon">
          <div class="card-image">
            <img src="${images.locationTwo}" alt="Taisha — Jihlava (coming soon)" />
            <span class="card-number">02</span>
          </div>
          <div class="card-content">
            <div class="card-header">
              <div class="coming-label">JIHLAVA · <span class="coming-badge">PŘIPRAVUJEME</span></div>
              <p class="eyebrow">Jihlava</p>
              <h3>Nová pobočka</h3>
              <p class="coming-note">Otevíráme listopad 2026</p>
            </div>
            <a class="circle-arrow" href="#find-us" aria-label="Plánované otevření Jihlava">↗</a>
            <p class="location-meta">Plánované otevření: listopad 2026<br /><span>Brzy více informací</span></p>
          </div>
        </article>
        -->
      </div>
    </section>

    <section class="menu-section section-pad" id="menu">
      <div class="menu-top reveal"><div><p class="eyebrow">Co u nás dostanete</p><h2>Naše<br /><em>menu</em></h2></div><p class="menu-note">Káva, matcha a dezerty.</p></div>
      <div class="menu-layout">
        <div class="menu-list reveal">
          <div class="menu-row"><div><span class="menu-index">01</span><h3>Matcha</h3></div><p>usucha · latte · ledové</p><span class="menu-plus">+</span></div>
          <div class="menu-row"><div><span class="menu-index">02</span><h3>Káva</h3></div><p>espresso · filtr · ledové</p><span class="menu-plus">+</span></div>
          <div class="menu-row menu-row-single"><div><span class="menu-index">03</span><h3>Japonské dezerty</h3></div><span class="menu-plus">+</span></div>
          <a class="button button-outline" href="../menu/">Zobrazit celé menu <span>↗</span></a>
        </div>
        <div class="menu-image reveal reveal-delay"><img src="${images.menu}" alt="Matcha latte a dezerty na stole" /></div>
      </div>
    </section>

    <section class="story section-pad" id="about">
      <div class="story-image reveal">
        <img src="${images.story}" alt="Čajový set na dřevěném stole" />
        <div class="story-features" aria-label="Vybavení kavárny">
          <div class="story-feature">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 8h8v7a4 4 0 0 1-8 0V8Z"/><path d="M8 8V6.5A2.5 2.5 0 0 1 10.5 4h3A2.5 2.5 0 0 1 16 6.5V8"/><path d="M9 18h6"/><path d="M12 12v3"/></svg>
            <span>Zásuvky k dispozici</span>
          </div>
          <div class="story-feature">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 9.5A13.5 13.5 0 0 1 12 5a13.5 13.5 0 0 1 9.5 4.5"/><path d="M5.5 12.5A10.5 10.5 0 0 1 12 9a10.5 10.5 0 0 1 6.5 3.5"/><path d="M8.5 15.5A7.5 7.5 0 0 1 12 13a7.5 7.5 0 0 1 3.5 2.5"/><circle cx="12" cy="18" r="1.5" fill="currentColor" stroke="none"/></svg>
            <span>Wi‑Fi zdarma</span>
          </div>
        </div>
        <span class="vertical-label">Taisha</span>
      </div>
      <div class="story-copy reveal reveal-delay"><p class="eyebrow">O nás</p><h2>O<br /><em>Taishe</em></h2><p>V Taisha věříme, že na dobrém nápoji záleží stejně jako na okamžiku, ve kterém si ho vychutnáte. Proto jsme výběru naší kávy věnovali opravdu velkou pozornost. Hledali jsme kávu, která má svůj charakter, původ i příběh – a po pečlivém výběru a cuppingu jsme našli tu pravou. <br><br>

Naše káva pochází z vybraných oblastí, jako je Etiopie nebo Guatemala, kde se kávovníky pěstují ve vysokých nadmořských výškách. V šálku tak můžete objevit jemné květinové a ovocné tóny, citrusy, med nebo třeba macadamové ořechy. Kávu připravujeme jako espresso i jako filtrovanou kávu, abyste si mohli vychutnat její charakter různými způsoby.<br><br>

Kávu doplňuje japonská matcha, pečlivě vybrané čaje a čerstvé dezerty inspirované Asií. Taisha je místo pro ranní kávu, odpolední matchu i chvíle, kdy si chcete na chvíli odpočinout od okolního světa.</p><a class="text-link" href="#space">Podívat se na prostor <span>↘</span></a></div>
    </section>

    <section class="space-section" id="space">
      <div class="space-heading section-pad reveal"><p class="eyebrow">Prostor</p><h2>Naše<br /><em>kavárna</em></h2></div>
      <div class="gallery"><div class="gallery-item gallery-wide reveal"><img src="${images.galleryOne}" alt="Posezení v kavárně" /><span>01 — Campus</span></div><div class="gallery-item gallery-tall reveal reveal-delay"><img src="${images.galleryTwo}" alt="Kávový bar" /><span>02 — Káva</span></div><div class="gallery-item gallery-small reveal"><img src="${images.galleryThree}" alt="Matcha a dezerty" /><span>03 — matcha</span></div></div>
    </section>

    <section class="find-us section-pad" id="find-us">
      <div class="find-heading reveal"><p class="eyebrow">Otevírací doba a adresa</p><h2>Najdete nás<br /><em>tady</em></h2></div>
      <div class="find-list reveal reveal-delay">
        <div class="find-row"><span class="find-number">01</span><div><h3>OC Campus, Brno</h3><p>Netroufalky 770<br />625 00 Brno</p></div><div class="find-hours"><span>Otevírací doba</span><p>Po–Pá 7:30–20:00<br />So–Ne 8:00–20:00</p></div><a class="circle-arrow" href="https://www.google.com/maps/search/?api=1&query=Taisha+OC+Campus+Netroufalky+770+Brno" target="_blank" rel="noreferrer" aria-label="Otevřít OC Campus v Google Maps">↗</a></div>
        <div class="find-directions">
          <div class="direction-item"><span>Kudy</span><p>Z ulice Kamenice, roh mezi Raiffeisenbank a výdejními boxy</p></div>
          <div class="direction-item"><span>Parkování</span><p>Doporučujeme zaparkovat v garáži</p></div>
          <div class="direction-item"><span>Vchod</span><p>Do kavárny u sloupu s písmenem O</p></div>
        </div>
        <!--
        <div class="find-row coming-soon"><span class="find-number">02</span><div><div class="coming-label">JIHLAVA · <span class="coming-badge">PŘIPRAVUJEME</span></div><h3>Jihlava</h3><p>Plánované otevření<br />listopad 2026</p></div><div class="find-hours"><span>Stav</span><p>Plánované otevření — sledujte nás</p></div><a class="circle-arrow" href="#" aria-label="Informace o otevření Jihlava">↗</a></div>
        -->
      </div>
    </section>

    <section class="instagram-section section-pad reveal" aria-label="Instagram feed">
      <div class="section-heading instagram-heading">
        <div>
          <p class="eyebrow">Instagram</p>
          <h2>Poslední<br /><em>z našeho světa</em></h2>
        </div>
        <a class="text-link" href="https://www.instagram.com/taisha.cafe" target="_blank" rel="noopener noreferrer">Sledovat profil <span>↗</span></a>
      </div>
      <div class="instagram-feed-shell">
        <div class="sk-instagram-feed" data-embed-id="25712969"></div>
      </div>  
    </section>
  </main>

  <footer class="site-footer" id="instagram">
    <div class="footer-top">
      <a class="brand footer-brand" href="#top">TAISHA<span class="brand-dot">.</span></a>

      <div class="footer-meta">
        <div class="footer-contact">
          <h4>Kontakt</h4>
          <ul>
            <li class="contact-item contact-phone">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 4.5a2.5 2.5 0 0 1 2.5-2.5h5A2.5 2.5 0 0 1 17 4.5v15A2.5 2.5 0 0 1 14.5 22h-5A2.5 2.5 0 0 1 7 19.5v-15Z"/><path d="M9.5 2.8h5"/><path d="M11 18.5h2"/><path d="M10.5 7.2h3"/><path d="M10.5 10.2h3"/></svg>
              <a href="tel:704533333">704 533 333</a>
            </li>
            <li class="contact-item contact-email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 7.5A2.5 2.5 0 0 1 6 5h12a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 18 19H6a2.5 2.5 0 0 1-2.5-2.5v-9Z"/><path d="m4.5 7 7.5 6 7.5-6"/></svg>
              <a href="mailto:taisha.brno@seznam.cz">taisha.brno@seznam.cz</a>
            </li>
          </ul>
        </div>

        <div class="footer-socials">
          <h4>Sledujte nás</h4>
          <div class="footer-social-grid">
            <div class="social-branch">

              <div class="social-links">
                <a href="https://www.facebook.com/profile.php?id=61593420006501" target="_blank" rel="noreferrer" class="social-link social-facebook" aria-label="Facebook OC Campus">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 8.5V6.8c0-.9.6-1.3 1.3-1.3h1.6V2.8h-2.8c-2.7 0-3.9 1.7-3.9 3.9v1.8H7.5v3.4h2.4V21h3.6v-9.1h2.7l.4-3.4h-3.1Z" fill="currentColor"/></svg>
                </a>
                <a href="https://www.instagram.com/taisha.cafe" target="_blank" rel="noreferrer" class="social-link social-instagram" aria-label="Instagram OC Campus">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor"/></svg>
                </a>
                <a href="https://www.tiktok.com/@taisha.cafe" target="_blank" rel="noreferrer" class="social-link social-tiktok" aria-label="TikTok OC Campus">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 3.2c.8 2 2.2 3.1 4.4 3.4v2.7c-1.7-.1-3.2-.7-4.4-1.8v7.1a5.2 5.2 0 1 1-5.2-5.2c.5 0 .9.1 1.3.2v2.8a2.7 2.7 0 1 0 2.6 2.7V3.2h1.3Z" fill="currentColor"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="footer-tagline">Matcha, káva<br />a japonské dezerty.</p>
    </div>
    <div class="footer-bottom"><span>© 2026 Taisha</span><a href="#top">Nahoru ↑</a></div>
  </footer>

  <div class="mobile-menu" aria-hidden="true"><nav><a href="../menu/">Menu</a><a href="#locations">Pobočky</a><a href="#about">O nás</a><a href="#space">Prostor</a><a href="#instagram">Instagram</a></nav></div>
`

const header = document.querySelector('.site-header')
const menuToggle = document.querySelector('.menu-toggle')
const mobileMenu = document.querySelector('.mobile-menu')

const instagramWidgetScript = document.querySelector('script[src*="sociablekit.com/instagram-feed/widget.js"]')
if (!instagramWidgetScript) {
  const script = document.createElement('script')
  script.src = 'https://widgets.sociablekit.com/instagram-feed/widget.js'
  script.defer = true
  document.body.appendChild(script)
}

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 24))
menuToggle.addEventListener('click', () => {
  const isOpen = document.body.classList.toggle('menu-open')
  menuToggle.setAttribute('aria-expanded', isOpen)
  mobileMenu.setAttribute('aria-hidden', !isOpen)
})
document.querySelectorAll('.mobile-menu a').forEach((link) => link.addEventListener('click', () => {
  document.body.classList.remove('menu-open')
  menuToggle.setAttribute('aria-expanded', 'false')
  mobileMenu.setAttribute('aria-hidden', 'true')
}))

const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target) }
}), { threshold: 0.12 })
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element))
