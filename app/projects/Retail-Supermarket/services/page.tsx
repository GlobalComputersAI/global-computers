import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://globalcomputers.net/projects/retail-supermarket/services";
const WHATSAPP =
  "https://wa.me/919752422686?text=Hi%20I%20want%20a%20Retail%20Supermarket%20Website%20with%20Services%20Page.%20Please%20share%20price%2C%20features%20and%20delivery%20time.";
const CALL = "tel:+919752422686";

export const metadata: Metadata = {
  title:
    "Supermarket Services Page Demo | Home Delivery, Billing, Offers, Membership & Customer Support",
  description:
    "Premium supermarket services page demo for grocery stores, kirana shops, mini marts and retail businesses. Showcase home delivery, billing, offers, membership, customer support, bulk orders and store services with high-conversion design.",
  keywords: [
    "supermarket services page",
    "grocery store services page",
    "kirana shop services website",
    "retail store services page",
    "home delivery supermarket website",
    "retail billing service page",
    "supermarket website services",
    "mini mart services page",
    "store membership page",
    "grocery website India",
    "retail website demo services",
    "Global Computers supermarket services page",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title:
      "Supermarket Services Page Demo | Home Delivery, Billing, Offers & Support",
    description:
      "Premium services page for grocery stores, supermarkets and mini marts with billing, delivery, offers, membership and customer support sections.",
    url: PAGE_URL,
    type: "website",
    siteName: "Global Computers & IT Solutions",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Retail Supermarket Services Page Demo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Services Page Demo | Delivery, Billing & Support",
    description:
      "Show home delivery, offers, membership and support in a premium retail services page design.",
    images: ["/icon.png"],
  },
};

const heroBadges = [
  "Home Delivery Ready",
  "Billing & POS Support",
  "Bulk Orders & Offers",
  "Retail SEO Structure",
];

const services = [
  {
    title: "Home Delivery Service",
    icon: "🚚",
    text: "Let customers know your store offers quick and reliable home delivery for grocery, daily-use items and urgent household essentials.",
    points: ["Fast local delivery", "WhatsApp order flow", "Daily essentials support"],
  },
  {
    title: "GST Billing & POS Support",
    icon: "🧾",
    text: "Present your supermarket as a well-managed business with billing-ready operations, POS-style workflow and organized invoice support.",
    points: ["Professional bill flow", "Retail billing confidence", "Better store trust"],
  },
  {
    title: "Bulk Order Support",
    icon: "📦",
    text: "Perfect for families, offices, hostels, canteens and regular monthly buyers who want larger quantity orders from a trusted local store.",
    points: ["Monthly ration supply", "Office pantry orders", "Bigger cart value"],
  },
  {
    title: "Weekly Offers & Discounts",
    icon: "🔥",
    text: "Use your services page to highlight store offers, combo deals, festive promotions and rotating discounts that improve customer response.",
    points: ["Festival offers", "Combo promotions", "Higher repeat buying"],
  },
  {
    title: "Membership & Loyalty Benefits",
    icon: "🎯",
    text: "A strong retail website can present customer loyalty ideas like points, membership savings, special rates and repeat buyer advantages.",
    points: ["Repeat customer trust", "Savings message", "Loyalty positioning"],
  },
  {
    title: "Customer Help & Fast Support",
    icon: "📞",
    text: "Make it easy for customers to call, message or ask questions about product availability, delivery, offers and order assistance.",
    points: ["Quick support access", "Stronger confidence", "Direct inquiry action"],
  },
];

const storeBenefits = [
  {
    title: "Looks More Professional",
    text: "A proper services page makes the store feel more complete and trustworthy than a simple contact-only website.",
  },
  {
    title: "Explains Real Value Clearly",
    text: "Customers understand what makes the store useful beyond products, such as delivery, billing, offers and ongoing support.",
  },
  {
    title: "Improves Conversion",
    text: "When services are clearly explained, more people take action through WhatsApp, calls and direct inquiry.",
  },
];

const trustPoints = [
  "Clearly explains what your supermarket offers beyond products",
  "Adds more depth and professionalism to the full website",
  "Supports upsell with delivery, billing and membership ideas",
  "Improves customer trust before they contact the store",
  "Makes the demo stronger for both client presentation and closing sales",
  "Works very well for grocery stores, kirana shops and mini marts",
];

const processSteps = [
  {
    title: "Customer Visits Website",
    text: "The visitor lands on your website and quickly understands the store brand, products and services.",
  },
  {
    title: "Customer Sees Useful Services",
    text: "Delivery, offers, bulk orders, support and billing make the store feel more practical and customer-friendly.",
  },
  {
    title: "Customer Takes Action",
    text: "The website guides them toward WhatsApp, call or direct inquiry for faster business conversion.",
  },
];

const serviceTable = [
  ["Home Delivery", "Convenient order service", "Better local customer response"],
  ["Billing Support", "Professional store operations", "Higher trust"],
  ["Bulk Orders", "Monthly or larger quantity buying", "Bigger order value"],
  ["Offers & Discounts", "Promote sales and combo deals", "More attention"],
  ["Membership", "Encourage repeat buyers", "Better retention"],
  ["Customer Support", "Fast contact and help flow", "More inquiries"],
];

const faqItems = [
  {
    q: "Why should a supermarket website have a services page?",
    a: "Because services help explain what your store offers beyond just products. It builds trust and makes the website more useful and convincing.",
  },
  {
    q: "Can this page show delivery and membership features?",
    a: "Yes. The page can be customized to show home delivery, loyalty offers, membership benefits, discounts, support and other retail services.",
  },
  {
    q: "Is this useful for kirana and mini mart businesses too?",
    a: "Yes. This services page works very well for kirana shops, grocery stores, mini marts and supermarkets.",
  },
  {
    q: "Will this help in converting more customers?",
    a: "Yes. A strong services page explains value clearly and makes customers more comfortable contacting the business.",
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

export default function RetailSupermarketServicesPage() {
  return (
    <>
      <section className="section section-lg">
        <div className="container">
          <div className="hero-grid">
            <div className="fade-up">
              <span className="eyebrow">Services Page Demo</span>

              <h1 className="display-xl mt-20">
                Supermarket{" "}
                <span className="text-gradient">Services Page</span> That Builds
                More Trust and More Sales
              </h1>

              <p className="lead mt-24">
                A premium services page for grocery stores, kirana shops, mini
                marts and supermarkets. Showcase home delivery, billing support,
                bulk orders, offers, loyalty benefits and customer support in a
                clear layout that improves trust and drives more inquiries.
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
                  Get This Services Page
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
                  <p className="heading-md">Value-Focused</p>
                  <p className="text-sm mt-12">
                    This page explains what makes the store useful, convenient
                    and worth choosing.
                  </p>
                </div>
                <div className="card panel card-hover">
                  <p className="heading-md">Trust Building</p>
                  <p className="text-sm mt-12">
                    Delivery, support and billing make the supermarket look more
                    organized and reliable.
                  </p>
                </div>
                <div className="card panel card-hover">
                  <p className="heading-md">Better Client Pitch</p>
                  <p className="text-sm mt-12">
                    Helps you sell a complete retail website package instead of
                    only a basic design.
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
                      <span className="badge">Delivery</span>
                      <span className="badge">Offers</span>
                      <span className="badge">Support</span>
                    </div>

                    <h3 className="heading-lg mt-20">Retail Services That Matter</h3>
                    <p className="text mt-12">
                      Show customers that your store is not just selling
                      products, but also providing convenience, speed and trust.
                    </p>

                    <div className="grid grid-2 mt-24">
                      <div className="card-solid panel">
                        <p className="heading-md">Home Delivery</p>
                        <p className="text-sm mt-8">
                          Convenience for local grocery buyers.
                        </p>
                      </div>
                      <div className="card-solid panel">
                        <p className="heading-md">Billing</p>
                        <p className="text-sm mt-8">
                          Professional store operations and trust.
                        </p>
                      </div>
                      <div className="card-solid panel">
                        <p className="heading-md">Bulk Orders</p>
                        <p className="text-sm mt-8">
                          Good for families, offices and repeat buyers.
                        </p>
                      </div>
                      <div className="card-solid panel">
                        <p className="heading-md">Support</p>
                        <p className="text-sm mt-8">
                          Fast call and WhatsApp-based customer help.
                        </p>
                      </div>
                    </div>

                    <div className="btn-row mt-24">
                      <Link
                        href="/projects/retail-supermarket/products"
                        className="btn btn-primary"
                      >
                        View Products
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
                  <p className="heading-md">Makes Store Look Bigger</p>
                  <p className="text-sm mt-12">
                    Services add depth and make even a local shop look more
                    premium and dependable.
                  </p>
                </div>
                <div className="card panel card-hover">
                  <p className="heading-md">Boosts Your Sales Pitch</p>
                  <p className="text-sm mt-12">
                    A complete services page helps clients see practical value
                    more quickly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-sm">
        <SectionHeading
          eyebrow="Why Services Matter"
          title="A Services Page Turns a Basic Website Into a Strong Business Tool"
          text="Many retail websites only show products and contact details. A services page adds real business value by explaining convenience, support and trust."
        />

        <div className="container mt-40">
          <div className="stats-grid">
            <div className="stat-card card-hover">
              <p className="stat-value">6</p>
              <p className="stat-label">Core retail service sections for strong presentation</p>
            </div>
            <div className="stat-card card-hover">
              <p className="stat-value">100%</p>
              <p className="stat-label">Mobile-friendly service experience</p>
            </div>
            <div className="stat-card card-hover">
              <p className="stat-value">24×7</p>
              <p className="stat-label">Always-on service visibility for customers</p>
            </div>
            <div className="stat-card card-hover">
              <p className="stat-value">1</p>
              <p className="stat-label">Clear path from interest to WhatsApp action</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Retail Service Blocks"
          title="Show Services That Customers Actually Care About"
          text="A good supermarket services page should be practical, believable and customer-focused. These sections help your site feel complete and conversion-ready."
        />

        <div className="container mt-40">
          <div className="grid grid-3">
            {services.map((service) => (
              <article key={service.title} className="card panel-lg card-hover">
                <div className="icon-box">{service.icon}</div>
                <h3 className="heading-md mt-20">{service.title}</h3>
                <p className="text mt-12">{service.text}</p>

                <div className="badge-row mt-20">
                  {service.points.map((point) => (
                    <span key={point} className="badge">
                      {point}
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
          eyebrow="Benefits"
          title="Why a Strong Services Page Improves Retail Website Conversion"
          text="Customers trust businesses more when they understand the services, support and convenience available after contact."
        />

        <div className="container mt-40">
          <div className="grid grid-3">
            {storeBenefits.map((item) => (
              <article key={item.title} className="card panel-lg card-hover">
                <h3 className="heading-md">{item.title}</h3>
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
                <span className="eyebrow">Why This Works</span>
                <h2 className="display-md mt-20">
                  Service-Focused Pages Create{" "}
                  <span className="text-gradient">More Confidence</span> Before
                  the Customer Contacts You
                </h2>
                <p className="lead mt-20">
                  This page is important because it explains the practical value
                  of the store. Customers see convenience, delivery, offers and
                  support — not just products.
                </p>

                <ul className="check-list mt-28">
                  {trustPoints.map((point) => (
                    <li key={point}>{point}</li>
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
                      Services Page Value
                    </p>
                    <p className="mt-8 mb-0" style={{ opacity: 0.92 }}>
                      More clarity, more trust, more action
                    </p>
                  </div>

                  <div className="invoice-body">
                    <div className="summary-grid">
                      <div className="summary-card">
                        <p className="heading-md">Trust</p>
                        <p className="text-sm mt-8">
                          A complete services page feels more professional.
                        </p>
                      </div>
                      <div className="summary-card">
                        <p className="heading-md">Convenience</p>
                        <p className="text-sm mt-8">
                          Delivery and support increase practical value.
                        </p>
                      </div>
                      <div className="summary-card">
                        <p className="heading-md">Conversion</p>
                        <p className="text-sm mt-8">
                          Customers get more reasons to inquire quickly.
                        </p>
                      </div>
                    </div>

                    <div className="table-wrap mt-24">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Service</th>
                            <th>Purpose</th>
                            <th>Business Impact</th>
                          </tr>
                        </thead>
                        <tbody>
                          {serviceTable.map((row) => (
                            <tr key={row[0]}>
                              <td>{row[0]}</td>
                              <td>{row[1]}</td>
                              <td>{row[2]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="btn-row mt-24">
                      <Link
                        href="/projects/retail-supermarket/products"
                        className="btn btn-dark"
                      >
                        View Products
                      </Link>
                      <Link
                        href="/projects/retail-supermarket/billing"
                        className="btn btn-secondary"
                      >
                        View Billing Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-3 mt-40">
            {processSteps.map((step, index) => (
              <article key={step.title} className="card panel-lg card-hover">
                <div className="badge-row">
                  <span className="badge badge-accent">Step {index + 1}</span>
                </div>
                <h3 className="heading-md mt-20">{step.title}</h3>
                <p className="text mt-12">{step.text}</p>
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
                  A Better Services Page Helps You Sell Bigger Website Packages
                </h2>
                <p className="lead mt-20">
                  Clients are more likely to say yes when they see that the
                  website is not just about design but also about practical
                  customer service and real business use.
                </p>
              </div>

              <div>
                <ul className="check-list">
                  <li>Helps justify a more complete and higher-value website package</li>
                  <li>Makes your demo look more strategic and business-focused</li>
                  <li>Lets clients imagine their real store services online</li>
                  <li>Supports upsell with billing, offers, loyalty and delivery</li>
                  <li>Improves overall website depth and conversion quality</li>
                  <li>Gives you a stronger pitch than basic one-page websites</li>
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
          title="Complete the Full Retail Website Flow"
          text="This services page becomes more powerful when connected with the home, products, billing and contact pages."
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
                Main retail landing page with trust and CTA flow.
              </p>
            </Link>

            <Link
              href="/projects/retail-supermarket/products"
              className="card panel card-hover"
            >
              <div className="icon-box">🛍️</div>
              <h3 className="heading-md mt-20">Products</h3>
              <p className="text-sm mt-12">
                Show store categories and featured items.
              </p>
            </Link>

            <Link
              href="/projects/retail-supermarket/billing"
              className="card panel card-hover"
            >
              <div className="icon-box">🧾</div>
              <h3 className="heading-md mt-20">Billing</h3>
              <p className="text-sm mt-12">
                Present professional invoice and billing demo.
              </p>
            </Link>

            <Link
              href="/projects/retail-supermarket/contact"
              className="card panel card-hover"
            >
              <div className="icon-box">📞</div>
              <h3 className="heading-md mt-20">Contact</h3>
              <p className="text-sm mt-12">
                Convert visitors into calls and WhatsApp inquiries.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Questions About the Supermarket Services Page"
          text="These are common questions before creating a services page for a grocery or supermarket website."
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
                <span className="text-gradient">Services Page Like This</span>{" "}
                for Your Supermarket Website?
              </h2>
              <p className="lead mt-20">
                Get a premium supermarket services page with home delivery,
                billing flow, offers, support, loyalty-focused messaging and
                strong WhatsApp conversion for your business.
              </p>

              <div className="btn-row mt-32 center">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Get This Services Page on WhatsApp
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