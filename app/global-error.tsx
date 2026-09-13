"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#080D16] text-[#F8FAFC] antialiased min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center p-8 sm:p-12 rounded-2xl bg-[#0F1724] border border-white/[0.08] shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-sans mb-6">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Critical Error</span>
          </div>

          <h1 className="text-2xl font-bold font-sans text-slate-100 tracking-tight mb-3">
            Application Interruption
          </h1>

          <p className="text-sm text-slate-400 leading-relaxed mb-8">
            A critical rendering error occurred. Please refresh the page to reload the application.
          </p>

          <Button
            variant="primary"
            size="md"
            onClick={() => reset()}
            icon={<RefreshCw className="w-4 h-4" />}
            iconPosition="left"
          >
            Reload Studio
          </Button>
        </div>
      </body>
    </html>
  );
}
