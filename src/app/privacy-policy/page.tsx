import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/animations/fade-in";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Arohan Tech Solution",
  description: "Our privacy policy and data handling procedures.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <PageHero 
          title="Privacy Policy"
          description="Last updated: October 24, 2025"
          badge="Legal"
          breadcrumbs={[{ label: "Privacy Policy", href: "/privacy-policy" }]}
        />

        <section className="pb-24">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <FadeIn>
              <div className="glass p-8 md:p-12 rounded-3xl border border-border/50 shadow-xl prose prose-lg dark:prose-invert max-w-none">
                <h2>1. Introduction</h2>
                <p>At Arohan Tech Solution, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
                
                <h2>2. The Data We Collect About You</h2>
                <p>Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                <ul>
                  <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                  <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                  <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
                </ul>

                <h2>3. How We Use Your Personal Data</h2>
                <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                <ul>
                  <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                  <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                  <li>Where we need to comply with a legal obligation.</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
