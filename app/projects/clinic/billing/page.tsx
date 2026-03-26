import type { Metadata } from "next";
import BillingGeneratorClient from "./BillingGeneratorClient";

export const metadata: Metadata = {
  title: "Clinic Billing Page Demo | Medical Invoice Generator & Patient Bill",
  description:
    "Premium clinic billing page demo with real invoice generation for patients. Create consultation bills, treatment invoices, payment summaries, discounts, taxes, and printable medical bills in a professional clinic format.",
  keywords: [
    "clinic billing page",
    "medical invoice generator",
    "doctor bill generator",
    "patient invoice page",
    "clinic bill print page",
    "medical billing website demo",
    "doctor invoice page",
    "clinic billing software demo",
    "clinic website development Korba",
    "clinic website development Chhattisgarh",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/clinic/billing/",
  },
  openGraph: {
    title: "Clinic Billing Page Demo | Medical Invoice Generator & Patient Bill",
    description:
      "Professional clinic billing page with real invoice generation, consultation charges, treatment items, discounts, taxes, and printable patient bill layout.",
    url: "https://globalcomputers.net/projects/clinic/billing/",
    type: "website",
    siteName: "Global Computers & IT Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinic Billing Page Demo | Medical Invoice Generator & Patient Bill",
    description:
      "Generate professional clinic invoices with a premium billing page demo.",
  },
};

export default function ClinicBillingPage() {
  return <BillingGeneratorClient />;
}