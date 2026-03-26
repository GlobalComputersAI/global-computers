"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const BRAND = "Hotel Royal Stay";
const CITY = "Raipur";
const BASE_PATH = "/projects/hotel";

const CALL = "tel:+919752422686";
const WHATSAPP_BASE = "https://wa.me/919752422686?text=";

function wa(msg: string) {
  return `${WHATSAPP_BASE}${encodeURIComponent(msg)}`;
}

function formatINR(n: number) {
  const v = Number.isFinite(n) ? n : 0;
  return `₹${Math.round(v).toLocaleString("en-IN")}`;
}

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-3xl border border-white/12 bg-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold text-white/90 backdrop-blur-xl">
      {children}
    </span>
  );
}

type Room = {
  name: string;
  price: number;
  capacity: string;
  size: string;
  tags: string[];
  highlights: string[];
  desc: string;
  img: string;
  popular?: boolean;
};

export default function RoomsPage() {
  const rooms: Room[] = [
    {
      name: "Deluxe Room",
      price: 1499,
      capacity: "2 Guests",
      size: "180 sq.ft",
      tags: ["AC", "Wi-Fi", "TV", "Hot Water"],
      highlights: [
        "Best for couples and solo travellers",
        "Clean washroom with fresh linen",
        "Quick check-in support",
      ],
      desc: "A comfortable and budget-friendly room for guests who want a clean and reliable stay experience.",
      img: "/projects/hotel/room-1.jpg",
      popular: true,
    },
    {
      name: "Super Deluxe Room",
      price: 1999,
      capacity: "3 Guests",
      size: "220 sq.ft",
      tags: ["AC", "Wi-Fi", "Balcony", "Breakfast"],
      highlights: [
        "More space with premium comfort",
        "Balcony or better room feel",
        "Great for weekend stay",
      ],
      desc: "A more premium room category for guests who want extra comfort, better ambience, and added convenience.",
      img: "/projects/hotel/room-2.jpg",
    },
    {
      name: "Family Suite",
      price: 2799,
      capacity: "4 Guests",
      size: "300 sq.ft",
      tags: ["AC", "Wi-Fi", "Sofa", "Extra Bed"],
      highlights: [
        "Ideal for family trips",
        "Extra space and seating area",
        "Comfortable for longer stays",
      ],
      desc: "A spacious suite designed for families and group travellers who want more room and a more relaxed stay.",
      img: "/projects/hotel/room-3.jpg",
    },
  ];

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [roomType, setRoomType] = useState(rooms[0]?.name ?? "Deluxe Room");

  const quickWA = useMemo(() => {
    const msg = `Hi, I want to book a room at ${BRAND} (${CITY}).
Room Type: ${roomType || "____"}
Check-in: ${checkIn || "____"}
Check-out: ${checkOut || "____"}
Guests: ${guests || "____"}

Please share room availability, final total price, and booking confirmation details.`;
    return wa(msg);
  }, [checkIn, checkOut, guests, roomType]);

  const callLabel = `Call ${BRAND}`;
  const bookLabel = `Book room at ${BRAND} on WhatsApp`;

  return (
    <main className="bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/projects/hotel/g-2.jpg"
            alt={`${BRAND} rooms and premium hotel stay experience`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/90" />
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-amber-200/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="flex flex-wrap gap-2">
            <Badge>🛏️ Rooms & Tariff</Badge>
            <Badge>⚡ Direct WhatsApp Booking</Badge>
            <Badge>📍 Hotel Stay in {CITY}</Badge>
          </div>

          <div className="mt-6 grid items-start gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/80">
                Room Booking
              </div>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
                Choose your room,
                <span className="block text-white/85">book in one tap.</span>
              </h1>

              <p className="mt-4 max-w-2xl font-bold leading-7 text-white/70">
                Guests book faster when pricing, room type, and photos are clear.
                Select your dates, choose a room, and send your enquiry instantly on WhatsApp.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={CALL}
                  aria-label={callLabel}
                  className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-extrabold backdrop-blur-xl transition hover:bg-white/15"
                >
                  Call Now
                </a>

                <a
                  href={quickWA}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={bookLabel}
                  className="rounded-2xl bg-green-500 px-6 py-3 font-extrabold text-white shadow-[0_10px_25px_rgba(34,197,94,0.25)] transition hover:bg-green-600"
                >
                  WhatsApp Booking
                </a>

                <Link
                  href={`${BASE_PATH}/amenities`}
                  className="rounded-2xl bg-white px-6 py-3 font-extrabold text-black transition hover:bg-white/90"
                >
                  See Amenities
                </Link>
              </div>

              <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
                <GlassCard>
                  <div className="p-4">
                    <div className="text-2xl font-extrabold">Clean</div>
                    <div className="text-xs font-bold text-white/70">
                      Rooms and washrooms
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <div className="p-4">
                    <div className="text-2xl font-extrabold">Fast</div>
                    <div className="text-xs font-bold text-white/70">
                      Quick confirmation
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <div className="p-4">
                    <div className="text-2xl font-extrabold">Direct</div>
                    <div className="text-xs font-bold text-white/70">
                      WhatsApp booking flow
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>

            <GlassCard>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-extrabold">Quick Booking Enquiry</div>
                    <div className="text-sm font-bold text-white/70">
                      Add dates and room type to auto-fill a ready WhatsApp booking message.
                    </div>
                  </div>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold text-white/90">
                    Easy
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <div className="mb-1 text-[11px] font-extrabold text-white/80">
                      Check-in
                    </div>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold text-white outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </label>

                  <label className="block">
                    <div className="mb-1 text-[11px] font-extrabold text-white/80">
                      Check-out
                    </div>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold text-white outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </label>

                  <label className="block">
                    <div className="mb-1 text-[11px] font-extrabold text-white/80">
                      Guests
                    </div>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold text-white outline-none focus:ring-2 focus:ring-white/20"
                    >
                      <option className="text-black" value="1">
                        1 Guest
                      </option>
                      <option className="text-black" value="2">
                        2 Guests
                      </option>
                      <option className="text-black" value="3">
                        3 Guests
                      </option>
                      <option className="text-black" value="4">
                        4 Guests
                      </option>
                      <option className="text-black" value="5">
                        5 Guests
                      </option>
                    </select>
                  </label>

                  <label className="block">
                    <div className="mb-1 text-[11px] font-extrabold text-white/80">
                      Room Type
                    </div>
                    <select
                      value={roomType}
                      onChange={(e) => setRoomType(e.target.value)}
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold text-white outline-none focus:ring-2 focus:ring-white/20"
                    >
                      {rooms.map((r) => (
                        <option className="text-black" key={r.name} value={r.name}>
                          {r.name} — {formatINR(r.price)}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={CALL}
                    aria-label={callLabel}
                    className="flex-1 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-center font-extrabold backdrop-blur-xl transition hover:bg-white/15"
                  >
                    Call
                  </a>

                  <a
                    href={quickWA}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={bookLabel}
                    className="flex-1 rounded-2xl bg-green-500 px-6 py-3 text-center font-extrabold text-white transition hover:bg-green-600"
                  >
                    WhatsApp
                  </a>
                </div>

                <div className="mt-4 text-xs font-bold text-white/60">
                  Clear dates and room type improve booking speed and reduce back-and-forth.
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent" />
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-extrabold text-white/85 backdrop-blur-xl">
                ✨ Rooms Collection
              </div>
              <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">Rooms & Tariff</h2>
              <p className="mt-2 max-w-2xl font-bold text-white/70">
                Compare room options, see key highlights, and confirm availability directly.
              </p>
            </div>

            <Link
              href={`${BASE_PATH}/contact`}
              className="rounded-2xl bg-white px-6 py-3 font-extrabold text-black transition hover:bg-white/90"
            >
              Contact →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((r) => {
              const msg = `Hi, I want to book ${r.name} at ${BRAND} (${CITY}).
Check-in: ${checkIn || "____"}
Check-out: ${checkOut || "____"}
Guests: ${guests || "____"}

Please share availability and total price.`;

              const roomWA = wa(msg);

              return (
                <article
                  key={r.name}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:bg-white/10"
                >
                  <div className="relative h-52 bg-white/5">
                    <Image
                      src={r.img}
                      alt={`${r.name} at ${BRAND}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                    {r.popular ? (
                      <div className="absolute left-3 top-3 rounded-full bg-green-500 px-3 py-1 text-xs font-extrabold text-white">
                        Most Booked
                      </div>
                    ) : null}

                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
                      <div className="min-w-0">
                        <div className="truncate text-lg font-extrabold">{r.name}</div>
                        <div className="text-xs font-bold text-white/75">
                          {r.capacity} • {r.size}
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-lg font-extrabold">{formatINR(r.price)}</div>
                        <div className="text-[11px] font-bold text-white/70">per night</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-sm font-bold leading-6 text-white/72">{r.desc}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {r.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-extrabold text-white/85"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-sm font-extrabold">Highlights</div>
                      <ul className="mt-2 space-y-1 text-sm font-bold text-white/80">
                        {r.highlights.map((h) => (
                          <li key={h}>✅ {h}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <a
                        href={CALL}
                        aria-label={`${callLabel} for ${r.name}`}
                        className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-center font-extrabold transition hover:bg-white/15"
                      >
                        Call
                      </a>

                      <a
                        href={roomWA}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Book ${r.name} on WhatsApp`}
                        className="rounded-2xl bg-green-500 px-4 py-3 text-center font-extrabold text-white transition hover:bg-green-600"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <GlassCard>
              <div className="p-6">
                <div className="text-lg font-extrabold">🕒 Check-in / Check-out</div>
                <p className="mt-2 text-sm font-bold leading-6 text-white/70">
                  Check-in: 12:00 PM • Check-out: 11:00 AM
                  <br />
                  Flexible support may be possible depending on room availability.
                </p>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <div className="text-lg font-extrabold">🧾 ID Policy</div>
                <p className="mt-2 text-sm font-bold leading-6 text-white/70">
                  Valid government ID is required at check-in.
                  <br />
                  Couples and families welcome as per hotel policy.
                </p>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <div className="text-lg font-extrabold">✅ Booking Confirmation</div>
                <p className="mt-2 text-sm font-bold leading-6 text-white/70">
                  Send your dates and room type on WhatsApp and get a quick confirmation on availability and pricing.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassCard>
              <div className="p-6 md:p-8">
                <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/75">
                  Why Guests Book Faster
                </div>
                <h2 className="mt-3 text-3xl font-extrabold">Clear rooms reduce hesitation</h2>
                <p className="mt-4 font-bold leading-7 text-white/72">
                  When guests can see the room category, pricing, photos, and contact options clearly,
                  they decide faster and trust the hotel more.
                </p>

                <ul className="mt-5 space-y-2 text-sm font-bold text-white/80">
                  <li>✅ Simple room comparison</li>
                  <li>✅ Direct WhatsApp enquiry</li>
                  <li>✅ Faster booking confirmation</li>
                  <li>✅ Better trust through clean presentation</li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6 md:p-8">
                <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/75">
                  For Hotel Owners
                </div>
                <h2 className="mt-3 text-3xl font-extrabold">Want this rooms page for your hotel?</h2>
                <p className="mt-4 font-bold leading-7 text-white/72">
                  This page is designed to help hotels, resorts, lodges, and guest houses show
                  their room types clearly and convert visitors into direct enquiries.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={`${BASE_PATH}/bill`}
                    className="rounded-2xl bg-white px-6 py-3 font-extrabold text-black transition hover:bg-white/90"
                  >
                    Billing Demo
                  </Link>

                  <a
                    href={wa(
                      `Hi, I want a similar hotel rooms page and website for my property. Please share full package details.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl bg-green-500 px-6 py-3 font-extrabold text-white transition hover:bg-green-600"
                  >
                    Get This Website
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <div className="fixed bottom-4 left-1/2 z-40 w-[min(92vw,560px)] -translate-x-1/2">
        <div className="flex gap-3 rounded-2xl border border-white/12 bg-white/10 px-3 py-3 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.45)]">
          <a
            href={CALL}
            aria-label={callLabel}
            className="flex-1 rounded-xl border border-white/15 bg-white/10 py-3 text-center font-extrabold transition hover:bg-white/15"
          >
            Call Now
          </a>

          <a
            href={quickWA}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={bookLabel}
            className="flex-1 rounded-xl bg-green-500 py-3 text-center font-extrabold text-white transition hover:bg-green-600"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="h-28" />
    </main>
  );
}