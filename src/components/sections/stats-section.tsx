"use client";

import { FadeIn } from "@/components/animations/fade-in";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: 210, prefix: "+", suffix: "%", label: "Average Client ROI" },
  { value: 220, prefix: "", suffix: "+", label: "Global Campaigns & Builds" },
  { value: 330, prefix: "₹", suffix: "K+", label: "Ad Spend Managed" },
  { value: 94, prefix: "", suffix: "%", label: "Conversion Rate" },
];

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden" ref={ref}>
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 max-w-full w-[500px] h-[500px] bg-rose-500/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="rounded-3xl p-8 bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {stats.map((stat, idx) => (
              <FadeIn key={idx} delay={0.1 * idx} className="pt-4 sm:pt-0 sm:px-4 first:pt-0 first:px-0">
                <div className="flex flex-col items-center text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-white mb-1 flex items-baseline">
                    <span className="text-rose-400">{stat.prefix}</span>
                    {isInView ? (
                      <CountUp end={stat.value} duration={2.5} separator="," />
                    ) : (
                      "0"
                    )}
                    <span className="text-amber-400">{stat.suffix}</span>
                  </div>

                  <p className="text-slate-300 font-bold text-xs sm:text-sm tracking-wide">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
