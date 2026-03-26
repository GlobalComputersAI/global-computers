import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact for GST Billing Software Demo",
  description:
    "Contact Global Computers & IT Solutions for GST Billing and Inventory Software demo, pricing, on-prem setup, hardware integration, printer setup, backup planning, and support.",
  keywords: [
    "contact GST billing software",
    "billing software demo contact",
    "inventory software quote India",
    "GST software support",
    "on-prem billing software setup",
    "printer setup billing software",
    "billing software contact Chhattisgarh",
    "Global Computers contact",
  ],
  alternates: {
    canonical: "/projects/gst-inventory/contact/",
  },
  openGraph: {
    title: "Contact for GST Billing Software Demo",
    description:
      "Get demo, pricing, setup guidance, hardware integration, and support for GST billing and inventory software.",
    url: "/projects/gst-inventory/contact/",
    siteName: "Global Computers & IT Solutions",
    type: "website",
    images: [
      {
        url: "/projects/gst-inventory/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact for GST Billing Software Demo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact for GST Billing Software Demo",
    description:
      "Request demo, pricing, on-prem setup, printer setup, backup planning, and support.",
    images: ["/projects/gst-inventory/og-image.jpg"],
  },
};

export default function Page() {
  return <ContactPageClient />;
}