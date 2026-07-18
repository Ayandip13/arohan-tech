import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { PageHero } from "@/components/sections/page-hero";
import { FAQSection } from "@/components/sections/faq-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Arohan Tech Solution",
  description: "Find answers about our digital marketing, software development, and cloud services.",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <PageHero 
          title="How Can We Help?"
          description="Everything you need to know about our services, methodologies, pricing, and how we deliver transformative digital solutions."
          badge="Support & FAQ"
          breadcrumbs={[{ label: "FAQ", href: "/faq" }]}
        />

        {/* Reuse the animated FAQ accordion from the home page */}
        <FAQSection />
        
        {/* Additional grouped sections can be added here in a real application */}
      </main>
      
      <Footer />
    </div>
  );
}
