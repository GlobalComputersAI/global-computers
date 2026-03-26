"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const BASE = "/projects/gst-inventory";
const WHATSAPP_BASE = "https://wa.me/919752422686?text=";

function cn(...a: Array<string | false | null | undefined>) {
  return a.filter(Boolean).join(" ");
}

function formatINR(n: number) {
  const v = Number.isFinite(n) ? n : 0;
  return `₹${Math.round(v).toLocaleString("en-IN")}`;
}

type AddonKey =
  | "billing"
  | "inventory"
  | "employees"
  | "android"
  | "web"
  | "ai"
  | "install"
  | "security";

type Addon = {
  key: AddonKey;
  title: string;
  price: number;
  note: string;
  tag?: string;
};

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-black text-slate-900 md:text-5xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-3xl font-semibold text-slate-600">
          {subtitle}
        </p>
      ) : null}
    </div>
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

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[12px] font-extrabold text-slate-700">
      {children}
    </span>
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

function buildWhatsAppMessage(args: {
  total: number;
  selected: Addon[];
  bundleName?: string;
}) {
  const lines: string[] = [];
  if (args.bundleName) lines.push(`Plan: ${args.bundleName}`);
  lines.push("Selected Modules:");
  args.selected.forEach((a) => lines.push(`- ${a.title}: ${formatINR(a.price)}`));
  lines.push(`Total Estimate: ${formatINR(args.total)}`);
  lines.push("");
  lines.push(
    "Please share installation timeline and on-prem/offline/cloud setup details."
  );
  return encodeURIComponent(lines.join("\n"));
}

const ADDONS: Addon[] = [
  {
    key: "billing",
    title: "Billing + CRUD (Base)",
    price: 8000,
    note: "Invoices, edit bills, returns, party master, item master, GST-ready bill formats.",
    tag: "Start Here",
  },
  {
    key: "inventory",
    title: "Inventory + Stock",
    price: 3000,
    note: "Stock in/out, purchase entry, low-stock alerts, basic stock valuation.",
  },
  {
    key: "employees",
    title: "Employee Management",
    price: 4000,
    note: "Roles, permissions, attendance, and basic staff performance tracking.",
  },
  {
    key: "android",
    title: "Android Integration",
    price: 7000,
    note: "Mobile billing, barcode scanning support, and practical shop-floor workflow.",
    tag: "Popular",
  },
  {
    key: "web",
    title: "Web Dashboard Integration",
    price: 5000,
    note: "Admin dashboard, branch reports, and multi-device access as required.",
  },
  {
    key: "ai",
    title: "AI / ML Business Analysis",
    price: 10000,
    note: "Best-selling items, demand forecast, repeat customers, and business insights.",
    tag: "Advanced",
  },
  {
    key: "install",
    title: "Installation + Printer Setup",
    price: 1000,
    note: "Software installation, thermal/A4 printer setup, and invoice format configuration.",
    tag: "Required",
  },
  {
    key: "security",
    title: "Data Security Setup",
    price: 1000,
    note: "Backup/export planning, access checklist, and basic safety setup.",
    tag: "Recommended",
  },
];

const BUNDLES = [
  {
    name: "Starter",
    desc: "Best for starting billing professionally with safe setup.",
    keys: ["billing", "install", "security"] as AddonKey[],
  },
  {
    name: "Business",
    desc: "Billing + Inventory for retail, restaurant, clinic, and showroom workflows.",
    keys: ["billing", "inventory", "install", "security"] as AddonKey[],
  },
  {
    name: "Pro",
    desc: "Adds employees and roles for multi-staff operations.",
    keys: ["billing", "inventory", "employees", "install", "security"] as AddonKey[],
  },
  {
    name: "Multi-Device",
    desc: "For counters, branches, Android, and web visibility.",
    keys: [
      "billing",
      "inventory",
      "employees",
      "android",
      "web",
      "install",
      "security",
    ] as AddonKey[],
  },
  {
    name: "Intelligence",
    desc: "Includes AI/ML insights for future-ready business decisions.",
    keys: [
      "billing",
      "inventory",
      "employees",
      "android",
      "web",
      "ai",
      "install",
      "security",
    ] as AddonKey[],
  },
];

const RECOMMENDED_BY_BUSINESS = [
  {
    t: "Retail / Kirana / Supermarket",
    s: "Billing + Inventory + printer setup",
    k: ["billing", "inventory", "install", "security"] as AddonKey[],
  },
  {
    t: "Distributor / Wholesale",
    s: "Billing + Inventory + reports + optional Web",
    k: ["billing", "inventory", "web", "install", "security"] as AddonKey[],
  },
  {
    t: "Restaurant / Cafe",
    s: "Billing + Inventory + optional Android",
    k: ["billing", "inventory", "android", "install", "security"] as AddonKey[],
  },
  {
    t: "Clinic / Pharmacy",
    s: "Billing + Inventory + security setup",
    k: ["billing", "inventory", "install", "security"] as AddonKey[],
  },
  {
    t: "Hotel / Gym / Coaching / Service",
    s: "Billing + Employees + optional Web/Android",
    k: ["billing", "employees", "install", "security"] as AddonKey[],
  },
];

const FAQS = [
  {
    q: "Is Billing + CRUD mandatory?",
    a: "Yes. It is the base module. Inventory, Employees, Android, Web, and AI work on top of it.",
  },
  {
    q: "Can I start small and upgrade later?",
    a: "Yes. Start with Billing, then add Inventory, Employees, Android, Web, or AI anytime.",
  },
  {
    q: "Do you provide on-prem installation?",
    a: "Yes. We can install on your office PC or server with offline workflow, printer setup, and basic training.",
  },
  {
    q: "Is this demo the real backend?",
    a: "This demo shows premium UI and workflow. Final delivery includes real database, reports, and setup based on your needs.",
  },
];

export default function PlansPage() {
  const [selected, setSelected] = useState<Record<AddonKey, boolean>>({
    billing: true,
    inventory: false,
    employees: false,
    android: false,
    web: false,
    ai: false,
    install: true,
    security: true,
  });

  const selectedAddons = useMemo(
    () => ADDONS.filter((a) => selected[a.key]),
    [selected]
  );

  const total = useMemo(
    () => selectedAddons.reduce((s, a) => s + a.price, 0),
    [selectedAddons]
  );

  const ensureBase = (next: Record<AddonKey, boolean>) => {
    const any =
      next.inventory ||
      next.employees ||
      next.android ||
      next.web ||
      next.ai;

    if (any) next.billing = true;
    return next;
  };

  const toggle = (key: AddonKey) => {
    setSelected((prev) => ensureBase({ ...prev, [key]: !prev[key] }));
  };

  const applyBundle = (keys: AddonKey[]) => {
    const next: Record<AddonKey, boolean> = {
      billing: false,
      inventory: false,
      employees: false,
      android: false,
      web: false,
      ai: false,
      install: false,
      security: false,
    };

    keys.forEach((k) => {
      next[k] = true;
    });

    next.billing = true;
    next.install = true;

    setSelected(ensureBase(next));
  };

  const waHref = useMemo(() => {
    const msg = buildWhatsAppMessage({
      total,
      selected: selectedAddons,
    });
    return `${WHATSAPP_BASE}${msg}`;
  }, [total, selectedAddons]);

  return (
    <main className="bg-slate-50">
      <section className="border-b bg-gradient-to-b from-white to-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            <Badge>On-Prem Setup</Badge>
            <Badge>Offline Billing</Badge>
            <Badge>Printer / Format Support</Badge>
            <Badge>Upgrade Anytime</Badge>
          </div>

          <SectionTitle
            title="Plans & Pricing"
            subtitle="Choose modules based on your business. Start with Billing + CRUD and add Inventory, Employees, Android, Web, or AI Insights. Installation and Data Security setup help ensure smooth deployment."
          />

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href={`${BASE}/app/`}
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-7 py-4 text-sm font-extrabold text-white hover:bg-slate-800"
            >
              Try Demo UI
            </Link>

            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-green-600 px-7 py-4 text-sm font-extrabold text-white hover:bg-green-700"
            >
              WhatsApp This Plan
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-center text-2xl font-black text-slate-900 md:text-3xl">
          Quick Bundles
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-center font-semibold text-slate-600">
          Click a recommended bundle to auto-select modules in the calculator.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {BUNDLES.map((b) => (
            <button
              key={b.name}
              type="button"
              onClick={() => applyBundle(b.keys)}
              className="rounded-[28px] border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:shadow-md"
            >
              <p className="text-lg font-black text-slate-900">{b.name}</p>
              <p className="mt-2 text-sm font-semibold text-slate-600">
                {b.desc}
              </p>
              <p className="mt-4 text-xs font-extrabold text-slate-500">
                Tap to select →
              </p>
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <Card>
              <div className="border-b p-7">
                <h2 className="text-xl font-black text-slate-900">
                  Module Calculator
                </h2>
                <p className="mt-2 text-sm font-semibold text-slate-600">
                  Select the modules you need. Billing + CRUD is the base.
                  Installation + Printer Setup helps your actual deployment work
                  properly. Data Security Setup adds basic protection and backup planning.
                </p>
              </div>

              <div className="space-y-4 p-7">
                {ADDONS.map((a) => {
                  const active = selected[a.key];
                  const isBase = a.key === "billing";

                  return (
                    <button
                      key={a.key}
                      type="button"
                      onClick={() => {
                        if (isBase) return;
                        toggle(a.key);
                      }}
                      className={cn(
                        "w-full rounded-3xl border p-5 text-left transition",
                        active
                          ? "border-slate-900 bg-slate-900 text-white"
                          : "border-slate-200 bg-white hover:bg-slate-50"
                      )}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <p
                              className={cn(
                                "text-base font-black",
                                active ? "text-white" : "text-slate-900"
                              )}
                            >
                              {a.title}
                            </p>

                            {a.tag ? (
                              <span
                                className={cn(
                                  "rounded-full border px-3 py-1 text-[11px] font-extrabold",
                                  active
                                    ? "border-white/20 bg-white/10 text-white/90"
                                    : "border-slate-200 bg-slate-50 text-slate-700"
                                )}
                              >
                                {a.tag}
                              </span>
                            ) : null}

                            {isBase ? (
                              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-extrabold text-emerald-700">
                                Included in all plans
                              </span>
                            ) : null}
                          </div>

                          <p
                            className={cn(
                              "mt-2 text-sm font-semibold",
                              active ? "text-white/80" : "text-slate-600"
                            )}
                          >
                            {a.note}
                          </p>
                        </div>

                        <div className="text-right">
                          <p
                            className={cn(
                              "text-lg font-black",
                              active ? "text-white" : "text-slate-900"
                            )}
                          >
                            {formatINR(a.price)}
                          </p>

                          <div
                            className={cn(
                              "mt-2 inline-flex items-center rounded-full border px-3 py-1 text-xs font-extrabold",
                              active
                                ? "border-white/20 bg-white/10 text-white"
                                : "border-slate-200 bg-white text-slate-700"
                            )}
                          >
                            {active ? "Selected" : "Add"}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-col gap-4 border-t bg-slate-50 p-7 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-extrabold text-slate-600">
                    Estimated Total
                  </p>
                  <p className="text-3xl font-black text-slate-900">
                    {formatINR(total)}
                  </p>
                  <p className="mt-1 text-xs font-bold text-slate-500">
                    * Android and Web pricing may vary slightly based on devices,
                    branches, counters, printers, and workflow depth.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`${BASE}/app/`}
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-100"
                  >
                    Try Demo UI
                  </Link>

                  <a
                    href={waHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-green-600 px-6 py-3 text-sm font-extrabold text-white hover:bg-green-700"
                  >
                    WhatsApp This Plan
                  </a>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-7">
                <h3 className="text-lg font-black text-slate-900">
                  What is included in Installation + Printer Setup?
                </h3>
                <ul className="mt-5 space-y-3">
                  <Tick>Proper software installation for On-Prem or Cloud setup.</Tick>
                  <Tick>Printer setup for A4 or Thermal format, margins, and print testing.</Tick>
                  <Tick>Invoice format configuration with logo, header, and footer.</Tick>
                  <Tick>Basic orientation and billing flow guidance.</Tick>
                </ul>
              </div>
            </Card>
          </div>

          <div className="space-y-6 lg:col-span-5">
            <Card>
              <div className="border-b p-7">
                <h2 className="text-xl font-black text-slate-900">
                  Recommended by Business Type
                </h2>
                <p className="mt-2 text-sm font-semibold text-slate-600">
                  Same core software UI — choose modules according to workflow.
                </p>
              </div>

              <div className="space-y-4 p-7">
                {RECOMMENDED_BY_BUSINESS.map((x) => (
                  <button
                    key={x.t}
                    type="button"
                    onClick={() => applyBundle(x.k)}
                    className="w-full rounded-3xl border border-slate-200 bg-white p-5 text-left transition hover:bg-slate-50"
                  >
                    <p className="text-sm font-black text-slate-900">{x.t}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-600">
                      {x.s}
                    </p>
                    <p className="mt-3 text-xs font-extrabold text-slate-500">
                      Select this setup →
                    </p>
                  </button>
                ))}
              </div>
            </Card>

            <Card>
              <div className="p-7">
                <h3 className="text-lg font-black text-slate-900">
                  Data Security Setup
                </h3>
                <p className="mt-2 text-sm font-semibold text-slate-600">
                  Simple but important setup so business data stays safer.
                </p>
                <ul className="mt-5 space-y-3">
                  <Tick>Role-based access checklist</Tick>
                  <Tick>Backup and export planning</Tick>
                  <Tick>Basic printer, file, and system safety checklist</Tick>
                  <Tick>Practical hardening suggestions for on-prem usage</Tick>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="p-7">
                <h3 className="text-lg font-black text-slate-900">FAQs</h3>
                <div className="mt-5 space-y-4">
                  {FAQS.map((f) => (
                    <div
                      key={f.q}
                      className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <p className="text-sm font-black text-slate-900">{f.q}</p>
                      <p className="mt-2 text-sm font-semibold text-slate-600">
                        {f.a}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-green-600 px-6 py-3 text-sm font-extrabold text-white hover:bg-green-700"
                  >
                    WhatsApp Selected Plan
                  </a>

                  <Link
                    href={`${BASE}/contact/`}
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-100"
                  >
                    Contact Page
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-black md:text-4xl">
            Get a Final Quote + Setup Timeline
          </h2>
          <p className="mx-auto mt-4 max-w-3xl font-semibold text-white/70">
            Share your business type, number of counters, printer type, and whether
            you want On-Prem or Cloud. We’ll suggest the best module plan.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href={`${BASE}/app/`}
              className="rounded-2xl bg-white px-8 py-4 text-sm font-extrabold text-slate-950 hover:bg-slate-100"
            >
              Try Demo UI
            </Link>

            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/20 px-8 py-4 text-sm font-extrabold hover:bg-white/10"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}