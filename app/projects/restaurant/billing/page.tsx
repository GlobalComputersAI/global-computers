"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const BASE = "/projects/restaurant";
const WHATSAPP =
  "https://wa.me/919752422686?text=Hi%20I%20want%20billing%20software%20for%20my%20restaurant.%20Please%20share%20pricing%20and%20details.";
const CALL = "tel:+919752422686";

type Item = {
  name: string;
  qty: number;
  rate: number;
};

function formatINR(n: number) {
  const v = Number.isFinite(n) ? n : 0;
  return `₹${Math.round(v).toLocaleString("en-IN")}`;
}

function todayISO() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function genInvoiceNo() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  const ss = String(d.getSeconds()).padStart(2, "0");
  return `INV-${y}${m}${day}-${hh}${mm}${ss}`;
}

function safe(n: unknown) {
  const v = Number(n);
  return Number.isFinite(v) ? v : 0;
}

function clampMoney(n: unknown) {
  const v = safe(n);
  return v < 0 ? 0 : v;
}

export default function BillingPage() {
  const [invoiceNo, setInvoiceNo] = useState(genInvoiceNo());
  const [date, setDate] = useState(todayISO());

  const [customer, setCustomer] = useState("");
  const [mobile, setMobile] = useState("");
  const [paymentMode, setPaymentMode] = useState("Cash");

  const [items, setItems] = useState<Item[]>([
    { name: "Paneer Butter Masala", qty: 1, rate: 239 },
    { name: "Butter Naan", qty: 4, rate: 39 },
    { name: "Cold Coffee", qty: 2, rate: 129 },
  ]);

  const [gstPct, setGstPct] = useState<number>(5);
  const [discount, setDiscount] = useState<number>(0);

  const subtotal = useMemo(
    () => items.reduce((sum, it) => sum + safe(it.qty) * safe(it.rate), 0),
    [items]
  );

  const discountAmt = useMemo(() => clampMoney(discount), [discount]);
  const taxable = useMemo(
    () => Math.max(0, subtotal - discountAmt),
    [subtotal, discountAmt]
  );
  const gstAmount = useMemo(
    () => (taxable * safe(gstPct)) / 100,
    [taxable, gstPct]
  );
  const total = useMemo(() => taxable + gstAmount, [taxable, gstAmount]);

  function updateItem(idx: number, patch: Partial<Item>) {
    setItems((prev) => prev.map((it, i) => (i === idx ? { ...it, ...patch } : it)));
  }

  function addItem() {
    setItems((prev) => [...prev, { name: "", qty: 1, rate: 0 }]);
  }

  function removeItem(idx: number) {
    setItems((prev) => prev.filter((_, i) => i !== idx));
  }

  function resetInvoice() {
    setInvoiceNo(genInvoiceNo());
    setDate(todayISO());
    setCustomer("");
    setMobile("");
    setPaymentMode("Cash");
    setItems([{ name: "", qty: 1, rate: 0 }]);
    setGstPct(5);
    setDiscount(0);
  }

  function printBill() {
    window.print();
  }

  return (
    <main className="bg-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 print:hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/projects/food/hero-3.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-slate-950/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-orange-500/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold text-white backdrop-blur">
                🧾 Billing Demo • Manual Entry • Fast Printing
              </div>

              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                Restaurant Billing Demo
              </h1>

              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-white/85">
                Simple restaurant billing with manual item entry, quantity, GST,
                discount, and print-ready invoice. Ideal for demo, trial use,
                and starter billing setup.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  onClick={printBill}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-extrabold text-slate-900 transition hover:bg-slate-100"
                >
                  🖨️ Print Bill
                </button>

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 px-6 py-3 text-white font-extrabold shadow-sm transition hover:from-green-700 hover:to-emerald-600"
                >
                  💬 Want Full Billing?
                </a>

                <a
                  href={CALL}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-6 py-3 font-extrabold text-white backdrop-blur transition hover:bg-white/15"
                >
                  📞 Call
                </a>

                <Link
                  href={`${BASE}/menu`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-6 py-3 font-extrabold text-white backdrop-blur transition hover:bg-white/15"
                >
                  View Menu
                </Link>
              </div>

              <div className="mt-6 text-sm text-white/70">
                For advanced billing with item catalog, quick billing, reports,
                inventory, and GST-ready workflows, contact us on WhatsApp.
              </div>
            </div>

            <div className="w-full rounded-3xl border border-white/15 bg-white/10 p-6 text-white backdrop-blur lg:max-w-md">
              <div className="text-sm font-extrabold text-white/90">Quick Actions</div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <Action onClick={addItem} label="➕ Add Item" />
                <Action onClick={resetInvoice} label="♻️ New Bill" />
                <Action onClick={printBill} label="🖨️ Print" />
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/10 p-4 text-left transition hover:bg-white/15"
                >
                  <div className="font-extrabold text-white">💬 WhatsApp</div>
                  <div className="mt-1 text-xs text-white/75">
                    Ask for complete billing software
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BILL UI */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-3 hidden text-xs text-slate-500 print:block">
          Printed from restaurant billing demo. Replace business name, address, GST, and branding for live client use.
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* LEFT */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-extrabold text-slate-900">
                    Restaurant Demo
                  </div>
                  <div className="text-xs text-slate-500">
                    Address • City • State • Phone • GSTIN
                  </div>
                </div>

                <div className="flex gap-2 print:hidden">
                  <button
                    onClick={addItem}
                    className="rounded-xl border bg-white px-4 py-2 font-extrabold transition hover:bg-slate-50"
                  >
                    ➕ Add Item
                  </button>
                  <button
                    onClick={printBill}
                    className="rounded-xl bg-red-600 px-4 py-2 font-extrabold text-white transition hover:bg-red-700"
                  >
                    🖨️ Print
                  </button>
                </div>
              </div>

              {/* Invoice meta */}
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <Field label="Invoice No">
                  <input
                    value={invoiceNo}
                    onChange={(e) => setInvoiceNo(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-extrabold text-slate-900 outline-none focus:border-red-400"
                  />
                </Field>

                <Field label="Date">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-extrabold text-slate-900 outline-none focus:border-red-400"
                  />
                </Field>

                <Field label="Payment">
                  <select
                    value={paymentMode}
                    onChange={(e) => setPaymentMode(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-extrabold text-slate-900 outline-none focus:border-red-400"
                  >
                    <option>Cash</option>
                    <option>UPI</option>
                    <option>Card</option>
                  </select>
                </Field>
              </div>

              {/* Customer */}
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="Customer Name (optional)">
                  <input
                    value={customer}
                    onChange={(e) => setCustomer(e.target.value)}
                    placeholder="Customer / Table name"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-extrabold text-slate-900 outline-none focus:border-red-400"
                  />
                </Field>

                <Field label="Mobile (optional)">
                  <input
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Mobile number"
                    inputMode="tel"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-extrabold text-slate-900 outline-none focus:border-red-400"
                  />
                </Field>
              </div>

              {/* Items */}
              <div className="mt-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-lg font-extrabold text-slate-900">Items</div>
                    <div className="text-sm text-slate-600">
                      Manual entry billing for demo and simple use.
                    </div>
                  </div>
                </div>

                <div className="mt-4 overflow-hidden rounded-2xl border">
                  <div className="grid grid-cols-12 gap-2 bg-slate-50 px-4 py-3 text-xs font-extrabold text-slate-600">
                    <div className="col-span-6">Item</div>
                    <div className="col-span-2 text-right">Qty</div>
                    <div className="col-span-2 text-right">Rate</div>
                    <div className="col-span-2 text-right">Amount</div>
                  </div>

                  {items.map((it, idx) => {
                    const amt = safe(it.qty) * safe(it.rate);

                    return (
                      <div
                        key={idx}
                        className="grid grid-cols-12 items-center gap-2 border-t bg-white px-4 py-3"
                      >
                        <div className="col-span-6">
                          <input
                            value={it.name}
                            onChange={(e) => updateItem(idx, { name: e.target.value })}
                            placeholder="Item name"
                            className="w-full rounded-xl border border-slate-200 px-3 py-2 font-bold outline-none focus:border-red-400"
                          />
                        </div>

                        <div className="col-span-2">
                          <input
                            value={it.qty}
                            onChange={(e) =>
                              updateItem(idx, { qty: safe(e.target.value) })
                            }
                            inputMode="decimal"
                            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-right font-bold outline-none focus:border-red-400"
                          />
                        </div>

                        <div className="col-span-2">
                          <input
                            value={it.rate}
                            onChange={(e) =>
                              updateItem(idx, { rate: safe(e.target.value) })
                            }
                            inputMode="decimal"
                            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-right font-bold outline-none focus:border-red-400"
                          />
                        </div>

                        <div className="col-span-2 flex items-center justify-end gap-2">
                          <div className="font-extrabold text-slate-900">
                            {formatINR(amt)}
                          </div>

                          <button
                            onClick={() => removeItem(idx)}
                            className="h-9 w-9 rounded-xl border bg-white font-extrabold text-slate-700 transition hover:bg-slate-50 print:hidden"
                            title="Remove"
                            aria-label="Remove item"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 flex flex-wrap gap-2 print:hidden">
                  <button
                    onClick={addItem}
                    className="rounded-xl border bg-white px-5 py-3 font-extrabold transition hover:bg-slate-50"
                  >
                    ➕ Add Item
                  </button>
                  <button
                    onClick={resetInvoice}
                    className="rounded-xl border bg-white px-5 py-3 font-extrabold transition hover:bg-slate-50"
                  >
                    ♻️ New Bill
                  </button>
                </div>
              </div>

              <div className="mt-8 hidden text-xs text-slate-500 print:block">
                Thank you. Visit again.
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-3xl border bg-white p-6 shadow-sm print:static md:p-8">
              <div className="text-xl font-extrabold text-slate-900">Summary</div>

              <div className="mt-6 space-y-4">
                <Row label="Subtotal" value={formatINR(subtotal)} />

                <div className="grid grid-cols-2 items-end gap-3">
                  <Field label="Discount (₹)">
                    <input
                      value={discount}
                      onChange={(e) => setDiscount(Number(e.target.value))}
                      inputMode="decimal"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-right font-extrabold text-slate-900 outline-none focus:border-red-400"
                    />
                  </Field>

                  <div className="rounded-2xl border bg-slate-50 p-4">
                    <div className="text-xs font-semibold text-slate-500">Discount</div>
                    <div className="mt-1 text-right font-extrabold text-slate-900">
                      − {formatINR(discountAmt)}
                    </div>
                  </div>
                </div>

                <Row label="Taxable" value={formatINR(taxable)} />

                <div className="grid grid-cols-2 items-end gap-3">
                  <Field label="GST %">
                    <input
                      value={gstPct}
                      onChange={(e) => setGstPct(Number(e.target.value))}
                      inputMode="decimal"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-right font-extrabold text-slate-900 outline-none focus:border-red-400"
                    />
                  </Field>

                  <div className="rounded-2xl border bg-slate-50 p-4">
                    <div className="text-xs font-semibold text-slate-500">GST Amount</div>
                    <div className="mt-1 text-right font-extrabold text-slate-900">
                      {formatINR(gstAmount)}
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border bg-gradient-to-br from-slate-900 to-slate-950 p-6 text-white">
                  <div className="text-xs font-semibold text-white/70">Grand Total</div>
                  <div className="mt-1 text-3xl font-extrabold">{formatINR(total)}</div>
                  <div className="mt-3 text-xs text-white/70">
                    Inclusive taxes as per current settings.
                  </div>
                </div>

                <div className="space-y-2 print:hidden">
                  <button
                    onClick={printBill}
                    className="w-full rounded-xl bg-red-600 px-6 py-3 font-extrabold text-white transition hover:bg-red-700"
                  >
                    🖨️ Print Bill
                  </button>

                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-green-600 px-6 py-3 font-extrabold text-white transition hover:bg-green-700"
                  >
                    💬 Get Full Billing System
                  </a>

                  <a
                    href={CALL}
                    className="inline-flex w-full items-center justify-center rounded-xl border bg-white px-6 py-3 font-extrabold transition hover:bg-slate-50"
                  >
                    📞 Call
                  </a>
                </div>

                <div className="rounded-2xl border bg-slate-50 p-4 text-sm text-slate-700">
                  <div className="font-extrabold">Upgrade path</div>
                  <div className="mt-1">
                    This starter billing demo can be expanded into a faster system with
                    product catalog, quick billing, reports, inventory, and GST workflows.
                  </div>
                </div>

                <div className="print:hidden">
                  <Link
                    href={`${BASE}`}
                    className="inline-flex items-center gap-2 text-sm font-extrabold text-slate-700 transition hover:text-slate-900"
                  >
                    ← Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @media print {
          body {
            background: white !important;
          }
          a {
            text-decoration: none !important;
          }
        }
      `}</style>
    </main>
  );
}

function Action({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="rounded-2xl border border-white/10 bg-white/10 p-4 text-left transition hover:bg-white/15"
    >
      <div className="font-extrabold text-white">{label}</div>
      <div className="mt-1 text-xs text-white/75">Tap</div>
    </button>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="text-sm font-extrabold text-slate-900">{label}</div>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="font-bold text-slate-600">{label}</div>
      <div className="font-extrabold text-slate-900">{value}</div>
    </div>
  );
}