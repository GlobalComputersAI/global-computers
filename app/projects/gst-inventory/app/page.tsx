"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const BASE = "/projects/gst-inventory";

const WHATSAPP =
  "https://wa.me/919752422686?text=Hi%20I%20tried%20your%20GST%20Billing%20%2B%20Inventory%20Demo.%20I%20want%20pricing%20and%20on-prem%20setup%20details.%20My%20business%20type%20is%20____.";

function cn(...a: Array<string | false | null | undefined>) {
  return a.filter(Boolean).join(" ");
}

function formatINR(n: number) {
  const v = Number.isFinite(n) ? n : 0;
  return `₹${Math.round(v).toLocaleString("en-IN")}`;
}

type Industry =
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

type NavKey =
  | "Dashboard"
  | "Billing"
  | "Inventory"
  | "Parties"
  | "Purchase"
  | "Employees"
  | "Reports"
  | "Settings";

type InvoiceItem = { name: string; qty: number; rate: number; gst: number };
type Invoice = {
  id: string;
  date: string;
  party: string;
  items: InvoiceItem[];
  paid: number;
};

type Product = {
  sku: string;
  name: string;
  mrp: number;
  stock: number;
  min: number;
};

type Party = {
  name: string;
  type: "Customer" | "Vendor";
  phone?: string;
  balance: number;
};

type Employee = {
  name: string;
  role: "Owner" | "Manager" | "Cashier" | "Accountant" | "Staff";
  present: boolean;
  salesToday: number;
};

function calcInvoiceTotals(inv: Invoice) {
  const sub = inv.items.reduce((s, it) => s + it.qty * it.rate, 0);
  const gst = inv.items.reduce(
    (s, it) => s + it.qty * it.rate * (it.gst / 100),
    0
  );
  const total = sub + gst;
  const due = Math.max(0, total - inv.paid);
  return { sub, gst, total, due };
}

function chipForIndustry(ind: Industry) {
  const map: Record<Industry, { label: string; hint: string }> = {
    Retail: {
      label: "Retail / Kirana / Supermarket",
      hint: "Fast billing + barcode + stock alerts",
    },
    Wholesale: {
      label: "Distributor / Wholesale",
      hint: "Bulk invoices + party balances + reports",
    },
    Restaurant: {
      label: "Restaurant / Cafe",
      hint: "Quick bills + stock usage + day reports",
    },
    Clinic: {
      label: "Clinic / Pharmacy",
      hint: "Billing + basic inventory + customer history",
    },
    Showroom: {
      label: "Showroom / Electronics",
      hint: "GST invoice + warranty notes + staff sales",
    },
    Hotel: {
      label: "Hotel / Resort",
      hint: "Billing + services + multi-counter reports",
    },
    Gym: {
      label: "Gym / Fitness",
      hint: "Membership billing + receipts + staff roles",
    },
    Coaching: {
      label: "Coaching / Institute",
      hint: "Fees billing + receipts + student parties",
    },
    Service: {
      label: "Service Business",
      hint: "Invoices + work notes + customer ledger",
    },
    HR: {
      label: "HR / Staffing",
      hint: "Billing + employee records + reports",
    },
    Contractor: {
      label: "Interior / Contractor",
      hint: "Estimates + invoices + material stock",
    },
    Any: {
      label: "Any Business",
      hint: "Start small, add modules anytime",
    },
  };
  return map[ind];
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[12px] font-extrabold text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function Stat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-extrabold text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-black text-slate-900">{value}</p>
      {sub ? <p className="mt-1 text-xs font-bold text-slate-500">{sub}</p> : null}
    </div>
  );
}

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-3">
      <div>
        <h2 className="text-lg font-black text-slate-900 sm:text-xl">{title}</h2>
        {subtitle ? (
          <p className="mt-1 text-sm font-semibold text-slate-600">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}

function Pill({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center rounded-full px-4 py-2 text-sm font-extrabold transition",
        active
          ? "bg-slate-900 text-white"
          : "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
      )}
    >
      {children}
    </button>
  );
}

function Card({
  title,
  subtitle,
  right,
  children,
}: {
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-lg font-black text-slate-900">{title}</p>
          {subtitle ? (
            <p className="mt-1 text-sm font-semibold text-slate-600">{subtitle}</p>
          ) : null}
        </div>
        {right}
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function Field({
  label,
  placeholder,
}: {
  label: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-extrabold text-slate-600">{label}</span>
      <input
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-slate-400"
      />
    </label>
  );
}

function Select({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  return (
    <label className="block">
      <span className="text-xs font-extrabold text-slate-600">{label}</span>
      <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-slate-400">
        {items.map((x) => (
          <option key={x} value={x}>
            {x}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function DemoAppPageClient() {
  const [industry, setIndustry] = useState<Industry>("Retail");
  const [tab, setTab] = useState<NavKey>("Dashboard");

  const products: Product[] = useMemo(
    () => [
      { sku: "P-1001", name: "Aashirvaad Atta 10kg", mrp: 520, stock: 14, min: 6 },
      { sku: "P-1002", name: "Fortune Oil 5L", mrp: 720, stock: 7, min: 5 },
      { sku: "P-1003", name: "Colgate 200g", mrp: 110, stock: 28, min: 10 },
      { sku: "P-1004", name: "Milk 1L", mrp: 58, stock: 9, min: 12 },
      { sku: "P-1005", name: "Sugar 1kg", mrp: 48, stock: 3, min: 8 },
      { sku: "P-1006", name: "Paneer 200g", mrp: 95, stock: 11, min: 6 },
      { sku: "P-1007", name: "Soap Pack", mrp: 180, stock: 19, min: 8 },
      { sku: "P-1008", name: "Basmati Rice 5kg", mrp: 590, stock: 4, min: 6 },
    ],
    []
  );

  const parties: Party[] = useMemo(
    () => [
      { name: "Rahul Traders", type: "Customer", phone: "98xxxxxx11", balance: 12450 },
      { name: "City Mart", type: "Customer", phone: "97xxxxxx86", balance: 3890 },
      { name: "Shree Distributors", type: "Vendor", phone: "90xxxxxx22", balance: -16500 },
      { name: "Hotel Royal Stay", type: "Customer", phone: "91xxxxxx10", balance: 7200 },
      { name: "Fitness Zone Gym", type: "Customer", phone: "99xxxxxx41", balance: 2500 },
    ],
    []
  );

  const employees: Employee[] = useMemo(
    () => [
      { name: "Gaurav (Owner)", role: "Owner", present: true, salesToday: 0 },
      { name: "Sonia", role: "Cashier", present: true, salesToday: 18450 },
      { name: "Ajay", role: "Manager", present: true, salesToday: 9200 },
      { name: "Ritu", role: "Accountant", present: false, salesToday: 0 },
    ],
    []
  );

  const invoices: Invoice[] = useMemo(
    () => [
      {
        id: "INV-20260206-1042",
        date: "06 Feb 2026",
        party: "City Mart",
        paid: 1200,
        items: [
          { name: "Fortune Oil 5L", qty: 1, rate: 680, gst: 5 },
          { name: "Sugar 1kg", qty: 10, rate: 45, gst: 5 },
        ],
      },
      {
        id: "INV-20260206-1121",
        date: "06 Feb 2026",
        party: "Rahul Traders",
        paid: 0,
        items: [
          { name: "Aashirvaad Atta 10kg", qty: 2, rate: 510, gst: 5 },
          { name: "Basmati Rice 5kg", qty: 2, rate: 560, gst: 5 },
        ],
      },
      {
        id: "INV-20260205-1730",
        date: "05 Feb 2026",
        party: "Hotel Royal Stay",
        paid: 2500,
        items: [
          { name: "Milk 1L", qty: 30, rate: 55, gst: 0 },
          { name: "Paneer 200g", qty: 10, rate: 90, gst: 5 },
        ],
      },
    ],
    []
  );

  const lowStock = useMemo(() => products.filter((p) => p.stock <= p.min), [products]);

  const todaySales = useMemo(() => {
    const todays = invoices.filter((i) => i.date.includes("06 Feb 2026"));
    return todays.reduce((s, inv) => s + calcInvoiceTotals(inv).total, 0);
  }, [invoices]);

  const todayBills = useMemo(
    () => invoices.filter((i) => i.date.includes("06 Feb 2026")).length,
    [invoices]
  );

  const gstToday = useMemo(() => {
    const todays = invoices.filter((i) => i.date.includes("06 Feb 2026"));
    return todays.reduce((s, inv) => s + calcInvoiceTotals(inv).gst, 0);
  }, [invoices]);

  const topProducts = useMemo(() => {
    const map = new Map<string, number>();
    invoices.forEach((inv) =>
      inv.items.forEach((it) => map.set(it.name, (map.get(it.name) || 0) + it.qty))
    );
    return Array.from(map.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
  }, [invoices]);

  const industryMeta = chipForIndustry(industry);

  const navItems: Array<{ key: NavKey; icon: string }> = [
    { key: "Dashboard", icon: "📊" },
    { key: "Billing", icon: "🧾" },
    { key: "Inventory", icon: "📦" },
    { key: "Parties", icon: "👥" },
    { key: "Purchase", icon: "🛒" },
    { key: "Employees", icon: "🧑‍💼" },
    { key: "Reports", icon: "📈" },
    { key: "Settings", icon: "⚙️" },
  ];

  const industries: Industry[] = [
    "Retail",
    "Wholesale",
    "Restaurant",
    "Clinic",
    "Showroom",
    "Hotel",
    "Gym",
    "Coaching",
    "Service",
    "HR",
    "Contractor",
    "Any",
  ];

  return (
    <main className="min-h-[calc(100vh-160px)] bg-slate-50">
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge>On-Prem Ready</Badge>
                <Badge>Offline Billing</Badge>
                <Badge>Role Based Access</Badge>
                <Badge>Upgrade Anytime</Badge>
              </div>

              <h1 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
                Live Software UI Demo
              </h1>
              <p className="mt-2 max-w-3xl font-semibold text-slate-600">
                Switch business type and explore screens. This demo is designed
                to feel like a real GST billing and inventory product for{" "}
                <span className="font-extrabold text-slate-900">every industry</span>.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                {industries.map((k) => (
                  <Pill key={k} active={industry === k} onClick={() => setIndustry(k)}>
                    {chipForIndustry(k).label}
                  </Pill>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-extrabold text-slate-900">
                  {industryMeta.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-600">
                  {industryMeta.hint}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={`${BASE}/plans/`}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
              >
                View Plans & Pricing
              </Link>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-green-600 px-6 py-3 text-sm font-extrabold text-white hover:bg-green-700"
              >
                WhatsApp for Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="sticky top-24 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
              <div className="border-b p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-extrabold text-slate-500">Workspace</p>
                    <p className="text-base font-black text-slate-900">
                      Demo Store (FY 2025-26)
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-extrabold text-slate-700">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    Offline
                  </span>
                </div>

                <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-extrabold text-slate-600">Quick Actions</p>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setTab("Billing")}
                      className="rounded-2xl bg-slate-900 px-4 py-2 text-xs font-extrabold text-white hover:bg-slate-800"
                    >
                      + New Bill
                    </button>
                    <button
                      type="button"
                      onClick={() => setTab("Inventory")}
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-xs font-extrabold text-slate-900 hover:bg-slate-50"
                    >
                      Check Stock
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-3">
                {navItems.map((n) => (
                  <button
                    key={n.key}
                    type="button"
                    onClick={() => setTab(n.key)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-extrabold transition",
                      tab === n.key
                        ? "bg-slate-900 text-white"
                        : "text-slate-700 hover:bg-slate-50"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <span>{n.icon}</span>
                      {n.key}
                    </span>
                    <span
                      className={cn(
                        "rounded-full border px-2 py-1 text-[10px]",
                        tab === n.key
                          ? "border-white/20 bg-white/10 text-white/90"
                          : "border-slate-200 bg-white text-slate-500"
                      )}
                    >
                      UI
                    </span>
                  </button>
                ))}
              </div>

              <div className="border-t bg-slate-50 p-4">
                <p className="text-xs font-extrabold text-slate-600">
                  Modules (upgrade anytime)
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Billing ₹8k",
                    "Inventory +₹3k",
                    "Employees +₹4k",
                    "Android +₹7k",
                    "Web +₹5k",
                    "AI +₹10k",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-extrabold text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-9">
            {tab === "Dashboard" && (
              <div className="space-y-6">
                <SectionTitle
                  title="Dashboard"
                  subtitle="One glance overview for owner or manager."
                />

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <Stat
                    label="Today Sales"
                    value={formatINR(todaySales)}
                    sub={`${todayBills} bills generated`}
                  />
                  <Stat
                    label="GST Collected (Today)"
                    value={formatINR(gstToday)}
                    sub="Auto-calculated on invoices"
                  />
                  <Stat
                    label="Low Stock Items"
                    value={`${lowStock.length}`}
                    sub="Instant alerts"
                  />
                  <Stat
                    label="Pending Receivable"
                    value={formatINR(
                      parties.filter((p) => p.balance > 0).reduce((s, p) => s + p.balance, 0)
                    )}
                    sub="Party ledger view"
                  />
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-extrabold text-slate-900">Recent Invoices</p>
                      <button
                        type="button"
                        onClick={() => setTab("Billing")}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-extrabold text-slate-700 hover:bg-slate-50"
                      >
                        Open Billing →
                      </button>
                    </div>

                    <div className="mt-4 space-y-3">
                      {invoices.slice(0, 3).map((inv) => {
                        const t = calcInvoiceTotals(inv);
                        return (
                          <div
                            key={inv.id}
                            className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="text-sm font-black text-slate-900">{inv.party}</p>
                                <p className="text-xs font-bold text-slate-500">
                                  {inv.id} • {inv.date}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-sm font-black text-slate-900">
                                  {formatINR(t.total)}
                                </p>
                                <p className="text-xs font-bold text-slate-500">
                                  Due {formatINR(t.due)}
                                </p>
                              </div>
                            </div>

                            <div className="mt-3 flex flex-wrap gap-2">
                              {["PDF Print", "Edit Bill", "Returns"].map((item) => (
                                <span
                                  key={item}
                                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-extrabold text-slate-700"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-extrabold text-slate-900">Top Selling Items</p>
                      <button
                        type="button"
                        onClick={() => setTab("Reports")}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-extrabold text-slate-700 hover:bg-slate-50"
                      >
                        Open Reports →
                      </button>
                    </div>

                    <div className="mt-4 space-y-3">
                      {topProducts.map(([name, qty]) => (
                        <div
                          key={name}
                          className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4"
                        >
                          <div>
                            <p className="text-sm font-black text-slate-900">{name}</p>
                            <p className="text-xs font-bold text-slate-500">
                              Auto from invoices
                            </p>
                          </div>
                          <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-extrabold text-white">
                            {qty} qty
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs font-extrabold text-slate-700">
                        AI/ML Insights (Add-on)
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-600">
                        Demand forecast, repeat customers, profit leaks, and smart
                        reorder suggestions.
                      </p>
                      <Link
                        href={`${BASE}/plans/`}
                        className="mt-3 inline-flex text-sm font-extrabold text-slate-900 underline underline-offset-4"
                      >
                        See AI plans →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {tab === "Billing" && <BillingUI industry={industry} invoices={invoices} />}
            {tab === "Inventory" && <InventoryUI products={products} />}
            {tab === "Parties" && <PartiesUI parties={parties} />}
            {tab === "Purchase" && <PurchaseUI />}
            {tab === "Employees" && <EmployeesUI employees={employees} />}
            {tab === "Reports" && <ReportsUI invoices={invoices} />}
            {tab === "Settings" && <SettingsUI />}
          </div>
        </div>
      </section>

      <section className="border-t bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-black text-slate-900">
              Want this software for your business?
            </p>
            <p className="text-sm font-semibold text-slate-600">
              Start at ₹8,000 and add modules anytime. On-Prem, Offline, and Cloud
              options available.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href={`${BASE}/plans/`}
              className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
            >
              View Plans
            </Link>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-green-600 px-6 py-3 text-sm font-extrabold text-white hover:bg-green-700"
            >
              WhatsApp for Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function BillingUI({
  industry,
  invoices,
}: {
  industry: Industry;
  invoices: Invoice[];
}) {
  const [mode, setMode] = useState<"New Bill" | "Invoices">("New Bill");

  const billTemplates = useMemo(() => {
    const base = [
      "GST Invoice (A4)",
      "GST Invoice (Thermal)",
      "Estimate / Quotation",
      "Delivery Challan",
    ];
    if (industry === "Restaurant") return ["KOT / Order", ...base];
    if (industry === "Hotel") return ["Service Bill", ...base];
    if (industry === "Gym") return ["Membership Receipt", ...base];
    if (industry === "Clinic") return ["OPD Receipt", ...base];
    if (industry === "Coaching") return ["Fee Receipt", ...base];
    return base;
  }, [industry]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {(["New Bill", "Invoices"] as const).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setMode(item)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-extrabold",
              mode === item
                ? "bg-slate-900 text-white"
                : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
            )}
          >
            {item === "New Bill" ? "+ New Bill" : "Invoices"}
          </button>
        ))}
      </div>

      {mode === "New Bill" ? (
        <Card
          title="Create Bill"
          subtitle="Fast billing screen — built for quick typing and barcode-style flow."
          right={
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-extrabold text-slate-700">
              Auto GST • Print PDF • Edit Later
            </span>
          }
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Select label="Bill Type" items={billTemplates} />
            <Field label="Party Name" placeholder="Search customer / vendor" />
            <Field label="Phone (optional)" placeholder="98XXXXXXXX" />
            <Field label="Invoice No." placeholder="Auto generated" />
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-black text-slate-900">Items</p>
            <div className="mt-4 grid grid-cols-12 gap-2 text-xs font-extrabold text-slate-600">
              <div className="col-span-5">Product / Service</div>
              <div className="col-span-2">Qty</div>
              <div className="col-span-2">Rate</div>
              <div className="col-span-2">GST %</div>
              <div className="col-span-1 text-right">Total</div>
            </div>

            {[1, 2, 3].map((r) => (
              <div key={r} className="mt-2 grid grid-cols-12 gap-2">
                <input
                  className="col-span-5 rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold"
                  placeholder="Search item (barcode / name)"
                />
                <input
                  className="col-span-2 rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold"
                  placeholder="1"
                />
                <input
                  className="col-span-2 rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold"
                  placeholder="0"
                />
                <input
                  className="col-span-2 rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold"
                  placeholder="5"
                />
                <div className="col-span-1 flex items-center justify-end text-sm font-black text-slate-900">
                  ₹—
                </div>
              </div>
            ))}

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-2">
                {["Discount", "Round Off", "Notes / Warranty"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-extrabold text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                >
                  Save Draft
                </button>
                <button
                  type="button"
                  className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
                >
                  Save & Print
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-extrabold text-slate-500">Subtotal</p>
              <p className="mt-2 text-xl font-black text-slate-900">₹—</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-extrabold text-slate-500">GST</p>
              <p className="mt-2 text-xl font-black text-slate-900">₹—</p>
            </div>
            <div className="rounded-3xl bg-slate-900 p-5 text-white">
              <p className="text-xs font-extrabold text-white/70">Total</p>
              <p className="mt-2 text-xl font-black">₹—</p>
              <p className="mt-1 text-xs font-bold text-white/70">
                Auto calculated
              </p>
            </div>
          </div>
        </Card>
      ) : (
        <Card
          title="Invoices"
          subtitle="Search, edit, print, and return — all in one place."
          right={
            <button
              type="button"
              className="rounded-2xl bg-slate-900 px-4 py-2 text-xs font-extrabold text-white hover:bg-slate-800"
            >
              Export PDF/Excel
            </button>
          }
        >
          <div className="grid gap-3 md:grid-cols-3">
            <Field label="Search" placeholder="Invoice no / party / item" />
            <Select label="Status" items={["All", "Paid", "Unpaid", "Partial"]} />
            <Select label="Date" items={["Today", "This Week", "This Month", "Custom"]} />
          </div>

          <div className="mt-5 overflow-hidden rounded-3xl border border-slate-200">
            <div className="grid grid-cols-12 bg-slate-50 px-4 py-3 text-xs font-extrabold text-slate-600">
              <div className="col-span-3">Invoice</div>
              <div className="col-span-3">Party</div>
              <div className="col-span-2">Date</div>
              <div className="col-span-2 text-right">Total</div>
              <div className="col-span-2 text-right">Action</div>
            </div>

            {invoices.map((inv) => {
              const t = calcInvoiceTotals(inv);
              return (
                <div key={inv.id} className="grid grid-cols-12 border-t bg-white px-4 py-4">
                  <div className="col-span-3">
                    <p className="text-sm font-black text-slate-900">{inv.id}</p>
                    <p className="text-xs font-bold text-slate-500">
                      Due {formatINR(t.due)}
                    </p>
                  </div>
                  <div className="col-span-3">
                    <p className="text-sm font-extrabold text-slate-900">{inv.party}</p>
                    <p className="text-xs font-bold text-slate-500">
                      Items: {inv.items.length}
                    </p>
                  </div>
                  <div className="col-span-2 text-sm font-bold text-slate-700">
                    {inv.date}
                  </div>
                  <div className="col-span-2 text-right text-sm font-black text-slate-900">
                    {formatINR(t.total)}
                  </div>
                  <div className="col-span-2 flex justify-end gap-2">
                    <button className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-extrabold text-slate-900 hover:bg-slate-50">
                      Print
                    </button>
                    <button className="rounded-xl bg-slate-900 px-3 py-2 text-xs font-extrabold text-white hover:bg-slate-800">
                      Edit
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      )}
    </div>
  );
}

function InventoryUI({ products }: { products: Product[] }) {
  const totalSku = products.length;
  const totalStockValue = products.reduce((s, p) => s + p.stock * p.mrp, 0);
  const low = products.filter((p) => p.stock <= p.min);

  return (
    <div className="space-y-6">
      <SectionTitle
        title="Inventory"
        subtitle="Simple stock management that staff can use easily."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Stat label="Total Products" value={`${totalSku}`} />
        <Stat label="Low Stock Alerts" value={`${low.length}`} />
        <Stat label="Stock Value (MRP)" value={formatINR(totalStockValue)} />
      </div>

      <Card
        title="Stock List"
        subtitle="Search, update stock, and export Excel."
        right={
          <div className="flex gap-2">
            <button className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-xs font-extrabold text-slate-900 hover:bg-slate-50">
              Import Excel
            </button>
            <button className="rounded-2xl bg-slate-900 px-4 py-2 text-xs font-extrabold text-white hover:bg-slate-800">
              + Add Product
            </button>
          </div>
        }
      >
        <div className="grid gap-3 md:grid-cols-3">
          <Field label="Search Product" placeholder="Name / SKU / barcode" />
          <Select label="Filter" items={["All", "Low Stock", "In Stock"]} />
          <Select label="Sort" items={["Newest", "Name", "Stock Low→High"]} />
        </div>

        <div className="mt-5 overflow-hidden rounded-3xl border border-slate-200">
          <div className="grid grid-cols-12 bg-slate-50 px-4 py-3 text-xs font-extrabold text-slate-600">
            <div className="col-span-4">Product</div>
            <div className="col-span-2">SKU</div>
            <div className="col-span-2 text-right">MRP</div>
            <div className="col-span-2 text-right">Stock</div>
            <div className="col-span-2 text-right">Action</div>
          </div>

          {products.map((p) => {
            const isLow = p.stock <= p.min;
            return (
              <div key={p.sku} className="grid grid-cols-12 border-t bg-white px-4 py-4">
                <div className="col-span-4">
                  <p className="text-sm font-black text-slate-900">{p.name}</p>
                  <p className="text-xs font-bold text-slate-500">
                    Min: {p.min} {isLow ? "• Low Stock" : ""}
                  </p>
                </div>
                <div className="col-span-2 text-sm font-bold text-slate-700">{p.sku}</div>
                <div className="col-span-2 text-right text-sm font-black text-slate-900">
                  {formatINR(p.mrp)}
                </div>
                <div className="col-span-2 text-right">
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full border px-3 py-1 text-xs font-extrabold",
                      isLow
                        ? "border-red-200 bg-red-50 text-red-700"
                        : "border-slate-200 bg-slate-50 text-slate-700"
                    )}
                  >
                    {p.stock}
                  </span>
                </div>
                <div className="col-span-2 flex justify-end gap-2">
                  <button className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-extrabold text-slate-900 hover:bg-slate-50">
                    Adjust
                  </button>
                  <button className="rounded-xl bg-slate-900 px-3 py-2 text-xs font-extrabold text-white hover:bg-slate-800">
                    Edit
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

function PartiesUI({ parties }: { parties: Party[] }) {
  const receivable = parties
    .filter((p) => p.balance > 0)
    .reduce((s, p) => s + p.balance, 0);

  const payable = parties
    .filter((p) => p.balance < 0)
    .reduce((s, p) => s + Math.abs(p.balance), 0);

  return (
    <div className="space-y-6">
      <SectionTitle
        title="Parties"
        subtitle="Customer and vendor ledger with clean balance tracking."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Stat label="Total Parties" value={`${parties.length}`} />
        <Stat label="Receivable" value={formatINR(receivable)} />
        <Stat label="Payable" value={formatINR(payable)} />
      </div>

      <Card
        title="Party List"
        subtitle="Balances, phone, and quick ledger access."
        right={
          <div className="flex gap-2">
            <button className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-xs font-extrabold text-slate-900 hover:bg-slate-50">
              Export
            </button>
            <button className="rounded-2xl bg-slate-900 px-4 py-2 text-xs font-extrabold text-white hover:bg-slate-800">
              + Add Party
            </button>
          </div>
        }
      >
        <div className="grid gap-3 md:grid-cols-3">
          <Field label="Search Party" placeholder="Name / phone" />
          <Select label="Type" items={["All", "Customer", "Vendor"]} />
          <Select label="Balance" items={["All", "Receivable", "Payable"]} />
        </div>

        <div className="mt-5 overflow-hidden rounded-3xl border border-slate-200">
          <div className="grid grid-cols-12 bg-slate-50 px-4 py-3 text-xs font-extrabold text-slate-600">
            <div className="col-span-4">Party</div>
            <div className="col-span-3">Type</div>
            <div className="col-span-3">Phone</div>
            <div className="col-span-2 text-right">Balance</div>
          </div>

          {parties.map((p) => (
            <div key={p.name} className="grid grid-cols-12 border-t bg-white px-4 py-4">
              <div className="col-span-4">
                <p className="text-sm font-black text-slate-900">{p.name}</p>
                <p className="text-xs font-bold text-slate-500">
                  Quick Ledger • Reminder support
                </p>
              </div>
              <div className="col-span-3 text-sm font-extrabold text-slate-700">
                {p.type}
              </div>
              <div className="col-span-3 text-sm font-bold text-slate-700">
                {p.phone || "—"}
              </div>
              <div className="col-span-2 text-right">
                <span
                  className={cn(
                    "inline-flex items-center rounded-full border px-3 py-1 text-xs font-extrabold",
                    p.balance > 0
                      ? "border-green-200 bg-green-50 text-green-700"
                      : p.balance < 0
                      ? "border-amber-200 bg-amber-50 text-amber-800"
                      : "border-slate-200 bg-slate-50 text-slate-700"
                  )}
                >
                  {p.balance < 0 ? "-" : ""}
                  {formatINR(Math.abs(p.balance))}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function PurchaseUI() {
  return (
    <div className="space-y-6">
      <SectionTitle
        title="Purchase"
        subtitle="Purchase entry updates stock automatically."
      />

      <Card title="New Purchase Entry" subtitle="Simple UI for staff.">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Vendor" placeholder="Search vendor" />
          <Field label="Invoice No." placeholder="Vendor bill no." />
          <Field label="Date" placeholder="Auto / pick date" />
          <Select label="Payment" items={["Unpaid", "Paid", "Partial"]} />
        </div>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-black text-slate-900">Items</p>
          <div className="mt-4 grid grid-cols-12 gap-2 text-xs font-extrabold text-slate-600">
            <div className="col-span-5">Product</div>
            <div className="col-span-2">Qty</div>
            <div className="col-span-2">Rate</div>
            <div className="col-span-2">GST %</div>
            <div className="col-span-1 text-right">Total</div>
          </div>

          {[1, 2].map((r) => (
            <div key={r} className="mt-2 grid grid-cols-12 gap-2">
              <input
                className="col-span-5 rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold"
                placeholder="Search product"
              />
              <input
                className="col-span-2 rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold"
                placeholder="1"
              />
              <input
                className="col-span-2 rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold"
                placeholder="0"
              />
              <input
                className="col-span-2 rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold"
                placeholder="5"
              />
              <div className="col-span-1 flex items-center justify-end text-sm font-black text-slate-900">
                ₹—
              </div>
            </div>
          ))}

          <div className="mt-5 flex justify-end gap-2">
            <button className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50">
              Save Draft
            </button>
            <button className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-extrabold text-white hover:bg-slate-800">
              Save Purchase
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}

function EmployeesUI({ employees }: { employees: Employee[] }) {
  const present = employees.filter((e) => e.present).length;
  const sales = employees.reduce((s, e) => s + e.salesToday, 0);

  return (
    <div className="space-y-6">
      <SectionTitle
        title="Employees"
        subtitle="Role-based access, attendance, and performance."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Stat label="Total Employees" value={`${employees.length}`} />
        <Stat label="Present Today" value={`${present}`} />
        <Stat label="Sales by Staff" value={formatINR(sales)} />
      </div>

      <Card
        title="Staff List"
        subtitle="Owner controls cashier, manager, and accountant permissions."
        right={
          <button className="rounded-2xl bg-slate-900 px-4 py-2 text-xs font-extrabold text-white hover:bg-slate-800">
            + Add Employee
          </button>
        }
      >
        <div className="overflow-hidden rounded-3xl border border-slate-200">
          <div className="grid grid-cols-12 bg-slate-50 px-4 py-3 text-xs font-extrabold text-slate-600">
            <div className="col-span-4">Name</div>
            <div className="col-span-3">Role</div>
            <div className="col-span-3">Attendance</div>
            <div className="col-span-2 text-right">Sales Today</div>
          </div>

          {employees.map((e) => (
            <div key={e.name} className="grid grid-cols-12 border-t bg-white px-4 py-4">
              <div className="col-span-4">
                <p className="text-sm font-black text-slate-900">{e.name}</p>
                <p className="text-xs font-bold text-slate-500">
                  Permissions • Activity log • Alerts
                </p>
              </div>
              <div className="col-span-3 text-sm font-extrabold text-slate-700">
                {e.role}
              </div>
              <div className="col-span-3">
                <span
                  className={cn(
                    "inline-flex items-center rounded-full border px-3 py-1 text-xs font-extrabold",
                    e.present
                      ? "border-green-200 bg-green-50 text-green-700"
                      : "border-slate-200 bg-slate-50 text-slate-600"
                  )}
                >
                  {e.present ? "Present" : "Absent"}
                </span>
              </div>
              <div className="col-span-2 text-right text-sm font-black text-slate-900">
                {formatINR(e.salesToday)}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function ReportsUI({ invoices }: { invoices: Invoice[] }) {
  const totals = useMemo(() => {
    const sub = invoices.reduce((s, inv) => s + calcInvoiceTotals(inv).sub, 0);
    const gst = invoices.reduce((s, inv) => s + calcInvoiceTotals(inv).gst, 0);
    const total = sub + gst;
    return { sub, gst, total };
  }, [invoices]);

  return (
    <div className="space-y-6">
      <SectionTitle
        title="Reports"
        subtitle="GST, sales, profit, and ledger summary."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Stat label="Total Sales" value={formatINR(totals.total)} />
        <Stat label="Total GST" value={formatINR(totals.gst)} />
        <Stat label="Net Sales" value={formatINR(totals.sub)} />
      </div>

      <Card
        title="GST Summary (Demo)"
        subtitle="Auto-calculated from invoices."
        right={
          <button className="rounded-2xl bg-slate-900 px-4 py-2 text-xs font-extrabold text-white hover:bg-slate-800">
            Download PDF
          </button>
        }
      >
        <div className="overflow-hidden rounded-3xl border border-slate-200">
          <div className="grid grid-cols-12 bg-slate-50 px-4 py-3 text-xs font-extrabold text-slate-600">
            <div className="col-span-4">Tax Slab</div>
            <div className="col-span-4 text-right">Taxable</div>
            <div className="col-span-4 text-right">GST</div>
          </div>

          {[
            { slab: "0%", taxable: 1650, gst: 0 },
            { slab: "5%", taxable: 18650, gst: 932.5 },
            { slab: "12%", taxable: 4200, gst: 504 },
            { slab: "18%", taxable: 1800, gst: 324 },
          ].map((r) => (
            <div key={r.slab} className="grid grid-cols-12 border-t bg-white px-4 py-4">
              <div className="col-span-4 text-sm font-black text-slate-900">{r.slab}</div>
              <div className="col-span-4 text-right text-sm font-extrabold text-slate-800">
                {formatINR(r.taxable)}
              </div>
              <div className="col-span-4 text-right text-sm font-black text-slate-900">
                {formatINR(r.gst)}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-extrabold text-slate-700">
            AI/ML Reports (Add-on)
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-600">
            Best-selling items, repeat customers, demand forecast, profit leak
            detection, and smart reorder.
          </p>
          <Link
            href={`${BASE}/plans/`}
            className="mt-2 inline-flex text-sm font-extrabold text-slate-900 underline underline-offset-4"
          >
            See AI plan →
          </Link>
        </div>
      </Card>
    </div>
  );
}

function SettingsUI() {
  return (
    <div className="space-y-6">
      <SectionTitle
        title="Settings"
        subtitle="Company profile, GST settings, templates, and user roles."
      />

      <Card
        title="Company & GST"
        subtitle="Configure invoice formats and business settings."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Business Name" placeholder="Demo Store" />
          <Field label="GSTIN" placeholder="22AAAAA0000A1Z5" />
          <Field label="Address" placeholder="City, State" />
          <Select
            label="Invoice Template"
            items={["Modern A4", "Classic A4", "Thermal 80mm", "Custom Format"]}
          />
        </div>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-black text-slate-900">Security & Deployment</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "On-Prem (Your office server or PC)",
              "Offline Billing (No internet required)",
              "Role-based access (cashier / manager)",
              "Auto backup + export (optional)",
            ].map((t) => (
              <div
                key={t}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-extrabold text-slate-800"
              >
                ✓ {t}
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card
        title="Invoice Templates"
        subtitle="Professional invoice styles for different businesses."
        right={
          <button className="rounded-2xl bg-slate-900 px-4 py-2 text-xs font-extrabold text-white hover:bg-slate-800">
            Preview PDF
          </button>
        }
      >
        <div className="grid gap-4 md:grid-cols-3">
          {["Modern", "Classic", "Thermal"].map((t) => (
            <div key={t} className="rounded-3xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-black text-slate-900">{t} Template</p>
              <div className="mt-4 h-28 rounded-2xl border border-slate-200 bg-slate-50" />
              <div className="mt-4 flex gap-2">
                <button className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-extrabold text-slate-900 hover:bg-slate-50">
                  Select
                </button>
                <button className="rounded-xl bg-slate-900 px-3 py-2 text-xs font-extrabold text-white hover:bg-slate-800">
                  Preview
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}