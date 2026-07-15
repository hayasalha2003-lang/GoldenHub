'use strict';

// ============================================================
// 1. TRANSLATION DICTIONARY
// ============================================================
const i18n = {
  ar: {
    // Navbar
    nav_home: 'الرئيسية',
    nav_about: 'من نحن',
    nav_services: 'المميزات',
    nav_spaces: 'المساحات',
    nav_pricing: 'الأسعار',
    nav_contact: 'تواصل معنا',
    btn_book: 'احجز الآن',

    // Hero
    hero_sub_1: 'Golden Hub',
    hero_title_1: 'مساحتك المثالية<br>للعمل <span class="gold">والإبداع</span>',
    hero_desc_1: 'بيئة هادئة وعصرية للفريلانسرز ورواد الأعمال الذين يبحثون عن التميز.',
    hero_sub_2: 'Work Smart',
    hero_title_2: 'كل ما تحتاجه<br>لإنجاز <span class="gold">أعمالك</span>',
    hero_desc_2: 'إنترنت سريع ومساحات مريحة وتجربة احترافية لا مثيل لها.',
    hero_sub_3: 'Creative Space',
    hero_title_3: 'اجتمع، ابتكر،<br><span class="gold">وانطلق</span>',
    hero_desc_3: 'مساحات مصممة لتمنحك أعلى إنتاجية وأكثر إلهام.',
    hero_sub_4: 'Premium Experience',
    hero_title_4: 'استمتع بأجواء<br>عمل <span class="gold">فاخرة</span>',
    hero_desc_4: 'تصميم عصري وخدمات متكاملة في مكان واحد يليق بطموحك.',
    hero_btn_primary: 'احجز مساحتك',
    hero_btn_ghost: 'استكشف',

    // Metrics strip
    metric_1_title: 'أمن 24/7',
    metric_1_sub: 'كاميرات · دخول آمن',
    metric_2_title: '1 Gbps',
    metric_2_sub: 'إنترنت فائق السرعة',
    metric_3_title: 'مجاني دائماً',
    metric_3_sub: 'قهوة · شاي · مشروبات',
    metric_4_title: 'متاح 24/7',
    metric_4_sub: 'كل أيام الأسبوع',

    // Features
    feat_tag: 'ما يميّزنا',
    feat_title: 'كل ما تحتاجه<br><b>تحت سقف واحد</b>',
    feat_desc: 'صمّمنا كل تفصيلة لتمنحك أقصى تركيز وأعلى إنتاجية كل يوم',
    feat_1_title: 'أمن وخصوصية',
    feat_1_desc: 'كاميرات مراقبة ذكية وبطاقات دخول مؤمّنة — بياناتك وأعمالك محمية على مدار الساعة',
    feat_2_title: 'إنترنت فائق السرعة',
    feat_2_desc: 'ألياف ضوئية بسرعة 1 جيجابت — لا تقطّع ولا تأخير مهما كان حجم ملفاتك',
    feat_3_title: 'مكاتب خاصة',
    feat_3_desc: 'غرف مغلقة بالكامل لمن يحتاج عزلة تامة — فكّر بعمق وأنجز بكفاءة عالية',
    feat_4_title: 'قهوة مجانية دائماً',
    feat_4_desc: 'قهوة عربية، إسبريسو وشاي أعشاب مجانية طوال اليوم — ابدأ صباحك بنشاط وطاقة',
    feat_5_title: 'دعم فني فوري',
    feat_5_desc: 'فريق متخصص على بُعد نداء — من إعدادات الشبكة حتى الطباعة، نحلّ لك كل شيء',
    feat_6_title: 'غرف اجتماعات',
    feat_6_desc: '5 غرف مجهزة بشاشات 4K ونظام صوت احترافي — مثالية لعروضك مع العملاء',
    feat_cta_text: 'تعرف على قصتنا وشغفنا',
    feat_cta_btn: 'اعرف أكثر عنا',

    // Spaces
    sp_tag: 'مساحاتنا',
    sp_title: 'اختر مساحتك<br><b>المثالية</b>',
    sp_desc: 'أربعة بيئات مختلفة — كل واحدة مصمّمة لاحتياج مختلف',
    sp_1_title: 'محطات العمل الفردية',
    sp_1_desc: 'بيئة هادئة مع إضاءة مثالية للتركيز',
    sp_2_title: 'غرف الاجتماعات',
    sp_2_desc: 'شاشات 4K ونظام صوت احترافي',
    sp_3_title: 'مكاتب خاصة',
    sp_3_desc: 'عزلة تامة لأقصى إنتاجية',
    sp_4_title: 'المساحة المفتوحة',
    sp_4_desc: 'أجواء تعاونية ملهمة',
    sp_btn: 'عرض جميع المساحات',

    // Pricing
    pr_tag: 'الباقات والأسعار',
    pr_title: 'استثمر في<br><b>نجاحك</b>',
    pr_desc: 'مرونة كاملة — لا عقود طويلة ولا التزامات، ابدأ متى تشاء',
    pr_toggle_monthly: 'شهري',
    pr_toggle_yearly: 'سنوي',
    pr_toggle_save: 'وفّر 20%',
    pr_plan_1: 'يوم واحد',
    pr_plan_2: 'شهري',
    pr_plan_3: 'مكتب مخصص',
    pr_badge: 'الأكثر طلباً',
    pr_per_day: '/ يوم',
    pr_per_month: '/ شهر',
    pr_feat_1_1: 'الوصول لساعات العمل',
    pr_feat_1_2: 'إنترنت عالي السرعة',
    pr_feat_1_3: 'استخدام المرافق المشتركة',
    pr_feat_1_4: 'قهوة ومشروبات مجانية',
    pr_feat_1_5: 'غرفة اجتماعات (2 ساعات)',
    pr_feat_2_1: 'طباعة ومسح ضوئي',
    pr_feat_2_2: 'إنترنت عالي السرعة',
    pr_feat_2_3: 'قهوة ومشروبات مجانية',
    pr_feat_2_4: 'وصول 24/7',
    pr_feat_2_5: 'غرفة اجتماعات (4 ساعات)',
    pr_feat_2_6: 'أولوية في الحجز',
    pr_feat_3_1: 'مكتب خاص مخصص',
    pr_feat_3_2: 'إنترنت عالي السرعة',
    pr_feat_3_3: 'قهوة ومشروبات مجانية',
    pr_feat_3_5: 'خزانة تخزين خاصة',
    pr_feat_3_6: 'غرفة اجتماعات (8 ساعات)',
    pr_btn: 'احجز الآن',

    // Statistics
    stat_1: 'عضو سعيد',
    stat_2: 'محطة عمل',
    stat_3: 'غرف اجتماعات',
    stat_4: 'كوب قهوة شهرياً',

    // Footer
    ft_desc: 'مساحة عمل فاخرة صُمّمت لرواد الأعمال والفريلانسرز الباحثين عن بيئة احترافية تُلهم الإبداع وتدعم النجاح والتطور.',
    ft_quick_title: 'روابط سريعة',
    ft_link_home: 'الرئيسية',
    ft_link_about: 'من نحن',
    ft_link_spaces: 'المساحات',
    ft_link_pricing: 'الأسعار',
    ft_contact_title: 'تواصل معنا',
    ft_phone_label: 'هاتف',
    ft_email_label: 'بريد إلكتروني',
    ft_address_label: 'العنوان',
    ft_address_link: 'غزة - السرايا، بجوار هيثم الشوا',

    // Modal & Form
    modal_title: 'احجز مساحتك الآن',
    modal_subtitle: 'عبّئ بياناتك وسنتواصل معك لتأكيد الحجز',
    f_name: 'الاسم الكامل',
    f_name_ph: 'اكتب اسمك الكامل',
    f_phone: 'رقم الهاتف',
    f_email: 'البريد الإلكتروني',
    f_date: 'تاريخ البدء',
    f_submit: 'تأكيد الحجز',
    success_title: 'تم الحجز بنجاح!',
    success_text: 'سنتواصل معك خلال 24 ساعة لتأكيد التفاصيل',
    ft_copyright: 'جميع الحقوق محفوظة.',
  },

  en: {
    // Navbar
    nav_home: 'Home',
    nav_about: 'About Us',
    nav_services: 'Features',
    nav_spaces: 'Spaces',
    nav_pricing: 'Pricing',
    nav_contact: 'Contact Us',
    btn_book: 'Book Now',

    // Hero
    hero_sub_1: 'Golden Hub',
    hero_title_1: 'Your perfect space<br>for <span class="gold">work and creativity</span>',
    hero_desc_1: 'A calm and modern environment for freelancers and entrepreneurs seeking excellence.',
    hero_sub_2: 'Work Smart',
    hero_title_2: 'Everything you need<br>to get <span class="gold">your work done</span>',
    hero_desc_2: 'Fast internet, comfortable spaces, and an unparalleled professional experience.',
    hero_sub_3: 'Creative Space',
    hero_title_3: 'Gather, innovate,<br><span class="gold">and launch</span>',
    hero_desc_3: 'Spaces designed to give you maximum productivity and inspiration.',
    hero_sub_4: 'Premium Experience',
    hero_title_4: 'Enjoy a <span class="gold">luxurious</span><br>work atmosphere',
    hero_desc_4: 'Modern design and integrated services in one place that matches your ambition.',
    hero_btn_primary: 'Book Your Space',
    hero_btn_ghost: 'Explore',

    // Metrics strip
    metric_1_title: '24/7 Security',
    metric_1_sub: 'Cameras · Secure Access',
    metric_2_title: '1 Gbps',
    metric_2_sub: 'Ultra-Fast Internet',
    metric_3_title: 'Always Free',
    metric_3_sub: 'Coffee · Tea · Drinks',
    metric_4_title: 'Open 24/7',
    metric_4_sub: 'All Week Long',

    // Features
    feat_tag: 'What Makes Us Special',
    feat_title: 'Everything you need<br><b>under one roof</b>',
    feat_desc: 'We designed every detail to give you maximum focus and productivity every day',
    feat_1_title: 'Security & Privacy',
    feat_1_desc: 'Smart surveillance cameras and secure access cards — your data and work are protected around the clock',
    feat_2_title: 'Ultra-Fast Internet',
    feat_2_desc: 'Fiber optics at 1 Gbps — no interruptions or delays no matter the size of your files',
    feat_3_title: 'Private Offices',
    feat_3_desc: 'Fully enclosed rooms for those who need complete isolation — think deeply and work efficiently',
    feat_4_title: 'Free Coffee Always',
    feat_4_desc: 'Arabic coffee, espresso, and herbal tea free all day — start your morning with energy and vitality',
    feat_5_title: 'Immediate IT Support',
    feat_5_desc: 'A specialized team on call — from network setup to printing, we solve everything for you',
    feat_6_title: 'Meeting Rooms',
    feat_6_desc: '5 rooms equipped with 4K screens and a professional sound system — perfect for your client presentations',
    feat_cta_text: 'Discover our story and passion',
    feat_cta_btn: 'Learn More About Us',

    // Spaces
    sp_tag: 'Our Spaces',
    sp_title: 'Choose your<br><b>ideal space</b>',
    sp_desc: 'Four different environments — each designed for a different need',
    sp_1_title: 'Individual Workstations',
    sp_1_desc: 'A quiet environment with perfect lighting for focus',
    sp_2_title: 'Meeting Rooms',
    sp_2_desc: '4K screens and professional sound system',
    sp_3_title: 'Private Offices',
    sp_3_desc: 'Complete isolation for maximum productivity',
    sp_4_title: 'Open Space',
    sp_4_desc: 'Inspiring collaborative atmosphere',
    sp_btn: 'View All Spaces',

    // Pricing
    pr_tag: 'Plans & Pricing',
    pr_title: 'Invest in<br><b>your success</b>',
    pr_desc: 'Full flexibility — no long-term contracts or commitments, start whenever you want',
    pr_toggle_monthly: 'Monthly',
    pr_toggle_yearly: 'Yearly',
    pr_toggle_save: 'Save 20%',
    pr_plan_1: 'Day Pass',
    pr_plan_2: 'Monthly',
    pr_plan_3: 'Dedicated Office',
    pr_badge: 'Most Popular',
    pr_per_day: '/ Day',
    pr_per_month: '/ Month',
    pr_feat_1_1: 'Access during working hours',
    pr_feat_1_2: 'High-speed internet',
    pr_feat_1_3: 'Use of shared facilities',
    pr_feat_1_4: 'Free coffee and drinks',
    pr_feat_1_5: 'Meeting room (2 hours)',
    pr_feat_2_1: 'Printing & scanning',
    pr_feat_2_2: 'High-speed internet',
    pr_feat_2_3: 'Free coffee and drinks',
    pr_feat_2_4: '24/7 access',
    pr_feat_2_5: 'Meeting room (4 hours)',
    pr_feat_2_6: 'Priority booking',
    pr_feat_3_1: 'Dedicated private desk',
    pr_feat_3_2: 'High-speed internet',
    pr_feat_3_3: 'Free coffee and drinks',
    pr_feat_3_5: 'Private storage locker',
    pr_feat_3_6: 'Meeting room (8 hours)',
    pr_btn: 'Book Now',

    // Statistics
    stat_1: 'Happy Members',
    stat_2: 'Workstations',
    stat_3: 'Meeting Rooms',
    stat_4: 'Coffee Cups / Month',

    // Footer
    ft_desc: 'A luxurious workspace designed for entrepreneurs and freelancers seeking a professional environment that inspires creativity and supports success and development.',
    ft_quick_title: 'Quick Links',
    ft_link_home: 'Home',
    ft_link_about: 'About Us',
    ft_link_spaces: 'Spaces',
    ft_link_pricing: 'Pricing',
    ft_contact_title: 'Contact Us',
    ft_phone_label: 'Phone',
    ft_email_label: 'Email',
    ft_address_label: 'Address',
    ft_address_link: 'Gaza - Al-Saraya, Next to Haitham Al-Shawa',

    // Modal & Form
    modal_title: 'Book Your Space Now',
    modal_subtitle: "Fill in your details and we'll contact you to confirm",
    f_name: 'Full Name',
    f_name_ph: 'Enter your full name',
    f_phone: 'Phone Number',
    f_email: 'Email Address',
    f_date: 'Start Date',
    f_submit: 'Confirm Booking',
    success_title: 'Booking Confirmed!',
    success_text: "We'll contact you within 24 hours to confirm the details",
    ft_copyright: 'All Rights Reserved.',
  }
};


// ============================================================
// 2. LANGUAGE SWITCHING
// ============================================================

/**
 * Applies the selected language to the entire document.
 * Updates text content, placeholders, HTML lang/dir attributes,
 * switcher visual state, and persists the choice.
 * @param {string} lang - Language code ('ar' or 'en')
 */
function applyLanguage(lang) {
  const dict = i18n[lang] || i18n.ar;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Update inner HTML for elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerHTML = dict[key];
  });

  // Update placeholder attributes for elements with data-i18n-ph
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key]) el.setAttribute('placeholder', dict[key]);
  });

  // Toggle the visual pill on all language switchers
  document.querySelectorAll('.lang-switch').forEach(sw => {
    sw.classList.toggle('is-en', lang === 'en');
  });

  localStorage.setItem('gh_lang', lang);
}

/**
 * Initializes language switcher buttons with click/keyboard events.
 * Restores the previously saved language from localStorage.
 */
function initLanguageSwitch() {
  const savedLang = localStorage.getItem('gh_lang') || 'ar';
  applyLanguage(savedLang);

  const switches = [
    document.getElementById('langSwitch'),
    document.getElementById('langSwitchMob')
  ];

  switches.forEach(sw => {
    if (!sw) return;

    const toggleLang = () => {
      const currentLang = document.documentElement.lang || 'ar';
      applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
    };

    sw.addEventListener('click', toggleLang);
    sw.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleLang();
      }
    });
  });
}


// ============================================================
// 3. NAVBAR & MOBILE MENU
// ============================================================

/** Adds a "scrolled" class to the navbar when the page is scrolled down */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 40);

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Set initial state
}

/** Handles mobile hamburger menu open/close behavior */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobMenu = document.getElementById('mobMenu');
  const navbar = document.getElementById('navbar');
  if (!hamburger || !mobMenu || !navbar) return;

  const openMenu = () => {
    hamburger.classList.add('open');
    mobMenu.classList.add('open');
    navbar.classList.add('mob-open');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    hamburger.classList.remove('open');
    mobMenu.classList.remove('open');
    navbar.classList.remove('mob-open');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', () => {
    hamburger.classList.contains('open') ? closeMenu() : openMenu();
  });

  // Close menu when a navigation link is clicked
  document.querySelectorAll('.mob-lnk').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu when clicking the backdrop (outside the menu panel)
  mobMenu.addEventListener('click', e => {
    if (e.target === mobMenu) closeMenu();
  });

  // Close menu with the Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobMenu.classList.contains('open')) closeMenu();
  });
}


// ============================================================
// 4. ACTIVE LINK TRACKING & SMOOTH SCROLL
// ============================================================

/** Highlights the current section's link in the navbar using IntersectionObserver */
function initActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === `#${entry.target.id}`);
      });
    });
  }, {
    threshold: 0.4,
    rootMargin: '-76px 0px 0px 0px'
  });

  sections.forEach(section => observer.observe(section));
}

/** Enables smooth scrolling for all internal anchor links */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      e.preventDefault();
      window.scrollTo({
        top: targetEl.getBoundingClientRect().top + window.scrollY - 76,
        behavior: 'smooth'
      });
    });
  });
}


// ============================================================
// 5. BOOKING MODAL
// ============================================================

/** Manages the booking modal: open, close, form submission, and success state */
function initBookingModal() {
  const overlay = document.getElementById('bookingModal');
  const closeBtn = document.getElementById('closeBookingBtn');
  const form = document.getElementById('bookingForm');
  const formWrap = document.getElementById('bookingFormWrap');
  const success = document.getElementById('bookingSuccess');
  if (!overlay || !form) return;

  const openModal = () => {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (formWrap) formWrap.style.display = 'block';
    if (success) success.classList.remove('show');
    form.reset();
  };

  const closeModal = () => {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    if (formWrap) formWrap.style.display = 'block';
    if (success) success.classList.remove('show');
    form.reset();
  };

  // Expose openModal globally for inline onclick handlers in HTML
  window.openBookingModal = openModal;

  // Attach open triggers
  document.querySelectorAll('#openBookingBtn, #openBookingBtnMob').forEach(btn => {
    if (btn) btn.addEventListener('click', openModal);
  });

  // Attach close triggers
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
  });

  // Form submission
  form.addEventListener('submit', e => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Show success state
    if (formWrap) formWrap.style.display = 'none';
    if (success) success.classList.add('show');

    // Auto-close after 3 seconds
    setTimeout(() => {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
      if (formWrap) formWrap.style.display = 'block';
      if (success) success.classList.remove('show');
      form.reset();
    }, 3000);
  });
}


// ============================================================
// 6. HERO SECTION (Slider, Particles, Sparkles)
// ============================================================

/**
 * Initializes the entire hero section:
 * - Preloads slide background images
 * - Sets up the particle canvas
 * - Creates sparkle effects
 * - Starts the slider logic
 */
function initHero() {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  if (!totalSlides) return;

  // Preload background images for smoother transitions
  slides.forEach(slide => {
    const bg = slide.dataset.bg;
    if (!bg) return;
    const img = new Image();
    img.src = bg;
    img.onload = () => { slide.style.backgroundImage = `url('${bg}')`; };
    slide.style.backgroundImage = `url('${bg}')`; // Fallback in case image is cached
  });

  initHeroParticles();
  document.querySelectorAll('.slide-sparkles').forEach(container => createSparkles(container));
  initSlider(slides, totalSlides);
}

/**
 * Creates and animates a particle system on a canvas element.
 * Particles react to mouse movement with subtle attraction.
 */
function initHeroParticles() {
  const canvas = document.getElementById('hero-particles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height, particles = [], animationId;
  let mouseX = -9999, mouseY = -9999;

  const GOLD_COLORS = [
    'rgba(212,175,55,',
    'rgba(201,168,76,',
    'rgba(184,134,11,',
    'rgba(232,204,122,'
  ];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  /** Creates a single particle with random properties */
  function createParticle(x, y) {
    return {
      x: x ?? Math.random() * width,
      y: y ?? Math.random() * height,
      r: Math.random() * 1.7 + 0.35,
      vx: (Math.random() - 0.5) * 0.32,
      vy: (Math.random() - 0.5) * 0.32 - 0.14,
      alpha: Math.random() * 0.45 + 0.12,
      dAlpha: (Math.random() - 0.5) * 0.003,
      color: GOLD_COLORS[Math.floor(Math.random() * GOLD_COLORS.length)],
      phase: Math.random() * Math.PI * 2,
    };
  }

  /** Seeds the initial set of particles based on viewport size */
  function seed() {
    const count = Math.min(Math.floor(width * height / 13000), 95);
    particles = Array.from({ length: count }, () => createParticle());
  }

  /** Main animation loop */
  function draw() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p, i) => {
      // Mouse interaction — gentle attraction
      const dx = p.x - mouseX;
      const dy = p.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 130) {
        const force = (130 - dist) / 130 * 0.45;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
      }

      // Apply velocity with damping
      p.vx *= 0.984;
      p.vy *= 0.984;
      p.x += p.vx;
      p.y += p.vy;
      p.alpha += p.dAlpha;
      p.phase += 0.028;

      // Clamp alpha
      if (p.alpha < 0.06) p.dAlpha = Math.abs(p.dAlpha);
      if (p.alpha > 0.55) p.dAlpha = -Math.abs(p.dAlpha);

      // Wrap around edges
      if (p.x < -8) p.x = width + 8;
      if (p.x > width + 8) p.x = -8;
      if (p.y < -8) p.y = height + 8;
      if (p.y > height + 8) p.y = -8;

      const glow = Math.sin(p.phase) * 0.1 + 0.9;
      ctx.save();
      ctx.globalAlpha = p.alpha * glow;

      // Draw radial gradient glow
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
      gradient.addColorStop(0, p.color + '0.7)');
      gradient.addColorStop(1, p.color + '0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
      ctx.fill();

      // Draw core dot
      ctx.fillStyle = p.color + '0.9)';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      // Draw connections between nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const lx = p.x - q.x;
        const ly = p.y - q.y;
        const ld = Math.sqrt(lx * lx + ly * ly);
        if (ld < 105) {
          ctx.globalAlpha = (1 - ld / 105) * 0.05;
          ctx.strokeStyle = 'rgba(212,175,55,0.8)';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }

      ctx.restore();
    });

    animationId = requestAnimationFrame(draw);
  }

  // Initial setup
  resize();
  seed();
  draw();

  // Handle resize
  window.addEventListener('resize', () => {
    resize();
    seed();
  }, { passive: true });

  // Track mouse position within the hero slider
  const slider = document.getElementById('heroSlider');
  if (slider) {
    slider.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }, { passive: true });
    slider.addEventListener('mouseleave', () => {
      mouseX = -9999;
      mouseY = -9999;
    });
  }
}

/**
 * Creates random sparkle elements inside a container.
 * @param {HTMLElement} container - The element to populate with sparkles
 * @param {number} [count=22] - Number of sparkles to create
 */
function createSparkles(container, count = 22) {
  if (!container || container.dataset.filled === '1') return;
  container.dataset.filled = '1';

  for (let i = 0; i < count; i++) {
    const spark = document.createElement('span');
    spark.className = 'ft-sparkle' + (Math.random() < 0.25 ? ' lg' : '');
    spark.style.top = (Math.random() * 92) + '%';
    spark.style.left = (Math.random() * 96) + '%';
    spark.style.animationDuration = (Math.random() * 3 + 2.5) + 's';
    spark.style.animationDelay = (Math.random() * 4) + 's';
    container.appendChild(spark);
  }
}

/**
 * Initializes the full-featured hero slider with autoplay, dots, counter,
 * progress bar, touch swipe, keyboard navigation, and pause-on-hover.
 * @param {NodeList} slides - Collection of slide elements
 * @param {number} totalSlides - Total number of slides
 */
function initSlider(slides, totalSlides) {
  const slider = document.getElementById('heroSlider');
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');
  const dotsWrap = document.getElementById('sliderDots');
  const progress = document.getElementById('slideProgress');
  const counterCurr = document.getElementById('counterCurrent');
  const counterTotal = document.getElementById('counterTotal');
  if (!slider || !dotsWrap || !progress || !counterCurr || !counterTotal) return;

  let currentIndex = 0;
  let autoTimer = null;
  let isPaused = false;
  const AUTO_INTERVAL = 7200;

  counterTotal.textContent = String(totalSlides).padStart(2, '0');

  // Create pagination dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Slide ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });
  const dots = dotsWrap.querySelectorAll('.dot');

  /** Resets and starts the autoplay progress bar animation */
  function startProgress() {
    clearTimeout(progress._timeout);
    progress.style.transition = 'none';
    progress.style.width = '0%';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        progress.style.transition = `width ${AUTO_INTERVAL}ms linear`;
        progress.style.width = '100%';
      });
    });
  }

  /**
   * Navigates to a specific slide with directional awareness for RTL.
   * @param {number} index - Target slide index
   * @param {'prev'|'next'} [direction] - Explicit direction hint
   */
  function goTo(index, direction) {
    index = (index + totalSlides) % totalSlides;
    if (index === currentIndex) return;

    const isRTL = document.documentElement.dir === 'rtl';
    let effectiveDir = direction;

    if (!direction) {
      const diff = (index - currentIndex + totalSlides) % totalSlides;
      effectiveDir = diff <= totalSlides / 2 ? 'next' : 'prev';
    }
    if (isRTL) {
      effectiveDir = effectiveDir === 'next' ? 'prev' : 'next';
    }

    const oldSlide = slides[currentIndex];
    const newSlide = slides[index];

    // Update dots
    dots[currentIndex].classList.remove('active');
    oldSlide.classList.remove('active');

    if (effectiveDir === 'prev') {
      newSlide.classList.add('enter-left');
      void newSlide.offsetWidth; // Force reflow
      oldSlide.classList.add('leaving-right');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          newSlide.classList.remove('enter-left');
          newSlide.classList.add('active');
        });
      });
    } else {
      oldSlide.classList.add('leaving');
      newSlide.classList.add('active');
    }

    // Cleanup transition classes after animation completes
    setTimeout(() => {
      slides.forEach(s => s.classList.remove('leaving', 'leaving-right', 'enter-left'));
    }, 1150);

    currentIndex = index;
    dots[currentIndex].classList.add('active');
    counterCurr.textContent = String(currentIndex + 1).padStart(2, '0');
    startProgress();
  }

  function nextSlide() { goTo(currentIndex + 1, 'next'); }
  function prevSlide() { goTo(currentIndex - 1, 'prev'); }

  /** Starts the autoplay interval */
  function startAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(nextSlide, AUTO_INTERVAL);
  }

  // Pause autoplay when hovering over controls
  [nextBtn, prevBtn, dotsWrap].forEach(el => {
    if (!el) return;
    el.addEventListener('mouseenter', () => {
      isPaused = true;
      clearInterval(autoTimer);
      progress.style.transitionDuration = '0s';
    });
    el.addEventListener('mouseleave', () => {
      isPaused = false;
      startAuto();
      startProgress();
    });
  });

  // Button click handlers
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      if (!isPaused) { clearInterval(autoTimer); startAuto(); }
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      if (!isPaused) { clearInterval(autoTimer); startAuto(); }
    });
  }

  // Touch swipe support
  let touchStartX = 0, touchStartY = 0;
  slider.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
  slider.addEventListener('touchend', e => {
    const dx = touchStartX - e.changedTouches[0].clientX;
    const dy = Math.abs(touchStartY - e.changedTouches[0].clientY);
    if (Math.abs(dx) > 50 && dy < 80) {
      dx > 0 ? nextSlide() : prevSlide();
      clearInterval(autoTimer);
      startAuto();
    }
  }, { passive: true });

  // Keyboard navigation
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') { nextSlide(); clearInterval(autoTimer); startAuto(); }
    if (e.key === 'ArrowRight') { prevSlide(); clearInterval(autoTimer); startAuto(); }
  });

  // Start initial autoplay
  startProgress();
  startAuto();
}


// ============================================================
// 7. FEATURES SECTION ENTRANCE
// ============================================================

/** Triggers the staggered entrance animation for feature cards on scroll */
function initFeatures() {
  const grid = document.getElementById('featGrid');
  if (!grid) return;

  const cards = grid.querySelectorAll('.feat-card');
  if (!cards.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      cards.forEach(card => card.classList.add('feat-in'));
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15 });

  observer.observe(grid);
}


// ============================================================
// 8. SPACES SECTION (Entrance, 3D Tilt, Header)
// ============================================================

/** Manages spaces card entrance animations, header reveal, and 3D tilt effect */
function initSpaces() {
  const grid = document.getElementById('spGrid');
  if (!grid) return;

  const cards = grid.querySelectorAll('.sp-card');
  if (!cards.length) return;

  // Card entrance animation
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      cards.forEach(card => card.classList.add('sp-in'));
      sectionObserver.unobserve(entry.target);
    });
  }, { threshold: 0.2 });
  sectionObserver.observe(grid);

  // Header fade-in animation
  const header = document.getElementById('spHeader');
  if (header) {
    header.style.opacity = '0';
    header.style.transform = 'translateY(30px)';
    header.style.transition = 'opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1)';

    const headerObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        header.style.opacity = '1';
        header.style.transform = 'none';
        headerObserver.unobserve(entry.target);
      });
    }, { threshold: 0.3 });
    headerObserver.observe(header);
  }

  // 3D tilt effect on mouse move
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const rotateX = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
      const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      card.style.transition = 'transform .08s linear, border-color .5s, box-shadow .5s';
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform .65s cubic-bezier(.34,1.56,.64,1), border-color .5s, box-shadow .5s';
      card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) scale(1)';
    });
  });
}


// ============================================================
// 9. PRICING SECTION (Entrance, Toggle, Counters, 3D Tilt)
// ============================================================

/** Initializes pricing cards entrance, stats reveal, counters, toggle, and 3D tilt */
function initPricing() {
  const grid = document.getElementById('prGrid');
  if (!grid) return;

  const cards = grid.querySelectorAll('.pricing-card');
  if (!cards.length) return;

  // Card entrance animation
  const gridObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      cards.forEach(card => card.classList.add('pr-in'));
      gridObserver.unobserve(entry.target);
    });
  }, { threshold: 0.15 });
  gridObserver.observe(grid);

  // Stats entrance
  const stats = document.getElementById('statsWrap');
  if (stats) {
    const statsObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        stats.classList.add('pr-in');
        statsObserver.unobserve(entry.target);
      });
    }, { threshold: 0.2 });
    statsObserver.observe(stats);
  }

  // 3D tilt effect for pricing cards
  cards.forEach(card => {
    const isFeatured = card.classList.contains('pricing-card-featured');
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const rotateX = ((e.clientY - rect.top) / rect.height - 0.5) * -9;
      const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * 9;
      const scale = isFeatured ? 1.05 : 1;
      card.style.transition = 'transform .08s linear, border-color .5s, box-shadow .5s';
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
    });
    card.addEventListener('mouseleave', () => {
      const scale = isFeatured ? 1.05 : 1;
      card.style.transition = 'transform .65s cubic-bezier(.34,1.56,.64,1), border-color .5s, box-shadow .5s';
      card.style.transform = `perspective(900px) rotateX(0) rotateY(0) scale(${scale})`;
    });
  });

  // Animated number counters
  initCounters();

  // Monthly / Yearly pricing toggle
  initPricingToggle();
}

/** Animates stat counters from 0 to their final value using an easing curve */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  function countUp(el) {
    const finalValue = parseInt(el.dataset.count);
    const steps = 65;
    const duration = 2000;
    let tick = 0;

    const timer = setInterval(() => {
      tick++;
      const current = Math.round(finalValue * (1 - Math.pow(1 - tick / steps, 3)));
      el.textContent = Math.min(current, finalValue) + (finalValue >= 10 ? '+' : '');
      if (tick >= steps) {
        el.textContent = finalValue + (finalValue >= 10 ? '+' : '');
        clearInterval(timer);
      }
    }, duration / steps);
  }

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      countUp(entry.target);
      counterObserver.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));
}

/** Handles the monthly/yearly toggle with animated price transitions */
function initPricingToggle() {
  const btnMonthly = document.getElementById('btnMonthly');
  const btnYearly = document.getElementById('btnYearly');
  const priceAmounts = document.querySelectorAll('.pr-price .amt[data-monthly]');
  if (!btnMonthly || !btnYearly || !priceAmounts.length) return;

  function setPricingMode(yearly) {
    btnMonthly.classList.toggle('active', !yearly);
    btnYearly.classList.toggle('active', yearly);

    priceAmounts.forEach(el => {
      const from = parseFloat(el.textContent);
      const to = parseFloat(el.dataset[yearly ? 'yearly' : 'monthly']);
      if (from === to) return;

      let step = 0;
      const steps = 18;
      const diff = to - from;

      const timer = setInterval(() => {
        step++;
        el.textContent = Math.round(from + diff * step / steps);
        if (step >= steps) {
          el.textContent = to;
          clearInterval(timer);
        }
      }, 280 / steps);
    });
  }

  btnMonthly.addEventListener('click', () => setPricingMode(false));
  btnYearly.addEventListener('click', () => setPricingMode(true));
}


// ============================================================
// 10. FOOTER (Entrance, Sparkles, Back-to-Top, Year)
// ============================================================

/** Initializes footer entrance animations, sparkles, back-to-top, and dynamic year */
function initFooter() {
  const footer = document.getElementById('footer');
  if (footer) {
    const footerObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          footer.classList.add('ft-visible');
          footerObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    footerObserver.observe(footer);
  }

  // Footer columns staggered entrance
  const ftTop = document.getElementById('ftTop');
  const cols = ftTop ? ftTop.querySelectorAll('.ft-col') : [];
  if (ftTop && cols.length) {
    const topObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cols.forEach(col => col.classList.add('ft-in'));
          topObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    topObserver.observe(ftTop);
  }

  // Footer sparkles
  const sparkleWrap = document.getElementById('ftSparkles');
  if (sparkleWrap) {
    for (let i = 0; i < 18; i++) {
      const spark = document.createElement('span');
      spark.className = 'ft-sparkle';
      spark.style.top = Math.random() * 90 + '%';
      spark.style.left = Math.random() * 100 + '%';
      spark.style.animationDuration = (Math.random() * 3 + 2.5) + 's';
      spark.style.animationDelay = (Math.random() * 4) + 's';
      sparkleWrap.appendChild(spark);
    }
  }

  // Back-to-top button
  const toTopBtn = document.getElementById('ftToTop');
  if (toTopBtn) {
    window.addEventListener('scroll', () => {
      toTopBtn.classList.toggle('show', window.scrollY > 600);
    }, { passive: true });

    toTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Set current year in footer copyright
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Smooth scroll for footer quick links
  document.querySelectorAll('.ft-quick-links a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const id = this.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    });
  });
}


// ============================================================
// 11. SPLASH SCREEN
// ============================================================

/** Controls the splash screen: auto-hides after a set duration, with skip-on-click support */
function initSplash() {
  const splash = document.getElementById('splash-screen');
  if (!splash) return;

  document.body.classList.add('splash-active');
  const DURATION = 3500;

  const finish = () => {
    splash.classList.add('hide');
    setTimeout(() => {
      document.body.classList.remove('splash-active');
      document.body.classList.add('splash-done');
    }, 900);
  };

  const timer = setTimeout(finish, DURATION);

  // Fallback: force-finish if animation hangs for any reason
  setTimeout(() => {
    if (!splash.classList.contains('hide')) {
      clearTimeout(timer);
      finish();
    }
  }, DURATION + 500);

  // Allow skipping by clicking anywhere on the splash screen
  splash.addEventListener('click', () => {
    clearTimeout(timer);
    finish();
  });
}


// ============================================================
// 12. INITIALIZATION ON DOM READY
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitch();
  initNavbarScroll();
  initMobileMenu();
  initActiveLink();
  initSmoothScroll();
  initBookingModal();
  initHero();
  initFeatures();
  initSpaces();
  initPricing();
  initFooter();
  initSplash();
});
