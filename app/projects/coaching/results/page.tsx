import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Student Results & Testimonials | Coaching Institute Website Demo",
  description:
    "View student results, success stories, testimonials, and performance highlights from a coaching institute. Premium results page designed to build trust and increase admission enquiries.",
  keywords: [
    "coaching results page",
    "student result website",
    "coaching testimonials",
    "tuition class results",
    "education success stories",
    "coaching institute achievements",
    "student performance website",
    "coaching trust page",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/coaching/results/",
  },
  openGraph: {
    title: "Student Results & Testimonials | Coaching Institute Website Demo",
    description:
      "Premium results page with student scores, testimonials, and performance proof to increase parent trust and coaching admissions.",
    url: "https://globalcomputers.net/projects/coaching/results/",
    type: "website",
    siteName: "Global Computers & IT Solutions",
  },
};

const WHATSAPP =
  "https://wa.me/919752422686?text=Hi%20I%20saw%20your%20student%20results.%20I%20want%20admission%20details.";
const CALL = "tel:+919752422686";

const topResults = [
  { name: "Riya Sharma", score: "98%", exam: "Class 10 Board" },
  { name: "Aman Verma", score: "96%", exam: "Class 12 Board" },
  { name: "Kunal Patel", score: "95%", exam: "Class 10 Board" },
  { name: "Sneha Gupta", score: "97%", exam: "Class 12 Board" },
];

const performanceStats = [
  { value: "500+", label: "Students Trained" },
  { value: "95%", label: "Average Satisfaction" },
  { value: "90%+", label: "Score Improvement Rate" },
  { value: "20+", label: "Tests Per Batch" },
];

const testimonials = [
  {
    name: "Riya Sharma",
    role: "Class 10 Student",
    text: "Regular tests and revision helped me improve my weak subjects. The teachers explained concepts clearly and always solved doubts.",
  },
  {
    name: "Aman Verma",
    role: "Class 12 Student",
    text: "The structured preparation and mock tests made me confident before exams. I improved my writing and time management.",
  },
  {
    name: "Sneha Gupta",
    role: "Parent",
    text: "We saw real improvement in our child’s performance. The teachers provided regular updates and proper guidance.",
  },
  {
    name: "Kunal Patel",
    role: "Student",
    text: "The environment is very focused and motivating. I was able to score much higher than my previous exams.",
  },
];

const improvementPoints = [
  "Regular mock tests based on real exam pattern",
  "Chapter-wise revision and performance tracking",
  "Focused doubt solving sessions",
  "Personal attention in small batches",
  "Motivation and discipline support",
  "Parent communication and progress updates",
];

const faqs = [
  {
    q: "Do these results reflect real student performance?",
    a: "Yes. Coaching institutes usually showcase real student achievements, top scores, and improvement data to help parents understand teaching effectiveness.",
  },
  {
    q: "Can all students achieve similar results?",
    a: "Results depend on student effort, consistency, and guidance. A good coaching institute improves performance for both average and high-performing students.",
  },
  {
    q: "How are students evaluated during coaching?",
    a: "Through regular tests, mock exams, performance tracking, and continuous feedback from teachers.",
  },
  {
    q: "Do parents get performance updates?",
    a: "Yes. Many institutes provide updates through WhatsApp, test reports, and direct communication.",
  },
];

export default function CoachingResultsPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy fade-up">
              <span className="eyebrow">Results & Testimonials</span>

              <h1>
                Student Results Page That Builds{" "}
                <span className="text-primary">Trust and Admissions</span>
              </h1>

              <p className="lead">
                Parents do not choose coaching institutes based on design alone. They
                choose based on results, improvement, and real student outcomes.
              </p>

              <p>
                This results page is designed to showcase performance, build trust,
                and help visitors confidently take the next step toward admission.
              </p>

              <div className="btn-row spacer-lg">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                >
                  Ask Admission Details
                </a>
                <a href={CALL} className="btn btn-call">
                  Call Now
                </a>
              </div>

              <div className="badges spacer-lg">
                <span className="badge">Real Results</span>
                <span className="badge">Parent Trust</span>
                <span className="badge">Performance Focus</span>
                <span className="badge">High Conversion Page</span>
              </div>
            </div>

            <div className="hero-card glass fade-up">
              <div className="stack">
                <span className="eyebrow">Top Performers</span>
                {topResults.map((item) => (
                  <div key={item.name} className="hero-point">
                    <div>
                      <h3>{item.name}</h3>
                      <p>
                        {item.exam} • <strong>{item.score}</strong>
                      </p>
                    </div>
                  </div>
                ))}
                <Link href="/projects/coaching/contact/" className="btn btn-primary">
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section section-sm">
        <div className="container">
          <div className="stats">
            {performanceStats.map((item) => (
              <div key={item.label} className="stat-card card-solid">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY RESULTS MATTER */}
      <section className="section">
        <div className="container grid-2">
          <div className="card panel-lg">
            <span className="eyebrow">Why Results Matter</span>
            <h2>Results Are the Strongest Decision Factor for Parents</h2>
            <p>
              Parents compare multiple coaching institutes before making a decision.
              The institute that shows consistent results, improvement, and student
              progress gains more trust and enquiries.
            </p>
            <ul className="list-clean spacer-top">
              {improvementPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="card panel-lg">
            <span className="eyebrow">Conversion Psychology</span>
            <h2>How This Page Increases Admission Enquiries</h2>
            <ul className="list-clean spacer-top">
              <li>Shows real student performance proof</li>
              <li>Reduces parent hesitation</li>
              <li>Builds emotional trust through testimonials</li>
              <li>Highlights improvement, not just toppers</li>
              <li>Encourages quick WhatsApp enquiry</li>
              <li>Supports SEO with structured content</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Testimonials</span>
            <h2>What Students and Parents Say</h2>
          </div>

          <div className="grid-3 spacer-lg">
            {testimonials.map((item) => (
              <div key={item.name} className="card panel-lg">
                <h3>{item.name}</h3>
                <p className="muted" style={{ fontWeight: 700 }}>
                  {item.role}
                </p>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-section">
            <div className="grid-2" style={{ alignItems: "center" }}>
              <div>
                <span className="eyebrow" style={{ background: "#fff", color: "#312e81" }}>
                  Admission Open
                </span>
                <h2>Want Your Child to Achieve Better Results?</h2>
                <p>
                  Strong coaching, proper guidance, and regular testing can
                  significantly improve performance. Contact now to understand batch
                  details and admission process.
                </p>
              </div>

              <div className="btn-row">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                >
                  WhatsApp Now
                </a>
                <a href={CALL} className="btn btn-secondary">
                  Call Institute
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">FAQs</span>
            <h2>Common Questions About Results</h2>
          </div>

          <div className="faq-list spacer-lg">
            {faqs.map((item) => (
              <div key={item.q} className="faq-item">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-section center">
            <span className="eyebrow" style={{ background: "#fff", color: "#312e81" }}>
              Next Step
            </span>
            <h2>Explore Courses and Admission Details</h2>
            <p style={{ maxWidth: "720px", margin: "0.75rem auto" }}>
              Results build trust. Courses provide clarity. Admission page completes
              the decision. Explore all pages for full experience.
            </p>

            <div className="btn-row" style={{ justifyContent: "center" }}>
              <Link href="/projects/coaching/courses/" className="btn btn-secondary">
                View Courses
              </Link>
              <Link href="/projects/coaching/billing/" className="btn btn-secondary">
                Admission Page
              </Link>
              <Link href="/projects/coaching/contact/" className="btn btn-secondary">
                Contact Page
              </Link>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
              >
                WhatsApp Enquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}