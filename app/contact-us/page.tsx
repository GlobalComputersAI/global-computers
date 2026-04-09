import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Script from "next/script";

const SITE_URL = "https://globalcomputers.net";
const PAGE_URL = `${SITE_URL}/contact-us`;

const SOFTWARE_PHONE_DISPLAY = "+91 97524 22686";
const SOFTWARE_PHONE_TEL = "+919752422686";
const WHATSAPP_PHONE = "919752422686";

const HARDWARE_PHONE_DISPLAY = "+91 9827164811";
const HARDWARE_PHONE_TEL = "+919827164811";

const EMAIL = "infoglobalcomputersit@gmail.com";
const WEBSITE = "globalcomputers.net";

export const metadata: Metadata = {
  title: "Contact Us | Global Computers & IT Solutions",
  description:
    "Contact Global Computers & IT Solutions for website development, billing software, custom software, IT hardware supply, AMC, IT workforce, networking, CCTV and business IT solutions. Get a demo or quote quickly on WhatsApp.",
  keywords: [
    "contact Global Computers",
    "Global Computers contact",
    "website development inquiry",
    "billing software demo",
    "IT hardware supplier contact",
    "AMC services contact",
    "software development quote",
    "Korba IT company contact",
    "Chhattisgarh IT company",
    "business IT support contact",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Contact Us | Global Computers & IT Solutions",
    description:
      "Request a demo or quote for websites, software, IT hardware, AMC, workforce and business IT solutions.",
    url: PAGE_URL,
    siteName: "Global Computers & IT Solutions",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/logo_header_svr.png`,
        width: 1200,
        height: 630,
        alt: "Contact Global Computers & IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Global Computers & IT Solutions",
    description:
      "Request a demo or quote for websites, software, IT hardware, AMC, workforce and business IT solutions.",
    images: [`${SITE_URL}/logo_header_svr.png`],
  },
};

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-black text-slate-700">
      {children}
    </span>
  );
}

function InfoCard({
  title,
  desc,
  href,
  cta,
  external = false,
}: {
  title: string;
  desc: string;
  href: string;
  cta: string;
  external?: boolean;
}) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="block rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-xl"
      >
        <div className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">
          {title}
        </div>
        <div className="mt-2 break-all font-semibold leading-relaxed text-slate-700">
          {desc}
        </div>
        <div className="mt-4 inline-flex items-center gap-2 font-black text-blue-600">
          {cta} <span aria-hidden>→</span>
        </div>
      </a>
    );
  }

  return (
    <a
      href={href}
      className="block rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-xl"
    >
      <div className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">
        {title}
      </div>
      <div className="mt-2 break-all font-semibold leading-relaxed text-slate-700">
        {desc}
      </div>
      <div className="mt-4 inline-flex items-center gap-2 font-black text-blue-600">
        {cta} <span aria-hidden>→</span>
      </div>
    </a>
  );
}

function FaqCard({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-black text-slate-900">{question}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{answer}</p>
    </div>
  );
}

const contactPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${PAGE_URL}#contactpage`,
      name: "Contact Us | Global Computers & IT Solutions",
      url: PAGE_URL,
      description:
        "Contact Global Computers & IT Solutions for website development, software, IT hardware, AMC, manpower services and enterprise IT solutions.",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact Us",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization-contact`,
      name: "Global Computers & IT Solutions",
      url: SITE_URL,
      email: EMAIL,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: SOFTWARE_PHONE_TEL,
          contactType: "sales",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
        {
          "@type": "ContactPoint",
          telephone: HARDWARE_PHONE_TEL,
          contactType: "customer support",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How can I contact Global Computers quickly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can contact Global Computers quickly by phone, email or direct WhatsApp inquiry from the contact form.",
          },
        },
        {
          "@type": "Question",
          name: "Can I request a website or software demo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can request a website, billing software or business software demo using the contact form or WhatsApp.",
          },
        },
        {
          "@type": "Question",
          name: "Do you handle hardware, AMC and CCTV inquiries too?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We handle inquiries for IT hardware, upgrades, printers, CCTV, networking, AMC and support services.",
          },
        },
        {
          "@type": "Question",
          name: "Do you support businesses outside Korba?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We support businesses in Korba, Chhattisgarh and also handle wider support requirements depending on the service type.",
          },
        },
      ],
    },
  ],
};

export default function ContactUsPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <Script id="contact-whatsapp-handler" strategy="afterInteractive">
        {`
          (function () {
            function attachHandler() {
              var form = document.getElementById("contact-whatsapp-form");
              if (!form || form.dataset.whatsappBound === "true") return;

              form.dataset.whatsappBound = "true";

              form.addEventListener("submit", function (event) {
                event.preventDefault();

                var formData = new FormData(form);

                var name = (formData.get("name") || "").toString().trim();
                var phone = (formData.get("phone") || "").toString().trim();
                var email = (formData.get("email") || "").toString().trim();
                var category = (formData.get("category") || "").toString().trim();
                var requirement = (formData.get("requirement") || "").toString().trim();
                var budget = (formData.get("budget") || "").toString().trim();
                var deployment = (formData.get("deployment") || "").toString().trim();
                var city = (formData.get("city") || "").toString().trim();

                if (!name || !phone || !category || !requirement) {
                  alert("Please fill required fields: Name, Phone, Category, Requirement.");
                  return;
                }

                var message =
\`Hello Global Computers,

I want to request a demo / quote.

Name: \${name}
Phone: \${phone}
Email: \${email || "Not provided"}
City / Location: \${city || "Not provided"}
Requirement Category: \${category}
Deployment Preference: \${deployment || "Not provided"}
Budget Range: \${budget || "Not provided"}

Requirement:
\${requirement}

Please contact me regarding this inquiry.\`;

                var whatsappUrl =
                  "https://wa.me/${WHATSAPP_PHONE}?text=" + encodeURIComponent(message);

                window.location.href = whatsappUrl;
              });
            }

            if (document.readyState === "loading") {
              document.addEventListener("DOMContentLoaded", attachHandler);
            } else {
              attachHandler();
            }

            setTimeout(attachHandler, 300);
          })();
        `}
      </Script>

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 py-14 md:py-20 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-black text-blue-700">
              ✅ Direct WhatsApp Response
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
              Contact Us
              <span className="block text-blue-600">Get Demo + Best Price</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-700">
              Websites starting from{" "}
              <span className="font-black text-slate-900">₹5,000 + GST</span>.
              Billing software support, business setup, custom software, IT hardware supply,
              AMC, IT workforce, CCTV, networking and practical business IT solutions.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge>₹5,000 + GST Starting</Badge>
              <Badge>Website + Billing</Badge>
              <Badge>Hardware + AMC</Badge>
              <Badge>On-Premise + Cloud</Badge>
              <Badge>PAN India Support</Badge>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href={`tel:${SOFTWARE_PHONE_TEL}`}
                className="rounded-2xl bg-blue-600 p-5 text-center font-black text-white shadow-xl shadow-blue-200 transition hover:bg-blue-700"
              >
                💻 Call for Software
                <div className="mt-1 text-sm font-semibold text-blue-100">
                  {SOFTWARE_PHONE_DISPLAY}
                </div>
              </a>

              <a
                href={`tel:${HARDWARE_PHONE_TEL}`}
                className="rounded-2xl bg-emerald-600 p-5 text-center font-black text-white shadow-xl shadow-emerald-200 transition hover:bg-emerald-700"
              >
                🖥️ Call for Hardware
                <div className="mt-1 text-sm font-semibold text-emerald-100">
                  {HARDWARE_PHONE_DISPLAY}
                </div>
              </a>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <InfoCard
                title="Email"
                desc={EMAIL}
                href={`mailto:${EMAIL}`}
                cta="Send Email"
              />
              <InfoCard
                title="Website"
                desc={WEBSITE}
                href={`https://${WEBSITE}`}
                cta="Open Website"
                external
              />
              <Link
                href="/projects"
                className="block rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-xl"
              >
                <div className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">
                  Projects
                </div>
                <div className="mt-2 font-semibold leading-relaxed text-slate-700">
                  View demos & capabilities
                </div>
                <div className="mt-4 inline-flex items-center gap-2 font-black text-blue-600">
                  View Projects <span aria-hidden>→</span>
                </div>
              </Link>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6">
              <div className="font-black text-slate-900">
                What happens after submitting
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>✓ Your details open directly in WhatsApp</li>
                <li>✓ Ready-made inquiry message gets created</li>
                <li>✓ Faster business discussion</li>
                <li>✓ Easy follow-up for demo and pricing</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl md:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black">Request a Demo / Quote</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Fill details below — your message will go directly to WhatsApp.
                </p>
              </div>
              <div className="hidden rounded-full border border-green-100 bg-green-50 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-green-700 md:block">
                WhatsApp Direct
              </div>
            </div>

            <form id="contact-whatsapp-form" className="mt-8 grid gap-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-black text-slate-700">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black text-slate-700">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="WhatsApp / Mobile number"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  />
                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    We contact you faster on WhatsApp or call.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-black text-slate-700">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black text-slate-700">
                    City / Location
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="e.g., Korba, Raipur, Bilaspur"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-black text-slate-700">
                    Requirement Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category"
                    required
                    defaultValue=""
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option>Website (Business / Portfolio)</option>
                    <option>E-commerce Website</option>
                    <option>Billing / Inventory Software</option>
                    <option>Custom Software</option>
                    <option>ERP / HR / Payroll</option>
                    <option>Attendance / Biometrics</option>
                    <option>IT Hardware Supply</option>
                    <option>AMC / Maintenance</option>
                    <option>IT Workforce / Manpower</option>
                    <option>CCTV / Networking</option>
                    <option>PSU / Enterprise Project</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-black text-slate-700">
                    Deployment Preference
                  </label>
                  <select
                    name="deployment"
                    defaultValue=""
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option>Cloud</option>
                    <option>On-Premise</option>
                    <option>Hybrid</option>
                    <option>Not Sure</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-black text-slate-700">
                  Your Requirement <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="requirement"
                  rows={6}
                  required
                  placeholder="Example: I need a website + billing software for my shop. Also want WhatsApp inquiry and SEO..."
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-black text-slate-700">
                    Budget Range (optional)
                  </label>
                  <select
                    name="budget"
                    defaultValue=""
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option>₹5,000 – ₹15,000</option>
                    <option>₹15,000 – ₹50,000</option>
                    <option>₹50,000 – ₹2,00,000</option>
                    <option>₹2,00,000+</option>
                    <option>Not Sure</option>
                  </select>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                    Offer
                  </div>
                  <div className="mt-2 font-black text-slate-900">
                    Website + Billing + Business Setup
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-600">
                    Starting ₹5,000 + GST
                  </div>
                  <div className="mt-2 text-xs font-semibold text-slate-500">
                    Best for local businesses and quick setup requirements
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-2xl bg-green-600 py-4 text-lg font-black text-white shadow-xl shadow-green-200 transition hover:bg-green-700"
              >
                Send on WhatsApp →
              </button>

              <p className="text-center text-xs font-semibold leading-relaxed text-slate-500">
                By submitting, your inquiry opens directly in WhatsApp for quick discussion.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm md:p-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-black">Why customers trust us</h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
                20+ years of service mindset. We don’t just make a website — we help with complete IT solutions:
                software, hardware, deployment, training and support.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 font-black text-white transition hover:bg-slate-800"
            >
              View Projects & Demos →
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Fast Demo First",
                d: "Demo shown quickly before final delivery.",
              },
              {
                t: "Business Ready",
                d: "Useful for local business and structured requirements.",
              },
              {
                t: "Long-Term Support",
                d: "AMC, upgrades, troubleshooting and continuity.",
              },
              {
                t: "One Stop IT",
                d: "Website + software + hardware + support.",
              },
            ].map((item) => (
              <div
                key={item.t}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="font-black text-slate-900">{item.t}</div>
                <div className="mt-2 text-sm text-slate-600">{item.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">
            FAQ
          </div>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
            Common contact questions
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Quick answers before you contact us.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <FaqCard
            question="How do I get a quick response?"
            answer="The fastest way is to submit the form, which opens your inquiry directly in WhatsApp with all details."
          />
          <FaqCard
            question="Can I request a website or software demo?"
            answer="Yes. You can request a demo for websites, billing software or custom business software."
          />
          <FaqCard
            question="Can I contact you for hardware, CCTV or AMC?"
            answer="Yes. We handle inquiries for hardware supply, upgrades, printers, CCTV, networking, AMC and support."
          />
          <FaqCard
            question="Do you support businesses outside Korba?"
            answer="Yes. We support wider requirements depending on service type and project scope."
          />
        </div>
      </section>
    </main>
  );
}