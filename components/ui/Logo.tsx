import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "full" | "horizontal" | "stacked" | "symbol";
  theme?: "dark" | "light" | "auto";
  size?: "sm" | "md" | "lg";
  showDescriptor?: boolean;
  className?: string;
  asLink?: boolean;
}

export function Logo({
  variant = "horizontal",
  theme = "dark",
  size = "md",
  showDescriptor = true,
  className,
  asLink = true,
}: LogoProps) {
  const sizeClasses = {
    sm: { symbol: "w-7 h-7", text: "text-lg tracking-wider", desc: "text-[8px] tracking-[0.2em]" },
    md: { symbol: "w-8 h-8", text: "text-xl tracking-wider", desc: "text-[9px] tracking-[0.22em]" },
    lg: { symbol: "w-11 h-11", text: "text-2xl tracking-wider", desc: "text-[11px] tracking-[0.25em]" },
  }[size];

  const content = (
    <div
      className={cn(
        "inline-flex items-center gap-3 select-none group transition-opacity hover:opacity-90",
        variant === "stacked" && "flex-col items-start gap-2",
        className
      )}
      aria-label="KKVEXA — AI & Software Studio"
    >
      {/* Official KKVEXA Geometric Emblem */}
      <div className={cn("relative shrink-0 flex items-center justify-center", sizeClasses.symbol)}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(6,182,212,0.35)] transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="kkvexa-emblem-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0052FF" />
              <stop offset="50%" stopColor="#0084FF" />
              <stop offset="100%" stopColor="#00D8F6" />
            </linearGradient>
            <linearGradient id="kkvexa-inner-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0052FF" />
              <stop offset="100%" stopColor="#00D8F6" />
            </linearGradient>
          </defs>

          {/* Outer Chevron Frame (Left pointed geometric K-wing) */}
          <path
            d="M58 8 L14 50 L58 92 L76 74 L44 50 L76 26 Z"
            fill="url(#kkvexa-emblem-grad)"
          />
          {/* Inner Geometric Diamond / Square Core Node */}
          <path
            d="M32 50 L46 36 L60 50 L46 64 Z"
            fill={theme === "light" ? "#FFFFFF" : "#080D16"}
            stroke="url(#kkvexa-inner-grad)"
            strokeWidth="5"
          />
        </svg>
      </div>

      {/* Wordmark & Descriptor */}
      {variant !== "symbol" && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center">
            <span
              className={cn(
                "font-extrabold font-sans tracking-[0.12em]",
                theme === "light" ? "text-slate-900" : "text-slate-100",
                sizeClasses.text
              )}
            >
              KKV
              <span className="relative inline-block">
                E
                {/* Brand cyan/blue accent bar across top of 'E' */}
                <span className="absolute top-[2px] left-0 right-0 h-[2.5px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
              </span>
              XA
            </span>
          </div>
          {showDescriptor && (
            <span
              className={cn(
                "font-medium uppercase mt-1 font-sans",
                theme === "light" ? "text-slate-500" : "text-slate-400",
                sizeClasses.desc
              )}
            >
              AI &amp; SOFTWARE STUDIO
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link href="/" className="inline-flex focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-md">
        {content}
      </Link>
    );
  }

  return content;
}
