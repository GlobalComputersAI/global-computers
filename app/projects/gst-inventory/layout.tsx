import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./component/Header";
import Footer from "./component/footer";

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

const BASE = "/projects/gst-inventory";

export const metadata: Metadata = {
  metadataBase: new URL("https://globalcomputers.net"),

  title: {
    default: "GST Billing & Inventory Software Demo",
    template: "%s | Global Computers & IT Solutions",
  },

  description:
    "Explore GST Billing and Inventory Software Demo by Global Computers & IT Solutions. Offline-ready, on-prem deployment, modular billing, stock management, employee controls, Android/Web options, and business insights.",

  keywords: [
    "GST billing software",
    "inventory software",
    "billing software demo",
    "offline billing software",
    "on-prem billing software",
    "stock management software",
    "retail billing software",
    "restaurant billing software",
    "pharmacy billing software",
    "distributor billing software",
    "GST invoice software India",
    "billing software Korba",
    "billing software Chhattisgarh",
    "Global Computers",
  ],

  applicationName: "GC GST Inventory Demo",
  authors: [{ name: "Global Computers & IT Solutions" }],
  creator: "Global Computers & IT Solutions",
  publisher: "Global Computers & IT Solutions",

  alternates: {
    canonical: BASE,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE,
    siteName: "Global Computers & IT Solutions",
    title: "GST Billing & Inventory Software Demo",
    description:
      "Modern GST billing and inventory software demo for retail, restaurant, clinic, hotel, showroom, distributor, and service businesses.",
    images: [
      {
        url: "/projects/gst-inventory/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GST Billing & Inventory Software Demo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "GST Billing & Inventory Software Demo",
    description:
      "Offline-ready, on-prem GST billing and inventory software demo with modular pricing and live UI.",
    images: ["/projects/gst-inventory/og-image.jpg"],
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

  category: "technology",
};

export default function GstInventoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh bg-slate-50 text-slate-900 antialiased`}
      >
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-xl focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-extrabold focus:text-slate-900 focus:shadow-xl"
        >
          Skip to content
        </a>

        <div className="flex min-h-dvh flex-col">
          <Header brand="GST Billing + Inventory Software Demo" />
          <main id="content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}