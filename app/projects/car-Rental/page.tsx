import type { Metadata } from "next";
import CarRentalHomeClient from "./CarRentalHomeClient";

const pageUrl = "https://globalcomputers.net/projects/car-Rental";
const ogImage = "https://globalcomputers.net/logo_header_svr.png";

export const metadata: Metadata = {
  title: "Car Rental Website Demo | Taxi Booking Website Design India",
  description:
    "Explore a premium car rental and taxi booking website demo with WhatsApp enquiry, rate card, booking flow, billing page, mobile-friendly design, and SEO-ready travel business sections.",
  keywords: [
    "car rental website demo",
    "taxi booking website",
    "travel website design India",
    "cab booking website demo",
    "car rental website India",
    "taxi service website design",
    "travel agency website demo",
    "WhatsApp booking website",
    "SEO ready taxi website",
    "car rental business website",
    "Global Computers car rental demo",
  ],
  alternates: {
    canonical: pageUrl,
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
    title: "Car Rental Website Demo | Taxi Booking Website Design India",
    description:
      "Premium car rental and taxi booking website demo with booking flow, WhatsApp enquiry, rate card, billing page, and SEO-ready travel sections.",
    url: pageUrl,
    siteName: "Global Computers & IT Solutions",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Car Rental Website Demo by Global Computers & IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Rental Website Demo | Taxi Booking Website Design India",
    description:
      "Premium car rental and taxi booking website demo with WhatsApp enquiry, rate card, billing page, and SEO-ready travel sections.",
    images: [ogImage],
  },
  category: "technology",
};

export default function Page() {
  return <CarRentalHomeClient />;
}