import type { Metadata } from "next";
import BillingGeneratorClient from "./BillingGeneratorClient";

export const metadata: Metadata = {
  title:
    "Computer Billing Demo | Invoice Generator for Laptop, Desktop, Printer, CCTV & IT Services",
  description:
    "Premium computer billing page demo with invoice generator for laptop dealers, desktop sellers, printer shops, CCTV businesses, repair centers, AMC providers, and IT solution companies.",
  keywords: [
    "computer billing demo",
    "invoice generator website",
    "computer shop invoice page",
    "GST billing page demo",
    "printer invoice generator",
    "repair invoice page",
    "CCTV billing website",
    "computer quotation page",
    "IT services invoice demo",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/computer/billing/",
  },
  openGraph: {
    title:
      "Computer Billing Demo | Invoice Generator for Computer & IT Businesses",
    description:
      "Premium billing and invoice generator demo page for computer shops, repair centers, printer businesses, CCTV providers, and IT services.",
    url: "https://globalcomputers.net/projects/computer/billing/",
    type: "website",
    siteName: "Global Computers & IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Computer Billing Demo | Invoice Generator for Computer & IT Businesses",
    description:
      "Premium invoice generator demo for computer shops, IT hardware sellers, repair businesses, and AMC providers.",
  },
};

export default function ComputerBillingPage() {
  return <BillingGeneratorClient />;
}