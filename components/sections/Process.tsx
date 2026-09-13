import React from "react";
import { PROCESS_STEPS } from "@/data/process";

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-[#0B1220] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase font-sans">
              Delivery Process
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
            From technical discovery to live production.
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            A disciplined 6-phase engineering lifecycle designed for speed, clarity, and dependable delivery.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-8 rounded-2xl bg-[#0F1724]/80 border border-white/[0.06] hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-cyan-400">
                    {step.step}
                  </span>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Phase {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-100 mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-cyan-300 font-medium mb-3">
                  {step.subtitle}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-1.5">
                <span className="text-xs font-semibold text-slate-300 block mb-2">
                  Key Deliverables:
                </span>
                {step.deliverables.map((item, idx) => (
                  <div key={idx} className="text-xs text-slate-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
