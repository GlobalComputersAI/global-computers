import type { Metadata } from "next";
import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/919752422686?text=Hi%20I%20want%20more%20details%20about%20your%20mobile%20shop%20website%20demo.%20Please%20share%20price%2C%20features%2C%20and%20next%20step.";
const CALL_URL = "tel:+919752422686";
const MAP_URL = "https://maps.google.com/?q=Global+Computers+%26+IT+Solutions";
const EMAIL = "globalcomputers.it.solutions@gmail.com";

const contactCards = [
  {
    title: "Call Now",
    value: "+91 97524 22686",
    href: CALL_URL,
    description:
      "Best for instant discussion, quick questions, and direct project enquiry.",
  },
  {
    title: "WhatsApp",
    value: "Chat on WhatsApp",
    href: WHATSAPP_URL,
    description:
      "Best for fast replies, demo request, price enquiry, and business discussion.",
  },
  {
    title: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    description:
      "Best for detailed requirements, documents, branding details, and formal communication.",
  },
];

const trustPoints = [
  "Fast response for demo and price enquiry",
  "WhatsApp-first conversion for quick customer action",
  "Best for mobile shops, repair stores, and accessories businesses",
  "Professional website setup for stronger local trust",
  "Easy customization with business name, city, offers, and services",
  "Built to turn visitors into calls, chats, and real enquiries",
];

const businessHighlights = [
  {
    title: "Mobile Shop Website Demo",
    text: "A premium layout designed for smartphone stores, accessories shops, and repair-focused businesses.",
  },
  {
    title: "Best for Local Business Growth",
    text: "Helps your shop look more modern, trustworthy, and easier to contact for both sales and service.",
  },
  {
    title: "Fast Customization",
    text: "Your business name, products, offers, categories, and contact details can be updated quickly.",
  },
  {
    title: "High-Conversion Contact Flow",
    text: "Strong call, WhatsApp, and enquiry sections make it easier for customers to reach you immediately.",
  },
];

const faqs = [
  {
    q: "What details do I need to share to get this website made?",
    a: "You can share your shop name, city, mobile number, WhatsApp number, address, product categories, services, and any special offers or brand details you want displayed.",
  },
  {
    q: "Can this website be customized for my mobile shop?",
    a: "Yes. The design can be customized for your shop name, city, product sections, repair services, offers, billing page, and contact details.",
  },
  {
    q: "Can customers contact me directly from the website?",
    a: "Yes. This demo is built with strong direct contact options like call and WhatsApp to improve enquiry conversion.",
  },
  {
    q: "Is this page good for local SEO and trust?",
    a: "Yes. A strong contact page improves local business trust and helps visitors quickly understand how to reach your shop.",
  },
];

export const metadata: Metadata = {
  title: "Contact Mobile Shop Website Demo | Call, WhatsApp, Email & Business Enquiry",
  description:
    "Contact page for mobile shop website demo. Get details on mobile store website design, repair service website setup, accessories showcase pages, billing demo, and WhatsApp-first business enquiry.",
  keywords: [
    "contact mobile shop website",
    "mobile website demo contact page",
    "mobile repair website enquiry",
    "phone shop website contact",
    "mobile accessories website contact",
    "mobile store website India contact",
    "mobile website design enquiry",
    "mobile business website contact",
    "mobile repair website demo contact",
    "mobile website WhatsApp enquiry",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/mobile/contact/",
  },
  openGraph: {
    title: "Contact Mobile Shop Website Demo | Call, WhatsApp & Enquiry",
    description:
      "Contact us for mobile shop website demo, product showcase pages, service pages, billing page, and business website setup.",
    url: "https://globalcomputers.net/projects/mobile/contact/",
    siteName: "Global Computers & IT Solutions",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Mobile Shop Website Demo | Call, WhatsApp & Enquiry",
    description:
      "Get in touch for premium mobile shop website design, repair service pages, and billing demo setup.",
  },
};

export default function MobileContactPage() {
  return (
    <>
      <section className="section-lg bg-grid bg-radial overflow-hidden">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <span className="eyebrow">Contact Mobile Website Demo</span>

              <h1 className="section-title mt-6 max-w-4xl">
                Contact Us for a{" "}
                <span className="gradient-text">Premium Mobile Shop Website</span> That
                Builds Trust, Improves Sales, and Brings More Enquiries
              </h1>

              <p className="section-subtitle">
                Get in touch for a high-converting mobile shop website demo built for
                smartphone sales, accessories showcase, repair services, billing display,
                and direct WhatsApp enquiry. Best for mobile stores that want stronger
                branding and better customer response.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary sm:w-auto"
                  aria-label="Chat on WhatsApp for mobile website demo"
                >
                  WhatsApp Now
                </a>
                <a
                  href={CALL_URL}
                  className="btn btn-secondary sm:w-auto"
                  aria-label="Call now for mobile website enquiry"
                >
                  Call Now
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Fast Response",
                  "Direct Business Enquiry",
                  "WhatsApp Conversion",
                  "Mobile Shop Website Setup",
                ].map((item) => (
                  <span key={item} className="stat-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass-card float-soft relative overflow-hidden p-5 sm:p-6">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-950 via-blue-600 to-cyan-500" />

                <div className="rounded-[28px] bg-slate-950 p-5 text-white shadow-2xl shadow-slate-300/30 sm:p-6">
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        Direct Contact
                      </p>
                      <h2 className="mt-2 text-2xl font-black tracking-tight">
                        Let’s Build Your Mobile Website
                      </h2>
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold">
                      Best for Conversion
                    </span>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {[
                      {
                        title: "Call",
                        note: "Best for instant discussion and quick project closing",
                      },
                      {
                        title: "WhatsApp",
                        note: "Best for fast reply, demo request, and price enquiry",
                      },
                      {
                        title: "Email",
                        note: "Best for detailed requirements and document sharing",
                      },
                      {
                        title: "Customization",
                        note: "Shop name, city, products, services, and offers",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="rounded-[22px] border border-white/10 bg-white/5 p-4"
                      >
                        <p className="text-sm font-black text-white">{item.title}</p>
                        <p className="mt-2 text-xs leading-6 text-slate-300">{item.note}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-[24px] border border-blue-500/20 bg-gradient-to-br from-blue-500/15 to-cyan-500/10 p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                      Main benefit
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-100">
                      This page removes friction and makes it easy for customers or shop
                      owners to contact you instantly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pulse-soft absolute -right-4 -top-4 hidden rounded-full border border-blue-100 bg-white px-4 py-3 text-xs font-black text-slate-900 shadow-lg sm:block">
                Easy Contact Flow
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="soft-card p-5 sm:p-7">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {trustPoints.map((item) => (
                <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-extrabold text-slate-900">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <span className="eyebrow">Contact Options</span>
            <h2 className="section-title mt-6">
              The Best Contact Structure for Faster Website and Business Enquiries
            </h2>
            <p className="section-subtitle">
              A great contact page should make communication fast, simple, and trustworthy.
              This page is designed to convert interest into action through call, WhatsApp,
              and email.
            </p>
          </div>

          <div className="grid-auto-3 mt-10">
            {contactCards.map((item) => (
              <article key={item.title} className="glass-card p-6 sm:p-7">
                <div className="badge-soft">{item.title}</div>
                <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-950">
                  {item.value}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-6">
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="btn btn-secondary sm:w-auto"
                    aria-label={`Use ${item.title} to contact`}
                  >
                    Contact via {item.title}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50/80">
        <div className="container">
          <div className="grid-feature">
            <div>
              <span className="eyebrow">Business Value</span>
              <h2 className="section-title mt-6">
                This Contact Page Is Built to Turn Visitors into Real Calls and WhatsApp
                Leads
              </h2>
              <p className="section-subtitle">
                A simple contact page is not enough. This one is designed to increase
                trust, reduce hesitation, and push users toward instant communication.
              </p>

              <div className="mt-8 grid gap-4">
                {businessHighlights.map((item) => (
                  <div key={item.title} className="soft-card rounded-[24px] p-5">
                    <h3 className="text-lg font-black tracking-tight text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="dark-panel p-6 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-200">
                Best for direct conversion
              </p>
              <h3 className="mt-4 text-3xl font-black tracking-tight">
                Make It Easy for the Customer to Contact You Without Any Confusion
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                When contact options are clear and direct, users act faster. This improves
                enquiry quality and helps website visitors become real business leads.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  "Direct call action",
                  "WhatsApp-first contact flow",
                  "Better business trust",
                  "Fast next-step communication",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-slate-100"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/projects/mobile/products" className="btn btn-dark sm:w-auto">
                  View Products Page
                </Link>
                <Link href="/projects/mobile/services" className="btn btn-dark sm:w-auto">
                  View Services Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <span className="eyebrow">Location & Reach</span>
              <h2 className="section-title mt-6">
                Add Address, Service Area, and Map Support for Stronger Local Trust
              </h2>
              <p className="section-subtitle">
                Contact pages work even better when users can quickly understand where the
                business is located and how to reach it. This improves confidence,
                especially for local mobile shops and repair businesses.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="soft-card rounded-[24px] p-5">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    Address / Area
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    Global Computers & IT Solutions
                    <br />
                    Korba, Chhattisgarh, India
                  </p>
                </div>

                <div className="soft-card rounded-[24px] p-5">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    Email Support
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{EMAIL}</p>
                </div>

                <div className="soft-card rounded-[24px] p-5">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    Best For
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    Mobile shops, smartphone stores, repair centers, accessories sellers,
                    and local electronics businesses.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-2xl font-black tracking-tight text-slate-950">
                Quick Action Section
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Use this type of section to make contact easy for every visitor. This is
                one of the most important blocks for improving conversion.
              </p>

              <div className="mt-6 grid gap-4">
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[22px] border border-slate-200 bg-white px-4 py-4 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                  aria-label="Open map location"
                >
                  Open Business Location on Map
                </a>

                <a
                  href={CALL_URL}
                  className="rounded-[22px] border border-slate-200 bg-white px-4 py-4 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                  aria-label="Call now"
                >
                  Call for Direct Discussion
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[22px] border border-slate-200 bg-white px-4 py-4 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                  aria-label="Chat on WhatsApp"
                >
                  WhatsApp for Demo and Price
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="rounded-[22px] border border-slate-200 bg-white px-4 py-4 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                  aria-label="Send email"
                >
                  Email for Detailed Requirement
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50/80">
        <div className="container">
          <div className="dark-panel p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-200">
                  Mobile Website Contact Offer
                </p>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                  Ready to Get a Mobile Shop Website Like This for Your Business?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
                  Contact now to get a premium mobile shop website with homepage, products
                  page, services page, contact page, and billing section. Best for local
                  trust, better branding, and stronger customer conversion.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn bg-white text-slate-950 hover:bg-slate-100 sm:w-auto"
                    aria-label="WhatsApp now for website demo"
                  >
                    WhatsApp for Demo
                  </a>
                  <a
                    href={CALL_URL}
                    className="btn btn-dark sm:w-auto"
                    aria-label="Call now for website"
                  >
                    Call for Website
                  </a>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 sm:p-6">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-300">
                  Best next step
                </p>

                <div className="mt-5 grid gap-3">
                  {[
                    "Share your shop name and city",
                    "Share your mobile number and WhatsApp number",
                    "Share products, categories, and offers",
                    "Share services like repair or setup support",
                    "Share address and branding preference",
                    "Get your website customized for business use",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="max-w-3xl">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2 className="section-title mt-6">
              Common Questions About This Contact Page
            </h2>
          </div>

          <div className="mt-10 grid gap-4">
            {faqs.map((item) => (
              <article key={item.q} className="soft-card p-5 sm:p-6">
                <h3 className="text-lg font-black tracking-tight text-slate-950">
                  {item.q}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}