"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { ArrowRight, Sparkles, Flame, Rocket, Star } from "lucide-react";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-r from-rose-600 via-amber-500 to-purple-700 text-white">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/40 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Sticker Badges */}
      <div className="absolute top-10 left-10 hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-950 font-black text-xs shadow-2xl animate-float">
        <Flame className="w-4 h-4 text-rose-500 fill-rose-500" />
        <span>LET'S GROW YOUR BRAND</span>
      </div>

      <div className="absolute bottom-10 right-10 hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950 text-white font-black text-xs shadow-2xl animate-float-reverse border border-white/20">
        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
        <span>TOP CREATIVE AGENCY 2026</span>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white font-extrabold text-xs uppercase tracking-widest mb-6">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Your Next Big Growth Milestone Starts Here</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight leading-[1.02] mb-8 text-white">
              Ready To Outshine The Competition?
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p className="text-xl md:text-2xl text-white/90 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
              Book a 15-minute growth discovery call. We'll map out a custom digital marketing & software strategy for your brand.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <MagneticButton size="xl" className="rounded-full px-12 bg-slate-950 text-white hover:bg-slate-900 shadow-2xl text-lg font-bold border-2 border-white/20">
                  <span>Start Your Project Now</span>
                  <Rocket className="ml-2 h-6 w-6 text-amber-400" />
                </MagneticButton>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
