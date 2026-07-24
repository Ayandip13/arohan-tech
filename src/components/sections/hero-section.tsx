"use client";

import { ArrowRight, Sparkles, TrendingUp, Star, ShieldCheck, Flame, Megaphone } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { HandDrawnArrow, SmileyBadge, SpeechBubble, FunkySticker, DoodleStar } from "@/components/ui/funky-elements";
import { MarketingHeroIllustration } from "@/components/ui/marketing-illustrations";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden gradient-bg-hero">
      {/* Organic Animated Blob Shapes */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-tr from-rose-500/20 via-amber-500/20 to-purple-500/20 rounded-full blur-[140px] animate-blob-spin pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-br from-emerald-500/15 via-sky-500/20 to-pink-500/15 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />
      
      {/* Floating Decorative Doodles */}
      <div className="absolute top-32 left-[8%] hidden xl:block pointer-events-none">
        <DoodleStar className="w-8 h-8 text-amber-400 animate-pulse" />
      </div>
      <div className="absolute bottom-20 right-[48%] hidden xl:block pointer-events-none rotate-12">
        <HandDrawnArrow className="w-16 h-12 text-rose-500/80" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Copy Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <FadeIn delay={0.1}>
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500/10 via-amber-500/10 to-purple-500/10 border border-rose-500/20 text-foreground font-bold text-xs tracking-wider uppercase backdrop-blur-md shadow-sm">
                  <Megaphone className="w-4 h-4 text-rose-500" />
                  <span>Creative Digital Marketing Agency</span>
                </div>
                <FunkySticker color="bg-amber-400 text-slate-950" rotation="rotate-2">
                  <span>#1 ROI Boost 🚀</span>
                </FunkySticker>
              </div>
            </FadeIn>

            {/* Hero Heading: Balanced font size for clean readability */}
            <Reveal delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.12] text-foreground">
                We Craft Bold Brands &{" "}
                <span className="relative inline-block gradient-text-coral-amber">
                  Viral Marketing Funnels.
                  <span className="absolute -bottom-1 left-0 w-full h-2 bg-amber-400/40 rounded-full -z-10" />
                </span>
              </h1>
            </Reveal>

            <FadeIn delay={0.3}>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-normal leading-relaxed max-w-xl">
                A high-energy <span className="font-extrabold text-foreground underline decoration-rose-500/40 decoration-2">Digital Marketing Agency</span> crafting unforgettable social campaigns, performance ad strategy, brand identity, and high-converting web experiences.
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/contact">
                  <MagneticButton variant="gradient" size="lg" className="rounded-full shadow-2xl shadow-rose-500/30 px-7 font-extrabold">
                    <span>Start Your Campaign</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </MagneticButton>
                </Link>

                <Link href="/work">
                  <MagneticButton variant="outline" size="lg" className="rounded-full border-2 border-foreground/20 hover:border-rose-500 px-7 font-extrabold">
                    <span>Explore Our Work</span>
                  </MagneticButton>
                </Link>
              </div>
            </FadeIn>

            {/* Social Proof Stack */}
            <FadeIn delay={0.5}>
              <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-border/60">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
                    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
                  ].map((img, i) => (
                    <img key={i} src={img} alt="Client avatar" className="w-9 h-9 rounded-full border-2 border-background object-cover shadow-md" />
                  ))}
                  <div className="w-9 h-9 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 border-2 border-background flex items-center justify-center text-white text-xs font-black">
                    180+
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-foreground ml-1">4.9/5 Rating</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">Trusted by high-growth consumer & digital brands</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Interactive Marketing Vector Illustration Column */}
          <div className="lg:col-span-5 relative">
            <FadeIn delay={0.3}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Visual Glass Card Container */}
                <div className="relative rounded-3xl p-5 md:p-6 bg-card/95 backdrop-blur-2xl border-2 border-rose-500/20 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-rose-500/20 to-transparent rounded-bl-full pointer-events-none" />

                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/80">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 flex items-center justify-center text-white font-bold shadow-md">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-heading font-extrabold text-xs text-foreground">Live Campaign Dashboard</h4>
                        <span className="text-[10px] uppercase tracking-wider text-emerald-500 font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" /> Active Growth
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-500 font-extrabold text-[11px]">
                      +420% ROAS
                    </span>
                  </div>

                  {/* Marketing Vector Illustration */}
                  <div className="mb-4">
                    <MarketingHeroIllustration className="w-full h-auto max-h-[220px]" />
                  </div>

                  {/* Compact Highlight Stats */}
                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    <div className="p-3 rounded-2xl bg-muted/60 border border-border/80 flex flex-col">
                      <span className="text-[10px] text-muted-foreground font-semibold uppercase">Brand Impressions</span>
                      <span className="text-base font-heading font-black text-rose-500">+1.84M</span>
                    </div>
                    <div className="p-3 rounded-2xl bg-muted/60 border border-border/80 flex flex-col">
                      <span className="text-[10px] text-muted-foreground font-semibold uppercase">Conversion Lift</span>
                      <span className="text-base font-heading font-black text-amber-500 font-serif">14.2x</span>
                    </div>
                  </div>
                </div>

                {/* Floating Bottom Card Sticker */}
                <motion.div 
                  className="absolute -bottom-6 -left-4 rounded-2xl p-3 bg-slate-900 text-white shadow-2xl border border-rose-500/30 flex items-center gap-2.5 animate-float z-20"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <SmileyBadge className="w-8 h-8 text-slate-900 bg-amber-400" />
                  <div>
                    <div className="text-xs font-bold text-slate-200">Creative Agency Vibe</div>
                    <div className="text-[10px] text-amber-400 font-semibold">100% Marketing Focused</div>
                  </div>
                </motion.div>

                {/* Floating Top Sticker */}
                <motion.div 
                  className="absolute -top-5 -right-3 px-3.5 py-1.5 rounded-2xl bg-gradient-to-r from-purple-600 to-rose-500 text-white font-extrabold text-xs shadow-xl animate-float-reverse flex items-center gap-1.5 z-20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Viral Social Ads</span>
                </motion.div>

              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
