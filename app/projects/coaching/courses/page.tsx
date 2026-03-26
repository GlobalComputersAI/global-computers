import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Courses & Programs | Coaching Institute Website Demo",
  description:
    "Explore coaching institute courses and programs including school tuition, board exam preparation, foundation batches, competitive exam coaching, English improvement, and personal mentorship. SEO-ready premium course page demo.",
  keywords: [
    "coaching courses page",
    "tuition classes programs",
    "board exam coaching courses",
    "foundation batch website",
    "competitive exam coaching page",
    "coaching institute courses demo",
    "education website courses page",
    "student admission courses page",
  ],
  alternates: {
    canonical: "https://globalcomputers.net/projects/coaching/courses/",
  },
  openGraph: {
    title: "Courses & Programs | Coaching Institute Website Demo",
    description:
      "Premium coaching courses page with program details, batch highlights, student benefits, and strong WhatsApp admission CTA.",
    url: "https://globalcomputers.net/projects/coaching/courses/",
    type: "website",
    siteName: "Global Computers & IT Solutions",
  },
};

const WHATSAPP_ADMISSION =
  "https://wa.me/919752422686?text=Hi%20I%20want%20course%20details%20and%20admission%20information%20for%20your%20coaching%20institute.";
const WHATSAPP_DEMO =
  "https://wa.me/919752422686?text=Hi%20I%20want%20to%20book%20a%20demo%20class%20for%20your%20coaching%20program.";
const CALL = "tel:+919752422686";

const programs = [
  {
    title: "School Tuition Programs",
    subtitle: "Class 6 to 12 support for concept clarity and strong academic performance",
    points: [
      "Subject-wise coaching for Maths, Science, English, and other core subjects",
      "Regular chapter-wise tests and revision sessions",
      "Homework support and doubt solving",
      "Improvement-focused support for weak students",
    ],
  },
  {
    title: "Board Exam Preparation",
    subtitle: "Score-focused preparation for Class 10 and Class 12 board students",
    points: [
      "Important questions and scoring topics",
      "Answer writing strategy and time management",
      "Mock tests based on board pattern",
      "Focused revision and performance tracking",
    ],
  },
  {
    title: "Foundation Batches",
    subtitle: "Early concept building for long-term academic strength",
    points: [
      "Mathematics and science foundation improvement",
      "Reasoning, problem solving, and analytical thinking",
      "Strong basics for higher classes and entrance preparation",
      "Confidence-building academic support",
    ],
  },
  {
    title: "Competitive Exam Coaching",
    subtitle: "Guided preparation for scholarship, aptitude, and entrance-based exams",
    points: [
      "Structured syllabus planning",
      "Practice sheets and timed mock tests",
      "Exam strategy guidance",
      "Performance review and improvement planning",
    ],
  },
  {
    title: "English & Communication Skills",
    subtitle: "Improve spoken confidence, grammar, writing, and communication",
    points: [
      "Grammar and vocabulary development",
      "Reading and writing practice",
      "Spoken English sessions",
      "Presentation and confidence support",
    ],
  },
  {
    title: "Personal Mentorship Program",
    subtitle: "High-attention guidance for students who need personal academic support",
    points: [
      "Small batch support and direct teacher attention",
      "Parent communication and progress updates",
      "Custom improvement roadmap",
      "Motivation and discipline support",
    ],
  },
];

const batchFeatures = [
  "Small batch size for better teacher attention",
  "Regular class tests and doubt sessions",
  "Parent progress updates through WhatsApp",
  "Weekly revision plan for better retention",
  "Student discipline and study tracking",
  "Focused support for weak and average students",
];

const whyProgramsWork = [
  {
    title: "Clear Program Positioning",
    text: "Parents convert faster when they clearly understand what class, subject, and outcome each batch is designed for.",
  },
  {
    title: "Strong Academic Confidence",
    text: "Students are more likely to join when the website explains the teaching approach, testing process, and mentorship support.",
  },
  {
    title: "Better Enquiry Quality",
    text: "A well-structured courses page reduces confusion and attracts more serious parents who are ready to ask about admission.",
  },
];

const faqs = [
  {
    q: "Which students can join these coaching programs?",
    a: "These programs can be customized for school students, board exam students, foundation learners, and students preparing for scholarship or entrance-oriented exams.",
  },
  {
    q: "Are separate batches available for different classes?",
    a: "Yes. A premium coaching institute usually runs separate batches based on class level, subject requirement, and student learning pace.",
  },
  {
    q: "Do you offer demo classes before admission?",
    a: "Yes. Demo classes are one of the best ways to build trust and help students and parents understand the teaching environment before joining.",
  },
  {
    q: "How do parents know whether the coaching is working?",
    a: "Regular tests, performance reviews, and WhatsApp updates help parents monitor improvement and stay informed about progress.",
  },
];

export default function CoachingCoursesPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy fade-up">
              <span className="eyebrow">Courses & Programs</span>
              <h1>
                Coaching Courses Page Designed to Build{" "}
                <span className="text-primary">Trust, Clarity, and Admissions</span>
              </h1>
              <p className="lead">
                A premium coaching institute courses page should clearly explain what
                students can join, how the batches work, and why parents should trust
                the institute. Clarity increases admission enquiries.
              </p>
              <p>
                This page is built to present programs in a professional, structured,
                and SEO-friendly way so that visitors can quickly understand the
                institute offering and take action through WhatsApp, call, or demo
                class booking.
              </p>

              <div className="btn-row spacer-lg">
                <a
                  href={WHATSAPP_ADMISSION}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                >
                  Ask Course Details
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
                <span className="badge">School Tuition</span>
                <span className="badge">Board Exam Coaching</span>
                <span className="badge">Foundation Batches</span>
                <span className="badge">Mentorship Support</span>
              </div>
            </div>

            <div className="hero-card glass fade-up">
              <div className="stack">
                <div>
                  <span className="eyebrow">Why This Page Converts</span>
                  <h2>Course Clarity Helps Parents Decide Faster</h2>
                  <p>
                    Most visitors do not want too much confusion. They want a quick
                    understanding of programs, batch suitability, and teaching value.
                    A good courses page turns interest into enquiry.
                  </p>
                </div>

                <div className="hero-points">
                  <div className="hero-point">
                    <div>
                      <h3>Batch Understanding</h3>
                      <p>
                        Clear course grouping helps students and parents find the right
                        fit quickly.
                      </p>
                    </div>
                  </div>

                  <div className="hero-point">
                    <div>
                      <h3>Trust Through Structure</h3>
                      <p>
                        A properly written program page looks more professional and
                        serious than a basic brochure-style website.
                      </p>
                    </div>
                  </div>

                  <div className="hero-point">
                    <div>
                      <h3>Direct Action Flow</h3>
                      <p>
                        Visitors can instantly ask for admission details or a demo
                        class without searching around.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="btn-row">
                  <Link href="/projects/coaching/results/" className="btn btn-primary">
                    View Results
                  </Link>
                  <Link href="/projects/coaching/contact/" className="btn btn-secondary">
                    Contact Institute
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-sm">
        <div className="container">
          <div className="stats">
            <div className="stat-card card-solid">
              <strong>6+</strong>
              <span>Core Program Types</span>
            </div>
            <div className="stat-card card-solid">
              <strong>Small</strong>
              <span>Batch Attention</span>
            </div>
            <div className="stat-card card-solid">
              <strong>Weekly</strong>
              <span>Tests & Revision</span>
            </div>
            <div className="stat-card card-solid">
              <strong>Fast</strong>
              <span>Admission Support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Programs Offered</span>
            <h2>Premium Coaching Programs Presented in a Clear and Professional Way</h2>
          </div>
          <p className="section-text">
            A good education website should make every course easy to understand.
            Simple explanation improves trust and helps parents compare your institute
            more easily.
          </p>

          <div className="grid-2 spacer-lg">
            {programs.map((program) => (
              <div key={program.title} className="card panel-lg">
                <h3>{program.title}</h3>
                <p className="muted" style={{ fontWeight: 700, marginBottom: "1rem" }}>
                  {program.subtitle}
                </p>
                <ul className="list-clean">
                  {program.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid-2">
          <div className="card panel-lg">
            <span className="eyebrow">Batch Features</span>
            <h2>What Students and Parents Usually Want in a Coaching Program</h2>
            <p>
              Most admissions happen when parents feel the institute is serious,
              organized, and supportive. The right program structure directly improves
              conversion.
            </p>
            <ul className="list-clean spacer-top">
              {batchFeatures.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="card panel-lg">
            <span className="eyebrow">Why This Page Works</span>
            <h2>Better Course Presentation Means Better Enquiry Quality</h2>
            <div className="stack spacer-top">
              {whyProgramsWork.map((item) => (
                <div key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-section">
            <div className="grid-2" style={{ alignItems: "center" }}>
              <div>
                <span className="eyebrow" style={{ color: "#312e81", background: "#fff" }}>
                  Admission Support
                </span>
                <h2>Need Help Choosing the Right Course or Batch?</h2>
                <p>
                  Parents and students often need guidance before admission. A quick
                  WhatsApp enquiry or call can help them understand the right program,
                  batch timing, and next admission step.
                </p>
              </div>

              <div className="btn-row">
                <a
                  href={WHATSAPP_ADMISSION}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                >
                  WhatsApp for Guidance
                </a>
                <a href={CALL} className="btn btn-secondary">
                  Call Institute
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Program Comparison</span>
            <h2>Simple Course Overview for Faster Decision Making</h2>
          </div>

          <div className="table-wrap spacer-lg">
            <table>
              <thead>
                <tr>
                  <th>Program</th>
                  <th>Best For</th>
                  <th>Focus</th>
                  <th>Mode</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>School Tuition</td>
                  <td>Class 6 to 12 Students</td>
                  <td>Subjects, tests, doubt solving</td>
                  <td>Offline / Hybrid</td>
                </tr>
                <tr>
                  <td>Board Exam Prep</td>
                  <td>Class 10 & 12</td>
                  <td>Marks, revision, answer strategy</td>
                  <td>Offline</td>
                </tr>
                <tr>
                  <td>Foundation Batch</td>
                  <td>Academic base improvement</td>
                  <td>Concept clarity and core strength</td>
                  <td>Offline / Online</td>
                </tr>
                <tr>
                  <td>Competitive Coaching</td>
                  <td>Scholarship / entrance aspirants</td>
                  <td>Practice, mock tests, exam strategy</td>
                  <td>Offline / Hybrid</td>
                </tr>
                <tr>
                  <td>English & Communication</td>
                  <td>Confidence improvement</td>
                  <td>Grammar, speaking, writing</td>
                  <td>Offline / Online</td>
                </tr>
                <tr>
                  <td>Personal Mentorship</td>
                  <td>Students needing extra support</td>
                  <td>Direct guidance and tracking</td>
                  <td>Offline</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">FAQs</span>
            <h2>Common Questions About Coaching Programs</h2>
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

      <section className="section">
        <div className="container">
          <div className="cta-section center">
            <span className="eyebrow" style={{ color: "#312e81", background: "#fff" }}>
              Next Step
            </span>
            <h2>See Student Results, Testimonials, and Admission Details</h2>
            <p style={{ maxWidth: "760px", margin: "0.75rem auto 0" }}>
              A premium coaching website works best when courses, results, fees, and
              contact flow all support each other. Explore the next pages to complete
              the full high-conversion journey.
            </p>

            <div
              className="btn-row"
              style={{ justifyContent: "center", marginTop: "1.5rem" }}
            >
              <Link href="/projects/coaching/results/" className="btn btn-secondary">
                View Results
              </Link>
              <Link href="/projects/coaching/billing/" className="btn btn-secondary">
                See Admission Page
              </Link>
              <Link href="/projects/coaching/contact/" className="btn btn-secondary">
                Contact Page
              </Link>
              <a
                href={WHATSAPP_DEMO}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
              >
                Book Demo Class
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}