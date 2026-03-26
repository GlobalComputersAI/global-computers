"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const OWNER_WA_NUMBER = "919752422686";
const OWNER_CALL = "tel:+919752422686";

/**
 * Based on your current project route structure.
 * If video does not load in production, later move it to public/.
 */
const BG_VIDEO = "/projects/gym/videos/gym.mp4";
const BG_POSTER = "";

function waLink(text: string) {
  return `https://wa.me/${OWNER_WA_NUMBER}?text=${encodeURIComponent(text)}`;
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
        "rounded-[2rem] border border-white/15 bg-white/10 backdrop-blur-xl",
        "shadow-[0_10px_40px_rgba(0,0,0,0.25)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold text-white/90 backdrop-blur">
      {children}
    </span>
  );
}

function Icon({ name }: { name: "check" | "bolt" | "whatsapp" | "call" }) {
  const c = "h-5 w-5";

  switch (name) {
    case "check":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M20 6L9 17l-5-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "bolt":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M13 2L3 14h8l-1 8 11-14h-8l0-6z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "whatsapp":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M20.5 11.9c0 4.7-3.9 8.6-8.6 8.6-1.4 0-2.7-.3-3.9-.9L3.5 21l1.4-4.2c-.7-1.1-1.1-2.5-1.1-3.9C3.8 7.2 7.6 3.4 12.4 3.4c4.7 0 8.1 3.8 8.1 8.5z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9.2 8.9c.2-.4.4-.4.6-.4h.6c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.4.5c-.1.1-.2.3-.1.5.2.5.8 1.3 1.5 1.9.8.6 1.6 1 2.1 1.1.2.1.4 0 .5-.2l.5-.6c.2-.2.4-.3.7-.2l1.6.7c.3.1.4.3.4.5v.6c0 .2 0 .4-.3.6-.3.3-1 .9-2.1.9-1.2 0-2.7-.4-4.4-1.7-2.2-1.6-3.5-3.8-3.7-4.9-.1-.8 0-1.5.3-2z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );

    default:
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M22 16.9v2a2 2 0 0 1-2.2 2c-9.6-.6-17.3-8.3-18-18A2 2 0 0 1 3.8.7h2a2 2 0 0 1 2 1.7l.7 3a2 2 0 0 1-.6 2l-1.2 1.2c1.4 2.6 3.5 4.7 6.1 6.1l1.2-1.2a2 2 0 0 1 2-.6l3 .7a2 2 0 0 1 1.7 2z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );
  }
}

export default function FreeTrialPage() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [goal, setGoal] = useState("Fat Loss");
  const [time, setTime] = useState("Morning");
  const [message, setMessage] = useState("");

  const summary = useMemo(() => {
    const lines = [
      "Hi! I want to book a FREE gym trial.",
      `Name: ${name || "-"}`,
      `Mobile: ${mobile || "-"}`,
      `Goal: ${goal}`,
      `Preferred Time: ${time}`,
      message ? `Message: ${message}` : "",
      "",
      "Please share available slots and address.",
    ].filter(Boolean);

    return lines.join("\n");
  }, [goal, message, mobile, name, time]);

  return (
    <main className="relative min-h-screen text-white">
      {/* Background video */}
      <div className="fixed inset-0 -z-20">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={BG_POSTER || undefined}
          aria-label="Gym background video"
        >
          <source src={BG_VIDEO} type="video/mp4" />
        </video>
      </div>

      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-24 -top-24 h-[520px] w-[520px] rounded-full bg-green-500/20 blur-[90px]" />
        <div className="absolute -bottom-24 -right-24 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[90px]" />
      </div>

      {/* Top */}
      <section className="pt-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge>⚡ Free Trial</Badge>
                <Badge>💬 WhatsApp Booking</Badge>
                <Badge>🔥 Limited Slots</Badge>
              </div>

              <h1 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                Book Your <span className="text-white/80">FREE Trial</span> Today
              </h1>

              <p className="mt-3 max-w-2xl text-white/75">
                One message is enough. We will confirm your slot, guide you from
                day one, and help you start your fitness journey with confidence.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={OWNER_CALL}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 font-black text-slate-950 transition hover:bg-white/90"
              >
                <Icon name="call" />
                Call Now
              </a>

              <a
                href={waLink(
                  "Hi! I want to book a FREE gym trial. Please share available slots."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-green-500 px-5 py-3 font-black text-white transition hover:bg-green-600"
              >
                <Icon name="whatsapp" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          {/* Left */}
          <div className="space-y-6">
            <GlassCard className="p-8">
              <div className="flex items-start gap-3">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-2">
                  <Icon name="bolt" />
                </div>

                <div>
                  <div className="text-xl font-black">
                    What you get in the FREE Trial
                  </div>
                  <p className="mt-2 text-white/75">
                    Experience the gym vibe, trainer guidance, and a quick goal
                    assessment. No pressure, just clarity.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
                {[
                  "Trainer assessment (beginner friendly)",
                  "Workout demo with safe form guidance",
                  "Plan suggestion based on your goal",
                  "Facility tour and timing details",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3"
                  >
                    <span className="mt-0.5">
                      <Icon name="check" />
                    </span>
                    <div className="font-semibold text-white/90">{item}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm text-white/80">
                <span className="font-black">Conversion Tip:</span> This page is
                designed to reduce friction — quick form + direct WhatsApp
                booking works very well for local gym leads.
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <div className="text-lg font-black">For Gym Owners (Demo Offer)</div>
              <p className="mt-2 text-white/75">
                Want a similar high-conversion gym website with billing demo?
              </p>

              <div className="mt-4 rounded-2xl border border-white/15 bg-white/10 p-4">
                <div className="text-2xl font-black">₹5,000 Starter Package</div>
                <div className="mt-1 text-sm text-white/75">
                  Domain and hosting excluded. Client-owned hosting supported.
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink(
                    "Hi! I want Gym Website + Billing in ₹5000. Please share details."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-green-500 px-5 py-3 font-black text-white transition hover:bg-green-600"
                >
                  <Icon name="whatsapp" />
                  Get Details on WhatsApp
                </a>

                <Link
                  href="/projects/gym/billing"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 font-black transition hover:bg-white/15"
                >
                  🧾 Open Billing Demo
                </Link>
              </div>
            </GlassCard>
          </div>

          {/* Right */}
          <div>
            <GlassCard className="p-8">
              <div className="text-2xl font-black">Book Your Slot</div>
              <p className="mt-2 text-white/75">
                Fill this quick form and submit. It will open WhatsApp with all
                details already written.
              </p>

              <form
                className="mt-6 grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.open(waLink(summary), "_blank", "noopener,noreferrer");
                }}
              >
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/60 focus:border-white/30"
                  placeholder="Your Name"
                  autoComplete="name"
                  aria-label="Your Name"
                />

                <input
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/60 focus:border-white/30"
                  placeholder="Mobile Number"
                  inputMode="numeric"
                  autoComplete="tel"
                  aria-label="Mobile Number"
                />

                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none focus:border-white/30"
                  aria-label="Fitness Goal"
                >
                  <option className="text-slate-900">Fat Loss</option>
                  <option className="text-slate-900">Muscle Gain</option>
                  <option className="text-slate-900">Strength</option>
                  <option className="text-slate-900">Fitness / Stamina</option>
                </select>

                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none focus:border-white/30"
                  aria-label="Preferred Time"
                >
                  <option className="text-slate-900">Morning</option>
                  <option className="text-slate-900">Evening</option>
                  <option className="text-slate-900">Anytime</option>
                </select>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/60 focus:border-white/30"
                  placeholder="Message (optional)"
                  rows={4}
                  aria-label="Message"
                />

                <button
                  type="submit"
                  className="rounded-2xl bg-white px-6 py-3 font-black text-slate-950 transition hover:bg-white/90"
                >
                  💬 Submit on WhatsApp
                </button>

                <a
                  href={waLink(summary)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-center font-black transition hover:bg-white/15"
                >
                  Prefer WhatsApp? Click Here
                </a>

                <p className="text-xs text-white/60">
                  Demo page. Replace video, gym name, address, trainers, images,
                  and offers for real client delivery.
                </p>
              </form>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-4 left-0 right-0 z-50 px-4 sm:hidden">
        <GlassCard className="mx-auto flex max-w-md gap-2 p-3">
          <a
            href={OWNER_CALL}
            className="inline-flex flex-1 justify-center rounded-2xl bg-white px-4 py-3 font-black text-slate-950"
          >
            Call
          </a>

          <a
            href={waLink(
              "Hi! I want to book a FREE gym trial. Please share available slots."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 justify-center rounded-2xl bg-green-600 px-4 py-3 font-black text-white"
          >
            WhatsApp
          </a>
        </GlassCard>
      </div>
    </main>
  );
}