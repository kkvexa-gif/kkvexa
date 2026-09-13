import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "blue" | "cyan" | "outline" | "concept" | "internal" | "prototype" | "neutral";
  size?: "sm" | "md";
  children: React.ReactNode;
}

export function Badge({
  variant = "cyan",
  size = "sm",
  children,
  className,
  ...props
}: BadgeProps) {
  const base =
    "inline-flex items-center font-medium rounded-full tracking-wide transition-colors";

  const variants = {
    blue: "bg-blue-500/10 text-blue-400 border border-blue-500/25",
    cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/25",
    outline: "bg-transparent text-slate-300 border border-white/15",
    concept: "bg-amber-500/10 text-amber-300 border border-amber-500/25",
    internal: "bg-purple-500/10 text-purple-300 border border-purple-500/25",
    prototype: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/25",
    neutral: "bg-white/[0.06] text-slate-300 border border-white/10",
  };

  const sizes = {
    sm: "text-[11px] px-2.5 py-0.5 gap-1.5",
    md: "text-xs px-3 py-1 gap-2",
  };

  return (
    <span className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </span>
  );
}
