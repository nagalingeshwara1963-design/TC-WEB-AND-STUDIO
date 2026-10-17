"use client";

import React, { useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading";
import { BASE_PATH } from "@/lib/site";

const CLIENTS = [
  { name: "Saaraswath IAS/KAS Academy", file: "saaraswath.webp" },
  { name: "Jain Autocars", file: "jain-autocars.webp" },
  { name: "Manikanta Nursery and Farm", file: "manikanta.webp" },
  { name: "Soulfull Learning", file: "soulfull.webp" },
  { name: "Samvruddhi Housing Loans", file: "samvruddhi.webp" },
  { name: "Darjeeling Momos", file: "darjeeling-momos.webp" },
  { name: "Vinutha Flower Decorations", file: "vinutha.webp" },
];

// Copies of the list so the row can loop seamlessly on wide screens
const COPIES = 4;
const SPEED = 30; // pixels per second
const RESUME_AFTER = 3000; // ms after the visitor stops interacting

function ClientLogo({ name, file, hidden = false }: { name: string; file: string; hidden?: boolean }) {
  return (
    <li className="w-32 sm:w-36 px-2 shrink-0 flex flex-col items-center text-center" aria-hidden={hidden || undefined}>
      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-white border border-purple-200/80 pointer-events-none">
        <img
          src={`${BASE_PATH}/images/clients/${file}`}
          alt={hidden ? "" : `${name} logo`}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          draggable={false}
          width={112}
          height={112}
        />
      </div>
      <span className="mt-2.5 text-xs font-semibold text-[#3c3252] leading-snug">{name}</span>
    </li>
  );
}

export default function Clients() {
  const rowRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pausedUntil = useRef(0);
  const hovering = useRef(false);
  const drag = useRef<{ x: number; left: number; moved: boolean } | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Width of one full copy of the list
  const loopWidth = () => (rowRef.current ? rowRef.current.scrollWidth / COPIES : 0);

  // Keep the scroll position inside the middle copies so it never runs out
  const wrap = () => {
    const row = rowRef.current;
    const w = loopWidth();
    if (!row || !w) return;
    if (row.scrollLeft >= w * 2) row.scrollLeft -= w;
    else if (row.scrollLeft < w * 0.5) row.scrollLeft += w;
  };

  const pause = () => {
    pausedUntil.current = performance.now() + RESUME_AFTER;
  };

  // Auto-scroll loop
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    row.scrollLeft = loopWidth();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let raf = 0;
    let last = performance.now();
    let pos = row.scrollLeft;
    const tick = (now: number) => {
      const dt = Math.min(now - last, 64) / 1000;
      last = now;
      const idle = !hovering.current && !drag.current && now > pausedUntil.current;
      if (idle) {
        pos += SPEED * dt;
        const w = loopWidth();
        if (w && pos >= w * 2) pos -= w;
        row.scrollLeft = pos;
      } else {
        pos = row.scrollLeft;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Arrow buttons
  const scrollByCards = (direction: 1 | -1) => {
    const row = rowRef.current;
    if (!row) return;
    pause();
    wrap();
    row.scrollBy({ left: direction * 144 * 2, behavior: "smooth" });
  };

  // Mouse drag (touch uses native swipe scrolling)
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !rowRef.current) return;
    drag.current = { x: e.clientX, left: rowRef.current.scrollLeft, moved: false };
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current || !rowRef.current) return;
    const dx = e.clientX - drag.current.x;
    if (Math.abs(dx) > 3) drag.current.moved = true;
    rowRef.current.scrollLeft = drag.current.left - dx;
    wrap();
    if (rowRef.current.scrollLeft !== drag.current.left - dx) {
      drag.current = { x: e.clientX, left: rowRef.current.scrollLeft, moved: true };
    }
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
    drag.current = null;
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
    pause();
  };

  // "View all" popup
  const openAll = () => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    document.documentElement.style.overflow = "hidden";
  };
  const closeAll = () => dialogRef.current?.close();

  return (
    <section id="clients" className="py-16 sm:py-20 border-b border-purple-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
          <div className="[&>div]:mb-0">
            <SectionHeading eyebrow="Our clients" title="Brands we've worked with" />
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByCards(-1)}
              className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-purple-200 bg-white text-purple-800 hover:bg-purple-50 transition-colors cursor-pointer"
              aria-label="Scroll clients left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByCards(1)}
              className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-purple-200 bg-white text-purple-800 hover:bg-purple-50 transition-colors cursor-pointer"
              aria-label="Scroll clients right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={openAll}
              className="inline-flex items-center justify-center min-h-[44px] px-4 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-sm font-bold font-display transition-colors cursor-pointer"
            >
              View all clients
            </button>
          </div>
        </div>
      </div>

      {/* Moving row: auto-scrolls, swipe on touch, drag with the mouse */}
      <div className="reveal-on-scroll">
        <div
          ref={rowRef}
          className={`client-row overflow-x-auto overscroll-x-contain ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          onMouseEnter={() => (hovering.current = true)}
          onMouseLeave={() => {
            hovering.current = false;
            pause();
          }}
          onTouchStart={pause}
          onTouchMove={pause}
          onTouchEnd={() => {
            pause();
            wrap();
          }}
          onWheel={pause}
          onScroll={() => {
            if (performance.now() < pausedUntil.current) wrap();
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onFocus={pause}
          role="region"
          aria-label="Client logos, scroll sideways to see more"
          tabIndex={0}
        >
          <ul className="flex w-max py-1">
            {Array.from({ length: COPIES }).flatMap((_, copy) =>
              CLIENTS.map((c) => <ClientLogo key={`${c.file}-${copy}`} {...c} hidden={copy > 0} />)
            )}
          </ul>
        </div>
      </div>

      {/* View all popup */}
      <dialog
        ref={dialogRef}
        aria-labelledby="all-clients-title"
        onClose={() => (document.documentElement.style.overflow = "")}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeAll();
        }}
        className="m-auto w-[min(56rem,calc(100%-2rem))] max-h-[calc(100dvh-2rem)] rounded-3xl p-0 bg-white backdrop:bg-[#1c1335]/70 backdrop:backdrop-blur-sm"
      >
        <div className="p-5 sm:p-8">
          <div className="flex items-center justify-between gap-4 mb-6">
            <h2 id="all-clients-title" className="text-2xl font-extrabold text-[#180f2d] font-display">
              All our clients
            </h2>
            <button
              type="button"
              onClick={closeAll}
              className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-purple-200 text-[#1c1335] hover:bg-purple-50 cursor-pointer"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-6">
            {CLIENTS.map((c) => (
              <li key={c.file} className="flex flex-col items-center text-center">
                <div className="w-full max-w-[9rem] aspect-square rounded-2xl overflow-hidden bg-white border border-purple-200/80">
                  <img
                    src={`${BASE_PATH}/images/clients/${c.file}`}
                    alt={`${c.name} logo`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span className="mt-2.5 text-sm font-semibold text-[#3c3252] leading-snug">{c.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </section>
  );
}
