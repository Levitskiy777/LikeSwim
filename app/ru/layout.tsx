import { LanguageSetter } from "@/components/landing/LanguageSetter";
import { ReactNode } from "react";

export default function RuLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LanguageSetter lang="ru" />
      {children}
    </>
  );
}
