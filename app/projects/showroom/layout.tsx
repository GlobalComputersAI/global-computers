import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Premium Showroom Website Demo | Luxury UI, Product Display & Billing",
  description:
    "Explore a premium showroom website demo with modern luxury UI, strong product presentation, WhatsApp lead flow, billing page, contact page, and high-conversion design by Global Computers & IT Solutions.",
  keywords: [
    "showroom website demo",
    "premium showroom website",
    "luxury website design",
    "product catalog website",
    "showroom billing page",
    "showroom contact page",
    "retail showroom website design",
    "furniture showroom website",
    "electronics showroom website",
    "jewellery showroom website",
    "website design korba",
    "website design chhattisgarh",
    "Global Computers showroom demo",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/showroom/",
  },
  openGraph: {
    title: "Premium Showroom Website Demo | Luxury UI, Product Display & Billing",
    description:
      "A premium showroom website demo designed for better trust, more leads, elegant product display, and strong sales conversion.",
    url: "https://globalcomputers.net/projects/showroom/",
    siteName: "Global Computers & IT Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Showroom Website Demo",
    description:
      "Modern showroom website demo with premium design, WhatsApp enquiries, billing page, and strong conversion flow.",
  },
};

export default function ShowroomLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="showroom-root">
      <Header />
      <main className="showroom-main">{children}</main>
      <Footer />
    </div>
  );
}