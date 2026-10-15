import type { Metadata } from "next";
import { LanguageSetter } from "@/components/landing/LanguageSetter";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Тренер по плаванию в Майами | Pavel Levitskii | LikeSwim",
  description:
    "Профессиональный тренер по плаванию в Майами. Индивидуальные уроки для детей, взрослых и триатлетов. Hallandale Beach, Hollywood, Sunny Isles. Первое занятие со скидкой 50%.",
  keywords:
    "тренер по плаванию Майами, уроки плавания Майами, swim coach Miami, swim lessons Miami, swimming lessons Hallandale, тренер плавание Флорида, LikeSwim, Павел Левицкий",
  alternates: {
    canonical: "/ru",
    languages: {
      "en": "/",
      "ru": "/ru",
      "he": "/he",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Тренер по плаванию в Майами | Pavel Levitskii | LikeSwim",
    description:
      "Профессиональный тренер по плаванию в Майами. Индивидуальные уроки для детей, взрослых и триатлетов. Hallandale Beach, Hollywood, Sunny Isles. Первое занятие со скидкой 50%.",
    type: "website",
    locale: "ru_RU",
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

export default function RuLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LanguageSetter lang="ru" />
      {children}
    </>
  );
}
