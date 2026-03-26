"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const BRAND = "Hotel Royal Stay";
const CITY = "Raipur";
const BASE_PATH = "/projects/hotel";

const CALL = "tel:+919752422686";
const WHATSAPP_BASE = "https://wa.me/919752422686?text=";

function wa(msg: string) {
  return `${WHATSAPP_BASE}${encodeURIComponent(msg)}`;
}

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

function genInvoiceNo(prefix = "INV") {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  const ss = String(d.getSeconds()).padStart(2, "0");
  return `${prefix}-${y}${m}${day}-${hh}${mm}${ss}`;
}

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-3xl border border-white/12 bg-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold text-white/90 backdrop-blur-xl">
      {children}
    </span>
  );
}

type Item = {
  desc: string;
  qty: number;
  rate: number;
};

export default function BillingPage() {
  const [gstOn, setGstOn] = useState(true);

  const [hotelName, setHotelName] = useState(BRAND);
  const [hotelAddr, setHotelAddr] = useState(
    "Main Road, Near Railway Station, Raipur, Chhattisgarh"
  );
  const [gstin, setGstin] = useState("22AAAAA0000A1Z5");
  const [invoiceNo, setInvoiceNo] = useState(genInvoiceNo("GST"));
  const [date, setDate] = useState(todayISO());

  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [guestCity, setGuestCity] = useState("");

  const [roomType, setRoomType] = useState("Deluxe Room");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [nights, setNights] = useState(1);

  const [items, setItems] = useState<Item[]>([
    { desc: "Room Tariff (per night)", qty: 1, rate: 1499 },
    { desc: "Food / Restaurant", qty: 1, rate: 0 },
    { desc: "Extra Bed", qty: 1, rate: 0 },
  ]);

  const [discount, setDiscount] = useState(0);
  const [serviceCharge, setServiceCharge] = useState(0);

  const [cgst, setCgst] = useState(6);
  const [sgst, setSgst] = useState(6);

  useEffect(() => {
    setItems((prev) =>
      prev.map((item, idx) =>
        idx === 0 && item.desc.toLowerCase().includes("room tariff")
          ? { ...item, qty: Math.max(1, nights || 1) }
          : item
      )
    );
  }, [nights]);

  const subtotal = useMemo(() => {
    return Math.max(
      0,
      items.reduce(
        (acc, it) => acc + (Number(it.qty) || 0) * (Number(it.rate) || 0),
        0
      )
    );
  }, [items]);

  const baseAfterDiscount = useMemo(() => {
    const v = subtotal - (Number(discount) || 0) + (Number(serviceCharge) || 0);
    return Math.max(0, v);
  }, [subtotal, discount, serviceCharge]);

  const gstAmount = useMemo(() => {
    if (!gstOn) return 0;
    const pct = (Number(cgst) || 0) + (Number(sgst) || 0);
    return (baseAfterDiscount * pct) / 100;
  }, [gstOn, cgst, sgst, baseAfterDiscount]);

  const total = useMemo(() => baseAfterDiscount + gstAmount, [baseAfterDiscount, gstAmount]);

  const bookingWA = useMemo(() => {
    const mode = gstOn ? "GST Invoice" : "Non-GST Invoice";
    const msg = `Hi, I saw your Hotel Billing Demo (${mode}).

Hotel: ${hotelName} (${CITY})
Invoice: ${invoiceNo}
Date: ${date}

Guest: ${guestName || "____"}
Phone: ${guestPhone || "____"}

Room: ${roomType}
Check-in: ${checkIn || "____"}
Check-out: ${checkOut || "____"}
Nights: ${nights}

Subtotal: ${formatINR(subtotal)}
Discount: ${formatINR(discount)}
Service Charge: ${formatINR(serviceCharge)}
${gstOn ? `GST: ${formatINR(gstAmount)} (CGST ${cgst}% + SGST ${sgst}%)` : "GST: Not Applied"}
Total: ${formatINR(total)}

I want the same hotel billing + website setup. Please share package details.`;
    return wa(msg);
  }, [
    gstOn,
    hotelName,
    invoiceNo,
    date,
    guestName,
    guestPhone,
    roomType,
    checkIn,
    checkOut,
    nights,
    subtotal,
    discount,
    serviceCharge,
    gstAmount,
    cgst,
    sgst,
    total,
  ]);

  function updateItem(idx: number, patch: Partial<Item>) {
    setItems((prev) => prev.map((it, i) => (i === idx ? { ...it, ...patch } : it)));
  }

  function addItem() {
    setItems((prev) => [...prev, { desc: "New Charge", qty: 1, rate: 0 }]);
  }

  function removeItem(idx: number) {
    setItems((prev) => prev.filter((_, i) => i !== idx));
  }

  function resetInvoice() {
    setInvoiceNo(genInvoiceNo(gstOn ? "GST" : "INV"));
    setDate(todayISO());
  }

  const callLabel = `Call ${BRAND}`;
  const waLabel = `WhatsApp ${BRAND} for hotel billing and website setup`;

  return (
    <main className="bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/projects/hotel/g-3.jpg"
            alt={`${BRAND} hotel billing software and invoice demo`}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-amber-200/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="flex flex-wrap gap-2">
            <Badge>🧾 Billing Demo</Badge>
            <Badge>GST / Non-GST</Badge>
            <Badge>Hotel Invoice Preview</Badge>
          </div>

          <div className="mt-6 grid items-start gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/80">
                Hotel Billing System
              </div>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
                Hotel Billing Demo
                <span className="block text-white/85">
                  GST and Non-GST invoices in one system.
                </span>
              </h1>

              <p className="mt-4 max-w-2xl font-bold leading-7 text-white/70">
                Many hotel owners need a simple billing flow for room tariff, extra charges,
                discount, service charge, and GST. This demo shows how billing can be added
                alongside your hotel website.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={CALL}
                  aria-label={callLabel}
                  className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-extrabold backdrop-blur-xl transition hover:bg-white/15"
                >
                  Call Now
                </a>

                <a
                  href={bookingWA}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={waLabel}
                  className="rounded-2xl bg-green-500 px-6 py-3 font-extrabold text-white shadow-[0_10px_25px_rgba(34,197,94,0.25)] transition hover:bg-green-600"
                >
                  WhatsApp for Billing + Website
                </a>

                <Link
                  href={BASE_PATH}
                  className="rounded-2xl bg-white px-6 py-3 font-extrabold text-black transition hover:bg-white/90"
                >
                  Home
                </Link>
              </div>

              <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
                <GlassCard>
                  <div className="p-4">
                    <div className="text-2xl font-extrabold">GST</div>
                    <div className="text-xs font-bold text-white/70">CGST + SGST</div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <div className="p-4">
                    <div className="text-2xl font-extrabold">Simple</div>
                    <div className="text-xs font-bold text-white/70">Room + Extras</div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <div className="p-4">
                    <div className="text-2xl font-extrabold">Fast</div>
                    <div className="text-xs font-bold text-white/70">Instant totals</div>
                  </div>
                </GlassCard>
              </div>
            </div>

            <GlassCard>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-extrabold">Invoice Mode</div>
                    <div className="text-sm font-bold text-white/70">
                      Switch instantly between GST and Non-GST billing.
                    </div>
                  </div>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold text-white/90">
                    Demo
                  </span>
                </div>

                <div className="mt-5 flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setGstOn(true);
                      setInvoiceNo(genInvoiceNo("GST"));
                    }}
                    className={[
                      "flex-1 rounded-2xl border px-4 py-3 font-extrabold transition",
                      gstOn
                        ? "border-white bg-white text-black"
                        : "border-white/15 bg-white/10 text-white hover:bg-white/15",
                    ].join(" ")}
                  >
                    GST Invoice
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setGstOn(false);
                      setInvoiceNo(genInvoiceNo("INV"));
                    }}
                    className={[
                      "flex-1 rounded-2xl border px-4 py-3 font-extrabold transition",
                      !gstOn
                        ? "border-white bg-white text-black"
                        : "border-white/15 bg-white/10 text-white hover:bg-white/15",
                    ].join(" ")}
                  >
                    Non-GST
                  </button>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="font-extrabold">What hotel owners get</div>
                  <ul className="mt-2 space-y-1 text-sm font-bold text-white/80">
                    <li>✅ Room tariff plus extras</li>
                    <li>✅ Discount and service charge</li>
                    <li>✅ GST on or off mode</li>
                    <li>✅ Invoice-ready preview</li>
                  </ul>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="font-extrabold">Why this sells well</div>
                  <div className="mt-2 text-sm font-bold leading-6 text-white/70">
                    Hotels like seeing both website and billing together. It increases trust
                    because the offer feels more complete and more practical.
                  </div>
                </div>

                <div className="mt-4 text-xs font-bold text-white/60">
                  This is a demo UI. Final hotel billing rules and GST setup can be customized.
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent" />
      </section>

      <section className="bg-black">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <GlassCard>
            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xl font-extrabold">Billing Inputs</div>
                  <div className="text-sm font-bold text-white/70">
                    Edit hotel, guest, stay, and charge details. Invoice preview updates instantly.
                  </div>
                </div>

                <button
                  type="button"
                  onClick={resetInvoice}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-extrabold transition hover:bg-white/15"
                >
                  New Invoice
                </button>
              </div>

              <div className="mt-6">
                <div className="text-sm font-extrabold text-white/85">Hotel</div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <div className="mb-1 text-[11px] font-extrabold text-white/80">
                      Hotel Name
                    </div>
                    <input
                      value={hotelName}
                      onChange={(e) => setHotelName(e.target.value)}
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold text-white outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </label>

                  <label className="block">
                    <div className="mb-1 text-[11px] font-extrabold text-white/80">
                      Invoice No
                    </div>
                    <input
                      value={invoiceNo}
                      onChange={(e) => setInvoiceNo(e.target.value)}
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold text-white outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </label>

                  <label className="block sm:col-span-2">
                    <div className="mb-1 text-[11px] font-extrabold text-white/80">
                      Address
                    </div>
                    <input
                      value={hotelAddr}
                      onChange={(e) => setHotelAddr(e.target.value)}
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold text-white outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </label>

                  <label className="block">
                    <div className="mb-1 text-[11px] font-extrabold text-white/80">
                      Date
                    </div>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold text-white outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </label>

                  <label className="block">
                    <div className="mb-1 text-[11px] font-extrabold text-white/80">
                      GSTIN
                    </div>
                    <input
                      value={gstin}
                      onChange={(e) => setGstin(e.target.value)}
                      disabled={!gstOn}
                      className={[
                        "w-full rounded-2xl border px-4 py-3 font-bold outline-none focus:ring-2 focus:ring-white/20",
                        gstOn
                          ? "border-white/15 bg-white/10 text-white"
                          : "cursor-not-allowed border-white/10 bg-white/5 text-white/40",
                      ].join(" ")}
                    />
                  </label>
                </div>
              </div>

              <div className="mt-8">
                <div className="text-sm font-extrabold text-white/85">Guest</div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <div className="mb-1 text-[11px] font-extrabold text-white/80">
                      Guest Name
                    </div>
                    <input
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="Guest name"
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </label>

                  <label className="block">
                    <div className="mb-1 text-[11px] font-extrabold text-white/80">
                      Phone
                    </div>
                    <input
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      placeholder="10-digit number"
                      inputMode="numeric"
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </label>

                  <label className="block sm:col-span-2">
                    <div className="mb-1 text-[11px] font-extrabold text-white/80">
                      Guest City
                    </div>
                    <input
                      value={guestCity}
                      onChange={(e) => setGuestCity(e.target.value)}
                      placeholder="City"
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </label>
                </div>
              </div>

              <div className="mt-8">
                <div className="text-sm font-extrabold text-white/85">Stay Details</div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <label className="block sm:col-span-2">
                    <div className="mb-1 text-[11px] font-extrabold text-white/80">
                      Room Type
                    </div>
                    <select
                      value={roomType}
                      onChange={(e) => setRoomType(e.target.value)}
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold text-white outline-none focus:ring-2 focus:ring-white/20"
                    >
                      <option className="text-black" value="Deluxe Room">
                        Deluxe Room
                      </option>
                      <option className="text-black" value="Super Deluxe Room">
                        Super Deluxe Room
                      </option>
                      <option className="text-black" value="Family Suite">
                        Family Suite
                      </option>
                    </select>
                  </label>

                  <label className="block">
                    <div className="mb-1 text-[11px] font-extrabold text-white/80">
                      Check-in
                    </div>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold text-white outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </label>

                  <label className="block">
                    <div className="mb-1 text-[11px] font-extrabold text-white/80">
                      Check-out
                    </div>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold text-white outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </label>

                  <label className="block sm:col-span-2">
                    <div className="mb-1 text-[11px] font-extrabold text-white/80">
                      Nights
                    </div>
                    <input
                      type="number"
                      min={1}
                      value={nights}
                      onChange={(e) => setNights(Math.max(1, Number(e.target.value) || 1))}
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold text-white outline-none focus:ring-2 focus:ring-white/20"
                    />
                    <div className="mt-1 text-xs font-bold text-white/60">
                      Room tariff quantity auto-syncs with nights for faster billing.
                    </div>
                  </label>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-extrabold text-white/85">Charges</div>
                  <button
                    type="button"
                    onClick={addItem}
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-extrabold transition hover:bg-white/15"
                  >
                    + Add Item
                  </button>
                </div>

                <div className="mt-3 grid gap-3">
                  {items.map((it, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="grid items-end gap-3 sm:grid-cols-12">
                        <label className="block sm:col-span-6">
                          <div className="mb-1 text-[11px] font-extrabold text-white/80">
                            Description
                          </div>
                          <input
                            value={it.desc}
                            onChange={(e) => updateItem(idx, { desc: e.target.value })}
                            className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold text-white outline-none focus:ring-2 focus:ring-white/20"
                          />
                        </label>

                        <label className="block sm:col-span-2">
                          <div className="mb-1 text-[11px] font-extrabold text-white/80">
                            Qty
                          </div>
                          <input
                            type="number"
                            min={0}
                            value={it.qty}
                            onChange={(e) =>
                              updateItem(idx, { qty: Math.max(0, Number(e.target.value) || 0) })
                            }
                            className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold text-white outline-none focus:ring-2 focus:ring-white/20"
                          />
                        </label>

                        <label className="block sm:col-span-3">
                          <div className="mb-1 text-[11px] font-extrabold text-white/80">
                            Rate
                          </div>
                          <input
                            type="number"
                            min={0}
                            value={it.rate}
                            onChange={(e) =>
                              updateItem(idx, { rate: Math.max(0, Number(e.target.value) || 0) })
                            }
                            className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold text-white outline-none focus:ring-2 focus:ring-white/20"
                          />
                        </label>

                        <div className="flex justify-end sm:col-span-1">
                          <button
                            type="button"
                            onClick={() => removeItem(idx)}
                            className="rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-xs font-extrabold transition hover:bg-white/15"
                            title="Remove item"
                          >
                            ✕
                          </button>
                        </div>
                      </div>

                      <div className="mt-3 text-sm font-bold text-white/80">
                        Line Total:{" "}
                        <span className="text-white">
                          {formatINR((Number(it.qty) || 0) * (Number(it.rate) || 0))}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <div className="mb-1 text-[11px] font-extrabold text-white/80">
                      Discount
                    </div>
                    <input
                      type="number"
                      min={0}
                      value={discount}
                      onChange={(e) => setDiscount(Math.max(0, Number(e.target.value) || 0))}
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold text-white outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </label>

                  <label className="block">
                    <div className="mb-1 text-[11px] font-extrabold text-white/80">
                      Service Charge
                    </div>
                    <input
                      type="number"
                      min={0}
                      value={serviceCharge}
                      onChange={(e) =>
                        setServiceCharge(Math.max(0, Number(e.target.value) || 0))
                      }
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-bold text-white outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </label>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="font-extrabold">GST Settings</div>
                      <div className="text-xs font-bold text-white/60">
                        Applied only when GST mode is enabled.
                      </div>
                    </div>
                    <div className="text-xs font-extrabold text-white/80">
                      {gstOn ? "Enabled" : "Disabled"}
                    </div>
                  </div>

                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <label className="block">
                      <div className="mb-1 text-[11px] font-extrabold text-white/80">
                        CGST %
                      </div>
                      <input
                        type="number"
                        min={0}
                        value={cgst}
                        onChange={(e) => setCgst(Math.max(0, Number(e.target.value) || 0))}
                        disabled={!gstOn}
                        className={[
                          "w-full rounded-2xl border px-4 py-3 font-bold outline-none focus:ring-2 focus:ring-white/20",
                          gstOn
                            ? "border-white/15 bg-white/10 text-white"
                            : "cursor-not-allowed border-white/10 bg-white/5 text-white/40",
                        ].join(" ")}
                      />
                    </label>

                    <label className="block">
                      <div className="mb-1 text-[11px] font-extrabold text-white/80">
                        SGST %
                      </div>
                      <input
                        type="number"
                        min={0}
                        value={sgst}
                        onChange={(e) => setSgst(Math.max(0, Number(e.target.value) || 0))}
                        disabled={!gstOn}
                        className={[
                          "w-full rounded-2xl border px-4 py-3 font-bold outline-none focus:ring-2 focus:ring-white/20",
                          gstOn
                            ? "border-white/15 bg-white/10 text-white"
                            : "cursor-not-allowed border-white/10 bg-white/5 text-white/40",
                        ].join(" ")}
                      />
                    </label>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={bookingWA}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={waLabel}
                    className="flex-1 rounded-2xl bg-green-500 px-6 py-3 text-center font-extrabold text-white transition hover:bg-green-600"
                  >
                    WhatsApp this Demo
                  </a>

                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="flex-1 rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-center font-extrabold transition hover:bg-white/15"
                  >
                    Print
                  </button>
                </div>

                <div className="mt-4 text-xs font-bold text-white/60">
                  This preview is ideal for demonstrating how hotel billing can be bundled with your website package.
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xl font-extrabold">Invoice Preview</div>
                  <div className="text-sm font-bold text-white/70">
                    Live invoice layout for hotel billing demo.
                  </div>
                </div>

                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold text-white/90">
                  {gstOn ? "GST" : "Non-GST"}
                </span>
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-extrabold">{hotelName}</div>
                    <div className="text-sm font-bold text-white/75">{hotelAddr}</div>
                    <div className="mt-1 text-sm font-bold text-white/75">City: {CITY}</div>
                    {gstOn ? (
                      <div className="mt-1 text-sm font-extrabold text-white/85">
                        GSTIN: {gstin || "____"}
                      </div>
                    ) : (
                      <div className="mt-1 text-sm font-bold text-white/60">Non-GST Invoice</div>
                    )}
                  </div>

                  <div className="text-right">
                    <div className="text-sm font-bold text-white/70">Invoice No</div>
                    <div className="text-base font-extrabold">{invoiceNo}</div>
                    <div className="mt-2 text-sm font-bold text-white/70">Date</div>
                    <div className="text-base font-extrabold">{date}</div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-extrabold">Bill To</div>
                  <div className="mt-2 text-sm font-bold text-white/80">
                    Name: <span className="text-white">{guestName || "____"}</span>
                    <br />
                    Phone: <span className="text-white">{guestPhone || "____"}</span>
                    <br />
                    City: <span className="text-white">{guestCity || "____"}</span>
                  </div>
                </div>

                <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
                  <div className="grid grid-cols-12 bg-white/10 px-4 py-3 text-xs font-extrabold text-white/85">
                    <div className="col-span-6">Description</div>
                    <div className="col-span-2 text-right">Qty</div>
                    <div className="col-span-2 text-right">Rate</div>
                    <div className="col-span-2 text-right">Amount</div>
                  </div>

                  <div className="divide-y divide-white/10">
                    {items.map((it, idx) => (
                      <div
                        key={idx}
                        className="grid grid-cols-12 px-4 py-3 text-sm font-bold text-white/85"
                      >
                        <div className="col-span-6">{it.desc}</div>
                        <div className="col-span-2 text-right">{it.qty}</div>
                        <div className="col-span-2 text-right">{formatINR(it.rate)}</div>
                        <div className="col-span-2 text-right">
                          {formatINR((Number(it.qty) || 0) * (Number(it.rate) || 0))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid gap-2">
                  <div className="flex items-center justify-between text-sm font-bold text-white/80">
                    <span>Subtotal</span>
                    <span className="text-white">{formatINR(subtotal)}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm font-bold text-white/80">
                    <span>Discount</span>
                    <span className="text-white">- {formatINR(discount)}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm font-bold text-white/80">
                    <span>Service Charge</span>
                    <span className="text-white">+ {formatINR(serviceCharge)}</span>
                  </div>

                  <div className="my-1 h-px bg-white/10" />

                  {gstOn ? (
                    <div className="flex items-center justify-between text-sm font-bold text-white/80">
                      <span>
                        GST (CGST {cgst}% + SGST {sgst}%)
                      </span>
                      <span className="text-white">+ {formatINR(gstAmount)}</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between text-sm font-bold text-white/60">
                      <span>GST</span>
                      <span>Not applied</span>
                    </div>
                  )}

                  <div className="my-1 h-px bg-white/10" />

                  <div className="flex items-center justify-between text-base font-extrabold">
                    <span>Total Payable</span>
                    <span>{formatINR(total)}</span>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-extrabold">Stay Details</div>
                  <div className="mt-2 text-sm font-bold text-white/80">
                    Room: <span className="text-white">{roomType}</span>
                    <br />
                    Check-in: <span className="text-white">{checkIn || "____"}</span>
                    <br />
                    Check-out: <span className="text-white">{checkOut || "____"}</span>
                    <br />
                    Nights: <span className="text-white">{nights}</span>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-extrabold">Why this module adds value</div>
                  <div className="mt-2 text-sm font-bold leading-6 text-white/70">
                    When hotel owners see room billing, extras, GST control, and invoice preview in one place,
                    the product feels much more real and useful than a simple brochure website.
                  </div>
                </div>

                <div className="mt-6 text-xs font-bold text-white/60">
                  Terms: ID proof may be required at check-in. Advance payment rules can be configured.
                  This is a demo billing template and final logic can be customized for the hotel.
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={bookingWA}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={waLabel}
                  className="rounded-2xl bg-green-500 px-6 py-3 text-center font-extrabold text-white transition hover:bg-green-600"
                >
                  WhatsApp this invoice
                </a>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-center font-extrabold transition hover:bg-white/15"
                >
                  Print
                </button>
              </div>

              <div className="mt-4 text-xs font-bold text-white/60">
                Want the same billing plus hotel website package? Use WhatsApp above.
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassCard>
              <div className="p-6 md:p-8">
                <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/75">
                  For Hotel Owners
                </div>
                <h2 className="mt-3 text-3xl font-extrabold">
                  Sell the website and billing together
                </h2>
                <p className="mt-4 font-bold leading-7 text-white/72">
                  This page helps position your offer as a complete hotel solution:
                  website, room enquiry flow, amenities presentation, and billing support.
                </p>

                <ul className="mt-5 space-y-2 text-sm font-bold text-white/80">
                  <li>✅ Website for direct enquiries</li>
                  <li>✅ Billing demo for business trust</li>
                  <li>✅ More practical value for hotel owners</li>
                  <li>✅ Stronger closing conversation on WhatsApp</li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={bookingWA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl bg-green-500 px-6 py-3 font-extrabold text-white transition hover:bg-green-600"
                  >
                    Get This Full Setup
                  </a>

                  <Link
                    href={`${BASE_PATH}/contact`}
                    className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 font-extrabold backdrop-blur-xl transition hover:bg-white/15"
                  >
                    Contact →
                  </Link>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-6 md:p-8">
                <div className="text-lg font-extrabold">Quick Links</div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <Link
                    href={BASE_PATH}
                    className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-center font-extrabold backdrop-blur-xl transition hover:bg-white/15"
                  >
                    Home
                  </Link>
                  <Link
                    href={`${BASE_PATH}/rooms`}
                    className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-center font-extrabold backdrop-blur-xl transition hover:bg-white/15"
                  >
                    Rooms
                  </Link>
                  <Link
                    href={`${BASE_PATH}/amenities`}
                    className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-center font-extrabold backdrop-blur-xl transition hover:bg-white/15"
                  >
                    Amenities
                  </Link>
                  <Link
                    href={`${BASE_PATH}/contact`}
                    className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-center font-extrabold backdrop-blur-xl transition hover:bg-white/15"
                  >
                    Contact
                  </Link>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="font-extrabold">Best closing line for owners</div>
                  <div className="mt-2 text-sm font-bold leading-6 text-white/70">
                    “We are not only giving you a hotel website. We are giving you a complete digital front
                    plus billing-ready business setup.”
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <div className="fixed bottom-4 left-1/2 z-40 w-[min(92vw,560px)] -translate-x-1/2">
        <div className="flex gap-3 rounded-2xl border border-white/12 bg-white/10 px-3 py-3 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.45)]">
          <a
            href={CALL}
            aria-label={callLabel}
            className="flex-1 rounded-xl border border-white/15 bg-white/10 py-3 text-center font-extrabold transition hover:bg-white/15"
          >
            Call Now
          </a>

          <a
            href={bookingWA}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={waLabel}
            className="flex-1 rounded-xl bg-green-500 py-3 text-center font-extrabold text-white transition hover:bg-green-600"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="h-28" />
    </main>
  );
}