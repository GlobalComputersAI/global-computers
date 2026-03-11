"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white text-xs font-extrabold text-slate-800">
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
  action: React.ReactNode;
  icon: string;
}) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 hover:shadow-sm transition">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-xl">
          {icon}
        </div>
        <div className="min-w-0">
          <div className="text-lg font-extrabold text-slate-900">{title}</div>
          <p className="mt-1 text-sm text-slate-600 leading-relaxed">{desc}</p>
          <div className="mt-4">{action}</div>
        </div>
      </div>
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
    tripType: "Airport" as "Airport" | "Local" | "Outstation" | "Tour",
    carType: "Sedan" as "Sedan" | "MPV" | "SUV" | "Premium",
    message: "",
  });

  const isValidMobile = (m: string) => /^[6-9]\d{9}$/.test(m.replace(/\s+/g, ""));

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
    (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

  return (
    <main className="bg-slate-50">
      {/* Top strip */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="text-sm text-slate-200/80">
            <Link href="/projects/car-Rental" className="hover:text-white">
              Home
            </Link>{" "}
            <span className="text-slate-300">/</span>{" "}
            <span className="text-white font-semibold">Contact</span>
          </div>

          <div className="mt-4 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white text-xs font-extrabold">
                  ⚡ Fast Response
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white text-xs font-extrabold">
                  🛡️ Verified Drivers
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white text-xs font-extrabold">
                  💬 WhatsApp Booking
                </span>
              </div>

              <h1 className="mt-5 text-4xl sm:text-5xl font-black text-white leading-tight">
                Contact Us
                <span className="block text-green-400">Get Instant Quote & Availability</span>
              </h1>

              <p className="mt-4 text-slate-200 leading-relaxed max-w-xl">
                Call or WhatsApp — we confirm best pricing before the trip starts.
                Clean cars, transparent rates, and trusted travel experience.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${phone}`}
                  className="inline-flex justify-center px-6 py-3 rounded-2xl bg-white text-slate-900 font-extrabold hover:bg-slate-100 transition"
                >
                  📞 Call {phone}
                </a>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center px-6 py-3 rounded-2xl bg-green-600 text-white font-extrabold hover:bg-green-700 transition"
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
            <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur p-6 sm:p-7">
              <div className="text-white font-extrabold text-lg">
                Quick Contact Options
              </div>
              <p className="mt-2 text-sm text-slate-200">
                Choose the fastest way to reach us.
              </p>

              <div className="mt-5 grid gap-3">
                <a
                  href={`tel:${phone}`}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white font-extrabold hover:bg-white/15 transition"
                >
                  📞 Call Now
                  <div className="text-xs text-slate-200 mt-1 font-semibold">
                    Best for urgent pickup
                  </div>
                </a>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-green-600 px-4 py-3 text-white font-extrabold hover:bg-green-700 transition"
                >
                  💬 WhatsApp Quote
                  <div className="text-xs text-green-100 mt-1 font-semibold">
                    Fastest confirmation
                  </div>
                </a>

                <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white">
                  📍 Service Area
                  <div className="text-xs text-slate-200 mt-1 font-semibold">
                    City + Airport + Outstation Routes
                  </div>
                  <div className="mt-2 text-xs text-slate-300">
                    (Demo: Add exact city/location later)
                  </div>
                </div>

                <div className="text-xs text-slate-300">
                  *Final price is confirmed after route & timing verification.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-6">
          <Card
            icon="📞"
            title="Call for Booking"
            desc="Best option for immediate pickup or urgent travel."
            action={
              <a
                href={`tel:${phone}`}
                className="inline-flex justify-center px-5 py-3 rounded-2xl bg-slate-900 text-white font-extrabold hover:bg-slate-800 transition"
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
                className="inline-flex justify-center px-5 py-3 rounded-2xl bg-green-600 text-white font-extrabold hover:bg-green-700 transition"
              >
                WhatsApp Now
              </a>
            }
          />
          <Card
            icon="🧾"
            title="View Rate Card"
            desc="Check per-day / per-km rates and use the calculator."
            action={
              <Link
                href="/projects/car-Rental/rate"
                className="inline-flex justify-center px-5 py-3 rounded-2xl border border-slate-200 bg-white text-slate-900 font-extrabold hover:bg-slate-50 transition"
              >
                Open Rate Page
              </Link>
            }
          />
        </div>

        {/* Form + Sidebar */}
        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          {/* Form */}
          <div className="lg:col-span-2 rounded-[28px] border border-slate-200 bg-white overflow-hidden">
            <div className="p-6 sm:p-8 border-b bg-slate-50">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-extrabold">
                ✍️ Enquiry Form
              </div>
              <h2 className="mt-3 text-2xl font-black text-slate-900">
                Send your trip details
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                We will confirm availability + final price on call/WhatsApp.
              </p>
            </div>

            <div className="p-6 sm:p-8 grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
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

              <div className="grid sm:grid-cols-2 gap-4">
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

              <div className="grid sm:grid-cols-2 gap-4">
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

              <div className="grid sm:grid-cols-2 gap-4">
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
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                      if (!canSend) e.preventDefault();
                    }}
                    className={[
                      "flex-1 inline-flex justify-center px-5 py-3 rounded-2xl font-extrabold transition",
                      canSend
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "bg-green-600/40 text-white cursor-not-allowed",
                    ].join(" ")}
                  >
                    💬 Send on WhatsApp
                  </a>
                  <a
                    href={`tel:${phone}`}
                    className="flex-1 inline-flex justify-center px-5 py-3 rounded-2xl border border-slate-200 bg-white text-slate-900 font-extrabold hover:bg-slate-50 transition"
                  >
                    📞 Call Now
                  </a>
                </div>

                {!canSend && (
                  <p className="mt-3 text-xs text-slate-600">
                    Fill <b>Name</b>, <b>Mobile</b>, <b>Pickup</b> and <b>Drop</b> to send WhatsApp request.
                  </p>
                )}

                <p className="mt-3 text-xs text-slate-500">
                  * Final price may be less or more based on route & timing. We confirm before trip.
                  Negotiation allowed.
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
                  "✅ Clean & comfortable cars",
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
                  href="/projects/car-Rental/booknow"
                  className="flex-1 inline-flex justify-center px-4 py-2 rounded-xl bg-slate-900 text-white font-extrabold hover:bg-slate-800 transition"
                >
                  Book Now
                </Link>
                <Link
                  href="/projects/car-Rental/rate"
                  className="flex-1 inline-flex justify-center px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-900 font-extrabold hover:bg-slate-50 transition"
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
                  a="Share pickup, drop and time. We confirm final price on WhatsApp/call before trip."
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
                WhatsApp converts fastest. Send your route details and get quick confirmation.
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-full justify-center px-5 py-3 rounded-2xl bg-green-600 text-white font-extrabold hover:bg-green-700 transition"
              >
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA on mobile */}
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
              href={waLink}
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
