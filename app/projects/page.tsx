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
  title:
    "Live Website Demo Projects | Business Website Demos in India | Global Computers",
  description:
    "Explore live business website demo projects by Global Computers & IT Solutions. Ready demos for builder, car rental, clinic, coaching, computer shop, GST billing, gym, hotel, interior, mobile shop, restaurant, retail supermarket, and showroom businesses. Website starts from ₹5,000 + GST with WhatsApp integration, local SEO setup, and support.",
  keywords: [
    "website demo projects",
    "live website demos India",
    "business website demo India",
    "website design for local business",
    "ready website projects",
    "Global Computers Korba",
    "website company Korba",
    "website design Chhattisgarh",
    "builder website demo",
    "car rental website demo",
    "clinic website demo",
    "coaching website demo",
    "computer shop website demo",
    "GST billing software demo",
    "gym website demo",
    "hotel website demo",
    "interior design website demo",
    "mobile shop website demo",
    "restaurant website demo",
    "retail supermarket website demo",
    "showroom website demo",
    "website starting 5000",
    "WhatsApp website demo",
    "small business website India",
  ],
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
  openGraph: {
    title:
      "Live Website Demo Projects | Business Website Demos | Global Computers",
    description:
      "Browse ready live website demo projects for multiple business types. Fast launch, strong design, WhatsApp integration, local SEO setup, and support.",
    url: `${SITE_URL}/projects`,
    siteName: BRAND_NAME,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Live Website Demo Projects | Business Website Demos | Global Computers",
    description:
      "Ready website demos for local businesses. Starting from ₹5,000 + GST with WhatsApp integration and local SEO setup.",
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
      "Premium business website demo for builders, contractors, developers, real estate projects, and construction companies.",
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
      "Professional website demo for taxi, tour, travel, self-drive, and car rental businesses with strong lead conversion flow.",
    features: [
      "Vehicle showcase",
      "Booking enquiry flow",
      "WhatsApp integration",
      "Fast loading mobile UI",
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
      "Trust-focused website demo for doctors, local clinics, diagnostic centres, and healthcare businesses.",
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
      "High-conversion website demo for coaching institutes, tuition classes, skill centres, and education businesses.",
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
      "Business website demo for computer stores, laptop shops, printer dealers, IT dealers, repair centres, and hardware suppliers.",
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
      "Software-style demo for GST billing, inventory, invoice generation, stock management, and business operations.",
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
      "High-energy fitness website demo for gyms, fitness centres, trainers, and workout programs.",
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
      "Elegant hotel and resort website demo for rooms, amenities, booking enquiries, and premium hospitality branding.",
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
    highlight: "Best for hotels, lodges, and resorts",
    whatsappText:
      "Hello, I want the Hotel Website Demo. Please share full details, final cost, and delivery timeline.",
  },
  {
    title: "Interior Design Website Demo",
    category: "Interior",
    description:
      "Portfolio-style website demo for interior designers, furniture brands, decor firms, and modular kitchen businesses.",
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
      "Modern website demo for mobile stores, electronics shops, gadget sellers, and repair businesses.",
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
      "Attractive restaurant and cafe website demo with menu pages, gallery, contact flow, and order enquiry support.",
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
    highlight: "Best for food, cafe, and restaurant branding",
    whatsappText:
      "Hello, I want the Restaurant Website Demo. Please share full details, final cost, and delivery timeline.",
  },
  {
    title: "Retail & Supermarket Website Demo",
    category: "Retail & Supermarket",
    description:
      "Business website demo for supermarkets, grocery stores, retail shops, and local product-selling businesses.",
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
      "Premium website demo for furniture showrooms, electronics showrooms, vehicle showrooms, and display-based businesses.",
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
        "inline-flex items-center rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-extrabold text-slate-700 shadow-sm",
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
      <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
        {description}
      </p>
    </div>
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
            Fast launch offer for ready demo based website setup
          </p>
        </div>

        <div className="mt-6">
          <div className="text-sm font-black text-slate-900">Included Highlights</div>
          <ul className="mt-3 space-y-2.5">
            {demo.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm leading-6 text-slate-700"
              >
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[11px] font-black text-emerald-700">
                  ✓
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="text-sm font-black text-slate-900">Package Includes</div>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
            <li>• Website starts from ₹5,000 + GST</li>
            <li>• Billing software free with website package</li>
            <li>• WhatsApp integration included</li>
            <li>• Local SEO setup included</li>
            <li>• Domain is separate and on client side</li>
            <li>• Hosting from our side ₹500/year extra</li>
            <li>• AMC and support available after delivery</li>
            <li>• Extra features and custom work charged separately</li>
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
  "@type": "CollectionPage",
  name: "Live Website Demo Projects",
  url: `${SITE_URL}/projects`,
  description:
    "Collection of live website demo projects by Global Computers & IT Solutions for multiple business categories.",
  isPartOf: {
    "@type": "WebSite",
    name: BRAND_NAME,
    url: SITE_URL,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
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
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: demos.map((demo, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: demo.title,
    url: `${SITE_URL}${demo.demoHref}`,
  })),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND_NAME,
  url: SITE_URL,
  telephone: PHONE_NUMBER,
  sameAs: [SITE_URL],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is included in the website starting package?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The starting package includes a business website, WhatsApp integration, local SEO setup, and support. Billing software is free with the website package.",
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
      name: "Do you provide billing software free with website package?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Billing software is free with the website package.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide AMC and support after delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AMC, maintenance, support, and future updates are available after delivery.",
      },
    },
  ],
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-white px-6 py-10 shadow-sm sm:px-8 md:px-12 md:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.10),transparent_24%)]" />

        <div className="relative max-w-5xl">
          <div className="inline-flex rounded-full border border-blue-200 bg-white/90 px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-blue-700 shadow-sm">
            Ready Live Demo Projects
          </div>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
            Live Business Website Demos That Help You Sell Faster
          </h1>

          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-700 md:text-xl">
            Explore ready website demo projects for{" "}
            <span className="font-extrabold text-slate-900">
              builder, car rental, clinic, coaching, computer shop, GST billing,
              gym, hotel, interior, mobile shop, restaurant, retail supermarket,
              and showroom businesses
            </span>
            . These demo projects are built to help customers understand the design,
            trust the service, and take action faster.
          </p>

          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-700">
            Every website starts from{" "}
            <span className="font-extrabold text-slate-900">₹5,000 + GST</span>{" "}
            with <span className="font-extrabold">WhatsApp integration</span>,{" "}
            <span className="font-extrabold">local SEO setup</span>,{" "}
            <span className="font-extrabold">support</span>, and{" "}
            <span className="font-extrabold">billing software free</span> with the
            website package.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            <Badge>Website Starts ₹5,000 + GST</Badge>
            <Badge>Billing Software Free</Badge>
            <Badge>WhatsApp Integration</Badge>
            <Badge>Local SEO Setup</Badge>
            <Badge>Fast Delivery</Badge>
            <Badge>AMC Available</Badge>
            <Badge>Hosting ₹500 / Year Extra</Badge>
          </div>

          <div className="mt-8 grid gap-4 sm:flex sm:flex-wrap">
            <a
              href={whatsappLink(
                "Hello, I want the best website demo for my business. Please suggest the right demo, price, and delivery timeline."
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
            {[
              { label: "13+", value: "Live Demo Types" },
              { label: "Fast", value: "Local Business Delivery" },
              { label: "Free", value: "Billing Software with Package" },
              { label: "SEO", value: "Local SEO Setup Included" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white bg-white/90 p-4 shadow-sm"
              >
                <div className="text-2xl font-black text-slate-900">{item.label}</div>
                <div className="mt-1 text-sm font-semibold text-slate-600">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading
          eyebrow="Explore Demo Collection"
          title="Choose the right live demo project for your business"
          description="Every demo below is designed for real business conversion. Open a live demo, check the design, understand the value, and send a WhatsApp enquiry directly."
        />

        <div className="mt-8 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {demos.map((demo) => (
            <DemoCard key={demo.title} demo={demo} />
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-[32px] border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-8 md:px-12 md:py-14">
        <SectionHeading
          eyebrow="Why This Page Converts Better"
          title="Why clients buy faster when they see live demos"
          description="A ready live demo removes doubt. Customers can instantly see layout quality, understand what they will get, and trust your delivery capability. That reduces confusion and improves conversion."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Live demo before order",
            "Clear starting price",
            "Fast business launch",
            "Easy WhatsApp contact flow",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center text-sm font-black text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:shadow-lg"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-10 sm:px-8 md:px-12 md:py-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Simple Pricing Terms"
            title="Common package terms for all demo projects"
            description="Simple and clear terms increase trust. These terms apply across the demo projects unless your requirement includes advanced customization."
          />

          <a
            href={whatsappLink(
              "Hello, I checked your demo project page. Please guide me with the right package for my business."
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
            "Billing software free with website package",
            "WhatsApp integration included",
            "Local SEO setup included",
            "Domain is separate and on client side",
            "Hosting from our side ₹500/year extra",
            "AMC and support available after delivery",
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
      </section>

      <section className="mt-16 rounded-[32px] border border-slate-800 bg-slate-900 px-6 py-10 text-white shadow-sm sm:px-8 md:px-12 md:py-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="PSU / Enterprise / Government"
            title="Need a business website or software for PSU, office, or enterprise?"
            description="We also support structured deployment for PSU, enterprise, office, and institutional requirements. We can help with website, software, billing system, internal tools, deployment planning, support, training, and AMC."
          />

          <a
            href={whatsappLink(
              "Hello, I need a PSU / enterprise website or software solution. Please share deployment options and proposal details."
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
              t: "On-Premise Setup",
              d: "Local deployment with full internal control and policy compliance.",
            },
            {
              t: "Cloud Deployment",
              d: "Scalable access, remote usage, and easier expansion support.",
            },
            {
              t: "Hybrid Model",
              d: "Mix of local and cloud as per business or department need.",
            },
            {
              t: "Support & AMC",
              d: "Maintenance, upgrades, training, and long-term support services.",
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
          We can deliver websites, billing systems, office software, ERP-style
          workflows, support tools, business portals, asset handling solutions, and
          custom business process software for private business, enterprise, and PSU
          environments.
        </div>
      </section>

      <section className="mt-16 rounded-[32px] border border-blue-200 bg-blue-50 px-6 py-10 shadow-sm sm:px-8 md:px-12 md:py-14">
        <SectionHeading
          eyebrow="Need Help Choosing?"
          title="Not sure which demo is best for your business?"
          description="Tell us your business type on WhatsApp. We will suggest the best matching demo, expected cost, and what can be launched fastest for your requirement."
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
      </section>
    </main>
  );
}