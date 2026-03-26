import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://globalcomputers.net"),
  title: {
    default: "Coaching Institute Website Demo | Admission, Courses, Results",
    template: "%s | BrightFuture Coaching Demo",
  },
  description:
    "Professional coaching institute website demo with admission enquiry, courses, results, fee details, and contact page. SEO-ready, mobile-friendly, and built for high student enquiry conversion.",
  keywords: [
    "coaching website demo",
    "coaching institute website design",
    "tuition classes website",
    "admission website demo",
    "education website design India",
    "student admission page",
    "coaching class website with WhatsApp",
    "result showcase website",
    "course page website",
    "school coaching website",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/coaching/",
  },
  openGraph: {
    title: "Coaching Institute Website Demo | Admission, Courses, Results",
    description:
      "SEO-ready coaching institute website demo with admission enquiry, course details, result showcase, fee page, and WhatsApp conversion flow.",
    url: "https://globalcomputers.net/projects/coaching/",
    siteName: "Global Computers & IT Solutions",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Coaching Institute Website Demo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coaching Institute Website Demo | Admission, Courses, Results",
    description:
      "High-conversion coaching institute website demo with SEO-ready pages and WhatsApp enquiry flow.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "education",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "BrightFuture Coaching",
  url: "https://globalcomputers.net/projects/coaching/",
  logo: "https://globalcomputers.net/icon.png",
  description:
    "Professional coaching institute demo website with student admission enquiry, course pages, result showcase, and contact details.",
  telephone: "+91-9752422686",
  areaServed: "India",
  sameAs: ["https://globalcomputers.net/projects/coaching/"],
};

export default function CoachingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="site-shell">
          <Header />
          <main id="main-content" className="site-main">
            {children}
          </main>
          <Footer />
        </div>

        {/* Floating CTA */}
        <div className="floating-cta">
          <a
            href="tel:+919752422686"
            className="floating-call"
            aria-label="Call now"
          >
            Call
          </a>
          <a
            href="https://wa.me/919752422686?text=Hi%20I%20want%20admission%20details%20for%20your%20coaching%20institute."
            target="_blank"
            rel="noreferrer"
            className="floating-whatsapp"
            aria-label="Chat on WhatsApp"
          >
            WhatsApp
          </a>
        </div>
      </body>
    </html>
  );
}