"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { ArrowUpRight, Sparkles, Users, Share2, Mail, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Alex Mercer",
    role: "Growth Architect & Founder",
    tag: "10+ Yrs Growth",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    color: "from-rose-500 to-amber-500",
  },
  {
    name: "Sophia Lin",
    role: "Design Alchemist",
    tag: "UI/UX & 3D Motion",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    color: "from-amber-400 to-rose-500",
  },
  {
    name: "James Carter",
    role: "Chief Hype Officer",
    tag: "Viral Ads & PPC",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
    color: "from-purple-600 to-rose-500",
  },
  {
    name: "Dr. Elena Rostova",
    role: "AI & Tech Lead",
    tag: "LLMs & Cloud Infra",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    color: "from-emerald-400 to-sky-500",
  },
];

export function TeamPreview() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-500 font-extrabold text-xs uppercase tracking-widest mb-4">
                <Users className="w-4 h-4" />
                <span>The Minds Behind The Magic</span>
              </div>
            </FadeIn>

            <Reveal>
              <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-tight">
                Meet Our Creative & <span className="gradient-text-coral-amber">Tech Mavericks.</span>
              </h2>
            </Reveal>
          </div>

          <FadeIn delay={0.3}>
            <Link href="/team">
              <Button variant="outline" size="lg" className="rounded-full border-2 border-foreground/20 hover:border-rose-500">
                <span>View Full Team</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </FadeIn>
        </div>

        {/* 4 Team Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <FadeIn key={idx} delay={0.15 * idx}>
              <div className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-card border-2 border-border/80 hover:border-rose-500/50 shadow-xl hover:shadow-2xl transition-all duration-500">
                
                {/* Photo */}
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />

                {/* Gradient Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-500 text-white shadow-md">
                    {member.tag}
                  </span>
                </div>

                {/* Bottom Copy */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <h3 className="text-2xl font-heading font-black text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-amber-400 font-semibold text-xs mb-4">
                    {member.role}
                  </p>

                  <div className="flex items-center gap-3 pt-3 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-rose-500 transition-colors" aria-label="Social Link">
                      <Share2 className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-rose-500 transition-colors" aria-label="Website Link">
                      <Globe className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-rose-500 transition-colors" aria-label="Email Link">
                      <Mail className="w-4 h-4" />
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
