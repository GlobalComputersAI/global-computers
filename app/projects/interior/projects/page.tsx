import type { Metadata } from "next";
import Link from "next/link";

const WHATSAPP =
  "https://wa.me/919752422686?text=Hi%20I%20want%20interior%20design%20for%20my%20space.%20Please%20share%20portfolio%2C%20pricing%2C%20and%20timeline.";
const CALL = "tel:+919752422686";

const categories = [
  {
    title: "Living Room Interiors",
    type: "Residential",
    style: "Modern Luxury",
    budget: "₹1.8L+",
    timeline: "2 - 4 Weeks",
    desc: "Premium living room concepts with TV units, feature walls, ceiling design, elegant lighting, and furniture coordination for a stylish first impression.",
    points: [
      "TV unit and feature wall concepts",
      "Premium ceiling and lighting ideas",
      "Luxury visual finish",
      "Guest-ready premium presentation",
    ],
  },
  {
    title: "Modular Kitchen Designs",
    type: "Kitchen",
    style: "Smart Utility",
    budget: "₹1.2L+",
    timeline: "1 - 3 Weeks",
    desc: "Functional and beautiful kitchen interiors planned for daily comfort, storage efficiency, clean workflow, and a modern modular finish.",
    points: [
      "L-shape, U-shape, parallel layouts",
      "Storage and utility optimization",
      "Countertop and finish planning",
      "Modern practical workflow design",
    ],
  },
  {
    title: "Bedroom & Wardrobe Designs",
    type: "Residential",
    style: "Elegant Comfort",
    budget: "₹1.4L+",
    timeline: "2 - 3 Weeks",
    desc: "Bedroom interiors focused on comfort, smart wardrobes, calm visual styling, practical layout, and polished finish selection.",
    points: [
      "Wardrobe and storage planning",
      "Bed-back and side-unit design",
      "Warm lighting and finish balance",
      "Minimal to luxury styling options",
    ],
  },
  {
    title: "Office Interior Projects",
    type: "Commercial",
    style: "Professional Premium",
    budget: "₹2.5L+",
    timeline: "3 - 5 Weeks",
    desc: "Office interiors for cabins, reception areas, workstations, and meeting zones designed to improve professionalism and team productivity.",
    points: [
      "Reception and cabin planning",
      "Workstation layout design",
      "Brand-oriented visual finish",
      "Clean modern executive look",
    ],
  },
  {
    title: "Shop & Showroom Interiors",
    type: "Commercial",
    style: "Display-Focused",
    budget: "₹2.2L+",
    timeline: "2 - 4 Weeks",
    desc: "Retail and showroom interiors designed to improve product visibility, customer movement, display clarity, and overall buying experience.",
    points: [
      "Product display planning",
      "Counter and customer flow design",
      "Wall display and lighting ideas",
      "Premium branded presentation",
    ],
  },
  {
    title: "False Ceiling & Lighting",
    type: "Enhancement",
    style: "Mood & Depth",
    budget: "₹80K+",
    timeline: "1 - 2 Weeks",
    desc: "Ceiling and lighting upgrades that make spaces feel brighter, larger, cleaner, and more premium through layered light and depth.",
    points: [
      "Layered lighting concepts",
      "Room-based lighting planning",
      "False ceiling pattern design",
      "Premium ambience creation",
    ],
  },
  {
    title: "Wardrobe & Storage Units",
    type: "Furniture Interior",
    style: "Space Smart",
    budget: "₹90K+",
    timeline: "1 - 2 Weeks",
    desc: "Custom wardrobe and storage solutions that maximize usability while keeping the room stylish, balanced, and clutter-free.",
    points: [
      "Sliding and hinged wardrobe options",
      "Loft and utility storage planning",
      "Neat and premium visual finish",
      "Better organization for daily use",
    ],
  },
  {
    title: "Turnkey Full Home Interior",
    type: "Complete Solution",
    style: "End-to-End",
    budget: "₹4.5L+",
    timeline: "4 - 8 Weeks",
    desc: "Complete home interior package covering planning, styling, materials, room coordination, and execution structure for serious buyers.",
    points: [
      "Full-home design flow",
      "Room-by-room concept planning",
      "Material and finish guidance",
      "Single-flow professional solution",
    ],
  },
];

const styles = [
  {
    title: "Modern Interior Style",
    text: "Clean lines, balanced colors, sleek furniture, and polished materials for a sophisticated modern look.",
  },
  {
    title: "Luxury Interior Style",
    text: "Richer textures, premium finishes, elegant wall treatment, layered lighting, and upscale visual impact.",
  },
  {
    title: "Minimal Interior Style",
    text: "Less clutter, better flow, calm palettes, and practical design that still feels premium and refined.",
  },
  {
    title: "Contemporary Interior Style",
    text: "Fresh, flexible, trend-aware interiors that combine comfort, beauty, and visual relevance.",
  },
];

const whyTheseProductsSell = [
  {
    title: "Visual Buying Power",
    text: "Interior customers buy based on look, feel, and imagination. A good product page helps them see the possibility before they enquire.",
  },
  {
    title: "Clear Use-Case Fit",
    text: "Showing exact room types and project categories helps users quickly identify what matches their own requirement.",
  },
  {
    title: "Budget Confidence",
    text: "When starting ranges and timelines are visible, serious buyers feel more comfortable taking the next step.",
  },
  {
    title: "WhatsApp Conversion",
    text: "Every product card creates direct action, making the journey from interest to enquiry faster and easier.",
  },
];

const process = [
  {
    step: "01",
    title: "Choose Your Space Type",
    text: "The customer selects the category that matches their home, kitchen, office, showroom, or full interior need.",
  },
  {
    step: "02",
    title: "Share Requirement",
    text: "They send layout, room size, preference, and budget on WhatsApp for a faster and more relevant response.",
  },
  {
    step: "03",
    title: "Get Design Direction",
    text: "They receive guidance on style, scope, finish level, and which package is most suitable.",
  },
  {
    step: "04",
    title: "Move Toward Estimate",
    text: "The buyer is now ready for package discussion, site conversation, and estimate-based closing.",
  },
];

const faqs = [
  {
    q: "Why call this a product page for interior design?",
    a: "Because each interior category is presented like a clear offering that users can understand, compare, and enquire about easily. This improves buying clarity and conversion.",
  },
  {
    q: "Can this page work for both residential and commercial clients?",
    a: "Yes. It is structured for homes, kitchens, bedrooms, living rooms, offices, shops, showrooms, and full turnkey interior requirements.",
  },
  {
    q: "Why show starting price and timeline?",
    a: "It helps filter casual visitors from serious buyers and gives customers more confidence before contacting you.",
  },
  {
    q: "Why is WhatsApp the main CTA?",
    a: "Because for interior design leads, fast direct conversation usually converts better than making users search through long forms first.",
  },
];

export const metadata: Metadata = {
  title:
    "Interior Design Projects & Products | Living Room, Kitchen, Bedroom, Office & Showroom Interior Solutions",
  description:
    "Explore premium interior design products and project categories for living rooms, modular kitchens, bedrooms, wardrobes, offices, shops, showrooms, false ceilings, and turnkey home interiors. High-conversion UI, strong SEO, and WhatsApp-first sales flow.",
  keywords: [
    "interior design products",
    "interior design projects",
    "living room interior design",
    "modular kitchen design",
    "bedroom interior design",
    "wardrobe design",
    "office interior design",
    "shop interior design",
    "showroom interior design",
    "false ceiling design",
    "turnkey home interior",
    "interior portfolio page",
    "interior designer Korba",
    "interior designer Chhattisgarh",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/interior/projects/",
  },
  openGraph: {
    title:
      "Interior Design Projects & Products | Living Room, Kitchen, Bedroom, Office & Showroom Interior Solutions",
    description:
      "Premium interior design product and project page built for trust, visual selling, and direct lead generation.",
    url: "https://globalcomputers.net/projects/interior/projects/",
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

export default function InteriorProjectsPage() {
  return (
    <>
      <section className="section-hero">
        <div className="container hero-grid">
          <div>
            <SectionHeading
              eyebrow="Interior Products / Projects"
              title="Premium interior categories that help customers see, trust, and enquire faster"
              text="This page works like a high-conversion interior catalog. It shows exactly what kinds of spaces you design, what style they can expect, where the budget starts, and why contacting you is the next step. Perfect for both sales and trust-building."
            />

            <div className="trust-row mt-8">
              <span className="badge">Living Room to Full Home</span>
              <span className="badge">Residential + Commercial</span>
              <span className="badge">Budget + Timeline Visibility</span>
              <span className="badge">WhatsApp-First Conversion</span>
            </div>

            <div className="cta-row mt-8">
              <a href={WHATSAPP} className="btn btn-whatsapp">
                Get Design Details on WhatsApp
              </a>
              <a href={CALL} className="btn btn-secondary">
                Call Now
              </a>
              <Link href="/projects/interior/services" className="btn btn-primary">
                View Services
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            <div className="surface-strong p-6 md:p-7">
              <span className="badge badge-soft">Best Visual Sales Page</span>
              <h2 className="heading-lg mt-5">
                Interior buyers want to know one thing first: “Can you design my kind of space?”
              </h2>
              <p className="lead mt-4">
                This page answers that immediately. By clearly presenting room
                categories and project types, the visitor quickly understands
                that your business fits their requirement.
              </p>

              <div className="grid-auto-2 mt-7">
                <div className="feature-card">
                  <div className="text-soft text-sm font-bold uppercase tracking-[0.14em]">
                    Best For
                  </div>
                  <div className="heading-md mt-3">Visual trust</div>
                  <p className="text-muted mt-3">
                    Product-style presentation helps users imagine their own
                    space and makes your service feel more premium.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="text-soft text-sm font-bold uppercase tracking-[0.14em]">
                    Conversion Benefit
                  </div>
                  <div className="heading-md mt-3">Faster enquiries</div>
                  <p className="text-muted mt-3">
                    Starting range, timeline, and clear CTA reduce hesitation
                    and move serious buyers toward WhatsApp conversation.
                  </p>
                </div>
              </div>

              <div className="cta-row mt-7">
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
            eyebrow="Interior Categories"
            title="Show the exact spaces you design so the customer connects immediately"
            text="A strong projects page should feel like a premium collection. Every card below is designed to make users think: this is exactly what I need."
            center
          />

          <div className="grid-auto-2 mt-12">
            {categories.map((item) => (
              <article key={item.title} className="project-card">
                <div className="flex flex-wrap gap-3">
                  <span className="badge badge-soft">{item.type}</span>
                  <span className="badge">{item.style}</span>
                </div>

                <h2 className="heading-md mt-5">{item.title}</h2>
                <p className="text-muted mt-3">{item.desc}</p>

                <div className="grid-auto-2 mt-6">
                  <div className="surface p-4">
                    <div className="text-soft text-sm font-semibold">Starting Budget</div>
                    <div className="font-extrabold mt-2">{item.budget}</div>
                  </div>
                  <div className="surface p-4">
                    <div className="text-soft text-sm font-semibold">Timeline</div>
                    <div className="font-extrabold mt-2">{item.timeline}</div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-muted">
                  {item.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>

                <div className="cta-row mt-7">
                  <a href={WHATSAPP} className="btn btn-whatsapp">
                    Ask About This Design
                  </a>
                  <Link href="/projects/interior/contact" className="btn btn-secondary">
                    Contact Us
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Interior Styles"
            title="Help customers imagine the design mood they want"
            text="Interior buyers often think in style before they think in technical scope. Showing style directions makes the page feel more premium and emotionally persuasive."
            center
          />

          <div className="grid-auto-2 mt-12">
            {styles.map((style) => (
              <article key={style.title} className="feature-card">
                <h2 className="heading-md">{style.title}</h2>
                <p className="text-muted mt-3">{style.text}</p>
                <div className="cta-row mt-6">
                  <a href={WHATSAPP} className="btn btn-whatsapp">
                    I Want This Style
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="soft-panel p-6 md:p-10">
            <SectionHeading
              eyebrow="Why This Page Converts"
              title="Built to sell premium interior work, not just display categories"
              text="This page is structured to increase buying confidence. It combines visual imagination, project fit, price direction, and direct CTA in one clean flow."
            />

            <div className="grid-auto-2 mt-10">
              {whyTheseProductsSell.map((item) => (
                <article key={item.title} className="surface p-6">
                  <h2 className="heading-md">{item.title}</h2>
                  <p className="text-muted mt-3">{item.text}</p>
                </article>
              ))}
            </div>

            <div className="cta-row mt-8">
              <a href={WHATSAPP} className="btn btn-whatsapp">
                Get My Space Recommendation
              </a>
              <Link href="/projects/interior/services" className="btn btn-primary">
                Compare Services & Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="How Buyers Move Forward"
            title="Simple project-selection flow that makes enquiry easier"
            text="This process gives customers a clean next step after viewing your interior categories and helps turn interest into action."
            center
          />

          <div className="grid-auto-2 mt-12">
            {process.map((item) => (
              <article key={item.step} className="feature-card">
                <div className="text-gradient text-3xl font-black">{item.step}</div>
                <h2 className="heading-md mt-4">{item.title}</h2>
                <p className="text-muted mt-3">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="glass-card p-6 md:p-10">
            <div className="grid-auto-2">
              <div>
                <span className="eyebrow">Estimate Advantage</span>
                <h2 className="heading-xl mt-5">
                  After this page, the strongest next step is a professional estimate
                </h2>
                <p className="lead mt-4">
                  Once a buyer sees the right design category, they usually want
                  pricing direction. That is why your estimate or billing page
                  becomes the perfect conversion step after this page.
                </p>

                <div className="cta-row mt-8">
                  <Link href="/projects/interior/billing" className="btn btn-primary">
                    Open Estimate / Billing Page
                  </Link>
                  <a href={WHATSAPP} className="btn btn-whatsapp">
                    Request Quote on WhatsApp
                  </a>
                </div>
              </div>

              <div className="surface p-6">
                <h2 className="heading-md">What this helps the buyer understand</h2>
                <ul className="mt-5 space-y-3 text-muted">
                  <li>• Which category fits their space</li>
                  <li>• What visual style they prefer</li>
                  <li>• What starting budget to expect</li>
                  <li>• How long the work may take</li>
                  <li>• Why your business looks more professional</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Answer key doubts before the user leaves the page"
            text="A premium interior page should reduce uncertainty, improve confidence, and make decision-making easier."
            center
          />

          <div className="grid-auto-2 mt-12">
            {faqs.map((item) => (
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
              Ready to choose the right interior design for your space?
            </h2>
            <p className="lead mt-4 max-w-prose mx-auto">
              Share your room type, property type, approximate size, city, and
              budget on WhatsApp for faster guidance. Perfect for living rooms,
              kitchens, bedrooms, offices, shops, showrooms, and complete home
              interior planning.
            </p>

            <div className="cta-row mt-8 justify-center">
              <a href={WHATSAPP} className="btn btn-whatsapp">
                Get Design Suggestion on WhatsApp
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