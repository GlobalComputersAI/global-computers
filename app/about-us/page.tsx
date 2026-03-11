import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Global Computers & IT Solutions",
  description:
    "Learn about Global Computers & IT Solutions — 20+ years of trusted IT hardware supply, software development, AMC, and workforce services for businesses, PSUs, and enterprises across India.",
};

const WEBSITE = "globalcomputers.net";
const SOFTWARE_PHONE_TEL = "+919752422686";
const HARDWARE_PHONE_TEL = "+919827164811";
const EMAIL = "info@globalcomputers.net";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm hover:shadow-xl transition-all">
      <div className="text-3xl md:text-4xl font-black text-blue-600">{value}</div>
      <div className="mt-2 text-xs font-black uppercase tracking-widest text-slate-500">
        {label}
      </div>
    </div>
  );
}

function Card({
  title,
  desc,
  bullets,
}: {
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all">
      <h3 className="text-xl font-black text-slate-900">{title}</h3>
      <p className="mt-3 text-slate-600 leading-relaxed">{desc}</p>
      <ul className="mt-5 space-y-2 text-sm text-slate-700">
        {bullets.map((b) => (
          <li key={b}>✓ {b}</li>
        ))}
      </ul>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-extrabold text-slate-700">
      {children}
    </span>
  );
}

export default function AboutUsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-14">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-blue-50 to-white p-10 md:p-14">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 text-sm font-black bg-blue-100 text-blue-700 rounded-full">
            🛡️ Trusted Since 2004 • PAN India Support
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            About Global Computers & IT Solutions
          </h1>

          <p className="mt-5 text-lg text-slate-700 leading-relaxed">
            We are a one-stop IT partner for{" "}
            <span className="font-extrabold text-slate-900">hardware supply</span>,{" "}
            <span className="font-extrabold text-slate-900">custom software development</span>,{" "}
            <span className="font-extrabold text-slate-900">AMC & maintenance</span>, and{" "}
            <span className="font-extrabold text-slate-900">IT workforce services</span>.
            Our strength is reliable delivery, documentation, and long-term support—especially
            for PSU and enterprise environments.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Chip>On-Premise + Cloud + Hybrid</Chip>
            <Chip>PSU / Tender Experience</Chip>
            <Chip>Implementation + Training</Chip>
            <Chip>AMC & SLA Support</Chip>
            <Chip>Security & Documentation</Chip>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/projects"
              className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 transition-all text-center"
            >
              View Projects & Demos
            </Link>

            <Link
              href="/contact-us"
              className="px-8 py-4 bg-white border-2 border-slate-200 rounded-2xl font-black hover:bg-slate-50 transition-all text-center"
            >
              Request a Quote
            </Link>
          </div>

          <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
            <a
              className="rounded-2xl border border-slate-200 bg-white p-4 font-extrabold text-slate-800 hover:bg-slate-50 transition text-center"
              href={`tel:${SOFTWARE_PHONE_TEL}`}
            >
              💻 Call Software
              <div className="text-xs text-slate-500 font-semibold mt-1">
                +91 97524 22686
              </div>
            </a>

            <a
              className="rounded-2xl border border-slate-200 bg-white p-4 font-extrabold text-slate-800 hover:bg-slate-50 transition text-center"
              href={`tel:${HARDWARE_PHONE_TEL}`}
            >
              🖥️ Call Hardware
              <div className="text-xs text-slate-500 font-semibold mt-1">
                +91 9827164811
              </div>
            </a>

            <a
              className="rounded-2xl border border-slate-200 bg-white p-4 font-extrabold text-slate-800 hover:bg-slate-50 transition text-center"
              href={`mailto:${EMAIL}`}
            >
              📧 Email Us
              <div className="text-xs text-slate-500 font-semibold mt-1">
                {EMAIL}
              </div>
            </a>
          </div>

          <p className="mt-4 text-sm text-slate-500 font-semibold">
            Website:{" "}
            <a className="underline hover:text-slate-800" href={`https://${WEBSITE}`} target="_blank" rel="noreferrer">
              {WEBSITE}
            </a>
          </p>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="mt-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Stat value="20+" label="Years of Trust" />
          <Stat value="10,000+" label="Clients Served" />
          <Stat value="PSU" label="Tender-Ready Delivery" />
          <Stat value="24/7" label="Support for AMC Clients" />
        </div>
      </section>

      {/* ================= COMPANY OVERVIEW ================= */}
      <section className="mt-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black">Company Overview</h2>
            <p className="mt-3 text-slate-600 max-w-4xl leading-relaxed">
              Global Computers & IT Solutions delivers dependable, scalable, and audit-friendly IT solutions.
              We focus on system stability, security, documentation, and long-term support—ideal for PSU,
              government, and enterprise operational environments.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-slate-900 text-white font-black hover:bg-slate-800 transition"
          >
            See Proof in Projects →
          </Link>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Card
            title="What we do"
            desc="We handle complete IT delivery—from requirement analysis to deployment and support."
            bullets={[
              "IT hardware supply, installation & configuration",
              "Custom software (web/desktop/mobile) & integrations",
              "AMC, preventive maintenance, upgrades & troubleshooting",
              "IT workforce deployment for on-site operations",
            ]}
          />

          <Card
            title="How we work"
            desc="We follow a structured method aligned with PSU/enterprise expectations."
            bullets={[
              "Documentation-first approach (SRS, SOPs, manuals)",
              "Security-aware design for internal networks & roles",
              "Approval workflows, audit readiness & reporting",
              "Training, knowledge transfer & post-go-live support",
            ]}
          />
        </div>
      </section>

      {/* ================= CORE CAPABILITIES ================= */}
      <section className="mt-14">
        <h2 className="text-3xl font-black">Core Capabilities</h2>
        <p className="mt-3 text-slate-600 max-w-4xl leading-relaxed">
          Whether it’s a small business website or a PSU on-premise application, we provide end-to-end execution.
        </p>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="IT Hardware & Infrastructure"
            desc="Supply and deployment of IT infrastructure with support and AMC options."
            bullets={[
              "Servers, desktops, laptops, printers & peripherals",
              "Networking (LAN/Wi-Fi), rack, UPS, cabling",
              "CCTV, biometrics, access control systems",
              "Installation, configuration & documentation",
            ]}
          />

          <Card
            title="Software Development"
            desc="Custom applications that match your workflow and compliance needs."
            bullets={[
              "Web applications & portals (internal/external)",
              "Billing, inventory, ERP & reporting dashboards",
              "Android app development + integrations",
              "API integration with 3rd party services",
            ]}
          />

          <Card
            title="AMC & IT Support"
            desc="Long-term support that keeps operations stable."
            bullets={[
              "AMC for systems, networks, and applications",
              "Preventive maintenance, upgrades, patches",
              "Remote + on-site support (as per SLA)",
              "Ticketing, reporting & escalation support",
            ]}
          />

          <Card
            title="IT Workforce & Manpower"
            desc="Skilled technical resources for operations and support."
            bullets={[
              "System admins, operators, desktop support",
              "Data entry / helpdesk (as required)",
              "Shift-based support for operations",
              "Compliance and reporting-friendly staffing",
            ]}
          />

          <Card
            title="Image Search + Asset Management"
            desc="Asset management solutions with image-based tracking and fast search."
            bullets={[
              "Asset inventory with serial/warranty/vendor",
              "Image uploads for assets & invoices",
              "Service/maintenance history + reminders",
              "Reports, export and role-based access",
            ]}
          />

          <Card
            title="Attendance Android + Integrations"
            desc="Attendance solutions with Android app and system integration options."
            bullets={[
              "Android attendance app (location/shift rules)",
              "Integration with HR/payroll systems",
              "Integration with CLIMS workflow (as applicable)",
              "Monthly reports, approvals, exports",
            ]}
          />
        </div>
      </section>

      {/* ================= DEPLOYMENT OPTIONS ================= */}
      <section className="mt-14 rounded-3xl border border-slate-200 bg-white p-10 md:p-14">
        <h2 className="text-3xl font-black">Deployment Options</h2>
        <p className="mt-3 text-slate-600 max-w-4xl leading-relaxed">
          We support deployments based on your policy—on-premise, cloud, or hybrid.
          PSU and enterprise setups can include role-based access, audit logs, backups, and documentation.
        </p>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { t: "On-Premise", d: "Internal server + LAN, full control, policy friendly." },
            { t: "Cloud", d: "Fast deployment, scalability, managed backups." },
            { t: "Hybrid", d: "Mix of on-prem + cloud as per security policy." },
            { t: "SLA Support", d: "AMC, upgrades, monitoring, and long-term support." },
          ].map((x) => (
            <div
              key={x.t}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <div className="font-black text-slate-900">{x.t}</div>
              <div className="mt-2 text-sm text-slate-600">{x.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TECH STACKS ================= */}
      <section className="mt-14 bg-slate-900 text-white rounded-3xl p-10 md:p-14 border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-black">Technology We Use</h2>
            <p className="mt-3 text-slate-200 max-w-4xl leading-relaxed">
              We select the best stack for your needs—security policy, data sensitivity,
              performance, and future scalability.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-7 py-3 rounded-2xl bg-white text-slate-900 font-black hover:scale-[1.02] transition"
          >
            View Demos →
          </Link>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white/10 border border-white/10 p-7">
            <div className="text-xs font-black uppercase tracking-widest text-slate-300">
              Backend / Platforms
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Python", "ASP.NET / .NET Core", "Java", "Node.js", "REST APIs", "SQL"].map((x) => (
                <span
                  key={x}
                  className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-extrabold"
                >
                  {x}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white/10 border border-white/10 p-7">
            <div className="text-xs font-black uppercase tracking-widest text-slate-300">
              AI / ML & Integrations
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "AI Chatbots",
                "OCR / Document Automation",
                "Image Search",
                "Shopify",
                "Google Sheets",
                "WhatsApp",
                "Payments",
                "SMS / Email",
              ].map((x) => (
                <span
                  key={x}
                  className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-extrabold"
                >
                  {x}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-slate-200 font-semibold">
          We also integrate barcode scanners, printers, biometrics, CCTV, and custom APIs as required.
        </p>
      </section>

      {/* ================= DELIVERY APPROACH ================= */}
      <section className="mt-14">
        <h2 className="text-3xl font-black">Delivery Approach</h2>
        <p className="mt-3 text-slate-600 max-w-4xl leading-relaxed">
          Our delivery methodology is structured to meet PSU and enterprise expectations with clear milestones,
          documentation, training, and post-go-live support.
        </p>

        <div className="mt-8 grid md:grid-cols-4 gap-4">
          {[
            { s: "01", t: "Requirement", d: "Understand scope, workflow, compliance needs." },
            { s: "02", t: "Demo / Prototype", d: "Show static demo first. Confirm changes." },
            { s: "03", t: "Build & Deploy", d: "Development, testing, installation, go-live." },
            { s: "04", t: "Support (AMC)", d: "Training, upgrades, long-term support." },
          ].map((x) => (
            <div key={x.s} className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
              <div className="text-blue-600 font-black text-lg">{x.s}</div>
              <div className="mt-2 font-black text-slate-900">{x.t}</div>
              <div className="mt-2 text-sm text-slate-600">{x.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= LONG-TERM VISION ================= */}
      <section className="mt-14">
        <h2 className="text-3xl font-black">Long-Term Vision</h2>
        <p className="mt-3 text-slate-600 max-w-5xl leading-relaxed">
          We build long-term partnerships based on trust, transparency, and consistent service delivery.
          Our goal is to grow with our clients by continuously improving technical capability, support quality,
          and system reliability across PSUs and enterprises.
        </p>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="mt-16 rounded-3xl bg-blue-600 text-white p-10 md:p-14">
        <h2 className="text-3xl md:text-4xl font-black">
          Ready to work with a trusted IT partner?
        </h2>
        <p className="mt-3 text-blue-100 max-w-3xl leading-relaxed">
          Share your requirement and we’ll recommend the best solution: website, software, hardware supply,
          AMC, workforce, or full turnkey project.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact-us"
            className="px-8 py-4 rounded-2xl bg-white text-blue-700 font-black hover:scale-[1.02] transition text-center"
          >
            Get Free Consultation
          </Link>
          <Link
            href="/projects"
            className="px-8 py-4 rounded-2xl bg-blue-900 text-white font-black hover:bg-blue-950 transition text-center border border-blue-300"
          >
            View Projects & Demos
          </Link>
        </div>
      </section>
    </main>
  );
}
