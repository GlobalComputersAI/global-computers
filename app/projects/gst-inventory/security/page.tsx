"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const BASE = "/projects/gst-inventory";

const CALL_SOFTWARE = "tel:+919752422686";
const CALL_HARDWARE = "tel:+919827164811";

function cn(...a: Array<string | false | null | undefined>) {
  return a.filter(Boolean).join(" ");
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[12px] font-extrabold text-slate-700">
      {children}
    </span>
  );
}

function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

function Tick({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-xs font-black text-white">
        ✓
      </span>
      <span className="text-sm font-semibold text-slate-700">{children}</span>
    </li>
  );
}

function Info({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
      <p className="text-sm font-black text-slate-900">{title}</p>
      <p className="mt-2 text-sm font-semibold text-slate-600">{desc}</p>
    </div>
  );
}

type Deploy = "On-Prem" | "Cloud" | "Hybrid";
type Persona = "Owner" | "Accountant" | "Cashier" | "IT/Admin";

const DEPLOY_OPTIONS: Deploy[] = ["On-Prem", "Cloud", "Hybrid"];
const PERSONAS: Persona[] = ["Owner", "Accountant", "Cashier", "IT/Admin"];

export default function SecurityPage() {
  const [deploy, setDeploy] = useState<Deploy>("On-Prem");
  const [persona, setPersona] = useState<Persona>("Owner");

  const personaCopy = useMemo(() => {
    const map: Record<Persona, { title: string; points: string[] }> = {
      Owner: {
        title: "For Business Owners",
        points: [
          "Your data can stay under your control with On-Prem setup.",
          "Role-based access prevents staff from changing critical settings.",
          "Daily or weekly backups help reduce risk of data loss.",
          "Optional activity visibility improves accountability.",
        ],
      },
      Accountant: {
        title: "For Accounts Team",
        points: [
          "GST-ready billing formats and cleaner workflow.",
          "Exports for reports and year-wise backup handling.",
          "Controlled edits and returns process can be configured.",
          "Stable deployment so daily reporting does not stop.",
        ],
      },
      Cashier: {
        title: "For Billing Operators",
        points: [
          "Fast billing UI with limited permissions.",
          "Cashier cannot change sensitive settings unless allowed.",
          "Printer tested during installation for smooth billing.",
          "Offline mode is useful where internet is unreliable.",
        ],
      },
      "IT/Admin": {
        title: "For IT / Admin",
        points: [
          "On-Prem deployment with practical hardening checklist.",
          "Backup plan can include local plus external drive plus optional cloud copy.",
          "Network and printer configuration support is available.",
          "User roles and password guidance reduce misuse risk.",
        ],
      },
    };
    return map[persona];
  }, [persona]);

  const deployCopy = useMemo(() => {
    const map: Record<
      Deploy,
      { title: string; desc: string; bullets: string[] }
    > = {
      "On-Prem": {
        title: "On-Prem Setup",
        desc: "Runs on your office PC or server. Best when you want maximum control and offline-friendly workflow.",
        bullets: [
          "Offline billing possible",
          "Data stored under your control",
          "Backup setup on local drive and export",
          "Printer and LAN configuration supported",
        ],
      },
      Cloud: {
        title: "Cloud Setup",
        desc: "Best for remote access, owner visibility, and multi-device workflow.",
        bullets: [
          "Access from multiple devices",
          "Useful for branch or remote owner access",
          "Controlled login and access setup recommended",
          "Backup and export planning still included",
        ],
      },
      Hybrid: {
        title: "Hybrid Setup",
        desc: "On-Prem daily work with optional cloud backup or remote layer for extra safety.",
        bullets: [
          "Daily work stays practical",
          "Optional cloud backup adds redundancy",
          "Good balance of control and recovery",
          "Useful for businesses with more than one counter",
        ],
      },
    };
    return map[deploy];
  }, [deploy]);

  const waLink = useMemo(() => {
    const msg = `Hi, I want GST Billing + Inventory Software.

Please share your Security + Backup setup details.

Deployment preference: ${deploy}
Persona: ${persona}
Business type: ____
Printers: (A4/Thermal) ____
Counters/Branches: ____

Also confirm:
- Installation + printer setup fee ₹1,000
- Data security setup ₹1,000

Thanks!`;

    return `https://wa.me/919752422686?text=${encodeURIComponent(msg)}`;
  }, [deploy, persona]);

  return (
    <main className="bg-slate-50">
      <section className="border-b bg-gradient-to-b from-white to-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-wrap justify-center gap-2">
            <Badge>Data Safety Setup ₹1,000</Badge>
            <Badge>Backup / Export</Badge>
            <Badge>Role-Based Access</Badge>
            <Badge>On-Prem / Cloud / Offline</Badge>
          </div>

          <h1 className="mt-6 text-center text-3xl font-black text-slate-900 md:text-5xl">
            Security & Data Safety
          </h1>
          <p className="mx-auto mt-4 max-w-4xl text-center font-semibold text-slate-600">
            We do not only provide software UI. We also help with{" "}
            <span className="font-extrabold text-slate-900">
              practical security setup
            </span>{" "}
            for real business use: role access, backups, printer compatibility,
            deployment guidance, and smoother daily operations.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href={`${BASE}/plans/`}
              className="rounded-2xl bg-slate-900 px-7 py-4 text-sm font-extrabold text-white hover:bg-slate-800"
            >
              View Plans
            </Link>

            <Link
              href={`${BASE}/app/`}
              className="rounded-2xl border border-slate-300 bg-white px-7 py-4 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
            >
              Try Demo UI
            </Link>

            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-green-600 px-7 py-4 text-sm font-extrabold text-white hover:bg-green-700"
            >
              WhatsApp Security Checklist
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-4">
            <Card>
              <div className="border-b p-7">
                <p className="text-xs font-extrabold text-slate-500">
                  Choose Deployment
                </p>
                <p className="mt-1 text-lg font-black text-slate-900">
                  Where will it run?
                </p>
              </div>

              <div className="space-y-2 p-5">
                {DEPLOY_OPTIONS.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDeploy(d)}
                    className={cn(
                      "w-full rounded-3xl border px-4 py-4 text-left transition",
                      deploy === d
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-white hover:bg-slate-50"
                    )}
                  >
                    <p className="text-sm font-black">{d}</p>
                    <p
                      className={cn(
                        "mt-1 text-sm font-semibold",
                        deploy === d ? "text-white/75" : "text-slate-600"
                      )}
                    >
                      {d === "On-Prem"
                        ? "Best control + offline support"
                        : d === "Cloud"
                        ? "Access anywhere, branch friendly"
                        : "On-prem work + optional cloud backup"}
                    </p>
                  </button>
                ))}
              </div>
            </Card>

            <Card>
              <div className="border-b p-7">
                <p className="text-xs font-extrabold text-slate-500">
                  Choose Persona
                </p>
                <p className="mt-1 text-lg font-black text-slate-900">
                  Who are you?
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 p-5">
                {PERSONAS.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPersona(p)}
                    className={cn(
                      "rounded-2xl border px-4 py-3 text-sm font-extrabold transition",
                      persona === p
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
                    )}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </Card>

            <Card>
              <div className="p-7">
                <p className="text-lg font-black text-slate-900">Talk to us</p>
                <p className="mt-2 text-sm font-semibold text-slate-600">
                  We’ll suggest the safest setup for your business type,
                  counters, printers, and deployment preference.
                </p>

                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-green-600 px-6 py-3 text-center text-sm font-extrabold text-white hover:bg-green-700"
                  >
                    WhatsApp Security Setup
                  </a>

                  <a
                    href={CALL_SOFTWARE}
                    className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-center text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                  >
                    Call (Software)
                  </a>

                  <a
                    href={CALL_HARDWARE}
                    className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-center text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                  >
                    Call (Hardware)
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6 lg:col-span-8">
            <Card>
              <div className="border-b p-8">
                <h2 className="text-2xl font-black text-slate-900 md:text-3xl">
                  {deployCopy.title}
                </h2>
                <p className="mt-2 font-semibold text-slate-600">
                  {deployCopy.desc}
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {deployCopy.bullets.map((b) => (
                    <div
                      key={b}
                      className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <p className="text-sm font-extrabold text-slate-800">
                        ✓ {b}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 p-8 md:grid-cols-2">
                <div>
                  <p className="text-sm font-black text-slate-900">
                    {personaCopy.title}
                  </p>

                  <ul className="mt-4 space-y-3">
                    {personaCopy.points.map((p) => (
                      <Tick key={p}>{p}</Tick>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs font-extrabold text-slate-600">
                      Paid Setup Add-ons
                    </p>

                    <div className="mt-3 space-y-2">
                      <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
                        <p className="text-sm font-extrabold text-slate-900">
                          Installation + Printer Setup
                        </p>
                        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-extrabold text-slate-700">
                          ₹1,000
                        </span>
                      </div>

                      <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
                        <p className="text-sm font-extrabold text-slate-900">
                          Data Security Setup
                        </p>
                        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-extrabold text-slate-700">
                          ₹1,000
                        </span>
                      </div>
                    </div>

                    <p className="mt-3 text-xs font-bold text-slate-500">
                      These help ensure stable printing and safer data practices.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <Info
                    title="Role-Based Access"
                    desc="Owner controls what staff can do: billing only, edit bills, returns, reports, settings, and more."
                  />
                  <Info
                    title="Backup / Export Strategy"
                    desc="We help configure backup and export flow so data can be copied safely and restored when needed."
                  />
                  <Info
                    title="Printer & Hardware Compatibility"
                    desc="We test A4 and thermal printing during installation. Hardware, LAN, and Wi-Fi support can also be handled."
                  />
                  <Info
                    title="Optional AMC / Support"
                    desc="AMC gives ongoing help, faster fixes, health checks, and more peace of mind for daily operations."
                  />
                </div>
              </div>
            </Card>

            <Card>
              <div className="border-b p-8">
                <h3 className="text-xl font-black text-slate-900">
                  Security Checklist
                </h3>
                <p className="mt-2 text-sm font-semibold text-slate-600">
                  Simple practical checklist during setup. No unnecessary jargon.
                </p>
              </div>

              <div className="grid gap-6 p-8 md:grid-cols-2">
                <div>
                  <p className="text-sm font-black text-slate-900">
                    Access & Accounts
                  </p>
                  <ul className="mt-4 space-y-3">
                    <Tick>Separate Owner / Cashier / Accountant users</Tick>
                    <Tick>Strong password guidance</Tick>
                    <Tick>Limit settings access to owner or admin</Tick>
                    <Tick>Optional activity tracking policy</Tick>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-black text-slate-900">
                    Backup & Recovery
                  </p>
                  <ul className="mt-4 space-y-3">
                    <Tick>Daily export or backup routine configured</Tick>
                    <Tick>External drive copy recommended</Tick>
                    <Tick>Optional cloud copy for added safety</Tick>
                    <Tick>Restore instructions shared clearly</Tick>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-black text-slate-900">
                    System & Network
                  </p>
                  <ul className="mt-4 space-y-3">
                    <Tick>Basic hardening recommendations for On-Prem</Tick>
                    <Tick>Printer and network configuration verified</Tick>
                    <Tick>UPS recommendation for stable billing</Tick>
                    <Tick>Windows updates and antivirus guidance</Tick>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-black text-slate-900">
                    Data Handling
                  </p>
                  <ul className="mt-4 space-y-3">
                    <Tick>Secure export and storage advice</Tick>
                    <Tick>Permission rules for edits and returns</Tick>
                    <Tick>Document retention guidance if needed</Tick>
                    <Tick>Clear support escalation path</Tick>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-4 border-t bg-slate-50 p-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-black text-slate-900">
                    Want the exact checklist for your business?
                  </p>
                  <p className="text-sm font-semibold text-slate-600">
                    Tell us your industry, counters, printer type, and deployment style.
                  </p>
                </div>

                <div className="flex gap-3">
                  <Link
                    href={`${BASE}/plans/`}
                    className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-100"
                  >
                    View Plans
                  </Link>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-green-600 px-6 py-3 text-sm font-extrabold text-white hover:bg-green-700"
                  >
                    WhatsApp Now
                  </a>
                </div>
              </div>
            </Card>

            <Card className="border-slate-900 bg-slate-950">
              <div className="p-9 text-white">
                <h3 className="text-2xl font-black">
                  Secure Setup + Smooth Daily Billing
                </h3>
                <p className="mt-2 max-w-3xl font-semibold text-white/70">
                  We handle installation, printer compatibility, and safer data
                  practices so your team can focus on billing without fear of losing data.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`${BASE}/app/`}
                    className="rounded-2xl bg-white px-6 py-3 text-center text-sm font-extrabold text-slate-950 hover:bg-slate-100"
                  >
                    Try Demo UI
                  </Link>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-green-600 px-6 py-3 text-center text-sm font-extrabold text-white hover:bg-green-700"
                  >
                    WhatsApp Security Setup
                  </a>

                  <Link
                    href={`${BASE}/contact/`}
                    className="rounded-2xl border border-white/20 px-6 py-3 text-center text-sm font-extrabold hover:bg-white/10"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}