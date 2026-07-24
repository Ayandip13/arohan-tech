import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { FinalCTA } from "@/components/sections/final-cta";
import { Metadata } from "next";
import { Rocket, Award } from "lucide-react";
import { BrandingIllustration } from "@/components/ui/marketing-illustrations";

export const metadata: Metadata = {
  title: "About Us | Arohan Creative Marketing Agency",
  description: "Discover the story, mission, and vision behind Arohan — a high-energy Creative Digital Marketing Agency.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <PageHero 
          title="Architecting the Future of Digital Business & Growth"
          description="We are a collective of elite digital marketers, brand designers, and web developers dedicated to transforming how modern brands scale."
          badge="Our Story"
          breadcrumbs={[{ label: "About", href: "/about" }]}
        />

        {/* Mission & Vision */}
        <section className="py-20 bg-card/40 relative">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <FadeIn>
                <div className="p-7 rounded-3xl bg-background border-2 border-rose-500/30 shadow-lg h-full relative overflow-hidden group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 text-white flex items-center justify-center mb-5 shadow-md">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-heading font-black mb-3 text-foreground">Our Mission</h2>
                  <p className="text-base text-muted-foreground leading-relaxed font-normal">
                    To empower ambitious brands and startups with high-converting marketing campaigns, iconic brand identity, and scalable web experiences engineered for massive ROI.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <div className="p-7 rounded-3xl bg-background border-2 border-amber-500/30 shadow-lg h-full relative overflow-hidden group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-rose-500 text-white flex items-center justify-center mb-5 shadow-md">
                    <Award className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-heading font-black mb-3 text-foreground">Our Vision</h2>
                  <p className="text-base text-muted-foreground leading-relaxed font-normal">
                    To be the global benchmark for creative digital marketing agencies, recognized for fusing viral marketing strategies with cutting-edge web design and brand storytelling.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <Reveal width="100%">
                <h2 className="text-3xl md:text-5xl font-heading font-black">Our Growth Journey</h2>
              </Reveal>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { year: "2018", title: "The Creative Inception", desc: "Launched as a boutique digital marketing firm helping local businesses digitize and scale brand reach." },
                { year: "2020", title: "Full-Stack Web & Brand Division", desc: "Expanded into custom web development, building Next.js applications and brand design systems." },
                { year: "2022", title: "Performance & Growth Engine", desc: "Managed $50M+ in ad spend, expanding our performance marketing division across international markets." },
                { year: "2026", title: "Omnichannel & Global Scale", desc: "Partnering with 180+ global brands and driving performance marketing campaigns worldwide." }
              ].map((item, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="p-6 rounded-3xl bg-card border-2 border-border/80 hover:border-rose-500/40 shadow-md flex flex-col md:flex-row gap-5 md:gap-8 items-start group transition-all">
                    <div className="text-2xl font-heading font-black text-rose-500 group-hover:text-amber-500 transition-colors">
                      {item.year}
                    </div>
                    <div>
                      <h3 className="text-xl font-black mb-1.5 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed font-normal">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
}
