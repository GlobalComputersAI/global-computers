"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const BASE = "/projects/builder";
const CALL_LINK = "tel:+919752422686";
const WHATSAPP_LINK =
  "https://wa.me/919752422686?text=Hi%20I%20want%20a%20Builder%20Billing%20%2F%20Invoice%20System.%20Please%20share%20demo%2C%20pricing%2C%20features%2C%20and%20delivery%20time.";

type InvoiceRow = {
  id: number;
  label: string;
  amount: string;
};

function toNumber(value: string) {
  const cleaned = value.replace(/,/g, "").trim();
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : 0;
}

function formatINR(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function todayDate() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export default function BillGeneratorClient() {
  const [invoiceNo, setInvoiceNo] = useState("INV-BLD-2026-001");
  const [invoiceDate, setInvoiceDate] = useState(todayDate());

  const [customerName, setCustomerName] = useState("Mr. Rajesh Verma");
  const [customerPhone, setCustomerPhone] = useState("+91 98XXXXXX54");
  const [customerEmail, setCustomerEmail] = useState("customer@example.com");
  const [customerAddress, setCustomerAddress] = useState(
    "Korba, Chhattisgarh"
  );

  const [projectName, setProjectName] = useState("Skyline Residency");
  const [propertyType, setPropertyType] = useState("2 BHK Premium Apartment");
  const [unitNo, setUnitNo] = useState("Tower B • Flat 302");
  const [area, setArea] = useState("1180 sq. ft.");
  const [paymentPlan, setPaymentPlan] = useState("Construction Linked Plan");

  const [rows, setRows] = useState<InvoiceRow[]>([
    { id: 1, label: "Basic Unit Cost", amount: "3200000" },
    { id: 2, label: "GST / Applicable Tax", amount: "160000" },
    { id: 3, label: "Floor Rise / Preferential Charges", amount: "35000" },
    { id: 4, label: "Maintenance / Utility Charges", amount: "25000" },
    { id: 5, label: "Documentation / Processing", amount: "25000" },
  ]);

  const [amountPaid, setAmountPaid] = useState("450000");
  const [bookingAmount, setBookingAmount] = useState("100000");
  const [notes, setNotes] = useState(
    "This is a system-generated builder invoice / payment summary. Please verify payment schedule, tax applicability, and due milestones as per project terms."
  );

  const grandTotal = useMemo(() => {
    return rows.reduce((sum, row) => sum + toNumber(row.amount), 0);
  }, [rows]);

  const paidValue = useMemo(() => toNumber(amountPaid), [amountPaid]);
  const bookingValue = useMemo(() => toNumber(bookingAmount), [bookingAmount]);
  const balanceDue = Math.max(grandTotal - paidValue, 0);

  const addRow = () => {
    setRows((prev) => [
      ...prev,
      { id: Date.now(), label: "New Charge", amount: "0" },
    ]);
  };

  const updateRow = (id: number, key: "label" | "amount", value: string) => {
    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [key]: value } : row))
    );
  };

  const removeRow = (id: number) => {
    setRows((prev) => prev.filter((row) => row.id !== id));
  };

  const resetAll = () => {
    setInvoiceNo("INV-BLD-2026-001");
    setInvoiceDate(todayDate());
    setCustomerName("Mr. Rajesh Verma");
    setCustomerPhone("+91 98XXXXXX54");
    setCustomerEmail("customer@example.com");
    setCustomerAddress("Korba, Chhattisgarh");
    setProjectName("Skyline Residency");
    setPropertyType("2 BHK Premium Apartment");
    setUnitNo("Tower B • Flat 302");
    setArea("1180 sq. ft.");
    setPaymentPlan("Construction Linked Plan");
    setRows([
      { id: 1, label: "Basic Unit Cost", amount: "3200000" },
      { id: 2, label: "GST / Applicable Tax", amount: "160000" },
      { id: 3, label: "Floor Rise / Preferential Charges", amount: "35000" },
      { id: 4, label: "Maintenance / Utility Charges", amount: "25000" },
      { id: 5, label: "Documentation / Processing", amount: "25000" },
    ]);
    setAmountPaid("450000");
    setBookingAmount("100000");
    setNotes(
      "This is a system-generated builder invoice / payment summary. Please verify payment schedule, tax applicability, and due milestones as per project terms."
    );
  };

  const printInvoice = () => {
    window.print();
  };

  return (
    <main>
      <section className="builder-section relative overflow-hidden print:hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_24%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_18%)]" />

        <div className="relative z-[1] mx-auto max-w-7xl px-6 pb-10 pt-16 md:pt-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-2">
                {[
                  "Live Invoice Generator",
                  "Builder Billing",
                  "Print Ready",
                  "Customer Invoice",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-amber-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <h1 className="builder-title mt-7 text-4xl leading-tight md:text-6xl">
                Generate Real Builder Bills and Customer Invoices
              </h1>

              <p className="builder-text mt-6 max-w-3xl text-base md:text-lg">
                This page is now a working invoice generator. Enter customer,
                project, and payment details, then print or save as PDF for the
                buyer.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={printInvoice}
                  className="builder-btn-primary"
                >
                  Print / Save PDF
                </button>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="builder-btn-whatsapp"
                >
                  WhatsApp for Demo
                </a>

                <a href={CALL_LINK} className="builder-btn-secondary">
                  Call Now
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="builder-card p-6 md:p-7">
                <span className="builder-eyebrow">Quick Summary</span>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-white/50">
                      Grand Total
                    </p>
                    <p className="mt-2 text-xl font-black text-white">
                      {formatINR(grandTotal)}
                    </p>
                  </div>

                  <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-white/50">
                      Amount Paid
                    </p>
                    <p className="mt-2 text-xl font-black text-white">
                      {formatINR(paidValue)}
                    </p>
                  </div>

                  <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-white/50">
                      Balance Due
                    </p>
                    <p className="mt-2 text-xl font-black text-white">
                      {formatINR(balanceDue)}
                    </p>
                  </div>

                  <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-white/50">
                      Booking Amount
                    </p>
                    <p className="mt-2 text-xl font-black text-white">
                      {formatINR(bookingValue)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="builder-section mx-auto max-w-7xl px-6 pb-8 print:hidden">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="builder-card p-6 md:p-8">
              <h2 className="builder-title text-2xl md:text-3xl">
                Enter Invoice Details
              </h2>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <input
                  value={invoiceNo}
                  onChange={(e) => setInvoiceNo(e.target.value)}
                  placeholder="Invoice No"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white outline-none placeholder:text-white/40"
                />
                <input
                  type="date"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white outline-none"
                />

                <input
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Customer Name"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white outline-none placeholder:text-white/40"
                />
                <input
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="Customer Phone"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white outline-none placeholder:text-white/40"
                />

                <input
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="Customer Email"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white outline-none placeholder:text-white/40"
                />
                <input
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  placeholder="Customer Address"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white outline-none placeholder:text-white/40"
                />

                <input
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="Project Name"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white outline-none placeholder:text-white/40"
                />
                <input
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  placeholder="Property Type"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white outline-none placeholder:text-white/40"
                />

                <input
                  value={unitNo}
                  onChange={(e) => setUnitNo(e.target.value)}
                  placeholder="Unit / Flat / Plot No"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white outline-none placeholder:text-white/40"
                />
                <input
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="Area"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white outline-none placeholder:text-white/40"
                />

                <input
                  value={paymentPlan}
                  onChange={(e) => setPaymentPlan(e.target.value)}
                  placeholder="Payment Plan"
                  className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white outline-none placeholder:text-white/40"
                />
              </div>
            </div>

            <div className="builder-card mt-8 p-6 md:p-8">
              <div className="flex items-center justify-between gap-4">
                <h2 className="builder-title text-2xl md:text-3xl">
                  Amount Rows
                </h2>

                <button
                  type="button"
                  onClick={addRow}
                  className="builder-btn-secondary"
                >
                  Add Row
                </button>
              </div>

              <div className="mt-6 space-y-4">
                {rows.map((row) => (
                  <div
                    key={row.id}
                    className="grid gap-3 rounded-[24px] border border-white/10 bg-white/5 p-4 md:grid-cols-[1fr_220px_120px]"
                  >
                    <input
                      value={row.label}
                      onChange={(e) =>
                        updateRow(row.id, "label", e.target.value)
                      }
                      placeholder="Charge Label"
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white outline-none placeholder:text-white/40"
                    />
                    <input
                      value={row.amount}
                      onChange={(e) =>
                        updateRow(row.id, "amount", e.target.value)
                      }
                      placeholder="Amount"
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white outline-none placeholder:text-white/40"
                    />
                    <button
                      type="button"
                      onClick={() => removeRow(row.id)}
                      className="rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 font-extrabold text-white"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <input
                  value={bookingAmount}
                  onChange={(e) => setBookingAmount(e.target.value)}
                  placeholder="Booking Amount"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white outline-none placeholder:text-white/40"
                />
                <input
                  value={amountPaid}
                  onChange={(e) => setAmountPaid(e.target.value)}
                  placeholder="Amount Paid"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white outline-none placeholder:text-white/40"
                />
              </div>

              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Notes"
                rows={4}
                className="mt-4 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white outline-none placeholder:text-white/40"
              />

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={printInvoice}
                  className="builder-btn-primary"
                >
                  Print Invoice
                </button>
                <button
                  type="button"
                  onClick={resetAll}
                  className="builder-btn-secondary"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="builder-card p-6 md:p-8">
              <h2 className="builder-title text-2xl md:text-3xl">
                Actions
              </h2>

              <div className="mt-6 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={printInvoice}
                  className="builder-btn-primary"
                >
                  Print / Save as PDF
                </button>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="builder-btn-whatsapp"
                >
                  WhatsApp for Full System
                </a>

                <Link
                  href={`${BASE}/Contactus/`}
                  className="builder-btn-secondary"
                >
                  Contact Sales
                </Link>
              </div>

              <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-black text-white">
                  How to download PDF
                </p>
                <p className="mt-3 text-sm font-semibold leading-7 text-white/72">
                  Click <span className="font-black text-white">Print / Save as PDF</span>, then in the browser print dialog choose
                  <span className="font-black text-white"> Save as PDF</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="builder-section mx-auto max-w-7xl px-6 pb-20">
        <div
          id="print-invoice"
          className="builder-card overflow-hidden bg-white text-slate-900 print:rounded-none print:border-0 print:bg-white print:shadow-none"
        >
          <div className="border-b border-slate-200 bg-slate-950 px-6 py-8 text-white print:bg-white print:text-slate-900">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-amber-300 print:text-slate-600">
                  Builder Invoice
                </p>
                <h2 className="mt-2 text-3xl font-black">
                  Global Computers & IT Solutions
                </h2>
                <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-white/75 print:text-slate-600">
                  Professional builder billing and invoice summary for flats,
                  villas, plots, and commercial property bookings.
                </p>
              </div>

              <div className="grid gap-3 text-sm font-semibold">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-white/55 print:text-slate-500">
                    Invoice No.
                  </p>
                  <p className="mt-1 font-black">{invoiceNo}</p>
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-white/55 print:text-slate-500">
                    Date
                  </p>
                  <p className="mt-1 font-black">{invoiceDate}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 border-b border-slate-200 px-6 py-8 md:grid-cols-2">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-slate-500">
                Customer Details
              </p>
              <div className="mt-3 space-y-2 text-sm font-semibold text-slate-700">
                <p>
                  <span className="font-black text-slate-900">Name:</span>{" "}
                  {customerName}
                </p>
                <p>
                  <span className="font-black text-slate-900">Phone:</span>{" "}
                  {customerPhone}
                </p>
                <p>
                  <span className="font-black text-slate-900">Email:</span>{" "}
                  {customerEmail}
                </p>
                <p>
                  <span className="font-black text-slate-900">Address:</span>{" "}
                  {customerAddress}
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-slate-500">
                Property Details
              </p>
              <div className="mt-3 space-y-2 text-sm font-semibold text-slate-700">
                <p>
                  <span className="font-black text-slate-900">Project:</span>{" "}
                  {projectName}
                </p>
                <p>
                  <span className="font-black text-slate-900">Property Type:</span>{" "}
                  {propertyType}
                </p>
                <p>
                  <span className="font-black text-slate-900">Unit:</span>{" "}
                  {unitNo}
                </p>
                <p>
                  <span className="font-black text-slate-900">Area:</span>{" "}
                  {area}
                </p>
                <p>
                  <span className="font-black text-slate-900">Payment Plan:</span>{" "}
                  {paymentPlan}
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 py-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-slate-500">
              Invoice Items
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-left">
                    <th className="px-3 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-slate-500">
                      Description
                    </th>
                    <th className="px-3 py-3 text-right text-xs font-extrabold uppercase tracking-[0.14em] text-slate-500">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.id} className="border-b border-slate-100">
                      <td className="px-3 py-3 text-sm font-semibold text-slate-700">
                        {row.label}
                      </td>
                      <td className="px-3 py-3 text-right text-sm font-black text-slate-900">
                        {formatINR(toNumber(row.amount))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 ml-auto grid max-w-md gap-3">
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                <p className="text-sm font-bold text-slate-700">Booking Amount</p>
                <p className="text-sm font-black text-slate-900">
                  {formatINR(bookingValue)}
                </p>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                <p className="text-sm font-bold text-slate-700">Grand Total</p>
                <p className="text-sm font-black text-slate-900">
                  {formatINR(grandTotal)}
                </p>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                <p className="text-sm font-bold text-slate-700">Amount Paid</p>
                <p className="text-sm font-black text-slate-900">
                  {formatINR(paidValue)}
                </p>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-amber-50 px-4 py-3">
                <p className="text-sm font-bold text-slate-700">Balance Due</p>
                <p className="text-lg font-black text-slate-900">
                  {formatINR(balanceDue)}
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-slate-500">
                Notes
              </p>
              <p className="mt-3 text-sm font-semibold leading-7 text-slate-700">
                {notes}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}