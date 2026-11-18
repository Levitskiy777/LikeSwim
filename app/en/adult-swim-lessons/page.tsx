import type { Metadata } from "next";
import { AdultLessonsPage } from "@/components/landing/AdultLessonsPage";

const title = "Adult Swim Lessons in Miami — Private, at Your Pool | LikeSwim";
const description =
  "Learn to swim as an adult — even with a fear of water. Private lessons at your home or condo pool from Miami to Boca Raton with a Master of Sports coach. First lesson 50% off.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en/adult-swim-lessons",
    languages: {
      en: "/en/adult-swim-lessons",
      ru: "/ru/plavanie-dlya-vzroslyh",
      "x-default": "/en/adult-swim-lessons",
    },
  },
  openGraph: { title, description, type: "website", locale: "en_US", images: ["https://like-swim.com/og-image.png"] },
};

export default function Page() {
  return <AdultLessonsPage lang="en" />;
}
