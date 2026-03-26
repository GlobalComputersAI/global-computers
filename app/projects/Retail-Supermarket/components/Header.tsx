"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const WHATSAPP =
  "https://wa.me/919752422686?text=Hi%20I%20want%20a%20Retail%20Supermarket%20Website%20%2B%20Billing%20System.%20Please%20share%20price%2C%20features%20and%20delivery%20time.";

const CALL = "tel:+919752422686";

const navLinks = [
  { label: "Home", href: "/projects/Retail-Supermarket" },
  { label: "Products", href: "/projects/Retail-Supermarket/products" },
  { label: "Services", href: "/projects/Retail-Supermarket/services" },
  { label: "Billing", href: "/projects/Retail-Supermarket/billing" },
  { label: "Contact", href: "/projects/Retail-Supermarket/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80">
      {/* TOP BAR */}
      <div className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-[11px] font-bold sm:px-6 sm:text-xs">
          <span className="truncate">✔ Same Day Setup Available</span>
          <span className="hidden sm:inline truncate">
            ✔ Website + Billing + WhatsApp Inquiry Setup
          </span>
          <span className="truncate">✔ Retail Business Ready Demo</span>
        </div>
      </div>

      {/* MAIN BAR */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* LOGO */}
        <div className="flex min-w-0 items-center gap-3">
          <Link
            href="/projects/Retail-Supermarket"
            className="group inline-flex items-center gap-3"
            aria-label="SuperMartPro Home"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-lg font-black text-white shadow-lg shadow-green-200 transition-transform duration-300 group-hover:scale-105">
              SM
            </div>
            <div className="min-w-0">
              <p className="truncate text-lg font-black leading-none text-slate-900 sm:text-xl">
                SuperMart<span className="text-green-700">Pro</span>
              </p>
              <p className="truncate text-[11px] font-semibold text-slate-500 sm:text-xs">
                Retail Supermarket Website Demo
              </p>
            </div>
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-bold text-slate-700 transition-all duration-200 hover:bg-green-50 hover:text-green-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={CALL}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-extrabold text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-green-300 hover:bg-slate-50"
          >
            Call Now
          </a>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-emerald-600 px-5 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-green-200 transition-all duration-200 hover:-translate-y-0.5 hover:from-green-700 hover:to-emerald-700"
          >
            WhatsApp
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-800 shadow-sm transition md:hidden"
        >
          <span className="text-2xl leading-none">{open ? "×" : "☰"}</span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <nav className="grid gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800 transition hover:border-green-200 hover:bg-green-50 hover:text-green-700"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 grid gap-3">
              <a
                href={CALL}
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-extrabold text-slate-800"
              >
                Call Now
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-3 text-sm font-extrabold text-white shadow-lg shadow-green-200"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}