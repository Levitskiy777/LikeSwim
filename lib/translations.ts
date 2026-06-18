export type Lang = "ru" | "en" | "he";

const ru = {
  header: {
    nav: [
      { href: "#about", label: "Об основателе" },
      { href: "#achievements", label: "Достижения" },
      { href: "#press", label: "В прессе" },
      { href: "#methodology", label: "Методика" },
      { href: "#testimonials", label: "Отзывы" },
      { href: "#areas", label: "Районы" },
      { href: "#pricing", label: "Стоимость" },
      { href: "#online", label: "Онлайн" },
      { href: "#faq", label: "FAQ" },
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
      "Профессиональная школа плавания в Флориде, от Майами до Вест-Палм-Бич. Индивидуальные и групповые тренировки для детей и взрослых.",
    ctaWhatsapp: "Записаться в WhatsApp",
    ctaLearnMore: "Узнать больше",
    stats: [
      { value: "10+", label: "лет тренерства" },
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
      "Павел Левицкий — профессиональный тренер по плаванию с международным опытом работы в России, Израиле и США. Мастер спорта, участник этапов Кубка мира и бывший член юношеской сборной команды.",
      "Более 20 лет в профессиональном плавании и около 10 лет тренерской практики помогают ему находить подход как к детям, так и ко взрослым — от новичков со страхом воды до триатлетов и уверенных пловцов.",
      "В основе его методики — внимание к технике, психологии и индивидуальным особенностям каждого ученика. Главная цель — не просто научить человека плавать, а помочь чувствовать себя уверенно и комфортно в воде.",
    ],
    highlights: [
      { label: "10+ лет", desc: "тренерского опыта" },
      { label: "2000+", desc: "учеников выпустил" },
      { label: "Мастер спорта", desc: "выполнил норматив в 15 лет" },
      { label: "3 страны", desc: "Россия, Израиль, США" },
    ],
  },
  achievements: {
    badge: "Достижения",
    heading: "Путь к",
    headingAccent: "мастерству",
    subtitle:
      "Спортивная карьера и профессиональный рост основателя LikeSwim — Павла Левицкого.",
    stats: [
      { value: "10+", label: "лет тренерского опыта" },
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
        title: "Победитель национального первенства по плаванию",
        description: "Завоевал первое место на национальном первенстве по плаванию 2007 года.",
      },
      {
        title: "Государственная премия для талантливой молодёжи",
        description: "Лауреат государственной премии для талантливой молодёжи в области спорта.",
      },
      {
        title: "Член молодёжной национальной сборной",
        description: "Входил в состав молодёжной национальной сборной по плаванию.",
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
        publication: "astv.ru",
        title: "Тренера по плаванию Павла Левицкого пригласили работать в Израиль",
        url: "https://astv.ru/news/materials/trenera-po-plavaniyu-pavla-levickogo-priglasili-rabotat-v-izrail",
      },
      {
        publication: "progorodsamara.ru",
        title: "Талантливый пловец Павел Левицкий стал тренером по плаванию для детей в Израиле",
        url: "https://progorodsamara.ru/news/view/talantlivyj-plovec-pavel-levickij-stal-trenerom-po-plavaniu-dla-detej-v-izraile/",
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
    subtitle: "Более 500 человек прошли обучение. Вот что они говорят о тренировках.",
  },
  serviceAreas: {
    badge: "Районы обслуживания",
    heading: "Флорида —",
    headingAccent: "от Майами до Вест-Палм-Бич",
    subtitle:
      "Провожу тренировки в бассейнах этих городов. Не нашли свой — напишите в WhatsApp, подберём ближайший вариант.",
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
    areaText: "Флорида: от Майами до Вест-Палм-Бич",
    copyrightSuffix: "Школа плавания. Все права защищены.",
    nav: [
      { href: "#about", label: "Об основателе" },
      { href: "#achievements", label: "Достижения" },
      { href: "#methodology", label: "Методика" },
      { href: "#testimonials", label: "Отзывы" },
      { href: "#pricing", label: "Стоимость" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  mobileBar: {
    cta: "Записаться в WhatsApp",
  },
};

const en = {
  header: {
    nav: [
      { href: "#about", label: "About" },
      { href: "#achievements", label: "Achievements" },
      { href: "#press", label: "Press" },
      { href: "#methodology", label: "Method" },
      { href: "#testimonials", label: "Reviews" },
      { href: "#areas", label: "Areas" },
      { href: "#pricing", label: "Pricing" },
      { href: "#online", label: "Online" },
      { href: "#faq", label: "FAQ" },
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
      { value: "10+", label: "years coaching" },
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
      "Pavel Levitskii is a professional private swim coach with international experience in Russia, Israel, and the United States. A Master of Sport in swimming, former World Cup participant, and ex-member of the Russian national youth team.",
      "With over 20 years in competitive swimming and nearly 10 years of coaching, Pavel works with everyone from fearful beginners to triathletes — delivering private swim lessons for kids and adults across South Florida.",
      "His method focuses on technique, body awareness, and confidence in the water — not just drills. The goal is not simply to teach you to swim, but to make you feel truly at home in the water.",
    ],
    highlights: [
      { label: "10+ years", desc: "coaching experience" },
      { label: "2000+", desc: "students trained" },
      { label: "Master of Sport", desc: "certified at age 15" },
      { label: "3 countries", desc: "Russia, Israel, USA" },
    ],
  },
  achievements: {
    badge: "Achievements",
    heading: "Path to",
    headingAccent: "Mastery",
    subtitle:
      "The athletic career and professional journey of LikeSwim founder Pavel Levitskii.",
    stats: [
      { value: "10+", label: "years of coaching experience" },
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
        publication: "astv.ru",
        title: "Тренера по плаванию Павла Левицкого пригласили работать в Израиль",
        url: "https://astv.ru/news/materials/trenera-po-plavaniyu-pavla-levickogo-priglasili-rabotat-v-izrail",
      },
      {
        publication: "progorodsamara.ru",
        title: "Талантливый пловец Павел Левицкий стал тренером по плаванию для детей в Израиле",
        url: "https://progorodsamara.ru/news/view/talantlivyj-plovec-pavel-levickij-stal-trenerom-po-plavaniu-dla-detej-v-izraile/",
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
    subtitle: "Over 500 people have trained with Pavel. Here's what they say about their lessons.",
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
        q: "Do you work with complete beginners?",
        a: "Yes — most of my students start from scratch. The first lesson is a diagnostic session: I assess your level, address any fears, and build a program specifically for you.",
      },
      {
        q: "Do you come to private pools?",
        a: "Yes, I work at private pools in condominiums and private homes throughout Miami and South Florida.",
      },
      {
        q: "What is the youngest age you work with?",
        a: "I work with children from age 3. For toddlers the format is play-based; for older kids we focus on technique and water confidence.",
      },
      {
        q: "What languages do you teach in?",
        a: "I conduct lessons in English, Russian, and Hebrew.",
      },
      {
        q: "How quickly can someone learn to swim?",
        a: "Most students feel confident in the water after just 3–5 lessons. Progress depends on consistency and your starting level.",
      },
      {
        q: "What equipment is needed?",
        a: "Just a swimsuit and the willingness to learn. I bring all necessary training equipment.",
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
    areaText: "Florida: Miami to West Palm Beach",
    copyrightSuffix: "Swim School. All rights reserved.",
    nav: [
      { href: "#about", label: "About" },
      { href: "#achievements", label: "Achievements" },
      { href: "#methodology", label: "Method" },
      { href: "#testimonials", label: "Reviews" },
      { href: "#pricing", label: "Pricing" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  mobileBar: {
    cta: "Book via WhatsApp",
  },
};

const he = {
  header: {
    nav: [
      { href: "#about", label: "על המייסד" },
      { href: "#achievements", label: "הישגים" },
      { href: "#press", label: "בתקשורת" },
      { href: "#methodology", label: "שיטה" },
      { href: "#testimonials", label: "ביקורות" },
      { href: "#areas", label: "אזורים" },
      { href: "#pricing", label: "מחירים" },
      { href: "#online", label: "אונליין" },
      { href: "#faq", label: "שאלות נפוצות" },
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
      { value: "10+", label: "שנות אימון" },
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
      "פבל לויצקי הוא מאמן שחייה מקצועי עם ניסיון בינלאומי ברוסיה, ישראל וארצות הברית. אמן ספורט בשחייה, לשעבר משתתף בגביע העולם וחבר לשעבר בנבחרת הנוער הלאומית של רוסיה.",
      "עם יותר מ-20 שנה בשחייה תחרותית וכמעט 10 שנות אימון, פבל עובד עם כולם — ממתחילים שמפחדים ממים ועד טריאתלטים — ומעניק שיעורי שחייה פרטיים לילדים ולמבוגרים ברחבי דרום פלורידה.",
      "השיטה שלו מתמקדת בטכניקה, מודעות לגוף וביטחון במים — לא רק בתרגילים. המטרה אינה רק ללמד שחייה, אלא לגרום לכם להרגיש בבית אמיתי במים.",
    ],
    highlights: [
      { label: "10+ שנים", desc: "ניסיון באימון" },
      { label: "2000+", desc: "תלמידים הוכשרו" },
      { label: "אמן ספורט", desc: "הוסמך בגיל 15" },
      { label: "3 מדינות", desc: "רוסיה, ישראל, ארה\"ב" },
    ],
  },
  achievements: {
    badge: "הישגים",
    heading: "המסלול ל",
    headingAccent: "מצוינות",
    subtitle:
      "הקריירה הספורטיבית ומסלול ההתפתחות המקצועית של מייסד LikeSwim — פבל לויצקי.",
    stats: [
      { value: "10+", label: "שנות ניסיון באימון" },
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
        publication: "astv.ru",
        title: "מאמן השחייה פבל לויצקי הוזמן לעבוד בישראל",
        url: "https://astv.ru/news/materials/trenera-po-plavaniyu-pavla-levickogo-priglasili-rabotat-v-izrail",
      },
      {
        publication: "progorodsamara.ru",
        title: "השחיין המוכשר פבל לויצקי הפך למאמן שחייה לילדים בישראל",
        url: "https://progorodsamara.ru/news/view/talantlivyj-plovec-pavel-levickij-stal-trenerom-po-plavaniu-dla-detej-v-izraile/",
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
    subtitle: "יותר מ-500 אנשים התאמנו עם פבל. כך הם מדברים על השיעורים שלהם.",
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
    areaText: "פלורידה: ממיאמי עד ווסט פאלם ביץ'",
    copyrightSuffix: "בית ספר לשחייה. כל הזכויות שמורות.",
    nav: [
      { href: "#about", label: "על המייסד" },
      { href: "#achievements", label: "הישגים" },
      { href: "#methodology", label: "שיטה" },
      { href: "#testimonials", label: "ביקורות" },
      { href: "#pricing", label: "מחירים" },
      { href: "#faq", label: "שאלות נפוצות" },
    ],
  },
  mobileBar: {
    cta: "לקביעה בווטסאפ",
  },
};

export const translations = { ru, en, he };
export type Translations = typeof ru;
