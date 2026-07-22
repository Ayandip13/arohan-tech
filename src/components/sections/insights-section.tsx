"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { ArrowUpRight, Clock, Sparkles, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "How We Scaled E-Commerce Sales by 420% With TikTok & Meta Ads",
    category: "Growth Strategy",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    date: "Jul 18, 2026",
    tagBg: "bg-rose-500 text-white",
  },
  {
    title: "The 2026 AI Playbook: Building Custom Agents For Marketing",
    category: "AI & Automation",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    date: "Jul 12, 2026",
    tagBg: "bg-amber-400 text-slate-950",
  },
  {
    title: "Why High-Converting Digital Brands Ditch Generic Templates",
    category: "UI/UX & Branding",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
    date: "Jul 05, 2026",
    tagBg: "bg-purple-600 text-white",
  },
];

export function InsightsSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden" id="blog">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-500 font-extrabold text-xs uppercase tracking-widest mb-4">
                <BookOpen className="w-4 h-4" />
                <span>Growth Digest & Insights</span>
              </div>
            </FadeIn>

            <Reveal>
              <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-tight">
                Ideas & Strategies To <span className="gradient-text-coral-amber">Outpace Competition.</span>
              </h2>
            </Reveal>
          </div>

          <FadeIn delay={0.3}>
            <Link href="/blog">
              <Button variant="outline" size="lg" className="rounded-full border-2 border-foreground/20 hover:border-rose-500">
                <span>Read All Insights</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </FadeIn>
        </div>

        {/* 3 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <FadeIn key={idx} delay={0.15 * idx}>
              <Link href="/blog">
                <div className="group rounded-3xl p-6 bg-card border-2 border-border/80 hover:border-rose-500/50 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full">
                  
                  <div>
                    {/* Image Container */}
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-muted">
                      <Image 
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 z-10">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${article.tagBg}`}>
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Meta Bar */}
                    <div className="flex items-center gap-3 text-xs font-semibold text-muted-foreground mb-3">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-rose-500" /> {article.readTime}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-heading font-black text-foreground mb-4 group-hover:text-rose-500 transition-colors leading-tight">
                      {article.title}
                    </h3>
                  </div>

                  {/* Read Article Link */}
                  <div className="pt-4 border-t border-border/60 flex items-center justify-between font-bold text-sm text-foreground group-hover:text-rose-500 transition-colors">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
