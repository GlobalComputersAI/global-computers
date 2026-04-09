import type { Metadata } from "next";
import Link from "next/link";
import DemoVideoPopup from "@/components/DemoVideoPopup";

const SITE_URL = "https://globalcomputers.net/projects/retail-supermarket";
const WHATSAPP =
  "https://wa.me/919752422686?text=Hi%20I%20want%20a%20Retail%20Supermarket%20Website%20Demo%20for%20my%20shop.%20Please%20share%20price%2C%20features%20and%20delivery%20time.";
const CALL = "tel:+919752422686";

export const metadata: Metadata = {
  title:
    "Retail Supermarket Website Demo | Grocery Store Website + Billing Software + WhatsApp Orders",
  description:
    "Premium retail supermarket website demo for grocery stores, kirana shops, mini marts and supermarkets. Get product pages, billing software, WhatsApp ordering, local SEO, offers section, contact page and conversion-focused design.",
  keywords: [
    "retail supermarket website",
    "supermarket website design",
    "grocery store website",
    "kirana shop website",
    "mini mart website",
    "retail billing software",
    "supermarket billing software",
    "grocery billing software",
    "store website with whatsapp",
    "retail website India",
    "supermarket website demo India",
    "POS billing software website",
    "inventory billing solution",
    "Global Computers retail supermarket",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title:
      "Retail Supermarket Website Demo | Grocery Store Website + Billing Software",
    description:
      "Modern retail supermarket website with billing, product showcase, offers, WhatsApp ordering and high-conversion business design.",
    url: SITE_URL,
    siteName: "Global Computers & IT Solutions",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Retail Supermarket Website Demo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Retail Supermarket Website Demo | Grocery Store Website + Billing Software",
    description:
      "Modern supermarket website demo with billing, offers, product pages and WhatsApp order flow.",
    images: ["/icon.png"],
  },
};

const highlights = [
  "Website + Billing Software Combo",
  "WhatsApp Orders & Fast Inquiry Flow",
  "Product Showcase with Categories",
  "GST Bill / Invoice Ready Demo",
  "Local SEO Setup for Your City",
  "Mobile-Friendly Premium Design",
];

const categories = [
  {
    title: "Grocery & Daily Needs",
    text: "Show rice, atta, oil, pulses, spices, snacks, beverages and daily use items in a clean product layout that builds trust and drives orders.",
    icon: "🛒",
  },
  {
    title: "Offers & Combo Deals",
    text: "Highlight weekly offers, combo packs, festive discounts and hot-selling products to improve response rate and repeat buying.",
    icon: "🔥",
  },
  {
    title: "Billing & Inventory Ready",
    text: "Demo your professional billing workflow, invoice quality and retail-ready operations to customers and walk-in buyers.",
    icon: "🧾",
  },
];

const features = [
  "Premium home page with trust-focused supermarket branding",
  "Dedicated products page for grocery, FMCG, beverages and essentials",
  "Services page for home delivery, membership, offers and store support",
  "Billing page with invoice-style retail bill generator demo",
  "Contact page with WhatsApp, call and inquiry section",
  "Fast mobile experience for local customers",
  "High-conversion CTA placement across all sections",
  "SEO-friendly page structure for supermarket and retail keywords",
  "Perfect for kirana, mini mart, grocery and supermarket businesses",
];

const businessBenefits = [
  {
    title: "More Local Customers",
    text: "When someone searches for your store online, your website gives a stronger first impression and turns search traffic into calls and WhatsApp leads.",
  },
  {
    title: "More Trust",
    text: "A clean website with products, contact details, offers and billing demo makes your store look bigger, more reliable and more professional.",
  },
  {
    title: "More Sales Opportunities",
    text: "You can use your website link in WhatsApp, Google Business, Facebook, Instagram and ads to bring direct orders and repeat customers.",
  },
];

const socialProof = [
  "Perfect for supermarket owners who want a modern digital presence",
  "Ideal for grocery stores, kirana shops, mini marts and retail chains",
  "Useful for both local walk-in business and WhatsApp-based ordering",
  "Professional look helps you compete with bigger branded stores",
];

const faqItems = [
  {
    q: "Is this website only for supermarkets?",
    a: "No. It is also perfect for grocery stores, kirana shops, provision stores, mini marts and retail stores selling daily-use products.",
  },
  {
    q: "Can this be customized with my shop name and products?",
    a: "Yes. The full design, colors, banners, product categories, offers, contact details and store branding can be customized for your business.",
  },
  {
    q: "Does it support billing and invoice pages?",
    a: "Yes. This demo includes a billing page idea that helps showcase a professional retail bill or invoice workflow for your customers.",
  },
  {
    q: "Will it work on mobile phones?",
    a: "Yes. The website is designed mobile-first so most of your customers can browse products and contact you easily from their phones.",
  },
  {
    q: "Can I get WhatsApp inquiry integration?",
    a: "Yes. WhatsApp integration is one of the main conversion features so customers can contact you quickly and directly.",
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

export default function RetailSupermarketHomePage() {
  return (
    <>
      <DemoVideoPopup
        videoSrc="/videos/final_retailer.mp4"
        title="Retail Supermarket Demo Video"
        buttonLabel="See Live Demo"
        poster="/images/hero-it-infrastructure.jpg"
        autoOpen
        autoOpenDelay={800}
        showButton
        storageKey="retail-supermarket-demo-video"
        rememberAutoOpen
      />

      <section className="section section-lg">
        <div className="container">
          <div className="hero-grid">
            <div className="fade-up">
              <span className="eyebrow">
                Retail Supermarket Website Demo
              </span>

              <h1 className="display-xl mt-20">
                Grow Your{" "}
                <span className="text-gradient">Supermarket Sales</span> with a
                Premium Website + Billing Demo
              </h1>

              <p className="lead mt-24">
                A high-conversion retail supermarket website built for grocery
                stores, kirana shops, mini marts and modern retail businesses.
                Show products, attract local customers, highlight offers, accept
                WhatsApp inquiries and present your store like a trusted brand.
              </p>

              <div className="badge-row mt-24">
                {highlights.map((item) => (
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
                  Get on WhatsApp
                </a>
                <Link
                  href="/projects/retail-supermarket/products"
                  className="btn btn-secondary"
                >
                  View Products Page
                </Link>
                <a href={CALL} className="btn btn-dark">
                  Call Now
                </a>
              </div>

              <div className="grid grid-3 mt-40">
                <div className="card panel card-hover">
                  <p className="heading-md">Fast Business Setup</p>
                  <p className="text-sm mt-12">
                    Launch a modern retail website quickly with strong design,
                    product sections and lead-ready pages.
                  </p>
                </div>
                <div className="card panel card-hover">
                  <p className="heading-md">Better Store Image</p>
                  <p className="text-sm mt-12">
                    Look more professional than nearby competitors and build
                    trust before the customer even visits the shop.
                  </p>
                </div>
                <div className="card panel card-hover">
                  <p className="heading-md">Sales-Driven Structure</p>
                  <p className="text-sm mt-12">
                    Every page is designed to move visitors toward WhatsApp,
                    calls, inquiries and real business conversion.
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
                      <span className="badge">Fresh Grocery</span>
                      <span className="badge">Fast Billing</span>
                      <span className="badge">Home Delivery</span>
                    </div>

                    <h3 className="heading-lg mt-20">
                      Modern Supermarket Storefront
                    </h3>
                    <p className="text mt-12">
                      Premium website demo for products, offers, customer trust,
                      fast contact and strong local branding.
                    </p>

                    <div className="grid grid-2 mt-24">
                      <div className="card-solid panel">
                        <p className="heading-md">Products</p>
                        <p className="text-sm mt-8">
                          Grocery, snacks, beverages, dairy and home essentials.
                        </p>
                      </div>
                      <div className="card-solid panel">
                        <p className="heading-md">Billing</p>
                        <p className="text-sm mt-8">
                          Professional invoice-style retail bill presentation.
                        </p>
                      </div>
                      <div className="card-solid panel">
                        <p className="heading-md">Offers</p>
                        <p className="text-sm mt-8">
                          Weekly deals, combos and festive sale banners.
                        </p>
                      </div>
                      <div className="card-solid panel">
                        <p className="heading-md">WhatsApp</p>
                        <p className="text-sm mt-8">
                          Direct customer inquiry and order-ready CTA buttons.
                        </p>
                      </div>
                    </div>

                    <div className="btn-row mt-24">
                      <Link
                        href="/projects/retail-supermarket/billing"
                        className="btn btn-primary"
                      >
                        Open Billing Demo
                      </Link>
                      <Link
                        href="/projects/retail-supermarket/contact"
                        className="btn btn-secondary"
                      >
                        Contact Page
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-2 mt-24">
                <div className="card panel card-hover">
                  <p className="heading-md">Perfect for Shop Owners</p>
                  <p className="text-sm mt-12">
                    Make your supermarket look modern, professional and trusted.
                  </p>
                </div>
                <div className="card panel card-hover">
                  <p className="heading-md">Perfect for Website Sales</p>
                  <p className="text-sm mt-12">
                    Strong demo page that helps you pitch and close retail
                    website clients faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-sm">
        <SectionHeading
          eyebrow="Built to Convert"
          title="A Retail Website That Sells for You and Looks Great for Your Client"
          text="This demo is designed in a way that benefits both sides. Your client gets a strong online presence, and you get a high-quality sales demo that is easier to present, explain and close."
        />

        <div className="container mt-40">
          <div className="stats-grid">
            <div className="stat-card card-hover">
              <p className="stat-value">5</p>
              <p className="stat-label">
                Essential pages for a complete retail demo
              </p>
            </div>
            <div className="stat-card card-hover">
              <p className="stat-value">100%</p>
              <p className="stat-label">
                Mobile-friendly business presentation
              </p>
            </div>
            <div className="stat-card card-hover">
              <p className="stat-value">24×7</p>
              <p className="stat-label">
                Always available online for customer trust
              </p>
            </div>
            <div className="stat-card card-hover">
              <p className="stat-value">1</p>
              <p className="stat-label">
                Strong link to share on WhatsApp, Google and social media
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Business Categories"
          title="Perfect for Grocery, Mini Mart, Kirana and Supermarket Businesses"
          text="This homepage structure is not generic. It is shaped specifically for retail stores that want visibility, trust, product presentation and direct customer action."
        />

        <div className="container mt-40">
          <div className="grid grid-3">
            {categories.map((item) => (
              <article key={item.title} className="card panel-lg card-hover">
                <div className="icon-box">{item.icon}</div>
                <h3 className="heading-md mt-20">{item.title}</h3>
                <p className="text mt-12">{item.text}</p>
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
                <span className="eyebrow">Why It Works</span>
                <h2 className="display-md mt-20">
                  Designed to Create{" "}
                  <span className="text-gradient">Trust, Action and Sales</span>
                </h2>
                <p className="lead mt-20">
                  A supermarket website should not just look nice. It should
                  clearly show products, make inquiry easy, highlight offers,
                  explain your services and give customers confidence to buy
                  from your store.
                </p>

                <ul className="check-list mt-28">
                  {features.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="btn-row mt-32">
                  <Link
                    href="/projects/retail-supermarket/services"
                    className="btn btn-primary"
                  >
                    Explore Services
                  </Link>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    Ask Price on WhatsApp
                  </a>
                </div>
              </div>

              <div>
                <div className="invoice-box">
                  <div className="invoice-header">
                    <p
                      className="mb-0"
                      style={{ fontWeight: 900, fontSize: "1.35rem" }}
                    >
                      Retail Website + Billing Value
                    </p>
                    <p className="mt-8 mb-0" style={{ opacity: 0.92 }}>
                      A complete digital presentation for modern stores
                    </p>
                  </div>

                  <div className="invoice-body">
                    <div className="summary-grid">
                      <div className="summary-card">
                        <p className="heading-md">Products</p>
                        <p className="text-sm mt-8">
                          Organize key store categories and top-selling items.
                        </p>
                      </div>
                      <div className="summary-card">
                        <p className="heading-md">Orders</p>
                        <p className="text-sm mt-8">
                          Get more direct inquiries from local customers.
                        </p>
                      </div>
                      <div className="summary-card">
                        <p className="heading-md">Branding</p>
                        <p className="text-sm mt-8">
                          Present your business like a trusted retail brand.
                        </p>
                      </div>
                    </div>

                    <div className="table-wrap mt-24">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Module</th>
                            <th>Purpose</th>
                            <th>Business Impact</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Home Page</td>
                            <td>Present brand, offers and trust</td>
                            <td>Better first impression</td>
                          </tr>
                          <tr>
                            <td>Products Page</td>
                            <td>Show categories and key items</td>
                            <td>Higher inquiry intent</td>
                          </tr>
                          <tr>
                            <td>Services Page</td>
                            <td>Explain delivery, billing and support</td>
                            <td>More confidence</td>
                          </tr>
                          <tr>
                            <td>Billing Demo</td>
                            <td>Show professional retail operations</td>
                            <td>Stronger trust</td>
                          </tr>
                          <tr>
                            <td>Contact Page</td>
                            <td>Fast WhatsApp and call action</td>
                            <td>More leads</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="btn-row mt-24">
                      <Link
                        href="/projects/retail-supermarket/billing"
                        className="btn btn-dark"
                      >
                        View Billing Page
                      </Link>
                      <Link
                        href="/projects/retail-supermarket/contact"
                        className="btn btn-secondary"
                      >
                        Contact Us
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
          eyebrow="Client Benefits"
          title="Why Store Owners Will Want This Website"
          text="A strong supermarket website is not just a design expense. It becomes a sales tool, a trust tool and a digital storefront that keeps working every day."
        />

        <div className="container mt-40">
          <div className="grid grid-3">
            {businessBenefits.map((item) => (
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
                  A Powerful Demo to Help You Close More Retail Clients
                </h2>
                <p className="lead mt-20">
                  When you show a ready-made, polished and practical demo like
                  this, clients understand the value faster. That reduces
                  confusion, improves confidence and makes closing easier.
                </p>
              </div>

              <div>
                <ul className="check-list">
                  {socialProof.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                  <li>
                    Makes your company look organized, premium and
                    solution-focused
                  </li>
                  <li>
                    Helps explain website + billing + branding as one complete
                    package
                  </li>
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
          eyebrow="Explore Pages"
          title="Complete Demo Flow for Better SEO and Better Conversion"
          text="Each page has a clear purpose. Together they create a full business website that looks serious, performs well and supports stronger selling."
        />

        <div className="container mt-40">
          <div className="grid grid-4">
            <Link
              href="/projects/retail-supermarket/products"
              className="card panel card-hover"
            >
              <div className="icon-box">🛍️</div>
              <h3 className="heading-md mt-20">Products</h3>
              <p className="text-sm mt-12">
                Show categories, featured items and product visibility.
              </p>
            </Link>

            <Link
              href="/projects/retail-supermarket/services"
              className="card panel card-hover"
            >
              <div className="icon-box">🚚</div>
              <h3 className="heading-md mt-20">Services</h3>
              <p className="text-sm mt-12">
                Explain home delivery, support, offers and membership.
              </p>
            </Link>

            <Link
              href="/projects/retail-supermarket/billing"
              className="card panel card-hover"
            >
              <div className="icon-box">🧾</div>
              <h3 className="heading-md mt-20">Billing</h3>
              <p className="text-sm mt-12">
                Show invoice-style billing workflow with retail feel.
              </p>
            </Link>

            <Link
              href="/projects/retail-supermarket/contact"
              className="card panel card-hover"
            >
              <div className="icon-box">📞</div>
              <h3 className="heading-md mt-20">Contact</h3>
              <p className="text-sm mt-12">
                Turn visitors into direct calls and WhatsApp inquiries.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Common Questions Before Starting a Retail Supermarket Website"
          text="These are the questions many business owners usually ask before they decide to move ahead."
        />

        <div className="container mt-40">
          <div className="grid">
            {faqItems.map((item) => (
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
                <span className="text-gradient">
                  Retail Supermarket Website
                </span>{" "}
                Like This for Your Business?
              </h2>
              <p className="lead mt-20">
                Get a modern, premium and sales-focused retail website with
                product pages, billing presentation, WhatsApp inquiry flow and
                strong local branding for your shop.
              </p>

              <div className="btn-row mt-32 center">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Get This Website on WhatsApp
                </a>
                <a href={CALL} className="btn btn-dark">
                  Call for Quick Discussion
                </a>
              </div>

              <p className="text-sm mt-20">
                Ideal for grocery stores, kirana shops, provision stores, mini
                marts and supermarkets across India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}