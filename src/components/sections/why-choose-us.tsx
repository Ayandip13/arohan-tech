"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { Zap, HeartHandshake, Sparkles, CheckCircle2, Flame, Award } from "lucide-react";
import { BrainstormingIllustration } from "@/components/ui/marketing-illustrations";
import { FunkySticker } from "@/components/ui/funky-elements";

const features = [
  {
    icon: <Flame className="w-5 h-5" />,
    badge: "High Growth",
    color: "from-rose-500 to-amber-500",
    title: "Relentless Focus on ROI",
    description: "We don't care about vanity metrics. Every campaign, line of copy, and visual asset is built to drive real revenue and scale audience reach.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    badge: "Creative Edge",
    color: "from-amber-400 to-rose-500",
    title: "Award-Winning Creative Vision",
    description: "Our designers and strategists craft eye-popping visuals and viral hooks that captivate audiences and dominate social feeds.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    badge: "Speed to Market",
    color: "from-purple-500 to-rose-500",
    title: "Rapid Execution & Iteration",
    description: "Agile 2-week growth sprints and instant market testing allow us to launch ad campaigns and web builds 2x faster than legacy agencies.",
  },
  {
    icon: <HeartHandshake className="w-5 h-5" />,
    badge: "Radical Clarity",
    color: "from-emerald-400 to-sky-500",
    title: "Dedicated Squad & Full Transparency",
    description: "No hidden fees or radio silence. You get direct Slack access to your dedicated growth strategists, visual designers, and developers.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-card/50 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Sticky Left Column */}
          <div className="lg:w-5/12 sticky top-28 space-y-5">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 font-extrabold text-xs uppercase tracking-widest">
                <Award className="w-4 h-4" />
                <span>The Agency Difference</span>
              </div>
            </FadeIn>

            <Reveal>
              <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight leading-tight">
                Why Top Brands Partner With <span className="gradient-text-coral-amber">Arohan.</span>
              </h2>
            </Reveal>

            <FadeIn delay={0.2}>
              <p className="text-base text-muted-foreground leading-relaxed font-normal">
                We aren't just another service provider. We act as an inline growth engine, integrating deeply with your brand to unlock exponential revenue.
              </p>
            </FadeIn>

            {/* Vector Graphic Accent */}
            <FadeIn delay={0.3}>
              <div className="p-4 rounded-3xl bg-background border-2 border-border/80 shadow-md">
                <BrainstormingIllustration className="w-full h-auto max-h-[140px]" />
              </div>
            </FadeIn>

            {/* Quick Proof Pills */}
            <FadeIn delay={0.4}>
              <div className="space-y-2.5 pt-2">
                {["100% In-House Creative & Marketing Squad", "Direct Founder & Strategist Access", "Guaranteed Performance Metrics"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 font-bold text-xs text-foreground">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          
          {/* Right Features Grid - Compact Padding */}
          <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((feature, idx) => (
              <FadeIn key={idx} delay={0.1 * idx}>
                <div className="group relative p-6 rounded-3xl bg-background border-2 border-border/80 hover:border-rose-500/50 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${feature.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                        {feature.icon}
                      </div>

                      <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-muted text-muted-foreground group-hover:bg-rose-500 group-hover:text-white transition-colors">
                        {feature.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-heading font-black mb-2 text-foreground group-hover:text-rose-500 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed font-normal">
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
