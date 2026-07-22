"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { ArrowUpRight, Sparkles, Flame, Trophy, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Vogue & Velvet Rebrand",
    category: "Brand & Digital Campaign",
    metrics: "+420% Sales Boost",
    tech: "Brand Strategy, TikTok Ads, Shopify",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    gradient: "from-rose-500/80 to-amber-500/80",
    badgeBg: "bg-rose-500 text-white"
  },
  {
    title: "Aura FinTech Platform",
    category: "Full-Stack Software Dev",
    metrics: "$12M Capital Raised",
    tech: "Next.js 15, PostgreSQL, TailWind",
    image: "https://images.unsplash.com/photo-1616077168079-7e09a6a2609a?q=80&w=1000&auto=format&fit=crop",
    gradient: "from-amber-500/80 to-purple-600/80",
    badgeBg: "bg-amber-400 text-slate-950"
  },
  {
    title: "Nexus Cloud AI Engine",
    category: "AI & Automation Solutions",
    metrics: "2.4M Daily API Queries",
    tech: "Python LLMs, AWS, React",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    gradient: "from-purple-600/80 to-rose-500/80",
    badgeBg: "bg-purple-600 text-white"
  },
  {
    title: "MediCare Health App",
    category: "Mobile & UI/UX Design",
    metrics: "1.2M App Store Downloads",
    tech: "React Native, UI/UX System",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    gradient: "from-emerald-500/80 to-sky-500/80",
    badgeBg: "bg-emerald-500 text-slate-950"
  }
];

export function FeaturedProjects() {
  return (
    <section className="py-32 bg-card/40 relative overflow-hidden" id="work">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-500 font-extrabold text-xs uppercase tracking-widest mb-4">
                <Trophy className="w-4 h-4" />
                <span>Our Masterpieces</span>
              </div>
            </FadeIn>

            <Reveal>
              <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-tight">
                Case Studies & <span className="gradient-text-coral-amber">Growth Stories.</span>
              </h2>
            </Reveal>
          </div>

          <FadeIn delay={0.3}>
            <Link href="/work">
              <Button variant="outline" size="lg" className="rounded-full border-2 border-foreground/20 hover:border-rose-500">
                <span>Explore All Work</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </FadeIn>
        </div>

        {/* 4 Poster Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <FadeIn key={idx} delay={0.15 * idx}>
              <Link href="/work">
                <div className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[16/11] border-2 border-border/80 hover:border-rose-500/50 shadow-2xl transition-all duration-500">
                  
                  {/* Background Image with Zoom */}
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-40 group-hover:opacity-75 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors duration-500" />

                  {/* Top Badges */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-lg ${project.badgeBg}`}>
                      {project.metrics}
                    </span>

                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Bottom Info Card */}
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <div className="p-6 rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-white/10 shadow-2xl text-white">
                      <div className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-1">
                        {project.category}
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-heading font-black mb-2 leading-tight">
                        {project.title}
                      </h3>

                      <p className="text-slate-300 text-xs font-medium">
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
