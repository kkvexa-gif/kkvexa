import React from "react";
import { Hero } from "@/components/sections/Hero";
import { TrustStatement } from "@/components/sections/TrustStatement";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { WhyKkvexa } from "@/components/sections/WhyKkvexa";
import { Process } from "@/components/sections/Process";
import { TechStack } from "@/components/sections/TechStack";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function HomePage() {
  return (
    <>
      <ScrollReveal delayMs={0} durationMs={700}>
        <Hero />
      </ScrollReveal>

      <ScrollReveal delayMs={100} durationMs={700}>
        <TrustStatement />
      </ScrollReveal>

      <ScrollReveal delayMs={100} durationMs={700}>
        <ServicesSection />
      </ScrollReveal>

      <ScrollReveal delayMs={100} durationMs={700}>
        <FeaturedWork />
      </ScrollReveal>

      <ScrollReveal delayMs={100} durationMs={700}>
        <WhyKkvexa />
      </ScrollReveal>

      <ScrollReveal delayMs={100} durationMs={700}>
        <Process />
      </ScrollReveal>

      <ScrollReveal delayMs={100} durationMs={700}>
        <TechStack />
      </ScrollReveal>

      <ScrollReveal delayMs={100} durationMs={700}>
        <FAQSection />
      </ScrollReveal>

      <ScrollReveal delayMs={100} durationMs={700}>
        <CTASection />
      </ScrollReveal>
    </>
  );
}
