"use client";

import { useEffect, useId, useRef, useState } from "react";

type DemoVideoPopupProps = {
  videoSrc: string;
  buttonLabel?: string;
  title?: string;
  poster?: string;
  className?: string;
  autoOpen?: boolean;
  autoOpenDelay?: number;
  showButton?: boolean;
  storageKey?: string;
  rememberAutoOpen?: boolean;
};

export default function DemoVideoPopup({
  videoSrc,
  buttonLabel = "See Demo",
  title = "Live Demo Video",
  poster = "/images/hero-it-infrastructure.jpg",
  className = "",
  autoOpen = true,
  autoOpenDelay = 800,
  showButton = true,
  storageKey,
  rememberAutoOpen = false,
}: DemoVideoPopupProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const openButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const titleId = useId();
  const resolvedStorageKey = storageKey ?? `demo-popup:${videoSrc}`;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const resetVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
    video.muted = true;

    setIsMuted(true);
    setIsPlaying(false);
  };

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    resetVideo();
    setIsOpen(false);

    requestAnimationFrame(() => {
      openButtonRef.current?.focus();
    });
  };

  const togglePlayPause = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error("Video play/pause failed:", error);
    }
  };

  const toggleMute = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      video.muted = !video.muted;
      setIsMuted(video.muted);

      if (video.paused) {
        await video.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Video mute failed:", error);
    }
  };

  useEffect(() => {
    if (!isMounted) return;
    if (!autoOpen) return;

    if (rememberAutoOpen && typeof window !== "undefined") {
      const alreadyShown = sessionStorage.getItem(resolvedStorageKey) === "true";
      if (alreadyShown) return;
    }

    const timer = window.setTimeout(() => {
      setIsOpen(true);

      if (rememberAutoOpen && typeof window !== "undefined") {
        sessionStorage.setItem(resolvedStorageKey, "true");
      }
    }, autoOpenDelay);

    return () => window.clearTimeout(timer);
  }, [
    isMounted,
    autoOpen,
    autoOpenDelay,
    rememberAutoOpen,
    resolvedStorageKey,
  ]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;

    const startPlayback = async () => {
      try {
        video.currentTime = 0;
        video.muted = true;
        setIsMuted(true);
        await video.play();

        if (!cancelled) {
          setIsPlaying(true);
        }
      } catch (error) {
        console.error("Autoplay failed:", error);
        if (!cancelled) {
          setIsPlaying(false);
        }
      }
    };

    startPlayback();

    return () => {
      cancelled = true;
    };
  }, [isOpen]);

  return (
    <>
      {showButton && (
        <button
          ref={openButtonRef}
          type="button"
          onClick={openPopup}
          aria-label={buttonLabel}
          className={`fixed bottom-4 right-4 z-40 inline-flex items-center justify-center rounded-full border border-white/20 bg-neutral-950/90 px-4 py-3 text-sm font-semibold text-white shadow-2xl backdrop-blur-md transition hover:scale-[1.02] hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-white/40 sm:bottom-6 sm:right-6 sm:px-5 ${className}`}
        >
          {buttonLabel}
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-md"
          onClick={closePopup}
          aria-modal="true"
          role="dialog"
          aria-labelledby={titleId}
        >
          <div className="flex min-h-screen items-center justify-center px-3 py-4 sm:px-6 sm:py-6">
            <div
              className="relative w-full max-w-[340px] overflow-visible rounded-[26px] border border-white/10 bg-neutral-950 shadow-[0_25px_80px_rgba(0,0,0,0.55)] sm:max-w-[360px] md:max-w-[380px]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closePopup}
                aria-label="Close demo video"
                className="absolute right-3 top-3 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/80 text-xl font-bold text-white shadow-lg transition hover:bg-black focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                ✕
              </button>

              <div className="border-b border-white/10 px-4 pb-3 pt-4 pr-16">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">
                  Demo Preview
                </p>
                <h3
                  id={titleId}
                  className="mt-1 text-sm font-semibold text-white sm:text-base"
                >
                  {title}
                </h3>
              </div>

              <div className="bg-black p-2.5 sm:p-3">
                <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-[20px] bg-black sm:max-w-[300px]">
                  <video
                    ref={videoRef}
                    key={videoSrc}
                    playsInline
                    muted
                    autoPlay
                    controls
                    preload="auto"
                    poster={poster}
                    className="aspect-[9/16] w-full bg-black object-contain"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                    onVolumeChange={() => {
                      if (videoRef.current) {
                        setIsMuted(videoRef.current.muted);
                      }
                    }}
                    onError={() => {
                      const video = videoRef.current;
                      console.error("Video error:", video?.error);
                    }}
                  >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              <div className="border-t border-white/10 px-4 py-4">
                <div className="flex flex-col gap-2.5">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={togglePlayPause}
                      className="flex-1 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/40"
                    >
                      {isPlaying ? "Pause" : "Play"}
                    </button>

                    <button
                      type="button"
                      onClick={toggleMute}
                      className="flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                    >
                      {isMuted ? "Unmute" : "Mute"}
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={closePopup}
                    className="w-full rounded-full border border-red-400/20 bg-red-400/10 px-4 py-2.5 text-sm font-semibold text-red-200 transition hover:bg-red-400/15 focus:outline-none focus:ring-2 focus:ring-red-300/30"
                  >
                    Close
                  </button>
                </div>

                <p className="mt-3 text-center text-xs leading-relaxed text-white/50">
                  Optimized for vertical 9:16 demo videos.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}