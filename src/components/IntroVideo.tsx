"use client";

import React, { useRef, useState } from "react";

export default function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    if (!video.muted) video.play().catch(() => {});
    setIsMuted(video.muted);
  };

  const openFullscreen = () => {
    const video = videoRef.current as any;
    if (!video) return;
    if (video.webkitEnterFullscreen) {
      // Native iOS Safari on iPhones
      video.webkitEnterFullscreen();
    } else if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  };

  return (
    <div id="studio-reel" className="mt-16 sm:mt-20 lg:mt-24 w-full max-w-6xl xl:max-w-7xl mx-auto flex flex-col items-center justify-center">
      {/* Video Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-900 bg-purple-100 border border-purple-200 px-4 py-1.5 rounded-full mb-3 shadow-sm">
          <span className="inline-block text-amber-500">✦</span>
          <span>Official 4K Studio Commercial</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#180f2d] font-display tracking-tight leading-tight">
          Watch TC Web & Studio <span className="text-gradient-purple-gold">In Action</span>
        </h2>
        <p className="text-xs sm:text-base text-[#4e4368] mt-2 font-sans max-w-2xl mx-auto">
          A direct look into the cinematic lighting, high-energy pacing, and conversion design we craft for businesses.
        </p>
      </div>

      {/* Cinema Box */}
      <div className="w-full relative bg-white/95 rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] p-2 sm:p-4 lg:p-6 xl:p-7 border-2 border-purple-200/90 shadow-[0_20px_60px_-15px_rgba(109,40,217,0.20)] overflow-hidden">
        {/* Widescreen 16:9 Video Player */}
        <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl lg:rounded-[1.75rem] overflow-hidden bg-black border border-purple-200/50 shadow-2xl">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={`${process.env.NEXT_PUBLIC_BASE_PATH}/videos/intro.mp4`} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>

          {/* Top-Left Tag */}
          <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-20 flex items-center gap-2 pointer-events-none">
            <span className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-lg sm:rounded-xl bg-black/70 backdrop-blur-md text-[10px] sm:text-xs font-mono font-bold text-white border border-white/20 flex items-center gap-2 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span>TC STUDIO COMMERCIAL • 29s</span>
            </span>
          </div>

          {/* Bottom Control Bar */}
          <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 z-20 flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={openFullscreen}
              className="min-h-[40px] sm:min-h-[44px] px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-black/75 hover:bg-black text-white backdrop-blur-md border border-white/20 text-xs sm:text-sm font-bold font-display flex items-center gap-1.5 sm:gap-2 transition-colors shadow-lg cursor-pointer"
              aria-label="View Fullscreen"
              title="Watch Fullscreen"
            >
              <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
              <span className="hidden sm:inline">Fullscreen</span>
            </button>

            <button
              type="button"
              onClick={toggleSound}
              className={`min-h-[40px] sm:min-h-[44px] px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-purple-800 hover:bg-purple-900 text-white backdrop-blur-md border text-xs sm:text-sm font-bold font-display flex items-center gap-2 transition-colors shadow-xl cursor-pointer ${isMuted ? "border-purple-400/40" : "border-emerald-400"}`}
              aria-label="Toggle video sound"
            >
              {isMuted ? (
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path>
                </svg>
              ) : (
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
                </svg>
              )}
              <span>{isMuted ? "Tap for Sound" : "Mute Audio"}</span>
            </button>
          </div>
        </div>

        {/* Bottom Status Strip */}
        <div className="mt-3.5 px-3.5 py-2.5 rounded-xl bg-purple-50/70 border border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#5e5377]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-purple-950 font-display">TC Web & Studio Commercial Ad (29s)</span>
            <span className="hidden md:inline text-slate-400">•</span>
            <span className="hidden md:inline font-mono text-[11px] text-slate-600">Full HD 1080p • 100% In-House Production</span>
          </div>
          <span className="text-[11px] font-mono text-purple-800 bg-white px-3 py-1 rounded-md border border-purple-200 font-semibold">
            Auto-loops in mute • Tap to unmute audio
          </span>
        </div>
      </div>
    </div>
  );
}
