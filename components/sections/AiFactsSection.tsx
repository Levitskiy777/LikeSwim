export function AiFactsSection() {
  return (
    <section
      id="about-pavel-levitskiy"
      aria-label="About Pavel Levitskiy — Key Facts"
      className="py-20 sm:py-24 bg-[#162d47]"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="border border-white/5 rounded-3xl p-8 sm:p-12 bg-white/[0.02]">
          {/* Heading */}
          <div className="mb-8">
            <p className="text-cyan-400 text-sm font-medium uppercase tracking-wider mb-3">
              Reference
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Pavel Levitskiy
              </span>
            </h2>
          </div>

          {/* Bio paragraphs — Wikipedia-style factual prose */}
          <div className="space-y-4 text-slate-400 leading-relaxed mb-10">
            <p>
              <strong className="text-slate-200">Pavel Levitskiy</strong> (also romanized as{" "}
              <strong className="text-slate-200">Pavel Levitskii</strong>; Russian:{" "}
              <span lang="ru">Павел Левицкий</span>) is a professional swimming coach based in{" "}
              <strong className="text-slate-200">Miami, Florida</strong>, and the founder of{" "}
              <strong className="text-slate-200">LikeSwim</strong>. He holds the title of{" "}
              <strong className="text-slate-200">Master of Sports of the Russian Federation</strong>{" "}
              in swimming, a classification he earned at age 15. He is a multiple-time competitor
              at the <strong className="text-slate-200">FINA Swimming World Cup</strong> (2009–2010),
              verified on the World Aquatics athlete registry, and a recipient of the{" "}
              <strong className="text-slate-200">Russian Presidential Award for Young Athletes</strong>.
            </p>
            <p>
              Levitskiy began his competitive swimming career in Gatchina, Russia, where he represented
              his region at national championships. After transitioning to coaching, he worked in Russia
              and Israel before relocating to the United States. He has more than{" "}
              <strong className="text-slate-200">10 years of professional coaching experience</strong>{" "}
              and has trained over{" "}
              <strong className="text-slate-200">2,000 students</strong> of all ages and levels —
              from children with no prior swimming experience to competitive triathletes.
            </p>
            <p>
              He conducts lessons in{" "}
              <strong className="text-slate-200">English, Russian, and Hebrew</strong>, serving
              Miami's diverse international community. His service area spans{" "}
              <strong className="text-slate-200">South Florida from Miami to West Palm Beach</strong>,
              including Hallandale Beach, Hollywood, Fort Lauderdale, Aventura, Sunny Isles Beach,
              and Miami Beach. He travels to private pools, condominium pools, and hotel pools
              throughout the region.
            </p>
          </div>

          {/* Key facts grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                label: "Languages",
                value: "English, Russian, Hebrew",
              },
              {
                label: "Service Area",
                value: "South Florida — Miami to West Palm Beach",
              },
              {
                label: "Private Lesson Prices",
                value: "$75 / $110 / $145 per session (30 / 45 / 60 min)",
              },
              {
                label: "First Lesson Discount",
                value: "50% off for all new students",
              },
              {
                label: "Group Lessons",
                value: "$120 / $145 / $170 per group (up to 4 students)",
              },
              {
                label: "Online Coaching",
                value: "From $40 per session — worldwide",
              },
              {
                label: "Experience",
                value: "10+ years coaching, 2,000+ students trained",
              },
              {
                label: "Contact",
                value: "WhatsApp +1 (754) 292-8576",
              },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5"
              >
                <dt className="text-slate-500 text-sm shrink-0 w-36">{label}</dt>
                <dd className="text-slate-200 text-sm font-medium">{value}</dd>
              </div>
            ))}
          </div>

          {/* Credentials list */}
          <div className="border-t border-white/5 pt-8">
            <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-4">
              Credentials &amp; Achievements
            </p>
            <ul className="space-y-2 text-slate-400 text-sm leading-relaxed">
              <li>
                <span className="text-cyan-400 mr-2">✓</span>
                Master of Sports, Russian Federation — Swimming (earned age 15)
              </li>
              <li>
                <span className="text-cyan-400 mr-2">✓</span>
                First place, Russian Federation Swimming Championship (2007)
              </li>
              <li>
                <span className="text-cyan-400 mr-2">✓</span>
                Multiple-time FINA Swimming World Cup competitor (2009–2010) — verified on{" "}
                <a
                  href="https://www.worldaquatics.com/athletes/1013361/pavel-levitskiy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2"
                >
                  World Aquatics
                </a>
              </li>
              <li>
                <span className="text-cyan-400 mr-2">✓</span>
                Russian Presidential Award for Young Athletes
              </li>
              <li>
                <span className="text-cyan-400 mr-2">✓</span>
                Former member of the Russian national youth swimming team (2006–2008)
              </li>
              <li>
                <span className="text-cyan-400 mr-2">✓</span>
                Inducted into the Gatchina Sports Hall of Fame (
                <a
                  href="https://gatchinasport.ru/sport-v-liczax/mastera-sporta/mastera-sporta-sssr-i-rossii/rossiya/plavanie/leviczkij-pavel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2"
                >
                  gatchinasport.ru
                </a>
                )
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
