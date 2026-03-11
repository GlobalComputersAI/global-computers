"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function BookNowPage() {
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
    passengers: "1-2",
    notes: "",
  });

  const isValidMobile = (m: string) => {
    const v = m.replace(/\s+/g, "");
    return /^[6-9]\d{9}$/.test(v);
  };

  const canSubmit = useMemo(() => {
    return (
      form.name.trim().length >= 2 &&
      isValidMobile(form.mobile) &&
      form.pickup.trim().length >= 3 &&
      form.drop.trim().length >= 3 &&
      form.date.trim().length > 0 &&
      form.time.trim().length > 0
    );
  }, [form]);

  const whatsappText = useMemo(() => {
    const lines = [
      "🚗 *New Booking Request*",
      "",
      `👤 Name: ${form.name || "-"}`,
      `📞 Mobile: ${form.mobile || "-"}`,
      `🧭 Trip Type: ${form.tripType}`,
      `🚘 Car Type: ${form.carType}`,
      `👥 Passengers: ${form.passengers}`,
      "",
      `📍 Pickup: ${form.pickup || "-"}`,
      `📍 Drop: ${form.drop || "-"}`,
      `📅 Date: ${form.date || "-"}`,
      `⏰ Time: ${form.time || "-"}`,
      "",
      `📝 Notes: ${form.notes || "-"}`,
      "",
      "Please share price & availability. धन्यवाद 🙏",
    ];
    return encodeURIComponent(lines.join("\n"));
  }, [form]);

  const waLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  const onChange = (k: keyof typeof form) => (e: any) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  return (
    <main className="bg-slate-50">
      {/* Top bar */}
      <section className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <div className="text-sm text-slate-500">
              <Link href="/projects/car-Rental" className="hover:text-slate-900">
                Home
              </Link>{" "}
              <span className="text-slate-300">/</span>{" "}
              <span className="text-slate-900 font-semibold">Book Now</span>
            </div>
            <h1 className="mt-2 text-2xl sm:text-3xl font-black text-slate-900">
              Book Your Ride (Instant Quote)
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Fill details → get quote on WhatsApp/call within minutes.
            </p>
          </div>

          <div className="flex gap-2">
            <a
              href={`tel:${phone}`}
              className="inline-flex justify-center px-4 py-2 rounded-xl border border-slate-200 bg-white font-extrabold text-slate-900 hover:bg-slate-50 transition"
            >
              📞 Call
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center px-4 py-2 rounded-xl bg-green-600 text-white font-extrabold hover:bg-green-700 transition"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* FORM */}
          <div className="lg:col-span-2">
            <div className="rounded-[28px] border border-slate-200 bg-white overflow-hidden">
              <div className="p-6 sm:p-8 border-b bg-slate-50">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-extrabold">
                      ✅ High-conversion Booking Form
                    </div>
                    <h2 className="mt-3 text-xl sm:text-2xl font-black text-slate-900">
                      Tell us your trip details
                    </h2>
                    <p className="mt-1 text-sm text-slate-600">
                      We confirm car availability + final price before trip start.
                    </p>
                  </div>

                  <div className="hidden sm:flex flex-col items-end">
                    <div className="text-xs text-slate-500">Support</div>
                    <div className="font-black text-slate-900">{phone}</div>
                    <div className="text-xs text-slate-500">24×7 (Demo)</div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                {/* Trust badges */}
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    ["🛡️ Verified drivers", "Safety first"],
                    ["🧼 Clean cars", "Sanitized & maintained"],
                    ["💰 Transparent pricing", "No surprises"],
                  ].map(([t, s]) => (
                    <div
                      key={t}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="font-extrabold text-slate-900 text-sm">
                        {t}
                      </div>
                      <div className="text-xs text-slate-600 mt-1">{s}</div>
                    </div>
                  ))}
                </div>

                {/* Inputs */}
                <div className="mt-6 grid gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-600">
                        Full Name *
                      </label>
                      <input
                        value={form.name}
                        onChange={onChange("name")}
                        placeholder="e.g. Gaurav Sah"
                        className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                      />
                      {form.name && form.name.trim().length < 2 && (
                        <p className="mt-1 text-xs text-red-600">
                          Enter your name (min 2 chars).
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-600">
                        Mobile Number *
                      </label>
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
                      <label className="text-xs font-semibold text-slate-600">
                        Trip Type
                      </label>
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
                      <label className="text-xs font-semibold text-slate-600">
                        Car Type
                      </label>
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

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-600">
                        Date *
                      </label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={onChange("date")}
                        className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-600">
                        Time *
                      </label>
                      <input
                        type="time"
                        value={form.time}
                        onChange={onChange("time")}
                        className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-600">
                        Passengers
                      </label>
                      <select
                        value={form.passengers}
                        onChange={onChange("passengers")}
                        className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                      >
                        <option value="1-2">1–2</option>
                        <option value="3-4">3–4</option>
                        <option value="5-6">5–6</option>
                        <option value="7+">7+</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-600">
                        Pickup Location *
                      </label>
                      <input
                        value={form.pickup}
                        onChange={onChange("pickup")}
                        placeholder="e.g. Raipur Station / Hotel / Home"
                        className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-600">
                        Drop Location *
                      </label>
                      <input
                        value={form.drop}
                        onChange={onChange("drop")}
                        placeholder="e.g. Airport / Bilaspur / Durg"
                        className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-600">
                      Notes (optional)
                    </label>
                    <textarea
                      value={form.notes}
                      onChange={onChange("notes")}
                      placeholder="e.g. Need luggage space / AC / return trip"
                      rows={4}
                      className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                    />
                  </div>

                  {/* Actions */}
                  <div className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noreferrer"
                        className={[
                          "flex-1 inline-flex justify-center px-5 py-3 rounded-2xl font-extrabold transition",
                          canSubmit
                            ? "bg-green-600 text-white hover:bg-green-700"
                            : "bg-green-600/40 text-white cursor-not-allowed",
                        ].join(" ")}
                        aria-disabled={!canSubmit}
                        onClick={(e) => {
                          if (!canSubmit) e.preventDefault();
                        }}
                      >
                        💬 Send on WhatsApp
                      </a>

                      <a
                        href={`tel:${phone}`}
                        className="flex-1 inline-flex justify-center px-5 py-3 rounded-2xl font-extrabold border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 transition"
                      >
                        📞 Call for Booking
                      </a>
                    </div>

                    {!canSubmit && (
                      <p className="mt-3 text-xs text-slate-600">
                        Fill <b>Name</b>, <b>Mobile</b>, <b>Pickup</b>, <b>Drop</b>,
                        <b>Date</b> & <b>Time</b> to send WhatsApp request.
                      </p>
                    )}
                  </div>

                  <div className="text-xs text-slate-500">
                    By submitting, you agree to receive a call/WhatsApp for booking
                    confirmation. (Demo text)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="grid gap-6">
            {/* What happens next */}
            <div className="rounded-[28px] border border-slate-200 bg-white p-6">
              <div className="text-lg font-extrabold text-slate-900">
                What happens next?
              </div>
              <div className="mt-4 grid gap-3 text-sm text-slate-700">
                {[
                  ["1", "We receive your request (WhatsApp/call)."],
                  ["2", "We confirm car availability + final price."],
                  ["3", "We share driver & car details before pickup."],
                  ["4", "On-time pickup and smooth ride."],
                ].map(([n, t]) => (
                  <div key={n} className="flex gap-3">
                    <div className="h-8 w-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black">
                      {n}
                    </div>
                    <div className="leading-relaxed">{t}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-green-50 border border-green-200 p-4">
                <div className="font-extrabold text-green-800">
                  ⚡ Quick Response
                </div>
                <div className="text-sm text-green-800/90 mt-1">
                  We usually reply within 5 minutes (Demo claim).
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="rounded-[28px] border border-slate-200 bg-white p-6">
              <div className="text-lg font-extrabold text-slate-900">
                Why customers choose us
              </div>
              <div className="mt-4 grid gap-2 text-sm text-slate-700">
                {[
                  "✅ Clean, well-maintained cars",
                  "✅ Verified & polite drivers",
                  "✅ Transparent pricing",
                  "✅ 24×7 support (optional)",
                  "✅ Local + Outstation + Airport",
                ].map((x) => (
                  <div key={x} className="flex gap-2">
                    <span className="mt-0.5">•</span>
                    <span>{x}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex gap-2">
                <Link
                  href="/projects/car-Rental/rate"
                  className="flex-1 inline-flex justify-center px-4 py-2 rounded-xl border border-slate-200 bg-white font-extrabold text-slate-900 hover:bg-slate-50 transition"
                >
                  View Rates
                </Link>
                <Link
                  href="/projects/car-Rental/contractus"
                  className="flex-1 inline-flex justify-center px-4 py-2 rounded-xl bg-slate-900 text-white font-extrabold hover:bg-slate-800 transition"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Mini FAQ */}
            <div className="rounded-[28px] border border-slate-200 bg-white p-6">
              <div className="text-lg font-extrabold text-slate-900">FAQ</div>
              <div className="mt-4 grid gap-3">
                <details className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <summary className="cursor-pointer font-extrabold text-slate-900">
                    Is toll/parking included?
                  </summary>
                  <p className="mt-2 text-sm text-slate-600">
                    Usually toll/parking is extra as per route. Final amount is
                    confirmed before start.
                  </p>
                </details>

                <details className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <summary className="cursor-pointer font-extrabold text-slate-900">
                    Do you provide night pickup?
                  </summary>
                  <p className="mt-2 text-sm text-slate-600">
                    Yes. We confirm availability in advance and share driver
                    details.
                  </p>
                </details>

                <details className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <summary className="cursor-pointer font-extrabold text-slate-900">
                    How to confirm booking?
                  </summary>
                  <p className="mt-2 text-sm text-slate-600">
                    Approve quote → we share driver/car details → booking
                    confirmed.
                  </p>
                </details>
              </div>

              <div className="mt-5 text-xs text-slate-500">
                This is a demo page. Replace text with real policy later.
              </div>
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
