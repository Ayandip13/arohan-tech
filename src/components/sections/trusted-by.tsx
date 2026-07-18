"use client";

import { FadeIn } from "@/components/animations/fade-in";

const logos = [
  "Microsoft", "Apple", "Google", "Amazon", "Tesla", "Spotify", "Netflix", "Meta"
];

export function TrustedBy() {
  return (
    <section className="py-20 border-y border-border/40 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-8 mb-8 text-center">
        <FadeIn>
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
            Trusted by innovative companies worldwide
          </p>
        </FadeIn>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group">
        {/* Gradients for fading edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center mx-12">
              <span className="text-3xl font-heading font-bold text-foreground/20 uppercase tracking-tighter hover:text-primary transition-colors duration-500 cursor-default">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
