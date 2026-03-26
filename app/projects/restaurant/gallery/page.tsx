import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BASE = "/projects/restaurant";

const WHATSAPP_MESSAGE =
  "Hi, I want to book a table / order food. Please share today's offers and availability.";
const WHATSAPP = `https://wa.me/919752422686?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;
const CALL = "tel:+919752422686";

export const metadata: Metadata = {
  title: "Restaurant Gallery | Food Photos, Ambience & Dining Experience",
  description:
    "Browse restaurant gallery photos including food, ambience, seating, and dining experience. A premium demo gallery page built for restaurant and cafe websites.",
  keywords: [
    "restaurant gallery",
    "restaurant food photos",
    "restaurant ambience gallery",
    "cafe gallery page",
    "restaurant website gallery",
    "food business photo gallery",
    "restaurant website India",
  ],
  alternates: {
    canonical: "/projects/restaurant/gallery",
  },
  openGraph: {
    title: "Restaurant Gallery | Food Photos, Ambience & Dining Experience",
    description:
      "Explore food, ambience, and dining gallery images in this premium restaurant website demo.",
    url: "https://globalcomputers.net/projects/restaurant/gallery",
    type: "website",
    images: [
      {
        url: "https://globalcomputers.net/projects/food/hero-2.jpg",
        width: 1200,
        height: 630,
        alt: "Restaurant gallery demo by Global Computers",
      },
    ],
  },
};

const DEMO_PHOTOS: { src: string; alt: string; tag: string }[] = [
  {
    src: "/projects/food/hero-1.jpg",
    alt: "Restaurant signature dish",
    tag: "Chef Special",
  },
  {
    src: "/projects/food/pick-1.jpg",
    alt: "Restaurant starter dish",
    tag: "Starters",
  },
  {
    src: "/projects/food/pick-2.jpg",
    alt: "Restaurant biryani dish",
    tag: "Best Seller",
  },
  {
    src: "/projects/food/pick-3.jpg",
    alt: "Restaurant beverage",
    tag: "Beverages",
  },
  {
    src: "/projects/food/hero-2.jpg",
    alt: "Restaurant ambience",
    tag: "Ambience",
  },
  {
    src: "/projects/food/hero-3.jpg",
    alt: "Restaurant dessert",
    tag: "Desserts",
  },
  {
    src: "/projects/food/ambience-1.jpg",
    alt: "Restaurant dining area",
    tag: "Dining",
  },
];

export default function GalleryPage() {
  return (
    <main className="bg-slate-50" id="top">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/projects/food/hero-2.jpg"
            alt="Restaurant gallery showcase"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-slate-950/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-orange-500/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold text-white backdrop-blur">
                🖼️ Gallery • Food • Ambience • Dining
              </div>

              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                Real photos build real trust
              </h1>

              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-white/85">
                Guests decide faster when they can see your food quality,
                seating, ambience, and overall cleanliness. A strong gallery page
                increases trust and improves direct inquiries.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 px-6 py-3 text-white font-extrabold shadow-sm transition hover:from-green-700 hover:to-emerald-600"
                >
                  💬 Book on WhatsApp
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
                <Chip>📸 Food Closeups</Chip>
                <Chip>🪑 Seating</Chip>
                <Chip>🧼 Hygiene</Chip>
                <Chip>🎉 Events</Chip>
              </div>
            </div>

            <div className="w-full rounded-3xl border border-white/15 bg-white/10 p-6 text-white backdrop-blur lg:max-w-md">
              <div className="text-sm font-extrabold text-white/90">
                Best photo categories
              </div>

              <div className="mt-4 space-y-3">
                <Suggestion
                  title="🍽️ Food Photos"
                  desc="Best sellers, combos, thali, desserts, beverages"
                />
                <Suggestion
                  title="🪑 Ambience"
                  desc="Entrance, seating, dining tables, interior lighting"
                />
                <Suggestion
                  title="🧼 Hygiene"
                  desc="Clean kitchen, uniforms, packaging, service counter"
                />
                <Suggestion
                  title="🎉 Events"
                  desc="Family dining, birthdays, celebrations, peak hours"
                />
              </div>

              <div className="mt-5 text-xs text-white/65">
                Natural light and clear composition usually perform better than heavy filters.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN GALLERY GRID */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
              Gallery Highlights
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Demo images are shown below. Replacing them with real restaurant
              photos makes this page one of the strongest trust-building sections.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link
              href={`${BASE}/contact`}
              className="rounded-xl border bg-white px-5 py-3 font-extrabold transition hover:bg-slate-50"
            >
              📍 Directions
            </Link>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-green-600 px-5 py-3 font-extrabold text-white transition hover:bg-green-700"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {DEMO_PHOTOS.map((photo) => (
            <GalleryTile
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              tag={photo.tag}
            />
          ))}

          <EmptyTile
            title="Add More Food Photos"
            desc="Highlight best sellers, combos, thali, desserts, and drinks."
          />
          <EmptyTile
            title="Add Ambience Photos"
            desc="Show seating comfort, entrance, branding, and lighting."
          />
          <EmptyTile
            title="Add Hygiene Photos"
            desc="Build trust with cleanliness, kitchen, staff, and packaging."
          />
          <EmptyTile
            title="Add Event Photos"
            desc="Show family dining, birthdays, celebrations, and busy hours."
          />
        </div>
      </section>

      {/* FEATURED STRIP */}
      <section className="border-y bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2">
          <div className="relative h-80 overflow-hidden rounded-3xl border md:h-[420px]">
            <Image
              src="/projects/food/hero-1.jpg"
              alt="Featured restaurant dish"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold text-white backdrop-blur">
                ⭐ Featured Dish
              </div>
              <div className="mt-2 text-2xl font-extrabold text-white">
                Signature dish showcase
              </div>
              <div className="text-sm text-white/85">
                A premium hero dish section helps increase direct orders.
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-extrabold text-slate-700">
              📌 Conversion Insight
            </div>

            <h2 className="mt-5 text-3xl font-extrabold text-slate-900 md:text-4xl">
              Show your top 3 dishes clearly
            </h2>

            <p className="mt-4 leading-relaxed text-slate-600">
              Guests order faster when they see your best items presented with
              clean images, clear names, and direct contact options. This is one
              of the highest-impact improvements on a restaurant site.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <MiniCard
                title="📸 Use Real Photos"
                desc="Phone camera + daylight is often enough for strong results."
              />
              <MiniCard
                title="💰 Show Prices"
                desc="Visible pricing reduces hesitation and unnecessary calls."
              />
              <MiniCard
                title="🧼 Show Hygiene"
                desc="Cleanliness visuals build instant family trust."
              />
              <MiniCard
                title="📍 Add Location"
                desc="Map and parking clarity improve walk-in visits."
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`${BASE}/menu`}
                className="rounded-xl bg-red-600 px-6 py-3 font-extrabold text-white transition hover:bg-red-700"
              >
                View Menu
              </Link>
              <Link
                href={`${BASE}/contact`}
                className="rounded-xl border bg-white px-6 py-3 font-extrabold transition hover:bg-slate-50"
              >
                Contact / Directions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
              Social proof section
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              You can later connect Instagram posts, reels, or recent customer
              content here to strengthen trust and repeat visits.
            </p>
          </div>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-green-600 px-5 py-3 font-extrabold text-white transition hover:bg-green-700"
          >
            💬 WhatsApp Now
          </a>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="text-sm font-extrabold text-slate-900">
              Option A: Instagram embed
            </div>
            <p className="mt-2 text-sm text-slate-600">
              A restaurant can embed selected Instagram posts or reels to show
              fresh activity and improve social proof.
            </p>

            <div className="mt-5 rounded-2xl border bg-slate-50 p-4 text-sm text-slate-700">
              <div className="font-extrabold">Common use cases:</div>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>best-selling dishes</li>
                <li>weekend offers</li>
                <li>event highlights</li>
                <li>festival specials</li>
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-dashed bg-white p-6 text-center">
              <div className="font-extrabold text-slate-900">
                Instagram embed placeholder
              </div>
              <div className="mt-2 text-sm text-slate-600">
                Replace this with a real embed snippet later.
              </div>
            </div>
          </div>

          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="text-sm font-extrabold text-slate-900">
              Option B: Highlight recent post
            </div>
            <p className="mt-2 text-sm text-slate-600">
              For a simpler setup, link one featured reel or one special offer post.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border">
              <iframe
                title="Instagram preview"
                src="https://www.instagram.com/p/Cu6GdJgN2oP/embed"
                width="100%"
                height="480"
                style={{ border: 0 }}
                loading="lazy"
                allow="encrypted-media"
              />
            </div>

            <div className="mt-4 text-xs text-slate-500">
              Replace the preview with a real restaurant post when available.
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/projects/food/ambience-1.jpg"
            alt="Restaurant ambience"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-orange-500/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-3xl border border-white/15 bg-white/10 p-8 text-white backdrop-blur md:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-3xl font-extrabold md:text-4xl">
                  Want to visit today?
                </h3>
                <p className="mt-3 max-w-2xl text-lg text-white/85">
                  Reserve your table or ask for today’s availability and offers on WhatsApp.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={WHATSAPP}
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
                  href={`${BASE}/contact`}
                  className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-extrabold transition hover:bg-white/15"
                >
                  📍 Directions
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a
              href="#top"
              className="inline-flex items-center gap-2 font-extrabold text-white/80 transition hover:text-white"
            >
              ↑ Back to top
            </a>
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

function Suggestion({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
      <div className="font-extrabold text-white">{title}</div>
      <div className="mt-1 text-sm text-white/80">{desc}</div>
    </div>
  );
}

function GalleryTile({
  src,
  alt,
  tag,
}: {
  src: string;
  alt: string;
  tag: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[4/5]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
        <div className="absolute left-3 top-3">
          <span className="inline-flex items-center rounded-full border bg-white/90 px-3 py-1 text-xs font-extrabold text-slate-900">
            {tag}
          </span>
        </div>
      </div>
    </div>
  );
}

function EmptyTile({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex min-h-[220px] flex-col justify-between rounded-3xl border border-dashed bg-white p-5">
      <div>
        <div className="text-sm font-extrabold text-slate-900">{title}</div>
        <div className="mt-2 text-sm text-slate-600">{desc}</div>
      </div>
      <div className="mt-4 text-xs text-slate-500">
        Add more real restaurant photos here for stronger trust.
      </div>
    </div>
  );
}

function MiniCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border bg-slate-50 p-4 transition hover:bg-white">
      <div className="font-extrabold text-slate-900">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{desc}</div>
    </div>
  );
}