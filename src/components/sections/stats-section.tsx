"use client";

import { FadeIn } from "@/components/animations/fade-in";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SmileyBadge } from "@/components/ui/funky-elements";

const stats = [
  { value: 350, prefix: "+", suffix: "%", label: "Average Client ROI", emoji: "🚀", color: "from-rose-500 to-amber-500" },
  { value: 180, prefix: "", suffix: "+", label: "Global Campaigns & Builds", emoji: "🏆", color: "from-amber-400 to-rose-500" },
  { value: 120, prefix: "$", suffix: "M+", label: "Ad Spend Managed", emoji: "🔥", color: "from-purple-600 to-rose-500" },
  { value: 99, prefix: "", suffix: "%", label: "Client Satisfaction Rate", emoji: "🌟", color: "from-emerald-400 to-sky-500" },
];

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden" ref={ref}>
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-rose-500/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <FadeIn key={idx} delay={0.1 * idx}>
              <div className="relative rounded-3xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl hover:border-rose-500/50 hover:bg-white/10 transition-all duration-300 shadow-xl group flex flex-col justify-between h-full">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{stat.emoji}</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/10 text-white/80 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                    Verified Metric
                  </span>
                </div>

                {/* Number Counter */}
                <div>
                  <div className="text-4xl md:text-5xl font-heading font-black tracking-tight mb-1 text-white flex items-baseline">
                    <span className="text-rose-400">{stat.prefix}</span>
                    {isInView ? (
                      <CountUp end={stat.value} duration={2.5} separator="," />
                    ) : (
                      "0"
                    )}
                    <span className="text-amber-400">{stat.suffix}</span>
                  </div>

                  <p className="text-slate-300 font-bold text-sm leading-snug">
                    {stat.label}
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
