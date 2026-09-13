"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PROJECTS, Project } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Terminal, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "AI Applications", "Web Apps", "SaaS & MVP", "Mobile", "Automation"];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const getBadgeVariant = (badgeType: Project["badgeType"]) => {
    switch (badgeType) {
      case "Concept Showcase":
        return "concept";
      case "Internal Architecture Demo":
        return "internal";
      case "Engineered Prototype":
        return "prototype";
      default:
        return "cyan";
    }
  };

  return (
    <div className="pt-28 pb-16 bg-[#080D16]">
      {/* Header Banner */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal delayMs={0} durationMs={700}>
            <SectionHeading
              isH1
              eyebrow="Selected Work &amp; Case Studies"
              title="Engineered prototypes &amp; reference architectures."
              description="Explore our technical builds demonstrating full-stack scalability, AI integration, low-latency APIs, and offline-first mobile applications."
            />

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4" role="tablist">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-200 border",
                    selectedCategory === cat
                      ? "bg-cyan-500/15 text-cyan-300 border-cyan-500/40 shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)] font-bold"
                      : "bg-[#0F1724] text-slate-400 border-white/[0.08] hover:text-slate-200 hover:border-white/15"
                  )}
                  role="tab"
                  aria-selected={selectedCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <ScrollReveal key={project.id} delayMs={idx * 70} durationMs={600}>
                <Card
                  variant="interactive"
                  className="flex flex-col justify-between p-7 h-full group"
                >
                  <div>
                    {/* Top Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <Badge variant="cyan" size="sm">
                        {project.category}
                      </Badge>
                      <Badge variant={getBadgeVariant(project.badgeType)} size="sm">
                        {project.badgeType}
                      </Badge>
                    </div>

                    {/* Title & Tagline */}
                    <h2 className="text-xl font-bold text-slate-100 tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 mb-6 font-medium leading-relaxed">
                      {project.tagline}
                    </p>

                    {/* Benchmark & Telemetry Mini Box */}
                    <div className="p-4 rounded-xl bg-[#080D16] border border-white/[0.08] mb-6">
                      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/[0.06] text-[11px] font-mono text-slate-400">
                        <span className="flex items-center gap-1.5 text-cyan-400">
                          <Terminal className="w-3.5 h-3.5" /> Benchmarks
                        </span>
                        <span className="text-slate-500">Live Metric</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        {project.visualMockup.metrics.map((metric, mIdx) => (
                          <div key={mIdx} className="bg-white/[0.02] p-2 rounded border border-white/[0.04]">
                            <div className="text-xs font-bold text-slate-100 font-mono">
                              {metric.value}
                            </div>
                            <div className="text-[10px] text-slate-400 mt-0.5 truncate">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Problem / Solution overview */}
                    <div className="space-y-3 text-xs text-slate-400 leading-relaxed mb-6">
                      <div>
                        <span className="font-semibold text-slate-300 block mb-1">
                          Problem Addressed:
                        </span>
                        <p className="line-clamp-2">{project.problem}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-300 block mb-1">
                          Engineered Solution:
                        </span>
                        <p className="line-clamp-2">{project.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack & Deep Link */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech, tIdx) => (
                        <Badge key={tIdx} variant="neutral" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
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
