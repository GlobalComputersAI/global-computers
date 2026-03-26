import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Computer Services Page Demo | Repair, AMC, CCTV, Networking & IT Support",
  description:
    "Premium computer services page demo for computer shops, laptop repair centers, printer support businesses, CCTV installers, networking providers, AMC companies, and IT service firms. Built for trust, local SEO, and WhatsApp lead conversion.",
  keywords: [
    "computer services website",
    "computer repair website demo",
    "laptop repair website",
    "printer service website",
    "CCTV installation website",
    "networking services website",
    "AMC support website",
    "IT support website India",
    "computer repair business website",
    "computer service center website",
    "computer AMC page",
    "local IT support website",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/computer/services/",
  },
  openGraph: {
    title:
      "Computer Services Page Demo | Repair, AMC, CCTV, Networking & IT Support",
    description:
      "Premium service page demo for computer shops and IT businesses with strong trust sections, service positioning, and WhatsApp-first enquiry flow.",
    url: "https://globalcomputers.net/projects/computer/services/",
    type: "website",
    siteName: "Global Computers & IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Computer Services Page Demo | Repair, AMC, CCTV, Networking & IT Support",
    description:
      "Premium services page for repair, AMC, CCTV, networking, printer support, and IT business websites.",
  },
};

const WHATSAPP_URL =
  "https://wa.me/919752422686?text=Hi%20I%20want%20this%20computer%20services%20website%20demo%20for%20my%20business.%20Please%20share%20price%20and%20delivery%20details.";
const CALL_URL = "tel:+919752422686";

const serviceCategories = [
  {
    title: "Laptop & Desktop Repair",
    desc: "Showcase repair expertise for slow systems, hardware faults, software issues, overheating, motherboard problems, upgrades, and complete troubleshooting.",
    points: [
      "Hardware and software troubleshooting",
      "Speed optimization and system cleanup",
      "Component replacement and upgrades",
      "Home, office, and business support",
    ],
    chip: "High Intent Search",
  },
  {
    title: "AMC & Regular IT Maintenance",
    desc: "Position your business strongly for offices, schools, clinics, and institutions that need dependable annual maintenance and regular support.",
    points: [
      "Annual maintenance contracts",
      "Routine health checks",
      "Office and institutional support",
      "Preventive maintenance visits",
    ],
    chip: "Recurring Revenue",
  },
  {
    title: "Printer Installation & Service",
    desc: "Promote printer setup, scanner configuration, cartridge support, document solution help, and network printer installation for business clients.",
    points: [
      "Printer setup and installation",
      "Scanner configuration support",
      "Cartridge and refill assistance",
      "Office printing environment support",
    ],
    chip: "Office Client Friendly",
  },
  {
    title: "CCTV Installation & Support",
    desc: "Build trust for surveillance work including CCTV setup, DVR/NVR installation, monitoring configuration, security consultation, and maintenance.",
    points: [
      "CCTV camera installation",
      "DVR and NVR setup",
      "Surveillance monitoring support",
      "Security maintenance services",
    ],
    chip: "High Value Service",
  },
  {
    title: "Networking & Wi-Fi Setup",
    desc: "Sell networking services such as LAN setup, router installation, Wi-Fi optimization, office cabling, and business connectivity solutions.",
    points: [
      "LAN and office network setup",
      "Wi-Fi router configuration",
      "Printer and device sharing",
      "Connectivity troubleshooting",
    ],
    chip: "Business Lead Driver",
  },
  {
    title: "Software & System Configuration",
    desc: "Offer complete OS installation, driver setup, antivirus, billing software, backup solutions, and new system readiness for users and offices.",
    points: [
      "Operating system installation",
      "Software and driver setup",
      "Antivirus and protection tools",
      "Business software configuration",
    ],
    chip: "Strong Add-On Service",
  },
];

const whyServicesPageWorks = [
  {
    title: "Captures Urgent Buyer Intent",
    desc: "Service pages convert fast because many users search when they already have a problem and need immediate support.",
  },
  {
    title: "Builds Trust Beyond Product Sales",
    desc: "Even if the business mainly sells hardware, showing strong service capability makes the whole brand look more dependable.",
  },
  {
    title: "Supports Local SEO Very Well",
    desc: "Service keywords are strong for city-based searches like computer repair, printer service, CCTV installation, and AMC support.",
  },
  {
    title: "Good for Repeat Revenue",
    desc: "AMC, maintenance, networking, and support services help the business look more valuable than a shop selling only products.",
  },
];

const serviceBenefits = [
  "Brings high-intent enquiries from people needing real support",
  "Makes the business look professional and full-service",
  "Supports retail, office, school, clinic, and company clients",
  "Improves website usefulness beyond only product display",
];

const bestFit = [
  "Computer repair centers",
  "Laptop service providers",
  "Printer and scanner support businesses",
  "CCTV installation companies",
  "Networking and Wi-Fi setup businesses",
  "AMC support providers",
  "IT solution firms",
  "Office maintenance service providers",
];

export default function ComputerServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="badge">Repair • AMC • CCTV • Networking • IT Support</span>
          <h1 className="title-lg">
            Premium Computer Services Page Demo for Repair, AMC, CCTV, Networking, and IT Support
          </h1>
          <p className="lead">
            This services page is designed to help computer shops, repair centers,
            printer businesses, CCTV installers, networking providers, AMC firms,
            and IT service companies present their support capabilities in a
            premium, trustworthy, high-conversion way.
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
            <span className="chip">Computer Repair</span>
            <span className="chip">Laptop Support</span>
            <span className="chip">AMC Services</span>
            <span className="chip">CCTV Installation</span>
            <span className="chip">Networking Setup</span>
            <span className="chip">IT Support</span>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="hero-card">
            <div className="grid-2 align-center">
              <div>
                <span className="badge">Why Services Convert Fast</span>
                <h2 className="title-md">
                  Service Pages Usually Bring Higher Intent Than General Product Browsing
                </h2>
                <p className="text">
                  In this niche, many people search only when they urgently need
                  repair, installation, setup, maintenance, or support. That makes
                  the services page one of the strongest lead-generating pages on
                  the whole website.
                </p>

                <ul className="list-check">
                  {serviceBenefits.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="stats-grid">
                <div className="stat-box">
                  <strong>High Intent</strong>
                  <span>Service searches often convert faster than browsing-only visitors</span>
                </div>
                <div className="stat-box">
                  <strong>Local SEO</strong>
                  <span>Excellent for repair, support, CCTV, networking, and AMC searches</span>
                </div>
                <div className="stat-box">
                  <strong>Repeat Work</strong>
                  <span>Services create stronger long-term client relationships</span>
                </div>
                <div className="stat-box">
                  <strong>Trust Boost</strong>
                  <span>Support capability makes the business look more complete and reliable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="section-head center">
            <span className="badge">Service Categories</span>
            <h2 className="title-lg">
              Complete IT Service Positioning for a Stronger Business Website
            </h2>
            <p className="lead">
              A well-built services page helps customers understand exactly what
              support the business offers and makes contacting the business much easier.
            </p>
          </div>

          <div className="grid-auto-280">
            {serviceCategories.map((item) => (
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
                  Services + Trust + Lead Conversion
                </span>
                <h2 className="title-lg" style={{ marginTop: 18 }}>
                  Want this same premium services page for your computer or IT business?
                </h2>
                <p className="lead">
                  This design works especially well for businesses that want more
                  repair enquiries, AMC clients, office support work, CCTV projects,
                  and networking setup leads.
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

                  <div className="chips" style={{ marginTop: 14 }}>
                    <span className="chip">Repair Centers</span>
                    <span className="chip">AMC Firms</span>
                    <span className="chip">CCTV Businesses</span>
                    <span className="chip">Networking Providers</span>
                    <span className="chip">Printer Support</span>
                    <span className="chip">IT Service Firms</span>
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
            <span className="badge">Why This Page Works</span>
            <h2 className="title-lg">
              Why a Strong Services Page Helps the Whole Website Sell Better
            </h2>
            <p className="lead">
              Even customers who first come for products often trust the business
              more when they see repair, setup, installation, and support capability.
            </p>
          </div>

          <div className="grid-4">
            {whyServicesPageWorks.map((item) => (
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
            <span className="badge">Sales Advantage</span>
            <h2 className="title-lg">
              This Page Helps You Sell the Demo More Easily to Real Businesses
            </h2>
            <p className="lead">
              Businesses understand value faster when they see that the website
              can support real service enquiries, not just act like a brochure.
              That makes this page powerful for your own selling as well.
            </p>

            <ul className="list-check">
              <li>Looks much more serious than a basic product-only website</li>
              <li>Supports urgent lead generation through service intent</li>
              <li>Makes the client business look more experienced and capable</li>
              <li>Easy to customize by city, business name, and service focus</li>
              <li>Pairs strongly with products, billing, and contact pages</li>
            </ul>

            <div className="btn-row">
              <Link href="/projects/computer/products/" className="btn btn-primary">
                View Products Page
              </Link>
              <Link href="/projects/computer/billing/" className="btn btn-outline">
                View Billing Demo
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <span className="badge">Best Fit Businesses</span>
            <h2 className="title-md">
              Strong for Local Service Businesses That Need Trust and Fast Enquiries
            </h2>
            <p className="text">
              This page is especially powerful for local businesses that solve
              urgent customer problems and want to appear more premium, reliable,
              and ready for both retail and business support work.
            </p>

            <div className="grid-auto-240" style={{ marginTop: 18 }}>
              {bestFit.map((item) => (
                <div key={item} className="card card-pad hover-lift">
                  <p className="text-dark" style={{ fontWeight: 800 }}>
                    {item}
                  </p>
                </div>
              ))}
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