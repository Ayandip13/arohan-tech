"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { id: "01", title: "Discover", description: "Deep dive into your business goals, target audience, and market landscape to form a rock-solid strategy." },
  { id: "02", title: "Plan", description: "Architecting the technical foundation and mapping out the user journey with precise wireframes and timelines." },
  { id: "03", title: "Execute", description: "Our engineering and design teams bring the vision to life with clean code and pixel-perfect UI." },
  { id: "04", title: "Optimize", description: "Rigorous testing, SEO audits, and performance tuning to ensure flawless delivery across all devices." },
  { id: "05", title: "Grow", description: "Launching data-driven marketing campaigns to scale your product and maximize user acquisition." }
];

export function OurProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-32 bg-background relative" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-24">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">The Methodology</h2>
          </Reveal>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Progress Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2 hidden md:block" />
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-primary -translate-x-1/2 hidden md:block origin-top rounded-full shadow-[0_0_15px_rgba(var(--primary),0.8)]"
            style={{ height: lineHeight }}
          />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, idx) => (
              <FadeIn key={idx} direction={idx % 2 === 0 ? "left" : "right"} delay={0.2}>
                <div className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  
                  {/* Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-card border-4 border-background flex items-center justify-center shadow-lg z-10 hidden md:flex">
                    <span className="text-sm font-bold text-primary">{step.id}</span>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                    <div className="glass p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-colors">
                      <span className="text-primary font-bold text-lg mb-2 block md:hidden">{step.id}</span>
                      <h3 className="text-2xl font-heading font-bold mb-4">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  <div className="hidden md:block w-1/2" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
