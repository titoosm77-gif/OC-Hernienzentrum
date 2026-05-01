/* =========================================================
   OC | OrthoChirurgie – Hernienzentrum Webapp
   Main Application Logic
   ========================================================= */

(function() {
  'use strict';

  // ===== State =====
  const state = {
    lang: localStorage.getItem('hernie-lang') || 'de',
    page: 'home',
    cat: 'all',
    faq: [...(window.FAQ_PART1 || []), ...(window.FAQ_PART2 || [])]
  };

  // ===== Helpers =====
  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const t = (key) => (window.I18N[state.lang] && window.I18N[state.lang][key]) || key;

  // Normalize string for search (remove diacritics, lowercase)
  function normalize(s) {
    if (!s) return '';
    return s.toString()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[ـ]/g, '')      // Arabic tatweel
      .replace(/[<>]/g, ' ')
      .replace(/&[^;]+;/g, ' ');
  }

  // Strip HTML tags from FAQ answers for search/snippet
  function stripHtml(html) {
    return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  }

  // ===== i18n Application =====
  function applyLang() {
    document.documentElement.lang = state.lang;
    document.documentElement.dir = (state.lang === 'ar') ? 'rtl' : 'ltr';
    localStorage.setItem('hernie-lang', state.lang);

    // Update text-content translations
    $$('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (val) {
        if (key === 'imp_supervision_text') el.innerHTML = val;
        else el.textContent = val;
      }
    });
    // Placeholder translations
    $$('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });
    // Aria-labels
    $$('[data-i18n-aria]').forEach(el => {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });

    // Update lang switch active
    $$('.lang-switch button').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === state.lang);
    });

    // Re-render content
    renderHerniaTypes();
    renderFaqCategories();
    renderFaq();
  }

  // ===== Navigation =====
  function showPage(pageId) {
    state.page = pageId;
    $$('.page').forEach(p => p.classList.toggle('active', p.id === 'page-' + pageId));
    $$('.nav-main a').forEach(a => a.classList.toggle('active', a.dataset.page === pageId));

    // Close mobile menu
    $('.nav-main')?.classList.remove('open');

    // Scroll up
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ===== Render Hernia Types =====
  function herniaIcon(id) {
    const icons = {
      leistenhernie:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 8h14M7 8c0 5 2 9 5 9s5-4 5-9M9 14h6"/></svg>',
      nabelhernie:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.5"/></svg>',
      narbenhernie:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 6c4 0 4 4 8 4s4-4 8-4M4 12c4 0 4 4 8 4s4-4 8-4M4 18c4 0 4 4 8 4"/></svg>'
    };
    return icons[id] || '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="8"/></svg>';
  }

  function renderHerniaTypes() {
    const grid = $('#hernia-grid');
    if (!grid) return;
    const lang = state.lang;
    grid.innerHTML = window.HERNIA_TYPES.map(h => `
      <article class="hernia-card" data-type="${h.id}">
        <div class="hernia-card-icon">${herniaIcon(h.id)}</div>
        <h3>${h.name[lang]}</h3>
        <p>${h.desc[lang]}</p>
        <span class="therapy-label">${t('therapy_label')}</span>
        <p class="therapy-text">${h.therapy[lang]}</p>
      </article>
    `).join('');

    const sgrid = $('#special-grid');
    if (sgrid) {
      sgrid.innerHTML = window.SPECIAL_HERNIAS.map(s => `
        <article class="special-card">
          <h4>${s.name[lang]}</h4>
          <p>${s.desc[lang]}</p>
        </article>
      `).join('');
    }
  }

  // ===== Render FAQ Categories =====
  function renderFaqCategories() {
    const wrap = $('#faq-categories');
    if (!wrap) return;
    const lang = state.lang;
    const allCats = [{ id:'all', de:'Alle', en:'All', ar:'الكل', tr:'Tümü' }, ...window.CATEGORIES];
    wrap.innerHTML = allCats.map(c => `
      <button class="cat-pill ${c.id === state.cat ? 'active' : ''}" data-cat="${c.id}">${c[lang]}</button>
    `).join('');
    wrap.querySelectorAll('.cat-pill').forEach(b => {
      b.addEventListener('click', () => {
        state.cat = b.dataset.cat;
        renderFaqCategories();
        renderFaq();
      });
    });
  }

  // ===== Render FAQ =====
  function renderFaq() {
    const wrap = $('#faq-list');
    if (!wrap) return;
    const lang = state.lang;
    const cats = (state.cat === 'all') ? window.CATEGORIES : window.CATEGORIES.filter(c => c.id === state.cat);

    let html = '';
    cats.forEach(cat => {
      const items = state.faq.filter(f => f.cat === cat.id);
      if (items.length === 0) return;
      html += `<section class="faq-section" id="cat-${cat.id}">`;
      html += `<h3 class="faq-section-title">${cat[lang]}</h3>`;
      items.forEach(item => {
        html += `
          <div class="faq-item" id="faq-${item.id}">
            <button class="faq-q" type="button" aria-expanded="false">
              <span>${item.q[lang]}</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-a"><div class="faq-a-inner">${item.a[lang]}</div></div>
          </div>
        `;
      });
      html += '</section>';
    });
    wrap.innerHTML = html;

    // bind toggle
    wrap.querySelectorAll('.faq-q').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const wasOpen = item.classList.contains('open');
        // close all
        wrap.querySelectorAll('.faq-item').forEach(i => {
          i.classList.remove('open');
          i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
        });
        if (!wasOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // ===== Semantic Search =====
  function expandQuery(query) {
    const norm = normalize(query);
    const tokens = norm.split(/\s+/).filter(t => t.length > 1);
    const expanded = new Set(tokens);
    tokens.forEach(tok => {
      const syn = window.SYNONYMS[tok];
      if (syn) syn.forEach(s => expanded.add(normalize(s)));
      // partial-key synonyms (multi-word)
      Object.keys(window.SYNONYMS).forEach(key => {
        if (norm.includes(normalize(key))) {
          window.SYNONYMS[key].forEach(s => expanded.add(normalize(s)));
        }
      });
    });
    return Array.from(expanded);
  }

  // Levenshtein for fuzzy match
  function levenshtein(a, b) {
    if (!a.length) return b.length;
    if (!b.length) return a.length;
    const dp = Array(b.length + 1).fill(0).map((_, i) => i);
    for (let i = 1; i <= a.length; i++) {
      let prev = dp[0];
      dp[0] = i;
      for (let j = 1; j <= b.length; j++) {
        const tmp = dp[j];
        dp[j] = a[i - 1] === b[j - 1]
          ? prev
          : Math.min(prev, dp[j], dp[j - 1]) + 1;
        prev = tmp;
      }
    }
    return dp[b.length];
  }

  function fuzzyContains(haystack, needle) {
    if (needle.length <= 3) return haystack.includes(needle);
    if (haystack.includes(needle)) return true;
    // try fuzzy on each word
    const words = haystack.split(/\s+/);
    return words.some(w => {
      if (Math.abs(w.length - needle.length) > 3) return false;
      const dist = levenshtein(w, needle);
      const maxDist = needle.length <= 5 ? 1 : (needle.length <= 8 ? 2 : 3);
      return dist <= maxDist;
    });
  }

  function searchFaq(query) {
    if (!query || query.trim().length < 2) return [];
    const lang = state.lang;
    const expanded = expandQuery(query);
    const results = [];

    state.faq.forEach(item => {
      const qText = normalize(item.q[lang]);
      const aText = normalize(stripHtml(item.a[lang]));

      let score = 0;
      // substring + fuzzy
      expanded.forEach(token => {
        if (token.length < 2) return;
        // Exact in question (highest)
        if (qText.includes(token)) score += 10;
        // Exact in answer
        if (aText.includes(token)) score += 4;
        // Fuzzy in question
        else if (fuzzyContains(qText, token)) score += 5;
        // Fuzzy in answer
        else if (fuzzyContains(aText, token)) score += 2;
      });

      // Bonus: full query as substring
      const fullQ = normalize(query);
      if (fullQ.length > 4 && qText.includes(fullQ)) score += 15;
      if (fullQ.length > 4 && aText.includes(fullQ)) score += 6;

      if (score > 0) results.push({ item, score });
    });

    results.sort((a, b) => b.score - a.score);
    return results.slice(0, 6);
  }

  // ===== Search UI =====
  function setupSearch() {
    const input = $('#search-input');
    const btn = $('#search-btn');
    const results = $('#search-results');
    if (!input || !results) return;

    let debounce;

    function buildResults(query) {
      const lang = state.lang;
      const matches = searchFaq(query);
      if (matches.length === 0) {
        results.innerHTML = `<div class="search-empty">${t('search_no')}</div>`;
        results.classList.add('show');
        return;
      }
      const cats = window.CATEGORIES;
      results.innerHTML = matches.map(m => {
        const cat = cats.find(c => c.id === m.item.cat);
        const snippet = stripHtml(m.item.a[lang]).slice(0, 140);
        return `
          <button class="search-result" data-id="${m.item.id}" type="button">
            <span class="res-cat">${cat ? cat[lang] : ''}</span>
            <div class="res-q">${m.item.q[lang]}</div>
            <div class="res-snippet">${snippet}…</div>
          </button>
        `;
      }).join('');
      results.classList.add('show');

      results.querySelectorAll('.search-result').forEach(r => {
        r.addEventListener('click', () => goToFaq(r.dataset.id));
      });
    }

    input.addEventListener('input', () => {
      clearTimeout(debounce);
      const q = input.value.trim();
      if (q.length < 2) {
        results.classList.remove('show');
        return;
      }
      debounce = setTimeout(() => buildResults(q), 150);
    });

    input.addEventListener('focus', () => {
      if (input.value.trim().length >= 2) buildResults(input.value.trim());
    });

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const q = input.value.trim();
      if (q.length >= 2) {
        const matches = searchFaq(q);
        if (matches.length > 0) goToFaq(matches[0].item.id);
        else buildResults(q);
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        btn.click();
      }
      if (e.key === 'Escape') results.classList.remove('show');
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.searchbox') && !e.target.closest('#search-results')) {
        results.classList.remove('show');
      }
    });
  }

  function goToFaq(itemId) {
    const item = state.faq.find(f => f.id === itemId);
    if (!item) return;
    state.cat = 'all';
    showPage('faq');
    renderFaqCategories();
    renderFaq();
    // wait for render then scroll/expand
    setTimeout(() => {
      const target = $(`#faq-${itemId}`);
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const btn = target.querySelector('.faq-q');
      if (btn && !target.classList.contains('open')) btn.click();
      target.classList.add('highlight');
      setTimeout(() => target.classList.remove('highlight'), 2200);
    }, 200);
    $('#search-results')?.classList.remove('show');
    $('#search-input').value = '';
  }

  // ===== Init =====
  document.addEventListener('DOMContentLoaded', () => {
    // Nav
    $$('.nav-main a, [data-page-link]').forEach(a => {
      a.addEventListener('click', (e) => {
        const page = a.dataset.page || a.getAttribute('href')?.replace('#', '');
        if (page) {
          e.preventDefault();
          showPage(page);
        }
      });
    });

    // Lang switch
    $$('.lang-switch button').forEach(btn => {
      btn.addEventListener('click', () => {
        state.lang = btn.dataset.lang;
        applyLang();
      });
    });

    // Mobile menu toggle
    const toggle = $('.menu-toggle');
    const nav = $('.nav-main');
    if (toggle && nav) {
      toggle.addEventListener('click', () => nav.classList.toggle('open'));
    }

    // Hernia types: open relevant FAQ category
    document.addEventListener('click', (e) => {
      const card = e.target.closest('.hernia-card');
      if (card) {
        const id = card.dataset.type;
        state.cat = id;
        showPage('faq');
        renderFaqCategories();
        renderFaq();
        setTimeout(() => {
          const sec = $(`#cat-${id}`);
          if (sec) sec.scrollIntoView({ behavior:'smooth', block:'start' });
        }, 250);
      }
    });

    setupSearch();
    applyLang();
    showPage('home');
  });

})();
