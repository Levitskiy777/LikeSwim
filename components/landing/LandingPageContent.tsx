import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Check, Users, MapPin, Phone } from "lucide-react";
import { LandingFAQ } from "./LandingFAQ";
import {
  CityData,
  ServiceData,
  buildH1,
  buildSubtitle,
  buildIntro,
  buildLocalFaq,
  services,
} from "@/lib/landing-pages";

const WHATSAPP_URL = "https://wa.me/17542928576";
const PHONE = "+1 (754) 292-8576";

export function LandingPageContent({
  city,
  service,
}: {
  city: CityData;
  service: ServiceData;
}) {
  const h1 = buildH1(city, service);
  const subtitle = buildSubtitle(city, service);
  const intro = buildIntro(city, service);
  const faqItems = [...service.faq, ...buildLocalFaq(city)];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "LikeSwim",
        "url": `https://like-swim.com/en/${city.slug}/${service.slug}`,
        "telephone": "+17542928576",
        "priceRange": service.price,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": city.name,
          "addressRegion": "FL",
          "addressCountry": "US",
        },
        "areaServed": city.name,
        "description": `${service.name} in ${city.name}, FL. ${service.tagline}`,
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
    <main className="bg-[#1a3350]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-cyan-600/15 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-blue-700/15 blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          {/* Breadcrumb */}
          <p className="text-slate-500 text-sm mb-6">
            <Link href="/" className="hover:text-cyan-400 transition-colors">LikeSwim</Link>
            {" / "}
            <span className="text-slate-400">{city.name}</span>
            {" / "}
            <span className="text-slate-300">{service.name}</span>
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Price badge */}
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
                  Book via WhatsApp
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

            {/* Coach card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl scale-105" />
              <div className="relative rounded-3xl overflow-hidden border border-white/5 shadow-2xl aspect-[4/5]">
                <Image
                  src="/pavel.webp"
                  alt="Pavel Levitskii — swim coach"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#1a3350] to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-lg">Pavel Levitskii</p>
                  <p className="text-cyan-400 text-sm">Master of Sport · 10+ years coaching · 2000+ students</p>
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
              <p className="text-amber-400 text-sm font-medium mt-0.5">{service.firstLesson} — no commitment required</p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              Book Your First Lesson
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
                What&apos;s Included
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Every session includes:
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Every lesson with Pavel is structured, purposeful, and fully focused on your progress — no filler, no wasted time.
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
                Who It&apos;s For
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Perfect for:
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Pavel works with students at every level across {city.name} and {city.county}. Here's who gets the most out of these sessions:
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
              Your Coach
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Why train with{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Pavel Levitskii?
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Pavel is a Master of Sport in competitive swimming, a former member of the Russian National Youth Team, and a World Cup participant. He has spent 10+ years coaching over 2,000 students in Russia, Israel, and the United States — from fearful beginners to competitive athletes.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              His coaching philosophy centers on technique, body awareness, and confidence — not repetition for its own sake. Students who train with Pavel don't just learn to swim; they learn to feel at home in the water.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              {[
                { value: "10+", label: "Years coaching" },
                { value: "2000+", label: "Students trained" },
                { value: "3", label: "Countries" },
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
              Online Coaching
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              Online Coaching{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                from anywhere
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Professional technique analysis and personalized training programs — no pool required.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: "Technique Analysis",
                price: "$40",
                suffix: "per session",
                desc: "Send a video via WhatsApp or Telegram — I'll break down your key mistakes, give specific drills to fix them, and return annotated video feedback.",
                accent: "from-amber-500/10 to-yellow-600/5",
                border: "hover:border-amber-500/20",
                check: "text-amber-400",
                cta: "from-amber-500 to-yellow-500 shadow-amber-500/20 hover:shadow-amber-500/35",
              },
              {
                title: "Online Program",
                price: "$200",
                suffix: "/ 2 weeks · $300 / 4 weeks",
                desc: "A personalized training plan with technique explanations, weekly video analysis, and targeted drills.",
                accent: "from-cyan-500/15 to-blue-600/10",
                border: "border-cyan-500/20 hover:border-cyan-500/40",
                check: "text-cyan-400",
                cta: "from-cyan-500 to-blue-600 shadow-cyan-500/20 hover:shadow-cyan-500/35",
              },
              {
                title: "Personal Coaching",
                price: "$650",
                suffix: "/ month",
                desc: "Full ongoing support: twice-weekly video analyses, technique correction, and a weekly-adjusted individual plan.",
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
                  Message on WhatsApp
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
              Service Area
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Serving{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {city.name} and nearby
              </span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              {service.serviceType === "online"
                ? `Send your swim video from anywhere in the world and receive expert coaching. Swimmers from ${city.name} and worldwide get the same personalized analysis and feedback.`
                : `Pavel travels to ${city.poolContext} throughout ${city.name} and surrounding communities. No need to drive anywhere — he comes to you.`}
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
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>
          <LandingFAQ items={faqItems} />
        </div>
      </section>

      {/* ── More services in this city ───────────────────────────────── */}
      <section className="py-10 bg-[#162d47] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-slate-500 text-sm mb-4">More services in {city.name}:</p>
          <div className="flex flex-wrap gap-3">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <a
                  key={s.slug}
                  href={`/en/${city.slug}/${s.slug}`}
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
                ✦ Now Enrolling
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                {service.serviceType === "online"
                  ? "Start online coaching today"
                  : <>Ready to start in {city.name}?</>}
                <br />
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  {service.serviceType === "online" ? (
                    "Expert feedback — wherever you swim"
                  ) : (
                    <>First lesson{" "}
                    <span className="underline decoration-cyan-500/50 decoration-2 underline-offset-4">
                      50% off
                    </span></>
                  )}
                </span>
              </h2>

              <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                {service.serviceType === "online"
                  ? "Send your swim video via WhatsApp or Telegram. Choose a technique analysis or an online coaching plan. Pavel will review your technique and return personalized feedback."
                  : `Message Pavel on WhatsApp — he typically replies within minutes. You'll schedule a time and pool location in ${city.name} that works for you.`}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.04] active:scale-[0.97] transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  Message on WhatsApp
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
                    <span>✓ Video analysis from anywhere</span>
                    <span>✓ Feedback within 24–48 hours</span>
                    <span>✓ Flexible scheduling</span>
                    <span>✓ No travel required</span>
                  </>
                ) : (
                  <>
                    <span>✓ First lesson 50% off</span>
                    <span>✓ No waitlists</span>
                    <span>✓ Flexible scheduling</span>
                    <span>✓ Pavel travels to your pool in {city.name}</span>
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
