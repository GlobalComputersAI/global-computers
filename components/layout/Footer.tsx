import Link from "next/link";

const SOFTWARE_PHONE_DISPLAY = "+91 97524 22686";
const SOFTWARE_PHONE_TEL = "+919752422686";

const HARDWARE_PHONE_DISPLAY = "+91 9827164811";
const HARDWARE_PHONE_TEL = "+919827164811";

const EMAIL = "info@globalcomputers.net";
const WEBSITE = "globalcomputers.net";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { label: "IT Hardware Supply", href: "/it-hardware-supply" },
    { label: "Software Solutions", href: "/software-solutions" },
    { label: "IT Workforce & AMC", href: "/it-workforce-amc" },
    { label: "Projects", href: "/projects" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  const quickLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Projects", href: "/projects" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "IT Hardware Supply", href: "/it-hardware-supply" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-2 text-[12px] font-black text-white uppercase tracking-widest">
          <span className="opacity-95">📍 Serving Clients Pan-India</span>
          <span className="hidden md:block opacity-70">•</span>
          <span className="opacity-95">🛡️ 20+ Years of IT Excellence (Since 2004)</span>
          <span className="hidden md:block opacity-70">•</span>
          <span className="opacity-95">🏛 PSU / Enterprise Tender Experience</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-5">
          <div>
            <h3 className="font-black text-xl tracking-tight text-white leading-tight">
              GLOBAL COMPUTERS <br />
              <span className="text-blue-400 text-sm">& IT SOLUTIONS</span>
            </h3>
            <a
              href={`https://${WEBSITE}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-sm font-bold text-slate-300 hover:text-white transition"
            >
              <span className="text-blue-400">🌐</span> {WEBSITE}
            </a>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed">
            One-stop IT partner for{" "}
            <span className="text-slate-200 font-semibold">hardware supply</span>,{" "}
            <span className="text-slate-200 font-semibold">custom software</span>, AMC, workforce, and{" "}
            <span className="text-slate-200 font-semibold">turnkey PSU/enterprise projects</span>.
          </p>

          <div className="flex flex-wrap gap-2">
            {["ISO Process", "PAN India", "On-site Support", "AMC", "Multi-Brand"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-[11px] font-bold rounded-full bg-slate-900 border border-slate-800 text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            <span className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-xs font-black text-slate-300">
              in
            </span>
            <span className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-xs font-black text-slate-300">
              f
            </span>
          </div>
        </div>

        <div>
          <h4 className="font-black text-white mb-6 uppercase text-xs tracking-widest">
            Services
          </h4>

          <ul className="space-y-3 text-sm text-slate-400">
            {serviceLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="hover:text-blue-300 transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
            <div className="text-xs uppercase tracking-widest text-slate-400 font-black">
              Popular Offer
            </div>
            <div className="mt-2 text-sm font-semibold text-slate-200">
              Website + Billing/Inventory Setup
            </div>
            <div className="mt-1 text-xs text-slate-400">
              Best for Retail • Hotel • School • Office
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-black text-white mb-6 uppercase text-xs tracking-widest">
            Contact
          </h4>

          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <span className="text-blue-400">💻</span>
              <div className="leading-tight">
                <div className="text-xs font-black uppercase tracking-widest text-slate-500">
                  Software
                </div>
                <a
                  href={`tel:${SOFTWARE_PHONE_TEL}`}
                  className="hover:text-white font-semibold text-slate-200"
                >
                  {SOFTWARE_PHONE_DISPLAY}
                </a>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-emerald-300">🖥️</span>
              <div className="leading-tight">
                <div className="text-xs font-black uppercase tracking-widest text-slate-500">
                  Hardware
                </div>
                <a
                  href={`tel:${HARDWARE_PHONE_TEL}`}
                  className="hover:text-white font-semibold text-slate-200"
                >
                  {HARDWARE_PHONE_DISPLAY}
                </a>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-400">📧</span>
              <a href={`mailto:${EMAIL}`} className="hover:text-white">
                {EMAIL}
              </a>
            </li>

            <li className="flex items-start gap-3 leading-relaxed">
              <span className="text-blue-400">📍</span>
              <span>
                Main Road, Jamnipali Road, <br />
                near HDFC Bank, SVBP Nagar, <br />
                Jamnipali, Chhattisgarh 495450
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800">
          <h4 className="font-black text-white mb-2 text-sm">
            Business / PSU Inquiry
          </h4>
          <p className="text-xs text-slate-400 mb-5 leading-relaxed">
            Get a tailored quote for website, software, hardware supply, AMC, or tender-based projects.
            Response within 24 hours.
          </p>

          <div className="grid gap-3">
            <Link
              href="/contact-us"
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-black py-3 rounded-xl text-sm transition-all"
            >
              Request a Quote
            </Link>

            <Link
              href="/projects"
              className="block text-center bg-white/10 hover:bg-white/15 text-white font-black py-3 rounded-xl text-sm transition-all border border-slate-700"
            >
              View Projects
            </Link>

            <a
              href={`tel:${SOFTWARE_PHONE_TEL}`}
              className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white font-black py-3 rounded-xl text-sm transition-all"
            >
              Call Now
            </a>
          </div>

          <div className="mt-6 border-t border-slate-800 pt-5 text-xs text-slate-400">
            <div className="font-black uppercase tracking-widest text-slate-500">
              Working Hours
            </div>
            <div className="mt-2 leading-relaxed">
              Mon–Sat: 10:00 AM – 7:00 PM <br />
              Emergency Support: 24/7 (AMC Clients)
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} Global Computers & IT Solutions. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((l) => (
              <Link key={l.label} href={l.href} className="hover:text-slate-300 transition">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}