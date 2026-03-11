import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

/* =========================
   Fonts (Performance-first)
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
   Metadata (SEO 10/10)
========================= */
export const metadata: Metadata = {
  metadataBase: new URL("https://globalcomputers.net"),

  title: {
    default: "Global Computers & IT Solutions",
    template: "%s | Global Computers & IT Solutions",
  },

  description:
    "Global Computers & IT Solutions is a trusted Indian IT company delivering IT hardware supply, custom software development, IT manpower services, AMC, and turnkey IT projects for PSUs and private enterprises.",

  keywords: [
    "Global Computers",
    "IT hardware supplier India",
    "PSU IT vendor",
    "Government IT projects",
    "Customized software development",
    "IT manpower services",
    "AMC IT services",
    "Turnkey IT projects",
  ],

  authors: [{ name: "Global Computers & IT Solutions" }],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "https://globalcomputers.net",
    title: "Global Computers & IT Solutions",
    description:
      "Trusted IT partner for PSUs and enterprises in India — hardware, software, manpower & AMC services.",
    siteName: "Global Computers & IT Solutions",
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
      "IT hardware, software solutions, IT manpower & AMC services for PSUs and enterprises.",
    images: ["/logo_header_svr.png"],
  },
};

/* =========================
   Root Layout
========================= */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
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
        {/* =========================
            Organization Schema (SEO)
        ========================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Global Computers & IT Solutions",
              alternateName: "Global Computers",
              url: "https://globalcomputers.net",
              logo: "https://globalcomputers.net/logo_header_svr.png",
              description:
                "Global Computers & IT Solutions provides IT hardware supply, customized software development, IT manpower services, annual maintenance contracts (AMC), and turnkey IT projects for PSUs and private organizations in India.",
              foundingLocation: {
                "@type": "Country",
                name: "India",
              },
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              knowsAbout: [
                "IT Hardware Supply",
                "Customized Software Development",
                "On-Premise Software Solutions",
                "IT Manpower Services",
                "Annual Maintenance Contract",
                "PSU IT Projects",
                "Government IT Infrastructure",
              ],
            }),
          }}
        />

        {/* =========================
            Layout Structure
        ========================= */}
        <Header />

        <main className="min-h-screen pt-2">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
