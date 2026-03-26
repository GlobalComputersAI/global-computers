"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const WA =
  "https://wa.me/919752422686?text=Hi%20I%20saw%20your%20gym%20website%20demo%20and%20want%20a%20similar%20website%20for%20my%20gym.%20Please%20share%20full%20details.";
const CALL = "tel:+919752422686";

/**
 * IMPORTANT:
 * Your current file is inside:
 * app/projects/gym/videos/gym.mp4
 *
 * For browser URL usage, we are using /projects/gym/videos/gym.mp4
 * BUT in Next.js, app/ is not meant for serving static media directly.
 *
 * So:
 * - route links below are correct
 * - video path below is only okay if your setup is already serving it
 * - if video does not load, move it later to public/projects/gym/videos/gym.mp4
 */
const BG_VIDEO = "/projects/gym/videos/gym.mp4";

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
          ? "border-white/25 bg-white/15 text-white shadow-[0_0_30px_rgba(34,197,94,0.25)]"
          : "border-white/15 bg-white/10 text-white",
      ].join(" ")}
    >
      {children}
    </span>
  );
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

function Icon({
  name,
}: {
  name: "bolt" | "fire" | "shield" | "target" | "heart" | "dumbbell";
}) {
  const common = "h-5 w-5";

  switch (name) {
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
          <path d="M22 2l-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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

    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6 12h12M7.5 8h9M7.5 16h9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

function PunchCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <GlassCard className="p-6 transition hover:scale-[1.01] hover:bg-white/15">
      <div className="flex items-start gap-3">
        <div className="rounded-2xl border border-white/15 bg-white/10 p-2 text-white">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-black text-white">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-white/75">{desc}</p>
        </div>
      </div>
    </GlassCard>
  );
}

function PlanCard({
  name,
  price,
  note,
  best,
}: {
  name: string;
  price: string;
  note: string;
  best?: boolean;
}) {
  return (
    <GlassCard className={["p-6", best ? "ring-2 ring-white/30" : ""].join(" ")}>
      {best ? (
        <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-black text-white">
          <span className="inline-block h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          MOST POPULAR
        </div>
      ) : (
        <div className="text-xs font-bold uppercase tracking-wide text-white/70">
          Membership
        </div>
      )}

      <div className="mt-3 text-lg font-extrabold text-white">{name}</div>
      <div className="mt-2 text-3xl font-black text-white">{price}</div>
      <div className="mt-3 text-sm leading-6 text-white/75">{note}</div>

      <a
        href="#join"
        className="mt-6 inline-flex w-full justify-center rounded-2xl bg-white px-4 py-2.5 font-extrabold text-slate-950 transition hover:bg-white/90"
      >
        Join Now
      </a>

      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex w-full justify-center rounded-2xl border border-white/20 bg-white/10 px-4 py-2.5 font-extrabold text-white transition hover:bg-white/15"
      >
        WhatsApp
      </a>
    </GlassCard>
  );
}

export default function GymHomeClient() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [showTap, setShowTap] = useState(true);

  const stats = useMemo(
    () => [
      { a: "4.9★", b: "Member Rating" },
      { a: "Clean", b: "Hygiene Focus" },
      { a: "Modern", b: "Equipment" },
      { a: "Fast", b: "Lead Response" },
    ],
    []
  );

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.volume = 1;
    v.play().catch(() => {});
  }, []);

  function setVideoMuted(nextMuted: boolean) {
    const v = videoRef.current;
    if (!v) return;

    v.muted = nextMuted;
    setMuted(nextMuted);

    if (!nextMuted) {
      v.volume = 1;
      v.play().catch(() => {});
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

  return (
    <main className="relative min-h-screen text-white">
      <div className="fixed inset-0 -z-20">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          loop
          playsInline
          preload="metadata"
          muted
          aria-label="Gym background video"
        >
          <source src={BG_VIDEO} type="video/mp4" />
        </video>
      </div>

      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/75 via-black/60 to-black/85" />

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-24 -top-24 h-[520px] w-[520px] rounded-full bg-green-500/25 blur-[90px]" />
        <div className="absolute -bottom-24 -right-24 h-[520px] w-[520px] rounded-full bg-blue-500/25 blur-[90px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.10),transparent_40%)]" />
      </div>

      <div className="fixed right-4 top-20 z-50">
        <button
          onClick={toggleSound}
          className="rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur transition hover:bg-white/15"
          aria-label={muted ? "Enable sound" : "Mute sound"}
        >
          {muted ? "🔇 Sound OFF" : "🔊 Sound ON"}
        </button>
      </div>

      {showTap && (
        <div className="fixed inset-x-0 bottom-24 z-40 px-4 sm:bottom-6">
          <div className="mx-auto max-w-xl">
            <button
              onClick={enableSoundNow}
              className="w-full rounded-3xl border border-white/20 bg-white/10 px-5 py-4 text-left shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur transition hover:bg-white/15"
            >
              <div className="text-sm font-black">🔥 Tap to enable gym sound</div>
              <div className="mt-1 text-xs text-white/70">
                Browsers allow sound only after user interaction. You can mute anytime.
              </div>
            </button>
          </div>
        </div>
      )}

      <section className="pt-14">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2">
              <Badge hot>🔥 High Energy</Badge>
              <Badge>⚡ Fast Inquiry</Badge>
              <Badge>💪 Strong Branding</Badge>
              <Badge>🏋️ Premium Gym Look</Badge>
              <Badge>💬 WhatsApp Leads</Badge>
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              Build a Powerful Gym Brand.
              <span className="block text-white/80">
                Get More Trials. More Members. More Trust.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              This premium gym website demo is designed to help fitness centers,
              trainers, and studios attract more local customers with strong
              visuals, clear offers, WhatsApp inquiry flow, and better mobile conversion.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#join"
                className="inline-flex justify-center rounded-2xl bg-white px-6 py-3 font-black text-slate-950 shadow-[0_0_35px_rgba(255,255,255,0.25)] transition hover:bg-white/90"
              >
                🚀 Book Free Trial
              </a>

              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-black transition hover:bg-white/15"
              >
                💬 WhatsApp Now
              </a>

              <Link
                href="/projects/gym/billing"
                className="inline-flex justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-black transition hover:bg-white/15"
              >
                🧾 Billing Demo
              </Link>
            </div>

            <div className="mt-8">
              <GlassCard className="p-4">
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  {stats.map((s) => (
                    <div
                      key={s.b}
                      className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3"
                    >
                      <div className="text-xl font-black">{s.a}</div>
                      <div className="text-white/70">{s.b}</div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            <div className="mt-6 text-sm text-white/85">
              <span className="font-black">For Gym Owners:</span> Website setup starts from{" "}
              <b>₹5,000</b> with WhatsApp inquiry flow and demo billing option.{" "}
              <a
                className="font-black underline"
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get full details on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-black md:text-4xl">
                Why This Gym Website Converts Better
              </h2>
              <p className="mt-3 max-w-2xl text-white/75">
                People join gyms when they feel trust, energy, clarity, and a strong first
                impression. This demo is built around those conversion triggers.
              </p>
            </div>

            <a
              href="#join"
              className="inline-flex justify-center rounded-2xl bg-white px-6 py-3 font-black text-slate-950 transition hover:bg-white/90"
            >
              Start Inquiry
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <PunchCard
              title="Attracts Attention"
              desc="Premium video hero and bold visuals help your gym look modern and serious."
              icon={<Icon name="fire" />}
            />
            <PunchCard
              title="Generates Leads"
              desc="WhatsApp and call buttons make it easy for customers to contact you fast."
              icon={<Icon name="bolt" />}
            />
            <PunchCard
              title="Builds Trust"
              desc="Plans, programs, benefits, and gallery sections make your gym feel reliable."
              icon={<Icon name="shield" />}
            />
            <PunchCard
              title="Clear Offer"
              desc="Visitors understand what you offer without confusion."
              icon={<Icon name="target" />}
            />
            <PunchCard
              title="Mobile Friendly"
              desc="Most leads come from phones, so this design is focused on mobile conversion."
              icon={<Icon name="heart" />}
            />
            <PunchCard
              title="Fast to Launch"
              desc="It can be customized quickly with your gym name, plans, photos, and details."
              icon={<Icon name="dumbbell" />}
            />
          </div>
        </div>
      </section>

      <section id="programs" className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black md:text-4xl">Programs</h2>
              <p className="mt-3 max-w-2xl text-white/75">
                Showcase the key services that make people want to join your gym.
              </p>
            </div>

            <Link
              href="/projects/gym/programs"
              className="hidden rounded-2xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-black transition hover:bg-white/15 md:inline-flex"
            >
              View Full Page
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <PunchCard title="Weight Loss" desc="Fat loss programs with proper routine and guidance." icon={<Icon name="fire" />} />
            <PunchCard title="Muscle Building" desc="Strength and hypertrophy focused workout programs." icon={<Icon name="bolt" />} />
            <PunchCard title="Personal Training" desc="One-to-one coaching for better accountability and results." icon={<Icon name="target" />} />
            <PunchCard title="Functional Training" desc="Core, mobility, endurance, and athletic performance." icon={<Icon name="shield" />} />
            <PunchCard title="Cardio Fitness" desc="HIIT and cardio routines for stamina and fat burn." icon={<Icon name="heart" />} />
            <PunchCard title="Group Workouts" desc="High-energy sessions that improve engagement and retention." icon={<Icon name="fire" />} />
          </div>
        </div>
      </section>

      <section id="plans" className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black md:text-4xl">Membership Plans</h2>
              <p className="mt-3 max-w-2xl text-white/75">
                Clear pricing helps visitors decide faster. These are demo prices.
              </p>
            </div>

            <Link
              href="/projects/gym/plans"
              className="hidden rounded-2xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-black transition hover:bg-white/15 md:inline-flex"
            >
              View Plans Page
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            <PlanCard name="Monthly" price="₹1,500" note="Good for new members starting their journey." />
            <PlanCard name="Quarterly" price="₹4,000" note="Better value for consistency and habit building." />
            <PlanCard name="Half-Yearly" price="₹7,000" note="Strong value and enough time to see real results." best />
            <PlanCard name="Yearly" price="₹12,000" note="Best long-term value for serious members." />
          </div>
        </div>
      </section>

      <section id="gallery" className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black md:text-4xl">Gallery</h2>
              <p className="mt-3 max-w-2xl text-white/75">
                Real gym photos create trust. Replace placeholders with real equipment,
                trainer, and member photos.
              </p>
            </div>

            <Link
              href="/projects/gym/gallery"
              className="hidden rounded-2xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-black transition hover:bg-white/15 md:inline-flex"
            >
              Open Gallery Page
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <GlassCard
                key={i}
                className="aspect-[4/3] flex items-center justify-center p-6 transition hover:bg-white/15"
              >
                <div className="text-center">
                  <div className="text-lg font-black text-white">Gym Photo {i + 1}</div>
                  <div className="mt-1 text-sm text-white/60">Replace with real image</div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <GlassCard className="p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-green-300">
                  For Gym Owners
                </p>
                <h2 className="mt-3 text-3xl font-black md:text-4xl">
                  Want a similar gym website for your own business?
                </h2>
                <p className="mt-4 max-w-2xl text-white/75">
                  We can customize this design with your gym name, logo, plans, programs,
                  gallery, trainers, contact details, WhatsApp inquiry button, and billing workflow.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-white/80">
                  <li>✅ Modern high-conversion homepage</li>
                  <li>✅ Plans, gallery, contact, and free trial sections</li>
                  <li>✅ WhatsApp and call buttons</li>
                  <li>✅ Mobile-friendly design</li>
                  <li>✅ Fast basic setup for local gym owners</li>
                </ul>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center rounded-2xl bg-green-600 px-6 py-3 font-black text-white transition hover:bg-green-700"
                  >
                    💬 Get This Gym Website
                  </a>

                  <Link
                    href="/projects/gym/contact"
                    className="inline-flex justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-black transition hover:bg-white/15"
                  >
                    View Contact Page
                  </Link>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/15 bg-black/20 p-6">
                <div className="text-sm font-black uppercase tracking-wide text-white/70">
                  Starter Offer
                </div>
                <div className="mt-3 text-4xl font-black text-white">₹5,000</div>
                <p className="mt-3 text-sm leading-6 text-white/75">
                  Basic gym website package. Domain, hosting, advanced integrations,
                  payment gateway, and major custom features are extra.
                </p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-white/80">
                  Bonus positioning:
                  <div className="mt-2 font-bold text-white">
                    Website + WhatsApp inquiry flow + demo billing option
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <section id="join" className="py-14">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 lg:grid-cols-2">
          <GlassCard className="p-8">
            <h2 className="text-3xl font-black md:text-4xl">Book Free Trial</h2>
            <p className="mt-3 max-w-xl text-white/75">
              Keep it simple. Direct contact converts best for local fitness businesses.
            </p>

            <div className="mt-6 rounded-3xl border border-white/15 bg-white/10 p-6">
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
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-2xl bg-green-500 px-5 py-2.5 font-black text-white transition hover:bg-green-600"
                >
                  💬 WhatsApp
                </a>
              </div>

              <p className="mt-4 text-xs text-white/60">
                Demo website. Replace with real gym business details for final delivery.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-8">
            <div className="text-xl font-black">Lead Form Demo</div>
            <p className="mt-2 text-sm text-white/75">
              In real deployment, this can connect to WhatsApp, email, Google Sheets, or CRM.
            </p>

            <form className="mt-6 grid gap-4">
              <input
                className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/60 focus:border-white/30"
                placeholder="Your Name"
                aria-label="Your Name"
              />
              <input
                className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/60 focus:border-white/30"
                placeholder="Mobile Number"
                aria-label="Mobile Number"
              />
              <select
                className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none focus:border-white/30"
                aria-label="Inquiry Type"
                defaultValue="Free Trial"
              >
                <option className="text-slate-900">Free Trial</option>
                <option className="text-slate-900">Membership Inquiry</option>
                <option className="text-slate-900">Personal Training</option>
              </select>
              <textarea
                className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/60 focus:border-white/30"
                placeholder="Message"
                rows={4}
                aria-label="Message"
              />
              <button
                type="button"
                className="rounded-2xl bg-white px-6 py-3 font-black text-slate-950 transition hover:bg-white/90"
              >
                Submit Demo Form
              </button>

              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-center font-black transition hover:bg-white/15"
              >
                Prefer WhatsApp? Click Here
              </a>
            </form>
          </GlassCard>
        </div>
      </section>

      <section className="pb-24 pt-4">
        <div className="mx-auto max-w-7xl px-6">
          <GlassCard className="p-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <div className="text-lg font-black">Why local gyms need this</div>
                <p className="mt-3 text-sm leading-6 text-white/75">
                  Many gyms lose leads because they depend only on Instagram, offline referrals,
                  or incomplete Google Business profiles. A proper website increases trust fast.
                </p>
              </div>
              <div>
                <div className="text-lg font-black">What improves conversion</div>
                <p className="mt-3 text-sm leading-6 text-white/75">
                  Strong visuals, simple pricing, free trial CTA, WhatsApp buttons, and real
                  photos usually increase the chance that a visitor contacts the gym.
                </p>
              </div>
              <div>
                <div className="text-lg font-black">Best next step</div>
                <p className="mt-3 text-sm leading-6 text-white/75">
                  Replace placeholder photos, use real testimonials, add trainers,
                  and connect the form to WhatsApp or a lead sheet.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <div className="fixed bottom-4 left-0 right-0 z-50 px-4 sm:hidden">
        <GlassCard className="mx-auto flex max-w-md gap-2 p-3">
          <a
            href={CALL}
            className="inline-flex flex-1 justify-center rounded-2xl bg-white px-4 py-3 font-black text-slate-950"
          >
            Call
          </a>
          <a
            href={WA}
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