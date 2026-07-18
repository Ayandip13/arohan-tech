import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/animations/fade-in";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Arohan Tech Solution",
  description: "General disclaimer regarding the information provided on our website.",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <PageHero 
          title="Disclaimer"
          description="Last updated: October 24, 2025"
          badge="Legal"
          breadcrumbs={[{ label: "Disclaimer", href: "/disclaimer" }]}
        />

        <section className="pb-24">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <FadeIn>
              <div className="glass p-8 md:p-12 rounded-3xl border border-border/50 shadow-xl prose prose-lg dark:prose-invert max-w-none">
                <h2>1. Informational Purposes Only</h2>
                <p>The information provided by Arohan Tech Solution on this website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>
                
                <h2>2. Professional Advice</h2>
                <p>The site cannot and does not contain professional, financial, or legal advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.</p>

                <h2>3. External Links Disclaimer</h2>
                <p>The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.</p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
