"use client";

import { ArrowRight, Sparkles, TrendingUp, Play, Zap, Star, ShieldCheck, Flame } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-32 pb-24 overflow-hidden gradient-bg-hero">
      {/* Organic Animated Blob Shapes */}
      <div className="absolute top-10 right-10 w-[550px] h-[550px] bg-gradient-to-tr from-rose-500/20 via-amber-500/20 to-purple-500/20 rounded-full blur-[140px] animate-blob-spin pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-gradient-to-br from-emerald-500/15 via-sky-500/20 to-pink-500/15 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />
      
      {/* Floating Graphic Accents & Stickers */}
      <motion.div 
        className="absolute top-36 right-[15%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400 text-slate-900 font-extrabold text-xs shadow-xl rotate-6 animate-float z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Flame className="w-4 h-4 fill-amber-900 text-amber-900" />
        <span>350% AVG ROI BOOST</span>
      </motion.div>

      <motion.div 
        className="absolute top-64 right-[42%] hidden xl:flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500 text-white font-extrabold text-xs shadow-xl -rotate-6 animate-float-reverse z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Sparkles className="w-4 h-4" />
        <span>CREATIVE MAGIC ✨</span>
      </motion.div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500/10 via-amber-500/10 to-purple-500/10 border border-rose-500/20 text-foreground font-semibold text-xs tracking-wider uppercase backdrop-blur-md shadow-sm">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
                </span>
                <span>We Grow Businesses Beyond Boundaries</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-[10px]">NEW</span>
              </div>
            </FadeIn>

            <Reveal delay={0.2}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-black tracking-tight leading-[1.02] text-foreground">
                We Build Brands That{" "}
                <span className="gradient-text-coral-amber underline decoration-amber-400/40 decoration-wavy decoration-2">
                  Grow & Scale.
                </span>
              </h1>
            </Reveal>

            <FadeIn delay={0.4}>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-normal leading-relaxed max-w-2xl">
                A high-energy <span className="font-semibold text-foreground">Digital Marketing Agency</span> & Tech Studio crafting viral marketing campaigns, bold brand identities, and enterprise AI software.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/contact">
                  <MagneticButton variant="gradient" size="xl" className="rounded-full shadow-2xl shadow-rose-500/30">
                    <span>Start Your Growth Journey</span>
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </MagneticButton>
                </Link>

                <Link href="/work">
                  <MagneticButton variant="outline" size="xl" className="rounded-full border-2 border-foreground/20 hover:border-primary">
                    <span>Explore Our Work</span>
                  </MagneticButton>
                </Link>
              </div>
            </FadeIn>

            {/* Social Proof Stack */}
            <FadeIn delay={0.8}>
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border/60">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
                    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
                  ].map((img, i) => (
                    <img key={i} src={img} alt="Client avatar" className="w-10 h-10 rounded-full border-2 border-background object-cover shadow-md" />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 border-2 border-background flex items-center justify-center text-white text-xs font-black">
                    50+
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-foreground ml-1">4.9/5 Rating</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">Trusted by founders & global brands worldwide</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Interactive Marketing Visual Card Column */}
          <div className="lg:col-span-5 relative">
            <FadeIn delay={0.3}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Visual Glass Card */}
                <div className="relative rounded-3xl p-6 md:p-8 bg-card/90 backdrop-blur-2xl border-2 border-rose-500/20 shadow-2xl shadow-rose-500/15 overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-rose-500/20 to-transparent rounded-bl-full pointer-events-none" />

                  {/* Top Bar of Card */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/80">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 flex items-center justify-center text-white font-bold shadow-md">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-heading font-extrabold text-sm text-foreground">Live Campaign Dashboard</h4>
                        <span className="text-[10px] uppercase tracking-wider text-emerald-500 font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" /> Realtime Growth
                        </span>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-rose-500/10 text-rose-500 font-extrabold text-xs">
                      +420% ROI
                    </span>
                  </div>

                  {/* Growth Graph Mockup */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs font-bold uppercase text-muted-foreground">Monthly Impression Organic Reach</span>
                      <span className="text-xl font-heading font-black text-foreground">1,840,290</span>
                    </div>

                    <div className="h-28 w-full flex items-end gap-2 pt-4">
                      {[40, 65, 45, 80, 55, 90, 75, 100, 115, 140].map((height, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                          <div 
                            className="w-full rounded-t-lg bg-gradient-to-t from-rose-500 via-amber-400 to-amber-300 group-hover:scale-105 transition-all duration-300 shadow-md" 
                            style={{ height: `${height}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlight Stat Pill */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-2xl bg-muted/60 border border-border/80 flex flex-col">
                      <span className="text-[11px] text-muted-foreground font-semibold">Brand Engagement</span>
                      <span className="text-lg font-heading font-black text-rose-500">+89.4%</span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-muted/60 border border-border/80 flex flex-col">
                      <span className="text-[11px] text-muted-foreground font-semibold">Conversion Lift</span>
                      <span className="text-lg font-heading font-black text-amber-500 font-serif">14.2x</span>
                    </div>
                  </div>
                </div>

                {/* Floating Bottom Card Sticker */}
                <motion.div 
                  className="absolute -bottom-8 -left-6 rounded-2xl p-4 bg-slate-900 text-white shadow-2xl border border-rose-500/30 flex items-center gap-3 animate-float"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950 font-bold">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-200">Growth Guaranteed</div>
                    <div className="text-[11px] text-emerald-400 font-semibold">100% Data Driven Results</div>
                  </div>
                </motion.div>

                {/* Floating Top Left Sticker */}
                <motion.div 
                  className="absolute -top-6 -left-6 px-4 py-2 rounded-2xl bg-gradient-to-r from-purple-600 to-rose-500 text-white font-extrabold text-xs shadow-xl animate-float-reverse flex items-center gap-1.5"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <Zap className="w-4 h-4 fill-amber-300 text-amber-300" />
                  <span>AI Powered Campaigns</span>
                </motion.div>

              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
