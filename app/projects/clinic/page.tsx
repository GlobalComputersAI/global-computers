import type { Metadata } from "next";
import Link from "next/link";
import DemoVideoPopup from "@/components/DemoVideoPopup";

const SITE_URL = "https://globalcomputers.net";
const PAGE_URL = `${SITE_URL}/projects/clinic/`;

export const metadata: Metadata = {
  title:
    "Clinic Website Demo India | Doctor Website Design in Korba, Bilaspur, Raipur",
  description:
    "Premium clinic website demo for doctors, dental clinics, skin clinics, diagnostic centers and healthcare businesses. Includes appointment booking, services, billing, contact page, WhatsApp inquiry and mobile-friendly patient-focused design for Korba, Bilaspur, Raipur, Chhattisgarh and across India.",
  keywords: [
    "clinic website demo",
    "doctor website demo",
    "medical website design",
    "clinic website design India",
    "doctor appointment website",
    "clinic billing website",
    "patient booking website",
    "medical clinic website demo",
    "clinic website development Korba",
    "clinic website development Bilaspur",
    "clinic website development Raipur",
    "clinic website development Chhattisgarh",
    "doctor website design India",
    "clinic website with WhatsApp",
    "healthcare website demo India",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title:
      "Clinic Website Demo India | Doctor Website Design in Korba, Bilaspur, Raipur",
    description:
      "Modern clinic website demo with appointment booking, service pages, billing page, contact page and WhatsApp-first lead conversion.",
    url: PAGE_URL,
    type: "website",
    siteName: "Global Computers & IT Solutions",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/logo_header_svr.png`,
        width: 1200,
        height: 630,
        alt: "Clinic Website Demo - Global Computers & IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Clinic Website Demo India | Doctor Website Design in Korba, Bilaspur, Raipur",
    description:
      "Premium healthcare website demo for clinics, doctors and medical practices.",
    images: [`${SITE_URL}/logo_header_svr.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const WHATSAPP_BOOK =
  "https://wa.me/919752422686?text=Hi%20I%20want%20to%20book%20a%20clinic%20appointment.";
const WHATSAPP_DEMO =
  "https://wa.me/919752422686?text=Hi%20I%20saw%20your%20clinic%20website%20demo.%20I%20want%20a%20similar%20website%20for%20my%20clinic.";
const CALL_LINK = "tel:+919752422686";

const services = [
  {
    title: "General Consultation",
    text: "Fast and professional consultation for fever, cough, weakness, infections, body pain, and routine health concerns.",
  },
  {
    title: "Child & Family Care",
    text: "Friendly care for children, adults, and senior citizens with a patient-first and family-focused treatment approach.",
  },
  {
    title: "Preventive Health Checkups",
    text: "Regular health monitoring, early symptom detection, and guidance for long-term wellness and healthy lifestyle management.",
  },
  {
    title: "Follow-Up & Ongoing Care",
    text: "Structured follow-up visits, prescription continuity, and long-term health management for repeat patients.",
  },
  {
    title: "Digital Appointment Booking",
    text: "Patients can quickly call, WhatsApp, or request an appointment online without confusion or delay.",
  },
  {
    title: "Billing & Patient Records",
    text: "Simple billing, service summary, and organized patient details for a more professional clinic experience.",
  },
];

const trustPoints = [
  "Clean & Professional Clinic Experience",
  "Easy Appointment Booking",
  "WhatsApp Inquiry Integration",
  "Mobile-Friendly Design",
  "Fast Loading Pages",
  "Modern Patient-Focused Layout",
];

const whyThisWorks = [
  {
    title: "Builds Trust Fast",
    text: "Patients decide quickly. A clean clinic website with doctor details, services, timings, and contact info creates instant confidence.",
  },
  {
    title: "Generates More Calls",
    text: "Direct call and WhatsApp buttons reduce friction and help more visitors convert into appointment inquiries.",
  },
  {
    title: "Looks Premium",
    text: "A professional digital presence makes the clinic appear modern, organized, and more reliable than local competitors.",
  },
  {
    title: "Saves Staff Time",
    text: "Visitors can check timings, services, location, and billing details before calling, which reduces repetitive questions.",
  },
];

const demoPages = [
  {
    title: "Home",
    href: "/projects/clinic/",
    desc: "Premium homepage designed to build trust, explain services, and push more appointment inquiries.",
  },
  {
    title: "Contact Us",
    href: "/projects/clinic/contact/",
    desc: "Location, phone, timings, and direct WhatsApp inquiry flow for quick patient action.",
  },
  {
    title: "Billing",
    href: "/projects/clinic/billing/",
    desc: "Professional medical billing page demo for patient invoices and clinic payment presentation.",
  },
  {
    title: "Services",
    href: "/projects/clinic/services/",
    desc: "Dedicated treatment and service page to explain what the clinic offers in a clear conversion-friendly way.",
  },
  {
    title: "Appointment",
    href: "/projects/clinic/appointment/",
    desc: "Fast doctor booking page with timings, consultation CTA, and strong patient conversion flow.",
  },
];

const faqs = [
  {
    q: "Who is this clinic website demo for?",
    a: "This demo is ideal for doctors, dental clinics, skin clinics, pediatric clinics, pathology centers, physiotherapy clinics, and local healthcare practices.",
  },
  {
    q: "Can this website be customized for a real clinic?",
    a: "Yes. Clinic name, doctor name, services, fees, address, timings, gallery, testimonials, and WhatsApp number can all be customized.",
  },
  {
    q: "Will this work on mobile phones?",
    a: "Yes. The design is fully mobile-friendly because most patients search and contact clinics from their phones.",
  },
  {
    q: "Can billing and appointment pages be added?",
    a: "Yes. This demo already supports billing and appointment-style pages and can be expanded further based on clinic needs.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Clinic Website Design Demo",
      description:
        "Premium clinic website demo with appointment booking, services, billing page, contact page and WhatsApp inquiry flow.",
      provider: {
        "@type": "Organization",
        name: "Global Computers & IT Solutions",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
      },
      serviceType: "Clinic and Doctor Website Design",
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "State", name: "Chhattisgarh" },
        { "@type": "City", name: "Korba" },
        { "@type": "City", name: "Bilaspur" },
        { "@type": "City", name: "Raipur" },
      ],
      url: PAGE_URL,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projects",
          item: `${SITE_URL}/projects/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Clinic Website Demo",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "VideoObject",
      name: "Clinic Website Demo",
      description:
        "Premium clinic website demo with appointment booking, service pages, billing page and contact flow.",
      contentUrl: `${SITE_URL}/videos/final_clinic.mp4`,
      embedUrl: PAGE_URL,
      thumbnailUrl: [`${SITE_URL}/logo.png`],
      uploadDate: "2026-04-01",
      publisher: {
        "@type": "Organization",
        name: "Global Computers & IT Solutions",
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.png`,
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
};

export default function ClinicHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Clinic Website Demo</span>

            <h1 className="hero-title">
              Modern Clinic Website That Builds Trust and Brings More Patient
              Appointments
            </h1>

            <p className="hero-subtitle">
              A premium clinic website demo for doctors and healthcare
              businesses with appointment booking, contact page, billing page,
              WhatsApp inquiry flow, and a professional design that helps
              clinics look modern and generate more patient leads.
            </p>

            <div className="hero-points">
              <span className="hero-point">Doctor-Friendly Design</span>
              <span className="hero-point">Mobile First</span>
              <span className="hero-point">WhatsApp Booking</span>
              <span className="hero-point">High Trust Layout</span>
            </div>

            <div className="btn-row mt-4">
              <a
                href={WHATSAPP_BOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Book Appointment on WhatsApp
              </a>

              <a href={CALL_LINK} className="btn btn-primary">
                Call Clinic Now
              </a>

              <a
                href={WHATSAPP_DEMO}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Want Similar Website for Your Clinic?
              </a>
            </div>

            <div className="stats">
              <div className="stat">
                <span className="stat-value">5</span>
                <span className="stat-label">Core Demo Pages</span>
              </div>
              <div className="stat">
                <span className="stat-value">24×7</span>
                <span className="stat-label">Online Presence</span>
              </div>
              <div className="stat">
                <span className="stat-value">1 Tap</span>
                <span className="stat-label">WhatsApp Action</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <h3>Why clinics need this website</h3>
            <p>
              Today patients search online before they trust a doctor or clinic.
              A strong clinic website helps your practice look established,
              professional, easy to contact, and more credible.
            </p>

            <ul className="list-clean mt-3">
              <li>Show doctor information and clinic credibility</li>
              <li>Display services and consultation flow clearly</li>
              <li>Increase direct calls and WhatsApp inquiries</li>
              <li>Reduce patient confusion about timings and location</li>
              <li>Present billing and care in a professional format</li>
            </ul>

            <div className="cta-band mt-4">
              <h3>Best for local clinics and healthcare practices</h3>
              <p>
                Perfect for physicians, dental clinics, skin specialists,
                pathology centers, physiotherapy centers, and family clinics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-0">
        <div className="container">
          <div className="badge-row">
            {trustPoints.map((item) => (
              <span className="badge" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Clinic Services Highlight</span>
          <h2 className="section-title">
            Everything a modern clinic website should show clearly
          </h2>
          <p className="section-subtitle">
            Patients want clarity before they contact a clinic. This demo is
            designed to make services, booking, timing, and trust visible within
            seconds.
          </p>

          <div className="grid grid-3 mt-4">
            {services.map((service) => (
              <article className="card" key={service.title}>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-text">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-2">
        <div className="container">
          <span className="eyebrow">Why This Demo Converts</span>
          <h2 className="section-title">
            Built to help both you and your client win
          </h2>
          <p className="section-subtitle">
            This clinic demo is not just for design. It is made to help you sell
            website projects faster and help your client get more trust, more
            calls, and more appointment inquiries.
          </p>

          <div className="grid grid-2 mt-4">
            {whyThisWorks.map((item) => (
              <article className="card" key={item.title}>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Demo Pages</span>
          <h2 className="section-title">
            Full clinic website demo with strong sales-focused page structure
          </h2>
          <p className="section-subtitle">
            A better demo closes more deals. These pages help your client see
            the value immediately and help their patients take action faster.
          </p>

          <div className="grid grid-2 mt-4">
            {demoPages.map((page) => (
              <article className="card" key={page.title}>
                <h3 className="card-title">{page.title}</h3>
                <p className="card-text">{page.desc}</p>

                <div className="mt-3">
                  <Link href={page.href} className="btn btn-outline">
                    Open {page.title} Page
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="container">
          <div className="soft-panel">
            <span className="eyebrow">Sales Section</span>
            <h2 className="section-title">
              Want this type of website for your clinic or medical practice?
            </h2>
            <p className="section-subtitle">
              This demo can be customized with your clinic name, doctor profile,
              address, service list, consultation details, gallery, patient
              testimonials, and contact number. A professional clinic website
              helps you stand out from local competitors and look more trusted.
            </p>

            <div className="btn-row mt-4">
              <a
                href={WHATSAPP_DEMO}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Get Clinic Website on WhatsApp
              </a>
              <a href={CALL_LINK} className="btn btn-primary">
                Call for Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-sm">
        <div className="container">
          <span className="eyebrow">Frequently Asked Questions</span>
          <h2 className="section-title">
            Common questions clinic owners usually ask
          </h2>

          <div className="grid grid-2 mt-4">
            {faqs.map((faq) => (
              <article className="card" key={faq.q}>
                <h3 className="card-title">{faq.q}</h3>
                <p className="card-text">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-sm">
        <div className="container">
          <div className="cta-band center">
            <h3>Ready to book or ready to build a clinic website like this?</h3>
            <p>
              Use WhatsApp for instant contact or call directly for a fast demo
              discussion.
            </p>

            <div className="btn-row mt-4" style={{ justifyContent: "center" }}>
              <a
                href={WHATSAPP_BOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Book Appointment
              </a>
              <a
                href={WHATSAPP_DEMO}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Ask for Similar Website
              </a>
            </div>
          </div>
        </div>
      </section>

      <DemoVideoPopup
        videoSrc="/videos/final_clinic.mp4"
        title="Clinic Website Demo"
        buttonLabel="See Demo"
        autoOpen={true}
        autoOpenDelay={300}
        showButton={true}
        rememberAutoOpen={false}
        storageKey="clinic-demo-popup-v1"
        poster="/images/hero-it-infrastructure.jpg"
      />
    </>
  );
}