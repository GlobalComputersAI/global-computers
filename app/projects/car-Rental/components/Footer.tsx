import Link from "next/link";

const WHATSAPP_NUMBER = "919752422686";
const PHONE_NUMBER = "+919752422686";
const BASE_PATH = "/projects/car-Rental";

const ROUTES = {
  home: `${BASE_PATH}`,
  rate: `${BASE_PATH}/rate`,
  book: `${BASE_PATH}/booknow`,
  billing: `${BASE_PATH}/billing`,
  about: `${BASE_PATH}/aboutus`,
  contact: `${BASE_PATH}/contractus`,
};

const whatsappMessage = encodeURIComponent(
  "Hello, I want this Car Rental website demo for ₹5000/-"
);

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

const links = [
  { label: "Home", href: ROUTES.home },
  { label: "Rates", href: ROUTES.rate },
  { label: "Book Now", href: ROUTES.book },
  { label: "Billing", href: ROUTES.billing },
  { label: "About", href: ROUTES.about },
  { label: "Contact", href: ROUTES.contact },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href={ROUTES.home} className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 font-black text-white">
                CR
              </div>
              <div>
                <div className="font-extrabold text-slate-900">
                  Car Rental / Taxi Service Demo
                </div>
                <div className="text-xs text-slate-500">
                  Premium UI • Local SEO • Booking Lead Flow
                </div>
              </div>
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Perfect for cab owners, taxi operators, travel agencies, and city
              rentals. Includes inquiry and booking flow, rate cards, and
              SEO-ready pages.
            </p>

            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a
                className="text-slate-700 transition hover:text-slate-900"
                href={`tel:${PHONE_NUMBER}`}
              >
                📞 +91 97524 22686
              </a>
              <a
                className="text-slate-700 transition hover:text-slate-900"
                href="https://globalcomputers.net"
                target="_blank"
                rel="noreferrer"
              >
                🌐 globalcomputers.net
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="font-extrabold text-slate-900">Quick Links</div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-slate-600 transition hover:text-slate-900"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div className="text-lg font-extrabold text-slate-900">
              Need a similar website?
            </div>
            <p className="mt-2 text-sm text-slate-600">
              We build complete demos like this: website + inquiry flow + SEO
              pages + WhatsApp and call actions.
            </p>

            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-green-600 px-4 py-2 font-extrabold text-white transition hover:bg-green-700"
              >
                💬 Get this website @ ₹5000 – WhatsApp
              </a>

              <Link
                href={ROUTES.book}
                className="inline-flex justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 font-extrabold text-slate-800 transition hover:bg-slate-50"
              >
                View Booking Flow
              </Link>
            </div>

            <div className="mt-4 text-xs text-slate-500">
              Response time: same day (business hours)
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <div>
            © {year} Global Computers & IT Solutions. All rights reserved.
          </div>
          <div className="flex gap-3">
            <span>Made for Demo</span>
            <span className="text-slate-300">|</span>
            <span>Taxi • Rental • Tour</span>
          </div>
        </div>
      </div>
    </footer>
  );
}