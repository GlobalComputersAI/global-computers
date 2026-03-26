import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coaching Institute Website Demo | Admission Open, Courses, Results",
  description:
    "Premium coaching institute website demo with admission open banner, course details, student results, testimonials, fee highlights, and WhatsApp enquiry flow. Built for high student and parent conversion.",
  keywords: [
    "coaching institute website demo",
    "tuition classes website design",
    "admission open coaching website",
    "student result website",
    "coaching website India",
    "tuition center website with WhatsApp",
    "course admission page",
    "school coaching classes website",
    "education website premium design",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/coaching/",
  },
  openGraph: {
    title: "Coaching Institute Website Demo | Admission Open, Courses, Results",
    description:
      "Premium SEO-ready coaching website demo with admission enquiry, results, testimonials, fee section, and WhatsApp conversion flow.",
    url: "https://globalcomputers.net/projects/coaching/",
    type: "website",
    siteName: "Global Computers & IT Solutions",
  },
};

const WHATSAPP_ADMISSION =
  "https://wa.me/919752422686?text=Hi%20I%20want%20admission%20details%20for%20your%20coaching%20institute.";
const WHATSAPP_DEMO =
  "https://wa.me/919752422686?text=Hi%20I%20want%20to%20book%20a%20free%20demo%20class.";
const CALL = "tel:+919752422686";

const courseCards = [
  {
    title: "School Tuition Programs",
    text: "Strong subject-wise coaching for Classes 6 to 12 with concept clarity, regular tests, and performance tracking.",
  },
  {
    title: "Foundation Batches",
    text: "Build confidence early with structured mathematics, science, reasoning, and language support.",
  },
  {
    title: "Board Exam Preparation",
    text: "Focused revision plans, important questions, answer writing practice, and score improvement strategy.",
  },
  {
    title: "Competitive Exam Coaching",
    text: "Targeted preparation for scholarship, entrance, aptitude, and merit-based exams with guided practice.",
  },
  {
    title: "English & Communication",
    text: "Improve grammar, spoken English, vocabulary, and presentation skills for school and career growth.",
  },
  {
    title: "Personal Mentorship",
    text: "Small batch guidance, doubt solving, parent updates, and customized support for weak and bright students.",
  },
];

const results = [
  { score: "98%", label: "Top Board Score" },
  { score: "500+", label: "Students Guided" },
  { score: "95%", label: "Parent Satisfaction" },
  { score: "20+", label: "Mock Tests Per Batch" },
];

const highlights = [
  "Experienced and student-friendly faculty",
  "Small batch size for better attention",
  "Regular class tests and performance reports",
  "Doubt solving and revision support",
  "WhatsApp updates for parents",
  "Separate focus on weak students",
];

const testimonials = [
  {
    name: "Riya Sharma",
    role: "Class 10 Student",
    quote:
      "The teaching style is very clear and motivating. My marks improved because every chapter was revised properly and tests were taken regularly.",
  },
  {
    name: "Amit Verma",
    role: "Parent",
    quote:
      "We liked the discipline, regular communication, and personal attention. My child became more confident and serious about studies.",
  },
  {
    name: "Kunal Patel",
    role: "Class 12 Student",
    quote:
      "The notes, mock tests, and doubt solving helped me a lot. I felt fully supported before exams and scored much better than expected.",
  },
];

const faqs = [
  {
    q: "Which classes do you provide coaching for?",
    a: "This demo institute supports school tuition, board exam batches, foundation courses, and selected competitive exam preparation depending on the coaching center's focus.",
  },
  {
    q: "Is there a demo class available before admission?",
    a: "Yes. A free or low-cost demo class can be offered to help students and parents understand the teaching style, classroom environment, and batch structure.",
  },
  {
    q: "Do parents get progress updates?",
    a: "Yes. Regular updates through WhatsApp, test reports, and performance discussion help parents stay informed about student progress.",
  },
  {
    q: "Are small batches better for students?",
    a: "Yes. Smaller batches improve focus, allow more doubt solving, and help teachers track every student's progress more effectively.",
  },
];

export default function CoachingHomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy fade-up">
              <span className="eyebrow">
                Admission Open • Premium Coaching Demo
              </span>

              <h1>
                Coaching Institute Website Demo Designed to Increase{" "}
                <span className="text-primary">Admissions, Trust, and Enquiries</span>
              </h1>

              <p className="lead">
                A premium coaching website should do more than look good. It should
                help parents trust you, help students connect with your institute,
                and drive more admission enquiries through WhatsApp, calls, and demo
                class bookings.
              </p>

              <p>
                This coaching institute demo is built with a high-conversion layout,
                strong SEO structure, result-focused sections, fee visibility, trust
                signals, and mobile-first enquiry flow so your institute can attract
                more local students and generate more serious leads.
              </p>

              <div className="btn-row spacer-lg">
                <a
                  href={WHATSAPP_ADMISSION}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                >
                  WhatsApp for Admission
                </a>
                <a href={CALL} className="btn btn-call">
                  Call Now
                </a>
                <a
                  href={WHATSAPP_DEMO}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  Book Demo Class
                </a>
              </div>

              <div className="badges spacer-lg">
                <span className="badge">Admission-Focused Design</span>
                <span className="badge">SEO Ready</span>
                <span className="badge">Mobile Optimized</span>
                <span className="badge">WhatsApp Lead Flow</span>
              </div>
            </div>

            <div className="hero-card glass fade-up">
              <div className="stack">
                <div>
                  <span className="eyebrow">Why Parents Choose Fast</span>
                  <h2>Trust-Building Website Structure for Coaching Institutes</h2>
                  <p>
                    Students do not join because of design alone. They join when your
                    website clearly shows courses, results, teacher support, test
                    system, and easy contact options.
                  </p>
                </div>

                <div className="hero-points">
                  <div className="hero-point">
                    <div>
                      <h3>Course Clarity</h3>
                      <p>
                        Show class-wise and exam-wise programs in a clean and easy way.
                      </p>
                    </div>
                  </div>

                  <div className="hero-point">
                    <div>
                      <h3>Result Confidence</h3>
                      <p>
                        Result cards and testimonials quickly increase parent trust.
                      </p>
                    </div>
                  </div>

                  <div className="hero-point">
                    <div>
                      <h3>Instant Enquiry</h3>
                      <p>
                        Strong WhatsApp and call CTA increase enquiry speed on mobile.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="btn-row">
                  <Link href="/projects/coaching/courses/" className="btn btn-primary">
                    Explore Courses
                  </Link>
                  <Link href="/projects/coaching/results/" className="btn btn-secondary">
                    View Results
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="section section-sm">
        <div className="container">
          <div className="stats">
            {results.map((item) => (
              <div key={item.label} className="stat-card card-solid">
                <strong>{item.score}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THIS WEBSITE WORKS */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">High Conversion Coaching Website</span>
            <h2>
              Why This Coaching Institute Website Demo Converts Better Than a Basic
              Website
            </h2>
          </div>

          <p className="section-text">
            Most education websites only look like online brochures. A premium
            coaching website should guide visitors toward one action: enquiry,
            admission, or demo class booking. This layout is designed around that
            goal.
          </p>

          <div className="feature-grid spacer-lg">
            <div className="feature-card card panel">
              <h3>Strong First Impression</h3>
              <p>
                Hero section immediately explains what the institute offers and gives
                direct admission CTA for quick conversion.
              </p>
            </div>

            <div className="feature-card card panel">
              <h3>Trust Before Decision</h3>
              <p>
                Results, testimonials, and student-focused benefits reduce hesitation
                and build confidence for parents.
              </p>
            </div>

            <div className="feature-card card panel">
              <h3>SEO-Friendly Structure</h3>
              <p>
                Proper headings, keyword-rich content, internal links, and clean page
                structure support better local search visibility.
              </p>
            </div>

            <div className="feature-card card panel">
              <h3>Course Clarity</h3>
              <p>
                Visitors can quickly understand classes, batches, programs, and exam
                preparation support without confusion.
              </p>
            </div>

            <div className="feature-card card panel">
              <h3>Mobile Lead Flow</h3>
              <p>
                Since most local visitors browse on phone, the website is built around
                easy call and WhatsApp action.
              </p>
            </div>

            <div className="feature-card card panel">
              <h3>Admission-Oriented Content</h3>
              <p>
                Every section is designed to increase confidence, answer objections,
                and move visitors toward contacting the institute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Courses & Programs</span>
            <h2>Programs Students and Parents Can Understand in Seconds</h2>
          </div>

          <p className="section-text">
            A coaching website should clearly explain what is taught, for whom, and
            why the institute is the right choice. Clear course presentation increases
            serious admissions.
          </p>

          <div className="feature-grid spacer-lg">
            {courseCards.map((course) => (
              <div key={course.title} className="feature-card card panel">
                <h3>{course.title}</h3>
                <p>{course.text}</p>
              </div>
            ))}
          </div>

          <div className="center spacer-lg">
            <Link href="/projects/coaching/courses/" className="btn btn-primary">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="container grid-2">
          <div className="card panel-lg">
            <span className="eyebrow">Student Success Factors</span>
            <h2>What Makes a Coaching Institute More Trustworthy Online</h2>
            <p>
              Parents usually compare multiple institutes before making a decision.
              The websites that clearly show teaching quality, support, discipline,
              and student outcomes usually get more enquiries.
            </p>
            <ul className="list-clean spacer-top">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="card panel-lg">
            <span className="eyebrow">Admission Psychology</span>
            <h2>How This Demo Helps Increase Coaching Enquiries</h2>
            <p>
              This page follows a strong conversion flow: attention, trust,
              credibility, clarity, proof, and then action. That is why it performs
              better than plain education websites.
            </p>
            <ul className="list-clean spacer-top">
              <li>Clear admission CTA above the fold</li>
              <li>Parent trust through results and feedback</li>
              <li>Simple mobile navigation for quick browsing</li>
              <li>Instant WhatsApp contact for faster response</li>
              <li>SEO-rich content to support organic reach</li>
              <li>Internal links to courses, results, billing, and contact</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-section">
            <div className="grid-2" style={{ alignItems: "center" }}>
              <div>
                <span className="eyebrow" style={{ color: "#312e81", background: "#fff" }}>
                  Admission Open
                </span>
                <h2>Want More Student Admissions From Your Coaching Website?</h2>
                <p>
                  This premium coaching institute demo is designed to help education
                  businesses get more local visibility, more trust, and more direct
                  enquiries from students and parents.
                </p>
              </div>

              <div className="btn-row" style={{ justifyContent: "flex-start" }}>
                <a
                  href={WHATSAPP_ADMISSION}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                >
                  Ask Admission Details
                </a>
                <a href={CALL} className="btn btn-secondary">
                  Call Institute
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Testimonials</span>
            <h2>Parent and Student Feedback Builds Instant Trust</h2>
          </div>

          <p className="section-text">
            Education is a trust-based decision. Testimonials and result-based proof
            help parents feel more confident before they contact the institute.
          </p>

          <div className="grid-3 spacer-lg">
            {testimonials.map((item) => (
              <div key={item.name} className="card panel-lg">
                <h3>{item.name}</h3>
                <p className="muted" style={{ marginBottom: "0.8rem", fontWeight: 700 }}>
                  {item.role}
                </p>
                <p>{item.quote}</p>
              </div>
            ))}
          </div>

          <div className="center spacer-lg">
            <Link href="/projects/coaching/results/" className="btn btn-primary">
              See Results & Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* FEE / ADMISSION PREVIEW */}
      <section className="section bg-white">
        <div className="container grid-2">
          <div>
            <span className="eyebrow">Fee & Admission</span>
            <h2>Simple Admission Information Helps Visitors Decide Faster</h2>
            <p>
              When fees, batches, and admission process look clear and professional,
              more visitors feel comfortable making an enquiry. Confusion reduces
              conversion. Clarity improves it.
            </p>
            <p>
              A good coaching website should present fees, registration details,
              payment options, trial class offer, and admission support in a clean and
              confidence-building format.
            </p>

            <div className="btn-row spacer-top">
              <Link href="/projects/coaching/billing/" className="btn btn-primary">
                View Fee & Admission Page
              </Link>
              <a
                href={WHATSAPP_DEMO}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                Book Demo Class
              </a>
            </div>
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Program</th>
                  <th>Duration</th>
                  <th>Mode</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>School Tuition Batch</td>
                  <td>Monthly</td>
                  <td>Offline / Hybrid</td>
                </tr>
                <tr>
                  <td>Board Exam Preparation</td>
                  <td>3–6 Months</td>
                  <td>Offline</td>
                </tr>
                <tr>
                  <td>Foundation Course</td>
                  <td>Ongoing</td>
                  <td>Offline / Online</td>
                </tr>
                <tr>
                  <td>Mock Test Series</td>
                  <td>Scheduled</td>
                  <td>Offline / Online</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2>Common Questions Before Admission</h2>
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
            <span className="eyebrow" style={{ color: "#312e81", background: "#fff" }}>
              Premium Coaching Website Demo
            </span>
            <h2>Ready to Increase Coaching Admissions and Enquiries?</h2>
            <p
              style={{
                maxWidth: "760px",
                margin: "0.75rem auto 0",
              }}
            >
              Explore the courses page, results page, admission page, and contact page
              to see how a conversion-focused coaching website can help attract more
              parents, students, and serious enquiries.
            </p>

            <div
              className="btn-row"
              style={{
                justifyContent: "center",
                marginTop: "1.5rem",
              }}
            >
              <Link href="/projects/coaching/courses/" className="btn btn-secondary">
                Explore Courses
              </Link>
              <Link href="/projects/coaching/contact/" className="btn btn-secondary">
                Contact Institute
              </Link>
              <a
                href={WHATSAPP_ADMISSION}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}