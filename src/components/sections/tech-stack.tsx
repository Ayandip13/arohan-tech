"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { 
  PhoneCall, 
  FileText, 
  Search, 
  Map, 
  Palette, 
  Rocket, 
  CheckCircle2, 
  Eye, 
  Send, 
  TrendingUp,
  Sparkles
} from "lucide-react";
import { FunkySticker } from "@/components/ui/funky-elements";

const workflowSteps = [
  {
    step: "01",
    title: "Discovery Call",
    subtitle: "Understanding your vision & growth goals",
    desc: "We initiate a deep-dive alignment session to map your business targets, target audience personas, budget, and competitive positioning.",
    icon: <PhoneCall className="w-5 h-5 text-rose-500" />,
    color: "from-rose-500 to-amber-500",
    deliverables: ["Growth Goals Blueprint", "Audience Analysis", "Project Scope"]
  },
  {
    step: "02",
    title: "Requirement Analysis",
    subtitle: "Auditing & defining exact project KPIs",
    desc: "Our strategists analyze your existing marketing funnels, website analytics, and technical infrastructure to locate friction points.",
    icon: <FileText className="w-5 h-5 text-amber-500" />,
    color: "from-amber-400 to-rose-500",
    deliverables: ["Funnels Audit Report", "KPI Definition", "Technical Requirements"]
  },
  {
    step: "03",
    title: "Research & Strategy",
    subtitle: "Data-driven growth & brand roadmap",
    desc: "We conduct market research, competitor benchmarking, and channel selection to engineer an unbeatable ROI strategy.",
    icon: <Search className="w-5 h-5 text-purple-500" />,
    color: "from-purple-600 to-rose-500",
    deliverables: ["Competitor Benchmarks", "Channel Strategy", "Campaign Messaging"]
  },
  {
    step: "04",
    title: "Planning & Architecture",
    subtitle: "Sprint milestones & content calendar",
    desc: "We map out content calendars, ad budgets, UX wireframes, and project sprint milestones for crystal-clear execution.",
    icon: <Map className="w-5 h-5 text-emerald-500" />,
    color: "from-emerald-400 to-sky-500",
    deliverables: ["Content Calendar", "Wireframes Map", "Sprint Schedule"]
  },
  {
    step: "05",
    title: "Design & Content",
    subtitle: "Crafting iconic visuals & viral copy",
    desc: "Our creative studio designs high-converting ad creative, brand identity systems, landing page UI/UX, and compelling copy.",
    icon: <Palette className="w-5 h-5 text-rose-500" />,
    color: "from-rose-500 to-amber-500",
    deliverables: ["Ad Creatives Suite", "UI/UX Mockups", "High-Converting Copy"]
  },
  {
    step: "06",
    title: "Development / Campaign Setup",
    subtitle: "Building platforms & ad infrastructure",
    desc: "Engineers develop responsive web apps while growth marketers build Meta/Google ad structures and analytics tracking pixels.",
    icon: <Rocket className="w-5 h-5 text-sky-500" />,
    color: "from-sky-500 to-purple-600",
    deliverables: ["Web Application", "Pixel & Event Tracking", "Ad Campaign Structure"]
  },
  {
    step: "07",
    title: "Testing & Quality Assurance",
    subtitle: "Performance & conversion verification",
    desc: "Rigorously testing page speed, cross-device responsiveness, attribution tracking, and creative ad variations before spend opens.",
    icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
    color: "from-emerald-400 to-rose-500",
    deliverables: ["PageSpeed 95+ Audit", "Attribution Test", "Multi-Device QA"]
  },
  {
    step: "08",
    title: "Client Review & Feedback",
    subtitle: "Collaborative refinement & approval",
    desc: "We present complete creative assets and campaign setups for client walkthrough, feedback iterations, and final sign-off.",
    icon: <Eye className="w-5 h-5 text-amber-500" />,
    color: "from-amber-400 to-purple-600",
    deliverables: ["Client Walkthrough", "Final Iterations", "Launch Approval"]
  },
  {
    step: "09",
    title: "Launch & Campaign Go-Live",
    subtitle: "Pushing the button & scaling reach",
    desc: "Official rollout of web platforms and activation of paid social & search campaigns with real-time analytics monitoring.",
    icon: <Send className="w-5 h-5 text-rose-500" />,
    color: "from-rose-500 to-emerald-400",
    deliverables: ["Platform Go-Live", "Live Paid Ad Launch", "Realtime Dashboard"]
  },
  {
    step: "10",
    title: "Optimization & Scale",
    subtitle: "Continuous A/B testing & max ROI growth",
    desc: "Ongoing weekly growth sprints, ad creative refreshes, conversion rate optimization (CRO), and scaling ad budgets for peak ROI.",
    icon: <TrendingUp className="w-5 h-5 text-amber-400" />,
    color: "from-amber-400 to-rose-500",
    deliverables: ["Weekly Growth Sprints", "Creative Refreshes", "Scale Analytics"]
  }
];

export function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress inside section for vertical line fill
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section 
      ref={containerRef} 
      className="py-28 bg-card/60 relative overflow-hidden border-y border-rose-500/15"
      id="workflow"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-500 font-extrabold text-xs uppercase tracking-widest mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Proven Growth Methodology</span>
            </div>
          </FadeIn>

          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight leading-tight">
              How We Deliver Projects From{" "}
              <span className="gradient-text-coral-amber">Start To Finish.</span>
            </h2>
          </Reveal>

          <FadeIn delay={0.2}>
            <p className="text-muted-foreground text-base md:text-lg font-normal mt-4">
              Our 10-step agency workflow engineered for seamless collaboration, rapid execution, and maximum ROI.
            </p>
          </FadeIn>
        </div>

        {/* Interactive Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto px-2 md:px-0">
          
          {/* Animated Progressive Vertical Progress Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 bg-border/60 -translate-x-1/2 rounded-full" />
          <motion.div 
            style={{ scaleY }}
            className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1.5 bg-gradient-to-b from-rose-500 via-amber-400 to-purple-600 -translate-x-1/2 rounded-full origin-top z-10 shadow-[0_0_15px_rgba(244,63,94,0.6)]"
          />

          {/* 10 Timeline Cards */}
          <div className="space-y-12 relative z-20">
            {workflowSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <FadeIn key={idx} delay={0.05 * idx}>
                  <div className={`flex flex-col md:flex-row items-center gap-6 ${isEven ? "md:flex-row-reverse" : ""}`}>
                    
                    {/* Step Card */}
                    <div className="w-full md:w-[calc(50%-2.5rem)] pl-12 md:pl-0">
                      <div className="group rounded-3xl p-6 bg-background border-2 border-border/80 hover:border-rose-500/50 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                        
                        {/* Top Badge & Number */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2.5">
                            <div className={`p-2.5 rounded-2xl bg-gradient-to-tr ${step.color} text-white shadow-md group-hover:scale-110 transition-transform`}>
                              {step.icon}
                            </div>
                            <span className="font-heading font-black text-2xl text-rose-500">
                              {step.step}
                            </span>
                          </div>

                          <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-500/10 text-rose-500">
                            Phase {idx + 1}
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <h3 className="text-xl font-heading font-black text-foreground mb-1 group-hover:text-rose-500 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-3">
                          {step.subtitle}
                        </p>

                        {/* Description */}
                        <p className="text-muted-foreground text-sm leading-relaxed font-normal mb-5">
                          {step.desc}
                        </p>

                        {/* Deliverables Tags */}
                        <div className="pt-3 border-t border-border/60 flex flex-wrap gap-2">
                          {step.deliverables.map((d, dIdx) => (
                            <span key={dIdx} className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-muted/80 text-foreground border border-border/60">
                              ✓ {d}
                            </span>
                          ))}
                        </div>

                      </div>
                    </div>

                    {/* Timeline Node Icon (Center) */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-rose-500 flex items-center justify-center font-black text-xs text-foreground shadow-lg z-30 group-hover:scale-125 transition-transform">
                      {step.step}
                    </div>

                    {/* Spacer for two column balance */}
                    <div className="hidden md:block w-[calc(50%-2.5rem)]" />

                  </div>
                </FadeIn>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
