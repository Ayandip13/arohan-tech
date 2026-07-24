"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { Compass, Palette, Rocket, TrendingUp, Sparkles, CheckCircle } from "lucide-react";

const steps = [
  {
    id: "01",
    phase: "Phase 01",
    icon: <Compass className="w-5 h-5" />,
    color: "from-rose-500 to-amber-500",
    title: "Brand Discovery & Audit",
    description: "We deep dive into your business metrics, competitor landscapes, and customer psychology to define a winning growth strategy.",
    deliverables: ["Market Audit", "Target Personas", "Campaign Roadmap"]
  },
  {
    id: "02",
    phase: "Phase 02",
    icon: <Palette className="w-5 h-5" />,
    color: "from-amber-400 to-rose-500",
    title: "Creative & Copy Blueprint",
    description: "Our design studio prototypes high-converting brand identity assets, video hooks, social ad creatives, and sleek landing pages.",
    deliverables: ["Brand Identity Kit", "Ad Creative Suite", "High-Converting Copy"]
  },
  {
    id: "03",
    phase: "Phase 03",
    icon: <Rocket className="w-5 h-5" />,
    color: "from-purple-500 to-rose-500",
    title: "Campaign & Web Launch",
    description: "Engineers build responsive web platforms while marketing specialists configure Meta/Google ad tracking pixels and campaign setups.",
    deliverables: ["Next.js Web Build", "Pixel & Event Tracking", "Ad Campaign Setup"]
  },
  {
    id: "04",
    phase: "Phase 04",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "from-emerald-400 to-sky-500",
    title: "Optimization & Scaling",
    description: "We launch multichannel ad campaigns, continuously A/B test conversion funnels, and optimize budgets for maximum ROAS.",
    deliverables: ["Paid Ads Launch", "Conversion Funnel QA", "Weekly Growth Sprints"]
  }
];

export function OurProcess() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-rose-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-500 font-extrabold text-xs uppercase tracking-widest mb-3">
              <Sparkles className="w-4 h-4" />
              <span>How We Deliver Growth</span>
            </div>
          </FadeIn>
          
          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight leading-tight">
              Our Tested 4-Step <span className="gradient-text-coral-amber">Growth Strategy.</span>
            </h2>
          </Reveal>
        </div>

        {/* 4 Step Process Grid - Compact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <FadeIn key={idx} delay={0.1 * idx}>
              <div className="group relative rounded-3xl p-6 bg-card border-2 border-border/80 hover:border-rose-500/50 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full">
                
                {/* Floating Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${step.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                    {step.icon}
                  </div>

                  <span className="text-2xl font-heading font-black text-rose-500/30 group-hover:text-rose-500 transition-colors">
                    {step.id}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-500 inline-block mb-2">
                    {step.phase}
                  </span>

                  <h3 className="text-lg font-heading font-black mb-2 text-foreground group-hover:text-rose-500 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-5 font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-4 border-t border-border/60 space-y-1.5">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Key Deliverables</div>
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
