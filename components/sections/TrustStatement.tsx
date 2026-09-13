import React from "react";
import { Sparkles, Compass, ShieldCheck, Users } from "lucide-react";

export function TrustStatement() {
  const trustPoints = [
    {
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
      title: "AI that solves real problems",
      description: "We deploy practical AI pipelines and integrations engineered for measurable business utility.",
    },
    {
      icon: <Compass className="w-5 h-5 text-blue-400" />,
      title: "Built with purpose",
      description: "From concept to market in disciplined agile sprints with clear milestones and zero wasted effort.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: "Your product, your code",
      description: "Full repository ownership, documentation, and clean architecture from day one.",
    },
    {
      icon: <Users className="w-5 h-5 text-purple-400" />,
      title: "Built for modern teams",
      description: "Accessible, high-performance software engineered for startups and growing international businesses.",
    },
  ];

  return (
    <section className="py-20 bg-[#0B1220] border-y border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
            Designed for product leaders and growing businesses.
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            Whether launching an MVP, scaling web architecture, or integrating intelligent automation, we build software that performs reliably in the real world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="flex flex-col items-start"
            >
              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] mb-4">
                {point.icon}
              </div>
              <h3 className="text-base font-bold text-slate-100">
                {point.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
