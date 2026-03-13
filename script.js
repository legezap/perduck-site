/* ============================================================
   (Per)Duck Events — 2026 Interactions
   Parallax · Counter · Stagger · Cinematic
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* --- Navbar scroll --- */
  const nav = document.querySelector('.navbar');
  const onScroll = () => nav && nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- Burger / Mobile menu --- */
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobBackdrop = document.getElementById('mobBackdrop');
  const closeMob = () => {
    burger && burger.classList.remove('open');
    mobileMenu && mobileMenu.classList.remove('open');
    mobBackdrop && mobBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  };
  if (burger) {
    burger.addEventListener('click', () => {
      const open = burger.classList.toggle('open');
      mobileMenu && mobileMenu.classList.toggle('open', open);
      mobBackdrop && mobBackdrop.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }
  mobBackdrop && mobBackdrop.addEventListener('click', closeMob);
  document.querySelectorAll('.mobile-menu a:not(.mob-accordion-btn)').forEach(a => a.addEventListener('click', closeMob));

  /* --- Mobile accordion --- */
  document.querySelectorAll('.mob-accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.nextElementSibling;
      const isOpen = panel.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen);
    });
  });

  /* --- Desktop Mega Menu --- */
  document.querySelectorAll('[data-mega]').forEach(trigger => {
    const menu = document.getElementById(trigger.dataset.mega);
    if (!menu) return;
    let timeout;
    const show = () => { clearTimeout(timeout); menu.classList.add('show'); trigger.setAttribute('aria-expanded', 'true'); };
    const hide = () => { timeout = setTimeout(() => { menu.classList.remove('show'); trigger.setAttribute('aria-expanded', 'false'); }, 200); };
    trigger.addEventListener('mouseenter', show);
    trigger.addEventListener('mouseleave', hide);
    menu.addEventListener('mouseenter', () => clearTimeout(timeout));
    menu.addEventListener('mouseleave', hide);
    trigger.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); menu.classList.contains('show') ? hide() : show(); }
      if (e.key === 'Escape') hide();
    });
  });

  /* ============================================================
     PARALLAX — Hero + Cinematic Dividers
     ============================================================ */
  const parallaxEls = document.querySelectorAll('.hero-bg, .cine-divider-bg');
  if (parallaxEls.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let ticking = false;
    const updateParallax = () => {
      const scrollY = window.scrollY;
      parallaxEls.forEach(el => {
        const section = el.closest('section, .cine-divider, .hero');
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const sectionH = section.offsetHeight;
        // Only animate when in viewport
        if (rect.bottom < -100 || rect.top > window.innerHeight + 100) return;
        const progress = (window.innerHeight - rect.top) / (window.innerHeight + sectionH);
        const offset = (progress - 0.5) * 80; // +-40px movement
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(updateParallax); ticking = true; }
    }, { passive: true });
    updateParallax();
  }

  /* ============================================================
     SCROLL REVEAL — IntersectionObserver with stagger support
     ============================================================ */
  const reveals = document.querySelectorAll('.reveal, .reveal-clip, .reveal-scale');
  if (reveals.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }

  /* ============================================================
     COUNTER ANIMATION — Stats numbers count up on scroll
     ============================================================ */
  const statNums = document.querySelectorAll('[data-count]');
  if (statNums.length && 'IntersectionObserver' in window) {
    const countUp = (el) => {
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const duration = 2000;
      const start = performance.now();

      const animate = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        el.textContent = prefix + current + suffix;
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    };

    const counterIO = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          countUp(e.target);
          counterIO.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    statNums.forEach(el => counterIO.observe(el));
  }

  /* --- Sticky Anchor Nav Highlight --- */
  const anchorNav = document.querySelector('.anchor-nav');
  if (anchorNav) {
    const links = anchorNav.querySelectorAll('.anchor-link');
    const sections = [];
    links.forEach(l => {
      const id = l.getAttribute('href')?.replace('#', '');
      const sec = id && document.getElementById(id);
      if (sec) sections.push({ el: sec, link: l });
    });
    if (sections.length) {
      const aio = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            links.forEach(l => l.classList.remove('active'));
            const match = sections.find(s => s.el === e.target);
            if (match) match.link.classList.add('active');
          }
        });
      }, { rootMargin: '-20% 0px -60% 0px' });
      sections.forEach(s => aio.observe(s.el));
    }
  }

  /* ============================================================
     MULTI-STEP RFP FORM
     ============================================================ */
  const rfpForm = document.getElementById('rfpForm');
  if (rfpForm) {
    let step = 0;
    const steps = rfpForm.querySelectorAll('.form-step');
    const bars = rfpForm.closest('.rfp-wrap')?.querySelectorAll('.rfp-bar') || [];
    const stepLabel = rfpForm.closest('.rfp-wrap')?.querySelector('.current');
    const totalSteps = steps.length;
    let selectedService = '';

    const showStep = (n) => {
      steps.forEach((s, i) => { s.classList.toggle('active', i === n); });
      bars.forEach((b, i) => { b.classList.toggle('done', i <= n); });
      if (stepLabel) stepLabel.textContent = `Step ${n + 1} of ${totalSteps}`;
      step = n;
    };

    rfpForm.querySelectorAll('.svc-opt').forEach(opt => {
      opt.addEventListener('click', () => {
        rfpForm.querySelectorAll('.svc-opt').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        selectedService = opt.dataset.value;
        const hidden = rfpForm.querySelector('[name="service_type"]');
        if (hidden) hidden.value = selectedService;
      });
    });

    const validateStep = (n) => {
      let valid = true;
      if (n === 0) {
        if (!selectedService) {
          const err = steps[0].querySelector('.field-error');
          if (err) { err.classList.add('show'); err.textContent = 'Please select a service.'; }
          valid = false;
        } else {
          const err = steps[0].querySelector('.field-error');
          if (err) err.classList.remove('show');
        }
      } else {
        steps[n].querySelectorAll('[required]').forEach(inp => {
          const err = inp.parentElement.querySelector('.field-error');
          if (!inp.value.trim()) {
            inp.classList.add('err');
            if (err) { err.classList.add('show'); err.textContent = 'This field is required.'; }
            valid = false;
          } else {
            inp.classList.remove('err');
            if (err) err.classList.remove('show');
          }
          if (inp.type === 'email' && inp.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inp.value)) {
            inp.classList.add('err');
            if (err) { err.classList.add('show'); err.textContent = 'Enter a valid email.'; }
            valid = false;
          }
        });
      }
      return valid;
    };

    rfpForm.querySelectorAll('[data-next]').forEach(btn => {
      btn.addEventListener('click', () => { if (validateStep(step) && step < totalSteps - 1) showStep(step + 1); });
    });
    rfpForm.querySelectorAll('[data-prev]').forEach(btn => {
      btn.addEventListener('click', () => { if (step > 0) showStep(step - 1); });
    });

    rfpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateStep(step)) return;
      const consent = rfpForm.querySelector('#consent');
      if (consent && !consent.checked) {
        const err = consent.closest('.consent-row')?.nextElementSibling;
        if (err) { err.classList.add('show'); err.textContent = 'Please agree to the privacy policy.'; }
        return;
      }
      const now = new Date();
      const dateStr = now.getFullYear().toString() + String(now.getMonth() + 1).padStart(2, '0') + String(now.getDate()).padStart(2, '0');
      const rand = String(Math.floor(1000 + Math.random() * 9000));
      const rfpId = 'PD-' + dateStr + '-' + rand;

      rfpForm.style.display = 'none';
      const success = document.getElementById('rfpSuccess');
      if (success) {
        success.classList.add('show');
        const idEl = success.querySelector('.rfp-id');
        if (idEl) idEl.textContent = rfpId;
      }

      const fd = new FormData(rfpForm);
      fd.append('rfp_id', rfpId);
      fetch('https://formspree.io/f/xwpkpbjn', { method: 'POST', body: fd, headers: { 'Accept': 'application/json' } }).catch(() => {});
    });

    showStep(0);
  }

  /* --- Active nav link based on current page --- */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links > li > a, .mobile-menu nav > a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && (href === path || (path === '' && href === 'index.html') || (path === 'index.html' && href === 'index.html'))) {
      a.classList.add('active');
    }
  });
});
