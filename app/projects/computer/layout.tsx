import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://globalcomputers.net"),
  title: {
    default:
      "Computer Shop Website Demo | Laptop, Desktop, Printer, CCTV & IT Services",
    template: "%s | Computer Shop Demo",
  },
  description:
    "Premium computer shop website demo for laptop dealers, desktop sellers, printer shops, CCTV businesses, networking providers, repair centers, AMC providers, and IT solution companies. Built for trust, local SEO, and WhatsApp lead conversion.",
  keywords: [
    "computer shop website demo",
    "computer store website",
    "laptop shop website",
    "desktop dealer website",
    "printer shop website",
    "CCTV website demo",
    "computer repair website",
    "AMC website",
    "IT service website India",
    "computer website design",
    "Global Computers",
    "computer business website",
    "local SEO computer shop",
    "WhatsApp lead website",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/computer/",
  },
  openGraph: {
    title:
      "Computer Shop Website Demo | Laptop, Desktop, Printer, CCTV & IT Services",
    description:
      "A premium high-conversion website demo for computer shops and IT businesses with strong UI, trust-building sections, and WhatsApp-first lead flow.",
    url: "https://globalcomputers.net/projects/computer/",
    siteName: "Global Computers & IT Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Computer Shop Website Demo | Laptop, Desktop, Printer, CCTV & IT Services",
    description:
      "Premium demo website for computer shops, repair centers, AMC providers, CCTV businesses, and IT solution companies.",
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
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function ComputerLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a href="#computer-page-content" className="skip-link">
          Skip to content
        </a>

        <div className="site-shell">
          <Header />
          <main id="computer-page-content" className="main-shell">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}