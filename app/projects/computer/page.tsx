import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Computer Shop Website Demo | Laptop, Desktop, Printer, CCTV, Repair & AMC",
  description:
    "Premium computer shop website demo for laptop dealers, desktop sellers, printer shops, CCTV businesses, repair centers, networking providers, AMC companies, and IT solution firms. Built for high trust, local SEO, and WhatsApp lead conversion.",
  keywords: [
    "computer shop website demo",
    "computer store website India",
    "laptop dealer website",
    "desktop shop website",
    "printer shop website demo",
    "computer repair website",
    "AMC service website",
    "CCTV website design",
    "networking company website",
    "IT hardware website",
    "computer business website",
    "WhatsApp lead website",
    "local SEO computer shop",
    "computer shop website Korba",
    "computer store web design",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/computer/",
  },
  openGraph: {
    title:
      "Computer Shop Website Demo | Laptop, Desktop, Printer, CCTV, Repair & AMC",
    description:
      "A premium high-conversion website demo for computer shops and IT businesses with modern UI, strong trust sections, and WhatsApp-first enquiry flow.",
    url: "https://globalcomputers.net/projects/computer/",
    type: "website",
    siteName: "Global Computers & IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Computer Shop Website Demo | Laptop, Desktop, Printer, CCTV, Repair & AMC",
    description:
      "Premium website demo for computer shops, IT hardware sellers, repair centers, AMC providers, CCTV installers, and networking businesses.",
  },
};

const WHATSAPP_URL =
  "https://wa.me/919752422686?text=Hi%20I%20want%20this%20computer%20shop%20website%20demo%20for%20my%20business.%20Please%20share%20price%20and%20delivery%20details.";
const CALL_URL = "tel:+919752422686";

const trustItems = [
  "20+ Years IT Business Trust",
  "Website Starting from ₹5,000 + GST",
  "WhatsApp Lead Ready",
  "Fast Customization & Delivery",
];

const productCategories = [
  {
    title: "Laptops & Business Computers",
    desc: "Show branded laptops, office desktops, assembled PCs, business systems, and custom computer packages in a premium sales-friendly format.",
  },
  {
    title: "Printers, Scanners & Office Devices",
    desc: "Perfect for printer sellers, scanner dealers, cartridge support, refill businesses, and office equipment suppliers.",
  },
  {
    title: "CCTV, Biometric & Security Systems",
    desc: "Display CCTV cameras, biometric machines, access control devices, surveillance packages, and installation solutions.",
  },
  {
    title: "Accessories, UPS & Networking",
    desc: "Promote routers, switches, keyboards, mouse, storage, UPS, Wi-Fi setup, office network accessories, and complete IT bundles.",
  },
];

const serviceBlocks = [
  {
    title: "Laptop & Desktop Repair",
    desc: "Capture high-intent customers searching for urgent repair, speed issues, software problems, hardware replacement, and system troubleshooting.",
  },
  {
    title: "AMC & On-Site IT Support",
    desc: "A strong section for offices, schools, institutes, clinics, and businesses needing reliable annual maintenance and regular support.",
  },
  {
    title: "Printer Installation & Service",
    desc: "Show printer setup, scanner configuration, cartridge service, network printing, and maintenance support for homes and businesses.",
  },
  {
    title: "CCTV & Networking Setup",
    desc: "Sell camera installation, office networking, Wi-Fi setup, DVR/NVR configuration, router setup, and full security deployment.",
  },
  {
    title: "Software & Office Setup",
    desc: "Promote operating system installation, billing software, antivirus setup, data backup, system formatting, and user-ready machine delivery.",
  },
  {
    title: "IT Supply for Business & Government",
    desc: "Build credibility for institutional supply, office hardware setup, PSU-style enquiries, business procurement, and technical support.",
  },
];

const whyThisWorks = [
  {
    title: "Looks Premium and Trustworthy",
    desc: "A local computer shop instantly appears more professional, modern, and reliable when presented with a world-class design and clean structure.",
  },
  {
    title: "Made for Real Enquiries",
    desc: "This homepage is built around calls, WhatsApp actions, trust signals, and clear service positioning so visitors actually contact you.",
  },
  {
    title: "Good for Product + Service Sales",
    desc: "Most computer businesses sell both hardware and service. This page supports both together, which increases conversion chances.",
  },
  {
    title: "Excellent for Local SEO",
    desc: "The structure supports city-based search intent for computer shop, laptop repair, printer service, CCTV setup, and IT support.",
  },
  {
    title: "Easy to Customize for Any Client",
    desc: "You can quickly change business name, city, categories, pricing, brand colors, and contact details for different buyers.",
  },
  {
    title: "High Value Perceived Pricing",
    desc: "The design helps you charge better because it looks like a serious business website instead of a cheap template.",
  },
];

const bestForList = [
  "Computer shops",
  "Laptop dealers",
  "Desktop sellers",
  "Printer & scanner businesses",
  "CCTV installation companies",
  "Networking service providers",
  "Repair centers",
  "AMC & IT support firms",
  "Office IT solution businesses",
  "Business hardware suppliers",
];

const faqs = [
  {
    q: "Who is this computer website demo best for?",
    a: "It is best for computer shops, laptop dealers, desktop sellers, printer shops, CCTV businesses, repair centers, networking providers, AMC companies, and complete IT solution firms.",
  },
  {
    q: "Can this website be customized with my business name and city?",
    a: "Yes. The website can be customized with your business name, logo, city, contact details, product categories, services, and WhatsApp enquiry button.",
  },
  {
    q: "Will this help in getting local leads?",
    a: "Yes. This homepage is structured for strong local trust, better search visibility, and fast action through WhatsApp and direct phone calls.",
  },
  {
    q: "Can this website work for both sales and repair business?",
    a: "Yes. That is one of its strongest points. It is designed for businesses that sell hardware and also provide repair, installation, AMC, and support services.",
  },
];

export default function ComputerHomePage() {
  return (
    <>
      <section className="section">
        <div className="container grid-2-hero align-center">
          <div className="fade-up">
            <span className="badge">Computer Shop • IT Hardware • Repair • AMC • CCTV</span>
            <h1 className="title-xl">
              Premium Computer Shop Website Demo That Builds Trust and Brings More Enquiries
            </h1>
            <p className="lead">
              A high-conversion website demo for computer shops, laptop dealers,
              desktop sellers, printer businesses, CCTV providers, networking
              companies, repair centers, AMC service providers, and complete IT
              solution businesses.
            </p>

            <div className="chips" style={{ marginTop: 18 }}>
              <span className="chip">Laptop & Desktop Sales</span>
              <span className="chip">Printer & Scanner Support</span>
              <span className="chip">CCTV & Networking</span>
              <span className="chip">Repair & AMC Services</span>
            </div>

            <div className="btn-row">
              <a href={WHATSAPP_URL} className="btn btn-primary">
                Get This Website on WhatsApp
              </a>
              <a href={CALL_URL} className="btn btn-outline">
                Call Now
              </a>
              <Link href="/projects/computer/services/" className="btn btn-soft">
                Explore Services
              </Link>
            </div>

            <div className="trust-strip">
              {trustItems.map((item) => (
                <div key={item} className="trust-item">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="hero-card fade-in">
            <div className="section-head">
              <h2 className="title-md">Why this homepage converts strongly</h2>
              <p className="text">
                Most computer businesses need one website that can sell products,
                show services, build trust, and generate direct leads. This demo
                is made exactly for that.
              </p>
            </div>

            <div className="stats-grid">
              <div className="stat-box">
                <strong>20+ Years</strong>
                <span>IT business trust and practical market understanding</span>
              </div>
              <div className="stat-box">
                <strong>₹5,000+</strong>
                <span>Website starting price with strong value perception</span>
              </div>
              <div className="stat-box">
                <strong>1 Day</strong>
                <span>Fast basic customization and quick launch flow</span>
              </div>
              <div className="stat-box">
                <strong>High Intent</strong>
                <span>Best for product + service + support based enquiries</span>
              </div>
            </div>

            <div className="card card-pad" style={{ marginTop: 20 }}>
              <h3 className="title-sm">This helps your customer say yes because:</h3>
              <ul className="list-check">
                <li>It makes even a local shop look professional and premium</li>
                <li>It supports both retail sales and B2B service enquiries</li>
                <li>It is clear, modern, and easy for visitors to understand</li>
                <li>It pushes fast action through WhatsApp and calls</li>
                <li>It feels valuable enough for you to charge confidently</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="card card-pad-lg hover-lift">
            <div className="section-head center">
              <span className="badge">What This Demo Can Sell</span>
              <h2 className="title-lg">One Website for Complete Computer Business Presentation</h2>
              <p className="lead">
                This homepage is designed to present all major product and IT
                business categories in a clean, premium, highly saleable format.
              </p>
            </div>

            <div className="grid-4">
              {productCategories.map((item) => (
                <div key={item.title} className="card card-pad hover-lift">
                  <h3 className="title-sm">{item.title}</h3>
                  <p className="text">{item.desc}</p>
                  <div style={{ marginTop: 14 }}>
                    <span className="price-chip">High Sales Potential</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="btn-row" style={{ justifyContent: "center" }}>
              <Link href="/projects/computer/products/" className="btn btn-primary">
                View Products Page
              </Link>
              <a href={WHATSAPP_URL} className="btn btn-outline">
                Ask Price on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container grid-2 align-center">
          <div className="card card-pad-lg hover-lift">
            <span className="badge">Best Revenue Driver</span>
            <h2 className="title-lg">Service Sections Bring High-Intent Leads Fast</h2>
            <p className="lead">
              Many customers search for repair, support, AMC, printer setup,
              networking, CCTV installation, and urgent IT help. That is why
              service positioning is one of the biggest conversion drivers for a
              computer business website.
            </p>

            <ul className="list-check">
              <li>Repair searches often convert faster than general product browsing</li>
              <li>AMC and support pages attract office and business clients</li>
              <li>Printer and networking services build recurring revenue trust</li>
              <li>CCTV and installation services increase ticket value</li>
              <li>Good service positioning makes your website look more complete</li>
            </ul>

            <div className="btn-row">
              <Link href="/projects/computer/services/" className="btn btn-primary">
                View Services
              </Link>
              <a href={CALL_URL} className="btn btn-outline">
                Call for Demo
              </a>
            </div>
          </div>

          <div className="grid-auto-280">
            {serviceBlocks.map((item) => (
              <div key={item.title} className="card card-pad hover-lift">
                <h3 className="title-sm">{item.title}</h3>
                <p className="text">{item.desc}</p>
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
                <span className="badge" style={{ background: "rgba(255,255,255,0.12)", color: "#fff", borderColor: "rgba(255,255,255,0.12)" }}>
                  High Conversion Website Demo
                </span>
                <h2 className="title-lg" style={{ marginTop: 18 }}>
                  Want this same premium website for your computer or IT business?
                </h2>
                <p className="lead">
                  Ideal for computer shops, laptop dealers, printer sellers, CCTV
                  installers, networking providers, repair centers, AMC support
                  businesses, and complete IT solution companies.
                </p>
              </div>

              <div>
                <div className="btn-row">
                  <a href={WHATSAPP_URL} className="btn btn-outline">
                    Get This Website Now
                  </a>
                  <a href={CALL_URL} className="btn btn-outline">
                    Talk on Call
                  </a>
                </div>

                <div className="card card-pad" style={{ marginTop: 18, background: "rgba(255,255,255,0.12)", borderColor: "rgba(255,255,255,0.14)" }}>
                  <h3 className="title-sm" style={{ color: "#fff" }}>
                    Perfect for:
                  </h3>
                  <ul
                    className="list-clean"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, minmax(0,1fr))",
                      gap: 10,
                      marginTop: 14,
                    }}
                  >
                    {bestForList.slice(0, 8).map((item) => (
                      <li
                        key={item}
                        style={{
                          color: "rgba(255,255,255,0.86)",
                          fontWeight: 700,
                          lineHeight: 1.6,
                        }}
                      >
                        ✓ {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="section-head center">
            <span className="badge">Why This Works for You</span>
            <h2 className="title-lg">This Homepage Helps You Sell Better and Charge Better</h2>
            <p className="lead">
              A strong demo should not just look nice. It should increase trust,
              improve lead flow, and help you position yourself as a serious
              provider of website and IT business solutions.
            </p>
          </div>

          <div className="grid-3">
            {whyThisWorks.map((item) => (
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
          <div className="hero-card">
            <span className="badge">Business Positioning</span>
            <h2 className="title-lg">A Website That Works for Retail, Service, and Business Clients</h2>
            <p className="lead">
              The best part of this niche is that one strong website can attract
              retail customers, office clients, institutions, and service-related
              enquiries together. That makes this demo more practical and more
              profitable than many other local business demos.
            </p>

            <div className="chips" style={{ marginTop: 18 }}>
              <span className="chip">Retail Customers</span>
              <span className="chip">Office Buyers</span>
              <span className="chip">Repair Enquiries</span>
              <span className="chip">AMC Clients</span>
              <span className="chip">CCTV Projects</span>
              <span className="chip">Networking Setup</span>
            </div>

            <div className="btn-row">
              <Link href="/projects/computer/contact/" className="btn btn-primary">
                Contact Us
              </Link>
              <Link href="/projects/computer/billing/" className="btn btn-outline">
                View Billing Demo
              </Link>
            </div>
          </div>

          <div className="card card-pad-lg">
            <h3 className="title-md">Best fit business types</h3>
            <div className="grid-auto-240" style={{ marginTop: 18 }}>
              {bestForList.map((item) => (
                <div key={item} className="card card-pad hover-lift">
                  <p className="text-dark" style={{ fontWeight: 800 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="card card-pad-lg">
            <div className="section-head center">
              <span className="badge">FAQ</span>
              <h2 className="title-lg">Frequently Asked Questions</h2>
              <p className="lead">
                These common questions also help with SEO, clarity, and customer confidence.
              </p>
            </div>

            <div className="grid-2">
              {faqs.map((item) => (
                <div key={item.q} className="card card-pad hover-lift">
                  <h3 className="title-sm">{item.q}</h3>
                  <p className="text">{item.a}</p>
                </div>
              ))}
            </div>

            <div className="btn-row" style={{ justifyContent: "center" }}>
              <a href={WHATSAPP_URL} className="btn btn-primary">
                Ask on WhatsApp
              </a>
              <a href={CALL_URL} className="btn btn-outline">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}