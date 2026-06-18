import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/sections/Header";
import { MobileWhatsAppBar } from "@/components/ui/MobileWhatsAppBar";
import { LanguageProvider } from "@/lib/language-context";

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
  alternates: { canonical: "/" },
  title: "Тренер по плаванию в Майами | Pavel Levitskii | LikeSwim",
  description:
    "Профессиональный тренер по плаванию в Майами. Индивидуальные уроки для детей, взрослых и триатлетов. Hallandale Beach, Hollywood, Sunny Isles. Первое занятие со скидкой 50%.",
  keywords:
    "тренер по плаванию Майами, уроки плавания Майами, swim coach Miami, swim lessons Miami, swimming lessons Hallandale, тренер плавание Флорида, LikeSwim, Павел Левицкий",
  verification: {
    google: "yudm-axtEfoSJrX5I6R_3KG4mcSpwWuo7rgqsCiTxVE",
  },
  openGraph: {
    title: "Тренер по плаванию в Майами | Pavel Levitskii | LikeSwim",
    description:
      "Профессиональный тренер по плаванию в Майами. Индивидуальные уроки для детей, взрослых и триатлетов. Hallandale Beach, Hollywood, Sunny Isles. Первое занятие со скидкой 50%.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
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
          <Header />
          {children}
          <MobileWhatsAppBar />
        </LanguageProvider>
      </body>
    </html>
  );
}
