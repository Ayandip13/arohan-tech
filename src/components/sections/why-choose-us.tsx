"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { Zap, HeartHandshake, Sparkles, CheckCircle2, Flame, Award } from "lucide-react";
import { BrainstormingIllustration } from "@/components/ui/marketing-illustrations";
import { GRADIENT_PRESETS, BADGE_COLOR_PRESETS } from "@/config/theme-colors";

const features = [
  {
    icon: <Flame className="w-4 h-4" />,
    badge: "High Growth",
    color: GRADIENT_PRESETS.primary,
    title: "Relentless Focus on ROI",
    description: "We don't care about vanity metrics. Every campaign, line of copy, and visual asset is built to drive real revenue and scale audience reach.",
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    badge: "Creative Edge",
    color: GRADIENT_PRESETS.secondary,
    title: "Award-Winning Creative Vision",
    description: "Our designers and strategists craft eye-popping visuals and viral hooks that captivate audiences and dominate social feeds.",
  },
  {
    icon: <Zap className="w-4 h-4" />,
    badge: "Speed to Market",
    color: GRADIENT_PRESETS.purple,
    title: "Rapid Execution & Iteration",
    description: "Agile 2-week growth sprints and instant market testing allow us to launch ad campaigns and web builds 2x faster than legacy agencies.",
  },
  {
    icon: <HeartHandshake className="w-4 h-4" />,
    badge: "Radical Clarity",
    color: GRADIENT_PRESETS.emerald,
    title: "Dedicated Squad & Full Transparency",
    description: "No hidden fees or radio silence. You get direct Slack access to your dedicated growth strategists, visual designers, and developers.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-28 lg:py-36 bg-card/40 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:w-5/12 space-y-6">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-600 font-extrabold text-xs uppercase tracking-widest">
                <Award className="w-3.5 h-3.5" />
                <span>The Agency Difference</span>
              </div>
            </FadeIn>

            <Reveal>
              <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight leading-tight">
                Why Top Brands Partner With <span className="gradient-text-coral-amber">Arohan.</span>
              </h2>
            </Reveal>

            <FadeIn delay={0.2}>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
                We aren't just another service provider. We act as an inline growth engine, integrating deeply with your brand to unlock exponential revenue.
              </p>
            </FadeIn>

            {/* Vector Graphic Accent */}
            <FadeIn delay={0.3}>
              <div className="p-4 rounded-2xl bg-background border border-border/80 shadow-sm flex items-center justify-center max-w-md">
                <BrainstormingIllustration className="w-full h-auto max-h-[140px]" />
              </div>
            </FadeIn>

            {/* Quick Proof Pills */}
            <FadeIn delay={0.4}>
              <div className="space-y-2 pt-1">
                {["100% In-House Creative & Marketing Squad", "Direct Founder & Strategist Access", "Guaranteed Performance Metrics"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 font-bold text-xs text-foreground">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          
          {/* Right Features Grid */}
          <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <FadeIn key={idx} delay={0.1 * idx}>
                <div className="group relative p-5 rounded-2xl bg-background border border-border/80 hover:border-rose-500/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${feature.color} text-white flex items-center justify-center shadow-sm`}>
                        {feature.icon}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full font-black text-[9px] uppercase tracking-wider bg-muted text-muted-foreground">
                        {feature.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-heading font-black mb-2 text-foreground group-hover:text-rose-500 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
