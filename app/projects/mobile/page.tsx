import type { Metadata } from "next";
import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/919752422686?text=Hi%20I%20want%20a%20mobile%20shop%20website%20for%20my%20business.%20Please%20share%20demo%2C%20price%20and%20details.";
const CALL_URL = "tel:+919752422686";

const featuredProducts = [
  {
    title: "Latest Smartphones",
    description:
      "Show premium, mid-range, and budget smartphones with offers, features, and direct enquiry buttons.",
  },
  {
    title: "Mobile Accessories",
    description:
      "Display chargers, earphones, neckbands, covers, tempered glass, power banks, speakers, and more.",
  },
  {
    title: "Exchange & Upgrade",
    description:
      "Promote old phone exchange, upgrade offers, seasonal discounts, and quick buyback enquiry flow.",
  },
];

const services = [
  "Screen replacement and display repair",
  "Battery replacement and charging issue fixing",
  "Speaker, mic, camera, and network troubleshooting",
  "Software update, formatting, flashing, and setup",
  "Data transfer, backup, and phone configuration",
  "Tempered glass, cover fitting, and accessories support",
];

const highlights = [
  "WhatsApp-first enquiry flow",
  "Fast mobile-friendly design",
  "Trust-building local business layout",
  "Products + services + billing in one demo",
  "Built for higher calls and walk-in enquiries",
  "Perfect for sales, repair, and accessories shops",
];

const whyChooseUs = [
  {
    title: "Built to Sell More",
    text: "This demo is not just attractive. It is designed to convert visitors into calls, WhatsApp messages, and real shop enquiries.",
  },
  {
    title: "Best for Local Shop Owners",
    text: "Perfect for mobile retailers, repair centers, and accessory stores who want a strong digital presence without complexity.",
  },
  {
    title: "Professional Billing Experience",
    text: "The billing section shows customers and business owners that your shop looks modern, organized, and trustworthy.",
  },
  {
    title: "Easy to Customize",
    text: "Your shop name, city, offers, brands, pricing style, address, and services can be added quickly for real business use.",
  },
];

const trustStats = [
  { value: "Mobile", label: "Sales + Repair + Accessories" },
  { value: "Fast", label: "WhatsApp & Call Conversion" },
  { value: "Local", label: "Trust-Focused Business Design" },
  { value: "Ready", label: "Billing + Product + Service Pages" },
];

const faqs = [
  {
    q: "Who is this mobile website demo best for?",
    a: "This demo is best for mobile shops, smartphone retailers, repair centers, and accessory stores that want more enquiries and a professional online presence.",
  },
  {
    q: "Can this website show products and repair services together?",
    a: "Yes. This demo is designed to show phone sales, accessories, service offers, repairs, exchange options, and billing in one high-conversion structure.",
  },
  {
    q: "Can WhatsApp and call buttons be added?",
    a: "Yes. Strong WhatsApp and direct call buttons are already part of the conversion-focused design.",
  },
  {
    q: "Can this be customized for my city and shop name?",
    a: "Yes. The website can be customized with your business name, city, products, prices, offers, services, and contact details.",
  },
];

export const metadata: Metadata = {
  title: "Mobile Shop Website Demo | Mobile Sales, Repair, Accessories & Billing",
  description:
    "Best mobile shop website demo for smartphone stores, mobile repair centers, and accessory businesses. High-converting design with product showcase, repair services, billing page, WhatsApp leads, and local business trust.",
  keywords: [
    "mobile shop website demo",
    "mobile repair website demo",
    "smartphone shop website design",
    "mobile accessories website demo",
    "phone repair website India",
    "mobile billing page demo",
    "mobile store website Chhattisgarh",
    "mobile website design Korba",
    "electronics shop website",
    "mobile sales repair website",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/mobile/",
  },
  openGraph: {
    title: "Mobile Shop Website Demo | Mobile Sales, Repair, Accessories & Billing",
    description:
      "Premium mobile shop website demo built for better trust, more enquiries, stronger local branding, and higher customer conversion.",
    url: "https://globalcomputers.net/projects/mobile/",
    siteName: "Global Computers & IT Solutions",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Shop Website Demo | Mobile Sales, Repair, Accessories & Billing",
    description:
      "Modern mobile shop website demo for product sales, repair services, accessories showcase, and billing.",
  },
};

export default function MobileHomePage() {
  return (
    <>
      <section className="section-lg bg-grid bg-radial overflow-hidden">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <span className="eyebrow">Mobile Shop Website Demo</span>

              <h1 className="section-title mt-6 max-w-4xl">
                Sell More Phones, Get More Repair Enquiries, and Build Stronger Local Trust
                with a <span className="gradient-text">Premium Mobile Shop Website</span>
              </h1>

              <p className="section-subtitle">
                A high-converting mobile shop demo built for smartphone retailers, mobile
                repair shops, and accessories stores. Showcase your latest mobiles,
                exchange offers, repair services, billing experience, and direct WhatsApp
                enquiry flow in one powerful business website.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary sm:w-auto"
                  aria-label="Get mobile shop website demo on WhatsApp"
                >
                  Get Demo on WhatsApp
                </a>
                <a
                  href={CALL_URL}
                  className="btn btn-secondary sm:w-auto"
                  aria-label="Call now for mobile shop website demo"
                >
                  Call Now
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {trustStats.map((item) => (
                  <span key={item.label} className="stat-chip">
                    <strong className="text-slate-950">{item.value}</strong> {item.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass-card float-soft relative overflow-hidden p-5 sm:p-6">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-950 via-blue-600 to-cyan-500" />

                <div className="rounded-[26px] bg-slate-950 p-5 text-white shadow-2xl shadow-slate-300/30">
                  <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                        Featured Mobile Store
                      </p>
                      <h2 className="mt-2 text-2xl font-black tracking-tight">
                        Smart Mobile Hub
                      </h2>
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold text-white">
                      Trusted Store
                    </span>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                        Top Categories
                      </p>
                      <ul className="mt-3 space-y-2 text-sm text-slate-200">
                        <li>• Smartphones</li>
                        <li>• Accessories</li>
                        <li>• Repair Services</li>
                        <li>• Exchange Offers</li>
                      </ul>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                        Fast Conversion
                      </p>
                      <ul className="mt-3 space-y-2 text-sm text-slate-200">
                        <li>• WhatsApp CTA</li>
                        <li>• Click to Call</li>
                        <li>• Product Enquiry</li>
                        <li>• Service Booking</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5 rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/15 to-cyan-500/10 p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                      Why this works
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-100">
                      Customers can quickly see what you sell, what you repair, how to
                      contact you, and why they should trust your store.
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {[
                    "Latest Phone Launches",
                    "Repair Booking Flow",
                    "Accessories Upsell Section",
                  ].map((item) => (
                    <div key={item} className="soft-card p-4">
                      <div className="badge-soft">{item}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pulse-soft absolute -right-4 -top-4 hidden rounded-full border border-blue-100 bg-white px-4 py-3 text-xs font-black text-slate-900 shadow-lg sm:block">
                High Conversion Layout
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="soft-card p-5 sm:p-7">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => (
                <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-extrabold text-slate-900">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <span className="eyebrow">Featured Sections</span>
            <h2 className="section-title mt-6">
              Everything a Modern Mobile Shop Needs to Sell Better Online
            </h2>
            <p className="section-subtitle">
              This demo is designed to make your mobile shop look premium, reliable, and
              easy to contact. It supports product display, service promotion, offer
              visibility, and trust-building sections that help increase walk-ins and
              enquiries.
            </p>
          </div>

          <div className="grid-auto-3 mt-10">
            {featuredProducts.map((item) => (
              <article key={item.title} className="glass-card p-6 sm:p-7">
                <div className="badge-soft">Mobile Business Growth</div>
                <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50/80">
        <div className="container">
          <div className="grid-feature">
            <div>
              <span className="eyebrow">Repair & Service Focus</span>
              <h2 className="section-title mt-6">
                Turn Repair Searches into Real Customers with a Strong Service Page
              </h2>
              <p className="section-subtitle">
                Many customers search online for mobile repair, screen replacement,
                charging issue fixing, battery change, and software problems. A well-made
                service page helps your shop capture those customers faster.
              </p>

              <div className="mt-8 grid gap-3">
                {services.map((item) => (
                  <div
                    key={item}
                    className="soft-card flex items-start gap-3 rounded-[22px] p-4"
                  >
                    <span className="mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
                    <p className="text-sm font-semibold leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="dark-panel p-6 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-200">
                Best for client trust
              </p>
              <h3 className="mt-4 text-3xl font-black tracking-tight">
                A Website That Looks Like a Real Business Asset
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                When a mobile shop has product pages, repair services, professional contact
                details, and billing preview, customers trust the shop more and feel safer
                contacting it.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <p className="text-lg font-black">More Enquiries</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Strong CTA buttons and service-focused content increase response rate.
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <p className="text-lg font-black">Better Branding</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Makes your shop look more professional than most local competitors.
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <p className="text-lg font-black">Higher Sales Potential</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Supports phones, accessories, repairs, offers, exchange, and upsell flow.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/projects/mobile/services" className="btn btn-dark sm:w-auto">
                  Explore Services Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <span className="eyebrow">Why This Demo Sells</span>
            <h2 className="section-title mt-6">
              Best for You, Best for Your Client, and Built for Real Sales Conversion
            </h2>
            <p className="section-subtitle">
              This mobile demo is made to help you sell website services more easily while
              also giving your client a design that improves trust, communication, and
              product visibility.
            </p>
          </div>

          <div className="grid-auto-4 mt-10">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="soft-card p-6">
                <div className="badge-soft">Conversion Ready</div>
                <h3 className="mt-5 text-xl font-black tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50/80">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <span className="eyebrow">Internal Links</span>
              <h2 className="section-title mt-6">
                Explore Product, Service, Billing, and Contact Pages
              </h2>
              <p className="section-subtitle">
                Each page is designed with business value in mind. Products help display
                inventory. Services help generate repair leads. Billing builds trust.
                Contact helps turn visitors into direct customers.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link href="/projects/mobile/products" className="btn btn-primary sm:w-auto">
                  View Products
                </Link>
                <Link href="/projects/mobile/services" className="btn btn-secondary sm:w-auto">
                  View Services
                </Link>
                <Link href="/projects/mobile/billing" className="btn btn-secondary sm:w-auto">
                  View Billing
                </Link>
                <Link href="/projects/mobile/contact" className="btn btn-secondary sm:w-auto">
                  Contact Page
                </Link>
              </div>
            </div>

            <div className="glass-card p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Products Page",
                    text: "Best for smartphones, accessories, offers, and enquiry-based selling.",
                  },
                  {
                    title: "Services Page",
                    text: "Best for repair, service booking, and trust-focused local leads.",
                  },
                  {
                    title: "Billing Page",
                    text: "Best for showing professionalism and a modern business image.",
                  },
                  {
                    title: "Contact Page",
                    text: "Best for address, map, timing, calls, and WhatsApp conversion.",
                  },
                ].map((item) => (
                  <div key={item.title} className="soft-card p-5">
                    <h3 className="text-lg font-black tracking-tight text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="dark-panel p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-200">
                  Mobile Website Demo Offer
                </p>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                  Want This Type of Website for Your Mobile Shop Business?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
                  Get a premium mobile shop website with high-converting homepage, product
                  showcase, repair services page, contact page, billing section, and strong
                  WhatsApp-first enquiry setup. Ideal for local market growth and better
                  digital trust.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn bg-white text-slate-950 hover:bg-slate-100 sm:w-auto"
                    aria-label="Chat on WhatsApp to get mobile shop website"
                  >
                    WhatsApp for Demo
                  </a>
                  <a
                    href={CALL_URL}
                    className="btn btn-dark sm:w-auto"
                    aria-label="Call now for website enquiry"
                  >
                    Call for Website
                  </a>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 sm:p-6">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-300">
                  What you get
                </p>

                <div className="mt-5 grid gap-3">
                  {[
                    "Premium mobile-responsive website design",
                    "Mobile products and accessories showcase",
                    "Repair and service enquiry section",
                    "Contact and WhatsApp conversion setup",
                    "Professional billing demo page",
                    "High-trust local business presentation",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="max-w-3xl">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2 className="section-title mt-6">
              Common Questions About This Mobile Shop Demo
            </h2>
          </div>

          <div className="mt-10 grid gap-4">
            {faqs.map((item) => (
              <article key={item.q} className="soft-card p-5 sm:p-6">
                <h3 className="text-lg font-black tracking-tight text-slate-950">
                  {item.q}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}