"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  description: string;
  badge?: string;
  breadcrumbs: { label: string; href: string }[];
}

export function PageHero({ title, description, badge, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Breadcrumbs */}
        <FadeIn delay={0.1}>
          <nav className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            {breadcrumbs.map((crumb, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                {idx === breadcrumbs.length - 1 ? (
                  <span className="text-foreground">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-primary transition-colors">{crumb.label}</Link>
                )}
              </div>
            ))}
          </nav>
        </FadeIn>

        {badge && (
          <FadeIn delay={0.2}>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              {badge}
            </div>
          </FadeIn>
        )}

        <Reveal delay={0.3}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight mb-6 max-w-4xl mx-auto">
            {title}
          </h1>
        </Reveal>

        <FadeIn delay={0.4}>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
