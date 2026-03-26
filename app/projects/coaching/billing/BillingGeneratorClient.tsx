"use client";

import { useMemo, useState } from "react";

const WHATSAPP =
  "https://wa.me/919752422686?text=Hi%20I%20need%20help%20with%20coaching%20billing%20and%20invoice%20details.";
const CALL = "tel:+919752422686";

type PlanKey =
  | "school-tuition"
  | "board-exam"
  | "foundation"
  | "competitive"
  | "english"
  | "mentorship";

type PlanConfig = {
  label: string;
  monthlyFee: number;
  examFee: number;
  materialFee: number;
};

const PLANS: Record<PlanKey, PlanConfig> = {
  "school-tuition": {
    label: "School Tuition Program",
    monthlyFee: 1800,
    examFee: 400,
    materialFee: 600,
  },
  "board-exam": {
    label: "Board Exam Preparation",
    monthlyFee: 2500,
    examFee: 600,
    materialFee: 900,
  },
  foundation: {
    label: "Foundation Batch",
    monthlyFee: 2200,
    examFee: 500,
    materialFee: 700,
  },
  competitive: {
    label: "Competitive Exam Coaching",
    monthlyFee: 3200,
    examFee: 800,
    materialFee: 1200,
  },
  english: {
    label: "English & Communication",
    monthlyFee: 1600,
    examFee: 300,
    materialFee: 500,
  },
  mentorship: {
    label: "Personal Mentorship Program",
    monthlyFee: 4200,
    examFee: 900,
    materialFee: 1400,
  },
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function currentDateInputValue() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = `${now.getMonth() + 1}`.padStart(2, "0");
  const dd = `${now.getDate()}`.padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export default function BillingGeneratorClient() {
  const [invoiceNo, setInvoiceNo] = useState("BILL-2026-001");
  const [invoiceDate, setInvoiceDate] = useState(currentDateInputValue());
  const [studentName, setStudentName] = useState("Aarav Sharma");
  const [parentName, setParentName] = useState("Rajesh Sharma");
  const [mobile, setMobile] = useState("9876543210");
  const [studentClass, setStudentClass] = useState("Class 10");
  const [rollNo, setRollNo] = useState("BF-1024");
  const [plan, setPlan] = useState<PlanKey>("board-exam");
  const [months, setMonths] = useState(1);
  const [extraCharges, setExtraCharges] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [paidAmount, setPaidAmount] = useState(0);
  const [notes, setNotes] = useState(
    "This invoice is generated for billing and payment record purposes only."
  );

  const selectedPlan = PLANS[plan];

  const summary = useMemo(() => {
    const tuitionFee = selectedPlan.monthlyFee * Math.max(months, 1);
    const subtotal =
      tuitionFee +
      selectedPlan.examFee +
      selectedPlan.materialFee +
      Math.max(extraCharges, 0);

    const safeDiscount = Math.max(discount, 0);
    const grandTotal = Math.max(subtotal - safeDiscount, 0);
    const safePaidAmount = Math.max(paidAmount, 0);
    const dueAmount = Math.max(grandTotal - safePaidAmount, 0);

    return {
      tuitionFee,
      subtotal,
      grandTotal,
      dueAmount,
    };
  }, [selectedPlan, months, extraCharges, discount, paidAmount]);

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setInvoiceNo("BILL-2026-001");
    setInvoiceDate(currentDateInputValue());
    setStudentName("Aarav Sharma");
    setParentName("Rajesh Sharma");
    setMobile("9876543210");
    setStudentClass("Class 10");
    setRollNo("BF-1024");
    setPlan("board-exam");
    setMonths(1);
    setExtraCharges(0);
    setDiscount(0);
    setPaidAmount(0);
    setNotes("This invoice is generated for billing and payment record purposes only.");
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy fade-up">
              <span className="eyebrow">Billing & Invoice Generator</span>

              <h1>
                Coaching Billing Page with{" "}
                <span className="text-primary">Invoice Generator</span>
              </h1>

              <p className="lead">
                This page is designed only for coaching billing, fee calculation,
                payment summary, and printable invoice generation.
              </p>

              <p>
                It helps create a clean professional bill for student fee records,
                monthly payments, test fees, study material charges, and due balance.
              </p>

              <div className="btn-row spacer-lg no-print">
                <button type="button" onClick={handlePrint} className="btn btn-primary">
                  Print Invoice
                </button>
                <button type="button" onClick={handleReset} className="btn btn-secondary">
                  Reset Form
                </button>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                >
                  Billing Help
                </a>
              </div>

              <div className="badges spacer-lg">
                <span className="badge">Invoice Only</span>
                <span className="badge">Payment Summary</span>
                <span className="badge">Printable Bill</span>
                <span className="badge">Professional Format</span>
              </div>
            </div>

            <div className="hero-card glass fade-up">
              <div className="stack">
                <div>
                  <span className="eyebrow">Billing Features</span>
                  <h2>Simple, Clean, and Practical Fee Billing</h2>
                  <p>
                    This page is built only for bill generation and payment record
                    display, not for admission flow.
                  </p>
                </div>

                <div className="hero-points">
                  <div className="hero-point">
                    <div>
                      <h3>Monthly Fee Calculation</h3>
                      <p>Calculate fee automatically based on selected months.</p>
                    </div>
                  </div>

                  <div className="hero-point">
                    <div>
                      <h3>Instant Invoice Preview</h3>
                      <p>Live bill preview updates immediately while entering data.</p>
                    </div>
                  </div>

                  <div className="hero-point">
                    <div>
                      <h3>Print Ready</h3>
                      <p>Generate and print a clean invoice or fee receipt anytime.</p>
                    </div>
                  </div>
                </div>

                <div className="btn-row no-print">
                  <a href="#invoice-generator" className="btn btn-primary">
                    Open Generator
                  </a>
                  <a href={CALL} className="btn btn-secondary">
                    Call
                  </a>
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
              <strong>6</strong>
              <span>Billing Plans</span>
            </div>
            <div className="stat-card card-solid">
              <strong>Live</strong>
              <span>Invoice Preview</span>
            </div>
            <div className="stat-card card-solid">
              <strong>Print</strong>
              <span>Ready Format</span>
            </div>
            <div className="stat-card card-solid">
              <strong>Clear</strong>
              <span>Due Tracking</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Fee Structure</span>
            <h2>Coaching Billing Plans</h2>
          </div>

          <div className="table-wrap spacer-lg">
            <table>
              <thead>
                <tr>
                  <th>Program</th>
                  <th>Monthly Fee</th>
                  <th>Exam Fee</th>
                  <th>Material Fee</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(PLANS).map((item) => (
                  <tr key={item.label}>
                    <td>{item.label}</td>
                    <td>{formatCurrency(item.monthlyFee)}</td>
                    <td>{formatCurrency(item.examFee)}</td>
                    <td>{formatCurrency(item.materialFee)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="invoice-generator" className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Invoice Generator</span>
            <h2>Generate Coaching Billing Invoice Instantly</h2>
          </div>

          <div className="grid-2 spacer-lg" style={{ alignItems: "start" }}>
            <div className="card panel-lg no-print">
              <h3>Billing Form</h3>
              <p className="muted" style={{ marginBottom: "1.25rem" }}>
                Enter billing details and the invoice preview updates instantly.
              </p>

              <div className="form-grid">
                <div className="grid-2">
                  <div className="field">
                    <label htmlFor="invoiceNo">Invoice No.</label>
                    <input
                      id="invoiceNo"
                      className="input"
                      value={invoiceNo}
                      onChange={(e) => setInvoiceNo(e.target.value)}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="invoiceDate">Invoice Date</label>
                    <input
                      id="invoiceDate"
                      type="date"
                      className="input"
                      value={invoiceDate}
                      onChange={(e) => setInvoiceDate(e.target.value)}
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="studentName">Student Name</label>
                  <input
                    id="studentName"
                    className="input"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                  />
                </div>

                <div className="grid-2">
                  <div className="field">
                    <label htmlFor="parentName">Parent / Guardian Name</label>
                    <input
                      id="parentName"
                      className="input"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="mobile">Mobile Number</label>
                    <input
                      id="mobile"
                      className="input"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid-2">
                  <div className="field">
                    <label htmlFor="studentClass">Class / Batch</label>
                    <input
                      id="studentClass"
                      className="input"
                      value={studentClass}
                      onChange={(e) => setStudentClass(e.target.value)}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="rollNo">Student ID / Roll No.</label>
                    <input
                      id="rollNo"
                      className="input"
                      value={rollNo}
                      onChange={(e) => setRollNo(e.target.value)}
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="plan">Program</label>
                  <select
                    id="plan"
                    className="select"
                    value={plan}
                    onChange={(e) => setPlan(e.target.value as PlanKey)}
                  >
                    {Object.entries(PLANS).map(([key, item]) => (
                      <option key={key} value={key}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid-2">
                  <div className="field">
                    <label htmlFor="months">Months</label>
                    <input
                      id="months"
                      type="number"
                      min={1}
                      className="input"
                      value={months}
                      onChange={(e) => setMonths(Number(e.target.value) || 1)}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="extraCharges">Extra Charges (₹)</label>
                    <input
                      id="extraCharges"
                      type="number"
                      min={0}
                      className="input"
                      value={extraCharges}
                      onChange={(e) => setExtraCharges(Number(e.target.value) || 0)}
                    />
                  </div>
                </div>

                <div className="grid-2">
                  <div className="field">
                    <label htmlFor="discount">Discount (₹)</label>
                    <input
                      id="discount"
                      type="number"
                      min={0}
                      className="input"
                      value={discount}
                      onChange={(e) => setDiscount(Number(e.target.value) || 0)}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="paidAmount">Paid Amount (₹)</label>
                    <input
                      id="paidAmount"
                      type="number"
                      min={0}
                      className="input"
                      value={paidAmount}
                      onChange={(e) => setPaidAmount(Number(e.target.value) || 0)}
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="notes">Notes</label>
                  <textarea
                    id="notes"
                    className="textarea"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>

                <div className="btn-row">
                  <button type="button" onClick={handlePrint} className="btn btn-primary">
                    Print Invoice
                  </button>
                  <button type="button" onClick={handleReset} className="btn btn-secondary">
                    Reset Form
                  </button>
                </div>
              </div>
            </div>

            <div className="card-solid panel-lg print-area">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  gap: "1rem",
                  flexWrap: "wrap",
                  borderBottom: "1px solid rgba(15,23,42,0.08)",
                  paddingBottom: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <div>
                  <h2 style={{ marginBottom: "0.25rem" }}>BrightFuture Coaching</h2>
                  <p style={{ marginBottom: "0.2rem" }}>Billing Invoice / Fee Receipt</p>
                  <p className="muted" style={{ marginBottom: 0 }}>
                    Coaching billing preview
                  </p>
                </div>

                <div style={{ textAlign: "right" }}>
                  <p style={{ marginBottom: "0.25rem", fontWeight: 800 }}>
                    Invoice No: {invoiceNo || "-"}
                  </p>
                  <p style={{ marginBottom: 0 }}>Date: {invoiceDate || "-"}</p>
                </div>
              </div>

              <div className="grid-2" style={{ marginBottom: "1rem" }}>
                <div className="card panel">
                  <h3 style={{ fontSize: "1rem" }}>Student Details</h3>
                  <p><strong>Name:</strong> {studentName || "-"}</p>
                  <p><strong>Class / Batch:</strong> {studentClass || "-"}</p>
                  <p><strong>Roll No.:</strong> {rollNo || "-"}</p>
                </div>

                <div className="card panel">
                  <h3 style={{ fontSize: "1rem" }}>Parent Details</h3>
                  <p><strong>Parent:</strong> {parentName || "-"}</p>
                  <p><strong>Mobile:</strong> {mobile || "-"}</p>
                  <p><strong>Program:</strong> {selectedPlan.label}</p>
                </div>
              </div>

              <div className="table-wrap" style={{ marginBottom: "1rem" }}>
                <table>
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Qty</th>
                      <th>Rate</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Monthly Tuition Fee</td>
                      <td>{months}</td>
                      <td>{formatCurrency(selectedPlan.monthlyFee)}</td>
                      <td>{formatCurrency(summary.tuitionFee)}</td>
                    </tr>
                    <tr>
                      <td>Exam / Test Fee</td>
                      <td>1</td>
                      <td>{formatCurrency(selectedPlan.examFee)}</td>
                      <td>{formatCurrency(selectedPlan.examFee)}</td>
                    </tr>
                    <tr>
                      <td>Study Material Fee</td>
                      <td>1</td>
                      <td>{formatCurrency(selectedPlan.materialFee)}</td>
                      <td>{formatCurrency(selectedPlan.materialFee)}</td>
                    </tr>
                    <tr>
                      <td>Extra Charges</td>
                      <td>1</td>
                      <td>{formatCurrency(extraCharges)}</td>
                      <td>{formatCurrency(extraCharges)}</td>
                    </tr>
                    <tr>
                      <td>Discount</td>
                      <td>1</td>
                      <td>-{formatCurrency(discount)}</td>
                      <td>-{formatCurrency(discount)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid-2" style={{ alignItems: "start", gap: "1rem" }}>
                <div className="card panel">
                  <h3 style={{ fontSize: "1rem" }}>Notes</h3>
                  <p style={{ marginBottom: 0 }}>{notes || "-"}</p>
                </div>

                <div className="card panel">
                  <h3 style={{ fontSize: "1rem" }}>Payment Summary</h3>
                  <div
                    style={{
                      display: "grid",
                      gap: "0.65rem",
                      marginTop: "0.85rem",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                      <span>Subtotal</span>
                      <strong>{formatCurrency(summary.subtotal)}</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                      <span>Discount</span>
                      <strong>-{formatCurrency(discount)}</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                      <span>Grand Total</span>
                      <strong>{formatCurrency(summary.grandTotal)}</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                      <span>Paid Amount</span>
                      <strong>{formatCurrency(paidAmount)}</strong>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "1rem",
                        paddingTop: "0.65rem",
                        borderTop: "1px solid rgba(15,23,42,0.08)",
                        fontSize: "1.05rem",
                      }}
                    >
                      <span style={{ fontWeight: 800 }}>Due Amount</span>
                      <strong>{formatCurrency(summary.dueAmount)}</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                  marginTop: "2rem",
                }}
              >
                <div>
                  <p style={{ marginBottom: "2.2rem" }}>________________________</p>
                  <p className="muted" style={{ marginBottom: 0 }}>
                    Parent / Guardian Signature
                  </p>
                </div>

                <div style={{ textAlign: "right" }}>
                  <p style={{ marginBottom: "2.2rem" }}>________________________</p>
                  <p className="muted" style={{ marginBottom: 0 }}>
                    Authorized Signature
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid-2">
          <div className="card panel-lg">
            <span className="eyebrow">Billing Benefits</span>
            <h2>Why This Billing Page Works Well</h2>
            <ul className="list-clean spacer-top">
              <li>Clear fee breakup for users</li>
              <li>Simple monthly billing calculation</li>
              <li>Extra charges and discount support</li>
              <li>Printable receipt format</li>
              <li>Live due amount calculation</li>
            </ul>
          </div>

          <div className="card panel-lg">
            <span className="eyebrow">Use Cases</span>
            <h2>Where You Can Use This Billing Generator</h2>
            <ul className="list-clean spacer-top">
              <li>Monthly tuition billing</li>
              <li>Fee receipt generation</li>
              <li>Payment summary record</li>
              <li>Parent billing discussion</li>
              <li>Coaching office print receipt</li>
            </ul>
          </div>
        </div>
      </section>

      <style jsx>{`
        .select {
          width: 100%;
          border: 1px solid rgba(15, 23, 42, 0.1);
          border-radius: 16px;
          background: #ffffff;
          padding: 0.95rem 1rem;
          color: #0f172a;
        }

        @media print {
          .no-print,
          header,
          footer,
          .floating-cta {
            display: none !important;
          }

          body {
            background: #ffffff !important;
          }

          .print-area {
            box-shadow: none !important;
            border: 1px solid #dbe2ea !important;
          }

          .hero,
          .section {
            padding: 0 !important;
            margin: 0 !important;
          }

          #invoice-generator .container > .section-title,
          #invoice-generator .container > .grid-2 > :first-child {
            display: none !important;
          }

          #invoice-generator .container > .grid-2 {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}