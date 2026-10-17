import React from "react";
import Eyebrow from "./Eyebrow";

export default function SectionHeading({
  eyebrow,
  title,
  center = false,
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`mb-10 sm:mb-12 ${center ? "text-center mx-auto" : ""} max-w-2xl`}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight font-display ${dark ? "text-white" : "text-[#180f2d]"}`}>
        {title}
      </h2>
    </div>
  );
}
