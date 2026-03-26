import type { Metadata } from "next";
import BillingGeneratorClient from "./BillingGeneratorClient";

export const metadata: Metadata = {
  title: "Admission Fees & Invoice Generator | Coaching Institute Website Demo",
  description:
    "Premium coaching admission and billing page with fee structure, payment summary, and student invoice generator. Built for coaching institutes, tuition classes, and education centers.",
  keywords: [
    "coaching billing page",
    "coaching invoice generator",
    "tuition fee receipt page",
    "admission fees coaching website",
    "student invoice generator",
    "coaching institute billing page",
    "tuition receipt generator",
    "education website billing demo",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/coaching/billing/",
  },
  openGraph: {
    title: "Admission Fees & Invoice Generator | Coaching Institute Website Demo",
    description:
      "Premium coaching billing page with student invoice generator, fee plan table, payment summary, and WhatsApp admission CTA.",
    url: "https://globalcomputers.net/projects/coaching/billing/",
    type: "website",
    siteName: "Global Computers & IT Solutions",
  },
};

export default function CoachingBillingPage() {
  return <BillingGeneratorClient />;
}