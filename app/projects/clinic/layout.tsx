import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const siteUrl = "https://globalcomputers.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Clinic Website Demo | Doctor Appointment, Billing & Patient Website",
    template: "%s | Clinic Website Demo",
  },
  description:
    "Premium clinic website demo for doctors, dental clinics, skin clinics, diagnostic centers, and healthcare businesses. Includes appointment booking, WhatsApp inquiry, billing page, contact page, and high-conversion patient-focused design.",
  keywords: [
    "clinic website demo",
    "doctor website demo",
    "medical clinic website",
    "hospital website design",
    "doctor appointment website",
    "clinic billing website",
    "healthcare website demo",
    "medical practice website India",
    "clinic website design Korba",
    "clinic website development Chhattisgarh",
  ],
  alternates: {
    canonical: `${siteUrl}/projects/clinic/`,
  },
  openGraph: {
    title: "Clinic Website Demo | Doctor Appointment, Billing & Patient Website",
    description:
      "Modern clinic website demo with appointment booking, billing, contact page, services, and WhatsApp-first lead conversion.",
    url: `${siteUrl}/projects/clinic/`,
    siteName: "Global Computers & IT Solutions",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinic Website Demo | Doctor Appointment, Billing & Patient Website",
    description:
      "High-conversion clinic website demo for doctors, clinics, and healthcare businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "Healthcare",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function ClinicLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="clinic-shell">
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>

          <div className="top-strip">
            <div className="container top-strip-inner">
              <div className="top-strip-left">
                <span>Same-Day Appointments</span>
                <span>Trusted Patient Care</span>
                <span>Clean & Modern Clinic Experience</span>
              </div>
              <div className="top-strip-right">
                <a href="tel:+919752422686">Call: +91 97524 22686</a>
              </div>
            </div>
          </div>

          <Header />

          <main id="main-content" className="clinic-main">
            {children}
          </main>

          <Footer />

          <a
            href="https://wa.me/919752422686?text=Hi%20I%20want%20to%20book%20a%20clinic%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="floating-whatsapp"
            aria-label="Chat on WhatsApp"
          >
            <span className="wa-icon">✆</span>
            <span className="wa-text">Book on WhatsApp</span>
          </a>
        </div>
      </body>
    </html>
  );
}