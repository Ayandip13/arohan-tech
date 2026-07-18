"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { Star, Quote } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote: "Arohan Tech completely transformed our digital infrastructure. Their ability to understand complex requirements and deliver flawless execution is unmatched.",
    name: "Sarah Jenkins",
    role: "CTO, Vanguard Financials",
    rating: 5,
  },
  {
    quote: "The marketing campaigns run by Arohan resulted in a 300% ROI within the first quarter. They act as a true partner rather than an outsourced agency.",
    name: "Marcus Thorne",
    role: "CMO, Elevate Retail",
    rating: 5,
  },
  {
    quote: "Integrating their AI models into our customer service pipeline saved us countless hours and significantly improved our user satisfaction scores.",
    name: "Elena Rodriguez",
    role: "VP Operations, TechNova",
    rating: 5,
  },
  {
    quote: "From UX design to robust backend architecture, Arohan delivered a world-class platform that our users absolutely love.",
    name: "David Chen",
    role: "Founder, HealthSync",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Client Success</h2>
        </Reveal>
        <FadeIn delay={0.2}>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Don't just take our word for it. Hear from the leaders who have partnered with us to build the future.
          </p>
        </FadeIn>
      </div>

      <div className="px-4 md:px-8 cursor-grab active:cursor-grabbing">
        <motion.div ref={containerRef} className="overflow-hidden">
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }} 
            className="flex gap-6 md:gap-8 w-max"
          >
            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx}
                className="w-[350px] md:w-[450px] glass p-8 md:p-10 rounded-3xl border border-border flex-shrink-0"
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex gap-1 mb-6 text-secondary">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
                <p className="text-lg text-foreground mb-8 leading-relaxed">
                  "{t.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted overflow-hidden relative border border-border">
                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {t.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold font-heading">{t.name}</h4>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
