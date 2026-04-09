import type { Metadata } from "next";
import Link from "next/link";
import DemoVideoPopup from "@/components/DemoVideoPopup";

export const metadata: Metadata = {
  title:
    "Premium Showroom Website Demo | Luxury UI, Product Display, Offers & Billing",
  description:
    "Explore a premium showroom website demo with luxury design, product showcase, offers section, billing page, contact page, and strong WhatsApp lead generation. Perfect for furniture, electronics, jewellery, fashion, automobile, appliance, and retail showroom businesses.",
  keywords: [
    "showroom website demo",
    "premium showroom website",
    "luxury showroom website design",
    "product display website",
    "showroom billing page",
    "showroom contact page",
    "showroom offers page",
    "retail showroom website",
    "furniture showroom website",
    "electronics showroom website",
    "jewellery showroom website",
    "fashion showroom website",
    "automobile showroom website",
    "appliance showroom website",
    "website design korba",
    "website design chhattisgarh",
    "Global Computers showroom website",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/showroom/",
  },
  openGraph: {
    title:
      "Premium Showroom Website Demo | Luxury UI, Product Display, Offers & Billing",
    description:
      "A premium showroom website demo built for trust, premium branding, better enquiries, strong product presentation, and sales conversion.",
    url: "https://globalcomputers.net/projects/showroom/",
    siteName: "Global Computers & IT Solutions",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Premium Showroom Website Demo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Showroom Website Demo",
    description:
      "Luxury showroom website demo with premium UI, offers, product pages, billing page, and direct WhatsApp enquiry flow.",
    images: ["/icon.png"],
  },
};

const WHATSAPP_PRIMARY =
  "https://wa.me/919752422686?text=Hi%20I%20want%20this%20premium%20showroom%20website%20for%20my%20business.%20Please%20share%20price%20and%20delivery%20details.";
const WHATSAPP_QUOTE =
  "https://wa.me/919752422686?text=Hi%20I%20want%20a%20premium%20showroom%20website%20with%20products%2C%20offers%2C%20billing%20and%20contact%20pages.%20Please%20share%20best%20quote.";
const CALL_URL = "tel:+919752422686";

const categories = [
  {
    title: "Furniture & Home Decor Showroom",
    desc: "Elegant premium layouts for sofas, beds, wardrobes, dining sets, decor, and modular collections with direct enquiry flow.",
  },
  {
    title: "Electronics & Appliance Showroom",
    desc: "Perfect for TV, AC, fridge, washing machine, mobile, laptop, kitchen appliances, and branded electronic product showcasing.",
  },
  {
    title: "Jewellery & Luxury Retail",
    desc: "Premium visual style for gold, silver, diamond, bridal, gifting, festive collections, and exclusive appointment enquiries.",
  },
  {
    title: "Fashion, Lifestyle & Boutique",
    desc: "Show collections, seasonal arrivals, featured items, offers, and WhatsApp ordering with a stylish brand-first presentation.",
  },
  {
    title: "Automobile & Bike Display",
    desc: "Highlight new arrivals, premium models, finance details, booking leads, test drive enquiries, and showroom trust signals.",
  },
  {
    title: "Tiles, Sanitary & Interior Display",
    desc: "Premium catalog sections for tiles, fittings, sanitaryware, lighting, and complete interior display businesses.",
  },
];

const featureCards = [
  {
    title: "Luxury First Impression",
    desc: "A premium showroom business must look premium online. This homepage is designed to create instant trust, prestige, and customer confidence.",
  },
  {
    title: "Lead-Focused Layout",
    desc: "Every section is structured to move visitors toward calling, WhatsApp chatting, visiting the showroom, or asking for a quote.",
  },
  {
    title: "High-Value Product Display",
    desc: "Hero products, premium collections, trending ranges, offers, and category highlights are displayed in a rich showroom style.",
  },
  {
    title: "SEO-Friendly Structure",
    desc: "Clean page structure, semantic headings, internal links, product-focused content, and local-intent messaging help visibility.",
  },
  {
    title: "Fast & Mobile Ready",
    desc: "Built for speed, mobile conversion, and clean browsing so customers can discover products easily on phone and desktop.",
  },
  {
    title: "Easy Business Customization",
    desc: "Your showroom name, city, photos, products, categories, offers, reviews, map, and contact details can be added quickly.",
  },
];

const productShowcase = [
  {
    badge: "Featured Range",
    title: "Premium Collection Display",
    text: "Highlight your most profitable or most attractive products with rich visuals, quick CTA, and premium messaging.",
    price: "Custom Brand Section",
  },
  {
    badge: "Best Seller",
    title: "Top-Selling Showcase",
    text: "Push your best-selling products, festive collections, or high-demand showroom categories for faster enquiries.",
    price: "Lead-Ready Layout",
  },
  {
    badge: "New Arrival",
    title: "Latest Arrivals Block",
    text: "Announce newly arrived models, exclusive launches, showroom stock updates, or limited stock promotions.",
    price: "Fast Update Friendly",
  },
];

const trustPoints = [
  "Premium showroom-style UI",
  "WhatsApp enquiry integration",
  "Call now conversion buttons",
  "Product and category pages",
  "Offers and sale promotion section",
  "Contact page with lead flow",
  "Billing page for trust and professionalism",
  "Fast setup with your branding",
];

const processSteps = [
  {
    step: "01",
    title: "Share your showroom details",
    desc: "Send business name, category, city, products, contact number, WhatsApp number, and any sample photos.",
  },
  {
    step: "02",
    title: "We design your premium website",
    desc: "We customize the demo with your branding, product categories, offers, trust points, and conversion-focused sections.",
  },
  {
    step: "03",
    title: "You review and approve",
    desc: "You check the design, content, contact details, and business presentation before final publish.",
  },
  {
    step: "04",
    title: "Start getting enquiries",
    desc: "Customers can discover your products online and contact you directly through WhatsApp or phone.",
  },
];

export default function ShowroomPage() {
  return (
    <>
      <DemoVideoPopup
        videoSrc="/videos/final_showrrom.mp4"
        title="Premium Showroom Demo Video"
        buttonLabel="Watch Demo"
        poster="/images/hero-it-infrastructure.jpg"
        autoOpen
        autoOpenDelay={900}
        showButton
        storageKey="showroom-demo-video"
        rememberAutoOpen
      />

      <section className="section page-hero">
        <div className="container">
          <div className="page-hero-card">
            <div className="eyebrow">
              Premium Showroom Demo • Better Leads • Luxury UI
            </div>

            <h1>
              Premium showroom website demo built to
              <span className="gold-text">
                {" "}
                impress customers and increase enquiries
              </span>
            </h1>

            <p>
              This premium showroom website demo is designed for businesses that
              want to look modern, trusted, luxurious, and sales-ready online.
              Whether you run a furniture, electronics, jewellery, boutique,
              automobile, appliance, interior, or multi-brand retail showroom,
              this design helps present your products beautifully and convert
              visitors into real leads.
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
                href={WHATSAPP_PRIMARY}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Get This Website on WhatsApp
              </a>

              <a href={CALL_URL} className="btn btn-outline">
                Call Now
              </a>

              <Link href="/projects/showroom/contact" className="btn btn-outline">
                Contact Page
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
              {[
                "Premium Design",
                "Product Showcase",
                "Offers Section",
                "Billing Page",
                "Mobile Friendly",
                "WhatsApp Leads",
              ].map((item) => (
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
            <div className="glass-card" style={{ padding: "30px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "14px",
                  alignItems: "center",
                  marginBottom: "18px",
                }}
              >
                <span className="eyebrow">Premium Layout Preview</span>
                <strong style={{ color: "#fff", fontSize: "15px" }}>
                  Luxury Brand Feel
                </strong>
              </div>

              <div className="card-light" style={{ padding: "22px", marginBottom: "14px" }}>
                <h3
                  style={{
                    margin: "0 0 10px",
                    fontSize: "24px",
                    lineHeight: 1.15,
                    letterSpacing: "-0.5px",
                  }}
                >
                  Signature Showroom Experience
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: "#52525b",
                    lineHeight: 1.85,
                    fontSize: "15px",
                  }}
                >
                  Give customers a premium feel online before they even walk
                  into your showroom. Showcase collections, product categories,
                  featured ranges, and trust-building business information in a
                  rich premium style.
                </p>
              </div>

              <div className="grid-2">
                <div className="glass-card" style={{ padding: "18px" }}>
                  <strong
                    style={{
                      display: "block",
                      color: "#fff",
                      fontSize: "22px",
                      marginBottom: "6px",
                    }}
                  >
                    24x7
                  </strong>
                  <span className="soft-text">
                    Your showroom stays visible online all day
                  </span>
                </div>
                <div className="glass-card" style={{ padding: "18px" }}>
                  <strong
                    style={{
                      display: "block",
                      color: "#fff",
                      fontSize: "22px",
                      marginBottom: "6px",
                    }}
                  >
                    Direct
                  </strong>
                  <span className="soft-text">
                    Calls and WhatsApp enquiries from visitors
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="eyebrow">Why this homepage works</div>
              <h2 className="section-title" style={{ fontSize: "clamp(1.9rem, 3vw, 3.3rem)" }}>
                Premium design that helps both your brand and your customer
              </h2>
              <p className="section-subtitle">
                For your business, this website improves brand value, trust, and
                enquiry flow. For your customer, it makes browsing easy, modern,
                premium, and confidence-building. That combination creates
                stronger conversions and better buying intent.
              </p>

              <ul className="feature-list" style={{ marginTop: "22px" }}>
                <li>
                  Customers can quickly understand what your showroom sells and
                  why they should trust you.
                </li>
                <li>
                  Premium layout makes your business look bigger, more polished,
                  and more established.
                </li>
                <li>
                  Clear internal pages like products, offers, billing, and
                  contact improve user journey and sales flow.
                </li>
                <li>
                  Strong CTA buttons push real business action instead of just
                  passive browsing.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
        }}
      >
        <div className="container">
          <div className="text-center">
            <div className="eyebrow">Perfect for many industries</div>
            <h2 className="section-title">
              Made for premium showroom businesses across categories
            </h2>
            <p
              className="section-subtitle"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              This design is flexible and can be customized for multiple
              showroom industries with premium branding, better product
              visibility, and direct lead capture.
            </p>
          </div>

          <div className="grid-3" style={{ marginTop: "34px" }}>
            {categories.map((item) => (
              <div key={item.title} className="glass-card" style={{ padding: "26px" }}>
                <h3
                  style={{
                    margin: "0 0 12px",
                    fontSize: "22px",
                    lineHeight: 1.2,
                    color: "#fff",
                    letterSpacing: "-0.4px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: "rgba(255,255,255,0.74)",
                    lineHeight: 1.9,
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

      <section className="section" style={{ background: "#ffffff" }}>
        <div className="container">
          <div className="text-center">
            <div className="eyebrow">Features that sell</div>
            <h2 className="section-title" style={{ color: "#111111" }}>
              Premium website features designed for real sales
            </h2>
            <p
              className="section-subtitle"
              style={{
                color: "#52525b",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              This homepage is not just for beauty. It is carefully designed to
              improve trust, product discovery, enquiries, and final conversion
              for your showroom business.
            </p>
          </div>

          <div className="grid-3" style={{ marginTop: "34px" }}>
            {featureCards.map((item) => (
              <div key={item.title} className="card-light" style={{ padding: "26px" }}>
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
                    lineHeight: 1.9,
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
          <div className="text-center">
            <div className="eyebrow">Product presentation</div>
            <h2 className="section-title">
              Showcase your products like a premium brand
            </h2>
            <p
              className="section-subtitle"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              Your showroom products should not look ordinary online. This
              section gives a strong premium presentation to improve customer
              interest and enquiry rate.
            </p>
          </div>

          <div className="grid-3" style={{ marginTop: "34px" }}>
            {productShowcase.map((item) => (
              <div
                key={item.title}
                className="card-light"
                style={{
                  overflow: "hidden",
                  padding: 0,
                }}
              >
                <div
                  style={{
                    height: "220px",
                    background:
                      "linear-gradient(135deg, rgba(202,167,74,0.30), rgba(255,255,255,0.85), rgba(184,143,46,0.24))",
                  }}
                />
                <div style={{ padding: "24px" }}>
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
                      marginBottom: "14px",
                    }}
                  >
                    {item.badge}
                  </span>
                  <h3
                    style={{
                      margin: "0 0 12px",
                      fontSize: "24px",
                      lineHeight: 1.15,
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      margin: "0 0 18px",
                      color: "#52525b",
                      lineHeight: 1.85,
                      fontSize: "15px",
                    }}
                  >
                    {item.text}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "14px",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <strong style={{ color: "#111111", fontSize: "16px" }}>
                      {item.price}
                    </strong>
                    <Link href="/projects/showroom/products" className="btn btn-outline">
                      View Products
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#ffffff" }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: "start", gap: "28px" }}>
            <div>
              <div className="eyebrow">Why customers will trust you</div>
              <h2 className="section-title" style={{ color: "#111111" }}>
                A showroom website should build confidence in seconds
              </h2>
              <p
                className="section-subtitle"
                style={{ color: "#52525b", maxWidth: "unset" }}
              >
                The best showroom websites do two jobs together. They make the
                business look strong, and they make the customer feel
                comfortable enough to take action. This homepage is built
                exactly for that purpose.
              </p>

              <div className="grid-2" style={{ marginTop: "24px" }}>
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="card-light"
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
                          color: "#2f2f35",
                          lineHeight: 1.7,
                          fontWeight: 700,
                          fontSize: "15px",
                        }}
                      >
                        {point}
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
                  fontSize: "28px",
                  lineHeight: 1.15,
                  letterSpacing: "-0.5px",
                }}
              >
                Want your showroom to look premium online?
              </h3>
              <p
                style={{
                  margin: "0 0 18px",
                  color: "#52525b",
                  lineHeight: 1.85,
                  fontSize: "15px",
                }}
              >
                Get a customized showroom website with your own branding,
                products, categories, offers, contact details, and customer
                enquiry flow.
              </p>

              <div className="kpi-grid" style={{ marginBottom: "18px" }}>
                <div className="kpi-box">
                  <strong>₹5,000+</strong>
                  <span>Website starting range</span>
                </div>
                <div className="kpi-box">
                  <strong>Fast</strong>
                  <span>Quick customization process</span>
                </div>
                <div className="kpi-box">
                  <strong>SEO</strong>
                  <span>Better search visibility setup</span>
                </div>
              </div>

              <ul className="info-list" style={{ marginBottom: "20px" }}>
                <li>Premium homepage with luxury UI</li>
                <li>Products page for display and enquiry</li>
                <li>Offers page to promote discounts and campaigns</li>
                <li>Billing page for professional impression</li>
                <li>Contact page with direct call and WhatsApp conversion</li>
              </ul>

              <div style={{ display: "grid", gap: "12px" }}>
                <a
                  href={WHATSAPP_QUOTE}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Get Best Quote on WhatsApp
                </a>
                <Link href="/projects/showroom/billing" className="btn btn-outline">
                  See Billing Page
                </Link>
                <Link href="/projects/showroom/contact" className="btn btn-outline">
                  Talk to Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center">
            <div className="eyebrow">Simple process</div>
            <h2 className="section-title">
              How your showroom website gets ready
            </h2>
            <p
              className="section-subtitle"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              A clear and simple process helps you move from idea to live
              premium website quickly.
            </p>
          </div>

          <div className="grid-4" style={{ marginTop: "34px" }}>
            {processSteps.map((item) => (
              <div key={item.step} className="glass-card" style={{ padding: "24px" }}>
                <div
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "18px",
                    background:
                      "linear-gradient(135deg, #caa74a 0%, #f2dd95 50%, #b88f2e 100%)",
                    color: "#111",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    fontSize: "18px",
                    marginBottom: "16px",
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    margin: "0 0 12px",
                    color: "#fff",
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
                    color: "rgba(255,255,255,0.74)",
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
              <div className="eyebrow">Launch your premium site</div>
              <h2
                style={{
                  margin: "14px 0 10px",
                  color: "#fff",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-1px",
                }}
              >
                Ready to give your showroom a premium online identity?
              </h2>
              <p
                style={{
                  margin: 0,
                  color: "rgba(255,255,255,0.76)",
                  lineHeight: 1.85,
                  maxWidth: "820px",
                  fontSize: "15px",
                }}
              >
                Get a premium showroom website with products, offers, billing,
                contact flow, and direct WhatsApp lead generation. Built for
                trust, premium branding, and better conversion.
              </p>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href={WHATSAPP_PRIMARY}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Get Demo Now
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