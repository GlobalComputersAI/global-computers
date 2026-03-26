"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const OWNER_PHONE = "+919752422686";
const CALL = `tel:${OWNER_PHONE}`;
const BASE_WA = "https://wa.me/919752422686";

const BG_VIDEO = "/projects/gym/videos/gym.mp4";

function buildWhatsAppLink(text: string) {
  return `${BASE_WA}?text=${encodeURIComponent(text)}`;
}

// ---------- UI ----------
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

function Badge({
  children,
  hot,
}: {
  children: React.ReactNode;
  hot?: boolean;
}) {
  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-extrabold backdrop-blur",
        hot
          ? "border-white/25 bg-white/18 text-white shadow-[0_0_30px_rgba(34,197,94,0.22)]"
          : "border-white/15 bg-white/10 text-white/90",
      ].join(" ")}
    >
      {children}
    </span>
  );
}

function Icon({
  name,
}: {
  name:
    | "fire"
    | "bolt"
    | "shield"
    | "target"
    | "heart"
    | "dumbbell"
    | "tag"
    | "gift"
    | "clock";
}) {
  const common = "h-5 w-5";

  switch (name) {
    case "fire":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 22c4.4 0 8-3.6 8-8 0-3.4-2-5.2-3.6-6.8-.9-.9-1.6-1.9-1.9-3.2-1.4 1-2.6 2.5-3 4.5C10 6.3 8.2 4.8 7.7 3 5.6 5.2 4 8 4 14c0 4.4 3.6 8 8 8z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "bolt":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M13 2L3 14h8l-1 8 11-14h-8l0-6z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "shield":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "target":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 22a10 10 0 1 0-10-10" stroke="currentColor" strokeWidth="2" />
          <path d="M12 18a6 6 0 1 0-6-6" stroke="currentColor" strokeWidth="2" />
          <path d="M12 14a2 2 0 1 0-2-2" stroke="currentColor" strokeWidth="2" />
          <path
            d="M22 2l-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "heart":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 21s-7-4.6-9.5-9C.6 8.4 2.7 5 6.4 5c2 0 3.2 1 3.9 2 0 0 1.4-2 4-2 3.7 0 5.8 3.4 3.9 7-2.5 4.4-9.2 9-9.2 9z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "dumbbell":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M3 10v4M7 8v8M17 8v8M21 10v4M7 12h10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "tag":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M20 13l-7 7-11-11V2h7l11 11z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M7 7h.01"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );

    case "gift":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M20 12v10H4V12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M2 7h20v5H2V7z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M12 22V7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 7c-2 0-4-1.2-4-3 0-1.1.9-2 2-2 1.6 0 2.7 1.3 3.2 3 .5-1.7 1.6-3 3.2-3 1.1 0 2 .9 2 2 0 1.8-2 3-4 3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "clock":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 6v6l4 2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    default:
      return null;
  }
}

function Input({
  placeholder,
  type = "text",
}: {
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/60 focus:border-white/30"
      placeholder={placeholder}
    />
  );
}

function Select({ children }: { children: React.ReactNode }) {
  return (
    <select className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none focus:border-white/30">
      {children}
    </select>
  );
}

// ---------- pricing ----------
type Plan = {
  id: string;
  name: string;
  price: string;
  tag: string;
  best?: boolean;
  perks: { icon: React.ReactNode; text: string }[];
};

export default function PlansPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [showTap, setShowTap] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.volume = 1;
    video.play().catch(() => {});
  }, []);

  function setVideoMuted(nextMuted: boolean) {
    const video = videoRef.current;
    if (!video) return;

    video.muted = nextMuted;
    setMuted(nextMuted);

    if (!nextMuted) {
      video.volume = 1;
      video.play().catch(() => {});
      setShowTap(false);
    }
  }

  function toggleSound() {
    setVideoMuted(!muted);
  }

  function enableSoundNow() {
    if (muted) setVideoMuted(false);
    else setShowTap(false);
  }

  const plans: Plan[] = useMemo(
    () => [
      {
        id: "monthly",
        name: "Monthly",
        price: "₹1,500",
        tag: "Start Today",
        perks: [
          { icon: <Icon name="bolt" />, text: "Gym access + guidance" },
          { icon: <Icon name="heart" />, text: "Cardio + strength zone" },
          { icon: <Icon name="shield" />, text: "Beginner-friendly support" },
        ],
      },
      {
        id: "quarterly",
        name: "Quarterly",
        price: "₹4,000",
        tag: "Save More",
        perks: [
          { icon: <Icon name="fire" />, text: "Faster results with consistency" },
          { icon: <Icon name="target" />, text: "Progress tracking" },
          { icon: <Icon name="shield" />, text: "Form and safety checks" },
        ],
      },
      {
        id: "halfyear",
        name: "Half-Yearly",
        price: "₹7,000",
        tag: "BEST VALUE",
        best: true,
        perks: [
          { icon: <Icon name="dumbbell" />, text: "Strength + muscle plan" },
          { icon: <Icon name="target" />, text: "Monthly goal review" },
          { icon: <Icon name="fire" />, text: "Transformation focus" },
        ],
      },
      {
        id: "yearly",
        name: "Yearly",
        price: "₹12,000",
        tag: "Max Savings",
        perks: [
          { icon: <Icon name="gift" />, text: "Long-term transformation" },
          { icon: <Icon name="target" />, text: "Priority guidance (demo)" },
          { icon: <Icon name="heart" />, text: "Best stamina + strength" },
        ],
      },
    ],
    []
  );

  return (
    <main className="relative min-h-screen text-white">
      {/* VIDEO BG */}
      <div className="fixed inset-0 -z-20">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          loop
          playsInline
          preload="metadata"
          muted
          aria-label="Gym plans background video"
        >
          <source src={BG_VIDEO} type="video/mp4" />
        </video>
      </div>

      {/* overlays */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-24 -top-24 h-[520px] w-[520px] rounded-full bg-green-500/25 blur-[90px]" />
        <div className="absolute -bottom-24 -right-24 h-[520px] w-[520px] rounded-full bg-blue-500/25 blur-[90px]" />
      </div>

      {/* sound toggle */}
      <div className="fixed right-4 top-20 z-50">
        <button
          onClick={toggleSound}
          className="rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur transition hover:bg-white/15"
          aria-label={muted ? "Enable sound" : "Mute sound"}
        >
          {muted ? "🔇 Sound OFF" : "🔊 Sound ON"}
        </button>
      </div>

      {/* tap to enable */}
      {showTap && (
        <div className="fixed inset-x-0 bottom-24 z-40 px-4 sm:bottom-6">
          <div className="mx-auto max-w-xl">
            <button
              onClick={enableSoundNow}
              className="w-full rounded-3xl border border-white/20 bg-white/10 px-5 py-4 text-left shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur transition hover:bg-white/15"
            >
              <div className="text-sm font-black">🔥 Tap to enable gym sound</div>
              <div className="mt-1 text-xs text-white/70">
                Browsers allow sound only after a user click. You can mute anytime.
              </div>
            </button>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="pt-14">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <GlassCard className="p-8">
              <div className="flex flex-wrap gap-2">
                <Badge hot>🔥 Limited Offer</Badge>
                <Badge>⚡ Instant Join</Badge>
                <Badge>💪 Transformation</Badge>
                <Badge>✅ Free Trial</Badge>
              </div>

              <h1 className="mt-6 text-3xl font-black leading-tight md:text-5xl">
                Choose Your Plan.
                <span className="block text-white/80">Start Your Transformation.</span>
              </h1>

              <p className="mt-4 max-w-2xl text-white/75">
                Clear pricing builds trust and increases membership joins. This
                page is designed to convert fast with pricing, offers, admission
                form, and direct WhatsApp action.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#pricing"
                  className="inline-flex justify-center rounded-2xl bg-white px-6 py-3 font-black text-slate-950 transition hover:bg-white/90"
                >
                  View Pricing
                </a>
                <a
                  href="#admission"
                  className="inline-flex justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-black transition hover:bg-white/15"
                >
                  Admission Form
                </a>
                <a
                  href={buildWhatsAppLink(
                    "Hi! I saw your gym plans page and want membership details and a FREE trial."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-2xl bg-green-500 px-6 py-3 font-black text-white transition hover:bg-green-600"
                >
                  💬 WhatsApp
                </a>
              </div>

              <div className="mt-7 rounded-3xl border border-white/15 bg-white/10 p-6">
                <div className="flex items-center gap-2 font-black">
                  <Icon name="tag" /> Offer Today (Demo)
                </div>
                <p className="mt-2 text-sm text-white/75">
                  Join any plan today and get <b>FREE Diet Guidance (Demo)</b> +{" "}
                  <b>1 Personal Training Session (Demo)</b>.
                </p>

                <div className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-black/20 px-4 py-2 text-sm font-black">
                  <Icon name="clock" /> Offer Ends: This Week
                </div>

                <p className="mt-3 text-xs text-white/60">
                  Demo offer text. Replace with real gym offers.
                </p>
              </div>

              <div className="mt-6 text-sm text-white/85">
                <span className="font-black">For Gym Owners:</span> Website + Billing
                demo in <b>₹5,000</b> (domain/hosting excluded) —{" "}
                <a
                  className="font-black underline"
                  href={buildWhatsAppLink(
                    "Hi! I want a Gym Website + Billing Demo in ₹5000. Please share details."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp for details
                </a>
              </div>
            </GlassCard>

            {/* right: quick conversion box */}
            <GlassCard className="p-8">
              <div className="text-xs font-black uppercase tracking-[0.18em] text-white/70">
                Quick Join
              </div>
              <div className="mt-2 text-2xl font-black">Free Trial Booking</div>
              <p className="mt-2 text-white/75">
                One message is enough. We guide you from day one.
              </p>

              <div className="mt-6 grid gap-3">
                <a
                  href={CALL}
                  className="inline-flex justify-center rounded-2xl bg-white px-6 py-3 font-black text-slate-950 transition hover:bg-white/90"
                >
                  📞 Call Now
                </a>
                <a
                  href={buildWhatsAppLink(
                    "Hi! I want to book a FREE gym trial. Please share available slots."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-2xl bg-green-500 px-6 py-3 font-black text-white transition hover:bg-green-600"
                >
                  💬 WhatsApp Now
                </a>
                <Link
                  href="/projects/gym"
                  className="inline-flex justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-black transition hover:bg-white/15"
                >
                  ← Back Home
                </Link>
              </div>

              <div className="mt-7 rounded-3xl border border-white/15 bg-white/10 p-6">
                <div className="font-black">Call / WhatsApp</div>
                <p className="mt-2 text-sm text-white/80">+91 97524 22686</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="pb-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-black md:text-4xl">Membership Pricing</h2>
              <p className="mt-3 max-w-2xl text-white/75">
                Simple pricing cards help visitors decide faster. Highlighting
                the best-value plan improves conversion.
              </p>
            </div>
            <a
              href="#admission"
              className="inline-flex justify-center rounded-2xl bg-white px-6 py-3 font-black text-slate-950 transition hover:bg-white/90"
            >
              Fill Admission Form
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => {
              const planText = `Hi! I am interested in your ${plan.name} gym plan (${plan.price}). Please share membership details and trial option.`;

              return (
                <GlassCard
                  key={plan.id}
                  className={[
                    "p-7 transition hover:scale-[1.01] hover:bg-white/15",
                    plan.best ? "ring-2 ring-white/30" : "",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-xs font-black text-white/75">{plan.tag}</div>
                    {plan.best ? (
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-black">
                        <span className="inline-block h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                        BEST
                      </div>
                    ) : null}
                  </div>

                  <div className="mt-3 text-xl font-black">{plan.name}</div>
                  <div className="mt-2 text-4xl font-black">{plan.price}</div>

                  <ul className="mt-5 space-y-2 text-sm text-white/80">
                    {plan.perks.map((perk) => (
                      <li key={perk.text} className="flex items-start gap-2">
                        <span className="mt-0.5 text-white">{perk.icon}</span>
                        <span>{perk.text}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-col gap-3">
                    <a
                      href="#admission"
                      className="inline-flex w-full justify-center rounded-2xl bg-white px-4 py-2.5 font-black text-slate-950 transition hover:bg-white/90"
                    >
                      Join {plan.name}
                    </a>
                    <a
                      href={buildWhatsAppLink(planText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full justify-center rounded-2xl border border-white/20 bg-white/10 px-4 py-2.5 font-black transition hover:bg-white/15"
                    >
                      WhatsApp
                    </a>
                  </div>

                  <p className="mt-4 text-xs text-white/60">
                    Demo pricing. Replace with actual gym pricing.
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* OFFER STRIP */}
      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-6">
          <GlassCard className="p-7">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black">
                  <Icon name="gift" /> FREEBIES (DEMO)
                </div>
                <div className="mt-3 text-2xl font-black md:text-3xl">
                  Join Today and Get Bonus Benefits
                </div>
                <p className="mt-2 max-w-2xl text-white/75">
                  Free diet plan + 1 PT session + progress tracking. Replace
                  with real gym offers before delivery.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#admission"
                  className="inline-flex justify-center rounded-2xl bg-white px-6 py-3 font-black text-slate-950 transition hover:bg-white/90"
                >
                  Claim Offer
                </a>
                <a
                  href={buildWhatsAppLink(
                    "Hi! I want to claim the current gym offer and know membership details."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-2xl bg-green-500 px-6 py-3 font-black text-white transition hover:bg-green-600"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ADMISSION FORM */}
      <section id="admission" className="pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-6 lg:grid-cols-2">
            <GlassCard className="p-8">
              <div className="text-xs font-black uppercase tracking-[0.18em] text-white/70">
                Admission Form (Demo)
              </div>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">
                Fill Details. Join Fast.
              </h2>
              <p className="mt-3 text-white/75">
                In real gym deployment, this can submit to WhatsApp, email, or
                CRM. For demo, it is static but designed to look premium.
              </p>

              <form className="mt-7 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input placeholder="Full Name" />
                  <Input placeholder="Mobile Number" type="tel" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Select>
                    <option className="text-slate-900">Select Plan</option>
                    <option className="text-slate-900">Monthly</option>
                    <option className="text-slate-900">Quarterly</option>
                    <option className="text-slate-900">Half-Yearly</option>
                    <option className="text-slate-900">Yearly</option>
                  </Select>

                  <Select>
                    <option className="text-slate-900">Goal</option>
                    <option className="text-slate-900">Fat Loss</option>
                    <option className="text-slate-900">Muscle Gain</option>
                    <option className="text-slate-900">Strength</option>
                    <option className="text-slate-900">General Fitness</option>
                  </Select>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Input placeholder="Age" type="number" />
                  <Select>
                    <option className="text-slate-900">Preferred Batch</option>
                    <option className="text-slate-900">Morning</option>
                    <option className="text-slate-900">Evening</option>
                    <option className="text-slate-900">Any Time</option>
                  </Select>
                </div>

                <textarea
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/60 focus:border-white/30"
                  placeholder="Message / Medical Notes (optional)"
                  rows={4}
                />

                <button
                  type="button"
                  className="rounded-2xl bg-white px-6 py-3 font-black text-slate-950 transition hover:bg-white/90"
                >
                  Submit (Demo)
                </button>

                <a
                  href={buildWhatsAppLink(
                    "Hi! I want membership details and admission help for your gym."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-center font-black transition hover:bg-white/15"
                >
                  Prefer WhatsApp? Click Here
                </a>
              </form>
            </GlassCard>

            <GlassCard className="p-8">
              <div className="text-xs font-black uppercase tracking-[0.18em] text-white/70">
                Why This Works
              </div>
              <div className="mt-2 text-2xl font-black">
                Pricing + Offer + Form = Better Conversion
              </div>

              <div className="mt-6 grid gap-4">
                <GlassCard className="bg-white/08 p-6">
                  <div className="flex items-start gap-3">
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-2">
                      <Icon name="target" />
                    </div>
                    <div>
                      <div className="font-black">Clear Decision Path</div>
                      <div className="mt-1 text-sm text-white/75">
                        Pick plan → claim offer → submit admission → join.
                      </div>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="bg-white/08 p-6">
                  <div className="flex items-start gap-3">
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-2">
                      <Icon name="shield" />
                    </div>
                    <div>
                      <div className="font-black">Trust Builders</div>
                      <div className="mt-1 text-sm text-white/75">
                        Hygiene, guidance, goal tracking, and a strong offer
                        make local users more confident.
                      </div>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="bg-white/08 p-6">
                  <div className="flex items-start gap-3">
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-2">
                      <Icon name="bolt" />
                    </div>
                    <div>
                      <div className="font-black">Fast Contact</div>
                      <div className="mt-1 text-sm text-white/75">
                        Sticky WhatsApp and call buttons reduce drop-offs and
                        increase inquiries.
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>

              <div className="mt-7 rounded-3xl border border-white/15 bg-white/10 p-6">
                <div className="font-black">Call / WhatsApp</div>
                <p className="mt-2 text-sm text-white/80">+91 97524 22686</p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={CALL}
                    className="inline-flex justify-center rounded-2xl bg-white px-5 py-2.5 font-black text-slate-950 transition hover:bg-white/90"
                  >
                    📞 Call Now
                  </a>
                  <a
                    href={buildWhatsAppLink(
                      "Hi! I want membership details and a FREE trial for your gym."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center rounded-2xl bg-green-500 px-5 py-2.5 font-black text-white transition hover:bg-green-600"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>

              <div className="mt-6 text-sm text-white/80">
                <span className="font-black">For Gym Owners:</span> Want this exact
                high-conversion plans page + full site + billing in <b>₹5,000</b>?{" "}
                <a
                  className="font-black underline"
                  href={buildWhatsAppLink(
                    "Hi! I want this gym plans page + full website + billing demo in ₹5000. Please share details."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp me
                </a>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-4 left-0 right-0 z-50 px-4 sm:hidden">
        <GlassCard className="mx-auto flex max-w-md gap-2 p-3">
          <a
            href={CALL}
            className="inline-flex flex-1 justify-center rounded-2xl bg-white px-4 py-3 font-black text-slate-950"
          >
            Call
          </a>
          <a
            href={buildWhatsAppLink(
              "Hi! I want membership details and a FREE trial for your gym."
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