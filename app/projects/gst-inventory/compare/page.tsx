import type { Metadata } from "next";
import ComparePageClient from "./ComparePageClient";

export const metadata: Metadata = {
  title: "Compare GST Billing Software Options",
  description:
    "Compare Tally, generic market software, and our premium GST Billing and Inventory Software. See differences in UI, billing speed, inventory, reports, on-prem setup, offline support, printer setup, and upgrade options.",
  keywords: [
    "compare GST billing software",
    "Tally vs billing software",
    "inventory software comparison",
    "billing software comparison India",
    "on-prem billing software",
    "offline billing software",
    "printer setup billing software",
    "custom billing software India",
    "GST billing software comparison",
  ],
  alternates: {
    canonical: "/projects/gst-inventory/compare/",
  },
  openGraph: {
    title: "Compare GST Billing Software Options",
    description:
      "Compare Tally, generic software, and our premium GST billing and inventory system for business workflow, billing speed, stock control, and upgrades.",
    url: "/projects/gst-inventory/compare/",
    siteName: "Global Computers & IT Solutions",
    type: "website",
    images: [
      {
        url: "/projects/gst-inventory/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Compare GST Billing Software Options",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare GST Billing Software Options",
    description:
      "See practical differences between Tally, generic software, and our premium GST billing and inventory system.",
    images: ["/projects/gst-inventory/og-image.jpg"],
  },
};

export default function Page() {
  return <ComparePageClient />;
}