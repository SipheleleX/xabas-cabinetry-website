/* components.js — injects shared nav & footer into every page */

const NAV_HTML = `
<nav class="navbar" id="navbar">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">Xaba's Cabinetry</a>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="gallery.html">Gallery</a></li>
      <li><a href="pricing.html">Pricing</a></li>
      <li><a href="process.html">Process</a></li>
      <li><a href="faq.html">FAQ</a></li>
      <li><a href="contact.html" class="nav-cta">Get Quote</a></li>
    </ul>
    <button class="nav-toggle" id="navToggle" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-main">
    <div class="footer-brand">
      <a href="index.html" class="footer-logo">Xaba's Cabinetry (Pty) Ltd</a>
      <p>Transforming Gauteng homes with custom built-in cabinetry since 2009. Transparent pricing, quality craftsmanship, professional installation.</p>
      <div class="footer-social">
        <a href="https://www.tiktok.com/@xabacabinetry" aria-label="TikTok" title="TikTok"><i class="fa-brands fa-tiktok"></i></a>
        <a href="https://www.instagram.com/xabas_cabinets" aria-label="Instagram" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.facebook.com/share/1FQtFLCG2L/" aria-label="Facebook" title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Pages</h4>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="gallery.html">Gallery</a></li>
        <li><a href="pricing.html">Pricing</a></li>
        <li><a href="process.html">Our Process</a></li>
        <li><a href="faq.html">FAQ</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <ul>
        <li><a href="services.html#wardrobes">Built-In Wardrobes</a></li>
        <li><a href="services.html#kitchens">Kitchen Cabinets</a></li>
        <li><a href="services.html#vanities">Bathroom Vanities</a></li>
        <li><a href="services.html#tv-units">TV Units</a></li>
        <li><a href="services.html#office">Home Office</a></li>
        <li><a href="services.html#storage">Custom Storage</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <div class="footer-contact-item">
        <span class="fc-icon"><i class="fa-solid fa-phone"></i></span>
        <a href="tel:0602064830">060 206 4830</a>
      </div>
      <div class="footer-contact-item">
        <span class="fc-icon"><i class="fa-brands fa-whatsapp"></i></span>
        <a href="https://wa.me/27602064830" target="_blank">WhatsApp Us</a>
      </div>
      <div class="footer-contact-item">
        <span class="fc-icon"><i class="fa-solid fa-envelope"></i></span>
        <a href="mailto:info@xabascabinetry.co.za">info@xabascabinetry.co.za</a>
      </div>
      <div class="footer-contact-item">
        <span class="fc-icon"><i class="fa-solid fa-location-dot"></i></span>
        <span>Gauteng, South Africa</span>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2025 Xaba's Cabinetry (Pty) Ltd. All rights reserved.</p>
    <p><a href="terms.html">Terms &amp; Conditions</a></p>
  </div>
</footer>
<a href="https://wa.me/27602064830" class="wa-float" target="_blank" title="Chat on WhatsApp">
  <i class="fa-brands fa-whatsapp"></i>
</a>`;

function initComponents() {
  // Inject nav
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;

  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Mobile toggle
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    document.addEventListener('click', e => {
      if (!e.target.closest('.navbar')) {
        toggle.classList.remove('open');
        navLinks.classList.remove('open');
      }
    });
  }

  // Scroll shadow on navbar
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });
  }
}

document.addEventListener('DOMContentLoaded', initComponents);
