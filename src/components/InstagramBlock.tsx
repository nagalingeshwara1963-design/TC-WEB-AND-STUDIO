import React from "react";
import { InstagramIcon } from "./Icons";
import Eyebrow from "./Eyebrow";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site";

export default function InstagramBlock() {
  return (
    <section aria-labelledby="instagram-heading" className="py-14 sm:py-16 border-b border-purple-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
        <div className="rounded-3xl bg-gradient-to-r from-purple-50 via-white to-amber-50 border border-purple-200 p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <Eyebrow>Our latest work</Eyebrow>
            <h2 id="instagram-heading" className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-[#180f2d]">
              See our reels and shoots on Instagram
            </h2>
            <p className="mt-2 text-[#5e5377]">New work goes up on @{INSTAGRAM_HANDLE} first.</p>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-xl bg-[#2a1650] hover:bg-[#3b1f6e] text-white font-bold font-display transition-colors w-full md:w-auto shrink-0"
          >
            <InstagramIcon className="w-5 h-5" />
            Follow @{INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </section>
  );
}
