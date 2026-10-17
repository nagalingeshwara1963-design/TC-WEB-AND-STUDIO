import React from "react";

// Section label shown above headings ("Services", "FAQ"...), as a clear pill badge
export default function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-sm sm:text-[15px] font-bold tracking-wide font-display px-3.5 py-1.5 rounded-full mb-4 border ${
        dark ? "bg-white/10 border-white/20 text-amber-200" : "bg-purple-100 border-purple-200 text-purple-900"
      }`}
    >
      <span className="w-2 h-2 rounded-full bg-amber-500" aria-hidden="true"></span>
      {children}
    </p>
  );
}
