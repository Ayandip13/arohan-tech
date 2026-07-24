import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { TrustedBy } from "@/components/sections/trusted-by";
import { ServicesPreview } from "@/components/sections/services-preview";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { OurProcess } from "@/components/sections/our-process";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { StatsSection } from "@/components/sections/stats-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TeamPreview } from "@/components/sections/team-preview";
import { TechStack } from "@/components/sections/tech-stack";
import { MemeCornerSection } from "@/components/sections/meme-corner";
import { InsightsSection } from "@/components/sections/insights-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <TrustedBy />
        <ServicesPreview />
        <WhyChooseUs />
        <OurProcess />
        <FeaturedProjects />
        <StatsSection />
        <IndustriesSection />
        <TestimonialsSection />
        <TeamPreview />
        <MemeCornerSection />
        <TechStack />
        <InsightsSection />
        <FAQSection />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
