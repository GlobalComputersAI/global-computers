import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects & Demos | Websites, Software & IT Solutions",
  description:
    "Explore demo websites and software applications by Global Computers & IT Solutions. Browse by category and request a demo or quote.",
};

type DemoCategory =
  | "All"
  | "Retail & Supermarket"
  | "Restaurant & Cafe"
  | "Hotel & Resort"
  | "School & Institute"
  | "PSU & Government"
  | "Corporate Office"
  | "Travel & Rental"
  | "Medical & Pharma"
  | "Billing & Inventory"
  | "ERP & HR"
  | "E-commerce"
  | "Portfolio & Business"
  | "CCTV & Biometrics";

const PRICING_NOTE =
  "Starting from ₹5,000 + GST • Billing Software Free • SEO Setup Free";

const categories: { id: DemoCategory; short: string }[] = [
  { id: "All", short: "All" },
  { id: "Retail & Supermarket", short: "Retail" },
  { id: "Restaurant & Cafe", short: "Restaurant" },
  { id: "Hotel & Resort", short: "Hotel" },
  { id: "School & Institute", short: "School" },
  { id: "PSU & Government", short: "PSU" },
  { id: "Corporate Office", short: "Corporate" },
  { id: "Travel & Rental", short: "Travel" },
  { id: "Medical & Pharma", short: "Medical" },
  { id: "Billing & Inventory", short: "Billing" },
  { id: "ERP & HR", short: "ERP/HR" },
  { id: "E-commerce", short: "E-commerce" },
  { id: "Portfolio & Business", short: "Business" },
  { id: "CCTV & Biometrics", short: "Security" },
];

type DemoItem = {
  title: string;
  category: DemoCategory;
  tags: string[];
  description: string;
  highlights: string[];
  demoHref: string;
  quoteHref: string;
};

const demos: DemoItem[] = [
  {
    title: "Retail Store Website + Billing Demo",
    category: "Retail & Supermarket",
    tags: ["Website", "Billing", "Inventory", "GST"],
    description:
      "Perfect for kirana, supermarket, wholesale shops. Website + billing/inventory demo flow.",
    highlights: [
      "Product catalog",
      "GST billing",
      "Stock management",
      "Customer reports",
    ],
    demoHref: "/contact-us",
    quoteHref: "/contact-us",
  },
  {
    title: "Restaurant / Cafe Ordering Website Demo",
    category: "Restaurant & Cafe",
    tags: ["Website", "Menu", "QR", "Online Orders"],
    description:
      "Menu website with inquiry/order flow and SEO-ready pages for local ranking.",
    highlights: [
      "Digital menu",
      "WhatsApp inquiry",
      "Location SEO pages",
      "Fast mobile design",
    ],
    demoHref: "/contact-us",
    quoteHref: "/contact-us",
  },
  {
    title: "Hotel / Resort Booking Website Demo",
    category: "Hotel & Resort",
    tags: ["Website", "Booking", "SEO", "Gallery"],
    description:
      "Premium hotel website demo with rooms, gallery, inquiry/booking request and SEO setup.",
    highlights: ["Room pages", "Gallery", "Lead forms", "Local SEO setup"],
    demoHref: "/contact-us",
    quoteHref: "/contact-us",
  },
  {
    title: "School / Institute Management Demo",
    category: "School & Institute",
    tags: ["Software", "ERP", "Fees", "Attendance"],
    description:
      "School management demo for fees, attendance, student records and staff management.",
    highlights: [
      "Fee receipts",
      "Attendance",
      "Student records",
      "Reports",
    ],
    demoHref: "/contact-us",
    quoteHref: "/contact-us",
  },
  {
    title: "Corporate Business Website Demo",
    category: "Corporate Office",
    tags: ["Website", "Company Profile", "SEO"],
    description:
      "Corporate profile website demo built for trust, conversions, and enquiry generation.",
    highlights: [
      "Services pages",
      "Project showcase",
      "Lead capture",
      "SEO pages",
    ],
    demoHref: "/contact-us",
    quoteHref: "/contact-us",
  },
  {
    title: "Billing + Inventory Software Demo",
    category: "Billing & Inventory",
    tags: ["Software", "GST", "Reports", "Barcode"],
    description:
      "Billing software demo (GST ready) with inventory, barcode support and analytics.",
    highlights: ["GST billing", "Inventory", "Barcode", "Profit reports"],
    demoHref: "/contact-us",
    quoteHref: "/contact-us",
  },
  {
    title: "HR + Payroll / Office ERP Demo",
    category: "ERP & HR",
    tags: ["Software", "HR", "Payroll", "Attendance"],
    description:
      "ERP demo for HR workflows: payroll, attendance, staff records, and approvals.",
    highlights: ["Payroll", "Attendance", "Approvals", "Reports"],
    demoHref: "/contact-us",
    quoteHref: "/contact-us",
  },
  {
    title: "E-commerce Store Demo",
    category: "E-commerce",
    tags: ["Website", "Payments", "Catalog", "SEO"],
    description:
      "E-commerce demo store with products, categories, inquiry/checkout and SEO pages.",
    highlights: [
      "Product pages",
      "Categories",
      "Payment-ready",
      "SEO optimized",
    ],
    demoHref: "/contact-us",
    quoteHref: "/contact-us",
  },
  {
    title: "Medical / Pharma Website + CRM Inquiry Demo",
    category: "Medical & Pharma",
    tags: ["Website", "Lead", "SEO", "Services"],
    description:
      "Medical/pharma demo website with service pages and high-trust conversion layout.",
    highlights: [
      "Service pages",
      "Inquiry flow",
      "Local SEO",
      "Fast mobile design",
    ],
    demoHref: "/contact-us",
    quoteHref: "/contact-us",
  },
  {
    title: "PSU / Tender Capability + Project Profile Demo",
    category: "PSU & Government",
    tags: ["Portfolio", "Compliance", "Projects", "Support"],
    description:
      "PSU-style profile demo: capability, compliance, documentation-ready structure.",
    highlights: [
      "Capability pages",
      "Project format",
      "Support model",
      "Tender friendly",
    ],
    demoHref: "/contact-us",
    quoteHref: "/contact-us",
  },
  {
    title: "Car Rental Booking & Fleet Management Demo",
    category: "Travel & Rental",
    tags: ["Website", "Booking", "Fleet", "Billing"],
    description:
      "Complete car rental demo with booking flow, vehicle availability, billing and admin dashboard.",
    highlights: [
      "Online booking",
      "Fleet availability",
      "Driver assignment",
      "GST billing & reports",
    ],
    demoHref: "/projects/car-Rental/",
    quoteHref: "/contact-us",
  },
];

function slugifyCategory(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-700">
      {children}
    </span>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-extrabold text-slate-800 transition hover:border-blue-400">
      {label}
    </span>
  );
}

function FeatureCard({
  title,
  desc,
  bullets,
}: {
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:shadow-xl">
      <div className="text-lg font-black text-slate-900">{title}</div>
      <p className="mt-2 leading-relaxed text-slate-600">{desc}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {bullets.map((b) => (
          <li key={b}>✓ {b}</li>
        ))}
      </ul>
    </div>
  );
}

function StackChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-extrabold text-slate-700">
      {children}
    </span>
  );
}

function DemoCard({ d }: { d: DemoItem }) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all hover:shadow-xl">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs font-black uppercase tracking-widest text-blue-600">
            {d.category}
          </div>
          <h3 className="mt-2 text-xl font-black leading-snug text-slate-900">
            {d.title}
          </h3>
        </div>

        <div className="shrink-0 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-black text-slate-700">
          Demo
        </div>
      </div>

      <p className="mt-4 leading-relaxed text-slate-600">{d.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {d.tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-700"
          >
            {t}
          </span>
        ))}
      </div>

      <ul className="mt-5 space-y-2 text-sm text-slate-700">
        {d.highlights.slice(0, 4).map((h) => (
          <li key={h}>✓ {h}</li>
        ))}
      </ul>

      <div className="mt-7 grid grid-cols-2 gap-3">
        <Link
          href={d.demoHref}
          className="rounded-2xl bg-blue-600 px-4 py-3 text-center font-black text-white transition hover:bg-blue-700"
        >
          Open Demo
        </Link>
        <Link
          href={d.quoteHref}
          className="rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-center font-black transition hover:bg-slate-50"
        >
          Get Quote
        </Link>
      </div>

      <div className="mt-4 text-xs font-semibold text-slate-500">
        Starting ₹5,000 + GST • Billing Free • SEO Free
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const groupedCategories = categories.filter((c) => c.id !== "All");

  return (
    <main id="top" className="mx-auto max-w-7xl px-6 py-14">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-blue-50 to-white p-10 md:p-14">
        <div className="max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-black text-blue-700">
            ✅ Static Demos + Custom Projects (PAN India)
          </div>

          <h1 className="text-4xl font-black tracking-tight leading-tight md:text-5xl">
            Projects, Demos & Capabilities
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            Browse demos and request a quote. We build any kind of{" "}
            <span className="font-extrabold text-slate-900">
              website, software application, ERP, billing, attendance, asset system
            </span>{" "}
            and integrations — under one roof.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Badge>₹5,000 + GST Starting</Badge>
            <Badge>Billing Software Free</Badge>
            <Badge>SEO Setup Free</Badge>
            <Badge>On-Premise + Cloud Available</Badge>
            <Badge>PSU & Enterprise Ready</Badge>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact-us"
              className="rounded-2xl bg-blue-600 px-8 py-4 text-center font-black text-white shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Get Free Consultation
            </Link>

            <Link
              href="/contact-us"
              className="rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 text-center font-black transition-all hover:bg-slate-50"
            >
              Request Demo Access
            </Link>
          </div>

          <p className="mt-4 text-sm font-semibold text-slate-500">
            {PRICING_NOTE}
          </p>
        </div>
      </section>

      <section className="mt-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-black">What we build</h2>
            <p className="mt-2 max-w-3xl leading-relaxed text-slate-600">
              We deliver complete systems — from demo website to final deployment and support.
              This includes website + software + integrations + training + AMC.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 font-black text-white transition hover:bg-slate-800"
          >
            Request Quote →
          </Link>
        </div>

        <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Image Search + Asset Management"
            desc="Manage assets like computers, printers, networking devices, inventory & documents. Powerful search with images and tagging."
            bullets={[
              "Asset register (serial, warranty, vendor, location)",
              "Image upload per asset (device photos, invoices)",
              "Fast search, filters, reports & export",
              "AMC/maintenance tracking + reminders",
            ]}
          />

          <FeatureCard
            title="Attendance Android Integration (CLIMS / HR)"
            desc="Android attendance app integration with HR/Payroll or CLIMS workflows (where applicable)."
            bullets={[
              "Android attendance app + biometric device mapping",
              "Sync with CLIMS / HR module / payroll (as required)",
              "Late/shift rules, leave requests, approvals",
              "Monthly reports, exports, API integration",
            ]}
          />

          <FeatureCard
            title="Websites that convert"
            desc="Fast, modern websites with SEO setup and lead capture that drives calls and enquiries."
            bullets={[
              "Business website / portfolio / corporate",
              "Landing pages for ads & lead generation",
              "Local SEO setup + Google Business support",
              "WhatsApp + Call CTAs + inquiry forms",
            ]}
          />
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-slate-200 bg-white p-10">
        <h2 className="text-3xl font-black">Tech stacks we work with</h2>
        <p className="mt-3 max-w-4xl leading-relaxed text-slate-600">
          We choose tech based on your deployment type (on-premise / cloud), security policy, performance,
          integrations, and future scalability.
        </p>

        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div>
            <div className="text-sm font-black uppercase tracking-widest text-slate-500">
              Backend / Web Apps
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <StackChip>Python (Django/FastAPI)</StackChip>
              <StackChip>ASP.NET / .NET Core</StackChip>
              <StackChip>Java (Spring)</StackChip>
              <StackChip>Node.js</StackChip>
              <StackChip>REST APIs</StackChip>
              <StackChip>Microservices</StackChip>
            </div>

            <div className="mt-6 text-sm font-black uppercase tracking-widest text-slate-500">
              Frontend / UI
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <StackChip>Next.js / React</StackChip>
              <StackChip>Tailwind CSS</StackChip>
              <StackChip>Admin Dashboards</StackChip>
              <StackChip>Mobile Responsive</StackChip>
            </div>
          </div>

          <div>
            <div className="text-sm font-black uppercase tracking-widest text-slate-500">
              AI / ML & Automation
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <StackChip>AI Chatbot</StackChip>
              <StackChip>OCR & Document Automation</StackChip>
              <StackChip>Image Search</StackChip>
              <StackChip>ML Reports</StackChip>
              <StackChip>Workflow Automation</StackChip>
            </div>

            <div className="mt-6 text-sm font-black uppercase tracking-widest text-slate-500">
              Databases / Infra
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <StackChip>SQL Server</StackChip>
              <StackChip>PostgreSQL</StackChip>
              <StackChip>MySQL</StackChip>
              <StackChip>On-Prem Servers</StackChip>
              <StackChip>AWS / Cloud</StackChip>
              <StackChip>Backup & DR</StackChip>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="text-sm font-black text-slate-900">
            Integrations (we can connect everything)
          </div>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Shopify, Google Sheets, Google Drive, SMS/Email, WhatsApp, Payment gateways, API integrations,
            barcode scanners, printers, biometric devices, CCTV, and custom 3rd party systems.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "Shopify",
              "Google Sheets",
              "WhatsApp",
              "Payment Gateway",
              "SMS / Email",
              "Barcode",
              "Printers",
              "Biometrics",
              "CCTV",
              "Custom APIs",
            ].map((x) => (
              <StackChip key={x}>{x}</StackChip>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-slate-800 bg-slate-900 p-10 text-white md:p-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-black md:text-4xl">PSU / Enterprise Deployment</h2>
            <p className="mt-3 max-w-4xl leading-relaxed text-slate-200">
              For PSU and large organizations, we provide full options:
              <span className="font-extrabold"> On-Premise</span>,{" "}
              <span className="font-extrabold">Cloud</span>, and{" "}
              <span className="font-extrabold">Hybrid</span>.
              We follow documentation, security practices, and long-term AMC support.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-3 font-black text-slate-900 transition hover:scale-[1.02]"
          >
            PSU Quote / Proposal →
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "On-Premise Software", d: "Local servers, internal network, complete control." },
            { t: "Cloud Deployment", d: "Secure cloud hosting with scalability and backups." },
            { t: "Hybrid Setup", d: "Mix of cloud + on-prem as per policy." },
            { t: "Support & AMC", d: "SLA-based support, upgrades, and monitoring." },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-white/10 bg-white/10 p-6">
              <div className="text-lg font-black">{x.t}</div>
              <div className="mt-2 text-sm text-slate-200">{x.d}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm font-semibold text-slate-200">
          We can provide documentation, training, knowledge transfer, and compliance-friendly reporting.
        </div>
      </section>

      <section className="mt-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-black">Browse demos by category</h2>
            <p className="mt-2 text-slate-600">
              Click a category to jump to that section.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 font-black text-white transition hover:bg-slate-800"
          >
            Need Custom App? Request Quote →
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {groupedCategories.map((c) => (
            <a key={c.id} href={`#${slugifyCategory(c.id)}`}>
              <Pill label={c.short} />
            </a>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {demos.map((d) => (
            <DemoCard key={d.title} d={d} />
          ))}
        </div>
      </section>

      {groupedCategories.map((category) => {
        const items = demos.filter((d) => d.category === category.id);
        if (items.length === 0) return null;

        return (
          <section
            key={category.id}
            id={slugifyCategory(category.id)}
            className="mt-16 scroll-mt-24"
          >
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl font-black">{category.id}</h2>
                <p className="mt-2 text-slate-600">
                  {items.length} demo{items.length > 1 ? "s" : ""} available
                </p>
              </div>
              <a
                href="#top"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 font-black transition hover:bg-slate-50"
              >
                Back to top
              </a>
            </div>

            <div className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {items.map((d) => (
                <DemoCard key={`${category.id}-${d.title}`} d={d} />
              ))}
            </div>
          </section>
        );
      })}

      <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-10 md:p-14">
        <h2 className="text-3xl font-black">How it works (fast delivery)</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            { s: "01", t: "Pick Demo", d: "Choose category and demo template." },
            { s: "02", t: "Share Details", d: "Send your name, services, logo, photos." },
            { s: "03", t: "We Customize", d: "Design + content + SEO setup + forms." },
            { s: "04", t: "Go Live", d: "Deploy, train, support (AMC available)." },
          ].map((x) => (
            <div key={x.s} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-lg font-black text-blue-600">{x.s}</div>
              <div className="mt-2 font-black text-slate-900">{x.t}</div>
              <div className="mt-2 text-sm text-slate-600">{x.d}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact-us"
            className="rounded-2xl bg-blue-600 px-8 py-4 text-center font-black text-white transition hover:bg-blue-700"
          >
            Start Now
          </Link>
          <Link
            href="/contact-us"
            className="rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 text-center font-black transition hover:bg-slate-50"
          >
            Request Demo
          </Link>
        </div>

        <p className="mt-4 text-sm font-semibold text-slate-500">{PRICING_NOTE}</p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-black">FAQ</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[
            {
              q: "Do you provide on-premise software for PSU?",
              a: "Yes. We provide on-premise, cloud, and hybrid deployments based on policy and security requirements.",
            },
            {
              q: "Can you integrate Attendance Android app with CLIMS?",
              a: "Yes, we can integrate Android attendance with CLIMS/HR/payroll systems where APIs or data exchange is available.",
            },
            {
              q: "Can you connect Shopify / Google Sheets / WhatsApp?",
              a: "Yes. We can integrate Shopify, Google Sheets, WhatsApp, SMS, email, payments, and any 3rd party API.",
            },
            {
              q: "What is included in ₹5,000 + GST?",
              a: "Basic business website starter with lead capture, SEO setup, and billing software offer (as per package).",
            },
          ].map((x) => (
            <div key={x.q} className="rounded-3xl border border-slate-200 bg-white p-7">
              <div className="font-black text-slate-900">{x.q}</div>
              <div className="mt-2 text-sm leading-relaxed text-slate-600">{x.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-black">Confidentiality & References</h2>
        <p className="mt-4 max-w-5xl leading-relaxed text-slate-600">
          Certain PSU/enterprise project details are subject to confidentiality agreements.
          Work orders, completion certificates, and references can be shared during
          evaluation stages on request.
        </p>
      </section>

      <section className="mt-16 rounded-3xl bg-blue-600 p-10 text-white md:p-14">
        <h2 className="text-3xl font-black md:text-4xl">
          Want a demo for your exact business?
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-blue-100">
          Share your business details and we’ll show the best demo, pricing, and timeline.
          Websites from ₹5,000 + GST, billing software free, and SEO setup free.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact-us"
            className="rounded-2xl bg-white px-8 py-4 text-center font-black text-blue-700 transition hover:scale-[1.02]"
          >
            Get Free Consultation
          </Link>
          <Link
            href="/contact-us"
            className="rounded-2xl border border-blue-300 bg-blue-900 px-8 py-4 text-center font-black text-white transition hover:bg-blue-950"
          >
            Request Quote
          </Link>
        </div>
      </section>
    </main>
  );
}