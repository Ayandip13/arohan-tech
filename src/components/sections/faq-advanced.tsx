"use client";

import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    category: "Services",
    items: [
      { q: "Do you offer full-stack software development?", a: "Yes, we build scalable end-to-end applications using Next.js, React, Node.js, and Python, tailored specifically to enterprise needs." },
      { q: "What is your approach to digital marketing?", a: "We take a data-driven approach, utilizing advanced analytics, A/B testing, and AI-driven insights to maximize ROI across paid and organic channels." },
      { q: "Do you manage cloud infrastructure?", a: "Absolutely. We architect, deploy, and manage scalable cloud environments on AWS, Azure, and Google Cloud, ensuring high availability and security." }
    ]
  },
  {
    category: "Pricing & Contracts",
    items: [
      { q: "How do you structure your pricing?", a: "Pricing is project-based or retainer-based depending on the scope of work. We provide transparent, itemized quotes before any engagement begins." },
      { q: "Are there minimum contract lengths?", a: "For ongoing marketing or cloud management, we typically recommend a minimum 3-month engagement to ensure measurable results." }
    ]
  },
  {
    category: "Process",
    items: [
      { q: "What is your onboarding process?", a: "Our onboarding includes a comprehensive discovery phase, technical audit, strategy workshop, and the establishment of dedicated communication channels." },
      { q: "Will I have a dedicated account manager?", a: "Yes, every enterprise client is assigned a dedicated Project Manager and Lead Engineer to ensure seamless communication and delivery." }
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
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for answers..."
            className="w-full h-14 pl-12 pr-4 rounded-2xl bg-muted/30 border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-all text-lg"
          />
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {filteredData.length > 0 ? (
            filteredData.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="text-2xl font-heading font-bold mb-8 flex items-center gap-4">
                  <span className="w-8 h-px bg-primary hidden md:block" />
                  {group.category}
                </h3>
                <div className="space-y-4">
                  {group.items.map((item, itemIndex) => {
                    const id = `${groupIndex}-${itemIndex}`;
                    const isOpen = openIndex === id;
                    return (
                      <div key={itemIndex} className="glass border border-border/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-border">
                        <button
                          onClick={() => toggleFAQ(id)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                        >
                          <span className="font-semibold text-lg pr-4">{item.q}</span>
                          <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 text-primary" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                              <div className="px-6 pb-5 pt-0 text-muted-foreground leading-relaxed">
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
            <div className="text-center py-24 glass rounded-3xl border border-dashed border-border">
              <p className="text-xl text-muted-foreground mb-4">No results found for "{query}"</p>
              <button onClick={() => setQuery("")} className="text-primary hover:underline font-medium">Clear search</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
