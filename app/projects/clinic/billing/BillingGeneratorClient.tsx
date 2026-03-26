"use client";

import { useMemo, useState } from "react";

type InvoiceItem = {
  id: number;
  name: string;
  qty: number;
  rate: number;
};

const WHATSAPP_DEMO =
  "https://wa.me/919752422686?text=Hi%20I%20saw%20your%20clinic%20billing%20demo.%20I%20want%20a%20similar%20website%20or%20billing%20system%20for%20my%20clinic.";
const CALL_LINK = "tel:+919752422686";

const initialItems: InvoiceItem[] = [
  { id: 1, name: "Doctor Consultation", qty: 1, rate: 500 },
  { id: 2, name: "BP / Sugar Check", qty: 1, rate: 150 },
];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(value || 0);
}

function todayDate() {
  const d = new Date();
  return d.toISOString().split("T")[0];
}

function invoiceNumber() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const date = String(d.getDate()).padStart(2, "0");
  const time = String(d.getHours()).padStart(2, "0") + String(d.getMinutes()).padStart(2, "0");
  return `CL-${y}${m}${date}-${time}`;
}

export default function BillingGeneratorClient() {
  const [clinicName, setClinicName] = useState("CityCare Clinic");
  const [doctorName, setDoctorName] = useState("Dr. Sample Name");
  const [clinicPhone, setClinicPhone] = useState("+91 97524 22686");
  const [clinicAddress, setClinicAddress] = useState(
    "Main Road, Korba, Chhattisgarh - 495677"
  );
  const [invoiceNo, setInvoiceNo] = useState(invoiceNumber());
  const [invoiceDate, setInvoiceDate] = useState(todayDate());

  const [patientName, setPatientName] = useState("Rahul Verma");
  const [patientPhone, setPatientPhone] = useState("9876543210");
  const [patientAge, setPatientAge] = useState("32");
  const [patientGender, setPatientGender] = useState("Male");
  const [patientId, setPatientId] = useState("P-1001");

  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [notes, setNotes] = useState(
    "Thank you for visiting. Follow prescribed medicines and revisit if symptoms continue."
  );
  const [discount, setDiscount] = useState(0);
  const [taxPercent, setTaxPercent] = useState(0);
  const [amountPaid, setAmountPaid] = useState(650);

  const [items, setItems] = useState<InvoiceItem[]>(initialItems);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.qty * item.rate, 0),
    [items]
  );

  const taxAmount = useMemo(() => {
    const taxable = Math.max(subtotal - discount, 0);
    return (taxable * taxPercent) / 100;
  }, [subtotal, discount, taxPercent]);

  const grandTotal = useMemo(() => {
    return Math.max(subtotal - discount, 0) + taxAmount;
  }, [subtotal, discount, taxAmount]);

  const dueAmount = useMemo(() => Math.max(grandTotal - amountPaid, 0), [grandTotal, amountPaid]);

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: "",
        qty: 1,
        rate: 0,
      },
    ]);
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateItem = (
    id: number,
    field: keyof InvoiceItem,
    value: string | number
  ) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]:
                field === "name"
                  ? value
                  : Number.isFinite(Number(value))
                  ? Number(value)
                  : 0,
            }
          : item
      )
    );
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setInvoiceNo(invoiceNumber());
    setInvoiceDate(todayDate());
    setPatientName("");
    setPatientPhone("");
    setPatientAge("");
    setPatientGender("");
    setPatientId("");
    setPaymentMethod("Cash");
    setNotes(
      "Thank you for visiting. Follow prescribed medicines and revisit if symptoms continue."
    );
    setDiscount(0);
    setTaxPercent(0);
    setAmountPaid(0);
    setItems([{ id: Date.now(), name: "Doctor Consultation", qty: 1, rate: 500 }]);
  };

  return (
    <>
      <section className="hero print-hide">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Clinic Billing Demo</span>

            <h1 className="hero-title">
              Real Patient Invoice Generator for Clinic Billing and Print
            </h1>

            <p className="hero-subtitle">
              Generate a real clinic invoice with patient details, consultation
              charges, treatment items, discounts, taxes, payment method, paid
              amount, balance due, and print-ready medical bill format.
            </p>

            <div className="hero-points">
              <span className="hero-point">Real Invoice Generation</span>
              <span className="hero-point">Printable Bill</span>
              <span className="hero-point">Clinic Ready Layout</span>
              <span className="hero-point">Professional Patient Bill</span>
            </div>

            <div className="btn-row mt-4">
              <button type="button" className="btn btn-secondary" onClick={handlePrint}>
                Print Invoice
              </button>
              <a href={CALL_LINK} className="btn btn-primary">
                Call for Similar Billing System
              </a>
              <a
                href={WHATSAPP_DEMO}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Ask for Similar Billing Website
              </a>
            </div>

            <div className="stats">
              <div className="stat">
                <span className="stat-value">Live</span>
                <span className="stat-label">Invoice Calculation</span>
              </div>
              <div className="stat">
                <span className="stat-value">Print</span>
                <span className="stat-label">Bill Ready</span>
              </div>
              <div className="stat">
                <span className="stat-value">Clinic</span>
                <span className="stat-label">Professional Format</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <h3>Why this billing page is strong</h3>
            <p>
              This is not just a showcase page. It works like a real clinic
              invoice generator, so your client can immediately understand the
              practical business value.
            </p>

            <ul className="list-clean mt-3">
              <li>Add consultation and treatment items</li>
              <li>Auto-calculate subtotal, discount, tax, total</li>
              <li>Track amount paid and due amount</li>
              <li>Print professional patient invoice</li>
              <li>Useful for demo selling and real clinic workflow</li>
            </ul>

            <div className="cta-band mt-4">
              <h3>Best for real sales demos</h3>
              <p>
                A working invoice page makes the website feel like a real clinic
                system, not just a design sample.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section print-hide">
        <div className="container">
          <div className="soft-panel">
            <span className="eyebrow">Invoice Form</span>
            <h2 className="section-title">Enter clinic, patient, and billing details</h2>
            <p className="section-subtitle">
              Fill the fields below and the invoice preview updates instantly.
            </p>

            <div className="grid grid-2 mt-4">
              <div className="card">
                <h3 className="card-title">Clinic Details</h3>
                <div className="form-grid mt-3">
                  <input
                    className="input"
                    value={clinicName}
                    onChange={(e) => setClinicName(e.target.value)}
                    placeholder="Clinic Name"
                  />
                  <input
                    className="input"
                    value={doctorName}
                    onChange={(e) => setDoctorName(e.target.value)}
                    placeholder="Doctor Name"
                  />
                  <input
                    className="input"
                    value={clinicPhone}
                    onChange={(e) => setClinicPhone(e.target.value)}
                    placeholder="Clinic Phone"
                  />
                  <input
                    className="input"
                    value={invoiceNo}
                    onChange={(e) => setInvoiceNo(e.target.value)}
                    placeholder="Invoice Number"
                  />
                </div>
                <div className="mt-3">
                  <textarea
                    className="textarea"
                    value={clinicAddress}
                    onChange={(e) => setClinicAddress(e.target.value)}
                    placeholder="Clinic Address"
                  />
                </div>
              </div>

              <div className="card">
                <h3 className="card-title">Patient & Payment Details</h3>
                <div className="form-grid mt-3">
                  <input
                    className="input"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Patient Name"
                  />
                  <input
                    className="input"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    placeholder="Patient Phone"
                  />
                  <input
                    className="input"
                    value={patientAge}
                    onChange={(e) => setPatientAge(e.target.value)}
                    placeholder="Age"
                  />
                  <select
                    className="select"
                    value={patientGender}
                    onChange={(e) => setPatientGender(e.target.value)}
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                  <input
                    className="input"
                    value={patientId}
                    onChange={(e) => setPatientId(e.target.value)}
                    placeholder="Patient ID"
                  />
                  <input
                    className="input"
                    type="date"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                  <select
                    className="select"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    <option>Cash</option>
                    <option>UPI</option>
                    <option>Card</option>
                    <option>Bank Transfer</option>
                  </select>
                  <input
                    className="input"
                    type="number"
                    min="0"
                    value={amountPaid}
                    onChange={(e) => setAmountPaid(Number(e.target.value) || 0)}
                    placeholder="Amount Paid"
                  />
                  <input
                    className="input"
                    type="number"
                    min="0"
                    value={discount}
                    onChange={(e) => setDiscount(Number(e.target.value) || 0)}
                    placeholder="Discount"
                  />
                  <input
                    className="input"
                    type="number"
                    min="0"
                    value={taxPercent}
                    onChange={(e) => setTaxPercent(Number(e.target.value) || 0)}
                    placeholder="Tax %"
                  />
                </div>
              </div>
            </div>

            <div className="card mt-4">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1rem",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <h3 className="card-title" style={{ margin: 0 }}>
                  Invoice Items
                </h3>
                <button type="button" className="btn btn-outline" onClick={addItem}>
                  Add Item
                </button>
              </div>

              <div className="mt-3" style={{ overflowX: "auto" }}>
                <table className="billing-table">
                  <thead>
                    <tr>
                      <th>Service / Item</th>
                      <th>Qty</th>
                      <th>Rate</th>
                      <th>Amount</th>
                      <th className="print-hide">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => {
                      const amount = item.qty * item.rate;
                      return (
                        <tr key={item.id}>
                          <td>
                            <input
                              className="input billing-input"
                              value={item.name}
                              onChange={(e) =>
                                updateItem(item.id, "name", e.target.value)
                              }
                              placeholder="Consultation / Injection / Test / Dressing"
                            />
                          </td>
                          <td>
                            <input
                              className="input billing-input"
                              type="number"
                              min="1"
                              value={item.qty}
                              onChange={(e) =>
                                updateItem(item.id, "qty", e.target.value)
                              }
                            />
                          </td>
                          <td>
                            <input
                              className="input billing-input"
                              type="number"
                              min="0"
                              value={item.rate}
                              onChange={(e) =>
                                updateItem(item.id, "rate", e.target.value)
                              }
                            />
                          </td>
                          <td className="billing-amount">{formatCurrency(amount)}</td>
                          <td className="print-hide">
                            <button
                              type="button"
                              className="btn btn-outline billing-remove-btn"
                              onClick={() => removeItem(item.id)}
                              disabled={items.length === 1}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="mt-3">
                <textarea
                  className="textarea"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Prescription note / Follow-up note / Clinic note"
                />
              </div>

              <div className="btn-row mt-4 print-hide">
                <button type="button" className="btn btn-secondary" onClick={handlePrint}>
                  Print / Save PDF
                </button>
                <button type="button" className="btn btn-outline" onClick={handleReset}>
                  Reset Invoice
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-sm">
        <div className="container">
          <div className="invoice-sheet">
            <div className="invoice-header">
              <div>
                <p className="invoice-kicker">Clinic Invoice</p>
                <h2 className="invoice-clinic-name">{clinicName || "Clinic Name"}</h2>
                <p className="invoice-doctor">{doctorName || "Doctor Name"}</p>
                <p className="invoice-meta">{clinicAddress || "Clinic Address"}</p>
                <p className="invoice-meta">Phone: {clinicPhone || "-"}</p>
              </div>

              <div className="invoice-header-right">
                <div className="invoice-badge">Medical Bill</div>
                <p>
                  <strong>Invoice No:</strong> {invoiceNo || "-"}
                </p>
                <p>
                  <strong>Date:</strong> {invoiceDate || "-"}
                </p>
                <p>
                  <strong>Payment:</strong> {paymentMethod || "-"}
                </p>
              </div>
            </div>

            <div className="divider" style={{ margin: "1.25rem 0" }} />

            <div className="invoice-info-grid">
              <div className="invoice-info-card">
                <h3>Patient Details</h3>
                <p><strong>Name:</strong> {patientName || "-"}</p>
                <p><strong>Phone:</strong> {patientPhone || "-"}</p>
                <p><strong>Age:</strong> {patientAge || "-"}</p>
                <p><strong>Gender:</strong> {patientGender || "-"}</p>
                <p><strong>Patient ID:</strong> {patientId || "-"}</p>
              </div>

              <div className="invoice-info-card">
                <h3>Billing Summary</h3>
                <p><strong>Subtotal:</strong> {formatCurrency(subtotal)}</p>
                <p><strong>Discount:</strong> {formatCurrency(discount)}</p>
                <p><strong>Tax:</strong> {formatCurrency(taxAmount)}</p>
                <p><strong>Paid:</strong> {formatCurrency(amountPaid)}</p>
                <p><strong>Due:</strong> {formatCurrency(dueAmount)}</p>
              </div>
            </div>

            <div className="mt-4" style={{ overflowX: "auto" }}>
              <table className="invoice-preview-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Service / Item</th>
                    <th>Qty</th>
                    <th>Rate</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.name || "-"}</td>
                      <td>{item.qty}</td>
                      <td>{formatCurrency(item.rate)}</td>
                      <td>{formatCurrency(item.qty * item.rate)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="invoice-total-box mt-4">
              <div className="invoice-total-row">
                <span>Subtotal</span>
                <strong>{formatCurrency(subtotal)}</strong>
              </div>
              <div className="invoice-total-row">
                <span>Discount</span>
                <strong>- {formatCurrency(discount)}</strong>
              </div>
              <div className="invoice-total-row">
                <span>Tax ({taxPercent}%)</span>
                <strong>{formatCurrency(taxAmount)}</strong>
              </div>
              <div className="invoice-total-row invoice-total-grand">
                <span>Grand Total</span>
                <strong>{formatCurrency(grandTotal)}</strong>
              </div>
              <div className="invoice-total-row">
                <span>Amount Paid</span>
                <strong>{formatCurrency(amountPaid)}</strong>
              </div>
              <div className="invoice-total-row invoice-total-due">
                <span>Balance Due</span>
                <strong>{formatCurrency(dueAmount)}</strong>
              </div>
            </div>

            <div className="card mt-4" style={{ boxShadow: "none" }}>
              <h3 className="card-title">Notes</h3>
              <p className="card-text">{notes || "-"}</p>
            </div>

            <div className="invoice-footer mt-4">
              <div>
                <p className="muted mb-0">
                  Thank you for visiting {clinicName || "our clinic"}.
                </p>
                <p className="muted mt-1 mb-0">
                  This is a computer-generated medical invoice.
                </p>
              </div>

              <div className="invoice-sign-box">
                <span>Authorized Signatory</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .billing-table,
        .invoice-preview-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 760px;
        }

        .billing-table th,
        .billing-table td,
        .invoice-preview-table th,
        .invoice-preview-table td {
          border: 1px solid rgba(15, 23, 42, 0.12);
          padding: 0.8rem;
          text-align: left;
          vertical-align: middle;
        }

        .billing-table th,
        .invoice-preview-table th {
          background: rgba(37, 99, 235, 0.06);
          font-size: 0.92rem;
          font-weight: 800;
          color: var(--text);
        }

        .billing-input {
          min-height: 44px;
          padding: 0.75rem 0.85rem;
          box-shadow: none;
        }

        .billing-amount {
          font-weight: 800;
          color: var(--secondary);
          white-space: nowrap;
        }

        .billing-remove-btn {
          min-height: 42px;
          padding: 0.65rem 0.9rem;
        }

        .invoice-sheet {
          background: #fff;
          border: 1px solid rgba(15, 23, 42, 0.12);
          border-radius: 28px;
          box-shadow: var(--shadow-md);
          padding: 2rem;
        }

        .invoice-header {
          display: flex;
          justify-content: space-between;
          gap: 1.5rem;
          align-items: flex-start;
          flex-wrap: wrap;
        }

        .invoice-kicker {
          margin: 0 0 0.4rem;
          color: var(--secondary);
          font-size: 0.85rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .invoice-clinic-name {
          margin: 0;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          line-height: 1.05;
          font-weight: 900;
        }

        .invoice-doctor {
          margin: 0.45rem 0 0;
          font-weight: 700;
          color: var(--text-soft);
        }

        .invoice-meta {
          margin: 0.25rem 0 0;
          color: var(--text-soft);
        }

        .invoice-header-right {
          min-width: 260px;
          display: grid;
          gap: 0.45rem;
        }

        .invoice-header-right p {
          margin: 0;
          color: var(--text-soft);
        }

        .invoice-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          align-self: flex-start;
          min-height: 38px;
          padding: 0.55rem 0.95rem;
          border-radius: 999px;
          background: rgba(15, 118, 110, 0.08);
          color: var(--primary);
          font-size: 0.8rem;
          font-weight: 900;
          border: 1px solid rgba(15, 118, 110, 0.14);
          margin-bottom: 0.45rem;
        }

        .invoice-info-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .invoice-info-card {
          border: 1px solid rgba(15, 23, 42, 0.1);
          border-radius: 20px;
          padding: 1rem;
          background: rgba(248, 250, 252, 0.78);
        }

        .invoice-info-card h3 {
          margin: 0 0 0.75rem;
          font-size: 1rem;
          font-weight: 900;
        }

        .invoice-info-card p {
          margin: 0.4rem 0;
          color: var(--text-soft);
        }

        .invoice-total-box {
          margin-left: auto;
          width: min(100%, 420px);
          border: 1px solid rgba(15, 23, 42, 0.12);
          border-radius: 22px;
          padding: 1rem 1.1rem;
          background: linear-gradient(
            180deg,
            rgba(248, 250, 252, 0.92),
            rgba(255, 255, 255, 0.98)
          );
        }

        .invoice-total-row {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.65rem 0;
          border-bottom: 1px dashed rgba(15, 23, 42, 0.12);
          color: var(--text-soft);
        }

        .invoice-total-row:last-child {
          border-bottom: 0;
        }

        .invoice-total-grand {
          color: var(--text);
          font-size: 1.02rem;
          font-weight: 900;
        }

        .invoice-total-due {
          color: #b91c1c;
          font-size: 1rem;
          font-weight: 900;
        }

        .invoice-footer {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          align-items: flex-end;
          flex-wrap: wrap;
        }

        .invoice-sign-box {
          min-width: 220px;
          padding-top: 2.4rem;
          border-top: 1px solid rgba(15, 23, 42, 0.24);
          text-align: center;
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-soft);
        }

        @media (max-width: 820px) {
          .invoice-info-grid {
            grid-template-columns: 1fr;
          }

          .invoice-sheet {
            padding: 1rem;
            border-radius: 20px;
          }
        }

        @media print {
          .print-hide,
          header,
          footer,
          .top-strip,
          .floating-whatsapp {
            display: none !important;
          }

          body {
            background: #fff !important;
          }

          .section {
            padding: 0 !important;
          }

          .container {
            width: 100% !important;
            max-width: 100% !important;
          }

          .invoice-sheet {
            border: none !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </>
  );
}