"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";
import { Award, Users, Clock, Star } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const icons = [Clock, Users, Award, Star];

export function AboutSection() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#1a3350]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo side */}
          <FadeIn direction="right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl scale-105" />
              <div className="relative rounded-3xl overflow-hidden border border-white/5 shadow-2xl aspect-[4/5]">
                <Image
                  src="/pavel.webp"
                  alt={t.photoAlt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#1a3350] to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-4 shadow-xl shadow-cyan-500/20 animate-bounce">
                <p className="text-white font-bold text-2xl leading-none">10+</p>
                <p className="text-white/80 text-xs mt-1">{t.badgeYears}</p>
              </div>
            </div>
          </FadeIn>

          {/* Text side */}
          <div className="space-y-8">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-medium">
                {t.badge}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                {t.heading}{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {t.headingAccent}
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="space-y-4">
                {t.paragraphs.map((p, i) => (
                  <p key={i} className="text-slate-400 text-lg leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </FadeIn>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {t.highlights.map((item, i) => {
                const Icon = icons[i];
                return (
                  <FadeIn key={item.label} delay={0.5 + i * 0.1}>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/20 hover:bg-white/[0.05] transition-all duration-300 group">
                      <div className="p-2 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                        <Icon className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm">{item.label}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
