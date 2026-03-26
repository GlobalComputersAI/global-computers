"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";

type TripType = "Airport" | "Local" | "Outstation" | "Tour";
type CarType = "Sedan" | "MPV" | "SUV" | "Premium";

const BASE_PATH = "/projects/car-Rental";

const ROUTES = {
  home: `${BASE_PATH}`,
  rate: `${BASE_PATH}/rate`,
  book: `${BASE_PATH}/booknow`,
  billing: `${BASE_PATH}/billing`,
  about: `${BASE_PATH}/aboutus`,
  contact: `${BASE_PATH}/contractus`,
};

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-extrabold text-slate-800">
      {children}
    </span>
  );
}

function Card({
  title,
  desc,
  action,
  icon,
}: {
  title: string;
  desc: string;
  action: ReactNode;
  icon: string;
}) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 transition hover:shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-xl text-white">
          {icon}
        </div>
        <div className="min-w-0">
          <div className="text-lg font-extrabold text-slate-900">{title}</div>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">{desc}</p>
          <div className="mt-4">{action}</div>
        </div>
      </div>
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

export default function ContactUsCarRental() {
  const phone = "+919752422686";
  const whatsappNumber = "919752422686";

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    pickup: "",
    drop: "",
    date: "",
    time: "",
    tripType: "Airport" as TripType,
    carType: "Sedan" as CarType,
    message: "",
  });

  const isValidMobile = (mobile: string) => {
    const cleaned = mobile.replace(/\D/g, "");
    return /^[6-9]\d{9}$/.test(cleaned);
  };

  const canSend = useMemo(() => {
    return (
      form.name.trim().length >= 2 &&
      isValidMobile(form.mobile) &&
      form.pickup.trim().length >= 3 &&
      form.drop.trim().length >= 3
    );
  }, [form]);

  const waText = useMemo(() => {
    const lines = [
      "🚖 *Contact / Enquiry*",
      "",
      `👤 Name: ${form.name || "-"}`,
      `📞 Mobile: ${form.mobile || "-"}`,
      `🧭 Trip Type: ${form.tripType}`,
      `🚘 Car Type: ${form.carType}`,
      "",
      `📍 Pickup: ${form.pickup || "-"}`,
      `📍 Drop: ${form.drop || "-"}`,
      `📅 Date: ${form.date || "-"}`,
      `⏰ Time: ${form.time || "-"}`,
      "",
      `📝 Message: ${form.message || "-"}`,
      "",
      "Please share best price & availability. Negotiation allowed 🙂",
    ];
    return encodeURIComponent(lines.join("\n"));
  }, [form]);

  const waLink = `https://wa.me/${whatsappNumber}?text=${waText}`;

  const onChange =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <main className="bg-slate-50">
      {/* Top strip */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_55%)] opacity-25" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="text-sm text-slate-200/80">
            <Link href={ROUTES.home} className="hover:text-white">
              Home
            </Link>{" "}
            <span className="text-slate-300">/</span>{" "}
            <span className="font-semibold text-white">Contact</span>
          </div>

          <div className="mt-4 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold text-white">
                  ⚡ Fast Response
                </span>
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold text-white">
                  🛡️ Verified Drivers
                </span>
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold text-white">
                  💬 WhatsApp Booking
                </span>
              </div>

              <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
                Contact Us
                <span className="block text-green-400">
                  Get Instant Quote & Availability
                </span>
              </h1>

              <p className="mt-4 max-w-xl leading-relaxed text-slate-200">
                Call or WhatsApp — we confirm best pricing before the trip
                starts. Clean cars, transparent rates, and a trusted travel
                experience.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${phone}`}
                  className="inline-flex justify-center rounded-2xl bg-white px-6 py-3 font-extrabold text-slate-900 transition hover:bg-slate-100"
                >
                  📞 Call {phone}
                </a>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center rounded-2xl bg-green-600 px-6 py-3 font-extrabold text-white transition hover:bg-green-700"
                >
                  💬 WhatsApp Now
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                <Pill>✅ Transparent pricing</Pill>
                <Pill>✅ Negotiation allowed</Pill>
                <Pill>✅ Airport • Local • Outstation</Pill>
              </div>
            </div>

            {/* Mini Trust Box */}
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-7">
              <div className="text-lg font-extrabold text-white">
                Quick Contact Options
              </div>
              <p className="mt-2 text-sm text-slate-200">
                Choose the fastest way to reach us.
              </p>

              <div className="mt-5 grid gap-3">
                <a
                  href={`tel:${phone}`}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-extrabold text-white transition hover:bg-white/15"
                >
                  📞 Call Now
                  <div className="mt-1 text-xs font-semibold text-slate-200">
                    Best for urgent pickup
                  </div>
                </a>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-green-600 px-4 py-3 font-extrabold text-white transition hover:bg-green-700"
                >
                  💬 WhatsApp Quote
                  <div className="mt-1 text-xs font-semibold text-green-100">
                    Fastest confirmation
                  </div>
                </a>

                <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white">
                  📍 Service Area
                  <div className="mt-1 text-xs font-semibold text-slate-200">
                    City + Airport + Outstation Routes
                  </div>
                  <div className="mt-2 text-xs text-slate-300">
                    (Demo: Add exact city/location later)
                  </div>
                </div>

                <div className="text-xs text-slate-300">
                  * Final price is confirmed after route and timing verification.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card
            icon="📞"
            title="Call for Booking"
            desc="Best option for immediate pickup or urgent travel."
            action={
              <a
                href={`tel:${phone}`}
                className="inline-flex justify-center rounded-2xl bg-slate-900 px-5 py-3 font-extrabold text-white transition hover:bg-slate-800"
              >
                Call {phone}
              </a>
            }
          />

          <Card
            icon="💬"
            title="WhatsApp for Best Price"
            desc="Send details and get the best quote quickly. Negotiation allowed."
            action={
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center rounded-2xl bg-green-600 px-5 py-3 font-extrabold text-white transition hover:bg-green-700"
              >
                WhatsApp Now
              </a>
            }
          />

          <Card
            icon="🧾"
            title="View Rate Card"
            desc="Check per-day and per-km rates and use the calculator."
            action={
              <Link
                href={ROUTES.rate}
                className="inline-flex justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 font-extrabold text-slate-900 transition hover:bg-slate-50"
              >
                Open Rate Page
              </Link>
            }
          />
        </div>

        {/* Form + Sidebar */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Form */}
          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white lg:col-span-2">
            <div className="border-b bg-slate-50 p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-extrabold text-green-700">
                ✍️ Enquiry Form
              </div>
              <h2 className="mt-3 text-2xl font-black text-slate-900">
                Send your trip details
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                We confirm availability and final price on call or WhatsApp.
              </p>
            </div>

            <div className="grid gap-4 p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <div className="text-xs font-semibold text-slate-600">Name *</div>
                  <input
                    value={form.name}
                    onChange={onChange("name")}
                    placeholder="Your full name"
                    className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                  />
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-600">Mobile *</div>
                  <input
                    value={form.mobile}
                    onChange={onChange("mobile")}
                    placeholder="10-digit mobile"
                    inputMode="numeric"
                    className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                  />
                  {form.mobile && !isValidMobile(form.mobile) && (
                    <p className="mt-1 text-xs text-red-600">
                      Enter valid Indian mobile (10 digits).
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <div className="text-xs font-semibold text-slate-600">Trip Type</div>
                  <select
                    value={form.tripType}
                    onChange={onChange("tripType")}
                    className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                  >
                    <option value="Airport">Airport Pickup/Drop</option>
                    <option value="Local">Local City Ride</option>
                    <option value="Outstation">Outstation</option>
                    <option value="Tour">Tour Package</option>
                  </select>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-600">Car Type</div>
                  <select
                    value={form.carType}
                    onChange={onChange("carType")}
                    className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                  >
                    <option value="Sedan">Sedan (Dzire)</option>
                    <option value="MPV">MPV (Ertiga / XL6)</option>
                    <option value="SUV">SUV (Scorpio)</option>
                    <option value="Premium">Premium (Innova / Audi)</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <div className="text-xs font-semibold text-slate-600">Pickup *</div>
                  <input
                    value={form.pickup}
                    onChange={onChange("pickup")}
                    placeholder="Pickup location"
                    className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                  />
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-600">Drop *</div>
                  <input
                    value={form.drop}
                    onChange={onChange("drop")}
                    placeholder="Drop location"
                    className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <div className="text-xs font-semibold text-slate-600">Date</div>
                  <input
                    type="date"
                    value={form.date}
                    onChange={onChange("date")}
                    className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                  />
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-600">Time</div>
                  <input
                    type="time"
                    value={form.time}
                    onChange={onChange("time")}
                    className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                  />
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold text-slate-600">Message</div>
                <textarea
                  value={form.message}
                  onChange={onChange("message")}
                  rows={4}
                  placeholder="Any special requirement? (AC, luggage, return trip...)"
                  className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                      if (!canSend) e.preventDefault();
                    }}
                    className={[
                      "inline-flex flex-1 justify-center rounded-2xl px-5 py-3 font-extrabold transition",
                      canSend
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "cursor-not-allowed bg-green-600/40 text-white",
                    ].join(" ")}
                  >
                    💬 Send on WhatsApp
                  </a>

                  <a
                    href={`tel:${phone}`}
                    className="inline-flex flex-1 justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 font-extrabold text-slate-900 transition hover:bg-slate-50"
                  >
                    📞 Call Now
                  </a>
                </div>

                {!canSend && (
                  <p className="mt-3 text-xs text-slate-600">
                    Fill <b>Name</b>, <b>Mobile</b>, <b>Pickup</b> and <b>Drop</b> to send
                    WhatsApp request.
                  </p>
                )}

                <p className="mt-3 text-xs text-slate-500">
                  * Final price may be less or more based on route and timing. We confirm
                  before trip. Negotiation allowed.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="grid gap-6">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6">
              <div className="text-lg font-extrabold text-slate-900">Why trust us?</div>
              <div className="mt-4 grid gap-2 text-sm text-slate-700">
                {[
                  "✅ On-time pickup promise",
                  "✅ Verified drivers",
                  "✅ Clean and comfortable cars",
                  "✅ Transparent rates",
                  "✅ 24×7 support (optional)",
                ].map((x) => (
                  <div key={x} className="flex gap-2">
                    <span className="mt-0.5">•</span>
                    <span>{x}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex gap-2">
                <Link
                  href={ROUTES.book}
                  className="inline-flex flex-1 justify-center rounded-xl bg-slate-900 px-4 py-2 font-extrabold text-white transition hover:bg-slate-800"
                >
                  Book Now
                </Link>
                <Link
                  href={ROUTES.rate}
                  className="inline-flex flex-1 justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 font-extrabold text-slate-900 transition hover:bg-slate-50"
                >
                  Rates
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-6">
              <div className="text-lg font-extrabold text-slate-900">FAQ</div>
              <div className="mt-4 grid gap-3">
                <FAQ
                  q="How do I get the exact final price?"
                  a="Share pickup, drop, and time. We confirm final price on WhatsApp or call before the trip."
                />
                <FAQ
                  q="Do you provide night pickup?"
                  a="Yes. Night charges may apply depending on timing. We confirm clearly in advance."
                />
                <FAQ
                  q="Is negotiation possible?"
                  a="Yes, negotiation is allowed. We try to provide the best possible rate."
                />
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-green-50 p-6">
              <div className="font-extrabold text-green-800">⚡ Fastest Option</div>
              <p className="mt-2 text-sm text-green-800/90">
                WhatsApp converts fastest. Send your route details and get quick
                confirmation.
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-full justify-center rounded-2xl bg-green-600 px-5 py-3 font-extrabold text-white transition hover:bg-green-700"
              >
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA on mobile */}
      <div className="fixed bottom-3 left-0 right-0 z-50 px-4 sm:hidden">
        <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
          <div className="grid grid-cols-2">
            <a
              href={`tel:${phone}`}
              className="py-3 text-center font-extrabold text-slate-900 transition hover:bg-slate-50"
            >
              📞 Call
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => {
                if (!canSend) e.preventDefault();
              }}
              className={[
                "py-3 text-center font-extrabold text-white transition",
                canSend
                  ? "bg-green-600 hover:bg-green-700"
                  : "cursor-not-allowed bg-green-600/40",
              ].join(" ")}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}