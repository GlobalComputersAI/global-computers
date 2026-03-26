import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Restaurant | Directions, Booking, WhatsApp & Map",
  description:
    "Contact the restaurant, view map location, check timings, and send a quick WhatsApp inquiry for table booking, takeaway, or party events.",
  keywords: [
    "restaurant contact page",
    "restaurant map page",
    "restaurant booking page",
    "restaurant whatsapp booking",
    "restaurant directions",
    "restaurant website contact",
  ],
  alternates: {
    canonical: "/projects/restaurant/contact",
  },
  openGraph: {
    title: "Contact Restaurant | Directions, Booking, WhatsApp & Map",
    description:
      "Get directions, timings, and quick WhatsApp booking options through this restaurant contact page demo.",
    url: "https://globalcomputers.net/projects/restaurant/contact",
    type: "website",
    images: [
      {
        url: "https://globalcomputers.net/projects/food/hero-2.jpg",
        width: 1200,
        height: 630,
        alt: "Restaurant contact page demo by Global Computers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Restaurant | Directions, Booking, WhatsApp & Map",
    description:
      "Get directions, timings, and quick WhatsApp booking options through this restaurant contact page demo.",
    images: ["https://globalcomputers.net/projects/food/hero-2.jpg"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}