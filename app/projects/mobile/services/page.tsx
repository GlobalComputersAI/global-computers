import type { Metadata } from "next";
import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/919752422686?text=Hi%20I%20want%20a%20mobile%20shop%20website%20with%20service%20page.%20Please%20share%20demo%2C%20price%20and%20details.";
const CALL_URL = "tel:+919752422686";

const mainServices = [
  {
    title: "Screen Replacement",
    description:
      "Promote display replacement, touch issues, broken glass repair, and quick turnaround support in a premium service layout.",
    points: [
      "Broken screen repair enquiries",
      "Display and touch panel support",
      "Same-day service positioning",
    ],
  },
  {
    title: "Battery Replacement",
    description:
      "Show battery change service for fast-draining phones, power issues, swelling battery cases, and charging backup problems.",
    points: [
      "Battery health issue coverage",
      "Charging backup improvement",
      "Trust-building service display",
    ],
  },
  {
    title: "Charging & Power Issue Repair",
    description:
      "Help customers contact you for charging port faults, loose connector issues, power button problems, and no-power cases.",
    points: [
      "Charging port repair",
      "Power issue troubleshooting",
      "Connector and pin service",
    ],
  },
  {
    title: "Software Update & Flashing",
    description:
      "Show software repair support for hanging phones, update issues, formatting, setup, flashing, and reset-related work.",
    points: [
      "Software issue fixing",
      "Update and setup support",
      "Formatting and reset services",
    ],
  },
  {
    title: "Camera, Speaker & Mic Repair",
    description:
      "Display repair services for sound problems, speaker faults, microphone issues, camera errors, and call-quality problems.",
    points: [
      "Mic and speaker troubleshooting",
      "Camera fault handling",
      "Call sound issue support",
    ],
  },
  {
    title: "Data Transfer & Phone Setup",
    description:
      "Promote services for old-to-new phone data transfer, app setup, account login, backup help, and device configuration.",
    points: [
      "Data migration support",
      "New phone setup help",
      "Backup and restore service",
    ],
  },
];

const serviceBenefits = [
  {
    title: "Brings More Repair Leads",
    text: "A dedicated services page helps you target customers who search online for repair and troubleshooting support.",
  },
  {
    title: "Builds Local Trust",
    text: "When customers see clearly listed services, your shop feels more professional and reliable.",
  },
  {
    title: "Supports Walk-ins and Calls",
    text: "Repair services often lead to fast calls, WhatsApp messages, and local store visits.",
  },
  {
    title: "Adds Business Depth",
    text: "Showing repair, setup, and support services makes your mobile shop look more complete than a sales-only store.",
  },
];

const whyThisPageSells = [
  "Targets high-intent repair customers",
  "Perfect for mobile repair and support shops",
  "Increases trust with clear service coverage",
  "Supports calls, WhatsApp, and store visits",
  "Best for local SEO and enquiry generation",
  "Makes the business look more professional",
];

const processSteps = [
  {
    step: "01",
    title: "Customer Finds the Service",
    text: "The page clearly shows common repair and support services so visitors instantly know you can help.",
  },
  {
    step: "02",
    title: "Customer Trust Increases",
    text: "A structured service section makes your shop appear more serious, more skilled, and more dependable.",
  },
  {
    step: "03",
    title: "Customer Contacts You",
    text: "Strong call and WhatsApp buttons turn service interest into direct enquiries and walk-in opportunities.",
  },
];

const trustPoints = [
  "Screen replacement enquiries",
  "Battery and charging issue repair",
  "Software and setup assistance",
  "Camera, speaker, and mic support",
  "Data transfer and new phone setup",
  "WhatsApp-first service conversion",
];

const faqs = [
  {
    q: "Is this services page useful for mobile repair shops?",
    a: "Yes. This page is ideal for mobile repair shops, smartphone service centers, and mobile stores that also provide technical support and after-sales service.",
  },
  {
    q: "Can I show both repair and software services on this page?",
    a: "Yes. This service page is designed to display hardware repair, battery work, charging issues, software updates, setup help, and customer support services together.",
  },
  {
    q: "Will this help bring more local customers?",
    a: "Yes. A clear services page improves trust and helps capture customers who search for specific mobile repair or support needs online.",
  },
  {
    q: "Can call and WhatsApp buttons be used throughout the page?",
    a: "Yes. Strong contact buttons can be placed across the page to improve enquiry conversion and make it easier for customers to reach your shop.",
  },
];

export const metadata: Metadata = {
  title: "Mobile Shop Services Page Demo | Repair, Battery, Charging, Software & Support",
  description:
    "Best mobile shop services page demo for mobile repair shops and smartphone stores. Showcase screen replacement, battery change, charging repair, software update, setup help, and support with a high-converting design.",
  keywords: [
    "mobile repair services page",
    "mobile shop services page demo",
    "phone repair website page",
    "screen replacement website demo",
    "battery replacement mobile page",
    "charging issue repair page",
    "mobile software repair website",
    "mobile service center website",
    "smartphone repair page demo",
    "mobile repair website India",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/mobile/services/",
  },
  openGraph: {
    title: "Mobile Shop Services Page Demo | Repair, Battery, Charging & Support",
    description:
      "Premium services page for mobile shops and repair centers. Show repair, troubleshooting, software support, and setup help with a trust-focused high-conversion design.",
    url: "https://globalcomputers.net/projects/mobile/services/",
    siteName: "Global Computers & IT Solutions",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Shop Services Page Demo | Repair, Battery, Charging & Support",
    description:
      "Modern services page for mobile shops with repair categories, trust-building layout, and strong enquiry conversion.",
  },
};

export default function MobileServicesPage() {
  return (
    <>
      <section className="section-lg bg-grid bg-radial overflow-hidden">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="eyebrow">Mobile Repair & Support Services</span>

              <h1 className="section-title mt-6 max-w-4xl">
                A High-Converting <span className="gradient-text">Mobile Services Page</span>{" "}
                Built for Repair Enquiries, Local Trust, and Faster Customer Conversion
              </h1>

              <p className="section-subtitle">
                This services page is designed for mobile shops, repair centers, and
                smartphone businesses that want to showcase repair work, software support,
                setup help, and troubleshooting services in a professional and
                trust-building way.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary sm:w-auto"
                  aria-label="Get mobile services page demo on WhatsApp"
                >
                  Get Services Demo
                </a>
                <a
                  href={CALL_URL}
                  className="btn btn-secondary sm:w-auto"
                  aria-label="Call now for mobile services page"
                >
                  Call Now
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Repair-Focused Layout",
                  "Trust-Building Sections",
                  "WhatsApp & Call CTA",
                  "High-Intent Local Leads",
                ].map((item) => (
                  <span key={item} className="stat-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass-card float-soft relative overflow-hidden p-5 sm:p-6">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-950 via-blue-600 to-cyan-500" />

                <div className="rounded-[28px] bg-slate-950 p-5 text-white shadow-2xl shadow-slate-300/30 sm:p-6">
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        Service Preview
                      </p>
                      <h2 className="mt-2 text-2xl font-black tracking-tight">
                        Mobile Repair Center
                      </h2>
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold">
                      Best for Leads
                    </span>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {[
                      {
                        title: "Screen & Battery",
                        note: "Most common services customers search for first",
                      },
                      {
                        title: "Charging & Power",
                        note: "High-intent issues that generate quick enquiries",
                      },
                      {
                        title: "Software Support",
                        note: "Setup, update, reset, and troubleshooting coverage",
                      },
                      {
                        title: "Data & Device Help",
                        note: "Extra support services that improve trust and value",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="rounded-[22px] border border-white/10 bg-white/5 p-4"
                      >
                        <p className="text-sm font-black text-white">{item.title}</p>
                        <p className="mt-2 text-xs leading-6 text-slate-300">{item.note}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-[24px] border border-blue-500/20 bg-gradient-to-br from-blue-500/15 to-cyan-500/10 p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                      Why it converts
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-100">
                      Customers instantly understand what repair work and support your shop
                      handles, which increases trust and speeds up contact decisions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pulse-soft absolute -right-4 -top-4 hidden rounded-full border border-blue-100 bg-white px-4 py-3 text-xs font-black text-slate-900 shadow-lg sm:block">
                Service Leads Ready
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="soft-card p-5 sm:p-7">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {whyThisPageSells.map((item) => (
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
            <span className="eyebrow">Main Service Categories</span>
            <h2 className="section-title mt-6">
              Show Your Mobile Repair and Support Services in the Best Sales-Friendly
              Structure
            </h2>
            <p className="section-subtitle">
              A good services page helps customers instantly see what you fix, what support
              you offer, and why they should contact your shop. It turns technical work
              into a clear and trustworthy business presentation.
            </p>
          </div>

          <div className="grid-auto-3 mt-10">
            {mainServices.map((service) => (
              <article key={service.title} className="glass-card p-6 sm:p-7">
                <div className="badge-soft">Repair & Support</div>
                <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-5 grid gap-3">
                  {service.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
                    >
                      {point}
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary sm:w-auto"
                    aria-label={`Enquire about ${service.title}`}
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50/80">
        <div className="container">
          <div className="grid-feature">
            <div>
              <span className="eyebrow">Why This Page Works</span>
              <h2 className="section-title mt-6">
                A Dedicated Services Page Helps You Capture More Repair Customers
              </h2>
              <p className="section-subtitle">
                Many mobile customers search for specific problems such as broken screens,
                battery issues, charging faults, and software trouble. A strong services
                page lets your business capture those needs with clarity and trust.
              </p>

              <div className="mt-8 grid gap-4">
                {serviceBenefits.map((item) => (
                  <div key={item.title} className="soft-card rounded-[24px] p-5">
                    <h3 className="text-lg font-black tracking-tight text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="dark-panel p-6 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-200">
                Best for local conversion
              </p>
              <h3 className="mt-4 text-3xl font-black tracking-tight">
                Turn Service Searches into Calls, WhatsApp Messages, and Walk-In Customers
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                This page is built to make your repair and support capabilities easy to
                understand. It increases confidence and helps customers contact your shop
                faster for urgent and everyday mobile issues.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  "Repair enquiries increase faster",
                  "Service trust improves immediately",
                  "Customers understand your expertise",
                  "Local business branding becomes stronger",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-slate-100"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/projects/mobile/products" className="btn btn-dark sm:w-auto">
                  View Products Page
                </Link>
                <Link href="/projects/mobile/contact" className="btn btn-dark sm:w-auto">
                  Contact Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <span className="eyebrow">How This Page Converts</span>
            <h2 className="section-title mt-6">
              A Simple Flow That Turns Interest into Real Service Enquiries
            </h2>
            <p className="section-subtitle">
              The best service pages do not only list work. They guide customers from
              problem recognition to trust and then to direct contact.
            </p>
          </div>

          <div className="grid-auto-3 mt-10">
            {processSteps.map((item) => (
              <article key={item.step} className="soft-card p-6 sm:p-7">
                <div className="badge-soft">Step {item.step}</div>
                <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50/80">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <span className="eyebrow">Trust Signals</span>
              <h2 className="section-title mt-6">
                Show Common Services Clearly and Make Customers Feel Safer Contacting You
              </h2>
              <p className="section-subtitle">
                When visitors see their exact problem or need listed clearly, they feel
                understood. That single improvement can raise enquiry confidence
                significantly.
              </p>

              <div className="mt-8 grid gap-3">
                {trustPoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-slate-200 bg-white px-4 py-4 text-sm font-semibold text-slate-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-2xl font-black tracking-tight text-slate-950">
                Best Businesses for This Services Page
              </h3>

              <div className="mt-6 grid gap-4">
                {[
                  "Mobile repair shops",
                  "Smartphone service centers",
                  "Local mobile stores with repair support",
                  "Accessory shops offering setup help",
                  "Shops doing battery and charging repairs",
                  "Stores handling software and data transfer work",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-slate-200 bg-white px-4 py-4 text-sm font-semibold text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary sm:w-auto"
                  aria-label="Get mobile services page on WhatsApp"
                >
                  WhatsApp for This Page
                </a>
                <a
                  href={CALL_URL}
                  className="btn btn-secondary sm:w-auto"
                  aria-label="Call for mobile services page"
                >
                  Call for Website
                </a>
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
                  Mobile Service Website Offer
                </p>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                  Want a Services Page Like This for Your Mobile Shop or Repair Center?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
                  Get a premium service-focused website page that helps customers understand
                  your repair capabilities, support quality, and contact options. Best for
                  local trust, better enquiries, and stronger mobile business branding.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn bg-white text-slate-950 hover:bg-slate-100 sm:w-auto"
                    aria-label="WhatsApp now to get services page"
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
                  What this page includes
                </p>

                <div className="mt-5 grid gap-3">
                  {[
                    "Repair and troubleshooting service blocks",
                    "Screen, battery, charging, and software sections",
                    "Trust-focused local business presentation",
                    "Strong WhatsApp and call action flow",
                    "Support for setup and data transfer services",
                    "High-conversion design for service leads",
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
              Common Questions About This Services Page
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