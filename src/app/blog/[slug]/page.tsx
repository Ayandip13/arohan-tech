import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { Newsletter } from "@/components/sections/newsletter";
import { FadeIn } from "@/components/animations/fade-in";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Clock, Calendar, Link2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Future of Cloud Computing | Arohan Tech Solution",
  description: "Exploring how distributed architectures are reshaping modern enterprises.",
};

export default function BlogDetailPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Article Hero */}
        <section className="pt-40 pb-12 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8">
              <ChevronLeft className="w-4 h-4" /> Back to Insights
            </Link>

            <FadeIn>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">Cloud</span>
                <span className="text-sm text-muted-foreground flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min read</span>
                <span className="text-sm text-muted-foreground flex items-center gap-1"><Calendar className="w-4 h-4" /> Oct 24, 2025</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-8">
                The Future of Cloud Computing in Enterprise Software
              </h1>

              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 rounded-full bg-muted overflow-hidden relative">
                  <Image src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" fill alt="Dr. Elena Rostova" className="object-cover" />
                </div>
                <div>
                  <p className="font-bold">Dr. Elena Rostova</p>
                  <p className="text-sm text-muted-foreground">Chief Technology Officer</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Hero Image */}
        <FadeIn delay={0.2}>
          <div className="container mx-auto px-4 md:px-8 max-w-5xl mb-16">
            <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop"
                alt="Cloud Computing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </FadeIn>

        {/* Article Body */}
        <section className="pb-24">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl flex flex-col md:flex-row gap-12">

            {/* Share Sidebar (Sticky) */}
            <div className="hidden md:block w-16 shrink-0">
              <div className="sticky top-32 flex flex-col gap-4">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 [writing-mode:vertical-rl] transform rotate-180 text-center">Share</p>
                <button className="w-10 h-10 rounded-full glass border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                </button>
                <button className="w-10 h-10 rounded-full glass border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </button>
                <button className="w-10 h-10 rounded-full glass border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </button>
                <button className="w-10 h-10 rounded-full glass border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"><Link2 className="w-4 h-4" /></button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 prose prose-lg dark:prose-invert max-w-none">
              <p className="lead text-xl md:text-2xl text-muted-foreground mb-8">
                As enterprises globally seek greater agility and resilience, traditional monolithic infrastructures are giving way to advanced, highly distributed cloud models. Here's what engineering leaders need to know.
              </p>

              <h2>The Shift to Serverless Microservices</h2>
              <p>
                For years, companies built large, monolithic applications because they were simple to deploy. However, as scaling requirements grew, the limitations became apparent. Today, the migration towards serverless microservices allows organizations to scale individual functions independently without provisioning underlying servers.
              </p>

              <h3>Key Benefits of Serverless</h3>
              <ul>
                <li><strong>Auto-scaling:</strong> Services automatically scale from zero to thousands of concurrent requests.</li>
                <li><strong>Cost Efficiency:</strong> You only pay for the exact compute time used.</li>
                <li><strong>Developer Velocity:</strong> Engineers can focus purely on business logic rather than infrastructure maintenance.</li>
              </ul>

              <blockquote>
                "The organizations that win this decade will be those whose infrastructure scales frictionlessly alongside their user base."
              </blockquote>

              <h2>Data Sovereignty and Multi-Cloud Architectures</h2>
              <p>
                Relying on a single cloud provider introduces vendor lock-in and potential points of failure. Modern architectures utilize multi-cloud strategies, balancing workloads across AWS, Azure, and GCP based on pricing, geographic latency, and regulatory compliance regarding data sovereignty.
              </p>

              <h2>Conclusion</h2>
              <p>
                Transitioning to advanced cloud architectures requires significant upfront investment in DevOps and architectural redesign, but the long-term ROI in scalability, reduced downtime, and developer velocity is unparalleled.
              </p>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
