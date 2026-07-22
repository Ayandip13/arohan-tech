"use client";

import { ArrowUpRight, Code, Megaphone, Smartphone, Bot, Cloud, PenTool, Sparkles, TrendingUp, Cpu, Rocket } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Megaphone className="w-7 h-7" />,
    badge: "Growth Engine",
    color: "from-rose-500 to-amber-500",
    shadow: "shadow-rose-500/20",
    tagBg: "bg-rose-500/10 text-rose-500",
    title: "Digital Marketing & Performance",
    description: "Data-driven PPC campaigns, social media virality, high-converting SEO, and brand positioning engineered to dominate market share.",
    features: ["ROI Performance Ads", "SEO & Content Marketing", "Social Media Growth", "Influencer Strategy"],
    span: "lg:col-span-2",
  },
  {
    icon: <PenTool className="w-7 h-7" />,
    badge: "Brand Identity",
    color: "from-amber-400 to-rose-500",
    shadow: "shadow-amber-500/20",
    tagBg: "bg-amber-500/10 text-amber-600",
    title: "Brand Strategy & UI/UX Design",
    description: "Award-winning visual identities, design systems, and interactive digital experiences that turn visitors into brand advocates.",
    features: ["Brand Identity Systems", "Product UI/UX Design", "Motion & 3D Visuals", "Design Systems"],
    span: "lg:col-span-1",
  },
  {
    icon: <Code className="w-7 h-7" />,
    badge: "Tech Architecture",
    color: "from-purple-500 to-rose-500",
    shadow: "shadow-purple-500/20",
    tagBg: "bg-purple-500/10 text-purple-500",
    title: "Full-Stack Software Engineering",
    description: "Enterprise web apps, high-throughput backend APIs, and custom software engineered for lightning speed and infinite scalability.",
    features: ["Next.js & React Apps", "Scalable Microservices", "Custom CRM & ERPs", "Mobile iOS/Android"],
    span: "lg:col-span-1",
  },
  {
    icon: <Bot className="w-7 h-7" />,
    badge: "Next-Gen AI",
    color: "from-emerald-400 to-sky-500",
    shadow: "shadow-emerald-500/20",
    tagBg: "bg-emerald-500/10 text-emerald-600",
    title: "AI Solutions & Automation",
    description: "Custom AI agents, intelligent workflow automation, and predictive analytics that reduce operational cost by 60%.",
    features: ["Custom LLM Integration", "Marketing Automation", "AI Chatbots & Agents", "Predictive Analytics"],
    span: "lg:col-span-2",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-32 relative bg-background overflow-hidden" id="services">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-500 font-extrabold text-xs uppercase tracking-widest mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Our Superpowers</span>
              </div>
            </FadeIn>
            
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-tight">
                Where Creative Marketing Meets <span className="gradient-text-coral-amber">Engineered Excellence.</span>
              </h2>
            </Reveal>
          </div>

          <FadeIn delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-md font-normal leading-relaxed">
              We bridge high-impact digital marketing with elite software development to deliver total business transformation.
            </p>
          </FadeIn>
        </div>

        {/* Bento Grid Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={0.1 * index} className={service.span}>
              <div className="group relative h-full rounded-3xl p-8 md:p-10 bg-card border-2 border-border/80 hover:border-rose-500/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between">
                
                {/* Background glow on hover */}
                <div className={`absolute -top-24 -right-24 w-60 h-60 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 rounded-full blur-3xl transition-opacity duration-500 pointer-events-none`} />

                <div>
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${service.color} text-white flex items-center justify-center shadow-lg ${service.shadow} group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>

                    <span className={`px-3 py-1 rounded-full font-extrabold text-xs uppercase tracking-wider ${service.tagBg}`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl md:text-3xl font-heading font-black mb-4 text-foreground group-hover:text-rose-500 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-base leading-relaxed mb-8 font-normal">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.features.map((feat, fIdx) => (
                      <span key={fIdx} className="px-3 py-1 rounded-xl bg-muted/60 text-xs font-semibold text-foreground/80 border border-border/60">
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-6 border-t border-border/60">
                  <Link href="/services" className="inline-flex items-center gap-2 font-bold text-sm text-foreground group-hover:text-rose-500 transition-colors">
                    <span>Explore Capability</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <FadeIn delay={0.5}>
          <div className="mt-16 text-center">
            <Link href="/services">
              <Button variant="gradient" size="lg" className="rounded-full shadow-lg shadow-rose-500/20">
                <span>View All Services & Solutions</span>
                <Rocket className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
