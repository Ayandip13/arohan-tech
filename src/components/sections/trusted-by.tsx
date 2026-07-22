"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Sparkles, Trophy, Award } from "lucide-react";

const logos = [
  { name: "Tesla", category: "EV & Tech" },
  { name: "Spotify", category: "Audio Stream" },
  { name: "Nike", category: "Lifestyle" },
  { name: "Shopify", category: "E-Commerce" },
  { name: "HubSpot", category: "MarTech" },
  { name: "Linear", category: "Productivity" },
  { name: "Figma", category: "Design Tools" },
  { name: "Stripe", category: "FinTech" },
];

export function TrustedBy() {
  return (
    <section className="py-16 border-y border-rose-500/15 overflow-hidden bg-card/40 relative">
      <div className="container mx-auto px-4 md:px-8 mb-8 text-center flex flex-col items-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 font-extrabold text-[11px] uppercase tracking-widest mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Trusted By Hyper-Growth Brands & Global Pioneers</span>
          </div>
        </FadeIn>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group py-4">
        {/* Gradients for fading edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center mx-10 group/item cursor-pointer">
              <div className="px-6 py-3 rounded-2xl bg-background/80 border border-border/80 group-hover/item:border-rose-500/50 group-hover/item:shadow-lg group-hover/item:shadow-rose-500/10 transition-all duration-300 flex items-center gap-3">
                <span className="text-2xl font-heading font-black text-foreground/40 group-hover/item:text-rose-500 transition-colors duration-300">
                  {logo.name}
                </span>
                <span className="text-[10px] uppercase font-bold text-muted-foreground bg-muted px-2 py-0.5 rounded-full group-hover/item:bg-amber-400 group-hover/item:text-slate-950 transition-colors">
                  {logo.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
