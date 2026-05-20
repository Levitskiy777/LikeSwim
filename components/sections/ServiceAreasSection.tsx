"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { MapPin } from "lucide-react";

const cities = [
  "Hallandale Beach",
  "Hollywood",
  "Dania Beach",
  "Fort Lauderdale",
  "Davie",
  "Cooper City",
  "Plantation",
  "Weston",
  "Aventura",
  "Sunny Isles Beach",
  "Bal Harbour",
  "Surfside",
  "Miami Beach",
  "North Miami",
  "Miami",
  "North Miami Beach",
  "Golden Beach",
  "Coral Gables",
  "Key Biscayne",
  "Boynton Beach",
  "Delray Beach",
  "Boca Raton",
  "Wellington",
  "West Palm Beach",
];

export function ServiceAreasSection() {
  return (
    <section id="areas" className="py-24 sm:py-32 bg-[#0d1a2e]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-6">
              <MapPin className="w-3.5 h-3.5" />
              Районы обслуживания
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Флорида —{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                от Майами до Вест-Палм-Бич
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-slate-500 max-w-xl mx-auto text-lg">
              Провожу тренировки в бассейнах этих городов. Не нашли свой —
              напишите в WhatsApp, подберём ближайший вариант.
            </p>
          </FadeIn>
        </div>

        {/* Cities grid — CSS hover, no JS per-tag animation */}
        <FadeIn delay={0.15}>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <div
                key={city}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/8 bg-white/[0.03] hover:bg-white/[0.07] hover:border-cyan-500/30 text-slate-400 hover:text-white hover:-translate-y-0.5 text-sm font-medium transition-all duration-200 cursor-default"
              >
                <MapPin className="w-3 h-3 text-cyan-500/70 shrink-0" />
                {city}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Bottom note */}
        <FadeIn delay={0.4}>
          <p className="text-center text-slate-700 text-sm mt-10">
            {cities.length} городов и районов Южной Флориды
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
