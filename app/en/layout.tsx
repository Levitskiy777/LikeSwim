import type { Metadata } from "next";
import { LanguageSetter } from "@/components/landing/LanguageSetter";
import { ReactNode } from "react";

export const metadata: Metadata = {
  keywords:
    "swim coach Miami, swimming lessons Miami, swimming lessons Florida, private swim lessons, adult swimming lessons, kids swim lessons, triathlon swim training, online swim coaching, swim instructor Miami, LikeSwim, Pavel Levitskii",
};

export default function EnLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LanguageSetter lang="en" />
      {children}
    </>
  );
}
