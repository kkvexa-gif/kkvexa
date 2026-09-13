import React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck, Clock } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-[#080D16] relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-[#0F1724] to-[#0B1220] border border-white/[0.10] p-8 sm:p-14 md:p-16 text-center shadow-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase font-sans">
              Start a Conversation
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-[1.15] text-balance max-w-3xl mx-auto">
            Have an idea worth building?
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed text-balance">
            Share your technical requirements or product concept. We&apos;ll evaluate your architecture, outline milestones, and provide a clear execution plan.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start a Project
            </Button>
            <Button
              href="/work"
              variant="outline"
              size="lg"
            >
              Explore Our Work
            </Button>
          </div>

          <div className="mt-10 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400 font-sans">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>Initial Response within 24 Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Full IP &amp; Confidentiality Protection</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
