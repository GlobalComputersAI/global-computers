import type { ReactNode } from "react";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Contact Us | Global Computers & IT Solutions",
  description:
    "Request a demo or quote for websites, billing software, IT hardware supply, AMC, workforce, and PSU/enterprise projects. Get a response within 24 hours.",
};

const BASE_PATH = "/global-computers";

const SOFTWARE_PHONE_DISPLAY = "+91 97524 22686";
const SOFTWARE_PHONE_TEL = "+919752422686";
const WHATSAPP_PHONE = "919752422686";

const HARDWARE_PHONE_DISPLAY = "+91 9827164811";
const HARDWARE_PHONE_TEL = "+919827164811";

const EMAIL = "info@globalcomputers.net";
const WEBSITE = "globalcomputers.net";

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
}: {
  title: string;
  desc: string;
  href: string;
  cta: string;
}) {
  return (
    <a
      href={href}
      className="block rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-xl"
    >
      <div className="text-sm font-black uppercase tracking-widest text-slate-500">
        {title}
      </div>
      <div className="mt-2 font-semibold leading-relaxed text-slate-700">
        {desc}
      </div>
      <div className="mt-4 inline-flex items-center gap-2 font-black text-blue-600">
        {cta} <span aria-hidden>→</span>
      </div>
    </a>
  );
}

export default function ContactUsPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
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
              Billing software{" "}
              <span className="font-black text-slate-900">FREE</span> and basic
              SEO setup{" "}
              <span className="font-black text-slate-900">FREE</span>. Also
              available: IT hardware supply, AMC, IT workforce, and
              PSU/enterprise on-premise & cloud solutions.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge>₹5,000 + GST Starting</Badge>
              <Badge>Billing Software FREE</Badge>
              <Badge>SEO Setup FREE</Badge>
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
              />
              <InfoCard
                title="Projects"
                desc="View demos & capabilities"
                href={`${BASE_PATH}/projects/`}
                cta="View Projects"
              />
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6">
              <div className="font-black text-slate-900">
                What happens after submitting
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>✓ Your details open directly in WhatsApp</li>
                <li>✓ Ready-made inquiry message</li>
                <li>✓ Faster business discussion</li>
                <li>✓ Easy follow-up for demo / pricing</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl md:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black">Request a Demo / Quote</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Fill details below — your message will go directly to WhatsApp.
                </p>
              </div>
              <div className="hidden rounded-full border border-green-100 bg-green-50 px-3 py-2 text-xs font-black uppercase tracking-widest text-green-700 md:block">
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
                    We contact you faster on WhatsApp/call.
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
                    <option>ERP / HR / Payroll</option>
                    <option>Attendance Android / Biometrics</option>
                    <option>Asset Management / Image Search</option>
                    <option>IT Hardware Supply</option>
                    <option>AMC / Maintenance</option>
                    <option>IT Workforce / Manpower</option>
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
                    <option>On-Premise (Server)</option>
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
                  <div className="text-xs font-black uppercase tracking-widest text-slate-500">
                    Offer
                  </div>
                  <div className="mt-2 font-black text-slate-900">
                    Website + Billing + SEO
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-600">
                    Starting ₹5,000 + GST
                  </div>
                  <div className="mt-2 text-xs font-semibold text-slate-500">
                    Billing software & SEO setup included (as per package)
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
                By submitting, your inquiry opens directly in WhatsApp for quick
                project discussion.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm md:p-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-black">Why customers trust us</h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
                20+ years of service delivery. We don’t just make a website—we
                provide complete IT solutions: software, hardware, deployment,
                training, and AMC support.
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
                t: "PSU Ready",
                d: "On-premise, documentation, compliance-friendly.",
              },
              {
                t: "Long-Term Support",
                d: "AMC, upgrades, troubleshooting & SLA.",
              },
              {
                t: "One Stop IT",
                d: "Website + software + hardware + workforce.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="font-black text-slate-900">{x.t}</div>
                <div className="mt-2 text-sm text-slate-600">{x.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}