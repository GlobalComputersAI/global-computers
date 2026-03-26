"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/919752422686?text=Hi%20I%20want%20a%20computer%20shop%20website%20demo%20for%20my%20business.%20Please%20share%20details.";
const CALL_URL = "tel:+919752422686";

const navLinks = [
  { label: "Home", href: "/projects/computer/" },
  { label: "Products", href: "/projects/computer/products/" },
  { label: "Services", href: "/projects/computer/services/" },
  { label: "Billing", href: "/projects/computer/billing/" },
  { label: "Contact", href: "/projects/computer/contact/" },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <>
      <style>{`
        .gc-header-root{
          position:sticky;
          top:0;
          z-index:1000;
        }

        .gc-topbar{
          background: linear-gradient(90deg, #0f172a 0%, #1e293b 100%);
          color:#fff;
          border-bottom:1px solid rgba(255,255,255,0.08);
        }

        .gc-topbar-inner{
          max-width:1280px;
          margin:0 auto;
          padding:8px 16px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:12px;
          flex-wrap:wrap;
          font-size:12px;
          font-weight:700;
          letter-spacing:.01em;
        }

        .gc-topbar-left,
        .gc-topbar-right{
          display:flex;
          align-items:center;
          gap:14px;
          flex-wrap:wrap;
        }

        .gc-top-chip{
          display:inline-flex;
          align-items:center;
          gap:6px;
          color:rgba(255,255,255,.92);
          white-space:nowrap;
        }

        .gc-navbar-wrap{
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom:1px solid rgba(15,23,42,0.07);
          transition: all .25s ease;
          box-shadow: 0 8px 30px rgba(15,23,42,0.04);
        }

        .gc-navbar-wrap.scrolled{
          background: rgba(255,255,255,0.96);
          box-shadow: 0 16px 40px rgba(15,23,42,0.08);
        }

        .gc-navbar{
          max-width:1280px;
          margin:0 auto;
          padding:14px 16px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:18px;
        }

        .gc-brand{
          display:flex;
          align-items:center;
          gap:14px;
          min-width:0;
        }

        .gc-brand-badge{
          width:52px;
          height:52px;
          border-radius:18px;
          background:
            radial-gradient(circle at top left, rgba(59,130,246,.35), transparent 40%),
            linear-gradient(135deg, #0f172a 0%, #2563eb 100%);
          color:#fff;
          display:grid;
          place-items:center;
          font-size:22px;
          font-weight:900;
          box-shadow: 0 16px 34px rgba(37,99,235,.22);
          flex-shrink:0;
        }

        .gc-brand-text{
          min-width:0;
        }

        .gc-brand-title{
          font-size:20px;
          font-weight:900;
          line-height:1.05;
          color:#0f172a;
          letter-spacing:-0.02em;
          margin:0;
        }

        .gc-brand-title span{
          color:#2563eb;
        }

        .gc-brand-subtitle{
          margin-top:4px;
          font-size:12px;
          color:#64748b;
          font-weight:700;
          white-space:nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
        }

        .gc-nav-desktop{
          display:none;
          align-items:center;
          gap:28px;
        }

        .gc-nav-links{
          display:flex;
          align-items:center;
          gap:6px;
          padding:6px;
          border-radius:999px;
          background:rgba(248,250,252,.9);
          border:1px solid rgba(15,23,42,.06);
        }

        .gc-nav-link{
          padding:12px 16px;
          border-radius:999px;
          color:#0f172a;
          font-size:14px;
          font-weight:800;
          transition:all .2s ease;
          white-space:nowrap;
        }

        .gc-nav-link:hover{
          background:#ffffff;
          color:#2563eb;
          box-shadow:0 8px 20px rgba(15,23,42,.06);
        }

        .gc-actions{
          display:flex;
          align-items:center;
          gap:10px;
        }

        .gc-btn{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          min-height:48px;
          padding:0 18px;
          border-radius:14px;
          font-size:14px;
          font-weight:900;
          text-decoration:none;
          transition:all .25s ease;
          white-space:nowrap;
        }

        .gc-btn-outline{
          border:1px solid rgba(15,23,42,.12);
          background:#fff;
          color:#0f172a;
          box-shadow:0 8px 20px rgba(15,23,42,.04);
        }

        .gc-btn-outline:hover{
          transform:translateY(-1px);
          border-color:rgba(37,99,235,.25);
          color:#2563eb;
        }

        .gc-btn-primary{
          border:1px solid transparent;
          background:linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          color:#fff;
          box-shadow:0 16px 32px rgba(37,99,235,.28);
        }

        .gc-btn-primary:hover{
          transform:translateY(-2px);
          box-shadow:0 20px 40px rgba(37,99,235,.34);
        }

        .gc-mobile-toggle{
          display:inline-flex;
          width:48px;
          height:48px;
          align-items:center;
          justify-content:center;
          border-radius:14px;
          border:1px solid rgba(15,23,42,.1);
          background:#fff;
          color:#0f172a;
          cursor:pointer;
          box-shadow:0 8px 20px rgba(15,23,42,.05);
        }

        .gc-mobile-toggle:hover{
          color:#2563eb;
        }

        .gc-mobile-panel{
          max-width:1280px;
          margin:0 auto;
          padding:0 16px 16px;
        }

        .gc-mobile-card{
          background:rgba(255,255,255,.98);
          border:1px solid rgba(15,23,42,.08);
          border-radius:24px;
          box-shadow:0 24px 60px rgba(15,23,42,.12);
          padding:18px;
        }

        .gc-mobile-links{
          display:grid;
          gap:8px;
        }

        .gc-mobile-link{
          display:flex;
          align-items:center;
          justify-content:space-between;
          min-height:52px;
          padding:0 16px;
          border-radius:16px;
          background:#f8fafc;
          border:1px solid rgba(15,23,42,.06);
          color:#0f172a;
          font-weight:800;
          font-size:15px;
        }

        .gc-mobile-link:hover{
          background:#fff;
          color:#2563eb;
        }

        .gc-mobile-actions{
          display:grid;
          gap:10px;
          margin-top:14px;
        }

        .gc-mini-strip{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:10px;
          margin-top:16px;
        }

        .gc-mini-box{
          padding:12px 10px;
          border-radius:16px;
          background:linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          border:1px solid rgba(15,23,42,.06);
          text-align:center;
        }

        .gc-mini-box strong{
          display:block;
          color:#0f172a;
          font-size:14px;
          font-weight:900;
        }

        .gc-mini-box span{
          display:block;
          margin-top:4px;
          color:#64748b;
          font-size:11px;
          font-weight:700;
          line-height:1.35;
        }

        @media (min-width: 1024px){
          .gc-nav-desktop{
            display:flex;
          }
          .gc-mobile-toggle{
            display:none;
          }
        }

        @media (max-width: 1023px){
          .gc-topbar-inner{
            justify-content:center;
          }
        }

        @media (max-width: 640px){
          .gc-topbar{
            display:none;
          }
          .gc-brand-title{
            font-size:18px;
          }
          .gc-brand-subtitle{
            white-space:normal;
          }
          .gc-mini-strip{
            grid-template-columns:1fr;
          }
        }
      `}</style>

      <header className="gc-header-root">
        <div className="gc-topbar">
          <div className="gc-topbar-inner">
            <div className="gc-topbar-left">
              <span className="gc-top-chip">✓ Laptop • Desktop • Printer • CCTV</span>
              <span className="gc-top-chip">✓ Repair • Networking • AMC Support</span>
            </div>
            <div className="gc-topbar-right">
              <span className="gc-top-chip">✓ Sales-Focused Demo Website</span>
              <span className="gc-top-chip">✓ WhatsApp Lead Ready</span>
            </div>
          </div>
        </div>

        <div className={cn("gc-navbar-wrap", scrolled && "scrolled")}>
          <div className="gc-navbar">
            <Link
              href="/projects/computer/"
              className="gc-brand"
              aria-label="TechStore home"
              onClick={() => setMobileOpen(false)}
            >
              <div className="gc-brand-badge">TS</div>
              <div className="gc-brand-text">
                <p className="gc-brand-title">
                  Tech<span>Store</span>
                </p>
                <div className="gc-brand-subtitle">
                  Computer Shop • IT Hardware • Repair • AMC
                </div>
              </div>
            </Link>

            <div className="gc-nav-desktop">
              <nav className="gc-nav-links" aria-label="Primary navigation">
                {navLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="gc-nav-link">
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="gc-actions">
                <a href={CALL_URL} className="gc-btn gc-btn-outline">
                  Call Now
                </a>
                <a href={WHATSAPP_URL} className="gc-btn gc-btn-primary">
                  WhatsApp for Demo
                </a>
              </div>
            </div>

            <button
              type="button"
              className="gc-mobile-toggle"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>

          {mobileOpen && (
            <div className="gc-mobile-panel">
              <div className="gc-mobile-card">
                <nav className="gc-mobile-links" aria-label="Mobile navigation">
                  {navLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="gc-mobile-link"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span>{item.label}</span>
                      <span>→</span>
                    </Link>
                  ))}
                </nav>

                <div className="gc-mobile-actions">
                  <a href={CALL_URL} className="gc-btn gc-btn-outline">
                    Call Now
                  </a>
                  <a href={WHATSAPP_URL} className="gc-btn gc-btn-primary">
                    WhatsApp for Demo
                  </a>
                </div>

                <div className="gc-mini-strip">
                  <div className="gc-mini-box">
                    <strong>20+ Years</strong>
                    <span>IT business trust</span>
                  </div>
                  <div className="gc-mini-box">
                    <strong>₹5,000+</strong>
                    <span>Website starting</span>
                  </div>
                  <div className="gc-mini-box">
                    <strong>Fast Setup</strong>
                    <span>Quick customization</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}