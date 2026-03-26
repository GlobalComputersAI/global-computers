import type { Metadata } from "next";
import Link from "next/link";

const WHATSAPP =
  "https://wa.me/919752422686?text=Hi%20I%20want%20interior%20design%20services%20for%20my%20space.%20Please%20share%20packages%2C%20pricing%2C%20timeline%2C%20and%20next%20steps.";
const CALL = "tel:+919752422686";

const coreServices = [
  {
    title: "Home Interior Design",
    points: [
      "Living room layout and styling",
      "Bedroom concept and furniture planning",
      "Storage optimization for daily use",
      "Color, texture, and finish direction",
      "Elegant and practical complete-home planning",
    ],
    text: "Complete interior design for flats, villas, and independent homes with strong focus on beauty, comfort, space use, and premium visual appeal.",
  },
  {
    title: "Modular Kitchen Design",
    points: [
      "L-shape, U-shape, parallel, and island layouts",
      "Smart storage and utility planning",
      "Finish, hardware, and countertop guidance",
      "Lighting and workflow optimization",
      "Modern look with practical daily use",
    ],
    text: "Functional and stylish modular kitchen solutions designed for organized storage, efficient movement, durability, and a modern premium feel.",
  },
  {
    title: "Bedroom & Wardrobe Design",
    points: [
      "Wardrobe planning for maximum storage",
      "Bed-back panel and side-unit concepts",
      "Lighting and finish coordination",
      "Minimal, modern, or luxury styling",
      "Comfort-driven layout planning",
    ],
    text: "Bedroom interiors designed to feel calm, polished, and practical with smart wardrobe layouts, elegant finishes, and balanced visual design.",
  },
  {
    title: "Living Room & TV Unit Design",
    points: [
      "Feature wall and TV unit concepts",
      "False ceiling and lighting ideas",
      "Furniture coordination and styling",
      "Luxury texture and panel finish planning",
      "Guest-ready visual presentation",
    ],
    text: "Premium living room interiors that improve the first impression of your home through stylish wall treatment, lighting, and furniture flow.",
  },
  {
    title: "Office Interior Design",
    points: [
      "Reception, cabin, and workstation layout",
      "Meeting-zone and storage planning",
      "Professional brand-oriented interior feel",
      "Efficient movement and utility design",
      "Executive visual appeal",
    ],
    text: "Modern office interiors for productivity, professionalism, and better brand image with clean layout planning and premium finish suggestions.",
  },
  {
    title: "Shop & Showroom Interior",
    points: [
      "Display layout for better product visibility",
      "Customer movement and counter planning",
      "Branded visual appeal",
      "Lighting and wall-display concepts",
      "Better walk-in experience",
    ],
    text: "Commercial interior planning for shops and showrooms to improve presentation, customer attention, and the overall buying experience.",
  },
  {
    title: "False Ceiling & Lighting Design",
    points: [
      "Layered lighting concepts",
      "Ceiling patterns and depth creation",
      "Warm, neutral, or premium ambience planning",
      "Room-based lighting recommendations",
      "Modern visual finish enhancement",
    ],
    text: "False ceiling and lighting solutions that make spaces feel larger, cleaner, more elegant, and visually more premium.",
  },
  {
    title: "Turnkey Interior Execution",
    points: [
      "Concept to handover workflow",
      "Material and finish coordination",
      "Execution guidance and planning",
      "Timeline-based work approach",
      "Single-flow professional project handling",
    ],
    text: "End-to-end interior support for clients who want a cleaner process, better coordination, and more confidence before work begins.",
  },
];

const packages = [
  {
    title: "Basic Package",
    tag: "Budget-Friendly Start",
    bestFor: "Best for small rooms, quick upgrades, and budget-sensitive customers.",
    highlights: [
      "Space planning consultation",
      "Basic layout guidance",
      "Color and finish suggestions",
      "Material direction",
      "Simple design support",
      "Good for entry-level projects",
    ],
  },
  {
    title: "Premium Package",
    tag: "Most Popular",
    bestFor: "Best for homes, offices, and customers who want better design depth and presentation.",
    highlights: [
      "2D / 3D design support",
      "Better storage planning",
      "Lighting and finish coordination",
      "Material and style guidance",
      "Room-by-room design direction",
      "Strong balance of quality and value",
    ],
  },
  {
    title: "Luxury Package",
    tag: "High-End Custom Interior",
    bestFor: "Best for premium homes, executive offices, and clients wanting stronger visual impact.",
    highlights: [
      "Custom concept planning",
      "Premium finish direction",
      "Luxury styling approach",
      "High-end material suggestions",
      "Advanced aesthetic detailing",
      "Complete premium presentation",
    ],
  },
];

const projectTypes = [
  {
    name: "1 BHK / 2 BHK / 3 BHK Homes",
    text: "Space-smart interiors for modern family living with beauty, comfort, and practical use.",
  },
  {
    name: "Modular Kitchens",
    text: "Smart kitchen planning with efficient workflow, storage, and premium styling.",
  },
  {
    name: "Bedrooms & Wardrobes",
    text: "Elegant personal spaces with comfort-focused layout and polished storage design.",
  },
  {
    name: "Living Rooms",
    text: "Premium visual upgrade for family and guest-facing spaces with strong first impression.",
  },
  {
    name: "Offices & Cabins",
    text: "Professional interiors built for productivity, brand image, and smooth daily use.",
  },
  {
    name: "Shops & Showrooms",
    text: "Display-driven layouts that support visibility, movement, and stronger walk-in appeal.",
  },
];

const whyThisPageConverts = [
  {
    title: "Service Clarity",
    text: "Customers understand what they are getting, which reduces confusion and increases enquiry quality.",
  },
  {
    title: "Package Structure",
    text: "Basic, Premium, and Luxury positioning helps buyers quickly identify what suits their budget.",
  },
  {
    title: "Professional Positioning",
    text: "A well-structured services page makes the business look established, reliable, and serious.",
  },
  {
    title: "Direct WhatsApp Action",
    text: "Every section pushes the user toward easy conversation instead of making them search for next steps.",
  },
];

const process = [
  "Requirement discussion and style understanding",
  "Space planning and design direction",
  "Package and scope finalization",
  "Material and finish planning",
  "Execution coordination and timeline clarity",
  "Final delivery and client handover",
];

const faq = [
  {
    q: "Do you provide interior design only or complete execution too?",
    a: "This service page is structured to support both consultation-based design and turnkey execution-style projects depending on customer requirement and budget.",
  },
  {
    q: "Can this work for both home and office clients?",
    a: "Yes. The page is designed to sell residential and commercial interiors including homes, offices, shops, cabins, showrooms, and modular kitchen projects.",
  },
  {
    q: "Why is package structure important on an interior website?",
    a: "Packages reduce price confusion, make comparison easier, and help serious buyers qualify themselves faster before contacting you.",
  },
  {
    q: "Why include WhatsApp CTA on every section?",
    a: "Because fast, easy response improves lead conversion. Most users prefer direct WhatsApp chat instead of long form-heavy processes.",
  },
];

export const metadata: Metadata = {
  title:
    "Interior Design Services Page | Home, Office, Modular Kitchen & Turnkey Interior Solutions",
  description:
    "Explore premium interior design services for homes, offices, shops, showrooms, modular kitchens, wardrobes, living rooms, false ceilings, and turnkey interiors. High-conversion service page with strong SEO, premium UI, and WhatsApp-first sales flow.",
  keywords: [
    "interior design services",
    "home interior design services",
    "office interior design services",
    "modular kitchen design services",
    "bedroom wardrobe design",
    "living room interior design",
    "shop interior design",
    "showroom interior design",
    "false ceiling design services",
    "turnkey interior solutions",
    "interior designer Korba",
    "interior designer Chhattisgarh",
    "premium interior packages",
    "interior website services page",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/interior/services/",
  },
  openGraph: {
    title:
      "Interior Design Services Page | Home, Office, Modular Kitchen & Turnkey Interior Solutions",
    description:
      "Premium interior design services page built for trust, lead generation, service clarity, and maximum customer conversion.",
    url: "https://globalcomputers.net/projects/interior/services/",
    type: "website",
  },
};

function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "center max-w-prose mx-auto" : "max-w-prose"}>
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="heading-xl mt-5">{title}</h1>
      <p className="lead mt-4">{text}</p>
    </div>
  );
}

export default function InteriorServicesPage() {
  return (
    <>
      <section className="section-hero">
        <div className="container hero-grid">
          <div>
            <SectionHeading
              eyebrow="Interior Services"
              title="Premium interior design services that make customers trust faster and enquire quicker"
              text="This services page is built to sell. It clearly explains what you do, what the customer gets, how the packages work, and why contacting you is the next right step. Perfect for homes, offices, shops, showrooms, modular kitchens, wardrobes, and turnkey interior projects."
            />

            <div className="trust-row mt-8">
              <span className="badge">Residential + Commercial</span>
              <span className="badge">Basic / Premium / Luxury</span>
              <span className="badge">WhatsApp-First Lead Flow</span>
              <span className="badge">Premium Conversion UI</span>
            </div>

            <div className="cta-row mt-8">
              <a href={WHATSAPP} className="btn btn-whatsapp">
                Get Service Details on WhatsApp
              </a>
              <a href={CALL} className="btn btn-secondary">
                Call Now
              </a>
              <Link href="/projects/interior/billing" className="btn btn-primary">
                Check Estimate Page
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            <div className="surface-strong p-6 md:p-7">
              <span className="badge badge-soft">Most Important Sales Page</span>
              <h2 className="heading-lg mt-5">
                A strong services page removes confusion and increases serious enquiries
              </h2>
              <p className="lead mt-4">
                Most customers ask the same questions before deciding: What do
                you do? Is it for my type of space? What package fits my budget?
                What happens next? This page answers all of that clearly.
              </p>

              <div className="grid-auto-2 mt-7">
                <div className="feature-card">
                  <div className="text-soft text-sm font-bold uppercase tracking-[0.14em]">
                    Best For
                  </div>
                  <div className="heading-md mt-3">Trust + Sales</div>
                  <p className="text-muted mt-3">
                    Professional service blocks, package clarity, and repeated
                    CTA placement help convert more visitors into leads.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="text-soft text-sm font-bold uppercase tracking-[0.14em]">
                    Why It Works
                  </div>
                  <div className="heading-md mt-3">Clear buying path</div>
                  <p className="text-muted mt-3">
                    The visitor sees relevant services, understands options,
                    and gets pushed toward WhatsApp without feeling pressure.
                  </p>
                </div>
              </div>

              <div className="cta-row mt-7">
                <a href={WHATSAPP} className="btn btn-whatsapp">
                  Discuss My Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <SectionHeading
            eyebrow="Where These Services Fit"
            title="Designed for the spaces people actually spend money on"
            text="A good interior page should immediately tell the buyer that you handle their exact requirement. That is why these project categories are shown clearly."
            center
          />

          <div className="grid-auto-3 mt-12">
            {projectTypes.map((item) => (
              <article key={item.name} className="feature-card">
                <h2 className="heading-md">{item.name}</h2>
                <p className="text-muted mt-3">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Core Interior Services"
            title="Complete service structure for premium interior design selling"
            text="These service blocks are written to increase clarity, improve trust, and help users quickly identify what matches their project."
          />

          <div className="grid-auto-2 mt-12">
            {coreServices.map((service) => (
              <article key={service.title} className="service-card">
                <h2 className="heading-md">{service.title}</h2>
                <p className="text-muted mt-3">{service.text}</p>

                <ul className="mt-5 space-y-3 text-muted">
                  {service.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>

                <div className="cta-row mt-7">
                  <a href={WHATSAPP} className="btn btn-whatsapp">
                    Ask About This Service
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <SectionHeading
            eyebrow="Interior Packages"
            title="Package structure that helps buyers decide faster"
            text="Price confusion is one of the biggest reasons users leave service pages. A clean package structure makes the business look more professional and helps customers choose with more confidence."
            center
          />

          <div className="grid-auto-3 mt-12">
            {packages.map((pkg) => (
              <article key={pkg.title} className="price-card">
                <span className="badge badge-soft">{pkg.tag}</span>
                <h2 className="heading-md mt-5">{pkg.title}</h2>
                <p className="text-muted mt-3">{pkg.bestFor}</p>

                <ul className="mt-5 space-y-3 text-muted">
                  {pkg.highlights.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>

                <div className="cta-row mt-7">
                  <a href={WHATSAPP} className="btn btn-whatsapp btn-block">
                    Enquire {pkg.title}
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="center mt-10">
            <Link href="/projects/interior/contact" className="btn btn-primary">
              Contact for Package Guidance
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="soft-panel p-6 md:p-10">
            <SectionHeading
              eyebrow="Why This Page Sells"
              title="Built to improve both trust and enquiry quality"
              text="This is not just a list of services. It is a sales page designed to remove doubt, answer common buying questions, and move visitors toward direct action."
            />

            <div className="grid-auto-2 mt-10">
              {whyThisPageConverts.map((item) => (
                <article key={item.title} className="surface p-6">
                  <h2 className="heading-md">{item.title}</h2>
                  <p className="text-muted mt-3">{item.text}</p>
                </article>
              ))}
            </div>

            <div className="cta-row mt-8">
              <a href={WHATSAPP} className="btn btn-whatsapp">
                Get Expert Help on WhatsApp
              </a>
              <Link href="/projects/interior/projects" className="btn btn-secondary">
                View Project Showcase
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <SectionHeading
            eyebrow="Our Work Process"
            title="Simple process that gives customers more confidence before they commit"
            text="When the next step is clear, conversion improves. A strong service page should not leave the user wondering what happens after they message you."
            center
          />

          <div className="grid-auto-3 mt-12">
            {process.map((item, index) => (
              <article key={item} className="feature-card">
                <div className="text-gradient text-3xl font-black">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                <h2 className="heading-md mt-4">{item}</h2>
                <p className="text-muted mt-3">
                  Clear, professional, and easy-to-understand project flow that
                  reduces hesitation and helps customers feel secure.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="glass-card p-6 md:p-10">
            <div className="grid-auto-2">
              <div>
                <span className="eyebrow">Estimate Advantage</span>
                <h2 className="heading-xl mt-5">
                  Want even stronger conversion? Add a professional estimate flow
                </h2>
                <p className="lead mt-4">
                  Customers trust interior businesses more when they see a
                  structured billing or estimate page. It adds seriousness,
                  improves pricing confidence, and supports faster decision-making.
                </p>

                <div className="cta-row mt-8">
                  <Link href="/projects/interior/billing" className="btn btn-primary">
                    Open Estimate / Billing Page
                  </Link>
                  <a href={WHATSAPP} className="btn btn-whatsapp">
                    Request My Estimate
                  </a>
                </div>
              </div>

              <div className="surface p-6">
                <h2 className="heading-md">What customers understand better</h2>
                <ul className="mt-5 space-y-3 text-muted">
                  <li>• Project type and work scope</li>
                  <li>• Finish level and material category</li>
                  <li>• Approximate pricing direction</li>
                  <li>• Professional presentation and structure</li>
                  <li>• That they are dealing with a serious business</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Answer the biggest buying doubts before the user leaves"
            text="Strong FAQs reduce hesitation, improve confidence, and make the service page feel more complete and trustworthy."
            center
          />

          <div className="grid-auto-2 mt-12">
            {faq.map((item) => (
              <article key={item.q} className="feature-card">
                <h2 className="heading-md">{item.q}</h2>
                <p className="text-muted mt-3">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="glass-card p-6 md:p-10 center">
            <span className="eyebrow mx-auto">Final CTA</span>
            <h2 className="heading-xl mt-5">
              Ready to discuss your home, office, kitchen, or showroom interior?
            </h2>
            <p className="lead mt-4 max-w-prose mx-auto">
              Share your requirement, budget range, property type, and city on
              WhatsApp for a faster response. This page is structured to make
              enquiry easy, direct, and conversion-friendly.
            </p>

            <div className="cta-row mt-8 justify-center">
              <a href={WHATSAPP} className="btn btn-whatsapp">
                Get Service Details on WhatsApp
              </a>
              <a href={CALL} className="btn btn-secondary">
                Call Now
              </a>
              <Link href="/projects/interior/contact" className="btn btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}