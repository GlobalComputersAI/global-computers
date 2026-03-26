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
   Global SEO Metadata
========================= */
export const metadata: Metadata = {
  metadataBase: new URL("https://globalcomputers.net"),

  title: {
    default: "Global Computers & IT Solutions",
    template: "%s | Global Computers & IT Solutions",
  },

  description:
    "Global Computers & IT Solutions is a trusted Indian IT company providing website development, billing software, custom software development, IT hardware supply, IT workforce services, AMC, CCTV, biometrics, networking, and turnkey IT solutions for businesses, PSUs, and enterprises.",

  keywords: [
    "Global Computers",
    "Global Computers Korba",
    "IT company in Chhattisgarh",
    "website development company",
    "billing software",
    "inventory software",
    "POS software India",
    "IT hardware supplier India",
    "computer supplier Chhattisgarh",
    "PSU IT vendor",
    "government IT projects",
    "custom software development",
    "IT manpower services",
    "AMC IT services",
    "turnkey IT projects",
    "networking solutions",
    "CCTV installation",
    "biometric systems",
  ],

  authors: [{ name: "Global Computers & IT Solutions" }],
  creator: "Global Computers & IT Solutions",
  publisher: "Global Computers & IT Solutions",

  alternates: {
    canonical: "https://globalcomputers.net",
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
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    type: "website",
    url: "https://globalcomputers.net",
    siteName: "Global Computers & IT Solutions",
    title: "Global Computers & IT Solutions",
    description:
      "Trusted IT partner for websites, software, hardware supply, AMC, CCTV, biometrics, networking, and enterprise solutions across India.",
    locale: "en_IN",
    images: [
      {
        url: "/logo_header_svr.png",
        width: 1200,
        height: 630,
        alt: "Global Computers & IT Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Global Computers & IT Solutions",
    description:
      "Websites, software, IT hardware, AMC, networking, CCTV, biometrics, and enterprise IT solutions.",
    images: ["/logo_header_svr.png"],
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
  colorScheme: "light",
};

/* =========================
   Structured Data
========================= */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Global Computers & IT Solutions",
  alternateName: "Global Computers",
  url: "https://globalcomputers.net",
  logo: "https://globalcomputers.net/logo_header_svr.png",
  email: "info@globalcomputers.net",
  telephone: "+91-9827164811",
  description:
    "Global Computers & IT Solutions provides website development, software development, IT hardware supply, IT workforce services, AMC, networking, CCTV, biometric systems, and turnkey IT projects for businesses, PSUs, and enterprises in India.",
  foundingLocation: {
    "@type": "Country",
    name: "India",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9752422686",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-9827164811",
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  sameAs: [],
  knowsAbout: [
    "Website Development",
    "SEO Services",
    "Billing Software",
    "Inventory Software",
    "Customized Software Development",
    "IT Hardware Supply",
    "IT Workforce Services",
    "Annual Maintenance Contract",
    "PSU IT Projects",
    "Government IT Infrastructure",
    "Networking Solutions",
    "CCTV Installation",
    "Biometric Systems",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ComputerStore",
  name: "Global Computers & IT Solutions",
  image: "https://globalcomputers.net/logo_header_svr.png",
  url: "https://globalcomputers.net",
  telephone: "+91-9827164811",
  email: "info@globalcomputers.net",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Main Road, Jamnipali Road, near HDFC Bank, SVBP Nagar, Jamnipali",
    addressLocality: "Korba",
    addressRegion: "Chhattisgarh",
    postalCode: "495450",
    addressCountry: "IN",
  },
  areaServed: "India",
  priceRange: "₹₹",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "19:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          bg-slate-50
          text-slate-800
          selection:bg-blue-600/20
          selection:text-blue-900
        `}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        <Header />
        <main className="min-h-screen pt-2">{children}</main>
        <Footer />
      </body>
    </html>
  );
}