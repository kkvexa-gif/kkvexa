import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal,
  children,
  className,
  icon,
  iconPosition = "right",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-250 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080D16] active:scale-[0.96] active:opacity-90 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-[0_0_20px_-3px_rgba(6,182,212,0.35)] hover:shadow-[0_0_25px_0_rgba(6,182,212,0.5)] hover:from-blue-500 hover:to-cyan-400 border border-cyan-400/20",
    secondary:
      "bg-[#0F1724] text-slate-100 hover:bg-[#162234] border border-white/10 hover:border-white/20 shadow-sm",
    outline:
      "bg-transparent text-slate-200 border border-white/15 hover:border-cyan-400/50 hover:text-white hover:bg-white/[0.04]",
    ghost:
      "bg-transparent text-slate-300 hover:text-white hover:bg-white/[0.06]",
  };

  const sizes = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
    </>
  );

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], "group", className);

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          aria-disabled={disabled}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} aria-disabled={disabled}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {content}
    </button>
  );
}
