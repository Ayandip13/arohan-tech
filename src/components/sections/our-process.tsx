"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { Compass, Palette, Rocket, TrendingUp, Sparkles } from "lucide-react";
import { GRADIENT_PRESETS } from "@/config/theme-colors";

const steps = [
  {
    id: "01",
    phase: "Phase 01",
    icon: <Compass className="w-4 h-4" />,
    color: GRADIENT_PRESETS.primary,
    title: "Discovery & Strategy",
    description: "Deep dive into business metrics, competitor landscapes, and customer psychology to define a winning growth roadmap.",
    deliverables: ["Market Audit", "Target Personas"]
  },
  {
    id: "02",
    phase: "Phase 02",
    icon: <Palette className="w-4 h-4" />,
    color: GRADIENT_PRESETS.secondary,
    title: "Creative & Copy Blueprint",
    description: "Our design studio prototypes high-converting brand identity assets, video hooks, social ad creatives, and sleek landing pages.",
    deliverables: ["Brand Kit", "Ad Creative Suite"]
  },
  {
    id: "03",
    phase: "Phase 03",
    icon: <Rocket className="w-4 h-4" />,
    color: GRADIENT_PRESETS.purple,
    title: "Campaign & Web Build",
    description: "Engineers build high-speed Next.js web platforms while marketing specialists configure Meta & Google ad tracking pixels.",
    deliverables: ["Next.js App", "Pixel Tracking"]
  },
  {
    id: "04",
    phase: "Phase 04",
    icon: <TrendingUp className="w-4 h-4" />,
    color: GRADIENT_PRESETS.emerald,
    title: "Optimization & Scaling",
    description: "Launch multichannel ad campaigns, continuously A/B test conversion funnels, and optimize budgets for maximum ROAS.",
    deliverables: ["Paid Ads Launch", "Weekly Growth Sprints"]
  }
];

export function OurProcess() {
  return (
    <section className="py-28 lg:py-36 bg-background relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 text-rose-500 font-extrabold text-xs uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>How We Deliver Growth</span>
            </div>
          </FadeIn>
          
          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight leading-tight">
              Our Tested 4-Step <span className="gradient-text-coral-amber">Growth Strategy.</span>
            </h2>
          </Reveal>
        </div>

        {/* 4 Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, idx) => (
            <FadeIn key={idx} delay={0.1 * idx}>
              <div className="group relative rounded-2xl p-5 bg-card border border-border/80 hover:border-rose-500/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
                
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${step.color} text-white flex items-center justify-center shadow-sm`}>
                      {step.icon}
                    </div>

                    <span className="text-2xl font-heading font-black text-rose-500/30 group-hover:text-rose-500 transition-colors">
                      {step.id}
                    </span>
                  </div>

                  <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-500 inline-block mb-2">
                    {step.phase}
                  </span>

                  <h3 className="text-base font-heading font-black mb-2 text-foreground group-hover:text-rose-500 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-3 border-t border-border/60">
                  <div className="flex flex-wrap gap-1">
                    {step.deliverables.map((item, dIdx) => (
                      <span key={dIdx} className="px-2 py-0.5 rounded bg-muted/60 text-[10px] font-semibold text-foreground/80">
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
