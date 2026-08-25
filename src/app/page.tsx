import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { HeroSection } from "@/components/sections/hero-section";
import dynamic from "next/dynamic";

const ServicesPreview = dynamic(() =>
  import("@/components/sections/services-preview").then((mod) => mod.ServicesPreview)
);
const WhyChooseUs = dynamic(() =>
  import("@/components/sections/why-choose-us").then((mod) => mod.WhyChooseUs)
);
const OurProcess = dynamic(() =>
  import("@/components/sections/our-process").then((mod) => mod.OurProcess)
);
const MemePlaceholderCard = dynamic(() =>
  import("@/components/ui/meme-placeholder").then((mod) => mod.MemePlaceholderCard)
);
const StatsSection = dynamic(() =>
  import("@/components/sections/stats-section").then((mod) => mod.StatsSection)
);
const TestimonialsSection = dynamic(() =>
  import("@/components/sections/testimonials-section").then((mod) => mod.TestimonialsSection)
);
const TechStack = dynamic(() =>
  import("@/components/sections/tech-stack").then((mod) => mod.TechStack)
);
const FAQSection = dynamic(() =>
  import("@/components/sections/faq-section").then((mod) => mod.FAQSection)
);
const FinalCTA = dynamic(() =>
  import("@/components/sections/final-cta").then((mod) => mod.FinalCTA)
);


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
