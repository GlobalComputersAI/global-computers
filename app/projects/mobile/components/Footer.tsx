import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/919752422686?text=Hi%20I%20want%20a%20mobile%20shop%20website%20demo%20for%20my%20business.%20Please%20share%20price%20and%20details.";
const CALL_URL = "tel:+919752422686";

const quickLinks = [
  { href: "/projects/mobile", label: "Home" },
  { href: "/projects/mobile/products", label: "Products" },
  { href: "/projects/mobile/services", label: "Services" },
  { href: "/projects/mobile/billing", label: "Billing" },
  { href: "/projects/mobile/contact", label: "Contact Us" },
];

const coreServices = [
  "Mobile Shop Website Design",
  "Repair & Service Lead Pages",
  "Accessories Showcase Pages",
  "WhatsApp Inquiry Integration",
  "GST Billing Demo Page",
  "Local SEO Setup",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_25%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg font-black text-slate-950 shadow-lg">
                  M
                </div>
                <div>
                  <p className="text-lg font-black tracking-tight">Mobile Shop Demo</p>
                  <p className="text-sm text-slate-300">
                    By Global Computers & IT Solutions
                  </p>
                </div>
              </div>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
                Premium mobile shop website demo designed to help stores sell more phones,
                accessories, repair services, exchange offers, and billing solutions with a
                modern trust-focused digital presence.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200">
                  Mobile Sales
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200">
                  Repair Leads
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200">
                  Accessories
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200">
                  Billing Demo
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-200"
                  aria-label="Get mobile website demo on WhatsApp"
                >
                  Get Demo on WhatsApp
                </a>
                <a
                  href={CALL_URL}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-white/10"
                  aria-label="Call now for mobile website demo"
                >
                  Call Now
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white/90">
                Quick Links
              </h3>
              <ul className="mt-5 space-y-3">
                {quickLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-300 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white/90">
                Our Solutions
              </h3>
              <ul className="mt-5 space-y-3">
                {coreServices.map((item) => (
                  <li key={item} className="text-sm text-slate-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white/90">
                Contact & Sales
              </h3>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                    Phone
                  </p>
                  <a
                    href={CALL_URL}
                    className="mt-2 block text-sm font-semibold text-white transition hover:text-slate-200"
                  >
                    +91 97524 22686
                  </a>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                    WhatsApp
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block text-sm font-semibold text-white transition hover:text-slate-200"
                  >
                    Chat for instant response
                  </a>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                    Best For
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    Mobile stores, smartphone retailers, repair shops, accessory sellers,
                    and multi-brand electronics businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <div className="flex flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
              <p>
                © {new Date().getFullYear()} Global Computers & IT Solutions. All rights
                reserved.
              </p>
              <p>
                Built for better trust, more enquiries, higher conversion, and faster
                local business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}