import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const siteUrl = "https://globalcomputers.net";
const basePath = "/projects/interior";
const pageUrl = `${siteUrl}${basePath}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Interior Design Website Demo | Premium Home, Office & Modular Interior Solutions",
    template: "%s | Interior Design Demo",
  },
  description:
    "Premium interior design website demo for homes, offices, shops, showrooms, modular kitchens, wardrobes, false ceilings, and turnkey interior execution. Built for strong SEO, premium branding, and maximum lead conversion.",
  keywords: [
    "interior design website demo",
    "interior designer website India",
    "home interior design",
    "office interior design",
    "modular kitchen design",
    "bedroom wardrobe design",
    "false ceiling design",
    "living room interior design",
    "turnkey interior solutions",
    "interior design services Korba",
    "interior design services Chhattisgarh",
    "premium interior website",
    "interior quote website",
    "interior billing page",
    "Global Computers interior demo",
  ],
  alternates: {
    canonical: pageUrl,
  },
  applicationName: "Interior Design Demo",
  category: "Interior Design",
  referrer: "origin-when-cross-origin",
  creator: "Global Computers & IT Solutions",
  publisher: "Global Computers & IT Solutions",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title:
      "Interior Design Website Demo | Premium Home, Office & Modular Interior Solutions",
    description:
      "Explore a premium interior design website demo built to attract home, office, shop, and showroom clients with high-conversion layout, strong trust signals, and WhatsApp-first lead flow.",
    siteName: "Global Computers & IT Solutions",
    locale: "en_IN",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Interior Design Website Demo by Global Computers & IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Interior Design Website Demo | Premium Home, Office & Modular Interior Solutions",
    description:
      "Premium interior design website demo with strong SEO, conversion-focused sections, and trust-building UI for real business leads.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "theme-color": "#f8f5ef",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f5ef",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Global Computers & IT Solutions - Interior Design Demo",
  url: pageUrl,
  image: `${siteUrl}/icon.png`,
  telephone: "+91-9752422686",
  areaServed: ["Korba", "Bilaspur", "Raipur", "Chhattisgarh", "India"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Korba",
    addressRegion: "Chhattisgarh",
    addressCountry: "IN",
  },
  description:
    "Interior design website demo for homes, offices, modular kitchens, wardrobes, false ceilings, and turnkey projects.",
  priceRange: "₹₹",
  sameAs: ["https://globalcomputers.net"],
};

export default function InteriorLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="interior-shell">
        <div className="interior-bg" aria-hidden="true" />
        <Header />
        <main className="interior-main">{children}</main>
        <Footer />
      </div>
    </>
  );
}