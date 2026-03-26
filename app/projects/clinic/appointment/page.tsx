import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clinic Appointment Page Demo | Book Doctor Visit, Consultation & Timings",
  description:
    "Premium clinic appointment page demo for doctors and healthcare businesses. Show doctor profile, clinic timings, consultation slots, booking options, contact details, and WhatsApp appointment flow in a high-conversion design.",
  keywords: [
    "clinic appointment page",
    "doctor booking page",
    "book doctor appointment website",
    "clinic consultation page",
    "doctor timings page",
    "medical appointment website demo",
    "doctor booking website India",
    "clinic website appointment page",
    "clinic website development Korba",
    "clinic website development Chhattisgarh",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/clinic/appointment/",
  },
  openGraph: {
    title: "Clinic Appointment Page Demo | Book Doctor Visit, Consultation & Timings",
    description:
      "Modern clinic appointment page demo with doctor profile, consultation timing, booking slots, call and WhatsApp actions, and patient-focused conversion design.",
    url: "https://globalcomputers.net/projects/clinic/appointment/",
    type: "website",
    siteName: "Global Computers & IT Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinic Appointment Page Demo | Book Doctor Visit, Consultation & Timings",
    description:
      "High-conversion clinic appointment page demo for doctors, clinics, and healthcare practices.",
  },
};

const WHATSAPP_BOOK =
  "https://wa.me/919752422686?text=Hi%20I%20want%20to%20book%20a%20doctor%20appointment.";
const WHATSAPP_DEMO =
  "https://wa.me/919752422686?text=Hi%20I%20saw%20your%20clinic%20appointment%20page%20demo.%20I%20want%20a%20similar%20website%20for%20my%20clinic.";
const WHATSAPP_SLOT =
  "https://wa.me/919752422686?text=Hi%20I%20want%20to%20check%20available%20appointment%20slots.";
const CALL_LINK = "tel:+919752422686";

const timings = [
  { day: "Monday", hours: "09:00 AM - 01:00 PM, 05:00 PM - 08:00 PM" },
  { day: "Tuesday", hours: "09:00 AM - 01:00 PM, 05:00 PM - 08:00 PM" },
  { day: "Wednesday", hours: "09:00 AM - 01:00 PM, 05:00 PM - 08:00 PM" },
  { day: "Thursday", hours: "09:00 AM - 01:00 PM, 05:00 PM - 08:00 PM" },
  { day: "Friday", hours: "09:00 AM - 01:00 PM, 05:00 PM - 08:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 02:00 PM" },
  { day: "Sunday", hours: "Emergency / Prior Appointment Only" },
];

const quickBenefits = [
  "Fast WhatsApp Appointment Booking",
  "Clear Doctor Timing Display",
  "Mobile-Friendly Contact Flow",
  "Direct Call-to-Clinic Action",
  "Better Trust for First-Time Patients",
  "Professional Clinic Impression",
];

const doctorHighlights = [
  {
    title: "Experienced Consultation",
    text: "Structured and patient-friendly consultation flow for common health issues, preventive care, and follow-up visits.",
  },
  {
    title: "Comfortable Patient Experience",
    text: "A clean, organized, and trust-focused clinic setup helps patients feel more confident before and during the visit.",
  },
  {
    title: "Quick Inquiry Response",
    text: "Patients can call directly or use WhatsApp to ask about timings, consultation, or available appointment slots.",
  },
  {
    title: "Suitable for Many Clinic Types",
    text: "This appointment page structure works well for physician, dental, skin, child, women’s care, and therapy clinics.",
  },
];

const bookingSteps = [
  {
    title: "1. Check Timing",
    text: "The patient checks available clinic hours and understands the best time to visit or inquire.",
  },
  {
    title: "2. Contact Instantly",
    text: "The patient clicks WhatsApp or Call Now without filling long forms or waiting on complex systems.",
  },
  {
    title: "3. Confirm Appointment",
    text: "The clinic confirms the visit, consultation timing, and basic details directly with the patient.",
  },
];

const slotCards = [
  {
    title: "Morning Consultation",
    timing: "09:00 AM - 11:30 AM",
    text: "Best for general checkups, basic consultation, family visits, and follow-up patients.",
  },
  {
    title: "Midday Consultation",
    timing: "11:30 AM - 01:00 PM",
    text: "Suitable for patients who want faster same-day consultation before afternoon closure.",
  },
  {
    title: "Evening Consultation",
    timing: "05:00 PM - 08:00 PM",
    text: "Ideal for working professionals, family patients, and after-office healthcare visits.",
  },
];

const whyThisPageSells = [
  {
    title: "Feels Like a Real Clinic Website",
    text: "Clinic owners can imagine their own practice using this design, which increases project confidence.",
  },
  {
    title: "Strong Conversion Structure",
    text: "Patients are guided from doctor trust to timings to instant action without unnecessary friction.",
  },
  {
    title: "Easy to Customize",
    text: "Doctor name, specialization, timing, consultation fee, clinic address, and contact flow can all be changed easily.",
  },
  {
    title: "Useful for Local Marketing",
    text: "This page is strong for local clinic branding because it answers the exact questions patients usually ask first.",
  },
];

const faqs = [
  {
    q: "Can this appointment page be customized for a real doctor?",
    a: "Yes. Doctor name, specialization, timings, clinic address, consultation fees, slot information, and booking actions can all be customized.",
  },
  {
    q: "Can WhatsApp booking be connected to the clinic’s own number?",
    a: "Yes. The WhatsApp number and booking message can be changed for any clinic or doctor.",
  },
  {
    q: "Is this page useful for patient conversion?",
    a: "Yes. It reduces friction by showing timing, trust details, and direct action buttons clearly on the same page.",
  },
  {
    q: "Can online form booking also be added later?",
    a: "Yes. This demo can be extended with a booking form, lead capture, CRM, or patient management flow if required.",
  },
];

export default function ClinicAppointmentPage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Doctor Appointment Demo</span>

            <h1 className="hero-title">
              Appointment Booking Page That Makes It Easy for Patients to Call,
              Message, and Visit the Clinic
            </h1>

            <p className="hero-subtitle">
              A premium clinic appointment page demo designed to show doctor
              availability, clinic timings, patient booking flow, consultation
              slots, and direct WhatsApp action. This page helps the clinic look
              trustworthy and helps patients book faster.
            </p>

            <div className="hero-points">
              <span className="hero-point">Direct Booking Flow</span>
              <span className="hero-point">Doctor Timing Clarity</span>
              <span className="hero-point">WhatsApp First</span>
              <span className="hero-point">Patient Trust Layout</span>
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
                Want Similar Clinic Website?
              </a>
            </div>

            <div className="stats">
              <div className="stat">
                <span className="stat-value">7</span>
                <span className="stat-label">Days Timing View</span>
              </div>
              <div className="stat">
                <span className="stat-value">1 Tap</span>
                <span className="stat-label">Instant Contact</span>
              </div>
              <div className="stat">
                <span className="stat-value">3</span>
                <span className="stat-label">Slot Sections</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <h3>Why this page converts better</h3>
            <p>
              Patients usually want quick answers before booking: doctor timing,
              how to contact the clinic, and whether they can get a convenient
              appointment. This page solves that clearly.
            </p>

            <ul className="list-clean mt-3">
              <li>Shows booking path instantly</li>
              <li>Builds trust with clear clinic structure</li>
              <li>Reduces confusion about timing and slots</li>
              <li>Improves direct calls and WhatsApp inquiries</li>
              <li>Makes the clinic look premium and organized</li>
            </ul>

            <div className="cta-band mt-4">
              <h3>One of the strongest pages for clinic conversion</h3>
              <p>
                A proper appointment page often becomes the main action page for
                local patients searching on mobile.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-0">
        <div className="container">
          <div className="badge-row">
            {quickBenefits.map((item) => (
              <span className="badge" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Doctor Profile Highlight</span>
          <h2 className="section-title">
            Professional appointment page with doctor trust and patient clarity
          </h2>
          <p className="section-subtitle">
            A strong appointment page should help patients feel confident before
            they call. It should look simple, trustworthy, and easy to act on.
          </p>

          <div className="grid grid-2 mt-4">
            <div className="soft-panel">
              <h3 className="card-title">Dr. Sample Name</h3>
              <p className="card-text">
                General Physician / Family Health Consultant
              </p>

              <ul className="list-clean mt-3">
                <li>Patient-friendly consultation style</li>
                <li>Routine and preventive care support</li>
                <li>Family-focused healthcare guidance</li>
                <li>Follow-up and repeat visit management</li>
                <li>Easy appointment confirmation process</li>
              </ul>

              <div className="btn-row mt-4">
                <a
                  href={WHATSAPP_SLOT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Check Available Slots
                </a>
                <a href={CALL_LINK} className="btn btn-outline">
                  Call Reception
                </a>
              </div>
            </div>

            <div className="grid">
              {doctorHighlights.map((item) => (
                <article className="card" key={item.title}>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section surface-2">
        <div className="container">
          <span className="eyebrow">Clinic Timings</span>
          <h2 className="section-title">
            Clear weekly timing section patients can understand immediately
          </h2>
          <p className="section-subtitle">
            This section removes confusion and helps patients know the best time
            to call, visit, or ask for slot confirmation.
          </p>

          <div className="grid grid-2 mt-4">
            {timings.map((item) => (
              <article className="card" key={item.day}>
                <h3 className="card-title">{item.day}</h3>
                <p className="card-text">{item.hours}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Consultation Slots</span>
          <h2 className="section-title">
            Slot-based booking blocks for faster patient decision-making
          </h2>
          <p className="section-subtitle">
            Even simple slot presentation makes the clinic feel more organized
            and professional, especially for first-time visitors.
          </p>

          <div className="grid grid-3 mt-4">
            {slotCards.map((item) => (
              <article className="card" key={item.title}>
                <h3 className="card-title">{item.title}</h3>
                <p
                  className="mt-2"
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 900,
                    color: "var(--secondary)",
                    lineHeight: 1.1,
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.timing}
                </p>
                <p className="card-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="container">
          <span className="eyebrow">How Booking Works</span>
          <h2 className="section-title">
            Simple booking flow designed for mobile users and local patients
          </h2>
          <p className="section-subtitle">
            This structure reduces friction. Most local patients do not want a
            complex booking system. They want fast contact and quick
            confirmation.
          </p>

          <div className="grid grid-3 mt-4">
            {bookingSteps.map((item) => (
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
          <div className="soft-panel">
            <span className="eyebrow">Sales Advantage</span>
            <h2 className="section-title">
              Why this appointment page makes your clinic demo stronger
            </h2>
            <p className="section-subtitle">
              This page helps clinic owners imagine real patient flow on their
              own website. That makes the demo feel practical, not just
              decorative.
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
              <Link href="/projects/clinic/contact/" className="btn btn-outline">
                Open Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-sm">
        <div className="container">
          <span className="eyebrow">Frequently Asked Questions</span>
          <h2 className="section-title">
            Common questions about clinic appointment websites
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
            <h3>Need a clinic booking page like this for your practice?</h3>
            <p>
              Get a clinic website customized with doctor profile, services,
              timings, billing page, contact page, and direct WhatsApp
              appointment flow.
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
    </>
  );
}