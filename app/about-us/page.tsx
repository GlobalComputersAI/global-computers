import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://globalcomputers.net";
const PAGE_URL = `${SITE_URL}/about-us`;
const WEBSITE = "globalcomputers.net";
const SOFTWARE_PHONE_TEL = "+919752422686";
const HARDWARE_PHONE_TEL = "+919827164811";
const EMAIL = "infoglobalcomputersit@gmail.com";

const WHATSAPP_SOFTWARE =
  "https://wa.me/919752422686?text=Hi%20Global%20Computers,%20I%20want%20to%20discuss%20website%20/%20software%20/%20billing%20solution%20for%20my%20business.";
const WHATSAPP_HARDWARE =
  "https://wa.me/919827164811?text=Hi%20Global%20Computers,%20I%20want%20to%20discuss%20hardware%20/%20printer%20/%20CCTV%20/%20upgrade%20/%20AMC%20support.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "About Us | Global Computers & IT Solutions | Trusted Since 2004",
  description:
    "Learn about Global Computers & IT Solutions, a trusted IT business in Korba, Chhattisgarh offering website development, billing software, hardware supply, AMC, CCTV, networking and practical IT support since 2004.",
  keywords: [
    "About Global Computers",
    "Global Computers Korba",
    "IT company Korba",
    "IT company Chhattisgarh",
    "website development Korba",
    "billing software Korba",
    "hardware supplier Korba",
    "AMC services Korba",
    "CCTV installation Korba",
    "business IT support India",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "About Us | Global Computers & IT Solutions | Trusted Since 2004",
    description:
      "Trusted local IT business for websites, software, hardware, AMC, CCTV and business support in Korba, Chhattisgarh.",
    url: PAGE_URL,
    siteName: "Global Computers & IT Solutions",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/logo_header_svr.png`,
        width: 1200,
        height: 630,
        alt: "About Global Computers & IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Global Computers & IT Solutions | Trusted Since 2004",
    description:
      "Trusted local IT business for websites, software, hardware, AMC, CCTV and business support in Korba, Chhattisgarh.",
    images: [`${SITE_URL}/logo_header_svr.png`],
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${PAGE_URL}#aboutpage`,
      name: "About Us | Global Computers & IT Solutions",
      url: PAGE_URL,
      description:
        "About Global Computers & IT Solutions, a trusted IT business in Korba offering websites, billing software, hardware supply, AMC, CCTV and practical support since 2004.",
      publisher: {
        "@type": "Organization",
        name: "Global Computers & IT Solutions",
        url: SITE_URL,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About Us",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What does Global Computers & IT Solutions do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Global Computers & IT Solutions helps businesses with website development, billing software, hardware supply, CCTV, networking, AMC and practical IT support.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Global Computers & IT Solutions based?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Global Computers & IT Solutions is based in Korba, Chhattisgarh and supports businesses with local and practical IT solutions.",
          },
        },
        {
          "@type": "Question",
          name: "Since when has Global Computers & IT Solutions been operating?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Global Computers & IT Solutions has been serving customers since 2004.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide both hardware and software support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We support websites, billing software, hardware supply, upgrades, CCTV, networking, AMC and ongoing IT support.",
          },
        },
      ],
    },
  ],
};

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">
      {children}
    </span>
  );
}

function Stat({
  value,
  label,
  hint,
}: {
  value: string;
  label: string;
  hint: string;
}) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-3xl font-black text-slate-900 md:text-4xl">{value}</div>
      <div className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-blue-700">
        {label}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{hint}</p>
    </div>
  );
}

function InfoCard({
  title,
  desc,
  bullets,
}: {
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-xl font-black text-slate-900 md:text-2xl">{title}</h3>
      <p className="mt-3 leading-relaxed text-slate-600">{desc}</p>
      <ul className="mt-6 space-y-3 text-sm font-medium text-slate-700">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3">
            <span className="mt-0.5 text-blue-600">✓</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SmallChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-extrabold text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function StepCard({
  step,
  title,
  desc,
}: {
  step: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6">
      <div className="text-lg font-black text-blue-600">{step}</div>
      <div className="mt-2 text-lg font-black text-slate-900">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
    </div>
  );
}

function FaqCard({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-black text-slate-900">{question}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{answer}</p>
    </div>
  );
}

export default function AboutUsPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      {/* Top bar */}
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-3 text-sm md:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-3 text-center md:justify-start">
            <span className="font-extrabold">Global Computers & IT Solutions</span>
            <span className="hidden text-slate-500 md:inline">•</span>
            <span className="text-slate-300">Trusted Since 2004</span>
            <span className="hidden text-slate-500 md:inline">•</span>
            <span className="text-slate-300">Korba, Chhattisgarh</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <a
              href={`tel:${SOFTWARE_PHONE_TEL}`}
              className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1.5 font-semibold text-blue-100 transition hover:bg-blue-500/20"
            >
              Software: +91 9752422686
            </a>
            <a
              href={`tel:${HARDWARE_PHONE_TEL}`}
              className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 font-semibold text-emerald-100 transition hover:bg-emerald-500/20"
            >
              Hardware: +91 9827164811
            </a>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-blue-50 via-white to-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
          <div>
            <SectionBadge>About our business</SectionBadge>

            <h1 className="mt-6 text-4xl font-black leading-[1.03] tracking-tight text-slate-950 md:text-6xl">
              A real local IT business built on
              <span className="block text-blue-700">
                trust, support and practical delivery.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
              Global Computers &amp; IT Solutions helps businesses with{" "}
              <span className="font-extrabold text-slate-900">
                websites, billing software, hardware supply, CCTV, networking, AMC and support
              </span>
              . We are a real business helping clients solve day-to-day technology needs since 2004.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <SmallChip>Trusted Since 2004</SmallChip>
              <SmallChip>Korba, Chhattisgarh</SmallChip>
              <SmallChip>Hardware + Software + AMC</SmallChip>
              <SmallChip>PSU / Tender Understanding</SmallChip>
              <SmallChip>Local Support</SmallChip>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 text-center text-base font-extrabold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                View Projects &amp; Demos
              </Link>

              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-slate-300 bg-white px-8 py-4 text-center text-base font-extrabold text-slate-900 transition hover:bg-slate-50"
              >
                Request a Quote
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <a
                className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:bg-slate-50"
                href={`tel:${SOFTWARE_PHONE_TEL}`}
              >
                <div className="text-sm font-black text-slate-900">💻 Call Software</div>
                <div className="mt-1 text-xs font-semibold text-slate-500">
                  +91 97524 22686
                </div>
              </a>

              <a
                className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:bg-slate-50"
                href={`tel:${HARDWARE_PHONE_TEL}`}
              >
                <div className="text-sm font-black text-slate-900">🖥️ Call Hardware</div>
                <div className="mt-1 text-xs font-semibold text-slate-500">
                  +91 9827164811
                </div>
              </a>

              <a
                className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:bg-slate-50"
                href={`mailto:${EMAIL}`}
              >
                <div className="text-sm font-black text-slate-900">📧 Email Us</div>
                <div className="mt-1 break-all text-xs font-semibold text-slate-500">
                  {EMAIL}
                </div>
              </a>
            </div>

            <p className="mt-5 text-sm font-semibold text-slate-500">
              Website:{" "}
              <a
                className="underline hover:text-slate-800"
                href={`https://${WEBSITE}`}
                target="_blank"
                rel="noreferrer"
              >
                {WEBSITE}
              </a>
            </p>
          </div>

          <div className="relative">
            <div className="rounded-[30px] border border-slate-200 bg-white p-4 shadow-2xl">
              <div className="relative overflow-hidden rounded-[22px] bg-slate-100">
                <Image
                  src="/images/hero-it-infrastructure.jpg"
                  alt="Global Computers business IT solutions, hardware and software support"
                  width={900}
                  height={700}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-black text-slate-900">Real Local Presence</div>
                  <div className="mt-1 text-xs font-semibold text-slate-600">
                    Better support and practical business understanding
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-black text-slate-900">Complete IT Coverage</div>
                  <div className="mt-1 text-xs font-semibold text-slate-600">
                    Website, software, hardware, AMC and support
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-black text-slate-900">Business-Oriented</div>
                  <div className="mt-1 text-xs font-semibold text-slate-600">
                    Focus on usefulness, reliability and delivery
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-black text-slate-900">Long-Term Support</div>
                  <div className="mt-1 text-xs font-semibold text-slate-600">
                    Ongoing relationship, not just one-time sale
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <Stat
            value="20+"
            label="Years of trust"
            hint="Built on years of local business relationships and real service delivery."
          />
          <Stat
            value="Hardware + Software"
            label="One partner"
            hint="Useful when clients want setup, supply and support from one place."
          />
          <Stat
            value="Business-focused"
            label="Practical approach"
            hint="Solutions built around real daily use, not just technical theory."
          />
          <Stat
            value="Support mindset"
            label="Long-term value"
            hint="Help with installation, updates, troubleshooting and continuity."
          />
        </div>
      </section>

      {/* Who we are */}
      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12">
        <div className="max-w-4xl">
          <SectionBadge>Who we are</SectionBadge>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
            More than an IT seller. We help businesses run better.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Many vendors sell only products. Some agencies build only websites. Some freelancers do only software.
            Our strength is different — we understand that real businesses often need{" "}
            <span className="font-extrabold text-slate-900">
              multiple IT needs working together
            </span>
            : systems, software, upgrades, billing, websites, support and maintenance.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <InfoCard
            title="What makes us different"
            desc="We combine local business understanding with practical IT delivery."
            bullets={[
              "We support both hardware and software requirements",
              "We understand day-to-day business usage, not just design or coding",
              "We guide clients on the right setup, not just one product",
              "We focus on long-term trust and support",
            ]}
          />

          <InfoCard
            title="Where we create value"
            desc="We are strongest where a business needs practical execution and follow-up support."
            bullets={[
              "Website + billing + WhatsApp setup for local businesses",
              "Printer, desktop, RAM, SSD and hardware guidance",
              "CCTV, networking and on-site setup support",
              "AMC, upgrades and ongoing service reliability",
            ]}
          />
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12">
        <div className="max-w-4xl">
          <SectionBadge>Core capabilities</SectionBadge>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
            What we do for businesses
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            From a small business website to a complete hardware setup with support, we help clients with useful and scalable solutions.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <InfoCard
            title="Websites & Business Presence"
            desc="We build websites that help businesses present themselves better and generate inquiries."
            bullets={[
              "Business websites and landing pages",
              "Local business positioning and trust-focused structure",
              "WhatsApp-first inquiry flow",
              "Useful for shops, gyms, clinics, hotels and service businesses",
            ]}
          />

          <InfoCard
            title="Billing Software & Workflow Support"
            desc="We help businesses digitize daily operations with billing and business process systems."
            bullets={[
              "GST billing and inventory solutions",
              "Software for retail, hotel, school and office use",
              "Practical setup aligned with real work style",
              "Workflow support and implementation guidance",
            ]}
          />

          <InfoCard
            title="Hardware Supply & Upgrades"
            desc="We support businesses with systems, upgrades and right-fit recommendations."
            bullets={[
              "Desktop, laptop, printer and accessory support",
              "RAM, SSD and system upgrade guidance",
              "Business-use hardware recommendations",
              "Multi-brand support as per need",
            ]}
          />

          <InfoCard
            title="CCTV, Networking & Devices"
            desc="Physical IT setup is a major part of business readiness, and we support that too."
            bullets={[
              "CCTV setup and support",
              "Networking and office connectivity needs",
              "Peripheral and device installation help",
              "Useful for offices, institutes and shops",
            ]}
          />

          <InfoCard
            title="AMC & Ongoing Support"
            desc="The real value of IT often comes after installation — in maintenance and support."
            bullets={[
              "AMC and periodic support",
              "Troubleshooting and issue resolution",
              "Upgrade and continuity assistance",
              "Useful for businesses wanting dependable support",
            ]}
          />

          <InfoCard
            title="PSU / Business-Oriented Delivery"
            desc="Where structured requirements and documentation matter, practical discipline matters too."
            bullets={[
              "Better alignment with formal business requirements",
              "Useful for tender-oriented or documentation-heavy work",
              "Structured communication and delivery mindset",
              "Suitable for buyers wanting seriousness and accountability",
            ]}
          />
        </div>
      </section>

      {/* Flexible model */}
      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <div className="max-w-4xl">
            <SectionBadge>Deployment & support style</SectionBadge>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              Flexible according to business need
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Different businesses need different setups. Some need only a website. Some need hardware and networking.
              Some need software plus support. We adapt accordingly.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Local Business Setup",
                d: "Website, billing, devices and practical support for daily operations.",
              },
              {
                t: "Office / Institute Setup",
                d: "Systems, printers, networking, CCTV and support for smooth working.",
              },
              {
                t: "On-Premise Friendly",
                d: "Useful where internal control, physical systems or business policy matter.",
              },
              {
                t: "Long-Term Support",
                d: "AMC, troubleshooting, upgrades and continuity assistance when needed.",
              },
            ].map((item) => (
              <div
                key={item.t}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="font-black text-slate-900">{item.t}</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">{item.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12">
        <div className="rounded-[32px] border border-slate-800 bg-slate-950 p-8 text-white md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-4xl">
              <SectionBadge>How we work</SectionBadge>
              <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">
                Simple, practical delivery process
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">
                We prefer clear communication, usable solutions and long-term relationships.
                That means understanding the requirement first, suggesting the right path and
                supporting the client properly after delivery.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-slate-100"
            >
              View Demos
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            <StepCard
              step="01"
              title="Understand"
              desc="We first understand the business need, actual usage and practical requirement."
            />
            <StepCard
              step="02"
              title="Suggest"
              desc="We suggest the right combination of hardware, software or support based on need."
            />
            <StepCard
              step="03"
              title="Deliver"
              desc="We implement, configure or build the solution with business usability in mind."
            />
            <StepCard
              step="04"
              title="Support"
              desc="We stay available for updates, troubleshooting, maintenance and next steps."
            />
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12">
        <div className="max-w-5xl">
          <SectionBadge>Our vision</SectionBadge>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
            Grow with clients by becoming their trusted long-term IT partner
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Our long-term vision is simple: build trust through consistent support, useful solutions and honest business relationships.
            We want businesses to feel that for websites, billing, hardware, upgrades, CCTV and support — they have one dependable place to go.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12">
        <div className="max-w-4xl">
          <SectionBadge>FAQ</SectionBadge>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
            Common questions about us
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Clear answers that help visitors trust your business faster.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <FaqCard
            question="What services does Global Computers provide?"
            answer="We provide website development, billing software, hardware supply, CCTV, networking, AMC and practical business IT support."
          />
          <FaqCard
            question="Where is Global Computers based?"
            answer="We are based in Korba, Chhattisgarh and support businesses with practical local IT solutions."
          />
          <FaqCard
            question="Since when has Global Computers been operating?"
            answer="Global Computers & IT Solutions has been serving customers since 2004."
          />
          <FaqCard
            question="Do you support both hardware and software needs?"
            answer="Yes. One of our strengths is supporting websites, billing, hardware, upgrades, support and AMC together."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[32px] bg-blue-600 p-8 text-white md:p-14">
          <div className="max-w-4xl">
            <SectionBadge>Let’s work together</SectionBadge>
            <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">
              Need a trusted IT partner for your business?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-blue-100">
              Share your requirement and we’ll guide you toward the right solution — whether it is website,
              billing software, hardware supply, CCTV, AMC, networking or a complete business setup.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-center text-base font-extrabold text-blue-700 transition hover:scale-[1.02]"
            >
              Get Free Consultation
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-2xl border border-blue-300 bg-blue-900 px-8 py-4 text-center text-base font-extrabold text-white transition hover:bg-blue-950"
            >
              View Projects &amp; Demos
            </Link>
          </div>

          <div className="mt-8 flex flex-col gap-3 text-sm text-blue-100 md:flex-row md:items-center">
            <a
              href={WHATSAPP_SOFTWARE}
              target="_blank"
              rel="noreferrer"
              className="font-bold hover:text-white"
            >
              WhatsApp for Website / Software
            </a>
            <span className="hidden text-blue-300 md:inline">•</span>
            <a
              href={WHATSAPP_HARDWARE}
              target="_blank"
              rel="noreferrer"
              className="font-bold hover:text-white"
            >
              WhatsApp for Hardware / Support
            </a>
            <span className="hidden text-blue-300 md:inline">•</span>
            <a href={`mailto:${EMAIL}`} className="font-bold hover:text-white">
              {EMAIL}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}