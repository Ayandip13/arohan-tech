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

import { blogsData } from "@/data/blogs";

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
            <div className="relative h-64 md:h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
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
              
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />

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
