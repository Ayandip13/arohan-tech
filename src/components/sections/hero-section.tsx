"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      {/* Aurora Backgrounds */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-8 border border-primary/20 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium tracking-wide">Pioneering the Digital Frontier</span>
            </div>
          </FadeIn>
          
          <Reveal delay={0.2} color="hsl(var(--primary))">
            <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-heading font-bold tracking-tighter leading-[1.05] mb-8">
              Transforming <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Ideas into</span> Reality.
            </h1>
          </Reveal>
          
          <FadeIn delay={0.4}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl font-light leading-relaxed">
              Arohan Tech Solution is an elite digital agency blending world-class software engineering with strategic marketing to elevate your brand globally.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <MagneticButton size="lg" className="rounded-full px-10 text-base h-16 w-full sm:w-auto shadow-lg shadow-primary/25">
                Start a Project <ArrowRight className="ml-2 h-5 w-5" />
              </MagneticButton>
              <MagneticButton variant="outline" size="lg" className="rounded-full px-10 text-base h-16 glass border-border/50 w-full sm:w-auto hover:bg-muted/50 transition-colors">
                Explore Services
              </MagneticButton>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
