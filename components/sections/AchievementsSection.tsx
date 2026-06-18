"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/ui/fade-in";
import { Medal, Trophy, Star, Award, Waves } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const cardMeta = [
  { icon: Trophy, accent: "from-yellow-500/20 to-amber-600/10", iconColor: "text-yellow-400", border: "hover:border-yellow-500/20", year: "2002" },
  { icon: Medal, accent: "from-cyan-500/20 to-blue-600/10", iconColor: "text-cyan-400", border: "hover:border-cyan-500/20", year: "2005" },
  { icon: Star, accent: "from-violet-500/20 to-purple-600/10", iconColor: "text-violet-400", border: "hover:border-violet-500/20", year: "2007" },
  { icon: Award, accent: "from-rose-500/20 to-pink-600/10", iconColor: "text-rose-400", border: "hover:border-rose-500/20", year: "2007" },
  { icon: Waves, accent: "from-sky-500/20 to-teal-600/10", iconColor: "text-sky-400", border: "hover:border-sky-500/20", year: "2006–2008" },
];

export function AchievementsSection() {
  const { lang } = useLanguage();
  const t = translations[lang].achievements;

  return (
    <section id="achievements" className="py-24 sm:py-32 bg-[#162d47]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-6">
              {t.badge}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {t.heading}{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t.headingAccent}
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-slate-500 max-w-xl mx-auto text-lg">{t.subtitle}</p>
          </FadeIn>
        </div>

        {/* Coaching stats */}
        <FadeIn delay={0.15}>
          <div className="flex flex-col sm:flex-row gap-6 mb-10">
            {t.stats.map((stat) => (
              <div
                key={stat.value}
                className="flex-1 flex items-center gap-5 p-6 rounded-2xl bg-white/[0.03] border border-white/5"
              >
                <p className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-none">
                  {stat.value}
                </p>
                <p className="text-slate-400 text-lg leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Cards grid */}
        <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={0.12}>
          {t.items.map((item, idx) => {
            const meta = cardMeta[idx];
            const Icon = meta.icon;
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className={`relative p-6 rounded-2xl bg-gradient-to-br ${meta.accent} border border-white/5 ${meta.border} hover:-translate-y-1 hover:scale-[1.01] transition-all duration-250 group overflow-hidden${idx === t.items.length - 1 && t.items.length % 2 !== 0 ? " sm:col-span-2 sm:max-w-[calc(50%-12px)]" : ""}`}
              >
                <span className="absolute top-4 right-4 text-xs font-mono text-slate-600 group-hover:text-slate-500 transition-colors">
                  {meta.year}
                </span>

                <div className="inline-flex p-3 rounded-xl bg-white/5 mb-4">
                  <Icon className={`w-6 h-6 ${meta.iconColor}`} />
                </div>

                <h3 className="text-white font-semibold text-lg mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/[0.02] to-transparent" />
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
