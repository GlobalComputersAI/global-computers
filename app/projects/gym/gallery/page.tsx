"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const OWNER_PHONE = "+919752422686";
const CALL = `tel:${OWNER_PHONE}`;
const BASE_WA = "https://wa.me/919752422686";

// Put your Instagram page here
const IG_URL = "https://www.instagram.com/";

// Current gym demo route-style asset path
const BG_VIDEO = "/projects/gym/videos/gym.mp4";

type Shot = {
  src: string;
  tag: string;
  title: string;
};

function buildWhatsAppLink(text: string) {
  return `${BASE_WA}?text=${encodeURIComponent(text)}`;
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
    | "camera"
    | "ig"
    | "bolt"
    | "fire"
    | "chevL"
    | "chevR"
    | "close"
    | "play";
}) {
  const common = "h-5 w-5";

  switch (name) {
    case "camera":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 7h3l2-2h6l2 2h3v14H4V7z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M12 18a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );

    case "ig":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 17a5 5 0 1 0-5-5 5 5 0 0 0 5 5z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M17.5 6.5h.01"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
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

    case "chevL":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M15 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "chevR":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "close":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M18 6L6 18M6 6l12 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "play":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M8 5l12 7-12 7V5z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return null;
  }
}

function Chip({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-2xl border px-4 py-2 text-sm font-black backdrop-blur transition",
        active
          ? "border-white/30 bg-white/20 text-white"
          : "border-white/15 bg-white/10 text-white/85 hover:bg-white/15",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export default function GalleryPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [showTap, setShowTap] = useState(true);

  const [filter, setFilter] = useState<string>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const shots: Shot[] = useMemo(
    () => [
      { src: "/gallery/1.jpg", tag: "Workout", title: "Strength Zone" },
      { src: "/gallery/2.jpg", tag: "Workout", title: "Heavy Day" },
      { src: "/gallery/3.jpg", tag: "Equipment", title: "Modern Machines" },
      { src: "/gallery/4.jpg", tag: "Trainers", title: "Trainer Guidance" },
      { src: "/gallery/5.jpg", tag: "Transformation", title: "Before / After" },
      { src: "/gallery/6.jpg", tag: "Workout", title: "Cardio Power" },
      { src: "/gallery/7.jpg", tag: "Equipment", title: "Dumbbell Rack" },
      { src: "/gallery/8.jpg", tag: "Trainers", title: "Form & Safety" },
      { src: "/gallery/9.jpg", tag: "Transformation", title: "Results" },
    ],
    []
  );

  const tags = useMemo(() => {
    const unique = Array.from(new Set(shots.map((shot) => shot.tag)));
    return ["All", ...unique];
  }, [shots]);

  const filteredShots = useMemo(() => {
    if (filter === "All") return shots;
    return shots.filter((shot) => shot.tag === filter);
  }, [shots, filter]);

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

  function next() {
    if (activeIndex === null) return;
    setActiveIndex((index) => {
      if (index === null) return null;
      return (index + 1) % filteredShots.length;
    });
  }

  function prev() {
    if (activeIndex === null) return;
    setActiveIndex((index) => {
      if (index === null) return null;
      return (index - 1 + filteredShots.length) % filteredShots.length;
    });
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (activeIndex === null) return;

      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, filteredShots.length]);

  const activeShot = activeIndex === null ? null : filteredShots[activeIndex];

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
          aria-label="Gym gallery background video"
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
                <Badge hot>
                  <Icon name="camera" /> Gallery
                </Badge>
                <Badge>
                  <Icon name="fire" /> Energy
                </Badge>
                <Badge>
                  <Icon name="bolt" /> Motivation
                </Badge>
                <Badge>📸 Real Proof</Badge>
              </div>

              <h1 className="mt-6 text-3xl font-black leading-tight md:text-5xl">
                See The Vibe.
                <span className="block text-white/80">Feel The Energy.</span>
              </h1>

              <p className="mt-4 max-w-2xl text-white/75">
                Gallery builds trust quickly. Add real gym photos, trainers,
                transformations, and workout atmosphere to convert more trials
                and memberships.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#grid"
                  className="inline-flex justify-center rounded-2xl bg-white px-6 py-3 font-black text-slate-950 transition hover:bg-white/90"
                >
                  View Gallery
                </a>
                <a
                  href={buildWhatsAppLink(
                    "Hi! I saw your gym demo gallery and want a FREE trial and membership details."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-2xl bg-green-500 px-6 py-3 font-black text-white transition hover:bg-green-600"
                >
                  💬 WhatsApp Trial
                </a>
                <Link
                  href="/projects/gym/plans"
                  className="inline-flex justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-black transition hover:bg-white/15"
                >
                  View Plans
                </Link>
              </div>

              <div className="mt-7 rounded-3xl border border-white/15 bg-white/10 p-6">
                <div className="font-black">Quick Tip</div>
                <p className="mt-2 text-sm text-white/75">
                  Replace demo images with real gym photos like machines,
                  trainers, members, and before/after results. This page becomes
                  much stronger for conversion.
                </p>
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <div className="text-xs font-black uppercase tracking-[0.18em] text-white/70">
                Fast Contact
              </div>
              <div className="mt-2 text-2xl font-black">Free Trial Booking</div>
              <p className="mt-2 text-white/75">
                Tap WhatsApp or call. One click. No confusion.
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
                    "Hi! I saw your gym gallery and want to book a FREE trial."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-2xl bg-green-500 px-6 py-3 font-black text-white transition hover:bg-green-600"
                >
                  💬 WhatsApp Now
                </a>
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-black transition hover:bg-white/15"
                >
                  <span className="inline-flex items-center gap-2">
                    <Icon name="ig" /> Instagram
                  </span>
                </a>
                <Link
                  href="/projects/gym"
                  className="inline-flex justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-black transition hover:bg-white/15"
                >
                  ← Back Home
                </Link>
              </div>

              <p className="mt-5 text-xs text-white/60">
                Instagram section below shows how you can connect reels,
                highlights, and gym updates to this page.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section id="grid" className="pb-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-black md:text-4xl">Photo Grid</h2>
              <p className="mt-3 max-w-2xl text-white/75">
                Click any image to open lightbox. You can use arrow keys to move
                left or right.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Chip
                  key={tag}
                  active={filter === tag}
                  onClick={() => setFilter(tag)}
                >
                  {tag}
                </Chip>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredShots.map((shot, index) => (
              <button
                key={`${shot.src}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group text-left"
              >
                <GlassCard className="overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={shot.src}
                      alt={shot.title}
                      className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
                      onError={(event) => {
                        const img = event.currentTarget;
                        img.style.display = "none";
                        const parent = img.parentElement;
                        if (parent) parent.classList.add("bg-white/10");
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-90" />

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-black">
                        <Icon name="camera" />
                        {shot.tag}
                      </div>
                      <div className="mt-2 text-lg font-black">{shot.title}</div>
                      <div className="mt-1 inline-flex items-center gap-2 text-sm text-white/75">
                        <Icon name="play" />
                        Click to view
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </button>
            ))}
          </div>

          <div className="mt-8 text-xs text-white/60">
            If images are not visible, add your photos in <b>/public/gallery</b>{" "}
            and update the array in this page.
          </div>
        </div>
      </section>

      {/* INSTAGRAM SECTION */}
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <GlassCard className="p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black">
                  <Icon name="ig" /> Instagram Reels (Demo)
                </div>
                <div className="mt-3 text-2xl font-black md:text-3xl">
                  Post Reels = More Joins
                </div>
                <p className="mt-2 max-w-2xl text-white/75">
                  Add your Instagram link, reels highlights, transformations,
                  and trainer clips. This builds trust and helps generate daily
                  leads.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-2xl bg-white px-6 py-3 font-black text-slate-950 transition hover:bg-white/90"
                >
                  Open Instagram
                </a>
                <a
                  href={buildWhatsAppLink(
                    "Hi! I saw your gym gallery and want a FREE trial."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-2xl bg-green-500 px-6 py-3 font-black text-white transition hover:bg-green-600"
                >
                  💬 WhatsApp Trial
                </a>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Transformation Reel",
                  note: "Before/after clips convert quickly and create strong proof.",
                },
                {
                  title: "Trainer Tips Reel",
                  note: "Form tips build trust and show authority.",
                },
                {
                  title: "Gym Vibe Reel",
                  note: "Music, energy, and atmosphere help attract more joins.",
                },
              ].map((item) => (
                <GlassCard
                  key={item.title}
                  className="p-6 transition hover:scale-[1.01] hover:bg-white/15"
                >
                  <div className="text-xs font-black uppercase tracking-[0.18em] text-white/70">
                    Reel Idea
                  </div>
                  <div className="mt-2 text-lg font-black">{item.title}</div>
                  <p className="mt-2 text-sm text-white/75">{item.note}</p>

                  <a
                    href={IG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full justify-center rounded-2xl border border-white/20 bg-white/10 px-4 py-2.5 font-black transition hover:bg-white/15"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Icon name="ig" /> View on Instagram
                    </span>
                  </a>
                </GlassCard>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-white/15 bg-white/10 p-6">
              <div className="font-black">Pro Tip</div>
              <p className="mt-2 text-sm text-white/75">
                Record 10 short clips of 10 to 15 seconds and post daily. Keep
                plans and trial links in your bio. This can produce regular
                leads.
              </p>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* LIGHTBOX */}
      {activeShot && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveIndex(null);
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="w-full max-w-5xl">
              <GlassCard className="overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 bg-black/20 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-black">
                      <Icon name="camera" />
                      {activeShot.tag}
                    </span>
                    <div className="text-sm font-black">{activeShot.title}</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={prev}
                      className="rounded-2xl border border-white/20 bg-white/10 p-2 transition hover:bg-white/15"
                      aria-label="Previous"
                    >
                      <Icon name="chevL" />
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      className="rounded-2xl border border-white/20 bg-white/10 p-2 transition hover:bg-white/15"
                      aria-label="Next"
                    >
                      <Icon name="chevR" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveIndex(null)}
                      className="rounded-2xl border border-white/20 bg-white/10 p-2 transition hover:bg-white/15"
                      aria-label="Close"
                    >
                      <Icon name="close" />
                    </button>
                  </div>
                </div>

                <div className="bg-black/40">
                  <img
                    src={activeShot.src}
                    alt={activeShot.title}
                    className="max-h-[78vh] w-full object-contain"
                  />
                </div>

                <div className="flex flex-col gap-3 border-t border-white/10 bg-black/20 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-xs text-white/70">
                    Tips: <b>ESC</b> close • <b>←</b>/<b>→</b> move
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={CALL}
                      className="inline-flex justify-center rounded-2xl bg-white px-5 py-2.5 font-black text-slate-950 transition hover:bg-white/90"
                    >
                      📞 Call
                    </a>
                    <a
                      href={buildWhatsAppLink(
                        "Hi! I saw your gym gallery and want a FREE trial."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center rounded-2xl bg-green-500 px-5 py-2.5 font-black text-white transition hover:bg-green-600"
                    >
                      💬 WhatsApp Trial
                    </a>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      )}

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
              "Hi! I saw your gym gallery and want a FREE trial."
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