"use client";

import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const WHATSAPP_URL = "https://wa.me/17542928576";

export function MobileWhatsAppBar() {
  const { lang } = useLanguage();
  const t = translations[lang].mobileBar;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 xl:hidden px-4 py-3 bg-[#091522]/95 backdrop-blur-md border-t border-white/8">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-base shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 active:scale-[0.98] transition-all duration-200"
      >
        <MessageCircle className="w-5 h-5 shrink-0" />
        {t.cta}
      </a>
    </div>
  );
}
