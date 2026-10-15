import type { Metadata } from "next";
import { LanguageSetter } from "@/components/landing/LanguageSetter";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "מאמן שחייה במיאמי | פבל לויצקי | LikeSwim",
  description:
    "מאמן שחייה מקצועי במיאמי. שיעורים פרטיים לילדים, מבוגרים וטריאתלטים. הלנדייל ביץ׳, הוליווד, סאני איילס. שיעור ראשון בהנחה 50%.",
  keywords:
    "מאמן שחייה מיאמי, שיעורי שחייה מיאמי, שיעורי שחייה פלורידה, שיעורי שחייה פרטיים, שיעורי שחייה למבוגרים, שיעורי שחייה לילדים, אימון שחייה לטריאתלון, אימון שחייה אונליין, מדריך שחייה מיאמי, LikeSwim, פאבל לויצקי",
  alternates: {
    canonical: "/he",
    languages: {
      "en": "/",
      "ru": "/ru",
      "he": "/he",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "מאמן שחייה במיאמי | פבל לויצקי | LikeSwim",
    description:
      "מאמן שחייה מקצועי במיאמי. שיעורים פרטיים לילדים, מבוגרים וטריאתלטים. שיעור ראשון בהנחה 50%.",
    type: "website",
    locale: "he_IL",
    images: [
      {
        url: "https://like-swim.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "LikeSwim — Swim Lessons in Miami. First lesson 50% off.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://like-swim.com/og-image.png"],
  },
};

export default function HeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LanguageSetter lang="he" />
      {children}
    </>
  );
}
