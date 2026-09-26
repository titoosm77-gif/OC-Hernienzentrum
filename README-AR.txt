ملفات موقع OC Hernienzentrum — النسخة الأحدث

طريقة الرفع على GitHub Pages:
1. فك ضغط الملف.
2. ارفع جميع الملفات والمجلدات الموجودة داخله إلى جذر مستودع GitHub.
3. من Settings > Pages اختر النشر من الفرع main ومن المجلد /(root).
4. تأكد من بقاء ملف index.html في الجذر.

تتضمن هذه النسخة آخر تعديلات البحث، المظهر، الأسئلة، ملفات التنزيل، واللغات الأربع.

----------------------------------------------------------------
تحديث سبتمبر 2026 / Update September 2026

• لكل صفحة فرعية الآن ملف HTML خاص بها (مثل leistenhernie.html و faq.html) حتى يجدها Google.
  هذه الملفات تُنشأ تلقائياً من index.html. بعد أي تعديل في index.html أو في ملفات js شغّل:
      node tools/build-pages.js
  ثم ارفع كل الملفات. لا تعدّل الملفات المنشأة مباشرة.

• Jede Unterseite hat jetzt eine eigene HTML-Datei (z. B. leistenhernie.html, faq.html).
  Diese Dateien werden automatisch aus index.html erzeugt. Nach jeder Änderung an
  index.html oder den js-Dateien bitte ausführen:
      node tools/build-pages.js
  Danach alle Dateien hochladen. Die erzeugten Dateien nicht direkt bearbeiten.

• Sobald die Seite eine feste Adresse hat, in tools/build-pages.js die Zeile
  SITE_URL = '' ausfüllen (z. B. 'https://name.github.io/hernie/') und das Skript
  erneut ausführen. Dann entstehen zusätzlich sitemap.xml und robots.txt.

• Schriften liegen im Ordner fonts/ (keine Verbindung zu Google mehr).
