"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const BASE = "/projects/restaurant";
const PHONE_DISPLAY = "+91 97524 22686";
const PHONE_TEL = "tel:+919752422686";

const WHATSAPP_MESSAGE =
  "Hi, I saw your Restaurant Website + Billing Demo. I want a restaurant website starting at ₹5,000. Please share full details.";
const WHATSAPP = `https://wa.me/919752422686?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const navItems = [
  { label: "Home", href: BASE },
  { label: "Menu", href: `${BASE}/menu` },
  { label: "Gallery", href: `${BASE}/gallery` },
  { label: "Contact", href: `${BASE}/contact` },
  { label: "Billing", href: `${BASE}/billing`, hot: true },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={[
          "mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-300",
          scrolled ? "pt-2" : "pt-4",
        ].join(" ")}
      >
        <div
          className={[
            "overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-300",
            scrolled
              ? "border-red-100 bg-white/90 shadow-lg shadow-red-100/40"
              : "border-white/70 bg-white/80 shadow-md shadow-slate-200/50",
          ].join(" ")}
        >
          {/* Top strip */}
          <div className="hidden md:flex items-center justify-center gap-3 border-b border-slate-200/70 bg-gradient-to-r from-red-50 via-orange-50 to-amber-50 px-6 py-2 text-center text-xs font-bold text-slate-700">
            <span>Restaurant Website from ₹5,000 + GST</span>
            <span className="text-slate-300">•</span>
            <span>WhatsApp Ordering Setup</span>
            <span className="text-slate-300">•</span>
            <span>Menu + Gallery + Contact + Billing Demo</span>
          </div>

          {/* Main nav */}
          <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
            <Link href={BASE} className="group flex min-w-0 items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-2xl ring-1 ring-red-100">
                <Image
                  src="/projects/food/pick-1.jpg"
                  alt="Restaurant demo by Global Computers"
                  fill
                  className="object-cover"
                  sizes="44px"
                  priority
                />
              </div>

              <div className="min-w-0 leading-tight">
                <div className="truncate text-sm font-extrabold text-slate-900 transition group-hover:text-red-600 sm:text-base">
                  Restaurant Website Demo
                </div>
                <div className="truncate text-[11px] text-slate-500 sm:text-xs">
                  Menu • Gallery • Contact • Billing • WhatsApp Orders
                </div>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  active={pathname === item.href}
                  hot={item.hot}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={PHONE_TEL}
                className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 font-bold text-slate-800 transition hover:bg-slate-50 sm:inline-flex"
                aria-label={`Call ${PHONE_DISPLAY}`}
                title={`Call ${PHONE_DISPLAY}`}
              >
                <span>📞</span>
                <span className="text-sm">Call Now</span>
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 px-4 py-2 font-extrabold text-white shadow-sm transition hover:from-green-700 hover:to-emerald-600"
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp"
              >
                <span>💬</span>
                <span className="text-sm">WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 font-extrabold text-slate-800 md:hidden"
                aria-label="Toggle mobile menu"
                aria-expanded={open}
              >
                {open ? "✕" : "☰"}
              </button>
            </div>
          </div>

          {/* Mobile nav */}
          {open && (
            <div className="border-t border-slate-200/70 bg-white md:hidden">
              <div className="flex flex-col gap-2 px-4 py-4">
                {navItems.map((item) => (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    active={pathname === item.href}
                    hot={item.hot}
                  >
                    {item.label}
                  </MobileLink>
                ))}

                <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <a
                    href={PHONE_TEL}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 font-extrabold text-slate-800"
                  >
                    📞 Call {PHONE_DISPLAY}
                  </a>

                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 px-4 py-3 font-extrabold text-white"
                  >
                    💬 WhatsApp Quote
                  </a>
                </div>

                <div className="rounded-xl bg-red-50 px-3 py-3 text-[11px] font-medium text-slate-600">
                  Best for restaurant owners who want direct orders, better Google presence,
                  and a professional online menu without paying marketplace commission.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
  active,
  hot,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  hot?: boolean;
}) {
  return (
    <Link
      href={href}
      className={[
        "rounded-xl px-4 py-2 text-sm font-extrabold transition",
        hot
          ? active
            ? "bg-red-700 text-white"
            : "bg-red-600 text-white hover:bg-red-700"
          : active
          ? "bg-slate-900 text-white"
          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  children,
  active,
  hot,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  hot?: boolean;
}) {
  return (
    <Link
      href={href}
      className={[
        "rounded-xl px-4 py-3 font-extrabold transition",
        hot
          ? active
            ? "bg-red-700 text-white"
            : "bg-red-600 text-white hover:bg-red-700"
          : active
          ? "border border-slate-900 bg-slate-900 text-white"
          : "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}