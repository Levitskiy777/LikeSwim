"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import type { Lang } from "@/lib/translations";

export function LanguageSetter({ lang }: { lang: Lang }) {
  const { setLang } = useLanguage();
  useEffect(() => {
    setLang(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
  }, [lang, setLang]);
  return null;
}
