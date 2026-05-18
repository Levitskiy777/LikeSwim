import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LikeSwim — Школа плавания | Флорида",
  description:
    "LikeSwim — профессиональная школа плавания Павла Левицкого во Флориде, от Майами до Вест-Палм-Бич. Индивидуальные и групповые тренировки для детей и взрослых. Первое занятие со скидкой 50%.",
  keywords: "LikeSwim, школа плавания Флорида, swimming school Florida, обучение плаванию, Павел Левицкий, Miami, West Palm Beach, swimming lessons",
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
      <body className="min-h-full flex flex-col bg-[#070c18]">
        <Header />
        {children}
      </body>
    </html>
  );
}
