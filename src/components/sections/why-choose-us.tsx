"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { Shield, Zap, Target, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Uncompromising Quality",
    description: "Every line of code and every pixel is crafted with meticulous attention to detail.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning Fast Delivery",
    description: "Agile methodologies ensure rapid prototyping and continuous deployment.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Data-Driven Strategy",
    description: "Decisions backed by analytics to guarantee maximum ROI for your business.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "Transparent Partnership",
    description: "Clear communication, honest timelines, and full visibility into our process.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 sticky top-32">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Why Arohan?</h2>
            </Reveal>
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground">
                We don't just build websites and run campaigns. We architect scalable digital businesses.
              </p>
            </FadeIn>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <FadeIn key={idx} delay={0.1 * idx}>
                <div className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
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
