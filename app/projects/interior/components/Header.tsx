"use client";

import Link from "next/link";
import { useState } from "react";

const WHATSAPP =
  "https://wa.me/919752422686?text=Hi%20I%20want%20interior%20design%20for%20my%20home%2Foffice.%20Please%20share%20details.";
const CALL = "tel:+919752422686";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/90 border-b border-slate-200 shadow-sm">
      
      {/* TOP BAR */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 text-xs bg-slate-900 text-white">
        <div className="flex gap-4">
          <span>✔ Free Design Consultation</span>
          <span>✔ Residential & Commercial Interiors</span>
          <span>✔ Custom Design + Execution</span>
        </div>
        <div className="flex gap-4">
          <a href={CALL} className="hover:underline">📞 Call Now</a>
          <a href={WHATSAPP} className="hover:underline">💬 WhatsApp</a>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="flex items-center justify-between px-4 md:px-6 py-4">
        
        {/* LOGO */}
        <Link
          href="/projects/interior"
          className="text-xl md:text-2xl font-extrabold text-slate-900"
        >
          Interior<span className="text-indigo-600">Design</span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
          <Link href="/projects/interior">Home</Link>
          <Link href="/projects/interior/projects">Projects</Link>
          <Link href="/projects/interior/services">Services</Link>
          <Link href="/projects/interior/billing">Estimate</Link>
          <Link href="/projects/interior/contact">Contact</Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={CALL}
            className="px-4 py-2 rounded-lg border border-slate-300 text-sm font-semibold hover:bg-slate-100"
          >
            Call
          </a>
          <a
            href={WHATSAPP}
            className="px-5 py-2 rounded-lg bg-green-600 text-white text-sm font-bold hover:bg-green-700 shadow-md"
          >
            WhatsApp
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-700"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-white border-t">
          <Link href="/projects/interior" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/projects/interior/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/projects/interior/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/projects/interior/billing" onClick={() => setOpen(false)}>Estimate</Link>
          <Link href="/projects/interior/contact" onClick={() => setOpen(false)}>Contact</Link>

          <div className="flex gap-2 pt-3">
            <a href={CALL} className="w-full text-center border py-2 rounded-lg">
              Call
            </a>
            <a
              href={WHATSAPP}
              className="w-full text-center bg-green-600 text-white py-2 rounded-lg font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}