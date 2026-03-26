"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "919752422686";
const PHONE_NUMBER = "+919752422686";

const BASE_PATH = "/projects/car-Rental";

const ROUTES = {
  home: `${BASE_PATH}`,
  rate: `${BASE_PATH}/rate`,
  book: `${BASE_PATH}/booknow`,
  billing: `${BASE_PATH}/billing`,
  about: `${BASE_PATH}/aboutus`,
  contact: `${BASE_PATH}/contractus`,
};

const whatsappMessage = encodeURIComponent(
  "Hello, I want this Car Rental website demo for ₹5000/-"
);
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

const nav = [
  { label: "Home", href: ROUTES.home },
  { label: "Rates", href: ROUTES.rate },
  { label: "Book Now", href: ROUTES.book },
  { label: "Billing", href: ROUTES.billing },
  { label: "About", href: ROUTES.about },
  { label: "Contact", href: ROUTES.contact },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === ROUTES.home) {
      return pathname === ROUTES.home;
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand */}
          <Link href={ROUTES.home} className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 font-black text-white">
              CR
            </div>
            <div className="leading-tight">
              <div className="text-sm font-extrabold text-slate-900 sm:text-base">
                Car Rental / Taxi Service
              </div>
              <div className="text-[11px] text-slate-500">
                Demo • Local SEO • Booking Flow
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "rounded-xl px-3 py-2 text-sm font-semibold transition",
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
              href={`tel:${PHONE_NUMBER}`}
              className="hidden rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:inline-flex"
            >
              Call: 97524 22686
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-xl bg-green-600 px-4 py-2 text-sm font-extrabold text-white transition hover:bg-green-700 sm:inline-flex"
              title="WhatsApp: Get this website @ ₹5000"
            >
              WhatsApp ₹5000
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 transition hover:bg-slate-50 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span className="text-xl">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="pb-4 md:hidden">
            <div className="mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="grid gap-1 p-3">
                {nav.map((item) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={[
                        "rounded-xl px-3 py-2 text-sm font-semibold transition",
                        active
                          ? "bg-slate-900 text-white"
                          : "text-slate-700 hover:bg-slate-100",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <div className="my-2 h-px bg-slate-200" />

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  📞 Call: 97524 22686
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-green-600 px-3 py-2 text-sm font-extrabold text-white transition hover:bg-green-700"
                >
                  💬 WhatsApp: Get this website @ ₹5000
                </a>

                <Link
                  href={ROUTES.book}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-extrabold text-slate-800 transition hover:bg-slate-50"
                >
                  ✅ View Booking Flow
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}