"use client";

import Image from "next/image";
import Link from "next/link";

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

type Amenity = {
  title: string;
  desc: string;
  icon: string;
};

type Highlight = {
  title: string;
  desc: string;
};

export default function AmenitiesPage() {
  const bookingWA = wa(
    `Hi, I want to book a room at ${BRAND} (${CITY}).
Check-in: ____ 
Check-out: ____ 
Guests: ____ 
Please share room availability, final price, and booking confirmation details.`
  );

  const ownerWA = wa(
    `Hi, I saw your hotel amenities demo page. I want a similar premium hotel website with rooms, amenities, gallery, contact page, and WhatsApp booking flow for my property. Please share price and package details.`
  );

  const amenities: Amenity[] = [
    { icon: "📶", title: "Free Wi-Fi", desc: "Reliable internet access for guests during work, travel, and entertainment." },
    { icon: "🚗", title: "Parking", desc: "Convenient parking support for guests arriving by car or family vehicle." },
    { icon: "🕒", title: "24×7 Reception", desc: "Fast support and check-in help whenever guests need assistance." },
    { icon: "🎥", title: "CCTV Security", desc: "Added peace of mind through monitored property surroundings." },
    { icon: "🛎️", title: "Room Service", desc: "Quick support for everyday in-room guest needs." },
    { icon: "🧼", title: "Clean Washrooms", desc: "Hygiene-focused cleaning to improve comfort and trust." },
    { icon: "🚿", title: "Hot Water", desc: "Comfortable bathing experience for guests in regular use." },
    { icon: "👨‍👩‍👧‍👦", title: "Family Friendly", desc: "Suitable stay environment for couples, families, and group visitors." },
    { icon: "📍", title: "Prime Location", desc: "Easy access from city points, transport areas, and nearby routes." },
    { icon: "🔋", title: "Power Backup", desc: "Support for essential uninterrupted stay comfort where available." },
    { icon: "📺", title: "LED TV", desc: "In-room entertainment for a more complete stay experience." },
    { icon: "🛏️", title: "Comfort Beds", desc: "Fresh linen and comfortable bedding for restful sleep." },
  ];

  const highlights: Highlight[] = [
    {
      title: "Clean & Hygienic",
      desc: "Guests decide faster when the hotel clearly communicates cleanliness and care.",
    },
    {
      title: "Fast Booking Flow",
      desc: "Direct WhatsApp enquiry reduces steps and improves booking response time.",
    },
    {
      title: "Safe Stay Confidence",
      desc: "Security, reception support, and clear service details increase trust instantly.",
    },
    {
      title: "Better Decision Making",
      desc: "Good amenities presentation removes doubts and helps guests choose faster.",
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

  return (
    <main className="bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/projects/hotel/g-1.jpg"
            alt={`${BRAND} hotel amenities and premium stay experience`}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/90" />
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-amber-200/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="flex flex-wrap gap-2">
            <Badge>✨ Amenities & Comfort</Badge>
            <Badge>🧼 Clean • Safe • Comfortable</Badge>
            <Badge>⚡ Direct WhatsApp Booking</Badge>
          </div>

          <div className="mt-6 grid items-start gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/80">
                Guest Experience
              </div>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
                Comfort that feels premium,
                <span className="block text-white/85">services that build trust.</span>
              </h1>

              <p className="mt-4 max-w-2xl font-bold leading-7 text-white/70">
                Guests choose hotels for peace of mind. Clear facilities, trusted visuals,
                and easy booking support reduce hesitation and increase direct enquiries.
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
                  href={bookingWA}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Book ${BRAND} on WhatsApp`}
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

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {highlights.map((h) => (
                  <GlassCard key={h.title}>
                    <div className="p-5">
                      <div className="text-lg font-extrabold">{h.title}</div>
                      <div className="mt-1 text-sm font-bold text-white/70">{h.desc}</div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>

            <GlassCard>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-extrabold">Why guests feel confident</div>
                    <div className="text-sm font-bold text-white/70">
                      Strong amenities presentation means fewer doubts and faster decisions.
                    </div>
                  </div>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold text-white/90">
                    Trust
                  </span>
                </div>

                <div className="mt-5 grid gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="font-extrabold">✅ Clean Rooms & Washrooms</div>
                    <div className="mt-1 text-sm font-bold text-white/70">
                      Hygiene is one of the biggest reasons guests choose quickly.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="font-extrabold">✅ Safe Stay Support</div>
                    <div className="mt-1 text-sm font-bold text-white/70">
                      Reception assistance and security features improve confidence.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="font-extrabold">✅ Fast WhatsApp Booking</div>
                    <div className="mt-1 text-sm font-bold text-white/70">
                      Direct contact makes booking simpler than long forms and reduces friction.
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={bookingWA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-2xl bg-green-500 px-6 py-3 text-center font-extrabold text-white transition hover:bg-green-600"
                  >
                    WhatsApp Booking
                  </a>

                  <Link
                    href={`${BASE_PATH}/contact`}
                    className="flex-1 rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-center font-extrabold backdrop-blur-xl transition hover:bg-white/15"
                  >
                    Contact
                  </Link>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-extrabold">Quick booking idea</div>
                  <div className="mt-2 text-sm font-bold leading-6 text-white/70">
                    Guests usually want 3 things first: room photos, amenities, and direct price confirmation.
                    This page is built to support that decision flow.
                  </div>
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
                🏨 Hotel Facilities
              </div>
              <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
                Amenities & Facilities
              </h2>
              <p className="mt-2 max-w-2xl font-bold text-white/70">
                Show everything guests commonly ask for in one clear place to improve confidence and enquiries.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={`${BASE_PATH}/rooms`}
                className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 font-extrabold backdrop-blur-xl transition hover:bg-white/15"
              >
                Rooms →
              </Link>

              <a
                href={bookingWA}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-green-500 px-6 py-3 font-extrabold text-white transition hover:bg-green-600"
              >
                WhatsApp Booking
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((a) => (
              <article
                key={a.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10"
              >
                <div className="text-2xl">{a.icon}</div>
                <div className="mt-3 text-lg font-extrabold">{a.title}</div>
                <div className="mt-2 text-sm font-bold leading-6 text-white/70">{a.desc}</div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="grid items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/75">
                  Conversion Note
                </div>
                <div className="mt-2 text-xl font-extrabold">
                  Guests see amenities, feel trust, and book faster.
                </div>
                <p className="mt-2 font-bold text-white/70">
                  Clear facilities reduce uncertainty. That is why amenities sections are important
                  for direct booking websites.
                </p>
              </div>

              <div className="lg:text-right">
                <div className="mt-4 flex flex-wrap gap-3 lg:justify-end">
                  <a
                    href={CALL}
                    aria-label={`Call ${BRAND}`}
                    className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 font-extrabold backdrop-blur-xl transition hover:bg-white/15"
                  >
                    Call Now
                  </a>

                  <a
                    href={bookingWA}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Book ${BRAND} on WhatsApp`}
                    className="rounded-2xl bg-green-500 px-6 py-3 font-extrabold text-white transition hover:bg-green-600"
                  >
                    WhatsApp Booking
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-extrabold text-white/85 backdrop-blur-xl">
                🖼️ Real Photos
              </div>
              <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
                Gallery builds real trust
              </h2>
              <p className="mt-2 max-w-2xl font-bold text-white/70">
                Guests prefer properties that show actual rooms, surroundings, and stay environment clearly.
              </p>
            </div>

            <Link
              href={`${BASE_PATH}/contact`}
              className="rounded-2xl bg-white px-6 py-3 font-extrabold text-black transition hover:bg-white/90"
            >
              Contact →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((src, i) => (
              <div
                key={src}
                className="relative h-48 overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:h-56"
                title={`Hotel gallery photo ${i + 1}`}
              >
                <Image
                  src={src}
                  alt={`Hotel gallery image ${i + 1} for ${BRAND}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent opacity-80" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassCard>
              <div className="p-6 md:p-8">
                <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/75">
                  Guest Advantage
                </div>
                <h2 className="mt-3 text-3xl font-extrabold">Why this page helps booking</h2>
                <p className="mt-4 font-bold leading-7 text-white/72">
                  Guests want comfort, safety, convenience, and clarity. When those points are presented well,
                  direct enquiries increase.
                </p>

                <ul className="mt-5 space-y-2 text-sm font-bold text-white/80">
                  <li>✅ Better first impression</li>
                  <li>✅ More transparent facilities</li>
                  <li>✅ Easier trust building</li>
                  <li>✅ Stronger WhatsApp enquiry conversion</li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6 md:p-8">
                <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/75">
                  For Hotel Owners
                </div>
                <h2 className="mt-3 text-3xl font-extrabold">
                  Want this amenities page for your hotel?
                </h2>
                <p className="mt-4 font-bold leading-7 text-white/72">
                  This premium amenities section helps hotels, lodges, resorts, and guest houses
                  showcase services clearly and improve direct lead conversion.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
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
            href={bookingWA}
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