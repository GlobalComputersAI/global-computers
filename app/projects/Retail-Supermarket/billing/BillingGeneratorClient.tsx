"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type InvoiceItem = {
  id: number;
  name: string;
  hsn: string;
  qty: number;
  rate: number;
  gst: number;
};

const WHATSAPP =
  "https://wa.me/919752422686?text=Hi%20I%20want%20a%20Retail%20Supermarket%20Website%20with%20Billing%20System.%20Please%20share%20price%2C%20features%20and%20delivery%20time.";
const CALL = "tel:+919752422686";

const initialItems: InvoiceItem[] = [
  { id: 1, name: "Basmati Rice 5kg", hsn: "1006", qty: 1, rate: 899, gst: 5 },
  { id: 2, name: "Refined Oil 1L", hsn: "1512", qty: 2, rate: 165, gst: 5 },
  { id: 3, name: "Detergent Powder 1kg", hsn: "3402", qty: 1, rate: 135, gst: 18 },
];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);
}

function numberToWordsIndian(num: number) {
  const a = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const b = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  const twoDigits = (n: number): string => {
    if (n < 20) return a[n];
    return `${b[Math.floor(n / 10)]}${n % 10 ? ` ${a[n % 10]}` : ""}`;
  };

  const threeDigits = (n: number): string => {
    const hundred = Math.floor(n / 100);
    const rest = n % 100;
    let out = "";
    if (hundred) out += `${a[hundred]} Hundred`;
    if (rest) out += `${out ? " " : ""}${twoDigits(rest)}`;
    return out;
  };

  if (num === 0) return "Zero Rupees Only";

  const rupees = Math.floor(num);
  const paise = Math.round((num - rupees) * 100);

  const crore = Math.floor(rupees / 10000000);
  const lakh = Math.floor((rupees % 10000000) / 100000);
  const thousand = Math.floor((rupees % 100000) / 1000);
  const rest = rupees % 1000;

  let words = "";
  if (crore) words += `${twoDigits(crore)} Crore `;
  if (lakh) words += `${twoDigits(lakh)} Lakh `;
  if (thousand) words += `${twoDigits(thousand)} Thousand `;
  if (rest) words += `${threeDigits(rest)} `;

  words = words.trim() + " Rupees";
  if (paise) words += ` and ${twoDigits(paise)} Paise`;
  return `${words} Only`;
}

export default function BillingGeneratorClient() {
  const [storeName, setStoreName] = useState("SuperMartPro");
  const [storeTagline, setStoreTagline] = useState("Retail Supermarket | Grocery | Daily Needs");
  const [storeAddress, setStoreAddress] = useState(
    "Transport Nagar, Korba, Chhattisgarh - 495677"
  );
  const [storePhone, setStorePhone] = useState("+91 97524 22686");
  const [storeEmail, setStoreEmail] = useState("globalcomputerskorba@gmail.com");
  const [storeGstin, setStoreGstin] = useState("22ABCDE1234F1Z5");

  const [invoiceNo, setInvoiceNo] = useState("RSM-1001");
  const [invoiceDate, setInvoiceDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [dueDate, setDueDate] = useState(new Date().toISOString().slice(0, 10));

  const [customerName, setCustomerName] = useState("Rahul Sharma");
  const [customerPhone, setCustomerPhone] = useState("+91 98765 43210");
  const [customerAddress, setCustomerAddress] = useState(
    "Ward No. 12, Korba, Chhattisgarh"
  );

  const [discountType, setDiscountType] = useState<"amount" | "percent">("amount");
  const [discountValue, setDiscountValue] = useState(0);
  const [shippingCharge, setShippingCharge] = useState(0);
  const [paidAmount, setPaidAmount] = useState(0);
  const [notes, setNotes] = useState(
    "Thank you for shopping with us. Goods once sold will not be taken back. Please keep this invoice for exchange or support."
  );

  const [items, setItems] = useState<InvoiceItem[]>(initialItems);

  const computed = useMemo(() => {
    const rows = items.map((item) => {
      const taxable = item.qty * item.rate;
      const gstAmount = taxable * (item.gst / 100);
      const total = taxable + gstAmount;

      return {
        ...item,
        taxable,
        gstAmount,
        total,
      };
    });

    const subtotal = rows.reduce((sum, row) => sum + row.taxable, 0);
    const totalGst = rows.reduce((sum, row) => sum + row.gstAmount, 0);

    const discount =
      discountType === "percent"
        ? subtotal * (discountValue / 100)
        : discountValue;

    const grandTotal = Math.max(subtotal + totalGst + shippingCharge - discount, 0);
    const balance = Math.max(grandTotal - paidAmount, 0);

    return {
      rows,
      subtotal,
      totalGst,
      discount,
      grandTotal,
      balance,
      totalInWords: numberToWordsIndian(grandTotal),
    };
  }, [items, discountType, discountValue, shippingCharge, paidAmount]);

  const updateItem = <K extends keyof InvoiceItem>(
    id: number,
    field: K,
    value: InvoiceItem[K]
  ) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: "",
        hsn: "",
        qty: 1,
        rate: 0,
        gst: 5,
      },
    ]);
  };

  const removeItem = (id: number) => {
    if (items.length === 1) return;
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const fillSampleData = () => {
    setStoreName("SuperMartPro");
    setStoreTagline("Retail Supermarket | Grocery | Daily Needs");
    setStoreAddress("Transport Nagar, Korba, Chhattisgarh - 495677");
    setStorePhone("+91 97524 22686");
    setStoreEmail("globalcomputerskorba@gmail.com");
    setStoreGstin("22ABCDE1234F1Z5");

    setInvoiceNo("RSM-1001");
    setInvoiceDate(new Date().toISOString().slice(0, 10));
    setDueDate(new Date().toISOString().slice(0, 10));

    setCustomerName("Rahul Sharma");
    setCustomerPhone("+91 98765 43210");
    setCustomerAddress("Ward No. 12, Korba, Chhattisgarh");

    setDiscountType("amount");
    setDiscountValue(0);
    setShippingCharge(0);
    setPaidAmount(0);
    setNotes(
      "Thank you for shopping with us. Goods once sold will not be taken back. Please keep this invoice for exchange or support."
    );

    setItems(initialItems);
  };

  const resetAll = () => {
    setStoreName("");
    setStoreTagline("");
    setStoreAddress("");
    setStorePhone("");
    setStoreEmail("");
    setStoreGstin("");

    setInvoiceNo("");
    setInvoiceDate(new Date().toISOString().slice(0, 10));
    setDueDate(new Date().toISOString().slice(0, 10));

    setCustomerName("");
    setCustomerPhone("");
    setCustomerAddress("");

    setDiscountType("amount");
    setDiscountValue(0);
    setShippingCharge(0);
    setPaidAmount(0);
    setNotes("");

    setItems([{ id: Date.now(), name: "", hsn: "", qty: 1, rate: 0, gst: 5 }]);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <style jsx global>{`
        @media print {
          header,
          footer,
          .floating-whatsapp,
          .no-print {
            display: none !important;
          }

          body {
            background: #ffffff !important;
          }

          .print-area {
            box-shadow: none !important;
            border: none !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          .print-wrap {
            padding: 0 !important;
          }

          .table-wrap {
            overflow: visible !important;
          }

          .table {
            min-width: 100% !important;
          }

          a {
            text-decoration: none !important;
          }
        }
      `}</style>

      <section className="section section-lg no-print">
        <div className="container">
          <div className="hero-grid">
            <div className="fade-up">
              <span className="eyebrow">Retail Billing Generator</span>

              <h1 className="display-xl mt-20">
                Generate{" "}
                <span className="text-gradient">Professional Supermarket Bills</span>{" "}
                and Give Them Directly to Customers
              </h1>

              <p className="lead mt-24">
                Create clean, printable and customer-ready retail invoices for
                grocery stores, kirana shops, mini marts and supermarkets. Add
                products, calculate GST, print the bill and save it as PDF for
                your client or customer.
              </p>

              <div className="badge-row mt-24">
                <span className="badge badge-primary">Printable Invoice</span>
                <span className="badge badge-primary">GST Calculation</span>
                <span className="badge badge-primary">Customer Ready</span>
                <span className="badge badge-primary">PDF via Print</span>
              </div>

              <div className="btn-row mt-32">
                <button type="button" onClick={handlePrint} className="btn btn-primary">
                  Print / Save PDF
                </button>
                <button type="button" onClick={fillSampleData} className="btn btn-secondary">
                  Load Demo Data
                </button>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                  Ask for Billing Website
                </a>
              </div>

              <div className="grid grid-3 mt-40">
                <div className="card panel card-hover">
                  <p className="heading-md">Fast Billing</p>
                  <p className="text-sm mt-12">
                    Add items, customer details and totals in a simple invoice flow.
                  </p>
                </div>
                <div className="card panel card-hover">
                  <p className="heading-md">Professional Print</p>
                  <p className="text-sm mt-12">
                    Print a clean customer invoice or save it as PDF from browser.
                  </p>
                </div>
                <div className="card panel card-hover">
                  <p className="heading-md">Best Demo for Sales</p>
                  <p className="text-sm mt-12">
                    Great for showing clients a real supermarket billing experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="hero-card float-soft">
              <div className="hero-orb hero-orb-1" />
              <div className="hero-orb hero-orb-2" />

              <div className="mockup">
                <div className="mockup-topbar">
                  <span className="mock-dot" />
                  <span className="mock-dot" />
                  <span className="mock-dot" />
                </div>
                <div className="mock-body">
                  <div className="glass p-24">
                    <div className="badge-row">
                      <span className="badge">Invoice</span>
                      <span className="badge">GST</span>
                      <span className="badge">Print</span>
                    </div>

                    <h3 className="heading-lg mt-20">Billing Features Included</h3>
                    <ul className="check-list mt-20">
                      <li>Customer details with mobile and address</li>
                      <li>Multiple items with quantity, rate and GST</li>
                      <li>Automatic subtotal, GST and grand total</li>
                      <li>Discount, shipping and paid amount support</li>
                      <li>Printable retail invoice layout</li>
                      <li>Works great as live website demo</li>
                    </ul>

                    <div className="btn-row mt-24">
                      <Link href="/projects/retail-supermarket/contact" className="btn btn-primary">
                        Contact Us
                      </Link>
                      <a href={CALL} className="btn btn-secondary">
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-2 mt-24">
                <div className="card panel card-hover">
                  <p className="heading-md">For Real Use</p>
                  <p className="text-sm mt-12">
                    Can be used to generate actual customer-ready bills quickly.
                  </p>
                </div>
                <div className="card panel card-hover">
                  <p className="heading-md">For Better Closing</p>
                  <p className="text-sm mt-12">
                    Powerful page to sell retail websites plus billing solution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section no-print">
        <div className="container">
          <div className="glass panel-lg">
            <div className="grid grid-2">
              <div>
                <span className="eyebrow">Invoice Form</span>
                <h2 className="display-md mt-20">
                  Fill Store, Customer and Item Details
                </h2>
                <p className="lead mt-20">
                  Update the fields below and the invoice preview will change
                  instantly. Then print it or save it as PDF and share with the customer.
                </p>
              </div>

              <div className="btn-row" style={{ justifyContent: "flex-end", alignItems: "flex-start" }}>
                <button type="button" onClick={fillSampleData} className="btn btn-secondary">
                  Demo Data
                </button>
                <button type="button" onClick={resetAll} className="btn btn-secondary">
                  Reset
                </button>
                <button type="button" onClick={handlePrint} className="btn btn-primary">
                  Print Invoice
                </button>
              </div>
            </div>

            <div className="grid grid-2 mt-32">
              <div className="card panel-lg">
                <h3 className="heading-md">Store Details</h3>
                <div className="form-grid mt-20">
                  <div className="field">
                    <label className="label">Store Name</label>
                    <input className="input" value={storeName} onChange={(e) => setStoreName(e.target.value)} placeholder="Your supermarket name" />
                  </div>
                  <div className="field">
                    <label className="label">Store Tagline</label>
                    <input className="input" value={storeTagline} onChange={(e) => setStoreTagline(e.target.value)} placeholder="Retail Supermarket | Grocery | Daily Needs" />
                  </div>
                  <div className="field">
                    <label className="label">Store Address</label>
                    <textarea className="textarea" value={storeAddress} onChange={(e) => setStoreAddress(e.target.value)} placeholder="Full address" />
                  </div>
                  <div className="grid grid-2">
                    <div className="field">
                      <label className="label">Phone</label>
                      <input className="input" value={storePhone} onChange={(e) => setStorePhone(e.target.value)} placeholder="+91..." />
                    </div>
                    <div className="field">
                      <label className="label">Email</label>
                      <input className="input" value={storeEmail} onChange={(e) => setStoreEmail(e.target.value)} placeholder="email@example.com" />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">GSTIN</label>
                    <input className="input" value={storeGstin} onChange={(e) => setStoreGstin(e.target.value)} placeholder="GST number" />
                  </div>
                </div>
              </div>

              <div className="card panel-lg">
                <h3 className="heading-md">Invoice & Customer Details</h3>
                <div className="form-grid mt-20">
                  <div className="grid grid-2">
                    <div className="field">
                      <label className="label">Invoice No.</label>
                      <input className="input" value={invoiceNo} onChange={(e) => setInvoiceNo(e.target.value)} placeholder="INV-1001" />
                    </div>
                    <div className="field">
                      <label className="label">Invoice Date</label>
                      <input className="input" type="date" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Due Date</label>
                    <input className="input" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                  </div>

                  <div className="field">
                    <label className="label">Customer Name</label>
                    <input className="input" value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Customer name" />
                  </div>

                  <div className="field">
                    <label className="label">Customer Phone</label>
                    <input className="input" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} placeholder="+91..." />
                  </div>

                  <div className="field">
                    <label className="label">Customer Address</label>
                    <textarea className="textarea" value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)} placeholder="Customer address" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card panel-lg mt-32">
              <div className="grid grid-2">
                <div>
                  <h3 className="heading-md">Invoice Items</h3>
                  <p className="text-sm mt-8">
                    Add products, quantity, rate and GST. Totals are calculated automatically.
                  </p>
                </div>
                <div className="btn-row" style={{ justifyContent: "flex-end" }}>
                  <button type="button" onClick={addItem} className="btn btn-primary">
                    Add Item
                  </button>
                </div>
              </div>

              <div className="table-wrap mt-24">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Item Name</th>
                      <th>HSN</th>
                      <th>Qty</th>
                      <th>Rate</th>
                      <th>GST %</th>
                      <th>Total</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => {
                      const taxable = item.qty * item.rate;
                      const gstAmount = taxable * (item.gst / 100);
                      const total = taxable + gstAmount;

                      return (
                        <tr key={item.id}>
                          <td>
                            <input
                              className="input"
                              value={item.name}
                              onChange={(e) => updateItem(item.id, "name", e.target.value)}
                              placeholder="Product name"
                            />
                          </td>
                          <td>
                            <input
                              className="input"
                              value={item.hsn}
                              onChange={(e) => updateItem(item.id, "hsn", e.target.value)}
                              placeholder="HSN"
                            />
                          </td>
                          <td>
                            <input
                              className="input"
                              type="number"
                              min="1"
                              value={item.qty}
                              onChange={(e) =>
                                updateItem(item.id, "qty", Math.max(Number(e.target.value) || 1, 1))
                              }
                            />
                          </td>
                          <td>
                            <input
                              className="input"
                              type="number"
                              min="0"
                              value={item.rate}
                              onChange={(e) =>
                                updateItem(item.id, "rate", Math.max(Number(e.target.value) || 0, 0))
                              }
                            />
                          </td>
                          <td>
                            <select
                              className="select"
                              value={item.gst}
                              onChange={(e) => updateItem(item.id, "gst", Number(e.target.value))}
                            >
                              <option value={0}>0%</option>
                              <option value={5}>5%</option>
                              <option value={12}>12%</option>
                              <option value={18}>18%</option>
                              <option value={28}>28%</option>
                            </select>
                          </td>
                          <td style={{ fontWeight: 800 }}>{formatCurrency(total)}</td>
                          <td>
                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              className="btn btn-secondary"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-2 mt-32">
                <div className="form-grid">
                  <div className="grid grid-2">
                    <div className="field">
                      <label className="label">Discount Type</label>
                      <select
                        className="select"
                        value={discountType}
                        onChange={(e) => setDiscountType(e.target.value as "amount" | "percent")}
                      >
                        <option value="amount">Amount</option>
                        <option value="percent">Percent</option>
                      </select>
                    </div>
                    <div className="field">
                      <label className="label">
                        Discount {discountType === "percent" ? "(%)" : "(₹)"}
                      </label>
                      <input
                        className="input"
                        type="number"
                        min="0"
                        value={discountValue}
                        onChange={(e) => setDiscountValue(Math.max(Number(e.target.value) || 0, 0))}
                      />
                    </div>
                  </div>

                  <div className="grid grid-2">
                    <div className="field">
                      <label className="label">Shipping / Delivery Charge</label>
                      <input
                        className="input"
                        type="number"
                        min="0"
                        value={shippingCharge}
                        onChange={(e) => setShippingCharge(Math.max(Number(e.target.value) || 0, 0))}
                      />
                    </div>
                    <div className="field">
                      <label className="label">Paid Amount</label>
                      <input
                        className="input"
                        type="number"
                        min="0"
                        value={paidAmount}
                        onChange={(e) => setPaidAmount(Math.max(Number(e.target.value) || 0, 0))}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Notes / Terms</label>
                    <textarea
                      className="textarea"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Invoice notes"
                    />
                  </div>
                </div>

                <div className="invoice-box">
                  <div className="invoice-header">
                    <p className="mb-0" style={{ fontWeight: 900, fontSize: "1.35rem" }}>
                      Invoice Summary
                    </p>
                    <p className="mt-8 mb-0" style={{ opacity: 0.92 }}>
                      Live calculation for customer-ready billing
                    </p>
                  </div>

                  <div className="invoice-body">
                    <div className="summary-grid">
                      <div className="summary-card">
                        <p className="heading-md">Subtotal</p>
                        <p className="text-sm mt-8">{formatCurrency(computed.subtotal)}</p>
                      </div>
                      <div className="summary-card">
                        <p className="heading-md">Total GST</p>
                        <p className="text-sm mt-8">{formatCurrency(computed.totalGst)}</p>
                      </div>
                      <div className="summary-card">
                        <p className="heading-md">Grand Total</p>
                        <p className="text-sm mt-8">{formatCurrency(computed.grandTotal)}</p>
                      </div>
                    </div>

                    <ul className="check-list mt-24">
                      <li>Professional invoice for supermarket and grocery billing</li>
                      <li>Simple print flow for physical receipt or PDF save</li>
                      <li>Strong page for selling website + billing solution</li>
                    </ul>

                    <div className="btn-row mt-24">
                      <button type="button" onClick={handlePrint} className="btn btn-primary btn-full">
                        Print / Save PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card panel-lg mt-40 no-print">
            <div className="grid grid-2">
              <div>
                <span className="eyebrow">Best for Your Sales</span>
                <h2 className="display-md mt-20">
                  A Real Billing Page Helps You Sell Higher-Value Retail Projects
                </h2>
                <p className="lead mt-20">
                  This is not just a design page. It shows real business utility.
                  That makes your demo more powerful and helps clients clearly see the value.
                </p>
              </div>

              <div>
                <ul className="check-list">
                  <li>Shows real invoice generation, not only static design</li>
                  <li>Makes the full retail website demo feel serious and premium</li>
                  <li>Supports upsell of billing software + website package</li>
                  <li>Great for supermarket, grocery and kirana store demos</li>
                  <li>Customer-ready printable invoice improves trust instantly</li>
                  <li>Useful both as sales demo and practical billing page</li>
                </ul>
              </div>
            </div>

            <div className="btn-row mt-32">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Start This Billing Demo
              </a>
              <Link href="/projects/retail-supermarket/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section print-wrap">
        <div className="container">
          <div className="invoice-box print-area">
            <div className="invoice-header">
              <div className="grid grid-2">
                <div>
                  <p className="mb-0" style={{ fontWeight: 900, fontSize: "2rem", lineHeight: 1.1 }}>
                    {storeName || "Your Store Name"}
                  </p>
                  <p className="mt-8 mb-0" style={{ opacity: 0.92 }}>
                    {storeTagline || "Retail Supermarket"}
                  </p>
                  <p className="mt-12 mb-0" style={{ opacity: 0.92 }}>
                    {storeAddress || "Store Address"}
                  </p>
                  <p className="mt-8 mb-0" style={{ opacity: 0.92 }}>
                    Phone: {storePhone || "-"}
                  </p>
                  <p className="mt-8 mb-0" style={{ opacity: 0.92 }}>
                    Email: {storeEmail || "-"}
                  </p>
                  <p className="mt-8 mb-0" style={{ opacity: 0.92 }}>
                    GSTIN: {storeGstin || "-"}
                  </p>
                </div>

                <div style={{ textAlign: "right" }}>
                  <p className="mb-0" style={{ fontWeight: 900, fontSize: "1.6rem" }}>
                    TAX INVOICE
                  </p>
                  <p className="mt-12 mb-0">Invoice No.: <strong>{invoiceNo || "-"}</strong></p>
                  <p className="mt-8 mb-0">Invoice Date: <strong>{invoiceDate || "-"}</strong></p>
                  <p className="mt-8 mb-0">Due Date: <strong>{dueDate || "-"}</strong></p>
                </div>
              </div>
            </div>

            <div className="invoice-body">
              <div className="grid grid-2">
                <div className="summary-card">
                  <p className="heading-md">Bill To</p>
                  <p className="text mt-12"><strong>{customerName || "Customer Name"}</strong></p>
                  <p className="text-sm mt-8">{customerPhone || "Phone not provided"}</p>
                  <p className="text-sm mt-8">{customerAddress || "Customer address"}</p>
                </div>

                <div className="summary-card">
                  <p className="heading-md">Invoice Summary</p>
                  <p className="text-sm mt-12">Total Items: {computed.rows.length}</p>
                  <p className="text-sm mt-8">Subtotal: {formatCurrency(computed.subtotal)}</p>
                  <p className="text-sm mt-8">GST: {formatCurrency(computed.totalGst)}</p>
                  <p className="text-sm mt-8">Total Payable: {formatCurrency(computed.grandTotal)}</p>
                </div>
              </div>

              <div className="table-wrap mt-24">
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Item</th>
                      <th>HSN</th>
                      <th>Qty</th>
                      <th>Rate</th>
                      <th>Taxable</th>
                      <th>GST %</th>
                      <th>GST Amt.</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {computed.rows.map((row, index) => (
                      <tr key={row.id}>
                        <td>{index + 1}</td>
                        <td>{row.name || "-"}</td>
                        <td>{row.hsn || "-"}</td>
                        <td>{row.qty}</td>
                        <td>{formatCurrency(row.rate)}</td>
                        <td>{formatCurrency(row.taxable)}</td>
                        <td>{row.gst}%</td>
                        <td>{formatCurrency(row.gstAmount)}</td>
                        <td><strong>{formatCurrency(row.total)}</strong></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-2 mt-24">
                <div>
                  <div className="summary-card">
                    <p className="heading-md">Amount in Words</p>
                    <p className="text mt-12">{computed.totalInWords}</p>
                  </div>

                  <div className="summary-card mt-20">
                    <p className="heading-md">Notes</p>
                    <p className="text-sm mt-12">
                      {notes || "Thank you for your purchase."}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="table-wrap">
                    <table className="table" style={{ minWidth: "100%" }}>
                      <tbody>
                        <tr>
                          <th>Subtotal</th>
                          <td>{formatCurrency(computed.subtotal)}</td>
                        </tr>
                        <tr>
                          <th>Total GST</th>
                          <td>{formatCurrency(computed.totalGst)}</td>
                        </tr>
                        <tr>
                          <th>Shipping / Delivery</th>
                          <td>{formatCurrency(shippingCharge)}</td>
                        </tr>
                        <tr>
                          <th>Discount</th>
                          <td>- {formatCurrency(computed.discount)}</td>
                        </tr>
                        <tr>
                          <th>Grand Total</th>
                          <td><strong>{formatCurrency(computed.grandTotal)}</strong></td>
                        </tr>
                        <tr>
                          <th>Paid Amount</th>
                          <td>{formatCurrency(paidAmount)}</td>
                        </tr>
                        <tr>
                          <th>Balance Due</th>
                          <td><strong>{formatCurrency(computed.balance)}</strong></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="summary-card mt-20" style={{ textAlign: "center" }}>
                    <p className="heading-md">Authorized Signature</p>
                    <div style={{ height: 54 }} />
                    <p className="text-sm">For {storeName || "Your Store Name"}</p>
                  </div>
                </div>
              </div>

              <div className="summary-card mt-24" style={{ textAlign: "center" }}>
                <p className="text-sm">
                  Thank you for shopping with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}