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

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold text-white/90 backdrop-blur-xl">
      {children}
    </span>
  );
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

type Room = {
  name: string;
  price: number;
  capacity: string;
  tags: string[];
  img: string;
  desc: string;
  popular?: boolean;
};

export default function HomePage() {
  const rooms: Room[] = [
    {
      name: "Deluxe Room",
      price: 1499,
      capacity: "2 Guests",
      tags: ["AC", "Wi-Fi", "TV", "Hot Water"],
      img: "/projects/hotel/room-1.jpg",
      desc: "Comfortable room for couples and short stays with modern essentials.",
      popular: true,
    },
    {
      name: "Super Deluxe",
      price: 1999,
      capacity: "3 Guests",
      tags: ["AC", "Wi-Fi", "Balcony", "Breakfast"],
      img: "/projects/hotel/room-2.jpg",
      desc: "A premium stay choice with extra comfort for guests who want more space.",
    },
    {
      name: "Family Suite",
      price: 2799,
      capacity: "4 Guests",
      tags: ["AC", "Wi-Fi", "Sofa", "Extra Bed"],
      img: "/projects/hotel/room-3.jpg",
      desc: "Spacious suite for families and group travellers who want a relaxed stay.",
    },
  ];

  const gallery = [
    "/projects/hotel/g-1.jpg",
    "/projects/hotel/g-2.jpg",
    "/projects/hotel/g-3.jpg",
    "/projects/hotel/g-4.jpg",
    "/projects/hotel/g-5.jpg",
    "/projects/hotel/g-6.jpg",
  ];

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [roomType, setRoomType] = useState(rooms[0]?.name ?? "Deluxe Room");

  const bookingWA = useMemo(() => {
    const msg = `Hi, I want to book a room at ${BRAND} (${CITY}).
Room: ${roomType}
Check-in: ${checkIn || "____"}
Check-out: ${checkOut || "____"}
Guests: ${guests || "____"}

Please share room availability, final price, and confirmation details.`;
    return wa(msg);
  }, [checkIn, checkOut, guests, roomType]);

  const ownerWA = wa(
    `Hi, I saw your hotel website demo on Global Computers & IT Solutions. I want a similar premium hotel website for my property in ${CITY}. Please share price, delivery time, and details.`
  );

  const callLabel = `Call ${BRAND}`;
  const bookLabel = `Book room at ${BRAND} on WhatsApp`;

  return (
    <main className="bg-black text-white">
      <section className="relative min-h-[94vh] overflow-hidden">
        <Image
          src="/projects/hotel/hero.jpg"
          alt={`${BRAND} luxury hotel exterior and stay experience in ${CITY}`}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/90" />
        <div className="absolute inset-0">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-amber-200/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-14 sm:px-6 lg:pt-20">
          <div className="flex flex-wrap gap-2">
            <Pill>✨ Relax • Celebrate • Stay Premium</Pill>
            <Pill>📍 Hotel Stay in {CITY}</Pill>
            <Pill>⚡ Direct WhatsApp Booking</Pill>
          </div>

          <div className="mt-6 grid items-start gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/80">
                Hotel in {CITY}
              </div>

              <h1 className="mt-4 text-4xl font-extrabold leading-[1.02] tracking-tight drop-shadow md:text-6xl">
                Premium Hotel Stay in {CITY}
                <span className="mt-2 block text-white/88">{BRAND}</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base font-bold leading-7 text-white/78 md:text-lg">
                Book a clean, comfortable, and guest-friendly stay at {BRAND} in {CITY}.
                Perfect for couples, families, business trips, and short city stays with
                instant WhatsApp booking and fast support.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <Pill>🛏️ Clean Rooms</Pill>
                <Pill>🚗 Parking</Pill>
                <Pill>📶 Free Wi-Fi</Pill>
                <Pill>🕒 24×7 Support</Pill>
                <Pill>👨‍👩‍👧 Family Friendly</Pill>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={CALL}
                  aria-label={callLabel}
                  className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-extrabold backdrop-blur-xl transition hover:bg-white/15"
                >
                  Call Now
                </a>

                <a
                  href={bookingWA}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={bookLabel}
                  className="rounded-2xl bg-green-500 px-6 py-3 font-extrabold text-white shadow-[0_10px_25px_rgba(34,197,94,0.25)] transition hover:bg-green-600"
                >
                  Book on WhatsApp
                </a>

                <Link
                  href={`${BASE_PATH}/rooms`}
                  className="rounded-2xl bg-white px-6 py-3 font-extrabold text-black transition hover:bg-white/90"
                >
                  View Rooms
                </Link>
              </div>

              <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
                <GlassCard>
                  <div className="p-4">
                    <div className="text-2xl font-extrabold">4.6★</div>
                    <div className="text-xs font-bold text-white/70">
                      Guest satisfaction feel
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <div className="p-4">
                    <div className="text-2xl font-extrabold">10 min</div>
                    <div className="text-xs font-bold text-white/70">
                      Quick check-in flow
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <div className="p-4">
                    <div className="text-2xl font-extrabold">{formatINR(rooms[0].price)}</div>
                    <div className="text-xs font-bold text-white/70">
                      Room starts from
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>

            <div>
              <GlassCard>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-lg font-extrabold">Quick Room Enquiry</div>
                      <div className="text-sm font-bold text-white/70">
                        Fill once and send a ready booking message on WhatsApp
                      </div>
                    </div>
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold text-white/90">
                      Fast Booking
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
                        className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold text-white outline-none placeholder:text-white/50 focus:ring-2 focus:ring-white/20"
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
                        className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold text-white outline-none placeholder:text-white/50 focus:ring-2 focus:ring-white/20"
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
                      Call Now
                    </a>

                    <a
                      href={bookingWA}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={bookLabel}
                      className="flex-1 rounded-2xl bg-green-500 px-6 py-3 text-center font-extrabold text-white shadow-[0_10px_25px_rgba(34,197,94,0.25)] transition hover:bg-green-600"
                    >
                      WhatsApp Booking
                    </a>
                  </div>

                  <div className="mt-4 text-xs font-bold text-white/60">
                    Fast enquiry flow helps guests book with less confusion and more trust.
                  </div>
                </div>
              </GlassCard>

              <div className="mt-4">
                <GlassCard>
                  <div className="p-6">
                    <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/78">
                      Hotel Owner?
                    </div>

                    <div className="mt-2 text-xl font-extrabold">
                      Get a premium hotel website starting from ₹5,000
                    </div>

                    <div className="mt-2 text-sm font-bold text-white/70">
                      Includes premium home page, rooms, amenities, gallery, contact page,
                      and direct WhatsApp lead flow for hotels, lodges, resorts, and guest houses.
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <Link
                        href={`${BASE_PATH}/bill`}
                        className="rounded-2xl bg-white px-6 py-3 font-extrabold text-black transition hover:bg-white/90"
                      >
                        Billing Demo
                      </Link>

                      <a
                        href={ownerWA}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl bg-green-500 px-6 py-3 font-extrabold text-white transition hover:bg-green-600"
                      >
                        WhatsApp for Website
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-extrabold text-white/85 backdrop-blur-xl">
                💫 Guest Experience
              </div>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                More than a room —
                <span className="block text-white/85">it should feel easy, clean, and memorable.</span>
              </h2>

              <p className="mt-4 max-w-2xl font-bold text-white/70">
                Whether it is a weekend stay, family travel, business visit, or short city stop,
                guests prefer clear rooms, quick booking, and a trusted hotel experience.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <GlassCard>
                  <div className="p-5">
                    <div className="text-lg font-extrabold">🌙 Relax & Recharge</div>
                    <div className="mt-1 text-sm font-bold text-white/70">
                      Comfortable rooms for restful stays.
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <div className="p-5">
                    <div className="text-lg font-extrabold">🎉 Celebration Stay</div>
                    <div className="mt-1 text-sm font-bold text-white/70">
                      Great for birthdays, anniversaries, and special visits.
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <div className="p-5">
                    <div className="text-lg font-extrabold">💼 Business Travel</div>
                    <div className="mt-1 text-sm font-bold text-white/70">
                      Smooth check-in and dependable convenience.
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <div className="p-5">
                    <div className="text-lg font-extrabold">👨‍👩‍👧‍👦 Family Trip</div>
                    <div className="mt-1 text-sm font-bold text-white/70">
                      Safe and spacious stay options for families.
                    </div>
                  </div>
                </GlassCard>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={bookingWA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-green-500 px-6 py-3 font-extrabold text-white transition hover:bg-green-600"
                >
                  Book on WhatsApp
                </a>

                <Link
                  href={`${BASE_PATH}/rooms`}
                  className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 font-extrabold backdrop-blur-xl transition hover:bg-white/15"
                >
                  Explore Rooms
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="relative h-56 overflow-hidden rounded-3xl border border-white/10 md:h-64">
                <Image
                  src="/projects/hotel/g-2.jpg"
                  alt={`${BRAND} guest stay experience and hotel ambience`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <GlassCard>
                    <div className="p-4">
                      <div className="font-extrabold">Premium hotel vibe builds trust</div>
                      <div className="text-sm font-bold text-white/70">
                        Clear visuals and fast enquiry flow help guests decide faster.
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative h-44 overflow-hidden rounded-3xl border border-white/10">
                  <Image
                    src="/projects/hotel/g-5.jpg"
                    alt="Clean hotel corridor and interior ambience"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold text-white/90 backdrop-blur-xl">
                      Clean & Safe
                    </span>
                  </div>
                </div>

                <div className="relative h-44 overflow-hidden rounded-3xl border border-white/10">
                  <Image
                    src="/projects/hotel/g-6.jpg"
                    alt="Comfortable hotel dining and guest service area"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold text-white/90 backdrop-blur-xl">
                      Feel-Good Stay
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-extrabold text-white/85 backdrop-blur-xl">
                🛏️ Featured Rooms
              </div>
              <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">Choose your stay</h2>
              <p className="mt-2 max-w-2xl font-bold text-white/70">
                Clear pricing, real room types, and instant direct booking options.
              </p>
            </div>

            <Link
              href={`${BASE_PATH}/rooms`}
              className="rounded-2xl bg-white px-6 py-3 font-extrabold text-black transition hover:bg-white/90"
            >
              View All Rooms
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((r) => {
              const roomWA = wa(
                `Hi, I want to book ${r.name} at ${BRAND} (${CITY}).
Check-in: ${checkIn || "____"}
Check-out: ${checkOut || "____"}
Guests: ${guests || "____"}

Please share availability and final booking amount.`
              );

              return (
                <article
                  key={r.name}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:bg-white/10"
                >
                  <div className="relative h-48 bg-white/5">
                    <Image src={r.img} alt={`${r.name} at ${BRAND}`} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />

                    {r.popular ? (
                      <div className="absolute left-3 top-3 rounded-full bg-green-500 px-3 py-1 text-xs font-extrabold text-white">
                        Most Booked
                      </div>
                    ) : null}

                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
                      <div>
                        <div className="text-lg font-extrabold">{r.name}</div>
                        <div className="text-xs font-bold text-white/75">{r.capacity}</div>
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

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="grid items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/75">
                  For Hotel Owners
                </div>
                <div className="mt-2 text-xl font-extrabold">
                  This premium hotel UI helps properties look more trusted and get more direct enquiries
                </div>
                <p className="mt-2 font-bold text-white/70">
                  Clear room display, contact-first layout, and WhatsApp booking flow reduce friction
                  and help convert visitors into direct leads.
                </p>
              </div>

              <div className="lg:text-right">
                <div className="text-sm font-extrabold text-white/80">Starting package</div>
                <div className="mt-1 text-3xl font-extrabold">₹5,000</div>

                <div className="mt-4 flex flex-wrap gap-3 lg:justify-end">
                  <Link
                    href={`${BASE_PATH}/bill`}
                    className="rounded-2xl bg-white px-6 py-3 font-extrabold text-black transition hover:bg-white/90"
                  >
                    Billing Demo
                  </Link>

                  <a
                    href={ownerWA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl bg-green-500 px-6 py-3 font-extrabold text-white transition hover:bg-green-600"
                  >
                    Get This Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-4">
            <GlassCard>
              <div className="p-6">
                <div className="text-2xl">📶</div>
                <div className="mt-3 text-lg font-extrabold">Free Wi-Fi</div>
                <p className="mt-2 text-sm font-bold leading-6 text-white/72">
                  Stay connected throughout your visit.
                </p>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <div className="text-2xl">🚗</div>
                <div className="mt-3 text-lg font-extrabold">Parking</div>
                <p className="mt-2 text-sm font-bold leading-6 text-white/72">
                  Convenient parking support for guests.
                </p>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <div className="text-2xl">🧼</div>
                <div className="mt-3 text-lg font-extrabold">Clean Rooms</div>
                <p className="mt-2 text-sm font-bold leading-6 text-white/72">
                  Tidy, guest-ready rooms with essential comfort.
                </p>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <div className="text-2xl">🕒</div>
                <div className="mt-3 text-lg font-extrabold">Fast Support</div>
                <p className="mt-2 text-sm font-bold leading-6 text-white/72">
                  Quick response for enquiries and booking help.
                </p>
              </div>
            </GlassCard>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`${BASE_PATH}/amenities`}
              className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 font-extrabold backdrop-blur-xl transition hover:bg-white/15"
            >
              View All Amenities
            </Link>

            <a
              href={bookingWA}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-green-500 px-6 py-3 font-extrabold text-white transition hover:bg-green-600"
            >
              Ask Availability
            </a>
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6" id="gallery">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-extrabold text-white/85 backdrop-blur-xl">
                🖼️ Hotel Gallery
              </div>
              <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
                See the comfort before you book
              </h2>
              <p className="mt-2 max-w-2xl font-bold text-white/70">
                Good visuals create trust. Guests want to see the room feel before making a decision.
              </p>
            </div>

            <Link
              href={`${BASE_PATH}/amenities`}
              className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 font-extrabold backdrop-blur-xl transition hover:bg-white/15"
            >
              Amenities →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((src, i) => (
              <div
                key={src}
                className="relative h-52 overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:h-56"
                title={`Hotel gallery photo ${i + 1}`}
              >
                <Image
                  src={src}
                  alt={`Hotel gallery image ${i + 1} for ${BRAND}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70" />
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <GlassCard>
              <div className="p-6">
                <div className="text-lg font-extrabold">Guest Promise</div>
                <ul className="mt-3 space-y-2 font-bold text-white/80">
                  <li>✅ Clean rooms and bathrooms</li>
                  <li>✅ Helpful booking support</li>
                  <li>✅ Fast confirmation flow</li>
                  <li>✅ Suitable for couples, families, and business guests</li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <div className="text-lg font-extrabold">Direct Booking Advantage</div>
                <p className="mt-2 font-bold text-white/70">
                  Contact us directly on WhatsApp or call for room availability, best rates,
                  and quick response without complicated steps.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={CALL}
                    aria-label={callLabel}
                    className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 font-extrabold backdrop-blur-xl transition hover:bg-white/15"
                  >
                    Call Now
                  </a>

                  <a
                    href={bookingWA}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={bookLabel}
                    className="rounded-2xl bg-green-500 px-6 py-3 font-extrabold text-white transition hover:bg-green-600"
                  >
                    WhatsApp Booking
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-extrabold text-white/85 backdrop-blur-xl">
              ⭐ Reviews Style Section
            </div>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">Why guests prefer direct booking</h2>
            <p className="mx-auto mt-2 max-w-2xl font-bold text-white/70">
              Trusted presentation, room clarity, and instant contact options reduce booking hesitation.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <GlassCard>
              <div className="p-6">
                <div className="text-lg font-extrabold">“Easy and quick booking”</div>
                <p className="mt-3 text-sm font-bold leading-6 text-white/72">
                  The room details were clear and booking on WhatsApp felt simple and fast.
                </p>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <div className="text-lg font-extrabold">“Looks premium and trusted”</div>
                <p className="mt-3 text-sm font-bold leading-6 text-white/72">
                  Good visuals and direct contact made the hotel feel more genuine and professional.
                </p>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <div className="text-lg font-extrabold">“Room info was very clear”</div>
                <p className="mt-3 text-sm font-bold leading-6 text-white/72">
                  Seeing room type, pricing, and quick enquiry options helped me decide quickly.
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
                  Frequently Asked Questions
                </div>
                <h2 className="mt-3 text-3xl font-extrabold">Hotel booking FAQs</h2>

                <div className="mt-6 space-y-5">
                  <div>
                    <h3 className="text-lg font-extrabold">How can I book a room?</h3>
                    <p className="mt-1 text-sm font-bold leading-6 text-white/72">
                      You can call directly or send your check-in date, check-out date, and guest count
                      on WhatsApp for quick availability confirmation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold">Do you have rooms for families?</h3>
                    <p className="mt-1 text-sm font-bold leading-6 text-white/72">
                      Yes, family-friendly room options are available depending on dates and guest count.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold">Can I ask room price before booking?</h3>
                    <p className="mt-1 text-sm font-bold leading-6 text-white/72">
                      Yes, message us directly on WhatsApp to get room availability and current pricing.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold">Is direct booking available?</h3>
                    <p className="mt-1 text-sm font-bold leading-6 text-white/72">
                      Yes, this hotel demo is designed for direct leads through call and WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6 md:p-8">
                <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/75">
                  For Hotel Businesses
                </div>
                <h2 className="mt-3 text-3xl font-extrabold">Want this hotel website for your property?</h2>

                <p className="mt-4 font-bold leading-7 text-white/72">
                  This hotel website demo is built to help hotels, lodges, resorts, and guest houses
                  get more direct enquiries, stronger trust, and better presentation online.
                </p>

                <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="text-lg font-extrabold">What is included</div>
                  <ul className="mt-3 space-y-2 text-sm font-bold text-white/80">
                    <li>✅ Premium home page</li>
                    <li>✅ Rooms showcase</li>
                    <li>✅ Amenities page</li>
                    <li>✅ Contact page with map and WhatsApp</li>
                    <li>✅ SEO-friendly structure</li>
                    <li>✅ Mobile-first booking flow</li>
                  </ul>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={ownerWA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl bg-green-500 px-6 py-3 font-extrabold text-white transition hover:bg-green-600"
                  >
                    Get This Website
                  </a>

                  <Link
                    href={`${BASE_PATH}/contact`}
                    className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 font-extrabold backdrop-blur-xl transition hover:bg-white/15"
                  >
                    Contact for Demo
                  </Link>
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
            href={bookingWA}
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