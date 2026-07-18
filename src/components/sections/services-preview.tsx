"use client";

import { ArrowUpRight, Code, Megaphone, Smartphone, Bot, Cloud, PenTool } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";

const services = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Software Engineering",
    description: "Enterprise-grade web and mobile applications built with scalable architectures and modern tech stacks.",
    span: "md:col-span-2 lg:col-span-2",
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Digital Marketing",
    description: "Data-driven campaigns, SEO, and social media strategies that guarantee ROI.",
    span: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud Infrastructure",
    description: "Secure, scalable, and resilient cloud architectures tailored for modern enterprise needs.",
    span: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "UI/UX Design",
    description: "Award-winning digital experiences that delight users and boost conversion rates.",
    span: "md:col-span-2 lg:col-span-2",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-32 relative bg-background" id="services">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-20 max-w-3xl">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Capabilities</h2>
          </Reveal>
          <FadeIn delay={0.2}>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We bridge the gap between creative marketing and deep technical execution to provide end-to-end solutions.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={0.1 * index} className={service.span}>
              <div className="group relative h-full glass border border-border/50 rounded-3xl p-8 md:p-10 overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_-10px_rgba(var(--primary),0.3)]">
                {/* Background glow on hover */}
                <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/10 to-transparent blur-2xl transition-opacity duration-500 rounded-3xl" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-muted/50 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-12 flex-grow">{service.description}</p>
                  
                  <div className="mt-auto">
                    <button className="flex items-center gap-2 font-medium text-foreground group-hover:text-primary transition-colors">
                      Learn more 
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
