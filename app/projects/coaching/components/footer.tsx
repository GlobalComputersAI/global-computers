import Link from "next/link";

const WHATSAPP =
  "https://wa.me/919752422686?text=Hi%20I%20want%20to%20know%20more%20about%20your%20coaching%20programs%2C%20results%2C%20billing%2C%20and%20contact%20details.";
const CALL = "tel:+919752422686";

const quickLinks = [
  { label: "Home", href: "/projects/coaching/" },
  { label: "Courses", href: "/projects/coaching/courses/" },
  { label: "Results", href: "/projects/coaching/results/" },
  { label: "Billing", href: "/projects/coaching/billing/" },
  { label: "Contact", href: "/projects/coaching/contact/" },
];

const highlights = [
  "Course and batch-focused structure",
  "Strong result and testimonial presentation",
  "Printable billing and invoice page",
  "SEO-friendly internal linking",
  "Mobile-first enquiry design",
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="inline-flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-sm font-black text-white shadow-lg shadow-indigo-900/30">
                BF
              </span>
              <h3 className="text-xl font-extrabold tracking-tight text-white">
                BrightFuture <span className="text-indigo-400">Coaching</span>
              </h3>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
              Premium coaching institute demo website with strong SEO structure,
              result-focused pages, billing support, WhatsApp enquiry flow, and
              mobile-first design for better trust and conversion.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-100">
                Courses
              </span>
              <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-100">
                Results
              </span>
              <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-100">
                Billing
              </span>
              <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-100">
                Contact
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h4>

            <nav className="mt-5 flex flex-col gap-3">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-300 transition hover:translate-x-1 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Why This Demo Is Strong */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-[0.18em] text-white">
              Why This Demo Works
            </h4>

            <ul className="mt-5 space-y-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                >
                  <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-indigo-600/20 text-xs font-bold text-indigo-300">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-[0.18em] text-white">
              Contact Now
            </h4>

            <p className="mt-5 text-sm leading-7 text-slate-300">
              Want course details, result information, billing support, fee
              clarification, or contact assistance? Reach out now for quick
              response.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={CALL}
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-slate-100"
              >
                Call Now
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-green-600 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-green-500"
              >
                WhatsApp Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-white/10 bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">
          <p className="text-xs leading-6 text-slate-400">
            © 2026 BrightFuture Coaching Demo. Designed for premium education
            website presentation.
          </p>

          <p className="text-xs leading-6 text-slate-500">
            Demo by Global Computers &amp; IT Solutions • Website • WhatsApp •
            SEO Setup
          </p>
        </div>
      </div>
    </footer>
  );
}