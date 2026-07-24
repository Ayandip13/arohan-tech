"use client";

import { ArrowUpRight, Code, Megaphone, PenTool, Sparkles, Rocket, Compass } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SocialMediaIllustration } from "@/components/ui/marketing-illustrations";
import { GRADIENT_PRESETS, BADGE_COLOR_PRESETS } from "@/config/theme-colors";

const services = [
  {
    icon: <Megaphone className="w-5 h-5" />,
    badge: "Growth Engine",
    color: GRADIENT_PRESETS.primary,
    tagBg: `${BADGE_COLOR_PRESETS.rose.bg} ${BADGE_COLOR_PRESETS.rose.text}`,
    title: "Digital Marketing & Ads",
    description: "Data-driven Meta & Google ad campaigns, social media virality, high-converting funnel optimization, and brand positioning engineered for maximum ROAS.",
    features: ["ROI Performance Ads", "Meta & Google Campaigns", "Social Media Virality"],
    illustration: <SocialMediaIllustration className="w-full h-auto max-h-36" />,
    featured: true,
  },
  {
    icon: <PenTool className="w-5 h-5" />,
    badge: "Brand Identity",
    color: GRADIENT_PRESETS.secondary,
    tagBg: `${BADGE_COLOR_PRESETS.amber.bg} ${BADGE_COLOR_PRESETS.amber.text}`,
    title: "Brand Strategy & UI/UX",
    description: "Award-winning visual identities, design systems, logos, and interactive web designs that turn casual visitors into passionate brand advocates.",
    features: ["Brand Identity Systems", "Product UI/UX Design"],
    illustration: null,
    featured: false,
  },
  {
    icon: <Code className="w-5 h-5" />,
    badge: "Web & Mobile",
    color: GRADIENT_PRESETS.purple,
    tagBg: `${BADGE_COLOR_PRESETS.purple.bg} ${BADGE_COLOR_PRESETS.purple.text}`,
    title: "Web & Mobile App Dev",
    description: "High-speed Next.js websites, mobile iOS/Android apps, and custom digital portals built for flawless conversion and lightning speed.",
    features: ["Next.js & React Apps", "iOS & Android Apps"],
    illustration: null,
    featured: false,
  },
  {
    icon: <Compass className="w-5 h-5" />,
    badge: "Organic Growth",
    color: GRADIENT_PRESETS.emerald,
    tagBg: `${BADGE_COLOR_PRESETS.emerald.bg} ${BADGE_COLOR_PRESETS.emerald.text}`,
    title: "SEO & Content Marketing",
    description: "Programmatic SEO, organic search dominance, viral video content production, and conversion rate optimization that scale organic traffic.",
    features: ["Technical & On-Page SEO", "Video Production"],
    illustration: null,
    featured: false,
  },
];

export function ServicesPreview() {
  return (
    <section className="py-28 lg:py-36 relative bg-background overflow-hidden" id="services">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 text-rose-500 font-extrabold text-xs uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5" />
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
              Bridging high-impact digital marketing with bespoke design and web development to deliver complete brand scaling.
            </p>
          </FadeIn>
        </div>

        {/* Editorial Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Featured Main Service Card */}
          <div className="lg:col-span-5 flex">
            <FadeIn delay={0.1} className="w-full">
              <div className="group relative h-full rounded-3xl p-6 md:p-7 bg-card border border-border/80 hover:border-rose-500/50 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
                <div className={`absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br ${services[0].color} opacity-10 rounded-full blur-2xl pointer-events-none`} />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${services[0].color} text-white flex items-center justify-center shadow-sm`}>
                      {services[0].icon}
                    </div>
                    <span className={`px-3 py-1 rounded-full font-extrabold text-[10px] uppercase tracking-wider ${services[0].tagBg}`}>
                      {services[0].badge}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-heading font-black mb-2 text-foreground group-hover:text-rose-500 transition-colors">
                    {services[0].title}
                  </h3>

                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-4">
                    {services[0].description}
                  </p>

                  <div className="my-3 flex justify-center">
                    {services[0].illustration}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {services[0].features.map((f, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md bg-muted/60 text-[10px] font-semibold text-foreground/80">
                        ✓ {f}
                      </span>
                    ))}
                  </div>
                  <Link href="/services" className="inline-flex items-center gap-1 font-bold text-xs text-rose-500 hover:underline shrink-0">
                    <span>Explore</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* 3 Compact Side Services */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {services.slice(1).map((service, index) => (
              <FadeIn key={service.title} delay={0.15 * (index + 1)}>
                <div className="group rounded-2xl p-5 bg-card border border-border/80 hover:border-rose-500/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 shrink-0 rounded-xl bg-gradient-to-tr ${service.color} text-white flex items-center justify-center shadow-sm`}>
                      {service.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-base font-heading font-black text-foreground group-hover:text-rose-500 transition-colors">
                          {service.title}
                        </h4>
                        <span className={`px-2 py-0.5 rounded-full font-black text-[9px] uppercase tracking-wider ${service.tagBg}`}>
                          {service.badge}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed max-w-lg">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <Link href="/services" className="shrink-0 inline-flex items-center gap-1 text-xs font-bold text-foreground group-hover:text-rose-500 transition-colors pt-2 sm:pt-0">
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>

        {/* Bottom CTA Button */}
        <FadeIn delay={0.4}>
          <div className="mt-14 text-center">
            <Link href="/services">
              <Button variant="gradient" size="default" className="rounded-full shadow-md shadow-rose-500/15 px-7 font-extrabold text-xs">
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
