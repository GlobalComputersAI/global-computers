import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us | Car Rental & Taxi Service Demo",
  description:
    "Learn about our taxi/car rental service, safety promise, verified drivers, clean cars, and customer-first travel experience.",
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white text-xs font-extrabold text-slate-800">
      {children}
    </span>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="text-2xl font-black text-slate-900">{value}</div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
    </div>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 hover:shadow-sm transition">
      <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-xl">
        {icon}
      </div>
      <div className="mt-4 text-lg font-extrabold text-slate-900">{title}</div>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function ValueCard({
  title,
  points,
}: {
  title: string;
  points: string[];
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <div className="text-lg font-extrabold text-slate-900">{title}</div>
      <div className="mt-4 grid gap-2 text-sm text-slate-700">
        {points.map((p) => (
          <div key={p} className="flex gap-2">
            <span className="mt-0.5">✅</span>
            <span>{p}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Testimonial({
  name,
  city,
  line,
}: {
  name: string;
  city: string;
  line: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black">
          {name.slice(0, 1).toUpperCase()}
        </div>
        <div>
          <div className="font-extrabold text-slate-900">{name}</div>
          <div className="text-xs text-slate-500">{city}</div>
        </div>
        <div className="ml-auto text-yellow-500 text-sm">★★★★★</div>
      </div>
      <p className="mt-4 text-sm text-slate-700 leading-relaxed">“{line}”</p>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-slate-200 bg-white p-5">
      <summary className="cursor-pointer list-none flex items-center justify-between gap-3">
        <div className="font-extrabold text-slate-900">{q}</div>
        <span className="text-slate-400 group-open:rotate-45 transition">＋</span>
      </summary>
      <p className="mt-3 text-sm text-slate-600 leading-relaxed">{a}</p>
    </details>
  );
}

export default function AboutUsCarRental() {
  const phone = "+919752422686";
  const whatsappNumber = "919752422686";
  const whatsappText = encodeURIComponent(
    "Hi! I want to book a taxi/car.\nPickup:\nDrop:\nDate:\nTime:\nCar Type:\nPlease share best price & availability."
  );
  const waLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  return (
    <main className="bg-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden border-b bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_55%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-18">
          <div className="text-sm text-slate-200/80">
            <Link href="/projects/car-Rental" className="hover:text-white">
              Home
            </Link>{" "}
            <span className="text-slate-300">/</span>{" "}
            <span className="text-white font-semibold">About Us</span>
          </div>

          <div className="mt-5 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white text-xs font-extrabold">
                  🛡️ Safety First
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white text-xs font-extrabold">
                  🧼 Clean Cars
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white text-xs font-extrabold">
                  💬 WhatsApp Booking
                </span>
              </div>

              <h1 className="mt-5 text-4xl sm:text-5xl font-black text-white leading-tight">
                About Our Taxi / Car Rental
                <span className="block text-green-400">Trust is our first service.</span>
              </h1>

              <p className="mt-4 text-slate-200 leading-relaxed max-w-xl">
                We are built for people who want reliable travel: on-time pickups, clean cars,
                verified drivers, and transparent communication. This demo page is designed to
                increase trust and conversion instantly.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/projects/car-Rental/booknow"
                  className="inline-flex justify-center px-6 py-3 rounded-2xl bg-green-600 text-white font-extrabold hover:bg-green-700 transition"
                >
                  ✅ Book Now
                </Link>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center px-6 py-3 rounded-2xl bg-white/10 text-white font-extrabold border border-white/15 hover:bg-white/15 transition"
                >
                  💬 WhatsApp
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                <Pill>✅ Transparent pricing</Pill>
                <Pill>✅ Negotiation allowed</Pill>
                <Pill>✅ Airport • Local • Outstation</Pill>
              </div>
            </div>

            {/* Right image collage */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-44 sm:h-56 rounded-[26px] overflow-hidden border border-white/10">
                <Image
                  src="/projects/car-Rental/images/innova.jpg"
                  alt="Innova"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  priority
                />
              </div>
              <div className="relative h-44 sm:h-56 rounded-[26px] overflow-hidden border border-white/10">
                <Image
                  src="/projects/car-Rental/images/scorpio.jpg"
                  alt="Scorpio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="relative h-44 sm:h-56 rounded-[26px] overflow-hidden border border-white/10">
                <Image
                  src="/projects/car-Rental/images/dzire.jpg"
                  alt="Dzire"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="relative h-44 sm:h-56 rounded-[26px] overflow-hidden border border-white/10">
                <Image
                  src="/projects/car-Rental/images/audi.jpg"
                  alt="Audi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-extrabold">
                📌 Our Promise
              </div>
              <h2 className="mt-4 text-3xl font-black text-slate-900">
                The 3 things we never compromise
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                People book when they feel safe and confident. So we communicate these points
                clearly — it boosts conversion.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="font-extrabold text-slate-900">Safety</div>
                  <div className="mt-2 text-sm text-slate-600">
                    Verified driver + safe driving policy.
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="font-extrabold text-slate-900">Cleanliness</div>
                  <div className="mt-2 text-sm text-slate-600">
                    Clean, maintained, travel-ready cars.
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="font-extrabold text-slate-900">Transparency</div>
                  <div className="mt-2 text-sm text-slate-600">
                    Rates confirmed before trip start.
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="font-extrabold text-slate-900">Support</div>
                  <div className="mt-2 text-sm text-slate-600">
                    WhatsApp/call support for quick updates.
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <Stat label="Customer Rating" value="4.9★" />
              <Stat label="On-time Pickup" value="95%+" />
              <Stat label="Verified Drivers" value="100%" />
              <Stat label="Fast Response" value="< 5 min" />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES / FEATURES */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-extrabold">
                ✅ Why Choose Us
              </div>
              <h2 className="mt-4 text-3xl font-black text-slate-900">
                Designed for stress-free travel
              </h2>
              <p className="mt-2 text-slate-600">
                Airport • Local • Outstation • Tours • Corporate travel
              </p>
            </div>
            <div className="flex gap-2">
              <Link
                href="/projects/car-Rental/rate"
                className="inline-flex justify-center px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-900 font-extrabold hover:bg-slate-50 transition"
              >
                View Rates
              </Link>
              <Link
                href="/projects/car-Rental/booknow"
                className="inline-flex justify-center px-4 py-2 rounded-xl bg-green-600 text-white font-extrabold hover:bg-green-700 transition"
              >
                Book Now
              </Link>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Feature
              icon="🧑‍✈️"
              title="Professional Drivers"
              desc="Polite behavior, route knowledge, and safety-first driving."
            />
            <Feature
              icon="🧾"
              title="Clear Pricing"
              desc="We confirm final pricing in advance — no surprises."
            />
            <Feature
              icon="💬"
              title="Instant WhatsApp Updates"
              desc="Quick response on WhatsApp for quotes and confirmations."
            />
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            <ValueCard
              title="Safety Promise"
              points={[
                "Verified drivers & documents",
                "Seat belt & speed policy",
                "Family-friendly travel",
                "Support during trip",
              ]}
            />
            <ValueCard
              title="Car Quality Promise"
              points={[
                "Clean interior & AC",
                "Regular service & maintenance",
                "Comfort for long travel",
                "Luggage space (as needed)",
              ]}
            />
            <ValueCard
              title="Pricing Promise"
              points={[
                "Transparent quote in advance",
                "Toll/parking clarified",
                "Night charge clarified",
                "Negotiation allowed 🙂",
              ]}
            />
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-7">
              <div className="text-lg font-extrabold text-slate-900">
                Service Coverage (Demo)
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Add your real city + nearby destinations later to improve local SEO.
              </p>

              <div className="mt-5 grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
                {[
                  "City rides",
                  "Airport pickup/drop",
                  "Outstation routes",
                  "Tours & packages",
                  "Corporate travel",
                  "Wedding/events",
                ].map((x) => (
                  <div key={x} className="rounded-2xl border border-slate-200 bg-white p-4">
                    ✅ {x}
                  </div>
                ))}
              </div>

              <div className="mt-6 text-xs text-slate-500">
                Tip: add 10–20 “location pages” to rank in Google locally.
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-extrabold">
                🚗 Fleet Options
              </div>
              <h2 className="mt-4 text-3xl font-black text-slate-900">
                Cars for every journey
              </h2>
              <p className="mt-2 text-slate-600 leading-relaxed">
                From sedan to SUV to luxury — we match the right car for your trip.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  ["Dzire", "Budget Sedan"],
                  ["Ertiga / XL6", "Family MPV"],
                  ["Innova", "Premium Comfort"],
                  ["Scorpio", "SUV"],
                ].map(([a, b]) => (
                  <div key={a} className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="font-extrabold text-slate-900">{a}</div>
                    <div className="text-xs text-slate-500 mt-1">{b}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex gap-2">
                <Link
                  href="/projects/car-Rental/rate"
                  className="inline-flex justify-center px-5 py-3 rounded-2xl border border-slate-200 bg-white text-slate-900 font-extrabold hover:bg-slate-50 transition"
                >
                  Rate Card
                </Link>
                <a
                  href={`tel:${phone}`}
                  className="inline-flex justify-center px-5 py-3 rounded-2xl bg-slate-900 text-white font-extrabold hover:bg-slate-800 transition"
                >
                  Call {phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-extrabold">
                ⭐ Reviews
              </div>
              <h2 className="mt-4 text-3xl font-black text-slate-900">
                Trusted by travelers
              </h2>
              <p className="mt-2 text-slate-600">
                Add real reviews later — the layout is ready for high trust.
              </p>
            </div>
            <Link
              href="/projects/car-Rental/contractus"
              className="inline-flex justify-center px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-900 font-extrabold hover:bg-slate-50 transition"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Testimonial
              name="Rohit"
              city="Airport Transfer"
              line="Driver arrived early, car was clean, and price was confirmed beforehand. Smooth experience."
            />
            <Testimonial
              name="Neha"
              city="Family Tour"
              line="Comfortable ride and polite driver. Quick WhatsApp updates helped a lot."
            />
            <Testimonial
              name="Amit"
              city="Outstation"
              line="Transparent pricing and good support. Would book again."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-extrabold">
                ❓ FAQ
              </div>
              <h2 className="mt-4 text-3xl font-black text-slate-900">
                Clear answers = more bookings
              </h2>
              <p className="mt-2 text-slate-600">
                People book faster when doubt is removed.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/projects/car-Rental/booknow"
                  className="inline-flex justify-center px-6 py-3 rounded-2xl bg-green-600 text-white font-extrabold hover:bg-green-700 transition"
                >
                  Book Now
                </Link>
                <Link
                  href="/projects/car-Rental/rate"
                  className="inline-flex justify-center px-6 py-3 rounded-2xl border border-slate-200 bg-white text-slate-900 font-extrabold hover:bg-slate-50 transition"
                >
                  View Rates
                </Link>
              </div>
            </div>

            <div className="grid gap-3">
              <FAQ
                q="Do you share driver details?"
                a="Yes. We share driver and car details before pickup for safety and trust."
              />
              <FAQ
                q="Can price be negotiated?"
                a="Yes, negotiation is allowed. Final pricing depends on route, time, toll/parking, and availability."
              />
              <FAQ
                q="Do you provide night pickup?"
                a="Yes. Night charges may apply depending on timing. We confirm clearly in advance."
              />
              <FAQ
                q="How to confirm booking?"
                a="Approve the quote → we confirm pickup time → share driver details → booking confirmed."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 sm:p-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-600 text-white text-xs font-extrabold">
                  ✅ Ready to Book?
                </div>
                <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white">
                  Book your ride in minutes
                </h2>
                <p className="mt-3 text-slate-200 leading-relaxed">
                  Tap to WhatsApp or call — we confirm best price & availability.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex justify-center px-6 py-3 rounded-2xl bg-green-600 text-white font-extrabold hover:bg-green-700 transition"
                  >
                    💬 WhatsApp Now
                  </a>
                  <a
                    href={`tel:${phone}`}
                    className="inline-flex justify-center px-6 py-3 rounded-2xl bg-white/10 text-white font-extrabold border border-white/15 hover:bg-white/15 transition"
                  >
                    📞 Call {phone}
                  </a>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  ["Clean cars", "Travel-ready & maintained"],
                  ["Verified drivers", "Safety-first policy"],
                  ["Transparent pricing", "Confirmed before trip"],
                  ["Fast response", "WhatsApp/call support"],
                ].map(([t, s]) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="text-white font-extrabold">{t}</div>
                    <div className="mt-1 text-sm text-slate-200">{s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
