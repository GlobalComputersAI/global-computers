import type { Metadata } from "next";
import BillingGeneratorClient from "./BillingGeneratorClient";

export const metadata: Metadata = {
  title:
    "Interior Billing & Estimate Generator | Create Interior Quote, Invoice and Client Bill",
  description:
    "Generate professional interior design quotation, estimate, and invoice for clients. Create bills for home interior, office interior, modular kitchen, bedroom, wardrobe, false ceiling, showroom, and turnkey interior projects.",
  keywords: [
    "interior billing page",
    "interior estimate generator",
    "interior quotation generator",
    "interior invoice generator",
    "home interior bill",
    "modular kitchen quotation",
    "office interior invoice",
    "turnkey interior estimate",
    "interior project billing",
    "client interior quotation",
    "interior design invoice",
    "interior billing software",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/interior/billing/",
  },
  openGraph: {
    title:
      "Interior Billing & Estimate Generator | Create Interior Quote, Invoice and Client Bill",
    description:
      "Professional interior billing and estimate generator for creating client-ready quotations, invoices, and project bills.",
    url: "https://globalcomputers.net/projects/interior/billing/",
    type: "website",
  },
};

export default function InteriorBillingPage() {
  return <BillingGeneratorClient />;
}