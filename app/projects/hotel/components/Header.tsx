"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type HeaderProps = {
  brand?: string;
  city?: string;
  callLink?: string;
  waLink?: string;
  tagline?: string;
};

const NAV_LINKS = [
  { label: "Home", href: "/projects/hotel" },
  { label: "Rooms", href: "/projects/hotel/Rooms" },
  { label: "Amenities", href: "/projects/hotel/Amenities" },
  { label: "Billing", href: "/projects/hotel/bill" },
  { label: "Contact", href: "/projects/hotel/contact" },
];

export default function Header({
  brand = "Hotel Royal Stay",
  city = "Raipur",
  tagline = "Luxury Stay • Family Comfort • Easy Booking",
  callLink = "tel:+919752422686",
  waLink = "https://wa.me/919752422686?text=Hi%20I%20want%20to%20book%20a%20room.%20Please%20share%20availability%20and%20price.",
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => setMobileOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  const isLight = scrolled;

  return (
    <header className="sticky top-0 z-50">
      <div
        className={[
          "border-b transition-all duration-300",
          isLight
            ? "border-slate-200 bg-white/90 shadow-sm backdrop-blur-xl"
            : "border-white/10 bg-slate-950/55 backdrop-blur-xl",
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link
            href="/projects/hotel"
            className="group flex min-w-0 items-center gap-3"
            aria-label={`${brand} home`}
          >
            <div className="relative shrink-0">
              <div
                className={[
                  "flex h-11 w-11 items-center justify-center rounded-2xl border text-base font-black shadow-sm transition-all duration-300",
                  isLight
                    ? "border-amber-200 bg-slate-900 text-white"
                    : "border-white/20 bg-white/10 text-white",
                ].join(" ")}
              >
                H
              </div>

              <div
                className={[
                  "absolute -inset-2 -z-10 rounded-3xl blur-xl transition-all duration-300",
                  isLight
                    ? "bg-gradient-to-r from-amber-200/45 via-yellow-100/20 to-transparent"
                    : "bg-gradient-to-r from-amber-200/25 via-white/10 to-transparent",
                ].join(" ")}
              />
            </div>

            <div className="min-w-0">
              <div
                className={[
                  "truncate text-base font-extrabold tracking-tight transition-colors md:text-lg",
                  isLight ? "text-slate-900" : "text-white",
                ].join(" ")}
              >
                {brand}
              </div>

              <div
                className={[
                  "truncate text-[11px] font-bold md:text-xs",
                  isLight ? "text-slate-500" : "text-white/80",
                ].join(" ")}
              >
                ✨ {tagline} • 📍 {city}
              </div>
            </div>
          </Link>

          <nav
            className={[
              "hidden items-center gap-7 text-sm font-bold lg:flex",
              isLight ? "text-slate-700" : "text-white/90",
            ].join(" ")}
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "transition-colors duration-200",
                  isLight
                    ? "hover:text-slate-950"
                    : "hover:text-white",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={callLink}
              className={[
                "hidden rounded-2xl border px-4 py-2 text-sm font-extrabold transition sm:inline-flex sm:items-center sm:justify-center",
                isLight
                  ? "border-slate-200 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50"
                  : "border-white/20 bg-white/10 text-white hover:bg-white/15",
              ].join(" ")}
            >
              Call Now
            </a>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-green-500 px-4 py-2 text-sm font-extrabold text-white shadow-sm transition hover:bg-green-600"
            >
              Book on WhatsApp
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className={[
                "inline-flex h-11 w-11 items-center justify-center rounded-2xl border lg:hidden",
                isLight
                  ? "border-slate-200 bg-white text-slate-900"
                  : "border-white/15 bg-white/10 text-white",
              ].join(" ")}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              <span className="text-lg font-black">{mobileOpen ? "×" : "☰"}</span>
            </button>
          </div>
        </div>

        <div
          className={[
            "overflow-hidden transition-all duration-300 lg:hidden",
            mobileOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6">
            <div
              className={[
                "rounded-3xl border p-3 shadow-sm",
                isLight
                  ? "border-slate-200 bg-white"
                  : "border-white/10 bg-white/10 backdrop-blur-xl",
              ].join(" ")}
            >
              <div className="grid grid-cols-2 gap-2">
                {NAV_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={[
                      "rounded-2xl px-4 py-3 text-sm font-extrabold transition",
                      isLight
                        ? "bg-slate-50 text-slate-800 hover:bg-slate-100"
                        : "bg-white/10 text-white hover:bg-white/15",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 sm:hidden">
                <a
                  href={callLink}
                  className={[
                    "rounded-2xl px-4 py-3 text-center text-sm font-extrabold transition",
                    isLight
                      ? "border border-slate-200 bg-white text-slate-900"
                      : "border border-white/15 bg-white/10 text-white",
                  ].join(" ")}
                >
                  Call
                </a>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-green-500 px-4 py-3 text-center text-sm font-extrabold text-white transition hover:bg-green-600"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}