import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "interactive" | "subtle";
  glow?: "none" | "blue" | "cyan";
  children: React.ReactNode;
}

export function Card({
  variant = "default",
  glow = "none",
  children,
  className,
  ...props
}: CardProps) {
  const base =
    "relative rounded-xl transition-all duration-300 overflow-hidden";

  const variants = {
    default:
      "bg-[#0F1724]/90 border border-white/[0.08] backdrop-blur-sm",
    elevated:
      "bg-[#162234]/90 border border-white/[0.12] shadow-[0_8px_30px_rgb(0,0,0,0.4)] backdrop-blur-md",
    interactive:
      "bg-[#0F1724]/90 border border-white/[0.08] hover:border-cyan-500/40 hover:bg-[#162234]/95 hover:shadow-[0_12px_40px_rgba(6,182,212,0.12)] hover:-translate-y-1 cursor-pointer",
    subtle:
      "bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12]",
  };

  const glows = {
    none: "",
    blue: "shadow-[0_0_30px_-5px_rgba(37,99,235,0.25)] border-blue-500/30",
    cyan: "shadow-[0_0_30px_-5px_rgba(6,182,212,0.25)] border-cyan-500/30",
  };

  return (
    <div
      className={cn(base, variants[variant], glows[glow], className)}
      {...props}
    >
      {/* Subtle top corner gradient highlight */}
      <div className="pointer-events-none absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      {children}
    </div>
  );
}
