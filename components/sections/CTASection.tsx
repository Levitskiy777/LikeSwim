"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/17542928576";
const PHONE_NUMBER = "+1 (754) 292-8576";

export function CTASection() {
  return (
    <section id="cta" className="py-24 sm:py-32 bg-[#0d1a2e]">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 shadow-[0_0_80px_rgba(6,182,212,0.12)]">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-[#0a1628] to-blue-900/40" />

            {/* Static blobs — CSS only, no JS animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-cyan-500/20 blur-[80px]" />
              <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-blue-600/20 blur-[100px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 px-8 py-16 sm:px-16 text-center">
              <FadeIn delay={0.1}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/40 bg-cyan-500/10 text-cyan-300 text-sm font-semibold mb-8 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                  ✦ Запись открыта
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
                  Готовы начать?
                  <br />
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    Первое занятие —{" "}
                    <span className="underline decoration-cyan-500/50 decoration-2 underline-offset-4">
                      скидка 50%
                    </span>
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
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.04] active:scale-[0.97] transition-all duration-200"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0" />
                    Написать в WhatsApp
                  </a>

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
