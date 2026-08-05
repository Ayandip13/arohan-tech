import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { PageHero } from "@/components/sections/page-hero";
import { FinalCTA } from "@/components/sections/final-cta";
import { JobOpenings } from "@/components/sections/job-openings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Open Roles | Aarohan Creative Marketing Agency",
  description: "Join our team of creative strategists, brand designers, and web developers at Aarohan.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <PageHero
          title="Build Bold Brands With Us"
          description="We are constantly searching for exceptional growth marketers, designers, and web developers who hate boring work."
          badge="Join Our Squad"
          breadcrumbs={[{ label: "Careers", href: "/careers" }]}
        />

        <JobOpenings />

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

