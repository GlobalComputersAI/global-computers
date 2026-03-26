"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const BRAND_NAME = "Global Computers & IT Solutions";
const BASE = "/projects/builder";

const CALL_LINK = "tel:+919752422686";
const WHATSAPP_LINK =
  "https://wa.me/919752422686?text=Hi%20I%20want%20a%20Builder%20%2F%20Real%20Estate%20Website.%20Please%20share%20demo%2C%20pricing%2C%20features%2C%20and%20delivery%20time.";

const NAV_ITEMS = [
  { label: "Home", href: `${BASE}/` },
  { label: "Projects", href: `${BASE}/projects/` },
  { label: "Project Details", href: `${BASE}/project-details/` },
  { label: "Pricing", href: `${BASE}/Bill/` },
  { label: "Contact", href: `${BASE}/Contactus/` },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function BuilderHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "border-b border-amber-100/80 bg-white/95 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur"
            : "bg-white/90 backdrop-blur"
        )}
      >
        <div className="border-b border-slate-200 bg-slate-950 text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
            <p className="truncate text-[11px] font-bold uppercase tracking-[0.18em] text-white/80 sm:text-xs">
              Builder & Real Estate Website Demo • WhatsApp Leads • Premium Project Showcase
            </p>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={CALL_LINK}
                className="text-xs font-extrabold text-white/90 transition hover:text-white"
                aria-label="Call now for builder website demo"
              >
                Call Now
              </a>
              <span className="h-4 w-px bg-white/20" />
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-extrabold text-emerald-300 transition hover:text-emerald-200"
                aria-label="Chat on WhatsApp for builder website"
              >
                WhatsApp Demo
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex min-h-[78px] items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-4">
              <Link
                href={`${BASE}/`}
                className="group inline-flex items-center gap-3"
                aria-label="Go to Builder Website home page"
                onClick={() => setMenuOpen(false)}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 text-sm font-black text-slate-950 shadow-sm ring-1 ring-amber-200">
                  GC
                </div>

                <div className="min-w-0">
                  <p className="truncate text-[11px] font-extrabold uppercase tracking-[0.2em] text-amber-700">
                    Premium Builder Demo
                  </p>
                  <p className="truncate text-sm font-black text-slate-950 sm:text-base">
                    {BRAND_NAME}
                  </p>
                </div>
              </Link>
            </div>

            <nav
              className="hidden items-center gap-1 lg:flex"
              aria-label="Primary navigation"
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-extrabold text-slate-700 transition hover:bg-amber-50 hover:text-slate-950"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={CALL_LINK}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-slate-50"
                aria-label="Call for builder website pricing"
              >
                Call
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-green-600 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-green-700"
                aria-label="Get builder website brochure on WhatsApp"
              >
                WhatsApp Now
              </a>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 lg:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="builder-mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span className="relative h-5 w-5">
                <span
                  className={cn(
                    "absolute left-0 top-1 h-0.5 w-5 bg-current transition-all",
                    menuOpen && "top-2.5 rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-2.5 h-0.5 w-5 bg-current transition-all",
                    menuOpen && "opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-4 h-0.5 w-5 bg-current transition-all",
                    menuOpen && "top-2.5 -rotate-45"
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm transition lg:hidden",
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="builder-mobile-menu"
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-[88%] max-w-sm border-l border-slate-200 bg-white shadow-2xl transition-transform duration-300 lg:hidden",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-5">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-amber-700">
              Builder Website
            </p>
            <p className="mt-1 text-base font-black text-slate-950">
              Premium Demo Menu
            </p>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900"
            aria-label="Close mobile menu"
          >
            ✕
          </button>
        </div>

        <div className="flex h-[calc(100%-81px)] flex-col">
          <nav className="flex-1 px-4 py-4" aria-label="Mobile primary navigation">
            <div className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-3xl border border-slate-200 bg-white px-4 py-4 text-sm font-extrabold text-slate-900 transition hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-6 rounded-[28px] border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-yellow-50 p-5">
              <p className="text-sm font-black text-slate-950">
                Need a high-conversion builder website?
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                Get project showcase pages, WhatsApp leads, pricing section,
                brochure CTA, and premium design for your builder business.
              </p>
            </div>
          </nav>

          <div className="border-t border-slate-200 p-4">
            <div className="grid grid-cols-1 gap-3">
              <a
                href={CALL_LINK}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-center text-sm font-extrabold text-slate-900"
                onClick={() => setMenuOpen(false)}
              >
                Call Now
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-green-600 px-5 py-3 text-center text-sm font-extrabold text-white"
                onClick={() => setMenuOpen(false)}
              >
                WhatsApp Demo
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}