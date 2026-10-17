import React from "react";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-700 via-purple-600 to-amber-600 flex items-center justify-center text-white font-extrabold text-base font-display shrink-0">
        TC
      </span>
      <span className="leading-tight">
        <span className={`block text-base sm:text-lg font-extrabold tracking-tight font-display ${dark ? "text-white" : "text-[#1c1335]"}`}>
          TC Web &amp; Studio
        </span>
        <span className={`block text-[10px] font-bold uppercase tracking-[0.2em] font-mono ${dark ? "text-amber-300" : "text-amber-700"}`}>
          Mysuru
        </span>
      </span>
    </span>
  );
}
