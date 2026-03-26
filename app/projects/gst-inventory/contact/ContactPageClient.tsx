"use client";

const PHONE_SOFTWARE = "tel:+919752422686";
const PHONE_HARDWARE = "tel:+919827164811";
const WHATSAPP =
  "https://wa.me/919752422686?text=Hi%20I%20want%20GST%20Billing%20%2B%20Inventory%20Software.%20Please%20contact%20me%20and%20share%20demo%20and%20pricing.";
const EMAIL = "sales@globalcomputers.net";
const MAP_EMBED =
  "https://www.google.com/maps?q=Korba%20Chhattisgarh&output=embed";

function cn(...a: Array<string | false | null | undefined>) {
  return a.filter(Boolean).join(" ");
}

function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

function Input({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-xs font-extrabold text-slate-600">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
      />
    </div>
  );
}

function TextArea({
  label,
  placeholder,
}: {
  label: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-extrabold text-slate-600">{label}</label>
      <textarea
        rows={4}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
      />
    </div>
  );
}

export default function ContactPageClient() {
  return (
    <main className="bg-slate-50">
      <section className="border-b bg-gradient-to-b from-white to-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h1 className="text-3xl font-black text-slate-900 md:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-3xl font-semibold text-slate-600">
            Get the complete solution — software, hardware, installation,
            printer setup, data safety planning, and ongoing support.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-green-600 px-8 py-4 text-sm font-extrabold text-white hover:bg-green-700"
            >
              WhatsApp Now
            </a>

            <a
              href={PHONE_SOFTWARE}
              className="rounded-2xl border border-slate-300 bg-white px-8 py-4 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
            >
              Call (Software)
            </a>

            <a
              href={PHONE_HARDWARE}
              className="rounded-2xl border border-slate-300 bg-white px-8 py-4 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
            >
              Call (Hardware)
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <Card>
              <div className="p-7">
                <h2 className="text-xl font-black text-slate-900">
                  Global Computers & IT Solutions
                </h2>
                <p className="mt-2 text-sm font-semibold text-slate-600">
                  Your IT partner for GST Billing Software, Inventory Systems,
                  Hardware Supply, On-Prem and Cloud Setup, Printer and Network
                  Configuration, Backup Planning, and AMC support.
                </p>

                <div className="mt-6 space-y-3 text-sm font-semibold">
                  <p>
                    📞 Software:{" "}
                    <a
                      href={PHONE_SOFTWARE}
                      className="font-extrabold text-slate-900 hover:underline"
                    >
                      +91 97524 22686
                    </a>
                  </p>

                  <p>
                    🖥 Hardware:{" "}
                    <a
                      href={PHONE_HARDWARE}
                      className="font-extrabold text-slate-900 hover:underline"
                    >
                      +91 98271 64811
                    </a>
                  </p>

                  <p>
                    💬 WhatsApp:{" "}
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noreferrer"
                      className="font-extrabold text-green-600 hover:underline"
                    >
                      Chat on WhatsApp
                    </a>
                  </p>

                  <p>
                    ✉️ Email:{" "}
                    <a
                      href={`mailto:${EMAIL}`}
                      className="font-extrabold text-slate-900 hover:underline"
                    >
                      {EMAIL}
                    </a>
                  </p>

                  <p className="text-xs text-slate-500">
                    Location: Korba, Chhattisgarh (Serving PAN India)
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-7">
                <h3 className="text-lg font-black text-slate-900">
                  What We Provide
                </h3>
                <ul className="mt-4 space-y-2 text-sm font-semibold text-slate-700">
                  <li>✓ GST Billing + Inventory Software</li>
                  <li>✓ On-Prem / Cloud / Offline Setup</li>
                  <li>✓ Printer & Hardware Configuration</li>
                  <li>✓ Backup & Data Safety Planning</li>
                  <li>✓ AMC & Ongoing Support</li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="p-7">
                <h3 className="text-lg font-black text-slate-900">
                  Best for These Businesses
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Retail",
                    "Supermarket",
                    "Restaurant",
                    "Clinic",
                    "Hotel",
                    "Showroom",
                    "Distributor",
                    "Gym",
                    "Coaching",
                    "Service Business",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[12px] font-extrabold text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-7">
            <Card>
              <div className="border-b p-7">
                <h2 className="text-xl font-black text-slate-900">
                  Request Demo / Quote
                </h2>
                <p className="mt-2 text-sm font-semibold text-slate-600">
                  Fill your basic details. For faster response, use WhatsApp.
                </p>
              </div>

              <div className="space-y-5 p-7">
                <div className="grid gap-4 md:grid-cols-2">
                  <Input label="Your Name" placeholder="Full name" />
                  <Input label="Phone Number" placeholder="Mobile number" />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Input
                    label="Business Type"
                    placeholder="Retail / Restaurant / Clinic / etc."
                  />
                  <Input label="City" placeholder="Your city" />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Input
                    label="Preferred Setup"
                    placeholder="On-Prem / Offline / Cloud"
                  />
                  <Input
                    label="Need Hardware?"
                    placeholder="Printer / Barcode / PC / Network"
                  />
                </div>

                <TextArea
                  label="Requirements"
                  placeholder="Tell us about counters, printers (A4/Thermal), inventory, employees, Android/Web, billing format, or support requirement."
                />

                <div className="flex flex-col gap-4 sm:flex-row">
                  <button
                    type="button"
                    className="flex-1 rounded-2xl bg-slate-900 px-6 py-4 text-sm font-extrabold text-white hover:bg-slate-800"
                  >
                    Submit Request
                  </button>

                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-2xl border border-slate-300 bg-white px-6 py-4 text-center text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                  >
                    Or WhatsApp Directly
                  </a>
                </div>

                <p className="text-xs font-semibold text-slate-500">
                  * This form is UI-only in demo mode. For real business inquiry,
                  WhatsApp is recommended.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <Card>
          <div className="border-b p-5 text-sm font-extrabold text-slate-700">
            Office Location
          </div>
          <iframe
            title="Google Map"
            src={MAP_EMBED}
            className="h-[320px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Card>
      </section>
    </main>
  );
}