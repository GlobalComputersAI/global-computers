import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DemoVideoPopup from "@/components/DemoVideoPopup";

const BASE = "/projects/restaurant";
const WHATSAPP_MESSAGE =
  "Hi, I saw your restaurant demo website. I want to book a table and know today’s menu. Please share details.";
const WHATSAPP = `https://wa.me/919752422686?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;
const CALL = "tel:+919752422686";

export const metadata: Metadata = {
  title: "Restaurant Website Demo | Menu, Gallery, Contact & Billing",
  description:
    "Explore a modern restaurant website demo with food gallery, menu page, contact section, and billing demo. Built by Global Computers & IT Solutions for Indian restaurants, cafes, and food businesses.",
  keywords: [
    "restaurant website demo",
    "restaurant website design India",
    "cafe website demo",
    "food business website",
    "restaurant menu website",
    "restaurant billing demo",
    "restaurant website development",
    "restaurant website design Chhattisgarh",
    "restaurant website design Korba",
    "Global Computers restaurant demo",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/restaurant",
  },
  openGraph: {
    title: "Restaurant Website Demo | Global Computers & IT Solutions",
    description:
      "Modern restaurant website demo with menu, gallery, contact page, and billing demo.",
    url: "https://globalcomputers.net/projects/restaurant",
    siteName: "Global Computers & IT Solutions",
    type: "website",
    images: [
      {
        url: "https://globalcomputers.net/projects/food/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Restaurant website demo by Global Computers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Website Demo | Global Computers & IT Solutions",
    description:
      "Restaurant website demo with menu, gallery, contact, and billing features.",
    images: ["https://globalcomputers.net/projects/food/hero-1.jpg"],
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Restaurant Website Demo",
    url: "https://globalcomputers.net/projects/restaurant",
    image: [
      "https://globalcomputers.net/projects/food/hero-1.jpg",
      "https://globalcomputers.net/projects/food/hero-2.jpg",
      "https://globalcomputers.net/projects/food/hero-3.jpg",
    ],
    servesCuisine: ["Indian", "Chinese", "Fast Food", "Cafe"],
    telephone: "+91-9752422686",
    menu: "https://globalcomputers.net/projects/restaurant/menu",
    acceptsReservations: "True",
    sameAs: ["https://globalcomputers.net"],
    description:
      "A modern restaurant website demo with menu, gallery, contact page, and billing showcase.",
  };

  return (
    <>
      <main className="bg-slate-50">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className="relative overflow-hidden bg-slate-950">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-16 md:pb-24 md:pt-20 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold text-white backdrop-blur">
                🍽️ Restaurant Demo • Menu • Gallery • Billing • Contact
              </div>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
                A modern restaurant website
                <span className="block bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
                  built to attract more customers
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                This demo shows how a restaurant or cafe can present food photos,
                menu items, contact details, gallery, and billing flow in one
                clean mobile-first website experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 px-6 py-3 font-extrabold text-white shadow-sm transition hover:from-green-700 hover:to-emerald-600"
                >
                  💬 Book on WhatsApp
                </a>

                <a
                  href={CALL}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-6 py-3 font-extrabold text-white backdrop-blur transition hover:bg-white/15"
                >
                  📞 Call Now
                </a>

                <Link
                  href={`${BASE}/menu`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-extrabold text-slate-900 transition hover:bg-slate-100"
                >
                  View Menu
                </Link>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                <MiniStat title="⭐ 4.7+" subtitle="Guest Rating" />
                <MiniStat title="⏱️ Fast" subtitle="Quick Service" />
                <MiniStat title="🥗 Fresh" subtitle="Daily Ingredients" />
                <MiniStat title="👨‍👩‍👧‍👦 Family" subtitle="Friendly Dining" />
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
                <div className="grid grid-cols-12 gap-3">
                  <div className="relative col-span-12 h-56 overflow-hidden rounded-2xl border border-white/10 md:col-span-7 md:h-72">
                    <Image
                      src="/projects/food/hero-1.jpg"
                      alt="Restaurant signature dish website demo"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold text-white backdrop-blur">
                        🔥 Chef’s Special
                      </div>
                      <div className="mt-2 text-lg font-extrabold text-white">
                        Signature Platter
                      </div>
                      <div className="text-sm text-white/80">
                        Rich flavors, premium presentation, memorable experience.
                      </div>
                    </div>
                  </div>

                  <div className="relative col-span-6 h-28 overflow-hidden rounded-2xl border border-white/10 md:col-span-5 md:h-36">
                    <Image
                      src="/projects/food/hero-2.jpg"
                      alt="Restaurant ambience demo"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
                    <div className="absolute bottom-2 left-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold text-white backdrop-blur">
                      ✨ Warm Ambience
                    </div>
                  </div>

                  <div className="relative col-span-6 h-28 overflow-hidden rounded-2xl border border-white/10 md:col-span-5 md:h-36">
                    <Image
                      src="/projects/food/hero-3.jpg"
                      alt="Restaurant dessert demo"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
                    <div className="absolute bottom-2 left-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold text-white backdrop-blur">
                      🍰 Desserts
                    </div>
                  </div>

                  <div className="col-span-12">
                    <div className="grid gap-3 sm:grid-cols-3">
                      <InfoChip title="📍 Prime Location" desc="Easy to reach" />
                      <InfoChip title="🧼 Hygiene First" desc="Clean kitchen & dining" />
                      <InfoChip title="🚚 Takeaway" desc="Fast pickup support" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-10 -right-10 -z-10 h-60 w-60 rounded-full bg-orange-500/20 blur-3xl" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
                Popular Picks
              </h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                Show your best dishes in a premium way so customers trust the
                brand before they even visit.
              </p>
            </div>

            <Link
              href={`${BASE}/menu`}
              className="rounded-xl border bg-white px-5 py-3 font-extrabold transition hover:bg-slate-50"
            >
              Explore Full Menu →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <FoodCard
              img="/projects/food/pick-1.jpg"
              title="Paneer Butter Masala"
              subtitle="Creamy, rich, premium restaurant presentation"
              badge="Best Seller"
            />
            <FoodCard
              img="/projects/food/pick-2.jpg"
              title="Veg Biryani"
              subtitle="Aromatic basmati rice with signature spices"
              badge="Most Ordered"
            />
            <FoodCard
              img="/projects/food/pick-3.jpg"
              title="Cold Coffee"
              subtitle="Chilled, smooth and great for cafe-style menus"
              badge="Customer Favorite"
            />
          </div>
        </section>

        <section className="border-y bg-white">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-3xl border md:h-[420px]">
              <Image
                src="/projects/food/ambience-1.jpg"
                alt="Restaurant family ambience"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold text-white backdrop-blur">
                  ✨ Perfect for Family Dining & Friends
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-extrabold text-slate-700">
                ❤️ Taste • Hospitality • Trust
              </div>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
                Great restaurant websites sell the experience, not just the food
              </h2>

              <p className="mt-4 leading-relaxed text-slate-600">
                A restaurant website should help customers feel confident about
                food quality, ambience, cleanliness, pricing, and contact options.
                This demo is built to improve trust and drive direct WhatsApp or
                call inquiries.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Benefit icon="🥗" title="Fresh Appeal" desc="Food photos that increase trust" />
                <Benefit icon="👨‍🍳" title="Premium Brand Feel" desc="Modern layout and visuals" />
                <Benefit icon="🧼" title="Clean & Safe Image" desc="Perfect for family audiences" />
                <Benefit icon="📍" title="Local Discovery" desc="Better contact and location flow" />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-green-600 px-6 py-3 font-extrabold text-white transition hover:bg-green-700"
                >
                  💬 Book Table
                </a>
                <Link
                  href={`${BASE}/gallery`}
                  className="rounded-xl border bg-white px-6 py-3 font-extrabold transition hover:bg-slate-50"
                >
                  View Gallery
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
              What this restaurant demo includes
            </h2>
            <p className="mt-3 text-slate-600">
              Built to show how a food business can present itself professionally online.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            <FeatureCard
              title="Menu Page"
              desc="Display categories, items, prices, and best sellers clearly."
            />
            <FeatureCard
              title="Gallery Page"
              desc="Show food quality, ambience, seating, and customer trust."
            />
            <FeatureCard
              title="Contact Page"
              desc="Help customers call, WhatsApp, and find the location fast."
            />
            <FeatureCard
              title="Billing Demo"
              desc="Show billing capability for restaurant operations and software upsell."
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
              What Guests Say
            </h2>
            <p className="mt-3 text-slate-600">
              Strong customer trust always starts with great experience.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Review
              name="Amit"
              text="Loved the ambience and food presentation. Feels like a premium family place."
            />
            <Review
              name="Neha"
              text="The menu is easy to browse, and the place looks clean and welcoming."
            />
            <Review
              name="Rohit"
              text="Good food, quick service, and a professional overall experience."
            />
          </div>

          <div className="mt-10 text-center">
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-7 py-3 font-extrabold text-white transition hover:bg-red-700"
            >
              📍 Contact / Get Directions
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-slate-950 to-slate-900 p-8 text-white md:p-12">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-red-500/20 blur-2xl" />
            <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-orange-500/20 blur-2xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-extrabold md:text-4xl">
                  Ready to explore the full restaurant experience?
                </h2>
                <p className="mt-3 max-w-xl text-white/80">
                  Browse the menu, check gallery photos, and contact the restaurant
                  in seconds through WhatsApp or direct call.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 px-6 py-3 font-extrabold text-white transition hover:from-green-700 hover:to-emerald-600"
                  >
                    💬 WhatsApp Now
                  </a>
                  <a
                    href={CALL}
                    className="rounded-xl border border-white/15 bg-white/10 px-6 py-3 font-extrabold transition hover:bg-white/15"
                  >
                    📞 Call
                  </a>
                  <Link
                    href={`${BASE}/menu`}
                    className="rounded-xl bg-white px-6 py-3 font-extrabold text-slate-900 transition hover:bg-slate-100"
                  >
                    View Menu
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="text-sm font-extrabold text-white/80">
                  Demo Quick Info
                </div>

                <div className="mt-4 space-y-3 text-white">
                  <QuickRow label="Timing" value="11:00 AM – 11:00 PM" />
                  <QuickRow label="Dining" value="Dine-in Available" />
                  <QuickRow label="Takeaway" value="Available" />
                  <QuickRow label="Contact" value="+91 97524 22686" />
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Link
                    href={`${BASE}/gallery`}
                    className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-center font-extrabold transition hover:bg-white/15"
                  >
                    Gallery
                  </Link>
                  <Link
                    href={`${BASE}/contact`}
                    className="rounded-xl bg-red-600 px-4 py-3 text-center font-extrabold transition hover:bg-red-700"
                  >
                    Contact
                  </Link>
                </div>

                <div className="mt-4 text-xs text-white/60">
                  Demo images are loaded from <b>/public/projects/food/</b>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <DemoVideoPopup
        videoSrc="/videos/final_restaurat.mp4"
        title="Restaurant Website Demo"
        buttonLabel="See Demo"
        autoOpen={true}
        autoOpenDelay={300}
        showButton={true}
        storageKey="restaurant-demo-popup-v1"
        poster="/projects/food/hero-1.jpg"
      />
    </>
  );
}

function MiniStat({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
      <div className="text-lg font-extrabold text-white">{title}</div>
      <div className="text-xs font-semibold text-white/80">{subtitle}</div>
    </div>
  );
}

function InfoChip({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
      <div className="font-extrabold text-white">{title}</div>
      <div className="mt-1 text-sm text-white/75">{desc}</div>
    </div>
  );
}

function FoodCard({
  img,
  title,
  subtitle,
  badge,
}: {
  img: string;
  title: string;
  subtitle: string;
  badge: string;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-56">
        <Image src={img} alt={title} fill className="object-cover" />
        <div className="absolute left-3 top-3">
          <span className="inline-flex items-center rounded-full border bg-white/90 px-3 py-1 text-xs font-extrabold text-slate-900">
            {badge}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="text-lg font-extrabold text-slate-900">{title}</div>
        <p className="mt-2 text-sm text-slate-600">{subtitle}</p>

        <div className="mt-5 flex gap-2">
          <Link
            href={`${BASE}/menu`}
            className="rounded-xl border px-4 py-2 font-extrabold transition hover:bg-slate-50"
          >
            View Menu
          </Link>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-green-600 px-4 py-2 font-extrabold text-white transition hover:bg-green-700"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

function Benefit({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border bg-slate-50 p-4 transition hover:bg-white">
      <div className="text-2xl">{icon}</div>
      <div className="mt-2 font-extrabold text-slate-900">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{desc}</div>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="text-lg font-extrabold text-slate-900">{title}</div>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{desc}</p>
    </div>
  );
}

function Review({ name, text }: { name: string; text: string }) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-center gap-2 text-yellow-500">★★★★★</div>
      <p className="mt-4 leading-relaxed text-slate-700">“{text}”</p>
      <div className="mt-5 text-sm font-extrabold text-slate-900">— {name}</div>
    </div>
  );
}

function QuickRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
      <div className="text-sm font-semibold text-white/75">{label}</div>
      <div className="text-sm font-extrabold text-white">{value}</div>
    </div>
  );
}