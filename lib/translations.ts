export type Lang = "ru" | "en" | "he";

const ru = {
  header: {
    nav: [
      { href: "/#about", label: "Об основателе" },
      { href: "/#achievements", label: "Достижения" },
      { href: "/#press", label: "В прессе" },
      { href: "/#methodology", label: "Методика" },
      { href: "/#testimonials", label: "Отзывы" },
      { href: "/#areas", label: "Районы" },
      { href: "/#pricing", label: "Стоимость" },
      { href: "/#online", label: "Онлайн" },
      { href: "/#faq", label: "FAQ" },
      { href: "/ru/blog", label: "Блог" },
    ],
    cta: "Записаться",
    menuOpen: "Открыть меню",
    menuClose: "Закрыть меню",
    mobileWhatsapp: "Записаться в WhatsApp",
  },
  hero: {
    logoAlt: "LikeSwim — Школа плавания",
    h1: "Школа плавания Павла Левицкого | Тренер в Майами",
    description:
      "Профессиональная школа плавания в Флориде, от Майами до Вест-Палм-Бич. Индивидуальные и групповые уроки плавания для детей и взрослых — учим плавать с нуля, работаем со страхом воды и готовим пловцов к соревнованиям.",
    ctaWhatsapp: "Записаться в WhatsApp",
    ctaLearnMore: "Узнать больше",
    stats: [
      { value: "15+", label: "лет тренерства" },
      { value: "2000+", label: "учеников" },
      { value: "3", label: "страны" },
      { value: "1:1", label: "и группы" },
    ],
  },
  about: {
    badge: "ОСНОВАТЕЛЬ LIKESWIM",
    photoAlt: "Павел Левицкий — основатель LikeSwim",
    badgeYears: "лет тренерства",
    heading: "Павел Левицкий —",
    headingAccent: "основатель LikeSwim",
    paragraphs: [
      "Павел Левицкий — профессиональный тренер по плаванию с международным опытом работы в России, Израиле и США. Мастер спорта, многократный участник этапов FINA Swimming World Cup и бывший член юношеской сборной команды.",
      "Более 20 лет в плавании и более 15 лет тренерской практики помогают ему находить подход как к детям, так и ко взрослым — от новичков со страхом воды до триатлетов и уверенных пловцов.",
      "В основе его методики — внимание к технике, психологии и индивидуальным особенностям каждого ученика. Главная цель — не просто научить человека плавать, а помочь чувствовать себя уверенно и комфортно в воде.",
    ],
    highlights: [
      { label: "15+ лет", desc: "тренерского опыта" },
      { label: "2000+", desc: "учеников выпустил" },
      { label: "Мастер спорта", desc: "выполнил норматив в 15 лет" },
      { label: "3 страны", desc: "Россия, Израиль, США" },
    ],
    worldAquaticsLabel: "Профиль на World Aquatics",
  },
  achievements: {
    badge: "Достижения",
    heading: "Путь к",
    headingAccent: "мастерству",
    subtitle:
      "Спортивная карьера и профессиональный рост основателя LikeSwim — Павла Левицкого.",
    stats: [
      { value: "15+", label: "лет тренерского опыта" },
      { value: "2000+", label: "учеников" },
    ],
    items: [
      {
        title: "Мастер спорта по плаванию",
        description:
          "Выполнил норматив Мастера спорта в возрасте 15 лет — один из самых молодых на тот момент в регионе.",
      },
      {
        title: "Чемпион СПб и Северо-Западного ФО",
        description:
          "Победитель чемпионата Санкт-Петербурга и Северо-Западного федерального округа по плаванию.",
      },
      {
        title: "Победитель Первенства России 2007 года",
        description: "Завоевал первое место на Первенстве России по плаванию 2007 года.",
      },
      {
        title: "Государственная премия для талантливой молодёжи",
        description: "Лауреат государственной премии для талантливой молодёжи в области спорта.",
      },
      {
        title: "Член молодёжной национальной сборной",
        description: "Входил в состав молодёжной национальной сборной по плаванию.",
      },
      {
        title: "FINA Swimming World Cup 2009–2010",
        description: "Многократный участник этапов FINA Swimming World Cup (2009–2010). Верифицировано на World Aquatics.",
        verifiedUrl: "https://www.worldaquatics.com/athletes/1013361/pavel-levitskiy",
        verifiedLabel: "Верифицировано на World Aquatics",
      },
    ],
  },
  press: {
    badge: "В прессе",
    heading: "Пишут о нас",
    readMore: "Читать статью",
    mentions: [
      {
        publication: "gorodkirov.ru",
        title: "Павел Левицкий — талантливый спортсмен и успешный тренер, теперь в Израиле",
        url: "https://gorodkirov.ru/news/pavel-levickij-talantlivyj-sportsmen-i-uspeshnyj-trener-teper-v-izraile/",
      },
      {
        publication: "progorodsamara.ru",
        title: "Талантливый пловец Павел Левицкий стал тренером по плаванию для детей в Израиле",
        url: "https://progorodsamara.ru/news/view/talantlivyj-plovec-pavel-levickij-stal-trenerom-po-plavaniu-dla-detej-v-izraile/",
      },
      {
        publication: "gatchinasport.ru",
        title: "Зал спортивной славы Гатчины",
        description: "Официальная запись: Мастер спорта России, победитель СЗФО, участник Кубка мира, Президентская премия.",
        url: "https://gatchinasport.ru/sport-v-liczax/mastera-sporta/mastera-sporta-sssr-i-rossii/rossiya/plavanie/leviczkij-pavel/",
        officialBadge: "Официальный источник",
      },
    ],
  },
  methodology: {
    badge: "Методика",
    heading: "Как проходят",
    headingAccent: "тренировки",
    subtitle:
      "Обучение через понимание тела и воды — не механическое повторение движений. Психология, координация и уверенность в себе: прогресс заметен уже с первых занятий, у детей от 3 лет, подростков и взрослых.",
    steps: [
      {
        title: "Диагностика",
        description:
          "Первое занятие со скидкой 50% — знакомство с тренером. Оцениваю уровень подготовки, выявляю страхи и ставлю цели вместе с учеником и родителями.",
      },
      {
        title: "Индивидуальная программа",
        description:
          "Составляю персональный план тренировок: от базовой техники до скоростных упражнений. Учитываю возраст, физику и темп прогресса.",
      },
      {
        title: "Прогрессивные тренировки",
        description:
          "Каждая тренировка строится по принципу «от простого к сложному». Чередую стили, дыхательные упражнения и игровые элементы для детей.",
      },
      {
        title: "Контроль и результат",
        description:
          "Регулярно фиксирую прогресс, даю обратную связь. После каждого этапа ученик чётко понимает, чему он научился и что будет дальше.",
      },
    ],
    noteHeading: "Первое занятие со скидкой 50%",
    noteBody:
      "Приходите познакомиться, никаких обязательств. Вы увидите методику в действии и сможете задать все вопросы лично.",
  },
  gallery: {
    badge: "Галерея",
    heading: "LikeSwim",
    headingAccent: "в действии",
    closeLabel: "Закрыть",
    prevLabel: "Предыдущее фото",
    nextLabel: "Следующее фото",
    imageAlts: [
      "LikeSwim — тренировка в бассейне",
      "LikeSwim — обучение плаванию",
      "LikeSwim — занятие с тренером",
      "LikeSwim — тренер с малышом",
      "LikeSwim — урок плавания",
      "LikeSwim — дети в бассейне",
    ],
  },
  testimonials: {
    badge: "Отзывы",
    heading: "Говорят",
    headingAccent: "родители и ученики",
    subtitle: "Более 2000 учеников прошли обучение. Вот что они говорят о тренировках",
  },
  serviceAreas: {
    badge: "Районы обслуживания",
    heading: "Флорида —",
    headingAccent: "от Майами до Вест-Палм-Бич",
    subtitle:
      "Провожу индивидуальные и групповые уроки плавания в бассейнах этих городов — Майами, Холландейл-Бич, Голливуд, Санни-Айлс-Бич, Авентура и другие. Не нашли свой — напишите в WhatsApp, подберём ближайший вариант.",
    countSuffix: "городов и районов Южной Флориды",
  },
  pricing: {
    badge: "Стоимость",
    heading: "Стоимость тренировок",
    subtitle: "Первое занятие со скидкой 50% для всех форматов",
    discountBadge: "СКИДКА 50%",
    fitLabel: "Подходит для",
    includesLabel: "Включает",
    whatsappCta: "Записаться в WhatsApp",
    packageBadge: "ВЫГОДНО",
    packageDurationLabel: "Пакет 10 занятий",
    packageTitle: "10 тренировок по цене 9",
    packageCta: "Записаться",
    plans: [
      {
        duration: "30 минут",
        firstLesson: "первый урок $37.50",
        subtitle: "Идеально для новичков и маленьких детей",
        description:
          "Короткий и комфортный формат, который помогает привыкнуть к воде и почувствовать себя увереннее.",
        fits: ["Дети младшего возраста", "Абсолютные новички", "Люди со страхом воды"],
        includes: ["Адаптация к воде", "Базовые упражнения и дыхание", "Основы техники"],
        footer: "Отличный вариант для первых шагов",
      },
      {
        duration: "45 минут",
        firstLesson: "первый урок $55",
        subtitle: "Оптимальный формат для стабильного прогресса",
        description:
          "Самый популярный вариант — хватает времени и на технику, и на практику, и на полноценную работу в воде.",
        fits: [
          "Дети и взрослые с базовыми навыками",
          "Улучшение техники",
          "Регулярные тренировки",
        ],
        includes: [
          "Работа над техникой",
          "Координация и дыхание",
          "Исправление ошибок",
          "Баланс и эффективность",
        ],
        footer: "Лучший баланс между нагрузкой и комфортом",
      },
      {
        duration: "60 минут",
        firstLesson: "первый урок $72.50",
        subtitle: "Для уверенных пловцов и серьёзной работы",
        description:
          "Полноценная тренировка с глубоким разбором техники, выносливостью и высоким объёмом работы.",
        fits: ["Уверенные пловцы", "Триатлеты", "Подготовка к соревнованиям"],
        includes: [
          "Детальная работа над техникой",
          "Развитие выносливости",
          "Скоростная и силовая работа",
          "Индивидуальный подход",
        ],
        footer: "Максимум пользы за тренировку",
      },
    ],
    packageOptions: [
      { label: "10×30 мин", price: "$675", saving: "экономия $75" },
      { label: "10×45 мин", price: "$990", saving: "экономия $110" },
      { label: "10×60 мин", price: "$1305", saving: "экономия $145" },
    ],
    groupBadge: "ГРУППА",
    groupTitle: "Групповые занятия — до 4 человек",
    groupCta: "Записаться",
    groupOptions: [
      { label: "30 мин", price: "$120" },
      { label: "45 мин", price: "$145" },
      { label: "60 мин", price: "$170" },
    ],
    groupNote: "цена за группу до 4 человек",
  },
  onlineCoaching: {
    badge: "ОНЛАЙН",
    heading: "Онлайн-тренерство",
    headingAccent: "из любой точки мира",
    subtitle: "Профессиональный анализ техники и персональные программы — без привязки к локации.",
    includesLabel: "Включает",
    cta: "Написать в WhatsApp",
    cards: [
      {
        title: "Разбор техники",
        price: "$40",
        priceSuffix: "за сессию",
        description:
          "Пришлите видео в WhatsApp или Telegram — разберу ключевые ошибки, дам конкретные упражнения и верну аннотированный видеоразбор.",
        includes: [
          "Анализ видео вашего плавания",
          "Список ключевых ошибок",
          "Упражнения для исправления техники",
          "Аннотированный видеоразбор",
        ],
      },
      {
        title: "Онлайн-программа",
        price: "$200",
        priceSuffix: "2 недели · $300 / 4 недели",
        description:
          "Персональный план тренировок, объяснение техники, еженедельный видеоанализ и задания.",
        includes: [
          "Индивидуальный план тренировок",
          "Объяснение техники",
          "Еженедельный видеоанализ",
          "Задания и упражнения",
        ],
      },
      {
        title: "Личный коуч",
        price: "$650",
        priceSuffix: "в месяц",
        description:
          "Максимальный формат поддержки: 2 видеоанализа в неделю, коррекция техники и индивидуальный план с еженедельной корректировкой.",
        includes: [
          "2 видеоанализа в неделю",
          "Коррекция техники",
          "Индивидуальный план с еженедельной корректировкой",
          "Неограниченные вопросы",
        ],
      },
    ],
  },
  faq: {
    badge: "FAQ",
    heading: "Часто задаваемые",
    headingAccent: "вопросы",
    items: [
      {
        q: "Вы работаете с полными новичками?",
        a: "Да, большинство моих учеников начинают с нуля. Первое занятие — это диагностика: я оцениваю уровень, страхи и цели, и строю программу именно под вас.",
      },
      {
        q: "Вы приезжаете к частным бассейнам?",
        a: "Да, я работаю у частных бассейнов в кондоминиумах и домах по всему Майами и Южной Флориде.",
      },
      {
        q: "С какого возраста вы берёте детей?",
        a: "Работаю с детьми от 3 лет. Для малышей — игровой формат, для детей постарше — техника и уверенность в воде.",
      },
      {
        q: "Вы говорите по-русски?",
        a: "Да, провожу тренировки на русском, иврите и английском языках.",
      },
      {
        q: "Как быстро можно научиться плавать?",
        a: "Большинство учеников чувствуют уверенность в воде уже после 3–5 занятий. Скорость прогресса зависит от регулярности и начального уровня.",
      },
      {
        q: "Какое оборудование нужно?",
        a: "Только купальник и желание учиться. Всё необходимое оборудование я привожу с собой.",
      },
    ],
  },
  cta: {
    badge: "✦ Запись открыта",
    heading: "Готовы начать?",
    headingAccent: "Первое занятие —",
    headingUnderline: "скидка 50%",
    body: "Напишите в WhatsApp — отвечу в течение нескольких минут, подберём удобное время и бассейн в вашем районе.",
    whatsappCta: "Написать в WhatsApp",
    trustItems: [
      "✓ Первое занятие со скидкой 50%",
      "✓ Без длинных очередей",
      "✓ Гибкое расписание",
      "✓ Флорида: от Майами до Вест-Палм-Бич",
    ],
  },
  footer: {
    brand:
      "LikeSwim — это не просто школа плавания. Это проект, который объединяет профессиональный опыт, современный подход и желание сделать плавание доступным для каждого.",
    navHeading: "Разделы",
    contactsHeading: "Контакты",
    whatsappLink: "Написать в WhatsApp",
    googleBusinessLink: "Google Business Profile",
    areaText: "Флорида: от Майами до Вест-Палм-Бич",
    copyrightSuffix: "Школа плавания. Все права защищены.",
    nav: [
      { href: "/#about", label: "Об основателе" },
      { href: "/#achievements", label: "Достижения" },
      { href: "/#methodology", label: "Методика" },
      { href: "/#testimonials", label: "Отзывы" },
      { href: "/#pricing", label: "Стоимость" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
  form: {
    title: "Запись на пробный урок",
    subtitle: "Расскажите немного о себе — ответим в WhatsApp в течение нескольких минут.",
    nameLabel: "Ваше имя",
    namePlaceholder: "Например: Александр",
    phoneLabel: "Телефон (лучше WhatsApp)",
    phonePlaceholder: "+1 (___) ___-____",
    whoLabel: "Кто будет учиться?",
    whoChild: "Ребёнок",
    whoAdult: "Взрослый (я)",
    ageLabel: "Возраст",
    agePlaceholder: "Например: 8",
    levelLabel: "Уровень плавания",
    levelOptions: [
      { value: "none", label: "Никогда не был в бассейне" },
      { value: "beginner", label: "Чувствует себя в воде, но не плавает" },
      { value: "intermediate", label: "Немного плавает, хочет улучшить технику" },
      { value: "advanced", label: "Опытный пловец, шлифует технику" },
    ],
    areaLabel: "Район / место",
    areaPlaceholder: "Например: Авентура, Халландейл-Бич, Майами...",
    submitCta: "Отправить через WhatsApp",
    successTitle: "Почти готово!",
    successBody: "WhatsApp откроется с уже заполненным сообщением — просто нажмите «Отправить».",
    requiredError: "Пожалуйста, введите имя и номер телефона.",
    whatsappMessage: (name: string, phone: string, who: string, age: string, level: string, area: string) =>
      `Здравствуйте, Павел!\nХочу записаться на занятие по плаванию.\n\nИмя: ${name}\nТелефон: ${phone}\nКто учится: ${who}${age ? `, возраст: ${age}` : ""}\nУровень: ${level}\n${area ? `Район: ${area}` : ""}`.trim(),
  },
  mobileBar: {
    cta: "Записаться в WhatsApp",
  },
};

const en = {
  header: {
    nav: [
      { href: "/#about", label: "About" },
      { href: "/#achievements", label: "Achievements" },
      { href: "/#press", label: "Press" },
      { href: "/#methodology", label: "Method" },
      { href: "/#testimonials", label: "Reviews" },
      { href: "/#areas", label: "Areas" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#online", label: "Online" },
      { href: "/#faq", label: "FAQ" },
    ],
    cta: "Book Now",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    mobileWhatsapp: "Book via WhatsApp",
  },
  hero: {
    logoAlt: "LikeSwim — Private Swim School",
    h1: "Private Swim Coach in Miami — Pavel Levitskii",
    description:
      "Professional swimming lessons in South Florida — Miami, Fort Lauderdale, Boca Raton & West Palm Beach. Private and group swim lessons for kids and adults.",
    ctaWhatsapp: "Book via WhatsApp",
    ctaLearnMore: "Learn More",
    stats: [
      { value: "15+", label: "years coaching" },
      { value: "2000+", label: "students" },
      { value: "3", label: "countries" },
      { value: "1:1", label: "& groups" },
    ],
  },
  about: {
    badge: "FOUNDER OF LIKESWIM",
    photoAlt: "Pavel Levitskii — founder of LikeSwim",
    badgeYears: "years coaching",
    heading: "Pavel Levitskii —",
    headingAccent: "founder of LikeSwim",
    paragraphs: [
      "Pavel Levitskii is a professional private swim coach with international experience in Russia, Israel, and the United States. A Master of Sport in swimming, multiple-time FINA Swimming World Cup competitor, and ex-member of the Russian national youth team.",
      "With over 20 years in competitive swimming and more than 15 years of coaching, Pavel works with everyone from fearful beginners to triathletes — delivering private swim lessons for kids and adults across South Florida.",
      "His method focuses on technique, body awareness, and confidence in the water — not just drills. The goal is not simply to teach you to swim, but to make you feel truly at home in the water.",
    ],
    highlights: [
      { label: "15+ years", desc: "coaching experience" },
      { label: "2000+", desc: "students trained" },
      { label: "Master of Sport", desc: "certified at age 15" },
      { label: "3 countries", desc: "Russia, Israel, USA" },
    ],
    worldAquaticsLabel: "World Aquatics Profile",
  },
  achievements: {
    badge: "Achievements",
    heading: "Path to",
    headingAccent: "Mastery",
    subtitle:
      "The athletic career and professional journey of LikeSwim founder Pavel Levitskii.",
    stats: [
      { value: "15+", label: "years of coaching experience" },
      { value: "2000+", label: "students trained" },
    ],
    items: [
      {
        title: "Master of Sport in Swimming",
        description:
          "Earned the Master of Sport title in Russia at age 15 — one of the youngest in the region at the time.",
      },
      {
        title: "Champion of St. Petersburg & NW District",
        description:
          "Winner of the St. Petersburg and Northwestern Federal District swimming championship.",
      },
      {
        title: "Russian National Championship Winner",
        description: "First place at the Russian Federation Swimming Championship, 2007.",
      },
      {
        title: "Presidential Award for Youth",
        description:
          "Recipient of the Russian Federation Presidential Award for Talented Youth in Sport.",
      },
      {
        title: "Russian National Youth Team Member",
        description: "Selected for the Russian national youth swimming team (2006–2008).",
      },
      {
        title: "FINA Swimming World Cup 2009–2010",
        description: "Multiple-time FINA Swimming World Cup competitor (2009–2010). Verified on World Aquatics.",
        verifiedUrl: "https://www.worldaquatics.com/athletes/1013361/pavel-levitskiy",
        verifiedLabel: "Verified on World Aquatics",
      },
    ],
  },
  press: {
    badge: "Press",
    heading: "In the Press",
    readMore: "Read article",
    mentions: [
      {
        publication: "gorodkirov.ru",
        title: "Павел Левицкий — талантливый спортсмен и успешный тренер, теперь в Израиле",
        url: "https://gorodkirov.ru/news/pavel-levickij-talantlivyj-sportsmen-i-uspeshnyj-trener-teper-v-izraile/",
      },
      {
        publication: "progorodsamara.ru",
        title: "Талантливый пловец Павел Левицкий стал тренером по плаванию для детей в Израиле",
        url: "https://progorodsamara.ru/news/view/talantlivyj-plovec-pavel-levickij-stal-trenerom-po-plavaniu-dla-detej-v-izraile/",
      },
      {
        publication: "gatchinasport.ru",
        title: "Gatchina Sports Hall of Fame",
        description: "Official record: Master of Sport of Russia, NWFD champion, World Cup competitor, Presidential Award.",
        url: "https://gatchinasport.ru/sport-v-liczax/mastera-sporta/mastera-sporta-sssr-i-rossii/rossiya/plavanie/leviczkij-pavel/",
        officialBadge: "Official Record",
      },
    ],
  },
  methodology: {
    badge: "Methodology",
    heading: "How Lessons",
    headingAccent: "Work",
    subtitle:
      "Learning through body awareness and water feel — not mechanical repetition. Coordination, breathing, and confidence: students see results from their very first swim lesson, whether kids from age 3 or adults.",
    steps: [
      {
        title: "Assessment",
        description:
          "Your first lesson is 50% off — a no-pressure intro. I evaluate your level, address any fears, and set clear goals together with you (and parents for kids).",
      },
      {
        title: "Custom Program",
        description:
          "I build a personalized training plan — from basic technique to speed work — tailored to your age, fitness level, and pace of progress.",
      },
      {
        title: "Progressive Training",
        description:
          "Every session builds on the last: easy to challenging, mixing strokes, breathing drills, and playful elements for kids.",
      },
      {
        title: "Progress & Results",
        description:
          "I track progress after every lesson and give clear feedback. You'll always know what you've learned and what comes next.",
      },
    ],
    noteHeading: "First Lesson 50% Off",
    noteBody:
      "Come meet me — no commitment. You'll see the method in action and can ask any questions in person.",
  },
  gallery: {
    badge: "Gallery",
    heading: "LikeSwim",
    headingAccent: "in Action",
    closeLabel: "Close",
    prevLabel: "Previous photo",
    nextLabel: "Next photo",
    imageAlts: [
      "LikeSwim — pool training session",
      "LikeSwim — swimming lesson",
      "LikeSwim — coach and student",
      "LikeSwim — coach with young child",
      "LikeSwim — private swim lesson",
      "LikeSwim — kids swim class",
    ],
  },
  testimonials: {
    badge: "Reviews",
    heading: "What",
    headingAccent: "Students & Parents Say",
    subtitle: "Over 2,000 students have trained with Pavel. Here's what they say about their lessons.",
  },
  serviceAreas: {
    badge: "Service Areas",
    heading: "Florida —",
    headingAccent: "Miami to West Palm Beach",
    subtitle:
      "I travel to private and community pools across South Florida. Don't see your city? Message me on WhatsApp and we'll find the nearest option.",
    countSuffix: "cities and neighborhoods across South Florida",
  },
  pricing: {
    badge: "Pricing",
    heading: "Swim Lesson Rates",
    subtitle: "50% off your first lesson — all session lengths",
    discountBadge: "50% OFF",
    fitLabel: "Good for",
    includesLabel: "Includes",
    whatsappCta: "Book via WhatsApp",
    packageBadge: "BEST VALUE",
    packageDurationLabel: "10-Lesson Package",
    packageTitle: "Get 10 sessions for the price of 9",
    packageCta: "Book Now",
    plans: [
      {
        duration: "30 minutes",
        firstLesson: "first lesson $37.50",
        subtitle: "Perfect for beginners & young children",
        description:
          "A short, comfortable format that helps newcomers get used to the water and build confidence at their own pace.",
        fits: ["Young children", "Absolute beginners", "Adults with water anxiety"],
        includes: ["Water acclimation", "Basic exercises & breathing", "Intro to technique"],
        footer: "Great first step into swimming",
      },
      {
        duration: "45 minutes",
        firstLesson: "first lesson $55",
        subtitle: "The most popular format for steady progress",
        description:
          "Enough time for technique, drills, and real water work. Our most popular private swim lesson.",
        fits: ["Kids and adults with basics", "Technique improvement", "Regular training"],
        includes: [
          "Stroke technique work",
          "Coordination & breathing",
          "Error correction",
          "Balance & efficiency",
        ],
        footer: "Best balance of intensity and comfort",
      },
      {
        duration: "60 minutes",
        firstLesson: "first lesson $72.50",
        subtitle: "For confident swimmers & serious training",
        description:
          "A full training session with deep technique work, endurance building, and high training volume.",
        fits: ["Confident swimmers", "Triathletes", "Competition prep"],
        includes: [
          "In-depth stroke analysis",
          "Endurance development",
          "Speed & strength work",
          "Fully individualized plan",
        ],
        footer: "Maximum value per session",
      },
    ],
    packageOptions: [
      { label: "10×30 min", price: "$675", saving: "save $75" },
      { label: "10×45 min", price: "$990", saving: "save $110" },
      { label: "10×60 min", price: "$1,305", saving: "save $145" },
    ],
    groupBadge: "GROUP",
    groupTitle: "Group Lessons — up to 4 people",
    groupCta: "Book Group Lesson",
    groupOptions: [
      { label: "30 min", price: "$120" },
      { label: "45 min", price: "$145" },
      { label: "60 min", price: "$170" },
    ],
    groupNote: "price per group, up to 4 people",
  },
  onlineCoaching: {
    badge: "ONLINE",
    heading: "Online Coaching",
    headingAccent: "from anywhere",
    subtitle:
      "Professional technique analysis and personalized training programs — no pool required.",
    includesLabel: "Includes",
    cta: "Message on WhatsApp",
    cards: [
      {
        title: "Technique Analysis",
        price: "$40",
        priceSuffix: "per session",
        description:
          "Send a video via WhatsApp or Telegram — I'll break down your key mistakes, give specific drills to fix them, and return annotated video feedback.",
        includes: [
          "Video analysis of your swimming",
          "Key mistake breakdown",
          "Specific drills to fix each issue",
          "Annotated video feedback",
        ],
      },
      {
        title: "Online Program",
        price: "$200",
        priceSuffix: "/ 2 weeks · $300 / 4 weeks",
        description:
          "A personalized training plan with technique explanations, weekly video analysis, and targeted drills.",
        includes: [
          "Individual training plan",
          "Technique explanations",
          "Weekly video analysis",
          "Drills & tasks",
        ],
      },
      {
        title: "Personal Coaching",
        price: "$650",
        priceSuffix: "/ month",
        description:
          "Full ongoing support: twice-weekly video analyses, technique correction, and a weekly-adjusted individual plan.",
        includes: [
          "2 video analyses per week",
          "Ongoing technique correction",
          "Individual plan adjusted weekly",
          "Unlimited questions",
        ],
      },
    ],
  },
  faq: {
    badge: "FAQ",
    heading: "Frequently Asked",
    headingAccent: "Questions",
    items: [
      {
        q: "Who is the best swim coach in Hallandale Beach, Florida?",
        a: "Pavel Levitskii (also written Pavel Levitskiy) is a highly rated professional swim coach serving Hallandale Beach, Florida. He holds a Russian Master of Sports title in swimming, is a multiple-time FINA Swimming World Cup competitor, and has trained over 2,000 students over more than 15 years. He offers private lessons, group sessions, triathlon training, and online coaching throughout South Florida.",
      },
      {
        q: "How much do swimming lessons cost in Miami?",
        a: "Private swim lessons cost $75 for 30 min, $110 for 45 min, and $145 for 60 min. Group lessons start at $120 per group (up to 4 students). Online coaching starts at $40 per session. The first lesson is 50% off for all new students.",
      },
      {
        q: "Does Pavel Levitskiy offer online swim coaching?",
        a: "Yes. Online coaching starts at $40 per technique analysis session — send a swimming video via WhatsApp or Telegram and receive detailed feedback within 24–48 hours. Monthly programs are also available: $200 for 2 weeks, $300 for 4 weeks, or $650/month for full personal coaching.",
      },
      {
        q: "What languages does Pavel Levitskiy speak?",
        a: "Pavel Levitskiy speaks and teaches in three languages: English, Russian, and Hebrew. This makes LikeSwim uniquely accessible to Miami's diverse international community.",
      },
      {
        q: "How many students has Pavel Levitskiy trained?",
        a: "Pavel Levitskiy has trained over 2,000 students throughout more than 15 years of professional coaching — children, adults, beginners, and competitive athletes across Russia, Israel, and the United States.",
      },
      {
        q: "Does Pavel Levitskiy travel to your pool?",
        a: "Yes. Pavel travels to private pools, condominium pools, and hotel pools across South Florida — from Miami to West Palm Beach, including Hallandale Beach, Hollywood, Fort Lauderdale, Aventura, Sunny Isles Beach, and Miami Beach.",
      },
      {
        q: "What is the first lesson discount at LikeSwim?",
        a: "LikeSwim offers 50% off the first lesson for all new students. The 30-min lesson drops from $75 to $37.50, the 45-min from $110 to $55, and the 60-min from $145 to $72.50. No promo code needed — just mention it when booking.",
      },
      {
        q: "Who is Pavel Levitskiy?",
        a: "Pavel Levitskiy (also Levitskii) is a professional swim coach and founder of LikeSwim, based in Miami, FL. He is a Russian Master of Sports in swimming, a multiple-time FINA Swimming World Cup competitor (2009–2010), and a recipient of the Russian Presidential Award for young athletes. He speaks English, Russian, and Hebrew.",
      },
      {
        q: "What areas does LikeSwim serve in South Florida?",
        a: "LikeSwim serves: Hallandale Beach, Hollywood, Fort Lauderdale, Aventura, Sunny Isles Beach, Miami Beach, Miami, Coral Gables, Boca Raton, Delray Beach, Boynton Beach, West Palm Beach, Coral Springs, Pompano Beach, Pembroke Pines, Miramar, Davie, and Weston.",
      },
      {
        q: "Does LikeSwim offer group swimming lessons?",
        a: "Yes. Group lessons are available for children and adults, with a maximum of 4 students per group. Priced at $120 / $145 / $170 per group (30 / 45 / 60 min) — that's per group, not per person.",
      },
    ],
  },
  cta: {
    badge: "✦ Now Enrolling",
    heading: "Ready to Start?",
    headingAccent: "First Lesson —",
    headingUnderline: "50% Off",
    body: "Message me on WhatsApp — I'll reply within minutes. We'll find a time and pool that works for your schedule and location in South Florida.",
    whatsappCta: "Message on WhatsApp",
    trustItems: [
      "✓ First lesson 50% off",
      "✓ No waitlists",
      "✓ Flexible scheduling",
      "✓ South Florida: Miami to West Palm Beach",
    ],
  },
  footer: {
    brand:
      "LikeSwim is more than a swim school. It's a project built on professional expertise, modern coaching methods, and a passion for making swimming accessible to everyone.",
    navHeading: "Navigation",
    contactsHeading: "Contact",
    whatsappLink: "Message on WhatsApp",
    googleBusinessLink: "Google Business Profile",
    areaText: "Florida: Miami to West Palm Beach",
    copyrightSuffix: "Swim School. All rights reserved.",
    nav: [
      { href: "/#about", label: "About" },
      { href: "/#achievements", label: "Achievements" },
      { href: "/#methodology", label: "Method" },
      { href: "/#testimonials", label: "Reviews" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
  form: {
    title: "Book a Trial Lesson",
    subtitle: "Tell us a little about yourself — we'll reply on WhatsApp within minutes.",
    nameLabel: "Your name",
    namePlaceholder: "E.g. Alex",
    phoneLabel: "Phone (WhatsApp preferred)",
    phonePlaceholder: "+1 (___) ___-____",
    whoLabel: "Who is learning?",
    whoChild: "Child",
    whoAdult: "Adult (me)",
    ageLabel: "Age",
    agePlaceholder: "E.g. 8",
    levelLabel: "Swimming level",
    levelOptions: [
      { value: "none", label: "Never been in a pool" },
      { value: "beginner", label: "Comfortable in water but can't swim" },
      { value: "intermediate", label: "Can swim a little, wants to improve technique" },
      { value: "advanced", label: "Experienced swimmer, refining technique" },
    ],
    areaLabel: "Neighborhood / area",
    areaPlaceholder: "E.g. Aventura, Hallandale Beach, Miami...",
    submitCta: "Send via WhatsApp",
    successTitle: "Almost done!",
    successBody: "WhatsApp will open with a pre-filled message — just tap Send.",
    requiredError: "Please enter your name and phone number.",
    whatsappMessage: (name: string, phone: string, who: string, age: string, level: string, area: string) =>
      `Hi Pavel!\nI'd like to book a swim lesson.\n\nName: ${name}\nPhone: ${phone}\nLearner: ${who}${age ? `, age: ${age}` : ""}\nLevel: ${level}\n${area ? `Area: ${area}` : ""}`.trim(),
  },
  mobileBar: {
    cta: "Book via WhatsApp",
  },
};

const he = {
  header: {
    nav: [
      { href: "/#about", label: "על המייסד" },
      { href: "/#achievements", label: "הישגים" },
      { href: "/#press", label: "בתקשורת" },
      { href: "/#methodology", label: "שיטה" },
      { href: "/#testimonials", label: "ביקורות" },
      { href: "/#areas", label: "אזורים" },
      { href: "/#pricing", label: "מחירים" },
      { href: "/#online", label: "אונליין" },
      { href: "/#faq", label: "שאלות נפוצות" },
    ],
    cta: "לקביעת שיעור",
    menuOpen: "פתח תפריט",
    menuClose: "סגור תפריט",
    mobileWhatsapp: "לקביעה בווטסאפ",
  },
  hero: {
    logoAlt: "LikeSwim — בית ספר לשחייה",
    h1: "מאמן שחייה פרטי במיאמי — פבל לויצקי",
    description:
      "שיעורי שחייה מקצועיים בדרום פלורידה — מיאמי, פורט לודרדייל, בוקה ראטון וווסט פאלם ביץ'. שיעורי שחייה פרטיים וקבוצתיים לילדים ולמבוגרים.",
    ctaWhatsapp: "לקביעה בווטסאפ",
    ctaLearnMore: "למידע נוסף",
    stats: [
      { value: "15+", label: "שנות אימון" },
      { value: "2000+", label: "תלמידים" },
      { value: "3", label: "מדינות" },
      { value: "1:1", label: "וקבוצות" },
    ],
  },
  about: {
    badge: "מייסד LIKESWIM",
    photoAlt: "פבל לויצקי — מייסד LikeSwim",
    badgeYears: "שנות אימון",
    heading: "פבל לויצקי —",
    headingAccent: "מייסד LikeSwim",
    paragraphs: [
      "פבל לויצקי הוא מאמן שחייה מקצועי עם ניסיון בינלאומי ברוסיה, ישראל וארצות הברית. אמן ספורט בשחייה, משתתף מרובה-פעמים ב-FINA Swimming World Cup וחבר לשעבר בנבחרת הנוער הלאומית של רוסיה.",
      "עם יותר מ-20 שנה בשחייה תחרותית ויותר מ-15 שנות אימון, פבל עובד עם כולם — ממתחילים שמפחדים ממים ועד טריאתלטים — ומעניק שיעורי שחייה פרטיים לילדים ולמבוגרים ברחבי דרום פלורידה.",
      "השיטה שלו מתמקדת בטכניקה, מודעות לגוף וביטחון במים — לא רק בתרגילים. המטרה אינה רק ללמד שחייה, אלא לגרום לכם להרגיש בבית אמיתי במים.",
    ],
    highlights: [
      { label: "15+ שנים", desc: "ניסיון באימון" },
      { label: "2000+", desc: "תלמידים הוכשרו" },
      { label: "אמן ספורט", desc: "הוסמך בגיל 15" },
      { label: "3 מדינות", desc: "רוסיה, ישראל, ארה\"ב" },
    ],
    worldAquaticsLabel: "פרופיל ב-World Aquatics",
  },
  achievements: {
    badge: "הישגים",
    heading: "המסלול ל",
    headingAccent: "מצוינות",
    subtitle:
      "הקריירה הספורטיבית ומסלול ההתפתחות המקצועית של מייסד LikeSwim — פבל לויצקי.",
    stats: [
      { value: "15+", label: "שנות ניסיון באימון" },
      { value: "2000+", label: "תלמידים" },
    ],
    items: [
      {
        title: "אמן ספורט בשחייה",
        description:
          "השיג את תואר אמן הספורט ברוסיה בגיל 15 — אחד הצעירים ביותר באזור באותה תקופה.",
      },
      {
        title: "אלוף סנקט פטרסבורג ומחוז הצפון-מערב",
        description:
          "זוכה באליפות סנקט פטרסבורג ומחוז הפדרלי הצפון-מערבי בשחייה.",
      },
      {
        title: "זוכה האליפות הלאומית הרוסית",
        description: "מקום ראשון באליפות הפדרציה הרוסית לשחייה, 2007.",
      },
      {
        title: "פרס נשיאותי לנוער",
        description:
          "מקבל פרס הפדרציה הרוסית של הנשיא לנוער מוכשר בספורט.",
      },
      {
        title: "חבר נבחרת הנוער הלאומית של רוסיה",
        description: "נבחר לנבחרת הנוער הלאומית הרוסית לשחייה (2006–2008).",
      },
      {
        title: "FINA Swimming World Cup 2009–2010",
        description: "משתתף מרובה-פעמים ב-FINA Swimming World Cup (2009–2010). מאומת ב-World Aquatics.",
        verifiedUrl: "https://www.worldaquatics.com/athletes/1013361/pavel-levitskiy",
        verifiedLabel: "מאומת ב-World Aquatics",
      },
    ],
  },
  press: {
    badge: "בתקשורת",
    heading: "כותבים עלינו",
    readMore: "לקריאת הכתבה",
    mentions: [
      {
        publication: "gorodkirov.ru",
        title: "פבל לויצקי — ספורטאי מוכשר ומאמן מצליח, עכשיו בישראל",
        url: "https://gorodkirov.ru/news/pavel-levickij-talantlivyj-sportsmen-i-uspeshnyj-trener-teper-v-izraile/",
      },
      {
        publication: "progorodsamara.ru",
        title: "השחיין המוכשר פבל לויצקי הפך למאמן שחייה לילדים בישראל",
        url: "https://progorodsamara.ru/news/view/talantlivyj-plovec-pavel-levickij-stal-trenerom-po-plavaniu-dla-detej-v-izraile/",
      },
      {
        publication: "gatchinasport.ru",
        title: "אולם התהילה הספורטיבי של גאטצ'ינה",
        description: "רישום רשמי: אמן ספורט של רוסיה, אלוף NWFD, משתתף גביע העולם, פרס נשיאותי.",
        url: "https://gatchinasport.ru/sport-v-liczax/mastera-sporta/mastera-sporta-sssr-i-rossii/rossiya/plavanie/leviczkij-pavel/",
        officialBadge: "רישום רשמי",
      },
    ],
  },
  methodology: {
    badge: "שיטה",
    heading: "איך השיעורים",
    headingAccent: "עובדים",
    subtitle:
      "לימוד דרך מודעות לגוף ותחושת המים — לא חזרה מכנית. קואורדינציה, נשימה וביטחון עצמי: תלמידים רואים תוצאות כבר מהשיעור הראשון, ילדים מגיל 3 ומבוגרים כאחד.",
    steps: [
      {
        title: "הערכה",
        description:
          "השיעור הראשון הוא בהנחה 50% — היכרות ללא לחץ. אני מעריך את רמתכם, מתייחס לכל פחד ומציב מטרות ברורות יחד איתכם (והורים לילדים).",
      },
      {
        title: "תוכנית אישית",
        description:
          "אני בונה תוכנית אימונים מותאמת אישית — מטכניקה בסיסית ועד עבודת מהירות — המותאמת לגיל, לכושר ולקצב ההתקדמות שלכם.",
      },
      {
        title: "אימון מתקדם",
        description:
          "כל שיעור בנוי על הקודם: מקל אל מורכב, תוך ערבוב סגנונות, תרגילי נשימה ואלמנטים משחקיים לילדים.",
      },
      {
        title: "התקדמות ותוצאות",
        description:
          "אני עוקב אחר ההתקדמות לאחר כל שיעור ומספק משוב ברור. תמיד תדעו מה למדתם ומה הבא בתור.",
      },
    ],
    noteHeading: "שיעור ראשון בהנחה 50%",
    noteBody:
      "בואו להכיר אותי — ללא התחייבות. תראו את השיטה בפעולה ותוכלו לשאול כל שאלה אישית.",
  },
  gallery: {
    badge: "גלריה",
    heading: "LikeSwim",
    headingAccent: "בפעולה",
    closeLabel: "סגור",
    prevLabel: "תמונה קודמת",
    nextLabel: "תמונה הבאה",
    imageAlts: [
      "LikeSwim — אימון בבריכה",
      "LikeSwim — שיעור שחייה",
      "LikeSwim — מאמן ותלמיד",
      "LikeSwim — מאמן עם ילד קטן",
      "LikeSwim — שיעור שחייה פרטי",
      "LikeSwim — שיעור שחייה לילדים",
    ],
  },
  testimonials: {
    badge: "ביקורות",
    heading: "מה",
    headingAccent: "אומרים תלמידים והורים",
    subtitle: "יותר מ-2,000 תלמידים התאמנו עם פבל. כך הם מדברים על השיעורים שלהם.",
  },
  serviceAreas: {
    badge: "אזורי שירות",
    heading: "פלורידה —",
    headingAccent: "ממיאמי עד ווסט פאלם ביץ'",
    subtitle:
      "אני מגיע לבריכות פרטיות וקהילתיות ברחבי דרום פלורידה. לא רואים את העיר שלכם? שלחו לי הודעה בווטסאפ ונמצא את האפשרות הקרובה ביותר.",
    countSuffix: "ערים ושכונות ברחבי דרום פלורידה",
  },
  pricing: {
    badge: "מחירים",
    heading: "תעריפי שיעורי שחייה",
    subtitle: "הנחה 50% על השיעור הראשון — לכל אורכי הסשן",
    discountBadge: "50% הנחה",
    fitLabel: "מתאים ל",
    includesLabel: "כולל",
    whatsappCta: "לקביעה בווטסאפ",
    packageBadge: "הכי משתלם",
    packageDurationLabel: "חבילת 10 שיעורים",
    packageTitle: "קבלו 10 סשנים במחיר 9",
    packageCta: "לקביעת שיעור",
    plans: [
      {
        duration: "30 דקות",
        firstLesson: "שיעור ראשון $37.50",
        subtitle: "מושלם למתחילים ולילדים קטנים",
        description:
          "פורמט קצר ונוח המסייע למתחילים להתרגל למים ולבנות ביטחון בקצב שלהם.",
        fits: ["ילדים קטנים", "מתחילים מוחלטים", "מבוגרים עם חרדת מים"],
        includes: ["התרגלות למים", "תרגילים בסיסיים ונשימה", "מבוא לטכניקה"],
        footer: "צעד ראשון מצוין לשחייה",
      },
      {
        duration: "45 דקות",
        firstLesson: "שיעור ראשון $55",
        subtitle: "הפורמט הפופולרי ביותר להתקדמות יציבה",
        description:
          "מספיק זמן לטכניקה, תרגילים ועבודת מים אמיתית. שיעור השחייה הפרטי הפופולרי ביותר שלנו.",
        fits: ["ילדים ומבוגרים עם יסודות", "שיפור טכניקה", "אימון קבוע"],
        includes: [
          "עבודת טכניקת שחייה",
          "קואורדינציה ונשימה",
          "תיקון שגיאות",
          "איזון ויעילות",
        ],
        footer: "האיזון הטוב ביותר בין עצימות ונוחות",
      },
      {
        duration: "60 דקות",
        firstLesson: "שיעור ראשון $72.50",
        subtitle: "לשחיינים בטוחים ואימון רציני",
        description:
          "סשן אימון מלא עם עבודת טכניקה עמוקה, בניית סיבולת ונפח אימון גבוה.",
        fits: ["שחיינים בטוחים", "טריאתלטים", "הכנה לתחרות"],
        includes: [
          "ניתוח שחייה מעמיק",
          "פיתוח סיבולת",
          "עבודת מהירות וכוח",
          "תוכנית מותאמת לחלוטין",
        ],
        footer: "ערך מקסימלי לסשן",
      },
    ],
    packageOptions: [
      { label: "10×30 דק'", price: "$675", saving: "חיסכון $75" },
      { label: "10×45 דק'", price: "$990", saving: "חיסכון $110" },
      { label: "10×60 דק'", price: "$1,305", saving: "חיסכון $145" },
    ],
    groupBadge: "קבוצה",
    groupTitle: "שיעורי קבוצה — עד 4 אנשים",
    groupCta: "לקביעת שיעור קבוצתי",
    groupOptions: [
      { label: "30 דק'", price: "$120" },
      { label: "45 דק'", price: "$145" },
      { label: "60 דק'", price: "$170" },
    ],
    groupNote: "מחיר לקבוצה, עד 4 אנשים",
  },
  onlineCoaching: {
    badge: "אונליין",
    heading: "אימון אונליין",
    headingAccent: "מכל מקום בעולם",
    subtitle:
      "ניתוח טכניקה מקצועי ותוכניות אימון אישיות — ללא צורך בבריכה ליד הבית.",
    includesLabel: "כולל",
    cta: "הודעה בווטסאפ",
    cards: [
      {
        title: "ניתוח טכניקה",
        price: "$40",
        priceSuffix: "לסשן",
        description:
          "שלחו וידאו בווטסאפ או טלגרם — אפרק את השגיאות המרכזיות שלכם, אתן תרגילים ספציפיים לתיקונן ואחזיר משוב וידאו עם הערות.",
        includes: [
          "ניתוח וידאו של השחייה שלכם",
          "פירוק שגיאות מרכזיות",
          "תרגילים ספציפיים לתיקון כל בעיה",
          "משוב וידאו עם הערות",
        ],
      },
      {
        title: "תוכנית אונליין",
        price: "$200",
        priceSuffix: "/ 2 שבועות · $300 / 4 שבועות",
        description:
          "תוכנית אימון אישית עם הסברי טכניקה, ניתוח וידאו שבועי ותרגילים ממוקדים.",
        includes: [
          "תוכנית אימון אישית",
          "הסברי טכניקה",
          "ניתוח וידאו שבועי",
          "תרגילים ומשימות",
        ],
      },
      {
        title: "מאמן אישי",
        price: "$650",
        priceSuffix: "לחודש",
        description:
          "תמיכה מלאה ומתמשכת: שני ניתוחי וידאו בשבוע, תיקון טכניקה ותוכנית אישית המתעדכנת מדי שבוע.",
        includes: [
          "2 ניתוחי וידאו בשבוע",
          "תיקון טכניקה מתמשך",
          "תוכנית אישית המתעדכנת שבועית",
          "שאלות ללא הגבלה",
        ],
      },
    ],
  },
  faq: {
    badge: "שאלות נפוצות",
    heading: "שאלות",
    headingAccent: "נפוצות",
    items: [
      {
        q: "האם אתה עובד עם מתחילים מוחלטים?",
        a: "כן — רוב התלמידים שלי מתחילים מאפס. השיעור הראשון הוא סשן אבחון: אני מעריך את רמתכם, מתייחס לכל פחד ובונה תוכנית ספציפית בשבילכם.",
      },
      {
        q: "האם אתה מגיע לבריכות פרטיות?",
        a: "כן, אני עובד בבריכות פרטיות בקונדומיניומים ובבתים פרטיים ברחבי מיאמי ודרום פלורידה.",
      },
      {
        q: "מהו הגיל הצעיר ביותר שאתה עובד איתו?",
        a: "אני עובד עם ילדים מגיל 3. לפעוטות הפורמט הוא משחקי; לילדים מבוגרים יותר אנחנו מתמקדים בטכניקה ובביטחון במים.",
      },
      {
        q: "באילו שפות אתה מלמד?",
        a: "אני מקיים שיעורים בעברית, אנגלית ורוסית.",
      },
      {
        q: "כמה מהר אפשר ללמוד לשחות?",
        a: "רוב התלמידים מרגישים בטוחים במים לאחר 3–5 שיעורים בלבד. ההתקדמות תלויה בעקביות וברמת ההתחלה שלכם.",
      },
      {
        q: "איזה ציוד נדרש?",
        a: "רק בגד ים ורצון ללמוד. אני מביא את כל ציוד האימון הנדרש.",
      },
    ],
  },
  cta: {
    badge: "✦ ההרשמה פתוחה",
    heading: "מוכנים להתחיל?",
    headingAccent: "שיעור ראשון —",
    headingUnderline: "הנחה 50%",
    body: "שלחו לי הודעה בווטסאפ — אחזור תוך מספר דקות. נמצא זמן ובריכה שמתאימים ללוח הזמנים והמיקום שלכם בדרום פלורידה.",
    whatsappCta: "הודעה בווטסאפ",
    trustItems: [
      "✓ שיעור ראשון בהנחה 50%",
      "✓ ללא רשימות המתנה",
      "✓ לוח זמנים גמיש",
      "✓ דרום פלורידה: ממיאמי עד ווסט פאלם ביץ'",
    ],
  },
  footer: {
    brand:
      "LikeSwim הוא יותר מבית ספר לשחייה. זהו פרויקט הבנוי על מומחיות מקצועית, שיטות אימון מודרניות ותשוקה להפוך את השחייה לנגישה לכולם.",
    navHeading: "ניווט",
    contactsHeading: "צור קשר",
    whatsappLink: "הודעה בווטסאפ",
    googleBusinessLink: "Google Business Profile",
    areaText: "פלורידה: ממיאמי עד ווסט פאלם ביץ'",
    copyrightSuffix: "בית ספר לשחייה. כל הזכויות שמורות.",
    nav: [
      { href: "/#about", label: "על המייסד" },
      { href: "/#achievements", label: "הישגים" },
      { href: "/#methodology", label: "שיטה" },
      { href: "/#testimonials", label: "ביקורות" },
      { href: "/#pricing", label: "מחירים" },
      { href: "/#faq", label: "שאלות נפוצות" },
    ],
  },
  form: {
    title: "קביעת שיעור ניסיון",
    subtitle: "ספר/י לנו קצת על עצמך — נחזור בווטסאפ תוך כמה דקות.",
    nameLabel: "שמך",
    namePlaceholder: "לדוגמה: יונתן",
    phoneLabel: "טלפון (עדיף ווטסאפ)",
    phonePlaceholder: "+1 (___) ___-____",
    whoLabel: "מי ילמד?",
    whoChild: "ילד/ה",
    whoAdult: "מבוגר/ת (אני)",
    ageLabel: "גיל",
    agePlaceholder: "לדוגמה: 8",
    levelLabel: "רמת שחייה",
    levelOptions: [
      { value: "none", label: "מעולם לא היה/תה בבריכה" },
      { value: "beginner", label: "מרגיש/ה בנוח במים אך לא שוחה" },
      { value: "intermediate", label: "שוחה קצת, רוצה לשפר טכניקה" },
      { value: "advanced", label: "שחיין/ית מנוסה, משכלל טכניקה" },
    ],
    areaLabel: "שכונה / אזור",
    areaPlaceholder: "לדוגמה: אוונטורה, הלנדייל ביץ׳, מיאמי...",
    submitCta: "שליחה דרך ווטסאפ",
    successTitle: "כמעט סיימנו!",
    successBody: "ווטסאפ ייפתח עם הודעה מוכנה — פשוט לחץ/י על שלח.",
    requiredError: "נא להזין שם ומספר טלפון.",
    whatsappMessage: (name: string, phone: string, who: string, age: string, level: string, area: string) =>
      `שלום פבל!\nאני רוצה לקבוע שיעור שחייה.\n\nשם: ${name}\nטלפון: ${phone}\nמי לומד: ${who}${age ? `, גיל: ${age}` : ""}\nרמה: ${level}\n${area ? `אזור: ${area}` : ""}`.trim(),
  },
  mobileBar: {
    cta: "לקביעה בווטסאפ",
  },
};

export const translations = { ru, en, he };
export type Translations = typeof ru;
