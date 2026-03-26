import type { Metadata } from "next";
import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/919752422686?text=Hi%20I%20want%20a%20mobile%20shop%20website%20with%20products%20page.%20Please%20share%20demo%2C%20price%20and%20details.";
const CALL_URL = "tel:+919752422686";

const categories = [
  {
    title: "Smartphones",
    description:
      "Show latest Android phones, flagship models, budget devices, 5G phones, and customer-favorite best sellers in a premium product layout.",
    points: ["Flagship & premium phones", "Budget and mid-range options", "5G-ready models"],
  },
  {
    title: "Mobile Accessories",
    description:
      "Display chargers, cables, neckbands, earphones, covers, tempered glass, power banks, speakers, and daily-use add-ons that increase cart value.",
    points: ["Chargers and cables", "Covers and tempered glass", "Power banks and audio gear"],
  },
  {
    title: "Smart Gadgets",
    description:
      "Promote smartwatches, TWS earbuds, Bluetooth devices, mini speakers, and trending electronics to attract more enquiries and upsell opportunities.",
    points: ["Smartwatches", "Wireless earbuds", "Bluetooth accessories"],
  },
];

const featuredProducts = [
  {
    name: "Premium 5G Smartphones",
    tag: "Best Seller",
    description:
      "Highlight new launches, trusted brands, camera-focused models, gaming phones, and premium performance devices.",
    features: ["High-value models", "Brand trust display", "Enquiry-focused layout"],
  },
  {
    name: "Budget Smartphones",
    tag: "Fast Moving",
    description:
      "Perfect for local mobile shops that want to promote affordable phones, student-friendly devices, and daily-use models.",
    features: ["Affordable pricing", "Mass-market appeal", "Better lead generation"],
  },
  {
    name: "Chargers & Cables",
    tag: "Upsell Product",
    description:
      "A strong accessories section helps shops generate more walk-ins and increase average order value from every customer.",
    features: ["Fast-selling items", "Easy add-on sales", "High repeat demand"],
  },
  {
    name: "Covers & Tempered Glass",
    tag: "High Margin",
    description:
      "These items are ideal for showcasing variety and boosting accessory sales through attractive cards and offer blocks.",
    features: ["Daily demand", "Quick conversions", "Strong local sales"],
  },
  {
    name: "Neckbands & Earbuds",
    tag: "Trending",
    description:
      "Give your mobile shop a more modern feel by adding audio accessories that customers commonly search for online.",
    features: ["Premium look", "Youth appeal", "Upsell-ready positioning"],
  },
  {
    name: "Power Banks & Speakers",
    tag: "Popular Add-on",
    description:
      "Show practical electronics that increase product range perception and make the store feel more complete.",
    features: ["Better product variety", "Extra cross-sell", "High enquiry value"],
  },
];

const benefits = [
  {
    title: "Looks Like a Real Store",
    text: "A strong products page makes the website feel like a proper mobile business, not just a basic contact page.",
  },
  {
    title: "Helps Sell More",
    text: "Customers can quickly see what you offer, what brands you deal in, and which categories they can enquire about.",
  },
  {
    title: "Boosts Trust",
    text: "When products are organized professionally, customers feel more confident contacting or visiting your shop.",
  },
  {
    title: "Supports Upselling",
    text: "Phones, accessories, gadgets, and add-ons can all be promoted together to improve sales opportunities.",
  },
];

const whyThisPageWorks = [
  "Clear category-based layout for easier browsing",
  "Strong product cards with real sales positioning",
  "Perfect for local SEO and customer trust",
  "Supports latest phones, accessories, and offers",
  "Built for call, WhatsApp, and enquiry conversion",
  "Ideal for both premium and budget mobile stores",
];

const faqs = [
  {
    q: "Can this page show both phones and accessories?",
    a: "Yes. This products page is designed to show smartphones, accessories, gadgets, offers, and best-selling items together in a clean and high-converting structure.",
  },
  {
    q: "Can I add my own brands and product categories?",
    a: "Yes. Your own brands, products, offers, and pricing styles can be added and customized for your mobile business.",
  },
  {
    q: "Is this products page good for local mobile shops?",
    a: "Yes. It is especially useful for local mobile stores that want better trust, more walk-ins, and more direct enquiries from online visitors.",
  },
  {
    q: "Can customers contact directly from the products page?",
    a: "Yes. Strong call and WhatsApp enquiry buttons can be placed throughout the page to improve conversions.",
  },
];

export const metadata: Metadata = {
  title: "Mobile Shop Products Page Demo | Smartphones, Accessories, Gadgets & Offers",
  description:
    "Best mobile shop products page demo for smartphone stores and accessories businesses. Showcase phones, chargers, covers, earbuds, smart gadgets, and offers with a premium high-converting design.",
  keywords: [
    "mobile shop products page",
    "smartphone products page demo",
    "mobile accessories website page",
    "phone store products page",
    "mobile shop website India",
    "mobile accessories demo page",
    "smartphone showcase website",
    "mobile gadgets page demo",
    "phone shop website products",
    "mobile store products page",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/mobile/products/",
  },
  openGraph: {
    title: "Mobile Shop Products Page Demo | Smartphones, Accessories, Gadgets & Offers",
    description:
      "Premium mobile shop products page built for sales, trust, and enquiry conversion. Showcase phones, accessories, smart gadgets, and offer sections professionally.",
    url: "https://globalcomputers.net/projects/mobile/products/",
    siteName: "Global Computers & IT Solutions",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Shop Products Page Demo | Smartphones, Accessories & Offers",
    description:
      "Modern products page for mobile shops with smartphone categories, accessories sections, and strong enquiry-driven design.",
  },
};

export default function MobileProductsPage() {
  return (
    <>
      <section className="section-lg bg-grid bg-radial overflow-hidden">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="eyebrow">Mobile Products Showcase</span>

              <h1 className="section-title mt-6 max-w-4xl">
                A Premium <span className="gradient-text">Mobile Products Page</span> Built
                to Showcase Phones, Accessories, Gadgets, and Offers with Better
                Conversion
              </h1>

              <p className="section-subtitle">
                This products page is designed for mobile shops that want to display
                smartphones, accessories, smart gadgets, and best-selling items in a
                professional way. It helps your business look more trusted, more complete,
                and more ready for real customer enquiries.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary sm:w-auto"
                  aria-label="Get mobile products page demo on WhatsApp"
                >
                  Get Products Demo
                </a>
                <a
                  href={CALL_URL}
                  className="btn btn-secondary sm:w-auto"
                  aria-label="Call now for mobile website products page"
                >
                  Call Now
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Smartphone Categories",
                  "Accessories Showcase",
                  "Offer Blocks",
                  "Enquiry-Driven Layout",
                ].map((item) => (
                  <span key={item} className="stat-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass-card float-soft relative overflow-hidden p-5 sm:p-6">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-950 via-blue-600 to-cyan-500" />

                <div className="rounded-[28px] bg-slate-950 p-5 text-white shadow-2xl shadow-slate-300/30 sm:p-6">
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        Product Preview
                      </p>
                      <h2 className="mt-2 text-2xl font-black tracking-tight">
                        Smart Mobile Collections
                      </h2>
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold">
                      Premium UI
                    </span>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {[
                      {
                        title: "Latest Smartphones",
                        note: "Best launches, top brands, premium visibility",
                      },
                      {
                        title: "Accessories Zone",
                        note: "Fast-moving add-ons and higher-margin items",
                      },
                      {
                        title: "Trending Gadgets",
                        note: "Modern sections that make the shop look advanced",
                      },
                      {
                        title: "Offer Highlights",
                        note: "Discounts, combos, exchange, and festive deals",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="rounded-[22px] border border-white/10 bg-white/5 p-4"
                      >
                        <p className="text-sm font-black text-white">{item.title}</p>
                        <p className="mt-2 text-xs leading-6 text-slate-300">{item.note}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-[24px] border border-blue-500/20 bg-gradient-to-br from-blue-500/15 to-cyan-500/10 p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                      Result
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-100">
                      Your mobile shop looks bigger, more trusted, and more professional to
                      every visitor.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pulse-soft absolute -right-4 -top-4 hidden rounded-full border border-blue-100 bg-white px-4 py-3 text-xs font-black text-slate-900 shadow-lg sm:block">
                Built to Sell More
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="soft-card p-5 sm:p-7">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {whyThisPageWorks.map((item) => (
                <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-extrabold text-slate-900">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <span className="eyebrow">Main Product Categories</span>
            <h2 className="section-title mt-6">
              Organize Your Mobile Shop Products in the Best Sales-Friendly Structure
            </h2>
            <p className="section-subtitle">
              A clean category layout makes browsing easier for customers and makes your
              business appear more organized. It also helps you display more products
              without creating confusion.
            </p>
          </div>

          <div className="grid-auto-3 mt-10">
            {categories.map((item) => (
              <article key={item.title} className="glass-card p-6 sm:p-7">
                <div className="badge-soft">Category Display</div>
                <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-5 grid gap-3">
                  {item.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50/80">
        <div className="container">
          <div className="max-w-3xl">
            <span className="eyebrow">Featured Product Blocks</span>
            <h2 className="section-title mt-6">
              Show Best Sellers, Trending Items, and High-Margin Products Professionally
            </h2>
            <p className="section-subtitle">
              Product cards are not just for display. They guide attention, improve trust,
              and help customers quickly understand what your store sells most.
            </p>
          </div>

          <div className="grid-auto-3 mt-10">
            {featuredProducts.map((product) => (
              <article key={product.name} className="soft-card overflow-hidden">
                <div className="h-1 w-full bg-gradient-to-r from-slate-950 via-blue-600 to-cyan-500" />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="badge-soft">{product.tag}</span>
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                      Mobile Store
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-950">
                    {product.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {product.description}
                  </p>

                  <div className="mt-5 grid gap-3">
                    {product.features.map((feature) => (
                      <div
                        key={feature}
                        className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary sm:w-auto"
                      aria-label={`Enquire about ${product.name}`}
                    >
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-feature">
            <div>
              <span className="eyebrow">Why It Helps Sales</span>
              <h2 className="section-title mt-6">
                A Strong Products Page Makes Your Shop Look Bigger, Better, and More Trusted
              </h2>
              <p className="section-subtitle">
                When a mobile shop shows products properly, customers feel more confident.
                It improves perception, makes your business look active, and increases the
                chance of calls, visits, and direct messages.
              </p>

              <div className="mt-8 grid gap-4">
                {benefits.map((item) => (
                  <div key={item.title} className="soft-card rounded-[24px] p-5">
                    <h3 className="text-lg font-black tracking-tight text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="dark-panel p-6 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-200">
                High-conversion product strategy
              </p>
              <h3 className="mt-4 text-3xl font-black tracking-tight">
                Sell Phones, Accessories, and Add-ons in One Unified Experience
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                A modern products page gives your visitors more reasons to contact you. It
                helps you show product range, promote trending items, and position your shop
                as a serious local mobile business.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  "Better product visibility",
                  "Stronger customer confidence",
                  "Higher upsell opportunities",
                  "Professional local branding",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-slate-100"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/projects/mobile/services" className="btn btn-dark sm:w-auto">
                  View Services Page
                </Link>
                <Link href="/projects/mobile/contact" className="btn btn-dark sm:w-auto">
                  Contact Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50/80">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <span className="eyebrow">Sales CTA Section</span>
              <h2 className="section-title mt-6">
                Want a Products Page Like This for Your Mobile Shop?
              </h2>
              <p className="section-subtitle">
                Get a premium products page that helps you display smartphones,
                accessories, gadgets, and offers with a modern high-trust design. Perfect
                for shops that want better branding and more enquiries.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary sm:w-auto"
                  aria-label="WhatsApp now for mobile products page"
                >
                  WhatsApp for This Page
                </a>
                <a
                  href={CALL_URL}
                  className="btn btn-secondary sm:w-auto"
                  aria-label="Call now for mobile products page"
                >
                  Call for Website
                </a>
              </div>
            </div>

            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-2xl font-black tracking-tight text-slate-950">
                Best Use Cases for This Products Page
              </h3>

              <div className="mt-6 grid gap-4">
                {[
                  "Multi-brand mobile stores",
                  "Local smartphone retailers",
                  "Accessories and gadget shops",
                  "Repair + sales hybrid stores",
                  "Shops running festive offers",
                  "Businesses wanting better online trust",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-slate-200 bg-white px-4 py-4 text-sm font-semibold text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="max-w-3xl">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2 className="section-title mt-6">
              Common Questions About This Products Page
            </h2>
          </div>

          <div className="mt-10 grid gap-4">
            {faqs.map((item) => (
              <article key={item.q} className="soft-card p-5 sm:p-6">
                <h3 className="text-lg font-black tracking-tight text-slate-950">
                  {item.q}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}