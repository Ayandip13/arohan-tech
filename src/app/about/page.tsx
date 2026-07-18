import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Arohan Tech Solution",
  description: "Discover the story, mission, and vision behind Arohan Tech Solution.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <PageHero 
          title="Architecting the Future of Digital Business"
          description="We are a collective of elite engineers, visionary designers, and strategic thinkers dedicated to transforming how businesses operate in the digital age."
          badge="Our Story"
          breadcrumbs={[{ label: "About", href: "/about" }]}
        />

        {/* Mission & Vision */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              <FadeIn>
                <div className="glass p-10 rounded-3xl h-full border-primary/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full transition-transform group-hover:scale-110" />
                  <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">Our Mission</h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    To empower enterprises and ambitious startups with robust, scalable technology and data-driven marketing strategies that guarantee measurable growth and operational superiority.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="glass p-10 rounded-3xl h-full border-secondary/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full transition-transform group-hover:scale-110" />
                  <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">Our Vision</h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    To be the global standard for premium digital solutions, recognized for uncompromising quality, radical transparency, and the ability to solve the most complex technical challenges.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-20">
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Journey</h2>
              </Reveal>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-12">
              {[
                { year: "2018", title: "The Inception", desc: "Started as a boutique marketing firm helping local businesses digitize." },
                { year: "2020", title: "Engineering Expansion", desc: "Launched our full-stack software development division to build custom products." },
                { year: "2022", title: "Cloud & Data Focus", desc: "Expanded into enterprise cloud architectures and complex system integrations." },
                { year: "2024", title: "Global Reach", desc: "Partnering with Fortune 500s and scaling operations across three continents." }
              ].map((item, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start group">
                    <div className="md:w-1/4 flex-shrink-0">
                      <div className="text-3xl font-heading font-bold text-primary group-hover:text-secondary transition-colors">{item.year}</div>
                    </div>
                    <div className="md:w-3/4 pb-12 md:border-b border-border/50">
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-lg text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
