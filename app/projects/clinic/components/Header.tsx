"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const WHATSAPP =
  "https://wa.me/919752422686?text=Hi%20I%20want%20to%20book%20a%20clinic%20appointment.";
const CALL = "tel:+919752422686";

const navItems = [
  { label: "Home", href: "/projects/clinic" },
  { label: "Services", href: "/projects/clinic/services" },
  { label: "Appointment", href: "/projects/clinic/appointment" },
  { label: "Billing", href: "/projects/clinic/billing" },
  { label: "Contact", href: "/projects/clinic/contact" },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/projects/clinic") return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
      {/* TOP TRUST BAR */}
      <div className="bg-gradient-to-r from-slate-900 via-cyan-800 to-blue-700 text-white">
        <div className="mx-auto flex min-h-[40px] w-full max-w-7xl items-center justify-between gap-3 px-4 text-[11px] font-bold sm:text-xs">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>Same Day Appointment Available</span>
            <span>Trusted Patient Care</span>
            <span>Professional Clinic Billing</span>
          </div>
          <a
            href={CALL}
            className="hidden whitespace-nowrap text-white/95 transition hover:text-white sm:inline-flex"
          >
            Call: +91 97524 22686
          </a>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3">
        {/* LOGO */}
        <Link
          href="/projects/clinic"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-600 via-blue-600 to-slate-900 text-sm font-black text-white shadow-lg shadow-cyan-500/20">
            CC
          </div>

          <div className="leading-tight">
            <div className="text-lg font-black tracking-tight text-slate-900">
              ClinicCare
            </div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Modern Clinic Demo
            </div>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-bold transition",
                isActive(item.href)
                  ? "bg-blue-600 text-white shadow-[0_10px_25px_rgba(37,99,235,0.25)]"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={CALL}
            className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-slate-300 bg-white px-5 text-sm font-extrabold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
          >
            Call Now
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-5 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(34,197,94,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(34,197,94,0.34)]"
          >
            Book on WhatsApp
          </a>
        </div>

        {/* MOBILE RIGHT */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[40px] items-center justify-center rounded-full bg-green-500 px-4 text-xs font-extrabold text-white shadow-md"
          >
            WhatsApp
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:bg-slate-50"
          >
            <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-slate-200 bg-white/95 px-4 pb-5 pt-3 shadow-[0_20px_50px_rgba(2,6,23,0.08)] lg:hidden">
          <nav className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-bold transition",
                  isActive(item.href)
                    ? "bg-blue-600 text-white"
                    : "bg-slate-50 text-slate-800 hover:bg-slate-100"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 grid gap-3">
            <a
              href={CALL}
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-slate-300 bg-white px-5 text-sm font-extrabold text-slate-800"
            >
              Call Now
            </a>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-5 text-sm font-extrabold text-white"
            >
              Book Appointment on WhatsApp
            </a>
          </div>

          <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-xs font-semibold text-slate-700">
            Fast booking, service details, appointment page, contact page, and
            real billing demo — all in one clinic website.
          </div>
        </div>
      )}
    </header>
  );
}