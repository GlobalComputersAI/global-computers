import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const siteUrl = "https://globalcomputers.net/projects/mobile";

export const metadata: Metadata = {
  metadataBase: new URL("https://globalcomputers.net"),
  title: {
    default: "Mobile Shop Website Demo | Mobile Sales, Repair, Accessories & Billing",
    template: "%s | Mobile Shop Demo",
  },
  description:
    "Premium mobile shop website demo for smartphone stores, repair centers, and accessories businesses. Show products, repair services, billing, WhatsApp enquiry, and local trust with a high-converting design.",
  keywords: [
    "mobile shop website demo",
    "mobile repair website demo",
    "smartphone shop website",
    "mobile accessories website",
    "mobile billing website",
    "mobile store website India",
    "mobile repair shop website",
    "phone shop website demo",
    "mobile website design",
    "mobile shop website Korba",
    "mobile shop website Chhattisgarh",
    "electronics shop website demo",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Mobile Shop Website Demo | Mobile Sales, Repair, Accessories & Billing",
    description:
      "A modern, high-converting mobile shop website demo built for smartphone sales, repair services, accessories showcase, billing, and WhatsApp lead generation.",
    url: siteUrl,
    siteName: "Global Computers & IT Solutions",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Shop Website Demo | Mobile Sales, Repair, Accessories & Billing",
    description:
      "Modern mobile shop website demo with product showcase, service pages, billing, and WhatsApp-first customer conversion.",
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

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Global Computers & IT Solutions",
  url: "https://globalcomputers.net",
  logo: "https://globalcomputers.net/icon.png",
  telephone: "+91-9752422686",
  areaServed: "India",
  sameAs: [],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mobile Shop Website Demo",
  provider: {
    "@type": "Organization",
    name: "Global Computers & IT Solutions",
    url: "https://globalcomputers.net",
  },
  areaServed: "India",
  serviceType: "Mobile Shop Website Design and Business Demo",
  description:
    "Mobile shop website demo for mobile stores, smartphone retailers, repair centers, and accessories businesses with WhatsApp enquiry, billing view, and local SEO-friendly structure.",
};

export default function MobileLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />

        <div className="site-shell">
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>

          <Header />

          <main id="main-content" className="site-main">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}