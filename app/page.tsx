import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { PressSection } from "@/components/sections/PressSection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ServiceAreasSection } from "@/components/sections/ServiceAreasSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { OnlineCoachingSection } from "@/components/sections/OnlineCoachingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://like-swim.com/#business",
      "name": "LikeSwim — Школа плавания Павла Левицкого",
      "description":
        "Профессиональный тренер по плаванию в Майами. Индивидуальные уроки для детей, взрослых и триатлетов. Первое занятие со скидкой 50%.",
      "url": "https://like-swim.com",
      "telephone": "+17542928576",
      "priceRange": "$75–$145",
      "image": "https://like-swim.com/logo_transparent.png",
      "areaServed": [
        "Hallandale Beach", "Hollywood", "Fort Lauderdale", "Aventura",
        "Sunny Isles Beach", "Miami Beach", "Miami", "Coral Gables",
        "Boca Raton", "West Palm Beach"
      ],
      "serviceType": ["Swim Lessons", "Swimming Coaching", "Triathlon Training"],
      "sameAs": [
        "https://instagram.com/levitskii.swimcoach.miami",
        "https://wa.me/17542928576",
        "https://t.me/+17542928576"
      ],
    },
    {
      "@type": "Person",
      "@id": "https://like-swim.com/#person",
      "name": "Павел Левицкий",
      "alternateName": "Pavel Levitskii",
      "jobTitle": "Тренер по плаванию",
      "description":
        "Мастер спорта по плаванию, победитель Первенства России 2007, лауреат Президентской премии для молодёжи. Более 10 лет тренерской практики.",
      "worksFor": { "@id": "https://like-swim.com/#business" },
      "knowsLanguage": ["ru", "he", "en"],
      "knowsAbout": [
        "Swimming", "Swim Coaching", "Triathlon", "Children Swimming", "Adult Swimming"
      ],
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <PressSection />
      <MethodologySection />
      <TestimonialsSection />
      <GallerySection />
      <ServiceAreasSection />
      <PricingSection />
      <OnlineCoachingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
