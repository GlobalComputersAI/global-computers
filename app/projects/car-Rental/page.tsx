import type { Metadata } from "next";
import CarRentalHomeClient from "./CarRentalHomeClient";
import DemoVideoPopup from "@/components/DemoVideoPopup";

const SITE_URL = "https://globalcomputers.net";
const PAGE_URL = `${SITE_URL}/projects/car-Rental/`;
const OG_IMAGE = `${SITE_URL}/logo_header_svr.png`;

export const metadata: Metadata = {
  title:
    "Car Rental Website Demo India | Taxi Booking Website Design in Korba, Bilaspur, Raipur",
  description:
    "Premium car rental and taxi booking website demo for travel businesses, tour operators and cab services. Website design service available in Korba, Bilaspur, Raipur, Chhattisgarh and across India with WhatsApp enquiry, booking flow, rate card, billing page and SEO-ready sections.",
  keywords: [
    "car rental website demo",
    "taxi booking website demo India",
    "car rental website design India",
    "taxi website design India",
    "cab booking website demo",
    "travel website design India",
    "car rental website Korba",
    "car rental website Bilaspur",
    "car rental website Raipur",
    "taxi website Chhattisgarh",
    "travel agency website demo",
    "WhatsApp booking website",
    "SEO ready taxi website",
    "cab service website with WhatsApp",
    "car rental business website",
  ],
  alternates: {
    canonical: PAGE_URL,
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
    title:
      "Car Rental Website Demo India | Taxi Booking Website Design in Korba, Bilaspur, Raipur",
    description:
      "Premium car rental and taxi booking website demo with booking flow, WhatsApp enquiry, rate card, billing page and SEO-ready travel sections.",
    url: PAGE_URL,
    siteName: "Global Computers & IT Solutions",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Car Rental Website Demo by Global Computers & IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Car Rental Website Demo India | Taxi Booking Website Design in Korba, Bilaspur, Raipur",
    description:
      "Premium car rental and taxi booking website demo with WhatsApp enquiry, rate card, booking flow and billing page.",
    images: [OG_IMAGE],
  },
  category: "technology",
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Car Rental Website Design Demo",
      description:
        "Premium car rental and taxi booking website demo with booking flow, WhatsApp enquiry, billing page, pricing sections and mobile-friendly design.",
      provider: {
        "@type": "Organization",
        name: "Global Computers & IT Solutions",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
      },
      serviceType: "Car Rental and Taxi Website Design",
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "State", name: "Chhattisgarh" },
        { "@type": "City", name: "Korba" },
        { "@type": "City", name: "Bilaspur" },
        { "@type": "City", name: "Raipur" },
      ],
      url: PAGE_URL,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projects",
          item: `${SITE_URL}/projects/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Car Rental Website Demo",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "VideoObject",
      name: "Car Rental Website Demo",
      description:
        "Premium car rental and taxi booking website demo with booking flow, WhatsApp enquiry and billing sections.",
      contentUrl: `${SITE_URL}/videos/final_car-rental.mp4`,
      embedUrl: PAGE_URL,
      thumbnailUrl: [`${SITE_URL}/logo.png`],
      uploadDate: "2026-04-01",
      publisher: {
        "@type": "Organization",
        name: "Global Computers & IT Solutions",
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.png`,
        },
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <CarRentalHomeClient />

      <DemoVideoPopup
        videoSrc="/videos/final_car-rental.mp4"
        title="Car Rental Website Demo"
        buttonLabel="See Demo"
        autoOpen={true}
        autoOpenDelay={300}
        showButton={true}
        rememberAutoOpen={false}
        storageKey="car-rental-demo-popup-v9"
        poster="/projects/car-Rental/images/audi.jpg"
      />
    </>
  );
}