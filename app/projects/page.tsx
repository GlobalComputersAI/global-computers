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
    demoHref: "/projects/car-Rental",
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
    <span className="inline-flex items-center rounded-full px-4 py-2 text-sm font-extrabold border transition bg-white text-slate-800 border-slate-200 hover:border-blue-400">
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
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl transition-all">
      <div className="text-lg font-black text-slate-900">{title}</div>
      <p className="mt-2 text-slate-600 leading-relaxed">{desc}</p>
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
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all p-7">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs font-black uppercase tracking-widest text-blue-600">
            {d.category}
          </div>
          <h3 className="mt-2 text-xl font-black text-slate-900 leading-snug">
            {d.title}
          </h3>
        </div>

        <div className="shrink-0 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-black text-slate-700">
          Demo
        </div>
      </div>

      <p className="mt-4 text-slate-600 leading-relaxed">{d.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {d.tags.map((t) => (
          <span
            key={t}
            className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700"
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
          className="text-center px-4 py-3 rounded-2xl bg-blue-600 text-white font-black hover:bg-blue-700 transition"
        >
          Open Demo
        </Link>
        <Link
          href={d.quoteHref}
          className="text-center px-4 py-3 rounded-2xl border-2 border-slate-200 bg-white font-black hover:bg-slate-50 transition"
        >
          Get Quote
        </Link>
      </div>

      <div className="mt-4 text-xs text-slate-500 font-semibold">
        Starting ₹5,000 + GST • Billing Free • SEO Free
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const groupedCategories = categories.filter((c) => c.id !== "All");

  return (
    <main className="max-w-7xl mx-auto px-6 py-14">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-blue-50 to-white p-10 md:p-14">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 text-sm font-black bg-blue-100 text-blue-700 rounded-full">
            ✅ Static Demos + Custom Projects (PAN India)
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Projects, Demos & Capabilities
          </h1>

          <p className="mt-5 text-lg text-slate-700 leading-relaxed">
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

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact-us"
              className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 transition-all text-center"
            >
              Get Free Consultation
            </Link>

            <Link
              href="/contact-us"
              className="px-8 py-4 bg-white border-2 border-slate-200 rounded-2xl font-black hover:bg-slate-50 transition-all text-center"
            >
              Request Demo Access
            </Link>
          </div>

          <p className="mt-4 text-sm text-slate-500 font-semibold">
            {PRICING_NOTE}
          </p>
        </div>
      </section>

      <section className="mt-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black">What we build</h2>
            <p className="mt-2 text-slate-600 max-w-3xl leading-relaxed">
              We deliver complete systems — from demo website to final deployment and support.
              This includes website + software + integrations + training + AMC.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-slate-900 text-white font-black hover:bg-slate-800 transition"
          >
            Request Quote →
          </Link>
        </div>

        <div className="mt-7 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <p className="mt-3 text-slate-600 max-w-4xl leading-relaxed">
          We choose tech based on your deployment type (on-premise / cloud), security policy, performance,
          integrations, and future scalability.
        </p>

        <div className="mt-6 grid md:grid-cols-2 gap-8">
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
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
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

      <section className="mt-14 bg-slate-900 text-white rounded-3xl p-10 md:p-14 border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-black">PSU / Enterprise Deployment</h2>
            <p className="mt-3 text-slate-200 max-w-4xl leading-relaxed">
              For PSU and large organizations, we provide full options:
              <span className="font-extrabold"> On-Premise</span>,{" "}
              <span className="font-extrabold">Cloud</span>, and{" "}
              <span className="font-extrabold">Hybrid</span>.
              We follow documentation, security practices, and long-term AMC support.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-7 py-3 rounded-2xl bg-white text-slate-900 font-black hover:scale-[1.02] transition"
          >
            PSU Quote / Proposal →
          </Link>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { t: "On-Premise Software", d: "Local servers, internal network, complete control." },
            { t: "Cloud Deployment", d: "Secure cloud hosting with scalability and backups." },
            { t: "Hybrid Setup", d: "Mix of cloud + on-prem as per policy." },
            { t: "Support & AMC", d: "SLA-based support, upgrades, and monitoring." },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl bg-white/10 border border-white/10 p-6">
              <div className="font-black text-lg">{x.t}</div>
              <div className="mt-2 text-sm text-slate-200">{x.d}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm text-slate-200 font-semibold">
          We can provide documentation, training, knowledge transfer, and compliance-friendly reporting.
        </div>
      </section>

      <section className="mt-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black">Browse demos by category</h2>
            <p className="mt-2 text-slate-600">
              Click a category to jump to that section.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-slate-900 text-white font-black hover:bg-slate-800 transition"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
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
                className="inline-flex items-center justify-center px-5 py-3 rounded-2xl border border-slate-200 bg-white font-black hover:bg-slate-50 transition"
              >
                Back to top
              </a>
            </div>

            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {items.map((d) => (
                <DemoCard key={`${category.id}-${d.title}`} d={d} />
              ))}
            </div>
          </section>
        );
      })}

      <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-10 md:p-14">
        <h2 className="text-3xl font-black">How it works (fast delivery)</h2>
        <div className="mt-8 grid md:grid-cols-4 gap-4">
          {[
            { s: "01", t: "Pick Demo", d: "Choose category and demo template." },
            { s: "02", t: "Share Details", d: "Send your name, services, logo, photos." },
            { s: "03", t: "We Customize", d: "Design + content + SEO setup + forms." },
            { s: "04", t: "Go Live", d: "Deploy, train, support (AMC available)." },
          ].map((x) => (
            <div key={x.s} className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
              <div className="text-blue-600 font-black text-lg">{x.s}</div>
              <div className="mt-2 font-black text-slate-900">{x.t}</div>
              <div className="mt-2 text-sm text-slate-600">{x.d}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact-us"
            className="px-8 py-4 rounded-2xl bg-blue-600 text-white font-black hover:bg-blue-700 transition text-center"
          >
            Start Now
          </Link>
          <Link
            href="/contact-us"
            className="px-8 py-4 rounded-2xl border-2 border-slate-200 bg-white font-black hover:bg-slate-50 transition text-center"
          >
            Request Demo
          </Link>
        </div>

        <p className="mt-4 text-sm text-slate-500 font-semibold">{PRICING_NOTE}</p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-black">FAQ</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
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
              <div className="mt-2 text-sm text-slate-600 leading-relaxed">{x.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-black">Confidentiality & References</h2>
        <p className="mt-4 text-slate-600 max-w-5xl leading-relaxed">
          Certain PSU/enterprise project details are subject to confidentiality agreements.
          Work orders, completion certificates, and references can be shared during
          evaluation stages on request.
        </p>
      </section>

      <section className="mt-16 rounded-3xl bg-blue-600 text-white p-10 md:p-14">
        <h2 className="text-3xl md:text-4xl font-black">
          Want a demo for your exact business?
        </h2>
        <p className="mt-3 text-blue-100 max-w-3xl leading-relaxed">
          Share your business details and we’ll show the best demo, pricing, and timeline.
          Websites from ₹5,000 + GST, billing software free, and SEO setup free.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact-us"
            className="px-8 py-4 rounded-2xl bg-white text-blue-700 font-black hover:scale-[1.02] transition text-center"
          >
            Get Free Consultation
          </Link>
          <Link
            href="/contact-us"
            className="px-8 py-4 rounded-2xl bg-blue-900 text-white font-black hover:bg-blue-950 transition text-center border border-blue-300"
          >
            Request Quote
          </Link>
        </div>
      </section>
    </main>
  );
}