"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { ArrowUpRight, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Alex Mercer",
    role: "Growth Architect & Founder",
    tag: "10+ Yrs Growth",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sophia Lin",
    role: "Design Director",
    tag: "UI/UX & Motion",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "James Carter",
    role: "Chief Hype Officer",
    tag: "Viral Ads & PPC",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Elena Rostova",
    role: "Brand Strategist",
    tag: "MarTech & Growth",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
  },
];

export function TeamPreview() {
  return (
    <section className="py-28 lg:py-36 bg-background relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 text-rose-500 font-extrabold text-xs uppercase tracking-widest mb-3">
                <Users className="w-3.5 h-3.5" />
                <span>The Minds Behind The Magic</span>
              </div>
            </FadeIn>

            <Reveal>
              <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight leading-tight">
                Meet Our Creative & <span className="gradient-text-coral-amber">Growth Mavericks.</span>
              </h2>
            </Reveal>
          </div>

          <FadeIn delay={0.2}>
            <Link href="/team">
              <Button variant="outline" size="default" className="rounded-full border-2 border-foreground/20 hover:border-rose-500 font-extrabold text-xs">
                <span>View Full Team</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </Link>
          </FadeIn>
        </div>

        {/* 4 Team Member Cards - Compact Aspect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member, idx) => (
            <FadeIn key={idx} delay={0.1 * idx}>
              <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-card border border-border/80 hover:border-rose-500/40 shadow-md hover:shadow-lg transition-all duration-300">
                
                {/* Photo */}
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                />

                {/* Gradient Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-90" />

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-rose-500 text-white shadow-sm">
                    {member.tag}
                  </span>
                </div>

                {/* Bottom Copy */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="text-base font-heading font-black text-white mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-slate-300 text-xs font-medium">
                    {member.role}
                  </p>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
