import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IT Hardware | Professional Gaming, 4K Editing & PSU GeM Supply",
  description:
    "Authorized OEM partner for high-end gaming PCs, 4K video editing workstations, enterprise printer solutions, and CCTV surveillance. Registered GeM supplier for PSUs.",
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
  { name: "Crucial", src: "/brands/crucial.png" },
  { name: "Lapcare", src: "/brands/lapcare.png" },
  { name: "Honeywell", src: "/brands/honeywell.png" },
  { name: "CP Plus", src: "/brands/cp-plus.png" },
];

const site = "globalcomputers.net";

export default function ITHardwareSupplyPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 pt-14 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-100 px-4 py-2 rounded-full text-sm font-semibold">
              <span>✔</span>
              <span>Authorized OEM Partner • GeM Registered Vendor</span>
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
              Enterprise <span className="text-blue-600">IT Hardware</span> & Custom Solutions
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Global Computers & IT Solutions delivers <strong>PSU / GeM supplies</strong>,
              <strong> custom PCs</strong>, <strong>workstations</strong>, printers, and end-to-end support
              for offices, professionals, and institutions across India.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="px-7 py-3 rounded-full bg-blue-600 text-white font-bold shadow hover:bg-blue-500 transition"
              >
                Contact Sales
              </Link>
              <Link
                href="/contact-us"
                className="px-7 py-3 rounded-full bg-white text-slate-900 font-bold border border-slate-200 hover:border-blue-400 transition"
              >
                Request GeM Quote
              </Link>
              <a
                href={`https://${site}`}
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition"
              >
                Visit Website: {site}
              </a>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              <InfoPill title="Fast Procurement" desc="Tender-ready quotes & compliance help" />
              <InfoPill title="Nationwide Support" desc="On-site service & AMC options" />
              <InfoPill title="Genuine Hardware" desc="OEM-led supply & warranty coordination" />
              <InfoPill title="One Vendor" desc="IT, laptops, printers, CCTV, peripherals & more" />
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100">
              <Image
                src="/it-hardware/hero-it-hardware.jpg"
                alt="Enterprise IT hardware supply and custom workstation solutions"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="mt-5 flex flex-wrap gap-3 text-xs font-semibold text-slate-600">
              <span className="px-3 py-2 rounded-full bg-slate-100 border border-slate-200">GeM Supply</span>
              <span className="px-3 py-2 rounded-full bg-slate-100 border border-slate-200">Gaming PCs</span>
              <span className="px-3 py-2 rounded-full bg-slate-100 border border-slate-200">4K Editing</span>
              <span className="px-3 py-2 rounded-full bg-slate-100 border border-slate-200">Laptops</span>
              <span className="px-3 py-2 rounded-full bg-slate-100 border border-slate-200">Printers</span>
              <span className="px-3 py-2 rounded-full bg-slate-100 border border-slate-200">CCTV</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMPLIANCE STRIP ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid md:grid-cols-4 gap-4">
            <ComplianceCard title="GeM Registered" desc="PSU & Govt purchase support" />
            <ComplianceCard title="Authorized OEM Reseller" desc="Direct procurement & billing" />
            <ComplianceCard title="Tender Specialist" desc="BOQ, make/model & compliance" />
            <ComplianceCard title="ISO-ready Process" desc="Documentation & delivery discipline" />
          </div>
        </div>
      </section>

      {/* ================= CUSTOM BUILDS ================= */}
      <section className="bg-slate-50 border-y">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-3xl md:text-4xl font-black">Custom Built Systems</h2>
              <p className="mt-2 text-slate-600">
                Business desktops, gaming rigs, and creative workstations — built for performance and reliability.
              </p>
            </div>
            <Link href="/contact-us" className="font-bold text-blue-700 hover:text-blue-600">
              Get configuration help →
            </Link>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-8">
            {/* Essential Business */}
            <div className="flex flex-col p-8 bg-white border rounded-3xl shadow-sm">
              <h3 className="text-2xl font-black">Essential Business</h3>
              <p className="mt-2 text-sm text-slate-500">Best for billing, office work, and daily operations.</p>

              <div className="my-5 text-4xl font-black text-blue-600">₹9,999/-</div>

              <ul className="space-y-3 text-slate-600 flex-grow">
                <li>• Intel Core i3 Processor</li>
                <li>• 4GB RAM • 128GB SSD</li>
                <li>• 19&quot; LED Monitor</li>
                <li>• Keyboard &amp; Mouse Combo</li>
              </ul>

              <Link
                href="/contact-us"
                className="mt-8 w-full text-center py-3 bg-slate-100 font-bold rounded-xl hover:bg-slate-200 transition"
              >
                Order Basic PC
              </Link>
              <p className="mt-3 text-xs text-slate-500">
                *Pricing may vary based on brand / availability / GST.
              </p>
            </div>

            {/* Pro Gaming */}
            <div className="flex flex-col p-8 bg-slate-900 text-white border rounded-3xl shadow-xl lg:scale-[1.03]">
              <div className="bg-blue-600 text-xs font-bold uppercase py-1 px-3 rounded-full w-fit mb-4">
                Ultimate Power
              </div>
              <h3 className="text-2xl font-black">Pro Gaming Build</h3>
              <p className="text-slate-300 mt-2 text-sm">
                Engineered for AAA titles, ray tracing, streaming, and max FPS.
              </p>

              <ul className="mt-6 space-y-3 text-slate-200 flex-grow text-sm">
                <li>• Latest Gen Intel / Ryzen</li>
                <li>• NVIDIA RTX Series GPU</li>
                <li>• 16GB/32GB DDR5 RAM</li>
                <li>• Liquid Cooling (optional)</li>
              </ul>

              <Link
                href="/contact-us"
                className="mt-8 w-full text-center py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition"
              >
                Configure Gaming Rig
              </Link>
              <p className="mt-3 text-xs text-slate-400">
                *Exact parts depend on your games, budget and stock.
              </p>
            </div>

            {/* Creative Workstation */}
            <div className="flex flex-col p-8 bg-white border rounded-3xl shadow-sm">
              <h3 className="text-2xl font-black">Creative Workstation</h3>
              <p className="text-slate-500 mt-2 text-sm">
                Best for 4K/8K rendering, AutoCAD, Revit, 3D, and AI workloads.
              </p>

              <ul className="mt-6 space-y-3 text-slate-600 flex-grow text-sm">
                <li>• High-core / multi-thread CPU</li>
                <li>• 12GB+ VRAM graphics</li>
                <li>• 1TB NVMe Gen4 storage</li>
                <li>• Dual 4K monitor support</li>
              </ul>

              <Link
                href="/contact-us"
                className="mt-8 w-full text-center py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition"
              >
                Get Quote
              </Link>
              <p className="mt-3 text-xs text-slate-500">
                *Share your software list for an accurate build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LAPTOP SECTION ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-3xl md:text-4xl font-black">
                Laptops for <span className="text-blue-600">Professionals</span>, Creators & Gamers
              </h2>
              <p className="mt-3 text-slate-600 text-lg max-w-3xl">
                Get the right laptop for your work — office productivity, video editing, gaming, or Apple MacBook
                setups. We also support bulk supply for institutions and PSU requirements.
              </p>
            </div>
            <Link href="/contact-us" className="font-bold text-blue-700 hover:text-blue-600">
              Get laptop recommendation →
            </Link>
          </div>

          <div className="mt-10 grid lg:grid-cols-4 gap-6">
            <LaptopCard
              badge="Office / Business"
              title="Professional Laptop"
              desc="Perfect for MS Office, browsing, accounting, and daily business tasks."
              bullets={[
                "Intel i5 / Ryzen 5 (recommended)",
                "8GB/16GB RAM options",
                "512GB SSD performance",
                "14\" / 15.6\" Full HD display",
              ]}
              cta="Request Quote"
              dark={false}
            />

            <LaptopCard
              badge="Creator Choice"
              title="Video Editing Laptop"
              desc="Optimized for Premiere Pro, After Effects, DaVinci Resolve, 4K workflows."
              bullets={[
                "High-core CPU (i7/i9, Ryzen 7/9)",
                "Dedicated GPU (RTX series preferred)",
                "16GB/32GB RAM for smooth timeline",
                "Fast NVMe SSD + external storage",
              ]}
              cta="Get Configuration"
              dark={false}
            />

            <LaptopCard
              badge="High Performance"
              title="Gaming Laptop"
              desc="High FPS gaming, streaming, and competitive esports performance."
              bullets={[
                "RTX GPU (3060/4050/4060+)",
                "High refresh display (144Hz/165Hz)",
                "Advanced cooling & performance mode",
                "RGB keyboard (optional)",
              ]}
              cta="Get Best Deal"
              dark={true}
            />

            <LaptopCard
              badge="Apple Ecosystem"
              title="MacBook"
              desc="Best for creators, business owners, and premium long battery performance."
              bullets={[
                "MacBook Air / Pro options",
                "M-series performance (M1/M2/M3)",
                "Excellent battery & display",
                "Setup + data transfer support",
              ]}
              cta="Buy / Setup Help"
              dark={false}
            />
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-4">
            <InfoPill title="Genuine Warranty" desc="OEM warranty + invoice support" />
            <InfoPill title="Bulk Supply" desc="Schools, offices, institutions & PSUs" />
            <InfoPill title="Setup Support" desc="OS, software, antivirus, data transfer" />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact-us"
              className="px-7 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition"
            >
              Get Laptop Quote
            </Link>
            <Link
              href="/contact-us"
              className="px-7 py-3 rounded-full bg-white text-slate-900 font-bold border border-slate-200 hover:border-blue-400 transition"
            >
              Bulk / Institution Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CAMERA / CCTV SECTION ================= */}
      <section className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black">
              Camera & <span className="text-blue-600">CCTV Surveillance</span> Solutions
            </h2>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Secure your office, shop, school, warehouse, or campus with complete CCTV solutions —
              from site survey to installation, remote viewing setup, and AMC support.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <FeatureCard title="IP Cameras" desc="2MP / 4MP / 5MP / 8MP options" />
              <FeatureCard title="Night Vision" desc="IR & color night vision support" />
              <FeatureCard title="DVR/NVR Setup" desc="Recording, playback & storage planning" />
              <FeatureCard title="Remote Monitoring" desc="Mobile / web view configuration" />
              <FeatureCard title="Cabling & Networking" desc="Structured cabling & switch setup" />
              <FeatureCard title="AMC & SLA" desc="On-site support and uptime options" />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="px-7 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition"
              >
                Get CCTV Quote
              </Link>
              <Link
                href="/contact-us"
                className="px-7 py-3 rounded-full bg-white text-slate-900 font-bold border border-slate-200 hover:border-blue-400 transition"
              >
                Site Survey Request
              </Link>
            </div>
          </div>

          <div className="relative w-full aspect-[16/11] rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100">
            <Image
              src="/it-hardware/section-cctv.jpg"
              alt="CCTV camera surveillance installation and support"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= PRINTERS + AMC ================= */}
      <section className="bg-slate-50 border-y">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-[16/11] rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100">
            <Image
              src="/it-hardware/section-printers.jpg"
              alt="Enterprise printer supply, cartridges and AMC support"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-black">Printer Solutions & Service</h2>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              From heavy-duty office printing to billing counters and POS, we supply, install, and maintain
              all types of printers with reliable service support.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <MiniTile title="LaserJet" desc="High-speed office printing" />
              <MiniTile title="Ink Tank / InkJet" desc="Low-cost color printing" />
              <MiniTile title="Dot Matrix" desc="Billing & heavy duty" />
              <MiniTile title="Thermal" desc="POS & receipt printing" />
            </div>

            <div className="mt-8 bg-white p-7 rounded-2xl shadow-sm border border-blue-100">
              <h3 className="text-xl font-black mb-4">Support & AMC</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span>✔</span>
                  <span><strong>On-site service</strong> for repair and maintenance.</span>
                </li>
                <li className="flex gap-3">
                  <span>✔</span>
                  <span><strong>OEM warranty coordination</strong> with authorized processes.</span>
                </li>
                <li className="flex gap-3">
                  <span>✔</span>
                  <span><strong>Refurbished options</strong> (laptops & PCs) with warranty availability.</span>
                </li>
                <li className="flex gap-3">
                  <span>✔</span>
                  <span><strong>Consumables</strong> (cartridges/ink/toner) with guidance.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ACCESSORIES ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-black text-center">Premium Accessories</h2>
          <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">
            Best add-ons for performance, productivity, and durability.
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Gaming Keyboard", desc: "Mechanical RGB switches", img: "⌨️" },
              { title: "Professional Mouse", desc: "High DPI precision", img: "🖱️" },
              { title: "Surround Speakers", desc: "Deep bass & clarity", img: "🔊" },
              { title: "Pro Headset", desc: "Noise cancelling mic", img: "🎧" },
              { title: "UPS & Power Backup", desc: "Surge protection & runtime", img: "🔋" },
              { title: "SSD Upgrades", desc: "NVMe speed boost", img: "⚡" },
              { title: "Wi-Fi Routers", desc: "Better coverage & stability", img: "📶" },
              { title: "Cables & Adapters", desc: "HDMI, DP, USB-C & more", img: "🔌" },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 border rounded-2xl text-center hover:border-blue-500 transition-colors bg-white"
              >
                <div className="text-4xl mb-4">{item.img}</div>
                <h4 className="font-black text-sm">{item.title}</h4>
                <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BRANDS ================= */}
      <section className="bg-white border-y">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <p className="text-center font-black text-slate-400 uppercase tracking-widest text-xs mb-10">
            Authorized Partner & Trusted Brands
          </p>

          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="relative w-24 h-12 md:w-32 md:h-16 transition-transform hover:scale-110"
                title={brand.name}
              >
                <Image src={brand.src} alt={brand.name} fill className="object-contain" />
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-slate-500">
            Need a specific make/model for GeM or Tender? Share your BOQ — we’ll respond with the right options.
          </p>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center bg-blue-600 text-white p-12 md:p-16 rounded-[3rem]">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Ready to Upgrade?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Government department bulk supply, PSU GeM order, or a professional custom rig — we’ll deliver
              the right hardware with proper support.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="bg-white text-blue-600 px-10 py-4 rounded-full font-black shadow-lg hover:bg-blue-50 transition"
              >
                Contact Sales
              </Link>
              <Link
                href="/contact-us"
                className="bg-blue-800 text-white px-10 py-4 rounded-full font-black border border-blue-400 hover:bg-blue-700 transition"
              >
                Request GeM Quote
              </Link>
            </div>

            <p className="mt-7 text-sm text-blue-100">
              Website: <strong>{site}</strong>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= Small Components ================= */

function InfoPill({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-4 rounded-2xl border border-slate-200 bg-white">
      <div className="font-black">{title}</div>
      <div className="text-sm text-slate-600 mt-1">{desc}</div>
    </div>
  );
}

function ComplianceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 transition">
      <div className="text-sm font-black text-slate-900">{title}</div>
      <div className="text-sm text-slate-600 mt-1">{desc}</div>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-400 transition">
      <div className="font-black">{title}</div>
      <div className="text-sm text-slate-600 mt-1">{desc}</div>
    </div>
  );
}

function MiniTile({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-400 transition">
      <h4 className="font-black text-blue-600">{title}</h4>
      <p className="text-xs text-slate-600 mt-1">{desc}</p>
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
  dark: boolean;
}) {
  return (
    <div
      className={[
        "flex flex-col p-6 rounded-3xl border shadow-sm h-full",
        dark
          ? "bg-slate-900 text-white border-slate-800 shadow-xl"
          : "bg-white text-slate-900 border-slate-200",
      ].join(" ")}
    >
      <div
        className={[
          "text-xs font-black uppercase tracking-wider w-fit px-3 py-1 rounded-full",
          dark ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-700 border border-blue-100",
        ].join(" ")}
      >
        {badge}
      </div>

      <h3 className="mt-4 text-xl font-black">{title}</h3>
      <p className={["mt-2 text-sm leading-relaxed", dark ? "text-slate-300" : "text-slate-600"].join(" ")}>
        {desc}
      </p>

      <ul className={["mt-4 space-y-2 text-sm", dark ? "text-slate-200" : "text-slate-600"].join(" ")}>
        {bullets.map((b) => (
          <li key={b}>• {b}</li>
        ))}
      </ul>

      <Link
        href="/contact-us"
        className={[
          "mt-6 w-full text-center py-3 rounded-xl font-black transition",
          dark ? "bg-blue-600 hover:bg-blue-500 text-white" : "bg-slate-900 hover:bg-slate-800 text-white",
        ].join(" ")}
      >
        {cta}
      </Link>
    </div>
  );
}
