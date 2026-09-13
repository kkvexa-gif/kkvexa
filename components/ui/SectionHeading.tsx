import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  isH1?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  isH1 = false,
}: SectionHeadingProps) {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  const TitleTag = isH1 ? "h1" : "h2";

  return (
    <div className={cn("flex flex-col max-w-3xl mb-12 md:mb-16", alignment, className)}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase font-mono">
            {eyebrow}
          </span>
        </div>
      )}
      <TitleTag
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight leading-[1.15] text-balance",
          isH1 && "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
        )}
      >
        {title}
      </TitleTag>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed text-balance max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
