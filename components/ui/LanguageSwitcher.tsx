"use client";

import { useLanguage } from "@/lib/language-context";
import { Lang } from "@/lib/translations";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`flex items-center gap-0.5 rounded-lg border border-white/10 p-0.5 ${className}`}
    >
      {(["ru", "en", "he"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2.5 py-1 rounded-md text-xs font-semibold tracking-wider transition-all duration-200 ${
            lang === l
              ? "bg-white/10 text-white"
              : "text-slate-500 hover:text-slate-300"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
