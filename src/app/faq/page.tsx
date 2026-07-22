import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { PageHero } from "@/components/sections/page-hero";
import { FAQAdvanced } from "@/components/sections/faq-advanced";
import { FinalCTA } from "@/components/sections/final-cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Arohan Tech Solution",
  description: "Find answers about our digital marketing, brand strategy, software development, and AI solutions.",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <PageHero 
          title="Got Questions? We Have Answers."
          description="Everything you need to know about our growth marketing, brand strategy, software development, and onboarding process."
          badge="Support & FAQ"
          breadcrumbs={[{ label: "FAQ", href: "/faq" }]}
        />

        <FAQAdvanced />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
}
