(() => {
  'use strict';
  document.addEventListener('DOMContentLoaded', () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const fine = window.matchMedia('(pointer: fine)');
    const header = document.querySelector('.site-header');
    const bar = document.querySelector('.reading-progress');
    const toTop = document.querySelector('.to-top');
    toTop?.addEventListener('click', () => window.scrollTo({top:0, behavior: reduced.matches ? 'auto' : 'smooth'}));
    let ticking = false;
    function scrollUI() {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${total > 0 ? Math.min(1, window.scrollY / total) : 0})`;
      header.classList.toggle('scrolled', window.scrollY > 16);
      toTop?.classList.toggle('show', window.scrollY > 700);
      ticking = false;
    }
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(scrollUI); } }, {passive:true});
    window.addEventListener('resize', scrollUI, {passive:true});
    scrollUI();

    document.querySelectorAll('.hero-media, .about-photo').forEach(media => {
    const frame = media.querySelector('.hero-media-frame, .about-photo-frame');
    const orbit = media.querySelector('.orbital-field');
    media.addEventListener('pointermove', e => {
      if (reduced.matches || !fine.matches) return;
      const r = media.getBoundingClientRect();
      const x = (e.clientX-r.left)/r.width-.5, y = (e.clientY-r.top)/r.height-.5;
      frame.style.animation = 'none';
      frame.style.transform = `rotateX(${-y*6}deg) rotateY(${x*7}deg) rotate(1deg)`;
      orbit.style.setProperty('--orbit-x', `${-x*14}px`);
      orbit.style.setProperty('--orbit-y', `${-y*14}px`);
    }, {passive:true});
    media.addEventListener('pointerleave', () => {
      frame.style.transform = '';
      orbit.style.setProperty('--orbit-x','0px'); orbit.style.setProperty('--orbit-y','0px');
    });

    });

    // Share the home page's pointer-responsive depth and geometry on every route.
    document.querySelectorAll('.page:not(#page-home)').forEach(page => {
      let frameId = null;
      page.addEventListener('pointermove', e => {
        if (reduced.matches || !fine.matches || frameId) return;
        const x = e.clientX / window.innerWidth - .5;
        const y = e.clientY / window.innerHeight - .5;
        frameId = requestAnimationFrame(() => {
          page.style.setProperty('--page-orbit-x', `${x * 20}px`);
          page.style.setProperty('--page-orbit-y', `${y * 16}px`);
          frameId = null;
        });
      }, {passive:true});
      page.addEventListener('pointerleave', () => {
        page.style.setProperty('--page-orbit-x','0px');
        page.style.setProperty('--page-orbit-y','0px');
      });
    });
    document.addEventListener('pointermove', e => {
      if (reduced.matches || !fine.matches) return;
      const card = e.target.closest('.page:not(#page-home) .hernia-card, .page:not(#page-home) .contact-card, .page:not(#page-home) .dl-card, .page:not(#page-home) .press-card, .page:not(#page-home) .social-tab');
      if (!card) return;
      const bounds = card.getBoundingClientRect();
      card.style.setProperty('--light-x', `${e.clientX-bounds.left}px`);
      card.style.setProperty('--light-y', `${e.clientY-bounds.top}px`);
    }, {passive:true});

    const animated = new WeakSet();
    const reveal = ' .hernia-card, .special-card, .contact-card, .dl-card, .press-card, .cv-section, .trust-item, .about-photo, .about-content, .section-head, .faq-section, .detail-page > h1, .detail-page > h2, .detail-page > p, .detail-page > ul, .detail-page > .info-box, .cv-page > h1, .press-page > h1, .social-page > h1, .social-tab, .social-empty, .imprint, .qr-block';
    const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        if (!reduced.matches) entry.target.classList.add('reveal-once');
        observer.unobserve(entry.target);
      });
    }, {threshold:0, rootMargin:'0px 0px 80px 0px'}) : null;
    function prepare() {
      document.querySelectorAll(reveal).forEach((el,i) => {
        if (animated.has(el)) return;
        animated.add(el);
        el.style.setProperty('--reveal-delay', `${(i % 3)*40}ms`);
        observer?.observe(el);
      });
      document.querySelectorAll('.hernia-card').forEach(el => {
        el.tabIndex = 0;
        el.setAttribute('role','button');
        el.setAttribute('aria-label', el.querySelector('h3').textContent);
      });
      document.querySelectorAll('.cat-pill').forEach(el => el.setAttribute('aria-pressed', String(el.classList.contains('active'))));
      document.querySelectorAll('.lang-switch button').forEach(el => el.setAttribute('aria-pressed', String(el.classList.contains('active'))));
      document.querySelectorAll('.faq-q').forEach(el => {
        const answer = el.parentElement.querySelector('.faq-a');
        answer.id = el.parentElement.id + '-answer';
        el.setAttribute('aria-controls',answer.id);
      });
    }
    prepare();
    ['hernia-grid','special-grid','faq-categories','faq-list','socialFeed'].forEach(id => {
      const el = document.getElementById(id);
      if (el) new MutationObserver(prepare).observe(el,{childList:true});
    });
    document.querySelectorAll('[data-faq-category]').forEach(el => el.addEventListener('click', () => {
      document.querySelector(`[data-cat="${el.dataset.faqCategory}"]`)?.click();
    }));
    document.addEventListener('keydown', e => {
      if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.hernia-card')) {e.preventDefault();e.target.click();}
    });
    const nav = document.getElementById('nav-main');
    const toggle = document.querySelector('.menu-toggle');
    new MutationObserver(() => toggle.setAttribute('aria-expanded',String(nav.classList.contains('open')))).observe(nav,{attributes:true,attributeFilter:['class']});
    document.addEventListener('keydown', e => {if (e.key === 'Escape' && nav.classList.contains('open')) {nav.classList.remove('open');toggle.focus();}});
    document.addEventListener('click', e => {if (!header.contains(e.target)) nav.classList.remove('open');});

    // Keep the existing readers usable with keyboard and restore the opener.
    ['docReader','pressLightbox'].forEach(id => {
      const dialog = document.getElementById(id);
      let returnFocus = null;
      dialog.setAttribute('role','dialog'); dialog.setAttribute('aria-modal','true');
      dialog.setAttribute('aria-label', id === 'docReader' ? 'Dokument' : 'Presse');
      new MutationObserver(() => {
        if (!dialog.hidden) {
          returnFocus = document.activeElement;
          dialog.querySelector('button')?.focus();
        } else {returnFocus?.focus();}
      }).observe(dialog,{attributes:true,attributeFilter:['hidden']});
      dialog.addEventListener('keydown', e => {
        if (e.key !== 'Tab') return;
        const items = [...dialog.querySelectorAll('button,a[href],[tabindex="0"]')];
        const first=items[0],last=items[items.length-1];
        if (e.shiftKey && document.activeElement === first) {e.preventDefault();last?.focus();}
        else if (!e.shiftKey && document.activeElement === last) {e.preventDefault();first?.focus();}
      });
    });
    document.querySelectorAll('.page').forEach(page => new MutationObserver(scrollUI).observe(page,{attributes:true,attributeFilter:['class']}));
  });
})();
