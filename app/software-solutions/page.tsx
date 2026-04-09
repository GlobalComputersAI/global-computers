import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://globalcomputers.net";
const PAGE_URL = `${SITE_URL}/software-solutions`;
const PROJECTS_HREF = "/projects";
const CONTACT_HREF = "/contact-us";

export const metadata: Metadata = {
  title: "Software Solutions | Custom Business, PSU & Enterprise Software",
  description:
    "Global Computers & IT Solutions provides custom software solutions for businesses, PSUs and enterprises including billing software, workflow automation, ERP-style systems, web apps, Android apps, dashboards, integrations and AMC support.",
  keywords: [
    "software solutions Korba",
    "custom software development Chhattisgarh",
    "business software India",
    "PSU software solutions",
    "enterprise software development",
    "billing software development",
    "workflow automation software",
    "web application development India",
    "Android app development India",
    "ERP software for business",
    "Global Computers software solutions",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Software Solutions | Custom Business, PSU & Enterprise Software",
    description:
      "Custom software for business, PSU and enterprise needs including web apps, Android apps, dashboards, workflow systems and long-term AMC support.",
    url: PAGE_URL,
    siteName: "Global Computers & IT Solutions",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/logo_header_svr.png`,
        width: 1200,
        height: 630,
        alt: "Global Computers Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Solutions | Custom Business, PSU & Enterprise Software",
    description:
      "Custom software solutions for business, PSU and enterprise workflows, billing, dashboards, apps and support.",
    images: [`${SITE_URL}/logo_header_svr.png`],
  },
};

const techLogos = [
  { name: "Google", src: "/tech/google.png" },
  { name: "Microsoft", src: "/tech/Microsoft.png" },
  { name: "AWS", src: "/tech/aws.png" },
  { name: "Oracle", src: "/tech/oracle.png" },
  { name: "PostgreSQL", src: "/tech/Postgresql.png" },
  { name: "MySQL", src: "/tech/mysql.png" },
  { name: "Docker", src: "/tech/docker.png" },
  { name: "Linux", src: "/tech/linux.png" },
  { name: "Azure", src: "/tech/azure.png" },
  { name: "IBM", src: "/tech/ibm.png" },
  { name: "Red Hat", src: "/tech/red-hat.png" },
  { name: "VMware", src: "/tech/vmware.png" },
  { name: "MongoDB", src: "/tech/Mongodb.png" },
  { name: "Redis", src: "/tech/redis.png" },
  { name: "Kubernetes", src: "/tech/Kubernetes.png" },
  { name: "NGINX", src: "/tech/nginx.png" },
  { name: "GitHub", src: "/tech/github.png" },
  { name: "GitLab", src: "/tech/gitlab.png" },
  { name: "Jira", src: "/tech/jira.png" },
];

const industrySolutions = [
  { label: "Retail & Supermarket", emoji: "🛒", id: "retail" },
  { label: "Restaurant & Cafe", emoji: "🍽️", id: "restaurant" },
  { label: "Hotel & Resort", emoji: "🏨", id: "hotel" },
  { label: "School & Institute", emoji: "🏫", id: "school" },
  { label: "PSU & Government", emoji: "🏛️", id: "psu" },
  { label: "Corporate Office", emoji: "🏢", id: "corporate" },
  { label: "Travel & Car Rental", emoji: "🚗", id: "travel" },
  { label: "Medical & Pharma", emoji: "💊", id: "medical" },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Software Solutions",
      serviceType: "Custom Software Development",
      provider: {
        "@type": "Organization",
        name: "Global Computers & IT Solutions",
        url: SITE_URL,
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      url: PAGE_URL,
      description:
        "Custom software solutions for business, PSU and enterprise use including web apps, Android apps, workflow systems, dashboards, integrations and AMC support.",
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
          name: "Software Solutions",
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
          name: "What type of software solutions do you provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We provide custom software solutions including billing software, inventory systems, workflow automation, dashboards, ERP-style systems, web applications and Android apps.",
          },
        },
        {
          "@type": "Question",
          name: "Do you build software for PSUs and enterprises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We design secure, scalable and documentation-friendly software for PSUs, government organizations and enterprise workflows.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide AMC and long-term support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We provide support, maintenance, upgrades, enhancements and AMC options after software delivery.",
          },
        },
        {
          "@type": "Question",
          name: "Can you build both web and Android applications?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We build web-based software as well as Android applications integrated with business workflows and backend systems.",
          },
        },
      ],
    },
  ],
};

export default function SoftwareSolutionsPage() {
  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-white via-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-700">
                Business • PSU • Enterprise Software
              </div>

              <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-tight text-slate-950 md:text-6xl">
                Custom
                <span className="block text-blue-600">Software Solutions</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                We build practical and scalable software for{" "}
                <span className="font-extrabold text-slate-900">
                  businesses, PSUs and enterprises
                </span>
                {" "}— including billing systems, workflow automation, dashboards,
                internal portals, web apps, Android apps and long-term support.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={CONTACT_HREF}
                  className="rounded-full bg-blue-600 px-7 py-3 font-extrabold text-white transition hover:bg-blue-700"
                >
                  Request Proposal
                </Link>
                <Link
                  href={PROJECTS_HREF}
                  className="rounded-full border border-slate-200 bg-white px-7 py-3 font-extrabold text-slate-900 transition hover:border-blue-400"
                >
                  View Demos
                </Link>
                <Link
                  href={CONTACT_HREF}
                  className="rounded-full bg-slate-900 px-7 py-3 font-extrabold text-white transition hover:bg-slate-800"
                >
                  Discuss Requirement
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <InfoPill
                  title="Business-Focused"
                  desc="Software designed around actual daily operations and reporting needs."
                />
                <InfoPill
                  title="PSU / Enterprise Ready"
                  desc="Structured workflows, documentation and controlled access."
                />
                <InfoPill
                  title="Web + Android"
                  desc="Build web applications and mobile apps from one workflow."
                />
                <InfoPill
                  title="Support + AMC"
                  desc="Long-term maintenance, upgrades and enhancements available."
                />
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
              <h2 className="text-2xl font-black text-slate-950">What we deliver</h2>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span>✅</span>
                  <span>
                    Requirement study, planning and module design
                  </span>
                </li>
                <li className="flex gap-3">
                  <span>✅</span>
                  <span>
                    Web applications, dashboards and internal portals
                  </span>
                </li>
                <li className="flex gap-3">
                  <span>✅</span>
                  <span>
                    Android apps integrated with business workflows
                  </span>
                </li>
                <li className="flex gap-3">
                  <span>✅</span>
                  <span>
                    Reporting, MIS, approvals and user-role control
                  </span>
                </li>
                <li className="flex gap-3">
                  <span>✅</span>
                  <span>
                    Support, AMC, upgrades and long-term improvements
                  </span>
                </li>
              </ul>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="text-sm font-black text-slate-900">
                  Popular software needs
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Billing Software",
                    "Inventory System",
                    "Workflow Automation",
                    "Dashboard & MIS",
                    "Android App",
                    "ERP-style Portal",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href={PROJECTS_HREF}
                  className="block rounded-xl bg-blue-600 py-3 text-center text-sm font-black text-white transition hover:bg-blue-700"
                >
                  See Demo Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core capability */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle
            title="Software Built for Real Operations"
            subtitle="From local business systems to enterprise workflows, we focus on usability, speed, reporting and long-term maintainability."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <FeatureCard
              title="Business Software"
              desc="Billing, inventory, customer, workflow and reporting systems for daily operations."
              points={[
                "Billing and inventory systems",
                "Order and workflow tracking",
                "User roles and permissions",
                "Reporting and dashboard visibility",
              ]}
            />
            <FeatureCard
              title="PSU / Enterprise Workflows"
              desc="Documentation-friendly internal systems for approvals, tracking, records and controlled usage."
              points={[
                "Approval-based workflow design",
                "User roles and action control",
                "MIS and export reports",
                "Scalable multi-user architecture",
              ]}
            />
            <FeatureCard
              title="Web + Android Solutions"
              desc="Modern applications for office, field teams, managers and customers where needed."
              points={[
                "Web portals and dashboards",
                "Android apps with backend integration",
                "Secure API-based flow",
                "Long-term upgrade path",
              ]}
            />
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-2xl font-black text-slate-950">
              Types of Software We Can Build
            </h3>

            <div className="mt-6 grid gap-4 text-slate-700 md:grid-cols-2">
              {[
                "Billing and inventory software",
                "ERP-style internal systems",
                "Workflow and approval software",
                "Dashboard and MIS applications",
                "Asset and tracking systems",
                "Attendance and operational utilities",
                "Android apps integrated with backend systems",
                "Custom business portals and admin panels",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={PROJECTS_HREF}
                className="rounded-full bg-slate-900 px-7 py-3 font-extrabold text-white transition hover:bg-slate-800"
              >
                View Projects / Demos
              </Link>
              <Link
                href={CONTACT_HREF}
                className="rounded-full bg-blue-600 px-7 py-3 font-extrabold text-white transition hover:bg-blue-700"
              >
                Get Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry selector */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitleDark
            title="Industry-wise Software Solutions"
            subtitle="Choose your business type and explore the kind of modules we can build for it."
          />

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {industrySolutions.map((item) => (
              <a
                key={item.label}
                href={`#${item.id}`}
                className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5 text-center transition hover:border-blue-400 hover:bg-blue-600"
              >
                <div className="mb-3 text-3xl">{item.emoji}</div>
                <div className="font-bold">{item.label}</div>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href={PROJECTS_HREF}
              className="inline-flex rounded-full bg-white px-8 py-4 font-black text-slate-900 transition hover:bg-slate-100"
            >
              Open Projects Page
            </Link>
          </div>
        </div>
      </section>

      {/* Industry blocks */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle
            title="Industry-wise Modules"
            subtitle="These are common example modules. Your final software can be customized based on workflow, access level and reporting needs."
          />

          <div className="mt-12 space-y-10">
            <IndustryBlock
              id="retail"
              emoji="🛒"
              title="Retail & Supermarket Software"
              intro="For billing, stock, sales visibility and smooth counter operations."
              modules={[
                "POS billing and discount handling",
                "Inventory and purchase management",
                "Barcode and printer integration",
                "Customer ledger and daily sales reports",
                "Profit, stock and fast-moving item reports",
                "Multi-user billing and access control",
              ]}
            />

            <IndustryBlock
              id="restaurant"
              emoji="🍽️"
              title="Restaurant & Cafe Software"
              intro="For orders, KOT, tables, billing and operational reporting."
              modules={[
                "Table and order management",
                "Kitchen order flow",
                "Menu and pricing setup",
                "Billing and settlement control",
                "Daily sales and shift reports",
                "Role-based user management",
              ]}
            />

            <IndustryBlock
              id="hotel"
              emoji="🏨"
              title="Hotel & Resort Software"
              intro="For bookings, room management, billing and front-desk operations."
              modules={[
                "Booking and room availability calendar",
                "Check-in and check-out workflow",
                "Tariff and package management",
                "Billing with add-on services",
                "Occupancy and revenue reporting",
                "Optional integration with other modules",
              ]}
            />

            <IndustryBlock
              id="school"
              emoji="🏫"
              title="School & Institute Software"
              intro="For student records, attendance, fees and academic workflow."
              modules={[
                "Student master and admissions",
                "Attendance and timetable support",
                "Fees and receipt management",
                "Exam and result workflow",
                "Certificate and document generation",
                "Admin and teacher access levels",
              ]}
            />

            <IndustryBlock
              id="psu"
              emoji="🏛️"
              title="PSU & Government Workflow Systems"
              intro="For structured internal processes, tracking, reporting and role-based control."
              highlight
              modules={[
                "Approval-based workflow systems",
                "File movement and tracking utilities",
                "Asset and inventory tracking",
                "Department-wise reporting dashboards",
                "Controlled user permissions",
                "Support for documentation-friendly deployment",
              ]}
            />

            <IndustryBlock
              id="corporate"
              emoji="🏢"
              title="Corporate Office Solutions"
              intro="For internal operations, approvals, requests, tracking and reporting."
              modules={[
                "Internal request and approval flow",
                "Helpdesk and support tickets",
                "Asset and service tracking",
                "Management dashboard and reports",
                "Role-based access control",
                "Exportable data and reporting tools",
              ]}
            />

            <IndustryBlock
              id="travel"
              emoji="🚗"
              title="Travel & Car Rental Software"
              intro="For fleet booking, trip control, billing and customer management."
              modules={[
                "Fleet availability and booking calendar",
                "Trip sheet and booking records",
                "Driver and vehicle details",
                "Rate card and corporate billing",
                "Trip-wise reporting and revenue visibility",
                "Payment and outstanding tracking",
              ]}
            />

            <IndustryBlock
              id="medical"
              emoji="💊"
              title="Medical & Pharma Software"
              intro="For billing, stock, expiry handling and daily reporting."
              modules={[
                "Billing and daily sales flow",
                "Batch and expiry tracking",
                "Inventory and supplier management",
                "GST-ready reporting support",
                "Low-stock and expiry visibility",
                "Controlled user roles",
              ]}
            />
          </div>

          <div className="mt-14 text-center">
            <Link
              href={PROJECTS_HREF}
              className="inline-flex rounded-full bg-blue-600 px-10 py-4 font-black text-white transition hover:bg-blue-700"
            >
              See Demo Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Android + integrations */}
      <section className="border-y bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle
            title="Web Applications, Android Apps & Integrations"
            subtitle="We can build systems for office use, management use and field-team use with smooth backend connectivity."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <FeatureCard
              title="Web Applications"
              desc="Admin panels, dashboards, reporting systems and internal business tools."
              points={[
                "Fast dashboard interfaces",
                "Role-based login flow",
                "Reporting and analytics modules",
                "Scalable architecture for growth",
              ]}
            />
            <FeatureCard
              title="Android Apps"
              desc="Apps for staff, field work, operations, updates and workflow capture."
              points={[
                "Form and data capture flow",
                "Backend-connected mobile apps",
                "Task and status update flow",
                "Version upgrade support",
              ]}
            />
            <FeatureCard
              title="Integrations"
              desc="Software can be connected with existing processes, data flow or supported business tools."
              points={[
                "API-based integration",
                "Controlled user permissions",
                "Sync and reporting workflow",
                "Long-term enhancement support",
              ]}
            />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href={CONTACT_HREF}
              className="rounded-full bg-slate-900 px-7 py-3 font-extrabold text-white transition hover:bg-slate-800"
            >
              Discuss App Requirement
            </Link>
            <Link
              href={PROJECTS_HREF}
              className="rounded-full border border-slate-200 bg-white px-7 py-3 font-extrabold text-slate-900 transition hover:border-blue-400"
            >
              View Demos
            </Link>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle
            title="Technology Stack We Can Use"
            subtitle="The final tech stack depends on your security, performance, deployment and support needs."
          />

          <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-2xl font-black text-slate-950">Typical Stack Options</h3>
              <p className="mt-2 text-slate-600">
                We choose the right combination of frontend, backend, database and deployment setup for your exact use case.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <StackItem title="Frontend" desc="Modern UI and fast dashboards" />
                <StackItem title="Backend" desc="Secure APIs and modular architecture" />
                <StackItem title="Database" desc="PostgreSQL, MySQL, Oracle and more" />
                <StackItem title="Deployment" desc="On-premise or controlled cloud setup" />
                <StackItem title="Android" desc="Mobile apps connected with backend systems" />
                <StackItem title="Maintenance" desc="Upgrade-ready and support-friendly design" />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={CONTACT_HREF}
                  className="inline-flex rounded-full bg-blue-600 px-8 py-4 font-black text-white transition hover:bg-blue-700"
                >
                  Get Tech Consultation
                </Link>
                <Link
                  href={PROJECTS_HREF}
                  className="inline-flex rounded-full border border-slate-200 bg-white px-8 py-4 font-black text-slate-900 transition hover:border-blue-400"
                >
                  View Demos
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-black text-slate-950">
                Platforms & Tools
              </h3>

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {techLogos.map((tech) => (
                  <LogoTile key={tech.name} name={tech.name} src={tech.src} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle
            title="How We Build Your Software"
            subtitle="Clear process, better planning and smoother delivery."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            <Step title="1. Discussion" desc="Understand workflow, pain points and goals." />
            <Step title="2. Planning" desc="Define modules, users, reports and scope." />
            <Step title="3. Development" desc="Build step by step with review and feedback." />
            <Step title="4. Testing" desc="Check flow, reports, usability and stability." />
            <Step title="5. Support" desc="Deployment, training, AMC and future upgrades." />
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8">
            <h3 className="text-2xl font-black text-slate-950">
              Support, AMC & Future Growth
            </h3>
            <p className="mt-4 max-w-5xl text-slate-600">
              We do not stop after delivery. We support improvements, updates, bug fixes,
              new reports, new modules and long-term maintenance so your software can keep growing with your business.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={CONTACT_HREF}
                className="rounded-full bg-blue-600 px-7 py-3 font-extrabold text-white transition hover:bg-blue-700"
              >
                Request Proposal
              </Link>
              <Link
                href={PROJECTS_HREF}
                className="rounded-full border border-slate-200 bg-white px-7 py-3 font-extrabold text-slate-900 transition hover:border-blue-400"
              >
                View Demo Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Clear answers for common software inquiries."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <FaqCard
              question="Can you build software based on our exact workflow?"
              answer="Yes. We can design software based on your process, modules, approvals, reports and operational needs."
            />
            <FaqCard
              question="Do you provide billing and inventory software?"
              answer="Yes. We provide billing, inventory and reporting solutions for retail, hospitality, office and other business needs."
            />
            <FaqCard
              question="Can you build both web and Android apps?"
              answer="Yes. We can build web applications and Android apps connected to the same workflow where required."
            />
            <FaqCard
              question="Do you provide support after delivery?"
              answer="Yes. We provide support, maintenance, enhancements and AMC options after deployment."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[2.5rem] bg-blue-600 p-10 text-center text-white md:p-16">
            <h2 className="text-3xl font-black md:text-5xl">
              Need the Right Software for Your Business?
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-blue-100">
              Tell us what you need — billing, inventory, workflow, dashboard, portal or Android app — and we’ll suggest the right software solution with long-term support.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href={CONTACT_HREF}
                className="rounded-full bg-white px-8 py-4 font-black text-blue-600 transition hover:bg-blue-50"
              >
                Get Proposal
              </Link>
              <Link
                href={PROJECTS_HREF}
                className="rounded-full border border-blue-300 bg-blue-700 px-8 py-4 font-black text-white transition hover:bg-blue-800"
              >
                Open Demo Projects
              </Link>
            </div>
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

function SectionTitleDark({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-black text-white md:text-4xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-4xl text-lg leading-relaxed text-slate-300">
        {subtitle}
      </p>
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
      <div className="mt-6">
        <Link href={PROJECTS_HREF} className="font-bold text-blue-700 hover:text-blue-600">
          View demos →
        </Link>
      </div>
    </div>
  );
}

function IndustryBlock({
  id,
  emoji,
  title,
  intro,
  modules,
  highlight,
}: {
  id: string;
  emoji: string;
  title: string;
  intro: string;
  modules: string[];
  highlight?: boolean;
}) {
  return (
    <section
      id={id}
      className={[
        "rounded-[2rem] border p-8 md:p-10",
        highlight ? "border-blue-200 bg-blue-50" : "border-slate-200 bg-white",
      ].join(" ")}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="text-3xl">{emoji}</div>
          <div>
            <h3 className="text-2xl font-black text-slate-950 md:text-3xl">{title}</h3>
            <p className="mt-3 max-w-4xl text-slate-600">{intro}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href={CONTACT_HREF}
            className="rounded-full bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-800"
          >
            Request Quote
          </Link>
          <Link
            href={PROJECTS_HREF}
            className="rounded-full border border-slate-200 bg-white px-6 py-3 font-bold text-slate-900 transition hover:border-blue-400"
          >
            Demo / Projects
          </Link>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6">
          <div className="font-black text-slate-900">Typical Modules</div>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {modules.map((module) => (
              <li key={module} className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span>{module}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <div className="font-black text-slate-900">Built-in Good Practices</div>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {[
              "Role-based access",
              "Approval-friendly workflow",
              "Reports and dashboards",
              "Data visibility as needed",
              "Upgrade and enhancement support",
              "AMC and maintenance options",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Link href={PROJECTS_HREF} className="font-bold text-blue-700 hover:text-blue-600">
              See demos →
            </Link>
          </div>
        </div>
      </div>
    </section>
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

function StackItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="font-black text-slate-900">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{desc}</div>
    </div>
  );
}

function LogoTile({ name, src }: { name: string; src: string }) {
  return (
    <div className="relative flex h-14 items-center justify-center rounded-2xl border border-slate-200 bg-white transition hover:border-blue-400">
      <Image
        src={src}
        alt={`${name} logo`}
        fill
        className="object-contain p-3"
        sizes="120px"
      />
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
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
      <h3 className="text-lg font-black text-slate-950">{question}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{answer}</p>
    </div>
  );
}