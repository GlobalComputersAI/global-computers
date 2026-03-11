"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Item = {
  desc: string;
  qty: number;
  rate: number;
};

function formatINR(n: number) {
  const v = isFinite(n) ? n : 0;
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
  const rnd = Math.floor(1000 + Math.random() * 9000);
  return `INV-${y}${m}${day}-${rnd}`;
}

function CarLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black">
        CR
      </div>
      <div className="leading-tight">
        <div className="font-black text-slate-900">Car Rental / Taxi Service</div>
        <div className="text-xs text-slate-500">Billing Panel (Owner)</div>
      </div>
    </div>
  );
}

export default function BillingPage() {
  const phone = "+919752422686";
  const whatsappNumber = "919752422686";

  // ✅ Sample bill image (place it in /public/projects/car-Rental/images/car_bill.png)
  const sampleBillImg = "/projects/car-Rental/images/car_bill.png";

  const [company, setCompany] = useState({
    name: "Car Rental / Taxi Service",
    address: "Your Address, City, State, India",
    phone: "+91 97524 22686",
    email: "info@example.com",
    gstin: "",
  });

  const [invoice, setInvoice] = useState({
    invoiceNo: genInvoiceNo(),
    invoiceDate: todayISO(),
    dueDate: todayISO(),
    isGST: true,
    gstRate: 5,
    placeOfSupply: "CG",
    paymentMode: "Cash / UPI",
    notes:
      "Thank you for choosing our service. Toll/Parking/State tax may be extra as applicable.",
    terms:
      "1) Final amount confirmed before trip.\n2) Toll/Parking as per actual.\n3) For queries contact us.",
  });

  const [customer, setCustomer] = useState({
    name: "",
    mobile: "",
    address: "",
    gstin: "",
  });

  const [trip, setTrip] = useState({
    car: "Dzire / Sedan",
    pickup: "",
    drop: "",
    date: "",
    startTime: "",
    endTime: "",
    totalKm: "",
    driverName: "",
  });

  const [items, setItems] = useState<Item[]>([
    { desc: "Taxi Service Charges", qty: 1, rate: 1200 },
  ]);

  const [discount, setDiscount] = useState(0);
  const [roundOff, setRoundOff] = useState(true);

  // Persist draft in localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("carRentalBillingDraft");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.company) setCompany(parsed.company);
        if (parsed?.invoice) setInvoice(parsed.invoice);
        if (parsed?.customer) setCustomer(parsed.customer);
        if (parsed?.trip) setTrip(parsed.trip);
        if (parsed?.items) setItems(parsed.items);
        if (typeof parsed?.discount === "number") setDiscount(parsed.discount);
        if (typeof parsed?.roundOff === "boolean") setRoundOff(parsed.roundOff);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        "carRentalBillingDraft",
        JSON.stringify({
          company,
          invoice,
          customer,
          trip,
          items,
          discount,
          roundOff,
        })
      );
    } catch {
      // ignore
    }
  }, [company, invoice, customer, trip, items, discount, roundOff]);

  const subtotal = useMemo(() => {
    return items.reduce(
      (sum, it) => sum + (Number(it.qty) || 0) * (Number(it.rate) || 0),
      0
    );
  }, [items]);

  const taxable = useMemo(() => {
    const d = Number(discount) || 0;
    return Math.max(0, subtotal - d);
  }, [subtotal, discount]);

  const gstAmount = useMemo(() => {
    if (!invoice.isGST) return 0;
    const rate = Number(invoice.gstRate) || 0;
    return (taxable * rate) / 100;
  }, [invoice.isGST, invoice.gstRate, taxable]);

  const totalBeforeRound = useMemo(() => taxable + gstAmount, [taxable, gstAmount]);

  const grandTotal = useMemo(() => {
    if (!roundOff) return totalBeforeRound;
    return Math.round(totalBeforeRound);
  }, [totalBeforeRound, roundOff]);

  const roundDiff = useMemo(() => {
    if (!roundOff) return 0;
    return Math.round(totalBeforeRound) - totalBeforeRound;
  }, [totalBeforeRound, roundOff]);

  const cgst = useMemo(
    () => (invoice.isGST ? gstAmount / 2 : 0),
    [gstAmount, invoice.isGST]
  );
  const sgst = useMemo(
    () => (invoice.isGST ? gstAmount / 2 : 0),
    [gstAmount, invoice.isGST]
  );

  const canPrint = useMemo(() => {
    return (
      company.name.trim().length > 1 &&
      customer.name.trim().length > 1 &&
      items.length > 0
    );
  }, [company.name, customer.name, items.length]);

  const addItem = () => {
    setItems((p) => [...p, { desc: "Additional Charges", qty: 1, rate: 0 }]);
  };

  const removeItem = (idx: number) => {
    setItems((p) => p.filter((_, i) => i !== idx));
  };

  const updateItem = (idx: number, key: keyof Item, value: any) => {
    setItems((p) =>
      p.map((it, i) =>
        i === idx
          ? { ...it, [key]: key === "desc" ? value : Number(value || 0) }
          : it
      )
    );
  };

  const resetNewInvoice = () => {
    setInvoice((p) => ({
      ...p,
      invoiceNo: genInvoiceNo(),
      invoiceDate: todayISO(),
      dueDate: todayISO(),
    }));
    setCustomer({ name: "", mobile: "", address: "", gstin: "" });
    setTrip({
      car: "Dzire / Sedan",
      pickup: "",
      drop: "",
      date: "",
      startTime: "",
      endTime: "",
      totalKm: "",
      driverName: "",
    });
    setItems([{ desc: "Taxi Service Charges", qty: 1, rate: 1200 }]);
    setDiscount(0);
  };

  const printInvoice = () => {
    if (!canPrint) return;
    window.print();
  };

  const waText = useMemo(() => {
    const lines = [
      "🧾 *Invoice / Bill*",
      "",
      `Invoice No: ${invoice.invoiceNo}`,
      `Date: ${invoice.invoiceDate}`,
      "",
      `Customer: ${customer.name || "-"}`,
      customer.mobile ? `Mobile: ${customer.mobile}` : "",
      "",
      trip.pickup ? `Pickup: ${trip.pickup}` : "",
      trip.drop ? `Drop: ${trip.drop}` : "",
      trip.date ? `Trip Date: ${trip.date}` : "",
      trip.totalKm ? `Total KM: ${trip.totalKm}` : "",
      "",
      `Subtotal: ${formatINR(subtotal)}`,
      discount ? `Discount: -${formatINR(discount)}` : "",
      invoice.isGST
        ? `GST (${invoice.gstRate}%): ${formatINR(gstAmount)}`
        : "GST: Not applied",
      roundOff
        ? `Round-off: ${roundDiff >= 0 ? "+" : ""}${formatINR(roundDiff)}`
        : "",
      `Grand Total: *${formatINR(grandTotal)}*`,
      "",
      "Thank you 🙏",
    ].filter(Boolean);
    return encodeURIComponent(lines.join("\n"));
  }, [
    invoice.invoiceNo,
    invoice.invoiceDate,
    invoice.isGST,
    invoice.gstRate,
    customer.name,
    customer.mobile,
    trip.pickup,
    trip.drop,
    trip.date,
    trip.totalKm,
    subtotal,
    discount,
    gstAmount,
    roundOff,
    roundDiff,
    grandTotal,
  ]);

  const waLink = `https://wa.me/${whatsappNumber}?text=${waText}`;

  return (
    <main className="bg-slate-50">
      {/* Top bar (hidden on print) */}
      <section className="border-b bg-white print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          <div>
            <div className="text-sm text-slate-500">
              <Link href="/projects/car-Rental" className="hover:text-slate-900">
                Home
              </Link>{" "}
              <span className="text-slate-300">/</span>{" "}
              <span className="text-slate-900 font-semibold">Billing</span>
            </div>
            <div className="mt-2">
              <CarLogo />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={printInvoice}
              className={[
                "px-4 py-2 rounded-xl font-extrabold transition",
                canPrint
                  ? "bg-slate-900 text-white hover:bg-slate-800"
                  : "bg-slate-300 text-white cursor-not-allowed",
              ].join(" ")}
              disabled={!canPrint}
            >
              🖨️ Print Invoice
            </button>

            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-green-600 text-white font-extrabold hover:bg-green-700 transition"
            >
              💬 Send WhatsApp
            </a>

            <a
              href={`tel:${phone}`}
              className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-900 font-extrabold hover:bg-slate-50 transition"
            >
              📞 Support
            </a>

            <button
              onClick={resetNewInvoice}
              className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-900 font-extrabold hover:bg-slate-50 transition"
            >
              ➕ New Invoice
            </button>
          </div>
        </div>
      </section>

      {/* ✅ Sample Bill preview (screen-only) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 print:hidden">
        <div className="rounded-[28px] border border-slate-200 bg-white overflow-hidden">
          <div className="p-6 sm:p-7 border-b bg-slate-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-extrabold">
                🧾 Sample Bill Preview
              </div>
              <div className="mt-2 text-xl font-black text-slate-900">
                This is how your invoice will look after printing
              </div>
              <div className="mt-1 text-sm text-slate-600">
                (Demo image: <b>car_bill.png</b>)
              </div>
            </div>

            <a
              href={sampleBillImg}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-900 font-extrabold hover:bg-slate-50 transition"
            >
              🔍 Open Full Image
            </a>
          </div>

          <div className="p-4 sm:p-6">
            <div className="relative w-full h-[520px] sm:h-[620px] rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden">
              <Image
                src={sampleBillImg}
                alt="Sample Bill - car_bill.png"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="mt-3 text-xs text-slate-500">
              Tip: Keep this sample for training your staff. Actual invoice will be generated below.
            </div>
          </div>
        </div>
      </section>

      {/* Layout: Editor + Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid lg:grid-cols-2 gap-6">
        {/* LEFT: Editor (hidden on print) */}
        <div className="print:hidden space-y-6">
          {/* Invoice Settings */}
          <div className="rounded-[28px] border border-slate-200 bg-white p-6">
            <div className="text-lg font-extrabold text-slate-900">Invoice Settings</div>
            <p className="mt-1 text-sm text-slate-600">
              Choose GST / Non-GST and set invoice number/date.
            </p>

            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div>
                <div className="text-xs font-semibold text-slate-600">Invoice No</div>
                <input
                  value={invoice.invoiceNo}
                  onChange={(e) =>
                    setInvoice((p) => ({ ...p, invoiceNo: e.target.value }))
                  }
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>

              <div>
                <div className="text-xs font-semibold text-slate-600">Invoice Date</div>
                <input
                  type="date"
                  value={invoice.invoiceDate}
                  onChange={(e) =>
                    setInvoice((p) => ({ ...p, invoiceDate: e.target.value }))
                  }
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>

              <div>
                <div className="text-xs font-semibold text-slate-600">Due Date</div>
                <input
                  type="date"
                  value={invoice.dueDate}
                  onChange={(e) =>
                    setInvoice((p) => ({ ...p, dueDate: e.target.value }))
                  }
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>

              <div>
                <div className="text-xs font-semibold text-slate-600">Payment Mode</div>
                <input
                  value={invoice.paymentMode}
                  onChange={(e) =>
                    setInvoice((p) => ({ ...p, paymentMode: e.target.value }))
                  }
                  placeholder="Cash / UPI / Bank"
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>
            </div>

            <div className="mt-4 grid sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setInvoice((p) => ({ ...p, isGST: true }))}
                className={[
                  "px-4 py-3 rounded-2xl font-extrabold transition border",
                  invoice.isGST
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-white text-slate-900 border-slate-200 hover:bg-slate-50",
                ].join(" ")}
              >
                GST Invoice
              </button>

              <button
                type="button"
                onClick={() => setInvoice((p) => ({ ...p, isGST: false }))}
                className={[
                  "px-4 py-3 rounded-2xl font-extrabold transition border",
                  !invoice.isGST
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-900 border-slate-200 hover:bg-slate-50",
                ].join(" ")}
              >
                Non-GST
              </button>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <div className="text-xs font-semibold text-slate-600">GST Rate (%)</div>
                <input
                  type="number"
                  min={0}
                  value={invoice.gstRate}
                  onChange={(e) =>
                    setInvoice((p) => ({
                      ...p,
                      gstRate: Number(e.target.value || 0),
                    }))
                  }
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-green-500/40"
                  disabled={!invoice.isGST}
                />
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="rounded-[28px] border border-slate-200 bg-white p-6">
            <div className="text-lg font-extrabold text-slate-900">Owner / Company Details</div>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div>
                <div className="text-xs font-semibold text-slate-600">Business Name</div>
                <input
                  value={company.name}
                  onChange={(e) => setCompany((p) => ({ ...p, name: e.target.value }))}
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-600">Phone</div>
                <input
                  value={company.phone}
                  onChange={(e) => setCompany((p) => ({ ...p, phone: e.target.value }))}
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-600">Email</div>
                <input
                  value={company.email}
                  onChange={(e) => setCompany((p) => ({ ...p, email: e.target.value }))}
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-600">GSTIN (if GST)</div>
                <input
                  value={company.gstin}
                  onChange={(e) => setCompany((p) => ({ ...p, gstin: e.target.value }))}
                  placeholder="22AAAAA0000A1Z5"
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>
              <div className="sm:col-span-2">
                <div className="text-xs font-semibold text-slate-600">Address</div>
                <textarea
                  value={company.address}
                  onChange={(e) => setCompany((p) => ({ ...p, address: e.target.value }))}
                  rows={3}
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>
            </div>
          </div>

          {/* Customer */}
          <div className="rounded-[28px] border border-slate-200 bg-white p-6">
            <div className="text-lg font-extrabold text-slate-900">Customer Details</div>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div>
                <div className="text-xs font-semibold text-slate-600">Customer Name *</div>
                <input
                  value={customer.name}
                  onChange={(e) => setCustomer((p) => ({ ...p, name: e.target.value }))}
                  placeholder="Customer full name"
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-600">Mobile</div>
                <input
                  value={customer.mobile}
                  onChange={(e) => setCustomer((p) => ({ ...p, mobile: e.target.value }))}
                  placeholder="10-digit mobile"
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>
              <div className="sm:col-span-2">
                <div className="text-xs font-semibold text-slate-600">Address</div>
                <textarea
                  value={customer.address}
                  onChange={(e) => setCustomer((p) => ({ ...p, address: e.target.value }))}
                  rows={2}
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-600">Customer GSTIN (optional)</div>
                <input
                  value={customer.gstin}
                  onChange={(e) => setCustomer((p) => ({ ...p, gstin: e.target.value }))}
                  placeholder="Customer GSTIN"
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-600">Place of Supply</div>
                <input
                  value={invoice.placeOfSupply}
                  onChange={(e) => setInvoice((p) => ({ ...p, placeOfSupply: e.target.value }))}
                  placeholder="CG"
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>
            </div>
          </div>

          {/* Trip */}
          <div className="rounded-[28px] border border-slate-200 bg-white p-6">
            <div className="text-lg font-extrabold text-slate-900">Trip Details</div>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div>
                <div className="text-xs font-semibold text-slate-600">Car</div>
                <input
                  value={trip.car}
                  onChange={(e) => setTrip((p) => ({ ...p, car: e.target.value }))}
                  placeholder="Dzire / Ertiga / Innova..."
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-600">Driver Name</div>
                <input
                  value={trip.driverName}
                  onChange={(e) => setTrip((p) => ({ ...p, driverName: e.target.value }))}
                  placeholder="Driver name"
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>

              <div>
                <div className="text-xs font-semibold text-slate-600">Pickup</div>
                <input
                  value={trip.pickup}
                  onChange={(e) => setTrip((p) => ({ ...p, pickup: e.target.value }))}
                  placeholder="Pickup location"
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-600">Drop</div>
                <input
                  value={trip.drop}
                  onChange={(e) => setTrip((p) => ({ ...p, drop: e.target.value }))}
                  placeholder="Drop location"
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>

              <div>
                <div className="text-xs font-semibold text-slate-600">Trip Date</div>
                <input
                  type="date"
                  value={trip.date}
                  onChange={(e) => setTrip((p) => ({ ...p, date: e.target.value }))}
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-600">Total KM</div>
                <input
                  value={trip.totalKm}
                  onChange={(e) => setTrip((p) => ({ ...p, totalKm: e.target.value }))}
                  placeholder="e.g. 145"
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>

              <div>
                <div className="text-xs font-semibold text-slate-600">Start Time</div>
                <input
                  type="time"
                  value={trip.startTime}
                  onChange={(e) => setTrip((p) => ({ ...p, startTime: e.target.value }))}
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-600">End Time</div>
                <input
                  type="time"
                  value={trip.endTime}
                  onChange={(e) => setTrip((p) => ({ ...p, endTime: e.target.value }))}
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="rounded-[28px] border border-slate-200 bg-white p-6">
            <div className="flex items-end justify-between gap-3">
              <div>
                <div className="text-lg font-extrabold text-slate-900">Bill Items</div>
                <div className="text-sm text-slate-600">Add service charges, toll, parking, etc.</div>
              </div>
              <button
                onClick={addItem}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white font-extrabold hover:bg-slate-800 transition"
              >
                ➕ Add Item
              </button>
            </div>

            <div className="mt-4 grid gap-3">
              {items.map((it, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 grid sm:grid-cols-12 gap-3 items-end"
                >
                  <div className="sm:col-span-6">
                    <div className="text-xs font-semibold text-slate-600">Description</div>
                    <input
                      value={it.desc}
                      onChange={(e) => updateItem(idx, "desc", e.target.value)}
                      className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-green-500/40"
                      placeholder="e.g. Taxi charges / Toll / Parking"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <div className="text-xs font-semibold text-slate-600">Qty</div>
                    <input
                      type="number"
                      min={0}
                      value={it.qty}
                      onChange={(e) => updateItem(idx, "qty", e.target.value)}
                      className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-green-500/40"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <div className="text-xs font-semibold text-slate-600">Rate (₹)</div>
                    <input
                      type="number"
                      min={0}
                      value={it.rate}
                      onChange={(e) => updateItem(idx, "rate", e.target.value)}
                      className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-green-500/40"
                    />
                  </div>

                  <div className="sm:col-span-2 flex items-center justify-between gap-2">
                    <div className="text-sm font-extrabold text-slate-900">
                      {formatINR((Number(it.qty) || 0) * (Number(it.rate) || 0))}
                    </div>
                    <button
                      onClick={() => removeItem(idx)}
                      className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-slate-900 font-extrabold hover:bg-slate-100 transition"
                      title="Remove"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 grid sm:grid-cols-3 gap-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-xs font-semibold text-slate-600">Discount (₹)</div>
                <input
                  type="number"
                  min={0}
                  value={discount}
                  onChange={(e) => setDiscount(Number(e.target.value || 0))}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-xs font-semibold text-slate-600">Round Off</div>
                <button
                  onClick={() => setRoundOff((v) => !v)}
                  className={[
                    "mt-2 w-full px-4 py-2 rounded-xl font-extrabold transition",
                    roundOff
                      ? "bg-green-600 text-white"
                      : "bg-slate-100 text-slate-800 hover:bg-slate-200",
                  ].join(" ")}
                >
                  {roundOff ? "ON" : "OFF"}
                </button>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-semibold text-slate-600">Grand Total</div>
                <div className="mt-2 text-2xl font-black text-slate-900">
                  {formatINR(grandTotal)}
                </div>
              </div>
            </div>
          </div>

          {/* Notes / Terms */}
          <div className="rounded-[28px] border border-slate-200 bg-white p-6">
            <div className="text-lg font-extrabold text-slate-900">Notes & Terms</div>
            <div className="mt-4 grid gap-4">
              <div>
                <div className="text-xs font-semibold text-slate-600">Notes</div>
                <textarea
                  value={invoice.notes}
                  onChange={(e) =>
                    setInvoice((p) => ({ ...p, notes: e.target.value }))
                  }
                  rows={3}
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-600">Terms</div>
                <textarea
                  value={invoice.terms}
                  onChange={(e) =>
                    setInvoice((p) => ({ ...p, terms: e.target.value }))
                  }
                  rows={4}
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Printable Invoice Preview */}
        <div className="rounded-[28px] border border-slate-200 bg-white overflow-hidden">
          <style>{`
            @media print {
              html, body { background: white !important; }
              .print-page { padding: 0 !important; }
              .print-shadow { box-shadow: none !important; border: none !important; }
            }
          `}</style>

          <div className="p-6 sm:p-8 print-page print-shadow">
            {/* Header */}
            <div className="flex items-start justify-between gap-6">
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black">
                    CR
                  </div>
                  <div className="min-w-0">
                    <div className="text-xl font-black text-slate-900 truncate">
                      {company.name}
                    </div>
                    <div className="text-xs text-slate-500">Car Rental / Taxi Service</div>
                  </div>
                </div>

                <div className="mt-3 text-sm text-slate-700 whitespace-pre-line">
                  {company.address}
                </div>
                <div className="mt-2 text-sm text-slate-700">
                  <span className="font-semibold">Phone:</span> {company.phone}{" "}
                  <span className="text-slate-300">|</span>{" "}
                  <span className="font-semibold">Email:</span> {company.email}
                </div>
                {invoice.isGST && company.gstin && (
                  <div className="mt-1 text-sm text-slate-700">
                    <span className="font-semibold">GSTIN:</span> {company.gstin}
                  </div>
                )}
              </div>

              <div className="shrink-0 text-right">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-extrabold">
                  {invoice.isGST ? "TAX INVOICE (GST)" : "INVOICE (Non-GST)"}
                </div>
                <div className="mt-3 text-sm text-slate-700">
                  <div>
                    <span className="font-semibold">Invoice No:</span> {invoice.invoiceNo}
                  </div>
                  <div>
                    <span className="font-semibold">Invoice Date:</span> {invoice.invoiceDate}
                  </div>
                  <div>
                    <span className="font-semibold">Due Date:</span> {invoice.dueDate}
                  </div>
                  <div>
                    <span className="font-semibold">Payment:</span> {invoice.paymentMode}
                  </div>
                  <div>
                    <span className="font-semibold">Place of Supply:</span> {invoice.placeOfSupply}
                  </div>
                </div>
              </div>
            </div>

            <div className="my-6 h-px bg-slate-200" />

            {/* Bill To + Trip */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="font-extrabold text-slate-900">Bill To</div>
                <div className="mt-2 text-sm text-slate-700">
                  <div className="font-semibold">{customer.name || "Customer Name"}</div>
                  {customer.mobile && <div>Mobile: {customer.mobile}</div>}
                  {customer.address && (
                    <div className="whitespace-pre-line">{customer.address}</div>
                  )}
                  {invoice.isGST && customer.gstin && <div>GSTIN: {customer.gstin}</div>}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="font-extrabold text-slate-900">Trip Details</div>
                <div className="mt-2 text-sm text-slate-700 grid gap-1">
                  <div>
                    <span className="font-semibold">Car:</span> {trip.car || "-"}
                  </div>
                  <div>
                    <span className="font-semibold">Pickup:</span> {trip.pickup || "-"}
                  </div>
                  <div>
                    <span className="font-semibold">Drop:</span> {trip.drop || "-"}
                  </div>
                  <div>
                    <span className="font-semibold">Date:</span> {trip.date || "-"}
                  </div>
                  <div>
                    <span className="font-semibold">Time:</span>{" "}
                    {(trip.startTime || "-") + " to " + (trip.endTime || "-")}
                  </div>
                  <div>
                    <span className="font-semibold">Total KM:</span> {trip.totalKm || "-"}
                  </div>
                  {trip.driverName && (
                    <div>
                      <span className="font-semibold">Driver:</span> {trip.driverName}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Items table */}
            <div className="mt-6 rounded-2xl border border-slate-200 overflow-hidden">
              <div className="grid grid-cols-12 bg-slate-900 text-white text-xs font-extrabold px-4 py-3">
                <div className="col-span-6">Description</div>
                <div className="col-span-2 text-right">Qty</div>
                <div className="col-span-2 text-right">Rate</div>
                <div className="col-span-2 text-right">Amount</div>
              </div>

              <div className="divide-y divide-slate-200">
                {items.map((it, idx) => {
                  const amt = (Number(it.qty) || 0) * (Number(it.rate) || 0);
                  return (
                    <div key={idx} className="grid grid-cols-12 px-4 py-3 text-sm">
                      <div className="col-span-6 text-slate-900 font-semibold">
                        {it.desc || "-"}
                      </div>
                      <div className="col-span-2 text-right text-slate-700">
                        {Number(it.qty) || 0}
                      </div>
                      <div className="col-span-2 text-right text-slate-700">
                        {formatINR(Number(it.rate) || 0)}
                      </div>
                      <div className="col-span-2 text-right font-extrabold text-slate-900">
                        {formatINR(amt)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Totals */}
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="font-extrabold text-slate-900">Notes</div>
                <div className="mt-2 text-sm text-slate-700 whitespace-pre-line">
                  {invoice.notes || "-"}
                </div>

                <div className="mt-4 font-extrabold text-slate-900">Terms</div>
                <div className="mt-2 text-sm text-slate-700 whitespace-pre-line">
                  {invoice.terms || "-"}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="grid gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-700">Subtotal</span>
                    <span className="font-extrabold text-slate-900">
                      {formatINR(subtotal)}
                    </span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between">
                      <span className="text-slate-700">Discount</span>
                      <span className="font-extrabold text-slate-900">
                        - {formatINR(discount)}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="text-slate-700">Taxable</span>
                    <span className="font-extrabold text-slate-900">
                      {formatINR(taxable)}
                    </span>
                  </div>

                  {invoice.isGST && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-slate-700">CGST ({Number(invoice.gstRate) / 2}%)</span>
                        <span className="font-extrabold text-slate-900">{formatINR(cgst)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700">SGST ({Number(invoice.gstRate) / 2}%)</span>
                        <span className="font-extrabold text-slate-900">{formatINR(sgst)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700">Total GST</span>
                        <span className="font-extrabold text-slate-900">{formatINR(gstAmount)}</span>
                      </div>
                    </>
                  )}

                  {roundOff && (
                    <div className="flex justify-between">
                      <span className="text-slate-700">Round Off</span>
                      <span className="font-extrabold text-slate-900">
                        {roundDiff >= 0 ? "+" : ""}
                        {formatINR(roundDiff)}
                      </span>
                    </div>
                  )}

                  <div className="h-px bg-slate-200 my-2" />

                  <div className="flex justify-between items-center">
                    <span className="text-slate-900 font-black text-lg">Grand Total</span>
                    <span className="text-slate-900 font-black text-2xl">
                      {formatINR(grandTotal)}
                    </span>
                  </div>

                  <div className="mt-2 text-xs text-slate-500">
                    * This is a demo billing screen. Adjust tax rules and formats as needed.
                  </div>
                </div>
              </div>
            </div>

            {/* Sign + Stamp */}
            <div className="mt-8 grid sm:grid-cols-2 gap-6 items-end">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="text-xs font-semibold text-slate-600">Authorized Signature</div>
                <div className="mt-3 relative h-20">
                  <Image
                    src="/projects/car-Rental/images/sign.jpg"
                    alt="Signature"
                    fill
                    className="object-contain"
                    sizes="300px"
                  />
                </div>
                <div className="mt-2 text-sm font-extrabold text-slate-900">
                  {company.name}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="text-xs font-semibold text-slate-600">Stamp</div>
                <div className="mt-3 relative h-24">
                  <Image
                    src="/projects/car-Rental/images/stamp.jpg"
                    alt="Stamp"
                    fill
                    className="object-contain"
                    sizes="300px"
                  />
                </div>
                <div className="mt-2 text-xs text-slate-500">
                  This invoice is computer generated. No physical signature required (optional).
                </div>
              </div>
            </div>

            {/* Print footer (screen helper) */}
            <div className="mt-8 print:hidden rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-sm text-slate-700">
                ✅ Tip: Click <b>Print Invoice</b> → choose <b>Save as PDF</b> to send the bill to customer.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile sticky (hidden on print) */}
      <div className="fixed bottom-3 left-0 right-0 z-50 px-4 sm:hidden print:hidden">
        <div className="max-w-md mx-auto rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
          <div className="grid grid-cols-2">
            <button
              onClick={printInvoice}
              className={[
                "py-3 text-center font-extrabold transition",
                canPrint ? "text-slate-900 hover:bg-slate-50" : "text-slate-400 cursor-not-allowed",
              ].join(" ")}
              disabled={!canPrint}
            >
              🖨️ Print
            </button>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="py-3 text-center font-extrabold text-white bg-green-600 hover:bg-green-700 transition"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
