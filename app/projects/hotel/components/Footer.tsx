"use client";

import Link from "next/link";

type FooterProps = {
  brand?: string;
  tagline?: string;
  city?: string;
  address?: string;
  callLink?: string;
  waLink?: string;
  mapEmbed?: string;
};

export default function Footer({
  brand = "Hotel Royal Stay",
  tagline = "Luxury Stay • Family Comfort • Easy Booking",
  city = "Raipur",
  address = "Main Road, Near Railway Station, Raipur, Chhattisgarh",
  callLink = "tel:+919752422686",
  waLink = "https://wa.me/919752422686?text=Hi%20I%20want%20to%20book%20a%20room.%20Please%20share%20availability%20and%20price.",
  mapEmbed = "https://www.google.com/maps?q=Raipur%20Railway%20Station&output=embed",
}: FooterProps) {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-amber-200/10 blur-3xl" />
      <div className="absolute -bottom-16 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 text-white sm:px-6 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/12 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 font-extrabold">
                H
              </div>
              <div>
                <div className="text-lg font-extrabold tracking-tight">{brand}</div>
                <div className="text-xs font-bold text-white/70">{tagline}</div>
              </div>
            </div>

            <p className="mt-5 text-sm font-medium leading-6 text-white/80">
              A premium hotel website demo designed to generate more direct bookings,
              more WhatsApp enquiries, and stronger trust from guests on mobile and desktop.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={callLink}
                className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 font-extrabold transition hover:bg-white/15"
              >
                Call Now
              </a>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-green-500 px-4 py-2 font-extrabold text-white transition hover:bg-green-600"
              >
                Book on WhatsApp
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-white/12 bg-white/5 p-4">
              <div className="text-sm font-extrabold">Why this hotel website sells better</div>
              <ul className="mt-3 space-y-2 text-sm font-medium text-white/80">
                <li>✅ Premium first impression for guests</li>
                <li>✅ Direct WhatsApp booking flow</li>
                <li>✅ Clear rooms, gallery, and amenities</li>
                <li>✅ Mobile-first layout for fast enquiry</li>
                <li>✅ Local SEO-ready structure for city searches</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-white/12 bg-white/5 p-6 backdrop-blur-xl">
            <div className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/75">
              Contact & Location
            </div>

            <div className="mt-4 space-y-3 text-sm">
              <div>
                <div className="font-extrabold text-white">Address</div>
                <div className="mt-1 text-white/80">{address}</div>
              </div>

              <div>
                <div className="font-extrabold text-white">City</div>
                <div className="mt-1 text-white/80">{city}</div>
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={callLink}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 font-extrabold transition hover:bg-white/15"
                >
                  Call Hotel
                </a>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-green-500 px-4 py-2 font-extrabold text-white transition hover:bg-green-600"
                >
                  WhatsApp Booking
                </a>
              </div>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <iframe
                title="Hotel location map"
                src={mapEmbed}
                className="h-[220px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-5 rounded-2xl border border-white/12 bg-white/5 p-4 text-sm font-medium leading-6 text-white/80">
              <div className="font-extrabold text-white">Owner note</div>
              <div className="mt-2">
                Domain and hosting always remain transparent. We can help set up the website,
                but the final ownership can stay with the hotel owner.
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/12 bg-white/5 p-6 backdrop-blur-xl">
            <div className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/75">
              Website Package
            </div>

            <div className="mt-4 rounded-2xl border border-white/12 bg-white/5 p-4">
              <div className="text-lg font-extrabold text-white">Starting from ₹5,000</div>
              <div className="mt-2 text-sm font-medium text-white/80">
                Ideal for hotels, resorts, lodges, guest houses, and stay properties that want
                a premium digital presence with direct enquiry flow.
              </div>

              <ul className="mt-4 space-y-2 text-sm font-medium text-white/80">
                <li>✅ Premium home page</li>
                <li>✅ Rooms page with enquiry CTA</li>
                <li>✅ Amenities showcase</li>
                <li>✅ Contact page with map and WhatsApp</li>
                <li>✅ Mobile-friendly design</li>
                <li>✅ Basic hotel SEO setup</li>
              </ul>

              <div className="mt-4 text-xs font-medium leading-5 text-white/60">
                Hosting, domain, paid integrations, and custom booking engines are separate if required.
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-white/12 bg-white/5 p-4">
              <div className="font-extrabold text-white">AMC / Maintenance Options</div>

              <div className="mt-3 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="font-extrabold">Basic AMC</div>
                  <div className="text-sm text-white/75">
                    Small text, image, and contact updates
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="font-extrabold">Standard AMC</div>
                  <div className="text-sm text-white/75">
                    Routine updates, banners, offers, seasonal content changes
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="font-extrabold">Pro AMC</div>
                  <div className="text-sm text-white/75">
                    Priority support, SEO help, and performance improvements
                  </div>
                </div>
              </div>

              <div className="mt-4 text-xs font-medium leading-5 text-white/60">
                AMC covers maintenance and normal content updates. It does not include major redesign,
                large new modules, paid third-party tools, or domain/hosting renewals.
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/projects/hotel/bill"
                className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 font-extrabold transition hover:bg-white/15"
              >
                Billing Demo
              </Link>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-green-500 px-4 py-2 font-extrabold text-white transition hover:bg-green-600"
              >
                Get This Website
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 text-sm text-white/65 md:grid-cols-2 md:items-center">
          <div>
            © {new Date().getFullYear()} {brand}. All rights reserved.
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
            <Link href="/projects/hotel" className="hover:text-white transition">
              Home
            </Link>
            <Link href="/projects/hotel/rooms" className="hover:text-white transition">
              Rooms
            </Link>
            <Link href="/projects/hotel/amenities" className="hover:text-white transition">
              Amenities
            </Link>
            <Link href="/projects/hotel/contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}