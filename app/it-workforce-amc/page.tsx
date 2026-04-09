import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://globalcomputers.net";
const PAGE_URL = `${SITE_URL}/it-workforce-amc`;
const CONTACT_HREF = "/contact-us";
const PROJECTS_HREF = "/projects";
const GEM_ID = "GLOBAL@2024";
const SITE_NAME = "Global Computers & IT Solutions";

export const metadata: Metadata = {
  title: "AMC & IT Workforce Services | IT Support, Helpdesk and On-Site Engineers",
  description:
    "Global Computers & IT Solutions provides IT workforce deployment, AMC services, helpdesk support, preventive maintenance, SLA-based support, reporting and structured IT service execution for businesses, institutions, PSUs and enterprises.",
  keywords: [
    "AMC services Korba",
    "IT workforce services India",
    "IT manpower deployment",
    "annual maintenance contract",
    "IT helpdesk support",
    "on-site IT engineer services",
    "PSU IT support services",
    "enterprise AMC support",
    "preventive maintenance IT",
    "Global Computers AMC",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "AMC & IT Workforce Services | IT Support, Helpdesk and On-Site Engineers",
    description:
      "IT workforce deployment, AMC support, preventive maintenance, helpdesk services and structured support for businesses, institutions, PSUs and enterprises.",
    url: PAGE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/logo_header_svr.png`,
        width: 1200,
        height: 630,
        alt: "Global Computers AMC and IT Workforce Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AMC & IT Workforce Services | IT Support, Helpdesk and On-Site Engineers",
    description:
      "IT manpower deployment, AMC support, preventive maintenance and enterprise support services.",
    images: [`${SITE_URL}/logo_header_svr.png`],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "IT Workforce & AMC Services",
      serviceType: "IT Workforce Deployment and Annual Maintenance Contract Services",
      provider: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      url: PAGE_URL,
      description:
        "IT manpower deployment, helpdesk support, preventive maintenance, AMC execution, SLA-based support, reporting and service continuity for organizations.",
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
          name: "IT Workforce & AMC",
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
          name: "What IT workforce services do you provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We provide on-site IT support engineers, helpdesk support, network support, infrastructure coordination, application support and structured service execution based on requirement.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide AMC services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We provide preventive and corrective maintenance, incident support, reporting, documentation and AMC service models based on site size and support scope.",
          },
        },
        {
          "@type": "Question",
          name: "Do you support PSU and enterprise clients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We support businesses, institutions, PSUs and enterprise clients with structured deployment, reporting, escalation and service continuity support.",
          },
        },
        {
          "@type": "Question",
          name: "Can you support multi-location service requirements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We can support site-based, centralized, hybrid and multi-location support models depending on requirement and SLA structure.",
          },
        },
      ],
    },
  ],
};

export default function ITWorkforceAMCPage() {
  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-white via-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-700">
                Workforce • AMC • Helpdesk • SLA Support
              </div>

              <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-tight text-slate-950 md:text-6xl">
                IT Workforce &
                <span className="block text-blue-600">AMC Services</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                We provide{" "}
                <span className="font-extrabold text-slate-900">
                  on-site IT manpower, helpdesk support, preventive maintenance, AMC services and structured reporting
                </span>{" "}
                for businesses, institutions, PSUs and enterprises.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={CONTACT_HREF}
                  className="rounded-full bg-blue-600 px-7 py-3 font-extrabold text-white transition hover:bg-blue-700"
                >
                  Request Proposal
                </Link>
                <Link
                  href={CONTACT_HREF}
                  className="rounded-full border border-slate-200 bg-white px-7 py-3 font-extrabold text-slate-900 transition hover:border-blue-400"
                >
                  Discuss SLA / Scope
                </Link>
                <Link
                  href={PROJECTS_HREF}
                  className="rounded-full bg-slate-900 px-7 py-3 font-extrabold text-white transition hover:bg-slate-800"
                >
                  View Projects
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <InfoPill
                  title="SLA-Based Support"
                  desc="Response and escalation structure based on requirement."
                />
                <InfoPill
                  title="Preventive Maintenance"
                  desc="Planned checks, maintenance and service routines."
                />
                <InfoPill
                  title="Structured Reporting"
                  desc="Registers, logs, visit records and service MIS."
                />
                <InfoPill
                  title="Service Continuity"
                  desc="Deployment planning and support continuity options."
                />
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
              <h2 className="text-2xl font-black text-slate-950">What we handle</h2>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span>✅</span>
                  <span>End-user support for desktops, laptops, printers and software issues</span>
                </li>
                <li className="flex gap-3">
                  <span>✅</span>
                  <span>Helpdesk operations, escalation handling and ticket coordination</span>
                </li>
                <li className="flex gap-3">
                  <span>✅</span>
                  <span>LAN, Wi-Fi and basic infrastructure support coordination</span>
                </li>
                <li className="flex gap-3">
                  <span>✅</span>
                  <span>Preventive and corrective AMC activities</span>
                </li>
                <li className="flex gap-3">
                  <span>✅</span>
                  <span>Reporting, registers, service tracking and documentation support</span>
                </li>
              </ul>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="text-sm font-black text-slate-900">GeM Support</div>
                <div className="mt-2 text-sm text-slate-600">
                  GeM ID: <span className="font-bold text-blue-700">{GEM_ID}</span>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href={CONTACT_HREF}
                  className="block rounded-xl bg-blue-600 py-3 text-center text-sm font-black text-white transition hover:bg-blue-700"
                >
                  Get Workforce / AMC Quote
                </Link>
                <p className="mt-3 text-xs text-slate-500">
                  Final scope depends on locations, hardware count, manpower model and SLA needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GeM / buyer support */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-[2rem] border border-blue-100 bg-blue-50 p-8 md:p-10">
            <SectionTitle
              title="GeM Buyer Support & Service Execution"
              subtitle="We support not only service delivery, but also the practical coordination around requirement understanding, service structure, deployment planning and long-term support."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <FeatureCard
                title="Buyer Requirement Support"
                desc="We help understand scope, site size, manpower need, support model and service expectations."
                points={[
                  "Discussion around service scope",
                  "Understanding of manpower and AMC model",
                  "Coverage planning by site and requirement",
                  "Better clarity before execution",
                ]}
              />
              <FeatureCard
                title="Execution Planning"
                desc="Support for deployment planning, reporting structure and execution readiness."
                points={[
                  "Deployment approach planning",
                  "Support format and reporting structure",
                  "Documentation-friendly service flow",
                  "Alignment with agreed scope",
                ]}
              />
              <FeatureCard
                title="Long-Term Continuity"
                desc="From initial requirement to active support, we stay connected through the service lifecycle."
                points={[
                  "Onboarding and start-up support",
                  "Registers, logs and reporting flow",
                  "Preventive and corrective support cycle",
                  "AMC and continuity support",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workforce services */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle
            title="IT Workforce Services"
            subtitle="Skilled manpower support for day-to-day operations, IT support, issue resolution and structured service delivery."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <FeatureCard
              title="On-Site Support Engineers"
              desc="For user support, device health checks, troubleshooting and daily coordination."
              points={[
                "Desktop and laptop support",
                "Printer and peripheral issue handling",
                "Basic software and OS support",
                "User-facing coordination and reporting",
              ]}
            />
            <FeatureCard
              title="Helpdesk Support"
              desc="Ticketing, issue tracking, escalation and closure visibility."
              points={[
                "Incident logging and tracking",
                "Response and escalation flow",
                "Status updates and reports",
                "Structured support handling",
              ]}
            />
            <FeatureCard
              title="Infrastructure Support"
              desc="Basic network and infrastructure coordination based on scope."
              points={[
                "LAN and Wi-Fi support",
                "Basic infrastructure issue coordination",
                "Vendor and OEM coordination",
                "Support process documentation",
              ]}
            />
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-2xl font-black text-slate-950">Typical roles we deploy</h3>

            <div className="mt-6 grid gap-4 text-slate-700 md:grid-cols-2">
              {[
                "System administrators and support engineers",
                "Network or infrastructure support personnel",
                "Helpdesk executives",
                "Application support resources",
                "Project-based support teams",
                "Multi-location service coordination",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={CONTACT_HREF}
                className="rounded-full bg-slate-900 px-7 py-3 font-extrabold text-white transition hover:bg-slate-800"
              >
                Share Requirement
              </Link>
              <Link
                href={CONTACT_HREF}
                className="rounded-full bg-blue-600 px-7 py-3 font-extrabold text-white transition hover:bg-blue-700"
              >
                Request Manpower Profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment model */}
      <section className="border-y bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle
            title="Deployment & Engagement Model"
            subtitle="Flexible models based on location count, team size, reporting needs and service expectations."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            <Step title="Site-Based Model" desc="Dedicated on-site engineers for defined locations." />
            <Step title="Central Helpdesk" desc="Central ticket handling with escalation support." />
            <Step title="Project Team" desc="Defined team for rollout, migration or special scope work." />
            <Step title="Hybrid Support" desc="On-site plus remote plus scheduled visit model." />
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8">
            <h3 className="text-2xl font-black text-slate-950">Onboarding & control process</h3>
            <p className="mt-4 max-w-5xl text-slate-600">
              Service execution starts with scope discussion, site understanding, support model,
              reporting format, escalation structure and clear documentation flow.
            </p>

            <div className="mt-6 grid gap-4 text-slate-700 md:grid-cols-2">
              {[
                "Scope and SLA discussion",
                "Asset baseline and support planning",
                "Ticketing and reporting format setup",
                "Escalation matrix and SPOC alignment",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AMC */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle
            title="Annual Maintenance Contract (AMC) Services"
            subtitle="AMC support for systems, devices and IT environments to help reduce downtime and improve support predictability."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <FeatureCard
              title="Preventive Maintenance"
              desc="Regular checkups and planned service activities."
              points={[
                "Health checks and cleaning",
                "Planned maintenance visits",
                "System condition review",
                "Preventive checklists and records",
              ]}
            />
            <FeatureCard
              title="Corrective Maintenance"
              desc="Troubleshooting, service handling and resolution support."
              points={[
                "Issue diagnosis and support action",
                "Repair or replacement coordination",
                "OEM warranty coordination",
                "Closure notes and tracking",
              ]}
            />
            <FeatureCard
              title="Reporting & MIS"
              desc="Visibility into service activity, incidents and maintenance work."
              points={[
                "Monthly service summary",
                "Incident and resolution tracking",
                "Preventive visit logs",
                "Recommendations and improvement notes",
              ]}
            />
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-2xl font-black text-slate-950">Typical AMC scope</h3>

            <div className="mt-6 grid gap-4 text-slate-700 md:grid-cols-2">
              {[
                "Preventive and corrective maintenance",
                "Incident management and issue support",
                "Hardware and OEM coordination",
                "Performance and support reporting",
                "Asset lifecycle guidance",
                "Site-wise service planning",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={CONTACT_HREF}
                className="rounded-full bg-blue-600 px-7 py-3 font-extrabold text-white transition hover:bg-blue-700"
              >
                Request AMC Quote
              </Link>
              <Link
                href={CONTACT_HREF}
                className="rounded-full border border-slate-200 bg-white px-7 py-3 font-extrabold text-slate-900 transition hover:border-blue-400"
              >
                Share Hardware Count
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PSU readiness */}
      <section className="border-y bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle
            title="Structured Service Delivery"
            subtitle="Better documentation, escalation flow and reporting for organizations that need disciplined support."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <FeatureCard
              title="Documentation"
              desc="Service logs, registers and records that improve visibility."
              points={[
                "Ticket logs and closure notes",
                "Preventive maintenance records",
                "Asset and service registers",
                "Replacement and repair records",
              ]}
            />
            <FeatureCard
              title="Escalation & SLA"
              desc="Defined service expectations and escalation structure."
              points={[
                "Response and escalation flow",
                "Review and tracking support",
                "Service visibility and status updates",
                "Corrective action follow-up",
              ]}
            />
            <FeatureCard
              title="Multi-Location Support"
              desc="Support model for more than one office or site."
              points={[
                "Central coordination",
                "Site-wise reporting",
                "Periodic visit planning",
                "Consistent service format",
              ]}
            />
          </div>
        </div>
      </section>

      {/* journey */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle
            title="From Requirement to Final Support"
            subtitle="We support the full service journey from discussion and scope planning to active support and reporting."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            <Step title="1. Discussion" desc="Understand site size, service need and support expectation." />
            <Step title="2. Scope Planning" desc="Finalize manpower model, reporting and service structure." />
            <Step title="3. Service Start" desc="Deploy team and begin logs, support flow and reporting." />
            <Step title="4. Ongoing Support" desc="AMC activity, reviews, escalations and continuity planning." />
          </div>

          <div className="mt-10 rounded-3xl border border-blue-100 bg-blue-50 p-8">
            <h3 className="text-2xl font-black text-slate-950">Why this helps organizations</h3>
            <p className="mt-4 max-w-5xl text-slate-700">
              Many buyers need more than just manpower or maintenance. They need a support partner
              who can also handle coordination, documentation, reporting and structured execution.
              That is the value of a more organized support model.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={CONTACT_HREF}
                className="rounded-full bg-slate-900 px-7 py-3 font-extrabold text-white transition hover:bg-slate-800"
              >
                Discuss Requirement
              </Link>
              <Link
                href={CONTACT_HREF}
                className="rounded-full bg-blue-600 px-7 py-3 font-extrabold text-white transition hover:bg-blue-700"
              >
                Request Support Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Quick answers for common AMC and workforce support questions."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <FaqCard
              question="Do you provide on-site IT support engineers?"
              answer="Yes. We provide on-site IT support resources based on scope, site count and support need."
            />
            <FaqCard
              question="Can you support multi-location organizations?"
              answer="Yes. We can support centralized, site-based and hybrid support models for multiple locations."
            />
            <FaqCard
              question="Do you provide AMC services with reporting?"
              answer="Yes. AMC support can include preventive visits, issue handling, reporting and documentation support."
            />
            <FaqCard
              question="Can you support helpdesk and escalation tracking?"
              answer="Yes. We can support ticketing-style handling, escalation flow and status visibility based on agreed scope."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[2.5rem] bg-blue-600 p-10 text-center text-white md:p-16">
            <h2 className="text-3xl font-black md:text-5xl">
              Need Reliable IT Support?
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-blue-100">
              Share your locations, hardware count, support scope and SLA requirement — we’ll suggest the right workforce and AMC model for your organization.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href={CONTACT_HREF}
                className="rounded-full bg-white px-8 py-4 font-black text-blue-600 transition hover:bg-blue-50"
              >
                Get Proposal
              </Link>
              <Link
                href={CONTACT_HREF}
                className="rounded-full border border-blue-300 bg-blue-700 px-8 py-4 font-black text-white transition hover:bg-blue-800"
              >
                Request Site Survey
              </Link>
            </div>

            <p className="mt-7 text-sm text-blue-100">
              GeM ID: <strong>{GEM_ID}</strong>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <h2 className="text-3xl font-black text-slate-950 md:text-4xl">{title}</h2>
      <p className="mt-3 max-w-4xl text-lg leading-relaxed text-slate-600">{subtitle}</p>
    </div>
  );
}

function InfoPill({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="font-black text-slate-900">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{desc}</div>
    </div>
  );
}

function FeatureCard({
  title,
  desc,
  points,
}: {
  title: string;
  desc: string;
  points: string[];
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-blue-300">
      <h3 className="text-xl font-black text-slate-950">{title}</h3>
      <p className="mt-3 text-slate-600">{desc}</p>
      <ul className="mt-5 space-y-2 text-sm text-slate-700">
        {points.map((point) => (
          <li key={point} className="flex gap-2">
            <span className="text-blue-600">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Step({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="font-black text-slate-900">{title}</div>
      <div className="mt-2 text-sm text-slate-600">{desc}</div>
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
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <h3 className="text-lg font-black text-slate-950">{question}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{answer}</p>
    </div>
  );
}