/* ============================================================
   i18n — Multi-language system (EN / AR / RU)
   Client-side translation with RTL support
   ============================================================ */

const I18N = {
  // Current language
  current: 'en',
  supported: ['en', 'ar', 'ru'],
  names: { en: 'EN', ar: 'عربي', ru: 'RU' },
  rtl: ['ar'],

  // Translation dictionary
  t: {
    // ==================== NAVIGATION ====================
    'nav.home': { en: 'Home', ar: 'الرئيسية', ru: 'Главная' },
    'nav.services': { en: 'Services', ar: 'الخدمات', ru: 'Услуги' },
    'nav.portfolio': { en: 'Portfolio', ar: 'المشاريع', ru: 'Портфолио' },
    'nav.about': { en: 'About', ar: 'من نحن', ru: 'О нас' },
    'nav.quote': { en: 'Get a Quote', ar: 'طلب عرض سعر', ru: 'Получить предложение' },

    // ==================== MEGA MENU ====================
    'mega.exhibition': { en: 'Exhibition Design', ar: 'تصميم المعارض', ru: 'Дизайн выставок' },
    'mega.exhibition.desc': { en: 'Custom stands from 18 to 700+ sqm', ar: 'أجنحة مخصصة من 18 إلى 700+ م²', ru: 'Стенды от 18 до 700+ кв.м' },
    'mega.project': { en: 'Project Management', ar: 'إدارة المشاريع', ru: 'Управление проектами' },
    'mega.project.desc': { en: 'End-to-end logistics and delivery', ar: 'خدمات لوجستية شاملة', ru: 'Полный цикл логистики' },
    'mega.concept': { en: 'Conceptual Event Design', ar: 'تصميم الفعاليات', ru: 'Концептуальный дизайн' },
    'mega.concept.desc': { en: 'Immersive brand environments', ar: 'بيئات العلامة التجارية الغامرة', ru: 'Иммерсивные пространства' },
    'mega.media': { en: 'Content & Media', ar: 'المحتوى والإعلام', ru: 'Контент и медиа' },
    'mega.media.desc': { en: 'Video, graphics, interactive tech', ar: 'فيديو، رسومات، تقنيات تفاعلية', ru: 'Видео, графика, интерактив' },

    // ==================== HOME PAGE ====================
    'hero.badge': { en: 'Dubai-Based, Globally Deployed', ar: 'مقرنا دبي، عملنا عالمي', ru: 'Штаб-квартира в Дубае, проекты по всему миру' },
    'hero.title': { en: 'We Build Experiences<br>That <span class="accent">Command Attention</span>', ar: 'نبني تجارب<br>تجذب <span class="accent">كل الأنظار</span>', ru: 'Мы создаём пространства,<br>которые <span class="accent">захватывают внимание</span>' },
    'hero.sub': { en: 'Exhibition stands, event production, and immersive brand environments from <strong>18 sqm to 700 sqm</strong>. Trusted by Microsoft, Vanderlande, and brands across 6 countries.', ar: 'أجنحة معارض وإنتاج فعاليات وبيئات غامرة للعلامات التجارية من <strong>18 م² إلى 700 م²</strong>. موثوقون من مايكروسوفت وفاندرلاند وعلامات تجارية في 6 دول.', ru: 'Выставочные стенды, организация мероприятий и иммерсивные пространства от <strong>18 до 700 кв.м</strong>. Нам доверяют Microsoft, Vanderlande и бренды из 6 стран.' },
    'hero.cta.start': { en: 'Start Your Project', ar: 'ابدأ مشروعك', ru: 'Начать проект' },
    'hero.cta.work': { en: 'View Our Work', ar: 'عرض أعمالنا', ru: 'Наши работы' },
    'hero.stat.projects': { en: 'Projects Delivered', ar: 'مشروع منجز', ru: 'Проектов выполнено' },
    'hero.stat.countries': { en: 'Countries', ar: 'دول', ru: 'Стран' },
    'hero.stat.sqm': { en: 'sqm Largest Build', ar: 'م² أكبر مشروع', ru: 'кв.м крупнейший проект' },
    'hero.stat.ontime': { en: 'On-Time Delivery', ar: 'تسليم في الموعد', ru: 'Точно в срок' },

    'trust.label': { en: 'Trusted by industry leaders', ar: 'موثوقون من رواد الصناعة', ru: 'Нам доверяют лидеры отрасли' },

    // Services section
    'services.label': { en: 'What We Do', ar: 'ما نقدمه', ru: 'Наши услуги' },
    'services.title': { en: 'Full-Spectrum Exhibition<br><span class="accent">& Event Solutions</span>', ar: 'حلول شاملة للمعارض<br><span class="accent">والفعاليات</span>', ru: 'Полный спектр выставочных<br><span class="accent">и событийных решений</span>' },
    'services.desc': { en: 'From the first sketch to the final walkthrough, we handle every detail so you can focus on what matters: your audience.', ar: 'من أول رسم إلى الجولة النهائية، نتولى كل التفاصيل لتركز أنت على ما يهم: جمهورك.', ru: 'От первого эскиза до финальной приёмки — мы берём на себя каждую деталь, чтобы вы могли сосредоточиться на главном: вашей аудитории.' },
    'services.exhibition.title': { en: 'Exhibition Design & Build', ar: 'تصميم وبناء المعارض', ru: 'Дизайн и строительство стендов' },
    'services.exhibition.desc': { en: 'Custom-engineered exhibition stands — single and double decker — designed for maximum brand impact. Structural engineering, graphics, AV integration, and on-site installation worldwide.', ar: 'أجنحة معارض مصممة هندسيًا — طابق واحد ومزدوج — لتحقيق أقصى تأثير للعلامة التجارية.', ru: 'Индивидуальные выставочные стенды — одно- и двухэтажные — спроектированные для максимального воздействия бренда.' },
    'services.project.title': { en: 'Project Management', ar: 'إدارة المشاريع', ru: 'Управление проектами' },
    'services.project.desc': { en: 'End-to-end project coordination from vendor procurement and permitting to logistics and on-site supervision. Timelines, budgets, and compliance across international venues.', ar: 'تنسيق شامل للمشروع من شراء الموردين والتصاريح إلى الخدمات اللوجستية والإشراف الميداني.', ru: 'Полное управление проектом: от закупок и разрешений до логистики и контроля на площадке.' },
    'services.concept.title': { en: 'Conceptual Event Design', ar: 'تصميم الفعاليات المفاهيمي', ru: 'Концептуальный дизайн мероприятий' },
    'services.concept.desc': { en: 'Immersive brand environments that go beyond a booth. Themed experiences, interactive zones, hospitality areas, and spatial narratives that leave lasting impressions.', ar: 'بيئات غامرة للعلامة التجارية تتجاوز الجناح التقليدي. تجارب موضوعية ومناطق تفاعلية.', ru: 'Иммерсивные пространства, выходящие за рамки обычного стенда. Тематические зоны, интерактивные пространства.' },
    'services.media.title': { en: 'Content & Media Production', ar: 'إنتاج المحتوى والإعلام', ru: 'Контент и медиа-продакшн' },
    'services.media.desc': { en: 'Motion graphics, product videos, LED wall content, interactive displays, and event documentation. Media that amplifies your physical presence across digital channels.', ar: 'رسومات متحركة وفيديوهات المنتجات ومحتوى شاشات LED والعروض التفاعلية.', ru: 'Моушн-графика, продуктовые видео, контент для LED-стен, интерактивные дисплеи.' },
    'services.learn': { en: 'Learn more', ar: 'اعرف المزيد', ru: 'Подробнее' },

    // Cinematic dividers
    'cine.microsoft': { en: '700 sqm. Double Decker.<br>Microsoft at LEAP.', ar: '700 م². طابقين.<br>مايكروسوفت في LEAP.', ru: '700 кв.м. Двухэтажный.<br>Microsoft на LEAP.' },
    'cine.microsoft.sub': { en: 'Our largest build to date — a partner-centric pavilion in Riyadh.', ar: 'أكبر مشروع لنا حتى الآن — جناح شراكات في الرياض.', ru: 'Наш крупнейший проект — партнёрский павильон в Эр-Рияде.' },
    'cine.impact': { en: 'Every Square Meter<br>Engineered for Impact.', ar: 'كل متر مربع<br>مُهندَس للتأثير.', ru: 'Каждый квадратный метр<br>спроектирован для результата.' },

    // Portfolio section
    'portfolio.label': { en: 'Selected Work', ar: 'أعمال مختارة', ru: 'Избранные проекты' },
    'portfolio.title': { en: 'Projects That Speak<br><span class="accent">for Themselves</span>', ar: 'مشاريع تتحدث<br><span class="accent">عن نفسها</span>', ru: 'Проекты, которые<br><span class="accent">говорят сами за себя</span>' },
    'portfolio.desc': { en: 'From a 700 sqm double-decker for Microsoft to a refined 18 sqm compact stand — every project gets our full commitment.', ar: 'من جناح 700 م² مزدوج لمايكروسوفت إلى جناح مدمج 18 م² — كل مشروع يحظى بالتزامنا الكامل.', ru: 'От двухэтажного стенда 700 кв.м для Microsoft до компактного стенда 18 кв.м — каждый проект получает наше полное внимание.' },
    'portfolio.viewall': { en: 'View All Projects', ar: 'عرض جميع المشاريع', ru: 'Все проекты' },

    // Stats
    'stats.projects': { en: 'Projects Delivered', ar: 'مشروع منجز', ru: 'Проектов выполнено' },
    'stats.countries': { en: 'Countries Operated In', ar: 'دول عملنا فيها', ru: 'Стран присутствия' },
    'stats.industries': { en: 'Industries Served', ar: 'صناعة مخدومة', ru: 'Обслуживаемых отраслей' },
    'stats.ontime': { en: 'On-Time Delivery Rate', ar: 'معدل التسليم في الموعد', ru: 'Срок сдачи в срок' },

    // VoiceVault
    'vv.label': { en: 'Proprietary Technology', ar: 'تقنية خاصة', ru: 'Собственная технология' },
    'vv.desc': { en: 'Our proprietary audio experience system for exhibitions and events. VoiceVault creates targeted sound zones within your booth, delivering crystal-clear audio without bleeding into neighboring stands.', ar: 'نظام الصوت الخاص بنا للمعارض والفعاليات. يُنشئ VoiceVault مناطق صوتية مستهدفة داخل جناحك.', ru: 'Наша проприетарная аудиосистема для выставок и мероприятий. VoiceVault создаёт направленные звуковые зоны в вашем стенде.' },
    'vv.audio.title': { en: 'Directional Audio Zones', ar: 'مناطق صوت اتجاهية', ru: 'Направленные аудиозоны' },
    'vv.audio.desc': { en: 'Focused sound delivery within defined areas — no spillover to neighbors.', ar: 'توصيل صوت مركّز ضمن مناطق محددة — بدون تسرب للأجنحة المجاورة.', ru: 'Направленная подача звука в определённых зонах — без утечки к соседям.' },
    'vv.protect.title': { en: 'Content Protection', ar: 'حماية المحتوى', ru: 'Защита контента' },
    'vv.protect.desc': { en: 'Secure audio content delivery for product launches and confidential presentations.', ar: 'تسليم آمن للمحتوى الصوتي لإطلاق المنتجات والعروض السرية.', ru: 'Безопасная доставка аудиоконтента для презентаций и запуска продуктов.' },
    'vv.plug.title': { en: 'Plug-and-Play Integration', ar: 'تكامل سهل التركيب', ru: 'Интеграция Plug-and-Play' },
    'vv.plug.desc': { en: 'Deploys within any booth structure. No special infrastructure required.', ar: 'يعمل في أي هيكل جناح. لا يحتاج بنية تحتية خاصة.', ru: 'Разворачивается в любой конструкции стенда. Не требует специальной инфраструктуры.' },
    'vv.cta': { en: 'Request a Demo', ar: 'اطلب عرض تجريبي', ru: 'Запросить демо' },
    'vv.visual.title': { en: 'VoiceVault System', ar: 'نظام VoiceVault', ru: 'Система VoiceVault' },
    'vv.visual.desc': { en: 'Directional audio for immersive booth experiences', ar: 'صوت اتجاهي لتجارب جناح غامرة', ru: 'Направленный звук для иммерсивных выставочных пространств' },

    // About snapshot
    'about.label': { en: 'Who We Are', ar: 'من نحن', ru: 'О нас' },
    'about.title': { en: 'Built Different.<br><span class="accent">Built to Deliver.</span>', ar: 'مختلفون في البناء.<br><span class="accent">ملتزمون بالتسليم.</span>', ru: 'Другой подход.<br><span class="accent">Гарантия результата.</span>' },
    'about.p1': { en: 'We are a Dubai-based exhibition and event company that operates like a special operations unit: small, focused, lethal on deadlines. Every project gets senior-level attention from concept through final installation.', ar: 'شركة معارض وفعاليات مقرها دبي تعمل كوحدة عمليات خاصة: صغيرة ومركزة وحازمة في المواعيد.', ru: 'Мы — дубайская компания по организации выставок и мероприятий, работающая как спецподразделение: компактная, сфокусированная, безупречная по срокам.' },
    'about.p2': { en: 'Our team combines architectural design, structural engineering, and creative production under one roof — eliminating the handoff gaps that plague traditional agencies.', ar: 'يجمع فريقنا بين التصميم المعماري والهندسة الإنشائية والإنتاج الإبداعي تحت سقف واحد.', ru: 'Наша команда объединяет архитектурный дизайн, конструкторское проектирование и креативное продакшн под одной крышей.' },
    'about.learn': { en: 'Learn More', ar: 'اعرف المزيد', ru: 'Подробнее' },
    'about.talk': { en: 'Talk to Us', ar: 'تواصل معنا', ru: 'Связаться' },

    // CTA
    'cta.title': { en: 'Ready to Build Something<br>Remarkable?', ar: 'مستعد لبناء شيء<br>استثنائي؟', ru: 'Готовы создать нечто<br>выдающееся?' },
    'cta.desc': { en: 'Tell us about your next exhibition or event. We respond within 24 hours.', ar: 'أخبرنا عن معرضك أو فعاليتك القادمة. نرد خلال 24 ساعة.', ru: 'Расскажите о вашей следующей выставке или мероприятии. Отвечаем в течение 24 часов.' },
    'cta.start': { en: 'Start Your Project', ar: 'ابدأ مشروعك', ru: 'Начать проект' },
    'cta.see': { en: 'See Our Work', ar: 'شاهد أعمالنا', ru: 'Наши работы' },

    // Footer
    'footer.brand': { en: 'Turning vision into experience, every event, every time. Dubai-based exhibition design and event production for global brands.', ar: 'نحوّل الرؤية إلى تجربة، في كل فعالية، في كل مرة. تصميم معارض وإنتاج فعاليات من دبي للعلامات التجارية العالمية.', ru: 'Превращаем идеи в опыт, каждое мероприятие, каждый раз. Дизайн выставок и продакшн мероприятий из Дубая для мировых брендов.' },
    'footer.services': { en: 'Services', ar: 'الخدمات', ru: 'Услуги' },
    'footer.company': { en: 'Company', ar: 'الشركة', ru: 'Компания' },
    'footer.aboutus': { en: 'About Us', ar: 'من نحن', ru: 'О нас' },
    'footer.contact': { en: 'Contact', ar: 'اتصل بنا', ru: 'Контакты' },
    'footer.getintouch': { en: 'Get in Touch', ar: 'تواصل معنا', ru: 'Связаться' },

    // Contact page
    'contact.label': { en: 'Start a Project', ar: 'ابدأ مشروعاً', ru: 'Начать проект' },
    'contact.title': { en: "Let's Build Something <span class=\"accent\">Exceptional</span>", ar: 'لنبنِ شيئاً <span class="accent">استثنائياً</span>', ru: 'Давайте создадим нечто <span class="accent">исключительное</span>' },
    'contact.desc': { en: 'Fill out our project brief form below and we will respond with a detailed proposal within 24 hours. Every inquiry gets senior-level attention.', ar: 'املأ نموذج ملخص المشروع أدناه وسنرد بعرض مفصل خلال 24 ساعة.', ru: 'Заполните бриф ниже — мы ответим детальным предложением в течение 24 часов.' },
    'contact.direct': { en: 'Direct <span class="accent">Contact</span>', ar: '<span class="accent">اتصال</span> مباشر', ru: 'Прямая <span class="accent">связь</span>' },
    'contact.direct.desc': { en: 'Prefer a quick conversation? Reach out directly via phone, email, or WhatsApp. Our team is available Sunday through Thursday, 9:00 AM to 6:00 PM GST.', ar: 'تفضل محادثة سريعة؟ تواصل مباشرة عبر الهاتف أو البريد أو واتساب. فريقنا متاح من الأحد إلى الخميس.', ru: 'Предпочитаете быстрый разговор? Свяжитесь напрямую по телефону, email или WhatsApp. Мы доступны с воскресенья по четверг.' },
    'contact.office': { en: 'Office', ar: 'المكتب', ru: 'Офис' },
    'contact.phone': { en: 'Phone & WhatsApp', ar: 'الهاتف وواتساب', ru: 'Телефон и WhatsApp' },
    'contact.email': { en: 'Email', ar: 'البريد الإلكتروني', ru: 'Электронная почта' },
    'contact.social': { en: 'Social', ar: 'التواصل الاجتماعي', ru: 'Соцсети' },

    // About page
    'aboutpage.label': { en: 'Who We Are', ar: 'من نحن', ru: 'О нас' },
    'aboutpage.title': { en: 'Built Different. <span class="accent">Built to Deliver.</span>', ar: 'مختلفون في البناء. <span class="accent">ملتزمون بالتسليم.</span>', ru: 'Другой подход. <span class="accent">Гарантия результата.</span>' },
    'aboutpage.desc': { en: 'A Dubai-based exhibition and event company that operates like a special operations unit: small, focused, and relentless on deadlines.', ar: 'شركة معارض وفعاليات مقرها دبي تعمل كوحدة عمليات خاصة: صغيرة ومركزة ولا تتهاون في المواعيد.', ru: 'Дубайская компания по выставкам и мероприятиям, работающая как спецподразделение: компактная, сфокусированная, непреклонная по срокам.' },

    // Services page
    'servicespage.label': { en: 'Our Capabilities', ar: 'قدراتنا', ru: 'Наши возможности' },
    'servicespage.title': { en: 'End-to-End Exhibition <span class="accent">& Event Services</span>', ar: 'خدمات معارض وفعاليات <span class="accent">شاملة</span>', ru: 'Полный цикл выставочных <span class="accent">и событийных услуг</span>' },
    'servicespage.desc': { en: 'We design, engineer, build, and manage exhibition stands and events across the Middle East and beyond. One team. One point of accountability. Zero excuses.', ar: 'نصمم ونهندس ونبني وندير أجنحة المعارض والفعاليات في الشرق الأوسط وخارجه. فريق واحد. مسؤولية واحدة.', ru: 'Мы проектируем, строим и управляем выставочными стендами и мероприятиями по всему Ближнему Востоку. Одна команда. Одна точка ответственности.' },
  },

  // Get translation
  get(key) {
    const entry = this.t[key];
    if (!entry) return key;
    return entry[this.current] || entry.en || key;
  },

  // Apply translations to page
  apply() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = this.get(key);
      if (val !== key) el.innerHTML = val;
    });

    // Handle placeholder translations
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      const val = this.get(key);
      if (val !== key) el.placeholder = val;
    });

    // RTL support
    const isRTL = this.rtl.includes(this.current);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = this.current;

    // Update active state on language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.current);
    });
  },

  // Switch language
  switchTo(lang) {
    if (!this.supported.includes(lang)) return;
    this.current = lang;
    localStorage.setItem('perduck-lang', lang);
    this.apply();
  },

  // Initialize
  init() {
    // Check localStorage
    const saved = localStorage.getItem('perduck-lang');
    if (saved && this.supported.includes(saved)) {
      this.current = saved;
    } else {
      // Auto-detect from browser
      const browserLang = (navigator.language || '').substring(0, 2);
      if (this.supported.includes(browserLang)) {
        this.current = browserLang;
      }
    }

    // Build language switcher
    this.buildSwitcher();

    // Apply translations
    this.apply();
  },

  buildSwitcher() {
    const container = document.querySelector('.lang-switcher');
    if (!container) return;

    this.supported.forEach(lang => {
      const btn = document.createElement('button');
      btn.className = 'lang-btn' + (lang === this.current ? ' active' : '');
      btn.dataset.lang = lang;
      btn.textContent = this.names[lang];
      btn.setAttribute('aria-label', 'Switch to ' + lang);
      btn.addEventListener('click', () => this.switchTo(lang));
      container.appendChild(btn);
    });
  }
};

// Auto-init when DOM ready
document.addEventListener('DOMContentLoaded', () => I18N.init());
