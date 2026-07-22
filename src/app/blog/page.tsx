import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/animations/fade-in";
import { Newsletter } from "@/components/sections/newsletter";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, Clock, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Growth & Creative Digest | Arohan Tech Solution",
  description: "Perspectives on digital marketing, viral growth, brand strategy, AI solutions, and software engineering.",
};

const categories = ["All", "Digital Marketing", "AI & Automation", "Software Dev", "Brand Strategy", "UI/UX Design"];

const blogs = [
  {
    slug: "scaling-ecommerce-sales",
    title: "How We Scaled E-Commerce Sales by 420% With TikTok & Meta Ads",
    category: "Digital Marketing",
    readTime: "5 min read",
    date: "Jul 18, 2026",
    author: "James Carter",
    excerpt: "Why creative ad variations and first-party pixel tracking out-perform static budget increases in today's ad auctions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tagBg: "bg-rose-500 text-white",
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
    tagBg: "bg-amber-400 text-slate-950",
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
    tagBg: "bg-purple-600 text-white",
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
    tagBg: "bg-emerald-500 text-slate-950",
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <PageHero 
          title="Growth Digest & Creative Insights"
          description="Actionable marketing playbooks, brand design teardowns, and engineering guides from our agency squad."
          badge="Growth Blog"
          breadcrumbs={[{ label: "Blog", href: "/blog" }]}
        />

        <section className="py-10 bg-background border-b border-border/50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Category Filter */}
              <div className="flex overflow-x-auto pb-2 md:pb-0 w-full md:w-auto gap-2">
                {categories.map((cat, idx) => (
                  <button 
                    key={idx}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      idx === 0 
                        ? "bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-md" 
                        : "bg-card border border-border text-foreground hover:border-rose-500/50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              
              {/* Search */}
              <div className="relative w-full md:w-80 flex-shrink-0">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-rose-500" />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full h-11 pl-11 pr-4 rounded-full bg-card border-2 border-border/80 focus:border-rose-500 outline-none text-xs font-medium"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            {/* Featured Article */}
            <FadeIn>
              <Link href={`/blog/${blogs[0].slug}`} className="group block mb-16 rounded-3xl overflow-hidden bg-card border-2 border-border/80 hover:border-rose-500/50 shadow-2xl transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-72 lg:h-auto overflow-hidden">
                    <Image src={blogs[0].image} alt={blogs[0].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3.5 py-1 text-xs font-black uppercase tracking-wider rounded-full ${blogs[0].tagBg}`}>
                        {blogs[0].category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-rose-500" /> {blogs[0].readTime}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-heading font-black mb-4 text-foreground group-hover:text-rose-500 transition-colors leading-tight">{blogs[0].title}</h2>
                    <p className="text-muted-foreground text-base mb-8 font-normal leading-relaxed">{blogs[0].excerpt}</p>
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/60">
                      <div>
                        <p className="text-sm font-extrabold text-foreground">{blogs[0].author}</p>
                        <p className="text-xs text-muted-foreground">{blogs[0].date}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-all">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogs.slice(1).map((blog, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <Link href={`/blog/${blog.slug}`} className="group h-full flex flex-col rounded-3xl bg-card border-2 border-border/80 hover:border-rose-500/50 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={blog.image} alt={blog.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute top-4 left-4 z-10">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${blog.tagBg}`}>
                          {blog.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-1 justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-3">
                          <Clock className="w-3.5 h-3.5 text-rose-500" />
                          <span>{blog.readTime}</span>
                          <span>•</span>
                          <span>{blog.date}</span>
                        </div>
                        <h3 className="text-2xl font-heading font-black text-foreground mb-3 group-hover:text-rose-500 transition-colors leading-tight">{blog.title}</h3>
                        <p className="text-muted-foreground text-sm font-normal leading-relaxed mb-6">{blog.excerpt}</p>
                      </div>

                      <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                        <span className="text-xs font-bold text-foreground">{blog.author}</span>
                        <div className="w-8 h-8 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-all">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
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
