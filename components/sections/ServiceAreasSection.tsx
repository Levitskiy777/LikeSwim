"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { cities as canonicalCities } from "@/lib/landing-pages";

const slugByCityName = new Map(canonicalCities.map((c) => [c.name, c.slug]));
const DEFAULT_SERVICE_SLUG = "private-swimming-lessons-adults";

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
  const { lang } = useLanguage();
  const t = translations[lang].serviceAreas;

  return (
    <section id="areas" className="py-24 sm:py-32 bg-[#1a3350]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-6">
              <MapPin className="w-3.5 h-3.5" />
              {t.badge}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {t.heading}{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t.headingAccent}
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-slate-500 max-w-xl mx-auto text-lg">{t.subtitle}</p>
          </FadeIn>
        </div>

        {/* Cities grid */}
        <FadeIn delay={0.15}>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city) => {
              const slug = slugByCityName.get(city);
              const className =
                "inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/8 bg-white/[0.03] hover:bg-white/[0.07] hover:border-cyan-500/30 text-slate-400 hover:text-white hover:-translate-y-0.5 text-sm font-medium transition-all duration-200";

              if (slug) {
                return (
                  <Link
                    key={city}
                    href={`/${lang}/${slug}/${DEFAULT_SERVICE_SLUG}`}
                    className={className}
                  >
                    <MapPin className="w-3 h-3 text-cyan-500/70 shrink-0" />
                    {city}
                  </Link>
                );
              }

              return (
                <div key={city} className={`${className} cursor-default`}>
                  <MapPin className="w-3 h-3 text-cyan-500/70 shrink-0" />
                  {city}
                </div>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-center text-slate-700 text-sm mt-10">
            {cities.length} {t.countSuffix}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
