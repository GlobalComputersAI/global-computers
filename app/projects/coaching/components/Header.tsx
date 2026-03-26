"use client";

import Link from "next/link";
import { useState } from "react";

const WHATSAPP =
  "https://wa.me/919752422686?text=Hi%20I%20want%20to%20know%20more%20about%20your%20coaching%20courses%2C%20results%2C%20billing%2C%20and%20contact%20details.";
const CALL = "tel:+919752422686";

const navItems = [
  { label: "Home", href: "/projects/coaching/" },
  { label: "Courses", href: "/projects/coaching/courses/" },
  { label: "Results", href: "/projects/coaching/results/" },
  { label: "Billing", href: "/projects/coaching/billing/" },
  { label: "Contact", href: "/projects/coaching/contact/" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80">
      {/* Top Bar */}
      <div className="border-b border-indigo-500/20 bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-600 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-2 text-center text-xs font-semibold sm:flex-row sm:text-left sm:px-6 lg:px-8">
          <span className="text-white/95">
            Premium Coaching Demo • Courses • Results • Billing
          </span>
          <span className="text-white/90">
            WhatsApp Enquiry • Demo Class • Fast Contact
          </span>
        </div>
      </div>

      {/* Main Header */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/projects/coaching/"
          className="group flex items-center gap-3"
          aria-label="BrightFuture Coaching Home"
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-indigo-700 text-sm font-black text-white shadow-lg shadow-indigo-200 transition group-hover:scale-105 group-hover:bg-indigo-800">
            BF
          </span>

          <span className="block">
            <span className="block text-[1.08rem] font-extrabold tracking-tight text-slate-900 sm:text-xl">
              BrightFuture{" "}
              <span className="text-indigo-700">Coaching</span>
            </span>
            <span className="hidden text-[11px] font-medium tracking-wide text-slate-500 sm:block">
              Premium coaching institute demo website
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-indigo-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={CALL}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
          >
            Call Now
          </a>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-green-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-green-100 transition hover:scale-[1.02] hover:bg-green-700"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm font-bold text-slate-800 shadow-sm transition hover:bg-slate-50 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-indigo-700"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <a
                href={CALL}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-3 text-center text-sm font-bold text-slate-800 transition hover:bg-slate-50"
              >
                Call Now
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-green-600 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-green-700"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}