import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "GST Billing & Inventory Software Demo | Global Computers & IT Solutions",
  description:
    "Explore GST billing and inventory software demo for retail, supermarket, restaurant, clinic, hotel, showroom, gym, and service businesses. On-prem, offline-ready, GST-ready billing system with modular pricing.",
  keywords: [
    "GST billing software",
    "inventory software India",
    "billing software demo",
    "GST invoice software",
    "stock management software",
    "offline billing software",
    "on-prem billing software",
    "retail billing software",
    "restaurant billing software",
    "clinic billing software",
    "billing software Korba",
    "billing software Chhattisgarh",
    "Global Computers GST software",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/gst-inventory/",
  },
  openGraph: {
    title: "GST Billing & Inventory Software Demo",
    description:
      "Modern GST billing and inventory software demo for every business type. Offline-ready, on-prem setup, modular pricing, and live UI demo.",
    url: "https://globalcomputers.net/projects/gst-inventory/",
    siteName: "Global Computers & IT Solutions",
    type: "website",
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
      "Live GST billing and inventory software demo with offline billing, on-prem deployment, and modular pricing.",
    images: ["/projects/gst-inventory/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <HomePageClient />;
}