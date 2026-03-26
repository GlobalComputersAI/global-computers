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

function nowTimeHHMM() {
  const d = new Date();
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}

/** Invoice no using trip date + end time + ms */
function genInvoiceNo(tripDate?: string, endTime?: string) {
  const cleanDate = (tripDate || todayISO()).replaceAll("-", "");
  const cleanTime = (endTime || nowTimeHHMM()).replaceAll(":", "");
  const ms = String(new Date().getMilliseconds()).padStart(3, "0");
  return `INV-${cleanDate}-${cleanTime}${ms}`;
}

function CarLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 font-black text-white">
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
  const BASE_PATH = "/projects/car-Rental";

  const ROUTES = {
    home: `${BASE_PATH}`,
    rate: `${BASE_PATH}/rate`,
    book: `${BASE_PATH}/booknow`,
    billing: `${BASE_PATH}/billing`,
    about: `${BASE_PATH}/aboutus`,
    contact: `${BASE_PATH}/contractus`,
  };

  // ================= HARD-CODED OWNER DETAILS =================
  const OWNER = {
    name: "Car Rental / Taxi Service",
    phone: "+91 97524 22686",
    email: "info@example.com",
    gstin: "22AAAAA0000A1Z5",
    pan: "AAAAA0000A",
    address: "Your Address, City, State, India",
  };

  const SUPPORT_PHONE_DIAL = "+919752422686";
  const WHATSAPP_NUMBER = "919752422686";

  // Put these in public/images/ if using
  const SIGN_IMG = "/images/sign.jpg";
  const STAMP_IMG = "/images/stamp.jpg";

  const [mounted, setMounted] = useState(false);
  const [showSignImage, setShowSignImage] = useState(true);
  const [showStampImage, setShowStampImage] = useState(true);

  // ================= STATE =================
  const [invoice, setInvoice] = useState({
    invoiceNo: "",
    invoiceDate: "",
    dueDate: "",
    placeOfSupply: "CG",
    paymentMode: "Cash / UPI",
    isGST: true,
    gstRate: 5,
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

  const [billMode, setBillMode] = useState<"calculator" | "manual">("calculator");

  const [items, setItems] = useState<Item[]>([
    { desc: "Taxi Service Charges", qty: 1, rate: 1200 },
  ]);
  const [discount, setDiscount] = useState(0);
  const [roundOff, setRoundOff] = useState(true);

  const [manualSubtotal, setManualSubtotal] = useState<number>(0);
  const [manualDiscount, setManualDiscount] = useState<number>(0);
  const [manualTaxable, setManualTaxable] = useState<number>(0);
  const [useManualTaxable, setUseManualTaxable] = useState(false);

  const [autoInvoiceNo, setAutoInvoiceNo] = useState(true);

  useEffect(() => {
    setMounted(true);
    setInvoice((p) => ({
      ...p,
      invoiceDate: p.invoiceDate || todayISO(),
      dueDate: p.dueDate || todayISO(),
      invoiceNo:
        p.invoiceNo || genInvoiceNo(trip.date || todayISO(), trip.endTime || nowTimeHHMM()),
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!mounted || !autoInvoiceNo) return;

    setInvoice((p) => ({
      ...p,
      invoiceNo: genInvoiceNo(trip.date || todayISO(), trip.endTime || nowTimeHHMM()),
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, autoInvoiceNo, trip.date, trip.endTime]);

  // ================= CALCULATIONS =================
  const subtotalCalc = useMemo(() => {
    return items.reduce((sum, it) => {
      const q = Number(it.qty) || 0;
      const r = Number(it.rate) || 0;
      return sum + q * r;
    }, 0);
  }, [items]);

  const taxableCalc = useMemo(() => {
    const d = Number(discount) || 0;
    return Math.max(0, subtotalCalc - d);
  }, [subtotalCalc, discount]);

  const taxableManual = useMemo(() => {
    const sub = Number(manualSubtotal) || 0;
    const dis = Number(manualDiscount) || 0;
    const t = Math.max(0, sub - dis);
    return useManualTaxable ? Math.max(0, Number(manualTaxable) || 0) : t;
  }, [manualSubtotal, manualDiscount, manualTaxable, useManualTaxable]);

  const taxable = billMode === "calculator" ? taxableCalc : taxableManual;
  const subtotal = billMode === "calculator" ? subtotalCalc : Number(manualSubtotal) || 0;
  const appliedDiscount =
    billMode === "calculator" ? Number(discount) || 0 : Number(manualDiscount) || 0;

  const gstAmount = useMemo(() => {
    if (!invoice.isGST) return 0;
    const rate = Number(invoice.gstRate) || 0;
    return (taxable * rate) / 100;
  }, [invoice.isGST, invoice.gstRate, taxable]);

  const totalBeforeRound = useMemo(() => taxable + gstAmount, [taxable, gstAmount]);

  const grandTotal = useMemo(() => {
    if (billMode === "calculator" && roundOff) return Math.round(totalBeforeRound);
    return totalBeforeRound;
  }, [billMode, totalBeforeRound, roundOff]);

  const roundDiff = useMemo(() => {
    if (billMode !== "calculator" || !roundOff) return 0;
    return Math.round(totalBeforeRound) - totalBeforeRound;
  }, [billMode, totalBeforeRound, roundOff]);

  const cgst = useMemo(() => (invoice.isGST ? gstAmount / 2 : 0), [gstAmount, invoice.isGST]);
  const sgst = useMemo(() => (invoice.isGST ? gstAmount / 2 : 0), [gstAmount, invoice.isGST]);

  const canPrint = useMemo(() => {
    return customer.name.trim().length > 1 && taxable > 0;
  }, [customer.name, taxable]);

  // ================= ACTIONS =================
  const addItem = () =>
    setItems((p) => [...p, { desc: "Additional Charges", qty: 1, rate: 0 }]);

  const removeItem = (idx: number) =>
    setItems((p) => p.filter((_, i) => i !== idx));

  const updateItem = (idx: number, key: keyof Item, value: string | number) => {
    setItems((p) =>
      p.map((it, i) =>
        i === idx ? { ...it, [key]: key === "desc" ? value : Number(value || 0) } : it
      )
    );
  };

  const newInvoice = () => {
    const invNo = genInvoiceNo(trip.date || todayISO(), trip.endTime || nowTimeHHMM());

    setInvoice((p) => ({
      ...p,
      invoiceNo: invNo,
      invoiceDate: todayISO(),
      dueDate: todayISO(),
    }));

    setAutoInvoiceNo(true);

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
    setRoundOff(true);

    setManualSubtotal(0);
    setManualDiscount(0);
    setUseManualTaxable(false);
    setManualTaxable(0);
  };

  const printInvoice = () => {
    if (!canPrint) return;
    window.print();
  };

  const waText = useMemo(() => {
    const lines = [
      "🧾 *Invoice / Bill*",
      "",
      `Invoice No: ${invoice.invoiceNo || "-"}`,
      `Date: ${invoice.invoiceDate || "-"}`,
      "",
      `Customer: ${customer.name || "-"}`,
      customer.mobile ? `Mobile: ${customer.mobile}` : "",
      "",
      trip.pickup ? `Pickup: ${trip.pickup}` : "",
      trip.drop ? `Drop: ${trip.drop}` : "",
      trip.date ? `Trip Date: ${trip.date}` : "",
      trip.startTime ? `Start Time: ${trip.startTime}` : "",
      trip.endTime ? `End Time: ${trip.endTime}` : "",
      trip.totalKm ? `Total KM: ${trip.totalKm}` : "",
      "",
      `Subtotal: ${formatINR(subtotal)}`,
      appliedDiscount ? `Discount: -${formatINR(appliedDiscount)}` : "",
      invoice.isGST ? `GST (${invoice.gstRate}%): ${formatINR(gstAmount)}` : "GST: Not applied",
      billMode === "calculator" && roundOff
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
    trip.startTime,
    trip.endTime,
    trip.totalKm,
    subtotal,
    appliedDiscount,
    gstAmount,
    billMode,
    roundOff,
    roundDiff,
    grandTotal,
  ]);

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

  return (
    <main className="bg-slate-50">
      <style jsx global>{`
        @page {
          size: A4;
          margin: 10mm;
        }

        @media print {
          html,
          body {
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          body * {
            visibility: hidden !important;
          }

          #print-invoice,
          #print-invoice * {
            visibility: visible !important;
          }

          #print-invoice {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            border: none !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            overflow: visible !important;
            background: white !important;
          }

          .print-hide {
            display: none !important;
          }

          .print-reset {
            border: none !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          a {
            color: inherit !important;
            text-decoration: none !important;
          }
        }
      `}</style>

      {/* Top bar */}
      <section className="print-hide border-b bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-sm text-slate-500">
              <Link href={ROUTES.home} className="hover:text-slate-900">
                Home
              </Link>{" "}
              <span className="text-slate-300">/</span>{" "}
              <span className="font-semibold text-slate-900">Billing</span>
            </div>
            <div className="mt-2">
              <CarLogo />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={printInvoice}
              className={[
                "rounded-xl px-4 py-2 font-extrabold transition",
                canPrint
                  ? "bg-slate-900 text-white hover:bg-slate-800"
                  : "cursor-not-allowed bg-slate-300 text-white",
              ].join(" ")}
              disabled={!canPrint}
            >
              🖨️ Print / Save PDF
            </button>

            <a
              href={mounted ? waLink : "#"}
              onClick={(e) => {
                if (!mounted) e.preventDefault();
              }}
              target="_blank"
              rel="noreferrer"
              className={[
                "rounded-xl bg-green-600 px-4 py-2 font-extrabold text-white transition",
                mounted ? "hover:bg-green-700" : "cursor-not-allowed opacity-60",
              ].join(" ")}
            >
              💬 Send WhatsApp
            </a>

            <a
              href={`tel:${SUPPORT_PHONE_DIAL}`}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 font-extrabold text-slate-900 transition hover:bg-slate-50"
            >
              📞 Support
            </a>

            <button
              onClick={newInvoice}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 font-extrabold text-slate-900 transition hover:bg-slate-50"
            >
              ➕ New Invoice
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-2">
        {/* LEFT: Editor */}
        <div className="print-hide space-y-6">
          {/* Owner */}
          <div className="rounded-[28px] border border-slate-200 bg-white p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-lg font-extrabold text-slate-900">
                  Owner / Company Details
                </div>
                <p className="mt-1 text-sm text-slate-600">
                  Hard-coded (not editable in demo).
                </p>
              </div>
              <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-extrabold text-slate-700">
                Locked
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-semibold text-slate-600">Business Name</div>
                <div className="mt-1 font-extrabold text-slate-900">{OWNER.name}</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-semibold text-slate-600">Phone</div>
                <div className="mt-1 font-extrabold text-slate-900">{OWNER.phone}</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-semibold text-slate-600">Email</div>
                <div className="mt-1 font-extrabold text-slate-900">{OWNER.email}</div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-semibold text-slate-600">
                  GSTIN / PAN (for invoice)
                </div>
                <div className="mt-1 font-extrabold text-slate-900">
                  {OWNER.gstin ? `GSTIN: ${OWNER.gstin}` : "GSTIN: -"}
                </div>
                <div className="mt-1 font-extrabold text-slate-900">
                  {OWNER.pan ? `PAN: ${OWNER.pan}` : "PAN: -"}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:col-span-2">
                <div className="text-xs font-semibold text-slate-600">Address</div>
                <div className="mt-1 whitespace-pre-line font-extrabold text-slate-900">
                  {OWNER.address}
                </div>
              </div>
            </div>
          </div>

          {/* Invoice Settings */}
          <div className="rounded-[28px] border border-slate-200 bg-white p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="text-lg font-extrabold text-slate-900">Invoice Settings</div>
                <p className="mt-1 text-sm text-slate-600">
                  Invoice No uses Trip Date + End Time (auto). You can also edit it.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setAutoInvoiceNo((v) => !v)}
                className={[
                  "rounded-xl border px-4 py-2 font-extrabold transition",
                  autoInvoiceNo
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
                ].join(" ")}
              >
                Auto Invoice: {autoInvoiceNo ? "ON" : "OFF"}
              </button>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <div className="text-xs font-semibold text-slate-600">Invoice No</div>
                <input
                  value={invoice.invoiceNo}
                  onChange={(e) => {
                    setAutoInvoiceNo(false);
                    setInvoice((p) => ({ ...p, invoiceNo: e.target.value }));
                  }}
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
                <div className="mt-1 text-[11px] text-slate-500">
                  Format: <b>INV-YYYYMMDD-HHMMsss</b>
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold text-slate-600">Invoice Date</div>
                <input
                  type="date"
                  value={invoice.invoiceDate}
                  onChange={(e) => setInvoice((p) => ({ ...p, invoiceDate: e.target.value }))}
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>

              <div>
                <div className="text-xs font-semibold text-slate-600">Due Date</div>
                <input
                  type="date"
                  value={invoice.dueDate}
                  onChange={(e) => setInvoice((p) => ({ ...p, dueDate: e.target.value }))}
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>

              <div>
                <div className="text-xs font-semibold text-slate-600">Payment Mode</div>
                <input
                  value={invoice.paymentMode}
                  onChange={(e) => setInvoice((p) => ({ ...p, paymentMode: e.target.value }))}
                  placeholder="Cash / UPI / Bank"
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

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <button
                type="button"
                onClick={() => setInvoice((p) => ({ ...p, isGST: true }))}
                className={[
                  "rounded-2xl border px-4 py-3 font-extrabold transition",
                  invoice.isGST
                    ? "border-green-600 bg-green-600 text-white"
                    : "border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
                ].join(" ")}
              >
                GST Invoice
              </button>

              <button
                type="button"
                onClick={() => setInvoice((p) => ({ ...p, isGST: false }))}
                className={[
                  "rounded-2xl border px-4 py-3 font-extrabold transition",
                  !invoice.isGST
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
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
                    setInvoice((p) => ({ ...p, gstRate: Number(e.target.value || 0) }))
                  }
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-green-500/40"
                  disabled={!invoice.isGST}
                />
              </div>
            </div>
          </div>

          {/* Customer */}
          <div className="rounded-[28px] border border-slate-200 bg-white p-6">
            <div className="text-lg font-extrabold text-slate-900">Customer Details</div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
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
                <div className="text-xs font-semibold text-slate-600">
                  Customer GSTIN (optional)
                </div>
                <input
                  value={customer.gstin}
                  onChange={(e) => setCustomer((p) => ({ ...p, gstin: e.target.value }))}
                  placeholder="Customer GSTIN"
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                  disabled={!invoice.isGST}
                />
              </div>
            </div>
          </div>

          {/* Trip */}
          <div className="rounded-[28px] border border-slate-200 bg-white p-6">
            <div className="text-lg font-extrabold text-slate-900">Trip Details</div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
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

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:col-span-2">
                <div className="text-xs font-semibold text-slate-600">Invoice ID Source</div>
                <div className="mt-1 text-sm text-slate-700">
                  Invoice No is generated using:
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-extrabold text-slate-700">
                    Trip Date: {trip.date || "—"}
                  </span>
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-extrabold text-slate-700">
                    End Time: {trip.endTime || "—"}
                  </span>
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-extrabold text-slate-700">
                    GSTIN/PAN: {OWNER.gstin || OWNER.pan || "—"}
                  </span>
                </div>
                <div className="mt-2 text-xs text-slate-500">
                  If Auto Invoice is ON, invoice number updates when Trip Date/End Time changes.
                </div>
              </div>
            </div>
          </div>

          {/* BILL MODE */}
          <div className="rounded-[28px] border border-slate-200 bg-white p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-lg font-extrabold text-slate-900">Billing Mode</div>
                <div className="text-sm text-slate-600">
                  Choose calculator (items) or manual totals.
                </div>
              </div>

              <div className="inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-1">
                <button
                  type="button"
                  onClick={() => setBillMode("calculator")}
                  className={[
                    "rounded-xl px-4 py-2 text-sm font-extrabold transition",
                    billMode === "calculator"
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-white",
                  ].join(" ")}
                >
                  Calculator
                </button>
                <button
                  type="button"
                  onClick={() => setBillMode("manual")}
                  className={[
                    "rounded-xl px-4 py-2 text-sm font-extrabold transition",
                    billMode === "manual"
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-white",
                  ].join(" ")}
                >
                  Manual
                </button>
              </div>
            </div>

            {billMode === "calculator" ? (
              <div className="mt-5">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <div className="text-base font-extrabold text-slate-900">Bill Items</div>
                    <div className="text-sm text-slate-600">
                      Add taxi charges, toll, parking, etc.
                    </div>
                  </div>
                  <button
                    onClick={addItem}
                    className="rounded-xl bg-slate-900 px-4 py-2 font-extrabold text-white transition hover:bg-slate-800"
                  >
                    ➕ Add Item
                  </button>
                </div>

                <div className="mt-4 grid gap-3">
                  {items.map((it, idx) => (
                    <div
                      key={idx}
                      className="grid items-end gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-12"
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

                      <div className="flex items-center justify-between gap-2 sm:col-span-2">
                        <div className="text-sm font-extrabold text-slate-900">
                          {formatINR((Number(it.qty) || 0) * (Number(it.rate) || 0))}
                        </div>
                        <button
                          onClick={() => removeItem(idx)}
                          className="rounded-xl border border-slate-200 bg-white px-3 py-2 font-extrabold text-slate-900 transition hover:bg-slate-100"
                          title="Remove"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
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
                        "mt-2 w-full rounded-xl px-4 py-2 font-extrabold transition",
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
            ) : (
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-xs font-semibold text-slate-600">Subtotal (₹)</div>
                  <input
                    type="number"
                    min={0}
                    value={manualSubtotal}
                    onChange={(e) => setManualSubtotal(Number(e.target.value || 0))}
                    className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-green-500/40"
                    placeholder="e.g. 1500"
                  />
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-xs font-semibold text-slate-600">Discount (₹)</div>
                  <input
                    type="number"
                    min={0}
                    value={manualDiscount}
                    onChange={(e) => setManualDiscount(Number(e.target.value || 0))}
                    className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-green-500/40"
                    placeholder="e.g. 100"
                  />
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:col-span-2">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs font-semibold text-slate-600">Taxable Amount</div>
                      <div className="mt-1 text-lg font-black text-slate-900">
                        {formatINR(
                          useManualTaxable
                            ? manualTaxable
                            : Math.max(0, manualSubtotal - manualDiscount)
                        )}
                      </div>
                      <div className="text-xs text-slate-500">
                        Auto = Subtotal - Discount. You can override if needed.
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setUseManualTaxable((v) => !v)}
                      className={[
                        "rounded-xl px-4 py-2 font-extrabold transition",
                        useManualTaxable
                          ? "bg-slate-900 text-white"
                          : "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
                      ].join(" ")}
                    >
                      {useManualTaxable ? "Override ON" : "Override OFF"}
                    </button>
                  </div>

                  {useManualTaxable && (
                    <div className="mt-3">
                      <input
                        type="number"
                        min={0}
                        value={manualTaxable}
                        onChange={(e) => setManualTaxable(Number(e.target.value || 0))}
                        className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-green-500/40"
                        placeholder="Enter taxable amount"
                      />
                    </div>
                  )}
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:col-span-2">
                  <div className="text-xs font-semibold text-slate-600">Grand Total</div>
                  <div className="mt-2 text-2xl font-black text-slate-900">
                    {formatINR(grandTotal)}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    (GST applies on taxable amount if enabled.)
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Notes / Terms */}
          <div className="rounded-[28px] border border-slate-200 bg-white p-6">
            <div className="text-lg font-extrabold text-slate-900">Notes & Terms</div>
            <div className="mt-4 grid gap-4">
              <div>
                <div className="text-xs font-semibold text-slate-600">Notes</div>
                <textarea
                  value={invoice.notes}
                  onChange={(e) => setInvoice((p) => ({ ...p, notes: e.target.value }))}
                  rows={3}
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-600">Terms</div>
                <textarea
                  value={invoice.terms}
                  onChange={(e) => setInvoice((p) => ({ ...p, terms: e.target.value }))}
                  rows={4}
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Printable Invoice Preview */}
        <div
          id="print-invoice"
          className="overflow-hidden rounded-[28px] border border-slate-200 bg-white"
        >
          <div className="print-reset p-6 sm:p-8">
            {/* Header */}
            <div className="flex items-start justify-between gap-6">
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 font-black text-white">
                    CR
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-xl font-black text-slate-900">
                      {OWNER.name}
                    </div>
                    <div className="text-xs text-slate-500">Car Rental / Taxi Service</div>
                  </div>
                </div>

                <div className="mt-3 whitespace-pre-line text-sm text-slate-700">
                  {OWNER.address}
                </div>
                <div className="mt-2 text-sm text-slate-700">
                  <span className="font-semibold">Phone:</span> {OWNER.phone}{" "}
                  <span className="text-slate-300">|</span>{" "}
                  <span className="font-semibold">Email:</span> {OWNER.email}
                </div>

                {(OWNER.gstin || OWNER.pan) && (
                  <div className="mt-1 text-sm text-slate-700">
                    {OWNER.gstin && (
                      <>
                        <span className="font-semibold">GSTIN:</span> {OWNER.gstin}{" "}
                      </>
                    )}
                    {OWNER.gstin && OWNER.pan && <span className="text-slate-300">|</span>}
                    {OWNER.pan && (
                      <>
                        {" "}
                        <span className="font-semibold">PAN:</span> {OWNER.pan}
                      </>
                    )}
                  </div>
                )}
              </div>

              <div className="shrink-0 text-right">
                <div className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-extrabold text-white">
                  {invoice.isGST ? "TAX INVOICE (GST)" : "INVOICE (Non-GST)"}
                </div>
                <div className="mt-3 text-sm text-slate-700">
                  <div>
                    <span className="font-semibold">Invoice No:</span> {invoice.invoiceNo || "-"}
                  </div>
                  <div>
                    <span className="font-semibold">Invoice Date:</span>{" "}
                    {invoice.invoiceDate || "-"}
                  </div>
                  <div>
                    <span className="font-semibold">Due Date:</span> {invoice.dueDate || "-"}
                  </div>
                  <div>
                    <span className="font-semibold">Payment:</span> {invoice.paymentMode}
                  </div>
                  <div>
                    <span className="font-semibold">Place of Supply:</span>{" "}
                    {invoice.placeOfSupply}
                  </div>
                </div>
              </div>
            </div>

            <div className="my-6 h-px bg-slate-200" />

            {/* Bill To + Trip */}
            <div className="grid gap-6 sm:grid-cols-2">
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
                <div className="mt-2 grid gap-1 text-sm text-slate-700">
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
                    <span className="font-semibold">Trip Date:</span> {trip.date || "-"}
                  </div>
                  <div>
                    <span className="font-semibold">Start Time:</span> {trip.startTime || "-"}
                  </div>
                  <div>
                    <span className="font-semibold">End Time:</span> {trip.endTime || "-"}
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

            {/* Items */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <div className="grid grid-cols-12 bg-slate-900 px-4 py-3 text-xs font-extrabold text-white">
                <div className="col-span-6">Description</div>
                <div className="col-span-2 text-right">Qty</div>
                <div className="col-span-2 text-right">Rate</div>
                <div className="col-span-2 text-right">Amount</div>
              </div>

              <div className="divide-y divide-slate-200">
                {billMode === "calculator" ? (
                  items.map((it, idx) => {
                    const amt = (Number(it.qty) || 0) * (Number(it.rate) || 0);
                    return (
                      <div key={idx} className="grid grid-cols-12 px-4 py-3 text-sm">
                        <div className="col-span-6 font-semibold text-slate-900">
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
                  })
                ) : (
                  <div className="px-4 py-4 text-sm text-slate-700">
                    Manual mode selected — totals are entered manually.
                  </div>
                )}
              </div>
            </div>

            {/* Totals */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="font-extrabold text-slate-900">Notes</div>
                <div className="mt-2 whitespace-pre-line text-sm text-slate-700">
                  {invoice.notes || "-"}
                </div>

                <div className="mt-4 font-extrabold text-slate-900">Terms</div>
                <div className="mt-2 whitespace-pre-line text-sm text-slate-700">
                  {invoice.terms || "-"}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="grid gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-700">Subtotal</span>
                    <span className="font-extrabold text-slate-900">{formatINR(subtotal)}</span>
                  </div>

                  {appliedDiscount > 0 && (
                    <div className="flex justify-between">
                      <span className="text-slate-700">Discount</span>
                      <span className="font-extrabold text-slate-900">
                        - {formatINR(appliedDiscount)}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="text-slate-700">Taxable</span>
                    <span className="font-extrabold text-slate-900">{formatINR(taxable)}</span>
                  </div>

                  {invoice.isGST && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-slate-700">
                          CGST ({Number(invoice.gstRate) / 2}%)
                        </span>
                        <span className="font-extrabold text-slate-900">
                          {formatINR(cgst)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700">
                          SGST ({Number(invoice.gstRate) / 2}%)
                        </span>
                        <span className="font-extrabold text-slate-900">
                          {formatINR(sgst)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700">Total GST</span>
                        <span className="font-extrabold text-slate-900">
                          {formatINR(gstAmount)}
                        </span>
                      </div>
                    </>
                  )}

                  {billMode === "calculator" && roundOff && (
                    <div className="flex justify-between">
                      <span className="text-slate-700">Round Off</span>
                      <span className="font-extrabold text-slate-900">
                        {roundDiff >= 0 ? "+" : ""}
                        {formatINR(roundDiff)}
                      </span>
                    </div>
                  )}

                  <div className="my-2 h-px bg-slate-200" />

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-slate-900">Grand Total</span>
                    <span className="text-2xl font-black text-slate-900">
                      {formatINR(grandTotal)}
                    </span>
                  </div>

                  <div className="mt-2 text-xs text-slate-500">
                    * Static demo. Invoice number is generated using Trip Date + End Time.
                  </div>
                </div>
              </div>
            </div>

            {/* Signature + Stamp */}
            <div className="mt-8 grid items-end gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="text-xs font-semibold text-slate-600">Authorized Signature</div>
                <div className="mt-3 relative h-20">
                  {showSignImage ? (
                    <Image
                      src={SIGN_IMG}
                      alt="Signature"
                      fill
                      className="object-contain"
                      sizes="300px"
                      onError={() => setShowSignImage(false)}
                    />
                  ) : (
                    <div className="flex h-full items-center text-sm italic text-slate-400">
                      Signature image not found
                    </div>
                  )}
                </div>
                <div className="mt-2 text-sm font-extrabold text-slate-900">{OWNER.name}</div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="text-xs font-semibold text-slate-600">Stamp</div>
                <div className="mt-3 relative h-24">
                  {showStampImage ? (
                    <Image
                      src={STAMP_IMG}
                      alt="Stamp"
                      fill
                      className="object-contain"
                      sizes="300px"
                      onError={() => setShowStampImage(false)}
                    />
                  ) : (
                    <div className="flex h-full items-center text-sm italic text-slate-400">
                      Stamp image not found
                    </div>
                  )}
                </div>
                <div className="mt-2 text-xs text-slate-500">
                  Computer generated invoice. Physical signature optional.
                </div>
              </div>
            </div>

            <div className="print-hide mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-sm text-slate-700">
                ✅ Tip: Click <b>Print / Save PDF</b> → choose <b>Save as PDF</b> to send bill to
                customer.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile sticky */}
      <div className="print-hide fixed bottom-3 left-0 right-0 z-50 px-4 sm:hidden">
        <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
          <div className="grid grid-cols-2">
            <button
              onClick={printInvoice}
              className={[
                "py-3 text-center font-extrabold transition",
                canPrint ? "text-slate-900 hover:bg-slate-50" : "cursor-not-allowed text-slate-400",
              ].join(" ")}
              disabled={!canPrint}
            >
              🖨️ Print
            </button>
            <a
              href={mounted ? waLink : "#"}
              onClick={(e) => {
                if (!mounted) e.preventDefault();
              }}
              target="_blank"
              rel="noreferrer"
              className={[
                "bg-green-600 py-3 text-center font-extrabold text-white transition",
                mounted ? "hover:bg-green-700" : "cursor-not-allowed opacity-60",
              ].join(" ")}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}