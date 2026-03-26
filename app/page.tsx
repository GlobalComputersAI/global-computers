import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://globalcomputers.net"),
  title: "One Stop IT Solution | 20+ Years of Trust | Websites, Software & Hardware",
  description:
    "Complete digital transformation since 2004. Websites from ₹5,000, Billing Software, IT Hardware, and PSU enterprise solutions. Trusted by 10,000+ clients.",
  alternates: {
    canonical: "https://globalcomputers.net",
  },
  openGraph: {
    title: "One Stop IT Solution | 20+ Years of Trust | Websites, Software & Hardware",
    description:
      "Complete digital transformation since 2004. Websites from ₹5,000, Billing Software, IT Hardware, and PSU enterprise solutions.",
    url: "https://globalcomputers.net",
    siteName: "Global Computers & IT Solutions",
    locale: "en_IN",
    type: "website",
  },
};

const SOFTWARE_PHONE = "+919752422686";
const HARDWARE_PHONE = "+919827164811";
const WEBSITE = "globalcomputers.net";

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center group">
      <div className="text-4xl md:text-5xl font-black text-blue-600 group-hover:scale-110 transition-transform">
        {value}
      </div>
      <p className="text-slate-500 font-bold uppercase tracking-wider text-xs mt-2">
        {label}
      </p>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
  bullets,
  accent = "blue",
  href = "/contact-us",
}: {
  icon: string;
  title: string;
  desc: string;
  bullets: string[];
  accent?: "blue" | "green" | "orange";
  href?: string;
}) {
  const accentBg =
    accent === "green"
      ? "bg-green-100"
      : accent === "orange"
        ? "bg-orange-100"
        : "bg-blue-100";

  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
      <div
        className={`w-14 h-14 ${accentBg} rounded-2xl flex items-center justify-center text-3xl mb-6`}
      >
        {icon}
      </div>

      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-slate-600 mb-6 leading-relaxed">{desc}</p>

      <ul className="space-y-3 font-medium text-slate-700 mb-7">
        {bullets.map((b) => (
          <li key={b}>✓ {b}</li>
        ))}
      </ul>

      <Link
        href={href}
        className="inline-flex items-center justify-center w-full px-6 py-3 rounded-2xl font-bold border border-slate-200 bg-white hover:bg-slate-50 transition"
      >
        Get Quote / Demo
      </Link>
    </div>
  );
}

function IndustryCard({ label, emoji }: { label: string; emoji: string }) {
  return (
    <Link
      href="/projects"
      className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl text-center hover:bg-blue-600 transition-colors"
    >
      <div className="text-3xl mb-3">{emoji}</div>
      <div className="font-bold">{label}</div>
      <div className="text-xs text-slate-200 mt-2 opacity-80">View projects →</div>
    </Link>
  );
}

function BrandLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="relative w-24 h-12 md:w-32 md:h-16 transition-transform duration-300 ease-in-out hover:scale-110">
      <Image
        src={src}
        alt={`${name} official logo`}
        fill
        className="object-contain"
      />
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="font-semibold">Global Computers & IT Solutions</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-200">
              Website:{" "}
              <a
                className="underline hover:text-white"
                href={`https://${WEBSITE}`}
                target="_blank"
                rel="noreferrer"
              >
                {WEBSITE}
              </a>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={`tel:${SOFTWARE_PHONE}`}
              className="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/40 hover:bg-blue-600/30 transition"
            >
              Software: +91 9752422686
            </a>
            <a
              href={`tel:${HARDWARE_PHONE}`}
              className="px-3 py-1 rounded-full bg-emerald-600/20 border border-emerald-500/40 hover:bg-emerald-600/30 transition"
            >
              Hardware: +91 9827164811
            </a>
          </div>
        </div>
      </div>

      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 text-sm font-bold bg-blue-100 text-blue-700 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Trusted Since 2004 • 20+ Years
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
              One Partner for{" "}
              <span className="text-blue-600">Website + Software + Hardware</span>
              <span className="block">That Actually Works.</span>
            </h1>

            <p className="mt-6 text-xl text-slate-600 max-w-xl leading-relaxed">
              From <span className="font-bold text-slate-900">₹5,000 websites</span>{" "}
              for local businesses to{" "}
              <span className="font-bold text-slate-900">
                turnkey IT infrastructure
              </span>{" "}
              for PSUs & enterprises. Build, supply, deploy, and support—under one
              roof.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us"
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all text-center"
              >
                Get Free Consultation
              </Link>

              <Link
                href="/projects"
                className="px-8 py-4 border-2 border-slate-200 bg-white rounded-xl font-bold hover:bg-slate-50 transition-all text-center"
              >
                See Projects & Proof
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Fast Delivery",
                "On-site Support",
                "AMC & Maintenance",
                "PSU Tender Experience",
                "Multi-Brand Authorized Supply",
              ].map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1.5 text-sm rounded-full bg-white border border-slate-200 text-slate-700 font-semibold"
                >
                  {chip}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm text-slate-500 font-medium italic">
              *Popular bundle: Website + Billing/Inventory setup (for Retail/Hotel/School)
            </p>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-blue-100/50 rounded-full blur-3xl"></div>
            <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-slate-100">
              <Image
                src="/images/hero-it-infrastructure.jpg"
                alt="Complete IT solution"
                width={700}
                height={520}
                className="rounded-2xl object-cover"
                priority
              />
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center">
                  <div className="text-sm font-black">Website</div>
                  <div className="text-xs text-slate-600 mt-1">Fast + SEO</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center">
                  <div className="text-sm font-black">Software</div>
                  <div className="text-xs text-slate-600 mt-1">Billing + ERP</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center">
                  <div className="text-sm font-black">Hardware</div>
                  <div className="text-xs text-slate-600 mt-1">Supply + AMC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard value="20+" label="Years of Legacy" />
            <StatCard value="10,000+" label="Satisfied Clients" />
            <StatCard value="500+" label="PSU / Enterprise Works" />
            <StatCard value="24/7" label="Lifetime Support" />
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Our 360° Digital Ecosystem
          </h2>
          <p className="text-slate-600 text-lg">
            One team. One contract. One accountable partner for delivery + support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon="🌐"
            accent="blue"
            title="Websites & SEO"
            desc="Modern, fast, mobile-first websites designed to convert. Ideal for local business and corporate presence. Starting @ ₹5,000."
            bullets={["Business Websites", "E-commerce Stores", "SEO + Lead Landing Pages"]}
          />

          <ServiceCard
            icon="💻"
            accent="green"
            title="Software & ERP"
            desc="Billing, inventory, HR, and custom workflows. We tailor software to how you already work—then automate it."
            bullets={["Billing + Inventory", "Hotel/School Management", "Custom Integrations & APIs"]}
          />

          <ServiceCard
            icon="🔌"
            accent="orange"
            title="IT Hardware + AMC"
            desc="Authorized supply, deployment, and AMC. Servers, workstations, networking, CCTV, biometrics—complete setup."
            bullets={["PSU & Govt Tender Supply", "CCTV & Biometrics", "Networking + Workstations"]}
          />
        </div>
      </section>

      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
            Specialized Solutions For:
          </h2>
          <p className="text-center text-slate-300 mb-14">
            Click any industry to view relevant work in our Projects.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Retail & Supermarket", emoji: "🛒" },
              { label: "Restaurant & Cafe", emoji: "🍽" },
              { label: "Hotel & Resort", emoji: "🏨" },
              { label: "School & Institute", emoji: "🏫" },
              { label: "PSU & Government", emoji: "🏛" },
              { label: "Corporate Office", emoji: "🏢" },
              { label: "Rental Car & Travel", emoji: "🚗" },
              { label: "Medical & Pharma", emoji: "💊" },
            ].map((item) => (
              <IndustryCard key={item.label} label={item.label} emoji={item.emoji} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-slate-900 font-black hover:scale-105 transition-transform"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
            Authorized Partners & Trusted Brands
          </p>
          <p className="text-slate-600 mb-12">
            We supply, deploy, and support multi-brand infrastructure as per requirement.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              { name: "Dell", src: "/brands/Dell.png" },
              { name: "HP", src: "/brands/hp.png" },
              { name: "Lenovo", src: "/brands/lenovo.png" },
              { name: "Acer", src: "/brands/acer.png" },
              { name: "Asus", src: "/brands/asus.png" },
              { name: "Samsung", src: "/brands/Samsung.png" },
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
            ].map((brand) => (
              <BrandLogo key={brand.name} name={brand.name} src={brand.src} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600"></div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Stop dealing with multiple vendors.
            <span className="block">Get your IT solved—today.</span>
          </h2>

          <p className="text-xl text-blue-100 mb-10">
            Tell us your requirement. We’ll suggest the best solution + cost estimate.
            Website, software, hardware supply, AMC, and deployment—everything in one place.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${SOFTWARE_PHONE}`}
              className="px-10 py-5 bg-white text-blue-700 font-black rounded-2xl text-lg hover:scale-105 transition-transform shadow-2xl"
            >
              Call Software: +91 9752422686
            </a>

            <a
              href={`tel:${HARDWARE_PHONE}`}
              className="px-10 py-5 bg-blue-800 text-white font-black rounded-2xl text-lg hover:bg-blue-900 transition-colors border border-blue-400"
            >
              Call Hardware: +91 9827164811
            </a>
          </div>

          <div className="mt-8 text-sm text-blue-100">
            Prefer WhatsApp? Use the same numbers • Or{" "}
            <Link className="underline font-semibold hover:text-white" href="/contact-us">
              request a quote
            </Link>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 inset-x-0 z-50 md:hidden">
        <div className="bg-white/95 backdrop-blur border-t border-slate-200 px-3 py-3">
          <div className="grid grid-cols-2 gap-3">
            <a
              href={`tel:${SOFTWARE_PHONE}`}
              className="text-center font-extrabold rounded-xl py-3 bg-blue-600 text-white"
            >
              Call (Software)
            </a>
            <a
              href={`tel:${HARDWARE_PHONE}`}
              className="text-center font-extrabold rounded-xl py-3 bg-emerald-600 text-white"
            >
              Call (Hardware)
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}