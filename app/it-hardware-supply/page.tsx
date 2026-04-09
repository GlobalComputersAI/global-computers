import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://globalcomputers.net";
const PAGE_URL = `${SITE_URL}/it-hardware-supply`;
const CONTACT_HREF = "/contact-us";
const PROJECTS_HREF = "/projects";
const SITE_NAME = "Global Computers & IT Solutions";
const WEBSITE = "globalcomputers.net";

export const metadata: Metadata = {
  title: "IT Hardware Supply | Laptops, Desktops, Printers, CCTV & AMC",
  description:
    "Global Computers & IT Solutions provides laptops, desktops, custom PCs, printers, CCTV, accessories, upgrades, AMC and GeM procurement support for businesses, offices, institutions and PSU buyers.",
  keywords: [
    "IT hardware supply Korba",
    "computer supplier Chhattisgarh",
    "laptop supplier Korba",
    "desktop supplier Korba",
    "printer supplier Korba",
    "CCTV installation Korba",
    "IT accessories supplier India",
    "GeM hardware supplier",
    "PSU hardware vendor",
    "AMC hardware support",
    "custom PC build India",
    "Global Computers hardware",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "IT Hardware Supply | Laptops, Desktops, Printers, CCTV & AMC",
    description:
      "Supply of IT hardware, custom PCs, printers, CCTV, accessories and GeM procurement support with practical business support.",
    url: PAGE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/logo_header_svr.png`,
        width: 1200,
        height: 630,
        alt: "Global Computers IT Hardware Supply",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Hardware Supply | Laptops, Desktops, Printers, CCTV & AMC",
    description:
      "Laptops, desktops, printers, CCTV, accessories, custom PCs and GeM procurement support.",
    images: [`${SITE_URL}/logo_header_svr.png`],
  },
};

const brands = [
  { name: "Dell", src: "/brands/Dell.png" },
  { name: "HP", src: "/brands/hp.png" },
  { name: "Lenovo", src: "/brands/lenovo.png" },
  { name: "Acer", src: "/brands/acer.png" },
  { name: "Asus", src: "/brands/asus.png" },
  { name: "Apple", src: "/brands/Apple.png" },
  { name: "Microsoft", src: "/brands/Microsoft.png" },
  { name: "Google", src: "/brands/google.png" },
  { name: "AWS", src: "/brands/aws.png" },
  { name: "Sony", src: "/brands/sony.png" },
  { name: "Nvidia", src: "/brands/nvidia.png" },
  { name: "Intel", src: "/brands/intel.png" },
  { name: "Epson", src: "/brands/epson.png" },
  { name: "Canon", src: "/brands/Canon.png" },
  { name: "Zebronics", src: "/brands/zebronics.png" },
  { name: "Crucial", src: "/brands/Crucial.png" },
  { name: "Lapcare", src: "/brands/lapcare.png" },
  { name: "Honeywell", src: "/brands/honeywell.png" },
  { name: "CP Plus", src: "/brands/cp-plus.png" },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "IT Hardware Supply",
      serviceType: "IT Hardware Supply and Procurement Support",
      provider: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      url: PAGE_URL,
      description:
        "Supply of laptops, desktops, printers, CCTV, accessories, upgrades, custom PCs, AMC and GeM procurement support.",
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
          name: "IT Hardware Supply",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What hardware products do you supply?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We supply laptops, desktops, custom PCs, printers, CCTV systems, accessories, storage, networking items and related IT hardware.",
          },
        },
        {
          "@type": "Question",
          name: "Do you support GeM and PSU procurement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We support GeM and business procurement requirements with product guidance, quotation support and documentation-friendly supply.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide installation and AMC support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We provide installation help, service support, upgrade support and AMC options depending on the requirement.",
          },
        },
        {
          "@type": "Question",
          name: "Can you recommend the right laptop or desktop configuration?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We help choose the right configuration based on budget, usage, software needs and long-term performance requirements.",
          },
        },
      ],
    },
  ],
};

export default function ITHardwareSupplyPage() {
  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-white via-slate-50 to-blue-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-700">
              Hardware • CCTV • Printers • GeM Support
            </div>

            <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-tight text-slate-950 md:text-6xl">
              IT Hardware
              <span className="block text-blue-600">Supply & Support</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
              We supply{" "}
              <span className="font-extrabold text-slate-900">
                laptops, desktops, custom PCs, printers, CCTV systems, accessories and upgrades
              </span>{" "}
              for offices, businesses, institutions and professional buyers — with practical support and AMC options.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={CONTACT_HREF}
                className="rounded-full bg-blue-600 px-7 py-3 font-extrabold text-white transition hover:bg-blue-700"
              >
                Contact Sales
              </Link>
              <Link
                href={CONTACT_HREF}
                className="rounded-full border border-slate-200 bg-white px-7 py-3 font-extrabold text-slate-900 transition hover:border-blue-400"
              >
                Request Quote
              </Link>
              <a
                href={`https://${WEBSITE}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-slate-900 px-7 py-3 font-extrabold text-white transition hover:bg-slate-800"
              >
                Visit Website
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <InfoPill title="Business Supply" desc="Laptops, desktops, printers and office hardware" />
              <InfoPill title="Custom Builds" desc="PCs and workstations based on actual need" />
              <InfoPill title="Support & AMC" desc="Installation, upgrades and service support" />
              <InfoPill title="GeM / Bulk Enquiry" desc="Quote support for business and institutional buyers" />
            </div>
          </div>

          <div>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
              <Image
                src="/it-hardware/hero-it-hardware.jpg"
                alt="IT hardware supply including desktops, laptops, printers and business solutions"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="mt-5 flex flex-wrap gap-3 text-xs font-semibold text-slate-600">
              {["Laptops", "Desktops", "Custom PCs", "Printers", "CCTV", "Upgrades"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-100 px-3 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-4 md:grid-cols-4">
            <ComplianceCard title="GeM Support" desc="Business and institutional purchase support" />
            <ComplianceCard title="Multi-Brand Supply" desc="Choose based on budget and requirement" />
            <ComplianceCard title="Upgrade Guidance" desc="Correct parts and compatibility help" />
            <ComplianceCard title="After-Sales Support" desc="Service, installation and AMC options" />
          </div>
        </div>
      </section>

      {/* Custom systems */}
      <section className="border-y bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle
            title="Custom Desktop & Workstation Options"
            subtitle="From basic office PCs to powerful editing and design systems, we help you choose the right build."
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <BuildCard
              title="Essential Business PC"
              desc="Good for billing, office work, accounting and daily business use."
              badge="Office Use"
              bullets={[
                "Suitable for office and billing tasks",
                "Budget-friendly configuration",
                "SSD-based speed improvement",
                "Monitor, keyboard and mouse options",
              ]}
              cta="Get Business PC Quote"
            />

            <BuildCard
              title="Gaming / High Performance PC"
              desc="For gaming, streaming and users who want strong performance."
              badge="High Performance"
              bullets={[
                "Latest CPU and GPU options",
                "Better cooling and RAM upgrades",
                "Built based on game and budget",
                "Performance-focused configuration",
              ]}
              cta="Configure Gaming PC"
              dark
            />

            <BuildCard
              title="Creative Workstation"
              desc="For editing, rendering, AutoCAD, 3D work and heavy software."
              badge="Creator / Pro"
              bullets={[
                "High-core CPU options",
                "Powerful graphics support",
                "Fast NVMe storage and RAM planning",
                "Build based on software workflow",
              ]}
              cta="Get Workstation Quote"
            />
          </div>
        </div>
      </section>

      {/* Laptops */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle
            title="Laptop Solutions for Different Needs"
            subtitle="We help you choose the right laptop for office work, creators, gaming and premium workflows."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            <LaptopCard
              badge="Office / Business"
              title="Professional Laptop"
              desc="Best for office work, browsing, accounting and daily business tasks."
              bullets={[
                "Reliable performance for work",
                "SSD and RAM upgrade options",
                "Good battery and display choices",
                "Best for business users",
              ]}
              cta="Request Quote"
            />

            <LaptopCard
              badge="Creator Choice"
              title="Editing Laptop"
              desc="For video editing, design, rendering and heavy software use."
              bullets={[
                "High-performance CPU options",
                "Dedicated graphics where needed",
                "Better RAM and storage planning",
                "Built for creative workloads",
              ]}
              cta="Get Configuration"
            />

            <LaptopCard
              badge="Gaming"
              title="Gaming Laptop"
              desc="For high FPS gaming, streaming and performance users."
              bullets={[
                "RTX and gaming-focused options",
                "Higher refresh rate displays",
                "Cooling and performance focus",
                "Best based on game and budget",
              ]}
              cta="Get Best Deal"
              dark
            />

            <LaptopCard
              badge="Apple Ecosystem"
              title="MacBook"
              desc="For creators and users who want premium battery and Apple workflow."
              bullets={[
                "Air and Pro options",
                "M-series performance choices",
                "Premium display and battery life",
                "Setup and migration support",
              ]}
              cta="Buy / Setup Help"
            />
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <InfoPill title="Genuine Products" desc="Invoice-backed supply and warranty guidance" />
            <InfoPill title="Bulk Enquiry" desc="Offices, schools, institutes and business buyers" />
            <InfoPill title="Setup Help" desc="Software, antivirus, setup and data support" />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href={CONTACT_HREF}
              className="rounded-full bg-blue-600 px-7 py-3 font-extrabold text-white transition hover:bg-blue-700"
            >
              Get Laptop Quote
            </Link>
            <Link
              href={CONTACT_HREF}
              className="rounded-full border border-slate-200 bg-white px-7 py-3 font-extrabold text-slate-900 transition hover:border-blue-400"
            >
              Bulk / Institution Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* CCTV */}
      <section className="border-t bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
          <div>
            <SectionTitle
              title="CCTV & Surveillance Solutions"
              subtitle="For offices, shops, schools, warehouses and business spaces needing better monitoring and security."
            />

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <FeatureCard title="Camera Options" desc="2MP, 4MP, 5MP and more as needed" />
              <FeatureCard title="Night Vision" desc="IR and better low-light visibility options" />
              <FeatureCard title="DVR / NVR Setup" desc="Recording, storage and playback planning" />
              <FeatureCard title="Remote View" desc="Mobile and remote monitoring setup" />
              <FeatureCard title="Cabling & Network" desc="Structured setup with clean installation" />
              <FeatureCard title="AMC Support" desc="Service and maintenance support options" />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={CONTACT_HREF}
                className="rounded-full bg-blue-600 px-7 py-3 font-extrabold text-white transition hover:bg-blue-700"
              >
                Get CCTV Quote
              </Link>
              <Link
                href={CONTACT_HREF}
                className="rounded-full border border-slate-200 bg-white px-7 py-3 font-extrabold text-slate-900 transition hover:border-blue-400"
              >
                Request Site Survey
              </Link>
            </div>
          </div>

          <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[2rem] border border-slate-200 shadow-lg">
            <Image
              src="/it-hardware/section-cctv.jpg"
              alt="CCTV surveillance installation and monitoring solutions"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Printers */}
      <section className="border-y bg-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
          <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[2rem] border border-slate-200 shadow-lg">
            <Image
              src="/it-hardware/section-printers.jpg"
              alt="Printer supply and service solutions"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <SectionTitle
              title="Printer Supply & Support"
              subtitle="We help with printer selection, installation, service and maintenance for shops, offices and institutions."
            />

            <div className="mt-6 grid grid-cols-2 gap-4">
              <MiniTile title="Laser Printer" desc="Fast office printing" />
              <MiniTile title="Ink Tank / InkJet" desc="Color and daily use" />
              <MiniTile title="Dot Matrix" desc="Billing and heavy duty use" />
              <MiniTile title="Thermal Printer" desc="POS and receipt printing" />
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-black text-slate-950">Support & Maintenance</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span>✔</span>
                  <span>On-site service support where available</span>
                </li>
                <li className="flex gap-3">
                  <span>✔</span>
                  <span>Warranty and service guidance</span>
                </li>
                <li className="flex gap-3">
                  <span>✔</span>
                  <span>Consumables guidance like toner, ink and cartridges</span>
                </li>
                <li className="flex gap-3">
                  <span>✔</span>
                  <span>AMC support options for regular use environments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle
            title="Accessories, Upgrades & Daily IT Needs"
            subtitle="Small items also matter. We help with the right add-ons for better speed, reliability and convenience."
          />

          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { title: "Keyboard", desc: "Office and premium options", icon: "⌨️" },
              { title: "Mouse", desc: "Daily and performance options", icon: "🖱️" },
              { title: "Speakers", desc: "Clear audio and business use", icon: "🔊" },
              { title: "Headset", desc: "Calls and focused work", icon: "🎧" },
              { title: "UPS / Backup", desc: "Power protection and support", icon: "🔋" },
              { title: "SSD Upgrade", desc: "Better speed and boot time", icon: "⚡" },
              { title: "Wi-Fi Router", desc: "Coverage and stability", icon: "📶" },
              { title: "Cables & Adapters", desc: "HDMI, USB, DP and more", icon: "🔌" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center transition hover:border-blue-400"
              >
                <div className="mb-4 text-4xl">{item.icon}</div>
                <h4 className="text-sm font-black text-slate-900">{item.title}</h4>
                <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="border-y bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="mb-10 text-center text-xs font-black uppercase tracking-[0.18em] text-slate-400">
            Supported Brands & Platforms
          </p>

          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="relative h-12 w-24 transition-transform hover:scale-105 md:h-16 md:w-32"
                title={brand.name}
              >
                <Image
                  src={brand.src}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-slate-500">
            Need a specific make or model? Share your requirement and we’ll suggest the right options.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Quick answers for common hardware and support questions."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <FaqCard
              question="Do you supply both laptops and desktops?"
              answer="Yes. We supply laptops, desktops, custom PCs and workstation-type systems based on business or personal requirement."
            />
            <FaqCard
              question="Can you help with upgrades like RAM and SSD?"
              answer="Yes. We help with RAM, SSD and related upgrade suggestions based on compatibility and usage."
            />
            <FaqCard
              question="Do you provide CCTV installation support?"
              answer="Yes. We help with CCTV planning, installation, setup and maintenance support options."
            />
            <FaqCard
              question="Do you support bulk and institution orders?"
              answer="Yes. We support office, school, institute, business and larger buyer enquiries with quotation support."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[2.5rem] bg-blue-600 p-10 text-center text-white md:p-16">
            <h2 className="text-3xl font-black md:text-5xl">
              Need the Right Hardware?
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-blue-100">
              Tell us what you need — laptop, desktop, printer, CCTV, upgrade or bulk supply — and we’ll help you choose the right option with proper support.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href={CONTACT_HREF}
                className="rounded-full bg-white px-8 py-4 font-black text-blue-600 transition hover:bg-blue-50"
              >
                Contact Sales
              </Link>
              <Link
                href={CONTACT_HREF}
                className="rounded-full border border-blue-300 bg-blue-700 px-8 py-4 font-black text-white transition hover:bg-blue-800"
              >
                Request Quote
              </Link>
            </div>

            <p className="mt-7 text-sm text-blue-100">
              Website: <strong>{WEBSITE}</strong>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <h2 className="text-3xl font-black text-slate-950 md:text-4xl">{title}</h2>
      <p className="mt-3 max-w-4xl text-lg leading-relaxed text-slate-600">{subtitle}</p>
    </div>
  );
}

function InfoPill({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="font-black text-slate-900">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{desc}</div>
    </div>
  );
}

function ComplianceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-300">
      <div className="text-sm font-black text-slate-900">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{desc}</div>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-400">
      <div className="font-black text-slate-900">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{desc}</div>
    </div>
  );
}

function MiniTile({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-400">
      <h4 className="font-black text-blue-600">{title}</h4>
      <p className="mt-1 text-xs text-slate-600">{desc}</p>
    </div>
  );
}

function BuildCard({
  title,
  desc,
  badge,
  bullets,
  cta,
  dark,
}: {
  title: string;
  desc: string;
  badge: string;
  bullets: string[];
  cta: string;
  dark?: boolean;
}) {
  return (
    <div
      className={[
        "flex h-full flex-col rounded-3xl border p-8 shadow-sm",
        dark
          ? "border-slate-800 bg-slate-900 text-white shadow-xl"
          : "border-slate-200 bg-white text-slate-900",
      ].join(" ")}
    >
      <div
        className={[
          "w-fit rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.18em]",
          dark ? "bg-blue-600 text-white" : "border border-blue-100 bg-blue-50 text-blue-700",
        ].join(" ")}
      >
        {badge}
      </div>

      <h3 className="mt-4 text-2xl font-black">{title}</h3>
      <p className={["mt-2 text-sm leading-relaxed", dark ? "text-slate-300" : "text-slate-600"].join(" ")}>
        {desc}
      </p>

      <ul className={["mt-6 flex-grow space-y-3 text-sm", dark ? "text-slate-200" : "text-slate-600"].join(" ")}>
        {bullets.map((bullet) => (
          <li key={bullet}>• {bullet}</li>
        ))}
      </ul>

      <Link
        href={CONTACT_HREF}
        className={[
          "mt-8 w-full rounded-xl py-3 text-center font-black transition",
          dark ? "bg-blue-600 text-white hover:bg-blue-500" : "bg-slate-900 text-white hover:bg-slate-800",
        ].join(" ")}
      >
        {cta}
      </Link>
    </div>
  );
}

function LaptopCard({
  badge,
  title,
  desc,
  bullets,
  cta,
  dark,
}: {
  badge: string;
  title: string;
  desc: string;
  bullets: string[];
  cta: string;
  dark?: boolean;
}) {
  return (
    <div
      className={[
        "flex h-full flex-col rounded-3xl border p-6 shadow-sm",
        dark
          ? "border-slate-800 bg-slate-900 text-white shadow-xl"
          : "border-slate-200 bg-white text-slate-900",
      ].join(" ")}
    >
      <div
        className={[
          "w-fit rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.18em]",
          dark ? "bg-blue-600 text-white" : "border border-blue-100 bg-blue-50 text-blue-700",
        ].join(" ")}
      >
        {badge}
      </div>

      <h3 className="mt-4 text-xl font-black">{title}</h3>
      <p className={["mt-2 text-sm leading-relaxed", dark ? "text-slate-300" : "text-slate-600"].join(" ")}>
        {desc}
      </p>

      <ul className={["mt-4 space-y-2 text-sm", dark ? "text-slate-200" : "text-slate-600"].join(" ")}>
        {bullets.map((bullet) => (
          <li key={bullet}>• {bullet}</li>
        ))}
      </ul>

      <Link
        href={CONTACT_HREF}
        className={[
          "mt-6 w-full rounded-xl py-3 text-center font-black transition",
          dark ? "bg-blue-600 text-white hover:bg-blue-500" : "bg-slate-900 text-white hover:bg-slate-800",
        ].join(" ")}
      >
        {cta}
      </Link>
    </div>
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
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <h3 className="text-lg font-black text-slate-950">{question}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{answer}</p>
    </div>
  );
}