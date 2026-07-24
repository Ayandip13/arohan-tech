"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { ArrowUpRight, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GRADIENT_PRESETS, BADGE_COLOR_PRESETS } from "@/config/theme-colors";

const projects = [
  {
    title: "Vogue & Velvet Rebrand",
    category: "Brand & Digital Campaign",
    metrics: "+420% Sales Boost",
    tech: "Brand Strategy, TikTok Ads, Shopify",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    gradient: GRADIENT_PRESETS.primary,
    badgeBg: BADGE_COLOR_PRESETS.rose.solid,
  },
  {
    title: "Aura FinTech Scaleup",
    category: "Web Platform & Campaign",
    metrics: "$12M Capital Raised",
    tech: "Next.js 15, Meta Ads, Brand System",
    image: "https://images.unsplash.com/photo-1616077168079-7e09a6a2609a?q=80&w=1000&auto=format&fit=crop",
    gradient: GRADIENT_PRESETS.secondary,
    badgeBg: BADGE_COLOR_PRESETS.amber.solid,
  },
  {
    title: "Pulse Multichannel Ad Launch",
    category: "Performance Marketing & SEO",
    metrics: "2.4M Campaign Reach",
    tech: "Meta Ads, Google PPC, Content Strategy",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    gradient: GRADIENT_PRESETS.accent,
    badgeBg: BADGE_COLOR_PRESETS.purple.solid,
  },
  {
    title: "MediCare Health App Launch",
    category: "Mobile & UI/UX Design",
    metrics: "1.2M Downloads",
    tech: "React Native, UI/UX System, Video Ads",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    gradient: GRADIENT_PRESETS.emerald,
    badgeBg: BADGE_COLOR_PRESETS.emerald.solid,
  }
];

export function FeaturedProjects() {
  return (
    <section className="py-28 lg:py-36 bg-card/30 relative overflow-hidden" id="work">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 text-rose-500 font-extrabold text-xs uppercase tracking-widest mb-3">
                <Trophy className="w-3.5 h-3.5" />
                <span>Our Masterpieces</span>
              </div>
            </FadeIn>

            <Reveal>
              <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight leading-tight">
                Case Studies & <span className="gradient-text-coral-amber">Growth Stories.</span>
              </h2>
            </Reveal>
          </div>

          <FadeIn delay={0.2}>
            <Link href="/work">
              <Button variant="outline" size="default" className="rounded-full border-2 border-foreground/20 hover:border-rose-500 font-extrabold text-xs">
                <span>Explore All Work</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </Link>
          </FadeIn>
        </div>

        {/* 4 Poster Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, idx) => (
            <FadeIn key={idx} delay={0.1 * idx}>
              <Link href="/work">
                <div className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[16/9] border border-border/80 hover:border-rose-500/50 shadow-md hover:shadow-xl transition-all duration-300">
                  
                  {/* Background Image */}
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-35 group-hover:opacity-70 transition-opacity duration-300`} />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors duration-300" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className={`px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-md ${project.badgeBg}`}>
                      {project.metrics}
                    </span>

                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 shadow-lg text-white">
                      <div className="text-[9px] font-black text-amber-400 uppercase tracking-widest mb-0.5">
                        {project.category}
                      </div>
                      
                      <h3 className="text-base md:text-lg font-heading font-black mb-1 leading-tight">
                        {project.title}
                      </h3>

                      <p className="text-slate-300 text-[11px] font-medium">
                        {project.tech}
                      </p>
                    </div>
                  </div>

                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
