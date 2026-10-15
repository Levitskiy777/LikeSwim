"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const WHATSAPP_NUMBER = "17542928576";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function BookingForm() {
  const { lang } = useLanguage();
  const t = translations[lang].form;
  const isRtl = lang === "he";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [who, setWho] = useState<"child" | "adult">("child");
  const [age, setAge] = useState("");
  const [level, setLevel] = useState(t.levelOptions[0].value);
  const [area, setArea] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const whoLabel = who === "child" ? t.whoChild : t.whoAdult;
  const levelLabel = t.levelOptions.find((o) => o.value === level)?.label ?? level;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError(t.requiredError);
      return;
    }
    setError("");

    const message = t.whatsappMessage(name.trim(), phone.trim(), whoLabel, age.trim(), levelLabel, area.trim());
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "generate_lead", {
        event_category: "form",
        event_label: "booking_form",
        language: lang,
      });
    }

    setSubmitted(true);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:bg-white/8 transition-colors text-sm";
  const labelClass = "block text-slate-400 text-xs font-medium mb-1.5";

  return (
    <section id="booking" className="py-20 sm:py-28 bg-[#162b42]">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">{t.title}</h2>
          <p className="text-slate-400 text-base max-w-lg mx-auto">{t.subtitle}</p>
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-white/8 bg-[#0d1e30] shadow-[0_0_60px_rgba(6,182,212,0.08)]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-cyan-500/10 blur-[80px]" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-blue-600/10 blur-[90px]" />
          </div>

          <div className="relative z-10 p-8 sm:p-10" dir={isRtl ? "rtl" : "ltr"}>
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mx-auto mb-5">
                  <MessageCircle className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{t.successTitle}</h3>
                <p className="text-slate-400 text-base max-w-sm mx-auto">{t.successBody}</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm text-slate-500 hover:text-slate-300 transition-colors underline underline-offset-2"
                >
                  {lang === "ru" ? "Заполнить снова" : lang === "he" ? "מלא שוב" : "Fill out again"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>{t.nameLabel}</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.namePlaceholder}
                      className={inputClass}
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>{t.phoneLabel}</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.phonePlaceholder}
                      className={inputClass}
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>{t.whoLabel}</label>
                  <div className="flex gap-3">
                    {(["child", "adult"] as const).map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setWho(option)}
                        className={`flex-1 py-3 rounded-xl text-sm font-medium border transition-colors ${
                          who === option
                            ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-300"
                            : "bg-white/4 border-white/8 text-slate-400 hover:border-white/15 hover:text-slate-300"
                        }`}
                      >
                        {option === "child" ? t.whoChild : t.whoAdult}
                      </button>
                    ))}
                  </div>
                </div>

                {who === "child" && (
                  <div>
                    <label className={labelClass}>{t.ageLabel}</label>
                    <input
                      type="number"
                      min="2"
                      max="17"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder={t.agePlaceholder}
                      className={inputClass}
                    />
                  </div>
                )}

                <div>
                  <label className={labelClass}>{t.levelLabel}</label>
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className={`${inputClass} appearance-none cursor-pointer`}
                  >
                    {t.levelOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-[#0d1e30]">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass}>{t.areaLabel}</label>
                  <input
                    type="text"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder={t.areaPlaceholder}
                    className={inputClass}
                  />
                </div>

                {error && <p className="text-red-400 text-sm">{error}</p>}

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-base shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 mt-2"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  {t.submitCta}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
