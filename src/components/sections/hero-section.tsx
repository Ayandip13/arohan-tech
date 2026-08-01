"use client";

import { ArrowRight, Star, Megaphone } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { FunkySticker, DoodleStar } from "@/components/ui/funky-elements";
import { FunkyHeroCartoon } from "@/components/ui/funky-hero-cartoon";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative pt-24 md:pt-32 pb-24 md:pb-32 overflow-hidden gradient-bg-hero">
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Floating Accent Doodles - Sparingly Placed */}
      <div className="absolute top-28 left-[6%] hidden xl:block pointer-events-none opacity-60">
        <DoodleStar className="w-7 h-7 text-amber-400" />
      </div>


      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Hero Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left max-w-2xl">
            
            <FadeIn delay={0.1}>
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 text-rose-500 font-extrabold text-xs uppercase tracking-widest border border-rose-500/20">
                  <Megaphone className="w-3.5 h-3.5 text-rose-500" />
                  <span>Creative Digital Marketing Agency</span>
                </div>
                <FunkySticker color="bg-amber-400 text-slate-950" rotation="rotate-2">
                  <span>#1 ROI Boost 🚀</span>
                </FunkySticker>
              </div>
            </FadeIn>

            {/* Hero Heading */}
            <Reveal delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.14] text-foreground">
                We Craft Bold Brands &{" "}
                <span className="relative inline-block gradient-text-coral-amber">
                  Viral Growth Funnels.
                  <span className="absolute -bottom-1 left-0 w-full h-2 bg-amber-400/30 rounded-full -z-10" />
                </span>
              </h1>
            </Reveal>

            {/* Hero Subtext - Clean Rhythm & Max Width */}
            <FadeIn delay={0.3}>
              <p className="text-base sm:text-lg text-muted-foreground font-normal leading-relaxed max-w-lg">
                High-energy digital marketing crafting unforgettable social campaigns, performance ad strategy, brand identity, and high-converting web experiences.
              </p>
            </FadeIn>

            {/* Clean CTA Group */}
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/contact">
                  <MagneticButton variant="gradient" size="default" className="rounded-full shadow-xl shadow-rose-500/20 px-7 font-extrabold text-sm">
                    <span>Start Your Campaign</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </MagneticButton>
                </Link>

                <Link href="/work">
                  <MagneticButton variant="outline" size="default" className="rounded-full border-2 border-foreground/20 hover:border-rose-500 px-7 font-extrabold text-sm">
                    <span>Explore Our Work</span>
                  </MagneticButton>
                </Link>
              </div>
            </FadeIn>

            {/* Social Proof Bar */}
            <FadeIn delay={0.5}>
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border/50">
                <div className="flex -space-x-2.5">
                  {[
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
                  ].map((img, i) => (
                    <img key={i} src={img} alt="Client avatar" className="w-8 h-8 rounded-full border-2 border-background object-cover shadow-sm" />
                  ))}
                  <div className="w-8 h-8 rounded-full bg-rose-500 border-2 border-background flex items-center justify-center text-white text-[11px] font-black">
                    180+
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-foreground">4.9/5 Rating</span>
                  <span className="text-xs text-muted-foreground">• Trusted by top growth brands</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Funky Cartoon Avatar Visual (5-col) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <FadeIn delay={0.3} className="w-full">
              <FunkyHeroCartoon />
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
