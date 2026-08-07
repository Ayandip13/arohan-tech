import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { Newsletter } from "@/components/sections/newsletter";
import { FadeIn } from "@/components/animations/fade-in";
import Image from "next/image";
import Link from "next/link";
import { ReadingProgress } from "@/components/ui/reading-progress";
import { ChevronLeft, Clock, Calendar, Link2, ChevronRight, ArrowRight } from "lucide-react";
import { ShareButtons } from "@/components/ui/share-buttons";
import { Metadata } from "next";

const blogsData = [
  {
    slug: "scaling-ecommerce-sales",
    title: "How We Scaled E-Commerce Sales by 420% With TikTok & Meta Ads",
    category: "Digital Marketing",
    readTime: "5 min read",
    date: "Jul 18, 2026",
    author: "James Carter",
    excerpt: "Why creative ad variations and first-party pixel tracking out-perform static budget increases in today's ad auctions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tagBg: "bg-orange-500/15 text-orange-600 dark:text-orange-400",
  },
  {
    slug: "ai-marketing-playbook",
    title: "The 2026 AI Playbook: Building Custom Agents For Marketing",
    category: "AI & Automation",
    readTime: "7 min read",
    date: "Jul 12, 2026",
    author: "Dr. Elena Rostova",
    excerpt: "How forward-thinking brands automate lead qualification, ad copywriting, and CRM nurturing with custom LLM pipelines.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
    tagBg: "bg-teal-500/15 text-teal-700 dark:text-teal-400",
  },
  {
    slug: "high-converting-brand-identities",
    title: "Why High-Converting Digital Brands Ditch Generic Templates",
    category: "Brand Strategy",
    readTime: "6 min read",
    date: "Jul 05, 2026",
    author: "Sophia Lin",
    excerpt: "Generic SaaS templates kill conversions. Here is how custom motion design and vibrant storytelling convert 3x better.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop",
    tagBg: "bg-purple-500/15 text-purple-600 dark:text-purple-400",
  },
  {
    slug: "optimizing-nextjs-performance",
    title: "Building Sub-Second Next.js Web Platforms For Scale",
    category: "Software Dev",
    readTime: "4 min read",
    date: "Jun 28, 2026",
    author: "Alex Mercer",
    excerpt: "A deep dive into server components, edge caching, and micro-animations that make web apps feel instantaneous.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    tagBg: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
  }
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const blog = blogsData.find((b) => b.slug === resolvedParams.slug);
  return {
    title: blog ? `${blog.title} | Aarohan Tech Solution` : "Blog | Aarohan Tech Solution",
    description: blog?.excerpt || "Read our latest insights.",
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = blogsData.find((b) => b.slug === resolvedParams.slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <h1 className="text-4xl font-heading font-bold">Blog not found</h1>
      </div>
    );
  }

  const currentIndex = blogsData.findIndex((b) => b.slug === blog.slug);
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : blogsData.length - 1;
  const nextIndex = currentIndex < blogsData.length - 1 ? currentIndex + 1 : 0;

  const prevBlog = blogsData[prevIndex];
  const nextBlog = blogsData[nextIndex];

  const relatedBlogs = blogsData.filter((b) => b.slug !== blog.slug).slice(0, 2);

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
                <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${blog.tagBg}`}>{blog.category}</span>
                <span className="text-sm text-muted-foreground flex items-center gap-1"><Clock className="w-4 h-4" /> {blog.readTime}</span>
                <span className="text-sm text-muted-foreground flex items-center gap-1"><Calendar className="w-4 h-4" /> {blog.date}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-8">
                {blog.title}
              </h1>

              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 rounded-full bg-muted overflow-hidden relative">
                  <Image src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" fill alt={blog.author} className="object-cover" />
                </div>
                <div>
                  <p className="font-bold">{blog.author}</p>
                  <p className="text-sm text-muted-foreground">Aarohan Contributor</p>
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
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </FadeIn>

        {/* Reading Progress Bar */}
        <ReadingProgress />

        {/* Article Body */}
        <section className="pb-24">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl flex flex-col lg:flex-row gap-12">

            {/* Left Sidebar (Share & TOC) */}
            <div className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-32 flex flex-col gap-10">

                {/* Table of Contents */}
                <div>
                  <h4 className="font-heading font-bold mb-4 text-foreground">Table of Contents</h4>
                  <nav className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
                    <a href="#serverless" className="hover:text-primary transition-colors">1. The Shift to Serverless</a>
                    <a href="#benefits" className="hover:text-primary transition-colors pl-4">Key Benefits</a>
                    <a href="#multi-cloud" className="hover:text-primary transition-colors">2. Multi-Cloud Architectures</a>
                    <a href="#conclusion" className="hover:text-primary transition-colors">3. Conclusion</a>
                  </nav>
                </div>

                {/* Share */}
                <ShareButtons title={blog.title} />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 prose prose-lg dark:prose-invert max-w-none">
              <p className="lead text-xl md:text-2xl text-muted-foreground mb-8">
                {blog.excerpt}
              </p>

              <h2 id="serverless">Introduction</h2>
              <p>
                In the rapidly evolving landscape of digital growth, understanding the mechanics behind these strategies is crucial. Our team has deeply analyzed the core patterns that drive actual results.
              </p>

              <h3 id="benefits">Key Benefits of Serverless</h3>
              <ul>
                <li><strong>Auto-scaling:</strong> Services automatically scale from zero to thousands of concurrent requests.</li>
                <li><strong>Cost Efficiency:</strong> You only pay for the exact compute time used.</li>
                <li><strong>Developer Velocity:</strong> Engineers can focus purely on business logic rather than infrastructure maintenance.</li>
              </ul>

              <blockquote>
                "The organizations that win this decade will be those whose infrastructure scales frictionlessly alongside their user base."
              </blockquote>

              <h2 id="multi-cloud">Data Sovereignty and Multi-Cloud Architectures</h2>
              <p>
                Relying on a single cloud provider introduces vendor lock-in and potential points of failure. Modern architectures utilize multi-cloud strategies, balancing workloads across AWS, Azure, and GCP based on pricing, geographic latency, and regulatory compliance regarding data sovereignty.
              </p>

              <h2 id="conclusion">Conclusion</h2>
              <p>
                Transitioning to advanced cloud architectures requires significant upfront investment in DevOps and architectural redesign, but the long-term ROI in scalability, reduced downtime, and developer velocity is unparalleled.
              </p>

              <hr className="my-12 border-border" />

              {/* Previous / Next Navigation */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 not-prose">
                <Link href={`/blog/${prevBlog.slug}`} className="w-full md:w-1/2 p-6 rounded-2xl border border-border/50 hover:border-primary/40 hover:bg-muted/10 transition-colors group flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors shrink-0">
                    <ChevronLeft className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Previous Article</p>
                    <p className="font-heading font-bold line-clamp-1 group-hover:text-primary transition-colors">{prevBlog.title}</p>
                  </div>
                </Link>

                <Link href={`/blog/${nextBlog.slug}`} className="w-full md:w-1/2 p-6 rounded-2xl border border-border/50 hover:border-primary/40 hover:bg-muted/10 transition-colors group flex items-center gap-4 text-right justify-end">
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Next Article</p>
                    <p className="font-heading font-bold line-clamp-1 group-hover:text-primary transition-colors">{nextBlog.title}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors shrink-0">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-24 bg-muted/30 border-t border-border/50">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-heading font-bold mb-12">Related Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {relatedBlogs.map((relatedBlog) => (
                <Link key={relatedBlog.slug} href={`/blog/${relatedBlog.slug}`} className="group flex flex-col glass rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={relatedBlog.image} alt={relatedBlog.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">{relatedBlog.category}</span>
                      <span className="text-xs text-muted-foreground">{relatedBlog.readTime}</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold group-hover:text-primary transition-colors leading-tight">{relatedBlog.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
