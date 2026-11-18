import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone, Check, Star, MapPin } from "lucide-react";
import { LandingFAQ } from "./LandingFAQ";
import { Footer } from "@/components/sections/Footer";

const WHATSAPP_URL = "https://wa.me/17542928576";
const PHONE = "+1 (754) 292-8576";
const GOOGLE_REVIEWS_URL = "https://www.google.com/maps?cid=17543475843356755415";

type Lang = "en" | "ru";

const content = {
  en: {
    url: "https://like-swim.com/en/adult-swim-lessons",
    breadcrumb: "Adult swim lessons",
    badge: "Private · at your pool · first lesson 50% off",
    h1: "Adult Swim Lessons in Miami & South Florida",
    subtitle: "Learn to swim at any age — at your own pool, at your own pace.",
    intro:
      "Most of my adult students start from zero or with a real fear of water. Private one-on-one lessons with a Master of Sports coach who comes to your home, condo or hotel pool — from Miami and Sunny Isles to Hallandale, Hollywood, Fort Lauderdale and Boca Raton. No crowds, no judgment.",
    ctaWhatsapp: "Book via WhatsApp",
    coachCaption: "Master of Sports · 10+ years coaching · 2,000+ students",
    googleBadge: "5.0 ★ rating on Google",
    googleLink: "Read reviews",
    forWhomTitle: "Who these lessons are for",
    forWhom: [
      "Adults who never learned to swim — complete beginners",
      "People with a fear of water or a bad experience in the past",
      "Swimmers who get tired after one length and want an easy, efficient freestyle",
      "Triathletes preparing for a sprint, Olympic or Ironman swim",
      "Parents who want to swim confidently together with their kids",
    ],
    stepsTitle: "How the first lesson works",
    steps: [
      { t: "We talk", d: "You tell me your goal and how you feel in the water. No pressure — we start where you are." },
      { t: "Comfort first", d: "Breathing, floating and putting your face in the water calmly. For many adults this alone changes everything." },
      { t: "First exercises", d: "Simple drills in the water at your level — gliding, kicking, breathing — so you feel progress from day one." },
      { t: "Your plan", d: "I give you a clear plan: how many lessons you likely need and what we will work on next." },
    ],
    fearTitle: "Afraid of water? That's completely normal",
    fearText: [
      "Fear of water is the most common reason adults never learn to swim. It is not a weakness — it is the body's natural protection. We work with it step by step: shallow water first, breathing exercises, and you always stay in control.",
      "On average, an adult with a strong fear of water starts swimming independently after 10–15 private lessons — sometimes faster, depending on the starting point and how often we train.",
    ],
    pricesTitle: "Prices",
    prices: [
      { d: "30 min", p: "$75", f: "first lesson $37.50" },
      { d: "45 min", p: "$110", f: "first lesson $55" },
      { d: "60 min", p: "$145", f: "first lesson $72.50" },
    ],
    pricesNote: "10-lesson package: 10 lessons for the price of 9. I come to your pool anywhere in my service area.",
    areasTitle: "Areas I travel to",
    areas: [
      { name: "Hallandale Beach", slug: "hallandale-beach" },
      { name: "Sunny Isles Beach", slug: "sunny-isles-beach" },
      { name: "Aventura", slug: "aventura" },
      { name: "Miami", slug: "miami" },
      { name: "Miami Beach", slug: "miami-beach" },
      { name: "Hollywood", slug: "hollywood" },
      { name: "Fort Lauderdale", slug: "fort-lauderdale" },
      { name: "Boca Raton", slug: "boca-raton" },
    ],
    faqTitle: "Questions adults ask",
    faq: [
      { q: "Am I too old to learn to swim?", a: "No. Adults of any age learn to swim — and they often progress faster than kids because they understand the technique. The main thing is to feel safe in the water, and that is exactly where we start." },
      { q: "How many lessons does an adult need to learn to swim?", a: "It depends on your starting point. On average, an adult with a strong fear of water starts swimming independently after 10–15 private lessons; without fear it is usually faster. After the first lesson I will give you a realistic estimate." },
      { q: "Where do the lessons take place?", a: "At your pool — private home, condo or hotel — anywhere from Miami to Boca Raton. If you don't have a pool, I can suggest a nearby public one." },
      { q: "Do I need any equipment?", a: "Just a swimsuit and goggles. I bring all the training equipment: boards, noodles and fins." },
      { q: "What language do you teach in?", a: "Russian, Hebrew and English." },
      { q: "How do I book?", a: "Message me on WhatsApp at +1 (754) 292-8576 with your area and preferred times. The first lesson is 50% off." },
    ],
    finalTitle: "Ready to start?",
    finalText: "Send me a message — we'll find a time and I'll come to your pool.",
    serviceType: "Adult swim lessons",
  },
  ru: {
    url: "https://like-swim.com/ru/plavanie-dlya-vzroslyh",
    breadcrumb: "Плавание для взрослых",
    badge: "Индивидуально · у вашего бассейна · первое занятие −50%",
    h1: "Обучение плаванию для взрослых в Майами",
    subtitle: "Научиться плавать можно в любом возрасте — у вашего бассейна и в вашем темпе.",
    intro:
      "Большинство моих взрослых учеников начинают с нуля или с настоящим страхом воды. Индивидуальные занятия с мастером спорта, который приезжает к вашему бассейну — дома, в кондоминиуме или отеле: Санни-Айлс, Авентура, Холландейл, Майами, Голливуд, Форт-Лодердейл, Бока-Ратон. Без толпы и без осуждения. Занятия на русском языке.",
    ctaWhatsapp: "Записаться в WhatsApp",
    coachCaption: "Мастер спорта · 10+ лет тренерства · 2000+ учеников",
    googleBadge: "Рейтинг 5.0 ★ в Google",
    googleLink: "Читать отзывы",
    forWhomTitle: "Кому подойдут занятия",
    forWhom: [
      "Взрослым, которые никогда не умели плавать — с полного нуля",
      "Тем, кто боится воды или когда-то пережил неприятный случай",
      "Тем, кто устаёт после одного бассейна и хочет плавать кролем легко",
      "Триатлетам, которые готовятся к спринту, олимпийке или Ironman",
      "Родителям, которые хотят уверенно плавать вместе с детьми",
    ],
    stepsTitle: "Как проходит первое занятие",
    steps: [
      { t: "Знакомимся", d: "Вы рассказываете о цели и о том, как чувствуете себя в воде. Никакого давления — начинаем с вашего уровня." },
      { t: "Сначала комфорт", d: "Дыхание, лежание на воде, спокойно опустить лицо в воду. Для многих взрослых это уже меняет всё." },
      { t: "Первые упражнения", d: "Простые упражнения под ваш уровень — скольжение, работа ног, дыхание, — чтобы прогресс чувствовался с первого дня." },
      { t: "Ваш план", d: "Даю понятный план: сколько примерно понадобится занятий и что будем делать дальше." },
    ],
    fearTitle: "Боитесь воды? Это нормально",
    fearText: [
      "Страх воды — самая частая причина, по которой взрослые так и не научились плавать. Это не слабость, а естественная защита организма. Мы работаем с ним постепенно: сначала мелкая часть бассейна, дыхательные упражнения, и вы всё время контролируете ситуацию.",
      "В среднем взрослый с выраженным страхом воды начинает плавать самостоятельно за 10–15 индивидуальных занятий — иногда быстрее, в зависимости от исходного уровня и частоты тренировок.",
    ],
    pricesTitle: "Стоимость",
    prices: [
      { d: "30 минут", p: "$75", f: "первое занятие $37.50" },
      { d: "45 минут", p: "$110", f: "первое занятие $55" },
      { d: "60 минут", p: "$145", f: "первое занятие $72.50" },
    ],
    pricesNote: "Пакет из 10 занятий — 10 тренировок по цене 9. Приезжаю к вашему бассейну в любом районе зоны обслуживания.",
    areasTitle: "Куда я выезжаю",
    areas: [
      { name: "Холландейл-Бич", slug: "hallandale-beach" },
      { name: "Санни-Айлс-Бич", slug: "sunny-isles-beach" },
      { name: "Авентура", slug: "aventura" },
      { name: "Майами", slug: "miami" },
      { name: "Майами-Бич", slug: "miami-beach" },
      { name: "Голливуд", slug: "hollywood" },
      { name: "Форт-Лодердейл", slug: "fort-lauderdale" },
      { name: "Бока-Ратон", slug: "boca-raton" },
    ],
    faqTitle: "Частые вопросы взрослых",
    faq: [
      { q: "Не поздно ли учиться плавать в моём возрасте?", a: "Нет. Плавать учатся взрослые любого возраста — и часто прогрессируют быстрее детей, потому что понимают технику. Главное — почувствовать себя в воде в безопасности, с этого мы и начинаем." },
      { q: "Сколько занятий нужно взрослому, чтобы научиться плавать?", a: "Зависит от исходного уровня. В среднем взрослый с выраженным страхом воды начинает плавать самостоятельно за 10–15 индивидуальных занятий, без страха — обычно быстрее. После первого занятия дам реальную оценку." },
      { q: "Где проходят занятия?", a: "У вашего бассейна — в частном доме, кондоминиуме или отеле, от Майами до Бока-Ратона. Если своего бассейна нет, подскажу ближайший общественный." },
      { q: "Что нужно взять с собой?", a: "Только купальник и очки. Весь инвентарь — доски, нудлы, ласты — я привожу сам." },
      { q: "На каком языке проходят занятия?", a: "На русском, а также на иврите и английском." },
      { q: "Как записаться?", a: "Напишите в WhatsApp +1 (754) 292-8576, укажите район и удобное время. Первое занятие — со скидкой 50%." },
    ],
    finalTitle: "Готовы начать?",
    finalText: "Напишите мне — подберём время, и я приеду к вашему бассейну.",
    serviceType: "Обучение плаванию для взрослых",
  },
} as const;

export function AdultLessonsPage({ lang }: { lang: Lang }) {
  const c = content[lang];
  const homeHref = lang === "ru" ? "/ru" : "/";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": c.h1,
        "serviceType": c.serviceType,
        "url": c.url,
        "description": c.intro,
        "provider": { "@id": "https://like-swim.com/#business" },
        "areaServed": content.en.areas.map((a) => `${a.name}, FL`),
        "availableLanguage": ["Russian", "Hebrew", "English"],
        "offers": c.prices.map((p) => ({
          "@type": "Offer",
          "name": `${c.serviceType} — ${p.d}`,
          "price": p.p.replace("$", ""),
          "priceCurrency": "USD",
        })),
      },
      {
        "@type": "FAQPage",
        "mainEntity": c.faq.map((item) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": { "@type": "Answer", "text": item.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "LikeSwim", "item": `https://like-swim.com${homeHref === "/" ? "" : homeHref}` },
          { "@type": "ListItem", "position": 2, "name": c.breadcrumb, "item": c.url },
        ],
      },
    ],
  };

  return (
    <>
      <main className="bg-[#1a3350]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-cyan-600/15 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-blue-700/15 blur-[140px]" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <p className="text-slate-500 text-sm mb-6">
              <Link href={homeHref} className="hover:text-cyan-400 transition-colors">LikeSwim</Link>
              {" / "}
              <span className="text-slate-300">{c.breadcrumb}</span>
            </p>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-sm font-semibold mb-6">
                  {c.badge}
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">{c.h1}</h1>
                <p className="text-lg text-cyan-400 font-medium mb-6">{c.subtitle}</p>
                <p className="text-slate-400 leading-relaxed mb-6">{c.intro}</p>
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-300 mb-8 hover:text-cyan-300 transition-colors"
                >
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  {c.googleBadge} · <span className="underline">{c.googleLink}</span>
                </a>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-200"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0" />
                    {c.ctaWhatsapp}
                  </a>
                  <a
                    href={`tel:${PHONE.replace(/\D/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-all duration-200"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    {PHONE}
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl scale-105" />
                <div className="relative rounded-3xl overflow-hidden border border-white/5 shadow-2xl aspect-[4/5]">
                  <Image
                    src="/gallery5.webp"
                    alt={lang === "ru" ? "Тренер Павел Левицкий у бассейна" : "Swim coach Pavel Levitskiy at the pool"}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#1a3350] to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-lg">{lang === "ru" ? "Павел Левицкий" : "Pavel Levitskiy"}</p>
                    <p className="text-cyan-400 text-sm">{c.coachCaption}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-20 bg-[#162d47]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">{c.forWhomTitle}</h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {c.forWhom.map((item) => (
                <li key={item} className="flex gap-3 p-5 rounded-2xl border border-white/5 bg-white/[0.02] text-slate-300">
                  <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* First lesson */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">{c.stepsTitle}</h2>
            <ol className="space-y-4">
              {c.steps.map((s, i) => (
                <li key={s.t} className="flex gap-5 p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                  <span className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold flex items-center justify-center">{i + 1}</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{s.t}</h3>
                    <p className="text-slate-400 leading-relaxed">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Fear of water */}
        <section className="py-20 bg-[#162d47]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{c.fearTitle}</h2>
            {c.fearText.map((p) => (
              <p key={p} className="text-slate-400 leading-relaxed mb-4 text-lg">{p}</p>
            ))}
          </div>
        </section>

        {/* Prices */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">{c.pricesTitle}</h2>
            <div className="grid sm:grid-cols-3 gap-4 mb-4">
              {c.prices.map((p) => (
                <div key={p.d} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] text-center">
                  <p className="text-slate-400 mb-2">{p.d}</p>
                  <p className="text-white text-3xl font-bold mb-1">{p.p}</p>
                  <p className="text-amber-300 text-sm">{p.f}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-sm">{c.pricesNote}</p>
          </div>
        </section>

        {/* Areas */}
        <section className="py-16 bg-[#162d47]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">{c.areasTitle}</h2>
            <div className="flex flex-wrap gap-3">
              {c.areas.map((a) => (
                <Link
                  key={a.slug}
                  href={`/${lang}/${a.slug}/private-swimming-lessons-adults`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 text-slate-300 text-sm hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  {a.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">{c.faqTitle}</h2>
            <LandingFAQ items={[...c.faq]} />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-[#162d47]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">{c.finalTitle}</h2>
            <p className="text-slate-400 text-lg mb-8">{c.finalText}</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:scale-[1.02] transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              {c.ctaWhatsapp}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
