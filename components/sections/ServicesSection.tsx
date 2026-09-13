"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section id="services" className="py-24 md:py-32 bg-[#080D16] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase font-sans">
                Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
              Software engineered for real business needs.
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <Button
              href="/services"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              All Service Specifications
            </Button>
          </div>
        </div>

        {/* Editorial Interactive Rows */}
        <div className="divide-y divide-white/[0.08]">
          {SERVICES.map((service, index) => {
            const isHovered = hoveredIndex === index;
            const numberFormatted = `0${index + 1}`;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                className={cn(
                  "py-8 md:py-10 transition-all duration-300 group cursor-pointer relative",
                  isHovered ? "bg-white/[0.02] px-6 -mx-6 rounded-2xl" : "px-0"
                )}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Number */}
                  <div className="lg:col-span-1 text-sm font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                    {numberFormatted}
                  </div>

                  {/* Title & Key Deliverables preview */}
                  <div className="lg:col-span-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {service.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-400 border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-5">
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="lg:col-span-2 flex items-center justify-end">
                    <Link
                      href={`/services#${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 group-hover:text-cyan-300 transition-all duration-200"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
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
