"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu, X, Search, Sparkles, ArrowUpRight } from "lucide-react";
import { ThemeSwitch } from "./theme-switch";
import { SearchModal } from "@/components/ui/search-modal";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 glass border-b border-primary/20 shadow-lg shadow-primary/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Creative Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-500 via-amber-400 to-purple-600 p-[2px] shadow-lg shadow-rose-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-background rounded-[14px] flex items-center justify-center text-foreground font-heading font-black text-xl">
              A<span className="text-primary font-serif">✦</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl tracking-tight leading-none group-hover:text-primary transition-colors">
              Arohan<span className="text-amber-500">.</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
              Creative Agency
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1 bg-card/60 backdrop-blur-md border border-border/80 rounded-full px-4 py-1.5 shadow-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-rose-500 to-amber-500 shadow-md shadow-rose-500/25"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 rounded-full bg-card border border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 shadow-sm hover:scale-105"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            
            <ThemeSwitch />
            
            <Link href="/contact">
              <Button variant="gradient" size="default" className="rounded-full shadow-lg shadow-rose-500/20">
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 rounded-full bg-card border border-border text-foreground hover:text-primary"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
          
          <ThemeSwitch />
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-md"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass border-b border-primary/20 absolute top-full left-0 right-0 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-500 text-xs font-bold uppercase tracking-wider w-fit">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Navigation</span>
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-lg font-bold py-3 px-4 rounded-2xl transition-all flex items-center justify-between ${
                        isActive
                          ? "bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-lg"
                          : "text-foreground hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-70" />
                    </Link>
                  );
                })}
              </div>
              
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="gradient" size="lg" className="w-full mt-2 rounded-2xl justify-center font-bold">
                  Start a Project 🚀
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </motion.header>
  );
}
