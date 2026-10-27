import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/animations/fade-in";
import { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Return & Refund Policy | Aarohan Tech Solutions",
  description: "Official Return & Refund Policy for Aarohan Tech Solutions. Learn about our service terms, non-refundable policy, and pre-payment project clarification guidelines.",
  alternates: {
    canonical: "/return-refund-policy",
  },
  openGraph: {
    title: "Return & Refund Policy | Aarohan Tech Solutions",
    description: "Official Return & Refund Policy for Aarohan Tech Solutions services and digital projects.",
    url: "https://aarohantechsolutions.in/return-refund-policy",
    type: "website",
  },
};

export default function ReturnRefundPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <PageHero
          title="Return & Refund Policy"
          description="Last updated: October 24, 2025"
          badge="Policy"
          breadcrumbs={[{ label: "Return & Refund Policy", href: "/return-refund-policy" }]}
        />

        <section className="pb-24">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <FadeIn>
              {/* Highlight Notice Box */}
              <div className="mb-8 p-6 md:p-8 rounded-3xl bg-rose-500/5 border border-rose-500/20 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-500 shrink-0">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div className="flex-1 text-sm leading-relaxed">
                  <p className="font-bold text-foreground mb-1 text-base">Key Summary of Service Terms</p>
                  <p className="text-muted-foreground">
                    Aarohan Tech Solutions provides specialized, custom digital marketing, strategy, and development services. All services are non-refundable, and we do not offer returns. Please review your project scope and terms thoroughly before confirming an order.
                  </p>
                </div>
              </div>

              {/* Detailed Legal Content */}
              <div className="glass p-8 md:p-12 rounded-3xl border border-border/50 shadow-xl prose prose-lg dark:prose-invert max-w-none">
                <h2>1. Nature of Our Services</h2>
                <p>
                  Aarohan Tech Solutions is a creative marketing and digital technology agency. We provide customized solutions including digital marketing campaigns, performance advertising, brand identity development, UI/UX design, custom web and software engineering, and technology consulting.
                </p>
                <p>
                  Because our engagements involve bespoke work, dedicated specialist hours, and custom technical resources committed specifically to each client&apos;s project, physical returns are not applicable to any of our offerings.
                </p>

                <h2>2. No Returns and Non-Refundable Services Policy</h2>
                <p>
                  <strong>The company does not offer returns or refunds for its services.</strong>
                </p>
                <p>
                  <strong>Payments made for services are strictly non-refundable.</strong> This policy applies to all forms of payment, including:
                </p>
                <ul>
                  <li>Upfront advance deposits and initial commitment fees.</li>
                  <li>Scheduled milestone disbursements and phase deliveries.</li>
                  <li>Monthly or recurring retainers for continuous marketing or technical support.</li>
                  <li>Final project balances upon completion of deliverable sets.</li>
                </ul>

                <h2>3. Client Due Diligence & Scope Clarification</h2>
                <p>
                  We are committed to full clarity, transparency, and collaboration with all prospective and active clients. To prevent any misalignment regarding project expectations, <strong>clients should clarify the project scope, deliverables, pricing, and terms with the company before confirming an order or making payment</strong>.
                </p>
                <p>Prior to confirming any engagement or authorizing payment, we advise clients to ensure that:</p>
                <ul>
                  <li>The written proposal, statement of work (SOW), or project brief accurately outlines all required deliverables.</li>
                  <li>The projected milestones, timelines, and review cycles meet business expectations.</li>
                  <li>The total pricing, cost breakdown, and payment structure are understood and agreed upon.</li>
                  <li>All commercial terms and project prerequisites have been clearly addressed and acknowledged.</li>
                </ul>
                <p>
                  Making payment or confirming a project agreement constitutes explicit acknowledgment that you have reviewed the deliverables and accepted these terms.
                </p>

                <h2>4. Exceptions Policy</h2>
                <p>
                  As a standard rule, no refunds, cancellations, or credits are provided once an engagement is initiated. <strong>Any exceptions must only be considered if explicitly approved in writing by authorized leadership of Aarohan Tech Solutions.</strong>
                </p>
                <p>
                  Any exception granted under unique or specific circumstances is made solely at the discretion of Aarohan Tech Solutions, is strictly limited to that specific instance, and does not establish any future precedent or ongoing obligation.
                </p>

                <h2>5. Inquiries & Pre-Project Support</h2>
                <p>
                  If you have questions, require additional information, or wish to review any detail of an upcoming proposal before initiating payment, our team is always ready to assist:
                </p>
                <ul>
                  <li><strong>Email:</strong> <a href="mailto:contact@aarohantechsolutions.in" className="text-rose-500 hover:underline">contact@aarohantechsolutions.in</a></li>
                  <li><strong>Phone:</strong> +91 62907 17007 (Mon–Sat, 10:00 AM – 7:00 PM IST)</li>
                  <li><strong>Office:</strong> 61 Subhas Nagar, Baranagar, Kolkata 700090, West Bengal, India</li>
                </ul>

                <div className="not-prose pt-6 border-t border-border/60 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-muted-foreground">
                    Have questions about an upcoming project agreement?
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-rose-500 hover:text-rose-600 transition-colors uppercase tracking-wider"
                  >
                    <span>Contact Our Team</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
