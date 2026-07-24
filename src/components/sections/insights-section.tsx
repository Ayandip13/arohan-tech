"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { ArrowUpRight, Clock, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BADGE_COLOR_PRESETS } from "@/config/theme-colors";

const articles = [
  {
    title: "How We Scaled E-Commerce Sales by 420% With TikTok & Meta Ads",
    category: "Growth Strategy",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    date: "Jul 18, 2026",
    tagBg: BADGE_COLOR_PRESETS.rose.solid,
    excerpt: "Discover the exact multi-channel ad scaling framework our strategy team used to generate 4.2x ROAS in under 90 days."
  },
  {
    title: "The 2026 Growth Playbook: Multichannel Meta & Google Ad Funnels",
    category: "Performance Ads",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    date: "Jul 12, 2026",
    tagBg: BADGE_COLOR_PRESETS.amber.solid,
    excerpt: ""
  },
  {
    title: "Why High-Converting Digital Brands Ditch Generic Templates",
    category: "UI/UX & Branding",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
    date: "Jul 05, 2026",
    tagBg: BADGE_COLOR_PRESETS.purple.solid,
    excerpt: ""
  },
];

export function InsightsSection() {
  return (
    <section className="py-28 lg:py-36 bg-background relative overflow-hidden" id="blog">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 text-rose-500 font-extrabold text-xs uppercase tracking-widest mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Growth Digest & Insights</span>
              </div>
            </FadeIn>

            <Reveal>
              <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight leading-tight">
                Ideas & Strategies To <span className="gradient-text-coral-amber">Outpace Competition.</span>
              </h2>
            </Reveal>
          </div>

          <FadeIn delay={0.2}>
            <Link href="/blog">
              <Button variant="outline" size="default" className="rounded-full border-2 border-foreground/20 hover:border-rose-500 font-extrabold text-xs">
                <span>Read All Insights</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </Link>
          </FadeIn>
        </div>

        {/* Magazine Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Featured Article */}
          <div className="lg:col-span-7 flex">
            <FadeIn delay={0.1} className="w-full">
              <Link href="/blog" className="block h-full">
                <div className="group rounded-2xl p-5 bg-card border border-border/80 hover:border-rose-500/40 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="relative aspect-[16/9] overflow-hidden rounded-xl mb-4 bg-muted">
                      <Image 
                        src={articles[0].image}
                        alt={articles[0].title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 z-10">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${articles[0].tagBg}`}>
                          {articles[0].category}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-2">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-rose-500" /> {articles[0].readTime}</span>
                      <span>•</span>
                      <span>{articles[0].date}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-heading font-black mb-2 text-foreground group-hover:text-rose-500 transition-colors">
                      {articles[0].title}
                    </h3>

                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-normal">
                      {articles[0].excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/60 flex items-center justify-between mt-4">
                    <span className="text-xs font-bold text-rose-500 group-hover:underline inline-flex items-center gap-1">
                      Read Full Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>

          {/* 2 Compact Vertical Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {articles.slice(1).map((article, idx) => (
              <FadeIn key={idx} delay={0.15 * (idx + 1)} className="flex-1">
                <Link href="/blog" className="block h-full">
                  <div className="group rounded-2xl p-4 bg-card border border-border/80 hover:border-rose-500/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider ${article.tagBg}`}>
                          {article.category}
                        </span>
                        <span className="text-[11px] text-muted-foreground font-medium flex items-center gap-1">
                          <Clock className="w-3 h-3 text-rose-500" /> {article.readTime}
                        </span>
                      </div>

                      <h4 className="text-sm font-heading font-black text-foreground group-hover:text-rose-500 transition-colors leading-snug">
                        {article.title}
                      </h4>
                    </div>

                    <div className="pt-3 border-t border-border/60 flex items-center justify-between mt-3">
                      <span className="text-[11px] text-muted-foreground">{article.date}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-foreground group-hover:text-rose-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
