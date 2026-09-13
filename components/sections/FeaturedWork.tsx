import React from "react";
import Link from "next/link";
import { PROJECTS, Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ArrowUpRight, CheckCircle2, Layers } from "lucide-react";

export function FeaturedWork() {
  const featured = PROJECTS.slice(0, 3);

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
    <section id="work" className="py-24 md:py-32 bg-[#0B1220] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase font-sans">
                Selected Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
              Demonstrating real engineering capability.
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <Button
              href="/work"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              All Case Studies ({PROJECTS.length})
            </Button>
          </div>
        </div>

        {/* Large Project Showcases */}
        <div className="space-y-20">
          {featured.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center p-8 sm:p-12 rounded-3xl bg-[#0F1724]/90 border border-white/[0.08] shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-300"
              >
                {/* Left Text Description */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-between ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-xs font-bold text-slate-400">
                        PROJECT 0{index + 1}
                      </span>
                      <span className="text-slate-600">•</span>
                      <Badge variant="cyan" size="sm">
                        {project.category}
                      </Badge>
                      <Badge variant={getBadgeVariant(project.badgeType)} size="sm">
                        {project.badgeType}
                      </Badge>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-3 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-medium">
                      {project.tagline}
                    </p>

                    <div className="space-y-3 mb-8 text-xs sm:text-sm text-slate-400">
                      <div>
                        <strong className="text-slate-200 block mb-1">Problem Addressed:</strong>
                        <p>{project.problem}</p>
                      </div>
                      <div>
                        <strong className="text-slate-200 block mb-1">Engineered Solution:</strong>
                        <p>{project.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Case Study <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Visual Product Mockup */}
                <div
                  className={`lg:col-span-6 w-full ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="rounded-2xl bg-[#080D16] border border-white/[0.10] p-6 shadow-inner relative overflow-hidden">
                    {/* Header of Preview */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                      </div>
                      <span className="text-xs font-sans text-slate-400 font-medium">
                        {project.title.split("—")[0].trim()}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    </div>

                    {/* Interactive UI Mockup Elements */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-3">
                        {project.visualMockup.metrics.map((m, idx) => (
                          <div key={idx} className="p-3 rounded-lg bg-[#162234] border border-white/[0.06] text-center">
                            <div className="text-xs text-slate-400">{m.label}</div>
                            <div className="text-sm font-bold text-slate-100 mt-0.5">{m.value}</div>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 rounded-xl bg-[#162234]/80 border border-white/[0.06]">
                        <div className="text-xs font-semibold text-slate-300 mb-2 flex items-center gap-2">
                          <Layers className="w-3.5 h-3.5 text-cyan-400" />
                          Key Architectural Highlights
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-400">
                          {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
