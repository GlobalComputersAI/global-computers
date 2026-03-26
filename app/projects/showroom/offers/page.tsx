import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Showroom Offers Page Demo | Premium Deals, Sale Campaigns & Promotion Website",
  description:
    "Explore a premium showroom offers page demo with luxury sale banners, festive deals, limited-time promotions, product discounts, exchange offers, and strong WhatsApp enquiry flow. Perfect for furniture, electronics, jewellery, fashion, automobile, appliance, and retail showroom businesses.",
  keywords: [
    "showroom offers page",
    "showroom deals page",
    "premium offers page website",
    "sale campaign page for showroom",
    "showroom promotions website",
    "furniture showroom offers",
    "electronics showroom deals page",
    "jewellery showroom promotion page",
    "retail sale website page",
    "luxury showroom offers page",
    "website design korba",
    "website design chhattisgarh",
    "Global Computers showroom offers page",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/showroom/offers/",
  },
  openGraph: {
    title:
      "Showroom Offers Page Demo | Premium Deals, Sale Campaigns & Promotion Website",
    description:
      "Premium showroom offers page demo with elegant promotion blocks, festive campaigns, limited-time deals, and direct WhatsApp enquiry flow.",
    url: "https://globalcomputers.net/projects/showroom/offers/",
    siteName: "Global Computers & IT Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Showroom Offers Page Demo",
    description:
      "Premium showroom offers page with luxury UI, festive campaigns, limited-time deals, and sales-focused design.",
  },
};

const WHATSAPP_URL =
  "https://wa.me/919752422686?text=Hi%20I%20want%20a%20premium%20showroom%20website%20with%20an%20offers%20page%20like%20this.%20Please%20share%20best%20price%20and%20details.";
const WHATSAPP_CAMPAIGN =
  "https://wa.me/919752422686?text=Hi%20I%20want%20a%20premium%20offers%20page%20for%20my%20showroom%20to%20promote%20deals%2C%20discounts%2C%20festive%20sale%20and%20campaigns.";
const CALL_URL = "tel:+919752422686";

const heroTags = [
  "Festive Sale",
  "Limited-Time Offer",
  "Premium Deal Layout",
  "WhatsApp Enquiries",
  "Exchange Campaigns",
  "Lead Conversion",
];

const offerCards = [
  {
    badge: "Festive Offer",
    title: "Luxury Festival Sale Campaign",
    description:
      "A premium campaign block for festive season offers, celebration collections, and limited-period showroom promotions.",
    highlight: "Save More This Season",
    note: "Perfect for Diwali, wedding, seasonal, and festive sales.",
  },
  {
    badge: "Hot Deal",
    title: "Limited-Time Discount Promotion",
    description:
      "Create urgency with a high-impact deal section designed to push faster calls, visits, and WhatsApp enquiries.",
    highlight: "Offer Ends Soon",
    note: "Strong for electronics, appliance, furniture, and retail campaigns.",
  },
  {
    badge: "Exchange Bonus",
    title: "Upgrade & Exchange Offer Block",
    description:
      "Show exchange benefits, old-product replacement deals, and upgrade incentives in a premium and easy-to-read layout.",
    highlight: "Upgrade With Extra Value",
    note: "Excellent for automobile, electronics, appliances, and furniture.",
  },
  {
    badge: "Exclusive",
    title: "VIP Customer Offer Section",
    description:
      "A rich promotion area for loyal customers, premium buyers, membership clients, and referral-based special pricing.",
    highlight: "Special Access Benefits",
    note: "Useful for luxury retail, jewellery, boutique, and premium segments.",
  },
  {
    badge: "Clearance",
    title: "Stock Clearance Campaign",
    description:
      "Move old stock faster with a premium-looking clearance section that still protects your brand presentation.",
    highlight: "Clear Stock, Keep Prestige",
    note: "Ideal for seasonal inventory rotation and fast-moving campaigns.",
  },
  {
    badge: "Combo Deal",
    title: "Bundle & Combo Offer Layout",
    description:
      "Present combo savings, product bundles, package offers, and value-driven campaigns in a conversion-friendly design.",
    highlight: "More Value, Better Buying",
    note: "Works well for furniture sets, electronics bundles, and fashion combos.",
  },
];

const whyOffersMatter = [
  {
    title: "Creates Buying Urgency",
    desc: "An offers page gives customers a reason to act now instead of delaying the decision.",
  },
  {
    title: "Improves Conversion Rate",
    desc: "Good promotions attract attention, increase response, and generate more enquiries from existing traffic.",
  },
  {
    title: "Supports Marketing Campaigns",
    desc: "You can run ads, WhatsApp campaigns, festival promotions, and social posts directly to this offers page.",
  },
  {
    title: "Looks Premium, Not Cheap",
    desc: "This page is designed to keep your showroom brand elegant even while promoting discounts and deals.",
  },
];

const campaignIdeas = [
  "Festive season sale banners",
  "Limited-time deal cards",
  "Mega weekend showroom sale",
  "Exchange and upgrade campaigns",
  "New arrival launch offers",
  "Combo and bundle savings",
  "Wedding season premium promotions",
  "VIP customer or membership deals",
];

const promoBenefits = [
  "Premium banner design for sale campaigns",
  "Luxury layout for offers and discounts",
  "Better WhatsApp lead generation",
  "High-trust promotion structure",
  "Festival and event-ready sales page",
  "Faster customer attention and action",
  "Mobile-friendly campaign browsing",
  "Easy customization for your showroom",
];

const urgencyPoints = [
  {
    title: "Faster Action",
    desc: "Customers respond faster when there is a clear limited-time reason to enquire now.",
  },
  {
    title: "Better Campaign Landing Page",
    desc: "Instead of sending traffic to a generic home page, you can send it to a focused offers page.",
  },
  {
    title: "Higher Perceived Value",
    desc: "Premium-looking promotions feel more trustworthy and attractive than ordinary discount messages.",
  },
];

export default function ShowroomOffersPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <div className="page-hero-card">
            <div className="eyebrow">Offers Page Demo • Premium Promotions • Better Conversion</div>
            <h1>
              Premium showroom offers page built to
              <span className="gold-text"> attract attention and increase enquiries</span>
            </h1>
            <p>
              A strong offers page helps your showroom promote discounts, festive campaigns,
              limited-time deals, exchange offers, and special collections in a premium way.
              Instead of looking cheap, your promotions look elegant, trustworthy, and highly
              sales-focused. This is the perfect page for running campaigns that bring faster
              customer action.
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
                Get This Offers Page
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
              {heroTags.map((item) => (
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
              <div className="eyebrow">Why this page is powerful</div>
              <h2 className="section-title" style={{ fontSize: "clamp(1.9rem, 3vw, 3.2rem)" }}>
                A premium offers page can turn casual visitors into serious buyers
              </h2>
              <p className="section-subtitle">
                Many customers need a final push before they contact a business. A strong offers
                page creates urgency, improves value perception, and gives them a real reason to
                take action now. This page is designed exactly for that moment.
              </p>

              <ul className="feature-list" style={{ marginTop: "22px" }}>
                <li>Promotions look premium and brand-safe, not low-quality or messy.</li>
                <li>Customers quickly understand what offer is running and why it matters.</li>
                <li>Urgency and value are balanced together for stronger conversion.</li>
                <li>
                  Perfect for ads, WhatsApp campaigns, festival sales, and promotional links.
                </li>
              </ul>
            </div>

            <div className="glass-card" style={{ padding: "30px" }}>
              <div className="card-light" style={{ padding: "22px", marginBottom: "14px" }}>
                <h3
                  style={{
                    margin: "0 0 10px",
                    fontSize: "24px",
                    lineHeight: 1.15,
                    letterSpacing: "-0.5px",
                  }}
                >
                  Premium Promotion Experience
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: "#52525b",
                    lineHeight: 1.85,
                    fontSize: "15px",
                  }}
                >
                  This page lets you run attractive campaigns without damaging your premium brand
                  image. It helps customers notice deals while still feeling your showroom is
                  polished, trusted, and high value.
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
                    More
                  </strong>
                  <span className="soft-text">Attention on deals and campaigns</span>
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
                    Faster
                  </strong>
                  <span className="soft-text">Calls and WhatsApp responses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
        }}
      >
        <div className="container">
          <div className="text-center">
            <div className="eyebrow">Promotion showcase</div>
            <h2 className="section-title">Offer blocks designed to sell without looking ordinary</h2>
            <p className="section-subtitle" style={{ marginLeft: "auto", marginRight: "auto" }}>
              These premium offer sections help your promotions feel exciting, trusted, and easy to
              understand, while also keeping a luxurious showroom presentation.
            </p>
          </div>

          <div className="grid-3" style={{ marginTop: "34px" }}>
            {offerCards.map((item) => (
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
                    height: "220px",
                    background:
                      "linear-gradient(135deg, rgba(202,167,74,0.34), rgba(255,255,255,0.92), rgba(184,143,46,0.20))",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "18px",
                      left: "18px",
                      display: "inline-flex",
                      minHeight: "34px",
                      alignItems: "center",
                      padding: "0 12px",
                      borderRadius: "999px",
                      background: "#111111",
                      color: "#ffffff",
                      fontWeight: 800,
                      fontSize: "12px",
                    }}
                  >
                    {item.badge}
                  </div>
                </div>

                <div style={{ padding: "24px", display: "grid", gap: "12px", flex: 1 }}>
                  <div>
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
                      {item.highlight}
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
                        margin: "0 0 12px",
                        color: "#52525b",
                        lineHeight: 1.85,
                        fontSize: "15px",
                      }}
                    >
                      {item.description}
                    </p>

                    <p
                      style={{
                        margin: 0,
                        color: "#7a7a84",
                        lineHeight: 1.75,
                        fontSize: "14px",
                        fontWeight: 700,
                      }}
                    >
                      {item.note}
                    </p>
                  </div>

                  <div style={{ marginTop: "auto" }}>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline"
                    >
                      Use This Offer Style
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
            <div className="eyebrow">Why offers work</div>
            <h2 className="section-title" style={{ color: "#111111" }}>
              This page improves sales without hurting your premium brand image
            </h2>
            <p
              className="section-subtitle"
              style={{
                color: "#52525b",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Promotions work best when they create urgency and trust together. This page is built
              to help your business sell more while still looking polished and premium.
            </p>
          </div>

          <div className="grid-4" style={{ marginTop: "34px" }}>
            {whyOffersMatter.map((item) => (
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
              <div className="eyebrow">Campaign ideas</div>
              <h2 className="section-title">Run different promotion campaigns from one premium page</h2>
              <p className="section-subtitle">
                This offers page can be customized for many sales campaigns across different
                showroom industries. It is flexible, elegant, and built for results.
              </p>

              <div className="grid-2" style={{ marginTop: "22px" }}>
                {campaignIdeas.map((item) => (
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
                Want an offers page like this for your showroom?
              </h3>
              <p
                style={{
                  margin: "0 0 18px",
                  color: "#52525b",
                  lineHeight: 1.85,
                  fontSize: "15px",
                }}
              >
                We can customize this page with your own sale banners, discount campaigns, exchange
                offers, festive promotions, limited-time deals, and direct enquiry flow.
              </p>

              <div className="kpi-grid" style={{ marginBottom: "18px" }}>
                <div className="kpi-box">
                  <strong>More</strong>
                  <span>Attention on deals and promotions</span>
                </div>
                <div className="kpi-box">
                  <strong>Better</strong>
                  <span>Campaign landing page performance</span>
                </div>
                <div className="kpi-box">
                  <strong>Direct</strong>
                  <span>WhatsApp and call conversion flow</span>
                </div>
              </div>

              <ul className="info-list" style={{ marginBottom: "20px" }}>
                <li>Custom festive and seasonal sale design</li>
                <li>Limited-time offer blocks and banners</li>
                <li>Exchange, combo, and premium deal sections</li>
                <li>Luxury look with strong urgency messaging</li>
                <li>Easy link for ads, social media, and WhatsApp marketing</li>
              </ul>

              <div style={{ display: "grid", gap: "12px" }}>
                <a
                  href={WHATSAPP_CAMPAIGN}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Get Quote on WhatsApp
                </a>
                <Link href="/projects/showroom/products" className="btn btn-outline">
                  View Products Page
                </Link>
                <Link href="/projects/showroom/contact" className="btn btn-outline">
                  Contact for Customization
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#ffffff" }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: "start", gap: "28px" }}>
            <div>
              <div className="eyebrow">Why urgency matters</div>
              <h2 className="section-title" style={{ color: "#111111" }}>
                Offers give customers a reason to act today, not later
              </h2>
              <p
                className="section-subtitle"
                style={{ color: "#52525b", maxWidth: "unset" }}
              >
                Many customers are interested but not yet committed. A focused offers page helps
                remove hesitation by presenting clear value, time-sensitive benefits, and easy
                action paths.
              </p>
            </div>

            <div className="grid-3">
              {urgencyPoints.map((item) => (
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
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center">
            <div className="eyebrow">Premium promo benefits</div>
            <h2 className="section-title">What makes this offers page powerful for sales</h2>
            <p className="section-subtitle" style={{ marginLeft: "auto", marginRight: "auto" }}>
              This page is designed to help you promote offers clearly, attract more attention, and
              create better results from paid and organic traffic.
            </p>
          </div>

          <div className="grid-4" style={{ marginTop: "34px" }}>
            {promoBenefits.map((item) => (
              <div
                key={item}
                className="glass-card"
                style={{
                  padding: "20px",
                  borderRadius: "20px",
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
              <div className="eyebrow">Launch your campaign page</div>
              <h2
                style={{
                  margin: "14px 0 10px",
                  color: "#fff",
                  fontSize: "clamp(2rem, 4vw, 3.1rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-1px",
                }}
              >
                Ready to promote your showroom offers in a premium way?
              </h2>
              <p
                style={{
                  margin: 0,
                  color: "rgba(255,255,255,0.76)",
                  lineHeight: 1.85,
                  maxWidth: "840px",
                  fontSize: "15px",
                }}
              >
                Get a premium offers page with luxury banners, campaign blocks, festive sale
                sections, exchange promotions, and direct WhatsApp lead generation for your
                showroom business.
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