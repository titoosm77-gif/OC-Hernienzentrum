/* =========================================================
   FAQ Datenbank Teil 2 – DE / EN / AR / TR
   Operation, Nachbehandlung, Leisten-, Nabel-, Narbenhernie, Risiko
   ========================================================= */

const FAQ_PART2 = [

/* ===== FRAGEN ZUR OPERATION ===== */

{ id:'op01', cat:'operation',
  q:{ de:'Was passiert genau während der Operation?', en:'What exactly happens during surgery?', ar:'ماذا يحدث أثناء العملية؟', tr:'Ameliyatta ne olur?' },
  a:{
    de:'<p>Die Bruchpforte wird freigelegt, der Bruchinhalt wird zurück in den Bauchraum geschoben und die Lücke wird entweder mit Naht allein oder mit einem Netz verschlossen.</p>',
    en:'<p>The hernia opening is exposed, the contents are pushed back into the abdomen, and the defect is closed with sutures alone or a mesh.</p>',
    ar:'<p>تُكشف فتحة الفتق، يُدفع المحتوى إلى البطن، وتُغلق الفجوة بخياطة أو شبكة.</p>',
    tr:'<p>Fıtık kapısı açığa çıkarılır, içerik karın içine itilir ve defekt dikişle veya yamayla kapatılır.</p>'
  }},

{ id:'op02', cat:'operation',
  q:{ de:'Werde ich während der OP etwas spüren?', en:'Will I feel anything during surgery?', ar:'هل أشعر بشيء أثناء العملية؟', tr:'Ameliyatta bir şey hisseder miyim?' },
  a:{
    de:'<p>Nein. Bei Vollnarkose schlafen Sie tief und merken nichts. Bei Lokalanästhesie können Sie wach sein, merken aber nur Druck, keinen Schmerz.</p>',
    en:'<p>No. Under general anaesthesia you are deeply asleep and feel nothing. Under local anaesthesia you may be awake but only feel pressure, no pain.</p>',
    ar:'<p>لا. تحت التخدير العام تنام بعمق. تحت الموضعي قد تكون مستيقظاً لكن تشعر بالضغط فقط دون ألم.</p>',
    tr:'<p>Hayır. Genel anestezide derin uyursunuz. Lokalde uyanık olabilirsiniz ama sadece basınç hissedersiniz.</p>'
  }},

{ id:'op03', cat:'operation',
  q:{ de:'Kann die laparoskopische OP auf eine offene umgestellt werden?', en:'Can laparoscopic surgery be converted to open?', ar:'هل يمكن تحويل العملية المنظارية إلى مفتوحة؟', tr:'Laparoskopik açığa dönüştürülebilir mi?' },
  a:{
    de:'<p>Ja, in seltenen Fällen (z. B. bei Verwachsungen oder Komplikationen) kann der Chirurg intraoperativ zur offenen Methode wechseln. Dies ist <strong>keine Komplikation, sondern eine Sicherheitsentscheidung</strong>.</p>',
    en:'<p>Yes, rarely (e.g. adhesions or complications) the surgeon may convert to open. This is <strong>not a complication but a safety decision</strong>.</p>',
    ar:'<p>نعم، نادراً قد يحوّل الجراح إلى عملية مفتوحة. هذا <strong>قرار أمان وليس مضاعفة</strong>.</p>',
    tr:'<p>Evet, nadiren cerrah açık cerrahiye dönebilir. Bu <strong>komplikasyon değil, güvenlik kararıdır</strong>.</p>'
  }},

{ id:'op04', cat:'operation',
  q:{ de:'Werden bei der OP Drainagen gelegt?', en:'Are drains placed during surgery?', ar:'هل توضع قساطر تصريف؟', tr:'Dren yerleştirilir mi?' },
  a:{
    de:'<p>Selten und nur bei großen Hernien oder wenn viel Wundflüssigkeit erwartet wird. Die meisten einfachen Hernienoperationen kommen ohne Drainage aus.</p>',
    en:'<p>Rarely — only for large hernias or when significant wound fluid is expected. Most simple hernia operations are done without drainage.</p>',
    ar:'<p>نادراً — فقط للفتوق الكبيرة. معظم العمليات البسيطة بدون تصريف.</p>',
    tr:'<p>Nadiren — sadece büyük fıtıklarda. Basit ameliyatların çoğu drensiz.</p>'
  }},

{ id:'op05', cat:'operation',
  q:{ de:'Was für Nähte werden verwendet? Müssen die gezogen werden?', en:'What sutures are used? Removed?', ar:'ما الخيوط؟ هل تُزال؟', tr:'Hangi dikişler? Alınır mı?' },
  a:{
    de:'<p>Meist werden <strong>selbstauflösende (resorbierbare)</strong> Nähte verwendet – diese müssen nicht gezogen werden. Manchmal werden Klammern oder nicht-resorbierbare Fäden eingesetzt, die nach <strong>12–14 Tagen</strong> entfernt werden.</p>',
    en:'<p>Usually <strong>absorbable</strong> sutures — no removal. Sometimes staples or non-absorbable sutures, removed after <strong>12–14 days</strong>.</p>',
    ar:'<p>عادةً <strong>خيوط ذاتية الذوبان</strong>. أحياناً دبابيس أو خيوط غير ذائبة، تُزال بعد <strong>12–14 يوماً</strong>.</p>',
    tr:'<p>Genellikle <strong>emilebilir</strong> dikişler. Bazen zımba/emilemeyen dikiş, <strong>12–14 gün</strong> sonra alınır.</p>'
  }},

{ id:'op06', cat:'operation',
  q:{ de:'Gibt es Operationsrisiken?', en:'Are there surgical risks?', ar:'هل توجد مخاطر للعملية؟', tr:'Ameliyat riskleri var mı?' },
  a:{
    de:'<p>Wie bei jeder OP gibt es allgemeine und spezifische Risiken: Wundinfektion, Blutung oder Nachblutung, Thrombose, Embolie, Rezidiv, chronische Schmerzen, Verletzungen von Nachbarstrukturen (Samenstrang, Hoden, Nerven, Blutgefäße), Darmverletzung.</p>',
    en:'<p>As with any operation: wound infection, bleeding, thrombosis, embolism, recurrence, chronic pain, injuries to adjacent structures (spermatic cord, testicle, nerves, vessels), bowel injury.</p>',
    ar:'<p>كأي عملية: عدوى، نزيف، تجلط، انسداد رئوي، ارتجاع، ألم مزمن، إصابة هياكل مجاورة، إصابة الأمعاء.</p>',
    tr:'<p>Her ameliyatta olduğu gibi: yara enfeksiyonu, kanama, tromboz, emboli, nüks, kronik ağrı, komşu yapı yaralanmaları, bağırsak yaralanması.</p>'
  }},

{ id:'op07', cat:'operation',
  q:{ de:'Wie hoch ist das Rückfallrisiko (Rezidiv)?', en:'What is the recurrence risk?', ar:'ما خطر الارتجاع؟', tr:'Nüks riski nedir?' },
  a:{
    de:'<ul><li>Mit Netz: ca. 1–5 %</li><li>Ohne Netz: ca. 5–15 %</li><li>Bei Narbenhernien mit Netz: ca. 5–10 %</li></ul>',
    en:'<ul><li>With mesh: ~1–5 %</li><li>Without mesh: ~5–15 %</li><li>Incisional hernias with mesh: ~5–10 %</li></ul>',
    ar:'<ul><li>مع شبكة: 1–5%</li><li>بدون شبكة: 5–15%</li><li>الفتق الندبي مع شبكة: 5–10%</li></ul>',
    tr:'<ul><li>Yamalı: ~%1–5</li><li>Yamasız: ~%5–15</li><li>Yamalı insizyonel: ~%5–10</li></ul>'
  }},

/* ===== FRAGEN ZUR NACHBEHANDLUNG ===== */

{ id:'n01', cat:'nachbehandlung',
  q:{ de:'Was passiert direkt nach der OP im Aufwachraum?', en:'What happens in the recovery room?', ar:'ماذا في غرفة الإفاقة؟', tr:'Uyanma odasında ne olur?' },
  a:{
    de:'<p>Sie werden von Pflegepersonal überwacht, bis Sie vollständig wach sind, die Vitalwerte stabil und die Schmerzen kontrolliert sind. Dann werden Sie auf die Station oder zur Entlassung vorbereitet.</p>',
    en:'<p>Nursing staff monitor you until you are fully awake, vitals are stable and pain is controlled. Then you are transferred to a ward or prepared for discharge.</p>',
    ar:'<p>يراقبك الطاقم حتى تستيقظ تماماً وتستقر علاماتك الحيوية. ثم تُنقل إلى القسم أو للخروج.</p>',
    tr:'<p>Tam uyanana, vital bulgular stabilleşene dek izlenirsiniz. Sonra servise/taburculuğa hazırlanırsınız.</p>'
  }},

{ id:'n02', cat:'nachbehandlung',
  q:{ de:'Wie stark sind die Schmerzen nach der OP?', en:'How severe is post-op pain?', ar:'كم تكون الآلام بعد العملية؟', tr:'Ameliyat sonrası ağrı?' },
  a:{
    de:'<p>Die meisten Patienten beschreiben die Schmerzen als <strong>moderat und gut beherrschbar</strong>. Sie werden mit Schmerzmitteln (Ibuprofen, Novalgin, ggf. stärkere Mittel) gut eingestellt. Laparoskopische OPs verursachen in der Regel weniger Schmerzen als offene Eingriffe.</p>',
    en:'<p>Most patients describe pain as <strong>moderate and well controllable</strong> with analgesics (ibuprofen, metamizole). Laparoscopic surgery usually causes less pain than open.</p>',
    ar:'<p>معظم المرضى يصفون الألم بأنه <strong>متوسط وقابل للتحكم</strong> بالمسكنات. الجراحة المنظارية أقل إيلاماً.</p>',
    tr:'<p>Hastaların çoğu ağrıyı <strong>orta ve iyi kontrol edilebilir</strong> bulur. Laparoskopik genellikle açıktan az ağrılı.</p>'
  }},

{ id:'n03', cat:'nachbehandlung',
  q:{ de:'Wie lange muss ich nach der Operation bleiben?', en:'How long do I have to stay?', ar:'كم سأبقى؟', tr:'Ne kadar kalırım?' },
  a:{
    de:'<ul><li><strong>Ambulant:</strong> Entlassung am gleichen Tag (nach ca. 2–4 Stunden)</li><li><strong>Stationär:</strong> meist 1 Tag, bei großen Narbenhernien ggf. 2–3 Tage</li></ul>',
    en:'<ul><li><strong>Outpatient:</strong> discharge same day (after ~2–4 hours)</li><li><strong>Inpatient:</strong> usually 1 day; large incisional hernias 2–3 days</li></ul>',
    ar:'<ul><li><strong>نهاري:</strong> الخروج نفس اليوم (بعد 2–4 ساعات)</li><li><strong>داخلي:</strong> عادةً يوم، للفتوق الندبية الكبيرة 2–3 أيام</li></ul>',
    tr:'<ul><li><strong>Ayakta:</strong> aynı gün (2–4 saat sonra)</li><li><strong>Yatarak:</strong> genellikle 1 gün, büyük insizyonelde 2–3 gün</li></ul>'
  }},

{ id:'n04', cat:'nachbehandlung',
  q:{ de:'Was darf ich in den ersten Tagen nach der OP essen und trinken?', en:'What can I eat in the first days?', ar:'ماذا آكل في الأيام الأولى؟', tr:'İlk günlerde ne yiyebilirim?' },
  a:{
    de:'<p>Schon am OP-Tag dürfen Sie trinken, sobald Sie vollständig wach sind. Leichte Kost (Suppe, Toast, Joghurt) ist anfangs empfehlenswert. Am nächsten Tag normale Ernährung möglich.</p>',
    en:'<p>You may drink on the day of surgery as soon as you are fully awake. Light food (soup, toast, yoghurt) at first. Normal diet next day.</p>',
    ar:'<p>يمكنك الشرب يوم العملية بمجرد الاستيقاظ. طعام خفيف أولاً. اليوم التالي أكل عادي.</p>',
    tr:'<p>Ameliyat günü tam uyanır uyanmaz içebilirsiniz. Önce hafif yemek. Ertesi gün normal beslenme.</p>'
  }},

{ id:'n05', cat:'nachbehandlung',
  q:{ de:'Wie soll ich die Wunde pflegen?', en:'How should I care for the wound?', ar:'كيف أعتني بالجرح؟', tr:'Yarayı nasıl bakım yapmalıyım?' },
  a:{
    de:'<ul><li>Wundverband spätestens alle 2 Tage wechseln oder nach Anweisung</li><li>In den ersten 3–4 Tagen die Wunde 4–5×/Tag jeweils 10–15 Minuten kühlen</li><li>Wunde trocken halten (kein Baden, Schwimmen) bis zur Abheilung (ca. 2 Wochen)</li><li>Duschen ab dem 2. Tag erlaubt (kurz, Wunde nicht direkt nass machen)</li><li>Rötung, Schwellung, Eiter → <strong>Arzt aufsuchen!</strong></li></ul>',
    en:'<ul><li>Change dressing every 2 days or as instructed</li><li>First 3–4 days: cool wound 4–5×/day for 10–15 min</li><li>Keep wound dry (no baths/swimming) until healed (~2 weeks)</li><li>Showering from day 2 (briefly)</li><li>Redness, swelling, pus → <strong>see your doctor!</strong></li></ul>',
    ar:'<ul><li>غيّر الضمادة كل يومين</li><li>أول 3–4 أيام: تبريد 4–5 مرات/يوم لـ10–15 دقيقة</li><li>أبقِ الجرح جافاً حتى الشفاء</li><li>الاستحمام من اليوم الثاني</li><li>احمرار، تورم، صديد ← <strong>راجع الطبيب!</strong></li></ul>',
    tr:'<ul><li>Pansumanı 2 günde bir değiştirin</li><li>İlk 3–4 günde günde 4–5 kez 10–15 dk soğutun</li><li>İyileşene dek yarayı kuru tutun</li><li>2. günden itibaren duş</li><li>Kızarıklık, şişlik, irin → <strong>doktora!</strong></li></ul>'
  }},

{ id:'n06', cat:'nachbehandlung',
  q:{ de:'Wann werden die Fäden/Klammern gezogen?', en:'When are sutures/staples removed?', ar:'متى تُزال الخيوط/الدبابيس؟', tr:'Dikişler/zımbalar ne zaman alınır?' },
  a:{
    de:'<p>Bei resorbierbaren Fäden: nicht nötig. Bei nicht-resorbierbaren Fäden oder Klammern: nach <strong>12–14 Tagen</strong> beim Hausarzt oder bei uns in der Praxis.</p>',
    en:'<p>Absorbable: not needed. Non-absorbable or staples: after <strong>12–14 days</strong> at GP or our practice.</p>',
    ar:'<p>الذائبة: لا حاجة. غير الذائبة/الدبابيس: بعد <strong>12–14 يوماً</strong>.</p>',
    tr:'<p>Emilebilir: gerekmez. Emilemeyen/zımba: <strong>12–14 gün</strong> sonra.</p>'
  }},

{ id:'n07', cat:'nachbehandlung',
  q:{ de:'Wann kann ich wieder Auto fahren?', en:'When can I drive again?', ar:'متى أقود مجدداً؟', tr:'Ne zaman araba kullanabilirim?' },
  a:{
    de:'<p>Nach Vollnarkose: frühestens 24 Stunden, besser 48 Stunden. Sobald Sie wieder voll reaktionsfähig sind und keine Schmerzmittel nehmen, die die Fahrtüchtigkeit beeinflussen – das dauert meist <strong>3–7 Tage</strong>.</p>',
    en:'<p>After general anaesthesia: at least 24 h, better 48. Once fully reactive and off driving-impairing painkillers — usually <strong>3–7 days</strong>.</p>',
    ar:'<p>بعد التخدير العام: 24 ساعة، يفضل 48. عند كامل الانتباه — عادةً <strong>3–7 أيام</strong>.</p>',
    tr:'<p>Genel anestezi sonrası: en az 24, daha iyi 48 saat. Tam reaksiyon ve sürüşü etkilemeyen ilaçla — <strong>3–7 gün</strong>.</p>'
  }},

{ id:'n08', cat:'nachbehandlung',
  q:{ de:'Wann kann ich wieder arbeiten?', en:'When can I return to work?', ar:'متى أعود للعمل؟', tr:'Ne zaman işe dönerim?' },
  a:{
    de:'<ul><li>Bürotätigkeit: nach ca. 1–2 Wochen</li><li>Leichte körperliche Arbeit: nach 2–4 Wochen</li><li>Schwere körperliche Arbeit: nach 4–6 Wochen, manchmal länger</li></ul>',
    en:'<ul><li>Office work: ~1–2 weeks</li><li>Light physical: 2–4 weeks</li><li>Heavy physical: 4–6 weeks, sometimes more</li></ul>',
    ar:'<ul><li>عمل مكتبي: 1–2 أسبوع</li><li>جسدي خفيف: 2–4 أسابيع</li><li>جسدي ثقيل: 4–6 أسابيع</li></ul>',
    tr:'<ul><li>Ofis: ~1–2 hafta</li><li>Hafif fiziksel: 2–4 hafta</li><li>Ağır fiziksel: 4–6 hafta</li></ul>'
  }},

{ id:'n09', cat:'nachbehandlung',
  q:{ de:'Wann darf ich wieder Sport treiben?', en:'When can I exercise again?', ar:'متى أعود للرياضة؟', tr:'Ne zaman spor yapabilirim?' },
  a:{
    de:'<ul><li>Spazierengehen: nach 3 Tagen</li><li>Leichter Sport (Schwimmen, Radfahren): nach 4 Wochen</li><li>Fitnessstudio, Kraftsport, Kampfsport: nach 6–8 Wochen, nach Rücksprache mit dem Chirurgen</li></ul>',
    en:'<ul><li>Walking: after 3 days</li><li>Light sports (swimming, cycling): after 4 weeks</li><li>Gym, weights, martial arts: after 6–8 weeks (consult surgeon)</li></ul>',
    ar:'<ul><li>المشي: بعد 3 أيام</li><li>رياضة خفيفة: بعد 4 أسابيع</li><li>صالة، أثقال، فنون قتالية: 6–8 أسابيع</li></ul>',
    tr:'<ul><li>Yürüyüş: 3 gün sonra</li><li>Hafif spor: 4 hafta sonra</li><li>Salon, ağırlık, dövüş: 6–8 hafta sonra</li></ul>'
  }},

{ id:'n10', cat:'nachbehandlung',
  q:{ de:'Wie schwer darf ich heben nach der OP?', en:'How heavy may I lift?', ar:'كم وزن يمكنني رفعه؟', tr:'Ne kadar ağırlık kaldırabilirim?' },
  a:{
    de:'<p>In den ersten 2 Wochen: maximal <strong>2–5 kg</strong>. In den Wochen 3–4 langsam steigern, aber nicht mehr als <strong>10 kg</strong>. Nach 6 Wochen bei unkompliziertem Verlauf wieder normales Heben möglich – immer mit Bauchspannung und richtiger Hebetechnik!</p>',
    en:'<p>First 2 weeks: max <strong>2–5 kg</strong>. Weeks 3–4: gradually up to <strong>10 kg</strong>. After 6 weeks: normal lifting — always with abdominal bracing and proper technique!</p>',
    ar:'<p>أول أسبوعين: <strong>2–5 كغ</strong>. الأسبوع 3–4: حتى <strong>10 كغ</strong>. بعد 6 أسابيع رفع عادي مع شد البطن.</p>',
    tr:'<p>İlk 2 hafta: en fazla <strong>2–5 kg</strong>. 3–4. hafta: <strong>10 kg</strong>\'a kadar. 6 haftadan sonra normal — daima karın gerilimiyle!</p>'
  }},

{ id:'n11', cat:'nachbehandlung',
  q:{ de:'Wann darf ich wieder Geschlechtsverkehr haben?', en:'When can I have sex again?', ar:'متى أعود للعلاقة؟', tr:'Cinsel ilişkiye ne zaman?' },
  a:{
    de:'<p>Nach einer unkomplizierten Hernienoperation meist nach <strong>1–2 Wochen</strong>, wenn Sie schmerzfrei sind. Bei Leistenhernien etwas vorsichtiger. Fragen Sie Ihren Arzt.</p>',
    en:'<p>After uncomplicated surgery usually after <strong>1–2 weeks</strong>, once pain-free. With inguinal hernias more cautiously. Ask your doctor.</p>',
    ar:'<p>عادةً بعد <strong>1–2 أسبوع</strong> عند زوال الألم. مع الأربي بحذر أكثر.</p>',
    tr:'<p>Komplikasyonsuzda genellikle <strong>1–2 hafta</strong>, ağrı geçince. Kasık fıtığında daha dikkatli.</p>'
  }},

{ id:'n12', cat:'nachbehandlung',
  q:{ de:'Ist Schwellung und Bluterguss nach der OP normal?', en:'Is swelling and bruising normal?', ar:'هل التورم والكدمات طبيعية؟', tr:'Şişlik ve morarma normal mi?' },
  a:{
    de:'<p>Ja, vollkommen normal. Leichte bis mittlere Schwellungen und Blutergüsse im Operationsgebiet sind in den ersten 1–2 Wochen normal und klingen von selbst ab. Coolpacks im Tuch und eng anliegende Unterhosen wirken unterstützend.</p>',
    en:'<p>Yes, completely normal. Mild to moderate swelling and bruising are common in the first 1–2 weeks and resolve on their own. Cool packs (in a cloth) and tight briefs help.</p>',
    ar:'<p>نعم، طبيعي تماماً. تورم وكدمات شائعة في 1–2 أسبوع وتختفي تلقائياً. الكمادات الباردة والملابس الضيقة تساعد.</p>',
    tr:'<p>Evet, tamamen normaldir. Hafif-orta şişlik/morarma 1–2 haftada yaygındır ve geçer. Soğuk paketler ve dar iç çamaşırı yardımcı olur.</p>'
  }},

{ id:'n13', cat:'nachbehandlung',
  q:{ de:'Was ist ein Serom und ist das gefährlich?', en:'What is a seroma — is it dangerous?', ar:'ما السيروما؟', tr:'Serom nedir?' },
  a:{
    de:'<p>Ein Serom ist eine Ansammlung von Wundflüssigkeit unter der Haut. Es fühlt sich wie eine weiche Schwellung an. Meist bildet es sich von alleine zurück. Selten muss es punktiert werden.</p>',
    en:'<p>A seroma is a collection of wound fluid beneath the skin, felt as a soft swelling. Usually resolves spontaneously; rarely needs aspiration.</p>',
    ar:'<p>السيروما تجمع سائل تحت الجلد، انتفاخ ناعم. عادةً يزول تلقائياً.</p>',
    tr:'<p>Serom, deri altındaki yara sıvısı birikimidir; yumuşak şişlik. Genellikle kendiliğinden geçer.</p>'
  }},

{ id:'n14', cat:'nachbehandlung',
  q:{ de:'Ist es normal, wenn ich Taubheitsgefühl habe?', en:'Is numbness normal?', ar:'هل الخدر طبيعي؟', tr:'Uyuşma normal mi?' },
  a:{
    de:'<p>Ja, das ist häufig und durch Nervenreizung beim Eingriff bedingt. Diese Missempfindungen (Taubheit, Kribbeln, Brennen) verschwinden meist innerhalb von Wochen bis Monaten. In seltenen Fällen können sie länger andauern.</p>',
    en:'<p>Yes, common and due to nerve irritation. Numbness, tingling, burning usually disappear within weeks to months. Rarely persist longer.</p>',
    ar:'<p>نعم، شائع بسبب تهيج الأعصاب. تختفي خلال أسابيع إلى أشهر.</p>',
    tr:'<p>Evet, yaygın; sinir tahrişine bağlı. Genellikle haftalar-aylar içinde geçer.</p>'
  }},

{ id:'n15', cat:'nachbehandlung',
  q:{ de:'Wann muss ich nach der OP dringend meinen Chirurg/Arzt kontaktieren?', en:'When to urgently contact the doctor?', ar:'متى أتواصل عاجلاً؟', tr:'Ne zaman acilen aramalıyım?' },
  a:{
    de:'<ul><li>Starker, zunehmender Schmerz</li><li>Hohes Fieber (&gt; 38,5 °C)</li><li>Wundöffnung, Eiter, starke Rötung oder Nachblutung</li><li>Mehrfache Übelkeit, Erbrechen, kein Stuhlgang</li><li>Beinschwellung mit Wadenschmerzen (Thrombose-Verdacht)</li><li>Schwierigkeiten beim Atmen</li></ul>',
    en:'<ul><li>Severe or worsening pain</li><li>High fever (&gt; 38.5 °C)</li><li>Wound opening, pus, marked redness or bleeding</li><li>Repeated nausea, vomiting, no bowel movement</li><li>Leg swelling with calf pain (suspected thrombosis)</li><li>Breathing difficulty</li></ul>',
    ar:'<ul><li>ألم شديد متزايد</li><li>حمى عالية (&gt; 38.5 °م)</li><li>انفتاح جرح، صديد، نزيف</li><li>غثيان وقيء متكرر</li><li>تورم ساق مع ألم</li><li>صعوبة تنفس</li></ul>',
    tr:'<ul><li>Şiddetli/artan ağrı</li><li>Yüksek ateş (&gt; 38,5 °C)</li><li>Yara açılması, irin, kanama</li><li>Tekrarlayan kusma</li><li>Bacakta şişlik ve baldır ağrısı</li><li>Nefes darlığı</li></ul>'
  }},

{ id:'n16', cat:'nachbehandlung',
  q:{ de:'Brauche ich eine Thromboseprophylaxe?', en:'Do I need thrombosis prophylaxis?', ar:'هل أحتاج وقاية من الجلطات؟', tr:'Tromboz profilaksisi gerekir mi?' },
  a:{
    de:'<p>Bei ambulanten Eingriffen und erlaubter Frühmobilisation entfällt die Thromboseprophylaxe bei jungen und gesunden Patienten. Stationäre Patienten erhalten eine Bauchspritze während ihres Aufenthalts.</p>',
    en:'<p>For outpatient surgery with early mobilisation, prophylaxis is omitted in young, healthy patients. Inpatients receive a heparin injection.</p>',
    ar:'<p>في النهارية مع الحركة المبكرة، لا تُعطى للشباب الأصحاء. الداخليون يحصلون على حقنة في البطن.</p>',
    tr:'<p>Erken mobilizasyonlu ayakta ameliyatta genç-sağlıklılarda yapılmaz. Yatanlar heparin alır.</p>'
  }},

{ id:'n17', cat:'nachbehandlung',
  q:{ de:'Können nach der OP Thrombosen entstehen?', en:'Can thrombosis occur after surgery?', ar:'هل تحدث جلطات بعد العملية؟', tr:'Tromboz oluşabilir mi?' },
  a:{
    de:'<p>Ja, das Risiko besteht. Deshalb werden bei höherem Risiko Heparinspritzen und Kompressionsstrümpfe verordnet, und frühes Aufstehen und Bewegen wird empfohlen.</p>',
    en:'<p>Yes, risk exists. For higher risk: heparin injections, compression stockings, early ambulation.</p>',
    ar:'<p>نعم. للحالات عالية الخطورة: حقن هيبارين، جوارب ضاغطة، حركة مبكرة.</p>',
    tr:'<p>Evet. Yüksek riskte heparin, kompresyon çorabı, erken hareket.</p>'
  }},

{ id:'n18', cat:'nachbehandlung',
  q:{ de:'Wie lange muss ich Schmerzmittel nehmen?', en:'How long do I need painkillers?', ar:'كم مدة المسكنات؟', tr:'Ne kadar süre ağrı kesici?' },
  a:{
    de:'<p>Meist 2–5 Tage nach der OP. Die meisten Patienten kommen gut mit Ibuprofen 600 mg oder Novalgin 500–1000 mg aus. Stärkere Schmerzmittel nur auf ärztliche Verordnung.</p>',
    en:'<p>Usually 2–5 days. Most patients manage with ibuprofen 600 mg or metamizole 500–1000 mg. Stronger painkillers only on prescription.</p>',
    ar:'<p>عادةً 2–5 أيام. معظم المرضى مع إيبوبروفين 600 ملغ أو نوفالجين 500–1000 ملغ.</p>',
    tr:'<p>Genellikle 2–5 gün. Çoğu hasta ibuprofen 600 mg veya metamizol 500–1000 mg ile yeterli.</p>'
  }},

{ id:'n19', cat:'nachbehandlung',
  q:{ de:'Wie oft muss ich Ibuprofen 600 mg nehmen?', en:'How often should I take Ibuprofen 600 mg?', ar:'كم مرة إيبوبروفين 600 ملغ؟', tr:'İbuprofen 600 mg ne sıklıkta?' },
  a:{
    de:'<p>Dreimal täglich einnehmen, nicht auf nüchternen Magen – außer anders vom Arzt verordnet.</p>',
    en:'<p>Three times daily, not on an empty stomach — unless otherwise prescribed.</p>',
    ar:'<p>ثلاث مرات يومياً، ليس على معدة فارغة.</p>',
    tr:'<p>Günde 3 kez, aç karnına değil — doktor aksini söylemediyse.</p>'
  }},

{ id:'n20', cat:'nachbehandlung',
  q:{ de:'Wie oft muss ich Novalgin 500 mg nehmen?', en:'How often should I take Novalgin 500 mg?', ar:'كم مرة نوفالجين 500 ملغ؟', tr:'Novalgin 500 mg ne sıklıkta?' },
  a:{
    de:'<p>Täglich viermal 1–2 Tabletten gemäß ärztlicher Anweisung einnehmen.</p>',
    en:'<p>Four times daily, 1–2 tablets, as prescribed.</p>',
    ar:'<p>أربع مرات يومياً 1–2 حبة حسب التعليمات.</p>',
    tr:'<p>Günde 4 kez, 1–2 tablet, talimatlara göre.</p>'
  }},

{ id:'n21', cat:'nachbehandlung',
  q:{ de:'Brauche ich nach der OP eine Bauchbinde?', en:'Do I need an abdominal binder?', ar:'هل أحتاج حزام بطن؟', tr:'Karın korsesi gerekir mi?' },
  a:{
    de:'<p>Manchmal ja, besonders nach großen Nabelhernien- oder Narbenhernienoperationen. Eine Bauchbinde kann den Heilungsprozess unterstützen und Schmerzen lindern. Die Bauchbinde sollte in den ersten 2 Wochen durchgehend (Tag und Nacht) getragen werden, anschließend für weitere zwei Wochen nur tagsüber.</p>',
    en:'<p>Sometimes yes, especially after large umbilical or incisional hernia operations. It supports healing and reduces pain. Wear continuously (day and night) for the first 2 weeks, then daytime only for another 2 weeks.</p>',
    ar:'<p>أحياناً نعم، خاصة بعد عمليات الفتق السري أو الندبي الكبيرة. يدعم الشفاء ويقلل الألم. ارتدِه باستمرار أول أسبوعين، ثم نهاراً فقط أسبوعين آخرين.</p>',
    tr:'<p>Bazen evet, özellikle büyük göbek/insizyonel ameliyatlardan sonra. İyileşmeyi destekler. İlk 2 hafta sürekli, sonraki 2 hafta sadece gündüz.</p>'
  }},

{ id:'n22', cat:'nachbehandlung',
  q:{ de:'Wann wird die Wunde vollständig verheilt sein?', en:'When will the wound be fully healed?', ar:'متى يلتئم الجرح تماماً؟', tr:'Yara ne zaman tamamen iyileşir?' },
  a:{
    de:'<p>Die Hautwunde heilt in ca. 2–3 Wochen. Die vollständige innere Heilung (Einwachsen des Netzes, Bindegewebsreparatur) dauert <strong>3–6 Monate</strong>.</p>',
    en:'<p>The skin wound heals in ~2–3 weeks. Full internal healing (mesh ingrowth, connective tissue repair) takes <strong>3–6 months</strong>.</p>',
    ar:'<p>جرح الجلد يلتئم في 2–3 أسابيع. الشفاء الداخلي الكامل <strong>3–6 أشهر</strong>.</p>',
    tr:'<p>Cilt yarası ~2–3 haftada iyileşir. Tam iç iyileşme (yama uyumu) <strong>3–6 ay</strong>.</p>'
  }},

{ id:'n23', cat:'nachbehandlung',
  q:{ de:'Kann ich die Narbe eincremen?', en:'Can I apply cream to the scar?', ar:'هل أضع كريم على الندبة؟', tr:'İze krem sürebilir miyim?' },
  a:{
    de:'<p>Ab der vollständigen Wundheilung (ca. 2–3 Wochen) kann die Narbe mit speziellen Narbenpflegecremes oder -gelen (z. B. Contractubex, Bepanthen Narbe) behandelt werden.</p>',
    en:'<p>From full wound healing (~2–3 weeks) you may use special scar creams or gels (e.g. Contractubex, Bepanthen Scar).</p>',
    ar:'<p>بعد الشفاء التام (2–3 أسابيع) يمكن استخدام كريمات خاصة (مثل Contractubex).</p>',
    tr:'<p>Tam iyileşmeden sonra (~2–3 hafta) özel iz kremleri kullanılabilir (Contractubex vb.).</p>'
  }},

/* ===== FRAGEN ZUR LEISTENHERNIE ===== */

{ id:'l01', cat:'leistenhernie',
  q:{ de:'Warum sind Leistenhernien bei Männern häufiger?', en:'Why are inguinal hernias more common in men?', ar:'لماذا الفتق الأربي أكثر شيوعاً عند الرجال؟', tr:'Kasık fıtığı neden erkeklerde daha sık?' },
  a:{
    de:'<p>Beim Mann verläuft der Samenstrang durch den Leistenkanal – diese natürliche Schwachstelle in der Bauchwand macht Männer anfälliger. Bei Frauen sind Leistenhernien seltener, aber möglich.</p>',
    en:'<p>In men the spermatic cord runs through the inguinal canal — this natural weak spot makes men more susceptible. In women inguinal hernias are rarer but possible.</p>',
    ar:'<p>عند الرجل يمر الحبل المنوي عبر القناة الأربية — نقطة ضعف طبيعية. عند النساء أقل لكنه ممكن.</p>',
    tr:'<p>Erkeklerde sperm kordonu kasık kanalından geçer — doğal zayıf nokta. Kadınlarda daha nadirdir ama olabilir.</p>'
  }},

{ id:'l02', cat:'leistenhernie',
  q:{ de:'Kann eine Leistenhernie den Hoden schädigen?', en:'Can an inguinal hernia damage the testicle?', ar:'هل يضر الفتق الأربي الخصية؟', tr:'Kasık fıtığı testise zarar verir mi?' },
  a:{
    de:'<p>Ja, wenn der Hoden in der eingeklemmten Hernie eingeschlossen wird, kann die Blutversorgung unterbrochen werden → <strong>Hodenabsterben!</strong> Deshalb sind Einklemmungen sofort operationspflichtig.</p>',
    en:'<p>Yes — if the testicle is trapped in an incarcerated hernia, blood supply may be cut off → <strong>testicular necrosis!</strong> Incarcerations require immediate surgery.</p>',
    ar:'<p>نعم — عند انحباس الخصية ينقطع الدم ← <strong>موت الخصية!</strong> لذا الانحباس يتطلب عملية فورية.</p>',
    tr:'<p>Evet — testis sıkışırsa kan akımı kesilebilir → <strong>testis nekrozu!</strong> Boğulma derhal ameliyat gerektirir.</p>'
  }},

{ id:'l03', cat:'leistenhernie',
  q:{ de:'Kann ich nach einer Leistenhernie-OP noch Kinder bekommen?', en:'Can I still have children after inguinal hernia surgery?', ar:'هل يمكنني الإنجاب بعد العملية؟', tr:'Ameliyat sonrası çocuk sahibi olabilir miyim?' },
  a:{
    de:'<p>Bei Männern: Bei der OP kann der Samenstrang verletzt werden, was in sehr seltenen Fällen die Zeugungsfähigkeit beeinträchtigen kann. Bei sachgemäßer Operationstechnik ist das Risiko sehr gering. Sprechen Sie Ihren Wunsch nach Kindern vor der OP an.</p>',
    en:'<p>For men: the spermatic cord can be injured during surgery, which very rarely affects fertility. With proper technique the risk is very low. Discuss your wish for children before surgery.</p>',
    ar:'<p>عند الرجال: قد يُصاب الحبل المنوي نادراً جداً مما يؤثر على الخصوبة. مع تقنية صحيحة الخطر منخفض جداً. ناقش رغبتك في الإنجاب قبل العملية.</p>',
    tr:'<p>Erkeklerde: sperm kordonu zarar görebilir, bu çok nadir doğurganlığı etkiler. Doğru teknikle risk çok düşük. Çocuk isteğinizi ameliyat öncesi konuşun.</p>'
  }},

{ id:'l04', cat:'leistenhernie',
  q:{ de:'Können Leistenhernien auf beiden Seiten gleichzeitig operiert werden?', en:'Can bilateral inguinal hernias be operated together?', ar:'هل يمكن عملية الفتق الأربي الثنائي معاً؟', tr:'İki taraflı kasık fıtığı birlikte ameliyat edilir mi?' },
  a:{
    de:'<p>Ja! Laparoskopisch ist die beidseitige Operation mit denselben 3 Zugängen möglich – kein Nachteil für den Patienten, aber klarer Vorteil (eine Narkose, eine Rehabilitationsphase).</p>',
    en:'<p>Yes! Laparoscopically, bilateral surgery is possible through the same 3 ports — no disadvantage but clear benefit (one anaesthesia, one rehabilitation phase).</p>',
    ar:'<p>نعم! بالمنظار يمكن العملية الثنائية بنفس 3 مداخل — تخدير واحد، تأهيل واحد.</p>',
    tr:'<p>Evet! Laparoskopik olarak iki taraflı ameliyat aynı 3 portla yapılır — tek anestezi, tek rehabilitasyon.</p>'
  }},

{ id:'l05', cat:'leistenhernie',
  q:{ de:'Kann eine Leistenhernie ohne OP mit einem Bruchband behandelt werden?', en:'Can an inguinal hernia be treated with a truss instead of surgery?', ar:'هل يعالج الفتق الأربي بحزام بدون عملية؟', tr:'Kasık fıtığı kasıkbağı ile tedavi edilir mi?' },
  a:{
    de:'<p>Ein Bruchband kann Symptome lindern, heilt aber die Hernie nicht und verhindert keine Einklemmung.</p>',
    en:'<p>A truss may relieve symptoms but does not heal the hernia and does not prevent incarceration.</p>',
    ar:'<p>الحزام قد يخفف الأعراض لكنه لا يشفي الفتق ولا يمنع الانحباس.</p>',
    tr:'<p>Kasıkbağı belirtileri hafifletebilir ama fıtığı iyileştirmez, boğulmayı önlemez.</p>'
  }},

{ id:'l06', cat:'leistenhernie',
  q:{ de:'Ist es möglich, während einer Leistenhernienoperation auf Wunsch auch eine Vasektomie durchzuführen?', en:'Can vasectomy be done together with inguinal hernia surgery?', ar:'هل يمكن عملية قطع القناة المنوية مع الفتق الأربي؟', tr:'Vazektomi kasık fıtığı ile birlikte yapılabilir mi?' },
  a:{
    de:'<p>Ja, es ist medizinisch möglich und oft sogar sinnvoll. Da der Chirurg ohnehin Zugang zum Leistenkanal hat, kann die Sterilisation direkt im Rahmen desselben Eingriffs vorgenommen werden.</p><p><strong>Vorteile einer kombinierten Operation:</strong></p><ul><li><strong>Nur eine Narkose</strong> – keine zweimalige Anästhesie</li><li><strong>Gemeinsame Erholung</strong> – kürzere Ausfallzeit insgesamt</li><li><strong>Keine zusätzlichen Schnitte</strong> bei beidseitigen Leistenhernien</li></ul>',
    en:'<p>Yes, medically possible and often sensible. Since the surgeon already has access to the inguinal canal, sterilisation can be performed in the same procedure.</p><p><strong>Benefits of combined surgery:</strong></p><ul><li><strong>Single anaesthesia</strong></li><li><strong>Shared recovery period</strong></li><li><strong>No additional incisions</strong> for bilateral hernias</li></ul>',
    ar:'<p>نعم، ممكن طبياً ومفيد. بما أن الجراح يصل للقناة الأربية، يمكن إجراء التعقيم في نفس العملية.</p><p><strong>الفوائد:</strong></p><ul><li><strong>تخدير واحد</strong></li><li><strong>تعافٍ مشترك</strong></li><li><strong>لا شقوق إضافية</strong> للفتق الثنائي</li></ul>',
    tr:'<p>Evet, tıbben mümkün ve mantıklı. Cerrah zaten kasık kanalına erişimi olduğundan kısırlaştırma aynı ameliyatta yapılabilir.</p><p><strong>Faydaları:</strong></p><ul><li><strong>Tek anestezi</strong></li><li><strong>Ortak iyileşme</strong></li><li>İki taraflı fıtıkta <strong>ek kesi yok</strong></li></ul>'
  }},

{ id:'l07', cat:'leistenhernie',
  q:{ de:'Welche Operationsmethoden gibt es bei Leistenhernie?', en:'Which surgical methods exist for inguinal hernia?', ar:'ما طرق عملية الفتق الأربي؟', tr:'Kasık fıtığı için hangi yöntemler var?' },
  a:{
    de:'<p>Es wird zwischen offenen und minimalinvasiven (laparoskopischen) Verfahren unterschieden.</p><p><strong>Minimalinvasive Verfahren (Schlüsselloch-OP):</strong></p><ul><li><strong>TEP</strong> (Total extraperitoneale Plastik): Operation vollständig außerhalb der Bauchhöhle – zwischen Bauchwand und Bauchfell. Geringes Risiko für Darmverletzungen, Narbenhernien und Verwachsungen.</li><li><strong>TAPP</strong> (Transabdominelle Präperitoneale Plastik): Der Chirurg arbeitet durch die Bauchhöhle hindurch. Ermöglicht eine zusätzliche Inspektion der Bauchorgane.</li></ul><p><strong>Offene Operationsverfahren (mit und ohne Netz):</strong></p><ul><li><strong>Lichtenstein:</strong> Weltweit am häufigsten durchgeführte offene Technik. Kunststoffnetz wird zur Verstärkung aufgenäht. Vorteil: auch in lokaler oder Rückenmarksanästhesie möglich.</li><li><strong>Shouldice und Desarda:</strong> Netzfreie Verfahren, bei denen die Bruchpforte mit körpereigenem Gewebe verstärkt wird.</li></ul>',
    en:'<p>Open and minimally invasive (laparoscopic) techniques are distinguished.</p><p><strong>Minimally invasive (keyhole):</strong></p><ul><li><strong>TEP</strong> (Total Extraperitoneal): Performed entirely outside the abdominal cavity. Low risk of bowel injury, incisional hernia, adhesions.</li><li><strong>TAPP</strong> (Transabdominal Preperitoneal): The surgeon works through the abdominal cavity, allowing inspection of organs.</li></ul><p><strong>Open techniques:</strong></p><ul><li><strong>Lichtenstein:</strong> Most common worldwide. Mesh sewn over the weak spot. Can be done under local or spinal anaesthesia.</li><li><strong>Shouldice and Desarda:</strong> Mesh-free, repair using own tissue.</li></ul>',
    ar:'<p>طرق مفتوحة وأخرى بأقل تدخل (منظار).</p><p><strong>المنظارية:</strong></p><ul><li><strong>TEP:</strong> خارج التجويف البطني تماماً. خطر منخفض لإصابة الأمعاء.</li><li><strong>TAPP:</strong> عبر التجويف البطني، يسمح بمعاينة الأعضاء.</li></ul><p><strong>المفتوحة:</strong></p><ul><li><strong>Lichtenstein:</strong> الأكثر شيوعاً عالمياً. شبكة مخاطة فوق الضعف.</li><li><strong>Shouldice و Desarda:</strong> بدون شبكة، باستخدام نسيج الجسم.</li></ul>',
    tr:'<p>Açık ve minimal invaziv (laparoskopik) yöntemler.</p><p><strong>Minimal invaziv:</strong></p><ul><li><strong>TEP:</strong> Karın boşluğunun tamamen dışında. Düşük bağırsak yaralanma riski.</li><li><strong>TAPP:</strong> Karın boşluğundan; organ muayenesi mümkün.</li></ul><p><strong>Açık:</strong></p><ul><li><strong>Lichtenstein:</strong> Dünyada en yaygın. Yama dikilir.</li><li><strong>Shouldice / Desarda:</strong> Yamasız, kendi dokusu ile.</li></ul>'
  }},

/* ===== FRAGEN ZUR NABELHERNIE ===== */

{ id:'nb01', cat:'nabelhernie',
  q:{ de:'Muss eine Nabelhernie beim Kind operiert werden?', en:'Does a child\'s umbilical hernia need surgery?', ar:'هل يجب عملية الفتق السري للطفل؟', tr:'Çocukta göbek fıtığı ameliyat edilmeli mi?' },
  a:{
    de:'<p>Nicht sofort. Bei Kindern bis zum 2. Lebensjahr schließen sich viele Nabelhernien von allein. Wenn sie bis zum 4.–6. Lebensjahr nicht verschwunden sind, wird eine OP empfohlen.</p>',
    en:'<p>Not immediately. In children up to 2 years many umbilical hernias close on their own. If still present at 4–6 years, surgery is recommended.</p>',
    ar:'<p>ليس فوراً. عند الأطفال حتى عامين كثير من الفتوق السرية تنغلق تلقائياً. إذا بقيت حتى 4–6 سنوات يوصى بالعملية.</p>',
    tr:'<p>Hemen değil. 2 yaşa kadar çocuklarda birçok göbek fıtığı kendiliğinden kapanır. 4–6 yaşa kadar geçmezse ameliyat önerilir.</p>'
  }},

{ id:'nb02', cat:'nabelhernie',
  q:{ de:'Wann sollte eine Nabelhernie beim Erwachsenen operiert werden?', en:'When should adult umbilical hernia be operated?', ar:'متى تُجرى عملية الفتق السري للبالغين؟', tr:'Yetişkinde göbek fıtığı ne zaman ameliyat?' },
  a:{
    de:'<p>Bei Beschwerden, bei Wachstum der Hernie oder bei Einklemmungsrisiko. Grundsätzlich werden Erwachsene mit Nabelhernie zur OP geraten.</p>',
    en:'<p>For symptoms, growth of the hernia or risk of incarceration. Generally, adults with umbilical hernia are advised to undergo surgery.</p>',
    ar:'<p>عند الأعراض، نمو الفتق أو خطر الانحباس. عموماً يُنصح البالغون بالعملية.</p>',
    tr:'<p>Belirti varsa, büyürse veya boğulma riskinde. Genel olarak yetişkinlere ameliyat önerilir.</p>'
  }},

{ id:'nb03', cat:'nabelhernie',
  q:{ de:'Bleibt der Nabel nach der OP normal aussehen?', en:'Does the navel look normal after surgery?', ar:'هل تبقى السرة طبيعية بعد العملية؟', tr:'Ameliyattan sonra göbek normal görünür mü?' },
  a:{
    de:'<p>In der Regel ja. Der Chirurg bemüht sich, das Aussehen des Nabels zu erhalten. Bei sehr großen Hernien kann der Nabel rekonstruiert werden müssen.</p>',
    en:'<p>Usually yes. The surgeon aims to preserve the navel\'s appearance. For very large hernias the navel may need reconstruction.</p>',
    ar:'<p>عادةً نعم. الجراح يحرص على الحفاظ على شكل السرة. للفتوق الكبيرة قد تحتاج إعادة بناء.</p>',
    tr:'<p>Genellikle evet. Cerrah göbeğin görünümünü korumaya çalışır. Çok büyük fıtıklarda yeniden yapılabilir.</p>'
  }},

{ id:'nb04', cat:'nabelhernie',
  q:{ de:'Wird die Nabelhernie mit Direktnaht oder mit Netz versorgt?', en:'Direct suture or mesh for umbilical hernia?', ar:'خياطة مباشرة أم شبكة للفتق السري؟', tr:'Göbek fıtığı dikiş mi yama mı?' },
  a:{
    de:'<p>Es hängt in erster Linie von der <strong>Größe der Bruchlücke</strong> ab. Eine reine Naht wird in der Regel bei einer Bruchlücke von <strong>unter 1 bis 1,5 cm</strong> angewendet. Ab 1,5 bis 2 cm Bruchgröße empfehlen internationale Leitlinien die zusätzliche Verstärkung durch ein Netz. Auch bei kleineren Brüchen (&lt; 1,5 cm) wird ein Netz empfohlen, wenn Risikofaktoren wie starkes Übergewicht (BMI &gt; 30), eine Bindegewebsschwäche (Rektusdiastase) oder schweres körperliches Arbeiten vorliegen.</p>',
    en:'<p>It depends primarily on the <strong>size of the defect</strong>. Pure suture is usually used for defects <strong>under 1–1.5 cm</strong>. From 1.5–2 cm international guidelines recommend mesh reinforcement. Even for smaller defects (&lt; 1.5 cm) mesh is advised if risk factors are present: obesity (BMI &gt; 30), connective tissue weakness (diastasis recti), heavy physical work.</p>',
    ar:'<p>يعتمد على <strong>حجم الفتحة</strong>. الخياطة فقط عادة لفتحة <strong>أقل من 1–1.5 سم</strong>. من 1.5–2 سم تُنصح الشبكة. حتى للأصغر إذا كانت عوامل الخطر موجودة (سمنة، ضعف نسيج، عمل ثقيل).</p>',
    tr:'<p>Öncelikle <strong>defekt boyutuna</strong> bağlı. Saf dikiş genellikle <strong>1–1,5 cm altı</strong>. 1,5–2 cm\'den itibaren uluslararası kılavuzlar yamayı önerir. Daha küçüklerde de risk faktörleri varsa (obezite, doku zayıflığı, ağır iş) yama önerilir.</p>'
  }},

/* ===== FRAGEN ZUR NARBENHERNIE ===== */

{ id:'na01', cat:'narbenhernie',
  q:{ de:'Warum entsteht eine Narbenhernie nach einer Operation?', en:'Why does an incisional hernia develop?', ar:'لماذا يحدث الفتق الندبي؟', tr:'İnsizyonel fıtık neden oluşur?' },
  a:{
    de:'<p>An jeder Operationsnarbe ist die Bauchwand geschwächt. Infektionen, Übergewicht, Diabetes, Rauchen, schlechte Wundheilung und frühe körperliche Belastung erhöhen das Risiko einer Narbenhernie.</p>',
    en:'<p>The abdominal wall is weakened at every surgical scar. Infections, obesity, diabetes, smoking, poor wound healing and early physical strain increase risk.</p>',
    ar:'<p>عند كل ندبة جراحية يضعف جدار البطن. العدوى، السمنة، السكري، التدخين، سوء الالتئام والإجهاد المبكر تزيد الخطر.</p>',
    tr:'<p>Her ameliyat izinde karın duvarı zayıflar. Enfeksiyon, obezite, diyabet, sigara, kötü iyileşme ve erken zorlanma riski artırır.</p>'
  }},

{ id:'na02', cat:'narbenhernie',
  q:{ de:'Wann tritt eine Narbenhernie auf?', en:'When do incisional hernias appear?', ar:'متى يظهر الفتق الندبي؟', tr:'İnsizyonel fıtık ne zaman ortaya çıkar?' },
  a:{
    de:'<p>Meist in den ersten 1–3 Jahren nach der ursprünglichen OP. Sie kann aber auch noch Jahre später auftreten.</p>',
    en:'<p>Usually within 1–3 years after the original surgery. They can also appear years later.</p>',
    ar:'<p>عادةً في 1–3 سنوات الأولى بعد العملية الأصلية. قد يظهر لاحقاً أيضاً.</p>',
    tr:'<p>Genellikle ilk ameliyattan sonraki 1–3 yıl içinde. Yıllar sonra da olabilir.</p>'
  }},

{ id:'na03', cat:'narbenhernie',
  q:{ de:'Ist eine Narbenhernie schwieriger zu operieren?', en:'Is incisional hernia harder to operate?', ar:'هل الفتق الندبي أصعب جراحياً؟', tr:'İnsizyonel fıtık daha mı zor?' },
  a:{
    de:'<p>In der Regel ja (im Vergleich zu Nabelhernien oder Leistenhernien) – besonders wenn sie groß ist oder mehrere Lücken hat. Narbenhernien erfordern oft größere Netze und aufwändigere Techniken.</p>',
    en:'<p>Usually yes (compared to umbilical or inguinal hernias) — especially when large or with multiple defects. Often requires larger meshes and more complex techniques.</p>',
    ar:'<p>عادةً نعم (مقارنةً بالسري أو الأربي) — خاصة الكبير أو متعدد الفتحات. يتطلب شبكات أكبر وتقنيات أعقد.</p>',
    tr:'<p>Genellikle evet (göbek/kasık fıtığına göre) — özellikle büyük veya çoklu defektlerde. Daha büyük yama ve karmaşık teknik gerektirir.</p>'
  }},

{ id:'na04', cat:'narbenhernie',
  q:{ de:'Wie kann ich einer Narbenhernie vorbeugen?', en:'How can I prevent an incisional hernia?', ar:'كيف أقي من الفتق الندبي؟', tr:'İnsizyonel fıtıktan nasıl korunurum?' },
  a:{
    de:'<ul><li>Körpergewicht normalisieren</li><li>Nicht rauchen</li><li>Bauchmuskeltraining (nach vollständiger Heilung und Rücksprache mit dem Chirurg)</li><li>Richtige Hebetechnik</li><li>Frühe Mobilisation nach OP</li><li>Bauchbinde nach größeren Baucheingriffen tragen</li></ul>',
    en:'<ul><li>Normalise body weight</li><li>Don\'t smoke</li><li>Abdominal training (after full healing, with surgeon\'s OK)</li><li>Proper lifting technique</li><li>Early mobilisation after surgery</li><li>Abdominal binder after major operations</li></ul>',
    ar:'<ul><li>وزن طبيعي</li><li>عدم التدخين</li><li>تقوية البطن (بعد الشفاء والاستشارة)</li><li>تقنية رفع صحيحة</li><li>حركة مبكرة بعد العملية</li><li>حزام بطن بعد العمليات الكبرى</li></ul>',
    tr:'<ul><li>Normal kilo</li><li>Sigara içmemek</li><li>Karın egzersizleri (iyileşmeden ve cerraha danışıldıktan sonra)</li><li>Doğru kaldırma tekniği</li><li>Ameliyat sonrası erken hareket</li><li>Büyük ameliyatlardan sonra karın korsesi</li></ul>'
  }},

/* ===== RISIKOFAKTOREN & VORBEUGUNG ===== */

{ id:'r01', cat:'risiko',
  q:{ de:'Erhöht Rauchen das Hernienrisiko?', en:'Does smoking increase hernia risk?', ar:'هل يزيد التدخين خطر الفتق؟', tr:'Sigara fıtık riskini artırır mı?' },
  a:{
    de:'<p>Ja. Rauchen schwächt das Bindegewebe und verursacht chronischen Husten, der den Bauchdruck erhöht. Raucher haben ein höheres Risiko für Hernien und Komplikationen nach der OP.</p>',
    en:'<p>Yes. Smoking weakens connective tissue and causes chronic coughing, which raises abdominal pressure. Smokers have higher risk of hernias and post-op complications.</p>',
    ar:'<p>نعم. التدخين يضعف النسيج الضام ويسبب سعالاً مزمناً يرفع ضغط البطن. المدخنون أعلى خطورة.</p>',
    tr:'<p>Evet. Sigara bağ dokusunu zayıflatır ve kronik öksürüğe yol açar. Sigara içenlerde fıtık ve komplikasyon riski yüksek.</p>'
  }},

{ id:'r02', cat:'risiko',
  q:{ de:'Erhöht Übergewicht das Hernienrisiko?', en:'Does obesity increase hernia risk?', ar:'هل تزيد السمنة خطر الفتق؟', tr:'Obezite fıtık riskini artırır mı?' },
  a:{
    de:'<p>Erheblich. Übergewicht erhöht den intraabdominellen Druck dauerhaft und schwächt die Bauchwand. Zudem erhöht es Komplikationsrisiken und die Rezidivrate.</p>',
    en:'<p>Significantly. Obesity permanently increases intra-abdominal pressure and weakens the abdominal wall. It also raises complication and recurrence rates.</p>',
    ar:'<p>بشكل كبير. السمنة ترفع الضغط داخل البطن دائماً وتضعف الجدار. كما تزيد المضاعفات والارتجاع.</p>',
    tr:'<p>Belirgin şekilde. Obezite karın içi basıncı sürekli artırır ve duvarı zayıflatır. Komplikasyon ve nüksü de artırır.</p>'
  }},

{ id:'r03', cat:'risiko',
  q:{ de:'Können Hernien vererbt werden?', en:'Are hernias inherited?', ar:'هل الفتوق وراثية؟', tr:'Fıtık kalıtsal mı?' },
  a:{
    de:'<p>Es gibt eine genetische Komponente (Bindegewebsschwäche). Wenn Eltern oder Geschwister Hernien hatten, ist das eigene Risiko leicht erhöht – aber Hernien sind keine rein erbliche Erkrankung.</p>',
    en:'<p>There is a genetic component (connective tissue weakness). If parents or siblings had hernias, your risk is slightly higher — but hernias are not purely hereditary.</p>',
    ar:'<p>يوجد عنصر وراثي (ضعف نسيج ضام). إذا كان الأقارب مصابين فالخطر أعلى قليلاً — لكنه ليس مرضاً وراثياً صرفاً.</p>',
    tr:'<p>Genetik bir bileşen vardır (bağ dokusu zayıflığı). Akrabalarda fıtık varsa risk biraz artar — ama tamamen kalıtsal değildir.</p>'
  }},

{ id:'r04', cat:'risiko',
  q:{ de:'Kann ich Hernien vorbeugen?', en:'Can I prevent hernias?', ar:'هل يمكنني الوقاية من الفتق؟', tr:'Fıtıktan korunabilir miyim?' },
  a:{
    de:'<p>Vollständige Prävention ist nicht möglich, aber das Risiko kann reduziert werden durch:</p><ul><li>Gewichtsmanagement</li><li>Nichtrauchen</li><li>Kräftigung der Bauch- und Rückenmuskulatur</li><li>Richtige Hebetechnik (mit den Beinen heben, nicht mit dem Rücken)</li><li>Behandlung von chronischem Husten und Verstopfung</li></ul>',
    en:'<p>Complete prevention isn\'t possible, but risk can be reduced by:</p><ul><li>Weight management</li><li>Not smoking</li><li>Strengthening abdominal and back muscles</li><li>Proper lifting technique (lift with legs, not back)</li><li>Treating chronic cough and constipation</li></ul>',
    ar:'<p>الوقاية الكاملة غير ممكنة، لكن يقلل الخطر:</p><ul><li>إدارة الوزن</li><li>عدم التدخين</li><li>تقوية عضلات البطن والظهر</li><li>تقنية رفع صحيحة (بالساقين)</li><li>علاج السعال والإمساك المزمنين</li></ul>',
    tr:'<p>Tam koruma mümkün değil ama risk azaltılabilir:</p><ul><li>Kilo kontrolü</li><li>Sigara içmemek</li><li>Karın/sırt kasları güçlendirme</li><li>Doğru kaldırma (bacakla)</li><li>Kronik öksürük ve kabızlığın tedavisi</li></ul>'
  }},

{ id:'r05', cat:'risiko',
  q:{ de:'Kann Sport Hernien auslösen?', en:'Can sport cause hernias?', ar:'هل تسبب الرياضة فتقاً؟', tr:'Spor fıtığa yol açar mı?' },
  a:{
    de:'<p>Falsches Krafttraining (Pressen ohne Atemtechnik) kann eine Hernie begünstigen – v. a. wenn schon eine Schwachstelle vorhanden ist. Richtiges Bauchmuskeltraining hingegen schützt vor Hernien.</p>',
    en:'<p>Incorrect weight training (straining without breathing technique) can promote hernia, especially with existing weakness. Proper abdominal training, however, protects.</p>',
    ar:'<p>تدريب الأثقال الخاطئ (الضغط بدون تنفس صحيح) قد يسبب فتقاً، خاصة مع ضعف موجود. التدريب الصحيح يحمي.</p>',
    tr:'<p>Yanlış ağırlık antrenmanı (nefessiz ıkınma) fıtığı kolaylaştırabilir. Doğru karın antrenmanı ise korur.</p>'
  }},

];

// Export to global scope
if (typeof window !== 'undefined') {
  window.FAQ_PART2 = FAQ_PART2;
}
