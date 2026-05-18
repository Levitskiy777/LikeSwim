import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ServiceAreasSection } from "@/components/sections/ServiceAreasSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <MethodologySection />
      <TestimonialsSection />
      <ServiceAreasSection />
      <CTASection />
      <Footer />
    </main>
  );
}
