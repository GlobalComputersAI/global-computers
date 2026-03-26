import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BASE = "/projects/restaurant";

const WHATSAPP_MESSAGE =
  "Hi, I want to order food / book a table. Please share today's menu and offers.";
const WHATSAPP = `https://wa.me/919752422686?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;
const CALL = "tel:+919752422686";

export const metadata: Metadata = {
  title: "Restaurant Menu | Food Categories, Prices & Best Sellers",
  description:
    "Browse the restaurant menu with chef specials, starters, main course, breads, rice, and beverages. Built as a premium demo for restaurant and cafe websites.",
  keywords: [
    "restaurant menu page",
    "restaurant menu website",
    "food menu demo",
    "cafe menu website",
    "restaurant website menu India",
    "restaurant best sellers",
    "restaurant pricing page",
  ],
  alternates: {
    canonical: "/projects/restaurant/menu",
  },
  openGraph: {
    title: "Restaurant Menu | Food Categories, Prices & Best Sellers",
    description:
      "Explore chef specials, starters, main course, breads, rice, and beverages in this premium restaurant menu demo.",
    url: "https://globalcomputers.net/projects/restaurant/menu",
    type: "website",
    images: [
      {
        url: "https://globalcomputers.net/projects/food/hero-2.jpg",
        width: 1200,
        height: 630,
        alt: "Restaurant menu demo by Global Computers",
      },
    ],
  },
};

type MenuItem = {
  name: string;
  desc: string;
  price: number;
  tag?: string;
  spicy?: boolean;
  veg?: boolean;
  best?: boolean;
};

type MenuCategory = {
  title: string;
  subtitle: string;
  image: string;
  items: MenuItem[];
};

const MENU: MenuCategory[] = [
  {
    title: "Chef Specials",
    subtitle: "Signature dishes people come back for",
    image: "/projects/food/hero-1.jpg",
    items: [
      {
        name: "Veg Dum Biryani",
        desc: "Aromatic basmati rice, slow cooked with whole spices.",
        price: 219,
        best: true,
        veg: true,
      },
      {
        name: "Paneer Butter Masala",
        desc: "Rich creamy gravy, soft paneer cubes, served hot.",
        price: 239,
        best: true,
        veg: true,
      },
      {
        name: "Tandoori Platter",
        desc: "Smoky starters platter with premium presentation.",
        price: 349,
        tag: "Platter",
      },
    ],
  },
  {
    title: "Starters",
    subtitle: "Perfect for sharing",
    image: "/projects/food/pick-1.jpg",
    items: [
      {
        name: "Crispy Corn",
        desc: "Golden fried corn tossed with tangy masala.",
        price: 149,
        veg: true,
      },
      {
        name: "Chilli Paneer",
        desc: "Indo-Chinese classic with peppers, onion, and sauce.",
        price: 189,
        veg: true,
        spicy: true,
      },
      {
        name: "Veg Manchurian",
        desc: "Crispy vegetable balls in a flavorful gravy.",
        price: 179,
        veg: true,
        spicy: true,
      },
    ],
  },
  {
    title: "Main Course",
    subtitle: "Comfort food, full meals",
    image: "/projects/food/pick-2.jpg",
    items: [
      {
        name: "Dal Tadka",
        desc: "Tempered lentils with garlic and Indian spices.",
        price: 159,
        veg: true,
      },
      {
        name: "Kadhai Paneer",
        desc: "Paneer cooked with capsicum and bold kadhai masala.",
        price: 229,
        veg: true,
        spicy: true,
      },
      {
        name: "Mix Veg Curry",
        desc: "Seasonal vegetables simmered in flavorful curry.",
        price: 189,
        veg: true,
      },
    ],
  },
  {
    title: "Breads & Rice",
    subtitle: "Complete your meal",
    image: "/projects/food/hero-3.jpg",
    items: [
      {
        name: "Butter Naan",
        desc: "Soft naan brushed with butter.",
        price: 39,
        veg: true,
      },
      {
        name: "Tandoori Roti",
        desc: "Whole wheat roti cooked in tandoor.",
        price: 20,
        veg: true,
      },
      {
        name: "Jeera Rice",
        desc: "Basmati rice tempered with cumin.",
        price: 109,
        veg: true,
      },
    ],
  },
  {
    title: "Beverages",
    subtitle: "Chilled and refreshing",
    image: "/projects/food/pick-3.jpg",
    items: [
      {
        name: "Cold Coffee",
        desc: "Creamy, chilled, cafe-style refreshment.",
        price: 129,
        best: true,
      },
      {
        name: "Lassi",
        desc: "Classic sweet lassi with rich taste.",
        price: 99,
      },
      {
        name: "Fresh Lime Soda",
        desc: "Sweet or salted, light and refreshing.",
        price: 79,
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <main className="bg-slate-50" id="top">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/projects/food/hero-2.jpg"
            alt="Restaurant menu showcase"
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
                📋 Menu • Best Sellers • Fresh Today
              </div>

              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                Explore the Menu
              </h1>

              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-white/85">
                Beautiful food presentation, clear pricing, and easy ordering.
                Browse categories, view signature dishes, and message on WhatsApp
                to order or reserve a table.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 px-6 py-3 font-extrabold text-white shadow-sm transition hover:from-green-700 hover:to-emerald-600"
                >
                  💬 Order on WhatsApp
                </a>

                <a
                  href={CALL}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-6 py-3 font-extrabold text-white backdrop-blur transition hover:bg-white/15"
                >
                  📞 Call
                </a>

                <Link
                  href={`${BASE}/contact`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-extrabold text-slate-900 transition hover:bg-slate-100"
                >
                  📍 Directions
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                <Chip>🥗 Fresh Ingredients</Chip>
                <Chip>👨‍🍳 Chef Crafted</Chip>
                <Chip>🧼 Hygiene First</Chip>
                <Chip>🚚 Takeaway Available</Chip>
              </div>
            </div>

            <div className="w-full rounded-3xl border border-white/15 bg-white/10 p-6 text-white backdrop-blur lg:max-w-md">
              <div className="flex items-center justify-between">
                <div className="text-sm font-extrabold text-white/90">
                  Today’s Quick Info
                </div>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-extrabold">
                  Open Now
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <Quick label="Timing" value="11:00 AM – 11:00 PM" />
                <Quick label="Dine-in" value="Available" />
                <Quick label="Takeaway" value="Available" />
                <Quick label="WhatsApp" value="Fast order" />
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-black/10 p-4">
                <div className="text-xs font-extrabold text-white/85">Tip</div>
                <div className="mt-1 text-sm text-white/80">
                  Share your selected dishes on WhatsApp for quick confirmation.
                </div>
              </div>

              <div className="mt-4 text-xs text-white/65">
                Demo menu content can be customized with real client items and prices.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY OVERVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
              Browse by Category
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Clear food categories help guests decide faster. Best sellers are
              highlighted for better conversion.
            </p>
          </div>

          <Link
            href={`${BASE}/gallery`}
            className="rounded-xl border bg-white px-5 py-3 font-extrabold transition hover:bg-slate-50"
          >
            View Gallery →
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {MENU.map((category) => (
            <a
              key={category.title}
              href={`#${slug(category.title)}`}
              className="rounded-full border bg-white px-4 py-2 text-sm font-extrabold transition hover:bg-slate-50"
            >
              {category.title}
            </a>
          ))}
        </div>
      </section>

      {/* CATEGORY SECTIONS */}
      <section className="space-y-10 pb-12">
        {MENU.map((cat, idx) => (
          <CategorySection key={cat.title} cat={cat} index={idx} />
        ))}
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/projects/food/ambience-1.jpg"
            alt="Restaurant ambience and food"
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
                  Hungry already?
                </h3>
                <p className="mt-3 max-w-2xl text-lg text-white/85">
                  Send your selected items on WhatsApp and get quick order or
                  table booking confirmation.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-white px-6 py-3 font-extrabold text-slate-900 transition hover:bg-slate-100"
                >
                  💬 WhatsApp Order
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
        </div>
      </section>
    </main>
  );
}

/* helpers */

function slug(s: string) {
  return s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold text-white backdrop-blur">
      {children}
    </span>
  );
}

function Quick({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
      <div className="text-xs font-semibold text-white/75">{label}</div>
      <div className="mt-1 font-extrabold text-white">{value}</div>
    </div>
  );
}

function CategorySection({
  cat,
  index,
}: {
  cat: MenuCategory;
  index: number;
}) {
  const id = slug(cat.title);

  return (
    <section id={id} className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src={cat.image} alt={`${cat.title} menu background`} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/15 via-transparent to-orange-500/15" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold backdrop-blur">
              {index === 0 ? "⭐ Popular" : "🍴 Category"}
            </div>
            <h3 className="mt-4 text-3xl font-extrabold md:text-4xl">
              {cat.title}
            </h3>
            <p className="mt-2 max-w-2xl text-white/85">{cat.subtitle}</p>
          </div>

          <div className="flex gap-2">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-5 py-3 font-extrabold text-slate-900 transition hover:bg-slate-100"
            >
              💬 WhatsApp
            </a>
            <Link
              href={`${BASE}/contact`}
              className="rounded-xl border border-white/15 bg-white/10 px-5 py-3 font-extrabold text-white backdrop-blur transition hover:bg-white/15"
            >
              📍 Visit
            </Link>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur md:p-8">
          <div className="space-y-5">
            {cat.items.map((item) => (
              <MenuRow key={item.name} item={item} />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6">
            <div className="text-sm text-white/80">
              Ask for today’s offers and combos on WhatsApp.
            </div>

            <div className="flex flex-wrap gap-2">
              <Link
                href={`${BASE}/gallery`}
                className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 font-extrabold text-white transition hover:bg-white/15"
              >
                View Photos
              </Link>
              <a
                href={CALL}
                className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 font-extrabold text-white transition hover:bg-white/15"
              >
                Call
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <a
            href="#top"
            className="inline-flex items-center gap-2 font-extrabold text-white/80 transition hover:text-white"
          >
            ↑ Back to top
          </a>
        </div>
      </div>
    </section>
  );
}

function MenuRow({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-start justify-between gap-6">
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <div className="text-lg font-extrabold text-white">{item.name}</div>

          {item.best ? (
            <span className="rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[11px] font-extrabold text-white">
              ⭐ Best Seller
            </span>
          ) : null}

          {item.veg ? (
            <span className="rounded-full border border-green-400/25 bg-green-500/15 px-2 py-0.5 text-[11px] font-extrabold text-green-100">
              Veg
            </span>
          ) : null}

          {item.spicy ? (
            <span className="rounded-full border border-orange-400/25 bg-orange-500/15 px-2 py-0.5 text-[11px] font-extrabold text-orange-100">
              Spicy
            </span>
          ) : null}

          {item.tag ? (
            <span className="rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[11px] font-extrabold text-white/90">
              {item.tag}
            </span>
          ) : null}
        </div>

        <p className="mt-1 max-w-3xl text-sm leading-relaxed text-white/80">
          {item.desc}
        </p>
      </div>

      <div className="shrink-0 text-right">
        <div className="text-lg font-extrabold text-white">₹{item.price}</div>
        <div className="text-[11px] text-white/60">inclusive taxes*</div>
      </div>
    </div>
  );
}