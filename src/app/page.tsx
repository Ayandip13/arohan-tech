import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] opacity-70 pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
          
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl">
              <FadeIn delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-6 border border-primary/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span className="text-sm font-medium tracking-wide">Pioneering the Digital Frontier</span>
                </div>
              </FadeIn>
              
              <Reveal delay={0.2} color="hsl(var(--primary))">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter leading-[1.1] mb-6">
                  Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Luxury</span> Digital Experiences
                </h1>
              </Reveal>
              
              <FadeIn delay={0.4}>
                <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl font-light leading-relaxed">
                  We merge cutting-edge AI, enterprise software development, and premium design to build the future of your brand.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.6}>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <MagneticButton size="lg" className="rounded-full px-8 text-base h-14 w-full sm:w-auto">
                    Start a Project <ArrowRight className="ml-2 h-5 w-5" />
                  </MagneticButton>
                  <MagneticButton variant="outline" size="lg" className="rounded-full px-8 text-base h-14 glass w-full sm:w-auto">
                    View Our Work
                  </MagneticButton>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Placeholder for more sections */}
        <section className="py-20 bg-muted/30 border-t border-border/50">
          <div className="container mx-auto px-4 text-center">
            <FadeIn>
              <h2 className="text-2xl font-heading font-semibold text-muted-foreground">More sections to be built...</h2>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
