"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

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
          <span
            className={`shrink-0 text-slate-500 group-hover:text-slate-300 transition-all duration-200 ${open ? "rotate-180" : ""}`}
          >
            <ChevronDown className="w-5 h-5" />
          </span>
        </button>

        <div className={`grid transition-all duration-220 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <div className="overflow-hidden">
            <p className="px-6 pb-5 text-slate-500 leading-relaxed">{a}</p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export function FAQSection() {
  const { lang } = useLanguage();
  const t = translations[lang].faq;

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#1a3350]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-6">
              {t.badge}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              {t.heading}{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t.headingAccent}
              </span>
            </h2>
          </FadeIn>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {t.items.map((item, i) => (
            <FAQItem key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
