import Link from "next/link";

const BASE = "/projects/builder";

const SOFTWARE_CALL = "tel:+919752422686";
const HARDWARE_CALL = "tel:+919827164811";

const WHATSAPP_LINK =
  "https://wa.me/919752422686?text=Hi%20I%20want%20a%20premium%20Builder%20%2F%20Real%20Estate%20Website.%20Please%20share%20demo%2C%20pricing%2C%20features%2C%20and%20delivery%20time.";

const navLinks = [
  { label: "Home", href: `${BASE}/` },
  { label: "Projects", href: `${BASE}/projects/` },
  { label: "Project Details", href: `${BASE}/project-details/` },
  { label: "Pricing", href: `${BASE}/Bill/` },
  { label: "Contact", href: `${BASE}/Contactus/` },
];

const solutionLinks = [
  "Builder Website Design",
  "Real Estate Project Showcase",
  "Property Listing Website",
  "Brochure & WhatsApp Lead Setup",
  "Site Visit Lead Funnel",
  "Luxury Landing Page Design",
];

const trustPoints = [
  "Premium Builder Website Demo",
  "WhatsApp Lead Focused",
  "Mobile Friendly Design",
  "Fast Delivery Available",
  "SEO Setup Friendly",
  "Designed for More Enquiries",
];

export default function Footer() {
  return (
    <footer className="builder-footer mt-20 border-t border-white/10 bg-[linear-gradient(180deg,#07111f_0%,#08101b_100%)] text-white">
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="builder-gold-line mb-10 h-px w-full" />

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 text-sm font-black text-slate-950 shadow-[0_12px_30px_rgba(245,158,11,0.25)]">
                GC
              </div>

              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-amber-300">
                  Builder & Real Estate
                </p>
                <p className="text-lg font-black text-white">
                  Global Computers & IT Solutions
                </p>
              </div>
            </div>

            <h2 className="mt-6 max-w-xl text-2xl font-black leading-tight text-white md:text-3xl">
              Premium builder websites designed to attract enquiries, brochure
              requests, and site visit leads.
            </h2>

            <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-white/70">
              We create high-conversion builder and real estate websites for
              developers, colonizers, construction businesses, plotting
              projects, villa projects, flats, and commercial property
              showcases. The focus is not only design — it is trust, branding,
              presentation, and direct lead generation through WhatsApp and
              calls.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {trustPoints.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-xs font-extrabold text-white/85"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-green-600 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-green-700"
              >
                WhatsApp Now
              </a>

              <a
                href={SOFTWARE_CALL}
                className="rounded-2xl border border-white/12 bg-white/6 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-white/10"
              >
                Call Software
              </a>

              <a
                href={HARDWARE_CALL}
                className="rounded-2xl border border-white/12 bg-white/6 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-white/10"
              >
                Call Hardware
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-amber-300">
              Navigation
            </h3>

            <ul className="mt-5 space-y-3">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold text-white/75 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-amber-300">
              Solutions
            </h3>

            <ul className="mt-5 space-y-3">
              {solutionLinks.map((item) => (
                <li
                  key={item}
                  className="text-sm font-semibold leading-6 text-white/75"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-amber-300">
              Contact & Sales
            </h3>

            <div className="mt-5 space-y-4">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-white/55">
                  Sales Support
                </p>
                <a
                  href={SOFTWARE_CALL}
                  className="mt-2 block text-lg font-black text-white transition hover:text-amber-300"
                >
                  +91 97524 22686
                </a>
                <p className="mt-1 text-sm font-semibold text-white/65">
                  Website demo, software, real estate project showcase, WhatsApp
                  lead setup
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-white/55">
                  Hardware & Infra
                </p>
                <a
                  href={HARDWARE_CALL}
                  className="mt-2 block text-lg font-black text-white transition hover:text-amber-300"
                >
                  +91 98271 64811
                </a>
                <p className="mt-1 text-sm font-semibold text-white/65">
                  Hardware support, office IT, networking, AMC and deployment
                  assistance
                </p>
              </div>

              <div className="rounded-[28px] border border-amber-300/20 bg-gradient-to-br from-amber-400/10 to-yellow-300/5 p-5">
                <p className="text-sm font-black text-white">
                  Want more direct property enquiries?
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-white/70">
                  Get a premium builder website with project pages, brochure
                  CTA, pricing section, mobile-first design, and strong
                  WhatsApp conversion flow.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 border-t border-white/10 pt-6 md:grid-cols-2 md:items-center">
          <p className="text-sm font-semibold text-white/55">
            © {new Date().getFullYear()} Global Computers & IT Solutions. Builder
            Website Demo for sales, branding, and project lead generation.
          </p>

          <div className="flex flex-wrap gap-4 md:justify-end">
            <Link
              href="/projects/"
              className="text-sm font-bold text-white/65 transition hover:text-white"
            >
              All Projects
            </Link>
            <Link
              href="/contact-us/"
              className="text-sm font-bold text-white/65 transition hover:text-white"
            >
              Main Contact
            </Link>
            <Link
              href="/software-solutions/"
              className="text-sm font-bold text-white/65 transition hover:text-white"
            >
              Software Solutions
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}