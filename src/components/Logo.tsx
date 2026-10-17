import React from "react";
import { BASE_PATH } from "@/lib/site";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className={`flex items-center justify-center shrink-0 ${dark ? "w-11 h-11 rounded-xl bg-white p-1.5" : "w-12 h-10"}`}>
        <img
          src={`${BASE_PATH}/images/brand/tc-mark.png`}
          alt=""
          width={240}
          height={168}
          className="w-full h-full object-contain"
          decoding="async"
        />
      </span>
      <span className="leading-tight">
        <span className={`block text-base sm:text-lg font-extrabold tracking-tight font-display ${dark ? "text-white" : "text-[#2a1650]"}`}>
          TC Web &amp; Studio
        </span>
        <span className={`block text-[10px] font-bold uppercase tracking-[0.2em] font-mono ${dark ? "text-amber-300" : "text-amber-700"}`}>
          Mysore
        </span>
      </span>
    </span>
  );
}
