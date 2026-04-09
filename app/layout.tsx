import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

/* =========================
   Fonts
========================= */
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

/* =========================
   Site Constants
========================= */
const SITE_URL = "https://globalcomputers.net";
const SITE_NAME = "Global Computers & IT Solutions";
const DEFAULT_TITLE =
  "Global Computers & IT Solutions | Website, Billing Software, Hardware & AMC Since 2004";
const DEFAULT_DESCRIPTION =
  "Global Computers & IT Solutions helps businesses with website development, GST billing software, IT hardware supply, CCTV, networking, AMC, cloud and on-premise IT support across Chhattisgarh and India.";
const OG_IMAGE = `${SITE_URL}/logo_header_svr.png`;

const BUSINESS_PHONE = "+91-9827164811";
const BUSINESS_PHONE_CLEAN = "+919827164811";
const BUSINESS_EMAIL = "infoglobalcomputersit@gmail.com";

const BUSINESS_ADDRESS = {
  streetAddress:
    "Main Road, Jamnipali Road, near HDFC Bank, SVBP Nagar, Jamnipali",
  addressLocality: "Korba",
  addressRegion: "Chhattisgarh",
  postalCode: "495450",
  addressCountry: "IN",
};

/* =========================
   Global SEO Metadata
========================= */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: DEFAULT_TITLE,
    template: "%s | Global Computers & IT Solutions",
  },

  description: DEFAULT_DESCRIPTION,

  keywords: [
    "Global Computers Korba",
    "Global Computers Chhattisgarh",
    "website development Korba",
    "website development Chhattisgarh",
    "business website India",
    "GST billing software Korba",
    "billing software Chhattisgarh",
    "IT hardware supplier Korba",
    "IT hardware supplier Chhattisgarh",
    "AMC services Korba",
    "computer AMC Chhattisgarh",
    "CCTV installation Korba",
    "networking services Korba",
    "software solutions India",
    "IT manpower services India",
    "cloud and on-premise IT support",
  ],

  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",

  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: ["/icon.png"],
    apple: [{ url: "/icon.png", type: "image/png" }],
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    locale: "en_IN",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Global Computers & IT Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
  },

  verification: {
    google: "oompRcLYbbjL4DL4SgCyigSyDoy96U82w3xHVYu5Jqo",
  },
};

/* =========================
   Viewport
========================= */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

/* =========================
   Structured Data
========================= */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: OG_IMAGE,
  },
  email: BUSINESS_EMAIL,
  telephone: BUSINESS_PHONE_CLEAN,
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  address: {
    "@type": "PostalAddress",
    ...BUSINESS_ADDRESS,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: BUSINESS_PHONE_CLEAN,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
      email: BUSINESS_EMAIL,
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ComputerStore",
  "@id": `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  image: [OG_IMAGE],
  url: SITE_URL,
  email: BUSINESS_EMAIL,
  telephone: BUSINESS_PHONE_CLEAN,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    ...BUSINESS_ADDRESS,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.3595,
    longitude: 82.7501,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Korba",
    },
    {
      "@type": "State",
      name: "Chhattisgarh",
    },
    {
      "@type": "Country",
      name: "India",
    },
  ],
  sameAs: [],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Website Development",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "GST Billing Software",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "IT Hardware Supply",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "AMC and IT Support Services",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "CCTV and Networking Solutions",
      },
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  inLanguage: "en-IN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [
    organizationSchema,
    localBusinessSchema,
    websiteSchema,
  ];

  return (
    <html
      lang="en"
      className="scroll-smooth"
      data-scroll-behavior="smooth"
    >
      <body
        suppressHydrationWarning
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          bg-slate-50
          text-slate-900
          antialiased
          selection:bg-blue-600/20
          selection:text-blue-950
        `}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}