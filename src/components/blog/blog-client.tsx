"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowRight, Search, Frown } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { BlogPost } from "@/data/blogs";

interface BlogClientProps {
  blogs: BlogPost[];
}

const CATEGORIES = [
  "All",
  "Digital Marketing",
  "SEO",
  "Web Development",
  "Website Design",
  "Branding",
  "Social Media",
  "Business Growth",
  "Case Studies"
];

const INITIAL_VISIBLE_COUNT = 7; // 1 featured + 6 grid

export function BlogClient({ blogs }: BlogClientProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  // Filter blogs based on category and search query
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
      const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [blogs, activeCategory, searchQuery]);

  const featuredBlog = filteredBlogs.length > 0 ? filteredBlogs[0] : null;
  const gridBlogs = filteredBlogs.slice(1, visibleCount);
  const hasMore = visibleCount < filteredBlogs.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(INITIAL_VISIBLE_COUNT); // Reset visible count on filter
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setVisibleCount(INITIAL_VISIBLE_COUNT); // Reset visible count on search
  };

  return (
    <>
      <section className="py-10 bg-background border-b border-border/50 sticky top-[72px] z-40 backdrop-blur-md bg-background/80">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Category Filter */}
            <div className="flex overflow-x-auto pb-2 md:pb-0 w-full md:w-auto gap-2 no-scrollbar">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all relative ${
                    activeCategory === cat
                      ? "text-white"
                      : "bg-card border border-border text-foreground hover:border-rose-500/50"
                  }`}
                >
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="activeBlogCategory"
                      className="absolute inset-0 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full shadow-md z-0"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80 flex-shrink-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-rose-500" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full h-11 pl-11 pr-4 rounded-full bg-card border-2 border-border/80 focus:border-rose-500 outline-none text-xs font-medium transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background min-h-[50vh]">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatePresence mode="wait">
            {filteredBlogs.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center text-muted-foreground mb-6">
                  <Frown className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-2">No articles found</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  We couldn't find any articles matching your search query or category filter. Try adjusting your filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                  className="mt-6 px-6 py-2 rounded-full bg-rose-500/10 text-rose-500 font-bold hover:bg-rose-500 hover:text-white transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Featured Article */}
                {featuredBlog && (
                  <FadeIn>
                    <Link
                      href={`/blog/${featuredBlog.slug}`}
                      className="group block mb-16 rounded-3xl overflow-hidden bg-card border-2 border-border/80 hover:border-rose-500/50 shadow-2xl transition-all"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative h-72 lg:h-auto overflow-hidden">
                          <Image
                            src={featuredBlog.image}
                            alt={featuredBlog.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                          <div className="flex items-center gap-3 mb-4">
                            <span
                              className={`px-3.5 py-1 text-xs font-black uppercase tracking-wider rounded-full ${featuredBlog.tagBg}`}
                            >
                              {featuredBlog.category}
                            </span>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-rose-500" /> {featuredBlog.readTime}
                            </span>
                          </div>
                          <h2 className="text-3xl md:text-4xl font-heading font-black mb-4 text-foreground group-hover:text-rose-500 transition-colors leading-tight">
                            {featuredBlog.title}
                          </h2>
                          <p className="text-muted-foreground text-base mb-8 font-normal leading-relaxed">
                            {featuredBlog.excerpt}
                          </p>
                          <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/60">
                            <div>
                              <p className="text-sm font-extrabold text-foreground">{featuredBlog.author}</p>
                              <p className="text-xs text-muted-foreground">{featuredBlog.date}</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-all">
                              <ArrowRight className="w-5 h-5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </FadeIn>
                )}

                {/* Grid */}
                {gridBlogs.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {gridBlogs.map((blog, idx) => (
                      <FadeIn key={blog.slug} delay={Math.min(idx * 0.1, 0.5)}>
                        <Link
                          href={`/blog/${blog.slug}`}
                          className="group h-full flex flex-col rounded-3xl bg-card border-2 border-border/80 hover:border-rose-500/50 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                        >
                          <div className="relative aspect-[16/10] overflow-hidden">
                            <Image
                              src={blog.image}
                              alt={blog.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 z-10">
                              <span
                                className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${blog.tagBg}`}
                              >
                                {blog.category}
                              </span>
                            </div>
                          </div>

                          <div className="p-6 flex flex-col flex-1 justify-between">
                            <div>
                              <div className="flex items-center gap-2 text-[10px] font-semibold text-muted-foreground mb-3">
                                <Clock className="w-3.5 h-3.5 text-rose-500" />
                                <span>{blog.readTime}</span>
                                <span>•</span>
                                <span>{blog.date}</span>
                              </div>
                              <h3 className="text-lg font-heading font-black text-foreground mb-2 group-hover:text-rose-500 transition-colors leading-tight line-clamp-3">
                                {blog.title}
                              </h3>
                              <p className="text-muted-foreground text-xs font-normal leading-relaxed mb-5 line-clamp-3">
                                {blog.excerpt}
                              </p>
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
                )}

                {/* Pagination / Load More */}
                {hasMore && (
                  <div className="mt-16 flex justify-center">
                    <button
                      onClick={handleLoadMore}
                      className="px-8 py-3 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                    >
                      Load More Articles
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
