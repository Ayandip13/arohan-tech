"use client";

import { FadeIn } from "@/components/animations/fade-in";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 45, suffix: "", label: "Enterprise Clients" },
  { value: 12, suffix: "", label: "Countries Served" },
  { value: 250, suffix: "M+", label: "Client Revenue Generated" },
];

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-primary relative overflow-hidden" ref={ref}>
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-primary-foreground/10">
          {stats.map((stat, idx) => (
            <FadeIn key={idx} delay={0.1 * idx} className={idx === 0 ? "" : "pl-8 md:pl-12"}>
              <div className="flex flex-col">
                <div className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-2 flex items-baseline">
                  {isInView ? (
                    <CountUp end={stat.value} duration={2.5} separator="," />
                  ) : (
                    "0"
                  )}
                  <span className="text-2xl md:text-4xl text-secondary">{stat.suffix}</span>
                </div>
                <p className="text-primary-foreground/70 font-medium tracking-wide">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
