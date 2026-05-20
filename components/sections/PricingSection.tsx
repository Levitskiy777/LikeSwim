"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/ui/fade-in";
import { MessageCircle, Check, User } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/17542928576";

const plans = [
  {
    duration: "30 минут",
    price: "$75",
    firstLesson: "первый урок $37.50",
    subtitle: "Идеально для новичков и маленьких детей",
    description:
      "Короткий и комфортный формат, который помогает привыкнуть к воде и почувствовать себя увереннее.",
    fits: ["Дети младшего возраста", "Абсолютные новички", "Люди со страхом воды"],
    includes: ["Адаптация к воде", "Базовые упражнения и дыхание", "Основы техники"],
    footer: "Отличный вариант для первых шагов",
    accent: "from-amber-500/10 to-yellow-600/5",
    border: "hover:border-amber-500/20",
    buttonStyle:
      "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35",
  },
  {
    duration: "45 минут",
    price: "$110",
    firstLesson: "первый урок $55",
    subtitle: "Оптимальный формат для стабильного прогресса",
    description:
      "Самый популярный вариант — хватает времени и на технику, и на практику, и на полноценную работу в воде.",
    fits: ["Дети и взрослые с базовыми навыками", "Улучшение техники", "Регулярные тренировки"],
    includes: [
      "Работа над техникой",
      "Координация и дыхание",
      "Исправление ошибок",
      "Баланс и эффективность",
    ],
    footer: "Лучший баланс между нагрузкой и комфортом",
    accent: "from-cyan-500/15 to-blue-600/10",
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    buttonStyle:
      "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35",
    highlight: true,
  },
  {
    duration: "60 минут",
    price: "$145",
    firstLesson: "первый урок $72.50",
    subtitle: "Для уверенных пловцов и серьёзной работы",
    description:
      "Полноценная тренировка с глубоким разбором техники, выносливостью и высоким объёмом работы.",
    fits: ["Уверенные пловцы", "Триатлеты", "Подготовка к соревнованиям"],
    includes: [
      "Детальная работа над техникой",
      "Развитие выносливости",
      "Скоростная и силовая работа",
      "Индивидуальный подход",
    ],
    footer: "Максимум пользы за тренировку",
    accent: "from-violet-500/10 to-blue-600/5",
    border: "hover:border-violet-500/20",
    buttonStyle:
      "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35",
  },
];

const packageOptions = [
  { label: "10×30 мин", price: "$675", saving: "экономия $75" },
  { label: "10×45 мин", price: "$990", saving: "экономия $110" },
  { label: "10×60 мин", price: "$1305", saving: "экономия $145" },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-[#0b1828]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-6">
            Стоимость
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Стоимость тренировок
          </h2>
          <p className="text-xl text-cyan-400 font-medium">
            Первое занятие со скидкой 50% для всех форматов
          </p>
        </div>

        {/* Single-lesson cards */}
        <StaggerContainer className="grid lg:grid-cols-3 gap-6 items-stretch" staggerDelay={0.08}>
          {plans.map((plan) => (
            <motion.div
              key={plan.duration}
              variants={staggerItem}
              className={`flex flex-col h-full rounded-2xl bg-gradient-to-br ${plan.accent} border border-white/5 ${plan.border} hover:-translate-y-1.5 p-7 transition-all duration-250`}
            >
              {/* Badge */}
              <span className="self-start mb-5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                СКИДКА 50%
              </span>

              {/* Price block */}
              <p className="text-slate-400 text-base mb-1">{plan.duration}</p>
              <p className="text-5xl font-bold text-white leading-none">{plan.price}</p>
              <p className="text-amber-400/80 text-sm mt-2 mb-5 font-medium">{plan.firstLesson}</p>

              {/* Subtitle + description */}
              <p className="text-white font-semibold text-xl mb-2 leading-snug">{plan.subtitle}</p>
              <p className="text-slate-400 text-base leading-relaxed mb-6">{plan.description}</p>

              {/* Fits */}
              <div className="mb-5">
                <p className="text-sm text-slate-500 uppercase tracking-widest mb-3 font-semibold flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  Подходит для
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
                  Включает
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
                className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 ${plan.buttonStyle}`}
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                Записаться в WhatsApp
              </a>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Package card */}
        <FadeIn delay={0.3}>
          <div className="mt-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-600/5 border border-white/5 hover:border-emerald-500/30 hover:-translate-y-1 p-7 transition-all duration-250">
            <div className="flex flex-col sm:flex-row sm:items-start gap-8">
              {/* Left: header */}
              <div className="shrink-0 sm:w-56">
                <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  ВЫГОДНО
                </span>
                <p className="text-slate-400 text-sm mb-1">Пакет 10 занятий</p>
                <p className="text-white font-bold text-xl leading-snug">
                  10 тренировок по цене 9
                </p>
              </div>

              {/* Middle: options */}
              <div className="flex flex-col sm:flex-row gap-3 flex-1">
                {packageOptions.map((opt) => (
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
                  Записаться
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
