import Link from "next/link";

const WHATSAPP_LINK =
  "https://wa.me/919752422686?text=Hi%20I%20saw%20your%20gym%20website%20demo%20and%20want%20full%20details%20for%20my%20gym.";

const PHONE_DISPLAY = "+91 97524 22686";
const PHONE_TEL = "+919752422686";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* BRAND */}
        <Link
          href="/projects/gym"
          className="group flex min-w-0 flex-col leading-tight"
        >
          <span className="truncate text-lg font-black tracking-tight text-slate-900 transition group-hover:text-slate-700">
            Elite Fitness Studio
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
            Gym Website Demo
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex">
          <Link
            href="/projects/gym"
            className="transition hover:text-slate-900"
          >
            Home
          </Link>
          <Link
            href="/projects/gym/programs"
            className="transition hover:text-slate-900"
          >
            Programs
          </Link>
          <Link
            href="/projects/gym/plans"
            className="transition hover:text-slate-900"
          >
            Plans
          </Link>
          <Link
            href="/projects/gym/gallery"
            className="transition hover:text-slate-900"
          >
            Gallery
          </Link>
          <Link
            href="/projects/gym/contact"
            className="transition hover:text-slate-900"
          >
            Free Trial
          </Link>
          <Link
            href="/projects/gym/billing"
            className="rounded-xl border border-slate-300 px-3 py-1.5 transition hover:border-slate-400 hover:bg-slate-50"
          >
            Billing Demo
          </Link>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden rounded-xl border border-slate-300 px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 md:inline-flex"
          >
            📞 Call
          </a>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-green-600 px-4 py-2 text-sm font-extrabold text-white shadow-sm transition hover:bg-green-700"
          >
            💬 WhatsApp
            <span className="ml-2 hidden xl:inline text-xs font-semibold text-green-100">
              {PHONE_DISPLAY}
            </span>
          </a>

          {/* MOBILE QUICK LINK */}
          <Link
            href="/projects/gym/contact"
            className="inline-flex rounded-xl border border-slate-300 px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 lg:hidden"
          >
            Trial
          </Link>
        </div>
      </div>

      {/* TRUST BAR */}
      <div className="border-t border-slate-100 bg-slate-50/80">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 py-2 text-center text-[11px] font-bold uppercase tracking-wide text-slate-600 sm:px-6">
          <span>High-Converting Demo</span>
          <span>WhatsApp Inquiry Ready</span>
          <span>Mobile Friendly</span>
          <span>Fast Delivery</span>
          <span>Website + Billing Option</span>
        </div>
      </div>
    </header>
  );
}