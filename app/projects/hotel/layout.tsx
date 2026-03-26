import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://globalcomputers.net";
const HOTEL_PATH = "/projects/hotel";
const HOTEL_URL = `${SITE_URL}${HOTEL_PATH}`;
const HOTEL_NAME = "Hotel Royal Stay";
const HOTEL_CITY = "Raipur";

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${HOTEL_NAME} | Best Hotel Stay in ${HOTEL_CITY} with Direct WhatsApp Booking`,
    template: `%s | ${HOTEL_NAME}`,
  },

  description:
    `${HOTEL_NAME} is a premium hotel website demo for ${HOTEL_CITY}, showcasing rooms, amenities, gallery, contact, and direct WhatsApp booking flow. Designed for hotels, resorts, lodges, and guest houses that want more direct enquiries and better online trust.`,

  keywords: [
    "hotel in raipur",
    "best hotel in raipur",
    "hotel rooms in raipur",
    "hotel booking raipur",
    "hotel near railway station raipur",
    "budget hotel in raipur",
    "family hotel in raipur",
    "hotel website demo",
    "hotel website design india",
    "hotel website development india",
    "hotel website with whatsapp booking",
    "hotel website for resort",
    "hotel website company chhattisgarh",
    "hotel booking website demo",
    "lodge website design india",
    "guest house website demo",
  ],

  alternates: {
    canonical: HOTEL_PATH,
  },

  openGraph: {
    type: "website",
    url: HOTEL_URL,
    title: `${HOTEL_NAME} | Best Hotel Stay in ${HOTEL_CITY} with Direct WhatsApp Booking`,
    description:
      `${HOTEL_NAME} hotel website demo includes premium rooms showcase, amenities, gallery, direct WhatsApp booking, and sales-focused design for modern hotel businesses.`,
    siteName: "Global Computers & IT Solutions",
    images: [
      {
        url: "/projects/hotel/hero.jpg",
        width: 1200,
        height: 630,
        alt: `${HOTEL_NAME} premium hotel stay demo in ${HOTEL_CITY}`,
      },
    ],
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: `${HOTEL_NAME} | Best Hotel Stay in ${HOTEL_CITY}`,
    description:
      "Premium hotel website demo with rooms, amenities, gallery, and direct WhatsApp booking flow.",
    images: ["/projects/hotel/hero.jpg"],
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

  category: "travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdHotel = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: HOTEL_NAME,
    url: HOTEL_URL,
    image: `${SITE_URL}/projects/hotel/hero.jpg`,
    description:
      `${HOTEL_NAME} is a hotel website demo for ${HOTEL_CITY} with premium rooms display, amenities, gallery, contact details, and direct WhatsApp booking flow.`,
    address: {
      "@type": "PostalAddress",
      addressLocality: HOTEL_CITY,
      addressRegion: "Chhattisgarh",
      addressCountry: "IN",
    },
    telephone: "+91 97524 22686",
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Free Wi-Fi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Parking",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Family Friendly",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Direct WhatsApp Booking",
        value: true,
      },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${HOTEL_NAME} Hotel Website Demo`,
    url: HOTEL_URL,
    description:
      "Premium hotel website demo with rooms, gallery, amenities, contact page, and direct WhatsApp lead flow.",
    isPartOf: {
      "@type": "WebSite",
      name: "Global Computers & IT Solutions",
      url: SITE_URL,
    },
    inLanguage: "en-IN",
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-white antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHotel) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
        />

        <Header
          brand={HOTEL_NAME}
          city={HOTEL_CITY}
          tagline="Luxury Stay • Family Comfort • Easy Booking"
          callLink="tel:+919752422686"
          waLink="https://wa.me/919752422686?text=Hi%20I%20want%20to%20book%20a%20room.%20Please%20share%20availability%20and%20price."
        />

        <main className="min-h-[70vh]">{children}</main>

        <Footer
          brand={HOTEL_NAME}
          city={HOTEL_CITY}
          tagline="Luxury Stay • Family Comfort • Easy Booking"
          address="Main Road, Near Railway Station, Raipur, Chhattisgarh"
          callLink="tel:+919752422686"
          waLink="https://wa.me/919752422686?text=Hi%20I%20want%20to%20book%20a%20room.%20Please%20share%20availability%20and%20price."
          mapEmbed="https://www.google.com/maps?q=Raipur%20Railway%20Station&output=embed"
        />
      </body>
    </html>
  );
}