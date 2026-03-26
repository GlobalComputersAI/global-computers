"use client";

import Link from "next/link";
import { useState } from "react";

const BASE = "/projects/gst-inventory";

const WHATSAPP =
  "https://wa.me/919752422686?text=Hi%20I%20want%20GST%20Billing%20%2B%20Inventory%20Software.%20Please%20share%20comparison%20details%20and%20best%20plan%20for%20my%20business.%20My%20current%20software%20is%20____.";

type FocusKey = "tally" | "generic" | "custom";

function cn(...a: Array<string | false | null | undefined>) {
  return a.filter(Boolean).join(" ");
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

function Row({
  label,
  a,
  b,
  c,
}: {
  label: string;
  a: React.ReactNode;
  b: React.ReactNode;
  c: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 gap-3 border-t px-5 py-4">
      <div className="col-span-12 md:col-span-4">
        <p className="text-sm font-black text-slate-900">{label}</p>
      </div>
      <div className="col-span-12 grid grid-cols-1 gap-3 md:col-span-8 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
          {a}
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
          {b}
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
          {c}
        </div>
      </div>
    </div>
  );
}

const OPTIONS: Array<{ key: FocusKey; label: string }> = [
  { key: "tally", label: "Tally / Traditional Accounting" },
  { key: "generic", label: "Generic Market Software" },
  { key: "custom", label: "Our Premium UI + Custom Build" },
];

const WHY_CARDS = [
  {
    t: "Modern UI (Staff Love It)",
    d: "Clean screens, less confusion, faster billing and easier staff training.",
  },
  {
    t: "Start Small, Upgrade Anytime",
    d: "Begin with billing and add inventory, employees, Android, web, or AI later.",
  },
  {
    t: "On-Prem + Offline Option",
    d: "Works without internet when required, with your data staying under your control.",
  },
  {
    t: "Printer Setup Included",
    d: "We configure A4 and thermal printing properly as part of setup.",
  },
  {
    t: "Data Safety",
    d: "Backup, export, and access setup can be planned from day one.",
  },
  {
    t: "Complete Delivery",
    d: "Software, hardware, setup, support, and AMC can all be handled together.",
  },
];

export default function ComparePageClient() {
  const [focus, setFocus] = useState<FocusKey>("custom");

  const focusText =
    focus === "tally"
      ? "If you already use Tally, we can simplify the daily billing workflow and give operators cleaner, faster screens."
      : focus === "generic"
      ? "If you use a local market software, we can replace it with a cleaner UI, stronger support, and upgradeable modules."
      : "You get a modern UI system designed for fast daily work, with on-prem, offline, cloud, and upgrade-ready flexibility.";

  return (
    <main className="bg-slate-50">
      <section className="border-b bg-gradient-to-b from-white to-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-wrap justify-center gap-2">
            <Badge>On-Prem / Offline</Badge>
            <Badge>Printer Setup</Badge>
            <Badge>Data Safety</Badge>
            <Badge>Upgrade Modules</Badge>
          </div>

          <h1 className="mt-6 text-center text-3xl font-black text-slate-900 md:text-5xl">
            Compare Options
            <span className="block text-slate-700">
              Tally vs Market Software vs Our System
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-4xl text-center font-semibold text-slate-600">
            We do not fight brands. We build the best solution for{" "}
            <span className="font-extrabold text-slate-900">your real workflow</span>.
            Compare what changes when you move to a modern GST billing and
            inventory system.
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
              href={WHATSAPP.replace("____", encodeURIComponent("Tally / Other"))}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-green-600 px-7 py-4 text-sm font-extrabold text-white hover:bg-green-700"
            >
              WhatsApp for Best Plan
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-wrap justify-center gap-2">
          {OPTIONS.map((o) => (
            <button
              key={o.key}
              type="button"
              onClick={() => setFocus(o.key)}
              className={cn(
                "rounded-full border px-5 py-3 text-sm font-extrabold transition",
                focus === o.key
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
              )}
            >
              {o.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 text-center">
          <p className="text-sm font-semibold text-slate-700">{focusText}</p>
        </div>

        <div className="mt-10">
          <Card>
            <div className="border-b px-6 py-6">
              <p className="text-xs font-extrabold text-slate-500">
                Comparison Matrix
              </p>
              <h2 className="mt-1 text-2xl font-black text-slate-900">
                What’s Different?
              </h2>
              <p className="mt-2 text-sm font-semibold text-slate-600">
                These are the practical differences that business owners feel in daily use.
              </p>
            </div>

            <div className="bg-slate-50 px-5 py-4">
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-12 md:col-span-4">
                  <p className="text-xs font-extrabold text-slate-600">Feature</p>
                </div>
                <div className="col-span-12 grid grid-cols-1 gap-3 md:col-span-8 md:grid-cols-3">
                  <p className="text-xs font-extrabold text-slate-600">
                    Tally / Traditional
                  </p>
                  <p className="text-xs font-extrabold text-slate-600">
                    Generic Software
                  </p>
                  <p className="text-xs font-extrabold text-slate-600">
                    Our Premium System
                  </p>
                </div>
              </div>
            </div>

            <Row
              label="Ease of Use for Staff"
              a="Needs training, operator-heavy"
              b="Depends on vendor; often cluttered"
              c="Modern UI designed for fast daily use"
            />
            <Row
              label="Billing Speed at Counter"
              a="Okay, but not UI-first"
              b="Varies by product quality"
              c="Fast workflow with thermal and A4 format support"
            />
            <Row
              label="Inventory + Low Stock"
              a="Possible, but can feel complex"
              b="Sometimes available, often limited"
              c="Clean stock UI, purchase flow, and alerts"
            />
            <Row
              label="Role-Based Access"
              a="Limited for billing staff"
              b="Often basic"
              c="Owner, manager, cashier, and accountant roles"
            />
            <Row
              label="On-Prem / Offline"
              a="Strong on-prem option"
              b="Some offer it; inconsistent"
              c="On-prem and offline ready, with cloud optional"
            />
            <Row
              label="Printer Setup + Formats"
              a="Possible, but setup varies"
              b="Often paid or limited"
              c="Can be delivered with proper setup and templates"
            />
            <Row
              label="Data Safety + Backups"
              a="Mostly user-managed"
              b="Varies, often unclear"
              c="Backup and access workflow can be designed clearly"
            />
            <Row
              label="Android / Web Integration"
              a="Integration varies"
              b="Sometimes available, often unstable"
              c="Android and Web modules can be added later"
            />
            <Row
              label="Business Insights"
              a="Not typical"
              b="Rare"
              c="AI-ready insights and reporting modules possible"
            />
            <Row
              label="Support & Upgrades"
              a="Depends on partner"
              b="Depends on vendor"
              c="Direct support, optional AMC, and custom enhancements"
            />
          </Card>
        </div>
      </section>

      <section className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-center text-2xl font-black text-slate-900 md:text-3xl">
            Why Many Owners Choose a Modern System
          </h2>
          <p className="mx-auto mt-3 max-w-4xl text-center font-semibold text-slate-600">
            Good fit for retail, distributor, restaurant, clinic, showroom,
            hotel, gym, coaching, and service businesses.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WHY_CARDS.map((x) => (
              <div
                key={x.t}
                className="rounded-[28px] border border-slate-200 bg-slate-50 p-6"
              >
                <p className="text-lg font-black text-slate-900">{x.t}</p>
                <p className="mt-2 text-sm font-semibold text-slate-600">
                  {x.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <Card>
          <div className="border-b p-8">
            <h2 className="text-2xl font-black text-slate-900">
              Which Option is Best for You?
            </h2>
            <p className="mt-2 text-sm font-semibold text-slate-600">
              Simple guidance first. Final recommendation depends on your workflow.
            </p>
          </div>

          <div className="grid gap-6 p-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-lg font-black text-slate-900">
                If you already use Tally
              </p>
              <ul className="mt-4 space-y-3">
                <Tick>Keep accounting workflow if needed</Tick>
                <Tick>Modernize billing operator screens</Tick>
                <Tick>Improve printing and faster daily operation</Tick>
              </ul>
              <div className="mt-5">
                <Link
                  href={`${BASE}/plans/`}
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
                >
                  See Plans
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-lg font-black text-slate-900">
                If you use local market software
              </p>
              <ul className="mt-4 space-y-3">
                <Tick>Upgrade to a clean UI</Tick>
                <Tick>Get better support and optional AMC</Tick>
                <Tick>Add modules later as your business grows</Tick>
              </ul>
              <div className="mt-5">
                <Link
                  href={`${BASE}/app/`}
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                >
                  Try Demo UI
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-900 bg-slate-900 p-6 text-white">
              <p className="text-lg font-black">If you want the best long-term fit</p>
              <ul className="mt-4 space-y-3">
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-black text-slate-900">
                    ✓
                  </span>
                  <span className="text-sm font-semibold text-white/85">
                    Modern UI with on-prem, offline, and cloud flexibility
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-black text-slate-900">
                    ✓
                  </span>
                  <span className="text-sm font-semibold text-white/85">
                    Better delivery, setup, and future upgrade path
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-black text-slate-900">
                    ✓
                  </span>
                  <span className="text-sm font-semibold text-white/85">
                    Strong fit for business owners wanting speed and simplicity
                  </span>
                </li>
              </ul>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={WHATSAPP.replace(
                    "____",
                    encodeURIComponent("Best plan for my business")
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-green-600 px-6 py-3 text-center text-sm font-extrabold text-white hover:bg-green-700"
                >
                  WhatsApp for Recommendation
                </a>

                <Link
                  href={`${BASE}/plans/`}
                  className="rounded-2xl bg-white px-6 py-3 text-center text-sm font-extrabold text-slate-950 hover:bg-slate-100"
                >
                  Build Plan
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-black md:text-4xl">
            Try the UI. Then decide.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl font-semibold text-white/70">
            Most people understand the difference within a couple of minutes after
            seeing the live UI.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href={`${BASE}/app/`}
              className="rounded-2xl bg-white px-8 py-4 text-sm font-extrabold text-slate-950 hover:bg-slate-100"
            >
              Open Demo UI
            </Link>

            <a
              href={WHATSAPP.replace(
                "____",
                encodeURIComponent("Tally / Other software")
              )}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/20 px-8 py-4 text-sm font-extrabold hover:bg-white/10"
            >
              WhatsApp Now
            </a>

            <Link
              href={`${BASE}/contact/`}
              className="rounded-2xl border border-white/20 px-8 py-4 text-sm font-extrabold hover:bg-white/10"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}