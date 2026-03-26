import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clinic Services Page Demo | Treatments, Consultation & Patient Care",
  description:
    "Premium clinic services page demo for doctors and healthcare businesses. Showcase treatments, consultation categories, patient care benefits, pricing highlights, and WhatsApp booking in a high-conversion design.",
  keywords: [
    "clinic services page",
    "doctor treatment page",
    "medical services website",
    "clinic treatment website demo",
    "doctor consultation page",
    "healthcare services page",
    "clinic website services section",
    "medical website design India",
    "clinic website development Korba",
    "clinic website development Chhattisgarh",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/clinic/services/",
  },
  openGraph: {
    title: "Clinic Services Page Demo | Treatments, Consultation & Patient Care",
    description:
      "Modern clinic services page demo with treatment sections, consultation highlights, patient trust blocks, and WhatsApp-first appointment flow.",
    url: "https://globalcomputers.net/projects/clinic/services/",
    type: "website",
    siteName: "Global Computers & IT Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinic Services Page Demo | Treatments, Consultation & Patient Care",
    description:
      "Professional clinic services page demo for doctors, clinics, and healthcare practices.",
  },
};

const WHATSAPP_BOOK =
  "https://wa.me/919752422686?text=Hi%20I%20want%20to%20book%20an%20appointment%20for%20clinic%20services.";
const WHATSAPP_DEMO =
  "https://wa.me/919752422686?text=Hi%20I%20saw%20your%20clinic%20services%20page%20demo.%20I%20want%20a%20similar%20website%20for%20my%20clinic.";
const CALL_LINK = "tel:+919752422686";

const coreServices = [
  {
    title: "General Consultation",
    text: "Professional consultation for fever, cold, body pain, infection, weakness, blood pressure concerns, and day-to-day health issues.",
  },
  {
    title: "Preventive Health Checkups",
    text: "Routine wellness consultations, early symptom assessment, and health guidance for safer long-term care.",
  },
  {
    title: "Family Healthcare Support",
    text: "Patient-friendly care for children, adults, and senior citizens with practical treatment and follow-up planning.",
  },
  {
    title: "Follow-Up Consultation",
    text: "Ongoing treatment review, progress tracking, medicine continuation guidance, and repeat visit support.",
  },
  {
    title: "Digital Appointment Assistance",
    text: "Fast booking through WhatsApp, direct calling, and simple online inquiry for better patient convenience.",
  },
  {
    title: "Billing & Visit Summary",
    text: "Professional billing presentation and service documentation that makes the clinic look more organized and trustworthy.",
  },
];

const specialtyHighlights = [
  {
    title: "Skin & Allergy Care",
    text: "Support for itching, rashes, allergies, skin irritation, and common seasonal skin concerns with patient-friendly advice.",
  },
  {
    title: "Child Health Consultation",
    text: "Basic child care consultation, growth-related discussion, fever care guidance, and family-focused health support.",
  },
  {
    title: "Women’s Health Guidance",
    text: "Consultation-friendly support for common health concerns, checkups, and ongoing care discussions in a comfortable setting.",
  },
  {
    title: "Senior Citizen Care",
    text: "Regular monitoring support, medication discussion, and consultation planning for elderly patients and recurring conditions.",
  },
];

const benefits = [
  "Clear service presentation for patients",
  "More trust before first call",
  "Fast WhatsApp appointment flow",
  "Better clinic image in local market",
  "Simple explanation of treatment areas",
  "Professional billing impression",
];

const processSteps = [
  {
    title: "Step 1: Patient Checks Services",
    text: "Visitors instantly understand what the clinic offers, which reduces confusion and improves trust.",
  },
  {
    title: "Step 2: Patient Selects Contact Method",
    text: "Direct call and WhatsApp actions help patients move quickly without complicated forms.",
  },
  {
    title: "Step 3: Clinic Handles Appointment",
    text: "The clinic receives a direct inquiry and can confirm timing, consultation, and visit details.",
  },
];

const pricingCards = [
  {
    title: "General Visit",
    price: "Starts from ₹300",
    text: "Suitable for common consultation, symptom review, and first visit discussion.",
  },
  {
    title: "Special Consultation",
    price: "Starts from ₹500",
    text: "Useful for advanced review, follow-up care, and specialized patient cases.",
  },
  {
    title: "Health Check Package",
    price: "Custom",
    text: "Flexible based on clinic type, consultation model, and required medical support.",
  },
];

const whyThisPageSells = [
  {
    title: "Explains Value Clearly",
    text: "A clinic owner can instantly see how their services will be presented in a professional way.",
  },
  {
    title: "Looks Trustworthy",
    text: "Patients trust clinics more when services, pricing direction, and contact flow are visible.",
  },
  {
    title: "Pushes Action",
    text: "This page is built to move visitors toward WhatsApp inquiry or direct phone call quickly.",
  },
  {
    title: "Supports Many Clinic Types",
    text: "The same structure can be customized for physician, dental, skin, child, pathology, or physiotherapy clinics.",
  },
];

const faqs = [
  {
    q: "Can this services page be customized for a specific doctor?",
    a: "Yes. Services, treatments, consultation categories, timings, doctor details, pricing, and contact actions can all be changed.",
  },
  {
    q: "Is this page good for local clinic marketing?",
    a: "Yes. A strong services page helps local patients understand what the clinic offers before they call or message.",
  },
  {
    q: "Can more medical specialties be added?",
    a: "Yes. Dental, skin, pathology, physiotherapy, gynecology, pediatrics, and other services can be added based on clinic requirements.",
  },
  {
    q: "Will this page help increase patient inquiries?",
    a: "It can improve trust and reduce friction, which usually helps increase direct calls and WhatsApp appointment requests.",
  },
];

export default function ClinicServicesPage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Clinic Services Demo</span>

            <h1 className="hero-title">
              Treatment & Services Page That Makes a Clinic Look Trusted,
              Modern, and Easy to Book
            </h1>

            <p className="hero-subtitle">
              A premium clinic services page demo designed to clearly explain
              treatments, consultation areas, patient benefits, pricing
              highlights, and fast WhatsApp booking. This page helps clinics
              look professional and helps patients take action faster.
            </p>

            <div className="hero-points">
              <span className="hero-point">Service Clarity</span>
              <span className="hero-point">Trust-Building Layout</span>
              <span className="hero-point">Appointment Focused</span>
              <span className="hero-point">Mobile Friendly</span>
            </div>

            <div className="btn-row mt-4">
              <a
                href={WHATSAPP_BOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Book on WhatsApp
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
                Want Similar Clinic Website?
              </a>
            </div>

            <div className="stats">
              <div className="stat">
                <span className="stat-value">10+</span>
                <span className="stat-label">Service Blocks</span>
              </div>
              <div className="stat">
                <span className="stat-value">1 Tap</span>
                <span className="stat-label">WhatsApp Contact</span>
              </div>
              <div className="stat">
                <span className="stat-value">24×7</span>
                <span className="stat-label">Online Visibility</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <h3>Why this page matters for a clinic</h3>
            <p>
              Most patients want to know one thing first: what treatment or
              consultation is available. A clear services page reduces doubt,
              improves trust, and increases the chance of a direct inquiry.
            </p>

            <ul className="list-clean mt-3">
              <li>Shows treatment areas clearly</li>
              <li>Improves first impression of the clinic</li>
              <li>Helps patients decide faster</li>
              <li>Supports direct call and WhatsApp conversion</li>
              <li>Makes the clinic look organized and modern</li>
            </ul>

            <div className="cta-band mt-4">
              <h3>Best page for converting interest into inquiry</h3>
              <p>
                This is one of the most important pages in a clinic website
                because it explains value before the patient contacts the clinic.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-0">
        <div className="container">
          <div className="badge-row">
            {benefits.map((item) => (
              <span className="badge" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Core Services</span>
          <h2 className="section-title">
            Professional healthcare service blocks patients can understand fast
          </h2>
          <p className="section-subtitle">
            This section is designed to make the clinic look clear,
            well-structured, and patient-friendly. Good service presentation
            creates trust before the first appointment.
          </p>

          <div className="grid grid-3 mt-4">
            {coreServices.map((service) => (
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
          <span className="eyebrow">Specialty Highlights</span>
          <h2 className="section-title">
            Flexible structure for different clinic types and treatment areas
          </h2>
          <p className="section-subtitle">
            This demo can be adapted for family clinics, skin clinics, child
            clinics, women’s care clinics, physiotherapy centers, dental
            clinics, and many other healthcare businesses.
          </p>

          <div className="grid grid-2 mt-4">
            {specialtyHighlights.map((item) => (
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
          <span className="eyebrow">Consultation Flow</span>
          <h2 className="section-title">
            Simple patient journey from service page to confirmed appointment
          </h2>
          <p className="section-subtitle">
            A conversion-focused services page should guide the patient toward
            action without confusion. This structure keeps it easy.
          </p>

          <div className="grid grid-3 mt-4">
            {processSteps.map((step) => (
              <article className="card" key={step.title}>
                <h3 className="card-title">{step.title}</h3>
                <p className="card-text">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="container">
          <span className="eyebrow">Consultation Pricing</span>
          <h2 className="section-title">
            Pricing-style blocks that make the clinic look more professional
          </h2>
          <p className="section-subtitle">
            Exact fees can be customized for any real clinic. These pricing
            cards help present consultation categories in a clean and credible
            format.
          </p>

          <div className="grid grid-3 mt-4">
            {pricingCards.map((item) => (
              <article className="card" key={item.title}>
                <h3 className="card-title">{item.title}</h3>
                <p
                  className="mt-2"
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: 900,
                    color: "var(--secondary)",
                    lineHeight: 1,
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.price}
                </p>
                <p className="card-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="soft-panel">
            <span className="eyebrow">Sales Advantage</span>
            <h2 className="section-title">
              Why this clinic services page helps you sell faster
            </h2>
            <p className="section-subtitle">
              A clinic owner usually wants to see whether the website looks
              real, useful, and professional. This page answers that quickly and
              makes the demo much easier to close.
            </p>

            <div className="grid grid-2 mt-4">
              {whyThisPageSells.map((item) => (
                <article className="card" key={item.title}>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">{item.text}</p>
                </article>
              ))}
            </div>

            <div className="btn-row mt-4">
              <a
                href={WHATSAPP_DEMO}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Get Similar Clinic Website
              </a>
              <Link href="/projects/clinic/appointment/" className="btn btn-outline">
                Open Appointment Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-sm">
        <div className="container">
          <span className="eyebrow">Frequently Asked Questions</span>
          <h2 className="section-title">
            Common questions about clinic services website pages
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
            <h3>Need a clinic website with service pages like this?</h3>
            <p>
              Get a clinic website customized with doctor details, treatments,
              timings, billing flow, contact page, and WhatsApp inquiry.
            </p>

            <div className="btn-row mt-4" style={{ justifyContent: "center" }}>
              <a
                href={WHATSAPP_BOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Book Consultation
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
    </>
  );
}