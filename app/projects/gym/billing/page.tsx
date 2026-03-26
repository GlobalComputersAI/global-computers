"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";

const OWNER_WA =
  "https://wa.me/919752422686?text=Hi%20I%20saw%20your%20Gym%20Billing%20Demo.%20I%20want%20Website%20+%20Billing%20in%20%E2%82%B95000.%20Please%20share%20details.";
const OWNER_CALL = "tel:+919752422686";

type Item = {
  desc: string;
  qty: number;
  rate: number;
};

function todayISO() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function genInvoiceNo() {
  // INV-YYYYMMDD-HHMMSS-XXX
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  const ss = String(d.getSeconds()).padStart(2, "0");
  const rnd = Math.floor(100 + Math.random() * 900);
  return `INV-${y}${m}${day}-${hh}${mm}${ss}-${rnd}`;
}

function inr(n: number) {
  const v = Number.isFinite(n) ? n : 0;
  return `₹${Math.round(v).toLocaleString("en-IN")}`;
}

function waLink(text: string) {
  return `https://wa.me/919752422686?text=${encodeURIComponent(text)}`;
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-extrabold text-slate-600">{label}</span>
      {children}
    </label>
  );
}

function Btn({
  children,
  onClick,
  variant = "dark",
  className = "",
  type = "button",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "dark" | "ghost" | "outline" | "green";
  className?: string;
  type?: "button" | "submit";
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2.5 text-sm font-extrabold transition";
  const styles =
    variant === "dark"
      ? "bg-slate-900 text-white hover:bg-slate-800"
      : variant === "green"
        ? "bg-green-600 text-white hover:bg-green-700"
        : variant === "outline"
          ? "border border-slate-300 bg-white hover:border-slate-400"
          : "bg-transparent hover:bg-slate-100";
  return (
    <button type={type} onClick={onClick} className={[base, styles, className].join(" ")}>
      {children}
    </button>
  );
}

export default function BillingPage() {
  const printRef = useRef<HTMLDivElement | null>(null);

  // Seller (Gym)
  const [gymName, setGymName] = useState("Elite Fitness Studio");
  const [gymTagline, setGymTagline] = useState("Gym & Fitness");
  const [gymPhone, setGymPhone] = useState("+91 98765 43210");
  const [gymAddress, setGymAddress] = useState("Your Address, City");
  const [logoDataUrl, setLogoDataUrl] = useState<string>("");

  // Invoice meta
  const [invoiceNo, setInvoiceNo] = useState(genInvoiceNo());
  const [invoiceDate, setInvoiceDate] = useState(todayISO());

  // Buyer
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");

  // GST
  const [gstEnabled, setGstEnabled] = useState(false);
  const [gstin, setGstin] = useState("");
  const [gstRate, setGstRate] = useState(18); // percent

  // Items
  const [items, setItems] = useState<Item[]>([
    { desc: "Monthly Membership", qty: 1, rate: 1500 },
    { desc: "Admission Fee", qty: 1, rate: 500 },
  ]);

  // Payments
  const [discount, setDiscount] = useState(0);
  const [paid, setPaid] = useState(0);

  // Signature / Stamp (simple demo)
  const [signName, setSignName] = useState("Authorized Signatory");
  const [stampText, setStampText] = useState("Elite Fitness Studio");

  const subtotal = useMemo(() => {
    return items.reduce((sum, it) => sum + (Number(it.qty) || 0) * (Number(it.rate) || 0), 0);
  }, [items]);

  const gstAmount = useMemo(() => {
    if (!gstEnabled) return 0;
    const base = Math.max(0, subtotal - (Number(discount) || 0));
    return (base * (Number(gstRate) || 0)) / 100;
  }, [gstEnabled, gstRate, subtotal, discount]);

  const total = useMemo(() => {
    const base = Math.max(0, subtotal - (Number(discount) || 0));
    return base + gstAmount;
  }, [subtotal, discount, gstAmount]);

  const balance = useMemo(() => {
    return Math.max(0, total - (Number(paid) || 0));
  }, [total, paid]);

  function addItem() {
    setItems((prev) => [...prev, { desc: "Service / Product", qty: 1, rate: 0 }]);
  }

  function removeItem(i: number) {
    setItems((prev) => prev.filter((_, idx) => idx !== i));
  }

  function updateItem(i: number, patch: Partial<Item>) {
    setItems((prev) => prev.map((it, idx) => (idx === i ? { ...it, ...patch } : it)));
  }

  function onLogoPick(file: File | null) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setLogoDataUrl(String(reader.result || ""));
    };
    reader.readAsDataURL(file);
  }

  function printInvoice() {
    // A4 print via CSS below (print-only section)
    window.print();
  }

  const shareText = useMemo(() => {
    const lines = [
      `Gym Billing Demo Invoice`,
      `Invoice: ${invoiceNo} (${invoiceDate})`,
      `Customer: ${customerName || "-"} (${customerPhone || "-"})`,
      `Subtotal: ${inr(subtotal)}`,
      discount ? `Discount: ${inr(discount)}` : "",
      gstEnabled ? `GST (${gstRate}%): ${inr(gstAmount)}` : "",
      `Total: ${inr(total)}`,
      paid ? `Paid: ${inr(paid)}` : "",
      `Balance: ${inr(balance)}`,
      "",
      "I want this Billing + Website in ₹5,000. Share details.",
    ].filter(Boolean);
    return lines.join("\n");
  }, [
    invoiceNo,
    invoiceDate,
    customerName,
    customerPhone,
    subtotal,
    discount,
    gstEnabled,
    gstRate,
    gstAmount,
    total,
    paid,
    balance,
  ]);

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Print CSS */}
      <style>{`
        @media print {
          /* hide editor */
          .no-print { display: none !important; }
          body { background: white !important; }
          /* print area */
          .print-area { display: block !important; }
          .print-sheet {
            width: 210mm;
            min-height: 297mm;
            padding: 16mm;
            margin: 0;
          }
        }
      `}</style>

      {/* Top Bar */}
      <div className="no-print sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="font-extrabold tracking-tight">
              ← Back
            </Link>
            <span className="text-sm font-extrabold text-slate-700">
              Billing Demo (Invoice + Print)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a href={OWNER_CALL}>
              <Btn variant="outline">📞 Call</Btn>
            </a>
            <a href={OWNER_WA} target="_blank" rel="noopener noreferrer">
              <Btn variant="green">💬 WhatsApp</Btn>
            </a>
            <Btn variant="dark" onClick={printInvoice}>
              🖨️ Print
            </Btn>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-2 gap-8">
        {/* LEFT: Editor */}
        <section className="no-print">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl font-black">Invoice Builder</h1>
                <p className="mt-1 text-sm text-slate-600">
                  Create invoice → print A4 → share on WhatsApp.
                </p>
              </div>
              <Btn
                variant="outline"
                onClick={() => setInvoiceNo(genInvoiceNo())}
                className="shrink-0"
              >
                ♻️ New Invoice No
              </Btn>
            </div>

            {/* Seller */}
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <Field label="Gym Name">
                <input
                  value={gymName}
                  onChange={(e) => setGymName(e.target.value)}
                  className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                />
              </Field>
              <Field label="Tagline">
                <input
                  value={gymTagline}
                  onChange={(e) => setGymTagline(e.target.value)}
                  className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                />
              </Field>
              <Field label="Phone">
                <input
                  value={gymPhone}
                  onChange={(e) => setGymPhone(e.target.value)}
                  className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                />
              </Field>
              <Field label="Address">
                <input
                  value={gymAddress}
                  onChange={(e) => setGymAddress(e.target.value)}
                  className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                />
              </Field>

              <div className="md:col-span-2">
                <Field label="Logo (optional)">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => onLogoPick(e.target.files?.[0] || null)}
                    className="block w-full text-sm"
                  />
                </Field>
                {logoDataUrl ? (
                  <div className="mt-3 flex items-center gap-3">
                    <img
                      src={logoDataUrl}
                      alt="Logo preview"
                      className="h-12 w-12 rounded-xl border object-cover"
                    />
                    <Btn variant="ghost" onClick={() => setLogoDataUrl("")}>
                      Remove Logo
                    </Btn>
                  </div>
                ) : null}
              </div>
            </div>

            {/* Invoice meta */}
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <Field label="Invoice No">
                <input
                  value={invoiceNo}
                  onChange={(e) => setInvoiceNo(e.target.value)}
                  className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                />
              </Field>
              <Field label="Invoice Date">
                <input
                  type="date"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                  className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                />
              </Field>
            </div>

            {/* Customer */}
            <div className="mt-8">
              <div className="text-sm font-black text-slate-800">Customer Details</div>
              <div className="mt-3 grid md:grid-cols-2 gap-4">
                <Field label="Customer Name">
                  <input
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                  />
                </Field>
                <Field label="Customer Phone">
                  <input
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                  />
                </Field>
                <div className="md:col-span-2">
                  <Field label="Customer Address (optional)">
                    <input
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                    />
                  </Field>
                </div>
              </div>
            </div>

            {/* GST */}
            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-black text-slate-900">GST</div>
                  <div className="text-xs text-slate-600">
                    Toggle GST on/off for the invoice.
                  </div>
                </div>

                <button
                  onClick={() => setGstEnabled((v) => !v)}
                  className={[
                    "rounded-2xl px-4 py-2 text-sm font-black border transition",
                    gstEnabled
                      ? "bg-green-600 text-white border-green-700"
                      : "bg-white border-slate-300 text-slate-800",
                  ].join(" ")}
                >
                  {gstEnabled ? "GST ON" : "GST OFF"}
                </button>
              </div>

              {gstEnabled ? (
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  <Field label="GSTIN (optional)">
                    <input
                      value={gstin}
                      onChange={(e) => setGstin(e.target.value)}
                      className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-slate-500"
                      placeholder="22ABCDE1234F1Z5"
                    />
                  </Field>
                  <Field label="GST %">
                    <input
                      type="number"
                      value={gstRate}
                      onChange={(e) => setGstRate(Number(e.target.value))}
                      className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-slate-500"
                    />
                  </Field>
                </div>
              ) : null}
            </div>

            {/* Items */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <div className="text-sm font-black text-slate-800">Items</div>
                <Btn variant="outline" onClick={addItem}>
                  + Add Item
                </Btn>
              </div>

              <div className="mt-4 grid gap-3">
                {items.map((it, i) => (
                  <div
                    key={i}
                    className="rounded-3xl border border-slate-200 bg-white p-4"
                  >
                    <div className="grid md:grid-cols-6 gap-3 items-end">
                      <Field label="Description">
                        <input
                          value={it.desc}
                          onChange={(e) => updateItem(i, { desc: e.target.value })}
                          className="md:col-span-3 rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 w-full"
                        />
                      </Field>

                      <Field label="Qty">
                        <input
                          type="number"
                          value={it.qty}
                          onChange={(e) => updateItem(i, { qty: Number(e.target.value) })}
                          className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 w-full"
                        />
                      </Field>

                      <Field label="Rate (₹)">
                        <input
                          type="number"
                          value={it.rate}
                          onChange={(e) => updateItem(i, { rate: Number(e.target.value) })}
                          className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 w-full"
                        />
                      </Field>

                      <div className="md:col-span-1 flex items-center justify-between gap-3">
                        <div className="text-sm font-black text-slate-900">
                          {inr((Number(it.qty) || 0) * (Number(it.rate) || 0))}
                        </div>
                        <Btn variant="ghost" onClick={() => removeItem(i)}>
                          🗑️
                        </Btn>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Totals */}
            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Discount (₹)">
                  <input
                    type="number"
                    value={discount}
                    onChange={(e) => setDiscount(Number(e.target.value))}
                    className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-slate-500"
                  />
                </Field>
                <Field label="Paid (₹)">
                  <input
                    type="number"
                    value={paid}
                    onChange={(e) => setPaid(Number(e.target.value))}
                    className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-slate-500"
                  />
                </Field>
              </div>

              <div className="mt-5 grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600 font-semibold">Subtotal</span>
                  <span className="font-black">{inr(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 font-semibold">Discount</span>
                  <span className="font-black">{inr(discount)}</span>
                </div>
                {gstEnabled ? (
                  <div className="flex justify-between">
                    <span className="text-slate-600 font-semibold">
                      GST ({gstRate}%)
                    </span>
                    <span className="font-black">{inr(gstAmount)}</span>
                  </div>
                ) : null}
                <div className="flex justify-between text-lg">
                  <span className="text-slate-900 font-black">Total</span>
                  <span className="font-black">{inr(total)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 font-semibold">Paid</span>
                  <span className="font-black">{inr(paid)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-900 font-black">Balance</span>
                  <span className="font-black">{inr(balance)}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Btn variant="dark" onClick={printInvoice} className="flex-1">
                  🖨️ Print Invoice (A4)
                </Btn>
                <a href={waLink(shareText)} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Btn variant="green" className="w-full">
                    💬 Share on WhatsApp
                  </Btn>
                </a>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                Tip: After selling to gym owner, replace demo brand + phone with real gym details.
              </p>
            </div>

            {/* Signature / Stamp */}
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <Field label="Signature Name (print)">
                <input
                  value={signName}
                  onChange={(e) => setSignName(e.target.value)}
                  className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                />
              </Field>
              <Field label="Stamp Text (print)">
                <input
                  value={stampText}
                  onChange={(e) => setStampText(e.target.value)}
                  className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                />
              </Field>
            </div>
          </div>
        </section>

        {/* RIGHT: Preview (also used for print) */}
        <section>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4 no-print">
              <div>
                <div className="text-sm font-black text-slate-800">Invoice Preview</div>
                <div className="text-xs text-slate-500">This is what will print.</div>
              </div>
              <Btn variant="outline" onClick={printInvoice}>
                🖨️ Print
              </Btn>
            </div>

            {/* Print Sheet */}
            <div
              ref={printRef}
              className="print-area print-sheet mt-6 rounded-2xl border border-slate-200"
            >
              {/* Header */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    {logoDataUrl ? (
                      <img
                        src={logoDataUrl}
                        alt="Logo"
                        className="h-12 w-12 rounded-xl border object-cover"
                      />
                    ) : (
                      <div className="h-12 w-12 rounded-xl border bg-slate-50 flex items-center justify-center text-xs font-black text-slate-500">
                        LOGO
                      </div>
                    )}

                    <div>
                      <div className="text-xl font-black">{gymName}</div>
                      <div className="text-sm text-slate-600 font-semibold">{gymTagline}</div>
                      <div className="mt-1 text-sm text-slate-700">{gymAddress}</div>
                      <div className="text-sm text-slate-700">Phone: {gymPhone}</div>
                      {gstEnabled && gstin ? (
                        <div className="text-sm text-slate-700">GSTIN: {gstin}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl font-black">INVOICE</div>
                    <div className="mt-2 text-sm text-slate-700">
                      <div>
                        <span className="font-bold">No:</span> {invoiceNo}
                      </div>
                      <div>
                        <span className="font-bold">Date:</span> {invoiceDate}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <div className="rounded-2xl border bg-slate-50 p-4">
                    <div className="text-xs font-black text-slate-600">BILL TO</div>
                    <div className="mt-2 font-black text-slate-900">
                      {customerName || "Customer Name"}
                    </div>
                    <div className="text-sm text-slate-700">
                      {customerPhone ? `Phone: ${customerPhone}` : "Phone: —"}
                    </div>
                    <div className="text-sm text-slate-700">
                      {customerAddress || "Address: —"}
                    </div>
                  </div>

                  <div className="rounded-2xl border bg-white p-4">
                    <div className="text-xs font-black text-slate-600">PAYMENT</div>
                    <div className="mt-2 grid gap-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600 font-semibold">Total</span>
                        <span className="font-black">{inr(total)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 font-semibold">Paid</span>
                        <span className="font-black">{inr(paid)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-900 font-black">Balance</span>
                        <span className="font-black">{inr(balance)}</span>
                      </div>
                    </div>

                    <div className="mt-3 text-xs text-slate-500">
                      *This is a demo invoice format. Customize per client.
                    </div>
                  </div>
                </div>

                {/* Items table */}
                <div className="mt-6 overflow-hidden rounded-2xl border">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Description</th>
                        <th className="px-4 py-3 text-right">Qty</th>
                        <th className="px-4 py-3 text-right">Rate</th>
                        <th className="px-4 py-3 text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((it, i) => {
                        const amt = (Number(it.qty) || 0) * (Number(it.rate) || 0);
                        return (
                          <tr key={i} className="border-t">
                            <td className="px-4 py-3">
                              <div className="font-semibold text-slate-900">{it.desc || "-"}</div>
                            </td>
                            <td className="px-4 py-3 text-right">{Number(it.qty) || 0}</td>
                            <td className="px-4 py-3 text-right">{inr(Number(it.rate) || 0)}</td>
                            <td className="px-4 py-3 text-right font-black">{inr(amt)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Totals box */}
                <div className="mt-6 flex justify-end">
                  <div className="w-full md:w-[360px] rounded-2xl border bg-slate-50 p-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600 font-semibold">Subtotal</span>
                      <span className="font-black">{inr(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 font-semibold">Discount</span>
                      <span className="font-black">{inr(discount)}</span>
                    </div>
                    {gstEnabled ? (
                      <div className="flex justify-between">
                        <span className="text-slate-600 font-semibold">GST ({gstRate}%)</span>
                        <span className="font-black">{inr(gstAmount)}</span>
                      </div>
                    ) : null}
                    <div className="mt-2 pt-2 border-t flex justify-between text-base">
                      <span className="text-slate-900 font-black">Total</span>
                      <span className="font-black">{inr(total)}</span>
                    </div>
                  </div>
                </div>

                {/* Signature / Stamp */}
                <div className="mt-10 grid grid-cols-2 gap-6">
                  <div className="rounded-2xl border bg-white p-4">
                    <div className="text-xs font-black text-slate-600">STAMP</div>
                    <div className="mt-4 h-20 rounded-2xl border border-dashed flex items-center justify-center text-center">
                      <div>
                        <div className="text-sm font-black">{stampText}</div>
                        <div className="text-xs text-slate-500">(Stamp Here)</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border bg-white p-4 text-right">
                    <div className="text-xs font-black text-slate-600">SIGNATURE</div>
                    <div className="mt-4 h-20 rounded-2xl border border-dashed flex items-center justify-center">
                      <div>
                        <div className="text-sm font-black">{signName}</div>
                        <div className="text-xs text-slate-500">(Signature)</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-xs text-slate-500">
                  Thank you! This invoice is computer generated.
                </div>
              </div>
            </div>
          </div>

          {/* Upsell box */}
          <div className="no-print mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-black text-slate-900">
              Want this Billing + Website for your client?
            </div>
            <p className="mt-2 text-sm text-slate-600">
              ₹5,000 starter demo. Domain/Hosting excluded. WhatsApp for details.
            </p>
            <div className="mt-4 flex gap-3">
              <a href={OWNER_WA} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Btn variant="green" className="w-full">
                  💬 WhatsApp
                </Btn>
              </a>
              <a href={OWNER_CALL} className="flex-1">
                <Btn variant="outline" className="w-full">
                  📞 Call
                </Btn>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
