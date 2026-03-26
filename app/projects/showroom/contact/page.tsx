import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Contact Showroom Demo | Premium Enquiry, WhatsApp, Call & Visit Page",
  description:
    "Contact page demo for a premium showroom website with direct WhatsApp enquiry, call button, visit request, business details, customer form, and high-conversion layout. Perfect for furniture, electronics, jewellery, fashion, automobile, appliance, and retail showroom businesses.",
  keywords: [
    "showroom contact page",
    "premium contact page website",
    "showroom enquiry page",
    "WhatsApp showroom contact page",
    "call now showroom page",
    "retail showroom contact page",
    "furniture showroom contact page",
    "electronics showroom contact page",
    "jewellery showroom contact page",
    "website design korba",
    "website design chhattisgarh",
    "Global Computers showroom contact page",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/showroom/contact/",
  },
  openGraph: {
    title:
      "Contact Showroom Demo | Premium Enquiry, WhatsApp, Call & Visit Page",
    description:
      "Premium showroom contact page demo with enquiry form, WhatsApp CTA, call action, business info, and customer-friendly contact flow.",
    url: "https://globalcomputers.net/projects/showroom/contact/",
    siteName: "Global Computers & IT Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Showroom Demo",
    description:
      "Premium showroom contact page with high-conversion enquiry layout, WhatsApp, call button, and visit request flow.",
  },
};

const WHATSAPP_GENERAL =
  "https://wa.me/919752422686?text=Hi%20I%20want%20a%20premium%20showroom%20website.%20Please%20share%20details.";
const WHATSAPP_QUOTE =
  "https://wa.me/919752422686?text=Hi%20I%20want%20a%20premium%20showroom%20website%20with%20home%2C%20products%2C%20offers%2C%20billing%20and%20contact%20pages.%20Please%20share%20best%20quote.";
const CALL_URL = "tel:+919752422686";
const EMAIL = "mailto:globalcomputers.net@gmail.com";

const contactCards = [
  {
    title: "Call Directly",
    value: "+91 97524 22686",
    desc: "Best for urgent enquiry, pricing discussion, customization, and quick support.",
    href: CALL_URL,
    cta: "Call Now",
  },
  {
    title: "Chat on WhatsApp",
    value: "Fastest response for demo and quote",
    desc: "Perfect for sharing business details, product categories, city, and required pages.",
    href: WHATSAPP_GENERAL,
    cta: "Start WhatsApp Chat",
  },
  {
    title: "Email Enquiry",
    value: "globalcomputers.net@gmail.com",
    desc: "Useful for detailed requirements, documents, product list, images, and long discussion.",
    href: EMAIL,
    cta: "Send Email",
  },
];

const whyThisPageWorks = [
  "Customers get clear action options immediately",
  "WhatsApp and call buttons reduce friction",
  "Professional contact page increases trust",
  "Suitable for premium showroom businesses",
  "Easy flow for quote, demo, and visit request",
  "Strong internal links improve overall website journey",
];

const businessHighlights = [
  {
    title: "Premium First Impression",
    desc: "A strong contact page makes your showroom business look serious, trusted, and ready to serve customers.",
  },
  {
    title: "Fast Lead Conversion",
    desc: "Visitors can quickly call, message, or send enquiry without confusion or unnecessary steps.",
  },
  {
    title: "Useful for Real Buyers",
    desc: "Customers who are ready to ask price, visit showroom, or check products can act instantly.",
  },
  {
    title: "Great for Local SEO Trust",
    desc: "Contact details, business info, and location-style content improve trust for local customers.",
  },
];

const enquiryReasons = [
  "Request showroom website pricing",
  "Ask for premium custom design",
  "Share your business category and product range",
  "Get products, offers, billing, and contact pages",
  "Ask for WhatsApp integration and lead flow",
  "Discuss fast delivery and customization timeline",
];

export default function ShowroomContactPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <div className="page-hero-card">
            <div className="eyebrow">Contact Page Demo • Better Enquiries • Premium Trust</div>
            <h1>
              Premium showroom contact page designed to
              <span className="gold-text"> convert visitors into real enquiries</span>
            </h1>
            <p>
              A good contact page should not feel like the end of the website. It should feel like
              the beginning of a real business conversation. This premium showroom contact page is
              designed to make enquiry easy, professional, and fast through WhatsApp, phone, email,
              and direct contact flow.
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
                href={WHATSAPP_QUOTE}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Get Quote on WhatsApp
              </a>
              <a href={CALL_URL} className="btn btn-outline">
                Call Now
              </a>
              <Link href="/projects/showroom" className="btn btn-outline">
                Back to Home
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
                "WhatsApp Enquiry",
                "Direct Call",
                "Email Contact",
                "Visit Request",
                "Quote Discussion",
                "Premium Trust",
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
          <div className="grid-3">
            {contactCards.map((item) => (
              <div key={item.title} className="card-light" style={{ padding: "26px" }}>
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "18px",
                    background:
                      "linear-gradient(135deg, #caa74a 0%, #f2dd95 50%, #b88f2e 100%)",
                    color: "#111111",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    fontSize: "20px",
                    marginBottom: "18px",
                  }}
                >
                  {item.title === "Call Directly"
                    ? "📞"
                    : item.title === "Chat on WhatsApp"
                    ? "💬"
                    : "✉"}
                </div>

                <h2
                  style={{
                    margin: "0 0 10px",
                    fontSize: "24px",
                    lineHeight: 1.15,
                    letterSpacing: "-0.5px",
                    color: "#111111",
                  }}
                >
                  {item.title}
                </h2>

                <p
                  style={{
                    margin: "0 0 10px",
                    color: "#111111",
                    fontWeight: 900,
                    fontSize: "16px",
                    lineHeight: 1.5,
                  }}
                >
                  {item.value}
                </p>

                <p
                  style={{
                    margin: "0 0 18px",
                    color: "#52525b",
                    lineHeight: 1.85,
                    fontSize: "15px",
                  }}
                >
                  {item.desc}
                </p>

                <a href={item.href} className="btn btn-outline">
                  {item.cta}
                </a>
              </div>
            ))}
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
          <div className="form-grid">
            <div className="contact-card">
              <div className="eyebrow">Enquiry Form Demo</div>
              <h2>Send your showroom requirement</h2>
              <p>
                This form layout is designed for premium enquiry collection. Customers can share
                business type, category, phone number, city, and requirement easily. It helps your
                website feel professional and makes leads more serious.
              </p>

              <form>
                <div className="form-row two">
                  <input
                    type="text"
                    className="input"
                    placeholder="Your Name"
                    aria-label="Your Name"
                  />
                  <input
                    type="tel"
                    className="input"
                    placeholder="Phone Number"
                    aria-label="Phone Number"
                  />
                </div>

                <div className="form-row two">
                  <input
                    type="text"
                    className="input"
                    placeholder="Business / Showroom Name"
                    aria-label="Business or Showroom Name"
                  />
                  <input
                    type="text"
                    className="input"
                    placeholder="City"
                    aria-label="City"
                  />
                </div>

                <div className="form-row two">
                  <select className="select" aria-label="Business Category" defaultValue="">
                    <option value="" disabled>
                      Select Business Category
                    </option>
                    <option>Furniture Showroom</option>
                    <option>Electronics & Appliances</option>
                    <option>Jewellery Showroom</option>
                    <option>Fashion / Boutique</option>
                    <option>Automobile / Bike Showroom</option>
                    <option>Tiles / Interior / Sanitary</option>
                    <option>Multi-Brand Retail Showroom</option>
                  </select>

                  <select className="select" aria-label="Required Website Type" defaultValue="">
                    <option value="" disabled>
                      Select Requirement
                    </option>
                    <option>Premium Website Design</option>
                    <option>Products Page</option>
                    <option>Offers Page</option>
                    <option>Billing Page</option>
                    <option>Complete Showroom Website</option>
                    <option>Custom Requirement</option>
                  </select>
                </div>

                <div className="form-row">
                  <textarea
                    className="textarea"
                    placeholder="Tell us about your showroom, products, required pages, city, WhatsApp number, and any special design needs..."
                    aria-label="Requirement Message"
                  />
                </div>

                <div className="bill-toolbar">
                  <a
                    href={WHATSAPP_QUOTE}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Send Requirement on WhatsApp
                  </a>
                  <a href={CALL_URL} className="btn btn-outline">
                    Call to Discuss
                  </a>
                </div>
              </form>
            </div>

            <div className="side-card">
              <div className="eyebrow">Why this page works</div>
              <h2>Built for serious customer action</h2>
              <p>
                A premium contact page removes confusion and increases trust. It helps visitors take
                immediate action without searching for your number or wondering what to do next.
              </p>

              <ul className="info-list" style={{ marginBottom: "18px" }}>
                {whyThisPageWorks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="kpi-grid">
                <div className="kpi-box">
                  <strong>Fast</strong>
                  <span>Direct enquiry flow without extra steps</span>
                </div>
                <div className="kpi-box">
                  <strong>Premium</strong>
                  <span>Luxury contact design for better trust</span>
                </div>
                <div className="kpi-box">
                  <strong>Direct</strong>
                  <span>Calls and WhatsApp action from one page</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#ffffff" }}>
        <div className="container">
          <div className="text-center">
            <div className="eyebrow">Business value</div>
            <h2 className="section-title" style={{ color: "#111111" }}>
              Why a premium contact page is important for your showroom website
            </h2>
            <p
              className="section-subtitle"
              style={{
                color: "#52525b",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              The contact page is where trust becomes action. A weak contact page can lose hot
              leads. A strong one can convert them into real calls, messages, visits, and sales.
            </p>
          </div>

          <div className="grid-4" style={{ marginTop: "34px" }}>
            {businessHighlights.map((item) => (
              <div key={item.title} className="card-light" style={{ padding: "24px" }}>
                <h3
                  style={{
                    margin: "0 0 12px",
                    fontSize: "22px",
                    lineHeight: 1.2,
                    letterSpacing: "-0.4px",
                    color: "#111111",
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
              <div className="eyebrow">Common enquiry reasons</div>
              <h2 className="section-title">What customers usually contact for</h2>
              <p className="section-subtitle">
                This contact page is flexible and can support many types of real showroom enquiries,
                from website quote to custom design discussion.
              </p>

              <div className="grid-2" style={{ marginTop: "22px" }}>
                {enquiryReasons.map((item) => (
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
                Want this contact page for your showroom?
              </h3>
              <p
                style={{
                  margin: "0 0 18px",
                  color: "#52525b",
                  lineHeight: 1.85,
                  fontSize: "15px",
                }}
              >
                We can customize this page with your own phone number, WhatsApp number, business
                email, showroom address, map section, enquiry form, product enquiry flow, and visit
                request options.
              </p>

              <ul className="info-list" style={{ marginBottom: "20px" }}>
                <li>Premium enquiry form layout</li>
                <li>Direct call and WhatsApp buttons</li>
                <li>Professional business details section</li>
                <li>High-conversion contact flow</li>
                <li>Perfect for local showroom trust and enquiries</li>
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
                <Link href="/projects/showroom/products" className="btn btn-outline">
                  View Products Page
                </Link>
                <Link href="/projects/showroom/offers" className="btn btn-outline">
                  View Offers Page
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
              <div className="eyebrow">Start your enquiry flow</div>
              <h2
                style={{
                  margin: "14px 0 10px",
                  color: "#fff",
                  fontSize: "clamp(2rem, 4vw, 3.1rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-1px",
                }}
              >
                Ready to add a premium contact page to your showroom website?
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
                Get a premium showroom contact page with enquiry form, call action, WhatsApp chat,
                email contact, and trust-building layout that helps turn visitors into real leads.
              </p>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href={WHATSAPP_GENERAL}
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