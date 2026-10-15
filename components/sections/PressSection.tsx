"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { ExternalLink, Newspaper, Shield } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export function PressSection() {
  const { lang } = useLanguage();
  const t = translations[lang].press;

  return (
    <section id="press" className="py-24 sm:py-32 bg-[#1a3350]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-6">
              {t.badge}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">{t.heading}</h2>
          </FadeIn>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {t.mentions.map((mention, idx) => (
            <FadeIn key={mention.publication} delay={idx * 0.1} className="h-full">
              <a
                href={mention.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col h-full rounded-2xl bg-white/[0.03] border border-white/10 p-6 hover:border-cyan-500/30 hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Official badge */}
                {"officialBadge" in mention && (
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-medium mb-4 self-start">
                    <Shield className="w-3 h-3 shrink-0" />
                    {mention.officialBadge}
                  </div>
                )}

                {/* Publication */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Newspaper className="w-4 h-4 text-slate-400" />
                  </div>
                  <span className="text-slate-400 text-sm font-medium">{mention.publication}</span>
                </div>

                {/* Title + optional description */}
                <div className="flex-1 mb-5">
                  <p className="text-white text-base leading-snug font-medium group-hover:text-cyan-300 transition-colors duration-200">
                    {mention.title}
                  </p>
                  {"description" in mention && (
                    <p className="text-slate-500 text-sm leading-relaxed mt-2">{mention.description}</p>
                  )}
                </div>

                {/* Read link */}
                <div className="flex items-center gap-1.5 text-slate-500 text-sm group-hover:text-cyan-400 transition-colors duration-200">
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{t.readMore}</span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
