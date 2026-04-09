import Link from "next/link";

const SOFTWARE_PHONE_DISPLAY = "+91 97524 22686";
const SOFTWARE_PHONE_TEL = "+919752422686";

const HARDWARE_PHONE_DISPLAY = "+91 9827164811";
const HARDWARE_PHONE_TEL = "+919827164811";

const EMAIL = "infoglobalcomputersit@gmail.com";
const WEBSITE = "globalcomputers.net";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { label: "Hardware", href: "/it-hardware-supply" },
    { label: "Software", href: "/software-solutions" },
    { label: "AMC", href: "/it-workforce-amc" },
    { label: "Products", href: "/projects" },
    { label: "Contact", href: "/contact-us" },
  ];

  const quickLinks = [
    { label: "About", href: "/about-us" },
    { label: "Products", href: "/projects" },
    { label: "Hardware", href: "/it-hardware-supply" },
    { label: "Software", href: "/software-solutions" },
    { label: "Contact", href: "/contact-us" },
  ];

  const trustTags = [
    "Since 2004",
    "PAN India",
    "On-Site Support",
    "AMC Support",
    "Multi-Brand",
  ];

  return (
    <footer className="bg-slate-950 text-slate-200">
      {/* Top Trust Strip */}
      <div className="border-b border-slate-800 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-3 text-center text-[12px] font-black uppercase tracking-[0.18em] text-white md:flex-row">
          <span>PAN India Service</span>
          <span className="hidden opacity-60 md:block">•</span>
          <span>Trusted Since 2004</span>
          <span className="hidden opacity-60 md:block">•</span>
          <span>PSU / Enterprise Ready</span>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="space-y-5">
          <div>
            <h3 className="text-xl font-black leading-tight tracking-tight text-white">
              Global Computers
              <br />
              <span className="text-sm text-blue-400">&amp; IT Solutions</span>
            </h3>

            <a
              href={`https://${WEBSITE}`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-slate-300 transition hover:text-white"
              aria-label="Visit Global Computers website"
            >
              <span className="text-blue-400">🌐</span> {WEBSITE}
            </a>
          </div>

          <p className="text-sm leading-relaxed text-slate-400">
            Practical IT partner for{" "}
            <span className="font-semibold text-slate-200">website development</span>,{" "}
            <span className="font-semibold text-slate-200">billing software</span>,{" "}
            <span className="font-semibold text-slate-200">hardware supply</span>, CCTV,
            networking, AMC and business support.
          </p>

          <div className="flex flex-wrap gap-2">
            {trustTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-[11px] font-bold text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-6 text-xs font-black uppercase tracking-[0.18em] text-white">
            Services
          </h4>

          <ul className="space-y-3 text-sm text-slate-400">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition hover:text-blue-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
            <div className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
              Popular Offer
            </div>
            <div className="mt-2 text-sm font-semibold text-slate-200">
              Website + Billing / Inventory Setup
            </div>
            <div className="mt-1 text-xs text-slate-400">
              Best for retail, hotel, school and office businesses
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-6 text-xs font-black uppercase tracking-[0.18em] text-white">
            Contact
          </h4>

          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <span className="text-blue-400">💻</span>
              <div className="leading-tight">
                <div className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                  Software
                </div>
                <a
                  href={`tel:${SOFTWARE_PHONE_TEL}`}
                  className="font-semibold text-slate-200 hover:text-white"
                >
                  {SOFTWARE_PHONE_DISPLAY}
                </a>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-emerald-300">🖥️</span>
              <div className="leading-tight">
                <div className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                  Hardware
                </div>
                <a
                  href={`tel:${HARDWARE_PHONE_TEL}`}
                  className="font-semibold text-slate-200 hover:text-white"
                >
                  {HARDWARE_PHONE_DISPLAY}
                </a>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-400">📧</span>
              <a
                href={`mailto:${EMAIL}`}
                className="break-all transition-colors hover:text-white"
              >
                {EMAIL}
              </a>
            </li>

            <li className="flex items-start gap-3 leading-relaxed">
              <span className="text-blue-400">📍</span>
              <span>
                Main Road, Jamnipali Road,
                <br />
                near HDFC Bank, SVBP Nagar,
                <br />
                Jamnipali, Chhattisgarh 495450
              </span>
            </li>
          </ul>
        </div>

        {/* CTA Box */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
          <h4 className="text-sm font-black text-white">Business / PSU Inquiry</h4>

          <p className="mb-5 mt-2 text-xs leading-relaxed text-slate-400">
            Get a tailored quote for website, software, hardware supply, AMC and
            business-focused projects.
          </p>

          <div className="grid gap-3">
            <Link
              href="/contact-us"
              className="block rounded-xl bg-blue-600 py-3 text-center text-sm font-black text-white transition hover:bg-blue-700"
            >
              Request a Quote
            </Link>

            <Link
              href="/projects"
              className="block rounded-xl border border-slate-700 bg-white/10 py-3 text-center text-sm font-black text-white transition hover:bg-white/15"
            >
              View Products
            </Link>

            <a
              href={`tel:${SOFTWARE_PHONE_TEL}`}
              className="block rounded-xl bg-emerald-600 py-3 text-center text-sm font-black text-white transition hover:bg-emerald-700"
            >
              Call Now
            </a>
          </div>

          <div className="mt-6 border-t border-slate-800 pt-5 text-xs text-slate-400">
            <div className="font-black uppercase tracking-[0.18em] text-slate-500">
              Working Hours
            </div>
            <div className="mt-2 leading-relaxed">
              Mon–Sat: 10:00 AM – 7:00 PM
              <br />
              Emergency Support: 24/7 for AMC Clients
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-black/30">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-slate-500 md:flex-row">
          <p>© {currentYear} Global Computers &amp; IT Solutions. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition hover:text-slate-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}