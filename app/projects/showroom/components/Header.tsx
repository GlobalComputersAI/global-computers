"use client";

import Link from "next/link";
import { useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/919752422686?text=Hi%20I%20want%20a%20premium%20showroom%20website%20for%20my%20business.%20Please%20share%20price%20and%20demo%20details.";
const CALL_URL = "tel:+919752422686";

const navItems = [
  { href: "/projects/showroom", label: "Home" },
  { href: "/projects/showroom/products", label: "Products" },
  { href: "/projects/showroom/offers", label: "Offers" },
  { href: "/projects/showroom/billing", label: "Billing" },
  { href: "/projects/showroom/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(14px)",
        background:
          "linear-gradient(180deg, rgba(10,10,10,0.92), rgba(10,10,10,0.78))",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(90deg, #caa74a 0%, #e6cf7a 50%, #caa74a 100%)",
          color: "#111",
          fontSize: "12px",
          fontWeight: 800,
          letterSpacing: "0.3px",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "8px 16px",
            display: "flex",
            justifyContent: "space-between",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <span>Premium Showroom Website Demo</span>
          <span>Website Starting ₹5,000 + GST • SEO Setup Free</span>
          <span>WhatsApp Leads • Fast Setup • Modern UI</span>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <Link
          href="/projects/showroom"
          aria-label="Showroom website home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
            color: "#fff",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "46px",
              height: "46px",
              borderRadius: "14px",
              background:
                "linear-gradient(135deg, #caa74a 0%, #f3df9a 50%, #b88f2e 100%)",
              color: "#111",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: "18px",
              boxShadow: "0 10px 25px rgba(202,167,74,0.30)",
            }}
          >
            SL
          </div>

          <div style={{ lineHeight: 1.05 }}>
            <div
              style={{
                fontSize: "20px",
                fontWeight: 900,
                letterSpacing: "-0.4px",
              }}
            >
              Showroom<span style={{ color: "#e6cf7a" }}>Luxe</span>
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "rgba(255,255,255,0.72)",
                fontWeight: 700,
                marginTop: "4px",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Premium Display • Better Conversion
            </div>
          </div>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="showroom-desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                color: "rgba(255,255,255,0.88)",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "15px",
                transition: "0.25s ease",
                whiteSpace: "nowrap",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div
          className="showroom-desktop-cta"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexShrink: 0,
          }}
        >
          <a
            href={CALL_URL}
            style={{
              textDecoration: "none",
              minHeight: "46px",
              padding: "0 18px",
              borderRadius: "999px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.16)",
              color: "#fff",
              fontWeight: 800,
              fontSize: "14px",
              background: "rgba(255,255,255,0.05)",
              whiteSpace: "nowrap",
            }}
          >
            Call Now
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              minHeight: "46px",
              padding: "0 20px",
              borderRadius: "999px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(135deg, #caa74a 0%, #f2dd95 50%, #b88f2e 100%)",
              color: "#111",
              fontWeight: 900,
              fontSize: "14px",
              boxShadow: "0 12px 30px rgba(202,167,74,0.26)",
              whiteSpace: "nowrap",
            }}
          >
            Get Demo on WhatsApp
          </a>
        </div>

        <button
          type="button"
          aria-label="Open mobile menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="showroom-mobile-button"
          style={{
            width: "46px",
            height: "46px",
            borderRadius: "14px",
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.05)",
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <span
            style={{
              width: "18px",
              height: "2px",
              background: "#fff",
              borderRadius: "999px",
              display: "block",
            }}
          />
          <span
            style={{
              width: "18px",
              height: "2px",
              background: "#fff",
              borderRadius: "999px",
              display: "block",
            }}
          />
          <span
            style={{
              width: "18px",
              height: "2px",
              background: "#fff",
              borderRadius: "999px",
              display: "block",
            }}
          />
        </button>
      </div>

      {menuOpen && (
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(12,12,12,0.97)",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "18px 16px 22px",
              display: "grid",
              gap: "12px",
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "15px",
                  padding: "10px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {item.label}
              </Link>
            ))}

            <div
              style={{
                display: "grid",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              <a
                href={CALL_URL}
                style={{
                  textDecoration: "none",
                  minHeight: "48px",
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

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  minHeight: "50px",
                  borderRadius: "999px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(135deg, #caa74a 0%, #f2dd95 50%, #b88f2e 100%)",
                  color: "#111",
                  fontWeight: 900,
                }}
              >
                Get Demo on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}