import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Builder Website Demo | Real Estate Developer Website Design",
    template: "%s | Builder Website Demo",
  },
  description:
    "Premium builder and real estate website demo for developers, colonizers, and construction businesses. Showcase projects, pricing, floor plans, amenities, brochure requests, WhatsApp enquiries, and site visit leads.",
  keywords: [
    "builder website demo",
    "real estate website demo",
    "builder website design India",
    "real estate developer website",
    "construction company website design",
    "property project website",
    "builder project showcase website",
    "luxury builder website design",
    "real estate landing page",
    "property developer website India",
    "site visit booking website",
    "builder website with WhatsApp",
    "real estate website for lead generation",
    "project brochure website",
    "builder website Chhattisgarh",
    "builder website Korba",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/builder/",
  },
  openGraph: {
    title: "Builder Website Demo | Real Estate Developer Website Design",
    description:
      "Premium builder and real estate website demo with project showcase, pricing, amenities, brochure requests, and WhatsApp lead flow.",
    url: "https://globalcomputers.net/projects/builder/",
    siteName: "Global Computers & IT Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Builder Website Demo | Real Estate Developer Website Design",
    description:
      "Premium builder and real estate website demo with project showcase, pricing, floor plans, and WhatsApp lead flow.",
  },
};

export default function BuilderLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="builder-shell min-h-screen bg-[#07111f] text-slate-900">
      <Header />
      <div className="builder-page-wrap">{children}</div>
      <Footer />
    </div>
  );
}