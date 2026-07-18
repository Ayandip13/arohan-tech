import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/animations/fade-in";
import { Newsletter } from "@/components/sections/newsletter";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights & Engineering Blog | Arohan Tech Solution",
  description: "Expert perspectives on cloud architecture, digital marketing, and enterprise software engineering.",
};

const categories = ["All", "Engineering", "Cloud", "Marketing", "Leadership", "Design"];

const blogs = [
  {
    slug: "future-of-cloud-computing",
    title: "The Future of Cloud Computing in Enterprise Software",
    category: "Cloud",
    readTime: "5 min read",
    date: "Oct 24, 2025",
    author: "Dr. Elena Rostova",
    excerpt: "Exploring how distributed architectures and serverless microservices are reshaping the way modern enterprises handle Big Data.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "optimizing-react-performance",
    title: "Optimizing React Applications for Peak Performance",
    category: "Engineering",
    readTime: "8 min read",
    date: "Oct 18, 2025",
    author: "Alex Mercer",
    excerpt: "A deep dive into advanced memoization techniques, React Server Components, and strategies to eliminate unnecessary renders.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "data-driven-marketing",
    title: "Beyond the Click: Data-Driven Performance Marketing",
    category: "Marketing",
    readTime: "6 min read",
    date: "Oct 12, 2025",
    author: "James Carter",
    excerpt: "Why traditional attribution models are failing and how to leverage first-party data to accurately measure ROAS in a cookieless world.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "ui-ux-accessibility",
    title: "Designing for Accessibility: A Commercial Imperative",
    category: "Design",
    readTime: "4 min read",
    date: "Oct 05, 2025",
    author: "Sophia Lin",
    excerpt: "Building digital products that are accessible isn't just an ethical responsibility—it fundamentally increases your total addressable market.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop",
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <PageHero 
          title="Insights & Perspectives"
          description="In-depth articles, case studies, and thought leadership from our engineering, design, and strategy teams."
          badge="Our Blog"
          breadcrumbs={[{ label: "Blog", href: "/blog" }]}
        />

        <section className="py-12 bg-background border-b border-border/50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Category Filter */}
              <div className="flex overflow-x-auto pb-2 md:pb-0 w-full md:w-auto hide-scrollbar gap-2">
                {categories.map((cat, idx) => (
                  <button 
                    key={idx}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      idx === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              
              {/* Search */}
              <div className="relative w-full md:w-72 flex-shrink-0">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search insights..." 
                  className="w-full h-10 pl-10 pr-4 rounded-full bg-muted border-none focus:ring-1 focus:ring-primary outline-none text-sm"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            {/* Featured Article */}
            <FadeIn>
              <Link href={`/blog/${blogs[0].slug}`} className="group block mb-20 relative rounded-3xl overflow-hidden glass border border-border/50 hover:border-primary/40 transition-colors">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <Image src={blogs[0].image} alt={blogs[0].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">{blogs[0].category}</span>
                      <span className="text-sm text-muted-foreground flex items-center gap-1"><Clock className="w-4 h-4" /> {blogs[0].readTime}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 group-hover:text-primary transition-colors">{blogs[0].title}</h2>
                    <p className="text-lg text-muted-foreground mb-8 line-clamp-3">{blogs[0].excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-muted" />
                        <div>
                          <p className="text-sm font-bold">{blogs[0].author}</p>
                          <p className="text-xs text-muted-foreground">{blogs[0].date}</p>
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.slice(1).map((blog, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <Link href={`/blog/${blog.slug}`} className="group h-full flex flex-col glass rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={blog.image} alt={blog.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">{blog.category}</span>
                        <span className="text-xs text-muted-foreground">{blog.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors leading-tight">{blog.title}</h3>
                      <p className="text-muted-foreground mb-6 line-clamp-2">{blog.excerpt}</p>
                      
                      <div className="mt-auto flex items-center gap-3 pt-6 border-t border-border/50">
                        <div className="w-8 h-8 rounded-full bg-muted" />
                        <div>
                          <p className="text-sm font-bold leading-none mb-1">{blog.author}</p>
                          <p className="text-xs text-muted-foreground">{blog.date}</p>
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
