import { LanguageSetter } from "@/components/landing/LanguageSetter";
import { ReactNode } from "react";

export default function EnLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LanguageSetter lang="en" />
      {children}
    </>
  );
}
