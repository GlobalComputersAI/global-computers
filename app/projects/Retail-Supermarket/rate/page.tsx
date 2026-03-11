"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type CarRate = {
  name: string;
  img: string;
  tag: string;
  seats: string;
  basePerDay: number; // ₹/day
  perKm: number; // ₹/km
  driverPerDay?: number; // optional
  nightExtra: number; // flat extra
  notes: string[];
};

const cars: CarRate[] = [
  {
    name: "Swift Dzire",
    img: "/projects/car-Rental/images/dzire.jpg",
    tag: "Best Value",
    seats: "4 Seats",
    basePerDay: 1000,
    perKm: 10,
    nightExtra: 300,
    notes: ["Ideal for city rides & airport", "Fuel policy as per package"],
  },
  {
    name: "Ertiga",
    img: "/projects/car-Rental/images/ertiga.jpg",
    tag: "Family",
    seats: "6–7 Seats",
    basePerDay: 1400,
    perKm: 12,
    nightExtra: 300,
    notes: ["Best for family tours", "Comfortable long route"],
  },
  {
    name: "XL6",
    img: "/projects/car-Rental/images/xl6.jpg",
    tag: "Premium MPV",
    seats: "6 Seats",
    basePerDay: 1500,
    perKm: 13,
    nightExtra: 300,
    notes: ["Stylish + spacious", "Outstation ready"],
  },
  {
    name: "Innova",
    img: "/projects/car-Rental/images/innova.jpg",
    tag: "Most Preferred",
    seats: "6–7 Seats",
    basePerDay: 1800,
    perKm: 15,
    nightExtra: 300,
    notes: ["Premium comfort", "Best for outstation"],
  },
  {
    name: "Scorpio",
    img: "/projects/car-Rental/images/scorpio.jpg",
    tag: "SUV Power",
    seats: "6–7 Seats",
    basePerDay: 1900,
    perKm: 16,
    nightExtra: 300,
    notes: ["Hills & highways", "Strong SUV performance"],
  },
  {
    name: "Audi (Luxury)",
    img: "/projects/car-Rental/images/audi.jpg",
    tag: "Luxury",
    seats: "4 Seats",
    basePerDay: 5000,
    perKm: 40,
    nightExtra: 500,
    notes: ["Business & events", "Premium experience"],
  },
];

function formatINR(n: number) {
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold border border-slate-200 bg-white">
      {children}
    </span>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="text-xs font-semibold text-slate-600">{children}</div>;
}

export default function RatePage() {
  const phone = "+919752422686";
  const whatsappNumber = "919752422686";

  // Calculator state
  const [carName, setCarName] = useState(cars[0].name);
  const [tripType, setTripType] = useState<"Per KM" | "Per Day">("Per KM");
  const [km, setKm] = useState(30);
  const [days, setDays] = useState(1);
  const [night, setNight] = useState(false);
  const [includeTollParking, setIncludeTollParking] = useState(false);
  const [tollParking, setTollParking] = useState(0);

  const selected = useMemo(
    () => cars.find((c) => c.name === carName) || cars[0],
    [carName]
  );

  const calc = useMemo(() => {
    const base =
      tripType === "Per KM" ? km * selected.perKm : days * selected.basePerDay;

    const nightCharge = night ? selected.nightExtra : 0;
    const extra = includeTollParking ? tollParking : 0;

    const total = Math.max(0, base + nightCharge + extra);
    return { base, nightCharge, extra, total };
  }, [
    selected,
    tripType,
    km,
    days,
    night,
    includeTollParking,
    tollParking,
  ]);

  const waText = useMemo(() => {
    const lines = [
      "🚗 *Rate Enquiry / Booking*",
      "",
      `Car: ${selected.name}`,
      `Package: ${tripType}`,
      tripType === "Per KM" ? `Distance: ${km} km` : `Days: ${days} day(s)`,
      `Night Charge: ${night ? "Yes" : "No"}`,
      includeTollParking ? `Toll/Parking: ${formatINR(tollParking)}` : "Toll/Parking: Not included",
      "",
      `Estimated Total: ${formatINR(calc.total)}`,
      "",
      "Please confirm final price & availability. Negotiation allowed 🙂",
    ];
    return encodeURIComponent(lines.join("\n"));
  }, [selected, tripType, km, days, night, includeTollParking, tollParking, calc.total]);

  const waLink = `https://wa.me/${whatsappNumber}?text=${waText}`;

  return (
    <main className="bg-slate-50">
      {/* HEADER STRIP */}
      <section className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <div className="text-sm text-slate-500">
                <Link href="/projects/car-Rental" className="hover:text-slate-900">
                  Home
                </Link>{" "}
                <span className="text-slate-300">/</span>{" "}
                <span className="text-slate-900 font-semibold">Rate Card</span>
              </div>

              <h1 className="mt-2 text-3xl sm:text-4xl font-black text-slate-900">
                Rate Card + Instant Calculator
              </h1>
              <p className="mt-2 text-slate-600 max-w-2xl">
                Clear pricing builds trust and increases conversion. Select your car & package
                to get an instant estimated total.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Pill>✅ Transparent pricing</Pill>
                <Pill>✅ Negotiation allowed</Pill>
                <Pill>✅ WhatsApp confirmation</Pill>
                <Pill>✅ Airport • Local • Outstation</Pill>
              </div>
            </div>

            <div className="flex gap-2">
              <a
                href={`tel:${phone}`}
                className="inline-flex justify-center px-4 py-2 rounded-xl border border-slate-200 bg-white font-extrabold text-slate-900 hover:bg-slate-50 transition"
              >
                📞 Call
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center px-4 py-2 rounded-xl bg-green-600 text-white font-extrabold hover:bg-green-700 transition"
              >
                💬 WhatsApp Rate
              </a>
              <Link
                href="/projects/car-Rental/booknow"
                className="hidden sm:inline-flex justify-center px-4 py-2 rounded-xl bg-slate-900 text-white font-extrabold hover:bg-slate-800 transition"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="rounded-[28px] border border-slate-200 bg-white overflow-hidden">
              <div className="p-6 sm:p-8 border-b bg-slate-50">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-extrabold">
                      🧮 Rate Calculator
                    </div>
                    <h2 className="mt-3 text-xl sm:text-2xl font-black text-slate-900">
                      Calculate estimated price
                    </h2>
                    <p className="mt-1 text-sm text-slate-600">
                      Final price may vary based on route, toll, traffic & timing — we confirm before trip.
                    </p>
                  </div>

                  <div className="hidden sm:block text-right">
                    <div className="text-xs text-slate-500">Support</div>
                    <div className="font-black text-slate-900">{phone}</div>
                    <div className="text-xs text-slate-500">Instant WhatsApp</div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="grid gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label>Select Car</Label>
                      <select
                        value={carName}
                        onChange={(e) => setCarName(e.target.value)}
                        className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                      >
                        {cars.map((c) => (
                          <option key={c.name} value={c.name}>
                            {c.name} • {formatINR(c.basePerDay)}/day • ₹{c.perKm}/km
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label>Package Type</Label>
                      <select
                        value={tripType}
                        onChange={(e) => setTripType(e.target.value as any)}
                        className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                      >
                        <option value="Per KM">Per KM (Distance Based)</option>
                        <option value="Per Day">Per Day (Daily Package)</option>
                      </select>
                    </div>
                  </div>

                  {tripType === "Per KM" ? (
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label>Approx Distance (KM)</Label>
                        <input
                          type="number"
                          min={0}
                          value={km}
                          onChange={(e) => setKm(Number(e.target.value || 0))}
                          className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                          placeholder="e.g. 30"
                        />
                        <div className="mt-1 text-xs text-slate-500">
                          Rate: <b>₹{selected.perKm}/km</b>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <div className="text-xs text-slate-600 font-semibold">
                          Example
                        </div>
                        <div className="mt-1 text-sm text-slate-700">
                          {km} km × ₹{selected.perKm}/km ={" "}
                          <b>{formatINR(calc.base)}</b>
                        </div>
                        <div className="mt-2 text-xs text-slate-500">
                          Best for city rides, airport, point-to-point.
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label>No. of Days</Label>
                        <input
                          type="number"
                          min={1}
                          value={days}
                          onChange={(e) => setDays(Math.max(1, Number(e.target.value || 1)))}
                          className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                          placeholder="e.g. 2"
                        />
                        <div className="mt-1 text-xs text-slate-500">
                          Rate: <b>{formatINR(selected.basePerDay)}/day</b>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <div className="text-xs text-slate-600 font-semibold">
                          Example
                        </div>
                        <div className="mt-1 text-sm text-slate-700">
                          {days} day(s) × {formatINR(selected.basePerDay)}/day ={" "}
                          <b>{formatINR(calc.base)}</b>
                        </div>
                        <div className="mt-2 text-xs text-slate-500">
                          Best for outstation tours, multiple stops.
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-extrabold text-slate-900">
                            Night Charge
                          </div>
                          <div className="text-xs text-slate-500">
                            Extra {formatINR(selected.nightExtra)} (flat)
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setNight((v) => !v)}
                          className={[
                            "h-10 px-3 rounded-xl font-extrabold text-sm transition",
                            night
                              ? "bg-slate-900 text-white"
                              : "bg-slate-100 text-slate-700 hover:bg-slate-200",
                          ].join(" ")}
                        >
                          {night ? "ON" : "OFF"}
                        </button>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="font-extrabold text-slate-900">
                            Toll / Parking
                          </div>
                          <div className="text-xs text-slate-500">
                            Optional add-on
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setIncludeTollParking((v) => !v)}
                          className={[
                            "h-10 px-3 rounded-xl font-extrabold text-sm transition",
                            includeTollParking
                              ? "bg-slate-900 text-white"
                              : "bg-slate-100 text-slate-700 hover:bg-slate-200",
                          ].join(" ")}
                        >
                          {includeTollParking ? "INCLUDE" : "EXCLUDE"}
                        </button>
                      </div>

                      {includeTollParking && (
                        <div className="mt-3">
                          <Label>Enter Amount (₹)</Label>
                          <input
                            type="number"
                            min={0}
                            value={tollParking}
                            onChange={(e) => setTollParking(Number(e.target.value || 0))}
                            className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/40"
                            placeholder="e.g. 150"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Total */}
                  <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <div className="text-xs font-semibold text-slate-600">
                          Estimated Total
                        </div>
                        <div className="text-3xl font-black text-slate-900">
                          {formatINR(calc.total)}
                        </div>
                        <div className="mt-1 text-xs text-slate-500">
                          Base: {formatINR(calc.base)} • Night:{" "}
                          {formatINR(calc.nightCharge)} • Extra:{" "}
                          {formatINR(calc.extra)}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2">
                        <a
                          href={waLink}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex justify-center px-5 py-3 rounded-2xl bg-green-600 text-white font-extrabold hover:bg-green-700 transition"
                        >
                          💬 Send on WhatsApp
                        </a>
                        <a
                          href={`tel:${phone}`}
                          className="inline-flex justify-center px-5 py-3 rounded-2xl border border-slate-200 bg-white text-slate-900 font-extrabold hover:bg-slate-100 transition"
                        >
                          📞 Call to Confirm
                        </a>
                      </div>
                    </div>

                    <div className="mt-4 text-xs text-slate-600">
                      * Prices shown are estimated. Final price may be less or more depending on route,
                      timing, toll/parking, waiting, and vehicle availability. We will confirm you on
                      call/WhatsApp. Negotiation is allowed.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* NOTE */}
            <div className="mt-6 rounded-[28px] border border-slate-200 bg-white p-6">
              <div className="font-extrabold text-slate-900">Important Notes</div>
              <div className="mt-3 grid gap-2 text-sm text-slate-700">
                {[
                  "Rates are for demo purpose — confirm before trip.",
                  "Toll, parking and state tax may be extra as per route.",
                  "Night charge applies for late-night timings (as applicable).",
                  "We share driver & car details before pickup.",
                ].map((x) => (
                  <div key={x} className="flex gap-2">
                    <span className="mt-0.5">✅</span>
                    <span>{x}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-col sm:flex-row gap-2">
                <Link
                  href="/projects/car-Rental/booknow"
                  className="inline-flex justify-center px-4 py-2 rounded-xl bg-slate-900 text-white font-extrabold hover:bg-slate-800 transition"
                >
                  Book Now
                </Link>
                <Link
                  href="/projects/car-Rental/contractus"
                  className="inline-flex justify-center px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-900 font-extrabold hover:bg-slate-50 transition"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* SIDEBAR: Quick Rate Table */}
          <div className="grid gap-6">
            <div className="rounded-[28px] border border-slate-200 bg-white overflow-hidden">
              <div className="p-5 border-b bg-slate-50">
                <div className="font-extrabold text-slate-900">Quick Rate Table</div>
                <div className="text-xs text-slate-600 mt-1">
                  Compare cars & pick the best one.
                </div>
              </div>

              <div className="p-5 grid gap-4">
                {cars.map((c) => (
                  <div
                    key={c.name}
                    className={[
                      "rounded-2xl border p-4 transition",
                      c.name === selected.name
                        ? "border-green-300 bg-green-50"
                        : "border-slate-200 bg-white hover:bg-slate-50",
                    ].join(" ")}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 rounded-xl overflow-hidden border border-slate-200 bg-white">
                        <Image
                          src={c.img}
                          alt={c.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>

                      <div className="min-w-0">
                        <div className="font-extrabold text-slate-900 truncate">
                          {c.name}
                        </div>
                        <div className="text-xs text-slate-500">
                          {c.seats} • {c.tag}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setCarName(c.name)}
                        className="ml-auto px-3 py-1 rounded-xl text-xs font-extrabold bg-slate-900 text-white hover:bg-slate-800 transition"
                      >
                        Select
                      </button>
                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                      <div className="rounded-xl border border-slate-200 bg-white px-2 py-2 text-center">
                        <div className="text-slate-500">Per Day</div>
                        <div className="font-extrabold text-slate-900">
                          {formatINR(c.basePerDay)}
                        </div>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-white px-2 py-2 text-center">
                        <div className="text-slate-500">Per KM</div>
                        <div className="font-extrabold text-slate-900">₹{c.perKm}</div>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-white px-2 py-2 text-center">
                        <div className="text-slate-500">Night</div>
                        <div className="font-extrabold text-slate-900">
                          {formatINR(c.nightExtra)}
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 text-xs text-slate-500">
                      *Final price confirmed on call/WhatsApp.
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-[28px] border border-slate-200 bg-white p-6">
              <div className="text-lg font-extrabold text-slate-900">
                Want best price?
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Share your pickup + drop + timing. We send the best quote with availability.
              </p>

              <div className="mt-4 flex flex-col gap-2">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center px-5 py-3 rounded-2xl bg-green-600 text-white font-extrabold hover:bg-green-700 transition"
                >
                  💬 WhatsApp Quote
                </a>
                <a
                  href={`tel:${phone}`}
                  className="inline-flex justify-center px-5 py-3 rounded-2xl border border-slate-200 bg-white text-slate-900 font-extrabold hover:bg-slate-50 transition"
                >
                  📞 Call Now
                </a>
              </div>

              <div className="mt-4 text-xs text-slate-500">
                Tip: WhatsApp converts fastest in India ✅
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-3 left-0 right-0 z-50 px-4 sm:hidden">
        <div className="max-w-md mx-auto rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
          <div className="grid grid-cols-2">
            <a
              href={`tel:${phone}`}
              className="py-3 text-center font-extrabold text-slate-900 hover:bg-slate-50 transition"
            >
              📞 Call
            </a>
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
