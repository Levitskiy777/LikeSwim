import Image from "next/image";
import { MessageCircle, Check, Users, MapPin, Phone } from "lucide-react";
import { LandingFAQ } from "./LandingFAQ";
import {
  RuCityData,
  RuServiceData,
  buildRuH1,
  buildRuSubtitle,
  buildRuIntro,
  ruServices,
} from "@/lib/landing-pages-ru";

const WHATSAPP_URL = "https://wa.me/17542928576";
const PHONE = "+1 (754) 292-8576";

export function LandingPageContentRu({
  city,
  service,
}: {
  city: RuCityData;
  service: RuServiceData;
}) {
  const h1 = buildRuH1(city, service);
  const subtitle = buildRuSubtitle(city, service);
  const intro = buildRuIntro(city, service);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "LikeSwim",
        "url": `https://like-swim.com/ru/${city.slug}/${service.slug}`,
        "telephone": "+17542928576",
        "priceRange": service.price,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": city.name,
          "addressRegion": "FL",
          "addressCountry": "US",
        },
        "areaServed": city.name,
        "description": `${service.name} в ${city.name}, FL. ${service.tagline}`,
      },
      {
        "@type": "FAQPage",
        "mainEntity": service.faq.map((item) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": { "@type": "Answer", "text": item.a },
        })),
      },
    ],
  };

  return (
    <main className="bg-[#1a3350]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-cyan-600/15 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-blue-700/15 blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <p className="text-slate-500 text-sm mb-6">
            <a href="/" className="hover:text-cyan-400 transition-colors">LikeSwim</a>
            {" / "}
            <span className="text-slate-400">{city.name}</span>
            {" / "}
            <span className="text-slate-300">{service.name}</span>
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-sm font-semibold">
                  {service.price} · {service.firstLesson ?? service.priceDetail}
                </div>
                {service.groupNote && (
                  <p className="text-slate-500 text-xs mt-1.5">{service.groupNote}</p>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                {h1}
              </h1>

              <p className="text-lg text-cyan-400 font-medium mb-6">{subtitle}</p>

              <p className="text-slate-400 leading-relaxed mb-8">{intro}</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  Написать в WhatsApp
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
                  src="/pavel.webp"
                  alt="Павел Левицкий — тренер по плаванию"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#1a3350] to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-lg">Павел Левицкий</p>
                  <p className="text-cyan-400 text-sm">Мастер спорта · 10+ лет тренерства · 2000+ учеников</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing strip ────────────────────────────────────────────── */}
      {service.firstLesson && (
        <section className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-y border-white/5 py-8">
          <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold text-lg">{service.priceDetail}</p>
              <p className="text-amber-400 text-sm font-medium mt-0.5">{service.firstLesson} — без обязательств</p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              Записаться на первое занятие
            </a>
          </div>
        </section>
      )}

      {/* ── What's included ──────────────────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-6">
                Что включено
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Каждое занятие включает:
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Каждый урок с Павлом — структурированный, целенаправленный и полностью сосредоточенный на вашем прогрессе. Никакой воды, только результат.
              </p>
              <ul className="space-y-4">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 p-1 rounded-md bg-cyan-500/10 shrink-0">
                      <Check className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="text-slate-300 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-6">
                Для кого
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Идеально подходит:
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Павел работает с учениками любого уровня по всему {city.name} и {city.county}. Вот кто получает максимальный результат:
              </p>
              <ul className="space-y-4">
                {service.goodFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 p-1 rounded-md bg-blue-500/10 shrink-0">
                      <Users className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-slate-300 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Pavel ──────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#162d47]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-6">
              Ваш тренер
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Почему тренироваться с{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Павлом Левицким?
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Павел — Мастер спорта по плаванию, бывший член юношеской сборной России и участник Кубка мира. Более 10 лет он тренирует свыше 2000 учеников в России, Израиле и США — от новичков, боящихся воды, до соревновательных спортсменов.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              В основе его методики — техника, чувство воды и уверенность, а не механические повторения ради повторений. Ученики Павла не просто учатся плавать — они начинают чувствовать себя в воде как дома.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              {[
                { value: "10+", label: "Лет тренерства" },
                { value: "2000+", label: "Учеников подготовлено" },
                { value: "3", label: "Страны" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 text-center"
                >
                  <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </p>
                  <p className="text-slate-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Online Coaching ──────────────────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-6">
              Онлайн-тренерство
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              Онлайн-тренерство{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                из любой точки мира
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Профессиональный анализ техники и персональные программы — без привязки к локации.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: "Разбор техники",
                price: "$40",
                suffix: "за сессию",
                desc: "Пришлите видео в WhatsApp или Telegram — разберу ключевые ошибки, дам конкретные упражнения и верну аннотированный видеоразбор.",
                accent: "from-amber-500/10 to-yellow-600/5",
                border: "hover:border-amber-500/20",
                check: "text-amber-400",
                cta: "from-amber-500 to-yellow-500 shadow-amber-500/20 hover:shadow-amber-500/35",
              },
              {
                title: "Онлайн-программа",
                price: "$200",
                suffix: "2 недели · $300 / 4 недели",
                desc: "Персональный план тренировок, объяснение техники, еженедельный видеоанализ и задания.",
                accent: "from-cyan-500/15 to-blue-600/10",
                border: "border-cyan-500/20 hover:border-cyan-500/40",
                check: "text-cyan-400",
                cta: "from-cyan-500 to-blue-600 shadow-cyan-500/20 hover:shadow-cyan-500/35",
              },
              {
                title: "Личный коуч",
                price: "$650",
                suffix: "в месяц",
                desc: "Максимальный формат поддержки: 2 видеоанализа в неделю, коррекция техники и индивидуальный план с еженедельной корректировкой.",
                accent: "from-violet-500/10 to-blue-600/5",
                border: "hover:border-violet-500/20",
                check: "text-violet-400",
                cta: "from-violet-500 to-purple-600 shadow-violet-500/20 hover:shadow-violet-500/35",
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`flex flex-col rounded-2xl bg-gradient-to-br ${card.accent} border border-white/5 ${card.border} hover:-translate-y-1.5 p-7 transition-all duration-300`}
              >
                <p className="text-white font-bold text-xl mb-3">{card.title}</p>
                <p className="text-5xl font-bold text-white leading-none">{card.price}</p>
                <p className="text-slate-400 text-sm mt-2 mb-5">{card.suffix}</p>
                <p className="text-slate-400 text-base leading-relaxed mb-6 flex-1">{card.desc}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 bg-gradient-to-r ${card.cta} text-white shadow-lg`}
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  Написать в WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service area ─────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#162d47]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-6">
              <MapPin className="w-3.5 h-3.5" />
              Зона обслуживания
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Обслуживаем{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {city.name} и окрестности
              </span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              {service.serviceType === "online"
                ? `Отправьте видео плавания из любой точки мира и получите экспертный разбор. Пловцы из ${city.name} и со всего мира получают одинаково персональный анализ и обратную связь.`
                : `Павел приезжает к ${city.poolContext} по всему ${city.name} и соседним районам. Вам никуда не нужно ехать — он приедет к вам.`}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[city.name, ...city.nearby].map((area) => (
              <div
                key={area}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full border text-sm font-medium ${
                  area === city.name
                    ? "border-cyan-500/40 bg-cyan-500/10 text-cyan-300"
                    : "border-white/8 bg-white/[0.03] text-slate-400"
                }`}
              >
                <MapPin className="w-3 h-3 text-cyan-500/70 shrink-0" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#162d47]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-6">
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Часто задаваемые{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                вопросы
              </span>
            </h2>
          </div>
          <LandingFAQ items={service.faq} />
        </div>
      </section>

      {/* ── Другие услуги в этом городе ──────────────────────────────── */}
      <section className="py-10 bg-[#162d47] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-slate-500 text-sm mb-4">Другие услуги в {city.name}:</p>
          <div className="flex flex-wrap gap-3">
            {ruServices
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <a
                  key={s.slug}
                  href={`/ru/${city.slug}/${s.slug}`}
                  className="px-4 py-2 rounded-full border border-white/10 text-slate-400 text-sm hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
                >
                  {s.shortName}
                </a>
              ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 shadow-[0_0_80px_rgba(6,182,212,0.12)]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-[#0a1628] to-blue-900/40" />
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-cyan-500/20 blur-[80px]" />
              <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-blue-600/20 blur-[100px]" />
            </div>

            <div className="relative z-10 px-8 py-16 sm:px-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/40 bg-cyan-500/10 text-cyan-300 text-sm font-semibold mb-8">
                ✦ Запись открыта
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                {service.serviceType === "online"
                  ? "Начните онлайн-тренировки сегодня"
                  : <>Готовы начать в {city.name}?</>}
                <br />
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  {service.serviceType === "online" ? (
                    "Экспертный разбор — из любой точки мира"
                  ) : (
                    <>Первое занятие{" "}
                    <span className="underline decoration-cyan-500/50 decoration-2 underline-offset-4">
                      со скидкой 50%
                    </span></>
                  )}
                </span>
              </h2>

              <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                {service.serviceType === "online"
                  ? "Отправьте видео плавания в WhatsApp или Telegram. Выберите анализ техники или план онлайн-тренировок. Павел разберёт вашу технику и пришлёт персональные рекомендации."
                  : `Напишите Павлу в WhatsApp — он обычно отвечает в течение нескольких минут. Вы договоритесь о времени и ближайшем к вам бассейне в ${city.name}.`}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.04] active:scale-[0.97] transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  Написать в WhatsApp
                </a>
                <a
                  href={`tel:${PHONE.replace(/\D/g, "")}`}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-medium text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 shrink-0" />
                  {PHONE}
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-6 mt-12 pt-10 border-t border-white/5 text-sm text-slate-600">
                {service.serviceType === "online" ? (
                  <>
                    <span>✓ Анализ видео из любой точки мира</span>
                    <span>✓ Обратная связь в течение 24–48 ч.</span>
                    <span>✓ Гибкое расписание</span>
                    <span>✓ Без поездок</span>
                  </>
                ) : (
                  <>
                    <span>✓ Первое занятие со скидкой 50%</span>
                    <span>✓ Без очереди</span>
                    <span>✓ Гибкое расписание</span>
                    <span>✓ Павел приезжает к вашему бассейну в {city.name}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
