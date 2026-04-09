import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";

/* =========================
   SEO Metadata
========================= */
const SITE_URL = "https://globalcomputers.net";
const PAGE_URL = `${SITE_URL}/`;
const OG_IMAGE = `${SITE_URL}/logo_header_svr.png`;

export const metadata: Metadata = {
  title:
    "Global Computers & IT Solutions | Website, Billing Software, Hardware & AMC Since 2004",
  description:
    "Global Computers & IT Solutions helps businesses with website development, GST billing software, IT hardware supply, CCTV, networking, AMC and local support. Trusted since 2004 in Korba, Chhattisgarh.",
  keywords: [
    "Global Computers Korba",
    "website development Korba",
    "billing software Korba",
    "GST billing software Korba",
    "IT hardware Korba",
    "AMC services Korba",
    "CCTV installation Korba",
    "networking services Korba",
    "computer shop Korba",
    "business website Chhattisgarh",
    "IT solutions Chhattisgarh",
    "billing software India",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Global Computers & IT Solutions | Website, Billing Software, Hardware & AMC Since 2004",
    description:
      "Trusted since 2004 for websites, billing software, hardware supply, CCTV, networking, AMC and practical local business support.",
    url: PAGE_URL,
    siteName: "Global Computers & IT Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Global Computers & IT Solutions homepage preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Global Computers & IT Solutions | Website, Billing Software, Hardware & AMC Since 2004",
    description:
      "Websites, billing software, hardware, CCTV, networking and AMC support from Korba.",
    images: [OG_IMAGE],
  },
};

/* =========================
   Constants
========================= */
const SITE_NAME = "Global Computers & IT Solutions";
const SOFTWARE_PHONE = "+919752422686";
const HARDWARE_PHONE = "+919827164811";
const WEBSITE = "globalcomputers.net";
const BUSINESS_EMAIL = "infoglobalcomputersit@gmail.com";

const WHATSAPP_SOFTWARE =
  "https://wa.me/919752422686?text=Hi%20Global%20Computers,%20I%20want%20a%20website%20/%20billing%20software%20/%20digital%20setup%20for%20my%20business.%20Please%20share%20details.";
const WHATSAPP_HARDWARE =
  "https://wa.me/919827164811?text=Hi%20Global%20Computers,%20I%20need%20hardware%20/%20printer%20/%20desktop%20/%20laptop%20/%20CCTV%20/%20upgrade%20support.%20Please%20share%20details.";

/* =========================
   Structured Data
========================= */
const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: PAGE_URL,
      name: "Global Computers & IT Solutions",
      description:
        "Website development, billing software, hardware supply, CCTV, networking and AMC support in Korba, Chhattisgarh.",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#organization`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: OG_IMAGE,
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#website-service`,
      serviceType: "Website Development",
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed: "Chhattisgarh, India",
      url: `${SITE_URL}/software-solutions`,
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#billing-service`,
      serviceType: "GST Billing Software and Inventory Solutions",
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed: "Chhattisgarh, India",
      url: `${SITE_URL}/projects/gst-inventory`,
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#hardware-service`,
      serviceType: "IT Hardware Supply, CCTV, Networking and AMC",
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed: "Chhattisgarh, India",
      url: `${SITE_URL}/it-hardware-supply`,
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What services does Global Computers & IT Solutions provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Global Computers & IT Solutions provides website development, billing software, GST billing and inventory setup, IT hardware supply, CCTV installation, networking, upgrades and AMC support.",
          },
        },
        {
          "@type": "Question",
          name: "Do you support local businesses in Korba and Chhattisgarh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We support businesses in Korba, Chhattisgarh and nearby areas with local guidance, practical setup help and business-focused IT solutions.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide website solutions for shops, clinics, hotels and other local businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We build websites and demo-based business pages for shops, restaurants, clinics, hotels, gyms, showrooms, travel businesses and other local service providers.",
          },
        },
        {
          "@type": "Question",
          name: "Do you also provide hardware and support along with software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We help with hardware supply, printers, laptops, desktops, RAM and SSD upgrades, CCTV, networking and AMC support along with software and website needs.",
          },
        },
      ],
    },
  ],
};

/* =========================
   UI Components
========================= */
function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">
      {children}
    </span>
  );
}

function StatCard({
  value,
  label,
  hint,
}: {
  value: string;
  label: string;
  hint: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
      <div className="text-3xl font-black text-slate-900 md:text-4xl">{value}</div>
      <div className="mt-2 text-sm font-extrabold uppercase tracking-wider text-blue-700">
        {label}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{hint}</p>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
  bullets,
  href,
  cta,
}: {
  icon: string;
  title: string;
  desc: string;
  bullets: string[];
  href: string;
  cta: string;
}) {
  return (
    <article className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl ring-1 ring-blue-100">
        {icon}
      </div>
      <h3 className="text-2xl font-black text-slate-900">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-slate-600">{desc}</p>
      <ul className="mt-6 space-y-3 text-sm font-semibold text-slate-700">
        {bullets.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-0.5 text-blue-600">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="mt-7 inline-flex w-full items-center justify-center rounded-2xl border border-slate-300 bg-slate-900 px-5 py-3.5 text-center text-sm font-extrabold text-white transition hover:bg-blue-700"
      >
        {cta}
      </Link>
    </article>
  );
}

function DemoCard({
  title,
  desc,
  href,
  tag,
}: {
  title: string;
  desc: string;
  href: string;
  tag: string;
}) {
  return (
    <article className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-slate-700">
        {tag}
      </div>
      <h3 className="text-xl font-black text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{desc}</p>
      <div className="mt-6 flex gap-3">
        <Link
          href={href}
          className="inline-flex flex-1 items-center justify-center rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-50"
        >
          View Demo
        </Link>
      </div>
    </article>
  );
}

function TrustPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function BrandLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="relative h-12 w-24 grayscale transition duration-300 hover:scale-105 hover:grayscale-0 md:h-14 md:w-28">
      <Image
        src={src}
        alt={`${name} logo`}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 96px, 112px"
      />
    </div>
  );
}

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-black text-slate-900">{question}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{answer}</p>
    </div>
  );
}

/* =========================
   Main Page Component
========================= */
export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />

      <main className="bg-white pb-20 text-slate-900 md:pb-0">
        {/* Top Contact Bar */}
        <section
          aria-label="Business contact highlights"
          className="border-b border-slate-200 bg-slate-950 text-white"
        >
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-3 text-sm md:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-3 text-center md:justify-start">
              <span className="font-extrabold">{SITE_NAME}</span>
              <span className="hidden text-slate-500 md:inline">•</span>
              <span className="text-slate-300">Trusted Since 2004</span>
              <span className="hidden text-slate-500 md:inline">•</span>
              <span className="text-slate-300">Korba, Chhattisgarh</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <a
                href={`https://${WEBSITE}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-700 px-3 py-1.5 font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
              >
                {WEBSITE}
              </a>
              <a
                href={`tel:${SOFTWARE_PHONE}`}
                className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1.5 font-semibold text-blue-100 transition hover:bg-blue-500/20"
              >
                Software: +91 9752422686
              </a>
              <a
                href={`tel:${HARDWARE_PHONE}`}
                className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 font-semibold text-emerald-100 transition hover:bg-emerald-500/20"
              >
                Hardware: +91 9827164811
              </a>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 via-blue-50 to-white">
          <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_55%)]" />

          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
            <div className="relative z-10">
              <SectionBadge>Website + Billing + Hardware + AMC</SectionBadge>

              <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.02] tracking-tight text-slate-950 md:text-6xl">
                Real Business IT Support.
                <span className="block text-blue-700">
                  Websites, Software, Hardware & Service Under One Roof.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                We help shops, offices, schools, hotels and growing businesses with{" "}
                <span className="font-extrabold text-slate-900">
                  websites, billing software, hardware supply, CCTV, networking and AMC
                </span>{" "}
                — with real local support from Korba since 2004.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_SOFTWARE}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-7 py-4 text-center text-base font-extrabold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Get Setup on WhatsApp
                </a>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-slate-300 bg-white px-7 py-4 text-center text-base font-extrabold text-slate-900 transition hover:bg-slate-50"
                >
                  View Live Demos
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <TrustPill>Website from ₹5,000 + GST</TrustPill>
                <TrustPill>Billing & Inventory Setup</TrustPill>
                <TrustPill>Hardware Supply & Installation</TrustPill>
                <TrustPill>AMC & On-Site Support</TrustPill>
                <TrustPill>PSU / Tender Experience</TrustPill>
              </div>

              <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-sm font-black text-slate-900">
                      For Local Businesses
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Website, billing, Google setup and WhatsApp lead flow.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-sm font-black text-slate-900">
                      For Offices & Institutes
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Systems, printers, networking, CCTV, support and upgrades.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-sm font-black text-slate-900">
                      For PSU / Enterprise Needs
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Multi-brand supply, documentation support and deployment readiness.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 rounded-[36px] bg-blue-100 blur-3xl" />
              <div className="relative rounded-[32px] border border-slate-200 bg-white p-4 shadow-2xl">
                <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-950">
                  {/* 16:9 hero video area */}
                  <div className="aspect-video w-full">
                    <HeroVideo />
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center transition hover:bg-slate-100">
                    <div className="text-sm font-black text-slate-900">Website</div>
                    <div className="mt-1 text-xs font-semibold text-slate-600">
                      Fast + mobile-ready
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center transition hover:bg-slate-100">
                    <div className="text-sm font-black text-slate-900">Software</div>
                    <div className="mt-1 text-xs font-semibold text-slate-600">
                      Billing + workflow
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center transition hover:bg-slate-100">
                    <div className="text-sm font-black text-slate-900">Hardware</div>
                    <div className="mt-1 text-xs font-semibold text-slate-600">
                      Supply + AMC
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Stats Section */}
        <section className="border-b border-slate-200 bg-white py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <StatCard
                value="20+"
                label="Years of trust"
                hint="Built on long-term customer relationships and local business credibility."
              />
              <StatCard
                value="10,000+"
                label="Customer interactions"
                hint="Hardware, service, software and business support across years of work."
              />
              <StatCard
                value="Multi-brand"
                label="Supply capability"
                hint="Desktops, laptops, printers, CCTV, upgrades, accessories and more."
              />
              <StatCard
                value="Local + Practical"
                label="Real support"
                hint="Advice, installation help, service follow-up and nearby business understanding."
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <SectionBadge>Why businesses choose us</SectionBadge>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              Not just products. Complete business setup.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Most vendors sell only one piece of the problem. We help you connect the full
              chain — website, billing, hardware, setup, support and after-sales service.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <ServiceCard
              icon="🌐"
              title="Websites & Digital Setup"
              desc="Professional websites for local businesses, lead pages, WhatsApp-first inquiry flow and business-ready online presence."
              bullets={[
                "Business websites starting from ₹5,000 + GST",
                "SEO-ready structure and local business positioning",
                "Perfect for shops, services, clinics, gyms and showrooms",
              ]}
              href="/software-solutions"
              cta="Explore Software & Website Solutions"
            />
            <ServiceCard
              icon="🧾"
              title="Billing Software & Workflow Systems"
              desc="Billing, inventory, business process support and tailored software solutions that fit your actual business operations."
              bullets={[
                "GST billing and inventory setup",
                "Retail, hotel, school and office use cases",
                "Practical implementation with local guidance",
              ]}
              href="/projects/gst-inventory"
              cta="See Billing / Software Demo"
            />
            <ServiceCard
              icon="🖥️"
              title="Hardware, CCTV, Networking & AMC"
              desc="We supply and support laptops, desktops, printers, CCTV, accessories, upgrades and maintenance for daily business use."
              bullets={[
                "Laptop, desktop, printer and accessory support",
                "RAM / SSD upgrades and system recommendations",
                "AMC, installation help and business continuity support",
              ]}
              href="/it-hardware-supply"
              cta="Explore Hardware & AMC"
            />
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="border-y border-slate-200 bg-slate-950 py-20 text-white md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <SectionBadge>Trust section</SectionBadge>
              <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">
                Real local business. Real support. Not just online promises.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">
                Your biggest advantage is not just having demos. Your biggest advantage is
                that you are a real business with local presence, business understanding,
                support capability and long-term trust.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[28px] border border-slate-800 bg-slate-900 p-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                    <div className="text-sm font-black uppercase tracking-wider text-blue-300">
                      Since 2004
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      Long-standing trust in hardware, service and business IT support.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                    <div className="text-sm font-black uppercase tracking-wider text-blue-300">
                      Korba presence
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      Local understanding, nearby support and faster real-world assistance.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                    <div className="text-sm font-black uppercase tracking-wider text-blue-300">
                      Hardware + software together
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      Better than dealing with separate vendors for systems, website and
                      support.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                    <div className="text-sm font-black uppercase tracking-wider text-blue-300">
                      PSU / business readiness
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      Better fit for structured requirements, documentation and practical
                      delivery.
                    </p>
                  </div>
                </div>
                <div className="mt-6 rounded-2xl border border-blue-800/40 bg-blue-500/10 p-5">
                  <p className="text-sm leading-relaxed text-blue-50">
                    Add your real shop photo, business owner photo, GST details, office
                    address, Google review screenshot and brand certificates here later.
                    That will push trust much higher.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-[28px] border border-slate-800 bg-slate-900 p-7">
                <div>
                  <h3 className="text-2xl font-black">Best fit for</h3>
                  <div className="mt-6 grid gap-3">
                    {[
                      "Retail shops and supermarkets",
                      "Restaurants, cafes and hotels",
                      "Clinics, schools and institutes",
                      "Offices and growing businesses",
                      "Computer hardware buyers",
                      "Businesses needing website + billing + support",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-slate-800 bg-slate-950 px-4 py-4 text-sm font-semibold text-slate-200"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  href="/about-us"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-slate-100"
                >
                  Learn More About Our Business
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Demos Section */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <SectionBadge>Selected live demos</SectionBadge>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
                Show the right demos. Not all demos at once.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                These demos help visitors quickly understand what you can build for their
                business. Keep the homepage focused and let the full projects page handle the
                rest.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-extrabold text-slate-900 transition hover:bg-slate-50"
            >
              View All Demo Projects
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <DemoCard
              title="Retail / Supermarket Demo"
              desc="Best for grocery, retail, mini-mart and billing-based businesses."
              href="/projects/Retail-Supermarket"
              tag="Retail"
            />
            <DemoCard
              title="Restaurant Demo"
              desc="Useful for restaurants, cafes, menu pages and food ordering flow."
              href="/projects/restaurant"
              tag="Food"
            />
            <DemoCard
              title="Clinic Demo"
              desc="For doctors, clinics, appointments, contact and service pages."
              href="/projects/clinic"
              tag="Healthcare"
            />
            <DemoCard
              title="Gym Demo"
              desc="Membership, plans, gallery and strong visual business branding."
              href="/projects/gym"
              tag="Fitness"
            />
            <DemoCard
              title="Mobile Shop Demo"
              desc="Great for product categories, offers, accessory sales and service shops."
              href="/projects/mobile"
              tag="Shop"
            />
            <DemoCard
              title="Showroom Demo"
              desc="Perfect for product-led businesses that need premium presentation."
              href="/projects/showroom"
              tag="Display"
            />
            <DemoCard
              title="GST Billing / Inventory Demo"
              desc="For businesses wanting billing software, inventory flow and operations support."
              href="/projects/gst-inventory"
              tag="Software"
            />
            <DemoCard
              title="Car Rental Demo"
              desc="For travel, car rental and service booking-focused businesses."
              href="/projects/car-Rental"
              tag="Travel"
            />
          </div>
        </section>

        {/* Hardware Value */}
        <section className="border-y border-slate-200 bg-slate-50 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <SectionBadge>Hardware value section</SectionBadge>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
                Why many buyers still prefer a real local IT partner over only buying online
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                You can absolutely show RAM, SSD, printer, desktop and upgrade examples on
                the homepage — but sell the{" "}
                <span className="font-extrabold text-slate-900">value difference</span>, not
                just random prices.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
                <div className="text-sm font-black uppercase tracking-wider text-slate-500">
                  Online-only purchase
                </div>
                <h3 className="mt-3 text-2xl font-black text-slate-900">
                  Looks cheaper at first
                </h3>
                <ul className="mt-5 space-y-3 text-sm font-medium text-slate-700">
                  <li>• Price changes frequently</li>
                  <li>• Compatibility confusion</li>
                  <li>• Return / replacement hassle</li>
                  <li>• No local installation help</li>
                  <li>• Support depends on seller/platform</li>
                </ul>
              </div>

              <div className="rounded-[28px] border-2 border-blue-600 bg-white p-7 shadow-lg shadow-blue-100">
                <div className="text-sm font-black uppercase tracking-wider text-blue-700">
                  Buy with us
                </div>
                <h3 className="mt-3 text-2xl font-black text-slate-900">
                  Better decision, better support
                </h3>
                <ul className="mt-5 space-y-3 text-sm font-medium text-slate-700">
                  <li>• Guidance on correct RAM / SSD / parts</li>
                  <li>• Better suitability for your system</li>
                  <li>• Installation and practical support</li>
                  <li>• Faster issue handling locally</li>
                  <li>• Hardware + software + AMC together</li>
                </ul>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
                <div className="text-sm font-black uppercase tracking-wider text-slate-500">
                  Good homepage examples
                </div>
                <h3 className="mt-3 text-2xl font-black text-slate-900">
                  Show popular items
                </h3>
                <ul className="mt-5 space-y-3 text-sm font-medium text-slate-700">
                  <li>• RAM upgrade options</li>
                  <li>• SSD upgrade options</li>
                  <li>• Printers for office/shop</li>
                  <li>• Desktop sets and accessories</li>
                  <li>• CCTV and networking kits</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm leading-relaxed text-slate-600">
                <span className="font-extrabold text-slate-900">Best practice:</span> show
                example products with “starting from” or “ask for today’s price on WhatsApp”
                instead of hard-coding exact pricing on a static homepage.
              </p>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <SectionBadge>Brands & platforms</SectionBadge>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              Multi-brand support for real business needs
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
              Hardware, accessories, software ecosystem and business technology support based
              on requirement — not one-size-fits-all selling.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {[
                { name: "Dell", src: "/brands/Dell.png" },
                { name: "HP", src: "/brands/hp.png" },
                { name: "Lenovo", src: "/brands/lenovo.png" },
                { name: "Acer", src: "/brands/acer.png" },
                { name: "Asus", src: "/brands/asus.png" },
                { name: "Samsung", src: "/brands/Samsung.png" },
                { name: "Apple", src: "/brands/Apple.png" },
                { name: "Microsoft", src: "/brands/Microsoft.png" },
                { name: "Google", src: "/brands/google.png" },
                { name: "AWS", src: "/brands/aws.png" },
                { name: "Canon", src: "/brands/Canon.png" },
                { name: "Epson", src: "/brands/epson.png" },
              ].map((brand) => (
                <BrandLogo key={brand.name} name={brand.name} src={brand.src} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-t border-slate-200 bg-slate-50 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <SectionBadge>FAQ</SectionBadge>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
                Common questions businesses ask us
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                These answers help customers understand your business quickly and also improve
                homepage relevance for search.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <FaqItem
                question="Do you build websites for local businesses?"
                answer="Yes. We create websites for local shops, clinics, restaurants, hotels, gyms, showrooms, travel businesses and service-based businesses."
              />
              <FaqItem
                question="Do you provide GST billing software and inventory setup?"
                answer="Yes. We help businesses with GST billing software, inventory workflow setup and practical guidance based on real business needs."
              />
              <FaqItem
                question="Can I get hardware and software support from one place?"
                answer="Yes. That is one of our strengths. We support websites, billing software, printers, desktops, laptops, CCTV, networking and AMC under one roof."
              />
              <FaqItem
                question="Do you support customers in Korba and nearby areas?"
                answer="Yes. We are based in Korba and support businesses in Chhattisgarh with local understanding and real support."
              />
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="border-t border-slate-200 bg-slate-950 py-20 text-white md:py-24">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <SectionBadge>Final call to action</SectionBadge>
            <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">
              Tell us your business need.
              <span className="block text-blue-300">
                We’ll suggest the right setup.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
              Whether you need a website, billing software, hardware upgrades, printers,
              networking, CCTV or AMC — we’ll guide you with a practical solution, not
              generic sales talk.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={WHATSAPP_SOFTWARE}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 text-base font-extrabold text-white transition hover:bg-blue-700"
              >
                WhatsApp for Website / Software
              </a>
              <a
                href={WHATSAPP_HARDWARE}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-white px-8 py-4 text-base font-extrabold text-slate-950 transition hover:bg-slate-100"
              >
                WhatsApp for Hardware / Support
              </a>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-slate-300 md:flex-row">
              <a
                href={`tel:${SOFTWARE_PHONE}`}
                className="font-bold transition hover:text-white"
              >
                Call Software: +91 9752422686
              </a>
              <span className="hidden text-slate-600 md:inline">•</span>
              <a
                href={`tel:${HARDWARE_PHONE}`}
                className="font-bold transition hover:text-white"
              >
                Call Hardware: +91 9827164811
              </a>
              <span className="hidden text-slate-600 md:inline">•</span>
              <a
                href={`mailto:${BUSINESS_EMAIL}`}
                className="font-bold transition hover:text-white"
              >
                {BUSINESS_EMAIL}
              </a>
              <span className="hidden text-slate-600 md:inline">•</span>
              <Link
                href="/contact-us"
                className="font-bold transition hover:text-white"
              >
                Contact / Quote Request
              </Link>
            </div>
          </div>
        </section>

        {/* Mobile Sticky Bar */}
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-3 py-3 backdrop-blur md:hidden">
          <div className="grid grid-cols-2 gap-3">
            <a
              href={WHATSAPP_SOFTWARE}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-blue-600 py-3 text-center text-sm font-extrabold text-white"
            >
              WhatsApp
            </a>
            <a
              href={`tel:${HARDWARE_PHONE}`}
              className="rounded-xl bg-emerald-600 py-3 text-center text-sm font-extrabold text-white"
            >
              Call Now
            </a>
          </div>
        </div>
      </main>
    </>
  );
}