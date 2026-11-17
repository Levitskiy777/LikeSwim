import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Check, Users, MapPin, Phone } from "lucide-react";
import { LandingFAQ } from "./LandingFAQ";
import {
  HeCityData,
  HeServiceData,
  buildHeH1,
  buildHeSubtitle,
  buildHeIntro,
  buildHeLocalFaq,
  heServices,
} from "@/lib/landing-pages-he";

const WHATSAPP_URL = "https://wa.me/17542928576";
const PHONE = "+1 (754) 292-8576";

export function LandingPageContentHe({
  city,
  service,
}: {
  city: HeCityData;
  service: HeServiceData;
}) {
  const h1 = buildHeH1(city, service);
  const subtitle = buildHeSubtitle(city, service);
  const intro = buildHeIntro(city, service);
  const faqItems = [...service.faq, ...buildHeLocalFaq(city)];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "LikeSwim",
        "url": `https://like-swim.com/he/${city.slug}/${service.slug}`,
        "telephone": "+17542928576",
        "priceRange": service.price,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": city.name,
          "addressRegion": "FL",
          "addressCountry": "US",
        },
        "areaServed": city.name,
        "description": `${service.name} ב${city.name}, FL. ${service.tagline}`,
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqItems.map((item) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": { "@type": "Answer", "text": item.a },
        })),
      },
    ],
  };

  return (
    <main className="bg-[#1a3350]" dir="rtl">
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
            <Link href="/" className="hover:text-cyan-400 transition-colors">LikeSwim</Link>
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
                  הודעה בווטסאפ
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
                  alt="פבל לויצקי — מאמן שחייה"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#1a3350] to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-lg">פבל לויצקי</p>
                  <p className="text-cyan-400 text-sm">אמן ספורט · 10+ שנות אימון · 2000+ תלמידים</p>
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
              <p className="text-amber-400 text-sm font-medium mt-0.5">{service.firstLesson} — ללא התחייבות</p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              לקביעת השיעור הראשון
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
                מה כולל השיעור
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                כל שיעור כולל:
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                כל שיעור עם פבל — מובנה, מכוון מטרה ומתמקד לחלוטין בהתקדמות שלכם.
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
                למי זה מתאים
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                מושלם עבור:
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                פבל עובד עם תלמידים בכל רמה ברחבי {city.name} ו{city.county}. הנה מי מפיק את המקסימום מהשיעורים:
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
              המאמן שלכם
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              למה להתאמן עם{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                פבל לויצקי?
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              פבל הוא אמן ספורט בשחייה תחרותית, לשעבר חבר נבחרת הנוער הלאומית של רוסיה ומשתתף בגביע העולם. הוא אימן יותר מ-2000 תלמידים ב-10+ שנים ברוסיה, ישראל וארצות הברית — ממתחילים מפחדי מים ועד ספורטאים תחרותיים.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              שיטת האימון שלו מתמקדת בטכניקה, מודעות לגוף וביטחון — לא בחזרות מכניות. תלמידי פבל לא רק לומדים לשחות — הם מתחילים להרגיש בבית במים.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              {[
                { value: "10+", label: "שנות אימון" },
                { value: "2000+", label: "תלמידים הוכשרו" },
                { value: "3", label: "מדינות" },
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
              אימון אונליין
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              אימון אונליין{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                מכל מקום בעולם
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              ניתוח טכניקה מקצועי ותוכניות אימון אישיות — ללא צורך בבריכה ליד הבית.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: "ניתוח טכניקה",
                price: "$40",
                suffix: "לסשן",
                desc: "שלחו וידאו בווטסאפ או טלגרם — אפרק את השגיאות המרכזיות, אתן תרגילים ספציפיים לתיקונן ואחזיר משוב וידאו עם הערות.",
                accent: "from-amber-500/10 to-yellow-600/5",
                border: "hover:border-amber-500/20",
                cta: "from-amber-500 to-yellow-500 shadow-amber-500/20 hover:shadow-amber-500/35",
              },
              {
                title: "תוכנית אונליין",
                price: "$200",
                suffix: "/ 2 שבועות · $300 / 4 שבועות",
                desc: "תוכנית אימון אישית עם הסברי טכניקה, ניתוח וידאו שבועי ותרגילים ממוקדים.",
                accent: "from-cyan-500/15 to-blue-600/10",
                border: "border-cyan-500/20 hover:border-cyan-500/40",
                cta: "from-cyan-500 to-blue-600 shadow-cyan-500/20 hover:shadow-cyan-500/35",
              },
              {
                title: "מאמן אישי",
                price: "$650",
                suffix: "לחודש",
                desc: "תמיכה מלאה ומתמשכת: שני ניתוחי וידאו בשבוע, תיקון טכניקה ותוכנית אישית המתעדכנת מדי שבוע.",
                accent: "from-violet-500/10 to-blue-600/5",
                border: "hover:border-violet-500/20",
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
                  הודעה בווטסאפ
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
              אזור שירות
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              משרתים{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {city.name} והסביבה
              </span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              {service.serviceType === "online"
                ? `שלחו סרטון שחייה מכל מקום בעולם וקבלו אימון מקצועי. שחיינים מ${city.name} ומכל העולם מקבלים את אותו ניתוח אישי ומשוב מדויק.`
                : `פבל מגיע ל${city.poolContext} ברחבי ${city.name} והקהילות הסמוכות. אין צורך לנסוע לשום מקום — הוא מגיע אליכם.`}
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
      <section className="py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-6">
              שאלות נפוצות
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              שאלות{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                נפוצות
              </span>
            </h2>
          </div>
          <LandingFAQ items={faqItems} />
        </div>
      </section>

      {/* ── שירותים נוספים בעיר זו ───────────────────────────────────── */}
      <section className="py-10 bg-[#162d47] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-slate-500 text-sm mb-4">שירותים נוספים ב{city.name}:</p>
          <div className="flex flex-wrap gap-3">
            {heServices
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <a
                  key={s.slug}
                  href={`/he/${city.slug}/${s.slug}`}
                  className="px-4 py-2 rounded-full border border-white/10 text-slate-400 text-sm hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
                >
                  {s.shortName}
                </a>
              ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#162d47]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 shadow-[0_0_80px_rgba(6,182,212,0.12)]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-[#0a1628] to-blue-900/40" />
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-cyan-500/20 blur-[80px]" />
              <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-blue-600/20 blur-[100px]" />
            </div>

            <div className="relative z-10 px-8 py-16 sm:px-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/40 bg-cyan-500/10 text-cyan-300 text-sm font-semibold mb-8">
                ✦ ההרשמה פתוחה
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                {service.serviceType === "online"
                  ? "התחילו אימון אונליין היום"
                  : <>מוכנים להתחיל ב{city.name}?</>}
                <br />
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  {service.serviceType === "online" ? (
                    "משוב מקצועי — מכל מקום בעולם"
                  ) : (
                    <>שיעור ראשון{" "}
                    <span className="underline decoration-cyan-500/50 decoration-2 underline-offset-4">
                      בהנחה 50%
                    </span></>
                  )}
                </span>
              </h2>

              <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                {service.serviceType === "online"
                  ? "שלחו סרטון שחייה בווטסאפ או טלגרם. בחרו ניתוח טכניקה או תוכנית אימון אונליין. פבל יבחן את הטכניקה שלכם וישלח משוב אישי מפורט."
                  : <>שלחו לפבל הודעה בווטסאפ — הוא בדרך כלל עונה תוך מספר דקות. תקבעו זמן ומיקום בריכה ב{city.name} שמתאימים לכם.</>}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.04] active:scale-[0.97] transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  הודעה בווטסאפ
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
                    <span>✓ ניתוח וידאו מכל מקום בעולם</span>
                    <span>✓ משוב תוך 24–48 שעות</span>
                    <span>✓ לוח זמנים גמיש</span>
                    <span>✓ ללא נסיעות</span>
                  </>
                ) : (
                  <>
                    <span>✓ שיעור ראשון בהנחה 50%</span>
                    <span>✓ ללא רשימות המתנה</span>
                    <span>✓ לוח זמנים גמיש</span>
                    <span>✓ פבל מגיע לבריכה שלכם ב{city.name}</span>
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
