import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/animations/fade-in";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Arohan Tech Solution",
  description: "Terms and conditions for using our services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <PageHero 
          title="Terms & Conditions"
          description="Last updated: October 24, 2025"
          badge="Legal"
          breadcrumbs={[{ label: "Terms", href: "/terms" }]}
        />

        <section className="pb-24">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <FadeIn>
              <div className="glass p-8 md:p-12 rounded-3xl border border-border/50 shadow-xl prose prose-lg dark:prose-invert max-w-none">
                <h2>1. Agreement to Terms</h2>
                <p>By accessing our website, you agree to be bound by these Terms of Service and to use our site in accordance with these Terms, our Privacy Policy, and any additional terms and conditions that may apply.</p>
                
                <h2>2. Intellectual Property Rights</h2>
                <p>Other than the content you own, under these Terms, Arohan Tech Solution and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.</p>

                <h2>3. Restrictions</h2>
                <p>You are specifically restricted from all of the following:</p>
                <ul>
                  <li>Publishing any Website material in any other media.</li>
                  <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
                  <li>Using this Website in any way that is or may be damaging to this Website.</li>
                </ul>

                <h2>4. Limitation of Liability</h2>
                <p>In no event shall Arohan Tech Solution, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website.</p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
