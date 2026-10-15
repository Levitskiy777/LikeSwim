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
import { BookingForm } from "@/components/sections/BookingForm";
import { Footer } from "@/components/sections/Footer";
import { homeJsonLd } from "@/lib/home-jsonld";

export default function HeHomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <PressSection />
      <MethodologySection />
      <TestimonialsSection />
      <GallerySection />
      <ServiceAreasSection />

      {/* Featured landing pages — HE links for SEO */}
      <section className="py-10 bg-[#162d47] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-slate-500 text-sm mb-4 text-center">דפי שירות פופולריים</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/he/hallandale-beach/private-swimming-lessons-kids", label: "שיעורים פרטיים — הלנדייל ביץ׳" },
              { href: "/he/miami/private-swimming-lessons-kids", label: "שיעורים פרטיים — מיאמי" },
              { href: "/he/sunny-isles-beach/private-swimming-lessons-kids", label: "שיעורים פרטיים — סאני איילס" },
              { href: "/he/hollywood/private-swimming-lessons-kids", label: "שיעורים פרטיים — הוליווד" },
              { href: "/he/miami/triathlon-swim-training", label: "אימון שחייה לטריאתלון — מיאמי" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full border border-white/10 text-slate-400 text-sm hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <PricingSection />
      <OnlineCoachingSection />
      <FAQSection />
      <CTASection />
      <BookingForm />
      <Footer />
    </main>
  );
}
