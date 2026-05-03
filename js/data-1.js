/* =========================================================
   FAQ Datenbank – DE / EN / AR / TR
   OC | OrthoChirurgie – Hernienzentrum
   ========================================================= */

const CATEGORIES = [
  { id:'allgemein',      de:'Allgemeine Informationen',     en:'General Information',     ar:'معلومات عامة',                 tr:'Genel Bilgiler' },
  { id:'operation',      de:'Fragen zur Operation',         en:'About the Surgery',       ar:'أسئلة حول العملية',            tr:'Ameliyat Hakkında' },
  { id:'nachbehandlung', de:'Fragen zur Nachbehandlung',    en:'Aftercare',                ar:'الرعاية اللاحقة',              tr:'Ameliyat Sonrası Bakım' },
  { id:'leistenhernie',  de:'Fragen zur Leistenhernie',     en:'Inguinal Hernia',          ar:'الفتق الأربي',                 tr:'Kasık Fıtığı' },
  { id:'nabelhernie',    de:'Fragen zur Nabelhernie',       en:'Umbilical Hernia',         ar:'الفتق السري',                  tr:'Göbek Fıtığı' },
  { id:'narbenhernie',   de:'Fragen zur Narbenhernie',      en:'Incisional Hernia',        ar:'الفتق الندبي',                 tr:'İnsizyonel Fıtık' },
  { id:'risiko',         de:'Risikofaktoren & Vorbeugung',  en:'Risk Factors & Prevention',ar:'عوامل الخطر والوقاية',         tr:'Risk Faktörleri ve Önleme' }
];

const FAQ = [

/* ===== ALLGEMEINE INFORMATIONEN ===== */

{ id:'a01', cat:'allgemein',
  q:{ de:'Was ist ein Hernienzentrum?', en:'What is a hernia center?', ar:'ما هو مركز الفتق؟', tr:'Fıtık merkezi nedir?' },
  a:{
    de:'<p>Die Qualität in der Hernienchirurgie kann nur gesichert werden, wenn der Operateur alle wesentlichen Angaben zu seinen Hernienpatienten dokumentiert und das langfristige Ergebnis seiner Operationen kennt. Erfahrene Hernienchirurgen haben sich dafür zur gemeinnützigen Gesellschaft <strong>Herniamed</strong> zusammengeschlossen und sich verpflichtet, sämtliche Hernienfälle genau zu dokumentieren und einer wissenschaftlichen Auswertung zuzuführen.</p>',
    en:'<p>Quality in hernia surgery can only be ensured if the surgeon documents all relevant patient information and follows long-term outcomes. Experienced hernia surgeons have joined the non-profit organisation <strong>Herniamed</strong> and committed to recording every hernia operation in detail for scientific evaluation.</p>',
    ar:'<p>لا يمكن ضمان الجودة في جراحة الفتق إلا إذا وثّق الجراح جميع المعلومات المهمة عن مرضاه وعرف النتائج طويلة الأمد. اتحد الجراحون المتمرسون في جمعية <strong>Herniamed</strong> غير الربحية والتزموا بتوثيق جميع حالات الفتق وإخضاعها للتقييم العلمي.</p>',
    tr:'<p>Fıtık cerrahisinde kalite, ancak cerrah hastalarının tüm önemli bilgilerini belgeleyip uzun vadeli sonuçları takip ederse güvence altına alınabilir. Deneyimli fıtık cerrahları kâr amacı gütmeyen <strong>Herniamed</strong> derneği altında birleşmiş ve tüm fıtık vakalarını belgeleyip bilimsel değerlendirmeye sunmayı taahhüt etmişlerdir.</p>'
  }},

{ id:'a02', cat:'allgemein',
  q:{ de:'Was ist überhaupt eine Hernie / ein Bruch?', en:'What is a hernia?', ar:'ما هو الفتق؟', tr:'Fıtık nedir?' },
  a:{
    de:'<p>Eine Hernie (Bruch) entsteht, wenn ein inneres Organ oder Fettgewebe durch eine Lücke oder Schwachstelle in der Bauchwand nach außen tritt. Man spricht dabei von einem <strong>Bruchsack</strong>, der durch die <strong>Bruchpforte</strong> gleitet. Es handelt sich nicht um einen Knochenbruch, sondern um einen <strong>Gewebebruch</strong>.</p>',
    en:'<p>A hernia occurs when an internal organ or fatty tissue protrudes through a gap or weak spot in the abdominal wall. We refer to a <strong>hernia sac</strong> sliding through the <strong>hernia opening</strong>. It is not a bone fracture but a <strong>tissue defect</strong>.</p>',
    ar:'<p>يحدث الفتق عندما يبرز عضو داخلي أو نسيج دهني عبر فجوة أو نقطة ضعف في جدار البطن. ويسمى ذلك <strong>كيس الفتق</strong> الذي ينزلق عبر <strong>فتحة الفتق</strong>. ليس كسراً عظمياً بل <strong>تمزقاً نسيجياً</strong>.</p>',
    tr:'<p>Fıtık, bir iç organın veya yağ dokusunun karın duvarındaki bir boşluk veya zayıf noktadan dışarı çıkmasıyla oluşur. <strong>Fıtık kesesi</strong> denilen yapı <strong>fıtık kapısı</strong>ndan kayar. Kemik kırılması değil, <strong>doku kaynaklı bir kırılma</strong>dır.</p>'
  }},

{ id:'a03', cat:'allgemein',
  q:{ de:'Was ist der Unterschied zwischen Leistenhernie, Nabelhernie und Narbenhernie?', en:'Difference between inguinal, umbilical and incisional hernia?', ar:'ما الفرق بين الفتق الأربي والسري والندبي؟', tr:'Kasık, göbek ve insizyonel fıtık arasındaki fark?' },
  a:{
    de:'<ul><li><strong>Leistenhernie:</strong> Tritt in der Leistengegend auf, häufigste Hernienform, vor allem bei Männern.</li><li><strong>Nabelhernie:</strong> Entsteht am Nabel, häufig bei Säuglingen, aber auch bei Erwachsenen.</li><li><strong>Narbenhernie:</strong> Entsteht an einer alten Operationsnarbe, wo die Bauchwand geschwächt ist.</li></ul>',
    en:'<ul><li><strong>Inguinal hernia:</strong> in the groin area, the most common type, especially in men.</li><li><strong>Umbilical hernia:</strong> at the navel, often in infants but also in adults.</li><li><strong>Incisional hernia:</strong> develops on an old surgical scar where the wall is weakened.</li></ul>',
    ar:'<ul><li><strong>الفتق الأربي:</strong> في منطقة الأربية، الأكثر شيوعاً وخصوصاً عند الرجال.</li><li><strong>الفتق السري:</strong> عند السرة، شائع عند الرضع والبالغين.</li><li><strong>الفتق الندبي:</strong> عند ندبة عملية قديمة حيث يضعف جدار البطن.</li></ul>',
    tr:'<ul><li><strong>Kasık fıtığı:</strong> Kasık bölgesinde, en sık tür, özellikle erkeklerde.</li><li><strong>Göbek fıtığı:</strong> Göbek deliğinde, bebeklerde ve yetişkinlerde görülür.</li><li><strong>İnsizyonel fıtık:</strong> Karın duvarının zayıfladığı eski ameliyat izinde oluşur.</li></ul>'
  }},

{ id:'a04', cat:'allgemein',
  q:{ de:'Wie entsteht eine Hernie?', en:'How does a hernia develop?', ar:'كيف يحدث الفتق؟', tr:'Fıtık nasıl oluşur?' },
  a:{
    de:'<p>Hernien entstehen durch eine Kombination aus angeborener oder erworbener Schwäche der Bauchwand und erhöhtem Druck im Bauchraum. Auslöser können sein: schweres Heben, chronischer Husten, Verstopfung, Übergewicht, Schwangerschaft oder frühere Operationen.</p>',
    en:'<p>Hernias result from a combination of inherited or acquired abdominal-wall weakness and increased intra-abdominal pressure. Triggers include heavy lifting, chronic coughing, constipation, obesity, pregnancy, or previous surgery.</p>',
    ar:'<p>تحدث الفتوق نتيجة ضعف وراثي أو مكتسب في جدار البطن مع زيادة الضغط داخل البطن. من المحفزات: رفع الأثقال، السعال المزمن، الإمساك، السمنة، الحمل، أو عمليات سابقة.</p>',
    tr:'<p>Fıtıklar, doğuştan veya sonradan kazanılan karın duvarı zayıflığı ile karın içi basıncın artmasının birleşiminden kaynaklanır. Tetikleyiciler: ağır kaldırma, kronik öksürük, kabızlık, obezite, gebelik veya geçirilmiş ameliyatlar.</p>'
  }},

{ id:'a05', cat:'allgemein',
  q:{ de:'Habe ich eine Hernie – was sind die typischen Symptome?', en:'What are the typical symptoms of a hernia?', ar:'ما الأعراض النموذجية للفتق؟', tr:'Fıtığın tipik belirtileri nelerdir?' },
  a:{
    de:'<ul><li>Sichtbare oder tastbare Vorwölbung (oft beim Husten, Pressen oder Stehen)</li><li>Ziehende Schmerzen oder Druckgefühl</li><li>Beschwerden beim Heben, Sport oder längerem Stehen</li><li>Manchmal völlig schmerzlos (Zufallsbefund)</li><li>Übelkeit, Erbrechen (bei Einklemmung → <strong>Notfall!</strong>)</li></ul>',
    en:'<ul><li>Visible or palpable bulge (often when coughing, straining or standing)</li><li>Pulling pain or pressure sensation</li><li>Discomfort when lifting, exercising or standing for long</li><li>Sometimes painless (incidental finding)</li><li>Nausea, vomiting (with incarceration → <strong>emergency!</strong>)</li></ul>',
    ar:'<ul><li>انتفاخ مرئي أو ملموس (عند السعال أو الضغط أو الوقوف)</li><li>ألم شد أو شعور بالضغط</li><li>إزعاج عند الرفع أو الرياضة أو الوقوف الطويل</li><li>أحياناً بدون ألم (اكتشاف عرضي)</li><li>غثيان وقيء (عند الانحباس ← <strong>طارئ!</strong>)</li></ul>',
    tr:'<ul><li>Görülebilir/palpe edilebilir şişlik (öksürünce, ıkınınca, ayakta)</li><li>Çekme ağrısı veya basınç hissi</li><li>Kaldırma, sporda, uzun süre ayakta rahatsızlık</li><li>Bazen ağrısız (tesadüfi bulgu)</li><li>Bulantı, kusma (boğulmada → <strong>acil!</strong>)</li></ul>'
  }},

{ id:'a06', cat:'allgemein',
  q:{ de:'Kann ich eine Hernie selbst erkennen?', en:'Can I detect a hernia myself?', ar:'هل يمكنني اكتشاف الفتق بنفسي؟', tr:'Fıtığı kendim fark edebilir miyim?' },
  a:{
    de:'<p>Oft ja – eine weiche, zurückdrückbare Vorwölbung in der Leiste, am Nabel oder an einer Narbe, die beim Husten oder Pressen größer wird, ist typisch. Dennoch sollte immer ein Arzt die Diagnose bestätigen.</p>',
    en:'<p>Often yes — a soft, reducible bulge in the groin, at the navel or on a scar that grows when coughing or straining is typical. A physician should always confirm the diagnosis.</p>',
    ar:'<p>غالباً نعم - انتفاخ ناعم يمكن إعادته إلى الداخل في الأربية أو السرة أو ندبة، يكبر عند السعال أو الضغط. لكن يجب دائماً أن يؤكد الطبيب التشخيص.</p>',
    tr:'<p>Genellikle evet — kasıkta, göbekte veya bir izde içeri itilebilen yumuşak, öksürünce büyüyen bir şişlik tipiktir. Yine de tanıyı her zaman bir hekim doğrulamalıdır.</p>'
  }},

{ id:'a07', cat:'allgemein',
  q:{ de:'Wie wird eine Hernie diagnostiziert?', en:'How is a hernia diagnosed?', ar:'كيف يُشخّص الفتق؟', tr:'Fıtık nasıl teşhis edilir?' },
  a:{
    de:'<p>Meist durch klinische Untersuchung (Tasten, Sichtbefund). Ergänzend kann eine <strong>Ultraschalluntersuchung</strong> oder ein <strong>MRT/CT</strong> bei unklaren Befunden eingesetzt werden.</p>',
    en:'<p>Usually by clinical examination (palpation and inspection). <strong>Ultrasound</strong> or <strong>MRI/CT</strong> can be used for unclear findings.</p>',
    ar:'<p>عادةً بالفحص السريري (الجس والمعاينة). يمكن استخدام <strong>الموجات فوق الصوتية</strong> أو <strong>الرنين/الأشعة المقطعية</strong> عند الحاجة.</p>',
    tr:'<p>Genellikle klinik muayene ile. Belirsiz durumlarda <strong>ultrason</strong> veya <strong>MRG/BT</strong> kullanılabilir.</p>'
  }},

{ id:'a08', cat:'allgemein',
  q:{ de:'Ist jede Vorwölbung am Bauch eine Hernie?', en:'Is every abdominal bulge a hernia?', ar:'هل كل انتفاخ في البطن فتق؟', tr:'Karındaki her şişlik fıtık mıdır?' },
  a:{
    de:'<p>Nein. Lymphknoten, Lipome, Hämatome oder Tumoren können ähnlich aussehen. Nur ein Arzt kann dies sicher unterscheiden.</p>',
    en:'<p>No. Lymph nodes, lipomas, haematomas or tumours can look similar. Only a doctor can reliably distinguish them.</p>',
    ar:'<p>لا. العقد اللمفاوية والأورام الدهنية والكدمات والأورام قد تبدو مشابهة. الطبيب وحده يستطيع التمييز.</p>',
    tr:'<p>Hayır. Lenf düğümleri, lipomlar, hematomlar veya tümörler benzer görünebilir. Sadece bir hekim ayırt edebilir.</p>'
  }},

{ id:'a09', cat:'allgemein',
  q:{ de:'Kann eine Hernie von selbst verschwinden?', en:'Can a hernia disappear on its own?', ar:'هل يختفي الفتق تلقائياً؟', tr:'Fıtık kendiliğinden kaybolur mu?' },
  a:{
    de:'<p>Bei Säuglingen (Nabelhernien) schließt sich die Lücke oft bis zum 2. Lebensjahr von selbst. Bei Erwachsenen verschwindet eine Hernie grundsätzlich nicht von alleine – sie wird meistens größer.</p>',
    en:'<p>In infants (umbilical hernias) the defect often closes by age two. In adults, hernias generally do not resolve and usually grow larger.</p>',
    ar:'<p>عند الرضع (الفتق السري) غالباً ما تنغلق الفجوة قبل عامين. عند البالغين لا يختفي الفتق ويصبح غالباً أكبر.</p>',
    tr:'<p>Bebeklerde (göbek fıtığı) defekt genellikle 2 yaşına kadar kendiliğinden kapanır. Yetişkinlerde fıtık kendiliğinden geçmez, çoğunlukla büyür.</p>'
  }},

{ id:'a10', cat:'allgemein',
  q:{ de:'Ist eine Hernie lebensbedrohlich?', en:'Is a hernia life-threatening?', ar:'هل الفتق يهدد الحياة؟', tr:'Fıtık hayati tehlike taşır mı?' },
  a:{
    de:'<p>In der Regel nicht sofort. Jedoch kann eine eingeklemmte Hernie (<strong>Inkarzeration</strong>) lebensbedrohlich werden, wenn die Blutversorgung des eingeklemmten Darms unterbrochen wird (<strong>Strangulation</strong>). Dies ist ein chirurgischer Notfall!</p>',
    en:'<p>Usually not immediately. However an incarcerated hernia can become life-threatening if the blood supply to the trapped bowel is cut off (<strong>strangulation</strong>). This is a surgical emergency!</p>',
    ar:'<p>عادةً ليس فورياً. لكن الفتق المنحبس يمكن أن يصبح مهدداً للحياة إذا انقطع تدفق الدم عن الأمعاء المحتجزة (<strong>اختناق</strong>). هذه حالة طارئة جراحية!</p>',
    tr:'<p>Genellikle anında değil. Ancak boğulmuş fıtıkta sıkışan bağırsağın kan akımı kesilirse (<strong>strangülasyon</strong>) hayati tehlike doğar. Bu cerrahi bir acildir!</p>'
  }},

{ id:'a11', cat:'allgemein',
  q:{ de:'Was bedeutet „eingeklemmte" oder „inkarzerierte" Hernie?', en:'What is an incarcerated hernia?', ar:'ما هو الفتق المنحبس؟', tr:'Boğulmuş fıtık nedir?' },
  a:{
    de:'<p>Wenn sich der Bruchinhalt nicht mehr zurückdrücken lässt und die Blutversorgung unterbrochen wird, spricht man von einer eingeklemmten Hernie. Zeichen: <strong>plötzlicher starker Schmerz</strong>, harte nicht reponierbare Vorwölbung, Übelkeit, Erbrechen. → <strong>Sofort Notaufnahme!</strong></p>',
    en:'<p>When the hernia contents can no longer be pushed back and the blood supply is cut off. Signs: <strong>sudden severe pain</strong>, hard non-reducible bulge, nausea, vomiting. → <strong>Go to A&E immediately!</strong></p>',
    ar:'<p>عندما لا يمكن إعادة محتوى الفتق وينقطع تدفق الدم. العلامات: <strong>ألم مفاجئ شديد</strong>، انتفاخ قاسٍ غير قابل للإعادة، غثيان، قيء. ← <strong>اذهب فوراً إلى الطوارئ!</strong></p>',
    tr:'<p>Fıtık içeriği geri itilemiyor ve kan akımı kesildiyse. Belirtiler: <strong>ani şiddetli ağrı</strong>, sert geri itilemez şişlik, bulantı, kusma. → <strong>Derhal acile!</strong></p>'
  }},

{ id:'a12', cat:'allgemein',
  q:{ de:'Muss eine Hernie immer operiert werden?', en:'Does a hernia always need surgery?', ar:'هل يجب دائماً إجراء عملية للفتق؟', tr:'Fıtık her zaman ameliyat edilmeli mi?' },
  a:{
    de:'<p>Nicht zwingend sofort, aber grundsätzlich ja. Eine asymptomatische kleine Leistenhernie kann beobachtet werden. <strong>Nabel-, Narbenhernien und symptomatische Hernien</strong> sollten operiert werden, da das Risiko einer Einklemmung besteht.</p>',
    en:'<p>Not always immediately, but generally yes. A small asymptomatic inguinal hernia may be watched. <strong>Umbilical, incisional and symptomatic hernias</strong> should be repaired due to the risk of incarceration.</p>',
    ar:'<p>ليس بالضرورة فوراً، ولكن بشكل عام نعم. الفتق الأربي الصغير بدون أعراض يمكن مراقبته. <strong>الفتق السري والندبي والفتوق ذات الأعراض</strong> يجب علاجها جراحياً.</p>',
    tr:'<p>Her zaman hemen değil ama genel olarak evet. Belirtisiz küçük kasık fıtığı izlenebilir. <strong>Göbek, insizyonel ve belirti veren fıtıklar</strong> boğulma riski nedeniyle ameliyat edilmelidir.</p>'
  }},

{ id:'a13', cat:'allgemein',
  q:{ de:'Was passiert, wenn ich die Operation hinausschiebe?', en:'What if I delay the surgery?', ar:'ماذا يحدث إذا أجلت العملية؟', tr:'Ameliyatı ertelersem ne olur?' },
  a:{
    de:'<p>Die Hernie wird in der Regel größer, die Beschwerden nehmen zu und das Risiko einer Einklemmung steigt. Außerdem wird die Operation technisch schwieriger, je größer die Hernie ist.</p>',
    en:'<p>The hernia generally enlarges, symptoms increase and the risk of incarceration rises. Surgery also becomes technically more difficult.</p>',
    ar:'<p>يكبر الفتق عادةً، تزداد الأعراض ويرتفع خطر الانحباس. كما تصبح العملية أصعب تقنياً.</p>',
    tr:'<p>Fıtık genellikle büyür, şikayetler artar ve boğulma riski yükselir. Ameliyat teknik olarak da zorlaşır.</p>'
  }},

{ id:'a14', cat:'allgemein',
  q:{ de:'Bin ich fit genug für eine Hernienoperation?', en:'Am I fit enough for hernia surgery?', ar:'هل أنا لائق للعملية؟', tr:'Ameliyat için yeterince sağlıklı mıyım?' },
  a:{
    de:'<p>Für die meisten Patienten ist eine Hernienoperation sicher. Der Chirurg und der Anästhesist beurteilen vorab Ihre Gesundheit, Vorerkrankungen und Medikamente, um das Risiko zu minimieren.</p>',
    en:'<p>Hernia surgery is safe for most patients. Surgeon and anaesthetist assess your health, comorbidities and medications beforehand to minimise risk.</p>',
    ar:'<p>عملية الفتق آمنة لمعظم المرضى. الجراح وطبيب التخدير يقيّمون صحتك وأمراضك السابقة وأدويتك مسبقاً لتقليل المخاطر.</p>',
    tr:'<p>Fıtık ameliyatı çoğu hasta için güvenlidir. Cerrah ve anestezi uzmanı sağlığınızı, hastalıklarınızı ve ilaçlarınızı önceden değerlendirir.</p>'
  }},

{ id:'a15', cat:'allgemein',
  q:{ de:'Welche Voruntersuchungen sind notwendig?', en:'Which preoperative tests are needed?', ar:'ما الفحوصات اللازمة قبل العملية؟', tr:'Ameliyat öncesi hangi tetkikler gerekir?' },
  a:{
    de:'<p>Je nach Alter und Allgemeinzustand: kleines Blutbild, Gerinnung (Quick/INR), EKG, Lungenfunktion, ggf. Herzecho, Anästhesievorgespräch.</p>',
    en:'<p>Depending on age and condition: full blood count, coagulation (PT/INR), ECG, lung function, possibly echocardiography, anaesthesia consultation.</p>',
    ar:'<p>حسب العمر والحالة: تعداد دم، تخثر، تخطيط قلب، وظائف رئة، أحياناً تخطيط صدى للقلب، استشارة تخدير.</p>',
    tr:'<p>Yaşa ve duruma göre: tam kan sayımı, pıhtılaşma, EKG, akciğer fonksiyonu, gerekirse ekokardiyografi, anestezi muayenesi.</p>'
  }},

{ id:'a16', cat:'allgemein',
  q:{ de:'Wo finden die Voruntersuchungen statt?', en:'Where are preoperative tests performed?', ar:'أين تُجرى الفحوصات قبل العملية؟', tr:'Ameliyat öncesi tetkikler nerede yapılır?' },
  a:{
    de:'<p>Voruntersuchungen übernimmt bei <strong>ambulanten Eingriffen der Hausarzt</strong>, bei <strong>stationären das Krankenhaus</strong>.</p>',
    en:'<p>For <strong>outpatient procedures</strong> your GP performs the work-up; for <strong>inpatient procedures</strong> the hospital does.</p>',
    ar:'<p>في <strong>العمليات النهارية</strong> طبيب الأسرة، وفي <strong>العمليات الداخلية</strong> المستشفى.</p>',
    tr:'<p><strong>Ayakta tedavi</strong> için aile hekimi; <strong>yatarak tedavi</strong> için hastane.</p>'
  }},

{ id:'a17', cat:'allgemein',
  q:{ de:'Welche Medikamente muss ich vor der OP absetzen?', en:'Which medications should I stop before surgery?', ar:'أي أدوية يجب إيقافها قبل العملية؟', tr:'Ameliyat öncesi hangi ilaçları kesmeliyim?' },
  a:{
    de:'<p><strong>Blutverdünner:</strong></p><ul><li>Marcumar und Brilique: 7 Tage vor der OP (Überbrückung mit Bauchspritze)</li><li>Xarelto, Eliquis, Pradaxa, Lixiana: 24 Stunden vor der OP</li><li>Clopidogrel: 5 Tage vor der OP</li></ul><p><strong>Diabetes-Medikamente:</strong> Metformin 2 Tage vor OP nach Rücksprache mit dem Narkosearzt absetzen.</p><p><strong>Bestimmte Blutdruckmittel oder Entzündungshemmer:</strong> Sprechen Sie IMMER mit Ihrem Arzt – niemals eigenständig absetzen!</p>',
    en:'<p><strong>Blood thinners:</strong></p><ul><li>Marcumar / Brilique: 7 days before (heparin bridging)</li><li>Xarelto, Eliquis, Pradaxa, Lixiana: 24 h before</li><li>Clopidogrel: 5 days before</li></ul><p><strong>Diabetes:</strong> Metformin paused 2 days before, after consulting the anaesthetist.</p><p><strong>Certain BP or anti-inflammatory drugs:</strong> Always talk to your doctor — never stop on your own!</p>',
    ar:'<p><strong>مميعات الدم:</strong></p><ul><li>Marcumar و Brilique: قبل 7 أيام (مع حقن هيبارين)</li><li>Xarelto, Eliquis, Pradaxa, Lixiana: 24 ساعة قبل</li><li>Clopidogrel: 5 أيام قبل</li></ul><p><strong>السكري:</strong> Metformin يوقف قبل يومين بعد استشارة طبيب التخدير.</p><p><strong>أدوية الضغط أو المضادات الالتهابية:</strong> استشر طبيبك دائماً — لا توقفها بمفردك!</p>',
    tr:'<p><strong>Kan sulandırıcılar:</strong></p><ul><li>Marcumar / Brilique: 7 gün önce (heparin köprüleme)</li><li>Xarelto, Eliquis, Pradaxa, Lixiana: 24 saat önce</li><li>Clopidogrel: 5 gün önce</li></ul><p><strong>Diyabet:</strong> Metformin anestezi uzmanına danışılarak 2 gün önce kesilir.</p><p><strong>Bazı tansiyon/iltihap ilaçları:</strong> Mutlaka doktorunuzla konuşun — kendiniz kesmeyin!</p>'
  }},

{ id:'a18', cat:'allgemein',
  q:{ de:'Darf ich vor der Operation essen und trinken?', en:'Can I eat or drink before surgery?', ar:'هل يمكنني الأكل أو الشرب قبل العملية؟', tr:'Ameliyat öncesi yiyip içebilir miyim?' },
  a:{
    de:'<p>In der Regel: <strong>6 Stunden nüchtern</strong> für feste Speisen — das gilt auch für Kaugummi, Bonbons und Rauchen. <strong>Klare Flüssigkeit</strong> darf bis 2 Stunden vor dem geplanten Eingriff getrunken werden.</p>',
    en:'<p>Usually: <strong>fast 6 hours</strong> for solid food — also for chewing gum, candy and smoking. <strong>Clear fluids</strong> may be consumed up to 2 hours before surgery.</p>',
    ar:'<p>عادةً: <strong>صيام 6 ساعات</strong> عن الطعام الصلب — يشمل العلكة والحلوى والتدخين. <strong>السوائل الصافية</strong> مسموحة حتى ساعتين قبل العملية.</p>',
    tr:'<p>Genellikle: <strong>katı gıdalardan 6 saat</strong> aç — sakız, şekerleme, sigara dahil. <strong>Berrak sıvılar</strong> 2 saat öncesine kadar.</p>'
  }},

{ id:'a19', cat:'allgemein',
  q:{ de:'Welches Narkoseverfahren wird angewendet?', en:'Which anaesthesia method is used?', ar:'ما نوع التخدير المستخدم؟', tr:'Hangi anestezi yöntemi kullanılır?' },
  a:{
    de:'<ul><li><strong>Vollnarkose:</strong> Am häufigsten bei laparoskopischen (Schlüsselloch-) Eingriffen.</li><li><strong>Regionalanästhesie (Spinalanästhesie):</strong> Möglich bei offenen Eingriffen.</li><li><strong>Lokalanästhesie:</strong> Bei kleinen, unkomplizierten Leistenhernien möglich, ebenso bei älteren Patienten mit eingeschränkter Narkosefähigkeit.</li></ul>',
    en:'<ul><li><strong>General anaesthesia:</strong> Most common for laparoscopic (keyhole) surgery.</li><li><strong>Regional (spinal):</strong> Possible for open procedures.</li><li><strong>Local anaesthesia:</strong> Possible for small uncomplicated inguinal hernias and elderly patients with limited fitness for general anaesthesia.</li></ul>',
    ar:'<ul><li><strong>التخدير العام:</strong> الأكثر شيوعاً للعمليات بالمنظار.</li><li><strong>التخدير النصفي:</strong> ممكن في العمليات المفتوحة.</li><li><strong>التخدير الموضعي:</strong> ممكن للفتوق الأربية الصغيرة وللمسنين.</li></ul>',
    tr:'<ul><li><strong>Genel anestezi:</strong> Laparoskopik ameliyatlarda en sık.</li><li><strong>Bölgesel (spinal):</strong> Açık ameliyatlarda mümkün.</li><li><strong>Lokal anestezi:</strong> Küçük komplikasyonsuz kasık fıtıkları ve yaşlı hastalarda mümkün.</li></ul>'
  }},

{ id:'a20', cat:'allgemein',
  q:{ de:'Welche OP-Methoden gibt es?', en:'What surgical methods are available?', ar:'ما طرق العملية المتاحة؟', tr:'Hangi ameliyat yöntemleri vardır?' },
  a:{
    de:'<ul><li><strong>Offen (konventionell):</strong> Schnitt über der Hernie, direkte Reparatur mit oder ohne Netz.</li><li><strong>Laparoskopisch / endoskopisch (Schlüsselloch):</strong> 3 kleine Schnitte, Kamera, minimal-invasiv, mit Netzversorgung.</li></ul>',
    en:'<ul><li><strong>Open (conventional):</strong> Incision over the hernia, direct repair with or without mesh.</li><li><strong>Laparoscopic / endoscopic (keyhole):</strong> 3 small incisions, camera, minimally invasive, with mesh.</li></ul>',
    ar:'<ul><li><strong>الجراحة المفتوحة:</strong> شق فوق الفتق، إصلاح مباشر مع أو بدون شبكة.</li><li><strong>الجراحة بالمنظار:</strong> 3 شقوق صغيرة، كاميرا، تدخل أدنى، مع شبكة.</li></ul>',
    tr:'<ul><li><strong>Açık (klasik):</strong> Fıtık üzerinden kesi, yamalı/yamasız onarım.</li><li><strong>Laparoskopik (kapalı):</strong> 3 küçük kesi, kamera, minimal invaziv, yama ile.</li></ul>'
  }},

{ id:'a21', cat:'allgemein',
  q:{ de:'Was ist der Unterschied zwischen offener und laparoskopischer OP?', en:'Difference between open and laparoscopic surgery?', ar:'ما الفرق بين الجراحة المفتوحة والمنظارية؟', tr:'Açık ve laparoskopik ameliyat farkı nedir?' },
  a:{
    de:'<p><strong>Offene Operation:</strong> 1 großer Schnitt, kann in Lokal-, Regional- oder Vollnarkose durchgeführt werden, mehr postoperativer Schmerz, Erholung ist länger, Rückfallrisiko vergleichbar. Beidseitige Hernien werden über zwei Schnitte versorgt.</p><p><strong>Laparoskopisch:</strong> 3 kleine Schnitte (0,5–2 cm), nur in Vollnarkose, weniger Schmerz, kürzere Erholung, vergleichbares Rückfallrisiko. Beidseitige Hernien werden über dieselben Zugänge versorgt.</p>',
    en:'<p><strong>Open:</strong> 1 large incision; local/regional/general anaesthesia possible; more postop pain; longer recovery; comparable recurrence. Bilateral hernias = two incisions.</p><p><strong>Laparoscopic:</strong> 3 small incisions (0.5–2 cm); only general anaesthesia; less pain; shorter recovery; comparable recurrence. Bilateral hernias use the same ports.</p>',
    ar:'<p><strong>المفتوحة:</strong> شق كبير، تخدير موضعي/نصفي/عام، ألم أكبر، تعافٍ أطول، خطر ارتجاع مماثل. الفتق الثنائي بشقين.</p><p><strong>المنظارية:</strong> 3 شقوق (0.5–2 سم)، تخدير عام فقط، ألم أقل، تعافٍ أسرع، ارتجاع مماثل. الفتق الثنائي بنفس المداخل.</p>',
    tr:'<p><strong>Açık:</strong> 1 büyük kesi; lokal/bölgesel/genel anestezi; daha fazla ağrı; daha uzun iyileşme; benzer nüks. İki taraflı = iki kesi.</p><p><strong>Laparoskopik:</strong> 3 küçük kesi (0,5–2 cm); sadece genel anestezi; daha az ağrı; daha kısa iyileşme; benzer nüks. İki taraflı aynı portlardan.</p>'
  }},

{ id:'a22', cat:'allgemein',
  q:{ de:'Welche Methode ist für mich die richtige?', en:'Which method is right for me?', ar:'أي طريقة هي المناسبة لي؟', tr:'Benim için hangi yöntem doğru?' },
  a:{
    de:'<p>Das hängt ab von: Größe und Lage der Hernie, Voroperationen, Allgemeinzustand und Erfahrung des Chirurgen. Es gibt keine universell „beste" Methode.</p>',
    en:'<p>It depends on: hernia size and location, previous operations, general condition, surgeon experience. There is no universally "best" method.</p>',
    ar:'<p>يعتمد على: حجم وموقع الفتق، العمليات السابقة، الحالة العامة وخبرة الجراح. لا توجد طريقة "أفضل" عالمياً.</p>',
    tr:'<p>Şunlara bağlıdır: fıtığın büyüklüğü ve yeri, geçirilmiş ameliyatlar, genel durum, cerrah deneyimi. Evrensel "en iyi" yöntem yoktur.</p>'
  }},

{ id:'a23', cat:'allgemein',
  q:{ de:'Was ist ein Herniennetz und wozu dient es?', en:'What is a hernia mesh?', ar:'ما هي شبكة الفتق؟', tr:'Fıtık yaması nedir?' },
  a:{
    de:'<p>Ein Herniennetz (Mesh) ist ein synthetisches oder biologisches Geflecht, das zur Verstärkung der Bauchwand eingesetzt wird. Es <strong>reduziert das Rückfallrisiko</strong> erheblich und ist heute Standard.</p>',
    en:'<p>A hernia mesh is a synthetic or biological mesh used to reinforce the abdominal wall. It <strong>significantly reduces recurrence</strong> and is the modern standard.</p>',
    ar:'<p>شبكة الفتق هي شبكة صناعية أو حيوية لتقوية جدار البطن. تقلل <strong>خطر الارتجاع</strong> بشكل كبير وهي المعيار الحديث.</p>',
    tr:'<p>Fıtık yaması, karın duvarını güçlendiren sentetik veya biyolojik bir örgüdür. <strong>Nüksü belirgin azaltır</strong> ve günümüzde standarttır.</p>'
  }},

{ id:'a24', cat:'allgemein',
  q:{ de:'Ist ein Netz sicher? Kann es Probleme machen?', en:'Is mesh safe?', ar:'هل الشبكة آمنة؟', tr:'Yama güvenli mi?' },
  a:{
    de:'<p>Moderne Netze sind sehr gut verträglich. Selten kann es zu Netzinfektionen, Netzschrumpfung, chronischen Schmerzen oder Netzmigrationen kommen. Insgesamt überwiegen die Vorteile (geringere Rezidivrate) die Risiken deutlich.</p>',
    en:'<p>Modern meshes are very well tolerated. Mesh infection, shrinkage, chronic pain or migration are rare. Benefits (lower recurrence) clearly outweigh the risks.</p>',
    ar:'<p>الشبكات الحديثة جيدة التحمل. نادراً ما تحدث عدوى أو انكماش أو ألم مزمن أو هجرة. الفوائد تفوق المخاطر بوضوح.</p>',
    tr:'<p>Modern yamalar çok iyi tolere edilir. Enfeksiyon, büzülme, kronik ağrı veya göç nadirdir. Yararlar (düşük nüks) riskleri belirgin şekilde geçer.</p>'
  }},

{ id:'a25', cat:'allgemein',
  q:{ de:'Gibt es auch eine Reparatur ohne Netz?', en:'Is there a mesh-free repair?', ar:'هل توجد إصلاحات بدون شبكة؟', tr:'Yamasız onarım var mı?' },
  a:{
    de:'<p>Ja – die <strong>Shouldice-Methode</strong> (bei Leistenhernien) oder andere Nahtverfahren. Sie sind geeignet für junge, sportliche Patienten mit kleiner Hernie und guter Gewebequalität. Das Rückfallrisiko ist etwas höher. Nabelhernien mit Bruchlücke bis 1,5 cm können ohne Netz behandelt werden. Narbenhernien hingegen sollten <strong>unabhängig von der Größe immer mit Netz</strong> versorgt werden.</p>',
    en:'<p>Yes — the <strong>Shouldice technique</strong> (inguinal hernias) and other suture-based repairs. Suitable for young, athletic patients with small hernias and good tissue quality. Recurrence risk is slightly higher. Umbilical hernias up to 1.5 cm may be repaired without mesh. Incisional hernias should <strong>always use mesh, regardless of size</strong>.</p>',
    ar:'<p>نعم — طريقة <strong>Shouldice</strong> للفتق الأربي وطرق الخياطة الأخرى. مناسبة للشباب الرياضيين بفتق صغير ونسيج جيد. الفتق السري حتى 1.5 سم بدون شبكة. أما الفتق الندبي <strong>دائماً بشبكة</strong>.</p>',
    tr:'<p>Evet — kasık fıtığı için <strong>Shouldice</strong> ve diğer dikiş onarımları. Genç-sportif, küçük fıtıklı ve iyi dokulu hastalar için uygun. 1,5 cm\'e kadar göbek fıtığı yamasız olabilir. İnsizyonel fıtıklar <strong>boyutuna bakmaksızın daima yama ile</strong>.</p>'
  }},

{ id:'a26', cat:'allgemein',
  q:{ de:'Werde ich stationär oder ambulant operiert?', en:'Inpatient or outpatient surgery?', ar:'هل ستكون العملية يومية أم مع إقامة؟', tr:'Yatarak mı ayakta mı?' },
  a:{
    de:'<p>Viele unkomplizierte Hernienoperationen werden heute <strong>ambulant (tagesklinisch)</strong> durchgeführt. Bei bestimmten medizinischen oder sozialen Gründen ist ein <strong>stationärer Aufenthalt (1 Tag)</strong> üblich.</p>',
    en:'<p>Many uncomplicated hernia repairs are now <strong>day cases</strong>. For certain medical or social reasons a <strong>1-day inpatient stay</strong> is usual.</p>',
    ar:'<p>كثير من العمليات غير المعقدة <strong>نهارية</strong>. لأسباب طبية أو اجتماعية قد تكون <strong>إقامة ليوم</strong>.</p>',
    tr:'<p>Komplikasyonsuz ameliyatların çoğu <strong>günübirlik</strong>. Belirli nedenlerle <strong>1 günlük yatış</strong> olabilir.</p>'
  }},

{ id:'a27', cat:'allgemein',
  q:{ de:'An welchem Ort wird die ambulante Operation durchgeführt?', en:'Where are outpatient operations performed?', ar:'أين تُجرى العمليات النهارية؟', tr:'Ayakta ameliyatlar nerede yapılır?' },
  a:{
    de:'<p>Die ambulante Operation erfolgt entweder in der <strong>Apollonia Klinik Ludwigshafen</strong> oder in der <strong>GRN Klinik Schwetzingen</strong>.</p>',
    en:'<p>Outpatient operations are performed at the <strong>Apollonia Klinik Ludwigshafen</strong> or the <strong>GRN Klinik Schwetzingen</strong>.</p>',
    ar:'<p>تُجرى في <strong>عيادة Apollonia في Ludwigshafen</strong> أو <strong>عيادة GRN في Schwetzingen</strong>.</p>',
    tr:'<p><strong>Apollonia Klinik Ludwigshafen</strong> veya <strong>GRN Klinik Schwetzingen</strong>\'de yapılır.</p>'
  }},

{ id:'a28', cat:'allgemein',
  q:{ de:'Muss ich mich vor der ambulanten Operation beim Narkosearzt melden?', en:'Do I need to see the anaesthetist before outpatient surgery?', ar:'هل أراجع طبيب التخدير قبل العملية النهارية؟', tr:'Ayakta ameliyat öncesi anestezi uzmanına gitmem gerekir mi?' },
  a:{
    de:'<p>Ja. Vereinbaren Sie rechtzeitig einen Termin bei <strong>Apollonia – telefonisch unter 0621 5299247</strong> oder online auf <a href="https://apollonia-kurpfalzklinik.de/" target="_blank" rel="noopener">apollonia-kurpfalzklinik.de</a>. Für die GRN Klinik Schwetzingen wählen Sie <strong>06202 8465230</strong>.</p>',
    en:'<p>Yes. Book in good time: <strong>Apollonia: 0621 5299247</strong> or <a href="https://apollonia-kurpfalzklinik.de/" target="_blank" rel="noopener">apollonia-kurpfalzklinik.de</a>. For GRN Schwetzingen call <strong>06202 8465230</strong>.</p>',
    ar:'<p>نعم. احجز موعداً في <strong>Apollonia: 0621 5299247</strong> أو <a href="https://apollonia-kurpfalzklinik.de/" target="_blank" rel="noopener">apollonia-kurpfalzklinik.de</a>. لـ GRN Schwetzingen: <strong>06202 8465230</strong>.</p>',
    tr:'<p>Evet. Zamanında randevu alın: <strong>Apollonia: 0621 5299247</strong> veya <a href="https://apollonia-kurpfalzklinik.de/" target="_blank" rel="noopener">apollonia-kurpfalzklinik.de</a>. GRN Schwetzingen: <strong>06202 8465230</strong>.</p>'
  }},

{ id:'a29', cat:'allgemein',
  q:{ de:'An welchem Ort wird die stationäre Operation durchgeführt?', en:'Where are inpatient operations performed?', ar:'أين العمليات الداخلية؟', tr:'Yatarak ameliyatlar nerede?' },
  a:{
    de:'<p>Die stationäre Operation findet <strong>NUR in der GRN Klinik Schwetzingen</strong> statt.</p>',
    en:'<p>Inpatient operations are performed <strong>ONLY at the GRN Klinik Schwetzingen</strong>.</p>',
    ar:'<p>تُجرى <strong>فقط في عيادة GRN Schwetzingen</strong>.</p>',
    tr:'<p><strong>SADECE GRN Klinik Schwetzingen</strong>\'de.</p>'
  }},

{ id:'a30', cat:'allgemein',
  q:{ de:'Muss ich mich vor der stationären Operation beim Narkosearzt melden?', en:'Anaesthetist appointment before inpatient surgery?', ar:'موعد تخدير قبل العملية الداخلية؟', tr:'Yatarak ameliyat öncesi anestezi randevusu?' },
  a:{
    de:'<p>Ja. Vereinbaren Sie rechtzeitig einen Termin beim Narkosearzt in der <strong>GRN Klinik Schwetzingen unter 06202 8465230</strong>.</p>',
    en:'<p>Yes. Arrange an appointment at <strong>GRN Klinik Schwetzingen: 06202 8465230</strong>.</p>',
    ar:'<p>نعم. احجز موعداً مع طبيب التخدير في <strong>GRN Schwetzingen: 06202 8465230</strong>.</p>',
    tr:'<p>Evet. <strong>GRN Klinik Schwetzingen: 06202 8465230</strong>\'dan randevu alın.</p>'
  }},

{ id:'a31', cat:'allgemein',
  q:{ de:'Wie lange dauert die Operation?', en:'How long does the operation take?', ar:'كم تستغرق العملية؟', tr:'Ameliyat ne kadar sürer?' },
  a:{
    de:'<ul><li>Einfache Leistenhernie: ca. 30–60 Minuten</li><li>Nabelhernie: ca. 15–45 Minuten</li><li>Narbenhernie (je nach Größe): 60–180 Minuten</li><li>Beidseitige Leistenhernien: ca. 50–90 Minuten</li></ul>',
    en:'<ul><li>Simple inguinal hernia: ~30–60 min</li><li>Umbilical hernia: ~15–45 min</li><li>Incisional hernia: 60–180 min</li><li>Bilateral inguinal: ~50–90 min</li></ul>',
    ar:'<ul><li>فتق أربي بسيط: 30–60 دقيقة</li><li>فتق سري: 15–45 دقيقة</li><li>فتق ندبي: 60–180 دقيقة</li><li>فتق أربي ثنائي: 50–90 دقيقة</li></ul>',
    tr:'<ul><li>Basit kasık fıtığı: ~30–60 dk</li><li>Göbek fıtığı: ~15–45 dk</li><li>İnsizyonel fıtık: 60–180 dk</li><li>İki taraflı kasık: ~50–90 dk</li></ul>'
  }},

{ id:'a32', cat:'allgemein',
  q:{ de:'Muss ich meine Bauchhaare rasieren?', en:'Do I need to shave my abdomen?', ar:'هل أحلق شعر البطن؟', tr:'Karnımı tıraş etmeli miyim?' },
  a:{
    de:'<p>Das übernimmt in der Regel das OP-Team unmittelbar vor dem Eingriff. Sie müssen zu Hause nichts vorbereiten.</p>',
    en:'<p>The surgical team usually does this just before the operation. No home preparation needed.</p>',
    ar:'<p>يقوم بذلك فريق العمليات قبل الجراحة. لا تحضير منزلي.</p>',
    tr:'<p>Bunu ameliyat ekibi hemen önce yapar. Evde hazırlık gerekmez.</p>'
  }},

{ id:'a33', cat:'allgemein',
  q:{ de:'Was soll ich am Operationstag mitbringen?', en:'What should I bring on surgery day?', ar:'ماذا أحضر في يوم العملية؟', tr:'Ameliyat günü ne getirmeliyim?' },
  a:{
    de:'<ul><li>Narkoseaufklärungsbogen (falls Videosprechstunde)</li><li>Medikamentenliste</li><li>Versichertenkarte</li><li>Bequeme, weite Kleidung</li><li>Bei ambulanter OP: <strong>Begleitperson</strong> organisieren</li><li>Schmuck und Bargeld zu Hause lassen</li></ul>',
    en:'<ul><li>Anaesthesia consent form (if video consult)</li><li>Medication list</li><li>Insurance card</li><li>Comfortable, loose clothing</li><li>Outpatient: arrange a <strong>companion</strong></li><li>Leave jewellery and cash at home</li></ul>',
    ar:'<ul><li>نموذج موافقة التخدير</li><li>قائمة الأدوية</li><li>بطاقة التأمين</li><li>ملابس فضفاضة</li><li>للنهارية: <strong>مرافق</strong></li><li>اترك المجوهرات والنقود</li></ul>',
    tr:'<ul><li>Anestezi onam formu</li><li>İlaç listesi</li><li>Sigorta kartı</li><li>Rahat, bol kıyafet</li><li>Ayakta: <strong>Refakatçi</strong></li><li>Mücevher/nakit evde kalsın</li></ul>'
  }},

{ id:'a34', cat:'allgemein',
  q:{ de:'Kann ich alleine zur OP kommen?', en:'Can I come alone?', ar:'هل أحضر وحدي؟', tr:'Yalnız gelebilir miyim?' },
  a:{
    de:'<p>Sie können alleine zur OP kommen, ABER Sie dürfen <strong>nicht alleine nach Hause gehen oder fahren</strong>. Sie benötigen eine Begleitperson, die Sie nach Hause bringt und in den ersten 24 Stunden bei Ihnen bleibt.</p>',
    en:'<p>You may come alone, BUT may <strong>not go or drive home alone</strong>. You need a companion to take you home and stay for 24 hours.</p>',
    ar:'<p>يمكنك الحضور وحدك، لكن لا يمكنك <strong>العودة أو القيادة وحدك</strong>. تحتاج مرافقاً يبقى معك 24 ساعة.</p>',
    tr:'<p>Yalnız gelebilirsiniz AMA <strong>yalnız dönemez veya araba kullanamazsınız</strong>. 24 saat yanınızda kalacak refakatçi gerekir.</p>'
  }},

{ id:'a35', cat:'allgemein',
  q:{ de:'Brauche ich Physiotherapie nach der Hernienoperation?', en:'Do I need physiotherapy?', ar:'هل أحتاج علاجاً طبيعياً؟', tr:'Fizyoterapi gerekir mi?' },
  a:{
    de:'<p>Bei einfachen Hernien in der Regel nicht zwingend. Bei großen Narbenhernien, nach Komponentenseparation oder bei Rückenproblemen kann Physiotherapie sinnvoll sein.</p>',
    en:'<p>Not strictly necessary for simple hernias. Useful after large incisional hernias, component separation or with back problems.</p>',
    ar:'<p>غير ضروري للفتق البسيط. مفيد بعد الفتوق الندبية الكبيرة أو مع مشاكل الظهر.</p>',
    tr:'<p>Basit fıtıklar için zorunlu değildir. Büyük insizyonel fıtık veya bel sorunlarında faydalı olabilir.</p>'
  }},

{ id:'a36', cat:'allgemein',
  q:{ de:'Muss ich mein Körpergewicht reduzieren?', en:'Do I need to lose weight?', ar:'هل أخفض وزني؟', tr:'Kilo vermeli miyim?' },
  a:{
    de:'<p>Übergewicht (BMI &gt; 30) erhöht das Rückfallrisiko erheblich. <strong>Gewichtsreduktion vor und nach der OP</strong> ist sehr empfehlenswert.</p>',
    en:'<p>Obesity (BMI &gt; 30) significantly increases recurrence. <strong>Weight loss before and after surgery</strong> is strongly recommended.</p>',
    ar:'<p>السمنة (مؤشر &gt; 30) تزيد الارتجاع. <strong>تقليل الوزن قبل وبعد العملية</strong> مُوصى به.</p>',
    tr:'<p>Obezite (VKİ &gt; 30) nüksü artırır. <strong>Ameliyat öncesi/sonrası kilo verme</strong> şiddetle önerilir.</p>'
  }},

{ id:'a37', cat:'allgemein',
  q:{ de:'Soll ich meine Ernährung umstellen?', en:'Should I change my diet?', ar:'هل أغير نظامي الغذائي؟', tr:'Beslenmemi değiştirmeli miyim?' },
  a:{
    de:'<ul><li>Ballaststoffreiche Ernährung beugt Verstopfung vor (Pressen erhöht den Bauchdruck!)</li><li>Ausreichend trinken (mindestens 1,5–2 Liter/Tag)</li><li>Übergewicht durch gesunde Ernährung reduzieren</li></ul>',
    en:'<ul><li>High-fibre diet prevents constipation (straining raises abdominal pressure!)</li><li>Drink enough (at least 1.5–2 L/day)</li><li>Reduce excess weight through healthy eating</li></ul>',
    ar:'<ul><li>الألياف تمنع الإمساك (الضغط يرفع ضغط البطن!)</li><li>اشرب 1.5–2 لتر يومياً</li><li>قلّل الوزن بنظام صحي</li></ul>',
    tr:'<ul><li>Lifli beslenme kabızlığı önler</li><li>Günde en az 1,5–2 L su</li><li>Sağlıklı beslenme ile kilo verin</li></ul>'
  }},

{ id:'a38', cat:'allgemein',
  q:{ de:'Wie lange bin ich krankgeschrieben?', en:'How long on sick leave?', ar:'كم مدة الإجازة المرضية؟', tr:'Ne kadar raporlu olurum?' },
  a:{
    de:'<ul><li>Büroarbeit: ca. 1–2 Wochen</li><li>Mittelschwere Arbeit: ca. 2–4 Wochen</li><li>Schwerarbeit: ca. 4–8 Wochen</li></ul><p>Individuell – immer nach Absprache mit dem Chirurgen und Hausarzt.</p>',
    en:'<ul><li>Office work: ~1–2 weeks</li><li>Moderate work: ~2–4 weeks</li><li>Heavy work: ~4–8 weeks</li></ul><p>Individual — always discuss with surgeon and GP.</p>',
    ar:'<ul><li>عمل مكتبي: 1–2 أسبوع</li><li>متوسط: 2–4 أسابيع</li><li>ثقيل: 4–8 أسابيع</li></ul><p>فردي — بالتنسيق مع الجراح وطبيب الأسرة.</p>',
    tr:'<ul><li>Ofis: ~1–2 hafta</li><li>Orta: ~2–4 hafta</li><li>Ağır: ~4–8 hafta</li></ul><p>Bireysel — cerrah ve aile hekimiyle.</p>'
  }},

{ id:'a39', cat:'allgemein',
  q:{ de:'Wann ist die erste Nachsorgeuntersuchung?', en:'When is the first follow-up?', ar:'متى أول مراجعة؟', tr:'İlk kontrol ne zaman?' },
  a:{
    de:'<p>Die Nachkontrollen finden üblicherweise <strong>am ersten Tag nach der Operation</strong>, nach <strong>einer Woche</strong>, nach <strong>drei Monaten</strong> sowie nach <strong>einem, fünf und zehn Jahren</strong> zur Qualitätssicherung statt.</p>',
    en:'<p>Follow-ups are usually <strong>day 1 after surgery</strong>, after <strong>1 week</strong>, <strong>3 months</strong> and at <strong>1, 5 and 10 years</strong> for quality assurance.</p>',
    ar:'<p>المراجعات: <strong>اليوم التالي</strong>، بعد <strong>أسبوع</strong>، <strong>3 أشهر</strong>، وبعد <strong>سنة و5 و10 سنوات</strong>.</p>',
    tr:'<p>Kontroller: <strong>1. gün</strong>, <strong>1 hafta</strong>, <strong>3 ay</strong>, <strong>1, 5 ve 10 yıl</strong> sonra.</p>'
  }},

{ id:'a40', cat:'allgemein',
  q:{ de:'Wie erkenne ich, ob die Hernie zurückgekehrt ist (Rezidiv)?', en:'How to recognise hernia recurrence?', ar:'كيف أعرف عودة الفتق؟', tr:'Fıtık nüksü nasıl anlaşılır?' },
  a:{
    de:'<p>Neue oder wiederkehrende Vorwölbung an der Operationsstelle – oft zunächst nur beim Husten oder Pressen.</p>',
    en:'<p>A new or recurring bulge at the operation site — often initially only when coughing or straining.</p>',
    ar:'<p>انتفاخ جديد أو متكرر في موقع العملية — غالباً عند السعال أو الضغط.</p>',
    tr:'<p>Ameliyat bölgesinde yeni/yinelenen şişlik — genellikle önce sadece öksürme/ıkınmada.</p>'
  }},

{ id:'a41', cat:'allgemein',
  q:{ de:'Was tun bei einem Rezidiv?', en:'What to do in case of recurrence?', ar:'ماذا أفعل عند الارتجاع؟', tr:'Nüks olursa ne yapılır?' },
  a:{
    de:'<p>Eine erneute Operation ist möglich. Die Methode hängt von einigen Faktoren ab, vor allem der Methode der ersten Bauchwandoperation. Besprechen Sie die beste Methode mit dem Chirurgen.</p>',
    en:'<p>Re-operation is possible. The method depends on several factors — especially the technique used in the first repair. Discuss the best approach with your surgeon.</p>',
    ar:'<p>إعادة العملية ممكنة. تعتمد على عدة عوامل خاصة طريقة العملية السابقة. ناقش مع الجراح.</p>',
    tr:'<p>Yeniden ameliyat mümkündür. Yöntem, ilk onarım tekniğine bağlıdır. Cerrahınızla görüşün.</p>'
  }},

{ id:'a42', cat:'allgemein',
  q:{ de:'Kann eine Hernie in der Schwangerschaft auftreten?', en:'Hernia during pregnancy?', ar:'فتق أثناء الحمل؟', tr:'Hamilelikte fıtık?' },
  a:{
    de:'<p>Ja. Durch den erhöhten Bauchdruck in der Schwangerschaft können Nabel- und Leistenhernien entstehen oder sich verschlechtern. Die Operation wird meist <strong>nach der Geburt</strong> durchgeführt.</p>',
    en:'<p>Yes. Increased abdominal pressure during pregnancy can cause or worsen umbilical and inguinal hernias. Surgery usually <strong>after delivery</strong>.</p>',
    ar:'<p>نعم. زيادة الضغط أثناء الحمل قد تسبب أو تفاقم الفتق السري والأربي. العملية <strong>بعد الولادة</strong>.</p>',
    tr:'<p>Evet. Hamilelikte artan basınç göbek/kasık fıtığını oluşturabilir veya kötüleştirebilir. Ameliyat genellikle <strong>doğumdan sonra</strong>.</p>'
  }},

{ id:'a43', cat:'allgemein',
  q:{ de:'Kann eine stillende Mutter operiert werden?', en:'Can a breastfeeding mother be operated?', ar:'هل يمكن إجراء عملية للأم المرضعة؟', tr:'Emziren anne ameliyat olabilir mi?' },
  a:{
    de:'<p>Ja, nach Absprache mit dem Anästhesisten. Manche Narkosemittel gehen in die Muttermilch über. <strong>Kurzes Pausieren des Stillens (12–24 Stunden)</strong> kann empfohlen werden.</p>',
    en:'<p>Yes, after discussion with the anaesthetist. Some anaesthetics pass into breast milk. A <strong>short pause (12–24 hours)</strong> may be recommended.</p>',
    ar:'<p>نعم، بعد التنسيق مع طبيب التخدير. بعض المخدرات تنتقل للحليب. قد يوصى <strong>بإيقاف 12–24 ساعة</strong>.</p>',
    tr:'<p>Evet, anestezi uzmanıyla görüşülerek. Bazı anestezikler süte geçer. <strong>Kısa ara (12–24 saat)</strong> önerilebilir.</p>'
  }},

{ id:'a44', cat:'allgemein',
  q:{ de:'Wie werden Hernien bei älteren Patienten behandelt?', en:'Hernias in elderly patients?', ar:'الفتق عند كبار السن؟', tr:'Yaşlı hastalarda fıtık?' },
  a:{
    de:'<p>Das Alter alleine ist keine Kontraindikation. Bei entsprechend gesunden älteren Patienten ist die Operation sicher. Bei Hochrisikopatienten (Herzinsuffizienz, Nierenversagen) wird das Risiko individuell abgewogen.</p>',
    en:'<p>Age alone is not a contraindication. In healthy elderly patients surgery is safe. For high-risk patients (heart/kidney failure) risk is weighed individually.</p>',
    ar:'<p>العمر وحده ليس مانعاً. عند المسنين الأصحاء العملية آمنة. مرضى عاليي الخطورة يُقاس فردياً.</p>',
    tr:'<p>Sadece yaş kontrendikasyon değil. Sağlıklı yaşlılarda ameliyat güvenli. Yüksek riskli hastalarda bireysel değerlendirilir.</p>'
  }},

{ id:'a45', cat:'allgemein',
  q:{ de:'Was ist bei Patienten mit Diabetes zu beachten?', en:'What about diabetic patients?', ar:'ماذا عن مرضى السكري؟', tr:'Diyabet hastalarında?' },
  a:{
    de:'<p>Diabetes erhöht das <strong>Infektionsrisiko</strong> und verlangsamt die Wundheilung. Gute Blutzuckereinstellung vor und nach der OP ist entscheidend. Metformin wird vor der OP nach Rücksprache mit dem Narkosearzt pausiert.</p>',
    en:'<p>Diabetes increases <strong>infection risk</strong> and slows healing. Good glycaemic control before and after surgery is essential. Metformin is paused before surgery after consulting the anaesthetist.</p>',
    ar:'<p>السكري يزيد <strong>خطر العدوى</strong> ويبطئ الالتئام. ضبط السكر ضروري. Metformin يوقف بعد استشارة طبيب التخدير.</p>',
    tr:'<p>Diyabet <strong>enfeksiyon riskini</strong> artırır, iyileşmeyi yavaşlatır. İyi şeker kontrolü esastır. Metformin anestezi uzmanına danışılarak kesilir.</p>'
  }},

{ id:'a46', cat:'allgemein',
  q:{ de:'Können Kinder an Leistenhernien erkranken?', en:'Can children get inguinal hernias?', ar:'هل يصاب الأطفال بالفتق الأربي؟', tr:'Çocuklarda kasık fıtığı olur mu?' },
  a:{
    de:'<p>Ja! Bei Kindern (vor allem Jungen) kann der Leistenkanal angeboren offen bleiben. Die OP unterscheidet sich von der bei Erwachsenen – <strong>kein Netz nötig</strong>, einfache Naht reicht.</p>',
    en:'<p>Yes! In children (especially boys) the inguinal canal may remain open from birth. The operation differs from adults — <strong>no mesh needed</strong>, simple suture suffices.</p>',
    ar:'<p>نعم! عند الأطفال (خاصة الذكور) قد تبقى القناة مفتوحة. العملية تختلف — <strong>لا حاجة لشبكة</strong>، خياطة بسيطة.</p>',
    tr:'<p>Evet! Çocuklarda (özellikle erkeklerde) kanal doğuştan açık kalabilir. Yetişkinlerden farklı — <strong>yama gerekmez</strong>, basit dikiş yeterli.</p>'
  }},

{ id:'a47', cat:'allgemein',
  q:{ de:'Ich habe Angst vor der Narkose – was soll ich tun?', en:'I am afraid of anaesthesia — what to do?', ar:'أخاف من التخدير - ماذا أفعل؟', tr:'Anesteziden korkuyorum — ne yapmalıyım?' },
  a:{
    de:'<p>Sprechen Sie offen mit dem Anästhesisten im Vorgespräch. Moderne Narkosen sind sehr sicher. Bei Bedarf kann ein leichtes Beruhigungsmittel vor der OP gegeben werden.</p>',
    en:'<p>Talk openly to the anaesthetist beforehand. Modern anaesthesia is very safe. A mild sedative can be given before surgery if needed.</p>',
    ar:'<p>تحدث بصراحة مع طبيب التخدير. التخدير الحديث آمن جداً. يمكن إعطاء مهدئ خفيف عند الحاجة.</p>',
    tr:'<p>Anestezi uzmanıyla açık konuşun. Modern anestezi çok güvenli. Gerekirse hafif sakinleştirici verilebilir.</p>'
  }},

{ id:'a48', cat:'allgemein',
  q:{ de:'Ich habe Angst vor chronischen Schmerzen nach der OP – ist das begründet?', en:'I worry about chronic pain after surgery — is that justified?', ar:'أخاف من الألم المزمن بعد العملية', tr:'Ameliyat sonrası kronik ağrıdan korkuyorum' },
  a:{
    de:'<p>Chronische Schmerzen nach Hernienoperation (&gt; 3 Monate) kommen bei ca. 5–10 % der Patienten vor. Meist sind sie mild. Schwere chronische Schmerzen sind selten (1–3 %). Erfahrene Chirurgen verringern dieses Risiko durch nervenerhaltende Operationstechnik.</p>',
    en:'<p>Chronic pain (&gt; 3 months) occurs in about 5–10 % of patients. Usually mild. Severe chronic pain is rare (1–3 %). Experienced surgeons reduce this risk by nerve-sparing techniques.</p>',
    ar:'<p>الألم المزمن (&gt; 3 أشهر) عند 5–10% من المرضى، عادةً خفيف. الشديد نادر (1–3%). الجراحون الخبراء يقللون الخطر بتقنيات حافظة للأعصاب.</p>',
    tr:'<p>Kronik ağrı (&gt; 3 ay) hastaların %5–10\'unda görülür. Genellikle hafiftir. Şiddetli kronik ağrı nadirdir (%1–3). Deneyimli cerrahlar sinir koruyucu teknikle riski azaltır.</p>'
  }},

{ id:'a49', cat:'allgemein',
  q:{ de:'Kann ich nach der Hernienoperation wieder vollständig aktiv sein?', en:'Can I be fully active again?', ar:'هل أعود كامل النشاط؟', tr:'Tam aktif olabilir miyim?' },
  a:{
    de:'<p>Bei den meisten Patienten: Ja! Nach vollständiger Heilung (6 Wochen) können Sie wieder alle Aktivitäten ausführen – Sport, Arbeit, Reisen. Eine Hernienoperation verbessert in der Regel die Lebensqualität erheblich.</p>',
    en:'<p>Yes for most patients! After full healing (6 weeks) you can resume all activities — sport, work, travel. Hernia surgery generally improves quality of life significantly.</p>',
    ar:'<p>لمعظم المرضى نعم! بعد الشفاء التام (6 أسابيع) جميع الأنشطة. تحسّن جودة الحياة بشكل كبير.</p>',
    tr:'<p>Çoğu hasta için evet! Tam iyileşmeden sonra (6 hafta) tüm aktiviteler. Yaşam kalitesini belirgin artırır.</p>'
  }},

{ id:'a50', cat:'allgemein',
  q:{ de:'Werden die Kosten von der Krankenkasse übernommen?', en:'Are costs covered by health insurance?', ar:'هل يغطي التأمين التكاليف؟', tr:'Maliyetleri sigorta karşılar mı?' },
  a:{
    de:'<p>Ja. Hernienoperationen sind medizinisch indizierte Eingriffe und werden vollständig von der gesetzlichen und privaten Krankenversicherung übernommen.</p>',
    en:'<p>Yes. Hernia operations are medically indicated and fully covered by both statutory and private health insurance.</p>',
    ar:'<p>نعم. عمليات الفتق ذات استطباب طبي ويغطيها التأمين العام والخاص بالكامل.</p>',
    tr:'<p>Evet. Fıtık ameliyatları tıbbi endikasyonludur, devlet ve özel sigorta tamamen karşılar.</p>'
  }},

{ id:'a51', cat:'allgemein',
  q:{ de:'Werden die Kosten einer operativen Behandlung der Rektusdiastase von der Krankenkasse übernommen?', en:'Are diastasis recti surgery costs covered?', ar:'هل يغطي التأمين تباعد المستقيمتين؟', tr:'Rektus diyastazı ameliyatı karşılanır mı?' },
  a:{
    de:'<p>In der Regel werden die Kosten für eine operative Behandlung einer Rektusdiastase <strong>nicht</strong> von den gesetzlichen Krankenkassen übernommen. Die Krankenkassen stufen den Eingriff meist als ästhetische Operation ein, da eine alleinige Rektusdiastase oft keinen eigenständigen Krankheitswert besitzt.</p>',
    en:'<p>Statutory insurance generally does <strong>not</strong> cover surgical treatment of diastasis recti, classifying it as cosmetic since isolated diastasis often lacks an independent disease value.</p>',
    ar:'<p>التأمين العام عادةً <strong>لا يغطي</strong> علاج تباعد المستقيمتين جراحياً، حيث يصنفه كتجميل.</p>',
    tr:'<p>Devlet sigortası genellikle rektus diyastazını <strong>karşılamaz</strong>; estetik olarak sınıflandırılır.</p>'
  }},

{ id:'a52', cat:'allgemein',
  q:{ de:'Brauche ich eine Überweisung zum Chirurgen?', en:'Do I need a referral?', ar:'هل أحتاج إحالة؟', tr:'Sevk gerekir mi?' },
  a:{
    de:'<p>Formal nicht unbedingt, aber sinnvoll. Mit Überweisung durch den Hausarzt sind alle Kosten direkt übernommen.</p>',
    en:'<p>Not formally required, but advisable. With a GP referral all costs are covered directly.</p>',
    ar:'<p>غير مطلوب رسمياً، لكنه مستحسن. مع إحالة طبيب الأسرة تُغطى التكاليف مباشرةً.</p>',
    tr:'<p>Resmi olarak şart değil, önerilir. Aile hekimi sevkiyle masraflar doğrudan karşılanır.</p>'
  }},

{ id:'a53', cat:'allgemein',
  q:{ de:'Kann ich mir den Chirurgen aussuchen?', en:'Can I choose my surgeon?', ar:'هل أختار الجراح؟', tr:'Cerrahı seçebilir miyim?' },
  a:{
    de:'<p>Ja! Als Kassen- sowie als Privatpatient können Sie eine Klinik und einen Chirurgen Ihrer Wahl aufsuchen.</p>',
    en:'<p>Yes! Both statutory and privately insured patients may choose any clinic and surgeon.</p>',
    ar:'<p>نعم! يمكن للمؤمنين العام والخاص اختيار العيادة والجراح.</p>',
    tr:'<p>Evet! Hem devlet hem özel sigortalı her klinik ve cerrahı seçebilir.</p>'
  }},

{ id:'a54', cat:'allgemein',
  q:{ de:'Soll ich mich bei einem spezialisierten Hernienzentrum operieren lassen?', en:'Should I go to a specialised hernia centre?', ar:'هل ألجأ لمركز فتق متخصص؟', tr:'Uzman fıtık merkezine gitmeli miyim?' },
  a:{
    de:'<p>Bei komplizierten Hernien (große Narbenhernien, Rezidivhernien) ist ein spezialisiertes Hernienzentrum empfehlenswert. In Deutschland gibt es von der Deutschen Herniengesellschaft (DHG) zertifizierte Zentren.</p>',
    en:'<p>For complicated hernias (large incisional or recurrent) a specialised centre is advisable. In Germany centres certified by the DHG (Deutsche Herniengesellschaft) exist.</p>',
    ar:'<p>للفتوق المعقدة (ندبية كبيرة أو متكررة) يُنصح بمركز متخصص. في ألمانيا مراكز معتمدة من DHG.</p>',
    tr:'<p>Karmaşık fıtıklarda uzman merkez önerilir. Almanya\'da DHG sertifikalı merkezler var.</p>'
  }},

{ id:'a55', cat:'allgemein',
  q:{ de:'Wo finde ich ein spezialisiertes Hernienzentrum in Deutschland?', en:'Where to find a specialised centre in Germany?', ar:'أين أجد مركز فتق متخصص؟', tr:'Almanya\'da uzman merkez nerede?' },
  a:{
    de:'<p>Die Praxis OC | OrthoChirurgie ist ein zertifiziertes Hernienzentrum. Weitere Zentren in Deutschland finden Sie unter <a href="http://www.herniamed.de/zertifizierte-hernienzentren" target="_blank" rel="noopener">www.herniamed.de/zertifizierte-hernienzentren</a>.</p>',
    en:'<p>OC | OrthoChirurgie is a certified hernia centre. Other German centres: <a href="http://www.herniamed.de/zertifizierte-hernienzentren" target="_blank" rel="noopener">herniamed.de/zertifizierte-hernienzentren</a>.</p>',
    ar:'<p>عيادة OC | OrthoChirurgie معتمدة. مراكز أخرى: <a href="http://www.herniamed.de/zertifizierte-hernienzentren" target="_blank" rel="noopener">herniamed.de/zertifizierte-hernienzentren</a>.</p>',
    tr:'<p>OC | OrthoChirurgie sertifikalıdır. Diğer merkezler: <a href="http://www.herniamed.de/zertifizierte-hernienzentren" target="_blank" rel="noopener">herniamed.de/zertifizierte-hernienzentren</a>.</p>'
  }},
];

// Export to global scope
if (typeof window !== 'undefined') {
  window.CATEGORIES = CATEGORIES;
  window.FAQ_PART1 = FAQ;
}
