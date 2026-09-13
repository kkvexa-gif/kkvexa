import React from "react";
import { TECH_STACK } from "@/data/tech";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function TechStack() {
  return (
    <section className="py-24 bg-[#080D16] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technology Ecosystem"
          title="Battle-tested tools for modern architectures."
          description="We select proven technologies optimized for high developer velocity, type safety, low latency, and infinite cloud scaling."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TECH_STACK.map((category, idx) => (
            <Card
              key={idx}
              variant="default"
              className="p-8 hover:border-white/20 transition-all duration-300"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-100 tracking-tight">
                  {category.category}
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  {category.description}
                </p>
              </div>

              <div className="space-y-4">
                {category.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="p-4 rounded-lg bg-[#162234]/80 border border-white/[0.06] flex items-center justify-between gap-4"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-200">
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {item.description}
                      </div>
                    </div>
                    <Badge variant="cyan" size="sm" className="shrink-0 font-mono">
                      {item.badge}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
