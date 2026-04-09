import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

const SITE_URL = "https://globalcomputers.net";
const BRAND_NAME = "Global Computers & IT Solutions";
const WHATSAPP_NUMBER = "919752422686";
const PHONE_NUMBER = "+919752422686";

function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Projects | Live Business Website Demos & Software Demos",
  description:
    "Explore live demo projects for retail, restaurant, clinic, coaching, gym, hotel, showroom, mobile shop, builder, interior, car rental, computer shop and billing software. Business websites start from ₹5,000 + GST with WhatsApp integration and support.",
  keywords: [
    "live demo projects",
    "business website demos India",
    "website demo projects",
    "ready business website demo",
    "website design Korba",
    "Global Computers projects",
    "retail website demo",
    "restaurant website demo",
    "clinic website demo",
    "gym website demo",
    "hotel website demo",
    "builder website demo",
    "mobile shop website demo",
    "showroom website demo",
    "computer shop website demo",
    "billing software demo",
  ],
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
  openGraph: {
    title: "Projects | Live Business Website Demos & Software Demos",
    description:
      "Explore ready live demo projects for business websites and software solutions built for real business use and lead generation.",
    url: `${SITE_URL}/projects`,
    siteName: BRAND_NAME,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/logo_header_svr.png`,
        width: 1200,
        height: 630,
        alt: "Global Computers Projects Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Live Business Website Demos & Software Demos",
    description:
      "Explore ready live demo projects for business websites and software solutions.",
    images: [`${SITE_URL}/logo_header_svr.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

type DemoCategory =
  | "Builder"
  | "Car Rental"
  | "Clinic"
  | "Coaching"
  | "Computer Shop"
  | "GST Billing & Inventory"
  | "Gym"
  | "Hotel"
  | "Interior"
  | "Mobile Shop"
  | "Restaurant"
  | "Retail & Supermarket"
  | "Showroom";

type DemoItem = {
  title: string;
  category: DemoCategory;
  description: string;
  features: string[];
  demoHref: string;
  price: string;
  highlight: string;
  whatsappText: string;
};

const demos: DemoItem[] = [
  {
    title: "Builder Website Demo",
    category: "Builder",
    description:
      "Premium business website demo for builders, contractors, developers and construction companies.",
    features: [
      "Project showcase layout",
      "Lead enquiry sections",
      "Premium landing design",
      "WhatsApp integration",
      "Mobile responsive pages",
      "SEO-ready structure",
    ],
    demoHref: "/projects/builder",
    price: "₹5,000 + GST",
    highlight: "Best for builders and project marketing",
    whatsappText:
      "Hello, I want the Builder Website Demo. Please share full details, final cost, and delivery timeline.",
  },
  {
    title: "Car Rental Website Demo",
    category: "Car Rental",
    description:
      "Professional demo for taxi, travel and car rental businesses with enquiry-first design.",
    features: [
      "Vehicle showcase",
      "Booking enquiry flow",
      "WhatsApp integration",
      "Fast mobile UI",
      "Contact-focused layout",
      "Local SEO ready",
    ],
    demoHref: "/projects/car-Rental",
    price: "₹5,000 + GST",
    highlight: "Best for travel and taxi bookings",
    whatsappText:
      "Hello, I want the Car Rental Website Demo. Please share full details, final cost, and delivery timeline.",
  },
  {
    title: "Clinic Website Demo",
    category: "Clinic",
    description:
      "Trust-focused demo for clinics, doctors, healthcare centres and local medical businesses.",
    features: [
      "Doctor or clinic profile",
      "Service pages",
      "Appointment enquiry flow",
      "WhatsApp support",
      "Fast mobile design",
      "Local SEO setup ready",
    ],
    demoHref: "/projects/clinic",
    price: "₹5,000 + GST",
    highlight: "Best for clinics and healthcare trust building",
    whatsappText:
      "Hello, I want the Clinic Website Demo. Please share full details, final cost, and delivery timeline.",
  },
  {
    title: "Coaching Institute Website Demo",
    category: "Coaching",
    description:
      "High-conversion demo for coaching centres, tuition classes, training institutes and education businesses.",
    features: [
      "Course presentation",
      "Admission enquiry flow",
      "Result and trust sections",
      "WhatsApp integration",
      "Fast responsive design",
      "SEO-friendly pages",
    ],
    demoHref: "/projects/coaching",
    price: "₹5,000 + GST",
    highlight: "Best for student admissions and enquiries",
    whatsappText:
      "Hello, I want the Coaching Institute Website Demo. Please share full details, final cost, and delivery timeline.",
  },
  {
    title: "Computer Shop Website Demo",
    category: "Computer Shop",
    description:
      "Demo for computer stores, IT dealers, laptop sellers, printer shops, repair centres and hardware businesses.",
    features: [
      "Product showcase blocks",
      "Services presentation",
      "Lead generation sections",
      "WhatsApp integration",
      "Fast responsive pages",
      "SEO-ready design",
    ],
    demoHref: "/projects/computer",
    price: "₹5,000 + GST",
    highlight: "Best for computer and IT hardware businesses",
    whatsappText:
      "Hello, I want the Computer Shop Website Demo. Please share full details, final cost, and delivery timeline.",
  },
  {
    title: "GST Billing & Inventory Demo",
    category: "GST Billing & Inventory",
    description:
      "Software-style demo for GST billing, stock handling, invoice generation and business operations flow.",
    features: [
      "Billing workflow UI",
      "Inventory management sections",
      "Business software presentation",
      "Modern app-style pages",
      "Operational trust positioning",
      "Lead-focused software demo",
    ],
    demoHref: "/projects/gst-inventory",
    price: "₹5,000 + GST",
    highlight: "Best for software sales and billing demo",
    whatsappText:
      "Hello, I want the GST Billing & Inventory Demo. Please share full details, final cost, and delivery timeline.",
  },
  {
    title: "Gym Website Demo",
    category: "Gym",
    description:
      "Fitness-focused demo for gyms, workout centres, trainers and membership businesses.",
    features: [
      "Plans and programs pages",
      "Gallery sections",
      "WhatsApp enquiry flow",
      "Modern conversion layout",
      "Fast mobile UI",
      "Lead-focused design",
    ],
    demoHref: "/projects/gym",
    price: "₹5,000 + GST",
    highlight: "Best for membership and trial lead generation",
    whatsappText:
      "Hello, I want the Gym Website Demo. Please share full details, final cost, and delivery timeline.",
  },
  {
    title: "Hotel Website Demo",
    category: "Hotel",
    description:
      "Elegant demo for hotels, lodges and resorts with booking enquiry and hospitality presentation.",
    features: [
      "Rooms showcase",
      "Amenities presentation",
      "Booking enquiry sections",
      "WhatsApp integration",
      "Premium hospitality design",
      "Mobile responsive layout",
    ],
    demoHref: "/projects/hotel",
    price: "₹5,000 + GST",
    highlight: "Best for hotels, lodges and resorts",
    whatsappText:
      "Hello, I want the Hotel Website Demo. Please share full details, final cost, and delivery timeline.",
  },
  {
    title: "Interior Design Website Demo",
    category: "Interior",
    description:
      "Portfolio-style demo for interior designers, decor businesses, furniture brands and modular setup companies.",
    features: [
      "Project portfolio showcase",
      "Service sections",
      "Lead enquiry design",
      "WhatsApp integration",
      "Premium visual layout",
      "Responsive pages",
    ],
    demoHref: "/projects/interior",
    price: "₹5,000 + GST",
    highlight: "Best for premium design and portfolio presentation",
    whatsappText:
      "Hello, I want the Interior Design Website Demo. Please share full details, final cost, and delivery timeline.",
  },
  {
    title: "Mobile Shop Website Demo",
    category: "Mobile Shop",
    description:
      "Modern demo for mobile stores, gadget shops, electronics sellers and local device businesses.",
    features: [
      "Product showcase sections",
      "Offer blocks",
      "WhatsApp enquiry flow",
      "Fast mobile-first layout",
      "Contact-focused structure",
      "SEO-friendly design",
    ],
    demoHref: "/projects/mobile",
    price: "₹5,000 + GST",
    highlight: "Best for mobile stores and local gadget sales",
    whatsappText:
      "Hello, I want the Mobile Shop Website Demo. Please share full details, final cost, and delivery timeline.",
  },
  {
    title: "Restaurant Website Demo",
    category: "Restaurant",
    description:
      "Attractive demo for restaurants, cafes and food businesses with menu, gallery and enquiry sections.",
    features: [
      "Menu showcase",
      "Gallery section",
      "WhatsApp order or enquiry",
      "Responsive layout",
      "Fast-loading pages",
      "Local SEO ready",
    ],
    demoHref: "/projects/restaurant",
    price: "₹5,000 + GST",
    highlight: "Best for food, cafe and restaurant branding",
    whatsappText:
      "Hello, I want the Restaurant Website Demo. Please share full details, final cost, and delivery timeline.",
  },
  {
    title: "Retail & Supermarket Website Demo",
    category: "Retail & Supermarket",
    description:
      "Sales-focused demo for supermarkets, grocery stores, retail shops and local product-selling businesses.",
    features: [
      "Product and category sections",
      "Offer banners",
      "Billing and enquiry support",
      "WhatsApp integration",
      "Fast responsive design",
      "Sales-focused layout",
    ],
    demoHref: "/projects/Retail-Supermarket",
    price: "₹5,000 + GST",
    highlight: "Best for retail visibility and local customer reach",
    whatsappText:
      "Hello, I want the Retail & Supermarket Website Demo. Please share full details, final cost, and delivery timeline.",
  },
  {
    title: "Showroom Website Demo",
    category: "Showroom",
    description:
      "Premium demo for furniture, electronics, product display and showroom-based businesses.",
    features: [
      "Premium product showcase",
      "Offer and enquiry sections",
      "WhatsApp integration",
      "Luxury-style presentation",
      "Responsive design",
      "SEO-ready structure",
    ],
    demoHref: "/projects/showroom",
    price: "₹5,000 + GST",
    highlight: "Best for premium visual presentation and leads",
    whatsappText:
      "Hello, I want the Showroom Website Demo. Please share full details, final cost, and delivery timeline.",
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-extrabold text-slate-700 shadow-sm",
        className
      )}
    >
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <div className="mb-3 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-black uppercase tracking-[0.18em] text-blue-700">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
        {description}
      </p>
    </div>
  );
}

function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white bg-white/90 p-4 shadow-sm">
      <div className="text-2xl font-black text-slate-900">{value}</div>
      <div className="mt-1 text-sm font-semibold text-slate-600">{label}</div>
    </div>
  );
}

function FeatureTick({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm leading-6 text-slate-700">
      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[11px] font-black text-emerald-700">
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

function DemoCard({ demo }: { demo: DemoItem }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-100/60">
      <div className="border-b border-slate-100 bg-gradient-to-br from-blue-50 via-white to-white p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-600">
              {demo.category}
            </div>
            <h3 className="mt-2 text-2xl font-black leading-tight text-slate-900">
              {demo.title}
            </h3>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-[11px] font-black uppercase tracking-wide text-emerald-700">
            Live Demo
          </div>
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-600">{demo.description}</p>

        <div className="mt-5 inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-xs font-black text-amber-700">
          {demo.highlight}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
          <div className="text-xs font-black uppercase tracking-wide text-slate-600">
            Starting Price
          </div>
          <div className="mt-1 text-2xl font-black text-blue-700">{demo.price}</div>
          <p className="mt-1 text-xs font-semibold leading-5 text-slate-500">
            Fast launch offer for ready-demo based website setup
          </p>
        </div>

        <div className="mt-6">
          <div className="text-sm font-black text-slate-900">Included Highlights</div>
          <ul className="mt-3 space-y-2.5">
            {demo.features.map((feature) => (
              <FeatureTick key={feature}>{feature}</FeatureTick>
            ))}
          </ul>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="text-sm font-black text-slate-900">Common Package Terms</div>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
            <li>• Website starts from ₹5,000 + GST</li>
            <li>• WhatsApp integration included</li>
            <li>• Local SEO setup included</li>
            <li>• Billing software available with website package</li>
            <li>• Domain is separate and client-owned</li>
            <li>• Hosting from our side ₹500/year extra</li>
            <li>• Support and AMC available after delivery</li>
            <li>• Extra pages or custom work charged separately</li>
          </ul>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Link
            href={demo.demoHref}
            className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3.5 text-center text-sm font-black text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200"
          >
            Open Live Demo
          </Link>

          <a
            href={whatsappLink(demo.whatsappText)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl border-2 border-emerald-200 bg-emerald-50 px-5 py-3.5 text-center text-sm font-black text-emerald-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-100"
          >
            WhatsApp Now
          </a>
        </div>
      </div>
    </article>
  );
}

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/projects#collection`,
      name: "Live Demo Projects",
      url: `${SITE_URL}/projects`,
      description:
        "Collection of live demo projects by Global Computers & IT Solutions for multiple business categories.",
      isPartOf: {
        "@type": "WebSite",
        name: BRAND_NAME,
        url: SITE_URL,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/projects#breadcrumb`,
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
          name: "Projects",
          item: `${SITE_URL}/projects`,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/projects#itemlist`,
      itemListElement: demos.map((demo, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: demo.title,
        url: `${SITE_URL}${demo.demoHref}`,
      })),
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization-projects`,
      name: BRAND_NAME,
      url: SITE_URL,
      telephone: PHONE_NUMBER,
      sameAs: [SITE_URL],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/projects#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is included in the website starting package?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The starting package includes a business website, WhatsApp integration, local SEO setup and support. Extra custom features are charged separately.",
          },
        },
        {
          "@type": "Question",
          name: "Is domain included in the package?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Domain is separate and remains on the client side.",
          },
        },
        {
          "@type": "Question",
          name: "What is the hosting charge?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hosting from our side is available at an extra charge of 500 rupees per year.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide support after delivery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Support, AMC, maintenance and future updates are available after delivery.",
          },
        },
        {
          "@type": "Question",
          name: "Can you customize these demos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. These demos can be customized based on business category, pages, features, design preference and workflow needs.",
          },
        },
      ],
    },
  ],
};

export default function ProjectsPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-blue-50 via-white to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.10),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="max-w-5xl rounded-[32px] border border-slate-200 bg-white/80 px-6 py-8 shadow-sm backdrop-blur sm:px-8 md:px-12 md:py-12">
            <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-blue-700 shadow-sm">
              Live Demo Collection
            </div>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
              Ready Demo Projects That Help Clients Decide Faster
            </h1>

            <p className="mt-6 max-w-4xl text-base leading-8 text-slate-700 md:text-xl">
              Explore live demo projects for{" "}
              <span className="font-extrabold text-slate-900">
                retail, restaurant, clinic, coaching, gym, hotel, showroom, mobile shop,
                builder, car rental, interior, computer shop and billing software
              </span>
              . These demos help customers understand design quality, trust delivery capability
              and move faster toward enquiry.
            </p>

            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-700">
              Business websites start from{" "}
              <span className="font-extrabold text-slate-900">₹5,000 + GST</span> with{" "}
              <span className="font-extrabold">WhatsApp integration</span>,{" "}
              <span className="font-extrabold">local SEO setup</span> and support.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              <Badge>Website Starts ₹5,000 + GST</Badge>
              <Badge>WhatsApp Integration</Badge>
              <Badge>Local SEO Setup</Badge>
              <Badge>Fast Delivery</Badge>
              <Badge>Support Available</Badge>
              <Badge>Hosting ₹500 / Year Extra</Badge>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink(
                  "Hello, I want the best demo project for my business. Please suggest the right option, price and delivery timeline."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-7 py-4 text-center text-sm font-black text-white shadow-lg shadow-emerald-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                Get Best Demo on WhatsApp
              </a>

              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-slate-200 bg-white px-7 py-4 text-center text-sm font-black text-slate-900 transition-all duration-300 hover:bg-slate-50"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard value="13+" label="Live demo types" />
              <StatCard value="Fast" label="Launch-ready flow" />
              <StatCard value="Ready" label="Decision-friendly demos" />
              <StatCard value="Custom" label="Upgrade options available" />
            </div>
          </div>
        </div>
      </section>

      {/* Demo grid */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionHeading
          eyebrow="Explore Demo Collection"
          title="Choose the right demo project for your business"
          description="Each demo below is designed to make business value clear. Open the demo, review the structure and send your enquiry directly on WhatsApp."
        />

        <div className="mt-8 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {demos.map((demo) => (
            <DemoCard key={demo.title} demo={demo} />
          ))}
        </div>
      </section>

      {/* Why demos work */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-8 md:px-12 md:py-14">
          <SectionHeading
            eyebrow="Why demos work"
            title="Why live demos help conversion"
            description="A ready demo reduces hesitation. Customers can instantly see what they may get, understand the presentation quality and move faster toward enquiry."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Live demo before order",
              "Clear business relevance",
              "Faster trust building",
              "Easy WhatsApp enquiry flow",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center text-sm font-black text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:shadow-lg"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package terms */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-10 shadow-sm sm:px-8 md:px-12 md:py-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Simple package terms"
              title="Common terms across demo projects"
              description="Keeping pricing terms simple and visible builds trust. These are the general terms unless your project needs extra customization."
            />

            <a
              href={whatsappLink(
                "Hello, I checked your demo projects. Please guide me with the right package for my business."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3.5 text-sm font-black text-white transition hover:bg-slate-800"
            >
              Ask Package Details
            </a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Website starts from ₹5,000 + GST",
              "WhatsApp integration included",
              "Local SEO setup included",
              "Billing software available with website package",
              "Domain is separate and client-owned",
              "Hosting from our side ₹500/year extra",
              "Support and AMC available after delivery",
              "Extra pages and custom features charged separately",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-blue-50"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business / PSU / enterprise */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="rounded-[32px] border border-slate-800 bg-slate-900 px-6 py-10 text-white shadow-sm sm:px-8 md:px-12 md:py-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="PSU / office / enterprise"
              title="Need a website or software setup for office, institution or structured business use?"
              description="We also support structured delivery for office, institutional, enterprise and PSU-style requirements. This may include website, software, billing system, internal tools, deployment planning, training, support and AMC."
            />

            <a
              href={whatsappLink(
                "Hello, I need a structured website or software solution for office / enterprise / PSU use. Please share proposal details."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-black text-slate-900 transition hover:scale-[1.02]"
            >
              Ask for Proposal
            </a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "On-Premise Friendly",
                d: "Useful where internal control, local systems or policy needs matter.",
              },
              {
                t: "Cloud Deployment",
                d: "Suitable for scalable access, remote use and easier expansion.",
              },
              {
                t: "Hybrid Model",
                d: "Mix of local and cloud setup based on actual requirement.",
              },
              {
                t: "Support & AMC",
                d: "Maintenance, upgrades, training and long-term support services.",
              },
            ].map((item) => (
              <div
                key={item.t}
                className="rounded-2xl border border-white/10 bg-white/10 p-5"
              >
                <div className="text-lg font-black">{item.t}</div>
                <p className="mt-2 text-sm leading-6 text-slate-200">{item.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/10 p-5 text-sm leading-7 text-slate-200">
            We can support websites, billing systems, office tools, software workflows,
            business portals and customized process-based solutions depending on requirement.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-8 md:px-12 md:py-14">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions about demo projects"
            description="Quick answers before you choose a demo or contact us."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              {
                q: "What is included in the website starting package?",
                a: "The starting package includes a business website, WhatsApp integration, local SEO setup and support. Extra custom features are charged separately.",
              },
              {
                q: "Is domain included in the package?",
                a: "No. Domain is separate and remains on the client side.",
              },
              {
                q: "What is the hosting charge?",
                a: "Hosting from our side is available at an extra charge of ₹500 per year.",
              },
              {
                q: "Do you provide support after delivery?",
                a: "Yes. Support, AMC, maintenance and future updates are available after delivery.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="text-lg font-black text-slate-900">{item.q}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="rounded-[32px] border border-blue-200 bg-blue-50 px-6 py-10 shadow-sm sm:px-8 md:px-12 md:py-14">
          <SectionHeading
            eyebrow="Need help choosing?"
            title="Not sure which demo fits your business best?"
            description="Tell us your business type on WhatsApp. We’ll suggest the best matching demo, expected cost and what can be launched fastest for your requirement."
          />

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappLink(
                "Hello, I am not sure which demo is best for my business. Please suggest the best option with price and delivery timeline."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 text-center text-sm font-black text-white transition hover:bg-blue-700"
            >
              Chat on WhatsApp
            </a>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center rounded-2xl border-2 border-blue-200 bg-white px-8 py-4 text-center text-sm font-black text-blue-700 transition hover:bg-blue-100"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}