"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { Sparkles, Flame, Rocket, Star } from "lucide-react";
import { SmileyBadge } from "@/components/ui/funky-elements";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-r from-rose-600 via-amber-500 to-purple-700 text-white">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/40 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Sticker Badges */}
      <div className="absolute top-8 left-8 hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-950 font-black text-xs shadow-2xl animate-float">
        <Flame className="w-4 h-4 text-rose-500 fill-rose-500" />
        <span>LET'S GROW YOUR BRAND</span>
      </div>

      <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950 text-white font-black text-xs shadow-2xl animate-float-reverse border border-white/20">
        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
        <span>CREATIVE MARKETING AGENCY</span>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white font-extrabold text-xs uppercase tracking-widest mb-4">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Your Next Big Growth Milestone Starts Here</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-tight mb-6 text-white">
              Ready To Outshine The Competition?
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-medium max-w-xl mx-auto leading-relaxed">
              Book a 15-minute growth discovery call. We'll map out a custom digital marketing campaign and brand strategy for your target market.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <MagneticButton size="lg" className="rounded-full px-9 bg-slate-950 text-white hover:bg-slate-900 shadow-2xl text-base font-extrabold border-2 border-white/20">
                  <span>Start Your Project Now</span>
                  <Rocket className="ml-2 h-5 w-5 text-amber-400" />
                </MagneticButton>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
