"use client";

import { useMemo, useState } from "react";

type InvoiceItem = {
  id: number;
  name: string;
  qty: number;
  rate: number;
  hsn: string;
};

const WHATSAPP_URL =
  "https://wa.me/919752422686?text=Hi%20I%20want%20this%20computer%20billing%20website%20demo%20for%20my%20business.%20Please%20share%20price%20and%20delivery%20details.";

const CALL_URL = "tel:+919752422686";

const initialItems: InvoiceItem[] = [
  {
    id: 1,
    name: "HP Laptop 15s",
    qty: 1,
    rate: 42500,
    hsn: "8471",
  },
  {
    id: 2,
    name: "Wireless Mouse",
    qty: 2,
    rate: 650,
    hsn: "8471",
  },
  {
    id: 3,
    name: "Printer Installation Service",
    qty: 1,
    rate: 1200,
    hsn: "9983",
  },
];

function formatMoney(value: number) {
  return `₹${value.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function todayDate() {
  return new Date().toISOString().slice(0, 10);
}

export default function BillingGeneratorClient() {
  const [invoiceNo, setInvoiceNo] = useState("GC-INV-2026-001");
  const [invoiceDate, setInvoiceDate] = useState(todayDate());
  const [dueDate, setDueDate] = useState(todayDate());

  const [companyName, setCompanyName] = useState("TechStore Computers");
  const [companyPhone, setCompanyPhone] = useState("+91 97524 22686");
  const [companyEmail, setCompanyEmail] = useState("sales@globalcomputers.net");
  const [companyAddress, setCompanyAddress] = useState(
    "Korba, Chhattisgarh, India"
  );
  const [companyGstin, setCompanyGstin] = useState("22ABCDE1234F1Z5");

  const [customerName, setCustomerName] = useState("Amit Verma");
  const [customerPhone, setCustomerPhone] = useState("+91 98765 43210");
  const [customerAddress, setCustomerAddress] = useState(
    "Transport Nagar, Korba, Chhattisgarh"
  );
  const [customerGstin, setCustomerGstin] = useState("");

  const [notes, setNotes] = useState(
    "Thank you for your business. Goods once sold will not be taken back. Warranty as per brand/company policy."
  );

  const [gstPercent, setGstPercent] = useState(18);
  const [items, setItems] = useState<InvoiceItem[]>(initialItems);

  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => sum + item.qty * item.rate, 0);
  }, [items]);

  const gstAmount = useMemo(() => {
    return (subtotal * gstPercent) / 100;
  }, [subtotal, gstPercent]);

  const total = subtotal + gstAmount;

  function updateItem<K extends keyof InvoiceItem>(
    id: number,
    field: K,
    value: InvoiceItem[K]
  ) {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  }

  function addItem() {
    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: "New Item",
        qty: 1,
        rate: 0,
        hsn: "8471",
      },
    ]);
  }

  function removeItem(id: number) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function printInvoice() {
    window.print();
  }

  return (
    <>
      <style>{`
        .bill-page {
          padding: 56px 0 80px;
        }

        .bill-wrap {
          width: min(1320px, calc(100% - 24px));
          margin: 0 auto;
        }

        .bill-hero {
          margin-bottom: 24px;
        }

        .bill-hero h1 {
          margin: 14px 0 12px;
          font-size: clamp(32px, 5vw, 56px);
          line-height: 1.02;
          letter-spacing: -0.03em;
          font-weight: 900;
        }

        .bill-hero p {
          max-width: 850px;
          font-size: 17px;
          line-height: 1.8;
          color: var(--muted);
          margin: 0;
        }

        .bill-grid {
          display: grid;
          grid-template-columns: 420px minmax(0, 1fr);
          gap: 24px;
          align-items: start;
        }

        .bill-panel {
          position: sticky;
          top: 110px;
        }

        .bill-card {
          background: rgba(255,255,255,0.88);
          border: 1px solid rgba(15,23,42,0.08);
          border-radius: 28px;
          padding: 22px;
          box-shadow: 0 20px 50px rgba(15,23,42,0.08);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }

        .bill-card + .bill-card {
          margin-top: 16px;
        }

        .bill-card h2,
        .bill-card h3 {
          margin: 0 0 14px;
          color: #0f172a;
        }

        .bill-card h2 {
          font-size: 22px;
          font-weight: 900;
        }

        .bill-card h3 {
          font-size: 16px;
          font-weight: 900;
        }

        .bill-form {
          display: grid;
          gap: 14px;
        }

        .bill-two {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .bill-label {
          display: block;
          margin-bottom: 8px;
          font-size: 13px;
          font-weight: 800;
          color: #0f172a;
        }

        .bill-input,
        .bill-textarea,
        .bill-select {
          width: 100%;
          border: 1px solid rgba(15,23,42,0.12);
          background: white;
          border-radius: 14px;
          min-height: 48px;
          padding: 0 14px;
          color: #0f172a;
          box-shadow: 0 6px 18px rgba(15,23,42,0.04);
        }

        .bill-textarea {
          min-height: 96px;
          padding: 12px 14px;
          resize: vertical;
        }

        .bill-input:focus,
        .bill-textarea:focus,
        .bill-select:focus {
          outline: none;
          border-color: rgba(37,99,235,0.35);
          box-shadow: 0 0 0 4px rgba(37,99,235,0.08);
        }

        .bill-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 8px;
        }

        .bill-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          padding: 0 18px;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 900;
          text-decoration: none;
          border: 1px solid transparent;
          cursor: pointer;
          transition: all .22s ease;
        }

        .bill-btn:hover {
          transform: translateY(-2px);
        }

        .bill-btn-primary {
          color: white;
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          box-shadow: 0 16px 30px rgba(37,99,235,0.24);
        }

        .bill-btn-outline {
          background: white;
          color: #0f172a;
          border-color: rgba(15,23,42,0.12);
        }

        .invoice-shell {
          background: white;
          border: 1px solid rgba(15,23,42,0.08);
          border-radius: 30px;
          box-shadow: 0 24px 60px rgba(15,23,42,0.08);
          overflow: hidden;
        }

        .invoice-top {
          padding: 28px;
          background:
            radial-gradient(circle at top right, rgba(96,165,250,0.22), transparent 24%),
            linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
          color: white;
        }

        .invoice-top-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 18px;
          align-items: start;
        }

        .invoice-brand h2 {
          margin: 0;
          font-size: 34px;
          font-weight: 900;
          line-height: 1.02;
          letter-spacing: -0.03em;
        }

        .invoice-brand p {
          margin: 10px 0 0;
          color: rgba(255,255,255,0.86);
          line-height: 1.7;
          font-size: 14px;
          max-width: 520px;
        }

        .invoice-meta {
          display: grid;
          gap: 10px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 22px;
          padding: 18px;
        }

        .invoice-meta-row {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          font-size: 14px;
        }

        .invoice-meta-row span {
          color: rgba(255,255,255,0.76);
          font-weight: 700;
        }

        .invoice-meta-row strong {
          color: white;
          font-weight: 900;
          text-align: right;
        }

        .invoice-body {
          padding: 28px;
        }

        .invoice-party-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin-bottom: 24px;
        }

        .invoice-box {
          background: #f8fafc;
          border: 1px solid rgba(15,23,42,0.06);
          border-radius: 22px;
          padding: 18px;
        }

        .invoice-box h3 {
          margin: 0 0 10px;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #2563eb;
          font-weight: 900;
        }

        .invoice-box p {
          margin: 0;
          color: #475569;
          line-height: 1.8;
          font-size: 14px;
          white-space: pre-line;
        }

        .invoice-table-wrap {
          width: 100%;
          overflow-x: auto;
          border: 1px solid rgba(15,23,42,0.08);
          border-radius: 22px;
        }

        .invoice-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 760px;
          background: white;
        }

        .invoice-table th,
        .invoice-table td {
          padding: 14px 14px;
          border-bottom: 1px solid rgba(15,23,42,0.06);
          text-align: left;
          vertical-align: top;
        }

        .invoice-table th {
          background: #f8fafc;
          color: #0f172a;
          font-size: 13px;
          font-weight: 900;
        }

        .invoice-table td {
          color: #334155;
          font-size: 14px;
          font-weight: 600;
        }

        .item-name-input {
          min-width: 220px;
        }

        .tiny-input {
          min-width: 90px;
        }

        .bill-remove {
          min-height: 40px;
          padding: 0 12px;
          border-radius: 10px;
          border: 1px solid rgba(220,38,38,0.14);
          background: rgba(220,38,38,0.06);
          color: #b91c1c;
          font-weight: 800;
          cursor: pointer;
        }

        .invoice-summary-wrap {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 20px;
          margin-top: 24px;
          align-items: start;
        }

        .invoice-notes {
          background: #f8fafc;
          border: 1px solid rgba(15,23,42,0.06);
          border-radius: 22px;
          padding: 18px;
        }

        .invoice-notes h3 {
          margin: 0 0 10px;
          font-size: 15px;
          font-weight: 900;
          color: #0f172a;
        }

        .invoice-notes p {
          margin: 0;
          color: #475569;
          line-height: 1.8;
          font-size: 14px;
          white-space: pre-line;
        }

        .invoice-summary {
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          border: 1px solid rgba(15,23,42,0.07);
          border-radius: 22px;
          padding: 18px;
        }

        .invoice-summary-row {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding: 10px 0;
          color: #475569;
          font-size: 14px;
          font-weight: 700;
        }

        .invoice-summary-row.total {
          margin-top: 6px;
          padding-top: 16px;
          border-top: 1px solid rgba(15,23,42,0.08);
          color: #0f172a;
          font-size: 20px;
          font-weight: 900;
        }

        .invoice-bottom {
          margin-top: 24px;
          padding-top: 18px;
          border-top: 1px dashed rgba(15,23,42,0.12);
          display: flex;
          justify-content: space-between;
          gap: 18px;
          flex-wrap: wrap;
          align-items: end;
        }

        .invoice-sign {
          min-width: 240px;
        }

        .invoice-sign-line {
          margin-top: 44px;
          border-top: 1px solid rgba(15,23,42,0.24);
          padding-top: 8px;
          color: #475569;
          font-size: 13px;
          font-weight: 800;
          text-align: center;
        }

        .bill-mini-note {
          margin-top: 12px;
          color: #64748b;
          line-height: 1.75;
          font-size: 13px;
        }

        @media (max-width: 1100px) {
          .bill-grid {
            grid-template-columns: 1fr;
          }

          .bill-panel {
            position: static;
          }
        }

        @media (max-width: 860px) {
          .invoice-top-grid,
          .invoice-party-grid,
          .invoice-summary-wrap,
          .bill-two {
            grid-template-columns: 1fr;
          }

          .invoice-body,
          .invoice-top {
            padding: 20px;
          }
        }

        @media print {
          body * {
            visibility: hidden !important;
          }

          .invoice-shell,
          .invoice-shell * {
            visibility: visible !important;
          }

          .invoice-shell {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            border-radius: 0;
            box-shadow: none;
            border: none;
          }
        }
      `}</style>

      <section className="bill-page">
        <div className="bill-wrap">
          <div className="bill-hero">
            <span className="badge">GST Invoice • Quotation Style • Print Ready</span>
            <h1>Computer Billing Demo with Professional Invoice Generator</h1>
            <p>
              This billing page helps computer shops, laptop dealers, desktop sellers,
              printer businesses, CCTV providers, repair centers, AMC firms, and IT
              solution companies show professional invoicing capability. It increases
              trust and makes the demo feel much more valuable.
            </p>
          </div>

          <div className="bill-grid">
            <div className="bill-panel">
              <div className="bill-card">
                <h2>Invoice Details</h2>
                <div className="bill-form">
                  <div className="bill-two">
                    <div>
                      <label className="bill-label">Invoice Number</label>
                      <input
                        className="bill-input"
                        value={invoiceNo}
                        onChange={(e) => setInvoiceNo(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="bill-label">GST %</label>
                      <input
                        className="bill-input"
                        type="number"
                        min="0"
                        max="28"
                        value={gstPercent}
                        onChange={(e) => setGstPercent(Number(e.target.value) || 0)}
                      />
                    </div>
                  </div>

                  <div className="bill-two">
                    <div>
                      <label className="bill-label">Invoice Date</label>
                      <input
                        className="bill-input"
                        type="date"
                        value={invoiceDate}
                        onChange={(e) => setInvoiceDate(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="bill-label">Due Date</label>
                      <input
                        className="bill-input"
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bill-card">
                <h2>Seller Details</h2>
                <div className="bill-form">
                  <div>
                    <label className="bill-label">Business Name</label>
                    <input
                      className="bill-input"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>

                  <div className="bill-two">
                    <div>
                      <label className="bill-label">Phone</label>
                      <input
                        className="bill-input"
                        value={companyPhone}
                        onChange={(e) => setCompanyPhone(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="bill-label">Email</label>
                      <input
                        className="bill-input"
                        value={companyEmail}
                        onChange={(e) => setCompanyEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="bill-label">GSTIN</label>
                    <input
                      className="bill-input"
                      value={companyGstin}
                      onChange={(e) => setCompanyGstin(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="bill-label">Address</label>
                    <textarea
                      className="bill-textarea"
                      value={companyAddress}
                      onChange={(e) => setCompanyAddress(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="bill-card">
                <h2>Customer Details</h2>
                <div className="bill-form">
                  <div>
                    <label className="bill-label">Customer Name</label>
                    <input
                      className="bill-input"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                    />
                  </div>

                  <div className="bill-two">
                    <div>
                      <label className="bill-label">Phone</label>
                      <input
                        className="bill-input"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="bill-label">GSTIN</label>
                      <input
                        className="bill-input"
                        value={customerGstin}
                        onChange={(e) => setCustomerGstin(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="bill-label">Address</label>
                    <textarea
                      className="bill-textarea"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="bill-card">
                <h2>Notes</h2>
                <div className="bill-form">
                  <div>
                    <label className="bill-label">Terms / Notes</label>
                    <textarea
                      className="bill-textarea"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </div>
                </div>

                <div className="bill-actions">
                  <button type="button" className="bill-btn bill-btn-primary" onClick={printInvoice}>
                    Print / Save PDF
                  </button>
                  <a href={WHATSAPP_URL} className="bill-btn bill-btn-outline">
                    Get This Website
                  </a>
                  <a href={CALL_URL} className="bill-btn bill-btn-outline">
                    Call Now
                  </a>
                </div>

                <p className="bill-mini-note">
                  Tip: Use <strong>Print / Save PDF</strong> to export this invoice as a PDF in the browser.
                </p>
              </div>
            </div>

            <div className="invoice-shell">
              <div className="invoice-top">
                <div className="invoice-top-grid">
                  <div className="invoice-brand">
                    <h2>{companyName}</h2>
                    <p>
                      {companyAddress}
                      {"\n"}
                      Phone: {companyPhone}
                      {"\n"}
                      Email: {companyEmail}
                      {"\n"}
                      GSTIN: {companyGstin || "—"}
                    </p>
                  </div>

                  <div className="invoice-meta">
                    <div className="invoice-meta-row">
                      <span>Document</span>
                      <strong>TAX INVOICE</strong>
                    </div>
                    <div className="invoice-meta-row">
                      <span>Invoice No.</span>
                      <strong>{invoiceNo}</strong>
                    </div>
                    <div className="invoice-meta-row">
                      <span>Invoice Date</span>
                      <strong>{invoiceDate}</strong>
                    </div>
                    <div className="invoice-meta-row">
                      <span>Due Date</span>
                      <strong>{dueDate}</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="invoice-body">
                <div className="invoice-party-grid">
                  <div className="invoice-box">
                    <h3>Bill To</h3>
                    <p>
                      {customerName}
                      {"\n"}
                      {customerAddress}
                      {"\n"}
                      Phone: {customerPhone || "—"}
                      {"\n"}
                      GSTIN: {customerGstin || "—"}
                    </p>
                  </div>

                  <div className="invoice-box">
                    <h3>Invoice Summary</h3>
                    <p>
                      Computer Hardware Sales
                      {"\n"}
                      Repair & Service Billing
                      {"\n"}
                      Printer / CCTV / IT Support
                      {"\n"}
                      GST Ready Invoice Format
                    </p>
                  </div>
                </div>

                <div className="invoice-table-wrap">
                  <table className="invoice-table">
                    <thead>
                      <tr>
                        <th style={{ width: "40%" }}>Item / Description</th>
                        <th>HSN/SAC</th>
                        <th>Qty</th>
                        <th>Rate</th>
                        <th>Amount</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => {
                        const amount = item.qty * item.rate;

                        return (
                          <tr key={item.id}>
                            <td>
                              <input
                                className="bill-input item-name-input"
                                value={item.name}
                                onChange={(e) =>
                                  updateItem(item.id, "name", e.target.value)
                                }
                              />
                            </td>
                            <td>
                              <input
                                className="bill-input tiny-input"
                                value={item.hsn}
                                onChange={(e) =>
                                  updateItem(item.id, "hsn", e.target.value)
                                }
                              />
                            </td>
                            <td>
                              <input
                                className="bill-input tiny-input"
                                type="number"
                                min="1"
                                value={item.qty}
                                onChange={(e) =>
                                  updateItem(item.id, "qty", Number(e.target.value) || 1)
                                }
                              />
                            </td>
                            <td>
                              <input
                                className="bill-input tiny-input"
                                type="number"
                                min="0"
                                value={item.rate}
                                onChange={(e) =>
                                  updateItem(item.id, "rate", Number(e.target.value) || 0)
                                }
                              />
                            </td>
                            <td>{formatMoney(amount)}</td>
                            <td>
                              <button
                                type="button"
                                className="bill-remove"
                                onClick={() => removeItem(item.id)}
                                disabled={items.length === 1}
                                title={items.length === 1 ? "At least one item required" : "Remove item"}
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

                <div className="bill-actions" style={{ marginTop: 16 }}>
                  <button type="button" className="bill-btn bill-btn-outline" onClick={addItem}>
                    + Add Item
                  </button>
                </div>

                <div className="invoice-summary-wrap">
                  <div className="invoice-notes">
                    <h3>Notes / Terms</h3>
                    <p>{notes}</p>
                  </div>

                  <div className="invoice-summary">
                    <div className="invoice-summary-row">
                      <span>Subtotal</span>
                      <strong>{formatMoney(subtotal)}</strong>
                    </div>
                    <div className="invoice-summary-row">
                      <span>GST ({gstPercent}%)</span>
                      <strong>{formatMoney(gstAmount)}</strong>
                    </div>
                    <div className="invoice-summary-row total">
                      <span>Total</span>
                      <strong>{formatMoney(total)}</strong>
                    </div>
                  </div>
                </div>

                <div className="invoice-bottom">
                  <div>
                    <p style={{ margin: 0, color: "#64748b", lineHeight: 1.8, fontSize: 14 }}>
                      This invoice demo is ideal for computer shops, IT hardware sellers,
                      repair centers, printer businesses, CCTV installers, networking
                      providers, AMC firms, and service companies.
                    </p>
                  </div>

                  <div className="invoice-sign">
                    <div className="invoice-sign-line">
                      Authorized Signature
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}