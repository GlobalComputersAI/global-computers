import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Computer Shop Website Demo | Get Website for IT, Repair, CCTV & AMC Business",
  description:
    "Contact page demo for computer shops, laptop dealers, repair centers, CCTV businesses, networking providers, AMC companies, and IT service firms. Built for fast WhatsApp enquiries and lead conversion.",
  keywords: [
    "computer shop contact page",
    "IT business contact page",
    "computer website enquiry",
    "laptop shop contact",
    "CCTV business contact page",
    "IT services enquiry page",
    "computer repair contact page",
    "AMC service contact page",
    "website enquiry WhatsApp",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/computer/contact/",
  },
  openGraph: {
    title:
      "Contact Computer Shop Website Demo | Fast WhatsApp & Call Enquiry",
    description:
      "Premium contact page demo designed for fast lead conversion through WhatsApp and calls for computer and IT businesses.",
    url: "https://globalcomputers.net/projects/computer/contact/",
    type: "website",
    siteName: "Global Computers & IT Solutions",
  },
};

const WHATSAPP_URL =
  "https://wa.me/919752422686?text=Hi%20I%20want%20this%20computer%20shop%20website%20for%20my%20business.%20Please%20share%20details.";
const CALL_URL = "tel:+919752422686";

const benefits = [
  "Custom website with your business name and city",
  "WhatsApp button for direct customer enquiries",
  "Product + service + billing page setup",
  "SEO-friendly structure for local search visibility",
  "Fast delivery and support",
];

const businessTypes = [
  "Computer shops",
  "Laptop dealers",
  "Desktop sellers",
  "Printer businesses",
  "CCTV installation companies",
  "Networking service providers",
  "Repair centers",
  "AMC support providers",
  "IT solution companies",
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <span className="badge">Contact • Enquiry • WhatsApp • Call</span>
          <h1 className="title-lg">
            Contact Us to Get Your Computer Business Website
          </h1>
          <p className="lead">
            This contact page is designed to convert visitors into real leads
            through WhatsApp and direct calls. Perfect for computer shops,
            laptop dealers, repair centers, CCTV businesses, networking
            providers, AMC companies, and IT service firms.
          </p>

          <div className="btn-row">
            <a href={WHATSAPP_URL} className="btn btn-primary">
              Chat on WhatsApp
            </a>
            <a href={CALL_URL} className="btn btn-outline">
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="section-sm">
        <div className="container grid-2 align-center">
          {/* LEFT */}
          <div className="card card-pad-lg">
            <span className="badge">Start Your Website</span>
            <h2 className="title-lg">
              Get This Website for Your Business
            </h2>
            <p className="lead">
              This demo can be fully customized for your business with your
              products, services, city, branding, and contact details.
            </p>

            <ul className="list-check">
              {benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="btn-row">
              <a href={WHATSAPP_URL} className="btn btn-primary">
                Get Website on WhatsApp
              </a>
              <a href={CALL_URL} className="btn btn-outline">
                Talk on Call
              </a>
            </div>

            <div className="chips" style={{ marginTop: 18 }}>
              <span className="chip">Fast Setup</span>
              <span className="chip">Affordable Pricing</span>
              <span className="chip">High Conversion Design</span>
              <span className="chip">Local SEO Ready</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-card">
            <span className="badge">Business Contact</span>
            <h2 className="title-md">
              Direct Contact Details
            </h2>
            <p className="text">
              Reach out directly for quick response, demo discussion, and pricing details.
            </p>

            <div className="grid-2" style={{ marginTop: 18 }}>
              <div className="card card-pad">
                <h3 className="title-sm">Phone</h3>
                <p className="text">+91 97524 22686</p>
              </div>

              <div className="card card-pad">
                <h3 className="title-sm">WhatsApp</h3>
                <p className="text">Instant reply for enquiries</p>
              </div>

              <div className="card card-pad">
                <h3 className="title-sm">Business</h3>
                <p className="text">
                  Global Computers & IT Solutions
                </p>
              </div>

              <div className="card card-pad">
                <h3 className="title-sm">Services</h3>
                <p className="text">
                  Website, IT Hardware, Software, CCTV, AMC
                </p>
              </div>
            </div>

            <div className="btn-row">
              <a href={WHATSAPP_URL} className="btn btn-primary">
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS TYPES */}
      <section className="section-sm">
        <div className="container">
          <div className="card card-pad-lg">
            <div className="section-head center">
              <span className="badge">Best For</span>
              <h2 className="title-lg">
                This Website is Perfect For These Businesses
              </h2>
              <p className="lead">
                If your business falls under any of these categories, this demo
                is highly suitable and easy to customize.
              </p>
            </div>

            <div className="grid-auto-240">
              {businessTypes.map((item) => (
                <div key={item} className="card card-pad hover-lift">
                  <p className="text-dark" style={{ fontWeight: 800 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="btn-row" style={{ justifyContent: "center" }}>
              <a href={WHATSAPP_URL} className="btn btn-primary">
                Start Your Website Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-sm">
        <div className="container">
          <div className="cta-band">
            <div className="grid-2 align-center">
              <div>
                <span
                  className="badge"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    color: "#fff",
                    borderColor: "rgba(255,255,255,0.12)",
                  }}
                >
                  Final Step
                </span>

                <h2 className="title-lg" style={{ marginTop: 18 }}>
                  Ready to Get Your Computer Business Website?
                </h2>

                <p className="lead">
                  Start today and get a modern, professional, high-conversion
                  website for your business that helps you generate more enquiries.
                </p>
              </div>

              <div>
                <div className="btn-row">
                  <a href={WHATSAPP_URL} className="btn btn-outline">
                    WhatsApp Now
                  </a>
                  <a href={CALL_URL} className="btn btn-outline">
                    Call Now
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
                  <h3 className="title-sm" style={{ color: "#fff" }}>
                    Why Act Now?
                  </h3>

                  <ul
                    className="list-clean"
                    style={{ marginTop: 12 }}
                  >
                    <li style={{ color: "#fff" }}>✓ Start getting enquiries faster</li>
                    <li style={{ color: "#fff" }}>✓ Look more professional than competitors</li>
                    <li style={{ color: "#fff" }}>✓ Build long-term business growth</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}