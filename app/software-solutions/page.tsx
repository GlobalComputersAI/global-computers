import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customized Software Solutions for PSUs and Enterprises",
  description:
    "Global Computers & IT Solutions designs, develops, and implements PSU and enterprise-grade on-premise, web-based, and Android software solutions with security, compliance, audit readiness, integrations, and long-term AMC support.",
  keywords: [
    "custom software development India",
    "PSU software solutions",
    "enterprise software development",
    "on-premise software",
    "web application development",
    "Android app development",
    "workflow automation software",
    "asset management software",
    "attendance software integration",
    "Global Computers software solutions",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/software-solutions",
  },
  openGraph: {
    title: "Customized Software Solutions for PSUs and Enterprises",
    description:
      "Secure, scalable, audit-ready on-premise, web, and Android software solutions for PSUs, government organizations, and enterprises.",
    url: "https://globalcomputers.net/software-solutions",
    siteName: "Global Computers & IT Solutions",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customized Software Solutions for PSUs and Enterprises",
    description:
      "Secure, scalable, audit-ready on-premise, web, and Android software solutions for PSUs and enterprises.",
  },
};

const projectsHref = "/projects";

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

const specialized = [
  { label: "Retail & Supermarket", emoji: "🛒", id: "retail" },
  { label: "Restaurant & Cafe", emoji: "🍽", id: "restaurant" },
  { label: "Hotel & Resort", emoji: "🏨", id: "hotel" },
  { label: "School & Institute", emoji: "🏫", id: "school" },
  { label: "PSU & Government", emoji: "🏛", id: "psu" },
  { label: "Corporate Office", emoji: "🏢", id: "corporate" },
  { label: "Rental Car & Travel", emoji: "🚗", id: "travel" },
  { label: "Medical & Pharma", emoji: "💊", id: "medical" },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Customized Software Solutions",
  serviceType: "Enterprise Software Development",
  provider: {
    "@type": "Organization",
    name: "Global Computers & IT Solutions",
    url: "https://globalcomputers.net",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  url: "https://globalcomputers.net/software-solutions",
  description:
    "Custom PSU and enterprise software solutions including on-premise systems, web applications, Android apps, workflow automation, dashboards, integrations, and long-term AMC support.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://globalcomputers.net",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Software Solutions",
      item: "https://globalcomputers.net/software-solutions",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="border-b bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                <span>✔</span>
                <span>PSU &amp; Enterprise-Grade • On-Premise / Web • Android Apps</span>
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight leading-[1.05] md:text-6xl">
                PSU &amp; Enterprise{" "}
                <span className="text-blue-600">Software Solutions</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                Global Computers &amp; IT Solutions builds{" "}
                <strong>secure, scalable, audit-ready</strong> software for
                <strong> PSUs, government organizations, and enterprises</strong>.
                We design systems for <strong>on-premise deployment</strong> and
                secure web-based workflows, aligned with compliance and long-term
                support.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="rounded-full bg-blue-600 px-7 py-3 font-bold text-white shadow transition hover:bg-blue-500"
                >
                  Request Proposal
                </Link>
                <Link
                  href={projectsHref}
                  className="rounded-full border border-slate-200 bg-white px-7 py-3 font-bold text-slate-900 transition hover:border-blue-400"
                >
                  View Demo Projects
                </Link>
                <Link
                  href="/contact-us"
                  className="rounded-full bg-slate-900 px-7 py-3 font-bold text-white transition hover:bg-slate-800"
                >
                  Discuss Requirement
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <InfoPill
                  title="PSU-Ready Compliance"
                  desc="Audit logs, approvals, documentation, and change control"
                />
                <InfoPill
                  title="Secure On-Prem Deployment"
                  desc="Data stays inside your infrastructure and policies"
                />
                <InfoPill
                  title="Process Automation"
                  desc="Reduce manual work with workflows and dashboards"
                />
                <InfoPill
                  title="Android + Web"
                  desc="Mobile apps integrated with internal systems"
                />
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-xl">
              <h3 className="text-xl font-black">What we deliver</h3>

              <ul className="mt-5 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span>✅</span>
                  <span>
                    <strong>Requirement study</strong> + SRS documentation + approvals
                  </span>
                </li>
                <li className="flex gap-3">
                  <span>✅</span>
                  <span>
                    <strong>Role-based access</strong>, audit trails, and policy-driven security
                  </span>
                </li>
                <li className="flex gap-3">
                  <span>✅</span>
                  <span>
                    <strong>Dashboards &amp; MIS</strong> reporting, exports, filters, and scheduled reports
                  </span>
                </li>
                <li className="flex gap-3">
                  <span>✅</span>
                  <span>
                    <strong>Integration</strong> with existing infrastructure and processes
                  </span>
                </li>
                <li className="flex gap-3">
                  <span>✅</span>
                  <span>
                    <strong>AMC support</strong>, upgrades, enhancements, and long-term maintenance
                  </span>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={projectsHref}
                  className="w-full rounded-xl bg-blue-600 py-3 text-center font-black text-white transition hover:bg-blue-500"
                >
                  See Demo on Projects Page
                </Link>
                <p className="text-xs text-slate-500">
                  Tip: Visit <strong>Projects</strong> to view demos, sample modules, and case-style previews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionTitle
            title="PSU & Enterprise Level Capabilities"
            subtitle="Built for scale, governance, security, approvals, and audit readiness."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <FeatureCard
              title="Security & Access Control"
              desc="RBAC, strong authentication, password policy, secure sessions, IP restrictions, data validation, and secure APIs."
              points={[
                "Role-based permissions (module-wise)",
                "Activity logs and login history",
                "Approval gates for sensitive actions",
                "Data encryption where applicable",
              ]}
            />
            <FeatureCard
              title="Audit & Compliance"
              desc="Audit trails, approvals, document numbering, logs, and reports designed for internal audit, vigilance, and review committees."
              points={[
                "Complete audit trail (who / what / when)",
                "Workflow approvals with remarks",
                "Document versioning & change control",
                "Exportable MIS reports",
              ]}
            />
            <FeatureCard
              title="Scalable Architecture"
              desc="Designed for enterprise usage: multi-user load, multi-location, multiple departments, and controlled deployments."
              points={[
                "Department / unit segregation",
                "Multi-location data & permissions",
                "Performance & indexing planning",
                "Backup & recovery strategy",
              ]}
            />
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-2xl font-black">Types of Software Solutions</h3>
            <div className="mt-6 grid gap-4 text-slate-700 md:grid-cols-2">
              <li className="list-none">• Web-based internal applications &amp; portals</li>
              <li className="list-none">• On-premise enterprise software systems</li>
              <li className="list-none">• Workflow automation &amp; process management</li>
              <li className="list-none">• Asset management &amp; inventory systems</li>
              <li className="list-none">• Reporting, dashboards &amp; MIS applications</li>
              <li className="list-none">• Android apps integrated with internal systems</li>
              <li className="list-none">• File movement, approvals &amp; document tracking</li>
              <li className="list-none">• Tender / BOQ related internal utilities (as per policy)</li>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={projectsHref}
                className="rounded-full bg-slate-900 px-7 py-3 font-bold text-white transition hover:bg-slate-800"
              >
                View Projects / Demo
              </Link>
              <Link
                href="/contact-us"
                className="rounded-full bg-blue-600 px-7 py-3 font-bold text-white transition hover:bg-blue-500"
              >
                Get Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="mb-14 text-center text-3xl font-black md:text-4xl">
            Specialized Solutions For:
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {specialized.map((item) => (
              <a
                key={item.label}
                href={`#${item.id}`}
                className="cursor-pointer rounded-2xl border border-slate-700 bg-slate-800/50 p-6 text-center transition-colors hover:bg-blue-600"
              >
                <div className="mb-3 text-3xl">{item.emoji}</div>
                <div className="font-bold">{item.label}</div>
                <div className="mt-2 text-xs text-slate-200/90">
                  Explore modules ↓
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href={projectsHref}
              className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 font-black text-slate-900 transition hover:bg-slate-100"
            >
              Open Projects Page for Demos →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionTitle
            title="Industry-wise Modules & Detailed Capabilities"
            subtitle="Each solution is customized. Modules shown below are typical scopes. Demo available on the Projects page."
          />

          <div className="mt-12 space-y-10">
            <IndustryBlock
              id="retail"
              emoji="🛒"
              title="Retail & Supermarket Software"
              intro="Billing, inventory, barcode, multi-store, and analytics — designed for speed at the counter, accuracy in stock, and clear profitability reporting."
              modules={[
                "POS billing (barcode / QR), discounts, offers, loyalty",
                "Stock & purchase management, suppliers, GRN, batch / expiry",
                "Multi-counter, multi-store, user permissions",
                "GST-ready reports, daily sales, profit & fast-moving items",
                "Customer ledger, credit control (as per policy)",
                "Hardware integration: barcode scanner, printer, weighing scale where required",
              ]}
            />

            <IndustryBlock
              id="restaurant"
              emoji="🍽"
              title="Restaurant & Cafe Software"
              intro="Fast order taking, KOT flow, table management, delivery integration, and day-end control."
              modules={[
                "Dine-in tables, KOT, kitchen display / printer support",
                "Takeaway, delivery, online order workflow (optional integration)",
                "Menu management, combo, modifiers, taxes",
                "User roles (cashier, captain, manager), audit logs",
                "Daily settlement, expense, wastage tracking",
                "Reports: item-wise sales, peak hours, profitability insights",
              ]}
            />

            <IndustryBlock
              id="hotel"
              emoji="🏨"
              title="Hotel & Resort Management"
              intro="Room inventory, bookings, billing, guest services, and operations management with clean reporting."
              modules={[
                "Room booking, check-in / check-out, occupancy calendar",
                "Tariff plans, seasonal pricing, packages",
                "Front office billing, add-on services, invoices",
                "Housekeeping status, maintenance tickets",
                "Reports: occupancy, revenue, staff-wise collection",
                "Optional: restaurant POS integration and consolidated MIS",
              ]}
            />

            <IndustryBlock
              id="school"
              emoji="🏫"
              title="School & Institute ERP"
              intro="Student lifecycle management with attendance, fees, exams, certificates, and role-based access."
              modules={[
                "Admissions, student master, ID cards",
                "Attendance (manual / app), timetable, notifications",
                "Fees management with receipts & due tracking",
                "Exam, marksheets, report cards",
                "Certificates, TC generation workflow",
                "Role-based access for admin / teachers / accounts",
              ]}
            />

            <IndustryBlock
              id="psu"
              emoji="🏛"
              title="PSU & Government Workflow Systems"
              intro="On-premise, compliance-first systems for approvals, movement, assets, inventory, monitoring, and MIS — built for audit readiness."
              highlight
              modules={[
                "File movement, approval workflows, notes & remarks",
                "Asset management, inventory, issuance / return, AMC tracking",
                "HR / admin utilities: attendance integration where allowed, internal requests",
                "Department-wise dashboards and MIS reporting",
                "Audit logs, role-based permissions, controlled access",
                "Integration with existing processes and infrastructure as per policy",
              ]}
            />

            <IndustryBlock
              id="corporate"
              emoji="🏢"
              title="Corporate Office Solutions"
              intro="Operations software for approvals, helpdesk, assets, HR support workflows, and management dashboards."
              modules={[
                "Internal portal, tickets / helpdesk, workflow approvals",
                "Asset allocation & tracking, AMC & service scheduling",
                "Vendor management, purchase requests, approvals",
                "Dashboards for management and department KPIs",
                "Role-based access + audit logs",
                "Exportable reports for finance and operations review",
              ]}
            />

            <IndustryBlock
              id="travel"
              emoji="🚗"
              title="Rental Car & Travel Management"
              intro="Fleet availability, booking, driver management, billing, and tracking for travel businesses and corporate rentals."
              modules={[
                "Fleet inventory, booking calendar, trip sheet",
                "Driver details, documents, compliance tracking",
                "Billing, payments, outstanding control",
                "Corporate customer contracts and rate cards",
                "Trip-wise profitability, expense tracking",
                "Reports: utilization, busiest routes, monthly revenue",
              ]}
            />

            <IndustryBlock
              id="medical"
              emoji="💊"
              title="Medical & Pharma Systems"
              intro="Inventory control, batch / expiry handling, billing, and compliance-friendly reporting."
              modules={[
                "Billing, customer records as per policy",
                "Inventory with batch / expiry & low-stock alerts",
                "Supplier purchase, GRN and returns",
                "Reports: GST, daily sales, expiry reports",
                "User access control + audit logs",
                "Optional: multi-branch inventory where needed",
              ]}
            />
          </div>

          <div className="mt-14 text-center">
            <Link
              href={projectsHref}
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-10 py-4 font-black text-white transition hover:bg-blue-500"
            >
              See Demos on Projects Page →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionTitle
            title="Android App Development & Integration"
            subtitle="Mobile apps that connect securely with your internal systems, with online or offline support as required."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <FeatureCard
              title="Internal Field Apps"
              desc="Perfect for inspection, survey, attendance-like internal workflows, and on-ground reporting as per policy."
              points={[
                "Form-based data capture with validations",
                "Photo / attachment uploads (policy-based)",
                "Geo-tag / timestamp support (optional)",
                "Sync to server with approvals",
              ]}
            />
            <FeatureCard
              title="Retail / Billing Companion"
              desc="Apps that support inventory lookup, order capture, delivery tracking, and quick customer management."
              points={[
                "Inventory search and availability",
                "Order capture and status updates",
                "Payments workflow integration",
                "Notification and alert system",
              ]}
            />
            <FeatureCard
              title="Secure Integration"
              desc="API-based integration with role-based access and audit logs, designed with security practices."
              points={[
                "Token / session management",
                "Role-based permissions",
                "Audit logging of critical actions",
                "Controlled deployment & versioning",
              ]}
            />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact-us"
              className="rounded-full bg-slate-900 px-7 py-3 font-bold text-white transition hover:bg-slate-800"
            >
              Discuss Android App
            </Link>
            <Link
              href={projectsHref}
              className="rounded-full border border-slate-200 bg-white px-7 py-3 font-bold text-slate-900 transition hover:border-blue-400"
            >
              View App Demos in Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionTitle
            title="We Choose the Best Tech Stack for You"
            subtitle="Tech selection depends on your security policy, deployment type, integrations, performance requirements, and long-term maintenance."
          />

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-2xl font-black">Typical Stack Options</h3>
              <p className="mt-2 text-slate-600">
                We select the most suitable and future-proof stack based on your use case and compliance needs.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <StackItem title="Frontend" desc="Next.js / React — modern UI and fast dashboards" />
                <StackItem title="Backend" desc="Secure APIs, modular architecture, scalable design" />
                <StackItem title="Database" desc="PostgreSQL / MySQL / MS SQL / Oracle as required" />
                <StackItem title="Deployment" desc="On-prem servers, VPN access, controlled environment" />
                <StackItem title="Cloud (optional)" desc="AWS / Azure / GCP — only if policy allows" />
                <StackItem title="Android" desc="Native / hybrid apps integrated with internal APIs" />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-10 py-4 font-black text-white transition hover:bg-blue-500"
                >
                  Get Tech Consultation
                </Link>
                <Link
                  href={projectsHref}
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-10 py-4 font-black text-slate-900 transition hover:border-blue-400"
                >
                  View Demos
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="mb-6 text-xl font-black">
                Technology Partners &amp; Tools
              </h3>

              <div>
                <div className="mb-4 font-black text-slate-900">
                  Core Technology Partners
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {techLogos.slice(0, 8).map((tech) => (
                    <LogoTile key={tech.name} name={tech.name} src={tech.src} />
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <div className="mb-4 font-black text-slate-900">
                  Additional Platforms &amp; Tools
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {techLogos.slice(8).map((tech) => (
                    <LogoTile key={tech.name} name={tech.name} src={tech.src} />
                  ))}
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href={projectsHref}
                  className="font-bold text-blue-700 hover:text-blue-600"
                >
                  See real implementations in Projects →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionTitle
            title="Development & Implementation Approach"
            subtitle="Structured lifecycle designed for stability, approvals, documentation, and smooth rollout."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            <Step title="1. Requirement Study" desc="SRS, workflows, user roles, approvals, and scope finalization." />
            <Step title="2. System Design" desc="Architecture, database design, UI or UX, and security controls." />
            <Step title="3. Development" desc="Module-by-module build, reviews, and controlled iterations." />
            <Step title="4. Testing" desc="UAT cycles, bug fixes, performance, and security checks." />
            <Step title="5. Deployment & Support" desc="On-prem deployment, training, AMC, and upgrades." />
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8">
            <h3 className="text-2xl font-black">Security &amp; Compliance Focus</h3>
            <p className="mt-4 max-w-5xl text-slate-600">
              We follow secure development practices including role-based access control, input validation,
              secure authentication, logging, and controlled deployments. On-premise deployment ensures data
              remains within your infrastructure, aligning with PSU and government policies.
            </p>

            <p className="mt-4 max-w-5xl text-slate-600">
              Documentation, approval workflows, audit readiness, and change control are included throughout
              the project lifecycle.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="rounded-full bg-blue-600 px-7 py-3 font-bold text-white transition hover:bg-blue-500"
              >
                Request Security-First Proposal
              </Link>
              <Link
                href={projectsHref}
                className="rounded-full border border-slate-200 bg-white px-7 py-3 font-bold text-slate-900 transition hover:border-blue-400"
              >
                View Compliance-style Demos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionTitle
            title="Support, AMC & Long-Term Maintenance"
            subtitle="We stay with you after delivery — upgrades, enhancements, audits, and ongoing improvements."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <FeatureCard
              title="AMC Support Models"
              desc="Annual support contracts with defined response, enhancement, and version-upgrade coverage."
              points={[
                "Bug fixes & issue tracking",
                "Performance improvements",
                "Enhancements and change requests",
                "Regular backups & health checks where required",
              ]}
            />
            <FeatureCard
              title="Training & Handover"
              desc="We provide training, user manuals, admin documentation, and smooth rollout support."
              points={[
                "Admin training + end user training",
                "Documentation set (SRS, manual, flow)",
                "Deployment checklist",
                "Post-go-live support window",
              ]}
            />
            <FeatureCard
              title="Future-ready Enhancements"
              desc="New modules, mobile apps, dashboards, and integrations can be added anytime."
              points={[
                "New department modules",
                "Android app extensions",
                "New reports & dashboards",
                "Integration with internal tools",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="rounded-[3rem] bg-blue-600 p-12 text-center text-white md:p-16">
            <h2 className="mb-4 text-3xl font-black md:text-5xl">
              Want a Secure, PSU-Ready System?
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-blue-100">
              Tell us your workflow, approvals, and reporting needs — we will propose a compliant, secure,
              and scalable software solution with long-term support. View demos anytime on the Projects page.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="rounded-full bg-white px-10 py-4 font-black text-blue-600 shadow-lg transition hover:bg-blue-50"
              >
                Get Proposal
              </Link>
              <Link
                href={projectsHref}
                className="rounded-full border border-blue-400 bg-blue-800 px-10 py-4 font-black text-white transition hover:bg-blue-700"
              >
                Open Projects / Demos
              </Link>
            </div>

            <p className="mt-7 text-sm text-blue-100">
              Demo link: <strong>{projectsHref}</strong>
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
      <h2 className="text-3xl font-black md:text-4xl">{title}</h2>
      <p className="mt-3 max-w-4xl text-lg text-slate-600">{subtitle}</p>
    </div>
  );
}

function InfoPill({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="font-black">{title}</div>
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
      <h3 className="text-xl font-black">{title}</h3>
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
        <Link href="/projects" className="font-bold text-blue-700 hover:text-blue-600">
          View demo in Projects →
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
        "rounded-[2.25rem] border p-8 md:p-10",
        highlight ? "border-blue-200 bg-blue-50" : "border-slate-200 bg-white",
      ].join(" ")}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="text-3xl">{emoji}</div>
          <div>
            <h3 className="text-2xl font-black md:text-3xl">{title}</h3>
            <p className="mt-3 max-w-4xl text-slate-600">{intro}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact-us"
            className="rounded-full bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-800"
          >
            Request Quote
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-slate-200 bg-white px-6 py-3 font-bold text-slate-900 transition hover:border-blue-400"
          >
            Demo / Projects
          </Link>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white/70 p-6">
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
          <div className="font-black text-slate-900">Built-in Enterprise Practices</div>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {[
              "Role-based access (module-wise)",
              "Approval workflow and remarks",
              "Audit trail for critical actions",
              "Exportable reports (MIS)",
              "Controlled deployments & documentation",
              "Support + AMC options",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Link href="/projects" className="font-bold text-blue-700 hover:text-blue-600">
              See module demo in Projects →
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
      <div className="font-black">{title}</div>
      <div className="mt-2 text-sm text-slate-600">{desc}</div>
    </div>
  );
}

function StackItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="font-black">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{desc}</div>
    </div>
  );
}

function LogoTile({ name, src }: { name: string; src: string }) {
  return (
    <div className="relative flex h-14 items-center justify-center rounded-2xl border border-slate-200 bg-white transition hover:border-blue-400">
      <Image src={src} alt={`${name} logo`} fill className="object-contain p-3" />
    </div>
  );
}