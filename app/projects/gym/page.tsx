import type { Metadata } from "next";
import GymHomeClient from "./GymHomeClient";

export const metadata: Metadata = {
  title: "Gym Website Demo | Fitness Website Design for Gyms & Trainers",
  description:
    "High-conversion gym website demo by Global Computers & IT Solutions. Modern fitness website with WhatsApp inquiry, plans, programs, gallery, free trial section, and gym billing demo.",
  keywords: [
    "gym website demo",
    "gym website design",
    "fitness website demo",
    "gym website India",
    "website for gym owner",
    "gym billing software",
    "fitness studio website",
    "personal trainer website",
    "gym website with WhatsApp",
    "gym website development",
    "gym website Korba",
    "gym website Chhattisgarh",
    "Global Computers gym demo",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/gym",
  },
  openGraph: {
    title: "Gym Website Demo | Fitness Website Design for Gyms & Trainers",
    description:
      "Premium gym website demo with video hero, WhatsApp leads, membership plans, gallery, free trial CTA, and billing demo.",
    url: "https://globalcomputers.net/projects/gym",
    siteName: "Global Computers & IT Solutions",
    type: "website",
    images: [
      {
        url: "https://globalcomputers.net/projects/gym/images/og-gym.jpg",
        width: 1200,
        height: 630,
        alt: "Gym Website Demo by Global Computers & IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gym Website Demo | Fitness Website Design",
    description:
      "Modern gym website demo with WhatsApp leads, free trial CTA, membership plans, and billing demo.",
    images: ["https://globalcomputers.net/projects/gym/images/og-gym.jpg"],
  },
};

export default function GymPage() {
  return <GymHomeClient />;
}