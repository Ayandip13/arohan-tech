"use client";

import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    category: "Services & Capabilities",
    items: [
      { q: "Do you offer full-stack software development?", a: "Yes! We build high-performance web applications, mobile apps, and custom software using Next.js, React, Node.js, and Python." },
      { q: "What is your approach to digital marketing?", a: "We take a data-driven approach, combining high-converting creative ad design, SEO, social virality, and automated growth funnels to maximize client ROI." },
      { q: "Do you manage AI & Cloud infrastructure?", a: "Absolutely. We architect, deploy, and manage custom AI workflows and cloud environments on AWS and Google Cloud." }
    ]
  },
  {
    category: "Pricing & Retainers",
    items: [
      { q: "How do you structure your pricing?", a: "We offer project-based contracts for branding & software builds, performance retainers for marketing & SEO, and dedicated team retainers for enterprise clients." },
      { q: "Are there minimum contract lengths?", a: "For ongoing marketing campaigns or engineering squads, we typically recommend a 3-month engagement to ensure measurable impact." }
    ]
  },
  {
    category: "Onboarding & Process",
    items: [
      { q: "What is your onboarding timeline?", a: "Onboarding takes less than 48 hours. We set up shared Slack channels, establish real-time analytics dashboards, and launch sprint planning." },
      { q: "Will I have a dedicated growth lead?", a: "Yes, every client receives a dedicated Lead Strategist and Project Engineer for direct, real-time communication." }
    ]
  }
];

export function FAQAdvanced() {
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const filteredData = faqData.map(group => ({
    ...group,
    items: group.items.filter(item => 
      item.q.toLowerCase().includes(query.toLowerCase()) || 
      item.a.toLowerCase().includes(query.toLowerCase())
    )
  })).filter(group => group.items.length > 0);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        
        {/* Search */}
        <div className="relative max-w-2xl mx-auto mb-16">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-rose-500">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for answers (e.g. pricing, marketing, tech stack)..."
            className="w-full h-14 pl-14 pr-6 rounded-full bg-card border-2 border-border/80 focus:border-rose-500 focus:outline-none transition-all text-base font-medium shadow-md"
          />
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {filteredData.length > 0 ? (
            filteredData.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="text-2xl font-heading font-black mb-8 flex items-center gap-3 text-foreground">
                  <span className="w-4 h-4 rounded-full bg-gradient-to-r from-rose-500 to-amber-500" />
                  {group.category}
                </h3>
                <div className="space-y-4">
                  {group.items.map((item, itemIndex) => {
                    const id = `${groupIndex}-${itemIndex}`;
                    const isOpen = openIndex === id;
                    return (
                      <div key={itemIndex} className={`rounded-3xl border-2 transition-all duration-300 overflow-hidden ${isOpen ? 'bg-card border-rose-500 shadow-xl' : 'bg-card border-border/80 hover:border-rose-500/40'}`}>
                        <button
                          onClick={() => toggleFAQ(id)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                        >
                          <span className="font-extrabold text-lg text-foreground pr-4">{item.q}</span>
                          <ChevronDown className={`w-5 h-5 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 text-rose-500" : "text-muted-foreground"}`} />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                              <div className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed text-base border-t border-border/40">
                                {item.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-24 rounded-3xl bg-card border-2 border-dashed border-border p-8">
              <p className="text-xl text-muted-foreground mb-4">No answers found for "{query}"</p>
              <button onClick={() => setQuery("")} className="text-rose-500 hover:underline font-bold">Clear search</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
