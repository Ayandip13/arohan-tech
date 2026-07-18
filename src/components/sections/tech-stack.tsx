"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";

const technologies = [
  "React", "Next.js", "Node.js", "MongoDB", "PostgreSQL",
  "AWS", "Docker", "Kubernetes", "Python", "Redis",
  "GraphQL", "Framer Motion", "Tailwind CSS", "TypeScript",
  "Google Ads", "Meta Ads", "SEO", "HubSpot"
];

export function TechStack() {
  return (
    <section className="py-24 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 mb-16 text-center">
        <Reveal width="100%">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Technology Arsenal</h2>
        </Reveal>
        <FadeIn delay={0.2}>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We leverage the most advanced and scalable technologies to build modern digital experiences and drive marketing success.
          </p>
        </FadeIn>
      </div>

      {/* Infinite Marquee of Tech */}
      <div className="relative flex overflow-x-hidden group">
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex animate-marquee-reverse whitespace-nowrap py-4">
          {[...technologies, ...technologies].map((tech, idx) => (
            <div key={idx} className="mx-4 md:mx-6">
              <div className="px-6 py-3 rounded-full border border-border/50 bg-card hover:bg-primary/5 hover:border-primary/30 transition-colors text-foreground font-medium text-sm tracking-wide">
                {tech}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
