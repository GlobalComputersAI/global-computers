import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://globalcomputers.net/projects/retail-supermarket/contact";
const WHATSAPP =
  "https://wa.me/919752422686?text=Hi%20I%20want%20a%20Retail%20Supermarket%20Website%20for%20my%20shop.%20Please%20share%20price%2C%20features%20and%20delivery%20time.";
const CALL = "tel:+919752422686";
const EMAIL = "mailto:globalcomputerskorba@gmail.com";

export const metadata: Metadata = {
  title:
    "Contact Retail Supermarket Website Team | WhatsApp, Call, Inquiry & Demo Discussion",
  description:
    "Contact us for a retail supermarket website, grocery store website, kirana shop website, billing demo, WhatsApp ordering setup and complete digital solution for your store.",
  keywords: [
    "contact supermarket website developer",
    "retail website contact page",
    "grocery store website contact",
    "kirana website inquiry",
    "supermarket billing website contact",
    "WhatsApp supermarket website",
    "retail website India contact",
    "Global Computers contact retail website",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title:
      "Contact Retail Supermarket Website Team | WhatsApp, Call & Inquiry",
    description:
      "Talk to us about your grocery store or supermarket website, billing page, product showcase and complete retail website setup.",
    url: PAGE_URL,
    type: "website",
    siteName: "Global Computers & IT Solutions",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Contact Retail Supermarket Website Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Retail Supermarket Website Team | WhatsApp & Call",
    description:
      "Contact us for a premium retail supermarket website, billing demo and store-focused digital setup.",
    images: ["/icon.png"],
  },
};

const contactOptions = [
  {
    title: "WhatsApp Discussion",
    icon: "💬",
    text: "Best for fast inquiry, pricing, demo discussion and quick project start.",
    actionText: "Chat on WhatsApp",
    href: WHATSAPP,
    buttonClass: "btn btn-primary",
  },
  {
    title: "Call Now",
    icon: "📞",
    text: "Best for direct discussion about your supermarket website, billing or customization needs.",
    actionText: "Call Now",
    href: CALL,
    buttonClass: "btn btn-dark",
  },
  {
    title: "Email Inquiry",
    icon: "✉️",
    text: "Best for sending business details, requirements, product list or branding preferences.",
    actionText: "Send Email",
    href: EMAIL,
    buttonClass: "btn btn-secondary",
  },
];

const whyContactUs = [
  "Retail supermarket website design for grocery, kirana and mini mart businesses",
  "Premium pages for home, products, services, billing and contact",
  "WhatsApp-first conversion setup for faster customer response",
  "High-trust layout and business-focused website structure",
  "Professional presentation that helps both your store and your sales pitch",
  "Fast customization with your store name, categories, offers and contact details",
];

const projectReasons = [
  {
    title: "For Grocery Store Owners",
    text: "Get a modern supermarket website that helps your store look professional, trusted and easier to contact.",
  },
  {
    title: "For Better Local Branding",
    text: "Use one strong website link across WhatsApp, Google Business, social media and ads for better reach.",
  },
  {
    title: "For Faster Business Growth",
    text: "A professional retail website helps improve trust, inquiries, repeat customers and overall digital presence.",
  },
];

const faqs = [
  {
    q: "What type of stores is this website suitable for?",
    a: "This website is suitable for supermarkets, grocery stores, kirana shops, mini marts, provision stores and other retail businesses selling daily-use products.",
  },
  {
    q: "Can you customize the website with my shop name and products?",
    a: "Yes. We can customize the design with your store name, colors, product categories, offers, contact details and brand style.",
  },
  {
    q: "Can I get billing and invoice demo pages too?",
    a: "Yes. This retail supermarket demo can include billing-style pages and invoice presentation to make your website more professional.",
  },
  {
    q: "How should I contact you for fastest response?",
    a: "WhatsApp is the fastest way for quick discussion, pricing, project details and starting your website work.",
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

export default function RetailSupermarketContactPage() {
  return (
    <>
      <section className="section section-lg">
        <div className="container">
          <div className="hero-grid">
            <div className="fade-up">
              <span className="eyebrow">Contact Us</span>

              <h1 className="display-xl mt-20">
                Let’s Build a{" "}
                <span className="text-gradient">Retail Supermarket Website</span>{" "}
                That Helps Your Business Grow
              </h1>

              <p className="lead mt-24">
                Contact us for a premium retail supermarket website with product
                pages, services page, billing demo, WhatsApp inquiry flow and a
                complete store-focused digital presence for your business.
              </p>

              <div className="badge-row mt-24">
                <span className="badge badge-primary">Fast WhatsApp Response</span>
                <span className="badge badge-primary">Retail Website Ready</span>
                <span className="badge badge-primary">Billing Demo Available</span>
                <span className="badge badge-primary">Customization Support</span>
              </div>

              <div className="btn-row mt-32">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary pulse-soft"
                >
                  Start on WhatsApp
                </a>
                <a href={CALL} className="btn btn-dark">
                  Call Now
                </a>
                <a href={EMAIL} className="btn btn-secondary">
                  Send Email
                </a>
              </div>

              <div className="grid grid-3 mt-40">
                <div className="card panel card-hover">
                  <p className="heading-md">Fast Discussion</p>
                  <p className="text-sm mt-12">
                    Share your shop type, city, products and business goals to
                    get the right website structure quickly.
                  </p>
                </div>
                <div className="card panel card-hover">
                  <p className="heading-md">Better Store Branding</p>
                  <p className="text-sm mt-12">
                    We help turn your local retail store into a stronger and
                    more professional digital brand.
                  </p>
                </div>
                <div className="card panel card-hover">
                  <p className="heading-md">Sales-Ready Demo</p>
                  <p className="text-sm mt-12">
                    This setup is built to benefit both your client’s business
                    and your own project conversion.
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
                      <span className="badge">Quick Inquiry</span>
                      <span className="badge">Project Discussion</span>
                      <span className="badge">Fast Start</span>
                    </div>

                    <h3 className="heading-lg mt-20">
                      Best Way to Start Your Project
                    </h3>
                    <p className="text mt-12">
                      Contact us with your store details, goals and preferred
                      features. We can discuss design, products, offers, billing
                      and WhatsApp integration.
                    </p>

                    <div className="grid grid-2 mt-24">
                      <div className="card-solid panel">
                        <p className="heading-md">Shop Name</p>
                        <p className="text-sm mt-8">
                          Share your business name and city.
                        </p>
                      </div>
                      <div className="card-solid panel">
                        <p className="heading-md">Store Type</p>
                        <p className="text-sm mt-8">
                          Grocery, kirana, mini mart or supermarket.
                        </p>
                      </div>
                      <div className="card-solid panel">
                        <p className="heading-md">Main Features</p>
                        <p className="text-sm mt-8">
                          Products, services, billing and offers.
                        </p>
                      </div>
                      <div className="card-solid panel">
                        <p className="heading-md">Fast Contact</p>
                        <p className="text-sm mt-8">
                          WhatsApp and call support for quick discussion.
                        </p>
                      </div>
                    </div>

                    <div className="btn-row mt-24">
                      <a
                        href={WHATSAPP}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        WhatsApp Now
                      </a>
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

              <div className="grid grid-3 mt-24">
                {contactOptions.map((item) => (
                  <article key={item.title} className="card panel card-hover">
                    <div className="icon-box">{item.icon}</div>
                    <h3 className="heading-md mt-20">{item.title}</h3>
                    <p className="text-sm mt-12">{item.text}</p>
                    <div className="btn-row mt-20">
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className={item.buttonClass}
                      >
                        {item.actionText}
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-sm">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A Contact Page Built for Real Conversion"
          text="This page is not only for contact details. It is designed to reduce friction, improve trust and turn interest into direct business discussion."
        />

        <div className="container mt-40">
          <div className="stats-grid">
            <div className="stat-card card-hover">
              <p className="stat-value">3</p>
              <p className="stat-label">Fast contact options for quick action</p>
            </div>
            <div className="stat-card card-hover">
              <p className="stat-value">100%</p>
              <p className="stat-label">Mobile-friendly contact experience</p>
            </div>
            <div className="stat-card card-hover">
              <p className="stat-value">24×7</p>
              <p className="stat-label">Always available inquiry path online</p>
            </div>
            <div className="stat-card card-hover">
              <p className="stat-value">1</p>
              <p className="stat-label">Strong destination for all retail website leads</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="glass panel-lg">
            <div className="grid grid-2">
              <div>
                <span className="eyebrow">Why Contact Us</span>
                <h2 className="display-md mt-20">
                  Everything Needed to Start Your{" "}
                  <span className="text-gradient">Retail Website Project</span>
                </h2>
                <p className="lead mt-20">
                  We focus on practical website structure, better customer
                  presentation and strong conversion flow. That means the
                  website works well for your business and also works well as a
                  high-value sales demo.
                </p>

                <ul className="check-list mt-28">
                  {whyContactUs.map((item) => (
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
                    Discuss on WhatsApp
                  </a>
                  <a href={CALL} className="btn btn-secondary">
                    Call for Discussion
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
                      Quick Project Discussion
                    </p>
                    <p className="mt-8 mb-0" style={{ opacity: 0.92 }}>
                      Best details to share when contacting us
                    </p>
                  </div>

                  <div className="invoice-body">
                    <div className="summary-grid">
                      <div className="summary-card">
                        <p className="heading-md">Business</p>
                        <p className="text-sm mt-8">
                          Shop name, city and store type.
                        </p>
                      </div>
                      <div className="summary-card">
                        <p className="heading-md">Need</p>
                        <p className="text-sm mt-8">
                          Website, billing, products or offers page.
                        </p>
                      </div>
                      <div className="summary-card">
                        <p className="heading-md">Goal</p>
                        <p className="text-sm mt-8">
                          More trust, more customers and better branding.
                        </p>
                      </div>
                    </div>

                    <div className="table-wrap mt-24">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>What to Share</th>
                            <th>Why It Helps</th>
                            <th>Result</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Store Name</td>
                            <td>Helps set brand identity</td>
                            <td>Better personalization</td>
                          </tr>
                          <tr>
                            <td>Store Type</td>
                            <td>Shapes page structure</td>
                            <td>More relevant design</td>
                          </tr>
                          <tr>
                            <td>Product Categories</td>
                            <td>Improves product page planning</td>
                            <td>Better retail presentation</td>
                          </tr>
                          <tr>
                            <td>Main Services</td>
                            <td>Supports delivery and offers sections</td>
                            <td>Higher trust</td>
                          </tr>
                          <tr>
                            <td>Contact Details</td>
                            <td>Prepares live conversion flow</td>
                            <td>Faster project setup</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="btn-row mt-24">
                      <a
                        href={EMAIL}
                        className="btn btn-dark"
                      >
                        Send Email
                      </a>
                      <Link
                        href="/projects/retail-supermarket/products"
                        className="btn btn-secondary"
                      >
                        View Products
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-3 mt-40">
            {projectReasons.map((item) => (
              <article key={item.title} className="card panel-lg card-hover">
                <h3 className="heading-md">{item.title}</h3>
                <p className="text mt-12">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Direct Contact Options"
          title="Choose the Fastest Way to Reach Us"
          text="Use WhatsApp for the quickest response, call for direct discussion or email for detailed business requirements."
        />

        <div className="container mt-40">
          <div className="grid grid-3">
            {contactOptions.map((item) => (
              <article key={item.title} className="card panel-lg card-hover">
                <div className="icon-box">{item.icon}</div>
                <h3 className="heading-md mt-20">{item.title}</h3>
                <p className="text mt-12">{item.text}</p>
                <div className="btn-row mt-24">
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`${item.buttonClass} btn-full`}
                  >
                    {item.actionText}
                  </a>
                </div>
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
                  A Strong Contact Page Helps Close More Client Projects
                </h2>
                <p className="lead mt-20">
                  This page is designed to remove confusion and create action.
                  That makes it useful for the store owner and powerful for your
                  overall project conversion.
                </p>
              </div>

              <div>
                <ul className="check-list">
                  <li>Direct WhatsApp-first CTA for faster lead capture</li>
                  <li>Professional page structure that improves client confidence</li>
                  <li>Supports upsell of products, services and billing pages</li>
                  <li>Makes the full demo feel complete and serious</li>
                  <li>Gives customers multiple easy ways to contact you</li>
                  <li>Helps you present a business-ready website package</li>
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
          text="This contact page works best when connected with the full retail website structure."
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
                Main landing page with trust and conversion flow.
              </p>
            </Link>

            <Link
              href="/projects/retail-supermarket/products"
              className="card panel card-hover"
            >
              <div className="icon-box">🛍️</div>
              <h3 className="heading-md mt-20">Products</h3>
              <p className="text-sm mt-12">
                Show categories, featured products and offers.
              </p>
            </Link>

            <Link
              href="/projects/retail-supermarket/services"
              className="card panel card-hover"
            >
              <div className="icon-box">🚚</div>
              <h3 className="heading-md mt-20">Services</h3>
              <p className="text-sm mt-12">
                Explain delivery, support and membership benefits.
              </p>
            </Link>

            <Link
              href="/projects/retail-supermarket/billing"
              className="card panel card-hover"
            >
              <div className="icon-box">🧾</div>
              <h3 className="heading-md mt-20">Billing</h3>
              <p className="text-sm mt-12">
                Present billing and invoice-style demo page.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Questions Before Contacting Us"
          text="These are some common questions store owners ask before starting a retail supermarket website."
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
                <span className="text-gradient">Retail Supermarket Website</span>{" "}
                Like This for Your Store?
              </h2>
              <p className="lead mt-20">
                Get a premium supermarket website with products page, services
                page, billing demo and strong WhatsApp-first conversion setup
                for your business.
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
                Ideal for supermarkets, grocery stores, kirana shops and mini
                marts across India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}