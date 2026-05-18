"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/ui/fade-in";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Анна Петрова",
    role: "Мама Максима, 7 лет",
    rating: 5,
    text: "Отдали сына к Павлу в 5 лет — боялся воды, не хотел идти в бассейн. Уже через месяц плыл самостоятельно и сам просился на тренировки! Павел нашёл подход, объяснял терпеливо и с юмором. Рекомендую всем родителям.",
    initials: "АП",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    name: "Дмитрий Соколов",
    role: "Взрослый ученик, 34 года",
    rating: 5,
    text: "Всегда хотел научиться плавать, но думал — уже поздно. Павел разубедил: за 2 месяца я освоил кроль и брасс. Методика чёткая, без лишней воды (в прямом смысле). Теперь плаваю по утрам — не могу представить жизнь без этого.",
    initials: "ДС",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    name: "Марина Кузнецова",
    role: "Мама Саши, 10 лет",
    rating: 5,
    text: "Дочь занимается у Павла уже полтора года. За это время поучаствовала в двух соревнованиях, заняла третье место в районных соревнованиях. Тренер всегда на связи, объясняет что и зачем — это очень важно для нас как родителей.",
    initials: "МК",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Игорь Волков",
    role: "Взрослый ученик, 42 года",
    rating: 5,
    text: "Пришёл восстанавливаться после травмы спины по рекомендации врача. Павел разработал программу реабилитационного плавания. Спина перестала беспокоить, и я по-настоящему полюбил бассейн. Профессионал с большой буквы.",
    initials: "ИВ",
    gradient: "from-teal-500 to-emerald-600",
  },
  {
    name: "Светлана Орлова",
    role: "Мама Кирилла, 5 лет",
    rating: 5,
    text: "Сыну 5 лет, записались на детскую группу. Результат потрясающий — ребёнок научился держаться на воде и уже делает первые гребки. Атмосфера на занятиях очень дружелюбная, детки не боятся воды. Спасибо Павлу!",
    initials: "СО",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    name: "Наталья Белова",
    role: "Взрослая ученица, 28 лет",
    rating: 5,
    text: "Давно хотела улучшить технику кроля — самостоятельно не получалось. За 10 занятий с Павлом всё встало на место. Объяснял подробно, снимал на видео для анализа, давал конкретные упражнения. Очень довольна результатом!",
    initials: "НБ",
    gradient: "from-sky-500 to-blue-600",
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
    <section id="testimonials" className="py-24 sm:py-32 bg-[#050a14]">
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
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all duration-300 group flex flex-col"
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
                  <p className="text-slate-600 text-xs truncate">{t.role}</p>
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
