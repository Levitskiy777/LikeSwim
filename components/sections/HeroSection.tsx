import { ArrowDown, MessageCircle } from "lucide-react";
import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/17542928576";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0d1a2e]"
    >
      {/* Static gradient blobs — CSS only */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-600/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-blue-700/20 blur-[140px]" />
        <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] rounded-full bg-teal-500/10 blur-[100px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        {/* Logo */}
        <div
          className="flex justify-center mb-8 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <Image
            src="/logo_transparent.png"
            alt="LikeSwim — Школа плавания"
            width={320}
            height={320}
            className="w-[240px] sm:w-[280px] md:w-[320px] h-auto"
            style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.8))" }}
            priority
          />
        </div>

        {/* H1 — primary SEO heading, reinforces target keyword */}
        <h1
          className="text-xl sm:text-2xl text-white/70 font-medium mb-6 animate-fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          Тренер по плаванию в Майами — Павел Левицкий
        </h1>

        {/* Description */}
        <p
          className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Профессиональная школа плавания в Флориде, от Майами до Вест-Палм-Бич.
          Индивидуальные и групповые тренировки для детей и взрослых.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
          style={{ animationDelay: "0.55s" }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Записаться в WhatsApp
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-medium text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            Узнать больше
          </a>
        </div>

        {/* Stats row */}
        <div
          className="flex flex-wrap justify-center gap-8 mt-20 pt-12 border-t border-white/5 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          {[
            { value: "10+", label: "лет тренерства" },
            { value: "2000+", label: "учеников" },
            { value: "3", label: "страны" },
            { value: "1:1", label: "и группы" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 animate-fade-up"
        style={{ animationDelay: "1.1s" }}
      >
        <div className="animate-bounce">
          <ArrowDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}
