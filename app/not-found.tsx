import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 bg-[#080D16] px-4">
      <div className="max-w-md w-full text-center p-8 sm:p-12 rounded-2xl bg-[#0F1724]/90 border border-white/[0.08] shadow-2xl backdrop-blur-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-sans mb-6">
          <Compass className="w-3.5 h-3.5" />
          <span>Page Not Found</span>
        </div>

        <h1 className="text-6xl font-black font-sans text-slate-100 tracking-tighter mb-4">
          404
        </h1>

        <h2 className="text-xl font-bold text-slate-200 mb-2">
          Route Not Found
        </h2>

        <p className="text-sm text-slate-400 leading-relaxed mb-8">
          The page or resource you requested could not be found. It may have been moved or renamed.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            href="/"
            variant="primary"
            size="md"
            icon={<Home className="w-4 h-4" />}
            iconPosition="left"
          >
            Return to Home
          </Button>
          <Button
            href="/services"
            variant="secondary"
            size="md"
          >
            Explore Services
          </Button>
        </div>
      </div>
    </div>
  );
}
