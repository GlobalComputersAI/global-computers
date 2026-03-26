"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type TripType = "Airport" | "Local" | "Outstation" | "Tour";
type CarType = "Sedan" | "MPV" | "SUV" | "Premium";

export default function BookNowPage() {
  const BASE_PATH = "/projects/car-Rental";

  const ROUTES = {
    home: `${BASE_PATH}`,
    rate: `${BASE_PATH}/rate`,
    book: `${BASE_PATH}/booknow`,
    billing: `${BASE_PATH}/billing`,
    about: `${BASE_PATH}/aboutus`,
    contact: `${BASE_PATH}/contractus`,
  };

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
    passengers: "1-2",
    notes: "",
  });

  const isValidMobile = (mobile: string) => {
    const cleaned = mobile.replace(/\D/g, "");
    return /^[6-9]\d{9}$/.test(cleaned);
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

  const onChange =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  return (
    <main className="bg-slate-50">
      {/* Top bar */}
      <section className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <div className="text-sm text-slate-500">
              <Link href={ROUTES.home} className="hover:text-slate-900">
                Home
              </Link>{" "}
              <span className="text-slate-300">/</span>{" "}
              <span className="font-semibold text-slate-900">Book Now</span>
            </div>

            <h1 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
              Book Your Ride (Instant Quote)
            </h1>

            <p className="mt-1 text-sm text-slate-600">
              Fill details → get quote on WhatsApp or call within minutes.
            </p>
          </div>

          <div className="flex gap-2">
            <a
              href={`tel:${phone}`}
              className="inline-flex justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 font-extrabold text-slate-900 transition hover:bg-slate-50"
            >
              📞 Call
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center rounded-xl bg-green-600 px-4 py-2 font-extrabold text-white transition hover:bg-green-700"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* FORM */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white">
              <div className="border-b bg-slate-50 p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-extrabold text-green-700">
                      ✅ High-conversion Booking Form
                    </div>

                    <h2 className="mt-3 text-xl font-black text-slate-900 sm:text-2xl">
                      Tell us your trip details
                    </h2>

                    <p className="mt-1 text-sm text-slate-600">
                      We confirm car availability and final price before trip
                      start.
                    </p>
                  </div>

                  <div className="hidden flex-col items-end sm:flex">
                    <div className="text-xs text-slate-500">Support</div>
                    <div className="font-black text-slate-900">{phone}</div>
                    <div className="text-xs text-slate-500">24×7 (Demo)</div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                {/* Trust badges */}
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    ["🛡️ Verified drivers", "Safety first"],
                    ["🧼 Clean cars", "Sanitized & maintained"],
                    ["💰 Transparent pricing", "No surprises"],
                  ].map(([title, subtitle]) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="text-sm font-extrabold text-slate-900">
                        {title}
                      </div>
                      <div className="mt-1 text-xs text-slate-600">
                        {subtitle}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Inputs */}
                <div className="mt-6 grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
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

                  <div className="grid gap-4 sm:grid-cols-2">
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

                  <div className="grid gap-4 sm:grid-cols-3">
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

                  <div className="grid gap-4 sm:grid-cols-2">
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
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noreferrer"
                        className={[
                          "inline-flex flex-1 justify-center rounded-2xl px-5 py-3 font-extrabold transition",
                          canSubmit
                            ? "bg-green-600 text-white hover:bg-green-700"
                            : "cursor-not-allowed bg-green-600/40 text-white",
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
                        className="inline-flex flex-1 justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 font-extrabold text-slate-900 transition hover:bg-slate-50"
                      >
                        📞 Call for Booking
                      </a>
                    </div>

                    {!canSubmit && (
                      <p className="mt-3 text-xs text-slate-600">
                        Fill <b>Name</b>, <b>Mobile</b>, <b>Pickup</b>,{" "}
                        <b>Drop</b>, <b>Date</b> and <b>Time</b> to send
                        WhatsApp request.
                      </p>
                    )}
                  </div>

                  <div className="text-xs text-slate-500">
                    By submitting, you agree to receive a call or WhatsApp for
                    booking confirmation. (Demo text)
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
                  ["1", "We receive your request on WhatsApp or call."],
                  ["2", "We confirm car availability and final price."],
                  ["3", "We share driver and car details before pickup."],
                  ["4", "On-time pickup and smooth ride."],
                ].map(([n, text]) => (
                  <div key={n} className="flex gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 font-black text-white">
                      {n}
                    </div>
                    <div className="leading-relaxed">{text}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-green-200 bg-green-50 p-4">
                <div className="font-extrabold text-green-800">
                  ⚡ Quick Response
                </div>
                <div className="mt-1 text-sm text-green-800/90">
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
                  "✅ Verified and polite drivers",
                  "✅ Transparent pricing",
                  "✅ 24×7 support (optional)",
                  "✅ Local + Outstation + Airport",
                ].map((item) => (
                  <div key={item} className="flex gap-2">
                    <span className="mt-0.5">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex gap-2">
                <Link
                  href={ROUTES.rate}
                  className="inline-flex flex-1 justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 font-extrabold text-slate-900 transition hover:bg-slate-50"
                >
                  View Rates
                </Link>
                <Link
                  href={ROUTES.contact}
                  className="inline-flex flex-1 justify-center rounded-xl bg-slate-900 px-4 py-2 font-extrabold text-white transition hover:bg-slate-800"
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
                    Usually toll and parking are extra as per route. Final
                    amount is confirmed before start.
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
                    Approve quote → we share driver and car details → booking
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
                if (!canSubmit) e.preventDefault();
              }}
              className={[
                "py-3 text-center font-extrabold text-white transition",
                canSubmit
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