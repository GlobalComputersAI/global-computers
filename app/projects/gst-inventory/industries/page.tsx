"use client";

import Link from "next/link";
import { useState } from "react";

const BASE = "/projects/gst-inventory";

const WHATSAPP =
  "https://wa.me/919752422686?text=Hi%20I%20want%20complete%20IT%20%2B%20Software%20solution%20for%20my%20business.%20Please%20share%20demo%2C%20plans%2C%20and%20on-prem%2Fcloud%20setup%20details.%20My%20industry%20is%20____.";

const CALL_SOFTWARE = "tel:+919752422686";
const CALL_HARDWARE = "tel:+919827164811";

function cn(...a: Array<string | false | null | undefined>) {
  return a.filter(Boolean).join(" ");
}

type IndustryKey =
  | "Retail"
  | "Wholesale"
  | "Restaurant"
  | "Clinic"
  | "Showroom"
  | "Hotel"
  | "Gym"
  | "Coaching"
  | "Service"
  | "HR"
  | "Contractor"
  | "Any";

type Industry = {
  key: IndustryKey;
  title: string;
  tagline: string;
  who: string[];
  highlights: string[];
  recommendedModules: { name: string; priceHint: string }[];
  stack: string[];
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[12px] font-extrabold text-slate-700">
      {children}
    </span>
  );
}

function Feature({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-black text-slate-900">{title}</p>
      <p className="mt-2 text-sm font-semibold text-slate-600">{desc}</p>
    </div>
  );
}

function Tick({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-xs font-black text-white">
        ✓
      </span>
      <span className="text-sm font-semibold text-slate-700">{children}</span>
    </li>
  );
}

function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

const INDUSTRIES: Industry[] = [
  {
    key: "Retail",
    title: "Retail / Kirana / Supermarket",
    tagline: "Fast billing + barcode + stock alerts + GST reports",
    who: ["Kirana shops", "Supermarkets", "Departmental stores", "Mini marts"],
    highlights: [
      "Ultra-fast billing UI with keyboard-friendly workflow",
      "Low stock alerts + purchase entry + item control",
      "Thermal and A4 invoice templates",
      "Customer balances + GST-ready reports",
    ],
    recommendedModules: [
      { name: "Billing + CRUD", priceHint: "₹8,000" },
      { name: "Inventory + Stock", priceHint: "+₹3,000" },
      { name: "Installation + Printer Setup", priceHint: "+₹1,000" },
      { name: "Data Security Setup", priceHint: "+₹1,000" },
      { name: "Android Counter Flow", priceHint: "+₹7,000" },
    ],
    stack: [
      "On-Prem / Offline mode",
      "Thermal printer setup",
      "Barcode-ready workflow",
      "Daily sales and GST reports",
    ],
  },
  {
    key: "Wholesale",
    title: "Distributor / Wholesale",
    tagline: "Bulk invoices + ledger + stock + multi-branch reporting",
    who: ["Wholesale traders", "FMCG distributor", "Pharma distributor", "B2B suppliers"],
    highlights: [
      "Party ledger with receivable/payable tracking",
      "Purchase and stock movement tracking",
      "Excel import and export options",
      "Optional web dashboard for branch reporting",
    ],
    recommendedModules: [
      { name: "Billing + CRUD", priceHint: "₹8,000" },
      { name: "Inventory + Stock", priceHint: "+₹3,000" },
      { name: "Web Dashboard", priceHint: "+₹5,000" },
      { name: "Installation + Printer Setup", priceHint: "+₹1,000" },
      { name: "Data Security Setup", priceHint: "+₹1,000" },
    ],
    stack: ["On-Prem / Cloud", "Excel import/export", "Ledger reports", "Branch-ready options"],
  },
  {
    key: "Restaurant",
    title: "Restaurant / Cafe",
    tagline: "Billing + stock usage + day reports",
    who: ["Cafe", "Restaurant", "Cloud kitchen", "Bakery"],
    highlights: [
      "Quick order and bill UI",
      "Stock tracking for ingredients/items",
      "Daily sales report and discount control",
      "Thermal bill print support",
    ],
    recommendedModules: [
      { name: "Billing + CRUD", priceHint: "₹8,000" },
      { name: "Inventory + Stock", priceHint: "+₹3,000" },
      { name: "Android Integration", priceHint: "+₹7,000" },
      { name: "Installation + Printer Setup", priceHint: "+₹1,000" },
      { name: "Data Security Setup", priceHint: "+₹1,000" },
    ],
    stack: ["Offline counter billing", "Thermal printing", "Role-based cashier access", "Owner dashboard"],
  },
  {
    key: "Clinic",
    title: "Clinic / Pharmacy",
    tagline: "Simple billing + inventory + customer history",
    who: ["Clinic", "Medical store", "Diagnostic center", "Pharmacy"],
    highlights: [
      "Fast billing with customer history",
      "Basic inventory for medicines/items",
      "GST-ready invoice and receipt formats",
      "Secure on-prem setup options",
    ],
    recommendedModules: [
      { name: "Billing + CRUD", priceHint: "₹8,000" },
      { name: "Inventory + Stock", priceHint: "+₹3,000" },
      { name: "Installation + Printer Setup", priceHint: "+₹1,000" },
      { name: "Data Security Setup", priceHint: "+₹1,000" },
    ],
    stack: ["On-Prem preferred", "Backup/export setup", "Printer support", "Access control"],
  },
  {
    key: "Showroom",
    title: "Showroom / Electronics",
    tagline: "GST invoice + warranty notes + staff performance",
    who: ["Electronics showroom", "Mobile showroom", "Furniture", "Appliances"],
    highlights: [
      "Invoice templates with warranty notes",
      "Staff-based sales tracking",
      "Product catalog + stock control",
      "Print and share invoice PDF",
    ],
    recommendedModules: [
      { name: "Billing + CRUD", priceHint: "₹8,000" },
      { name: "Inventory + Stock", priceHint: "+₹3,000" },
      { name: "Employee Management", priceHint: "+₹4,000" },
      { name: "Installation + Printer Setup", priceHint: "+₹1,000" },
      { name: "Data Security Setup", priceHint: "+₹1,000" },
    ],
    stack: ["On-Prem / Cloud", "Invoice formats", "Employee roles", "Export reports"],
  },
  {
    key: "Hotel",
    title: "Hotel / Resort",
    tagline: "Billing + services + multi-counter reporting",
    who: ["Hotel", "Resort", "Lodge", "Banquet"],
    highlights: [
      "Service billing with add-ons",
      "Multi-counter or staff roles",
      "Reports for owner and manager",
      "Hardware and network setup support",
    ],
    recommendedModules: [
      { name: "Billing + CRUD", priceHint: "₹8,000" },
      { name: "Employee Management", priceHint: "+₹4,000" },
      { name: "Web Dashboard", priceHint: "+₹5,000" },
      { name: "Installation + Printer Setup", priceHint: "+₹1,000" },
      { name: "Data Security Setup", priceHint: "+₹1,000" },
    ],
    stack: ["On-Prem / Cloud", "Networking + printers", "Role-based access", "AMC optional"],
  },
  {
    key: "Gym",
    title: "Gym / Fitness",
    tagline: "Membership billing + receipts + staff roles",
    who: ["Gym", "Yoga studio", "Fitness center", "Dance class"],
    highlights: [
      "Membership and fee receipts",
      "Staff roles for trainer and desk",
      "Payment tracking and reminders",
      "Owner dashboard view",
    ],
    recommendedModules: [
      { name: "Billing + CRUD", priceHint: "₹8,000" },
      { name: "Employee Management", priceHint: "+₹4,000" },
      { name: "Android/Web Integration", priceHint: "+₹7k / +₹5k" },
      { name: "Installation + Printer Setup", priceHint: "+₹1,000" },
      { name: "Data Security Setup", priceHint: "+₹1,000" },
    ],
    stack: ["On-Prem / Cloud", "Receipt templates", "Staff roles", "Export reports"],
  },
  {
    key: "Coaching",
    title: "Coaching / Institute",
    tagline: "Fees + receipts + student ledger",
    who: ["Coaching center", "Tuition", "Institute", "Training center"],
    highlights: [
      "Fee receipt templates",
      "Student or party ledger",
      "Batch-wise reporting",
      "On-prem or cloud setup",
    ],
    recommendedModules: [
      { name: "Billing + CRUD", priceHint: "₹8,000" },
      { name: "Web Dashboard", priceHint: "+₹5,000" },
      { name: "Installation + Printer Setup", priceHint: "+₹1,000" },
      { name: "Data Security Setup", priceHint: "+₹1,000" },
    ],
    stack: ["Cloud / On-Prem", "Receipts", "Reports", "Backup/export"],
  },
  {
    key: "Service",
    title: "Service Businesses",
    tagline: "Invoices + work notes + customer history",
    who: ["Repair shop", "Agency", "Consultant", "Salon", "Any services"],
    highlights: [
      "Simple invoice + notes workflow",
      "Customer history and balances",
      "PDF print/share",
      "Data safety and backups",
    ],
    recommendedModules: [
      { name: "Billing + CRUD", priceHint: "₹8,000" },
      { name: "Installation + Printer Setup", priceHint: "+₹1,000" },
      { name: "Data Security Setup", priceHint: "+₹1,000" },
      { name: "Web Dashboard", priceHint: "+₹5,000" },
    ],
    stack: ["Cloud / On-Prem", "Invoice templates", "Export data", "Support / AMC"],
  },
  {
    key: "HR",
    title: "HR / Staffing / Contractor Billing",
    tagline: "Billing + employees + reporting",
    who: ["Manpower supplier", "Staffing agency", "Contractors", "HR firms"],
    highlights: [
      "Employee data + attendance module",
      "Invoices per client or project",
      "Reports for payouts and collections",
      "On-prem secure option",
    ],
    recommendedModules: [
      { name: "Billing + CRUD", priceHint: "₹8,000" },
      { name: "Employee Management", priceHint: "+₹4,000" },
      { name: "Web Dashboard", priceHint: "+₹5,000" },
      { name: "Installation + Printer Setup", priceHint: "+₹1,000" },
      { name: "Data Security Setup", priceHint: "+₹1,000" },
    ],
    stack: ["On-Prem preferred", "Access control", "Reports", "AMC optional"],
  },
  {
    key: "Contractor",
    title: "Interior / Contractor / Project Work",
    tagline: "Estimates + invoices + material stock",
    who: ["Interior firm", "Contractor", "Builder", "Project services"],
    highlights: [
      "Estimate and quotation templates",
      "Invoice + payment tracking",
      "Optional inventory for materials",
      "Strong documentation and data safety",
    ],
    recommendedModules: [
      { name: "Billing + CRUD", priceHint: "₹8,000" },
      { name: "Inventory + Stock", priceHint: "+₹3,000" },
      { name: "Web Dashboard", priceHint: "+₹5,000" },
      { name: "Installation + Printer Setup", priceHint: "+₹1,000" },
      { name: "Data Security Setup", priceHint: "+₹1,000" },
    ],
    stack: ["Cloud / On-Prem", "Templates", "Exports", "Support / AMC"],
  },
  {
    key: "Any",
    title: "Any Business (Custom Ready)",
    tagline: "Start small and scale with your workflow",
    who: ["Any local business", "Multi-branch", "PSU / Enterprise custom"],
    highlights: [
      "Modern UI that staff learns quickly",
      "On-prem, cloud, or offline setup options",
      "Hardware + network + printer support",
      "Backup and access best practices",
    ],
    recommendedModules: [
      { name: "Billing + CRUD", priceHint: "₹8,000" },
      { name: "Installation + Printer Setup", priceHint: "+₹1,000" },
      { name: "Data Security Setup", priceHint: "+₹1,000" },
      { name: "Add modules as required", priceHint: "Inventory / Employees / Android / Web / AI" },
    ],
    stack: ["On-Prem / Cloud", "Offline possible", "AMC available", "Hardware supply"],
  },
];

export default function IndustriesPage() {
  const [active, setActive] = useState<IndustryKey>("Retail");
  const current = INDUSTRIES.find((i) => i.key === active) || INDUSTRIES[0];

  const waPrefill = (indTitle: string) =>
    WHATSAPP.replace("____", encodeURIComponent(indTitle));

  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-white to-slate-100">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-slate-200/40 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-slate-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-wrap justify-center gap-2">
            <Badge>On-Prem Setup</Badge>
            <Badge>Cloud Deployment</Badge>
            <Badge>AMC / Support</Badge>
            <Badge>Hardware Supply</Badge>
            <Badge>Data Safety</Badge>
          </div>

          <h1 className="mt-6 text-center text-3xl font-black text-slate-900 md:text-5xl">
            Complete Solutions for Every Industry
          </h1>
          <p className="mx-auto mt-4 max-w-4xl text-center font-semibold text-slate-600">
            We do not just sell software UI. We deliver{" "}
            <span className="font-extrabold text-slate-900">
              full working solutions
            </span>{" "}
            — software, hardware, installation, printer setup, on-prem or cloud
            deployment, AMC support, and backup planning.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href={`${BASE}/app/`}
              className="rounded-2xl bg-slate-900 px-7 py-4 text-sm font-extrabold text-white hover:bg-slate-800"
            >
              Try Demo UI
            </Link>
            <Link
              href={`${BASE}/plans/`}
              className="rounded-2xl border border-slate-300 bg-white px-7 py-4 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
            >
              View Plans
            </Link>
            <a
              href={waPrefill("Any Business")}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-green-600 px-7 py-4 text-sm font-extrabold text-white hover:bg-green-700"
            >
              WhatsApp Requirements
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-6 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-4">
              <Card>
                <div className="border-b p-6">
                  <p className="text-xs font-extrabold text-slate-500">
                    Select Industry
                  </p>
                  <p className="mt-1 text-lg font-black text-slate-900">
                    Choose your business type
                  </p>
                </div>

                <div className="space-y-2 p-4">
                  {INDUSTRIES.map((i) => (
                    <button
                      key={i.key}
                      type="button"
                      onClick={() => setActive(i.key)}
                      className={cn(
                        "w-full rounded-3xl border px-4 py-4 text-left transition",
                        active === i.key
                          ? "border-slate-900 bg-slate-900 text-white"
                          : "border-slate-200 bg-white hover:bg-slate-50"
                      )}
                    >
                      <p className="text-sm font-black">{i.title}</p>
                      <p
                        className={cn(
                          "mt-1 text-sm font-semibold",
                          active === i.key ? "text-white/75" : "text-slate-600"
                        )}
                      >
                        {i.tagline}
                      </p>
                    </button>
                  ))}
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <p className="text-lg font-black text-slate-900">
                    Want a custom solution?
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-600">
                    Share your counters, printers, staff count, and whether you
                    want On-Prem or Cloud setup.
                  </p>

                  <div className="mt-4 flex flex-col gap-2">
                    <a
                      href={waPrefill(current.title)}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl bg-green-600 px-6 py-3 text-center text-sm font-extrabold text-white hover:bg-green-700"
                    >
                      WhatsApp Selected Industry
                    </a>
                    <a
                      href={CALL_SOFTWARE}
                      className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-center text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                    >
                      Call (Software)
                    </a>
                    <a
                      href={CALL_HARDWARE}
                      className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-center text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                    >
                      Call (Hardware)
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </aside>

          <div className="space-y-6 lg:col-span-8">
            <Card>
              <div className="border-b p-7">
                <div className="flex flex-wrap gap-2">
                  <Badge>On-Prem</Badge>
                  <Badge>Cloud</Badge>
                  <Badge>AMC Support</Badge>
                  <Badge>Hardware + Printer</Badge>
                  <Badge>Data Safety</Badge>
                </div>

                <h2 className="mt-4 text-2xl font-black text-slate-900 md:text-3xl">
                  {current.title}
                </h2>
                <p className="mt-2 font-semibold text-slate-600">
                  {current.tagline}
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <Feature
                    title="Deployment Options"
                    desc="On-Prem installation with offline-capable workflow or cloud hosting based on your requirement."
                  />
                  <Feature
                    title="Support + AMC"
                    desc="Fast support, updates, health checks, and optional AMC for smooth daily operations."
                  />
                  <Feature
                    title="Hardware + Printer Setup"
                    desc="Supply and setup for systems, barcode scanners, thermal/A4 printers, LAN and Wi-Fi as needed."
                  />
                  <Feature
                    title="Data Safety"
                    desc="Access control, backup/export planning, and a simple security checklist for business data."
                  />
                </div>
              </div>

              <div className="p-7">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div>
                    <p className="text-sm font-black text-slate-900">
                      Best fit for
                    </p>
                    <ul className="mt-4 space-y-3">
                      {current.who.map((x) => (
                        <Tick key={x}>{x}</Tick>
                      ))}
                    </ul>

                    <p className="mt-8 text-sm font-black text-slate-900">
                      Key benefits
                    </p>
                    <ul className="mt-4 space-y-3">
                      {current.highlights.map((x) => (
                        <Tick key={x}>{x}</Tick>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                      <p className="text-sm font-black text-slate-900">
                        Recommended Modules
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-600">
                        Start small and upgrade anytime.
                      </p>

                      <div className="mt-4 space-y-3">
                        {current.recommendedModules.map((m) => (
                          <div
                            key={m.name}
                            className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3"
                          >
                            <p className="text-sm font-extrabold text-slate-900">
                              {m.name}
                            </p>
                            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-extrabold text-slate-700">
                              {m.priceHint}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <Link
                          href={`${BASE}/plans/`}
                          className="flex-1 rounded-2xl bg-slate-900 px-6 py-3 text-center text-sm font-extrabold text-white hover:bg-slate-800"
                        >
                          Build Plan
                        </Link>
                        <a
                          href={waPrefill(current.title)}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 rounded-2xl bg-green-600 px-6 py-3 text-center text-sm font-extrabold text-white hover:bg-green-700"
                        >
                          WhatsApp This Industry
                        </a>
                      </div>
                    </div>

                    <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6">
                      <p className="text-sm font-black text-slate-900">
                        Full Stack Delivery
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {current.stack.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-extrabold text-slate-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <p className="text-xs font-extrabold text-slate-700">NOTE</p>
                        <p className="mt-1 text-sm font-semibold text-slate-600">
                          Every industry uses the same premium UI core — we
                          configure templates, modules, and workflow to match
                          your daily operations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              {INDUSTRIES.map((i) => (
                <div
                  key={i.key}
                  className={cn(
                    "overflow-hidden rounded-[32px] border bg-white shadow-sm transition",
                    active === i.key
                      ? "border-slate-900 ring-2 ring-slate-900/10"
                      : "border-slate-200 hover:shadow-md"
                  )}
                >
                  <div className="border-b p-6">
                    <p className="text-lg font-black text-slate-900">{i.title}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-600">
                      {i.tagline}
                    </p>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2">
                      <Badge>Software</Badge>
                      <Badge>Hardware</Badge>
                      <Badge>On-Prem/Cloud</Badge>
                      <Badge>AMC</Badge>
                      <Badge>Data Safety</Badge>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {i.recommendedModules.slice(0, 4).map((m) => (
                        <span
                          key={m.name}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-extrabold text-slate-700"
                        >
                          {m.name}
                        </span>
                      ))}
                      {i.recommendedModules.length > 4 ? (
                        <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-extrabold text-slate-700">
                          + More
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-5 flex gap-3">
                      <button
                        type="button"
                        onClick={() => setActive(i.key)}
                        className="flex-1 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
                      >
                        View Details
                      </button>
                      <a
                        href={waPrefill(i.title)}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-center text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Card className="border-slate-900 bg-slate-950">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-black">
                  Get a complete quote
                </h3>
                <p className="mt-2 max-w-3xl font-semibold text-white/70">
                  Share your industry, number of counters, printer type
                  (Thermal/A4), internet availability, and whether you prefer
                  On-Prem or Cloud. We’ll suggest the best setup and plan.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`${BASE}/plans/`}
                    className="rounded-2xl bg-white px-6 py-3 text-center text-sm font-extrabold text-slate-950 hover:bg-slate-100"
                  >
                    Build Plan
                  </Link>
                  <a
                    href={waPrefill(current.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-green-600 px-6 py-3 text-center text-sm font-extrabold text-white hover:bg-green-700"
                  >
                    WhatsApp Requirements
                  </a>
                  <Link
                    href={`${BASE}/contact/`}
                    className="rounded-2xl border border-white/20 px-6 py-3 text-center text-sm font-extrabold hover:bg-white/10"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}