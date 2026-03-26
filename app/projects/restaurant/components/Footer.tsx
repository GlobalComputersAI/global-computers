import Image from "next/image";
import Link from "next/link";

const BASE = "/projects/restaurant";
const PHONE_DISPLAY = "+91 97524 22686";
const PHONE_TEL = "tel:+919752422686";

const WHATSAPP_MESSAGE =
  "Hi, I saw your Restaurant Website + Billing Demo. I want website + billing starting at ₹5,000. Please share details.";
const WHATSAPP = `https://wa.me/919752422686?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export default function Footer() {
  return (
    <footer className="mt-16 overflow-hidden bg-slate-950 text-slate-200">
      {/* Hero CTA Strip */}
      <div className="relative border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/projects/food/hero-2.jpg"
            alt="Restaurant website demo background"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-red-950/70" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-bold text-red-200">
              Restaurant Website • Menu • Gallery • Billing
            </div>

            <h2 className="mt-4 text-2xl font-extrabold text-white md:text-4xl">
              Get more direct calls, WhatsApp orders, and walk-in trust for your restaurant
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
              We build restaurant websites that help customers see your menu, food photos,
              contact details, location, and billing flow — all in one clean mobile-first
              website. Perfect for restaurants, cafes, food corners, and family dining brands.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-3 font-extrabold text-white transition hover:bg-white/15"
            >
              📞 Call Now
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 px-5 py-3 font-extrabold text-white transition hover:from-green-700 hover:to-emerald-600"
            >
              💬 WhatsApp Quote
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl ring-1 ring-white/10">
              <Image
                src="/projects/food/pick-2.jpg"
                alt="Restaurant website demo"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>

            <div>
              <div className="text-lg font-extrabold text-white">Restaurant Demo</div>
              <div className="text-xs text-slate-400">
                Built by Global Computers & IT Solutions
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            Designed for Indian restaurants and cafes that want stronger branding,
            better Google visibility, direct customer inquiries, and a simple digital
            billing showcase.
          </p>

          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
              Mobile-first design
            </span>
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
              Fast-loading pages
            </span>
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
              Local SEO ready
            </span>
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
              WhatsApp conversion
            </span>
          </div>
        </div>

        {/* Business value */}
        <div>
          <div className="text-sm font-extrabold text-white">Why This Works</div>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>✅ Customers can view food photos before visiting</li>
            <li>✅ Online menu builds trust and reduces call confusion</li>
            <li>✅ WhatsApp CTA brings direct order or inquiry leads</li>
            <li>✅ Contact + location page improves nearby discovery</li>
            <li>✅ Better brand image than basic social-only presence</li>
            <li>✅ Helps compete with bigger local restaurant brands</li>
          </ul>
        </div>

        {/* Package */}
        <div>
          <div className="text-sm font-extrabold text-white">Starter Package: ₹5,000 + GST</div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex gap-2">
                <span className="text-green-400">✓</span>
                <span>
                  <b>Core Pages:</b> Home, Menu, Gallery, Contact
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">✓</span>
                <span>
                  <b>Billing Demo:</b> manual item entry, tax total, print layout
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">✓</span>
                <span>
                  <b>Conversion CTAs:</b> WhatsApp, Call Now, inquiry buttons
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">✓</span>
                <span>
                  <b>Basic SEO Setup:</b> titles, descriptions, sitemap, internal linking
                </span>
              </li>
            </ul>

            <div className="mt-4 text-xs leading-relaxed text-slate-400">
              *Client provides menu, photos, logo, phone, and location details.
              Advanced ordering, item catalog billing, inventory, and admin panel
              can be added as paid upgrades.
            </div>
          </div>

          <div className="mt-4 text-xs text-slate-400">
            <b>Recommended:</b> domain and hosting in client name for long-term ownership.
          </div>
        </div>

        {/* Support + links */}
        <div>
          <div className="text-sm font-extrabold text-white">Support & Quick Links</div>

          <div className="mt-4 space-y-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <div className="font-extrabold text-white">Basic AMC</div>
                <div className="rounded-full border border-white/10 bg-white/10 px-2 py-1 text-xs">
                  Monthly
                </div>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>• Menu text and price updates</li>
                <li>• Small image/banner changes</li>
                <li>• Basic backup and support</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <div className="font-extrabold text-white">Premium AMC</div>
                <div className="rounded-full border border-white/10 bg-white/10 px-2 py-1 text-xs">
                  Monthly
                </div>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>• Priority updates</li>
                <li>• New sections or offers page</li>
                <li>• SEO improvements and monitoring</li>
              </ul>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2 text-sm">
            <Link
              href={`${BASE}/menu`}
              className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-center font-bold hover:bg-white/15"
            >
              View Menu
            </Link>
            <Link
              href={`${BASE}/billing`}
              className="rounded-xl bg-red-600 px-4 py-3 text-center font-extrabold text-white hover:bg-red-700"
            >
              Billing Demo
            </Link>
            <Link
              href={`${BASE}/gallery`}
              className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-center font-bold hover:bg-white/15"
            >
              Gallery
            </Link>
            <Link
              href={`${BASE}/contact`}
              className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-center font-bold hover:bg-white/15"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-slate-400 md:flex-row">
          <div>
            © {new Date().getFullYear()} Restaurant Website Demo • Global Computers & IT Solutions
          </div>

          <div className="flex items-center gap-4">
            <a href={PHONE_TEL} className="hover:text-white">
              📞 {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}