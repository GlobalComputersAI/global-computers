"use client";

import { useMemo, useState } from "react";

type InvoiceItem = {
  id: number;
  itemName: string;
  category: string;
  qty: number;
  rate: number;
  gst: number;
};

const WHATSAPP_URL =
  "https://wa.me/919752422686?text=Hi%20I%20want%20a%20mobile%20shop%20website%20with%20invoice%20generator%20and%20billing%20page.%20Please%20share%20details.";
const CALL_URL = "tel:+919752422686";

const initialItems: InvoiceItem[] = [
  {
    id: 1,
    itemName: "Smartphone",
    category: "Mobile",
    qty: 1,
    rate: 14999,
    gst: 18,
  },
  {
    id: 2,
    itemName: "Tempered Glass",
    category: "Accessory",
    qty: 1,
    rate: 199,
    gst: 18,
  },
];

function currency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);
}

function padInvoice(num: number) {
  return `INV-${String(num).padStart(4, "0")}`;
}

export default function BillingGeneratorClient() {
  const [shopName, setShopName] = useState("Smart Mobile Hub");
  const [shopPhone, setShopPhone] = useState("+91 97524 22686");
  const [shopEmail, setShopEmail] = useState(
    "globalcomputers.it.solutions@gmail.com"
  );
  const [shopAddress, setShopAddress] = useState("Korba, Chhattisgarh, India");
  const [gstin, setGstin] = useState("22ABCDE1234F1Z5");
  const [invoiceNo, setInvoiceNo] = useState("INV-1001");
  const [invoiceDate, setInvoiceDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const [customerName, setCustomerName] = useState("Rahul Verma");
  const [customerPhone, setCustomerPhone] = useState("+91 90000 00000");
  const [customerAddress, setCustomerAddress] = useState(
    "Korba, Chhattisgarh"
  );
  const [paymentMode, setPaymentMode] = useState("Cash");
  const [notes, setNotes] = useState(
    "Thank you for your purchase. Goods once sold will not be taken back without valid reason."
  );

  const [items, setItems] = useState<InvoiceItem[]>(initialItems);

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.qty * item.rate, 0);
    const gstAmount = items.reduce(
      (sum, item) => sum + (item.qty * item.rate * item.gst) / 100,
      0
    );
    const grandTotal = subtotal + gstAmount;

    return {
      subtotal,
      gstAmount,
      grandTotal,
    };
  }, [items]);

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        itemName: "",
        category: "Accessory",
        qty: 1,
        rate: 0,
        gst: 18,
      },
    ]);
  };

  const updateItem = <K extends keyof InvoiceItem>(
    id: number,
    key: K,
    value: InvoiceItem[K]
  ) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [key]: value } : item))
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) =>
      prev.length > 1 ? prev.filter((item) => item.id !== id) : prev
    );
  };

  const clearInvoice = () => {
    setCustomerName("");
    setCustomerPhone("");
    setCustomerAddress("");
    setPaymentMode("Cash");
    setNotes("");
    setItems([
      {
        id: Date.now(),
        itemName: "",
        category: "Accessory",
        qty: 1,
        rate: 0,
        gst: 18,
      },
    ]);
    setInvoiceNo(padInvoice(Math.floor(Math.random() * 9000) + 1000));
    setInvoiceDate(new Date().toISOString().slice(0, 10));
  };

  const printInvoice = () => {
    window.print();
  };

  return (
    <>
      <section className="section-lg bg-grid bg-radial overflow-hidden print:hidden">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="eyebrow">Mobile Shop Invoice Generator</span>

              <h1 className="section-title mt-6 max-w-4xl">
                Create Professional{" "}
                <span className="gradient-text">Mobile Shop Invoices</span> for
                Phones, Accessories, and Repair Services
              </h1>

              <p className="section-subtitle">
                This billing page is built for real customer invoicing. Add
                customer details, mobile products, accessories, repair items,
                GST-style tax, and generate a print-ready invoice that can be
                given directly to the client.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={printInvoice}
                  className="btn btn-primary sm:w-auto"
                  aria-label="Print invoice"
                >
                  Print Invoice
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary sm:w-auto"
                  aria-label="Get billing page on WhatsApp"
                >
                  Get This Billing Demo
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Invoice Generator",
                  "Print Ready",
                  "GST-Style Bill",
                  "Phones + Accessories + Repair",
                ].map((item) => (
                  <span key={item} className="stat-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-5 sm:p-6">
              <div className="rounded-[28px] bg-slate-950 p-5 text-white sm:p-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                  Why this page matters
                </p>
                <h2 className="mt-3 text-2xl font-black tracking-tight">
                  Billing Builds Trust
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  A professional invoice page makes your mobile shop look modern,
                  organized, and more trustworthy. It improves customer
                  confidence and gives your business a strong professional image.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    "Customer details section",
                    "Item-wise billing table",
                    "Automatic GST calculation",
                    "Print-ready professional invoice",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-slate-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href={CALL_URL} className="btn btn-dark sm:w-auto">
                    Call Now
                  </a>
                  <button
                    type="button"
                    onClick={clearInvoice}
                    className="btn btn-dark sm:w-auto"
                  >
                    New Invoice
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section print:py-0">
        <div className="container print:w-full print:max-w-none">
          <div className="grid gap-8 xl:grid-cols-[0.98fr_1.02fr] print:grid-cols-1">
            <div className="soft-card p-5 sm:p-6 print:hidden">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="eyebrow">Invoice Details</span>
                  <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
                    Fill Invoice Information
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={addItem}
                  className="btn btn-secondary sm:w-auto"
                >
                  Add Item
                </button>
              </div>

              <div className="mt-8 grid gap-8">
                <div>
                  <h3 className="text-lg font-black text-slate-950">
                    Shop Details
                  </h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <input
                      className="input"
                      placeholder="Shop Name"
                      value={shopName}
                      onChange={(e) => setShopName(e.target.value)}
                    />
                    <input
                      className="input"
                      placeholder="Shop Phone"
                      value={shopPhone}
                      onChange={(e) => setShopPhone(e.target.value)}
                    />
                    <input
                      className="input"
                      placeholder="Shop Email"
                      value={shopEmail}
                      onChange={(e) => setShopEmail(e.target.value)}
                    />
                    <input
                      className="input"
                      placeholder="GSTIN"
                      value={gstin}
                      onChange={(e) => setGstin(e.target.value)}
                    />
                    <textarea
                      className="textarea sm:col-span-2"
                      placeholder="Shop Address"
                      value={shopAddress}
                      onChange={(e) => setShopAddress(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-black text-slate-950">
                    Invoice Info
                  </h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <input
                      className="input"
                      placeholder="Invoice Number"
                      value={invoiceNo}
                      onChange={(e) => setInvoiceNo(e.target.value)}
                    />
                    <input
                      type="date"
                      className="input"
                      value={invoiceDate}
                      onChange={(e) => setInvoiceDate(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-black text-slate-950">
                    Customer Details
                  </h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <input
                      className="input"
                      placeholder="Customer Name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                    />
                    <input
                      className="input"
                      placeholder="Customer Phone"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                    />
                    <textarea
                      className="textarea sm:col-span-2"
                      placeholder="Customer Address"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                    />
                    <select
                      className="select sm:col-span-2"
                      value={paymentMode}
                      onChange={(e) => setPaymentMode(e.target.value)}
                    >
                      <option>Cash</option>
                      <option>UPI</option>
                      <option>Card</option>
                      <option>Bank Transfer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-black text-slate-950">Items</h3>
                    <p className="text-sm font-semibold text-slate-500">
                      Add mobiles, accessories, or repair charges
                    </p>
                  </div>

                  <div className="mt-4 grid gap-4">
                    {items.map((item, index) => (
                      <div
                        key={item.id}
                        className="rounded-[24px] border border-slate-200 bg-slate-50 p-4"
                      >
                        <div className="mb-4 flex items-center justify-between gap-3">
                          <p className="text-sm font-black text-slate-900">
                            Item {index + 1}
                          </p>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="rounded-full border border-red-200 px-3 py-1 text-xs font-bold text-red-600 transition hover:bg-red-50"
                          >
                            Remove
                          </button>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <input
                            className="input"
                            placeholder="Item Name"
                            value={item.itemName}
                            onChange={(e) =>
                              updateItem(item.id, "itemName", e.target.value)
                            }
                          />
                          <select
                            className="select"
                            value={item.category}
                            onChange={(e) =>
                              updateItem(item.id, "category", e.target.value)
                            }
                          >
                            <option>Mobile</option>
                            <option>Accessory</option>
                            <option>Repair Service</option>
                            <option>Other</option>
                          </select>

                          <input
                            type="number"
                            min="1"
                            className="input"
                            placeholder="Quantity"
                            value={item.qty}
                            onChange={(e) =>
                              updateItem(item.id, "qty", Number(e.target.value) || 1)
                            }
                          />
                          <input
                            type="number"
                            min="0"
                            className="input"
                            placeholder="Rate"
                            value={item.rate}
                            onChange={(e) =>
                              updateItem(item.id, "rate", Number(e.target.value) || 0)
                            }
                          />

                          <input
                            type="number"
                            min="0"
                            className="input sm:col-span-2"
                            placeholder="GST %"
                            value={item.gst}
                            onChange={(e) =>
                              updateItem(item.id, "gst", Number(e.target.value) || 0)
                            }
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-black text-slate-950">Notes</h3>
                  <textarea
                    className="textarea mt-4"
                    placeholder="Additional invoice note"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <button
                    type="button"
                    onClick={printInvoice}
                    className="btn btn-primary"
                  >
                    Print Bill
                  </button>
                  <button
                    type="button"
                    onClick={addItem}
                    className="btn btn-secondary"
                  >
                    Add More Item
                  </button>
                  <button
                    type="button"
                    onClick={clearInvoice}
                    className="btn btn-secondary"
                  >
                    Clear Form
                  </button>
                </div>
              </div>
            </div>

            <div className="soft-card overflow-hidden print:shadow-none print:border-0">
              <div className="h-1 w-full bg-gradient-to-r from-slate-950 via-blue-600 to-cyan-500 print:hidden" />

              <div className="p-5 sm:p-8 print:p-0">
                <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm print:rounded-none print:border-0 print:shadow-none">
                  <div className="flex flex-col gap-6 border-b border-slate-200 pb-6 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                        Tax Invoice
                      </p>
                      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                        {shopName || "Your Mobile Shop"}
                      </h2>
                      <div className="mt-3 space-y-1 text-sm text-slate-600">
                        <p>{shopAddress || "Shop address"}</p>
                        <p>{shopPhone || "Phone number"}</p>
                        <p>{shopEmail || "Email address"}</p>
                        <p>GSTIN: {gstin || "GST number"}</p>
                      </div>
                    </div>

                    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4 sm:min-w-[240px]">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                        Invoice Details
                      </p>
                      <div className="mt-3 space-y-2 text-sm text-slate-700">
                        <p>
                          <span className="font-bold text-slate-950">
                            Invoice No:
                          </span>{" "}
                          {invoiceNo || padInvoice(1001)}
                        </p>
                        <p>
                          <span className="font-bold text-slate-950">Date:</span>{" "}
                          {invoiceDate || new Date().toISOString().slice(0, 10)}
                        </p>
                        <p>
                          <span className="font-bold text-slate-950">
                            Payment:
                          </span>{" "}
                          {paymentMode}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                        Bill To
                      </p>
                      <div className="mt-3 space-y-1 text-sm text-slate-700">
                        <p className="font-bold text-slate-950">
                          {customerName || "Customer Name"}
                        </p>
                        <p>{customerPhone || "Customer Phone"}</p>
                        <p>{customerAddress || "Customer Address"}</p>
                      </div>
                    </div>

                    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                        Invoice Summary
                      </p>
                      <div className="mt-3 space-y-2 text-sm text-slate-700">
                        <p>
                          <span className="font-bold text-slate-950">Items:</span>{" "}
                          {items.length}
                        </p>
                        <p>
                          <span className="font-bold text-slate-950">
                            Subtotal:
                          </span>{" "}
                          {currency(totals.subtotal)}
                        </p>
                        <p>
                          <span className="font-bold text-slate-950">GST:</span>{" "}
                          {currency(totals.gstAmount)}
                        </p>
                        <p className="text-base font-black text-slate-950">
                          Grand Total: {currency(totals.grandTotal)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="table-wrap mt-6">
                    <table className="table-clean">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Item</th>
                          <th>Category</th>
                          <th>Qty</th>
                          <th>Rate</th>
                          <th>GST %</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item, index) => {
                          const rowTotal =
                            item.qty * item.rate +
                            (item.qty * item.rate * item.gst) / 100;

                          return (
                            <tr key={item.id}>
                              <td>{index + 1}</td>
                              <td>{item.itemName || "Item"}</td>
                              <td>{item.category}</td>
                              <td>{item.qty}</td>
                              <td>{currency(item.rate)}</td>
                              <td>{item.gst}%</td>
                              <td>{currency(rowTotal)}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
                    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                        Notes
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-700">
                        {notes || "No additional notes."}
                      </p>
                    </div>

                    <div className="rounded-[24px] border border-slate-200 bg-slate-950 p-5 text-white">
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-slate-300">Subtotal</span>
                          <strong>{currency(totals.subtotal)}</strong>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-slate-300">GST Total</span>
                          <strong>{currency(totals.gstAmount)}</strong>
                        </div>
                        <div className="border-t border-white/10 pt-3">
                          <div className="flex items-center justify-between gap-3">
                            <span className="text-base font-black">
                              Grand Total
                            </span>
                            <strong className="text-lg font-black">
                              {currency(totals.grandTotal)}
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-6 border-t border-slate-200 pt-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-600">
                        Thank you for shopping with us.
                      </p>
                      <p className="mt-1 text-xs leading-6 text-slate-500">
                        This is a computer-generated invoice for mobile sales,
                        accessories, and service billing.
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                        Authorized Signature
                      </p>
                      <div className="ml-auto mt-8 h-px w-40 bg-slate-300" />
                      <p className="mt-2 text-sm font-bold text-slate-700">
                        {shopName}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 soft-card p-5 sm:p-6 print:hidden">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="eyebrow">Best for mobile business</span>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
                  Want This Billing Page for Your Mobile Shop?
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600">
                  Get a professional billing page with customer invoice generator,
                  print layout, mobile product billing, accessories invoice,
                  repair service bill, and strong business presentation.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary sm:w-auto"
                >
                  WhatsApp for Demo
                </a>
                <a href={CALL_URL} className="btn btn-secondary sm:w-auto">
                  Call for Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @media print {
          body {
            background: #ffffff !important;
          }

          header,
          footer {
            display: none !important;
          }

          .print\\:hidden {
            display: none !important;
          }

          .print\\:py-0 {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }

          .print\\:grid-cols-1 {
            grid-template-columns: 1fr !important;
          }

          .print\\:w-full {
            width: 100% !important;
          }

          .print\\:max-w-none {
            max-width: none !important;
          }

          .print\\:shadow-none {
            box-shadow: none !important;
          }

          .print\\:border-0 {
            border: 0 !important;
          }

          .print\\:rounded-none {
            border-radius: 0 !important;
          }

          .print\\:p-0 {
            padding: 0 !important;
          }
        }
      `}</style>
    </>
  );
}