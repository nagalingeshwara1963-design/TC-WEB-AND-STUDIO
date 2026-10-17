"use client";

import React, { useEffect, useRef, useState } from "react";
import { BASE_PATH } from "@/lib/site";

type Status = "idle" | "playing" | "paused" | "ended";

export default function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [isMuted, setIsMuted] = useState(false);

  // Pause when the video scrolls off screen
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !video.paused) video.pause();
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const play = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.ended) video.currentTime = 0;
    video.play().catch(() => {
      // Some browsers block sound without a gesture; retry muted
      video.muted = true;
      setIsMuted(true);
      video.play().catch(() => {});
    });
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused || video.ended) play();
    else video.pause();
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const openFullscreen = () => {
    const video = videoRef.current as any;
    if (!video) return;
    if (video.requestFullscreen) video.requestFullscreen().catch(() => {});
    else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen(); // iPhone Safari
    else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
  };

  const isPlaying = status === "playing";
  const showOverlay = status !== "playing";

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#1c1335] border border-purple-200 shadow-xl shadow-purple-900/10">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        poster={`${BASE_PATH}/videos/intro-poster.jpg`}
        preload="metadata"
        playsInline
        onPlay={() => setStatus("playing")}
        onPause={(e) => setStatus(e.currentTarget.ended ? "ended" : "paused")}
        onEnded={() => setStatus("ended")}
        onClick={togglePlay}
      >
        <source src={`${BASE_PATH}/videos/intro.mp4`} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Big play / replay button */}
      {showOverlay && (
        <button
          type="button"
          onClick={play}
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/25 cursor-pointer"
          aria-label={status === "ended" ? "Replay video" : "Play video"}
        >
          <span className="flex items-center gap-2.5 pl-4 pr-5 h-14 rounded-full bg-white text-[#1c1335] font-bold font-display text-sm shadow-lg">
            {status === "ended" ? (
              <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v6h6M20 20v-6h-6M5.5 15a7 7 0 0012.3 2M18.5 9A7 7 0 006.2 7" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-purple-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5.5v13a1 1 0 001.5.86l10.5-6.5a1 1 0 000-1.72L9.5 4.64A1 1 0 008 5.5z" />
              </svg>
            )}
            {status === "ended" ? "Watch again" : status === "paused" ? "Resume" : "Play intro"}
          </span>
        </button>
      )}

      {/* Controls (shown once the video has started) */}
      {status !== "idle" && (
        <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 z-20 flex items-center justify-between gap-2 pointer-events-none">
          <button
            type="button"
            onClick={togglePlay}
            className="pointer-events-auto inline-flex items-center justify-center w-11 h-11 rounded-xl bg-black/70 hover:bg-black text-white transition-colors cursor-pointer"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5.5v13a1 1 0 001.5.86l10.5-6.5a1 1 0 000-1.72L9.5 4.64A1 1 0 008 5.5z" />
              </svg>
            )}
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleSound}
              className="pointer-events-auto inline-flex items-center gap-2 h-11 px-3.5 rounded-xl bg-black/70 hover:bg-black text-white text-xs sm:text-sm font-bold font-display transition-colors cursor-pointer"
              aria-label={isMuted ? "Turn sound on" : "Mute"}
            >
              {isMuted ? (
                <svg className="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
              <span>{isMuted ? "Tap for sound" : "Mute"}</span>
            </button>

            <button
              type="button"
              onClick={openFullscreen}
              className="pointer-events-auto inline-flex items-center justify-center w-11 h-11 rounded-xl bg-black/70 hover:bg-black text-white transition-colors cursor-pointer"
              aria-label="Watch fullscreen"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
