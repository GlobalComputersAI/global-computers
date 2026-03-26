import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Project Details | Premium Builder Website Demo",
  description:
    "View premium builder project details with highlights, floor plans, amenities, pricing preview, location advantages, brochure CTA, and site visit enquiry flow.",
  keywords: [
    "builder project details page",
    "real estate project details website",
    "floor plan page builder website",
    "builder amenities page",
    "property brochure website",
    "site visit enquiry page",
    "real estate project showcase",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/builder/project-details/",
  },
  openGraph: {
    title: "Project Details | Premium Builder Website Demo",
    description:
      "Premium real estate project details page with floor plans, amenities, location highlights, and brochure CTA.",
    url: "https://globalcomputers.net/projects/builder/project-details/",
    type: "website",
    siteName: "Global Computers & IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Details | Premium Builder Website Demo",
    description:
      "Premium builder project details page with highlights, amenities, pricing preview, and site visit CTA.",
  },
};

const BASE = "/projects/builder";
const WHATSAPP_LINK =
  "https://wa.me/919752422686?text=Hi%20I%20want%20details%20for%20this%20builder%20project.%20Please%20share%20brochure%2C%20price%2C%20floor%20plan%2C%20and%20site%20visit%20information.";
const CALL_LINK = "tel:+919752422686";

const projectFacts = [
  "Premium residential project",
  "2 & 3 BHK smart layouts",
  "Prime connected location",
  "Modern amenities for family living",
  "Brochure, pricing, and site visit CTA ready",
];

const quickStats = [
  { label: "Project Type", value: "2 & 3 BHK Premium Apartments" },
  { label: "Starting Price", value: "₹32 Lakh*" },
  { label: "Project Status", value: "Ongoing" },
  { label: "Possession", value: "Expected Soon" },
];

const highlights = [
  {
    title: "Premium Modern Elevation",
    desc: "A project presentation that feels aspirational, premium, and suitable for both end users and investors.",
  },
  {
    title: "Smart Family-Friendly Layouts",
    desc: "Floor plans designed for practical daily use, better movement, and a cleaner premium-living experience.",
  },
  {
    title: "Strong Sales Presentation",
    desc: "Perfect for brochure requests, project explanation, and direct site visit conversions through WhatsApp and calls.",
  },
];

const unitPlans = [
  {
    title: "2 BHK Comfort",
    area: "1025 sq. ft.*",
    price: "From ₹32 Lakh*",
    desc: "Good for small families looking for premium daily comfort with balanced layout and practical room sizes.",
  },
  {
    title: "2 BHK Premium",
    area: "1180 sq. ft.*",
    price: "From ₹36 Lakh*",
    desc: "A more spacious version for buyers who want better living space, dining comfort, and stronger resale appeal.",
  },
  {
    title: "3 BHK Family",
    area: "1450 sq. ft.*",
    price: "From ₹44 Lakh*",
    desc: "Ideal for larger families wanting extra room, comfort, and a premium project experience.",
  },
];

const amenities = [
  "Grand entrance gate",
  "24×7 security & CCTV",
  "Club house / gathering area",
  "Children play zone",
  "Landscaped green space",
  "Power backup support",
  "Lift & common area finishing",
  "Reserved parking",
  "Wide internal roads",
  "Water supply support",
  "Community-friendly environment",
  "Attractive premium common spaces",
];

const locationAdvantages = [
  "Good city connectivity for daily travel",
  "Near school, market, and hospital access",
  "Better convenience for family buyers",
  "Good appeal for end-use and investment",
  "Suitable for smoother site visit selling",
];

const whyBuy = [
  "Looks premium and trustworthy in presentation",
  "Strong value for both family buyers and investors",
  "Project details can be shared clearly through brochure + WhatsApp",
  "Helps the sales team explain units and pricing faster",
];

const faqs = [
  {
    q: "Can buyers request brochure directly?",
    a: "Yes. This project page is designed to push brochure requests through WhatsApp and direct call actions.",
  },
  {
    q: "Can floor plans and pricing be customized?",
    a: "Yes. Unit type, area, price, possession, and project highlights can all be customized for the real builder project.",
  },
  {
    q: "Can this page help generate site visit leads?",
    a: "Yes. This layout is designed with strong trust, project clarity, and repeated enquiry calls-to-action to improve site visit conversions.",
  },
  {
    q: "Can the builder show multiple projects too?",
    a: "Yes. This details page can be used together with a projects listing page so the full builder portfolio looks more professional.",
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
    <div className="max-w-3xl">
      <span className="builder-eyebrow">{eyebrow}</span>
      <h2 className="builder-title mt-5 text-3xl md:text-5xl">{title}</h2>
      <p className="builder-text mt-4 text-sm md:text-base">{desc}</p>
    </div>
  );
}

export default function BuilderProjectDetailsPage() {
  return (
    <main>
      <section className="builder-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_22%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_18%)]" />

        <div className="relative z-[1] mx-auto max-w-7xl px-6 pb-16 pt-16 md:pb-20 md:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-2">
                {projectFacts.map((fact) => (
                  <span
                    key={fact}
                    className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-amber-200"
                  >
                    {fact}
                  </span>
                ))}
              </div>

              <h1 className="builder-title mt-7 text-4xl leading-tight md:text-6xl">
                Skyline Residency
              </h1>

              <p className="mt-3 text-lg font-black uppercase tracking-[0.14em] text-amber-300">
                Premium 2 & 3 BHK Living
              </p>

              <p className="builder-text mt-6 max-w-3xl text-base md:text-lg">
                This project details page is designed to help builders present a
                flagship project in a premium, trust-building format. It makes
                it easier for buyers to understand the project, compare unit
                options, review amenities, and take the next step through
                brochure request, direct call, or site visit enquiry.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="builder-btn-whatsapp"
                >
                  Get Brochure on WhatsApp
                </a>

                <a href={CALL_LINK} className="builder-btn-primary">
                  Call for Project Details
                </a>

                <Link
                  href={`${BASE}/Contactus/`}
                  className="builder-btn-secondary"
                >
                  Book Site Visit
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="builder-card overflow-hidden p-6 md:p-7">
                <div className="h-64 rounded-[28px] bg-[linear-gradient(135deg,rgba(251,191,36,0.16),rgba(255,255,255,0.05)),linear-gradient(180deg,#162235_0%,#0d1728_100%)]" />

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {quickStats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[22px] border border-white/10 bg-white/5 p-4"
                    >
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-white/50">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm font-black text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="builder-outline-card mt-6 p-5">
                  <p className="text-lg font-black text-white">
                    Premium builder presentation creates stronger trust.
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-7 text-white/72">
                    A clear project details page can improve brochure requests,
                    reduce buyer hesitation, and support better sales
                    conversations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="builder-card mt-12 grid gap-5 p-6 md:grid-cols-3 md:p-7">
            {highlights.map((item) => (
              <div key={item.title}>
                <p className="text-lg font-black text-white">{item.title}</p>
                <p className="mt-3 text-sm font-semibold leading-7 text-white/72">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="builder-section mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Floor Plans"
          title="Unit Options That Buyers Can Understand Quickly"
          desc="A good builder project page should make floor plans and pricing feel clear, simple, and premium. This helps buyers compare options without confusion."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {unitPlans.map((plan) => (
            <article key={plan.title} className="builder-card p-6 md:p-7">
              <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_100%)] p-5">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-amber-200">
                  Unit Type
                </p>
                <h3 className="mt-2 text-2xl font-black text-white">
                  {plan.title}
                </h3>
                <p className="mt-4 text-sm font-bold text-white/75">
                  Area: {plan.area}
                </p>
                <p className="mt-1 text-sm font-bold text-amber-300">
                  {plan.price}
                </p>
              </div>

              <p className="mt-5 text-sm font-semibold leading-7 text-white/72">
                {plan.desc}
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="builder-btn-whatsapp"
                >
                  Ask Floor Plan
                </a>
                <Link
                  href={`${BASE}/Bill/`}
                  className="builder-btn-secondary"
                >
                  Check Pricing
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="builder-section mx-auto max-w-7xl px-6 py-6">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="builder-card h-full p-6 md:p-8">
              <span className="builder-eyebrow">Amenities</span>
              <h2 className="builder-title mt-5 text-3xl md:text-4xl">
                Amenities Should Feel Desirable, Not Just Listed
              </h2>
              <p className="builder-text mt-4">
                The way amenities are shown changes buyer perception. A premium
                layout helps the project feel more comfortable, more modern, and
                more worth visiting in person.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {amenities.map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-sm font-black text-white">✓ {item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="builder-card h-full p-6 md:p-8">
              <span className="builder-eyebrow">Location Advantage</span>
              <h2 className="builder-title mt-5 text-3xl md:text-4xl">
                Good Location Presentation Improves Confidence
              </h2>

              <ul className="mt-6 space-y-4">
                {locationAdvantages.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-xs font-black text-slate-950">
                      ✓
                    </span>
                    <span className="text-sm font-semibold leading-7 text-white/72">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="builder-outline-card mt-7 p-5">
                <p className="text-lg font-black text-white">
                  Location clarity helps close more serious buyers.
                </p>
                <p className="mt-3 text-sm font-semibold leading-7 text-white/72">
                  When buyers understand convenience, connectivity, and future
                  value clearly, they are more likely to ask for brochure,
                  pricing, or site visit details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="builder-section mx-auto max-w-7xl px-6 py-20">
        <div className="builder-card grid gap-8 p-6 md:p-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="builder-eyebrow">Why Buyers Respond</span>
            <h2 className="builder-title mt-5 text-3xl md:text-4xl">
              This Page Is Built to Reduce Doubt and Improve Enquiries
            </h2>
            <p className="builder-text mt-4">
              Buyers respond better when the project page feels complete,
              premium, and easy to trust. That is why this structure focuses on
              clarity, aspiration, and repeated action points.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="builder-btn-whatsapp"
              >
                Get Brochure
              </a>
              <Link
                href={`${BASE}/Contactus/`}
                className="builder-btn-secondary"
              >
                Book Visit
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4">
              {whyBuy.map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-sm font-black text-white">✓ {item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="builder-section mx-auto max-w-7xl px-6 py-6">
        <div className="builder-card overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-12">
            <div className="bg-[linear-gradient(135deg,rgba(251,191,36,0.12),rgba(255,255,255,0.03)),linear-gradient(180deg,#101b2d_0%,#0a1220_100%)] p-8 md:p-10 lg:col-span-7">
              <span className="builder-eyebrow">Brochure & Pricing CTA</span>
              <h2 className="builder-title mt-5 text-3xl md:text-5xl">
                Want the Brochure, Price, Floor Plan, and Site Visit Details?
              </h2>
              <p className="builder-text mt-5 max-w-3xl text-sm md:text-base">
                This section is designed to move interested buyers toward the
                next step quickly. A good project page should never leave buyers
                wondering what to do next.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="builder-btn-whatsapp"
                >
                  WhatsApp for Brochure
                </a>
                <Link href={`${BASE}/Bill/`} className="builder-btn-primary">
                  View Pricing
                </Link>
              </div>
            </div>

            <div className="p-8 md:p-10 lg:col-span-5">
              <div className="space-y-4">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-black text-white">
                    Brochure Request
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white/68">
                    Share project brochure instantly through WhatsApp-based
                    enquiry flow.
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-black text-white">Pricing & Units</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white/68">
                    Show pricing, area, and unit options in a way that feels
                    clear and sales-ready.
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-black text-white">
                    Site Visit Enquiry
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white/68">
                    Encourage direct calls and serious visit requests from
                    interested buyers.
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
          title="Important Questions Buyers Usually Ask"
          desc="This section helps the project page feel more complete, reduces hesitation, and supports better enquiry quality."
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
            Interested in This Project? Get Brochure, Price, and Site Visit
            Details Now
          </h2>
          <p className="builder-text mx-auto mt-5 max-w-3xl text-sm md:text-base">
            This premium project details page is made to help builders present
            projects better and help buyers take action faster through WhatsApp,
            calls, brochure requests, and booking interest.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="builder-btn-whatsapp"
            >
              WhatsApp Now
            </a>

            <a href={CALL_LINK} className="builder-btn-primary">
              Call Sales
            </a>

            <Link href={`${BASE}/Contactus/`} className="builder-btn-secondary">
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}