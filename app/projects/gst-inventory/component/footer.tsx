"use client";

import Link from "next/link";

type FooterProps = {
  brand?: string;
  tagline?: string;
  phoneSoftware?: string;
  phoneHardware?: string;
  whatsapp?: string;
  email?: string;
  addressLine?: string;
  city?: string;
  state?: string;
  gstNote?: string;
  mapEmbed?: string;
};

const BASE = "/projects/gst-inventory";

const LINKS = [
  { label: "Home", href: `${BASE}/` },
  { label: "Try Demo", href: `${BASE}/app/` },
  { label: "Plans", href: `${BASE}/plans/` },
  { label: "Industries", href: `${BASE}/industries/` },
  { label: "Compare", href: `${BASE}/compare/` },
  { label: "Security", href: `${BASE}/security/` },
  { label: "Contact", href: `${BASE}/contact/` },
];

const INDUSTRIES = [
  "Retail / Kirana / Supermarket",
  "Distributor / Wholesale",
  "Restaurant / Cafe",
  "Clinic / Pharmacy",
  "Showroom / Electronics",
  "Hotel / Resort",
  "Gym / Fitness",
  "Coaching / Institute",
  "Interior / Contractor",
  "Mobile / Repair Shop",
  "HR / Staffing",
  "Any Local Business",
];

function cn(...a: Array<string | false | null | undefined>) {
  return a.filter(Boolean).join(" ");
}

function formatPhoneLabel(telHref: string) {
  const raw = telHref.replace("tel:", "").replace(/\s/g, "");
  if (!raw.startsWith("+91")) return raw;
  const digits = raw.replace("+91", "");
  const p1 = digits.slice(0, 5);
  const p2 = digits.slice(5);
  return `+91 ${p1} ${p2}`;
}

function SocialIcon({ type }: { type: "whatsapp" | "phone" | "mail" | "map" }) {
  const base = "h-5 w-5";

  if (type === "phone")
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none">
        <path
          d="M6.5 3.5h3l1.2 4.2-2 1.4c1.2 2.4 3.1 4.3 5.5 5.5l1.4-2 4.2 1.2v3c0 .8-.5 1.5-1.2 1.7-1.7.5-5.2.8-9.5-3.5S3.8 7.4 4.3 5.7c.2-.7.9-1.2 1.7-1.2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );

  if (type === "mail")
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none">
        <path
          d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="m5.5 7 6.5 5 6.5-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );

  if (type === "map")
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none">
        <path
          d="M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );

  return (
    <svg viewBox="0 0 24 24" className={base} fill="none">
      <path
        d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9.4 8.8c.2-.5.4-.5.7-.5h.6c.2 0 .4.1.5.3l.8 1.8c.1.2.1.5 0 .7l-.5.6c-.1.2-.1.4 0 .6.6 1.1 1.6 2.1 2.7 2.7.2.1.4.1.6 0l.6-.5c.2-.1.5-.1.7 0l1.8.8c.2.1.3.3.3.5v.6c0 .3 0 .5-.5.7-.6.3-1.8.6-3.3-.1-1.8-.8-4-3-4.8-4.8-.7-1.5-.4-2.7-.1-3.3Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

function ButtonLink({
  href,
  children,
  variant = "solid",
  icon,
  external,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  icon?: "whatsapp" | "phone" | "mail" | "map";
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-extrabold transition",
        variant === "solid"
          ? "bg-white text-slate-950 hover:bg-slate-100"
          : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
      )}
    >
      {icon ? <SocialIcon type={icon} /> : null}
      {children}
    </a>
  );
}

function MiniCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <p className="text-xs font-extrabold tracking-wide text-white/60">
        {title}
      </p>
      <div className="mt-3 text-sm font-semibold text-white/90">{children}</div>
    </div>
  );
}

export default function Footer({
  brand = "Global Computers & IT Solutions",
  tagline = "World-class UI demos • On-Prem / Offline Ready • Fast Support",
  phoneSoftware = "tel:+919752422686",
  phoneHardware = "tel:+919827164811",
  whatsapp = "https://wa.me/919752422686?text=Hi%20I%20want%20GST%20Billing%20%2B%20Inventory%20Software%20Demo.%20Please%20share%20plans%20and%20setup%20options%20(On-Prem%20%2F%20Cloud%20%2F%20Offline).",
  email = "sales@globalcomputers.net",
  addressLine = "Main Road, Near Railway Station",
  city = "Raipur",
  state = "Chhattisgarh",
  gstNote = "GST billing UI demo supports invoices, stock, parties, reports & role-based access.",
  mapEmbed = "https://www.google.com/maps?q=Raipur%20Railway%20Station&output=embed",
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-extrabold text-white/80">
                ✅ On-Prem Setup • ✅ Offline Billing • ✅ GST Reports
              </p>
              <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white">
                Want this software for your business?
              </h3>
              <p className="mt-2 text-sm sm:text-base font-semibold text-white/70 max-w-2xl">
                Start with Billing + CRUD (₹8,000). Add Inventory (₹3,000),
                Employees (₹4,000), Android (₹7,000+), Web (₹5,000+), and AI/ML
                Insights (₹10,000).
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <ButtonLink href={whatsapp} icon="whatsapp" external>
                WhatsApp for Quote
              </ButtonLink>
              <ButtonLink href={phoneSoftware} variant="outline" icon="phone">
                Call (Software)
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="mt-10 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-3xl bg-white text-slate-950 flex items-center justify-center font-black">
                GC
              </div>
              <div>
                <p className="text-lg font-extrabold text-white">{brand}</p>
                <p className="text-sm font-semibold text-white/70">{tagline}</p>
                <p className="mt-2 text-xs font-bold text-white/60">
                  Website{" "}
                  <a
                    href="https://globalcomputers.net"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/80 hover:text-white underline underline-offset-4"
                  >
                    globalcomputers.net
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              <MiniCard title="Contact">
                <div className="flex flex-col gap-2">
                  <a
                    href={phoneSoftware}
                    className="inline-flex items-center gap-2 text-white hover:text-white/90"
                  >
                    <SocialIcon type="phone" />
                    <span>Software: {formatPhoneLabel(phoneSoftware)}</span>
                  </a>

                  <a
                    href={phoneHardware}
                    className="inline-flex items-center gap-2 text-white hover:text-white/90"
                  >
                    <SocialIcon type="phone" />
                    <span>Hardware: {formatPhoneLabel(phoneHardware)}</span>
                  </a>

                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-white hover:text-white/90"
                  >
                    <SocialIcon type="whatsapp" />
                    <span>WhatsApp: +91 97524 22686</span>
                  </a>

                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-2 text-white hover:text-white/90"
                  >
                    <SocialIcon type="mail" />
                    <span>{email}</span>
                  </a>
                </div>
              </MiniCard>

              <MiniCard title="Address">
                <div className="text-white/85">
                  <div className="font-extrabold text-white">
                    {city}, {state}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white/70">
                    {addressLine}
                  </div>
                  <div className="mt-3 text-xs font-bold text-white/60">
                    {gstNote}
                  </div>
                </div>
              </MiniCard>
            </div>
          </div>

          <div className="lg:col-span-3">
            <MiniCard title="Quick Links">
              <div className="grid gap-2">
                {LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-white/85 hover:text-white underline-offset-4 hover:underline"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>

              <div className="mt-5 flex gap-2">
                <ButtonLink href={whatsapp} icon="whatsapp" external>
                  Demo
                </ButtonLink>
                <ButtonLink href={phoneHardware} variant="outline" icon="phone">
                  Hardware
                </ButtonLink>
              </div>
            </MiniCard>

            <div className="mt-6">
              <MiniCard title="Setup Options">
                <ul className="space-y-2 text-sm font-semibold text-white/80">
                  <li className="flex gap-2">
                    <span className="text-white">✓</span> On-Prem (Your Office)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-white">✓</span> Cloud Hosting (Optional)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-white">✓</span> Offline Billing Mode
                  </li>
                  <li className="flex gap-2">
                    <span className="text-white">✓</span> Multi-Branch Ready
                  </li>
                </ul>
              </MiniCard>
            </div>
          </div>

          <div className="lg:col-span-5">
            <MiniCard title="Built For Every Type of Business">
              <div className="grid sm:grid-cols-2 gap-2">
                {INDUSTRIES.map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-[13px] font-bold text-white/85"
                  >
                    {t}
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-extrabold text-white/70">
                  Start small → upgrade anytime
                </p>
                <p className="mt-1 text-sm font-semibold text-white/80">
                  Billing + CRUD (₹8,000) + Inventory (₹3,000) + Employees
                  (₹4,000) + Android/Web + AI Insights.
                </p>
              </div>
            </MiniCard>
          </div>
        </div>

        <div className="mt-10 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5">
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-white/80 text-sm font-extrabold">
                  <SocialIcon type="map" />
                  Location
                </div>
                <a
                  href={mapEmbed.replace("&output=embed", "")}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-extrabold text-white/70 hover:text-white underline underline-offset-4"
                >
                  Open in Maps
                </a>
              </div>

              <iframe
                title="Google Map"
                src={mapEmbed}
                className="w-full h-[260px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-extrabold text-white">
                Need a custom workflow?
              </p>
              <p className="mt-2 text-sm font-semibold text-white/70">
                We can design modules for billing, inventory, HR/attendance,
                hotel booking, gym membership, clinic OPD, showroom sales, and
                more — with the same premium UI.
              </p>
              <div className="mt-4 grid gap-2">
                <ButtonLink href={whatsapp} icon="whatsapp" external>
                  WhatsApp Requirements
                </ButtonLink>
                <ButtonLink href={phoneSoftware} variant="outline" icon="phone">
                  Call (Software)
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-white/10 pt-6">
          <p className="text-xs font-bold text-white/60">
            © {year} {brand}. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-3 text-xs font-bold text-white/60">
            <Link
              href={`${BASE}/contact/`}
              className="hover:text-white underline-offset-4 hover:underline"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}