"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { Activity, BookOpen, ShoppingBag, Home, Landmark, Factory, Laptop, Coffee, Sparkles, Layers } from "lucide-react";

const industries = [
  { name: "D2C & E-Commerce", icon: <ShoppingBag className="w-7 h-7" />, color: "from-rose-500 to-amber-500", tag: "+380% Avg Sales" },
  { name: "FinTech & Web3", icon: <Landmark className="w-7 h-7" />, color: "from-amber-400 to-rose-500", tag: "High Security" },
  { name: "SaaS & AI Startups", icon: <Laptop className="w-7 h-7" />, color: "from-purple-600 to-rose-500", tag: "Rapid User Scale" },
  { name: "HealthTech & Pharma", icon: <Activity className="w-7 h-7" />, color: "from-emerald-400 to-sky-500", tag: "HIPAA Compliant" },
  { name: "EdTech & Learning", icon: <BookOpen className="w-7 h-7" />, color: "from-rose-500 to-amber-500", tag: "High Retention" },
  { name: "Real Estate & PropTech", icon: <Home className="w-7 h-7" />, color: "from-amber-400 to-rose-500", tag: "Lead Gen Engine" },
  { name: "Lifestyle & Fashion", icon: <Coffee className="w-7 h-7" />, color: "from-purple-600 to-rose-500", tag: "Viral Branding" },
  { name: "B2B Manufacturing", icon: <Factory className="w-7 h-7" />, color: "from-emerald-400 to-sky-500", tag: "Enterprise CRM" },
];

export function IndustriesSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-500 font-extrabold text-xs uppercase tracking-widest mb-4">
              <Layers className="w-4 h-4" />
              <span>Domain Expertise</span>
            </div>
          </FadeIn>
          
          <Reveal width="100%">
            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-tight">
              Tailored Growth Strategies For <span className="gradient-text-coral-amber">Every Sector.</span>
            </h2>
          </Reveal>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <FadeIn key={idx} delay={0.08 * idx}>
              <div className="group relative rounded-3xl p-6 bg-card border-2 border-border/80 hover:border-rose-500/50 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center justify-between h-full">
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${ind.color} text-white flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform`}>
                  {ind.icon}
                </div>

                <h3 className="font-heading font-extrabold text-lg text-foreground mb-3 group-hover:text-rose-500 transition-colors">
                  {ind.name}
                </h3>

                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-muted text-muted-foreground group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                  {ind.tag}
                </span>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
