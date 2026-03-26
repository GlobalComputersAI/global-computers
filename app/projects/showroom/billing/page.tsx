import type { Metadata } from "next";
import Link from "next/link";
import BillingGeneratorClient from "./BillingGeneratorClient";

export const metadata: Metadata = {
  title:
    "Showroom Billing Page Demo | Invoice Generator for Premium Showroom Website",
  description:
    "Premium showroom billing page demo with invoice generator, customer details, item rows, GST-ready calculation, print invoice option, and professional billing layout. Perfect for furniture, electronics, jewellery, fashion, appliance, automobile, and retail showrooms.",
  keywords: [
    "showroom billing page",
    "invoice generator page",
    "showroom invoice generator",
    "premium billing page demo",
    "GST invoice page",
    "retail invoice generator",
    "showroom bill format",
    "customer invoice page",
    "website billing page design",
    "premium website design korba",
    "premium website design chhattisgarh",
    "Global Computers billing page",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/showroom/billing/",
  },
  openGraph: {
    title:
      "Showroom Billing Page Demo | Invoice Generator for Premium Showroom Website",
    description:
      "Premium showroom billing page with invoice generator, GST-style totals, customer details, and print-ready layout.",
    url: "https://globalcomputers.net/projects/showroom/billing/",
    siteName: "Global Computers & IT Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Showroom Billing Page Demo",
    description:
      "Professional invoice generator page for showroom websites with premium UI and print-ready billing layout.",
  },
};

const WHATSAPP_URL =
  "https://wa.me/919752422686?text=Hi%20I%20want%20a%20premium%20showroom%20website%20with%20invoice%20generator%20and%20billing%20page.%20Please%20share%20price%20and%20details.";
const CALL_URL = "tel:+919752422686";

const features = [
  "Customer name, phone, and address fields",
  "Multiple invoice items with quantity and price",
  "Automatic subtotal, GST, and grand total",
  "Professional invoice preview layout",
  "Print invoice for customer",
  "Useful for showroom billing demo presentation",
];

export default function ShowroomBillingPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <div className="page-hero-card">
            <div className="eyebrow">Billing Page Demo • Invoice Generator • Premium Trust</div>
            <h1>
              Premium showroom billing page with
              <span className="gold-text"> invoice generator for customers</span>
            </h1>
            <p>
              This billing page is built to make your showroom website look more professional and
              more complete. It helps generate customer invoices with item details, quantity,
              pricing, GST-style calculation, and print-ready output. It is ideal for furniture,
              electronics, jewellery, appliances, retail, boutique, and premium showroom businesses.
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
                Get This Billing Page
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
              {[
                "Invoice Generator",
                "Print Ready",
                "Professional Billing",
                "GST Style Total",
                "Premium UI",
                "Customer Friendly",
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
          <div className="grid-2" style={{ alignItems: "start", gap: "28px" }}>
            <div>
              <div className="eyebrow">Why this page matters</div>
              <h2 className="section-title" style={{ fontSize: "clamp(1.9rem, 3vw, 3.2rem)" }}>
                A billing page increases trust and makes your showroom website feel complete
              </h2>
              <p className="section-subtitle">
                A premium showroom website should not stop at product display. A billing page adds
                professionalism and shows that your business is organized, serious, and ready for
                real customer transactions.
              </p>

              <ul className="feature-list" style={{ marginTop: "22px" }}>
                {features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div style={{ marginTop: "22px", display: "grid", gap: "14px" }}>
                <div className="glass-card" style={{ padding: "20px" }}>
                  <h3
                    style={{
                      margin: "0 0 10px",
                      color: "#fff",
                      fontSize: "22px",
                      lineHeight: 1.2,
                    }}
                  >
                    Better for your business
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      color: "rgba(255,255,255,0.74)",
                      lineHeight: 1.85,
                      fontSize: "15px",
                    }}
                  >
                    This type of page helps you show customers that your showroom is modern,
                    process-ready, and professional.
                  </p>
                </div>

                <div className="glass-card" style={{ padding: "20px" }}>
                  <h3
                    style={{
                      margin: "0 0 10px",
                      color: "#fff",
                      fontSize: "22px",
                      lineHeight: 1.2,
                    }}
                  >
                    Better for your customer
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      color: "rgba(255,255,255,0.74)",
                      lineHeight: 1.85,
                      fontSize: "15px",
                    }}
                  >
                    Customers get a clean invoice experience with proper item details, totals, and
                    print-ready bill format.
                  </p>
                </div>
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
                Want this invoice generator for your showroom?
              </h3>
              <p
                style={{
                  margin: "0 0 18px",
                  color: "#52525b",
                  lineHeight: 1.85,
                  fontSize: "15px",
                }}
              >
                We can customize this billing page with your business name, logo, GST number,
                address, invoice prefix, taxes, and invoice layout style.
              </p>

              <div className="kpi-grid" style={{ marginBottom: "18px" }}>
                <div className="kpi-box">
                  <strong>Print</strong>
                  <span>Quick invoice print for customers</span>
                </div>
                <div className="kpi-box">
                  <strong>Auto</strong>
                  <span>Automatic billing calculation</span>
                </div>
                <div className="kpi-box">
                  <strong>Premium</strong>
                  <span>Professional bill presentation</span>
                </div>
              </div>

              <ul className="info-list" style={{ marginBottom: "20px" }}>
                <li>Customer invoice generation</li>
                <li>GST-style tax calculation</li>
                <li>Professional printable invoice preview</li>
                <li>Premium billing layout for trust</li>
                <li>Useful for product-selling showrooms</li>
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
          <div className="text-center" style={{ marginBottom: "30px" }}>
            <div className="eyebrow">Live invoice generator demo</div>
            <h2 className="section-title" style={{ color: "#111111" }}>
              Generate invoice for your customer
            </h2>
            <p
              className="section-subtitle"
              style={{
                color: "#52525b",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Fill the customer and item details below. The invoice preview updates automatically
              and can be printed directly for customer use.
            </p>
          </div>

          <BillingGeneratorClient />
        </div>
      </section>
    </>
  );
}