"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { motion } from "framer-motion";
import { Compass, Palette, Rocket, TrendingUp, Sparkles, CheckCircle } from "lucide-react";

const steps = [
  {
    id: "01",
    phase: "Phase 01",
    icon: <Compass className="w-6 h-6" />,
    color: "from-rose-500 to-amber-500",
    title: "Brand Discovery & Market Audit",
    description: "We deep dive into your business unit metrics, competitor landscapes, and customer psychology to define a winning growth roadmap.",
    deliverables: ["Market Research", "Competitor Audit", "Target Personas", "Growth Strategy"]
  },
  {
    id: "02",
    phase: "Phase 02",
    icon: <Palette className="w-6 h-6" />,
    color: "from-amber-400 to-rose-500",
    title: "Creative Concepting & UX Blueprint",
    description: "Our design alchemists prototype high-converting brand identities, ad creatives, user journeys, and sleek digital interfaces.",
    deliverables: ["Brand Identity Kit", "Interactive Wireframes", "Ad Creative Suite", "UX Design System"]
  },
  {
    id: "03",
    phase: "Phase 03",
    icon: <Rocket className="w-6 h-6" />,
    color: "from-purple-500 to-rose-500",
    title: "High-Octane Development & Build",
    description: "Engineering teams transform prototypes into blazing-fast Next.js web platforms, mobile apps, and automated marketing funnels.",
    deliverables: ["Full-Stack Dev", "SEO Infrastructure", "MarTech Integrations", "QA & Load Testing"]
  },
  {
    id: "04",
    phase: "Phase 04",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "from-emerald-400 to-sky-500",
    title: "Growth Hacking & Scale Optimization",
    description: "We launch multi-channel ad campaigns, continuously A/B test conversion funnels, and optimize algorithms for maximum ROI.",
    deliverables: ["Paid Ads Launch", "Conversion Rate Optimization", "Live Analytics Dashboard", "Weekly Growth Sprints"]
  }
];

export function OurProcess() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-500 font-extrabold text-xs uppercase tracking-widest mb-4">
              <Sparkles className="w-4 h-4" />
              <span>How We Deliver Growth</span>
            </div>
          </FadeIn>
          
          <Reveal width="100%">
            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-tight">
              Our Tested 4-Step <span className="gradient-text-coral-amber">Growth Formula.</span>
            </h2>
          </Reveal>
        </div>

        {/* 4 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <FadeIn key={idx} delay={0.15 * idx}>
              <div className="group relative rounded-3xl p-8 bg-card border-2 border-border/80 hover:border-rose-500/50 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full">
                
                {/* Floating Number Badge */}
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${step.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    {step.icon}
                  </div>

                  <span className="text-3xl font-heading font-black text-rose-500/20 group-hover:text-rose-500 transition-colors">
                    {step.id}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-rose-500/10 text-rose-500 inline-block mb-3">
                    {step.phase}
                  </span>

                  <h3 className="text-xl font-heading font-black mb-3 text-foreground group-hover:text-rose-500 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-6 border-t border-border/60 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Key Output</div>
                  {step.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs font-semibold text-foreground/80">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
