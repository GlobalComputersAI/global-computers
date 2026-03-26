import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Showroom Products Page Demo | Premium Product Display Website for Showrooms",
  description:
    "Explore a premium showroom products page demo with luxury product cards, featured collections, category sections, pricing highlights, and strong WhatsApp enquiry flow. Perfect for furniture, electronics, jewellery, fashion, automobile, appliance, and retail showrooms.",
  keywords: [
    "showroom products page",
    "showroom product display website",
    "premium showroom products",
    "luxury product catalog page",
    "showroom website products page",
    "furniture showroom products page",
    "electronics showroom catalog",
    "jewellery showroom display page",
    "retail product catalog website",
    "premium website design korba",
    "premium website design chhattisgarh",
    "Global Computers showroom products page",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/showroom/products/",
  },
  openGraph: {
    title:
      "Showroom Products Page Demo | Premium Product Display Website for Showrooms",
    description:
      "Premium showroom products page demo with luxury design, product cards, featured collections, and strong enquiry conversion flow.",
    url: "https://globalcomputers.net/projects/showroom/products/",
    siteName: "Global Computers & IT Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Showroom Products Page Demo",
    description:
      "Premium product showcase page for showroom businesses with elegant design and sales-focused layout.",
  },
};

const WHATSAPP_URL =
  "https://wa.me/919752422686?text=Hi%20I%20want%20a%20premium%20showroom%20website%20with%20a%20products%20page%20like%20this.%20Please%20share%20price%20and%20details.";
const CALL_URL = "tel:+919752422686";

const categories = [
  "Luxury Furniture",
  "Electronics & Appliances",
  "Jewellery Collection",
  "Fashion & Lifestyle",
  "Automobile Display",
  "Tiles & Interior Range",
];

const products = [
  {
    badge: "Best Seller",
    title: "Signature Premium Sofa Collection",
    category: "Luxury Furniture",
    description:
      "Elegant premium sofa range designed for customers who want comfort, luxury styling, and a high-end living room experience.",
    price: "Starting From ₹49,999",
    cta: "Enquire This Collection",
  },
  {
    badge: "New Arrival",
    title: "Smart LED TV & Home Entertainment Range",
    category: "Electronics & Appliances",
    description:
      "Modern display section for televisions, sound systems, smart devices, and premium home entertainment products.",
    price: "Starting From ₹29,999",
    cta: "Ask for Latest Models",
  },
  {
    badge: "Premium",
    title: "Bridal Jewellery Exclusive Set",
    category: "Jewellery Collection",
    description:
      "Luxury presentation for wedding jewellery, exclusive festive sets, premium gifting collections, and bridal showcases.",
    price: "Custom Pricing Available",
    cta: "Book Jewellery Enquiry",
  },
  {
    badge: "Trending",
    title: "Designer Fashion Showcase",
    category: "Fashion & Lifestyle",
    description:
      "Display premium clothing, festive wear, boutique arrivals, limited-edition collections, and stylish brand pieces.",
    price: "Seasonal Collection",
    cta: "See Collection Details",
  },
  {
    badge: "Featured",
    title: "Premium Bike & Automobile Display",
    category: "Automobile Display",
    description:
      "A rich product card section for bikes, cars, finance-ready offers, booking leads, and model highlights.",
    price: "Finance Options Available",
    cta: "Request Test Drive",
  },
  {
    badge: "Top Range",
    title: "Luxury Tiles & Interior Surfaces",
    category: "Tiles & Interior Range",
    description:
      "Show premium tiles, sanitary fittings, designer wall finishes, and complete interior surface solutions.",
    price: "Project-Based Pricing",
    cta: "Get Product Quote",
  },
  {
    badge: "Exclusive",
    title: "Dining & Bedroom Premium Series",
    category: "Luxury Furniture",
    description:
      "Beautiful premium bedroom and dining setups displayed in a way that helps customers imagine the final look.",
    price: "Starting From ₹38,000",
    cta: "Get Room Setup Details",
  },
  {
    badge: "Hot Deal",
    title: "Kitchen Appliance Collection",
    category: "Electronics & Appliances",
    description:
      "Premium cards for refrigerators, ovens, chimneys, mixers, washing machines, and kitchen-friendly appliances.",
    price: "Offer Price Available",
    cta: "Get Current Offer",
  },
  {
    badge: "Luxury Pick",
    title: "Festive Gold & Diamond Range",
    category: "Jewellery Collection",
    description:
      "Perfect for festive promotions, wedding season campaigns, and premium seasonal showroom collections.",
    price: "Visit for Best Price",
    cta: "Schedule Visit",
  },
];

const benefits = [
  {
    title: "Premium Product Presentation",
    desc: "Products are shown in a rich and elegant format that makes them feel more valuable and more desirable.",
  },
  {
    title: "Stronger Customer Interest",
    desc: "A clean product page helps customers quickly browse categories, compare ranges, and enquire faster.",
  },
  {
    title: "Better Sales Journey",
    desc: "Instead of only showing products, this page pushes visitors toward WhatsApp, calls, and real buying intent.",
  },
  {
    title: "Works Across Many Showrooms",
    desc: "The same premium product layout can be customized for furniture, electronics, jewellery, boutique, and more.",
  },
];

const pageFeatures = [
  "Premium product grid layout",
  "Category-wise product presentation",
  "Luxury brand positioning",
  "Mobile-friendly browsing",
  "WhatsApp enquiry buttons",
  "Offer and featured product highlighting",
  "High-trust showroom presentation",
  "SEO-friendly product page structure",
];

export default function ShowroomProductsPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <div className="page-hero-card">
            <div className="eyebrow">Products Page Demo • Premium Catalog • Better Enquiries</div>
            <h1>
              Premium showroom products page built to
              <span className="gold-text"> showcase products and drive sales</span>
            </h1>
            <p>
              A great showroom products page should do more than list items. It should make your
              products feel premium, help customers browse easily, and move them toward calling,
              chatting on WhatsApp, or visiting your showroom. This page is designed exactly for
              that.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginTop: "26px",
              }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Get This Products Page
              </a>
              <a href={CALL_URL} className="btn btn-outline">
                Call Now
              </a>
              <Link href="/projects/showroom/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginTop: "20px",
              }}
            >
              {categories.map((item) => (
                <span
                  key={item}
                  style={{
                    padding: "10px 14px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    color: "rgba(255,255,255,0.88)",
                    fontWeight: 700,
                    fontSize: "14px",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: "28px" }}>
            <div>
              <div className="eyebrow">Why this page sells</div>
              <h2 className="section-title" style={{ fontSize: "clamp(1.9rem, 3vw, 3.2rem)" }}>
                A premium product page helps your business look stronger and sell better
              </h2>
              <p className="section-subtitle">
                Customers often judge a showroom by how products are presented online. A weak
                product page makes even good products look ordinary. A premium product page improves
                perception, trust, and buying intent from the very first scroll.
              </p>

              <ul className="feature-list" style={{ marginTop: "22px" }}>
                <li>Products look premium, better organized, and easier to browse.</li>
                <li>Customers can quickly identify featured, trending, and high-value items.</li>
                <li>Clear enquiry CTAs turn browsing into real conversations and sales chances.</li>
                <li>
                  Category structure helps both user experience and strong internal page flow.
                </li>
              </ul>
            </div>

            <div className="glass-card" style={{ padding: "30px" }}>
              <div
                style={{
                  display: "grid",
                  gap: "14px",
                }}
              >
                <div className="card-light" style={{ padding: "22px" }}>
                  <h3
                    style={{
                      margin: "0 0 10px",
                      fontSize: "24px",
                      lineHeight: 1.15,
                      letterSpacing: "-0.5px",
                    }}
                  >
                    Premium Catalog Experience
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      color: "#52525b",
                      lineHeight: 1.85,
                      fontSize: "15px",
                    }}
                  >
                    Display products in a way that feels premium, organized, and brand-worthy. This
                    builds confidence before the customer ever visits your showroom.
                  </p>
                </div>

                <div className="grid-2">
                  <div className="glass-card" style={{ padding: "18px" }}>
                    <strong
                      style={{
                        display: "block",
                        color: "#fff",
                        fontSize: "24px",
                        marginBottom: "6px",
                      }}
                    >
                      Premium
                    </strong>
                    <span className="soft-text">Stronger brand value from better presentation</span>
                  </div>
                  <div className="glass-card" style={{ padding: "18px" }}>
                    <strong
                      style={{
                        display: "block",
                        color: "#fff",
                        fontSize: "24px",
                        marginBottom: "6px",
                      }}
                    >
                      Direct
                    </strong>
                    <span className="soft-text">Faster product enquiries from interested buyers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))" }}
      >
        <div className="container">
          <div className="text-center">
            <div className="eyebrow">Featured catalog section</div>
            <h2 className="section-title">Show products in a high-value premium layout</h2>
            <p className="section-subtitle" style={{ marginLeft: "auto", marginRight: "auto" }}>
              These product cards are designed to make customers stop, explore, and ask for details.
              The focus is premium feel, clarity, and direct conversion.
            </p>
          </div>

          <div className="grid-3" style={{ marginTop: "34px" }}>
            {products.map((item) => (
              <div
                key={item.title}
                className="card-light"
                style={{
                  overflow: "hidden",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    height: "230px",
                    background:
                      "linear-gradient(135deg, rgba(202,167,74,0.30), rgba(255,255,255,0.92), rgba(184,143,46,0.24))",
                  }}
                />

                <div style={{ padding: "24px", display: "grid", gap: "12px", flex: 1 }}>
                  <div>
                    <span
                      style={{
                        display: "inline-flex",
                        minHeight: "34px",
                        alignItems: "center",
                        padding: "0 12px",
                        borderRadius: "999px",
                        background: "#f5f5f5",
                        color: "#444",
                        fontWeight: 800,
                        fontSize: "12px",
                        marginBottom: "12px",
                      }}
                    >
                      {item.badge}
                    </span>

                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: 800,
                        color: "#8b7355",
                        marginBottom: "10px",
                        textTransform: "uppercase",
                        letterSpacing: "0.8px",
                      }}
                    >
                      {item.category}
                    </div>

                    <h3
                      style={{
                        margin: "0 0 10px",
                        fontSize: "24px",
                        lineHeight: 1.15,
                        letterSpacing: "-0.5px",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        margin: 0,
                        color: "#52525b",
                        lineHeight: 1.85,
                        fontSize: "15px",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>

                  <div style={{ marginTop: "auto" }}>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: 900,
                        color: "#111111",
                        marginBottom: "14px",
                      }}
                    >
                      {item.price}
                    </div>

                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline"
                    >
                      {item.cta}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#ffffff" }}>
        <div className="container">
          <div className="text-center">
            <div className="eyebrow">Page advantages</div>
            <h2 className="section-title" style={{ color: "#111111" }}>
              Why this products page is strong for both your business and your customers
            </h2>
            <p
              className="section-subtitle"
              style={{
                color: "#52525b",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Good design should improve your business image and also make things easier for your
              customer. This page balances both perfectly.
            </p>
          </div>

          <div className="grid-4" style={{ marginTop: "34px" }}>
            {benefits.map((item) => (
              <div key={item.title} className="card-light" style={{ padding: "24px" }}>
                <h3
                  style={{
                    margin: "0 0 12px",
                    fontSize: "22px",
                    lineHeight: 1.2,
                    letterSpacing: "-0.4px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: "#52525b",
                    lineHeight: 1.85,
                    fontSize: "15px",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "start", gap: "28px" }}>
            <div>
              <div className="eyebrow">What you get</div>
              <h2 className="section-title">Premium products page features that improve conversion</h2>
              <p className="section-subtitle">
                This product page is designed not just to look good, but to perform like a serious
                sales page for a premium showroom business.
              </p>

              <div className="grid-2" style={{ marginTop: "22px" }}>
                {pageFeatures.map((item) => (
                  <div
                    key={item}
                    className="glass-card"
                    style={{
                      padding: "18px",
                      borderRadius: "18px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "999px",
                          background:
                            "linear-gradient(135deg, #caa74a 0%, #f2dd95 50%, #b88f2e 100%)",
                          color: "#111",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 900,
                          fontSize: "13px",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        ✓
                      </span>
                      <span
                        style={{
                          color: "#fff",
                          lineHeight: 1.7,
                          fontWeight: 700,
                          fontSize: "15px",
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-light" style={{ padding: "28px" }}>
              <h3
                style={{
                  margin: "0 0 12px",
                  fontSize: "30px",
                  lineHeight: 1.12,
                  letterSpacing: "-0.6px",
                }}
              >
                Want this premium products page for your showroom?
              </h3>
              <p
                style={{
                  margin: "0 0 18px",
                  color: "#52525b",
                  lineHeight: 1.85,
                  fontSize: "15px",
                }}
              >
                We can customize this products page with your own categories, product names,
                featured collections, offers, enquiry buttons, and branding.
              </p>

              <div className="kpi-grid" style={{ marginBottom: "18px" }}>
                <div className="kpi-box">
                  <strong>Premium</strong>
                  <span>Luxury presentation for stronger impression</span>
                </div>
                <div className="kpi-box">
                  <strong>Mobile</strong>
                  <span>Smooth browsing on phone and desktop</span>
                </div>
                <div className="kpi-box">
                  <strong>Direct</strong>
                  <span>Built for call and WhatsApp enquiries</span>
                </div>
              </div>

              <ul className="info-list" style={{ marginBottom: "20px" }}>
                <li>Custom product categories</li>
                <li>Featured and best-selling collections</li>
                <li>Offer and promotional highlights</li>
                <li>Clear enquiry call-to-action buttons</li>
                <li>Premium catalog presentation with showroom feel</li>
              </ul>

              <div style={{ display: "grid", gap: "12px" }}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Get Quote on WhatsApp
                </a>
                <Link href="/projects/showroom/offers" className="btn btn-outline">
                  View Offers Page
                </Link>
                <Link href="/projects/showroom/contact" className="btn btn-outline">
                  Contact for Customization
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div
            className="glass-card"
            style={{
              padding: "34px",
              borderRadius: "32px",
              display: "flex",
              justifyContent: "space-between",
              gap: "22px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div className="eyebrow">Premium catalog website</div>
              <h2
                style={{
                  margin: "14px 0 10px",
                  color: "#fff",
                  fontSize: "clamp(2rem, 4vw, 3.1rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-1px",
                }}
              >
                Turn your showroom products into a premium online buying experience
              </h2>
              <p
                style={{
                  margin: 0,
                  color: "rgba(255,255,255,0.76)",
                  lineHeight: 1.85,
                  maxWidth: "830px",
                  fontSize: "15px",
                }}
              >
                Get a premium products page that presents your catalog beautifully, improves trust,
                and helps generate more enquiries from real interested customers.
              </p>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Get This Page Now
              </a>
              <a href={CALL_URL} className="btn btn-outline">
                Call for Details
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}