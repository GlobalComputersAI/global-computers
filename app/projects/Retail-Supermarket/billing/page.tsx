import type { Metadata } from "next";
import BillingGeneratorClient from "./BillingGeneratorClient";

const PAGE_URL = "https://globalcomputers.net/projects/retail-supermarket/billing";

export const metadata: Metadata = {
  title:
    "Retail Supermarket Billing Page | Generate GST Bill, Invoice & Printable Customer Receipt",
  description:
    "Generate professional retail supermarket bills and printable invoices for grocery stores, kirana shops, mini marts and supermarkets. Create customer bills, add items, calculate GST, print invoice and share with clients.",
  keywords: [
    "retail supermarket billing page",
    "supermarket invoice generator",
    "grocery store bill generator",
    "kirana shop invoice",
    "GST bill generator retail",
    "printable supermarket invoice",
    "customer bill supermarket",
    "retail billing demo",
    "mini mart invoice page",
    "supermarket billing website",
    "grocery invoice software demo",
    "Global Computers billing demo",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title:
      "Retail Supermarket Billing Page | Generate GST Bill & Printable Invoice",
    description:
      "Create printable supermarket bills and invoices with customer details, item list, GST, totals and professional receipt layout.",
    url: PAGE_URL,
    type: "website",
    siteName: "Global Computers & IT Solutions",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Retail Supermarket Billing Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Retail Supermarket Billing Page | Generate GST Bill & Printable Invoice",
    description:
      "Professional supermarket bill generator with item rows, GST calculation, printable invoice and customer-ready receipt.",
    images: ["/icon.png"],
  },
};

export default function RetailSupermarketBillingPage() {
  return <BillingGeneratorClient />;
}