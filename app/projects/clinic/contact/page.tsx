import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clinic Contact Page Demo | Call, WhatsApp, Location & Appointment Inquiry",
  description:
    "Premium clinic contact page demo for doctors and healthcare businesses. Show phone number, clinic address, timings, WhatsApp booking, map section, and patient inquiry flow in a high-conversion design.",
  keywords: [
    "clinic contact page",
    "doctor contact page",
    "clinic location page",
    "doctor appointment contact page",
    "medical contact website demo",
    "clinic WhatsApp page",
    "clinic address page",
    "healthcare website contact page",
    "clinic website development Korba",
    "clinic website development Chhattisgarh",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/clinic/contact/",
  },
  openGraph: {
    title: "Clinic Contact Page Demo | Call, WhatsApp, Location & Appointment Inquiry",
    description:
      "Modern clinic contact page demo with phone, WhatsApp, address, clinic timings, appointment inquiry flow, and trust-building design.",
    url: "https://globalcomputers.net/projects/clinic/contact/",
    type: "website",
    siteName: "Global Computers & IT Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinic Contact Page Demo | Call, WhatsApp, Location & Appointment Inquiry",
    description:
      "High-conversion clinic contact page demo for doctors, clinics, and healthcare businesses.",
  },
};

const WHATSAPP_BOOK =
  "https://wa.me/919752422686?text=Hi%20I%20want%20to%20book%20a%20clinic%20appointment.";
const WHATSAPP_DEMO =
  "https://wa.me/919752422686?text=Hi%20I%20saw%20your%20clinic%20contact%20page%20demo.%20I%20want%20a%20similar%20website%20for%20my%20clinic.";
const WHATSAPP_LOCATION =
  "https://wa.me/919752422686?text=Hi%20please%20share%20clinic%20location%20and%20available%20appointment%20timings.";
const CALL_LINK = "tel:+919752422686";

const contactCards = [
  {
    title: "Call Clinic",
    text: "+91 97524 22686",
    desc: "Talk directly for appointment booking, consultation inquiry, follow-up, or urgent clinic timing questions.",
    href: CALL_LINK,
    cta: "Call Now",
  },
  {
    title: "WhatsApp Booking",
    text: "Quick Appointment on WhatsApp",
    desc: "Best for fast patient inquiry, slot confirmation, location request, and same-day appointment discussion.",
    href: WHATSAPP_BOOK,
    cta: "Message on WhatsApp",
  },
  {
    title: "Clinic Address",
    text: "Main Road, Korba, Chhattisgarh",
    desc: "Replace this with your actual clinic location, landmark, city, and Google Maps link for real deployment.",
    href: WHATSAPP_LOCATION,
    cta: "Ask for Location",
  },
  {
    title: "Consultation Hours",
    text: "Mon-Sat: 9 AM - 1 PM, 5 PM - 8 PM",
    desc: "Clear timing display helps patients know when to call, visit, or ask for available appointment slots.",
    href: WHATSAPP_BOOK,
    cta: "Check Appointment Time",
  },
];

const timings = [
  { day: "Monday", hours: "09:00 AM - 01:00 PM, 05:00 PM - 08:00 PM" },
  { day: "Tuesday", hours: "09:00 AM - 01:00 PM, 05:00 PM - 08:00 PM" },
  { day: "Wednesday", hours: "09:00 AM - 01:00 PM, 05:00 PM - 08:00 PM" },
  { day: "Thursday", hours: "09:00 AM - 01:00 PM, 05:00 PM - 08:00 PM" },
  { day: "Friday", hours: "09:00 AM - 01:00 PM, 05:00 PM - 08:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 02:00 PM" },
  { day: "Sunday", hours: "Emergency / Prior Appointment Only" },
];

const whyContactMatters = [
  {
    title: "Reduces Patient Confusion",
    text: "A good contact page answers the main questions patients ask first: where the clinic is, how to contact it, and when it is open.",
  },
  {
    title: "Improves Inquiry Rate",
    text: "Direct phone and WhatsApp actions reduce friction and help more visitors convert into real appointment inquiries.",
  },
  {
    title: "Builds Local Trust",
    text: "Visible address, timing, and contact details make the clinic feel more real, established, and trustworthy.",
  },
  {
    title: "Supports Mobile Users",
    text: "Most local patients search from phones, so this page is designed around tap-to-call and tap-to-WhatsApp actions.",
  },
];

const quickReasons = [
  "Direct Call Button",
  "WhatsApp-First Contact Flow",
  "Visible Timing & Address",
  "Better Local Trust",
  "Mobile Conversion Focus",
  "Easy Appointment Inquiry",
];

const patientQuestions = [
  {
    title: "Need Appointment Today?",
    text: "Use WhatsApp for quick same-day appointment inquiry and slot confirmation.",
  },
  {
    title: "Need Clinic Location?",
    text: "Ask for landmark, exact address, and map direction before visiting.",
  },
  {
    title: "Need Consultation Timing?",
    text: "Check current clinic timings before planning your visit.",
  },
];

const faqs = [
  {
    q: "Can this contact page be customized for a real clinic?",
    a: "Yes. Phone number, WhatsApp number, address, map, timings, doctor details, and booking actions can all be customized.",
  },
  {
    q: "Can Google Maps be added here?",
    a: "Yes. A Google Maps embed or direct map link can be added for the real clinic location.",
  },
  {
    q: "Will this page work well for mobile patients?",
    a: "Yes. The page is designed for mobile-first behavior, where most patients tap to call or message directly.",
  },
  {
    q: "Can this page help improve patient inquiries?",
    a: "It can improve trust and reduce friction, which often helps increase calls and WhatsApp appointment requests.",
  },
];

export default function ClinicContactPage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Clinic Contact Demo</span>

            <h1 className="hero-title">
              Contact Page That Makes It Easy for Patients to Call, Message, and
              Find the Clinic Fast
            </h1>

            <p className="hero-subtitle">
              A premium clinic contact page demo designed to show phone number,
              WhatsApp booking, clinic timings, address, and patient inquiry
              flow clearly. This page helps clinics look more trusted and makes
              it easier for patients to take immediate action.
            </p>

            <div className="hero-points">
              <span className="hero-point">Call in 1 Tap</span>
              <span className="hero-point">WhatsApp Booking</span>
              <span className="hero-point">Clear Timings</span>
              <span className="hero-point">Local Trust Design</span>
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
                <span className="stat-value">4</span>
                <span className="stat-label">Contact Blocks</span>
              </div>
              <div className="stat">
                <span className="stat-value">7</span>
                <span className="stat-label">Day Timing View</span>
              </div>
              <div className="stat">
                <span className="stat-value">1 Tap</span>
                <span className="stat-label">Patient Action</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <h3>Why this page matters for patient conversion</h3>
            <p>
              Many patients do not want to search through a full website. They
              simply want contact details, timing, address, and a quick way to
              book. This page gives them exactly that.
            </p>

            <ul className="list-clean mt-3">
              <li>Shows contact options immediately</li>
              <li>Builds trust with visible timing and address</li>
              <li>Improves direct call and WhatsApp action</li>
              <li>Helps patients find the clinic faster</li>
              <li>Makes the clinic feel more professional</li>
            </ul>

            <div className="cta-band mt-4">
              <h3>One of the most important local trust pages</h3>
              <p>
                A strong contact page often decides whether a patient contacts
                the clinic now or leaves the website.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-0">
        <div className="container">
          <div className="badge-row">
            {quickReasons.map((item) => (
              <span className="badge" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Contact Options</span>
          <h2 className="section-title">
            Every important clinic contact detail presented in a clear,
            patient-friendly way
          </h2>
          <p className="section-subtitle">
            This section is designed to remove friction. Patients should not
            struggle to find the phone number, clinic location, or appointment
            timing.
          </p>

          <div className="grid grid-2 mt-4">
            {contactCards.map((card) => (
              <article className="card" key={card.title}>
                <h3 className="card-title">{card.title}</h3>
                <p
                  className="mt-2"
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 900,
                    color: "var(--secondary)",
                    lineHeight: 1.2,
                    marginBottom: "0.75rem",
                  }}
                >
                  {card.text}
                </p>
                <p className="card-text">{card.desc}</p>

                <div className="mt-3">
                  <a
                    href={card.href}
                    target={
                      card.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      card.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="btn btn-outline"
                  >
                    {card.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-2">
        <div className="container">
          <span className="eyebrow">Clinic Timings</span>
          <h2 className="section-title">
            Weekly timing section that makes appointment planning easier
          </h2>
          <p className="section-subtitle">
            Clear timing visibility reduces unnecessary calls and helps patients
            know when to contact the clinic.
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
          <span className="eyebrow">Quick Patient Help</span>
          <h2 className="section-title">
            Common reasons patients contact the clinic first
          </h2>
          <p className="section-subtitle">
            This makes the page feel practical and real. It also helps a clinic
            owner immediately understand how useful the website will be.
          </p>

          <div className="grid grid-3 mt-4">
            {patientQuestions.map((item) => (
              <article className="card" key={item.title}>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="container">
          <span className="eyebrow">Why This Page Converts</span>
          <h2 className="section-title">
            Strong contact structure helps both your demo and the real clinic
          </h2>
          <p className="section-subtitle">
            A clinic owner should instantly feel that this website can improve
            patient communication. That is what makes the demo easier to sell.
          </p>

          <div className="grid grid-2 mt-4">
            {whyContactMatters.map((item) => (
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
            <span className="eyebrow">Sales Section</span>
            <h2 className="section-title">
              Want a clinic website with this kind of contact experience?
            </h2>
            <p className="section-subtitle">
              This demo can be customized with your clinic phone number,
              WhatsApp, doctor details, timings, real address, Google Map, and
              appointment flow so patients can contact you more easily.
            </p>

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
            Common questions about clinic contact pages
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
            <h3>Need a clinic contact page like this for your practice?</h3>
            <p>
              Get a clinic website customized with services, doctor profile,
              timings, billing page, appointment flow, and direct WhatsApp
              inquiry.
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