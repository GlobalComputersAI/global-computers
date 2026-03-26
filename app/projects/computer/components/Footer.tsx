import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/919752422686?text=Hi%20I%20want%20this%20computer%20shop%20website%20demo%20for%20my%20business.%20Please%20share%20price%20and%20delivery%20details.";
const CALL_URL = "tel:+919752422686";

const navLinks = [
  { label: "Home", href: "/projects/computer/" },
  { label: "Products", href: "/projects/computer/products/" },
  { label: "Services", href: "/projects/computer/services/" },
  { label: "Billing", href: "/projects/computer/billing/" },
  { label: "Contact", href: "/projects/computer/contact/" },
];

const serviceLinks = [
  "Computer Shop Website",
  "Laptop & Desktop Dealer Website",
  "Printer & CCTV Business Website",
  "Repair & Service Center Website",
  "AMC & IT Support Website",
  "Billing Software + Website Setup",
];

export default function Footer() {
  return (
    <>
      <style>{`
        .gc-footer{
          padding:72px 0 24px;
          background:
            radial-gradient(circle at top left, rgba(37,99,235,.08), transparent 18%),
            radial-gradient(circle at top right, rgba(15,23,42,.07), transparent 20%),
            linear-gradient(180deg, #f8fafc 0%, #eef2f7 100%);
          border-top:1px solid rgba(15,23,42,.06);
        }

        .gc-footer-container{
          max-width:1280px;
          margin:0 auto;
          padding:0 16px;
        }

        .gc-footer-cta{
          position:relative;
          overflow:hidden;
          border-radius:32px;
          padding:34px;
          background:
            radial-gradient(circle at top right, rgba(96,165,250,.26), transparent 24%),
            linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
          color:#fff;
          box-shadow:0 28px 70px rgba(15,23,42,.18);
        }

        .gc-footer-cta-grid{
          display:grid;
          grid-template-columns:1.1fr .9fr;
          gap:24px;
          align-items:center;
        }

        .gc-footer-kicker{
          display:inline-flex;
          align-items:center;
          gap:8px;
          padding:10px 14px;
          border-radius:999px;
          background:rgba(255,255,255,.12);
          border:1px solid rgba(255,255,255,.12);
          font-size:12px;
          font-weight:900;
          letter-spacing:.02em;
          text-transform:uppercase;
        }

        .gc-footer-cta h2{
          margin:16px 0 12px;
          font-size:clamp(30px, 4vw, 48px);
          line-height:1.06;
          font-weight:900;
          letter-spacing:-.03em;
        }

        .gc-footer-cta p{
          margin:0;
          color:rgba(255,255,255,.86);
          font-size:17px;
          line-height:1.8;
          max-width:760px;
        }

        .gc-footer-cta-points{
          display:grid;
          grid-template-columns:repeat(2, minmax(0,1fr));
          gap:12px;
          margin-top:22px;
        }

        .gc-footer-point{
          display:flex;
          gap:10px;
          align-items:flex-start;
          padding:14px 16px;
          border-radius:18px;
          background:rgba(255,255,255,.10);
          border:1px solid rgba(255,255,255,.10);
          font-size:14px;
          font-weight:800;
          color:#fff;
        }

        .gc-footer-actions{
          display:grid;
          gap:12px;
        }

        .gc-footer-btn{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          min-height:54px;
          padding:0 20px;
          border-radius:16px;
          font-size:15px;
          font-weight:900;
          text-decoration:none;
          transition:all .25s ease;
          text-align:center;
        }

        .gc-footer-btn-primary{
          background:#ffffff;
          color:#0f172a;
          box-shadow:0 16px 34px rgba(0,0,0,.16);
        }

        .gc-footer-btn-primary:hover{
          transform:translateY(-2px);
        }

        .gc-footer-btn-outline{
          background:transparent;
          color:#fff;
          border:1px solid rgba(255,255,255,.2);
        }

        .gc-footer-btn-outline:hover{
          background:rgba(255,255,255,.08);
          transform:translateY(-2px);
        }

        .gc-footer-trust{
          display:grid;
          grid-template-columns:repeat(3, 1fr);
          gap:14px;
          margin-top:18px;
        }

        .gc-footer-trust-box{
          padding:16px;
          border-radius:18px;
          background:rgba(255,255,255,.1);
          border:1px solid rgba(255,255,255,.1);
          text-align:center;
        }

        .gc-footer-trust-box strong{
          display:block;
          font-size:20px;
          font-weight:900;
          color:#fff;
        }

        .gc-footer-trust-box span{
          display:block;
          margin-top:4px;
          font-size:12px;
          font-weight:700;
          color:rgba(255,255,255,.78);
          line-height:1.45;
        }

        .gc-footer-main{
          margin-top:24px;
          padding:28px;
          border-radius:28px;
          background:rgba(255,255,255,.88);
          border:1px solid rgba(15,23,42,.07);
          box-shadow:0 20px 50px rgba(15,23,42,.07);
          backdrop-filter:blur(12px);
          -webkit-backdrop-filter:blur(12px);
        }

        .gc-footer-grid{
          display:grid;
          grid-template-columns:1.25fr .75fr .9fr 1.1fr;
          gap:24px;
        }

        .gc-footer-brand{
          display:flex;
          align-items:flex-start;
          gap:14px;
        }

        .gc-footer-brand-badge{
          width:58px;
          height:58px;
          border-radius:18px;
          background:
            radial-gradient(circle at top left, rgba(59,130,246,.35), transparent 42%),
            linear-gradient(135deg, #0f172a 0%, #2563eb 100%);
          color:#fff;
          display:grid;
          place-items:center;
          font-size:22px;
          font-weight:900;
          flex-shrink:0;
          box-shadow:0 18px 34px rgba(37,99,235,.22);
        }

        .gc-footer-brand h3{
          margin:0;
          font-size:22px;
          font-weight:900;
          color:#0f172a;
          letter-spacing:-.02em;
        }

        .gc-footer-brand h3 span{
          color:#2563eb;
        }

        .gc-footer-brand p{
          margin:10px 0 0;
          color:#64748b;
          line-height:1.85;
          font-size:15px;
        }

        .gc-footer-col h4{
          margin:0 0 14px;
          font-size:16px;
          font-weight:900;
          color:#0f172a;
        }

        .gc-footer-list{
          display:grid;
          gap:10px;
          margin:0;
          padding:0;
          list-style:none;
        }

        .gc-footer-list a,
        .gc-footer-list li{
          color:#475569;
          font-size:14px;
          line-height:1.7;
          font-weight:700;
        }

        .gc-footer-list a:hover{
          color:#2563eb;
        }

        .gc-footer-contact-card{
          display:grid;
          gap:12px;
        }

        .gc-footer-contact-box{
          padding:14px 16px;
          border-radius:18px;
          background:linear-gradient(180deg, #fff 0%, #f8fafc 100%);
          border:1px solid rgba(15,23,42,.06);
        }

        .gc-footer-contact-box strong{
          display:block;
          margin-bottom:6px;
          font-size:13px;
          font-weight:900;
          color:#0f172a;
          text-transform:uppercase;
          letter-spacing:.03em;
        }

        .gc-footer-contact-box span,
        .gc-footer-contact-box a{
          color:#475569;
          font-size:14px;
          font-weight:800;
          line-height:1.7;
        }

        .gc-footer-bottom{
          margin-top:22px;
          padding-top:18px;
          border-top:1px solid rgba(15,23,42,.08);
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:14px;
          flex-wrap:wrap;
        }

        .gc-footer-bottom p{
          margin:0;
          color:#64748b;
          font-size:13px;
          font-weight:700;
          line-height:1.7;
        }

        .gc-footer-bottom-links{
          display:flex;
          flex-wrap:wrap;
          gap:12px;
        }

        .gc-footer-bottom-links a{
          color:#475569;
          font-size:13px;
          font-weight:800;
        }

        .gc-footer-bottom-links a:hover{
          color:#2563eb;
        }

        @media (max-width: 1100px){
          .gc-footer-grid{
            grid-template-columns:1fr 1fr;
          }
        }

        @media (max-width: 980px){
          .gc-footer-cta-grid{
            grid-template-columns:1fr;
          }
          .gc-footer-trust{
            grid-template-columns:1fr;
          }
        }

        @media (max-width: 720px){
          .gc-footer{
            padding-top:56px;
          }
          .gc-footer-cta{
            padding:24px;
            border-radius:24px;
          }
          .gc-footer-cta-points{
            grid-template-columns:1fr;
          }
          .gc-footer-main{
            padding:22px;
            border-radius:22px;
          }
          .gc-footer-grid{
            grid-template-columns:1fr;
          }
          .gc-footer-bottom{
            flex-direction:column;
            align-items:flex-start;
          }
        }
      `}</style>

      <footer className="gc-footer">
        <div className="gc-footer-container">
          <section className="gc-footer-cta">
            <div className="gc-footer-cta-grid">
              <div>
                <div className="gc-footer-kicker">Computer Shop Website Demo</div>
                <h2>Want this same premium website for your computer or IT business?</h2>
                <p>
                  Perfect for computer shops, laptop dealers, desktop sellers,
                  printer businesses, CCTV installers, networking providers,
                  repair centers, AMC companies, and complete IT solution firms.
                </p>

                <div className="gc-footer-cta-points">
                  <div className="gc-footer-point">
                    <span>✓</span>
                    <span>High-conversion design with strong WhatsApp lead flow</span>
                  </div>
                  <div className="gc-footer-point">
                    <span>✓</span>
                    <span>Premium trust-building layout for local and business clients</span>
                  </div>
                  <div className="gc-footer-point">
                    <span>✓</span>
                    <span>Easy customization with your business name, city, and services</span>
                  </div>
                  <div className="gc-footer-point">
                    <span>✓</span>
                    <span>Best for sales, repair, AMC, CCTV, networking, and IT support</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="gc-footer-actions">
                  <a href={WHATSAPP_URL} className="gc-footer-btn gc-footer-btn-primary">
                    Get This Website on WhatsApp
                  </a>
                  <a href={CALL_URL} className="gc-footer-btn gc-footer-btn-outline">
                    Call Now for Demo
                  </a>
                </div>

                <div className="gc-footer-trust">
                  <div className="gc-footer-trust-box">
                    <strong>20+ Years</strong>
                    <span>Trusted IT business experience</span>
                  </div>
                  <div className="gc-footer-trust-box">
                    <strong>₹5,000+</strong>
                    <span>Website starting price</span>
                  </div>
                  <div className="gc-footer-trust-box">
                    <strong>Fast Delivery</strong>
                    <span>Quick setup & customization</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="gc-footer-main">
            <div className="gc-footer-grid">
              <div>
                <div className="gc-footer-brand">
                  <div className="gc-footer-brand-badge">TS</div>
                  <div>
                    <h3>
                      Tech<span>Store</span>
                    </h3>
                    <p>
                      A premium computer shop website demo built to help local
                      computer businesses look modern, trustworthy, and
                      conversion-ready. This design works well for retail sales,
                      B2B supply, repair services, AMC contracts, CCTV projects,
                      printer businesses, and complete IT solution providers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gc-footer-col">
                <h4>Quick Links</h4>
                <ul className="gc-footer-list">
                  {navLinks.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="gc-footer-col">
                <h4>Best For</h4>
                <ul className="gc-footer-list">
                  {serviceLinks.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="gc-footer-col">
                <h4>Contact & Sales</h4>
                <div className="gc-footer-contact-card">
                  <div className="gc-footer-contact-box">
                    <strong>Business</strong>
                    <span>Global Computers & IT Solutions</span>
                  </div>

                  <div className="gc-footer-contact-box">
                    <strong>Call</strong>
                    <a href={CALL_URL}>+91 97524 22686</a>
                  </div>

                  <div className="gc-footer-contact-box">
                    <strong>WhatsApp</strong>
                    <a href={WHATSAPP_URL}>Start instant enquiry</a>
                  </div>

                  <div className="gc-footer-contact-box">
                    <strong>Focus</strong>
                    <span>
                      Website Development, IT Hardware Supply, Software,
                      Networking, CCTV, AMC & Business IT Solutions
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="gc-footer-bottom">
              <p>
                © 2026 Global Computers & IT Solutions. Premium website demo for
                computer shops, IT hardware sellers, repair businesses, printer
                dealers, CCTV providers, AMC providers, and IT service companies.
              </p>

              <div className="gc-footer-bottom-links">
                <Link href="/projects/computer/">Computer Demo</Link>
                <Link href="/projects/computer/services/">IT Services</Link>
                <Link href="/projects/computer/contact/">Contact</Link>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}