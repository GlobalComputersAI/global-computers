import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Builder Projects | Real Estate Project Showcase Demo",
  description:
    "Explore builder and real estate project showcase demo pages for flats, villas, plots, and commercial properties with premium presentation, WhatsApp enquiry flow, pricing CTA, and site visit conversion.",
  keywords: [
    "builder projects page",
    "real estate projects website",
    "builder website projects demo",
    "property listing website demo",
    "real estate showcase page",
    "builder projects India",
    "premium builder website",
    "property developer website projects",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/builder/projects/",
  },
  openGraph: {
    title: "Builder Projects | Real Estate Project Showcase Demo",
    description:
      "Premium builder projects showcase page for flats, villas, plots, and commercial properties with strong enquiry-focused design.",
    url: "https://globalcomputers.net/projects/builder/projects/",
    type: "website",
    siteName: "Global Computers & IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Builder Projects | Real Estate Project Showcase Demo",
    description:
      "Premium builder projects page with property showcase, pricing CTA, and WhatsApp lead flow.",
  },
};

const BASE = "/projects/builder";
const CALL_LINK = "tel:+919752422686";
const WHATSAPP_LINK =
  "https://wa.me/919752422686?text=Hi%20I%20want%20details%20for%20your%20builder%20projects.%20Please%20share%20brochure%2C%20pricing%2C%20availability%2C%20and%20site%20visit%20details.";

const filterChips = [
  "All Projects",
  "Flats",
  "Villas",
  "Plots",
  "Commercial",
  "Ongoing",
  "Ready to Move",
];

const heroPoints = [
  "Premium project presentation",
  "Clear pricing & brochure CTA",
  "WhatsApp & call conversion flow",
  "Built for builder sales enquiries",
];

const projectStats = [
  { value: "Flats", label: "2 & 3 BHK options" },
  { value: "Villas", label: "Premium gated living" },
  { value: "Plots", label: "Investment-focused showcase" },
  { value: "Commercial", label: "Business property visibility" },
];

const projects = [
  {
    name: "Skyline Residency",
    type: "Premium Apartments",
    category: "Flats",
    location: "Prime City Location",
    status: "Ongoing Project",
    price: "Starting from ₹32 Lakh*",
    tag: "2 & 3 BHK",
    desc: "A premium apartment project designed for family buyers looking for location advantage, modern amenities, and a better everyday living experience.",
  },
  {
    name: "Green Valley Villas",
    type: "Luxury Villas",
    category: "Villas",
    location: "Fast-Growing Residential Zone",
    status: "Limited Inventory",
    price: "Starting from ₹58 Lakh*",
    tag: "Luxury Living",
    desc: "A villa-focused project for buyers who want more space, privacy, and a premium lifestyle presentation that feels aspirational.",
  },
  {
    name: "Golden Square Plots",
    type: "Residential Plots",
    category: "Plots",
    location: "High Growth Corridor",
    status: "Hot Selling",
    price: "Plots from ₹9.5 Lakh*",
    tag: "Investment Friendly",
    desc: "A plotting project positioned for investors and future home builders who want location growth and long-term value.",
  },
  {
    name: "Urban Business Hub",
    type: "Commercial Spaces",
    category: "Commercial",
    location: "Main Road Commercial Belt",
    status: "New Launch",
    price: "Starting from ₹24 Lakh*",
    tag: "Retail / Office",
    desc: "Commercial spaces designed for shops, offices, and business buyers looking for visibility, access, and investment potential.",
  },
  {
    name: "Harmony Heights",
    type: "Mid-Segment Apartments",
    category: "Flats",
    location: "Connected Family Area",
    status: "Ready to Move",
    price: "Starting from ₹28 Lakh*",
    tag: "Ready Homes",
    desc: "A practical apartment project that gives buyers a ready-to-move option with strong utility, daily convenience, and premium branding.",
  },
  {
    name: "Palm Grove Enclave",
    type: "Premium Villa Plots",
    category: "Plots",
    location: "Emerging Premium Zone",
    status: "Upcoming Phase",
    price: "Plots from ₹12 Lakh*",
    tag: "Future Expansion",
    desc: "A premium plotting and villa land concept for buyers who want flexibility, future growth, and a cleaner lifestyle-focused environment.",
  },
];

const sellingPoints = [
  {
    title: "Make Every Project Look More Valuable",
    desc: "A premium projects page helps the builder look more established and makes each project feel more trustworthy.",
  },
  {
    title: "Help Buyers Compare Faster",
    desc: "When projects are presented clearly, buyers can quickly compare property types, budgets, and interest level.",
  },
  {
    title: "Push More Enquiries Through WhatsApp",
    desc: "This page is designed to move visitors from browsing to direct action through brochure, pricing, and site visit CTAs.",
  },
];

const whyThisPageWorks = [
  "Projects are shown in a premium, sales-friendly structure",
  "Each listing can push brochure and pricing enquiries",
  "Good for flats, villas, plots, and commercial inventory",
  "Improves trust and builder brand image",
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

export default function BuilderProjectsPage() {
  return (
    <main>
      <section className="builder-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_24%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_20%)]" />

        <div className="relative z-[1] mx-auto max-w-7xl px-6 pb-16 pt-16 md:pb-20 md:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-2">
                {heroPoints.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-amber-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <h1 className="builder-title mt-7 text-4xl leading-tight md:text-6xl">
                Explore Premium Builder Projects in a Layout Built to Sell Better
              </h1>

              <p className="builder-text mt-6 max-w-3xl text-base md:text-lg">
                This builder projects page is designed to showcase flats,
                villas, plots, and commercial properties in a premium,
                high-conversion format. It helps buyers compare options more
                easily and helps builders generate stronger brochure requests,
                direct calls, WhatsApp chats, and site visit enquiries.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="builder-btn-whatsapp"
                >
                  Get Projects on WhatsApp
                </a>

                <Link
                  href={`${BASE}/project-details/`}
                  className="builder-btn-primary"
                >
                  View Project Details
                </Link>

                <a href={CALL_LINK} className="builder-btn-secondary">
                  Call Sales
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {filterChips.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-white/78"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="builder-card p-6 md:p-7">
                <span className="builder-eyebrow">Project Categories</span>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {projectStats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[24px] border border-white/10 bg-white/5 p-5"
                    >
                      <p className="text-lg font-black text-white">
                        {item.value}
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-white/65">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="builder-outline-card mt-6 p-5">
                  <p className="text-lg font-black text-white">
                    A strong projects page improves first impression.
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-7 text-white/72">
                    When multiple projects are shown in a premium and clean
                    style, the builder business feels bigger, more established,
                    and easier to trust.
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link href={`${BASE}/Bill/`} className="builder-btn-primary">
                    View Pricing
                  </Link>
                  <Link
                    href={`${BASE}/Contactus/`}
                    className="builder-btn-secondary"
                  >
                    Contact Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="builder-card mt-12 grid gap-5 p-6 md:grid-cols-3 md:p-7">
            {sellingPoints.map((item) => (
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
          eyebrow="All Projects"
          title="Showcase Every Project Like a Professional Sales Asset"
          desc="A premium project listing page helps builders present all project categories clearly while guiding buyers toward brochure requests, pricing questions, and site visits."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className="builder-card overflow-hidden">
              <div className="h-56 bg-[linear-gradient(135deg,rgba(251,191,36,0.14),rgba(255,255,255,0.04)),linear-gradient(180deg,#162235_0%,#0d1728_100%)]" />

              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-amber-200">
                    {project.status}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-white/72">
                    {project.category}
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-black text-white">
                  {project.name}
                </h2>

                <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-white/55">
                  {project.type}
                </p>

                <div className="mt-5 space-y-2 text-sm font-semibold text-white/72">
                  <p>Location: {project.location}</p>
                  <p>Price: {project.price}</p>
                  <p>Type: {project.tag}</p>
                </div>

                <p className="mt-5 text-sm font-semibold leading-7 text-white/70">
                  {project.desc}
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href={`${BASE}/project-details/`}
                    className="builder-btn-secondary"
                  >
                    View Details
                  </Link>

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="builder-btn-whatsapp"
                    >
                      WhatsApp
                    </a>

                    <Link
                      href={`${BASE}/Bill/`}
                      className="builder-btn-primary"
                    >
                      Pricing
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="builder-section mx-auto max-w-7xl px-6 py-6">
        <div className="builder-card grid gap-8 p-6 md:p-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="builder-eyebrow">Why This Works</span>
            <h2 className="builder-title mt-5 text-3xl md:text-4xl">
              This Page Helps Builders Look Bigger and Buyers Feel More Sure
            </h2>
            <p className="builder-text mt-4">
              A simple listing page is not enough. A premium builder projects
              page should improve trust, make project comparison easier, and
              push the buyer toward one clear next step.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="builder-btn-whatsapp"
              >
                Ask Availability
              </a>
              <Link
                href={`${BASE}/Contactus/`}
                className="builder-btn-secondary"
              >
                Contact Sales
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4">
              {whyThisPageWorks.map((item) => (
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

      <section className="builder-section mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="builder-card h-full p-6 md:p-8">
              <span className="builder-eyebrow">Best Use Cases</span>
              <h2 className="builder-title mt-5 text-3xl md:text-4xl">
                Suitable for Flats, Villas, Plots, and Commercial Inventory
              </h2>
              <p className="builder-text mt-4">
                This style works well for developers, colonizers, and real
                estate businesses that want to show multiple property types
                while keeping the site premium and sales-focused.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Apartment projects",
                  "Villa communities",
                  "Residential plotting",
                  "Commercial units",
                  "Township phases",
                  "Ready-to-move inventory",
                  "Upcoming launches",
                  "Investor-focused properties",
                ].map((item) => (
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
              <span className="builder-eyebrow">Conversion Focus</span>
              <h2 className="builder-title mt-5 text-3xl md:text-4xl">
                Turn Property Browsing Into Real Enquiries
              </h2>

              <ul className="mt-6 space-y-4">
                {[
                  "Get brochure requests faster",
                  "Encourage direct WhatsApp leads",
                  "Push price and unit-type questions",
                  "Support more serious site visit interest",
                ].map((point) => (
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
                  Good structure makes the builder business feel more credible.
                </p>
                <p className="mt-3 text-sm font-semibold leading-7 text-white/72">
                  Better presentation usually means better first impression,
                  stronger trust, and higher-quality enquiries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="builder-section mx-auto max-w-7xl px-6 py-6 pb-20">
        <div className="builder-outline-card p-8 text-center md:p-12">
          <span className="builder-eyebrow">Final Call To Action</span>
          <h2 className="builder-title mx-auto mt-5 max-w-4xl text-3xl md:text-5xl">
            Want Project Details, Price, Brochure, and Site Visit Info?
          </h2>
          <p className="builder-text mx-auto mt-5 max-w-3xl text-sm md:text-base">
            This projects page is designed to help builders present inventory
            more professionally and help buyers take faster action through
            WhatsApp, pricing, brochure requests, and direct sales contact.
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

            <Link href={`${BASE}/Bill/`} className="builder-btn-primary">
              View Pricing
            </Link>

            <Link href={`${BASE}/Contactus/`} className="builder-btn-secondary">
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}