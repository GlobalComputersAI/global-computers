import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Premium Builder Website Demo | Real Estate Project Showcase",
  description:
    "Explore a premium builder and real estate website demo with project showcase, pricing, amenities, location advantages, brochure CTA, WhatsApp enquiry flow, and site visit lead generation.",
  keywords: [
    "builder website home page",
    "real estate website demo India",
    "builder project showcase website",
    "property developer website demo",
    "real estate landing page design",
    "luxury builder website",
    "builder website with WhatsApp",
    "site visit lead generation website",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/builder/",
  },
  openGraph: {
    title: "Premium Builder Website Demo | Real Estate Project Showcase",
    description:
      "Premium builder and real estate website demo designed for brochure requests, WhatsApp leads, and site visit enquiries.",
    url: "https://globalcomputers.net/projects/builder/",
    type: "website",
    siteName: "Global Computers & IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Builder Website Demo | Real Estate Project Showcase",
    description:
      "Premium builder website demo with project pages, pricing, amenities, and WhatsApp lead flow.",
  },
};

const BASE = "/projects/builder";
const WHATSAPP_LINK =
  "https://wa.me/919752422686?text=Hi%20I%20want%20a%20premium%20Builder%20%2F%20Real%20Estate%20Website.%20Please%20share%20demo%2C%20pricing%2C%20features%2C%20and%20delivery%20time.";
const CALL_LINK = "tel:+919752422686";

const trustBadges = [
  "Premium Project Showcase",
  "WhatsApp Lead Focused",
  "Brochure & Site Visit CTA",
  "Mobile Friendly Design",
  "SEO Ready Structure",
  "Fast Delivery Available",
];

const stats = [
  { value: "Premium", label: "Builder-first design style" },
  { value: "Lead Focused", label: "Built for direct enquiries" },
  { value: "Mobile Ready", label: "Strong on phone screens" },
  { value: "High Trust", label: "Presentation that feels credible" },
];

const highlights = [
  {
    title: "Project Showcase That Looks Premium",
    desc: "Show flats, villas, plots, commercial spaces, and township projects in a clean, high-value layout that improves trust and makes your business look bigger.",
  },
  {
    title: "WhatsApp, Call & Brochure Conversion Flow",
    desc: "The website is designed to push visitors toward brochure requests, direct calls, WhatsApp chats, and site visit bookings instead of just passive browsing.",
  },
  {
    title: "Builder Branding + Sales Presentation Together",
    desc: "This is not only a design demo. It is a builder sales asset made to improve branding, showcase project value, and increase enquiry quality.",
  },
];

const featuredProjects = [
  {
    name: "Skyline Residency",
    type: "2 & 3 BHK Premium Flats",
    location: "Prime City Location",
    price: "Starting from ₹32 Lakh*",
    status: "Ongoing Project",
  },
  {
    name: "Green Valley Villas",
    type: "Luxury Villas & Gated Living",
    location: "Fast-Growing Residential Zone",
    price: "Starting from ₹58 Lakh*",
    status: "Limited Inventory",
  },
  {
    name: "Golden Square Plots",
    type: "Residential Plots / Investment",
    location: "High Growth Corridor",
    price: "Plots from ₹9.5 Lakh*",
    status: "Hot Selling Project",
  },
];

const amenities = [
  "Club House & Community Space",
  "24×7 Security & CCTV",
  "Wide Internal Roads",
  "Landscaped Garden",
  "Children Play Area",
  "Reserved Parking",
  "Power Backup Support",
  "Modern Entrance Gate",
];

const locationPoints = [
  "Near market, school, and hospital access",
  "Better road connectivity for daily travel",
  "Strong appeal for family buyers and investors",
  "Suitable for brochure, map, and site visit marketing",
];

const salesBlocks = [
  {
    title: "For Builders & Developers",
    points: [
      "Show all your projects professionally",
      "Improve brand image and project trust",
      "Get more direct WhatsApp and call enquiries",
      "Share brochures and payment plans faster",
    ],
  },
  {
    title: "For Property Buyers",
    points: [
      "Clear project information in one place",
      "Easy access to project highlights and pricing",
      "Simple brochure and site visit request flow",
      "More trust through premium presentation",
    ],
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

export default function BuilderHomePage() {
  return (
    <main>
      <section className="builder-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_24%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_20%),linear-gradient(180deg,rgba(7,17,31,0.05)_0%,rgba(7,17,31,0.3)_100%)]" />

        <div className="relative z-[1] mx-auto max-w-7xl px-6 pb-20 pt-16 md:pb-24 md:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-2">
                {trustBadges.slice(0, 4).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-amber-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <h1 className="builder-title mt-7 max-w-4xl text-4xl leading-tight md:text-6xl">
                Premium Builder Website Demo That Looks Trusted, Sells Better,
                and Drives More Property Enquiries
              </h1>

              <p className="builder-text mt-6 max-w-3xl text-base md:text-lg">
                This builder and real estate website demo is designed for
                developers, colonizers, and construction businesses who want
                more than a simple website. It helps present projects
                professionally, improve trust, and convert visitors into real
                brochure requests, WhatsApp chats, calls, and site visit leads.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="builder-btn-whatsapp"
                >
                  Get Demo on WhatsApp
                </a>

                <Link href={`${BASE}/projects/`} className="builder-btn-primary">
                  View Projects
                </Link>

                <a href={CALL_LINK} className="builder-btn-secondary">
                  Call Now
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((item) => (
                  <div key={item.label} className="builder-card-soft p-5">
                    <p className="text-lg font-black text-white">{item.value}</p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-white/65">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="builder-card relative overflow-hidden p-6 md:p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.16),transparent_24%)]" />
                <div className="relative z-[1]">
                  <span className="builder-eyebrow">Featured Builder Demo</span>

                  <div className="mt-5 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_100%)] p-5">
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-amber-200">
                      Showcase Type
                    </p>
                    <h2 className="mt-2 text-2xl font-black text-white">
                      Luxury Flats • Villas • Plots • Commercial
                    </h2>
                    <p className="mt-3 text-sm font-semibold leading-7 text-white/70">
                      A premium presentation style built to make your real
                      estate business look more professional and easier to trust.
                    </p>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                      <p className="text-sm font-black text-white">
                        Brochure Request Flow
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-white/65">
                        Encourage buyers to request project brochures directly
                        through WhatsApp.
                      </p>
                    </div>

                    <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                      <p className="text-sm font-black text-white">
                        Site Visit Conversion
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-white/65">
                        Strong calls-to-action designed to push more property
                        visit enquiries.
                      </p>
                    </div>

                    <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                      <p className="text-sm font-black text-white">
                        Mobile First Layout
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-white/65">
                        Most buyers browse on phones, so the experience stays
                        strong on smaller screens.
                      </p>
                    </div>

                    <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                      <p className="text-sm font-black text-white">
                        Premium Brand Feel
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-white/65">
                        A polished look that improves perception, trust, and
                        buyer confidence.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={`${BASE}/project-details/`}
                      className="builder-btn-primary flex-1"
                    >
                      Explore Project Details
                    </Link>
                    <Link
                      href={`${BASE}/Bill/`}
                      className="builder-btn-secondary flex-1"
                    >
                      View Pricing
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="builder-outline-card mt-12 grid gap-5 p-6 md:grid-cols-3 md:p-7">
            {highlights.map((item) => (
              <div key={item.title}>
                <p className="text-lg font-black text-white">{item.title}</p>
                <p className="mt-3 text-sm font-semibold leading-7 text-white/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="builder-section mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Featured Projects"
          title="Present Every Project Like a Strong Sales Asset"
          desc="A builder website should not feel like a plain brochure. It should help buyers compare projects, understand value quickly, and take the next step with confidence."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article key={project.name} className="builder-card overflow-hidden">
              <div className="h-56 bg-[linear-gradient(135deg,rgba(251,191,36,0.14),rgba(255,255,255,0.04)),linear-gradient(180deg,#162235_0%,#0d1728_100%)]" />

              <div className="p-6">
                <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-amber-200">
                  {project.status}
                </span>

                <h3 className="mt-4 text-2xl font-black text-white">
                  {project.name}
                </h3>

                <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-white/55">
                  {project.type}
                </p>

                <div className="mt-5 space-y-3 text-sm font-semibold text-white/72">
                  <p>Location: {project.location}</p>
                  <p>Pricing: {project.price}</p>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`${BASE}/project-details/`}
                    className="builder-btn-secondary flex-1"
                  >
                    View Details
                  </Link>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="builder-btn-whatsapp flex-1"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href={`${BASE}/projects/`} className="builder-btn-primary">
            View All Builder Projects
          </Link>
        </div>
      </section>

      <section className="builder-section mx-auto max-w-7xl px-6 py-6">
        <div className="builder-card grid gap-8 p-6 md:p-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="builder-eyebrow">Why This Sells Better</span>
            <h2 className="builder-title mt-5 text-3xl md:text-4xl">
              A Builder Website Should Convert, Not Just Look Good
            </h2>
            <p className="builder-text mt-4 text-sm md:text-base">
              Most builder websites fail because they only show information.
              Strong builder websites guide buyers toward enquiry, build trust
              quickly, and help your sales team get better leads with less
              friction.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href={`${BASE}/Bill/`} className="builder-btn-primary">
                Check Pricing
              </Link>
              <Link
                href={`${BASE}/Contactus/`}
                className="builder-btn-secondary"
              >
                Book a Call
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-5 md:grid-cols-2">
              {salesBlocks.map((block) => (
                <div key={block.title} className="builder-card-soft p-5">
                  <h3 className="text-xl font-black text-white">
                    {block.title}
                  </h3>

                  <ul className="mt-4 space-y-3">
                    {block.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-xs font-black text-slate-950">
                          ✓
                        </span>
                        <span className="text-sm font-semibold leading-6 text-white/72">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="builder-section mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="builder-card h-full p-6 md:p-8">
              <span className="builder-eyebrow">Amenities & Lifestyle</span>
              <h2 className="builder-title mt-5 text-3xl md:text-4xl">
                Show Amenities in a Way That Feels Aspirational
              </h2>
              <p className="builder-text mt-4">
                Buyers do not only compare price. They compare lifestyle,
                convenience, family comfort, and project value. A premium layout
                helps amenities feel more attractive and memorable.
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

              <div className="mt-8">
                <Link
                  href={`${BASE}/project-details/`}
                  className="builder-btn-primary"
                >
                  View Floor Plan & Amenities
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="builder-card h-full p-6 md:p-8">
              <span className="builder-eyebrow">Location Advantage</span>
              <h2 className="builder-title mt-5 text-3xl md:text-4xl">
                Location Sells Trust, Value, and Future Growth
              </h2>

              <ul className="mt-6 space-y-4">
                {locationPoints.map((point) => (
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
                  Good builder websites reduce hesitation.
                </p>
                <p className="mt-3 text-sm font-semibold leading-7 text-white/72">
                  When project details, location benefits, and pricing are
                  presented clearly, buyers feel more confident about taking the
                  next step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="builder-section mx-auto max-w-7xl px-6 py-6">
        <div className="builder-card overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-12">
            <div className="bg-[linear-gradient(135deg,rgba(251,191,36,0.12),rgba(255,255,255,0.02)),linear-gradient(180deg,#101b2d_0%,#0a1220_100%)] p-8 lg:col-span-7 md:p-10">
              <span className="builder-eyebrow">Pricing & Brochure CTA</span>
              <h2 className="builder-title mt-5 text-3xl md:text-5xl">
                Make It Easy for Buyers to Ask for Price, Brochure, and Site
                Visit
              </h2>
              <p className="builder-text mt-5 max-w-3xl text-sm md:text-base">
                A premium builder website works best when every important page
                pushes the visitor toward one clear action. That is why pricing,
                brochure request, and contact flow should be simple, visible,
                and mobile friendly.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href={`${BASE}/Bill/`} className="builder-btn-primary">
                  View Pricing Page
                </Link>
                <Link
                  href={`${BASE}/Contactus/`}
                  className="builder-btn-secondary"
                >
                  Contact Sales
                </Link>
              </div>
            </div>

            <div className="p-8 lg:col-span-5 md:p-10">
              <div className="space-y-4">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-black text-white">
                    Price & Unit Type Presentation
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white/68">
                    Clear layout for unit types, starting price, payment flow,
                    and project highlights.
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-black text-white">
                    Brochure Request & Quick Response
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white/68">
                    Turn interest into action with WhatsApp-first brochure and
                    sales communication.
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-black text-white">
                    Site Visit Lead Generation
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white/68">
                    Encourage calls and visits from buyers who are already
                    interested in the project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="builder-section mx-auto max-w-7xl px-6 py-20">
        <div className="builder-outline-card p-8 text-center md:p-12">
          <span className="builder-eyebrow">Final Call To Action</span>
          <h2 className="builder-title mx-auto mt-5 max-w-4xl text-3xl md:text-5xl">
            Want a Builder Website That Feels Premium and Brings More Direct
            Enquiries?
          </h2>
          <p className="builder-text mx-auto mt-5 max-w-3xl text-sm md:text-base">
            This demo is designed for builders, developers, colonizers, and real
            estate businesses that want stronger branding, better presentation,
            and more conversion through WhatsApp, calls, brochure requests, and
            site visits.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="builder-btn-whatsapp"
            >
              WhatsApp for Demo
            </a>

            <a href={CALL_LINK} className="builder-btn-primary">
              Call Now
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