"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Immersive Gradient Background */}
      <div className="absolute inset-0 bg-primary/95 z-0" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/40 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/40 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-0" />
      
      {/* Noise overlay */}
      <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-8 tracking-tighter leading-tight">
              Ready to redefine your digital presence?
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-12 font-light">
              Let's collaborate to build something extraordinary. Our experts are ready to transform your vision into reality.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <MagneticButton size="lg" className="rounded-full px-10 text-base h-16 w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 hover:text-background border-none shadow-2xl">
                Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
              </MagneticButton>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
