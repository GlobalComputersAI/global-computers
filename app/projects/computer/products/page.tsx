import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Computer Products Page Demo | Laptops, Desktops, Printers, CCTV & Accessories",
  description:
    "Premium computer products page demo for laptop dealers, desktop sellers, printer shops, CCTV businesses, networking providers, and IT hardware suppliers. Built for trust, product display, and WhatsApp lead conversion.",
  keywords: [
    "computer products page",
    "laptop products website",
    "desktop website demo",
    "printer shop website",
    "CCTV products website",
    "computer accessories website",
    "networking products website",
    "IT hardware products page",
    "computer shop website India",
    "computer product catalogue website",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/computer/products/",
  },
  openGraph: {
    title:
      "Computer Products Page Demo | Laptops, Desktops, Printers, CCTV & Accessories",
    description:
      "Premium product page demo for computer shops and IT businesses with clean category display, trust-building sections, and WhatsApp lead flow.",
    url: "https://globalcomputers.net/projects/computer/products/",
    type: "website",
    siteName: "Global Computers & IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Computer Products Page Demo | Laptops, Desktops, Printers, CCTV & Accessories",
    description:
      "Premium computer product page for laptop, desktop, printer, CCTV, accessories, networking, and office IT hardware businesses.",
  },
};

const WHATSAPP_URL =
  "https://wa.me/919752422686?text=Hi%20I%20want%20this%20computer%20shop%20website%20demo%20for%20my%20business.%20Please%20share%20price%20and%20delivery%20details.";
const CALL_URL = "tel:+919752422686";

const categories = [
  {
    title: "Laptops & Notebooks",
    desc: "Show business laptops, student laptops, gaming laptops, and branded notebook ranges in a premium catalogue-style layout.",
    points: [
      "Business laptops",
      "Student laptops",
      "Gaming laptops",
      "Branded models and offers",
    ],
    chip: "High Retail Demand",
  },
  {
    title: "Desktops & Custom PCs",
    desc: "Promote office desktops, assembled PCs, workstation systems, home-use computers, and custom performance builds.",
    points: [
      "Office desktop systems",
      "Custom assembled PCs",
      "Workstations",
      "Home and business use computers",
    ],
    chip: "Good Margin Category",
  },
  {
    title: "Printers & Scanners",
    desc: "Perfect for printer dealers, scanner providers, cartridge sellers, refill support, and office document solution businesses.",
    points: [
      "Inkjet and laser printers",
      "Scanners and multifunction devices",
      "Office printing solutions",
      "Refill and cartridge support",
    ],
    chip: "Office Buyer Friendly",
  },
  {
    title: "CCTV & Biometric Systems",
    desc: "Display surveillance cameras, DVR/NVR kits, access control devices, biometric attendance systems, and security solutions.",
    points: [
      "CCTV camera packages",
      "DVR and NVR setup",
      "Biometric attendance",
      "Security solution bundles",
    ],
    chip: "High Ticket Potential",
  },
  {
    title: "Networking Products",
    desc: "Sell routers, switches, Wi-Fi devices, cabling materials, office networking hardware, and complete connectivity solutions.",
    points: [
      "Routers and switches",
      "Wi-Fi setup hardware",
      "LAN accessories",
      "Office networking bundles",
    ],
    chip: "Business Enquiry Driver",
  },
  {
    title: "Accessories & Peripherals",
    desc: "Show keyboards, mouse, storage devices, webcams, speakers, UPS, adapters, and daily-use computer accessories.",
    points: [
      "Keyboard and mouse",
      "Pendrive and storage",
      "UPS and power backup",
      "Adapters and peripherals",
    ],
    chip: "Fast Moving Products",
  },
  {
    title: "Office IT Hardware Supply",
    desc: "A strong category for B2B, institutional, and commercial buyers who need multiple systems and complete supply support.",
    points: [
      "Bulk supply enquiries",
      "Office hardware packages",
      "Institutional requirements",
      "Complete setup support",
    ],
    chip: "B2B Conversion Ready",
  },
  {
    title: "Software & Add-On Solutions",
    desc: "Bundle operating systems, antivirus, billing software, office tools, and setup services with product sales for better value.",
    points: [
      "OS installation",
      "Antivirus packages",
      "Billing software setup",
      "Support and installation",
    ],
    chip: "Value Add Section",
  },
];

const whyProductsPageWorks = [
  {
    title: "Makes Product Selling Easy",
    desc: "A proper products page helps customers quickly understand what the business sells and builds confidence before they contact.",
  },
  {
    title: "Supports Retail + Business Buyers",
    desc: "This page is strong for walk-in retail demand as well as office, school, clinic, and company-level supply enquiries.",
  },
  {
    title: "Increases Trust and Professional Image",
    desc: "A well-designed product section makes the business look organized, premium, and more reliable than a basic local competitor.",
  },
  {
    title: "Good for Cross-Selling Services",
    desc: "Products naturally connect to repair, installation, AMC, CCTV setup, networking, and software support services.",
  },
];

const quickReasons = [
  "Perfect for laptop, desktop, printer, CCTV, and IT hardware businesses",
  "Helps your client look bigger, more modern, and more trustworthy",
  "Supports category-based product presentation for easy browsing",
  "Strong for WhatsApp enquiry and direct phone lead conversion",
];

export default function ComputerProductsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="badge">Computer Products • IT Hardware • CCTV • Networking</span>
          <h1 className="title-lg">
            Premium Products Page Demo for Computer Shops and IT Hardware Businesses
          </h1>
          <p className="lead">
            This products page is designed to help computer shops, laptop dealers,
            desktop sellers, printer businesses, CCTV providers, networking
            companies, and IT hardware suppliers present their categories in a
            modern, premium, conversion-focused way.
          </p>

          <div className="btn-row">
            <a href={WHATSAPP_URL} className="btn btn-primary">
              Get This Website on WhatsApp
            </a>
            <a href={CALL_URL} className="btn btn-outline">
              Call Now
            </a>
            <Link href="/projects/computer/contact/" className="btn btn-soft">
              Contact Us
            </Link>
          </div>

          <div className="chips" style={{ marginTop: 18 }}>
            <span className="chip">Laptop Dealers</span>
            <span className="chip">Desktop Sellers</span>
            <span className="chip">Printer Businesses</span>
            <span className="chip">CCTV Providers</span>
            <span className="chip">Networking Suppliers</span>
            <span className="chip">Office IT Hardware</span>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="hero-card">
            <div className="grid-2 align-center">
              <div>
                <span className="badge">Why This Page Sells</span>
                <h2 className="title-md">
                  A Strong Product Page Increases Trust and Product Enquiries
                </h2>
                <p className="text">
                  For this niche, the products page is one of the most important
                  pages after the homepage. It helps visitors understand the
                  product range quickly and makes the business feel more complete,
                  premium, and serious.
                </p>

                <ul className="list-check">
                  {quickReasons.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="stats-grid">
                <div className="stat-box">
                  <strong>8+</strong>
                  <span>Strong product categories for full business presentation</span>
                </div>
                <div className="stat-box">
                  <strong>Retail + B2B</strong>
                  <span>Useful for both direct customers and office buyers</span>
                </div>
                <div className="stat-box">
                  <strong>Premium Look</strong>
                  <span>Helps the business appear more trustworthy and valuable</span>
                </div>
                <div className="stat-box">
                  <strong>Fast Leads</strong>
                  <span>Category pages drive WhatsApp and call enquiries faster</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="section-head center">
            <span className="badge">Product Categories</span>
            <h2 className="title-lg">
              Everything a Computer Business Needs to Showcase
            </h2>
            <p className="lead">
              This page is structured to support product-led selling while also
              improving confidence for repair, installation, and business supply enquiries.
            </p>
          </div>

          <div className="grid-auto-280">
            {categories.map((item) => (
              <div key={item.title} className="card card-pad hover-lift">
                <h3 className="title-sm">{item.title}</h3>
                <p className="text">{item.desc}</p>

                <ul className="list-check">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div style={{ marginTop: 14 }}>
                  <span className="price-chip">{item.chip}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="cta-band">
            <div className="grid-2 align-center">
              <div>
                <span
                  className="badge"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    color: "#ffffff",
                    borderColor: "rgba(255,255,255,0.14)",
                  }}
                >
                  Product Display + Lead Conversion
                </span>
                <h2 className="title-lg" style={{ marginTop: 18 }}>
                  Want this same premium products page for your computer business?
                </h2>
                <p className="lead">
                  This design is ideal for local shops, branded dealers, IT suppliers,
                  service providers, and businesses that want to look more serious,
                  modern, and conversion-ready online.
                </p>
              </div>

              <div>
                <div className="btn-row">
                  <a href={WHATSAPP_URL} className="btn btn-outline">
                    Ask Price on WhatsApp
                  </a>
                  <a href={CALL_URL} className="btn btn-outline">
                    Call for Demo
                  </a>
                </div>

                <div
                  className="card card-pad"
                  style={{
                    marginTop: 18,
                    background: "rgba(255,255,255,0.12)",
                    borderColor: "rgba(255,255,255,0.14)",
                  }}
                >
                  <h3 className="title-sm" style={{ color: "#ffffff" }}>
                    Best for:
                  </h3>

                  <div
                    className="chips"
                    style={{ marginTop: 14 }}
                  >
                    <span className="chip">Computer Shops</span>
                    <span className="chip">Laptop Dealers</span>
                    <span className="chip">Printer Sellers</span>
                    <span className="chip">CCTV Businesses</span>
                    <span className="chip">Office Suppliers</span>
                    <span className="chip">IT Hardware Firms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="section-head center">
            <span className="badge">Why It Works</span>
            <h2 className="title-lg">
              Why This Products Page Is Strong for Sales
            </h2>
            <p className="lead">
              The products page is not just for showing items. It helps position
              the business as complete, capable, and ready to handle different customer needs.
            </p>
          </div>

          <div className="grid-4">
            {whyProductsPageWorks.map((item) => (
              <div key={item.title} className="card card-pad hover-lift">
                <h3 className="title-sm">{item.title}</h3>
                <p className="text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container grid-2 align-center">
          <div className="card card-pad-lg">
            <span className="badge">Business Value</span>
            <h2 className="title-lg">
              This Page Helps You Sell the Demo More Easily
            </h2>
            <p className="lead">
              Clients usually understand value faster when they see products,
              services, categories, and trust together. That is why this page
              helps you close more deals for this niche.
            </p>

            <ul className="list-check">
              <li>Looks much better than a simple one-page local website</li>
              <li>Makes the business appear larger and more established</li>
              <li>Supports pricing confidence on your side</li>
              <li>Easy to adapt for any city, business name, and category focus</li>
              <li>Pairs well with services, billing, and contact pages</li>
            </ul>

            <div className="btn-row">
              <Link href="/projects/computer/services/" className="btn btn-primary">
                View Services Page
              </Link>
              <Link href="/projects/computer/billing/" className="btn btn-outline">
                View Billing Demo
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <span className="badge">Smart Positioning</span>
            <h2 className="title-md">
              Good for Product Sales, Service Trust, and B2B Enquiries
            </h2>
            <p className="text">
              A visitor may come looking for a laptop, printer, CCTV setup, or
              office hardware. But once they see a complete professional page,
              they are more likely to trust the business for support, installation,
              AMC, and repeat work too.
            </p>

            <div className="grid-2" style={{ marginTop: 18 }}>
              <div className="card card-pad">
                <h3 className="title-sm">Retail Benefit</h3>
                <p className="text">
                  Customers can clearly see product categories and contact quickly.
                </p>
              </div>

              <div className="card card-pad">
                <h3 className="title-sm">Business Benefit</h3>
                <p className="text">
                  Office and institutional buyers see broader capability and professionalism.
                </p>
              </div>
            </div>

            <div className="btn-row">
              <a href={WHATSAPP_URL} className="btn btn-primary">
                Get This Full Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}