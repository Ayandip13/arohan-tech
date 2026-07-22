"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { Star, Quote, Heart, Sparkles, MessageSquare } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Arohan Tech didn't just redesign our website—they overhauled our entire digital marketing engine. Our sales skyrocketed by 350% in 90 days!",
    name: "Sarah Jenkins",
    role: "CMO, Vanguard Global",
    impact: "+350% Revenue Lift",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    color: "from-rose-500/10 to-amber-500/10",
  },
  {
    quote: "The combination of high-converting creative ad campaigns and custom AI software built by Arohan cut our customer acquisition costs by half.",
    name: "Marcus Thorne",
    role: "Founder, Elevate Commerce",
    impact: "50% CAC Reduction",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    color: "from-amber-500/10 to-rose-500/10",
  },
  {
    quote: "Their team acts like a true inline growth partner. Unbelievable design quality, lightning-fast execution, and radical transparency.",
    name: "Elena Rodriguez",
    role: "VP Marketing, TechNova",
    impact: "1.2M New Leads",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    color: "from-purple-500/10 to-rose-500/10",
  },
  {
    quote: "From UI/UX design to robust mobile apps, Arohan delivered an award-winning platform that our users absolutely love.",
    name: "David Chen",
    role: "CTO, HealthSync",
    impact: "4.9 App Store Rating",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    color: "from-emerald-500/10 to-sky-500/10",
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
    <section className="py-32 bg-card/40 overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 mb-16">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-500 font-extrabold text-xs uppercase tracking-widest mb-4">
            <MessageSquare className="w-4 h-4" />
            <span>Love From Our Partners</span>
          </div>
        </FadeIn>

        <Reveal>
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-tight">
            What Founders & CMOs Say <span className="gradient-text-coral-amber">About Us.</span>
          </h2>
        </Reveal>
      </div>

      <div className="px-4 md:px-8 cursor-grab active:cursor-grabbing">
        <motion.div ref={containerRef} className="overflow-hidden">
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }} 
            className="flex gap-6 md:gap-8 w-max pb-6"
          >
            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx}
                className="w-[360px] md:w-[460px] p-8 md:p-10 rounded-3xl bg-background border-2 border-border/80 hover:border-rose-500/50 shadow-xl flex-shrink-0 flex flex-col justify-between"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400" />
                      ))}
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-rose-500/10 text-rose-500">
                      {t.impact}
                    </span>
                  </div>
                  
                  <Quote className="w-8 h-8 text-rose-500/30 mb-4" />
                  
                  <p className="text-base md:text-lg text-foreground mb-8 leading-relaxed font-medium">
                    "{t.quote}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 pt-6 border-t border-border/60">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-rose-500/30 shadow-md" />
                  <div>
                    <h4 className="font-extrabold font-heading text-foreground">{t.name}</h4>
                    <p className="text-xs font-semibold text-muted-foreground">{t.role}</p>
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
