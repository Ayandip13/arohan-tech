"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { Activity, BookOpen, ShoppingBag, Home, Landmark, Factory, Laptop, Coffee } from "lucide-react";

const industries = [
  { name: "Healthcare", icon: <Activity className="w-8 h-8" /> },
  { name: "Education", icon: <BookOpen className="w-8 h-8" /> },
  { name: "Retail", icon: <ShoppingBag className="w-8 h-8" /> },
  { name: "Real Estate", icon: <Home className="w-8 h-8" /> },
  { name: "Finance", icon: <Landmark className="w-8 h-8" /> },
  { name: "Manufacturing", icon: <Factory className="w-8 h-8" /> },
  { name: "Technology", icon: <Laptop className="w-8 h-8" /> },
  { name: "Hospitality", icon: <Coffee className="w-8 h-8" /> },
];

export function IndustriesSection() {
  return (
    <section className="py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Industries We Serve</h2>
          </Reveal>
          <FadeIn delay={0.2}>
            <p className="text-xl text-muted-foreground">
              Our multidisciplinary team adapts to the unique technical and marketing challenges of various sectors.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {industries.map((ind, idx) => (
            <FadeIn key={idx} delay={0.05 * idx} direction="up" distance={20}>
              <div className="group flex flex-col items-center justify-center p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 cursor-default h-full">
                <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-4 group-hover:-translate-y-2 transform">
                  {ind.icon}
                </div>
                <h3 className="font-heading font-semibold text-foreground">{ind.name}</h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
