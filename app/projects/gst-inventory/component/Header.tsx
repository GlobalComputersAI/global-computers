"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavItem = { label: string; href: string };

const BASE = "/projects/gst-inventory";

const PHONE = "tel:+919752422686";
const WHATSAPP =
  "https://wa.me/919752422686?text=Hi%20I%20want%20a%20GST%20Billing%20%2B%20Inventory%20Software%20Demo.%20Please%20share%20plans%20and%20setup%20options%20(On-Prem%20%2F%20Cloud%20%2F%20Offline).";

const NAV: NavItem[] = [
  { label: "Home", href: `${BASE}/` },
  { label: "Try Demo", href: `${BASE}/app/` },
  { label: "Plans", href: `${BASE}/plans/` },
  { label: "Industries", href: `${BASE}/industries/` },
  { label: "Compare", href: `${BASE}/compare/` },
  { label: "Security", href: `${BASE}/security/` },
  { label: "Contact", href: `${BASE}/contact/` },
];

const INDUSTRIES = [
  "Retail / Kirana / Supermarket",
  "Distributor / Wholesale",
  "Restaurant / Cafe",
  "Clinic / Pharmacy",
  "Showroom / Electronics",
  "Service Businesses",
  "Hotel / Resort",
  "Gym / Fitness",
  "Coaching / Institute",
  "Interior / Contractor",
  "Mobile / Repair Shop",
  "HR / Staffing",
  "Any Local Business",
];

function cn(...a: Array<string | false | null | undefined>) {
  return a.filter(Boolean).join(" ");
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <span className="hidden md:inline-flex items-center rounded-lg border border-slate-200 bg-white px-2 py-1 text-[11px] font-black text-slate-500 shadow-sm">
      {children}
    </span>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-extrabold text-slate-100 backdrop-blur">
      {children}
    </span>
  );
}

export default function Header({
  brand = "GST Billing + Inventory Software Demo",
}: {
  brand?: string;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full",
        "backdrop-blur supports-[backdrop-filter]:bg-white/70",
        scrolled ? "border-b border-slate-200/80" : "border-b border-transparent"
      )}
    >
      <div className="bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
          <div className="flex items-center gap-2 overflow-hidden">
            <Pill>On-Prem Setup</Pill>
            <Pill>Offline Billing</Pill>
            <Pill>GST Reports</Pill>
            <Pill>Barcode Ready</Pill>
          </div>

          <div className="hidden items-center gap-3 text-xs font-bold text-white/80 md:flex">
            <span className="whitespace-nowrap">For every business:</span>

            <div className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold text-white hover:bg-white/15"
                aria-label="Industries covered"
              >
                Industries ▾
              </button>

              <div className="pointer-events-none absolute right-0 mt-2 w-[380px] rounded-2xl border border-white/10 bg-slate-950 opacity-0 shadow-2xl transition group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="p-4">
                  <p className="text-[11px] font-extrabold text-white/60">
                    Works for Retail, Services, Hospitality, Fitness, Healthcare,
                    B2B & more
                  </p>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {INDUSTRIES.map((t) => (
                      <div
                        key={t}
                        className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-[12px] font-bold text-white/90"
                      >
                        {t}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <Link
                      href={`${BASE}/industries/`}
                      className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-extrabold text-slate-950 hover:bg-slate-100"
                    >
                      View Industry Pages
                    </Link>

                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-extrabold text-white hover:bg-white/15"
                    >
                      WhatsApp for Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Kbd>Ctrl K</Kbd>
          </div>
        </div>
      </div>

      <div className="bg-white/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link href={`${BASE}/`} className="group flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm">
              <span className="text-sm font-black tracking-tight">GC</span>
              <span className="pointer-events-none absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 ring-2 ring-white" />
            </div>

            <div className="leading-tight">
              <div className="text-sm font-extrabold text-slate-900 group-hover:text-slate-950 sm:text-base">
                {brand}
              </div>
              <div className="text-[11px] font-bold text-slate-500">
                Billing • Inventory • Employees • Android/Web • AI Insights
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="rounded-xl px-3 py-2 text-sm font-extrabold text-slate-700 hover:bg-slate-100 hover:text-slate-950"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={PHONE}
              className="hidden items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-extrabold text-slate-900 hover:bg-slate-50 sm:inline-flex"
            >
              Call
            </a>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-green-600 px-4 py-2 text-sm font-extrabold text-white hover:bg-green-700"
            >
              WhatsApp
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-extrabold text-slate-900 hover:bg-slate-50 lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              <div className="grid grid-cols-2 gap-2">
                {NAV.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                  >
                    {n.label}
                  </Link>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-extrabold text-slate-700">
                  Built for every business type
                </p>

                <div className="mt-2 flex flex-wrap gap-2">
                  {INDUSTRIES.slice(0, 10).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[12px] font-bold text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                  <Link
                    href={`${BASE}/industries/`}
                    onClick={() => setOpen(false)}
                    className="rounded-full bg-slate-950 px-3 py-1 text-[12px] font-extrabold text-white"
                  >
                    + More
                  </Link>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <a
                  href={PHONE}
                  className="flex-1 inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                >
                  Call Now
                </a>

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center rounded-2xl bg-green-600 px-4 py-3 text-sm font-extrabold text-white hover:bg-green-700"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}