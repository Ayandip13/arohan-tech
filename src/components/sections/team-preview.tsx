"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const team = [
  { name: "Alex Mercer", role: "Chief Technology Officer" },
  { name: "Sophia Lin", role: "Head of Design" },
  { name: "James Carter", role: "Director of Marketing" },
  { name: "Dr. Elena Rostova", role: "Lead System Architect" },
];

export function TeamPreview() {
  return (
    <section className="py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Meet the Minds</h2>
            </Reveal>
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground">
                A team of industry veterans, creative visionaries, and elite engineers dedicated to your success.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.4}>
            <button className="flex items-center gap-2 font-medium hover:text-primary transition-colors pb-2 border-b border-foreground/20 hover:border-primary">
              View Full Team <ArrowUpRight className="w-4 h-4" />
            </button>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <FadeIn key={idx} delay={0.1 * idx}>
              <div className="group relative overflow-hidden rounded-3xl aspect-[3/4] bg-card border border-border">
                {/* Abstract placeholder image since we don't have real photos */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=600&auto=format&fit=crop')] opacity-20 mix-blend-overlay grayscale group-hover:grayscale-0 transition-all duration-700" />
                
                {/* Gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium">{member.role}</p>
                  
                  <div className="mt-4 pt-4 border-t border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex gap-4">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
