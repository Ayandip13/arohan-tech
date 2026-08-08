import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesPreview } from "@/components/sections/services-preview";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { OurProcess } from "@/components/sections/our-process";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TechStack } from "@/components/sections/tech-stack";
import { FAQSection } from "@/components/sections/faq-section";
import { FinalCTA } from "@/components/sections/final-cta";
import { MemePlaceholderCard } from "@/components/ui/meme-placeholder";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <ServicesPreview />
        <WhyChooseUs />
        <OurProcess />

        {/* Agency Humour Corner */}
        <MemePlaceholderCard
          title="Client: Why should I choose Aarohan?"
          caption="Us: Because we'd rather grow your brand than just your invoice 😭"
          videoSrc="/InShot_20260806_134738594.mp4"
          variant="rose"
        />

        <StatsSection />
        <TestimonialsSection />
        <TechStack />
        <FAQSection />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
