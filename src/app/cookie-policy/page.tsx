import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/animations/fade-in";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Arohan Tech Solution",
  description: "How we use cookies to improve your experience.",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <PageHero 
          title="Cookie Policy"
          description="Last updated: October 24, 2025"
          badge="Legal"
          breadcrumbs={[{ label: "Cookie Policy", href: "/cookie-policy" }]}
        />

        <section className="pb-24">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <FadeIn>
              <div className="glass p-8 md:p-12 rounded-3xl border border-border/50 shadow-xl prose prose-lg dark:prose-invert max-w-none">
                <h2>1. What Are Cookies</h2>
                <p>Cookies are small text files that are placed on your computer or mobile device when you browse websites. They are widely used in order to make websites work, or work more efficiently, as well as to provide reporting information.</p>
                
                <h2>2. How We Use Cookies</h2>
                <p>We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.</p>
                <ul>
                  <li><strong>Essential Cookies:</strong> These are required for the operation of our website.</li>
                  <li><strong>Analytical/Performance Cookies:</strong> These allow us to recognize and count the number of visitors and see how visitors move around our website.</li>
                  <li><strong>Targeting Cookies:</strong> These cookies record your visit to our website, the pages you have visited and the links you have followed.</li>
                </ul>

                <h2>3. Managing Cookies</h2>
                <p>You can set your browser not to accept cookies, and you can remove cookies from your browser at any time. However, in a few cases, some of our website features may not function as a result.</p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
