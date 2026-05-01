# OC | OrthoChirurgie – Hernienzentrum Webapp

Eine statische Webanwendung für die Praxis OC | OrthoChirurgie (zertifiziertes Hernienzentrum, Ludwigshafen). Patientenaufklärung mit KI-gestütztem FAQ-Assistenten in 4 Sprachen.

---

## Features

- **Single-Page-App** – 6 Bereiche (Start, Über mich, Hernienarten, FAQ, Kontakt, Impressum)
- **105 FAQ-Einträge** in 7 Kategorien, vollständig medizinisch redigiert
- **4 Sprachen:** Deutsch, Englisch, Arabisch (RTL), Türkisch
- **Semantische Suche** mit Synonym-Wörterbuch und Levenshtein-Fuzzy-Matching – versteht Alltagssprache
- **Mobile-responsive** – optimiert für Smartphone, Tablet und Desktop
- **Direktwahl & Maps:** Click-to-call, Google-Maps-Verlinkung, mailto, QR-Code
- **Kein Backend** – läuft als reine HTML/CSS/JS-App auf jedem statischen Webserver
- **GitHub Pages-kompatibel** – sofort deploybar
- **DSGVO-freundlich** – keine externen Tracker, nur Google Fonts

---

## Projektstruktur

```
hernie-app/
├── index.html              Haupt-HTML mit allen 6 Sektionen
├── css/
│   └── style.css           Komplettes Designsystem (Tokens, Komponenten, RTL)
├── js/
│   ├── data-1.js           FAQ Teil 1 – „Allgemeine Informationen" (55 Einträge × 4 Sprachen)
│   ├── data-2.js           FAQ Teil 2 – Operation, Nachbehandlung, Hernientypen, Risiko (50 Einträge × 4 Sprachen)
│   ├── i18n.js             UI-Übersetzungen, Hernientypen-Daten, Synonym-Wörterbuch
│   └── app.js              Such-Engine, Navigation, Render-Logik, RTL-Handling
├── assets/
│   ├── logo.png            Praxis-Logo
│   ├── dr-osman.jpg        Porträt Dr. Osman
│   ├── dhg-siegel.jpg      DHG-Zertifizierungs-Siegel
│   ├── qrcode.png          QR-Code zur Praxis
│   └── surgery.jpg         (optionales Asset)
└── README.md               Diese Datei
```

---

## Lokal starten

```bash
# Mit Python 3 (am einfachsten)
python3 -m http.server 8000

# Oder mit Node
npx serve .
```

Anschließend `http://localhost:8000` im Browser öffnen.

> Nicht per Doppelklick (file://) öffnen – die App lädt JS-Dateien per relative Pfade, das funktioniert nur über einen HTTP-Server.

---

## Deployment auf GitHub Pages

1. Neues Repository auf GitHub erstellen, z. B. `hernienzentrum-webapp`
2. Diesen Ordner ins Repo pushen:
   ```bash
   git init
   git add .
   git commit -m "Initial deployment"
   git branch -M main
   git remote add origin https://github.com/<dein-user>/hernienzentrum-webapp.git
   git push -u origin main
   ```
3. Auf GitHub im Repository: **Settings → Pages**
4. Quelle: **Deploy from a branch**, Branch: `main`, Folder: `/ (root)`
5. Speichern. Nach 1–2 Minuten ist die Seite unter `https://<dein-user>.github.io/hernienzentrum-webapp/` verfügbar.

### Eigene Domain

Für eine Custom-Domain (z. B. `hernie.oc-orthochirurgie.com`) im Settings-Pages-Bereich die gewünschte Domain eintragen und beim DNS-Anbieter einen `CNAME`-Eintrag auf `<dein-user>.github.io` setzen.

---

## Inhalte pflegen

### FAQ-Eintrag hinzufügen

In `js/data-1.js` oder `js/data-2.js` ans passende Ende des `FAQ`-Arrays anhängen:

```js
{ id: 'op08', cat: 'operation',
  q:{ de:'Frage?', en:'Question?', ar:'سؤال؟', tr:'Soru?' },
  a:{
    de:'<p>Antwort.</p>',
    en:'<p>Answer.</p>',
    ar:'<p>إجابة.</p>',
    tr:'<p>Cevap.</p>'
  }
},
```

Wichtig: `id` muss eindeutig sein, `cat` muss einer der 7 Kategorien-IDs entsprechen.

### Synonym hinzufügen (verbessert die Suche)

In `js/i18n.js` ins `SYNONYMS`-Objekt:

```js
'reha': ['rehabilitation', 'kur', 'physiotherapie'],
```

### Übersetzung anpassen

UI-Strings in `js/i18n.js` im `I18N`-Objekt für die jeweilige Sprache.

### Telefonnummern / Adressen ändern

Direkt in `index.html` an den entsprechenden `<a href="tel:...">` und Adress-Stellen.

---

## Browser-Kompatibilität

Getestet auf aktuellen Versionen von Chrome, Firefox, Safari, Edge. Nutzt nur ES2017-Features (kein Build-Schritt nötig).

---

## Tech-Stack

- **HTML5** semantisch strukturiert
- **CSS3** mit Custom Properties (Design Tokens), CSS Grid, Flexbox
- **Vanilla JavaScript** – keine Frameworks, keine Build-Tools, keine Abhängigkeiten
- **Google Fonts:** Fraunces (Display, Italic), Manrope (Body), Noto Naskh Arabic (RTL)

---

## Lizenz / Hinweis

Inhalte dieser Webapp wurden für die Praxis OC | OrthoChirurgie erstellt. Die medizinischen Texte basieren auf aktuellen Leitlinien der Deutschen Herniengesellschaft (DHG). 

**Diese Informationen ersetzen keine ärztliche Beratung.**

---

## Kontakt

OC | OrthoChirurgie  
Berthold-Schwarz-Str. 26 · 67063 Ludwigshafen  
Tel.: 0621 53399050  
info@oc-orthochirurgie.com
