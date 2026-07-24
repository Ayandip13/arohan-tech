"use client";

import { ArrowUpRight, Code, Megaphone, Smartphone, PenTool, Sparkles, Rocket, Compass } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Megaphone className="w-6 h-6" />,
    badge: "Growth Engine",
    color: "from-rose-500 to-amber-500",
    shadow: "shadow-rose-500/20",
    tagBg: "bg-rose-500/10 text-rose-500",
    title: "Digital Marketing & Ads",
    description: "Data-driven Meta & Google ad campaigns, social media virality, high-converting funnel optimization, and brand positioning engineered for maximum ROAS.",
    features: ["ROI Performance Ads", "Meta & Google Campaigns", "Social Media Growth", "Influencer Strategy"],
    span: "lg:col-span-2",
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    badge: "Brand Identity",
    color: "from-amber-400 to-rose-500",
    shadow: "shadow-amber-500/20",
    tagBg: "bg-amber-500/10 text-amber-600",
    title: "Brand Strategy & UI/UX",
    description: "Award-winning visual identities, design systems, logos, and interactive web designs that turn casual visitors into passionate brand advocates.",
    features: ["Brand Identity Systems", "Product UI/UX Design", "Motion Graphics", "Design Systems"],
    span: "lg:col-span-1",
  },
  {
    icon: <Code className="w-6 h-6" />,
    badge: "Web & Mobile",
    color: "from-purple-500 to-rose-500",
    shadow: "shadow-purple-500/20",
    tagBg: "bg-purple-500/10 text-purple-500",
    title: "Web & Mobile App Development",
    description: "High-speed Next.js websites, mobile iOS/Android apps, and custom digital portals built for flawless conversion and lightning speed.",
    features: ["Next.js & React Apps", "iOS & Android Apps", "Custom Web Portals", "E-Commerce Stores"],
    span: "lg:col-span-1",
  },
  {
    icon: <Compass className="w-6 h-6" />,
    badge: "Organic Growth",
    color: "from-emerald-400 to-sky-500",
    shadow: "shadow-emerald-500/20",
    tagBg: "bg-emerald-500/10 text-emerald-600",
    title: "SEO & Content Marketing",
    description: "Programmatic SEO, organic search dominance, viral video content production, and conversion rate optimization that scale organic traffic.",
    features: ["Technical & On-Page SEO", "Content Creation", "Video Production", "Conversion Rate Optimization"],
    span: "lg:col-span-2",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 relative bg-background overflow-hidden" id="services">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-rose-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-500 font-extrabold text-xs uppercase tracking-widest mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Our Capabilities</span>
              </div>
            </FadeIn>
            
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight leading-tight">
                Where Creative Marketing Meets <span className="gradient-text-coral-amber">Engineered Growth.</span>
              </h2>
            </Reveal>
          </div>

          <FadeIn delay={0.2}>
            <p className="text-muted-foreground text-sm md:text-base max-w-md font-normal leading-relaxed">
              We bridge high-impact digital marketing with bespoke design and web development to deliver complete brand scaling.
            </p>
          </FadeIn>
        </div>

        {/* Compact Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={0.1 * index} className={service.span}>
              <div className="group relative h-full rounded-3xl p-6 md:p-7 bg-card border-2 border-border/80 hover:border-rose-500/50 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
                
                {/* Background glow on hover */}
                <div className={`absolute -top-24 -right-24 w-60 h-60 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 rounded-full blur-3xl transition-opacity duration-300 pointer-events-none`} />

                <div>
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${service.color} text-white flex items-center justify-center shadow-md ${service.shadow} group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>

                    <span className={`px-3 py-1 rounded-full font-black text-[10px] uppercase tracking-wider ${service.tagBg}`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl md:text-2xl font-heading font-black mb-3 text-foreground group-hover:text-rose-500 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <span key={fIdx} className="px-2.5 py-1 rounded-lg bg-muted/60 text-[11px] font-semibold text-foreground/80 border border-border/60">
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-border/60">
                  <Link href="/services" className="inline-flex items-center gap-2 font-bold text-xs text-foreground group-hover:text-rose-500 transition-colors">
                    <span>Explore Capability</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button variant="gradient" size="lg" className="rounded-full shadow-lg shadow-rose-500/20 px-7 font-extrabold">
                <span>View All Marketing & Design Services</span>
                <Rocket className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
