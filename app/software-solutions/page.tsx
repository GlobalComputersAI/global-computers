import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customized Software Solutions for PSUs and Enterprises",
  description:
    "Global Computers & IT Solutions designs, develops, and implements PSU & enterprise-grade on-premise and web-based software solutions with security, compliance, audit readiness, and long-term support. Android apps included.",
};

const projectsHref = "/projects";

const techLogos = [
  // Core
  { name: "Google", src: "/tech/google.png" },
  { name: "Microsoft", src: "/tech/microsoft.png" },
  { name: "AWS", src: "/tech/aws.png" },
  { name: "Oracle", src: "/tech/oracle.png" },

  // Databases / Infra
  { name: "PostgreSQL", src: "/tech/postgresql.png" },
  { name: "MySQL", src: "/tech/mysql.png" },
  { name: "Docker", src: "/tech/docker.png" },
  { name: "Linux", src: "/tech/linux.png" },

  // Suggested extra (optional)
  { name: "Azure", src: "/tech/azure.png" },
  { name: "IBM", src: "/tech/ibm.png" },
  { name: "Red Hat", src: "/tech/red-hat.png" },
  { name: "VMware", src: "/tech/vmware.png" },
  { name: "MongoDB", src: "/tech/mongodb.png" },
  { name: "Redis", src: "/tech/redis.png" },
  { name: "Kubernetes", src: "/tech/kubernetes.png" },
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

export default function SoftwareSolutionsPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <section className="border-b bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-100 px-4 py-2 rounded-full text-sm font-semibold">
                <span>✔</span>
                <span>PSU & Enterprise-Grade • On-Premise / Web • Android Apps</span>
              </div>

              <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
                PSU & Enterprise{" "}
                <span className="text-blue-600">Software Solutions</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                Global Computers & IT Solutions builds{" "}
                <strong>secure, scalable, audit-ready</strong> software for
                <strong> PSUs, government organizations, and enterprises</strong>.
                We design systems for <strong>on-premise deployment</strong> and
                secure web-based workflows, aligned with compliance and long-term
                support.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="px-7 py-3 rounded-full bg-blue-600 text-white font-bold shadow hover:bg-blue-500 transition"
                >
                  Request Proposal
                </Link>
                <Link
                  href={projectsHref}
                  className="px-7 py-3 rounded-full bg-white text-slate-900 font-bold border border-slate-200 hover:border-blue-400 transition"
                >
                  View Demo Projects
                </Link>
                <Link
                  href="/contact-us"
                  className="px-7 py-3 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition"
                >
                  Discuss Requirement
                </Link>
              </div>

              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                <InfoPill title="PSU-Ready Compliance" desc="Audit logs, approvals, documentation & change control" />
                <InfoPill title="Secure On-Prem Deployment" desc="Data stays inside your infrastructure & policies" />
                <InfoPill title="Process Automation" desc="Reduce manual work with workflows & dashboards" />
                <InfoPill title="Android + Web" desc="Mobile apps integrated with internal systems" />
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl p-8">
              <h3 className="text-xl font-black">What we deliver</h3>

              <ul className="mt-5 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span>✅</span>
                  <span><strong>Requirement study</strong> + SRS documentation + approvals</span>
                </li>
                <li className="flex gap-3">
                  <span>✅</span>
                  <span><strong>Role-based access</strong>, audit trails, and policy-driven security</span>
                </li>
                <li className="flex gap-3">
                  <span>✅</span>
                  <span><strong>Dashboards & MIS</strong> reporting (export, filters, scheduled reports)</span>
                </li>
                <li className="flex gap-3">
                  <span>✅</span>
                  <span><strong>Integration</strong> with existing infrastructure & processes</span>
                </li>
                <li className="flex gap-3">
                  <span>✅</span>
                  <span><strong>AMC support</strong>, upgrades, enhancements & long-term maintenance</span>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={projectsHref}
                  className="w-full text-center py-3 rounded-xl bg-blue-600 text-white font-black hover:bg-blue-500 transition"
                >
                  See Demo on Projects Page
                </Link>
                <p className="text-xs text-slate-500">
                  Tip: Visit <strong>Projects</strong> to view demos / sample modules / case-style previews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PSU / ENTERPRISE CAPABILITIES ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionTitle
            title="PSU & Enterprise Level Capabilities"
            subtitle="Built for scale, governance, security, approvals, and audit readiness."
          />

          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Security & Access Control"
              desc="RBAC (Role Based Access), strong authentication, password policy, secure sessions, IP restrictions, data validation and secure APIs."
              points={[
                "Role-based permissions (module-wise)",
                "Activity logs and login history",
                "Approval gates for sensitive actions",
                "Data encryption where applicable",
              ]}
            />
            <FeatureCard
              title="Audit & Compliance"
              desc="Audit trails, approvals, document numbering, logs and reports designed for internal audit, vigilance, and review committees."
              points={[
                "Complete audit trail (who/what/when)",
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

          <div className="mt-10 bg-slate-50 border border-slate-200 rounded-3xl p-8">
            <h3 className="text-2xl font-black">Types of Software Solutions</h3>
            <div className="mt-6 grid md:grid-cols-2 gap-4 text-slate-700">
              <li className="list-none">• Web-based internal applications & portals</li>
              <li className="list-none">• On-premise enterprise software systems</li>
              <li className="list-none">• Workflow automation & process management</li>
              <li className="list-none">• Asset management & inventory systems</li>
              <li className="list-none">• Reporting, dashboards & MIS applications</li>
              <li className="list-none">• Android apps integrated with internal systems</li>
              <li className="list-none">• File movement, approvals & document tracking</li>
              <li className="list-none">• Tender/BOQ related internal utilities (as per policy)</li>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={projectsHref}
                className="px-7 py-3 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition"
              >
                View Projects / Demo
              </Link>
              <Link
                href="/contact-us"
                className="px-7 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition"
              >
                Get Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SPECIALIZED SOLUTIONS FOR (YOUR DARK SECTION) ================= */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-14">
            Specialized Solutions For:
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {specialized.map((item) => (
              <a
                key={item.label}
                href={`#${item.id}`}
                className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl text-center hover:bg-blue-600 transition-colors cursor-pointer"
              >
                <div className="text-3xl mb-3">{item.emoji}</div>
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
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-slate-900 font-black hover:bg-slate-100 transition"
            >
              Open Projects Page for Demos →
            </Link>
          </div>
        </div>
      </section>

      {/* ================= INDUSTRY SECTIONS (DETAILED) ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionTitle
            title="Industry-wise Modules & Detailed Capabilities"
            subtitle="Each solution is customized—modules shown below are typical scopes. Demo available on Projects page."
          />

          <div className="mt-12 space-y-10">
            <IndustryBlock
              id="retail"
              emoji="🛒"
              title="Retail & Supermarket Software"
              intro="Billing + inventory + barcode + multi-store + analytics. Designed for speed at counter, accuracy in stock, and clear profitability reporting."
              modules={[
                "POS billing (barcode/QR), discounts, offers, loyalty",
                "Stock & purchase management, suppliers, GRN, batch/expiry",
                "Multi-counter, multi-store, user permissions",
                "GST-ready reports, daily sales, profit & fast-moving items",
                "Customer ledger, credit control (as per policy)",
                "Hardware integration: barcode scanner, printer, weighing scale (if required)",
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
                "Room booking, check-in/check-out, occupancy calendar",
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
              intro="Student lifecycle management with attendance, fees, exams, certificates and role-based access."
              modules={[
                "Admissions, student master, ID cards",
                "Attendance (manual/app), timetable, notifications",
                "Fees management with receipts & due tracking",
                "Exam, marksheets, report cards",
                "Certificates, TC generation workflow",
                "Role-based access for admin/teachers/accounts",
              ]}
            />

            <IndustryBlock
              id="psu"
              emoji="🏛"
              title="PSU & Government Workflow Systems"
              intro="On-prem, compliance-first systems for approvals, movement, assets, inventory, monitoring, and MIS—built for audit readiness."
              highlight
              modules={[
                "File movement, approval workflows, notes & remarks",
                "Asset management, inventory, issuance/return, AMC tracking",
                "HR/admin utilities: attendance integration (if allowed), internal requests",
                "Department-wise dashboards and MIS reporting",
                "Audit logs, role-based permissions, controlled access",
                "Integration with existing processes & infrastructure (as per policy)",
              ]}
            />

            <IndustryBlock
              id="corporate"
              emoji="🏢"
              title="Corporate Office Solutions"
              intro="Operations software for approvals, helpdesk, assets, HR support workflows, and management dashboards."
              modules={[
                "Internal portal, tickets/helpdesk, workflow approvals",
                "Asset allocation & tracking, AMC & service scheduling",
                "Vendor management, purchase requests, approvals",
                "Dashboards for management and department KPIs",
                "Role-based access + audit logs",
                "Exportable reports for finance/ops review",
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
              intro="Inventory control, batch/expiry handling, billing, and compliance-friendly reporting."
              modules={[
                "Billing, customer records as per policy",
                "Inventory with batch/expiry & low-stock alerts",
                "Supplier purchase, GRN and returns",
                "Reports: GST, daily sales, expiry reports",
                "User access control + audit logs",
                "Optional: multi-branch inventory (if needed)",
              ]}
            />
          </div>

          <div className="mt-14 text-center">
            <Link
              href={projectsHref}
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-blue-600 text-white font-black hover:bg-blue-500 transition"
            >
              See Demos on Projects Page →
            </Link>
          </div>
        </div>
      </section>

      {/* ================= ANDROID APPS ================= */}
      <section className="bg-slate-50 border-y">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionTitle
            title="Android App Development & Integration"
            subtitle="Mobile apps that connect securely with your internal systems — online/offline support as required."
          />

          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Internal Field Apps"
              desc="Perfect for inspection, survey, attendance-like internal workflows (as per policy), and on-ground reporting."
              points={[
                "Form-based data capture with validations",
                "Photo/attachment uploads (policy-based)",
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
              desc="API-based integration with role-based access and audit logs. Designed with security practices."
              points={[
                "Token/session management",
                "Role based permissions",
                "Audit logging of critical actions",
                "Controlled deployment & versioning",
              ]}
            />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact-us"
              className="px-7 py-3 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition"
            >
              Discuss Android App
            </Link>
            <Link
              href={projectsHref}
              className="px-7 py-3 rounded-full bg-white text-slate-900 font-bold border border-slate-200 hover:border-blue-400 transition"
            >
              View App Demos in Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TECH STACK + LOGOS ================= */}
      {/* ================= TECH STACK + LOGOS ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionTitle
            title="We Choose the Best Tech Stack for You"
            subtitle="Tech selection depends on your security policy, deployment type (on-prem / cloud), integrations, performance requirements, and long-term maintenance."
          />

          <div className="mt-10 grid lg:grid-cols-2 gap-10 items-center">
            {/* LEFT: STACK */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8">
              <h3 className="text-2xl font-black">Typical Stack Options</h3>
              <p className="mt-2 text-slate-600">
                We select the most suitable and future-proof stack based on your use-case and compliance needs.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <StackItem title="Frontend" desc="Next.js / React — modern UI & fast dashboards" />
                <StackItem title="Backend" desc="Secure APIs, modular architecture, scalable design" />
                <StackItem title="Database" desc="PostgreSQL / MySQL / MS SQL / Oracle (as required)" />
                <StackItem title="Deployment" desc="On-prem servers, VPN access, controlled environment" />
                <StackItem title="Cloud (optional)" desc="AWS / Azure / GCP — only if policy allows" />
                <StackItem title="Android" desc="Native / Hybrid apps integrated with internal APIs" />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-blue-600 text-white font-black hover:bg-blue-500 transition"
                >
                  Get Tech Consultation
                </Link>
                <Link
                  href={projectsHref}
                  className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-slate-900 font-black border border-slate-200 hover:border-blue-400 transition"
                >
                  View Demos
                </Link>
              </div>
            </div>

            {/* RIGHT: LOGOS */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-black mb-6">
                Technology Partners & Tools
              </h3>

              {/* Core */}
              <div>
                <div className="font-black text-slate-900 mb-4">
                  Core Technology Partners
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {techLogos.slice(0, 8).map((t) => (
                    <LogoTile key={t.name} name={t.name} src={t.src} />
                  ))}
                </div>
              </div>

              {/* Optional */}
              <div className="mt-8">
                <div className="font-black text-slate-900 mb-4">
                  Additional Platforms & Tools
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {techLogos.slice(8).map((t) => (
                    <LogoTile key={t.name} name={t.name} src={t.src} />
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


      {/* ================= PROCESS ================= */}
      <section className="bg-slate-50 border-y">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionTitle
            title="Development & Implementation Approach"
            subtitle="Structured lifecycle designed for stability, approvals, documentation, and smooth rollout."
          />

          <div className="mt-10 grid lg:grid-cols-5 gap-4">
            <Step title="1. Requirement Study" desc="SRS, workflows, user roles, approvals, scope finalization." />
            <Step title="2. System Design" desc="Architecture, database design, UI/UX, security controls." />
            <Step title="3. Development" desc="Module-by-module build, reviews, controlled iterations." />
            <Step title="4. Testing" desc="UAT cycles, bug fixes, performance, security checks." />
            <Step title="5. Deployment & Support" desc="On-prem deployment, training, AMC and upgrades." />
          </div>

          <div className="mt-10 bg-white border border-slate-200 rounded-3xl p-8">
            <h3 className="text-2xl font-black">Security & Compliance Focus</h3>
            <p className="mt-4 text-slate-600 max-w-5xl">
              We follow secure development practices including role-based access control, input validation,
              secure authentication, logging, and controlled deployments. On-premise deployment ensures data
              remains within your infrastructure, aligning with PSU/Govt policies.
            </p>

            <p className="mt-4 text-slate-600 max-w-5xl">
              Documentation, approval workflows, audit readiness, and change control are included throughout
              the project lifecycle.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="px-7 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition"
              >
                Request Security-First Proposal
              </Link>
              <Link
                href={projectsHref}
                className="px-7 py-3 rounded-full bg-white text-slate-900 font-bold border border-slate-200 hover:border-blue-400 transition"
              >
                View Compliance-style Demos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SUPPORT ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionTitle
            title="Support, AMC & Long-Term Maintenance"
            subtitle="We stay with you after delivery — upgrades, enhancements, audits, and ongoing improvements."
          />

          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            <FeatureCard
              title="AMC Support Models"
              desc="Annual support contracts with defined response, enhancements, and version upgrades."
              points={[
                "Bug fixes & issue tracking",
                "Performance improvements",
                "Enhancements and change requests",
                "Regular backups & health checks (as required)",
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

      {/* ================= FINAL CTA ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="text-center bg-blue-600 text-white p-12 md:p-16 rounded-[3rem]">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Want a Secure, PSU-Ready System?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto">
              Tell us your workflow, approvals, and reporting needs — we will propose a compliant, secure,
              and scalable software solution with long-term support. View demos anytime on Projects page.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="bg-white text-blue-600 px-10 py-4 rounded-full font-black shadow-lg hover:bg-blue-50 transition"
              >
                Get Proposal
              </Link>
              <Link
                href={projectsHref}
                className="bg-blue-800 text-white px-10 py-4 rounded-full font-black border border-blue-400 hover:bg-blue-700 transition"
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

/* ================= Components ================= */

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-black">{title}</h2>
      <p className="mt-3 text-slate-600 text-lg max-w-4xl">{subtitle}</p>
    </div>
  );
}

function InfoPill({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-4 rounded-2xl border border-slate-200 bg-white">
      <div className="font-black">{title}</div>
      <div className="text-sm text-slate-600 mt-1">{desc}</div>
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
    <div className="p-7 rounded-3xl border border-slate-200 bg-white shadow-sm hover:border-blue-300 transition">
      <h3 className="text-xl font-black">{title}</h3>
      <p className="mt-3 text-slate-600">{desc}</p>
      <ul className="mt-5 space-y-2 text-slate-700 text-sm">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="text-blue-600">•</span>
            <span>{p}</span>
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
        highlight
          ? "border-blue-200 bg-blue-50"
          : "border-slate-200 bg-white",
      ].join(" ")}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="text-3xl">{emoji}</div>
          <div>
            <h3 className="text-2xl md:text-3xl font-black">{title}</h3>
            <p className="mt-3 text-slate-600 max-w-4xl">{intro}</p>
          </div>
        </div>

        <div className="flex gap-3 flex-wrap">
          <Link
            href="/contact-us"
            className="px-6 py-3 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition"
          >
            Request Quote
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 rounded-full bg-white text-slate-900 font-bold border border-slate-200 hover:border-blue-400 transition"
          >
            Demo / Projects
          </Link>
        </div>
      </div>

      <div className="mt-8 grid lg:grid-cols-2 gap-6">
        <div className="bg-white/70 rounded-3xl border border-slate-200 p-6">
          <div className="font-black text-slate-900">Typical Modules</div>
          <ul className="mt-4 space-y-2 text-slate-700 text-sm">
            {modules.map((m) => (
              <li key={m} className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-200 p-6 bg-slate-50">
          <div className="font-black text-slate-900">Built-in Enterprise Practices</div>
          <ul className="mt-4 space-y-2 text-slate-700 text-sm">
            {[
              "Role-based access (module-wise)",
              "Approval workflow and remarks",
              "Audit trail for critical actions",
              "Exportable reports (MIS)",
              "Controlled deployments & documentation",
              "Support + AMC options",
            ].map((x) => (
              <li key={x} className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span>{x}</span>
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
    <div className="p-5 rounded-2xl border border-slate-200 bg-white">
      <div className="font-black">{title}</div>
      <div className="mt-2 text-sm text-slate-600">{desc}</div>
    </div>
  );
}

function StackItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-4 rounded-2xl bg-white border border-slate-200">
      <div className="font-black">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{desc}</div>
    </div>
  );
}

function LogoTile({ name, src }: { name: string; src: string }) {
  return (
    <div className="relative h-14 rounded-2xl border border-slate-200 bg-white flex items-center justify-center hover:border-blue-400 transition">
      <Image src={src} alt={name} fill className="object-contain p-3" />
    </div>
  );
}
