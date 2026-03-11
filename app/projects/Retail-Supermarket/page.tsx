import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Car Rental & Taxi Service Demo | Travel Theme Booking Website",
  description:
    "Premium car rental / taxi service demo with high-conversion booking flow, WhatsApp inquiry, rate cards, and SEO-ready travel sections.",
};

type CarItem = {
  name: string;
  img: string;
  seats: string;
  fuel: string;
  bestFor: string;
  priceHint: string;
};

const cars: CarItem[] = [
  {
    name: "Swift Dzire",
    img: "/projects/car-Rental/images/dzire.jpg",
    seats: "4 Seats",
    fuel: "Diesel / Petrol",
    bestFor: "City rides & airport",
    priceHint: "Best value sedan",
  },
  {
    name: "Ertiga",
    img: "/projects/car-Rental/images/ertiga.jpg",
    seats: "6–7 Seats",
    fuel: "Diesel / Petrol",
    bestFor: "Family trips",
    priceHint: "Comfort MPV",
  },
  {
    name: "Innova",
    img: "/projects/car-Rental/images/innova.jpg",
    seats: "6–7 Seats",
    fuel: "Diesel",
    bestFor: "Outstation & tours",
    priceHint: "Premium comfort",
  },
  {
    name: "Scorpio",
    img: "/projects/car-Rental/images/scorpio.jpg",
    seats: "6–7 Seats",
    fuel: "Diesel",
    bestFor: "Hills & highways",
    priceHint: "SUV power",
  },
  {
    name: "XL6",
    img: "/projects/car-Rental/images/xl6.jpg",
    seats: "6 Seats",
    fuel: "Petrol",
    bestFor: "City + outstation",
    priceHint: "Stylish MPV",
  },
  {
    name: "Audi (Luxury)",
    img: "/projects/car-Rental/images/audi.jpg",
    seats: "4 Seats",
    fuel: "Petrol",
    bestFor: "Business & events",
    priceHint: "Luxury experience",
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 text-white text-xs font-semibold">
      {children}
    </span>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="text-2xl font-extrabold text-slate-900">{v}</div>
      <div className="mt-1 text-sm text-slate-600">{k}</div>
    </div>
  );
}

function Feature({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: string;
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

function ServiceCard({
  title,
  desc,
  points,
  tag,
}: {
  title: string;
  desc: string;
  points: string[];
  tag: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 hover:shadow-sm transition">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-lg font-extrabold text-slate-900">{title}</div>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
        </div>
        <span className="shrink-0 text-xs font-extrabold px-3 py-1 rounded-full bg-green-100 text-green-700">
          {tag}
        </span>
      </div>

      <div className="mt-4 grid gap-2">
        {points.map((p) => (
          <div key={p} className="flex gap-2 text-sm text-slate-700">
            <span className="mt-0.5">✅</span>
            <span>{p}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-col sm:flex-row gap-2">
        <Link
          href="/projects/car-Rental/booknow"
          className="inline-flex justify-center px-4 py-2 rounded-xl bg-slate-900 text-white font-extrabold hover:bg-slate-800 transition"
        >
          Book Now
        </Link>
        <Link
          href="/projects/car-Rental/rate"
          className="inline-flex justify-center px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-800 font-extrabold hover:bg-slate-50 transition"
        >
          View Rates
        </Link>
      </div>
    </div>
  );
}

function Testimonial({
  name,
  line,
  city,
}: {
  name: string;
  line: string;
  city: string;
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

export default function CarRentalHomePage() {
  const phone = "+919752422686";
  const whatsappNumber = "919752422686";
  const whatsappText = encodeURIComponent(
    "Hi! I want to book a taxi/car. Please share price & availability.\nPickup:\nDrop:\nDate:\nTime:\nCar Type:"
  );

  return (
    <main className="bg-slate-50">
      {/* ================= HERO (TRAVEL THEME) ================= */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_55%)]" />
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-green-500/20 blur-3xl" />
          <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge>🚖 Trusted Taxi Service</Badge>
                <Badge>🧳 Travel & Outstation</Badge>
                <Badge>🛬 Airport Pickup</Badge>
                <Badge>⚡ 5-min Quote</Badge>
              </div>

              <h1 className="mt-6 text-4xl sm:text-5xl font-black text-white leading-tight">
                Travel Safe. Arrive On Time.
                <span className="block text-green-400">Book a Car in 60 Seconds.</span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl">
                Premium car rental & taxi demo with high-conversion booking flow.
                Clean cars, verified drivers, transparent pricing — built to win trust
                instantly.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/projects/car-Rental/booknow"
                  className="inline-flex justify-center px-6 py-3 rounded-2xl bg-green-600 text-white font-extrabold hover:bg-green-700 transition"
                >
                  ✅ Get Instant Quote
                </Link>
                <Link
                  href="/projects/car-Rental/rate"
                  className="inline-flex justify-center px-6 py-3 rounded-2xl bg-white/10 text-white font-extrabold border border-white/15 hover:bg-white/15 transition"
                >
                  View Rate Card
                </Link>
              </div>

              {/* Trust row */}
              <div className="mt-8 grid grid-cols-3 gap-3 max-w-xl">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                  <div className="text-white font-black text-lg">4.9★</div>
                  <div className="text-xs text-slate-200 mt-1">Customer Rating</div>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                  <div className="text-white font-black text-lg">24×7</div>
                  <div className="text-xs text-slate-200 mt-1">Support</div>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                  <div className="text-white font-black text-lg">Fast</div>
                  <div className="text-xs text-slate-200 mt-1">Pickup Times</div>
                </div>
              </div>
            </div>

            {/* Right: Booking Box */}
            <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="text-white font-extrabold text-lg">
                  Quick Booking Request
                </div>
                <div className="h-10 w-10 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white">
                  🚗
                </div>
              </div>

              <p className="mt-2 text-sm text-slate-200">
                Fill basic details — we confirm availability & pricing on call/WhatsApp.
              </p>

              <div className="mt-5 grid gap-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-200 font-semibold">
                      Pickup Location
                    </label>
                    <input
                      className="mt-1 w-full rounded-2xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder:text-slate-300 outline-none focus:ring-2 focus:ring-green-500/60"
                      placeholder="e.g. Raipur Railway Station"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-200 font-semibold">
                      Drop Location
                    </label>
                    <input
                      className="mt-1 w-full rounded-2xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder:text-slate-300 outline-none focus:ring-2 focus:ring-green-500/60"
                      placeholder="e.g. Airport / Bilaspur"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs text-slate-200 font-semibold">
                      Date
                    </label>
                    <input
                      type="date"
                      className="mt-1 w-full rounded-2xl bg-white/10 border border-white/15 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-green-500/60"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-200 font-semibold">
                      Time
                    </label>
                    <input
                      type="time"
                      className="mt-1 w-full rounded-2xl bg-white/10 border border-white/15 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-green-500/60"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-200 font-semibold">
                      Car Type
                    </label>
                    <select className="mt-1 w-full rounded-2xl bg-white/10 border border-white/15 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-green-500/60">
                      <option className="bg-slate-900" value="Sedan">
                        Sedan (Dzire)
                      </option>
                      <option className="bg-slate-900" value="MPV">
                        MPV (Ertiga / XL6)
                      </option>
                      <option className="bg-slate-900" value="SUV">
                        SUV (Scorpio)
                      </option>
                      <option className="bg-slate-900" value="Premium">
                        Premium (Innova / Audi)
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex justify-center px-5 py-3 rounded-2xl bg-green-600 text-white font-extrabold hover:bg-green-700 transition"
                  >
                    WhatsApp for Quote
                  </a>
                  <a
                    href={`tel:${phone}`}
                    className="inline-flex justify-center px-5 py-3 rounded-2xl bg-white/10 text-white font-extrabold border border-white/15 hover:bg-white/15 transition"
                  >
                    Call Now
                  </a>
                </div>

                <div className="text-xs text-slate-200/90">
                  ✔ Transparent pricing • ✔ Clean cars • ✔ Verified drivers • ✔ On-time pickup
                </div>
              </div>
            </div>
          </div>

          {/* Mini brand strip */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {["Airport Pickup", "Outstation Tours", "Local Rides", "Corporate Travel"].map(
              (t) => (
                <div
                  key={t}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <div className="text-white font-extrabold">{t}</div>
                  <div className="text-xs text-slate-200 mt-1">
                    Travel-ready service
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ================= TRUST STATS ================= */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-extrabold">
                🛡️ Trust & Safety
              </div>
              <h2 className="mt-4 text-3xl font-black text-slate-900">
                A website that makes people believe instantly
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Conversion comes from clarity + credibility. This demo uses
                strong CTAs, social proof, service promises, and instant contact
                options so visitors take action fast.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="font-extrabold text-slate-900">What customers want</div>
                  <div className="mt-2 text-sm text-slate-600">
                    Clear rates, clean cars, driver verification, quick response.
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="font-extrabold text-slate-900">What we show</div>
                  <div className="mt-2 text-sm text-slate-600">
                    Testimonials, FAQ, 24×7 support, quick quote flow.
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <Stat k="On-time pickup promise" v="95%+" />
              <Stat k="Customer satisfaction" v="4.9★" />
              <Stat k="Quick response time" v="< 5 min" />
              <Stat k="Verified drivers" v="100%" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED CARS ================= */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-extrabold">
                🚗 Our Fleet
              </div>
              <h2 className="mt-4 text-3xl font-black text-slate-900">
                Choose the perfect car for your trip
              </h2>
              <p className="mt-2 text-slate-600">
                Local rides • Airport • Outstation • Family tours • Luxury travel
              </p>
            </div>

            <div className="flex gap-2">
              <Link
                href="/projects/car-Rental/rate"
                className="inline-flex justify-center px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-900 font-extrabold hover:bg-slate-50 transition"
              >
                Rate Card
              </Link>
              <Link
                href="/projects/car-Rental/booknow"
                className="inline-flex justify-center px-4 py-2 rounded-xl bg-green-600 text-white font-extrabold hover:bg-green-700 transition"
              >
                Book Now
              </Link>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <div
                key={car.name}
                className="rounded-[28px] border border-slate-200 bg-white overflow-hidden hover:shadow-sm transition"
              >
                <div className="relative h-48">
                  <Image
                    src={car.img}
                    alt={car.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={car.name === "Swift Dzire"}
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-extrabold">
                    {car.priceHint}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-lg font-extrabold text-slate-900">
                        {car.name}
                      </div>
                      <div className="mt-1 text-xs text-slate-500">
                        Best for: {car.bestFor}
                      </div>
                    </div>
                    <div className="text-xs font-extrabold px-3 py-1 rounded-full bg-green-100 text-green-700">
                      Available
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                      👥 {car.seats}
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                      ⛽ {car.fuel}
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <Link
                      href="/projects/car-Rental/booknow"
                      className="flex-1 inline-flex justify-center px-4 py-2 rounded-xl bg-slate-900 text-white font-extrabold hover:bg-slate-800 transition"
                    >
                      Book
                    </Link>
                    <Link
                      href="/projects/car-Rental/rate"
                      className="flex-1 inline-flex justify-center px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-900 font-extrabold hover:bg-slate-50 transition"
                    >
                      Price
                    </Link>
                  </div>

                  <div className="mt-3 text-xs text-slate-500">
                    *Final price depends on distance/time/toll & route.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Airport Pickup & Drop"
              desc="On-time pickup, tracking, and smooth airport transfers."
              tag="Most booked"
              points={[
                "Flight timing support",
                "Meet & assist (optional)",
                "Clean car guaranteed",
                "Instant WhatsApp confirmation",
              ]}
            />
            <ServiceCard
              title="Outstation Trips"
              desc="Reliable rides for long routes, family tours & business travel."
              tag="Best value"
              points={[
                "Sedan/MPV/SUV options",
                "Experienced highway drivers",
                "Transparent rate card",
                "Support during travel",
              ]}
            />
            <ServiceCard
              title="Local City Rides"
              desc="Hourly / point-to-point rides with fast response."
              tag="Fastest"
              points={[
                "Quick booking in minutes",
                "Affordable local packages",
                "Safe verified drivers",
                "Easy call/WhatsApp booking",
              ]}
            />
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Feature
              icon="🧼"
              title="Clean & Sanitized Cars"
              desc="We show cleanliness as a promise — builds trust and increases conversions."
            />
            <Feature
              icon="🧑‍✈️"
              title="Verified Drivers"
              desc="Driver verification, polite behavior, and safe driving commitment."
            />
            <Feature
              icon="💬"
              title="Instant WhatsApp Support"
              desc="Most Indian users convert faster on WhatsApp — we make it 1-tap."
            />
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-extrabold">
                ⭐ Social Proof
              </div>
              <h2 className="mt-4 text-3xl font-black text-slate-900">
                People trust what other people say
              </h2>
              <p className="mt-2 text-slate-600">
                Add real reviews later — this layout is ready for it.
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
              city="Raipur"
              line="Driver arrived 10 minutes early, car was clean, and pricing was transparent. Booking on WhatsApp was super easy."
            />
            <Testimonial
              name="Neha"
              city="Bilaspur"
              line="We booked for outstation tour. Great comfort and safe driving. Support team responded instantly."
            />
            <Testimonial
              name="Amit"
              city="Airport Transfer"
              line="Perfect airport drop. No last-minute surprises, and they confirmed details quickly."
            />
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-extrabold">
                ❓ FAQ
              </div>
              <h2 className="mt-4 text-3xl font-black text-slate-900">
                Questions before booking?
              </h2>
              <p className="mt-2 text-slate-600">
                Clear answers remove doubt — doubt kills conversion.
              </p>

              <div className="mt-6 flex gap-2">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center px-5 py-3 rounded-2xl bg-green-600 text-white font-extrabold hover:bg-green-700 transition"
                >
                  WhatsApp Now
                </a>
                <a
                  href={`tel:${phone}`}
                  className="inline-flex justify-center px-5 py-3 rounded-2xl border border-slate-200 bg-white text-slate-900 font-extrabold hover:bg-slate-50 transition"
                >
                  Call
                </a>
              </div>
            </div>

            <div className="grid gap-3">
              <FAQ
                q="How do I get the exact price?"
                a="Share pickup, drop, date & car type. We confirm the best rate instantly on WhatsApp/call."
              />
              <FAQ
                q="Do you provide airport pickup at night?"
                a="Yes. We support early morning / late-night pickups with advance confirmation."
              />
              <FAQ
                q="Is toll/parking included?"
                a="Usually toll/parking is extra as per route. The final amount is confirmed before trip start."
              />
              <FAQ
                q="How do I confirm booking?"
                a="Once you approve the quote, we share driver + car details and confirm your pickup time."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 sm:p-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-600 text-white text-xs font-extrabold">
                  🎉 Limited Offer (Demo)
                </div>
                <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white">
                  Ready to book your ride?
                </h2>
                <p className="mt-3 text-slate-200 leading-relaxed">
                  Tap WhatsApp or call — get instant availability & quote.
                  This section is designed to push the final conversion.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex justify-center px-6 py-3 rounded-2xl bg-green-600 text-white font-extrabold hover:bg-green-700 transition"
                  >
                    WhatsApp Booking
                  </a>
                  <a
                    href={`tel:${phone}`}
                    className="inline-flex justify-center px-6 py-3 rounded-2xl bg-white/10 text-white font-extrabold border border-white/15 hover:bg-white/15 transition"
                  >
                    Call {phone}
                  </a>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  ["No hidden charges", "Price confirmed before trip"],
                  ["Driver details shared", "For safety & trust"],
                  ["Clean car promise", "Sanitized, comfortable ride"],
                  ["Fast support", "WhatsApp & call"],
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

      {/* ================= STICKY MOBILE CTA ================= */}
      <div className="fixed bottom-3 left-0 right-0 z-50 px-4 sm:hidden">
        <div className="max-w-md mx-auto rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
          <div className="grid grid-cols-2">
            <a
              href={`tel:${phone}`}
              className="py-3 text-center font-extrabold text-slate-900 hover:bg-slate-50 transition"
            >
              📞 Call
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
              target="_blank"
              rel="noreferrer"
              className="py-3 text-center font-extrabold text-white bg-green-600 hover:bg-green-700 transition"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
