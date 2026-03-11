import Link from "next/link";

const links = [
  { label: "Home", href: "/projects/car-Rental" },
  { label: "Rates", href: "/projects/car-Rental/rate" },
  { label: "Book Now", href: "/projects/car-Rental/booknow" },
  { label: "Billing", href: "/projects/car-Rental/billing" },
  { label: "About", href: "/projects/car-Rental/aboutus" },
  { label: "Contact", href: "/projects/car-Rental/contractus" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black">
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
            </div>

            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Perfect for cab owners, taxi operators, travel agencies, and city
              rentals. Includes inquiry/booking flow, rate cards, and SEO-ready
              pages.
            </p>

            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a className="text-slate-700 hover:text-slate-900" href="tel:+919752422686">
                📞 +91 97524 22686
              </a>
              <a
                className="text-slate-700 hover:text-slate-900"
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
                  className="text-sm text-slate-600 hover:text-slate-900"
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
              pages + WhatsApp/call actions.
            </p>

            <div className="mt-4 flex flex-col sm:flex-row gap-2">
              <Link
                href="/projects/car-Rental/booknow"
                className="inline-flex justify-center px-4 py-2 rounded-xl bg-green-600 text-white font-extrabold hover:bg-green-700 transition"
              >
                Get Quote
              </Link>
              <Link
                href="/projects/car-Rental/contractus"
                className="inline-flex justify-center px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-800 font-extrabold hover:bg-slate-50 transition"
              >
                Contact
              </Link>
            </div>

            <div className="mt-4 text-xs text-slate-500">
              Response time: same day (business hours)
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t text-xs text-slate-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div>© {year} Global Computers & IT Solutions. All rights reserved.</div>
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
