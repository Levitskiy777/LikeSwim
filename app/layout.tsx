import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { headers } from "next/headers";
import "./globals.css";
import { Header } from "@/components/sections/Header";
import { MobileWhatsAppBar } from "@/components/ui/MobileWhatsAppBar";
import { LanguageProvider } from "@/lib/language-context";
import { GAEventTracker } from "@/components/analytics/GAEventTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://like-swim.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en": "/",
      "ru": "/ru",
      "he": "/he",
      "x-default": "/",
    },
  },
  title: "Swim Lessons in Miami & Hallandale Beach | Coach Pavel Levitskii",
  description:
    "Mobile private swim coach who comes to your pool in Miami, Hallandale Beach, Sunny Isles, Aventura & Boca Raton, FL. Lessons in English, Russian & Hebrew. First lesson 50% off.",
  keywords:
    "mobile swim instructor Miami, swim lessons at home Miami, Russian speaking swim coach Miami, swim coach Miami, swimming lessons Miami, swim lessons Hallandale Beach, private swim lessons kids, adult swimming lessons Miami, triathlon swim training Miami, fear of water, LikeSwim, Pavel Levitskii, Pavel Levitskiy, Pavel Levitsky",
  verification: {
    google: [
      "yudm-axtEfoSJrX5I6R_3KG4mcSpwWuo7rgqsCiTxVE",
      "iM1ZwuTKkIPTqypw2FMrDW4QXiYioYMBDIO91GjA3tw",
    ],
  },
  openGraph: {
    title: "Swim Lessons in Miami & Hallandale Beach | Coach Pavel Levitskii",
    description:
      "Mobile private swim coach who comes to your pool in Miami, Hallandale Beach, Sunny Isles, Aventura & Boca Raton. English, Russian & Hebrew. First lesson 50% off.",
    type: "website",
    locale: "en_US",
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const lang = headersList.get("x-lang") ?? "en";
  const dir = lang === "he" ? "rtl" : "ltr";

  return (
    <html
      lang={lang}
      dir={dir}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#1a3350] pb-[72px] xl:pb-0">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QL4DKQWMRQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QL4DKQWMRQ');
          `}
        </Script>
        <LanguageProvider>
          <GAEventTracker />
          <Header />
          {children}
          <MobileWhatsAppBar />
        </LanguageProvider>
      </body>
    </html>
  );
}
