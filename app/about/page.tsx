import React from "react";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Code2, ShieldCheck, Sparkles, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About KKVEXA — AI & Software Studio",
  description:
    "Learn about KKVEXA's engineering philosophy, mission, core values, and dedication to building intelligent digital products for modern enterprises.",
};

export default function AboutPage() {
  const values = [
    {
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
      title: "Pragmatic Engineering",
      description:
        "We prioritize rock-solid system stability, low-latency APIs, and clean code over chasing fragile hype cycles. Every line of code serves a measurable business objective.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-blue-400" />,
      title: "Intelligent Systems",
      description:
        "We view AI as an amplifier of software capability, not a substitute for rigorous architecture. We embed LLMs and machine learning where they deliver genuine ROI.",
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: "Asynchronous Clarity",
      description:
        "Clear written specifications, concise sprint memos, and shared staging environments ensure friction-free collaboration with international teams across timezones.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Zero Vendor Lock-In",
      description:
        "Our clients retain 100% intellectual property and full repository ownership from day one. We build using open, battle-tested technologies that any team can maintain.",
    },
  ];

  return (
    <div className="pt-28 pb-16 bg-[#080D16]">
      {/* Hero Intro */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-cyan-500/10 blur-[110px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal delayMs={0} durationMs={700}>
            <SectionHeading
              isH1
              eyebrow="Our Story &amp; Philosophy"
              title="Building the digital products of tomorrow."
              description="KKVEXA was founded to bridge the gap between cutting-edge artificial intelligence and dependable, production-ready software engineering."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delayMs={100} durationMs={700}>
            <div className="p-8 sm:p-14 rounded-3xl bg-[#0F1724]/90 border border-white/[0.08] shadow-2xl space-y-8 backdrop-blur-xl">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-3">
                  Mission Statement
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight leading-snug">
                  Engineering software that transforms ambitious ideas into resilient, scalable reality.
                </h2>
              </div>

              <div className="space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Modern software engineering is at an inflection point. With the emergence of intelligent foundation models and distributed cloud primitives, companies no longer have to choose between engineering speed and architectural rigor.
                </p>
                <p>
                  At KKVEXA, we operate as a dedicated engineering partner for founders, product leaders, and enterprise teams. We eliminate organizational friction by building with small, elite sprint teams who possess deep technical intuition across artificial intelligence, modern web frameworks, mobile architectures, and resilient automation pipelines.
                </p>
                <p>
                  Our long-term roadmap expands from bespoke client engineering into creating proprietary software and autonomous AI platforms that empower product teams worldwide.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Engineering Values */}
      <section className="py-20 bg-[#0B1220] border-t border-white/[0.06] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delayMs={0} durationMs={700}>
            <SectionHeading
              eyebrow="Guiding Principles"
              title="How we build and operate."
              description="Our engineering culture is defined by discipline, craftsmanship, transparency, and a relentless focus on client success."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, idx) => (
              <ScrollReveal key={idx} delayMs={idx * 80} durationMs={600}>
                <Card
                  variant="default"
                  className="p-8 flex flex-col justify-start hover:border-white/20 transition-all duration-300 h-full"
                >
                  <div className="p-3.5 rounded-xl bg-[#162234] border border-white/[0.08] w-fit mb-5">
                    {v.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 tracking-tight mb-2.5">
                    {v.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {v.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ScrollReveal delayMs={100} durationMs={700}>
        <CTASection />
      </ScrollReveal>
    </div>
  );
}
