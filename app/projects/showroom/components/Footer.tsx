import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/919752422686?text=Hi%20I%20want%20a%20premium%20showroom%20website%20with%20products%2C%20offers%2C%20billing%20and%20contact%20pages.";
const CALL_URL = "tel:+919752422686";

export default function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(180deg, rgba(8,8,8,1) 0%, rgba(15,15,15,1) 100%)",
        color: "#fff",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        marginTop: "64px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "28px 16px 0",
        }}
      >
        <div
          className="showroom-footer-cta-box"
          style={{
            borderRadius: "28px",
            padding: "28px",
            background:
              "linear-gradient(135deg, rgba(202,167,74,0.14), rgba(255,255,255,0.06))",
            border: "1px solid rgba(202,167,74,0.24)",
            display: "flex",
            justifyContent: "space-between",
            gap: "18px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                color: "#e6cf7a",
                fontWeight: 900,
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Ready to launch
            </p>
            <h3
              style={{
                margin: "8px 0 10px",
                fontSize: "30px",
                lineHeight: 1.1,
                letterSpacing: "-0.6px",
              }}
            >
              Want this premium showroom website for your business?
            </h3>
            <p
              style={{
                margin: 0,
                color: "rgba(255,255,255,0.78)",
                maxWidth: "760px",
                lineHeight: 1.8,
                fontSize: "15px",
              }}
            >
              Get a high-conversion showroom website with premium UI, product pages,
              offers section, contact page, billing setup, WhatsApp integration,
              and fast customization for your brand.
            </p>
          </div>

          <div
            className="showroom-footer-cta-actions"
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                minHeight: "50px",
                padding: "0 22px",
                borderRadius: "999px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "linear-gradient(135deg, #caa74a 0%, #f2dd95 50%, #b88f2e 100%)",
                color: "#111",
                fontWeight: 900,
                boxShadow: "0 12px 30px rgba(202,167,74,0.25)",
              }}
            >
              Get Quote on WhatsApp
            </a>

            <a
              href={CALL_URL}
              style={{
                textDecoration: "none",
                minHeight: "50px",
                padding: "0 22px",
                borderRadius: "999px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(255,255,255,0.16)",
                color: "#fff",
                fontWeight: 800,
                background: "rgba(255,255,255,0.05)",
              }}
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "54px 16px 26px",
        }}
      >
        <div className="footer-grid-main">
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "18px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, #caa74a 0%, #f3df9a 50%, #b88f2e 100%)",
                  color: "#111",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "18px",
                }}
              >
                SL
              </div>
              <div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "22px",
                    fontWeight: 900,
                    letterSpacing: "-0.4px",
                  }}
                >
                  Showroom<span style={{ color: "#e6cf7a" }}>Luxe</span>
                </h3>
                <p
                  style={{
                    margin: "5px 0 0",
                    color: "rgba(255,255,255,0.68)",
                    fontSize: "13px",
                    fontWeight: 700,
                  }}
                >
                  Premium UI • Better Sales • Strong Trust
                </p>
              </div>
            </div>

            <p
              style={{
                margin: 0,
                color: "rgba(255,255,255,0.78)",
                lineHeight: 1.9,
                fontSize: "15px",
              }}
            >
              A premium showroom website demo by Global Computers & IT Solutions.
              Designed to help brands look modern, trusted, luxurious, and ready to
              convert visitors into real customers.
            </p>
          </div>

          <div>
            <h4
              style={{
                marginTop: 0,
                marginBottom: "16px",
                fontSize: "18px",
                fontWeight: 900,
                color: "#fff",
              }}
            >
              Quick Links
            </h4>

            <div
              style={{
                display: "grid",
                gap: "12px",
              }}
            >
              <Link href="/projects/showroom" style={linkStyle}>
                Home
              </Link>
              <Link href="/projects/showroom/products" style={linkStyle}>
                Products
              </Link>
              <Link href="/projects/showroom/offers" style={linkStyle}>
                Offers
              </Link>
              <Link href="/projects/showroom/billing" style={linkStyle}>
                Billing
              </Link>
              <Link href="/projects/showroom/contact" style={linkStyle}>
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4
              style={{
                marginTop: 0,
                marginBottom: "16px",
                fontSize: "18px",
                fontWeight: 900,
                color: "#fff",
              }}
            >
              Why This Website Sells
            </h4>

            <ul
              style={{
                margin: 0,
                paddingLeft: "18px",
                color: "rgba(255,255,255,0.78)",
                lineHeight: 2,
                fontSize: "15px",
              }}
            >
              <li>Premium first impression</li>
              <li>Strong showroom branding</li>
              <li>WhatsApp enquiry flow</li>
              <li>Product display pages</li>
              <li>Offers and promotions section</li>
              <li>Billing page for trust</li>
            </ul>
          </div>

          <div>
            <h4
              style={{
                marginTop: 0,
                marginBottom: "16px",
                fontSize: "18px",
                fontWeight: 900,
                color: "#fff",
              }}
            >
              Contact Now
            </h4>

            <div
              style={{
                display: "grid",
                gap: "12px",
              }}
            >
              <a href={CALL_URL} style={contactBoxStyle}>
                📞 +91 97524 22686
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                style={contactBoxStyle}
              >
                💬 Chat on WhatsApp
              </a>

              <Link href="/contact-us" style={contactBoxStyle}>
                📍 Global Computers & IT Solutions
              </Link>
            </div>
          </div>
        </div>

        <div
          className="showroom-footer-bottom"
          style={{
            marginTop: "34px",
            paddingTop: "18px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            justifyContent: "space-between",
            gap: "14px",
            flexWrap: "wrap",
            color: "rgba(255,255,255,0.62)",
            fontSize: "14px",
          }}
        >
          <p style={{ margin: 0 }}>
            © 2026 ShowroomLuxe Demo • Global Computers & IT Solutions
          </p>
          <p style={{ margin: 0 }}>
            Website Design • Billing • SEO • WhatsApp Integration
          </p>
        </div>
      </div>
    </footer>
  );
}

const linkStyle = {
  color: "rgba(255,255,255,0.78)",
  textDecoration: "none",
  fontSize: "15px",
  fontWeight: 700,
} as const;

const contactBoxStyle = {
  textDecoration: "none",
  color: "#fff",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "16px",
  padding: "14px 16px",
  fontWeight: 700,
  fontSize: "15px",
  display: "block",
} as const;