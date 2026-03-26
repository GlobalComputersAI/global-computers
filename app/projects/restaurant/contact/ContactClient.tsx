"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const BASE = "/projects/restaurant";
const WHATSAPP_BASE = "https://wa.me/919752422686";
const CALL = "tel:+919752422686";

const PLACE = {
  name: "Restaurant Demo",
  addressLine: "Main Market, Your City, State",
  gmapsEmbed:
    "https://www.google.com/maps?q=Main%20Market%20Your%20City&output=embed",
  gmapsLink:
    "https://www.google.com/maps?q=Main%20Market%20Your%20City",
  hours: [
    { day: "Mon–Fri", time: "11:00 AM – 11:00 PM" },
    { day: "Sat–Sun", time: "11:00 AM – 11:30 PM" },
  ],
  highlights: [
    "Family-friendly seating",
    "Hygiene-first kitchen",
    "Fast takeaway packing",
    "Great for birthdays & small parties",
  ],
};

function buildWhatsAppText(data: {
  name: string;
  phone: string;
  type: string;
  people: string;
  date: string;
  time: string;
  message: string;
}) {
  const lines = [
    `Hi ${PLACE.name}!`,
    `Type: ${data.type}`,
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    data.people ? `People: ${data.people}` : "",
    data.date ? `Date: ${data.date}` : "",
    data.time ? `Time: ${data.time}` : "",
    data.message ? `Message: ${data.message}` : "",
    "— Sent from website",
  ].filter(Boolean);

  return encodeURIComponent(lines.join("\n"));
}

export default function ContactClient() {
  const [type, setType] = useState<"Table Booking" | "Order" | "Party / Event">(
    "Table Booking"
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [people, setPeople] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  const waHref = useMemo(() => {
    const text = buildWhatsAppText({
      name: name || "Guest",
      phone: phone || "Not shared",
      type,
      people,
      date,
      time,
      message,
    });
    return `${WHATSAPP_BASE}?text=${text}`;
  }, [name, phone, type, people, date, time, message]);

  return (
    <main className="bg-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/projects/food/hero-2.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-slate-950/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-orange-500/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold text-white backdrop-blur">
                📍 Contact • Map • WhatsApp • Call
              </div>

              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                Visit us or book a table
              </h1>

              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-white/85">
                Get directions, check timings, and send a quick WhatsApp inquiry
                for booking, takeaway, or party events.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 px-6 py-3 text-white font-extrabold shadow-sm transition hover:from-green-700 hover:to-emerald-600"
                >
                  💬 WhatsApp Now
                </a>

                <a
                  href={CALL}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-6 py-3 text-white font-extrabold backdrop-blur transition hover:bg-white/15"
                >
                  📞 Call
                </a>

                <Link
                  href={`${BASE}/menu`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-extrabold text-slate-900 transition hover:bg-slate-100"
                >
                  View Menu
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                <Chip>🚗 Parking</Chip>
                <Chip>🪑 Family Seating</Chip>
                <Chip>🧼 Hygiene</Chip>
                <Chip>🎉 Parties</Chip>
              </div>
            </div>

            <div className="w-full rounded-3xl border border-white/15 bg-white/10 p-6 text-white backdrop-blur lg:max-w-md">
              <div className="text-sm font-extrabold text-white/90">
                Address & Timings
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/10 p-4">
                <div className="font-extrabold">{PLACE.name}</div>
                <div className="mt-1 text-sm text-white/80">{PLACE.addressLine}</div>
                <a
                  href={PLACE.gmapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-extrabold text-white transition hover:text-orange-200"
                >
                  📍 Open in Google Maps →
                </a>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {PLACE.hours.map((h) => (
                  <div
                    key={h.day}
                    className="rounded-2xl border border-white/10 bg-white/10 p-4"
                  >
                    <div className="text-xs font-semibold text-white/75">
                      {h.day}
                    </div>
                    <div className="mt-1 text-sm font-extrabold">{h.time}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-xs text-white/65">
                Restaurant address, hours, and map link can be customized for the client.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          {/* FORM */}
          <div className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
                  Quick Inquiry
                </h2>
                <p className="mt-2 text-slate-600">
                  Fill the details and tap WhatsApp. Your message will be ready instantly.
                </p>
              </div>

              <span className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-[11px] font-extrabold text-green-700">
                1-tap WhatsApp
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Inquiry Type">
                <select
                  value={type}
                  onChange={(e) =>
                    setType(e.target.value as "Table Booking" | "Order" | "Party / Event")
                  }
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-bold text-slate-900 outline-none focus:border-red-400"
                >
                  <option>Table Booking</option>
                  <option>Order</option>
                  <option>Party / Event</option>
                </select>
              </Field>

              <Field label="People (optional)">
                <input
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                  placeholder="e.g. 2, 4, 10"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-bold text-slate-900 outline-none focus:border-red-400"
                />
              </Field>

              <Field label="Your Name">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-bold text-slate-900 outline-none focus:border-red-400"
                />
              </Field>

              <Field label="Phone">
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Mobile number"
                  inputMode="tel"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-bold text-slate-900 outline-none focus:border-red-400"
                />
              </Field>

              <Field label="Date (optional)">
                <input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-bold text-slate-900 outline-none focus:border-red-400"
                />
              </Field>

              <Field label="Time (optional)">
                <input
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  type="time"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-bold text-slate-900 outline-none focus:border-red-400"
                />
              </Field>
            </div>

            <div className="mt-4">
              <Field label="Message (optional)">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Any special request? spice level, birthday setup, etc."
                  className="min-h-[120px] w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-bold text-slate-900 outline-none focus:border-red-400"
                />
              </Field>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-extrabold text-white transition hover:bg-green-700"
              >
                💬 Send on WhatsApp
              </a>

              <a
                href={CALL}
                className="inline-flex items-center justify-center gap-2 rounded-xl border bg-white px-6 py-3 font-extrabold transition hover:bg-slate-50"
              >
                📞 Call
              </a>
            </div>

            <div className="mt-4 rounded-2xl border bg-slate-50 p-4 text-sm text-slate-700">
              <div className="font-extrabold">Quick booking workflow</div>
              <div className="mt-1">
                This page prepares a WhatsApp inquiry instantly, which makes it fast and
                conversion-friendly for restaurant bookings and orders.
              </div>
            </div>
          </div>

          {/* MAP + HIGHLIGHTS */}
          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
              <div className="border-b p-6 md:p-8">
                <h3 className="text-xl font-extrabold text-slate-900 md:text-2xl">
                  Google Map
                </h3>
                <p className="mt-2 text-slate-600">
                  Help customers find the location quickly with map and directions.
                </p>
              </div>

              <div className="aspect-[16/10]">
                <iframe
                  title="Google Map"
                  src={PLACE.gmapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-6 md:p-8">
                <a
                  href={PLACE.gmapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-extrabold text-white transition hover:bg-red-700"
                >
                  📍 Open in Maps
                </a>
              </div>
            </div>

            <div className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
              <h3 className="text-xl font-extrabold text-slate-900 md:text-2xl">
                Why guests choose this place
              </h3>
              <p className="mt-2 text-slate-600">
                Clear benefits help improve trust before the customer arrives.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {PLACE.highlights.map((h) => (
                  <div key={h} className="rounded-2xl border bg-slate-50 p-4">
                    <div className="font-extrabold text-slate-900">✅ {h}</div>
                    <div className="mt-1 text-sm text-slate-600">
                      Strong trust point for families, groups, and regular customers.
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={`${BASE}/gallery`}
                  className="rounded-xl border bg-white px-6 py-3 font-extrabold transition hover:bg-slate-50"
                >
                  View Photos
                </Link>

                <Link
                  href={`${BASE}/billing`}
                  className="rounded-xl border bg-white px-6 py-3 font-extrabold transition hover:bg-slate-50"
                >
                  Billing Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/projects/food/ambience-1.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-orange-500/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-3xl border border-white/15 bg-white/10 p-8 text-white backdrop-blur md:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-3xl font-extrabold md:text-4xl">
                  Reserve in 10 seconds
                </h3>
                <p className="mt-3 max-w-2xl text-lg text-white/85">
                  Tap WhatsApp, send your details, and get quick confirmation.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-white px-6 py-3 font-extrabold text-slate-900 transition hover:bg-slate-100"
                >
                  💬 WhatsApp
                </a>

                <a
                  href={CALL}
                  className="rounded-xl border border-white/20 bg-black/20 px-6 py-3 font-extrabold transition hover:bg-black/30"
                >
                  📞 Call
                </a>

                <Link
                  href={`${BASE}/menu`}
                  className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-extrabold transition hover:bg-white/15"
                >
                  View Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold text-white backdrop-blur">
      {children}
    </span>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="text-sm font-extrabold text-slate-900">{label}</div>
      <div className="mt-2">{children}</div>
    </label>
  );
}