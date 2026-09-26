/* =========================================================
   Erzeugt aus index.html eine eigene HTML-Datei pro Unterseite
   (z. B. leistenhernie.html, faq.html), damit Suchmaschinen
   jede Seite einzeln finden.

   WICHTIG: Inhalte nur in index.html bzw. js/… ändern und danach
   dieses Skript im Website-Ordner ausführen:

       node tools/build-pages.js

   Sobald die Seite eine feste Internetadresse hat, SITE_URL unten
   eintragen (z. B. 'https://beispiel.github.io/hernie/') und das
   Skript erneut ausführen. Dann werden zusätzlich canonical-Links,
   absolute Vorschaubilder, sitemap.xml und robots.txt erzeugt.
   ========================================================= */
const SITE_URL = '';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const read = (f) => fs.readFileSync(path.join(root, f), 'utf8');

// Seitenliste und FAQ-Daten aus den JS-Dateien laden
const sandbox = { window: {} };
vm.createContext(sandbox);
['js/pages.js', 'js/data-1.js', 'js/data-2.js'].forEach(f => vm.runInContext(read(f), sandbox, { filename: f }));
const PAGES = sandbox.window.OC_PAGES;
const FAQ = [...sandbox.window.FAQ_PART1, ...sandbox.window.FAQ_PART2];

const base = SITE_URL && (SITE_URL.endsWith('/') ? SITE_URL : SITE_URL + '/');
const abs = (file) => base + (file === 'index.html' ? '' : file);
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const stripHtml = (h) => h.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();

const GENERATED = '<!-- AUTOMATISCH ERZEUGT aus index.html mit "node tools/build-pages.js" – bitte nicht direkt bearbeiten. -->';
const MARK_START = '<!-- seo:start -->';
const MARK_END = '<!-- seo:end -->';

function replaceOnce(html, search, replacement, label) {
  if (!html.includes(search)) throw new Error('Nicht gefunden: ' + label);
  return html.replace(search, replacement);
}

function seoBlock(id, meta) {
  const lines = [];
  if (base) {
    lines.push(`<link rel="canonical" href="${abs(meta.file)}">`);
    lines.push(`<meta property="og:url" content="${abs(meta.file)}">`);
  }
  if (id === 'faq') {
    const faqLd = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: stripHtml(f.q.de),
        acceptedAnswer: { '@type': 'Answer', text: stripHtml(f.a.de) }
      }))
    };
    lines.push(`<script type="application/ld+json">${JSON.stringify(faqLd)}</script>`);
  }
  return `${MARK_START}\n  ${lines.join('\n  ')}\n  ${MARK_END}`;
}

function build(source, id) {
  const meta = PAGES[id];
  let html = source;

  // Alten SEO-Block (falls vorhanden) entfernen
  html = html.replace(new RegExp(`\\s*${MARK_START}[\\s\\S]*?${MARK_END}`), '');

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(meta.title)}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(meta.description)}">`);
  html = html.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${esc(meta.title)}">`);
  html = html.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${esc(meta.description)}">`);
  if (base) {
    html = html.replace(/<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${base}assets/og-image.jpg">`);
    html = html.replace(/"image": "[^"]*dr-osman\.jpg"/, `"image": "${base}assets/dr-osman.jpg"`);
  }
  html = html.replace('</head>', `  ${seoBlock(id, meta)}\n</head>`);

  if (id !== 'home') {
    // Richtige Seite ohne JavaScript sichtbar machen
    html = replaceOnce(html, '<section class="page active" id="page-home">', '<section class="page" id="page-home">', 'page-home');
    html = replaceOnce(html, `<section class="page" id="page-${id}">`, `<section class="page active" id="page-${id}">`, 'page-' + id);
    html = html.replace(/(<nav class="nav-main"[\s\S]*?<a href="index\.html" data-page="home") class="active"/, '$1');
    html = html.replace(new RegExp(`(<nav class="nav-main"[\\s\\S]*?<a href="${meta.file.replace('.', '\\.')}" data-page="${id}")`), '$1 class="active"');
    html = html.replace('<!DOCTYPE html>', `<!DOCTYPE html>\n${GENERATED}`);
  }
  return html;
}

const source = read('index.html');
let count = 0;
for (const id of Object.keys(PAGES)) {
  const out = build(source, id);
  fs.writeFileSync(path.join(root, PAGES[id].file), out);
  count++;
}

if (base) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = Object.values(PAGES).map(p => `  <url><loc>${abs(p.file)}</loc><lastmod>${today}</lastmod></url>`).join('\n');
  fs.writeFileSync(path.join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
  fs.writeFileSync(path.join(root, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${base}sitemap.xml\n`);
}

console.log(`${count} Seiten erzeugt${base ? ' + sitemap.xml + robots.txt' : ' (SITE_URL fehlt: keine sitemap.xml / canonical)'}.`);
