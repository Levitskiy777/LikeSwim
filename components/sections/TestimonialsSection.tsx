"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/ui/fade-in";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Мама Насти",
    role: "",
    rating: 5,
    text: "Паш, ну ты для Насти намного больше чем тренер. Учитель, которого очень везет встретить по жизни! Безупречная техника в работе, человечность, отношение к детям и спортивная закалка. Побольше бы таких тренеров как ты!",
    initials: "МН",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    name: "Мария, мама Мирона",
    role: "",
    rating: 5,
    text: "Каждое занятие было насыщенное и интересное. У Мирона реально повысилась уверенность в себе, он стал лучше держаться на воде. Я бы всем рекомендовала Вас как первого тренера!",
    initials: "ММ",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "voltsinger, Miami",
    role: "",
    rating: 5,
    text: "The best swimming coach we've ever had, and likely will ever have. I am experiencing a deep sense of envy that Miami citizens get to work with you. Thank you for everything!",
    initials: "VM",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: "elen_log12",
    role: "",
    rating: 5,
    text: "Наши дети занимаются с лучшим тренером по плаванию. Бесконечное спасибо за доверие!",
    initials: "EL",
    gradient: "from-teal-500 to-emerald-600",
  },
  {
    name: "djindjit, Israel",
    role: "",
    rating: 5,
    text: "The smallest fish in da adult pool. Such success achieved largely due to his coach Paul. Ron so misses you!",
    initials: "DJ",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    name: "Елена",
    role: "",
    rating: 5,
    text: "Наша доча - задачка со звёздочкой, но мне очень приятно, что наш невербальный ребенок повторяет «Паша» и бежит на урок. Ждём вас в следующий раз!",
    initials: "ЕЛ",
    gradient: "from-amber-500 to-orange-600",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-slate-700"}`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#0b1828]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-6">
              Отзывы
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Говорят{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                родители и ученики
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-slate-500 max-w-xl mx-auto text-lg">
              Более 500 человек прошли обучение. Вот что они говорят о тренировках.
            </p>
          </FadeIn>
        </div>

        {/* Cards */}
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={staggerItem}
              className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 hover:-translate-y-1 hover:scale-[1.01] transition-all duration-250 group flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-white/5 group-hover:text-white/8 transition-colors mb-4 shrink-0" />

              {/* Text */}
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-6">
                {t.text}
              </p>

              {/* Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                {/* Avatar */}
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                >
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm truncate">{t.name}</p>
                  {t.role && <p className="text-slate-600 text-xs truncate">{t.role}</p>}
                </div>
                <StarRating rating={t.rating} />
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
