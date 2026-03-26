import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Builder Sales | Site Visit, Brochure & Project Enquiry",
  description:
    "Contact builder sales for brochure, pricing, floor plans, site visit booking, unit availability, and project details. Premium builder contact page demo with WhatsApp, call, and enquiry flow.",
  keywords: [
    "builder contact page",
    "real estate contact page",
    "builder sales enquiry page",
    "site visit booking page",
    "property brochure enquiry",
    "builder WhatsApp contact",
    "project enquiry page",
    "real estate lead contact page",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/builder/Contactus/",
  },
  openGraph: {
    title: "Contact Builder Sales | Site Visit, Brochure & Project Enquiry",
    description:
      "Premium builder contact page demo for brochure requests, pricing, site visit booking, and WhatsApp sales enquiries.",
    url: "https://globalcomputers.net/projects/builder/Contactus/",
    type: "website",
    siteName: "Global Computers & IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Builder Sales | Site Visit, Brochure & Project Enquiry",
    description:
      "Premium builder contact page with brochure request, pricing support, site visit CTA, and direct WhatsApp enquiry flow.",
  },
};

const BASE = "/projects/builder";
const SALES_CALL = "tel:+919752422686";
const HARDWARE_CALL = "tel:+919827164811";

const SALES_WHATSAPP =
  "https://wa.me/919752422686?text=Hi%20I%20want%20details%20for%20your%20builder%20website%20demo.%20Please%20share%20brochure%2C%20pricing%2C%20project%20details%2C%20and%20delivery%20time.";
const SITE_VISIT_WHATSAPP =
  "https://wa.me/919752422686?text=Hi%2C%20I%20want%20to%20book%20a%20site%20visit%20for%20the%20builder%20project.%20Please%20share%20available%20time%2C%20location%2C%20brochure%2C%20and%20pricing.";
const BROCHURE_WHATSAPP =
  "https://wa.me/919752422686?text=Hi%2C%20please%20share%20builder%20project%20brochure%2C%20price%2C%20floor%20plan%2C%20and%20availability%20details.";

const quickReasons = [
  "Brochure Request",
  "Pricing & Payment Plan",
  "Floor Plan Details",
  "Site Visit Booking",
  "Unit Availability",
  "Builder Website Demo",
];

const contactCards = [
  {
    title: "Sales & Website Demo",
    value: "+91 97524 22686",
    href: SALES_CALL,
    desc: "Builder website demo, pricing, project showcase pages, billing flow, and conversion-focused design support.",
  },
  {
    title: "Hardware & Infra Support",
    value: "+91 98271 64811",
    href: HARDWARE_CALL,
    desc: "Hardware, office IT, networking, infrastructure, and deployment support if required for builder business operations.",
  },
];

const enquiryTypes = [
  {
    title: "Brochure & Project Details",
    desc: "Ask for project brochure, unit details, floor plan, amenities, and price summary.",
  },
  {
    title: "Site Visit Booking",
    desc: "Schedule a site visit or ask for available slot, location guidance, and project walkthrough support.",
  },
  {
    title: "Pricing & Payment Plan",
    desc: "Get cost sheet, booking amount, payment breakup, tax, and due plan information.",
  },
  {
    title: "Website Demo & Customization",
    desc: "Ask how this builder website can be customized for real projects, developers, and sales teams.",
  },
];

const trustPoints = [
  "Premium builder website presentation",
  "WhatsApp-first sales conversion",
  "Project, brochure, and pricing flow ready",
  "Professional builder branding support",
  "Useful for flats, villas, plots, and commercial projects",
  "Fast customization possible",
];

const supportSteps = [
  {
    step: "01",
    title: "Tell us your requirement",
    desc: "Share whether you want brochure, price, floor plan, site visit support, or full builder website customization.",
  },
  {
    step: "02",
    title: "Get project or website details",
    desc: "We share the right information quickly so the buyer or builder does not waste time in back-and-forth confusion.",
  },
  {
    step: "03",
    title: "Move to next action",
    desc: "Continue with brochure request, call, site visit, pricing discussion, or website customization plan.",
  },
];

const faqs = [
  {
    q: "Can buyers request brochure and pricing from this page?",
    a: "Yes. This contact page is designed to make brochure, pricing, floor plan, and project details enquiry simple and fast.",
  },
  {
    q: "Can builders use this page for direct sales enquiries?",
    a: "Yes. The page is useful for builders who want buyers to contact them directly through WhatsApp and calls for site visits and project discussions.",
  },
  {
    q: "Can this page be customized for a real builder business?",
    a: "Yes. Phone numbers, office details, projects, enquiry flow, CTA text, and contact blocks can all be customized.",
  },
  {
    q: "Is this useful only for apartments?",
    a: "No. It works well for flats, villas, plots, township phases, and commercial property projects too.",
  },
];

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="builder-eyebrow">{eyebrow}</span>
      <h2 className="builder-title mt-5 text-3xl md:text-5xl">{title}</h2>
      <p className="builder-text mt-4 text-sm md:text-base">{desc}</p>
    </div>
  );
}

export default function BuilderContactPage() {
  return (
    <main>
      <section className="builder-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_24%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_18%)]" />

        <div className="relative z-[1] mx-auto max-w-7xl px-6 pb-16 pt-16 md:pb-20 md:pt-20">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-2">
                {quickReasons.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-amber-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <h1 className="builder-title mt-7 text-4xl leading-tight md:text-6xl">
                Contact Builder Sales for Brochure, Pricing, Site Visit, and
                Project Enquiry
              </h1>

              <p className="builder-text mt-6 max-w-3xl text-base md:text-lg">
                This premium builder contact page is designed to help buyers and
                builder clients move quickly toward the next action. Whether the
                requirement is brochure, floor plan, pricing, site visit, or
                full builder website customization, the contact flow is built to
                feel simple, direct, and trustworthy.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={SALES_WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="builder-btn-whatsapp"
                >
                  WhatsApp Sales
                </a>

                <a href={SALES_CALL} className="builder-btn-primary">
                  Call Now
                </a>

                <Link
                  href={`${BASE}/projects/`}
                  className="builder-btn-secondary"
                >
                  View Projects
                </Link>
              </div>

              <div className="builder-outline-card mt-10 p-6">
                <p className="text-lg font-black text-white">
                  Why this page converts better
                </p>
                <p className="mt-3 text-sm font-semibold leading-7 text-white/72">
                  A good builder contact page should not feel generic. It should
                  clearly show what the visitor can ask for, whom to contact,
                  and how to move forward fast through WhatsApp, calls, brochure
                  requests, and site visit actions.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="builder-card p-6 md:p-7">
                <span className="builder-eyebrow">Quick Contact Actions</span>

                <div className="mt-6 grid gap-4">
                  <a
                    href={BROCHURE_WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:bg-white/8"
                  >
                    <p className="text-lg font-black text-white">
                      Ask for Brochure
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-white/68">
                      Request brochure, pricing, floor plan, amenities, and
                      project details directly.
                    </p>
                  </a>

                  <a
                    href={SITE_VISIT_WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:bg-white/8"
                  >
                    <p className="text-lg font-black text-white">
                      Book Site Visit
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-white/68">
                      Ask for location, timing, availability, and visit planning
                      support.
                    </p>
                  </a>

                  <a
                    href={SALES_WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:bg-white/8"
                  >
                    <p className="text-lg font-black text-white">
                      Ask Pricing Details
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-white/68">
                      Get booking amount, cost sheet, payment plan, and billing
                      clarification.
                    </p>
                  </a>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={SALES_WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="builder-btn-whatsapp"
                  >
                    Start on WhatsApp
                  </a>
                  <a href={SALES_CALL} className="builder-btn-secondary">
                    Call Sales Team
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="builder-card mt-12 grid gap-5 p-6 md:grid-cols-3 md:p-7">
            {trustPoints.map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-white/10 bg-white/5 p-5"
              >
                <p className="text-sm font-black text-white">✓ {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="builder-section mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Contact Information"
          title="Speak to the Right Team Quickly"
          desc="This section gives buyers and builder clients a direct and premium way to connect for project enquiry, website demo, billing, pricing, and support."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {contactCards.map((card) => (
            <article key={card.title} className="builder-card p-6 md:p-7">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-amber-200">
                {card.title}
              </p>
              <a
                href={card.href}
                className="mt-3 block text-3xl font-black text-white transition hover:text-amber-300"
              >
                {card.value}
              </a>
              <p className="mt-4 text-sm font-semibold leading-7 text-white/72">
                {card.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="builder-section mx-auto max-w-7xl px-6 py-6">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="builder-card h-full p-6 md:p-8">
              <span className="builder-eyebrow">Enquiry Types</span>
              <h2 className="builder-title mt-5 text-3xl md:text-4xl">
                What This Contact Page Can Handle
              </h2>
              <p className="builder-text mt-4">
                A premium builder contact page should clearly support every
                important buyer action, from brochure and pricing to project
                visits and builder website enquiries.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {enquiryTypes.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-white/10 bg-white/5 p-5"
                  >
                    <p className="text-lg font-black text-white">
                      {item.title}
                    </p>
                    <p className="mt-3 text-sm font-semibold leading-7 text-white/70">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="builder-card h-full p-6 md:p-8">
              <span className="builder-eyebrow">Best Next Steps</span>
              <h2 className="builder-title mt-5 text-3xl md:text-4xl">
                Move the Buyer From Interest to Action
              </h2>

              <div className="mt-6 space-y-4">
                {supportSteps.map((item) => (
                  <div
                    key={item.step}
                    className="rounded-[24px] border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400 text-sm font-black text-slate-950">
                        {item.step}
                      </span>
                      <div>
                        <p className="text-lg font-black text-white">
                          {item.title}
                        </p>
                        <p className="mt-2 text-sm font-semibold leading-7 text-white/70">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3">
                <a
                  href={SITE_VISIT_WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="builder-btn-whatsapp"
                >
                  Book Site Visit
                </a>
                <Link
                  href={`${BASE}/Bill/`}
                  className="builder-btn-secondary"
                >
                  View Billing Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="builder-section mx-auto max-w-7xl px-6 py-20">
        <div className="builder-card overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-12">
            <div className="bg-[linear-gradient(135deg,rgba(251,191,36,0.12),rgba(255,255,255,0.03)),linear-gradient(180deg,#101b2d_0%,#0a1220_100%)] p-8 md:p-10 lg:col-span-7">
              <span className="builder-eyebrow">Builder Website Demo CTA</span>
              <h2 className="builder-title mt-5 text-3xl md:text-5xl">
                Want This Builder Contact Flow for Your Real Project?
              </h2>
              <p className="builder-text mt-5 max-w-3xl text-sm md:text-base">
                This page can be customized for builders, developers,
                colonizers, and real estate businesses that want stronger
                branding, faster buyer response, and more direct WhatsApp or
                call enquiries.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={SALES_WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="builder-btn-whatsapp"
                >
                  WhatsApp for Demo
                </a>
                <a href={SALES_CALL} className="builder-btn-primary">
                  Call Sales
                </a>
              </div>
            </div>

            <div className="p-8 md:p-10 lg:col-span-5">
              <div className="space-y-4">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-black text-white">
                    Best for Real Estate Lead Flow
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white/68">
                    Great for brochure requests, site visit booking, project
                    support, and serious buyer follow-up.
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-black text-white">
                    Built for Speed and Trust
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white/68">
                    Buyers get quicker action points, and builders get more
                    direct, cleaner enquiries.
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-black text-white">
                    Works With Full Builder Website
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white/68">
                    Combine this with projects, details, and billing pages for a
                    complete builder sales website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="builder-section mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Frequently Asked Questions"
          title="Common Questions About Builder Contact and Enquiry Flow"
          desc="These answers help buyers and builder clients understand how this page supports real project sales and lead conversion."
        />

        <div className="mt-14 grid gap-5">
          {faqs.map((item) => (
            <div key={item.q} className="builder-card p-6 md:p-7">
              <h3 className="text-xl font-black text-white">{item.q}</h3>
              <p className="mt-3 text-sm font-semibold leading-7 text-white/72">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="builder-section mx-auto max-w-7xl px-6 py-6 pb-20">
        <div className="builder-outline-card p-8 text-center md:p-12">
          <span className="builder-eyebrow">Final Call To Action</span>
          <h2 className="builder-title mx-auto mt-5 max-w-4xl text-3xl md:text-5xl">
            Ready to Ask for Brochure, Pricing, or Site Visit Details?
          </h2>
          <p className="builder-text mx-auto mt-5 max-w-3xl text-sm md:text-base">
            This contact page is designed to help builders capture more serious
            enquiries and help buyers move quickly toward the next step through
            direct WhatsApp, phone, brochure request, and site visit action.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={BROCHURE_WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="builder-btn-whatsapp"
            >
              Get Brochure
            </a>

            <a href={SALES_CALL} className="builder-btn-primary">
              Call Now
            </a>

            <Link
              href={`${BASE}/project-details/`}
              className="builder-btn-secondary"
            >
              View Project Details
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}