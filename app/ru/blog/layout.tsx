import { ReactNode } from "react";
import { Footer } from "@/components/sections/Footer";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
