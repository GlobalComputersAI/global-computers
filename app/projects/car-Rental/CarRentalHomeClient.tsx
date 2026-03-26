"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type CarItem = {
  name: string;
  img: string;
  seats: string;
  fuel: string;
  bestFor: string;
  priceHint: string;
};

const ROUTES = {
  home: "/projects/car-Rental",
  book: "/projects/car-Rental/booknow",
  rate: "/projects/car-Rental/rate",
  contact: "/projects/car-Rental/contractus",
  billing: "/projects/car-Rental/billing",
  about: "/projects/car-Rental/aboutus",
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

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white">
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
    <div className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-xl text-white">
        {icon}
      </div>
      <div className="mt-4 text-lg font-extrabold text-slate-900">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
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
    <div className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-lg font-extrabold text-slate-900">{title}</div>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
        </div>
        <span className="shrink-0 rounded-full bg-green-100 px-3 py-1 text-xs font-extrabold text-green-700">
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

      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <Link
          href={ROUTES.book}
          className="inline-flex justify-center rounded-xl bg-slate-900 px-4 py-2 font-extrabold text-white transition hover:bg-slate-800"
        >
          Book Now
        </Link>
        <Link
          href={ROUTES.rate}
          className="inline-flex justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 font-extrabold text-slate-800 transition hover:bg-slate-50"
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
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 font-black text-white">
          {name.slice(0, 1).toUpperCase()}
        </div>
        <div>
          <div className="font-extrabold text-slate-900">{name}</div>
          <div className="text-xs text-slate-500">{city}</div>
        </div>
        <div className="ml-auto text-sm text-yellow-500">★★★★★</div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-700">“{line}”</p>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-slate-200 bg-white p-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
        <div className="font-extrabold text-slate-900">{q}</div>
        <span className="text-slate-400 transition group-open:rotate-45">＋</span>
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{a}</p>
    </details>
  );
}

function PopupStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
      <div className="text-xl font-black text-slate-900 sm:text-2xl">{value}</div>
      <div className="mt-1 text-[11px] font-semibold text-slate-600 sm:text-xs">
        {label}
      </div>
    </div>
  );
}

export default function CarRentalHomeClient() {
  const phone = "+919752422686";
  const whatsappNumber = "919752422686";

  const whatsappText = encodeURIComponent(
    "Hi! I want to book a taxi/car. Please share price & availability.\nPickup:\nDrop:\nDate:\nTime:\nCar Type:"
  );

  const popupText = encodeURIComponent(
    "Hi! I want this car rental / taxi booking website for my business. Please share full details, price and delivery time."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;
  const popupWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${popupText}`;
  const callUrl = `tel:${phone}`;

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowPopup(true);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showPopup]);

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm">
          <div className="flex h-[100dvh] items-center justify-center p-0 sm:p-4">
            <div className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-white shadow-2xl sm:h-auto sm:max-h-[92vh] sm:max-w-5xl sm:rounded-[32px] sm:border sm:border-slate-200">
              <button
                type="button"
                onClick={() => setShowPopup(false)}
                className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-100 sm:right-4 sm:top-4"
                aria-label="Close popup"
              >
                ✕
              </button>

              <div className="grid min-h-0 flex-1 lg:grid-cols-2">
                <div className="overflow-y-auto bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-5 text-white sm:p-8">
                  <div className="inline-flex items-center rounded-full bg-green-600 px-3 py-1 text-[11px] font-extrabold sm:text-xs">
                    🚀 Website for Taxi & Travel Business Owners
                  </div>

                  <h2 className="mt-4 text-2xl font-black leading-tight sm:text-3xl">
                    Get more enquiries with a
                    <span className="block text-green-400">
                      modern car rental booking website
                    </span>
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed text-slate-200">
                    If you run a taxi service, car rental business, or travel
                    agency, this website helps turn visitors into direct calls and
                    WhatsApp enquiries with a premium, trusted look.
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                      <div className="text-xl font-black sm:text-2xl">More Leads</div>
                      <div className="mt-1 text-[11px] text-slate-200 sm:text-xs">
                        More direct booking enquiries
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                      <div className="text-xl font-black sm:text-2xl">Trust</div>
                      <div className="mt-1 text-[11px] text-slate-200 sm:text-xs">
                        Professional business image
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                      <div className="text-xl font-black sm:text-2xl">24×7</div>
                      <div className="mt-1 text-[11px] text-slate-200 sm:text-xs">
                        Online presence all the time
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                      <div className="text-xl font-black sm:text-2xl">SEO</div>
                      <div className="mt-1 text-[11px] text-slate-200 sm:text-xs">
                        Better local Google visibility
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-4">
                    <div className="text-sm font-extrabold text-white">
                      Best for:
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-slate-200">
                      Taxi operators, car rental owners, cab services, airport
                      transfer providers, outstation travel businesses, and travel
                      agencies.
                    </div>
                  </div>
                </div>

                <div className="flex min-h-0 flex-col bg-white">
                  <div className="flex-1 overflow-y-auto p-5 pb-28 sm:p-8 sm:pb-8">
                    <div className="pr-10 text-sm font-extrabold text-green-700">
                      Why this website helps your business
                    </div>
                    <h3 className="mt-2 pr-10 text-2xl font-black text-slate-900">
                      More trust. More calls. More bookings.
                    </h3>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <PopupStat value="+35%" label="Better customer trust" />
                      <PopupStat value="+50%" label="More WhatsApp enquiries" />
                      <PopupStat value="Premium" label="Modern business image" />
                      <PopupStat value="Fast" label="Quick customer action" />
                    </div>

                    <div className="mt-5 grid gap-2 text-sm text-slate-700">
                      {[
                        "✅ Professional homepage for your business",
                        "✅ WhatsApp + Call booking flow",
                        "✅ Rate card section for customer clarity",
                        "✅ Billing page for a more professional image",
                        "✅ Mobile-friendly modern design",
                        "✅ Local SEO-ready structure",
                        "✅ Better trust for new customers",
                        "✅ Helps small travel businesses look bigger and stronger",
                      ].map((item) => (
                        <div key={item} className="flex gap-2">
                          <span className="mt-0.5">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="text-sm font-extrabold text-slate-900">
                        Business advantage
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-700">
                        Many taxi and travel businesses lose customers because they
                        only depend on phone calls or unstructured WhatsApp chats.
                        A proper website makes your business look trusted, active,
                        and ready for booking.
                      </p>
                    </div>

                    <p className="mt-4 text-xs text-slate-500">
                      This demo is made to help taxi, car rental, and travel
                      businesses convert more visitors into enquiries.
                    </p>
                  </div>

                  <div className="sticky bottom-0 border-t border-slate-200 bg-white p-4 sm:static sm:border-t-0 sm:px-8 sm:pb-8 sm:pt-0">
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <a
                        href={popupWhatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex flex-1 justify-center rounded-2xl bg-green-600 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-green-700 sm:text-base"
                      >
                        💬 Get This Website
                      </a>
                      <a
                        href={callUrl}
                        className="inline-flex flex-1 justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-slate-50 sm:text-base"
                      >
                        📞 Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="bg-slate-50">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="h-full w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_55%)] opacity-25" />
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-green-500/20 blur-3xl" />
            <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="flex flex-wrap gap-2">
                  <Badge>🚖 Trusted Taxi Service</Badge>
                  <Badge>🧳 Travel & Outstation</Badge>
                  <Badge>🛬 Airport Pickup</Badge>
                  <Badge>⚡ 5-min Quote</Badge>
                </div>

                <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl">
                  Travel Safe. Arrive On Time.
                  <span className="block text-green-400">
                    Book a Car in 60 Seconds.
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
                  Premium car rental & taxi demo with high-conversion booking flow.
                  Clean cars, verified drivers, transparent pricing — built to win
                  trust instantly.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={ROUTES.book}
                    className="inline-flex justify-center rounded-2xl bg-green-600 px-6 py-3 font-extrabold text-white transition hover:bg-green-700"
                  >
                    ✅ Get Instant Quote
                  </Link>
                  <Link
                    href={ROUTES.rate}
                    className="inline-flex justify-center rounded-2xl border border-white/15 bg-white/10 px-6 py-3 font-extrabold text-white transition hover:bg-white/15"
                  >
                    View Rate Card
                  </Link>
                </div>

                <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                    <div className="text-lg font-black text-white">4.9★</div>
                    <div className="mt-1 text-xs text-slate-200">Customer Rating</div>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                    <div className="text-lg font-black text-white">24×7</div>
                    <div className="mt-1 text-xs text-slate-200">Support</div>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                    <div className="text-lg font-black text-white">Fast</div>
                    <div className="mt-1 text-xs text-slate-200">Pickup Times</div>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-lg font-extrabold text-white">
                    Quick Booking Request
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white">
                    🚗
                  </div>
                </div>

                <p className="mt-2 text-sm text-slate-200">
                  Fill basic details — we confirm availability & pricing on
                  call/WhatsApp.
                </p>

                <div className="mt-5 grid gap-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold text-slate-200">
                        Pickup Location
                      </label>
                      <input
                        className="mt-1 w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-300 focus:ring-2 focus:ring-green-500/60"
                        placeholder="e.g. Raipur Railway Station"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-200">
                        Drop Location
                      </label>
                      <input
                        className="mt-1 w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-300 focus:ring-2 focus:ring-green-500/60"
                        placeholder="e.g. Airport / Bilaspur"
                      />
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-200">Date</label>
                      <input
                        type="date"
                        className="mt-1 w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-green-500/60"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-200">Time</label>
                      <input
                        type="time"
                        className="mt-1 w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-green-500/60"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-200">
                        Car Type
                      </label>
                      <select className="mt-1 w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-green-500/60">
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

                  <div className="grid gap-3 sm:grid-cols-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex justify-center rounded-2xl bg-green-600 px-5 py-3 font-extrabold text-white transition hover:bg-green-700"
                    >
                      WhatsApp for Quote
                    </a>
                    <a
                      href={callUrl}
                      className="inline-flex justify-center rounded-2xl border border-white/15 bg-white/10 px-5 py-3 font-extrabold text-white transition hover:bg-white/15"
                    >
                      Call Now
                    </a>
                  </div>

                  <div className="text-xs text-slate-200/90">
                    ✔ Transparent pricing • ✔ Clean cars • ✔ Verified drivers • ✔
                    On-time pickup
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                "Airport Pickup",
                "Outstation Tours",
                "Local Rides",
                "Corporate Travel",
              ].map((t) => (
                <div
                  key={t}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <div className="font-extrabold text-white">{t}</div>
                  <div className="mt-1 text-xs text-slate-200">
                    Travel-ready service
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="border-b bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-extrabold text-green-700">
                  🛡️ Trust & Safety
                </div>
                <h2 className="mt-4 text-3xl font-black text-slate-900">
                  A website that makes people believe instantly
                </h2>
                <p className="mt-3 leading-relaxed text-slate-600">
                  Conversion comes from clarity + credibility. This demo uses
                  strong CTAs, social proof, service promises, and instant contact
                  options so visitors take action fast.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="font-extrabold text-slate-900">
                      What customers want
                    </div>
                    <div className="mt-2 text-sm text-slate-600">
                      Clear rates, clean cars, driver verification, quick response.
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="font-extrabold text-slate-900">
                      What we show
                    </div>
                    <div className="mt-2 text-sm text-slate-600">
                      Testimonials, FAQ, 24×7 support, quick quote flow.
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Stat k="On-time pickup promise" v="95%+" />
                <Stat k="Customer satisfaction" v="4.9★" />
                <Stat k="Quick response time" v="< 5 min" />
                <Stat k="Verified drivers" v="100%" />
              </div>
            </div>
          </div>
        </section>

        {/* CARS */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-extrabold text-white">
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
                  href={ROUTES.rate}
                  className="inline-flex justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 font-extrabold text-slate-900 transition hover:bg-slate-50"
                >
                  Rate Card
                </Link>
                <Link
                  href={ROUTES.book}
                  className="inline-flex justify-center rounded-xl bg-green-600 px-4 py-2 font-extrabold text-white transition hover:bg-green-700"
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cars.map((car) => (
                <div
                  key={car.name}
                  className="overflow-hidden rounded-[28px] border border-slate-200 bg-white transition hover:shadow-sm"
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
                    <div className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-extrabold text-white">
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
                      <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-extrabold text-green-700">
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
                        href={ROUTES.book}
                        className="inline-flex flex-1 justify-center rounded-xl bg-slate-900 px-4 py-2 font-extrabold text-white transition hover:bg-slate-800"
                      >
                        Book
                      </Link>
                      <Link
                        href={ROUTES.rate}
                        className="inline-flex flex-1 justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 font-extrabold text-slate-900 transition hover:bg-slate-50"
                      >
                        Price
                      </Link>
                    </div>

                    <div className="mt-3 text-xs text-slate-500">
                      *Final price depends on distance, time, toll, parking, and route.
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="border-y bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
            <div className="grid gap-6 lg:grid-cols-3">
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

            <div className="mt-10 grid gap-6 md:grid-cols-3">
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

        {/* TESTIMONIALS */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-extrabold text-green-700">
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
                href={ROUTES.contact}
                className="inline-flex justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 font-extrabold text-slate-900 transition hover:bg-slate-50"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
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

        {/* FAQ */}
        <section className="border-y bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-extrabold text-white">
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
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex justify-center rounded-2xl bg-green-600 px-5 py-3 font-extrabold text-white transition hover:bg-green-700"
                  >
                    WhatsApp Now
                  </a>
                  <a
                    href={callUrl}
                    className="inline-flex justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 font-extrabold text-slate-900 transition hover:bg-slate-50"
                  >
                    Call
                  </a>
                </div>
              </div>

              <div className="grid gap-3">
                <FAQ
                  q="How do I get the exact price?"
                  a="Share pickup, drop, date, and car type. We confirm the best rate instantly on WhatsApp or call."
                />
                <FAQ
                  q="Do you provide airport pickup at night?"
                  a="Yes. We support early morning and late-night pickups with advance confirmation."
                />
                <FAQ
                  q="Is toll/parking included?"
                  a="Usually toll and parking are extra as per route. The final amount is confirmed before trip start."
                />
                <FAQ
                  q="How do I confirm booking?"
                  a="Once you approve the quote, we share driver and car details and confirm your pickup time."
                />
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 sm:p-10">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-green-600 px-3 py-1 text-xs font-extrabold text-white">
                    🎉 Limited Offer (Demo)
                  </div>
                  <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                    Ready to book your ride?
                  </h2>
                  <p className="mt-3 leading-relaxed text-slate-200">
                    Tap WhatsApp or call — get instant availability & quote. This
                    section is designed to push the final conversion.
                  </p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex justify-center rounded-2xl bg-green-600 px-6 py-3 font-extrabold text-white transition hover:bg-green-700"
                    >
                      WhatsApp Booking
                    </a>
                    <a
                      href={callUrl}
                      className="inline-flex justify-center rounded-2xl border border-white/15 bg-white/10 px-6 py-3 font-extrabold text-white transition hover:bg-white/15"
                    >
                      Call {phone}
                    </a>
                  </div>

                  <div className="mt-4">
                    <Link
                      href={ROUTES.home}
                      className="inline-flex justify-center rounded-2xl border border-white/15 bg-transparent px-6 py-3 font-extrabold text-white transition hover:bg-white/10"
                    >
                      Back to Car Rental Home
                    </Link>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
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
                      <div className="font-extrabold text-white">{t}</div>
                      <div className="mt-1 text-sm text-slate-200">{s}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MOBILE CTA */}
        <div className="fixed bottom-3 left-0 right-0 z-50 px-4 sm:hidden">
          <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
            <div className="grid grid-cols-2">
              <a
                href={callUrl}
                className="py-3 text-center font-extrabold text-slate-900 transition hover:bg-slate-50"
              >
                📞 Call
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 py-3 text-center font-extrabold text-white transition hover:bg-green-700"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}