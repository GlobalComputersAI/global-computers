import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://globalcomputers.net/projects/retail-supermarket/products";
const WHATSAPP =
  "https://wa.me/919752422686?text=Hi%20I%20want%20a%20Retail%20Supermarket%20Website%20with%20Products%20Page.%20Please%20share%20price%2C%20features%20and%20delivery%20time.";
const CALL = "tel:+919752422686";

export const metadata: Metadata = {
  title:
    "Supermarket Products Page Demo | Grocery, FMCG, Daily Needs, Offers & Retail Categories",
  description:
    "Explore a premium supermarket products page demo for grocery stores, kirana shops, mini marts and retail businesses. Showcase FMCG, beverages, household essentials, personal care, offers and featured products with high-conversion design.",
  keywords: [
    "supermarket products page",
    "grocery products page",
    "kirana shop website products",
    "retail store products page",
    "supermarket website products",
    "FMCG products website",
    "daily needs website page",
    "retail ecommerce style page",
    "mini mart website products",
    "grocery store website India",
    "retail website demo products",
    "supermarket category page",
    "Global Computers retail products page",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title:
      "Supermarket Products Page Demo | Grocery, FMCG, Daily Needs & Retail Categories",
    description:
      "Premium retail supermarket products page for grocery stores, kirana shops and mini marts with featured categories, offers and product showcase.",
    url: PAGE_URL,
    type: "website",
    siteName: "Global Computers & IT Solutions",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Retail Supermarket Products Page Demo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Products Page Demo | Grocery & Retail Categories",
    description:
      "Show grocery, FMCG, beverages, personal care and household items in a premium retail product page design.",
    images: ["/icon.png"],
  },
};

const heroBadges = [
  "Product Categories Ready",
  "Featured Offers Layout",
  "Mobile-Friendly Showcase",
  "Retail SEO Structure",
];

const categories = [
  {
    title: "Grocery & Staples",
    icon: "🛒",
    items: ["Rice", "Atta", "Dal", "Sugar", "Salt", "Oil"],
    text: "Show your daily-use grocery products in a clean category-based layout that makes browsing easier for customers and improves trust for your store.",
  },
  {
    title: "Snacks & Beverages",
    icon: "🥤",
    items: ["Biscuits", "Chips", "Cold Drinks", "Juices", "Tea", "Coffee"],
    text: "Display popular fast-moving items that customers search for regularly and use them to create a more attractive and lively online product page.",
  },
  {
    title: "Dairy & Bakery",
    icon: "🥛",
    items: ["Milk", "Curd", "Paneer", "Bread", "Butter", "Cheese"],
    text: "Highlight daily fresh products and give your supermarket website a stronger retail feel with familiar and high-demand categories.",
  },
  {
    title: "Household Essentials",
    icon: "🧴",
    items: ["Detergent", "Cleaners", "Toilet Cleaner", "Dishwash", "Tissues", "Mops"],
    text: "Make your website useful for families by including household products that increase order value and improve category depth.",
  },
  {
    title: "Personal Care",
    icon: "🧼",
    items: ["Soap", "Shampoo", "Toothpaste", "Face Wash", "Lotion", "Deodorant"],
    text: "Add personal care products to make your store look complete and more professional, just like bigger modern retail brands.",
  },
  {
    title: "Baby & Daily Utility",
    icon: "🍼",
    items: ["Baby Food", "Diapers", "Wipes", "Talc", "Bottles", "Care Items"],
    text: "A good product page should support regular household shopping needs and encourage customers to contact you for repeat buying.",
  },
];

const featuredProducts = [
  {
    name: "Premium Basmati Rice",
    price: "₹899 / 5kg",
    tag: "Top Seller",
    text: "Trust-building staple category item that fits perfectly in grocery store promotions and premium product blocks.",
  },
  {
    name: "Refined Cooking Oil",
    price: "₹165 / 1L",
    tag: "Daily Need",
    text: "A high-visibility essential item that helps your website feel more realistic and useful for real customers.",
  },
  {
    name: "Family Snack Combo",
    price: "₹299 / Pack",
    tag: "Combo Offer",
    text: "Ideal for showcasing promotional offers and increasing interest through value-based retail display sections.",
  },
  {
    name: "Household Care Pack",
    price: "₹349 / Set",
    tag: "Best Value",
    text: "A strong example of how combo packs can be used to improve both presentation and purchase intent.",
  },
  {
    name: "Fresh Dairy Basket",
    price: "₹249 / Basket",
    tag: "Fresh Picks",
    text: "Useful for modern supermarkets that want to showcase freshness, convenience and complete household shopping.",
  },
  {
    name: "Personal Care Essentials",
    price: "₹399 / Kit",
    tag: "Popular",
    text: "Helps build the feeling of a complete and organized retail store with wide category coverage.",
  },
];

const advantages = [
  "Makes the supermarket website look complete and professional",
  "Helps customers quickly understand what your store sells",
  "Improves product visibility for local search and trust",
  "Allows you to show popular items, combos and offers",
  "Supports WhatsApp inquiry and direct customer conversion",
  "Works well for grocery stores, kirana shops and mini marts",
];

const whyThisPageMatters = [
  {
    title: "Better Customer Trust",
    text: "When visitors see organized product categories, featured items and offers, they understand that your store is real, active and professional.",
  },
  {
    title: "Stronger Product Presentation",
    text: "Instead of only listing your phone number, this page visually explains your inventory style and helps your business look more established.",
  },
  {
    title: "More Sales Possibility",
    text: "A good products page creates interest, encourages inquiries and gives customers more reasons to contact your store directly.",
  },
];

const faqs = [
  {
    q: "Can this products page be customized for my supermarket?",
    a: "Yes. Product categories, store colors, item names, offers, featured blocks and CTA buttons can all be customized for your business.",
  },
  {
    q: "Is this page suitable for kirana and grocery stores too?",
    a: "Yes. This layout works very well for kirana shops, grocery stores, mini marts and larger supermarkets.",
  },
  {
    q: "Can I show offers and combo deals on this page?",
    a: "Yes. The products page can include weekly offers, combo packs, festive deals and top-selling products to increase customer response.",
  },
  {
    q: "Will this page work well on mobile?",
    a: "Yes. The design is mobile-friendly so customers can browse products and contact you easily from their phones.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="container">
      <div className="center">
        <div className="container-narrow">
          <div className="center">
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <h2 className="display-md mt-20" style={{ textAlign: "center" }}>
            {title}
          </h2>
          <p className="lead mt-16" style={{ textAlign: "center" }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function RetailSupermarketProductsPage() {
  return (
    <>
      <section className="section section-lg">
        <div className="container">
          <div className="hero-grid">
            <div className="fade-up">
              <span className="eyebrow">Products Page Demo</span>

              <h1 className="display-xl mt-20">
                Supermarket{" "}
                <span className="text-gradient">Products Showcase</span> That
                Builds Trust and Drives More Inquiries
              </h1>

              <p className="lead mt-24">
                A premium products page for grocery stores, kirana shops, mini
                marts and supermarkets. Showcase daily-use categories, featured
                products, combo offers and fast-moving items in a clean layout
                that makes your business look modern and trusted.
              </p>

              <div className="badge-row mt-24">
                {heroBadges.map((item) => (
                  <span key={item} className="badge badge-primary">
                    {item}
                  </span>
                ))}
              </div>

              <div className="btn-row mt-32">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary pulse-soft"
                >
                  Get This Products Page
                </a>
                <Link
                  href="/projects/retail-supermarket/contact"
                  className="btn btn-secondary"
                >
                  Contact Us
                </Link>
                <a href={CALL} className="btn btn-dark">
                  Call Now
                </a>
              </div>

              <div className="grid grid-3 mt-40">
                <div className="card panel card-hover">
                  <p className="heading-md">Retail-Focused Design</p>
                  <p className="text-sm mt-12">
                    Built specifically for supermarkets and grocery stores, not
                    just a generic business website layout.
                  </p>
                </div>
                <div className="card panel card-hover">
                  <p className="heading-md">Easy to Understand</p>
                  <p className="text-sm mt-12">
                    Customers quickly see what your shop sells, which builds
                    confidence and improves response.
                  </p>
                </div>
                <div className="card panel card-hover">
                  <p className="heading-md">Better Sales Pitch</p>
                  <p className="text-sm mt-12">
                    Helps you present a strong demo to clients and close retail
                    website projects faster.
                  </p>
                </div>
              </div>
            </div>

            <div className="hero-card float-soft">
              <div className="hero-orb hero-orb-1" />
              <div className="hero-orb hero-orb-2" />

              <div className="mockup">
                <div className="mockup-topbar">
                  <span className="mock-dot" />
                  <span className="mock-dot" />
                  <span className="mock-dot" />
                </div>

                <div className="mock-body">
                  <div className="glass p-24">
                    <div className="badge-row">
                      <span className="badge">Fresh Stock</span>
                      <span className="badge">Best Offers</span>
                      <span className="badge">Daily Essentials</span>
                    </div>

                    <h3 className="heading-lg mt-20">Organized Retail Categories</h3>
                    <p className="text mt-12">
                      Help customers explore your products with better
                      structure, better trust and better browsing flow.
                    </p>

                    <div className="grid grid-2 mt-24">
                      <div className="card-solid panel">
                        <p className="heading-md">Grocery</p>
                        <p className="text-sm mt-8">
                          Staples, food grains and essentials.
                        </p>
                      </div>
                      <div className="card-solid panel">
                        <p className="heading-md">Beverages</p>
                        <p className="text-sm mt-8">
                          Tea, coffee, juices and cold drinks.
                        </p>
                      </div>
                      <div className="card-solid panel">
                        <p className="heading-md">Household</p>
                        <p className="text-sm mt-8">
                          Detergent, cleaning and utility items.
                        </p>
                      </div>
                      <div className="card-solid panel">
                        <p className="heading-md">Offers</p>
                        <p className="text-sm mt-8">
                          Combos, discounts and weekly highlights.
                        </p>
                      </div>
                    </div>

                    <div className="btn-row mt-24">
                      <Link
                        href="/projects/retail-supermarket/services"
                        className="btn btn-primary"
                      >
                        View Services
                      </Link>
                      <Link
                        href="/projects/retail-supermarket/billing"
                        className="btn btn-secondary"
                      >
                        Billing Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-2 mt-24">
                <div className="card panel card-hover">
                  <p className="heading-md">Looks Like a Real Store</p>
                  <p className="text-sm mt-12">
                    The page feels practical, useful and close to real retail
                    customer needs.
                  </p>
                </div>
                <div className="card panel card-hover">
                  <p className="heading-md">Great for Client Conversion</p>
                  <p className="text-sm mt-12">
                    A polished products page helps clients clearly see the value
                    of a retail website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-sm">
        <SectionHeading
          eyebrow="Why This Page Matters"
          title="A Strong Products Page Makes the Entire Website More Trustworthy"
          text="Many retail websites fail because they do not show products properly. This page solves that by giving customers a clear view of what the store offers."
        />

        <div className="container mt-40">
          <div className="stats-grid">
            <div className="stat-card card-hover">
              <p className="stat-value">6</p>
              <p className="stat-label">Retail-focused product category blocks</p>
            </div>
            <div className="stat-card card-hover">
              <p className="stat-value">100%</p>
              <p className="stat-label">Mobile-friendly product browsing layout</p>
            </div>
            <div className="stat-card card-hover">
              <p className="stat-value">24×7</p>
              <p className="stat-label">Always-online product presentation for trust</p>
            </div>
            <div className="stat-card card-hover">
              <p className="stat-value">1</p>
              <p className="stat-label">Direct path from products to WhatsApp inquiry</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Retail Categories"
          title="Show the Right Categories for Grocery and Supermarket Customers"
          text="A products page should feel complete, practical and familiar. These category blocks help your store look organized and professional."
        />

        <div className="container mt-40">
          <div className="grid grid-3">
            {categories.map((category) => (
              <article key={category.title} className="card panel-lg card-hover">
                <div className="icon-box">{category.icon}</div>
                <h3 className="heading-md mt-20">{category.title}</h3>
                <p className="text mt-12">{category.text}</p>

                <div className="badge-row mt-20">
                  {category.items.map((item) => (
                    <span key={item} className="badge">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Featured Products"
          title="Highlight Best Sellers, Offers and Daily-Use Essentials"
          text="These product-style cards make the page feel more realistic and more useful. They also improve conversion by helping customers understand your store range."
        />

        <div className="container mt-40">
          <div className="grid grid-3">
            {featuredProducts.map((product) => (
              <article key={product.name} className="card panel-lg card-hover">
                <div className="badge-row">
                  <span className="badge badge-accent">{product.tag}</span>
                </div>

                <h3 className="heading-md mt-20">{product.name}</h3>
                <p
                  className="mt-12"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 900,
                    color: "var(--primary-dark)",
                    marginBottom: 0,
                  }}
                >
                  {product.price}
                </p>
                <p className="text mt-16">{product.text}</p>

                <div className="btn-row mt-24">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-full"
                  >
                    Ask on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="glass panel-lg">
            <div className="grid grid-2">
              <div>
                <span className="eyebrow">Benefits</span>
                <h2 className="display-md mt-20">
                  Why a Good{" "}
                  <span className="text-gradient">Products Page</span> Improves
                  Store Performance
                </h2>
                <p className="lead mt-20">
                  A good retail website is not only about home page design. The
                  products page is where your store starts feeling real,
                  organized and useful for customers.
                </p>

                <ul className="check-list mt-28">
                  {advantages.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="btn-row mt-32">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Start My Website
                  </a>
                  <Link
                    href="/projects/retail-supermarket/contact"
                    className="btn btn-secondary"
                  >
                    Speak to Us
                  </Link>
                </div>
              </div>

              <div>
                <div className="invoice-box">
                  <div className="invoice-header">
                    <p
                      className="mb-0"
                      style={{ fontWeight: 900, fontSize: "1.35rem" }}
                    >
                      Products Page Value
                    </p>
                    <p className="mt-8 mb-0" style={{ opacity: 0.92 }}>
                      More than design — it supports trust and inquiries
                    </p>
                  </div>

                  <div className="invoice-body">
                    <div className="summary-grid">
                      <div className="summary-card">
                        <p className="heading-md">Categories</p>
                        <p className="text-sm mt-8">
                          Organize products in a way customers understand fast.
                        </p>
                      </div>
                      <div className="summary-card">
                        <p className="heading-md">Offers</p>
                        <p className="text-sm mt-8">
                          Show combos and deals that attract more interest.
                        </p>
                      </div>
                      <div className="summary-card">
                        <p className="heading-md">Trust</p>
                        <p className="text-sm mt-8">
                          A complete store page looks more reliable and real.
                        </p>
                      </div>
                    </div>

                    <div className="table-wrap mt-24">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Section</th>
                            <th>Purpose</th>
                            <th>Result</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Category Blocks</td>
                            <td>Show store range</td>
                            <td>Better customer clarity</td>
                          </tr>
                          <tr>
                            <td>Featured Products</td>
                            <td>Highlight key items</td>
                            <td>More product interest</td>
                          </tr>
                          <tr>
                            <td>Offer Tags</td>
                            <td>Promote value</td>
                            <td>Higher inquiry possibility</td>
                          </tr>
                          <tr>
                            <td>WhatsApp CTA</td>
                            <td>Fast contact option</td>
                            <td>More direct leads</td>
                          </tr>
                          <tr>
                            <td>Mobile Layout</td>
                            <td>Easy browsing</td>
                            <td>Better user experience</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="btn-row mt-24">
                      <Link
                        href="/projects/retail-supermarket/billing"
                        className="btn btn-dark"
                      >
                        View Billing Demo
                      </Link>
                      <Link
                        href="/projects/retail-supermarket/services"
                        className="btn btn-secondary"
                      >
                        View Services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Business Benefits"
          title="Why Store Owners Like Product-Focused Website Pages"
          text="This page improves the practical value of the website and helps customers feel that the shop is complete, active and professional."
        />

        <div className="container mt-40">
          <div className="grid grid-3">
            {whyThisPageMatters.map((item) => (
              <article key={item.title} className="card panel-lg card-hover">
                <h3 className="heading-md">{item.title}</h3>
                <p className="text mt-12">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-sm">
        <div className="container">
          <div className="card panel-lg">
            <div className="grid grid-2">
              <div>
                <span className="eyebrow">Best for Your Sales</span>
                <h2 className="display-md mt-20">
                  A Better Product Page Helps You Sell Retail Website Projects Faster
                </h2>
                <p className="lead mt-20">
                  Clients understand value more quickly when they see a strong
                  products page. It makes the website feel more complete, more
                  useful and more worth paying for.
                </p>
              </div>

              <div>
                <ul className="check-list">
                  <li>Shows that you understand retail and supermarket business needs</li>
                  <li>Creates a stronger demo than a simple one-page website</li>
                  <li>Helps justify higher pricing with better presentation</li>
                  <li>Makes your client imagine their real store on the website</li>
                  <li>Supports upsell with billing, offers and contact integration</li>
                  <li>Improves the full demo flow of the entire website package</li>
                </ul>
              </div>
            </div>

            <div className="btn-row mt-32">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Start This Demo for My Client
              </a>
              <a href={CALL} className="btn btn-secondary">
                Discuss Project
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Explore More"
          title="Complete the Retail Website Flow"
          text="This products page works best when connected with other sales-focused pages of the full supermarket website demo."
        />

        <div className="container mt-40">
          <div className="grid grid-4">
            <Link
              href="/projects/retail-supermarket"
              className="card panel card-hover"
            >
              <div className="icon-box">🏠</div>
              <h3 className="heading-md mt-20">Home</h3>
              <p className="text-sm mt-12">
                Main brand page with trust, offers and CTA flow.
              </p>
            </Link>

            <Link
              href="/projects/retail-supermarket/services"
              className="card panel card-hover"
            >
              <div className="icon-box">🚚</div>
              <h3 className="heading-md mt-20">Services</h3>
              <p className="text-sm mt-12">
                Explain delivery, membership, support and more.
              </p>
            </Link>

            <Link
              href="/projects/retail-supermarket/billing"
              className="card panel card-hover"
            >
              <div className="icon-box">🧾</div>
              <h3 className="heading-md mt-20">Billing</h3>
              <p className="text-sm mt-12">
                Present retail invoice and billing demo structure.
              </p>
            </Link>

            <Link
              href="/projects/retail-supermarket/contact"
              className="card panel card-hover"
            >
              <div className="icon-box">📞</div>
              <h3 className="heading-md mt-20">Contact</h3>
              <p className="text-sm mt-12">
                Turn product interest into direct inquiries.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Questions About the Supermarket Products Page"
          text="These are some common doubts before starting a retail products page for a grocery or supermarket website."
        />

        <div className="container mt-40">
          <div className="grid">
            {faqs.map((item) => (
              <article key={item.q} className="card panel-lg card-hover">
                <h3 className="heading-md">{item.q}</h3>
                <p className="text mt-12">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-lg">
        <div className="container">
          <div className="glass panel-lg center">
            <div className="container-narrow">
              <span className="eyebrow">Ready to Start</span>
              <h2 className="display-lg mt-20">
                Want a{" "}
                <span className="text-gradient">Products Page Like This</span>{" "}
                for Your Supermarket Website?
              </h2>
              <p className="lead mt-20">
                Get a premium product showcase page for your grocery store,
                kirana shop, mini mart or supermarket with better design,
                category structure, offers and direct WhatsApp conversion.
              </p>

              <div className="btn-row mt-32 center">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Get This Products Page on WhatsApp
                </a>
                <a href={CALL} className="btn btn-dark">
                  Call for Quick Discussion
                </a>
              </div>

              <p className="text-sm mt-20">
                Ideal for grocery stores, supermarkets, mini marts and retail
                businesses across India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}