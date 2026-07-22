"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { Wrench, Sparkles, Megaphone, Palette, Bot, Code } from "lucide-react";

const categories = [
  {
    name: "Marketing & Growth",
    icon: <Megaphone className="w-5 h-5 text-rose-500" />,
    tools: ["Google Ads", "Meta Business", "HubSpot", "Google Analytics 4", "Semrush", "Klaviyo", "TikTok Ads"]
  },
  {
    name: "Brand & Motion",
    icon: <Palette className="w-5 h-5 text-amber-500" />,
    tools: ["Figma", "Adobe After Effects", "Blender 3D", "Spline", "Lottie", "Midjourney", "Photoshop"]
  },
  {
    name: "AI & Automation",
    icon: <Bot className="w-5 h-5 text-emerald-500" />,
    tools: ["OpenAI API", "Anthropic Claude", "LangChain", "Python", "Make.com", "Zapier", "Pinecone"]
  },
  {
    name: "Software & Engineering",
    icon: <Code className="w-5 h-5 text-purple-500" />,
    tools: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "AWS Cloud"]
  }
];

export function TechStack() {
  return (
    <section className="py-32 bg-card/50 relative overflow-hidden border-y border-rose-500/15">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-500 font-extrabold text-xs uppercase tracking-widest mb-4">
              <Wrench className="w-4 h-4" />
              <span>Modern Tech & Marketing Stack</span>
            </div>
          </FadeIn>
          
          <Reveal width="100%">
            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-tight">
              Our High-Performance <span className="gradient-text-coral-amber">Growth Stack.</span>
            </h2>
          </Reveal>
        </div>

        {/* 4 Categorized Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <FadeIn key={idx} delay={0.1 * idx}>
              <div className="rounded-3xl p-8 bg-background border-2 border-border/80 hover:border-rose-500/50 shadow-xl transition-all duration-300 flex flex-col h-full">
                
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
                  <div className="p-2.5 rounded-xl bg-muted border border-border">
                    {cat.icon}
                  </div>
                  <h3 className="font-heading font-extrabold text-lg text-foreground">
                    {cat.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.tools.map((tool, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-muted/60 text-foreground border border-border/60 hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-colors duration-200 cursor-default"
                    >
                      {tool}
                    </span>
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
