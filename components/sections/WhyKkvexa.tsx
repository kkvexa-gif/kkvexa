import React from "react";
import { Terminal, Shield, Zap, RefreshCw, Cpu, GitBranch } from "lucide-react";

export function WhyKkvexa() {
  const differentiators = [
    {
      title: "Engineering-Led Studio",
      description:
        "You work directly with the developers building your software. No layers of non-technical account managers — just clear, direct technical collaboration.",
    },
    {
      title: "Practical AI Implementation",
      description:
        "We focus on practical AI use cases — smart document search, workflow automation, and custom model integrations that solve real business problems.",
    },
    {
      title: "100% Code & IP Ownership",
      description:
        "You retain complete ownership of all repositories, architecture designs, and deployment configurations from day one. Zero vendor lock-in.",
    },
    {
      title: "Transparent Sprint Delivery",
      description:
        "Regular progress demos, live staging previews, and clear communication keep your project moving forward without surprises.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#080D16] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Editorial Header */}
          <div className="lg:col-span-5 flex flex-col items-start sticky top-28">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase font-sans">
                Why KKVEXA
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
              The engineering partner for ambitious digital products.
            </h2>
            <p className="mt-6 text-base text-slate-400 leading-relaxed">
              We combine fast startup execution with reliable engineering practices to build software that scales cleanly as your business grows.
            </p>
          </div>

          {/* Right Editorial Points */}
          <div className="lg:col-span-7 divide-y divide-white/[0.08]">
            {differentiators.map((diff, index) => (
              <div key={index} className="py-8 first:pt-0 last:pb-0 group">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-xs font-bold text-cyan-400">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {diff.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed pl-8">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
