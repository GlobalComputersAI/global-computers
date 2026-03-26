import Link from "next/link";

const WHATSAPP_LINK =
  "https://wa.me/919752422686?text=Hi%20I%20saw%20your%20Gym%20Demo%20website.%20I%20want%20a%20similar%20website%20for%20my%20gym.%20Please%20share%20details.";
const PHONE_DISPLAY = "+91 97524 22686";
const PHONE_TEL = "+919752422686";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        {/* TOP CTA STRIP */}
        <div className="mb-10 rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm lg:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-green-300">
                Ready to launch your gym online?
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                Get a modern gym website that brings more inquiries, trials, and
                memberships.
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
                This demo is built to help local gyms look professional, collect
                leads on WhatsApp, showcase plans and programs, and support
                simple billing workflow.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-green-600 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-green-700"
              >
                💬 Get This Demo on WhatsApp
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-white/15"
              >
                📞 Call Now
              </a>
            </div>
          </div>
        </div>

        {/* MAIN FOOTER GRID */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* BRAND / ABOUT */}
          <div>
            <div className="text-xl font-black tracking-tight text-slate-900">
              Elite Fitness Studio <span className="text-slate-400">(Demo)</span>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              A high-conversion gym website demo designed for fitness centers,
              personal training studios, and local gyms that want more branding,
              better trust, and more direct leads from mobile users.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-700">
                Mobile Friendly
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-700">
                WhatsApp Leads
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-700">
                SEO Ready
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-700">
                Fast Delivery
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-extrabold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                📞 {PHONE_DISPLAY}
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-green-600 px-4 py-2 text-sm font-extrabold text-white transition hover:bg-green-700"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* PACKAGE */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Starter Package
            </div>

            <div className="mt-3 text-3xl font-black tracking-tight text-slate-900">
              ₹5,000
            </div>

            <p className="mt-2 text-sm font-semibold text-slate-600">
              Perfect for local gyms that want a strong online presence fast.
            </p>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>✅ Gym website with home, plans, programs, gallery, contact</li>
              <li>✅ WhatsApp inquiry and direct call buttons</li>
              <li>✅ Lead-focused design for more trial bookings</li>
              <li>✅ Basic billing/invoice demo option</li>
              <li>✅ Mobile-friendly and fast-loading layout</li>
              <li>✅ Easy customization with your gym name and details</li>
            </ul>

            <p className="mt-5 text-xs leading-5 text-slate-500">
              Domain, hosting, paid integrations, custom admin panels, and major
              advanced features are not included in the starter price unless
              discussed separately.
            </p>
          </div>

          {/* SUPPORT / LINKS */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Support & Demo Links
            </div>

            <div className="mt-3 text-lg font-extrabold text-slate-900">
              Optional AMC / Ongoing Maintenance
            </div>

            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              <li>🔧 Content updates and banner changes</li>
              <li>📷 Image replacement and offer updates</li>
              <li>🛡️ Basic support and issue fixing</li>
              <li>🌐 Domain and hosting guidance</li>
              <li>📈 Help with future expansion pages</li>
            </ul>

            <div className="mt-5 rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-bold text-slate-900">
                Suggested AMC: <span className="font-black">₹2,999 / year</span>
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Best for small routine updates, support, and maintenance. Major
                redesigns, new modules, app development, payment gateway, or
                advanced automation will be billed separately.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm font-bold">
              <Link
                href="/projects/gym"
                className="rounded-xl border border-slate-300 px-3 py-2 text-center text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Home
              </Link>
              <Link
                href="/projects/gym/programs"
                className="rounded-xl border border-slate-300 px-3 py-2 text-center text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Programs
              </Link>
              <Link
                href="/projects/gym/plans"
                className="rounded-xl border border-slate-300 px-3 py-2 text-center text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Plans
              </Link>
              <Link
                href="/projects/gym/contact"
                className="rounded-xl border border-slate-300 px-3 py-2 text-center text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Free Trial
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t border-slate-200 pt-6">
          <div className="flex flex-col gap-3 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Elite Fitness Studio (Demo). All rights reserved.</p>

            <p className="text-left md:text-right">
              Demo by{" "}
              <span className="font-semibold text-slate-700">
                Global Computers & IT Solutions
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}