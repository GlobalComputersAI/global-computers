import type { Metadata } from "next";
import BillingGeneratorClient from "./BillingGeneratorClient";

export const metadata: Metadata = {
  title:
    "Mobile Shop Billing Page | Invoice Generator, GST Bill & Customer Invoice Demo",
  description:
    "Professional mobile shop billing page with invoice generator for smartphones, accessories, repair services, and customer billing. Create itemized invoices, customer details, GST-style bill view, and printable invoice format.",
  keywords: [
    "mobile shop billing page",
    "mobile invoice generator",
    "phone shop invoice page",
    "mobile repair invoice generator",
    "mobile accessories bill page",
    "GST billing mobile shop",
    "mobile store invoice demo",
    "phone invoice generator website",
    "mobile billing software demo",
    "customer invoice page mobile shop",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/mobile/billing/",
  },
  openGraph: {
    title: "Mobile Shop Billing Page | Invoice Generator & Customer Billing Demo",
    description:
      "Create professional invoices for mobile phones, accessories, and repair services with a premium mobile shop billing page demo.",
    url: "https://globalcomputers.net/mobile/billing/",
    siteName: "Global Computers & IT Solutions",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Shop Billing Page | Invoice Generator & Customer Billing Demo",
    description:
      "Modern mobile billing page with invoice generation, customer details, itemized bill, totals, and print-ready layout.",
  },
};

export default function MobileBillingPage() {
  return <BillingGeneratorClient />;
}