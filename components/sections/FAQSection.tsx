"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Вы работаете с полными новичками?",
    a: "Да, большинство моих учеников начинают с нуля. Первое занятие — это диагностика: я оцениваю уровень, страхи и цели, и строю программу именно под вас.",
  },
  {
    q: "Вы приезжаете к частным бассейнам?",
    a: "Да, я работаю у частных бассейнов в кондоминиумах и домах по всему Майами и Южной Флориде.",
  },
  {
    q: "С какого возраста вы берёте детей?",
    a: "Работаю с детьми от 3 лет. Для малышей — игровой формат, для детей постарше — техника и уверенность в воде.",
  },
  {
    q: "Вы говорите по-русски?",
    a: "Да, провожу тренировки на русском, иврите и английском языках.",
  },
  {
    q: "Как быстро можно научиться плавать?",
    a: "Большинство учеников чувствуют уверенность в воде уже после 3–5 занятий. Скорость прогресса зависит от регулярности и начального уровня.",
  },
  {
    q: "Какое оборудование нужно?",
    a: "Только купальник и желание учиться. Всё необходимое оборудование я привожу с собой.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={0.05 * index}>
      <div className="border border-white/5 rounded-2xl overflow-hidden">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.03] transition-colors duration-200 group"
          aria-expanded={open}
        >
          <span className="text-white font-medium leading-snug">{q}</span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 text-slate-500 group-hover:text-slate-300 transition-colors"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="px-6 pb-5 text-slate-500 leading-relaxed">{a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#0d1a2e]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-6">
              FAQ
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Часто задаваемые{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                вопросы
              </span>
            </h2>
          </FadeIn>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <FAQItem key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
