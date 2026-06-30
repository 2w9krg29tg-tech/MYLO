/* ===================================================================
   MYLO — site behavior
   "Launch App" / "Buy MYLO" open an honest status modal instead of a
   raw alert(): there is no deployed contract yet, so the button
   shouldn't pretend to do anything more than it can.
=================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(detectInitialLang());

  initHeaderScroll();
  initMobileNav();
  initScrollReveal();
  initActiveNavLink();
  initCounters();
  initModal();
  initLanguageSelect();
});

/* ---------- i18n helpers ---------- */
function getByPath(obj, path){
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : undefined, obj);
}

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[ch]));
}

function detectInitialLang(){
  let saved = null;
  try { saved = localStorage.getItem('mylo-lang'); } catch (e) { /* storage unavailable, ignore */ }
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved;

  const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  const prefix = browserLang.split('-')[0];
  if (SUPPORTED_LANGS.includes(prefix)) return prefix;
  return 'en';
}

function applyTranslations(lang){
  const dict = translations[lang] || translations.en;

  document.documentElement.lang = lang;
  document.documentElement.dir = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = getByPath(dict, el.dataset.i18n);
    if (value === undefined) return;
    if (Array.isArray(value)) {
      el.innerHTML = value.map(escapeHtml).join('<br>');
    } else {
      el.textContent = value;
    }
  });

  const navToggle = document.getElementById('navToggle');
  if (navToggle) navToggle.setAttribute('aria-label', dict.navToggleLabel);

  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.setAttribute('aria-label', dict.modalCloseLabel);
  });

  const langSelect = document.getElementById('langSelect');
  if (langSelect) {
    langSelect.setAttribute('aria-label', dict.langLabel);
    langSelect.value = lang;
  }

  renderRoadmap(dict.roadmap);
  renderFaq(dict.faq);

  try { localStorage.setItem('mylo-lang', lang); } catch (e) { /* storage unavailable, ignore */ }
}

function initLanguageSelect(){
  const select = document.getElementById('langSelect');
  if (!select) return;
  select.addEventListener('change', () => applyTranslations(select.value));
}

/* ---------- roadmap: rendered from the translations data ---------- */
function renderRoadmap(items){
  const list = document.getElementById('roadmapList');
  if (!list || !items) return;

  list.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="phase-tag">${escapeHtml(item.phase)}</span>${escapeHtml(item.text)}`;
    list.appendChild(li);
  });
}

/* ---------- FAQ: accessible accordion rendered from the translations data ---------- */
function renderFaq(items){
  const wrap = document.getElementById('faqList');
  if (!wrap || !items) return;

  wrap.innerHTML = '';

  items.forEach((item, index) => {
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';

    const button = document.createElement('button');
    button.className = 'faq-question';
    button.id = `faq-q-${index}`;
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', `faq-p-${index}`);
    button.innerHTML = `<span>${escapeHtml(item.q)}</span><span class="icon"></span>`;

    const panel = document.createElement('div');
    panel.className = 'faq-panel';
    panel.id = `faq-p-${index}`;
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-labelledby', button.id);
    panel.innerHTML = `<p>${escapeHtml(item.a)}</p>`;

    button.addEventListener('click', () => {
      const isOpen = button.getAttribute('aria-expanded') === 'true';

      wrap.querySelectorAll('.faq-question').forEach(other => {
        other.setAttribute('aria-expanded', 'false');
        other.nextElementSibling.style.maxHeight = null;
      });

      if (!isOpen){
        button.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
    });

    faqItem.append(button, panel);
    wrap.appendChild(faqItem);
  });
}

/* ---------- sticky header elevation on scroll ---------- */
function initHeaderScroll(){
  const header = document.querySelector('header');
  if (!header) return;
  const setState = () => header.classList.toggle('scrolled', window.scrollY > 8);
  setState();
  window.addEventListener('scroll', setState, { passive: true });
}

/* ---------- mobile nav toggle ---------- */
function initMobileNav(){
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('primaryNav');
  if (!toggle || !nav) return;

  const close = () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); };
  const open = () => { nav.classList.add('open'); toggle.setAttribute('aria-expanded', 'true'); };

  toggle.addEventListener('click', () => nav.classList.contains('open') ? close() : open());
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

/* ---------- scroll reveal for sections ---------- */
function initScrollReveal(){
  const sections = document.querySelectorAll('.section');
  if (!sections.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion){
    sections.forEach(s => s.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(s => observer.observe(s));
}

/* ---------- highlight the nav link for the section in view ---------- */
function initActiveNavLink(){
  const links = document.querySelectorAll('nav a[href^="#"]');
  if (!links.length) return;

  const sections = Array.from(links)
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!sections.length) return;

  const setActive = (id) => {
    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-45% 0px -45% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ---------- count-up animation for numeric tokenomics values ---------- */
function initCounters(){
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const animate = (el) => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    if (Number.isNaN(target)) return;

    if (reduceMotion){
      el.textContent = target.toLocaleString('en-US') + suffix;
      return;
    }

    const duration = 1100;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased).toLocaleString('en-US') + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){ animate(entry.target); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.6 });

  counters.forEach(el => observer.observe(el));
}

/* ---------- modal (Launch App / Buy MYLO status) ---------- */
function initModal(){
  const triggers = document.querySelectorAll('[data-modal-target]');
  if (!triggers.length) return;

  let lastFocused = null;

  const open = (modal) => {
    lastFocused = document.activeElement;
    modal.setAttribute('aria-hidden', 'false');
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
    document.body.style.overflow = 'hidden';
  };

  const close = (modal) => {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  };

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const modal = document.getElementById(trigger.dataset.modalTarget);
      if (modal) open(modal);
    });
  });

  document.querySelectorAll('.modal').forEach(modal => {
    modal.querySelectorAll('[data-modal-close]').forEach(el => {
      el.addEventListener('click', () => close(modal));
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('.modal[aria-hidden="false"]').forEach(close);
  });
}
