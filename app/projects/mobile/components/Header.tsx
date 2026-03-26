"use client";

import Link from "next/link";
import { useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/919752422686?text=Hi%20I%20want%20a%20new%20mobile%20shop%20website%20demo%20for%20my%20business.%20Please%20share%20details.";
const CALL_URL = "tel:+919752422686";

const navLinks = [
  { href: "/projects/mobile", label: "Home" },
  { href: "/projects/mobile/products", label: "Products" },
  { href: "/projects/mobile/services", label: "Services" },
  { href: "/projects/mobile/billing", label: "Billing" },
  { href: "/projects/mobile/contact", label: "Contact" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-5 w-6 flex-col justify-between">
      <span
        className={`block h-[2px] w-full rounded-full bg-slate-900 transition-all duration-300 ${
          open ? "translate-y-[9px] rotate-45" : ""
        }`}
      />
      <span
        className={`block h-[2px] w-full rounded-full bg-slate-900 transition-all duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`block h-[2px] w-full rounded-full bg-slate-900 transition-all duration-300 ${
          open ? "-translate-y-[9px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/75">
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-[11px] font-semibold sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Same Day Delivery Available
            </span>
            <span className="hidden sm:inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Repair • Sales • Accessories • Exchange
            </span>
          </div>
          <a
            href={CALL_URL}
            className="shrink-0 text-white/95 transition hover:text-white"
            aria-label="Call now for mobile shop demo"
          >
            Call: +91 97524 22686
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[78px] items-center justify-between gap-4">
          <Link
            href="/projects/mobile"
            className="group flex min-w-0 items-center gap-3"
            aria-label="Go to Mobile Shop demo homepage"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-lg font-black text-white shadow-lg shadow-slate-300/40">
              M
            </div>

            <div className="min-w-0">
              <div className="truncate text-base font-black tracking-tight text-slate-950 sm:text-lg">
                Mobile Shop Demo
              </div>
              <div className="truncate text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500 sm:text-xs">
                Global Computers & IT Solutions
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={CALL_URL}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-bold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
              aria-label="Call now"
            >
              Call Now
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-300/50 transition hover:-translate-y-0.5 hover:bg-slate-800"
              aria-label="Chat on WhatsApp"
            >
              WhatsApp Now
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <nav className="grid gap-2" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 grid gap-3">
              <a
                href={CALL_URL}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-4 py-3 text-sm font-bold text-slate-900"
                aria-label="Call now"
              >
                Call Now
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white"
                aria-label="Chat on WhatsApp"
              >
                WhatsApp Now
              </a>
            </div>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-bold text-slate-900">
                Need a high-converting mobile shop website?
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Get product showcase, repair enquiry, accessories sales, billing page,
                WhatsApp leads, and local SEO setup.
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}