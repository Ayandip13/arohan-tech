import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { PageHero } from "@/components/sections/page-hero";
import { Newsletter } from "@/components/sections/newsletter";
import { Metadata } from "next";
import { blogsData } from "@/data/blogs";
import { BlogClient } from "@/components/blog/blog-client";

export const metadata: Metadata = {
  title: "Our Blog | Aarohan Tech Solution",
  description: "Perspectives on digital marketing, viral growth, brand strategy, AI solutions, and software engineering.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <PageHero
          title="Our Blog & Creative Insights"
          description="Actionable marketing playbooks, brand design teardowns, and engineering guides from our agency squad."
          badge="Growth Blog"
          breadcrumbs={[{ label: "Blog", href: "/blog" }]}
        />

        <BlogClient blogs={blogsData} />

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
