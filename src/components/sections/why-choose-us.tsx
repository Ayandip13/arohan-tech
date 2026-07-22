"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { Shield, Zap, Target, HeartHandshake, Sparkles, CheckCircle2, Flame, Award } from "lucide-react";

const features = [
  {
    icon: <Flame className="w-6 h-6" />,
    badge: "High Growth",
    color: "from-rose-500 to-amber-500",
    title: "Relentless Focus on ROI",
    description: "We don't care about vanity metrics. Every campaign, line of code, and visual asset is built to drive revenue and audience scale.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    badge: "Creative Edge",
    color: "from-amber-400 to-rose-500",
    title: "Award-Winning Creative Vision",
    description: "Our designers and strategists create jaw-dropping visuals that captivate audiences and stand out in crowded feeds.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    badge: "Speed to Market",
    color: "from-purple-500 to-rose-500",
    title: "Rapid Execution & Iteration",
    description: "Agile sprints and instant market testing allow us to launch campaigns and software products 2x faster than legacy agencies.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    badge: "Radical Transparency",
    color: "from-emerald-400 to-sky-500",
    title: "Dedicated Squad & Full Clarity",
    description: "No hidden fees or radio silence. You get direct Slack access to your dedicated strategists, designers, and engineers.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-card/50 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Sticky Left Column */}
          <div className="lg:w-5/12 sticky top-32 space-y-6">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 font-extrabold text-xs uppercase tracking-widest">
                <Award className="w-4 h-4" />
                <span>The Agency Difference</span>
              </div>
            </FadeIn>

            <Reveal>
              <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-tight">
                Why Top Brands Partner With <span className="gradient-text-coral-amber">Arohan.</span>
              </h2>
            </Reveal>

            <FadeIn delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed font-normal">
                We aren't just another service provider. We act as an inline growth engine, integrating deeply with your brand to unlock exponential revenue.
              </p>
            </FadeIn>

            {/* Quick Proof Pills */}
            <FadeIn delay={0.4}>
              <div className="space-y-3 pt-4">
                {["100% In-House Creative & Tech Team", "Direct Founder & Strategist Access", "Guaranteed Performance Metrics"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 font-semibold text-sm text-foreground">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          
          {/* Right Features Grid */}
          <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <FadeIn key={idx} delay={0.1 * idx}>
                <div className="group relative p-8 rounded-3xl bg-background border-2 border-border/80 hover:border-rose-500/50 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${feature.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                        {feature.icon}
                      </div>

                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-muted text-muted-foreground group-hover:bg-rose-500 group-hover:text-white transition-colors">
                        {feature.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-heading font-black mb-3 text-foreground group-hover:text-rose-500 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed font-normal">
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
