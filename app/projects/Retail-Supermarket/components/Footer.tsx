import Link from "next/link";

const WHATSAPP =
  "https://wa.me/919752422686?text=Hi%20I%20want%20a%20Retail%20Supermarket%20Website%20%2B%20Billing%20System.%20Please%20share%20price%2C%20features%20and%20delivery%20time.";

const CALL = "tel:+919752422686";

const quickLinks = [
  { label: "Home", href: "/projects/Retail-Supermarket" },
  { label: "Products", href: "/projects/Retail-Supermarket/products" },
  { label: "Services", href: "/projects/Retail-Supermarket/services" },
  { label: "Billing", href: "/projects/Retail-Supermarket/billing" },
  { label: "Contact", href: "/projects/Retail-Supermarket/contact" },
];

const serviceLinks = [
  "Retail Supermarket Website",
  "Grocery Store Website",
  "GST Billing Demo",
  "Product Showcase Pages",
  "WhatsApp Inquiry Setup",
  "Home Delivery Flow",
];

const trustPoints = [
  "20+ Years Business Trust",
  "Fast Setup & Delivery",
  "Client-Friendly Demo Pages",
  "Mobile-Optimized Design",
  "Sales-Focused Website Flow",
  "Support After Delivery",
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-950 text-slate-300">
      {/* CTA STRIP */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-6 py-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-green-400">
              Ready to Start
            </p>
            <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
              Want This Retail Supermarket Website for Your Business?
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
              Get a premium supermarket website with products, services, billing
              page and strong WhatsApp-first conversion setup.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-green-900/30 transition hover:-translate-y-0.5 hover:from-green-700 hover:to-emerald-700"
            >
              WhatsApp Now
            </a>
            <a
              href={CALL}
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-extrabold text-white transition hover:border-slate-500 hover:bg-slate-800"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-2 xl:grid-cols-4">
        {/* BRAND */}
        <div>
          <div className="inline-flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-lg font-black text-white shadow-lg">
              SM
            </div>
            <div>
              <h2 className="text-xl font-black text-white">
                SuperMart<span className="text-green-400">Pro</span>
              </h2>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Retail Supermarket Demo
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            Complete retail supermarket website solution with product pages,
            service pages, billing demo and direct WhatsApp conversion flow for
            grocery stores, kirana shops and mini marts.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-green-600 px-5 py-2.5 text-sm font-extrabold text-white transition hover:bg-green-700"
            >
              WhatsApp
            </a>
            <a
              href={CALL}
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-2.5 text-sm font-extrabold text-white transition hover:border-slate-500 hover:bg-slate-900"
            >
              Call
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-black text-white">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex font-semibold text-slate-400 transition hover:text-green-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-black text-white">What This Demo Includes</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {serviceLinks.map((item) => (
              <li key={item} className="font-semibold text-slate-400">
                ✓ {item}
              </li>
            ))}
          </ul>
        </div>

        {/* TRUST */}
        <div>
          <h3 className="text-lg font-black text-white">Why Choose Us</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {trustPoints.map((item) => (
              <li key={item} className="font-semibold text-slate-400">
                ✓ {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-center text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:text-left">
          <p>
            © {new Date().getFullYear()} Global Computers & IT Solutions. All rights reserved.
          </p>
          <p>
            Retail Supermarket Website Demo • Grocery • Billing • WhatsApp Sales
          </p>
        </div>
      </div>
    </footer>
  );
}