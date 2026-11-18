import type { Metadata } from "next";
import { AdultLessonsPage } from "@/components/landing/AdultLessonsPage";

const title = "Обучение плаванию для взрослых в Майами — с выездом к вашему бассейну | LikeSwim";
const description =
  "Научитесь плавать во взрослом возрасте, даже если боитесь воды. Индивидуальные занятия на русском у вашего бассейна — Санни-Айлс, Авентура, Холландейл, Майами. Первое занятие −50%.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/ru/plavanie-dlya-vzroslyh",
    languages: {
      en: "/en/adult-swim-lessons",
      ru: "/ru/plavanie-dlya-vzroslyh",
      "x-default": "/en/adult-swim-lessons",
    },
  },
  openGraph: { title, description, type: "website", locale: "ru_RU", images: ["https://like-swim.com/og-image.png"] },
};

export default function Page() {
  return <AdultLessonsPage lang="ru" />;
}
