"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { label: "Home", href: "/projects/car-Rental" },
  { label: "Rates", href: "/projects/car-Rental/rate" },
  { label: "Book Now", href: "/projects/car-Rental/booknow" },
  { label: "Billing", href: "/projects/car-Rental/billing" },
  { label: "About", href: "/projects/car-Rental/aboutus" },
  { label: "Contact", href: "/projects/car-Rental/contractus" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // close drawer on route change
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between gap-4">
          {/* Brand */}
          <Link href="/projects/car-Rental" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black">
              CR
            </div>
            <div className="leading-tight">
              <div className="text-sm sm:text-base font-extrabold text-slate-900">
                Car Rental / Taxi Service
              </div>
              <div className="text-[11px] text-slate-500">
                Demo • Local SEO • Booking Flow
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "px-3 py-2 rounded-xl text-sm font-semibold transition",
                    active
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-slate-100",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <a
              href="tel:+919752422686"
              className="hidden sm:inline-flex px-3 py-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              Call: 97524 22686
            </a>

            <Link
              href="/projects/car-Rental/booknow"
              className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-green-600 text-white text-sm font-extrabold hover:bg-green-700 transition"
            >
              Get Quote
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-slate-200 hover:bg-slate-50 transition"
              aria-label="Open menu"
            >
              <span className="text-xl">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="mt-2 rounded-2xl border border-slate-200 bg-white overflow-hidden">
              <div className="p-3 grid gap-1">
                {nav.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={[
                        "px-3 py-2 rounded-xl text-sm font-semibold transition",
                        active
                          ? "bg-slate-900 text-white"
                          : "text-slate-700 hover:bg-slate-100",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <div className="h-px bg-slate-200 my-2" />

                <a
                  href="tel:+919752422686"
                  className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100 transition"
                >
                  📞 Call: 97524 22686
                </a>

                <Link
                  href="/projects/car-Rental/booknow"
                  className="px-3 py-2 rounded-xl text-sm font-extrabold bg-green-600 text-white hover:bg-green-700 transition"
                >
                  ✅ Get Quote / Book
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
