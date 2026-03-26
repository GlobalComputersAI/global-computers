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

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [purpose, setPurpose] = useState("Room Booking");
  const [roomType, setRoomType] = useState("Deluxe Room");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [message, setMessage] = useState("");

  const guestWA = useMemo(() => {
    const msg = `Hi, I want to contact ${BRAND} (${CITY}).

Name: ${name || "____"}
Phone: ${phone || "____"}
Purpose: ${purpose}

Room Type: ${purpose === "Room Booking" ? roomType : "-"}
Check-in: ${purpose === "Room Booking" ? checkIn || "____" : "-"}
Check-out: ${purpose === "Room Booking" ? checkOut || "____" : "-"}
Guests: ${purpose === "Room Booking" ? guests || "____" : "-"}

Message: ${message || "Please share details, availability, and final price."}`;
    return wa(msg);
  }, [name, phone, purpose, roomType, checkIn, checkOut, guests, message]);

  const ownerWA = wa(
    `Hi, I saw your hotel website demo on Global Computers & IT Solutions. I want a similar hotel website with WhatsApp enquiry flow, rooms page, amenities page, contact page, and SEO setup for my property. Please share price and AMC details.`
  );

  return (
    <main className="bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/projects/hotel/g-4.jpg"
            alt={`${BRAND} hotel contact and booking support`}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-amber-200/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="flex flex-wrap gap-2">
            <Badge>📞 Contact & Booking</Badge>
            <Badge>⚡ Direct WhatsApp Enquiry</Badge>
            <Badge>✨ Quick Response Support</Badge>
          </div>

          <div className="mt-6 grid items-start gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/80">
                Contact {BRAND}
              </div>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
                Contact us in one tap,
                <span className="block text-white/85">book faster on WhatsApp.</span>
              </h1>

              <p className="mt-4 max-w-2xl font-bold leading-7 text-white/70">
                Guests convert faster when contact is simple. Call directly for urgent needs
                or send your booking details on WhatsApp for quick availability confirmation.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={CALL}
                  aria-label={`Call ${BRAND}`}
                  className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-extrabold backdrop-blur-xl transition hover:bg-white/15"
                >
                  Call Now
                </a>

                <a
                  href={guestWA}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Contact ${BRAND} on WhatsApp`}
                  className="rounded-2xl bg-green-500 px-6 py-3 font-extrabold text-white shadow-[0_10px_25px_rgba(34,197,94,0.25)] transition hover:bg-green-600"
                >
                  WhatsApp Now
                </a>

                <Link
                  href={`${BASE_PATH}/rooms`}
                  className="rounded-2xl bg-white px-6 py-3 font-extrabold text-black transition hover:bg-white/90"
                >
                  View Rooms
                </Link>
              </div>

              <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
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
                    <div className="text-2xl font-extrabold">Easy</div>
                    <div className="text-xs font-bold text-white/70">
                      WhatsApp booking flow
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <div className="p-4">
                    <div className="text-2xl font-extrabold">Direct</div>
                    <div className="text-xs font-bold text-white/70">
                      Call and support access
                    </div>
                  </div>
                </GlassCard>
              </div>

              <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <div className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/75">
                  Why this page converts
                </div>
                <ul className="mt-3 space-y-2 text-sm font-bold text-white/80">
                  <li>✅ Less steps for enquiry</li>
                  <li>✅ WhatsApp feels more personal and direct</li>
                  <li>✅ Guests can share room, dates, and purpose quickly</li>
                  <li>✅ Hotels get direct leads without marketplace commission</li>
                </ul>
              </div>
            </div>

            <GlassCard>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-extrabold">Send WhatsApp Enquiry</div>
                    <div className="text-sm font-bold text-white/70">
                      Fill once and send a ready enquiry message.
                    </div>
                  </div>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold text-white/90">
                    Lead Form
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <div className="mb-1 text-[11px] font-extrabold text-white/80">
                      Name
                    </div>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold text-white outline-none placeholder:text-white/50 focus:ring-2 focus:ring-white/20"
                    />
                  </label>

                  <label className="block">
                    <div className="mb-1 text-[11px] font-extrabold text-white/80">
                      Phone
                    </div>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="10-digit number"
                      inputMode="numeric"
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold text-white outline-none placeholder:text-white/50 focus:ring-2 focus:ring-white/20"
                    />
                  </label>

                  <label className="block sm:col-span-2">
                    <div className="mb-1 text-[11px] font-extrabold text-white/80">
                      Purpose
                    </div>
                    <select
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold text-white outline-none focus:ring-2 focus:ring-white/20"
                    >
                      <option className="text-black" value="Room Booking">
                        Room Booking
                      </option>
                      <option className="text-black" value="Event / Celebration">
                        Event / Celebration
                      </option>
                      <option className="text-black" value="Business Stay">
                        Business Stay
                      </option>
                      <option className="text-black" value="General Inquiry">
                        General Inquiry
                      </option>
                    </select>
                  </label>

                  {purpose === "Room Booking" ? (
                    <>
                      <label className="block sm:col-span-2">
                        <div className="mb-1 text-[11px] font-extrabold text-white/80">
                          Room Type
                        </div>
                        <select
                          value={roomType}
                          onChange={(e) => setRoomType(e.target.value)}
                          className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold text-white outline-none focus:ring-2 focus:ring-white/20"
                        >
                          <option className="text-black" value="Deluxe Room">
                            Deluxe Room
                          </option>
                          <option className="text-black" value="Super Deluxe Room">
                            Super Deluxe Room
                          </option>
                          <option className="text-black" value="Family Suite">
                            Family Suite
                          </option>
                        </select>
                      </label>

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

                      <label className="block sm:col-span-2">
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
                    </>
                  ) : null}

                  <label className="block sm:col-span-2">
                    <div className="mb-1 text-[11px] font-extrabold text-white/80">
                      Message
                    </div>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Special request, food requirement, early check-in, event detail, or any other note"
                      rows={4}
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold text-white outline-none placeholder:text-white/50 focus:ring-2 focus:ring-white/20"
                    />
                  </label>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={CALL}
                    aria-label={`Call ${BRAND}`}
                    className="flex-1 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-center font-extrabold backdrop-blur-xl transition hover:bg-white/15"
                  >
                    Call
                  </a>

                  <a
                    href={guestWA}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Send enquiry to ${BRAND} on WhatsApp`}
                    className="flex-1 rounded-2xl bg-green-500 px-6 py-3 text-center font-extrabold text-white transition hover:bg-green-600"
                  >
                    Send on WhatsApp
                  </a>
                </div>

                <div className="mt-4 text-xs font-bold text-white/60">
                  WhatsApp booking usually gets faster replies than long contact forms.
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent" />
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <GlassCard>
              <div className="p-6">
                <div className="text-lg font-extrabold">📍 Hotel Location</div>
                <p className="mt-2 text-sm font-bold leading-6 text-white/70">
                  Main Road, Near Railway Station, {CITY}, Chhattisgarh
                  <br />
                  Easy access for guests, families, and business travellers.
                </p>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <div className="text-lg font-extrabold">🕒 Response Time</div>
                <p className="mt-2 text-sm font-bold leading-6 text-white/70">
                  Fast WhatsApp response for room booking, pricing, and general enquiries.
                  Calling works best for urgent check-in support.
                </p>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6">
                <div className="text-lg font-extrabold">✅ Best Contact Flow</div>
                <p className="mt-2 text-sm font-bold leading-6 text-white/70">
                  Share your room type, dates, and guest count to get faster confirmation and smoother booking.
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
                  For Hotel Owners
                </div>
                <h2 className="mt-3 text-3xl font-extrabold">
                  Get this hotel website + WhatsApp lead system
                </h2>
                <p className="mt-4 font-bold leading-7 text-white/72">
                  This hotel demo is designed to help properties look more premium, improve trust,
                  and generate direct enquiries through WhatsApp and call-based conversion flow.
                </p>

                <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="text-lg font-extrabold">Included from ₹5,000</div>
                  <ul className="mt-3 space-y-2 text-sm font-bold text-white/80">
                    <li>✅ Premium home page</li>
                    <li>✅ Rooms page</li>
                    <li>✅ Amenities page</li>
                    <li>✅ Contact page with booking flow</li>
                    <li>✅ Local SEO-ready structure</li>
                    <li>✅ WhatsApp-first enquiry system</li>
                  </ul>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={`${BASE_PATH}/bill`}
                    className="rounded-2xl bg-white px-6 py-3 font-extrabold text-black transition hover:bg-white/90"
                  >
                    Billing Demo →
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

            <GlassCard>
              <div className="p-6 md:p-8">
                <div className="text-lg font-extrabold">Quick Links</div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <Link
                    href={`${BASE_PATH}`}
                    className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-center font-extrabold backdrop-blur-xl transition hover:bg-white/15"
                  >
                    Home
                  </Link>

                  <Link
                    href={`${BASE_PATH}/rooms`}
                    className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-center font-extrabold backdrop-blur-xl transition hover:bg-white/15"
                  >
                    Rooms
                  </Link>

                  <Link
                    href={`${BASE_PATH}/amenities`}
                    className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-center font-extrabold backdrop-blur-xl transition hover:bg-white/15"
                  >
                    Amenities
                  </Link>

                  <Link
                    href={`${BASE_PATH}/bill`}
                    className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-center font-extrabold backdrop-blur-xl transition hover:bg-white/15"
                  >
                    Billing
                  </Link>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="font-extrabold">Why WhatsApp lead flow works</div>
                  <ul className="mt-2 space-y-1 text-sm font-bold text-white/80">
                    <li>✅ Fewer steps mean more enquiries</li>
                    <li>✅ Guests feel direct human support</li>
                    <li>✅ Hotels avoid unnecessary platform commissions</li>
                    <li>✅ Better conversion for local hotel searches</li>
                  </ul>
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
            aria-label={`Call ${BRAND}`}
            className="flex-1 rounded-xl border border-white/15 bg-white/10 py-3 text-center font-extrabold transition hover:bg-white/15"
          >
            Call Now
          </a>

          <a
            href={guestWA}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Book ${BRAND} on WhatsApp`}
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