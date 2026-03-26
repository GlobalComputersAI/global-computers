import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const SITE_NAME = "SuperMartPro";
const SITE_TITLE =
  "Retail Supermarket Website Demo | Grocery Store Website + Billing Software";
const SITE_DESCRIPTION =
  "Premium retail supermarket website demo with grocery product showcase, billing system, inventory-ready flow, WhatsApp ordering, local SEO setup, and high-conversion design for modern stores.";
const SITE_URL = "https://globalcomputers.net/projects/retail-supermarket";

export const metadata: Metadata = {
  metadataBase: new URL("https://globalcomputers.net"),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "retail supermarket website",
    "supermarket website demo",
    "grocery store website",
    "kirana store website",
    "retail billing software",
    "supermarket billing software",
    "grocery billing software",
    "inventory billing software",
    "pos billing website",
    "retail shop website India",
    "supermarket website design",
    "grocery ecommerce website",
    "WhatsApp ordering website",
    "retail software demo",
    "Global Computers retail website",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Global Computers & IT Solutions",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Retail Supermarket Website Demo by Global Computers & IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  category: "technology",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#16a34a",
  colorScheme: "light",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Global Computers & IT Solutions",
  image: "https://globalcomputers.net/icon.png",
  url: SITE_URL,
  telephone: "+91-9752422686",
  areaServed: "India",
  priceRange: "₹₹",
  description:
    "Retail supermarket website and billing software solutions for grocery stores, kirana shops, mini marts, and modern retail businesses.",
  brand: {
    "@type": "Brand",
    name: "SuperMartPro",
  },
  sameAs: ["https://globalcomputers.net"],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Retail Supermarket Website Design and Billing Software",
  name: "Retail Supermarket Website + Billing Solution",
  provider: {
    "@type": "Organization",
    name: "Global Computers & IT Solutions",
    url: "https://globalcomputers.net",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Retail shops, grocery stores, supermarkets, kirana stores",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    description:
      "Retail supermarket website demo with billing, product pages, WhatsApp ordering, and conversion-focused business design.",
  },
};

export default function RetailSupermarketLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceJsonLd),
          }}
        />

        <div className="retail-shell">
          <Header />
          <main className="retail-main">{children}</main>
          <Footer />
        </div>

        <a
          href="https://wa.me/919752422686?text=Hi%20I%20want%20a%20Retail%20Supermarket%20Website%20%2B%20Billing%20System"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp"
          aria-label="Chat on WhatsApp"
        >
          WhatsApp
        </a>
      </body>
    </html>
  );
}