import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Gym Website Demo | Elite Fitness Studio",
    template: "%s | Elite Fitness Studio",
  },
  description:
    "Premium gym website demo by Global Computers & IT Solutions. Includes programs, membership plans, gallery, free trial section, WhatsApp inquiry flow, and gym billing demo.",
  keywords: [
    "gym website demo",
    "fitness website demo",
    "gym website design",
    "gym website India",
    "fitness studio website",
    "gym plans website",
    "gym gallery website",
    "gym billing demo",
    "website for gym owner",
    "personal trainer website",
    "gym website with WhatsApp",
    "Global Computers gym demo",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/gym",
  },
  openGraph: {
    title: "Gym Website Demo | Elite Fitness Studio",
    description:
      "Premium fitness website demo with modern design, plans, programs, gallery, free trial CTA, WhatsApp inquiry flow, and billing demo.",
    url: "https://globalcomputers.net/projects/gym",
    siteName: "Global Computers & IT Solutions",
    type: "website",
    images: [
      {
        url: "https://globalcomputers.net/projects/gym/images/og-gym.jpg",
        width: 1200,
        height: 630,
        alt: "Elite Fitness Studio Gym Website Demo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gym Website Demo | Elite Fitness Studio",
    description:
      "Modern gym website demo with WhatsApp inquiry, plans, gallery, free trial CTA, and billing demo.",
    images: ["https://globalcomputers.net/projects/gym/images/og-gym.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GymLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}