import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://globalcomputers.net"),

  title: {
    default: "Car Rental & Taxi Service Demo",
    template: "%s | Car Rental & Taxi Service Demo",
  },

  description:
    "Premium car rental and taxi service demo website with WhatsApp booking, rate card, billing page, local SEO structure, and high-conversion travel design.",

  keywords: [
    "car rental website demo",
    "taxi service website demo",
    "travel website demo",
    "cab booking website",
    "car rental booking website",
    "local SEO taxi website",
    "WhatsApp booking website",
    "travel business website",
    "car rental rate card",
    "taxi billing website",
    "airport pickup website",
    "outstation taxi website",
    "tour travel booking website",
  ],

  alternates: {
    canonical: "https://globalcomputers.net/projects/car-Rental",
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

  openGraph: {
    type: "website",
    url: "https://globalcomputers.net/projects/car-Rental",
    siteName: "Global Computers & IT Solutions",
    title: "Car Rental & Taxi Service Demo",
    description:
      "Modern car rental and taxi service demo with booking flow, rate card, billing, WhatsApp CTA, and SEO-ready pages.",
    locale: "en_IN",
    images: [
      {
        url: "/logo_header_svr.png",
        width: 1200,
        height: 630,
        alt: "Car Rental & Taxi Service Demo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Car Rental & Taxi Service Demo",
    description:
      "Modern car rental and taxi service demo with booking flow, rate card, billing, WhatsApp CTA, and SEO-ready pages.",
    images: ["/logo_header_svr.png"],
  },
};

export default function CarRentalLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}