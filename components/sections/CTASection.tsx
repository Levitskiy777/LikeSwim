"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/17542928576";
const PHONE_NUMBER = "+1 (754) 292-8576";

export function CTASection() {
  return (
    <section id="cta" className="py-24 sm:py-32 bg-[#070c18]">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden border border-white/5">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/50 via-[#070c18] to-blue-950/50" />

            {/* Animated blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-cyan-500/20 blur-[80px]"
              />
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-blue-600/20 blur-[100px]"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 px-8 py-16 sm:px-16 text-center">
              <FadeIn delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-8">
                  Запись открыта
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                  Готовы начать?{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Первое занятие со скидкой 50%
                  </span>
                </h2>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                  Напишите в WhatsApp — отвечу в течение нескольких минут, подберём
                  удобное время и бассейн в вашем районе.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow duration-300"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0" />
                    Написать в WhatsApp
                  </motion.a>

                  <a
                    href={`tel:${PHONE_NUMBER.replace(/\D/g, "")}`}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-medium text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 shrink-0" />
                    {PHONE_NUMBER}
                  </a>
                </div>
              </FadeIn>

              {/* Trust badges */}
              <FadeIn delay={0.5}>
                <div className="flex flex-wrap justify-center gap-6 mt-12 pt-10 border-t border-white/5 text-sm text-slate-600">
                  <span>✓ Первое занятие со скидкой 50%</span>
                  <span>✓ Без длинных очередей</span>
                  <span>✓ Гибкое расписание</span>
                  <span>✓ Флорида: от Майами до Вест-Палм-Бич</span>
                </div>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
