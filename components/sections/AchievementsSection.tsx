"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/ui/fade-in";
import { Medal, Trophy, Star, Award, Waves } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Мастер спорта по плаванию",
    year: "2002",
    description:
      "Выполнил норматив Мастера спорта России в возрасте 15 лет — один из самых молодых на тот момент в регионе.",
    accent: "from-yellow-500/20 to-amber-600/10",
    iconColor: "text-yellow-400",
    border: "hover:border-yellow-500/20",
  },
  {
    icon: Medal,
    title: "Чемпион СПб и Северо-Западного ФО",
    year: "2005",
    description:
      "Победитель чемпионата Санкт-Петербурга и Северо-Западного федерального округа по плаванию.",
    accent: "from-cyan-500/20 to-blue-600/10",
    iconColor: "text-cyan-400",
    border: "hover:border-cyan-500/20",
  },
  {
    icon: Star,
    title: "Победитель Первенства России",
    year: "2007",
    description:
      "Завоевал первое место на Первенстве Российской Федерации по плаванию 2007 года.",
    accent: "from-violet-500/20 to-purple-600/10",
    iconColor: "text-violet-400",
    border: "hover:border-violet-500/20",
  },
  {
    icon: Award,
    title: "Президентская премия для молодёжи",
    year: "2007",
    description:
      "Лауреат Президентской премии Российской Федерации для талантливой молодёжи в области спорта.",
    accent: "from-rose-500/20 to-pink-600/10",
    iconColor: "text-rose-400",
    border: "hover:border-rose-500/20",
  },
  {
    icon: Waves,
    title: "Член молодёжной сборной России",
    year: "2006–2008",
    description:
      "Входил в состав молодёжной национальной сборной России по плаванию.",
    accent: "from-sky-500/20 to-teal-600/10",
    iconColor: "text-sky-400",
    border: "hover:border-sky-500/20",
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 sm:py-32 bg-[#0b1828]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-6">
              Достижения
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Путь к{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                мастерству
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-slate-500 max-w-xl mx-auto text-lg">
              Спортивная карьера и профессиональный рост основателя LikeSwim —
              Павла Левицкого.
            </p>
          </FadeIn>
        </div>

        {/* Coaching stats */}
        <FadeIn delay={0.15}>
          <div className="flex flex-col sm:flex-row gap-6 mb-10">
            {[
              { value: "10+", label: "лет тренерского опыта" },
              { value: "2000+", label: "учеников" },
            ].map((stat) => (
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
          {achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${item.accent} border border-white/5 ${item.border} hover:-translate-y-1 hover:scale-[1.01] transition-all duration-250 group overflow-hidden${idx === achievements.length - 1 && achievements.length % 2 !== 0 ? " sm:col-span-2 sm:max-w-[calc(50%-12px)]" : ""}`}
            >
              {/* Year tag */}
              <span className="absolute top-4 right-4 text-xs font-mono text-slate-600 group-hover:text-slate-500 transition-colors">
                {item.year}
              </span>

              <div className={`inline-flex p-3 rounded-xl bg-white/5 mb-4`}>
                <item.icon className={`w-6 h-6 ${item.iconColor}`} />
              </div>

              <h3 className="text-white font-semibold text-lg mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/[0.02] to-transparent" />
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
