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
import { InsightsSection } from "@/components/sections/insights-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FinalCTA } from "@/components/sections/final-cta";
import { MemePlaceholderCard } from "@/components/ui/meme-placeholder";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <TrustedBy />
        <ServicesPreview />

        {/* Interstitial Meme Placeholder 1 */}
        <MemePlaceholderCard 
          title="Client: 'Can we make the logo bigger & add 15 more popups?'"
          caption="Our UI team taking a deep breath before saving the conversion rate... ☕"
          variant="rose"
        />

        <WhyChooseUs />
        <OurProcess />
        <FeaturedProjects />

        {/* Interstitial Meme Placeholder 2 */}
        <MemePlaceholderCard 
          title="When the Meta Ads algorithm hits a 4.2x ROAS on day 1"
          caption="The growth squad celebrating in Slack like we just won a Championship 🏆"
          variant="amber"
        />

        <StatsSection />
        <IndustriesSection />
        <TestimonialsSection />

        {/* Interstitial Meme Placeholder 3 */}
        <MemePlaceholderCard 
          title="Copywriter vs Designer debating font sizes for 45 minutes"
          caption="Both agreeing that 'Inter' is superior anyway... 🎨"
          variant="purple"
        />

        <TeamPreview />
        <TechStack />
        <InsightsSection />

        {/* Interstitial Meme Placeholder 4 */}
        <MemePlaceholderCard 
          title="Marketing Lead reading competitor's ad copy in 2026"
          caption="Writing a viral counter-hook in 30 seconds... 🚀"
          variant="emerald"
        />

        <FAQSection />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
