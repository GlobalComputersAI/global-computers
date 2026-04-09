import type { Metadata } from "next";
import Link from "next/link";
import DemoVideoPopup from "@/components/DemoVideoPopup";

const WHATSAPP =
  "https://wa.me/919752422686?text=Hi%20I%20want%20interior%20design%20for%20my%20space.%20Please%20share%20design%20ideas%2C%20pricing%2C%20and%20timeline.";
const CALL = "tel:+919752422686";

const trustPoints = [
  "Free consultation",
  "Custom home & office interiors",
  "2D / 3D design support",
  "Transparent pricing",
  "On-time execution",
  "WhatsApp-first quick response",
];

const services = [
  {
    title: "Home Interior Design",
    text: "Beautiful, practical interiors for flats, villas, and independent homes with layout planning, storage, finishes, and décor guidance.",
  },
  {
    title: "Modular Kitchen Design",
    text: "Smart modular kitchens with functional layouts, premium finishes, organized storage, and modern lighting concepts.",
  },
  {
    title: "Bedroom & Wardrobe",
    text: "Elegant bedroom interiors with wardrobe planning, bed-back concepts, lighting balance, and space-saving design ideas.",
  },
  {
    title: "Living Room & TV Unit",
    text: "Stylish living spaces with feature walls, TV units, false ceilings, furniture coordination, and premium visual finish.",
  },
  {
    title: "Office & Commercial Interior",
    text: "Professional interiors for offices, cabins, reception areas, stores, and showrooms designed for brand image and productivity.",
  },
  {
    title: "Turnkey Interior Execution",
    text: "From concept to handover—design, materials, coordination, finishing, and final execution handled in one workflow.",
  },
];

const projectShowcase = [
  {
    name: "Modern Luxury Living Room",
    type: "Residential Interior",
    budget: "Starting from ₹1.8L",
    timeline: "2 - 4 Weeks",
    text: "Warm premium tones, modern wall treatment, lighting layers, and elegant storage for a rich, welcoming living space.",
  },
  {
    name: "Space-Smart Modular Kitchen",
    type: "Kitchen Design",
    budget: "Starting from ₹1.2L",
    timeline: "1 - 3 Weeks",
    text: "Practical modular layout with organized storage, durable finishes, efficient workflow, and clean premium styling.",
  },
  {
    name: "Executive Office Interior",
    type: "Commercial Interior",
    budget: "Starting from ₹2.5L",
    timeline: "3 - 5 Weeks",
    text: "Reception, workstation, cabin, and meeting-zone planning designed to improve professionalism, comfort, and daily operations.",
  },
];

const packages = [
  {
    title: "Basic",
    price: "Budget-Friendly",
    points: [
      "Layout planning",
      "Basic design consultation",
      "Material guidance",
      "Standard finish suggestions",
      "Perfect for small spaces",
    ],
  },
  {
    title: "Premium",
    price: "Most Popular",
    points: [
      "2D / 3D design support",
      "Better finish planning",
      "Storage optimization",
      "Lighting & color guidance",
      "Best for homes & offices",
    ],
  },
  {
    title: "Luxury",
    price: "Full Custom",
    points: [
      "Premium concept design",
      "Designer finish planning",
      "High-end customization",
      "Execution coordination",
      "Ideal for premium projects",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    text: "We understand your space, budget, style preference, and usage requirement.",
  },
  {
    step: "02",
    title: "Space Planning",
    text: "We build a practical concept for layout, flow, storage, and interior direction.",
  },
  {
    step: "03",
    title: "Design & Approval",
    text: "We finalize style, materials, colors, and execution scope before starting work.",
  },
  {
    step: "04",
    title: "Execution",
    text: "Work begins with coordinated planning, finish control, and timeline management.",
  },
  {
    step: "05",
    title: "Final Styling",
    text: "We refine the final look so the completed space feels polished and premium.",
  },
  {
    step: "06",
    title: "Handover",
    text: "Your space is delivered ready to use with quality, comfort, and visual impact.",
  },
];

const whyChooseUs = [
  {
    title: "Premium Design Feel",
    text: "Spaces designed to look modern, polished, and high-value without feeling overcrowded.",
  },
  {
    title: "Smart Space Use",
    text: "Every corner is planned for beauty, movement, comfort, and practical daily use.",
  },
  {
    title: "Clear Budget Direction",
    text: "Customers get better clarity on scope, finishes, and pricing before work begins.",
  },
  {
    title: "Fast Response & Closing",
    text: "WhatsApp-first flow makes it easy for leads to ask, decide, and move ahead quickly.",
  },
  {
    title: "Trust-Building Presentation",
    text: "Professional sections, estimate flow, and service clarity help convert serious buyers.",
  },
  {
    title: "Residential + Commercial",
    text: "Suitable for homes, offices, showrooms, shops, cabins, and custom requirement spaces.",
  },
];

const testimonials = [
  {
    name: "Homeowner Project",
    role: "Residential Client",
    text: "The design approach felt premium and practical. We understood the plan clearly and felt confident about moving forward.",
  },
  {
    name: "Office Setup Project",
    role: "Commercial Client",
    text: "The interior presentation looked professional and helped us visualize the final office before execution started.",
  },
  {
    name: "Kitchen Upgrade Project",
    role: "Modular Kitchen Client",
    text: "The layout and finish guidance made the kitchen look modern while keeping it useful for daily family needs.",
  },
];

export const metadata: Metadata = {
  title: "Interior Design Home Page Demo | Premium Home, Office & Modular Interior Website",
  description:
    "Explore a high-conversion interior design home page demo for homes, offices, modular kitchens, wardrobes, false ceilings, and turnkey interior execution. Premium UI, strong SEO, and WhatsApp-first lead generation.",
  keywords: [
    "interior design home page",
    "interior design website demo",
    "home interior website",
    "office interior website",
    "modular kitchen website",
    "interior design services India",
    "interior designer Korba",
    "interior designer Chhattisgarh",
    "premium interior design website",
    "high conversion interior website",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/interior/",
  },
  openGraph: {
    title:
      "Interior Design Home Page Demo | Premium Home, Office & Modular Interior Website",
    description:
      "Premium interior design website demo built for lead generation, trust, modern UI, and strong service conversion.",
    url: "https://globalcomputers.net/projects/interior/",
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
      <h2 className="heading-xl mt-5">{title}</h2>
      <p className="lead mt-4">{text}</p>
    </div>
  );
}

export default function InteriorHomePage() {
  return (
    <>
      <section className="section-hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Premium Interior Design Demo</span>

            <h1 className="display mt-6">
              Modern <span className="text-gradient">Interior Design</span> for
              Homes, Offices, Shops & Showrooms
            </h1>

            <p className="lead mt-6 max-w-prose">
              Premium interior solutions with smart space planning, modular
              design, elegant finishes, practical layouts, and conversion-driven
              presentation. Built to attract serious customers and make your
              business look trusted, modern, and high-value from the first
              visit.
            </p>

            <div className="trust-row mt-8">
              {trustPoints.map((item) => (
                <span key={item} className="badge">
                  {item}
                </span>
              ))}
            </div>

            <div className="cta-row mt-8">
              <a href={WHATSAPP} className="btn btn-whatsapp">
                Get Free Quote on WhatsApp
              </a>
              <a href={CALL} className="btn btn-secondary">
                Call Now
              </a>
              <Link href="/projects/interior/projects" className="btn btn-primary">
                View Projects
              </Link>
            </div>

            <div className="grid-auto-3 mt-10">
              <div className="stat-card">
                <div className="text-soft text-sm font-bold uppercase tracking-[0.14em]">
                  Design Focus
                </div>
                <div className="heading-md mt-3">Premium + Practical</div>
                <p className="text-muted mt-3">
                  Interior concepts that balance luxury feel, usability, and
                  clean execution for real homes and businesses.
                </p>
              </div>

              <div className="stat-card">
                <div className="text-soft text-sm font-bold uppercase tracking-[0.14em]">
                  Lead Conversion
                </div>
                <div className="heading-md mt-3">WhatsApp-First Selling</div>
                <p className="text-muted mt-3">
                  Strong CTA placement, estimate flow, trust sections, and clear
                  service structure built to generate enquiries.
                </p>
              </div>

              <div className="stat-card">
                <div className="text-soft text-sm font-bold uppercase tracking-[0.14em]">
                  Suitable For
                </div>
                <div className="heading-md mt-3">Residential + Commercial</div>
                <p className="text-muted mt-3">
                  Perfect for flats, villas, offices, stores, cabins, kitchens,
                  showrooms, and complete turnkey projects.
                </p>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="surface-strong p-6 md:p-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="badge badge-soft">Home Interior</span>
                <span className="badge badge-soft">Modular Kitchen</span>
                <span className="badge badge-soft">Office Interior</span>
              </div>

              <h2 className="heading-lg mt-6">
                Design a space that looks premium and feels right every day
              </h2>

              <p className="lead mt-4">
                From living rooms and kitchens to executive offices and premium
                showrooms, this interior design demo is crafted to build trust,
                communicate quality, and increase direct leads.
              </p>

              <div className="grid-auto-2 mt-7">
                <div className="feature-card">
                  <div className="text-soft text-sm font-bold uppercase tracking-[0.14em]">
                    What Clients Want
                  </div>
                  <div className="heading-md mt-3">
                    Clear design + clear budget
                  </div>
                  <p className="text-muted mt-3">
                    Most buyers want style, practicality, and confidence before
                    spending. This page is built exactly for that.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="text-soft text-sm font-bold uppercase tracking-[0.14em]">
                    What This Demo Gives
                  </div>
                  <div className="heading-md mt-3">
                    Trust, beauty, and action
                  </div>
                  <p className="text-muted mt-3">
                    Premium layout, service clarity, project showcase, and
                    estimate-style flow make the business look serious.
                  </p>
                </div>
              </div>

              <div className="quote-table mt-7">
                <table className="quote-table">
                  <thead>
                    <tr>
                      <th>Project Type</th>
                      <th>Starting Range</th>
                      <th>Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Modular Kitchen</td>
                      <td>₹1.2L+</td>
                      <td>Modern storage & layout</td>
                    </tr>
                    <tr>
                      <td>Living Room Interior</td>
                      <td>₹1.8L+</td>
                      <td>Luxury visual upgrade</td>
                    </tr>
                    <tr>
                      <td>Office Interior</td>
                      <td>₹2.5L+</td>
                      <td>Brand image & productivity</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="cta-row mt-7">
                <Link href="/projects/interior/services" className="btn btn-primary">
                  Explore Services
                </Link>
                <Link href="/projects/interior/billing" className="btn btn-dark">
                  Check Estimate Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Interior presentation designed to create trust and close more enquiries"
            text="This homepage is not just attractive. It is structured like a real sales page—premium design, clear service flow, trust-building sections, and repeated call-to-action points that move visitors toward WhatsApp or direct calling."
            center
          />

          <div className="grid-auto-3 mt-12">
            {whyChooseUs.map((item) => (
              <article key={item.title} className="feature-card">
                <h3 className="heading-md">{item.title}</h3>
                <p className="text-muted mt-3">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Interior Solutions"
            title="Complete design services for every important part of your space"
            text="Homeowners and business buyers want clarity. These service blocks help users understand exactly what you do and why they should contact you now."
          />

          <div className="grid-auto-3 mt-12">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <h3 className="heading-md">{service.title}</h3>
                <p className="text-muted mt-3">{service.text}</p>
                <div className="cta-row mt-6">
                  <a href={WHATSAPP} className="btn btn-whatsapp">
                    Ask on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="center mt-10">
            <Link href="/projects/interior/services" className="btn btn-primary">
              View All Services & Packages
            </Link>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Show premium work before the customer asks for proof"
            text="Interior buyers decide with emotion and visuals first. A strong portfolio preview instantly improves trust, quality perception, and lead intent."
            center
          />

          <div className="grid-auto-3 mt-12">
            {projectShowcase.map((project) => (
              <article key={project.name} className="project-card">
                <span className="badge badge-soft">{project.type}</span>
                <h3 className="heading-md mt-5">{project.name}</h3>
                <p className="text-muted mt-3">{project.text}</p>

                <div className="grid-auto-2 mt-6">
                  <div className="surface p-4">
                    <div className="text-soft text-sm font-semibold">Budget</div>
                    <div className="font-extrabold mt-2">{project.budget}</div>
                  </div>
                  <div className="surface p-4">
                    <div className="text-soft text-sm font-semibold">Timeline</div>
                    <div className="font-extrabold mt-2">{project.timeline}</div>
                  </div>
                </div>

                <div className="cta-row mt-6">
                  <a href={WHATSAPP} className="btn btn-whatsapp">
                    Get Similar Design
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="center mt-10">
            <Link href="/projects/interior/projects" className="btn btn-dark">
              View Full Project Showcase
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Packages Preview"
            title="Simple package structure that helps serious buyers choose faster"
            text="When customers understand the level of service, they become easier to convert. This section gives a professional starting point without making the page feel complicated."
            center
          />

          <div className="grid-auto-3 mt-12">
            {packages.map((pkg) => (
              <article key={pkg.title} className="price-card">
                <div className="text-soft text-sm font-bold uppercase tracking-[0.14em]">
                  {pkg.price}
                </div>
                <h3 className="heading-md mt-3">{pkg.title}</h3>

                <ul className="mt-5 space-y-3 text-muted">
                  {pkg.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>

                <div className="cta-row mt-7">
                  <a href={WHATSAPP} className="btn btn-whatsapp btn-block">
                    Enquire This Package
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="center mt-10">
            <Link href="/projects/interior/services" className="btn btn-primary">
              Compare Packages
            </Link>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <SectionHeading
            eyebrow="How It Works"
            title="A clear process removes buying fear and builds confidence"
            text="Interior projects feel easier to commit to when the client sees a simple, professional workflow from first discussion to final handover."
            center
          />

          <div className="grid-auto-3 mt-12">
            {processSteps.map((item) => (
              <article key={item.step} className="feature-card">
                <div className="text-gradient text-3xl font-black">{item.step}</div>
                <h3 className="heading-md mt-4">{item.title}</h3>
                <p className="text-muted mt-3">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="soft-panel p-6 md:p-10">
            <SectionHeading
              eyebrow="Instant Estimate Advantage"
              title="Professional estimate flow makes your business look serious"
              text="A dedicated billing or estimate page is one of the strongest trust builders for interior design businesses. It helps customers feel they are dealing with a proper company, not just a casual designer."
            />

            <div className="grid-auto-2 mt-10">
              <div className="surface p-6">
                <h3 className="heading-md">What the estimate page can show</h3>
                <ul className="mt-4 space-y-3 text-muted">
                  <li>• Client name and site details</li>
                  <li>• Project type and work scope</li>
                  <li>• Material category and finish level</li>
                  <li>• Area, cost, GST, and final total</li>
                  <li>• Professional quote-style presentation</li>
                </ul>
              </div>

              <div className="surface p-6">
                <h3 className="heading-md">Why this increases conversion</h3>
                <ul className="mt-4 space-y-3 text-muted">
                  <li>• Improves trust quickly</li>
                  <li>• Makes pricing feel structured</li>
                  <li>• Helps customers understand value</li>
                  <li>• Creates a premium business image</li>
                  <li>• Encourages direct WhatsApp discussion</li>
                </ul>
              </div>
            </div>

            <div className="cta-row mt-8">
              <Link href="/projects/interior/billing" className="btn btn-primary">
                Open Estimate / Billing Page
              </Link>
              <a href={WHATSAPP} className="btn btn-whatsapp">
                Request My Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <SectionHeading
            eyebrow="Testimonials"
            title="Words that strengthen confidence before contact"
            text="Even demo testimonials improve trust perception when presented in a clean, believable, premium format."
            center
          />

          <div className="grid-auto-3 mt-12">
            {testimonials.map((item) => (
              <article key={item.name} className="feature-card">
                <p className="text-muted">“{item.text}”</p>
                <div className="mt-6">
                  <div className="font-extrabold">{item.name}</div>
                  <div className="text-soft mt-1">{item.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="glass-card p-6 md:p-10 center">
            <span className="eyebrow mx-auto">Final Call To Action</span>
            <h2 className="heading-xl mt-5">
              Ready to transform your space into something modern, elegant, and practical?
            </h2>
            <p className="lead mt-4 max-w-prose mx-auto">
              Get a faster response, discuss your budget, share your requirement,
              and receive design direction directly on WhatsApp. Perfect for
              home interiors, modular kitchens, offices, shops, and premium
              commercial spaces.
            </p>

            <div className="cta-row mt-8 justify-center">
              <a href={WHATSAPP} className="btn btn-whatsapp">
                Get Quote on WhatsApp
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

      <DemoVideoPopup
        videoSrc="/videos/interior_final.mp4"
        title="Interior Design Website Demo"
        buttonLabel="See Demo"
        autoOpen={true}
        autoOpenDelay={300}
        showButton={true}
        storageKey="interior-demo-popup-v1"
        poster="/images/hero-it-infrastructure.jpg"
      />
    </>
  );
}