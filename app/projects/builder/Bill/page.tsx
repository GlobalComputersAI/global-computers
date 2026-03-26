import type { Metadata } from "next";
import BillGeneratorClient from "./BillGeneratorClient";

export const metadata: Metadata = {
  title: "Builder Billing & Invoice Generator | Real Estate Bill Page",
  description:
    "Generate builder bills and invoices for flats, villas, plots, and commercial properties with customer details, payment breakup, taxes, totals, and print-ready invoice format.",
  keywords: [
    "builder invoice generator",
    "builder bill generator",
    "real estate invoice page",
    "property invoice generator",
    "builder customer bill",
    "flat booking invoice",
    "plot invoice generator",
    "builder payment invoice",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/builder/Bill/",
  },
  openGraph: {
    title: "Builder Billing & Invoice Generator | Real Estate Bill Page",
    description:
      "Generate builder invoices with customer details, amount breakup, tax, totals, and print-ready layout.",
    url: "https://globalcomputers.net/projects/builder/Bill/",
    type: "website",
    siteName: "Global Computers & IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Builder Billing & Invoice Generator | Real Estate Bill Page",
    description:
      "Builder billing and invoice generator with print-ready professional invoice layout.",
  },
};

export default function BuilderBillPage() {
  return <BillGeneratorClient />;
}