import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Coaching Institute | Admission Enquiry, Demo Class & Location",
  description:
    "Contact the coaching institute for admission enquiry, demo class booking, batch timing, fee details, and location. Premium contact page designed for high trust and faster parent/student conversion.",
  keywords: [
    "coaching contact page",
    "coaching admission enquiry",
    "demo class booking",
    "tuition class contact page",
    "coaching institute location",
    "student admission contact",
    "education website contact page",
    "coaching WhatsApp enquiry",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/coaching/contact/",
  },
  openGraph: {
    title: "Contact Coaching Institute | Admission Enquiry, Demo Class & Location",
    description:
      "Premium coaching contact page with admission enquiry, demo class booking, batch timings, address, and WhatsApp CTA.",
    url: "https://globalcomputers.net/projects/coaching/contact/",
    type: "website",
    siteName: "Global Computers & IT Solutions",
  },
};

const WHATSAPP_ADMISSION =
  "https://wa.me/919752422686?text=Hi%20I%20want%20admission%20details%20for%20your%20coaching%20institute.";
const WHATSAPP_DEMO =
  "https://wa.me/919752422686?text=Hi%20I%20want%20to%20book%20a%20demo%20class%20for%20your%20coaching%20program.";
const WHATSAPP_FEES =
  "https://wa.me/919752422686?text=Hi%20please%20share%20your%20fee%20structure%20and%20batch%20timings.";
const CALL = "tel:+919752422686";

const contactCards = [
  {
    title: "Call for Quick Admission Help",
    value: "+91 97524 22686",
    href: CALL,
    text: "Talk directly for admission support, course guidance, and batch availability.",
  },
  {
    title: "WhatsApp for Fast Response",
    value: "Chat on WhatsApp",
    href: WHATSAPP_ADMISSION,
    text: "Best for fee details, admission questions, and instant parent enquiry.",
  },
  {
    title: "Demo Class Booking",
    value: "Book a Demo Class",
    href: WHATSAPP_DEMO,
    text: "Let students and parents understand teaching style before admission.",
  },
  {
    title: "Institute Address",
    value: "Korba, Chhattisgarh, India",
    href: "https://maps.google.com/?q=Korba%20Chhattisgarh%20India",
    text: "Add your real coaching address and map link here for local SEO and trust.",
  },
];

const timings = [
  { day: "Monday", time: "7:00 AM – 8:00 PM" },
  { day: "Tuesday", time: "7:00 AM – 8:00 PM" },
  { day: "Wednesday", time: "7:00 AM – 8:00 PM" },
  { day: "Thursday", time: "7:00 AM – 8:00 PM" },
  { day: "Friday", time: "7:00 AM – 8:00 PM" },
  { day: "Saturday", time: "7:00 AM – 7:00 PM" },
  { day: "Sunday", time: "Counselling / Demo by Appointment" },
];

const enquiryReasons = [
  "Admission enquiry for school tuition",
  "Board exam coaching details",
  "Foundation batch information",
  "Competitive exam coaching guidance",
  "Fee structure and payment support",
  "Demo class booking",
];

const faqs = [
  {
    q: "How can parents enquire about admission?",
    a: "Parents can call directly, send a WhatsApp message, ask for fee details, or book a demo class before confirming admission.",
  },
  {
    q: "Is demo class booking available?",
    a: "Yes. Demo class booking helps parents and students understand the teaching style, environment, and suitability before joining.",
  },
  {
    q: "Can students get fee details on WhatsApp?",
    a: "Yes. WhatsApp is one of the fastest and easiest ways to share fee structure, timing, and admission instructions.",
  },
  {
    q: "Why is a strong contact page important?",
    a: "A premium contact page improves trust, reduces friction, and makes it easier for interested parents to take action immediately.",
  },
];

export default function CoachingContactPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy fade-up">
              <span className="eyebrow">Contact & Admission Enquiry</span>

              <h1>
                Coaching Contact Page Designed for{" "}
                <span className="text-primary">Fast Enquiries and More Admissions</span>
              </h1>

              <p className="lead">
                A premium coaching contact page should make it extremely easy for
                parents and students to call, WhatsApp, visit the institute, ask fee
                questions, and book a demo class without confusion.
              </p>

              <p>
                This page is designed to remove hesitation and increase conversion by
                combining direct contact options, clear batch timing information,
                trust-building content, and strong admission-oriented call to action.
              </p>

              <div className="btn-row spacer-lg">
                <a
                  href={WHATSAPP_ADMISSION}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                >
                  WhatsApp Admission
                </a>
                <a href={CALL} className="btn btn-call">
                  Call Now
                </a>
                <a
                  href={WHATSAPP_DEMO}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  Book Demo Class
                </a>
              </div>

              <div className="badges spacer-lg">
                <span className="badge">Fast Parent Response</span>
                <span className="badge">Demo Class Booking</span>
                <span className="badge">Batch Timing Info</span>
                <span className="badge">Location Trust</span>
              </div>
            </div>

            <div className="hero-card glass fade-up">
              <div className="stack">
                <div>
                  <span className="eyebrow">Why This Page Converts</span>
                  <h2>Direct Contact Flow Reduces Admission Friction</h2>
                  <p>
                    Parents often leave a website when contact options are hidden or
                    unclear. This page keeps every important action visible and simple.
                  </p>
                </div>

                <div className="hero-points">
                  <div className="hero-point">
                    <div>
                      <h3>One-Tap Contact</h3>
                      <p>
                        Call and WhatsApp actions are visible immediately on mobile and
                        desktop.
                      </p>
                    </div>
                  </div>

                  <div className="hero-point">
                    <div>
                      <h3>Trust Through Clarity</h3>
                      <p>
                        Address, timings, fee enquiry, and demo class options increase
                        confidence before admission.
                      </p>
                    </div>
                  </div>

                  <div className="hero-point">
                    <div>
                      <h3>Higher Enquiry Intent</h3>
                      <p>
                        Visitors who reach this page are already serious, so every
                        section is designed to convert them faster.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="btn-row">
                  <Link href="/projects/coaching/courses/" className="btn btn-primary">
                    View Courses
                  </Link>
                  <Link href="/projects/coaching/billing/" className="btn btn-secondary">
                    Fee & Admission Page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-sm">
        <div className="container">
          <div className="stats">
            <div className="stat-card card-solid">
              <strong>Call</strong>
              <span>Quick Admission Support</span>
            </div>
            <div className="stat-card card-solid">
              <strong>WhatsApp</strong>
              <span>Fastest Enquiry Channel</span>
            </div>
            <div className="stat-card card-solid">
              <strong>Demo</strong>
              <span>Class Booking Option</span>
            </div>
            <div className="stat-card card-solid">
              <strong>Map</strong>
              <span>Institute Visit Trust</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Contact Options</span>
            <h2>All Important Admission Contact Actions in One Place</h2>
          </div>

          <p className="section-text">
            Good contact pages do not make visitors search. They show every major
            action clearly so parents can contact the institute in the way they prefer.
          </p>

          <div className="feature-grid spacer-lg">
            {contactCards.map((item) => (
              <div key={item.title} className="feature-card card panel">
                <h3>{item.title}</h3>
                <p style={{ fontWeight: 800, marginBottom: "0.8rem" }}>{item.value}</p>
                <p>{item.text}</p>
                <div className="spacer-top">
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="btn btn-secondary btn-sm"
                  >
                    Open
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card panel-lg">
            <span className="eyebrow">Why Parents Contact</span>
            <h2>Most Common Reasons for Coaching Enquiries</h2>
            <p>
              Most parents reach out when they are close to making a decision. This is
              why your contact page should answer common action points clearly and
              quickly.
            </p>

            <ul className="list-clean spacer-top">
              {enquiryReasons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="btn-row spacer-lg">
              <a
                href={WHATSAPP_FEES}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
              >
                Ask Fee Details
              </a>
              <a href={CALL} className="btn btn-secondary">
                Talk to Institute
              </a>
            </div>
          </div>

          <div className="card panel-lg">
            <span className="eyebrow">Batch Timings</span>
            <h2>Show Clear Institute Timings to Build Local Trust</h2>
            <p>
              Timings help parents know when they can call, visit, or book counselling.
              This also improves clarity for local visitors and strengthens trust.
            </p>

            <div className="table-wrap spacer-top">
              <table>
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Timing</th>
                  </tr>
                </thead>
                <tbody>
                  {timings.map((item) => (
                    <tr key={item.day}>
                      <td>{item.day}</td>
                      <td>{item.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid-2">
          <div className="card panel-lg">
            <span className="eyebrow">Demo Class</span>
            <h2>Demo Class Booking Increases Parent Confidence</h2>
            <p>
              A demo class is one of the strongest conversion tools for coaching
              institutes. It reduces hesitation and lets students experience the
              teaching approach before joining.
            </p>
            <p>
              Use this section to promote demo booking, free counselling, subject
              assessment, or trial sessions.
            </p>

            <div className="btn-row spacer-top">
              <a
                href={WHATSAPP_DEMO}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
              >
                Book Demo on WhatsApp
              </a>
              <a href={CALL} className="btn btn-secondary">
                Call for Demo
              </a>
            </div>
          </div>

          <div className="card panel-lg">
            <span className="eyebrow">Location & Visit</span>
            <h2>Institute Address and Visit Support Improve Trust</h2>
            <p>
              Many parents prefer to visit before confirming admission. A visible
              address and map section make the coaching institute look more real,
              trusted, and easy to access.
            </p>

            <div className="card-solid panel spacer-top">
              <h3>BrightFuture Coaching</h3>
              <p>Near Main Market, Korba, Chhattisgarh, India</p>
              <p className="muted">
                Replace this demo address with your real institute address, landmark,
                and Google Maps link.
              </p>

              <div className="btn-row spacer-top">
                <a
                  href="https://maps.google.com/?q=Korba%20Chhattisgarh%20India"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Open Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-section">
            <div className="grid-2" style={{ alignItems: "center" }}>
              <div>
                <span
                  className="eyebrow"
                  style={{ color: "#312e81", background: "#fff" }}
                >
                  Admission Open
                </span>
                <h2>Ready to Ask About Fees, Batches, or Demo Class?</h2>
                <p>
                  This contact page is built to convert serious visitors into real
                  enquiries by giving direct call, WhatsApp, and visit options without
                  unnecessary friction.
                </p>
              </div>

              <div className="btn-row">
                <a
                  href={WHATSAPP_ADMISSION}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                >
                  WhatsApp Now
                </a>
                <a href={CALL} className="btn btn-secondary">
                  Call Institute
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">FAQs</span>
            <h2>Common Contact and Admission Questions</h2>
          </div>

          <div className="faq-list spacer-lg">
            {faqs.map((item) => (
              <div key={item.q} className="faq-item">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-section center">
            <span
              className="eyebrow"
              style={{ color: "#312e81", background: "#fff" }}
            >
              Complete Coaching Demo Flow
            </span>
            <h2>Explore the Full Premium Coaching Website Journey</h2>
            <p style={{ maxWidth: "760px", margin: "0.75rem auto 0" }}>
              A high-conversion coaching website works best when homepage, courses,
              results, billing, and contact pages all support one clear goal:
              generating more admission enquiries.
            </p>

            <div
              className="btn-row"
              style={{ justifyContent: "center", marginTop: "1.5rem" }}
            >
              <Link href="/projects/coaching/" className="btn btn-secondary">
                Home
              </Link>
              <Link href="/projects/coaching/courses/" className="btn btn-secondary">
                Courses
              </Link>
              <Link href="/projects/coaching/results/" className="btn btn-secondary">
                Results
              </Link>
              <Link href="/projects/coaching/billing/" className="btn btn-secondary">
                Billing
              </Link>
              <a
                href={WHATSAPP_ADMISSION}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
              >
                Start Enquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}