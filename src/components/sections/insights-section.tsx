"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { ArrowUpRight, Clock } from "lucide-react";
import Image from "next/image";

const articles = [
  {
    title: "The Future of AI in Enterprise Software",
    category: "Technology",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    date: "Oct 12, 2023",
  },
  {
    title: "Maximizing ROI with Programmatic SEO",
    category: "Marketing",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    date: "Oct 05, 2023",
  },
  {
    title: "Designing for Web3: A UX Perspective",
    category: "Design",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
    date: "Sep 28, 2023",
  },
];

export function InsightsSection() {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Latest Insights</h2>
            </Reveal>
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground">
                Thoughts, news, and strategies from our team of experts.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.4}>
            <button className="flex items-center gap-2 font-medium hover:text-primary transition-colors pb-2 border-b border-foreground/20 hover:border-primary">
              Read the Blog <ArrowUpRight className="w-4 h-4" />
            </button>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <FadeIn key={idx} delay={0.1 * idx}>
              <div className="group cursor-pointer">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-muted">
                  <Image 
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  <span className="text-primary">{article.category}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="text-sm text-muted-foreground">{article.date}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
