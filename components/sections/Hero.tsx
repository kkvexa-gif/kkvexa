import React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, Database, Cpu, CheckCircle2, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#080D16]">
      {/* Very Subtle Background Grid & Ambient Soft Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Hero Left Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Clean Studio Descriptor */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase font-sans">
                AI &amp; Software Studio
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.12] text-balance">
              Building intelligent software for{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                ambitious businesses.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl text-balance">
              We design and build AI-powered applications, web platforms, mobile products, and automation that help businesses move forward.
            </p>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
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

            {/* Credibility Notes without fake stats */}
            <div className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-6 w-full max-w-lg text-slate-400">
              <div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Approach
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  Engineering-First
                </div>
              </div>
              <div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Timeline
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  Agile Sprints
                </div>
              </div>
              <div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Ownership
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  100% Client IP
                </div>
              </div>
            </div>
          </div>

          {/* Hero Right Column: Human Product Workspace Visual */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-lg relative">
              {/* Product Workspace Canvas */}
              <div className="relative rounded-2xl bg-[#0F1724] border border-white/[0.12] p-6 shadow-2xl backdrop-blur-xl">
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                      K
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-100">Document Intelligence Demo</div>
                      <div className="text-[11px] text-slate-400">Intelligent Document Extraction</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Preview
                  </span>
                </div>

                {/* Workflow Cards */}
                <div className="space-y-3.5">
                  {/* Module 1: Ingestion */}
                  <div className="p-3.5 rounded-xl bg-[#162234] border border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                        <Database className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-200">Document &amp; File Ingestion</div>
                        <div className="text-[11px] text-slate-400">PDFs, spreadsheets &amp; form intake</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-medium text-slate-400">
                      Uploaded
                    </span>
                  </div>

                  {/* Module 2: AI Parsing & Synthesis */}
                  <div className="p-3.5 rounded-xl bg-[#162234] border border-cyan-500/40 shadow-[0_0_20px_-5px_rgba(6,182,212,0.15)] flex items-center justify-between relative overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-400" />
                    <div className="flex items-center gap-3 pl-1">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-100 flex items-center gap-1.5">
                          Semantic RAG &amp; Extraction
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-medium">Active</span>
                        </div>
                        <div className="text-[11px] text-slate-300">Custom embeddings &amp; schema mapping</div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  </div>

                  {/* Module 3: Connected Integration */}
                  <div className="p-3.5 rounded-xl bg-[#162234] border border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-200">API &amp; Webhook Dispatch</div>
                        <div className="text-[11px] text-slate-400">Automated sync to your database</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-medium text-slate-400">
                      Synchronized
                    </span>
                  </div>
                </div>

                {/* Bottom Status Row */}
                <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
                  <span>Structured Schema Output</span>
                  <span className="text-cyan-400 font-medium">Validated JSON ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
