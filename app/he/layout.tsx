import { LanguageSetter } from "@/components/landing/LanguageSetter";
import { ReactNode } from "react";

export default function HeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LanguageSetter lang="he" />
      {children}
    </>
  );
}
