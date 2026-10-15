"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const imageSrcs = [
  "/gallery1.webp",
  "/gallery2.webp",
  "/gallery3.webp",
  "/gallery4.webp",
  "/gallery5.webp",
  "/gallery6.webp",
];

const SWIPE_THRESHOLD = 40;

export function GallerySection() {
  const { lang } = useLanguage();
  const t = translations[lang].gallery;
  const images = imageSrcs.map((src, i) => ({ src, alt: t.imageAlts[i] }));
  const n = images.length;

  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  // Separate refs for carousel vs lightbox swipe — avoids shared state race
  const carouselTouchX = useRef<number | null>(null);
  const lightboxTouchX = useRef<number | null>(null);

  const goPrev = useCallback(() => setCurrent((c) => (c - 1 + n) % n), [n]);
  const goNext = useCallback(() => setCurrent((c) => (c + 1) % n), [n]);

  // Keyboard: arrows navigate carousel when lightbox is closed, lightbox when open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox !== null) {
        if (e.key === "Escape") setLightbox(null);
        if (e.key === "ArrowRight") setLightbox((i) => (i! + 1) % n);
        if (e.key === "ArrowLeft") setLightbox((i) => (i! - 1 + n) % n);
      } else {
        if (e.key === "ArrowLeft") goPrev();
        if (e.key === "ArrowRight") goNext();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, n, goPrev, goNext]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  // ── Carousel swipe ────────────────────────────────────────────────
  const onCarouselTouchStart = (e: React.TouchEvent) => {
    carouselTouchX.current = e.touches[0].clientX;
  };
  const onCarouselTouchEnd = (e: React.TouchEvent) => {
    if (carouselTouchX.current === null) return;
    const delta = carouselTouchX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > SWIPE_THRESHOLD) delta > 0 ? goNext() : goPrev();
    carouselTouchX.current = null;
  };

  // ── Lightbox swipe ────────────────────────────────────────────────
  const onLightboxTouchStart = (e: React.TouchEvent) => {
    lightboxTouchX.current = e.touches[0].clientX;
  };
  const onLightboxTouchEnd = (e: React.TouchEvent) => {
    if (lightboxTouchX.current === null) return;
    const delta = lightboxTouchX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      setLightbox((i) => delta > 0 ? (i! + 1) % n : (i! - 1 + n) % n);
    }
    lightboxTouchX.current = null;
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#162d47]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-6">
              {t.badge}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {t.heading}{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t.headingAccent}
              </span>
            </h2>
          </FadeIn>
        </div>

        {/* Carousel */}
        <FadeIn delay={0.15}>
          {/* Outer wrapper: positions arrows over the image */}
          <div className="relative select-none">
            {/* Viewport: clips the sliding track */}
            <div
              className="overflow-hidden rounded-2xl"
              onTouchStart={onCarouselTouchStart}
              onTouchEnd={onCarouselTouchEnd}
            >
              {/*
                Track: total width = n × 100% of viewport.
                translateX(-k / n × 100%) shifts exactly k viewport-widths.
              */}
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{
                  width: `${n * 100}%`,
                  transform: `translateX(-${(current / n) * 100}%)`,
                }}
              >
                {images.map((img, i) => (
                  <div
                    key={img.src}
                    style={{ width: `${100 / n}%` }}
                    className="relative shrink-0 h-64 sm:h-96 lg:h-[480px] cursor-zoom-in group"
                    onClick={() => setLightbox(i)}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 1152px"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Prev arrow */}
            <button
              onClick={goPrev}
              aria-label={t.prevLabel}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/40 hover:bg-black/65 border border-white/10 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next arrow */}
            <button
              onClick={goNext}
              aria-label={t.nextLabel}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/40 hover:bg-black/65 border border-white/10 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Slide counter */}
            <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white/70 text-xs tabular-nums font-medium pointer-events-none">
              {current + 1} / {n}
            </div>
          </div>

          {/* Dot indicators */}
          <div
            className="flex justify-center items-center gap-2 mt-5"
            role="tablist"
            aria-label="Gallery slides"
          >
            {images.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 bg-cyan-400"
                    : "w-2 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-lightbox-in"
          onClick={() => setLightbox(null)}
          onTouchStart={onLightboxTouchStart}
          onTouchEnd={onLightboxTouchEnd}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center animate-lightbox-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[80vh]">
              <Image
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                fill
                className="object-contain"
                sizes="100vw"
                loading="lazy"
              />
            </div>
          </div>

          <button
            onClick={() => setLightbox(null)}
            aria-label={t.closeLabel}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + n) % n); }}
            aria-label={t.prevLabel}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % n); }}
            aria-label={t.nextLabel}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm tabular-nums">
            {lightbox + 1} / {n}
          </div>
        </div>
      )}
    </section>
  );
}
