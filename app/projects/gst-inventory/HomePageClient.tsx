"use client";

import Link from "next/link";

const BASE = "/projects/gst-inventory";

const WHATSAPP =
  "https://wa.me/919752422686?text=Hi%20I%20want%20GST%20Billing%20%2B%20Inventory%20Software%20Demo.%20Please%20share%20plans%20and%20on-prem%20setup%20details.";

const MODULES = [
  {
    title: "Billing + CRUD",
    price: "₹8,000",
    desc: "Invoices, customer ledger, products, GST bill format, returns-ready base module.",
  },
  {
    title: "Inventory & Stock",
    price: "+ ₹3,000",
    desc: "Stock in/out, purchase entry, stock valuation, low-stock alerts, barcode-ready workflow.",
  },
  {
    title: "Employee Management",
    price: "+ ₹4,000",
    desc: "Staff roles, login permissions, attendance controls, operational access management.",
  },
  {
    title: "Android App Integration",
    price: "+ ₹7,000",
    desc: "Mobile billing, barcode scanning, shop-floor use, offline sync support.",
  },
  {
    title: "Web Dashboard",
    price: "+ ₹5,000",
    desc: "Admin reports, branch overview, owner monitoring, analytics-ready dashboard.",
  },
  {
    title: "AI / ML Business Insights",
    price: "+ ₹10,000",
    desc: "Trend analysis, sales insights, demand hints, product movement visibility.",
  },
];

const INDUSTRIES = [
  "Retail / Kirana / Supermarket",
  "Distributor / Wholesale",
  "Restaurant / Cafe",
  "Clinic / Pharmacy",
  "Hotel / Resort",
  "Gym / Fitness",
  "Showroom / Electronics",
  "Coaching / Institute",
  "Service Businesses",
];

const FEATURES = [
  "Offline Billing",
  "On-Prem Setup",
  "Role-Based Access",
  "Upgrade Anytime",
];

export default function HomePageClient() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-white to-slate-100">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-slate-200/40 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-slate-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 md:py-24 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-slate-900 px-4 py-1.5 text-sm font-extrabold text-white">
              On-Prem • Offline • GST Ready
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight text-slate-900 md:text-6xl">
              GST Billing & Inventory
              <span className="block text-slate-700">Software UI Demo</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-600">
              A modern GST billing and inventory software UI designed for
              <strong> retail, restaurant, distributor, clinic, gym, hotel, showroom, and service businesses</strong>.
              Built for on-prem deployment, offline billing, and future upgrades.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={`${BASE}/app/`}
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-8 py-4 text-base font-extrabold text-white transition hover:bg-slate-800"
              >
                🚀 Try Live Demo
              </Link>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-8 py-4 text-base font-extrabold text-slate-900 transition hover:bg-slate-100"
              >
                WhatsApp for Quote
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold text-slate-600">
              {FEATURES.map((item) => (
                <span key={item}>✓ {item}</span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
              <div className="border-b px-6 py-4 font-extrabold text-slate-700">
                Dashboard Preview
              </div>

              <div className="grid grid-cols-2 gap-4 p-6">
                {["Today Sales", "Low Stock", "GST Summary", "Top Products"].map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-slate-200 p-4 text-sm font-bold text-slate-700"
                  >
                    {t}
                    <div className="mt-2 h-2 rounded-full bg-slate-200" />
                  </div>
                ))}
              </div>

              <div className="border-t bg-slate-50 px-6 py-4 text-sm font-semibold text-slate-500">
                Clean UI • Fast Billing • Inventory Control • GST Reporting
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <h2 className="text-center text-3xl font-black text-slate-900 md:text-4xl">
          Modular Pricing – Start Small, Upgrade Anytime
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">
          Start with core billing today and add inventory, employees, Android,
          web dashboard, and AI insights later without changing the software.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((m) => (
            <div
              key={m.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-extrabold text-slate-900">{m.title}</h3>
              <p className="mt-2 text-2xl font-black text-slate-900">{m.price}</p>
              <p className="mt-4 text-sm font-semibold text-slate-600">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href={`${BASE}/plans/`}
            className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-8 py-4 text-base font-extrabold text-white transition hover:bg-slate-800"
          >
            View Plans & Modules
          </Link>
        </div>
      </section>

      <section className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <h2 className="text-center text-3xl font-black text-slate-900 md:text-4xl">
            Built for Every Type of Business
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">
            This GST billing and inventory software can be customized for local
            businesses, service businesses, retail stores, hospitality, and
            multi-counter operations.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 text-center font-extrabold text-slate-800"
              >
                {i}
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href={`${BASE}/industries/`}
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-8 py-4 text-base font-extrabold text-slate-900 transition hover:bg-slate-100"
            >
              Explore Industry Use Cases
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:py-24">
          <h2 className="text-3xl font-black md:text-4xl">
            See the Real Software UI
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Explore the live billing dashboard, inventory flow, reports, and
            setup possibilities for your business.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href={`${BASE}/app/`}
              className="rounded-2xl bg-white px-8 py-4 text-base font-extrabold text-slate-950 transition hover:bg-slate-100"
            >
              Open Live Demo
            </Link>

            <Link
              href={`${BASE}/compare/`}
              className="rounded-2xl border border-white/20 px-8 py-4 text-base font-extrabold transition hover:bg-white/10"
            >
              Compare Options
            </Link>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/20 px-8 py-4 text-base font-extrabold transition hover:bg-white/10"
            >
              Get Custom Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}