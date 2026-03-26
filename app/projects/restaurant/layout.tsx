import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://globalcomputers.net"),
  title: {
    default: "Restaurant Website Demo | Menu, Gallery, Contact & Billing",
    template: "%s | Restaurant Demo",
  },
  description:
    "Modern restaurant and cafe website demo with menu, gallery, contact page, WhatsApp CTA, and billing demo. Built by Global Computers & IT Solutions for Indian food businesses.",
  keywords: [
    "restaurant website demo",
    "restaurant website design",
    "cafe website demo",
    "restaurant billing demo",
    "restaurant menu website",
    "food business website",
    "restaurant website India",
    "restaurant website Korba",
    "restaurant website Chhattisgarh",
    "WhatsApp restaurant website",
  ],
  applicationName: "Restaurant Demo",
  alternates: {
    canonical: "/projects/restaurant",
  },
  openGraph: {
    title: "Restaurant Website Demo | Menu, Gallery, Contact & Billing",
    description:
      "Explore a premium restaurant website demo with food gallery, menu page, contact section, and billing showcase.",
    url: "https://globalcomputers.net/projects/restaurant",
    siteName: "Global Computers & IT Solutions",
    type: "website",
    images: [
      {
        url: "/projects/food/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Restaurant website demo by Global Computers & IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Website Demo | Global Computers & IT Solutions",
    description:
      "Restaurant demo with menu, gallery, contact page, and billing feature.",
    images: ["/projects/food/hero-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RestaurantLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={[
          geistSans.variable,
          geistMono.variable,
          "bg-slate-50 text-slate-900 antialiased",
        ].join(" ")}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}