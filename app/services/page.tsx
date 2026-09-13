import React from "react";
import type { Metadata } from "next";
import { SERVICES } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Bot, Globe, Smartphone, Rocket, Cpu, Network, ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Services & Capabilities",
  description:
    "Explore KKVEXA's specialized engineering capabilities across AI integration, web applications, cross-platform mobile apps, SaaS MVP engineering, and business automation.",
};

export default function ServicesPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Bot":
        return <Bot className="w-8 h-8 text-cyan-400" />;
      case "Globe":
        return <Globe className="w-8 h-8 text-blue-400" />;
      case "Smartphone":
        return <Smartphone className="w-8 h-8 text-purple-400" />;
      case "Rocket":
        return <Rocket className="w-8 h-8 text-emerald-400" />;
      case "Cpu":
        return <Cpu className="w-8 h-8 text-amber-400" />;
      case "Network":
        return <Network className="w-8 h-8 text-cyan-300" />;
      default:
        return <Bot className="w-8 h-8 text-cyan-400" />;
    }
  };

  return (
    <div className="pt-28 pb-16 bg-[#080D16]">
      {/* Header Banner */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal delayMs={0} durationMs={700}>
            <SectionHeading
              isH1
              eyebrow="Specialized Capabilities"
              title="Full-Stack Engineering & AI Systems"
              description="We build software architectures that solve complex business bottlenecks, scale seamlessly under load, and deliver measurable operational return."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Services List Deep-Dive */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={service.id} delayMs={index * 60} durationMs={600}>
              <div
                id={service.slug}
                className="scroll-mt-28 rounded-2xl bg-[#0F1724]/90 border border-white/[0.08] p-8 sm:p-12 shadow-2xl relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  {/* Left Column: Title & Overview */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3.5 rounded-xl bg-[#162234] border border-white/[0.10] shadow-md">
                          {getIcon(service.iconName)}
                        </div>
                        <div>
                          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold block">
                            Capability 0{index + 1}
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-base text-slate-300 leading-relaxed mb-6">
                        {service.fullDescription}
                      </p>

                      {/* Problem Solved Callout */}
                      <div className="p-4 rounded-xl bg-[#162234]/80 border-l-4 border-cyan-400 border-y border-r border-white/[0.06] mb-6">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 block mb-1">
                          Operational Problem Addressed
                        </span>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {service.problemSolved}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Button
                        href="/contact"
                        variant="primary"
                        size="md"
                        icon={<ArrowRight className="w-4 h-4" />}
                      >
                        Inquire About {service.title.split(" ")[0]}
                      </Button>
                    </div>
                  </div>

                  {/* Right Column: Deliverables & What We Build */}
                  <div className="lg:col-span-6 space-y-6">
                    {/* What We Build */}
                    <div className="p-6 rounded-xl bg-[#080D16] border border-white/[0.08]">
                      <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-200 mb-4">
                        What KKVEXA Builds
                      </h3>
                      <ul className="space-y-3">
                        {service.whatWeBuild.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables & Technologies */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-5 rounded-xl bg-[#080D16] border border-white/[0.08]">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                          Deliverables
                        </h4>
                        <ul className="space-y-2">
                          {service.deliverables.map((del, idx) => (
                            <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-5 rounded-xl bg-[#080D16] border border-white/[0.08]">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {service.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="neutral" size="sm">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <ScrollReveal delayMs={100} durationMs={700}>
        <CTASection />
      </ScrollReveal>
    </div>
  );
}
