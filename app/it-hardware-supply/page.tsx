import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IT Hardware | Professional Gaming, 4K Editing & PSU GeM Supply",
  description:
    "Authorized OEM partner for high-end gaming PCs, 4K video editing workstations, enterprise printer solutions, and CCTV surveillance. Registered GeM supplier for PSUs.",
};

const BASE_PATH = "/global-computers";

const brands = [
  { name: "Dell", src: `${BASE_PATH}/brands/Dell.png` },
  { name: "HP", src: `${BASE_PATH}/brands/hp.png` },
  { name: "Lenovo", src: `${BASE_PATH}/brands/lenovo.png` },
  { name: "Acer", src: `${BASE_PATH}/brands/acer.png` },
  { name: "Asus", src: `${BASE_PATH}/brands/asus.png` },
  { name: "Apple", src: `${BASE_PATH}/brands/Apple.png` },
  { name: "Microsoft", src: `${BASE_PATH}/brands/Microsoft.png` },
  { name: "Google", src: `${BASE_PATH}/brands/google.png` },
  { name: "AWS", src: `${BASE_PATH}/brands/aws.png` },
  { name: "Sony", src: `${BASE_PATH}/brands/sony.png` },
  { name: "Nvidia", src: `${BASE_PATH}/brands/nvidia.png` },
  { name: "Intel", src: `${BASE_PATH}/brands/intel.png` },
  { name: "Epson", src: `${BASE_PATH}/brands/epson.png` },
  { name: "Canon", src: `${BASE_PATH}/brands/Canon.png` },
  { name: "Zebronics", src: `${BASE_PATH}/brands/zebronics.png` },
  { name: "Crucial", src: `${BASE_PATH}/brands/Crucial.png` },
  { name: "Lapcare", src: `${BASE_PATH}/brands/lapcare.png` },
  { name: "Honeywell", src: `${BASE_PATH}/brands/honeywell.png` },
  { name: "CP Plus", src: `${BASE_PATH}/brands/cp-plus.png` },
];

const site = "globalcomputers.net";

export default function ITHardwareSupplyPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto grid items-center gap-12 px-6 pt-14 pb-16 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <span>✔</span>
              <span>Authorized OEM Partner • GeM Registered Vendor</span>
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight leading-[1.05] md:text-6xl">
              Enterprise <span className="text-blue-600">IT Hardware</span> & Custom Solutions
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
              Global Computers & IT Solutions delivers <strong>PSU / GeM supplies</strong>,
              <strong> custom PCs</strong>, <strong>workstations</strong>, printers, and end-to-end support
              for offices, professionals, and institutions across India.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="rounded-full bg-blue-600 px-7 py-3 font-bold text-white shadow transition hover:bg-blue-500"
              >
                Contact Sales
              </Link>
              <Link
                href="/contact-us"
                className="rounded-full border border-slate-200 bg-white px-7 py-3 font-bold text-slate-900 transition hover:border-blue-400"
              >
                Request GeM Quote
              </Link>
              <a
                href={`https://${site}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-slate-900 px-7 py-3 font-bold text-white transition hover:bg-slate-800"
              >
                Visit Website: {site}
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <InfoPill title="Fast Procurement" desc="Tender-ready quotes & compliance help" />
              <InfoPill title="Nationwide Support" desc="On-site service & AMC options" />
              <InfoPill title="Genuine Hardware" desc="OEM-led supply & warranty coordination" />
              <InfoPill title="One Vendor" desc="IT, laptops, printers, CCTV, peripherals & more" />
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-xl">
              <Image
                src={`${BASE_PATH}/it-hardware/hero-it-hardware.jpg`}
                alt="Enterprise IT hardware supply and custom workstation solutions"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="mt-5 flex flex-wrap gap-3 text-xs font-semibold text-slate-600">
              <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-2">GeM Supply</span>
              <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-2">Gaming PCs</span>
              <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-2">4K Editing</span>
              <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-2">Laptops</span>
              <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-2">Printers</span>
              <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-2">CCTV</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid gap-4 md:grid-cols-4">
            <ComplianceCard title="GeM Registered" desc="PSU & Govt purchase support" />
            <ComplianceCard title="Authorized OEM Reseller" desc="Direct procurement & billing" />
            <ComplianceCard title="Tender Specialist" desc="BOQ, make/model & compliance" />
            <ComplianceCard title="ISO-ready Process" desc="Documentation & delivery discipline" />
          </div>
        </div>
      </section>

      <section className="border-y bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-black md:text-4xl">Custom Built Systems</h2>
              <p className="mt-2 text-slate-600">
                Business desktops, gaming rigs, and creative workstations — built for performance and reliability.
              </p>
            </div>
            <Link href="/contact-us" className="font-bold text-blue-700 hover:text-blue-600">
              Get configuration help →
            </Link>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <div className="flex flex-col rounded-3xl border bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-black">Essential Business</h3>
              <p className="mt-2 text-sm text-slate-500">Best for billing, office work, and daily operations.</p>

              <div className="my-5 text-4xl font-black text-blue-600">₹9,999/-</div>

              <ul className="flex-grow space-y-3 text-slate-600">
                <li>• Intel Core i3 Processor</li>
                <li>• 4GB RAM • 128GB SSD</li>
                <li>• 19&quot; LED Monitor</li>
                <li>• Keyboard &amp; Mouse Combo</li>
              </ul>

              <Link
                href="/contact-us"
                className="mt-8 w-full rounded-xl bg-slate-100 py-3 text-center font-bold transition hover:bg-slate-200"
              >
                Order Basic PC
              </Link>
              <p className="mt-3 text-xs text-slate-500">
                *Pricing may vary based on brand / availability / GST.
              </p>
            </div>

            <div className="flex flex-col rounded-3xl border bg-slate-900 p-8 text-white shadow-xl lg:scale-[1.03]">
              <div className="mb-4 w-fit rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase">
                Ultimate Power
              </div>
              <h3 className="text-2xl font-black">Pro Gaming Build</h3>
              <p className="mt-2 text-sm text-slate-300">
                Engineered for AAA titles, ray tracing, streaming, and max FPS.
              </p>

              <ul className="mt-6 flex-grow space-y-3 text-sm text-slate-200">
                <li>• Latest Gen Intel / Ryzen</li>
                <li>• NVIDIA RTX Series GPU</li>
                <li>• 16GB/32GB DDR5 RAM</li>
                <li>• Liquid Cooling (optional)</li>
              </ul>

              <Link
                href="/contact-us"
                className="mt-8 w-full rounded-xl bg-blue-600 py-3 text-center font-bold text-white transition hover:bg-blue-500"
              >
                Configure Gaming Rig
              </Link>
              <p className="mt-3 text-xs text-slate-400">
                *Exact parts depend on your games, budget and stock.
              </p>
            </div>

            <div className="flex flex-col rounded-3xl border bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-black">Creative Workstation</h3>
              <p className="mt-2 text-sm text-slate-500">
                Best for 4K/8K rendering, AutoCAD, Revit, 3D, and AI workloads.
              </p>

              <ul className="mt-6 flex-grow space-y-3 text-sm text-slate-600">
                <li>• High-core / multi-thread CPU</li>
                <li>• 12GB+ VRAM graphics</li>
                <li>• 1TB NVMe Gen4 storage</li>
                <li>• Dual 4K monitor support</li>
              </ul>

              <Link
                href="/contact-us"
                className="mt-8 w-full rounded-xl bg-slate-900 py-3 text-center font-bold text-white transition hover:bg-slate-800"
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

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-black md:text-4xl">
                Laptops for <span className="text-blue-600">Professionals</span>, Creators & Gamers
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-slate-600">
                Get the right laptop for your work — office productivity, video editing, gaming, or Apple MacBook
                setups. We also support bulk supply for institutions and PSU requirements.
              </p>
            </div>
            <Link href="/contact-us" className="font-bold text-blue-700 hover:text-blue-600">
              Get laptop recommendation →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            <LaptopCard
              badge="Office / Business"
              title="Professional Laptop"
              desc="Perfect for MS Office, browsing, accounting, and daily business tasks."
              bullets={[
                "Intel i5 / Ryzen 5 (recommended)",
                "8GB/16GB RAM options",
                "512GB SSD performance",
                '14" / 15.6" Full HD display',
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

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <InfoPill title="Genuine Warranty" desc="OEM warranty + invoice support" />
            <InfoPill title="Bulk Supply" desc="Schools, offices, institutions & PSUs" />
            <InfoPill title="Setup Support" desc="OS, software, antivirus, data transfer" />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact-us"
              className="rounded-full bg-blue-600 px-7 py-3 font-bold text-white transition hover:bg-blue-500"
            >
              Get Laptop Quote
            </Link>
            <Link
              href="/contact-us"
              className="rounded-full border border-slate-200 bg-white px-7 py-3 font-bold text-slate-900 transition hover:border-blue-400"
            >
              Bulk / Institution Enquiry
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t bg-white">
        <div className="max-w-7xl mx-auto grid items-center gap-12 px-6 py-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black md:text-4xl">
              Camera & <span className="text-blue-600">CCTV Surveillance</span> Solutions
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Secure your office, shop, school, warehouse, or campus with complete CCTV solutions —
              from site survey to installation, remote viewing setup, and AMC support.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
                className="rounded-full bg-blue-600 px-7 py-3 font-bold text-white transition hover:bg-blue-500"
              >
                Get CCTV Quote
              </Link>
              <Link
                href="/contact-us"
                className="rounded-full border border-slate-200 bg-white px-7 py-3 font-bold text-slate-900 transition hover:border-blue-400"
              >
                Site Survey Request
              </Link>
            </div>
          </div>

          <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-lg">
            <Image
              src={`${BASE_PATH}/it-hardware/section-cctv.jpg`}
              alt="CCTV camera surveillance installation and support"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y bg-slate-50">
        <div className="max-w-7xl mx-auto grid items-center gap-12 px-6 py-16 lg:grid-cols-2">
          <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-lg">
            <Image
              src={`${BASE_PATH}/it-hardware/section-printers.jpg`}
              alt="Enterprise printer supply, cartridges and AMC support"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-black md:text-4xl">Printer Solutions & Service</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              From heavy-duty office printing to billing counters and POS, we supply, install, and maintain
              all types of printers with reliable service support.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <MiniTile title="LaserJet" desc="High-speed office printing" />
              <MiniTile title="Ink Tank / InkJet" desc="Low-cost color printing" />
              <MiniTile title="Dot Matrix" desc="Billing & heavy duty" />
              <MiniTile title="Thermal" desc="POS & receipt printing" />
            </div>

            <div className="mt-8 rounded-2xl border border-blue-100 bg-white p-7 shadow-sm">
              <h3 className="mb-4 text-xl font-black">Support & AMC</h3>
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

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-center text-3xl font-black md:text-4xl">Premium Accessories</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Best add-ons for performance, productivity, and durability.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
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
                className="rounded-2xl border bg-white p-6 text-center transition-colors hover:border-blue-500"
              >
                <div className="mb-4 text-4xl">{item.img}</div>
                <h4 className="text-sm font-black">{item.title}</h4>
                <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y bg-white">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <p className="mb-10 text-center text-xs font-black uppercase tracking-widest text-slate-400">
            Authorized Partner & Trusted Brands
          </p>

          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="relative h-12 w-24 transition-transform hover:scale-110 md:h-16 md:w-32"
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

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="rounded-[3rem] bg-blue-600 p-12 text-center text-white md:p-16">
            <h2 className="mb-4 text-3xl font-black md:text-5xl">Ready to Upgrade?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
              Government department bulk supply, PSU GeM order, or a professional custom rig — we’ll deliver
              the right hardware with proper support.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="rounded-full bg-white px-10 py-4 font-black text-blue-600 shadow-lg transition hover:bg-blue-50"
              >
                Contact Sales
              </Link>
              <Link
                href="/contact-us"
                className="rounded-full border border-blue-400 bg-blue-800 px-10 py-4 font-black text-white transition hover:bg-blue-700"
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

function InfoPill({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="font-black">{title}</div>
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
      <div className="font-black">{title}</div>
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
        "flex h-full flex-col rounded-3xl border p-6 shadow-sm",
        dark
          ? "border-slate-800 bg-slate-900 text-white shadow-xl"
          : "border-slate-200 bg-white text-slate-900",
      ].join(" ")}
    >
      <div
        className={[
          "w-fit rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider",
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
        {bullets.map((b) => (
          <li key={b}>• {b}</li>
        ))}
      </ul>

      <Link
        href="/contact-us"
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