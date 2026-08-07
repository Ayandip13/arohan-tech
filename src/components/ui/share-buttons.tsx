"use client";

import { useState, useEffect } from "react";
import { Link2, Check } from "lucide-react";

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

interface ShareButtonsProps {
  title: string;
}

export function ShareButtons({ title }: ShareButtonsProps) {
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  // Prevent hydration mismatch by using empty href initially
  const shareLinks = {
    twitter: url ? `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}` : "#",
    linkedin: url ? `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}` : "#",
    facebook: url ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` : "#",
  };

  return (
    <div>
      <h4 className="font-heading font-bold mb-4 text-foreground">Share Article</h4>
      <div className="flex flex-wrap gap-3">
        <a 
          href={shareLinks.twitter} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full glass border border-border/50 flex items-center justify-center text-muted-foreground hover:text-[#1DA1F2] hover:border-[#1DA1F2] transition-colors"
        >
          <TwitterIcon className="w-4 h-4" />
        </a>
        <a 
          href={shareLinks.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full glass border border-border/50 flex items-center justify-center text-muted-foreground hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors"
        >
          <LinkedinIcon className="w-4 h-4" />
        </a>
        <a 
          href={shareLinks.facebook} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full glass border border-border/50 flex items-center justify-center text-muted-foreground hover:text-[#1877F2] hover:border-[#1877F2] transition-colors"
        >
          <FacebookIcon className="w-4 h-4" />
        </a>
        <button 
          onClick={handleCopy}
          title="Copy Link"
          className={`w-10 h-10 rounded-full glass border border-border/50 flex items-center justify-center transition-colors ${
            copied ? "text-emerald-500 border-emerald-500 bg-emerald-500/10" : "text-muted-foreground hover:text-primary hover:border-primary"
          }`}
        >
          {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
