"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

const WHATSAPP_URL = "https://wa.me/17542928576";

export function Header() {
  const { lang } = useLanguage();
  const t = translations[lang].header;

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1280) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#1a3350]/90 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center gap-4">
          {/* Logo */}
          <a href="#hero" className="group shrink-0">
            <span className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              LikeSwim
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden xl:flex flex-1 justify-center items-center gap-1">
            {t.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-base text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop right side: language switcher + CTA */}
          <div className="hidden xl:flex shrink-0 items-center gap-3">
            <LanguageSwitcher />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.03] transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              {t.cta}
            </a>
          </div>

          {/* Spacer on mobile */}
          <div className="flex-1 xl:hidden" />

          {/* Mobile: language switcher + burger */}
          <div className="xl:hidden flex items-center gap-2 shrink-0">
            <LanguageSwitcher />
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? t.menuClose : t.menuOpen}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay — always rendered, visibility driven by CSS */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 pt-20 pb-6 px-6 bg-[#1a3350]/95 backdrop-blur-xl border-b border-white/5 xl:hidden transition-all duration-200 ${menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
      >
        <nav className="flex flex-col gap-1 mb-6">
          {t.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 text-base font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleNavClick}
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20"
        >
          <MessageCircle className="w-5 h-5" />
          {t.mobileWhatsapp}
        </a>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-30 xl:hidden transition-opacity duration-200 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
}
