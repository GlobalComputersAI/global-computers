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

function Chip({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-black backdrop-blur transition",
        active
          ? "border-white/30 bg-white/20 text-white shadow-[0_0_30px_rgba(34,197,94,0.20)]"
          : "border-white/15 bg-white/10 text-white/90 hover:bg-white/15",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function Icon({
  name,
}: {
  name:
    | "fire"
    | "bolt"
    | "target"
    | "shield"
    | "heart"
    | "dumbbell"
    | "run"
    | "move"
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

    case "run":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M13 5a2 2 0 1 0 0.001 0z" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 20l2-6 3-2 2 2M10 11l2-3 3 1 1 3-3 2-2 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "move":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2v20M2 12h20M7 7l-5 5 5 5M17 7l5 5-5 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
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

type Program = {
  id: string;
  title: string;
  goal: "Fat Loss" | "Strength" | "Muscle" | "Cardio" | "Mobility";
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  schedule: string;
  highlights: string[];
  icon: React.ReactNode;
};

export default function ProgramsPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [showTap, setShowTap] = useState(true);

  const [filter, setFilter] = useState<
    "All" | "Fat Loss" | "Strength" | "Muscle" | "Cardio" | "Mobility"
  >("All");

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

  const programs: Program[] = useMemo(
    () => [
      {
        id: "fatloss-hiit",
        title: "NO-LIMITS HIIT",
        goal: "Fat Loss",
        level: "Intermediate",
        duration: "45 min",
        schedule: "Mon–Sat",
        highlights: ["Fat burn circuits", "Core finisher", "Progress tracking"],
        icon: <Icon name="fire" />,
      },
      {
        id: "strength-power",
        title: "Power Strength",
        goal: "Strength",
        level: "Intermediate",
        duration: "60 min",
        schedule: "Mon / Wed / Fri",
        highlights: ["Compound lifts", "Strength PR goals", "Coach form checks"],
        icon: <Icon name="bolt" />,
      },
      {
        id: "muscle-hypertrophy",
        title: "Muscle Builder",
        goal: "Muscle",
        level: "Advanced",
        duration: "70 min",
        schedule: "Mon–Sat",
        highlights: ["Hypertrophy splits", "Pump-focused sets", "Recovery tips"],
        icon: <Icon name="dumbbell" />,
      },
      {
        id: "cardio-endurance",
        title: "Cardio Endurance",
        goal: "Cardio",
        level: "Beginner",
        duration: "40 min",
        schedule: "Daily",
        highlights: ["Stamina build", "Low-impact options", "Heart health"],
        icon: <Icon name="heart" />,
      },
      {
        id: "mobility-flex",
        title: "Mobility & Flex",
        goal: "Mobility",
        level: "Beginner",
        duration: "30 min",
        schedule: "Tue / Thu / Sat",
        highlights: ["Injury prevention", "Better posture", "Joint strength"],
        icon: <Icon name="shield" />,
      },
      {
        id: "goal-transform",
        title: "90-Day Transformation",
        goal: "Muscle",
        level: "Intermediate",
        duration: "60 min",
        schedule: "Mon–Sat",
        highlights: ["Goal plan", "Weekly check-ins", "Before/after tracking"],
        icon: <Icon name="target" />,
      },
    ],
    []
  );

  const visiblePrograms = useMemo(() => {
    if (filter === "All") return programs;
    return programs.filter((program) => program.goal === filter);
  }, [filter, programs]);

  return (
    <main className="relative min-h-screen text-white">
      {/* FULL PAGE VIDEO BG */}
      <div className="fixed inset-0 -z-20">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          loop
          playsInline
          preload="metadata"
          muted
          aria-label="Gym programs background video"
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

      {/* tap to enable sound */}
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
          <GlassCard className="p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="text-xs font-black uppercase tracking-[0.18em] text-white/70">
                  Programs
                </div>
                <h1 className="mt-2 text-3xl font-black leading-tight md:text-5xl">
                  Pick Your Goal.
                  <span className="block text-white/80">
                    Start Today. Stay Consistent.
                  </span>
                </h1>
                <p className="mt-3 max-w-2xl text-white/75">
                  Clear programs, simple structure, and direct inquiry flow help
                  visitors decide faster and contact the gym with less confusion.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#list"
                  className="inline-flex justify-center rounded-2xl bg-white px-6 py-3 font-black text-slate-950 transition hover:bg-white/90"
                >
                  View Programs
                </a>
                <a
                  href={buildWhatsAppLink(
                    "Hi! I saw your gym programs page and want details about membership and available programs."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-black transition hover:bg-white/15"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              <Chip active={filter === "All"} onClick={() => setFilter("All")}>
                All
              </Chip>
              <Chip
                active={filter === "Fat Loss"}
                onClick={() => setFilter("Fat Loss")}
              >
                <Icon name="fire" /> Fat Loss
              </Chip>
              <Chip
                active={filter === "Strength"}
                onClick={() => setFilter("Strength")}
              >
                <Icon name="bolt" /> Strength
              </Chip>
              <Chip
                active={filter === "Muscle"}
                onClick={() => setFilter("Muscle")}
              >
                <Icon name="dumbbell" /> Muscle
              </Chip>
              <Chip
                active={filter === "Cardio"}
                onClick={() => setFilter("Cardio")}
              >
                <Icon name="heart" /> Cardio
              </Chip>
              <Chip
                active={filter === "Mobility"}
                onClick={() => setFilter("Mobility")}
              >
                <Icon name="move" /> Mobility
              </Chip>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* LIST */}
      <section id="list" className="pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visiblePrograms.map((program) => {
              const inquiryText = `Hi! I want details about the "${program.title}" program. Please share timing, fee, and whether I can book a trial.`;

              return (
                <GlassCard
                  key={program.id}
                  className="p-7 transition hover:scale-[1.01] hover:bg-white/15"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-2 text-white">
                      {program.icon}
                    </div>
                    <div className="text-right text-xs font-black uppercase tracking-wide text-white/70">
                      {program.level}
                    </div>
                  </div>

                  <h3 className="mt-4 text-xl font-black">{program.title}</h3>

                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-black text-white/85">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1">
                      <Icon name="target" /> {program.goal}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1">
                      <Icon name="clock" /> {program.duration}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1">
                      <Icon name="run" /> {program.schedule}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2 text-sm text-white/80">
                    {program.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span>✅</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-col gap-3">
                    <Link
                      href="/projects/gym/contact"
                      className="inline-flex w-full justify-center rounded-2xl bg-white px-4 py-2.5 font-black text-slate-950 transition hover:bg-white/90"
                    >
                      Join This Program
                    </Link>

                    <a
                      href={buildWhatsAppLink(inquiryText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full justify-center rounded-2xl border border-white/20 bg-white/10 px-4 py-2.5 font-black transition hover:bg-white/15"
                    >
                      WhatsApp Inquiry
                    </a>
                  </div>
                </GlassCard>
              );
            })}
          </div>

          {/* bottom conversion */}
          <div id="join" className="mt-10">
            <GlassCard className="p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="text-xs font-black uppercase tracking-[0.18em] text-white/70">
                    Join Now
                  </div>
                  <div className="mt-2 text-2xl font-black md:text-3xl">
                    Book a Free Trial and Start Today
                  </div>
                  <p className="mt-2 max-w-2xl text-white/75">
                    Fast conversion flow works best for local gyms. Call or send
                    a WhatsApp message and confirm your slot quickly.
                  </p>
                  <p className="mt-3 text-sm text-white/80">+91 97524 22686</p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
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
                    💬 WhatsApp
                  </a>
                  <Link
                    href="/projects/gym"
                    className="inline-flex justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-black transition hover:bg-white/15"
                  >
                    ← Back Home
                  </Link>
                </div>
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
              "Hi! I want to know more about your gym programs and membership."
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