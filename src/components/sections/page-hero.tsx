"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";

interface PageHeroProps {
  title: string;
  description: string;
  badge?: string;
  breadcrumbs: { label: string; href: string }[];
}

export function PageHero({ title, description, badge, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-background">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-rose-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-amber-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Breadcrumbs */}
        <FadeIn delay={0.1}>
          <nav className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border text-xs font-bold text-muted-foreground mb-8 shadow-sm">
            <Link href="/" className="hover:text-rose-500 transition-colors">Home</Link>
            {breadcrumbs.map((crumb, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-rose-500" />
                {idx === breadcrumbs.length - 1 ? (
                  <span className="text-foreground font-extrabold">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-rose-500 transition-colors">{crumb.label}</Link>
                )}
              </div>
            ))}
          </nav>
        </FadeIn>

        {badge && (
          <FadeIn delay={0.2}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-500 font-black text-xs uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{badge}</span>
            </div>
          </FadeIn>
        )}

        <Reveal delay={0.3}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight leading-tight mb-6 max-w-5xl mx-auto text-foreground">
            {title}
          </h1>
        </Reveal>

        <FadeIn delay={0.4}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-normal">
            {description}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
