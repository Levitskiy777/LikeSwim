"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { MessageCircle, Check } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const WHATSAPP_URL = "https://wa.me/17542928576";

const cardMeta = [
  {
    accent: "from-amber-500/10 to-yellow-600/5",
    border: "hover:border-amber-500/20",
    checkColor: "text-amber-400",
    ctaClass: "from-amber-500 to-yellow-500 shadow-amber-500/20 hover:shadow-amber-500/35",
  },
  {
    accent: "from-cyan-500/15 to-blue-600/10",
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    checkColor: "text-cyan-400",
    ctaClass: "from-cyan-500 to-blue-600 shadow-cyan-500/20 hover:shadow-cyan-500/35",
  },
  {
    accent: "from-violet-500/10 to-blue-600/5",
    border: "hover:border-violet-500/20",
    checkColor: "text-violet-400",
    ctaClass: "from-violet-500 to-purple-600 shadow-violet-500/20 hover:shadow-violet-500/35",
  },
];

export function OnlineCoachingSection() {
  const { lang } = useLanguage();
  const t = translations[lang].onlineCoaching;

  return (
    <section id="online" className="py-24 sm:py-32 bg-[#162d47]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-6">
              {t.badge}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              {t.heading}{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t.headingAccent}
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">{t.subtitle}</p>
          </FadeIn>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {t.cards.map((card, idx) => {
            const meta = cardMeta[idx];
            return (
              <div
                key={card.title}
                className={`flex flex-col rounded-2xl bg-gradient-to-br ${meta.accent} border border-white/5 ${meta.border} hover:-translate-y-1.5 p-7 transition-all duration-300`}
              >
                {/* Title */}
                <p className="text-white font-bold text-xl mb-5 leading-snug">{card.title}</p>

                {/* Price */}
                <p className="text-5xl font-bold text-white leading-none">{card.price}</p>
                <p className="text-slate-400 text-sm mt-2 mb-5">{card.priceSuffix}</p>

                {/* Description */}
                <p className="text-slate-400 text-base leading-relaxed mb-6">{card.description}</p>

                {/* Includes */}
                <div className="mb-6 flex-1">
                  <p className="text-sm text-slate-500 uppercase tracking-widest mb-3 font-semibold flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    {t.includesLabel}
                  </p>
                  <ul className="space-y-2">
                    {card.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-slate-300 text-base">
                        <Check className={`w-4 h-4 ${meta.checkColor} shrink-0 mt-0.5`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 bg-gradient-to-r ${meta.ctaClass} text-white shadow-lg`}
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  {t.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
