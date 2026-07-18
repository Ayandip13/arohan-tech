"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Code, Megaphone, Cloud, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function SearchModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent scroll when open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  const searchResults = [
    { title: "Cloud Infrastructure Setup", category: "Services", icon: <Cloud className="w-4 h-4" />, link: "/services" },
    { title: "Custom Software Engineering", category: "Services", icon: <Code className="w-4 h-4" />, link: "/services" },
    { title: "Performance Marketing", category: "Services", icon: <Megaphone className="w-4 h-4" />, link: "/services" },
    { title: "Nexus Cloud Platform", category: "Projects", icon: <ArrowRight className="w-4 h-4" />, link: "/work" },
    { title: "Aura Fintech Ecosystem", category: "Projects", icon: <ArrowRight className="w-4 h-4" />, link: "/work" },
  ].filter(item => item.title.toLowerCase().includes(query.toLowerCase()) || item.category.toLowerCase().includes(query.toLowerCase()));

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-2xl bg-card border border-border/50 rounded-2xl shadow-2xl relative z-10 overflow-hidden flex flex-col max-h-[80vh]"
          >
            {/* Search Input */}
            <div className="flex items-center px-4 border-b border-border/50">
              <Search className="w-5 h-5 text-muted-foreground mr-3" />
              <input 
                autoFocus
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services, projects, or insights..."
                className="flex-1 h-16 bg-transparent border-none outline-none text-lg text-foreground placeholder:text-muted-foreground"
              />
              <button 
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-muted text-muted-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results */}
            <div className="overflow-y-auto p-4 flex-1">
              {query.length > 0 ? (
                searchResults.length > 0 ? (
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-2">Results</p>
                    {searchResults.map((result, idx) => (
                      <button 
                        key={idx}
                        onClick={() => {
                          router.push(result.link);
                          onClose();
                        }}
                        className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 transition-colors group text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                            {result.icon}
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{result.title}</p>
                            <p className="text-xs text-muted-foreground">{result.category}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="py-14 text-center">
                    <p className="text-muted-foreground mb-2">No results found for "{query}"</p>
                    <p className="text-sm text-muted-foreground/70">Try searching for "Cloud", "Software", or "Marketing".</p>
                  </div>
                )
              ) : (
                <div className="py-8">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-4">Quick Links</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button onClick={() => { router.push("/services"); onClose(); }} className="text-left p-3 rounded-xl bg-muted/30 hover:bg-muted text-sm font-medium transition-colors">View All Services</button>
                    <button onClick={() => { router.push("/work"); onClose(); }} className="text-left p-3 rounded-xl bg-muted/30 hover:bg-muted text-sm font-medium transition-colors">Our Case Studies</button>
                    <button onClick={() => { router.push("/blog"); onClose(); }} className="text-left p-3 rounded-xl bg-muted/30 hover:bg-muted text-sm font-medium transition-colors">Latest Insights</button>
                    <button onClick={() => { router.push("/contact"); onClose(); }} className="text-left p-3 rounded-xl bg-muted/30 hover:bg-muted text-sm font-medium transition-colors">Contact Support</button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-3 border-t border-border/50 bg-muted/30 flex items-center justify-between text-xs text-muted-foreground">
              <span>Press <kbd className="font-mono bg-background px-1.5 py-0.5 rounded border border-border">ESC</kbd> to close</span>
              <span>Search powered by Arohan</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
