"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Aura Fintech App",
    category: "Software Development",
    tech: "Next.js, Node.js, Postgres",
    image: "https://images.unsplash.com/photo-1616077168079-7e09a6a2609a?q=80&w=1000&auto=format&fit=crop",
    color: "from-blue-500/20",
  },
  {
    title: "Nexus Cloud Platform",
    category: "Cloud Migration",
    tech: "Python, AWS, React",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    color: "from-purple-500/20",
  },
  {
    title: "Vogue E-Commerce",
    category: "Digital Marketing & Web",
    tech: "Shopify Plus, Meta Ads",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    color: "from-orange-500/20",
  },
  {
    title: "MediCare Dashboard",
    category: "Enterprise Software",
    tech: "React, AWS, Docker",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    color: "from-emerald-500/20",
  }
];

export function FeaturedProjects() {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Featured Work</h2>
            </Reveal>
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground">
                A selection of recent digital products and campaigns that delivered transformative results for our clients.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.4}>
            <button className="flex items-center gap-2 font-medium hover:text-primary transition-colors pb-2 border-b border-foreground/20 hover:border-primary">
              View All Projects <ArrowUpRight className="w-4 h-4" />
            </button>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <FadeIn key={idx} delay={0.1 * idx} direction="up" distance={60}>
              <div className="group relative rounded-3xl overflow-hidden cursor-pointer">
                {/* Image Container with Parallax-like scale */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="glass p-5 rounded-2xl border border-border/50 shadow-2xl backdrop-blur-xl">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-wider">{project.category}</p>
                      <div className="w-8 h-8 rounded-full bg-background/80 flex items-center justify-center -mt-1 -mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <ArrowUpRight className="w-4 h-4 text-foreground" />
                      </div>
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-1 text-foreground leading-tight">{project.title}</h3>
                    <p className="text-muted-foreground text-sm font-mono">{project.tech}</p>
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
