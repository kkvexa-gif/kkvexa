import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS, Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowLeft, CheckCircle2, Cpu, Terminal, Shield, ArrowRight, Layers } from "lucide-react";

interface CaseStudyProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${project.title} — Technical Case Study`,
    description: project.tagline,
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

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
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Selected Work
        </Link>
      </div>

      {/* Case Study Header */}
      <section className="py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <Badge variant="cyan" size="md">
                {project.category}
              </Badge>
              <Badge variant={getBadgeVariant(project.badgeType)} size="md">
                {project.badgeType}
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-slate-300 leading-relaxed">
              {project.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Technical Telemetry Strip */}
      <section className="py-6 border-y border-white/[0.08] bg-[#0F1724]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.visualMockup.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col items-start">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  {metric.label}
                </span>
                <span className="text-2xl font-mono font-extrabold text-cyan-400 mt-1">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Deep-Dive */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Narrative Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Context & Background */}
              <div className="p-8 rounded-2xl bg-[#0F1724]/90 border border-white/[0.08]">
                <h2 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                  Context &amp; Business Problem
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  <p>{project.context}</p>
                  <p className="p-4 rounded-lg bg-[#162234] border-l-4 border-red-400 text-slate-200">
                    <strong className="text-white block mb-1">Core Constraint:</strong>
                    {project.problem}
                  </p>
                </div>
              </div>

              {/* Engineered Solution */}
              <div className="p-8 rounded-2xl bg-[#0F1724]/90 border border-white/[0.08]">
                <h2 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-blue-400" />
                  Engineering Approach &amp; Solution
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  {project.solution}
                </p>

                <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-300 font-semibold mb-4">
                  Key Architectural Features
                </h3>
                <ul className="space-y-3">
                  {project.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture Summary & Technical Outcomes */}
              <div className="p-8 rounded-2xl bg-[#0F1724]/90 border border-white/[0.08]">
                <h2 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-purple-400" />
                  System Architecture &amp; Scalability
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  {project.architectureSummary}
                </p>

                <div className="p-4 rounded-xl bg-[#080D16] border border-cyan-500/30">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-1">
                    Benchmark / Technical Outcome
                  </span>
                  <p className="text-sm font-medium text-slate-200 font-mono">
                    {project.metricsOrOutcome}
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-8">
              {/* Tech Stack Spec Card */}
              <div className="p-6 rounded-2xl bg-[#0F1724] border border-white/[0.08]">
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-4">
                  Technologies Employed
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t, idx) => (
                    <Badge key={idx} variant="neutral" size="md">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Project Status & Authenticity Notice */}
              <div className="p-6 rounded-2xl bg-[#162234]/70 border border-white/[0.08]">
                <div className="flex items-center gap-2 mb-3 text-cyan-400">
                  <Shield className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">
                    Transparency Notice
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  This case study demonstrates KKVEXA&apos;s architectural patterns and implementation standards. Real client IP is never exposed without explicit authorization.
                </p>
              </div>

              {/* Consultation Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-[#162234] to-[#0F1724] border border-cyan-500/30 text-center">
                <h3 className="text-lg font-bold text-slate-100 mb-2">
                  Need a similar system?
                </h3>
                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  Let&apos;s evaluate your architectural requirements and build a production-grade solution.
                </p>
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  className="w-full"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Start Project Scoping
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
