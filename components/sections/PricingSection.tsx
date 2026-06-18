"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/ui/fade-in";
import { MessageCircle, Check, User } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const WHATSAPP_URL = "https://wa.me/17542928576";

const planMeta = [
  {
    price: "$75",
    accent: "from-amber-500/10 to-yellow-600/5",
    border: "hover:border-amber-500/20",
  },
  {
    price: "$110",
    accent: "from-cyan-500/15 to-blue-600/10",
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    highlight: true,
  },
  {
    price: "$145",
    accent: "from-violet-500/10 to-blue-600/5",
    border: "hover:border-violet-500/20",
  },
];

export function PricingSection() {
  const { lang } = useLanguage();
  const t = translations[lang].pricing;

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-[#162d47]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-6">
            {t.badge}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            {t.heading}
          </h2>
          <p className="text-xl text-cyan-400 font-medium">{t.subtitle}</p>
        </div>

        {/* Single-lesson cards */}
        <StaggerContainer className="grid lg:grid-cols-3 gap-6 items-stretch" staggerDelay={0.08}>
          {t.plans.map((plan, idx) => {
            const meta = planMeta[idx];
            return (
              <motion.div
                key={plan.duration}
                variants={staggerItem}
                className={`flex flex-col h-full rounded-2xl bg-gradient-to-br ${meta.accent} border border-white/5 ${meta.border} hover:-translate-y-1.5 p-7 transition-all duration-250`}
              >
                {/* Badge */}
                <span className="self-start mb-5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {t.discountBadge}
                </span>

                {/* Price block */}
                <p className="text-slate-400 text-base mb-1">{plan.duration}</p>
                <p className="text-5xl font-bold text-white leading-none">{meta.price}</p>
                <p className="text-amber-400/80 text-sm mt-2 mb-5 font-medium">{plan.firstLesson}</p>

                {/* Subtitle + description */}
                <p className="text-white font-semibold text-xl mb-2 leading-snug">{plan.subtitle}</p>
                <p className="text-slate-400 text-base leading-relaxed mb-6">{plan.description}</p>

                {/* Fits */}
                <div className="mb-5">
                  <p className="text-sm text-slate-500 uppercase tracking-widest mb-3 font-semibold flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    {t.fitLabel}
                  </p>
                  <ul className="space-y-2">
                    {plan.fits.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-slate-300 text-base">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Includes */}
                <div className="mb-6 flex-1">
                  <p className="text-sm text-slate-500 uppercase tracking-widest mb-3 font-semibold flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    {t.includesLabel}
                  </p>
                  <ul className="space-y-2">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-slate-300 text-base">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer note */}
                <p className="text-slate-500 text-base italic mb-5">{plan.footer}</p>

                {/* CTA */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  {t.whatsappCta}
                </a>
              </motion.div>
            );
          })}
        </StaggerContainer>

        {/* Group lessons card */}
        <FadeIn delay={0.2}>
          <div className="mt-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-600/5 border border-white/5 hover:border-blue-500/30 hover:-translate-y-1 p-7 transition-all duration-250">
            <div className="flex flex-col sm:flex-row sm:items-start gap-8">
              <div className="shrink-0 sm:w-56">
                <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  {t.groupBadge}
                </span>
                <p className="text-white font-bold text-xl leading-snug">{t.groupTitle}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-1">
                {t.groupOptions.map((opt) => (
                  <div
                    key={opt.label}
                    className="flex-1 rounded-xl bg-white/[0.04] border border-white/5 px-4 py-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300 text-sm font-medium">{opt.label}</span>
                      <span className="text-white font-bold text-sm">{opt.price}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="shrink-0 flex items-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  {t.groupCta}
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Package card */}
        <FadeIn delay={0.3}>
          <div className="mt-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-600/5 border border-white/5 hover:border-emerald-500/30 hover:-translate-y-1 p-7 transition-all duration-250">
            <div className="flex flex-col sm:flex-row sm:items-start gap-8">
              {/* Left: header */}
              <div className="shrink-0 sm:w-56">
                <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {t.packageBadge}
                </span>
                <p className="text-slate-400 text-sm mb-1">{t.packageDurationLabel}</p>
                <p className="text-white font-bold text-xl leading-snug">{t.packageTitle}</p>
              </div>

              {/* Middle: options */}
              <div className="flex flex-col sm:flex-row gap-3 flex-1">
                {t.packageOptions.map((opt) => (
                  <div
                    key={opt.label}
                    className="flex-1 rounded-xl bg-white/[0.04] border border-white/5 px-4 py-3"
                  >
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-slate-300 text-sm font-medium">{opt.label}</span>
                      <span className="text-white font-bold text-sm">{opt.price}</span>
                    </div>
                    <p className="text-emerald-400/80 text-xs">{opt.saving}</p>
                  </div>
                ))}
              </div>

              {/* Right: CTA */}
              <div className="shrink-0 flex items-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  {t.packageCta}
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
