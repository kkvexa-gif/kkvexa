"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle2, AlertCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ToastProps {
  show: boolean;
  type: "success" | "error" | "info";
  title: string;
  message: string;
  referenceId?: string;
  duration?: number; // ms, default 4500
  onClose: () => void;
}

export function ToastNotification({
  show,
  type = "success",
  title,
  message,
  referenceId,
  duration = 4500,
  onClose,
}: ToastProps) {
  const [visible, setVisible] = useState(false);
  const [animatingOut, setAnimatingOut] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
      setAnimatingOut(false);

      const hideTimer = setTimeout(() => {
        setAnimatingOut(true);
        const exitTimer = setTimeout(() => {
          setVisible(false);
          onClose();
        }, 400); // match transition duration
        return () => clearTimeout(exitTimer);
      }, duration);

      return () => clearTimeout(hideTimer);
    } else {
      setVisible(false);
      setAnimatingOut(false);
    }
  }, [show, duration, onClose]);

  if (!visible) return null;

  const isSuccess = type === "success";
  const isError = type === "error";

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-lg shadow-2xl rounded-2xl p-4 sm:p-5 backdrop-blur-2xl transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] border pointer-events-auto overflow-hidden",
        animatingOut
          ? "opacity-0 -translate-y-6 scale-95"
          : "opacity-100 translate-y-0 scale-100",
        isSuccess &&
        "bg-[#0A1322]/95 border-cyan-500/40 text-slate-100 shadow-[0_10px_40px_-10px_rgba(6,182,212,0.35)]",
        isError &&
        "bg-[#1A0D12]/95 border-red-500/40 text-slate-100 shadow-[0_10px_40px_-10px_rgba(239,68,68,0.35)]",
        !isSuccess &&
        !isError &&
        "bg-[#0F1724]/95 border-blue-500/40 text-slate-100 shadow-[0_10px_40px_-10px_rgba(59,130,246,0.35)]"
      )}
    >
      <div className="flex items-start gap-3.5">
        {/* Status Icon */}
        <div
          className={cn(
            "p-2 rounded-xl shrink-0 mt-0.5",
            isSuccess && "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30",
            isError && "bg-red-500/15 text-red-400 border border-red-500/30",
            !isSuccess && !isError && "bg-blue-500/15 text-blue-400 border border-blue-500/30"
          )}
        >
          {isSuccess && <CheckCircle2 className="w-5 h-5 animate-pulse" />}
          {isError && <AlertCircle className="w-5 h-5" />}
        </div>

        {/* Text Content */}
        <div className="flex-1 pr-2 min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="font-bold text-sm text-slate-100 tracking-tight">
              {title}
            </h4>
            {referenceId && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-semibold">
                {referenceId}
              </span>
            )}
          </div>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            {message}
          </p>
        </div>

        {/* Close button */}
        <button
          onClick={() => {
            setAnimatingOut(true);
            setTimeout(() => {
              setVisible(false);
              onClose();
            }, 300);
          }}
          className="p-1 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-white/10 transition-colors shrink-0"
          aria-label="Dismiss notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Dynamic Animated Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10 overflow-hidden">
        <div
          className={cn(
            "h-full w-full origin-left animate-toast-progress",
            isSuccess && "bg-gradient-to-r from-cyan-400 to-blue-500",
            isError && "bg-gradient-to-r from-red-500 to-amber-500",
            !isSuccess && !isError && "bg-gradient-to-r from-blue-400 to-cyan-400"
          )}
          style={{
            animationDuration: `${duration}ms`,
            animationTimingFunction: "linear",
            animationFillMode: "forwards",
          }}
        />
      </div>
    </div>
  );
}
