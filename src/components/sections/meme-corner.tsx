"use client";

import React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { Smile, Image as ImageIcon, Sparkles, Flame, MessageSquare } from "lucide-react";
import { FunkySticker, SmileyBadge, SpeechBubble } from "@/components/ui/funky-elements";

export interface MemePlaceholderProps {
  title: string;
  category: string;
  caption: string;
  badgeText?: string;
  aspectRatio?: string;
  className?: string;
}

export function MemePlaceholderCard({
  title = "Client Expectations vs Reality",
  category = "Marketing Reality Check",
  caption = "[ Meme image placeholder: Upload campaign meme here ]",
  badgeText = "Monday Mood ☕",
  aspectRatio = "aspect-square",
  className = ""
}: MemePlaceholderProps) {
  return (
    <div className={`group rounded-3xl p-5 bg-card border-2 border-slate-900/10 dark:border-white/10 shadow-lg hover:shadow-2xl hover:border-rose-500/50 transition-all duration-300 flex flex-col justify-between ${className}`}>
      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 border border-slate-900/10 shadow-sm">
            {category}
          </span>
          <span className="text-xs font-bold text-muted-foreground flex items-center gap-1">
            <Smile className="w-3.5 h-3.5 text-rose-500" /> Meme Corner
          </span>
        </div>

        {/* Title */}
        <h4 className="font-heading font-black text-lg text-foreground mb-3 group-hover:text-rose-500 transition-colors">
          {title}
        </h4>

        {/* Image Placeholder Drop Area */}
        <div className={`relative ${aspectRatio} w-full rounded-2xl border-2 border-dashed border-rose-500/30 bg-muted/40 hover:bg-muted/80 transition-colors flex flex-col items-center justify-center p-6 text-center group/drop overflow-hidden mb-4`}>
          <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-2 group-hover/drop:scale-110 transition-transform shadow-inner">
            <ImageIcon className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-foreground mb-1">{caption}</span>
          <span className="text-[10px] text-muted-foreground font-medium">Recommended: 1080 x 1080 (PNG/JPG)</span>
          
          {/* Subtle Corner Badge */}
          <div className="absolute top-2 right-2 opacity-80">
            <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-slate-900 text-white">
              Placeholder
            </span>
          </div>
        </div>
      </div>

      {/* Caption & Reactions */}
      <div className="pt-3 border-t border-border/60 flex items-center justify-between">
        <SpeechBubble text={badgeText} className="bg-rose-500/10 text-rose-500 border border-rose-500/20" />
        <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
          <Flame className="w-4 h-4 text-amber-500" />
          <span>Tap to upload</span>
        </div>
      </div>
    </div>
  );
}

export function MemeCornerSection() {
  const memeItems = [
    {
      title: "Client Expectations vs Reality",
      category: "Marketing Reality Check",
      caption: "[ Upload Meme: 'When the client asks for 10M viral impressions on a $50 ad budget' ]",
      badgeText: "Monday Mood ☕"
    },
    {
      title: "This Week's Marketing Meme",
      category: "Ad Campaign Humor",
      caption: "[ Upload Meme: 'Checking Meta Ads Manager at 2 AM to see if the CVR improved' ]",
      badgeText: "Marketing Life 📈"
    },
    {
      title: "Creative Corner Digest",
      category: "Design Team Vibe",
      caption: "[ Upload Meme: 'Final_v2_final_FINAL_FOR_REAL.png' ]",
      badgeText: "Design Struggles 🎨"
    }
  ];

  return (
    <section className="py-24 bg-card/30 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-widest mb-3 shadow-md rotate-1">
              <Smile className="w-4 h-4" />
              <span>Agency Fun & Culture</span>
            </div>
          </FadeIn>

          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight leading-tight">
              The <span className="gradient-text-coral-amber">Creative Meme Corner.</span>
            </h2>
          </Reveal>

          <FadeIn delay={0.2}>
            <p className="text-muted-foreground text-sm md:text-base font-normal mt-3">
              Because marketing without humor is just metrics! Here's where our team shares weekly agency reality checks and memes.
            </p>
          </FadeIn>
        </div>

        {/* Meme Placeholder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {memeItems.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <MemePlaceholderCard {...item} />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
