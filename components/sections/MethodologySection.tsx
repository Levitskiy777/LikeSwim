"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/ui/fade-in";
import { Search, Layers, Zap, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Диагностика",
    description:
      "Первое занятие со скидкой 50% — знакомство с тренером. Оцениваю уровень подготовки, выявляю страхи и ставлю цели вместе с учеником и родителями.",
    color: "text-cyan-400",
    glow: "shadow-cyan-500/10",
  },
  {
    number: "02",
    icon: Layers,
    title: "Индивидуальная программа",
    description:
      "Составляю персональный план тренировок: от базовой техники до скоростных упражнений. Учитываю возраст, физику и темп прогресса.",
    color: "text-sky-400",
    glow: "shadow-sky-500/10",
  },
  {
    number: "03",
    icon: Zap,
    title: "Прогрессивные тренировки",
    description:
      "Каждая тренировка строится по принципу «от простого к сложному». Чередую стили, дыхательные упражнения и игровые элементы для детей.",
    color: "text-blue-400",
    glow: "shadow-blue-500/10",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Контроль и результат",
    description:
      "Регулярно фиксирую прогресс, даю обратную связь. После каждого этапа ученик чётко понимает, чему он научился и что будет дальше.",
    color: "text-teal-400",
    glow: "shadow-teal-500/10",
  },
];

export function MethodologySection() {
  return (
    <section id="methodology" className="py-24 sm:py-32 bg-[#0d1a2e]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-6">
              Методика
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              Как проходят{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                тренировки
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-slate-500 text-lg leading-relaxed">
              Обучение через понимание тела и воды — не механическое повторение движений.
              Психология, координация и уверенность в себе: прогресс заметен уже с первых занятий,
              у детей от 3 лет, подростков и взрослых.
            </p>
          </FadeIn>
        </div>

        {/* Steps */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              className={`relative p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 hover:-translate-y-1.5 shadow-xl ${step.glow} transition-all duration-250 group`}
            >
              {/* Number */}
              <div className="flex items-start justify-between mb-6">
                <span className="text-7xl font-bold text-white/5 group-hover:text-white/8 transition-colors font-mono leading-none select-none">
                  {step.number}
                </span>
                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/8 transition-colors">
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                </div>
              </div>

              {/* Connector line (hidden on last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[46px] right-[-13px] w-6 h-px bg-white/5 z-10" />
              )}

              <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-slate-400 text-base leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Bottom note */}
        <FadeIn delay={0.3}>
          <div className="mt-12 p-6 rounded-2xl border border-cyan-500/10 bg-cyan-500/5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 shrink-0">
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <p className="text-white font-medium mb-1">
                Первое занятие со скидкой 50%
              </p>
              <p className="text-slate-500 text-sm">
                Приходите познакомиться, никаких обязательств. Вы увидите методику
                в действии и сможете задать все вопросы лично.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
