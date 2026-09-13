"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 bg-[#080D16] px-4">
      <div className="max-w-md w-full text-center p-8 sm:p-12 rounded-2xl bg-[#0F1724]/90 border border-white/[0.08] shadow-2xl backdrop-blur-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-sans mb-6">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Application Notice</span>
        </div>

        <h1 className="text-3xl font-extrabold font-sans text-slate-100 tracking-tight mb-3">
          Something went wrong
        </h1>

        <p className="text-sm text-slate-400 leading-relaxed mb-8">
          An unexpected issue occurred while rendering this view. You can retry the action or return to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            variant="primary"
            size="md"
            onClick={() => reset()}
            icon={<RefreshCw className="w-4 h-4" />}
            iconPosition="left"
          >
            Try Again
          </Button>
          <Button
            href="/"
            variant="secondary"
            size="md"
            icon={<Home className="w-4 h-4" />}
            iconPosition="left"
          >
            Home
          </Button>
        </div>
      </div>
    </div>
  );
}
