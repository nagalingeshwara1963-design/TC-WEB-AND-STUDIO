"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { BASE_PATH } from "@/lib/site";

type Status = "idle" | "playing" | "paused" | "ended";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) seconds = 0;
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const btn =
  "inline-flex items-center justify-center w-11 h-11 rounded-xl text-white hover:bg-white/15 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-300";

export default function IntroVideo() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<number | undefined>(undefined);
  const scrubbing = useRef(false);

  const [status, setStatus] = useState<Status>("idle");
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [canSetVolume, setCanSetVolume] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);

  // The video may load its length before React is ready, so read it on mount too
  useEffect(() => {
    const video = videoRef.current;
    if (video && video.readyState >= 1 && Number.isFinite(video.duration)) setDuration(video.duration);
  }, []);

  // iPhones ignore video.volume (hardware buttons only), so only show the slider where it works
  useEffect(() => {
    const v = document.createElement("video");
    v.volume = 0.5;
    setCanSetVolume(v.volume === 0.5);
  }, []);

  // Smooth progress while playing
  useEffect(() => {
    if (status !== "playing") return;
    let raf = 0;
    const tick = () => {
      const video = videoRef.current;
      if (video && !scrubbing.current) setCurrent(video.currentTime);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [status]);

  // Pause when scrolled off screen
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !video.paused) video.pause();
      },
      { threshold: 0.2 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Auto-hide controls while playing
  const showControls = useCallback(() => {
    setControlsVisible(true);
    window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused && !scrubbing.current) setControlsVisible(false);
    }, 2800);
  }, []);

  useEffect(() => {
    if (status !== "playing") {
      setControlsVisible(true);
      window.clearTimeout(hideTimer.current);
    } else {
      showControls();
    }
    return () => window.clearTimeout(hideTimer.current);
  }, [status, showControls]);

  const play = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.ended) video.currentTime = 0;
    video.play().catch(() => {
      // Retry muted if the browser blocks sound
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

  const seekTo = (time: number) => {
    const video = videoRef.current;
    const total = video?.duration || duration;
    if (!video || !total || !Number.isFinite(total)) return;
    const t = Math.min(Math.max(time, 0), total);
    video.currentTime = t;
    setCurrent(t);
  };

  const skip = (delta: number) => {
    seekTo((videoRef.current?.currentTime ?? 0) + delta);
    showControls();
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    if (!video.muted && video.volume === 0) {
      video.volume = 0.5;
      setVolume(0.5);
    }
    setIsMuted(video.muted);
  };

  const changeVolume = (value: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = value;
    video.muted = value === 0;
    setVolume(value);
    setIsMuted(value === 0);
  };

  const openFullscreen = () => {
    const wrap = wrapRef.current as any;
    const video = videoRef.current as any;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else if (wrap?.requestFullscreen) {
      wrap.requestFullscreen().catch(() => {});
    } else if (wrap?.webkitRequestFullscreen) {
      wrap.webkitRequestFullscreen();
    } else if (video?.webkitEnterFullscreen) {
      video.webkitEnterFullscreen(); // iPhone Safari
    }
  };

  // Seek bar: tap or drag (mouse, touch and pen)
  const timeFromPointer = (clientX: number) => {
    const bar = barRef.current;
    if (!bar || !duration) return 0;
    const rect = bar.getBoundingClientRect();
    return Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1) * duration;
  };

  const onBarPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!duration) return;
    scrubbing.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    seekTo(timeFromPointer(e.clientX));
    showControls();
  };

  const onBarPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!scrubbing.current) return;
    seekTo(timeFromPointer(e.clientX));
  };

  const onBarPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!scrubbing.current) return;
    scrubbing.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
    showControls();
  };

  const onBarKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") skip(5);
    else if (e.key === "ArrowLeft") skip(-5);
    else if (e.key === "Home") seekTo(0);
    else if (e.key === "End") seekTo(duration);
    else return;
    e.preventDefault();
    e.stopPropagation();
  };

  // Keyboard shortcuts when the player has focus
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === "INPUT") return;
    const key = e.key.toLowerCase();
    if (key === " " || key === "k") {
      if (target.tagName === "BUTTON" && key === " ") return; // let buttons handle Space
      togglePlay();
    } else if (key === "arrowright") skip(5);
    else if (key === "arrowleft") skip(-5);
    else if (key === "m") toggleMute();
    else if (key === "f") openFullscreen();
    else return;
    e.preventDefault();
  };

  const updateBuffered = () => {
    const video = videoRef.current;
    if (!video || !video.duration || !video.buffered.length) return;
    setBuffered(video.buffered.end(video.buffered.length - 1) / video.duration);
  };

  const progress = duration ? (current / duration) * 100 : 0;
  const isPlaying = status === "playing";
  const overlayVisible = status !== "playing";
  const barsVisible = status !== "idle" && controlsVisible;

  return (
    <div
      ref={wrapRef}
      tabIndex={-1}
      onKeyDown={onKeyDown}
      onPointerMove={(e) => {
        if (e.pointerType === "mouse") showControls();
      }}
      className={`group relative w-full aspect-video rounded-2xl overflow-hidden bg-[#140b26] border border-purple-200 shadow-xl shadow-purple-900/10 outline-none [&:fullscreen]:rounded-none [&:fullscreen]:border-0 ${
        isPlaying && !controlsVisible ? "cursor-none" : ""
      }`}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-contain bg-black"
        poster={`${BASE_PATH}/videos/intro-poster.jpg`}
        preload="metadata"
        playsInline
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onDurationChange={(e) => setDuration(e.currentTarget.duration)}
        onProgress={updateBuffered}
        onTimeUpdate={(e) => {
          if (!scrubbing.current) setCurrent(e.currentTarget.currentTime);
          updateBuffered();
        }}
        onPlay={(e) => {
          if (Number.isFinite(e.currentTarget.duration)) setDuration(e.currentTarget.duration);
          setStatus("playing");
        }}
        onPause={(e) => setStatus(e.currentTarget.ended ? "ended" : "paused")}
        onEnded={() => setStatus("ended")}
        onVolumeChange={(e) => setIsMuted(e.currentTarget.muted)}
        onClick={() => {
          // On touch, the first tap shows the controls; on mouse it toggles play
          if (isPlaying && !controlsVisible) showControls();
          else togglePlay();
        }}
      >
        <source src={`${BASE_PATH}/videos/intro.mp4`} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Big play / resume / replay button */}
      {overlayVisible && (
        <button
          type="button"
          onClick={play}
          className={`absolute inset-x-0 top-0 z-10 flex items-center justify-center bg-black/30 cursor-pointer ${
            status === "idle" ? "bottom-0" : "bottom-[4.5rem]"
          }`}
          aria-label={status === "ended" ? "Replay video" : status === "paused" ? "Resume video" : "Play video"}
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
            {status === "ended" ? "Watch again" : status === "paused" ? "Resume" : "Play our 29s intro"}
          </span>
        </button>
      )}

      {/* Media controls */}
      {status !== "idle" && (
        <div
          className={`absolute inset-x-0 bottom-0 z-20 px-2 sm:px-3 pb-1.5 sm:pb-2 pt-8 bg-gradient-to-t from-black/85 via-black/50 to-transparent transition-opacity duration-300 ${
            barsVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onPointerDown={showControls}
        >
          {/* Seek bar */}
          <div
            ref={barRef}
            role="slider"
            tabIndex={0}
            aria-label="Seek"
            aria-valuemin={0}
            aria-valuemax={Math.round(duration)}
            aria-valuenow={Math.round(current)}
            aria-valuetext={`${formatTime(current)} of ${formatTime(duration)}`}
            onPointerDown={onBarPointerDown}
            onPointerMove={onBarPointerMove}
            onPointerUp={onBarPointerUp}
            onPointerCancel={onBarPointerUp}
            onKeyDown={onBarKeyDown}
            className="relative h-6 flex items-center cursor-pointer touch-none select-none focus-visible:outline-2 focus-visible:outline-amber-300 rounded"
          >
            <div className="relative w-full h-1.5 rounded-full bg-white/25 overflow-hidden">
              <div className="absolute inset-y-0 left-0 bg-white/40" style={{ width: `${buffered * 100}%` }}></div>
              <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-400 to-amber-400" style={{ width: `${progress}%` }}></div>
            </div>
            <div
              className="absolute top-1/2 w-3.5 h-3.5 -mt-[7px] -ml-[7px] rounded-full bg-white shadow"
              style={{ left: `${progress}%` }}
              aria-hidden="true"
            ></div>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between gap-1">
            <div className="flex items-center gap-0.5 sm:gap-1">
              <button type="button" onClick={togglePlay} className={btn} aria-label={isPlaying ? "Pause" : "Play"}>
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
              <button type="button" onClick={() => skip(-5)} className={btn} aria-label="Back 5 seconds">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5 5-5M18 17l-5-5 5-5" />
                </svg>
              </button>
              <button type="button" onClick={() => skip(5)} className={btn} aria-label="Forward 5 seconds">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 7l5 5-5 5" />
                </svg>
              </button>
              <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-mono text-white/90 tabular-nums whitespace-nowrap">
                {formatTime(current)} / {formatTime(duration)}
              </span>
            </div>

            <div className="flex items-center gap-0.5 sm:gap-1">
              <button type="button" onClick={toggleMute} className={btn} aria-label={isMuted ? "Unmute" : "Mute"}>
                {isMuted ? (
                  <svg className="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                )}
              </button>
              {canSetVolume && (
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={isMuted ? 0 : volume}
                  onChange={(e) => changeVolume(Number(e.target.value))}
                  aria-label="Volume"
                  className="hidden sm:block w-20 lg:w-24 accent-amber-400 cursor-pointer"
                />
              )}
              <button type="button" onClick={openFullscreen} className={btn} aria-label="Fullscreen">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
