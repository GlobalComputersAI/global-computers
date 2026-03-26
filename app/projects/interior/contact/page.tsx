import type { Metadata } from "next";
import Link from "next/link";

const PHONE = "+91 9752422686";
const PHONE_LINK = "tel:+919752422686";
const WHATSAPP =
  "https://wa.me/919752422686?text=Hi%20I%20want%20interior%20design%20for%20my%20space.%20Please%20contact%20me%20with%20design%20ideas%2C%20pricing%2C%20and%20timeline.";
const EMAIL = "info@globalcomputers.net";
const EMAIL_LINK = "mailto:info@globalcomputers.net";

const contactOptions = [
  {
    title: "WhatsApp for Fastest Response",
    value: "Chat Directly on WhatsApp",
    desc: "Best for quick discussion, budget sharing, room photos, layout sharing, and instant enquiry.",
    cta: "Start WhatsApp Chat",
    href: WHATSAPP,
  },
  {
    title: "Call for Direct Discussion",
    value: PHONE,
    desc: "Best for immediate conversation about your home, office, kitchen, showroom, or complete interior requirement.",
    cta: "Call Now",
    href: PHONE_LINK,
  },
  {
    title: "Email for Detailed Requirement",
    value: EMAIL,
    desc: "Best for sharing complete requirement, documents, project brief, business inquiry, or partnership discussion.",
    cta: "Send Email",
    href: EMAIL_LINK,
  },
];

const reasonsToContact = [
  {
    title: "Free Initial Discussion",
    text: "Understand what kind of interior design fits your space, budget, and style preference.",
  },
  {
    title: "Budget Direction",
    text: "Get clear idea about possible starting range, package fit, and scope options before moving ahead.",
  },
  {
    title: "Space Planning Guidance",
    text: "Discuss room type, usage, furniture need, storage ideas, and practical layout direction.",
  },
  {
    title: "Residential + Commercial Support",
    text: "Suitable for homes, kitchens, bedrooms, offices, shops, showrooms, and complete turnkey projects.",
  },
];

const whatToShare = [
  "Property type (home, office, shop, showroom, kitchen, bedroom, etc.)",
  "Your city and project location",
  "Approximate size or area of the space",
  "Your style preference (modern, luxury, minimal, contemporary)",
  "Your expected budget range",
  "Any photos, floor plan, or layout if available",
];

const faqs = [
  {
    q: "What is the fastest way to contact for interior design inquiry?",
    a: "WhatsApp is the fastest option because you can quickly send your requirement, budget, photos, and floor plan in one place for a faster response.",
  },
  {
    q: "Can I contact for both home and office interior design?",
    a: "Yes. This contact page supports residential and commercial interior enquiries including homes, modular kitchens, bedrooms, offices, shops, and showrooms.",
  },
  {
    q: "What details should I send first?",
    a: "Send your property type, city, approximate space size, budget range, style preference, and photos or layout if available.",
  },
  {
    q: "Why is this contact page important for sales?",
    a: "A strong contact page removes friction, gives multiple action paths, answers user doubt, and makes enquiry feel simple and professional.",
  },
];

export const metadata: Metadata = {
  title:
    "Contact Interior Designer | WhatsApp, Call, Email & Consultation for Home, Office & Modular Interior Projects",
  description:
    "Contact for premium interior design services for homes, offices, modular kitchens, bedrooms, shops, showrooms, and turnkey projects. WhatsApp-first contact page with strong SEO, premium UI, and high-conversion enquiry flow.",
  keywords: [
    "contact interior designer",
    "interior design contact page",
    "home interior consultation",
    "office interior consultation",
    "modular kitchen enquiry",
    "bedroom interior contact",
    "shop showroom interior enquiry",
    "interior designer WhatsApp",
    "interior designer Korba",
    "interior designer Chhattisgarh",
    "premium interior contact page",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/interior/contact/",
  },
  openGraph: {
    title:
      "Contact Interior Designer | WhatsApp, Call, Email & Consultation for Home, Office & Modular Interior Projects",
    description:
      "Premium interior design contact page built for faster enquiries, trust, and WhatsApp-first lead conversion.",
    url: "https://globalcomputers.net/projects/interior/contact/",
    type: "website",
  },
};

function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "center max-w-prose mx-auto" : "max-w-prose"}>
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="heading-xl mt-5">{title}</h1>
      <p className="lead mt-4">{text}</p>
    </div>
  );
}

export default function InteriorContactPage() {
  return (
    <>
      <section className="section-hero">
        <div className="container hero-grid">
          <div>
            <SectionHeading
              eyebrow="Contact Us"
              title="Talk to an interior expert and move your project forward with clarity"
              text="This contact page is built for conversion. It gives your customer fast contact options, explains what to share, removes doubt, and makes enquiry easy for homes, offices, kitchens, shops, showrooms, and premium interior projects."
            />

            <div className="trust-row mt-8">
              <span className="badge">Fast WhatsApp Response</span>
              <span className="badge">Residential + Commercial</span>
              <span className="badge">Budget + Style Guidance</span>
              <span className="badge">Professional Sales Flow</span>
            </div>

            <div className="cta-row mt-8">
              <a href={WHATSAPP} className="btn btn-whatsapp">
                Chat on WhatsApp
              </a>
              <a href={PHONE_LINK} className="btn btn-secondary">
                Call Now
              </a>
              <a href={EMAIL_LINK} className="btn btn-primary">
                Send Email
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="surface-strong p-6 md:p-7">
              <span className="badge badge-soft">Best Closing Page</span>
              <h2 className="heading-lg mt-5">
                A strong contact page turns interested visitors into real enquiries
              </h2>
              <p className="lead mt-4">
                After seeing your services and projects, the visitor should not
                feel confused about what to do next. This page makes the final
                action easy, direct, and professional.
              </p>

              <div className="grid-auto-2 mt-7">
                <div className="feature-card">
                  <div className="text-soft text-sm font-bold uppercase tracking-[0.14em]">
                    Main Goal
                  </div>
                  <div className="heading-md mt-3">Reduce friction</div>
                  <p className="text-muted mt-3">
                    Clear action choices help users contact quickly without
                    searching for phone number, email, or next step.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="text-soft text-sm font-bold uppercase tracking-[0.14em]">
                    Sales Benefit
                  </div>
                  <div className="heading-md mt-3">Increase serious leads</div>
                  <p className="text-muted mt-3">
                    Good contact flow improves trust, speeds up response, and
                    increases the chance of direct project discussion.
                  </p>
                </div>
              </div>

              <div className="cta-row mt-7">
                <Link href="/projects/interior/billing" className="btn btn-dark">
                  Check Estimate Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <SectionHeading
            eyebrow="Contact Options"
            title="Choose the fastest way to discuss your interior project"
            text="Different buyers prefer different contact styles. This section makes it easy for everyone to move ahead in the way they are most comfortable."
            center
          />

          <div className="grid-auto-3 mt-12">
            {contactOptions.map((item) => (
              <article key={item.title} className="feature-card">
                <h2 className="heading-md">{item.title}</h2>
                <div className="mt-3 font-extrabold text-lg">{item.value}</div>
                <p className="text-muted mt-3">{item.desc}</p>
                <div className="cta-row mt-7">
                  <a href={item.href} className="btn btn-whatsapp btn-block">
                    {item.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Why Contact Now"
            title="Help the buyer understand why reaching out is worth it"
            text="A good contact page should not only show contact details. It should also give the user strong reasons to take action immediately."
          />

          <div className="grid-auto-2 mt-12">
            {reasonsToContact.map((item) => (
              <article key={item.title} className="service-card">
                <h2 className="heading-md">{item.title}</h2>
                <p className="text-muted mt-3">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="cta-row mt-10">
            <a href={WHATSAPP} className="btn btn-whatsapp">
              Start Project Discussion
            </a>
            <a href={PHONE_LINK} className="btn btn-secondary">
              Speak Directly
            </a>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="soft-panel p-6 md:p-10">
            <SectionHeading
              eyebrow="What To Share"
              title="Send the right details to get faster and better response"
              text="When the customer knows exactly what to send, the conversation becomes faster, easier, and more useful from the first message."
            />

            <div className="grid-auto-2 mt-10">
              <div className="surface p-6">
                <h2 className="heading-md">Best details to share first</h2>
                <ul className="mt-5 space-y-3 text-muted">
                  {whatToShare.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="surface p-6">
                <h2 className="heading-md">Why this improves conversion</h2>
                <ul className="mt-5 space-y-3 text-muted">
                  <li>• Makes the enquiry look more serious</li>
                  <li>• Helps you respond with more accuracy</li>
                  <li>• Reduces back-and-forth confusion</li>
                  <li>• Speeds up budget and package discussion</li>
                  <li>• Moves the lead closer to estimate stage</li>
                </ul>
              </div>
            </div>

            <div className="cta-row mt-8">
              <a href={WHATSAPP} className="btn btn-whatsapp">
                Send Requirement on WhatsApp
              </a>
              <a href={EMAIL_LINK} className="btn btn-primary">
                Email My Requirement
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Service Area"
            title="Suitable for local, regional, and wider project enquiries"
            text="Showing service coverage improves trust and local SEO while helping the buyer know whether they can contact you confidently."
            center
          />

          <div className="grid-auto-3 mt-12">
            <article className="feature-card">
              <h2 className="heading-md">Korba</h2>
              <p className="text-muted mt-3">
                Interior design consultation and enquiry support for residential and commercial projects.
              </p>
            </article>

            <article className="feature-card">
              <h2 className="heading-md">Bilaspur & Raipur</h2>
              <p className="text-muted mt-3">
                Suitable for premium home, office, modular kitchen, showroom, and other interior requirements.
              </p>
            </article>

            <article className="feature-card">
              <h2 className="heading-md">Chhattisgarh & India</h2>
              <p className="text-muted mt-3">
                Strong project presentation for wider enquiries, remote discussion, and professional business visibility.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Remove the final doubts before the enquiry happens"
            text="When the contact page answers common questions, the visitor feels more confident and more ready to take action."
            center
          />

          <div className="grid-auto-2 mt-12">
            {faqs.map((item) => (
              <article key={item.q} className="feature-card">
                <h2 className="heading-md">{item.q}</h2>
                <p className="text-muted mt-3">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="glass-card p-6 md:p-10 center">
            <span className="eyebrow mx-auto">Final CTA</span>
            <h2 className="heading-xl mt-5">
              Ready to discuss your home, office, kitchen, or showroom interior project?
            </h2>
            <p className="lead mt-4 max-w-prose mx-auto">
              Share your property type, city, approximate size, style preference,
              and budget range on WhatsApp for the fastest response. This page is
              designed to make serious interior enquiries easy and professional.
            </p>

            <div className="cta-row mt-8 justify-center">
              <a href={WHATSAPP} className="btn btn-whatsapp">
                Chat on WhatsApp
              </a>
              <a href={PHONE_LINK} className="btn btn-secondary">
                Call Now
              </a>
              <a href={EMAIL_LINK} className="btn btn-primary">
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}