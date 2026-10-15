"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Lang } from "./translations";

function pathToLang(pathname: string): Lang {
  if (pathname.startsWith("/ru")) return "ru";
  if (pathname.startsWith("/he")) return "he";
  return "en";
}

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ lang: "en", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [lang, setLang] = useState<Lang>(() => pathToLang(pathname));
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
