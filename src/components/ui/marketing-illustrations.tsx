"use client";

import React from "react";

// Digital Marketing Hero Vector Illustration
export function MarketingHeroIllustration({ className = "w-full h-auto max-w-md" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background blobs & organic shapes */}
      <circle cx="250" cy="200" r="170" fill="url(#hero-grad-1)" opacity="0.2" />
      <path d="M120 100 Q 250 40 380 120 T 420 300 Q 280 380 140 320 Z" fill="url(#hero-grad-2)" opacity="0.15" />
      
      {/* Central Megaphone / Rocket Blast */}
      <g transform="translate(140, 90)">
        {/* Rocket / Speaker body */}
        <path d="M70 120 L160 70 L160 170 Z" fill="#f43f5e" />
        <rect x="50" y="95" width="40" height="50" rx="8" fill="#fbbf24" />
        <circle cx="160" cy="120" r="50" fill="#ec4899" opacity="0.8" />
        <circle cx="160" cy="120" r="30" fill="#8b5cf6" />
        {/* Sound/Growth waves */}
        <path d="M220 80 A 60 60 0 0 1 220 160" stroke="#fbbf24" strokeWidth="10" strokeLinecap="round" />
        <path d="M250 60 A 90 90 0 0 1 250 180" stroke="#f43f5e" strokeWidth="10" strokeLinecap="round" />
        <path d="M280 40 A 120 120 0 0 1 280 200" stroke="#10b981" strokeWidth="10" strokeLinecap="round" />
      </g>

      {/* Floating Marketing Stickers / Cards */}
      {/* Social Media Badge */}
      <g transform="translate(50, 70)">
        <rect width="110" height="60" rx="16" fill="#0f172a" stroke="#f43f5e" strokeWidth="3" />
        <circle cx="30" cy="30" r="14" fill="#f43f5e" />
        <text x="54" y="34" fill="#ffffff" fontSize="12" fontWeight="bold">#VIRAL</text>
      </g>

      {/* ROI Boost Badge */}
      <g transform="translate(320, 260)">
        <rect width="130" height="70" rx="20" fill="#fbbf24" stroke="#0f172a" strokeWidth="4" />
        <text x="20" y="35" fill="#0f172a" fontSize="16" fontWeight="900">+420%</text>
        <text x="20" y="54" fill="#0f172a" fontSize="10" fontWeight="bold">REVENUE LIFT 📈</text>
      </g>

      {/* Target Cursor Icon */}
      <g transform="translate(80, 260)">
        <circle cx="35" cy="35" r="30" fill="#10b981" opacity="0.9" />
        <circle cx="35" cy="35" r="15" fill="#ffffff" />
        <circle cx="35" cy="35" r="6" fill="#10b981" />
      </g>

      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="hero-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
        <linearGradient id="hero-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Brand & Design Vector Illustration
export function BrandingIllustration({ className = "w-full h-auto max-w-xs" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="240" rx="24" fill="#0f172a" opacity="0.05" />
      {/* Color Palette Swatches */}
      <circle cx="70" cy="80" r="35" fill="#f43f5e" />
      <circle cx="130" cy="70" r="40" fill="#fbbf24" />
      <circle cx="200" cy="90" r="30" fill="#8b5cf6" />
      <circle cx="240" cy="140" r="25" fill="#10b981" />
      {/* Pen Tool / Canvas */}
      <path d="M60 180 L180 120 L220 160 L100 220 Z" fill="#ec4899" />
      <path d="M180 120 L210 90 L240 120 L210 150 Z" fill="#fbbf24" />
      <circle cx="210" cy="90" r="8" fill="#ffffff" />
    </svg>
  );
}

// Social Media & Growth Vector Illustration
export function SocialMediaIllustration({ className = "w-full h-auto max-w-xs" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Floating Chat Bubbles */}
      <rect x="30" y="40" width="160" height="80" rx="20" fill="#f43f5e" />
      <path d="M60 120 L40 140 L80 120 Z" fill="#f43f5e" />
      <text x="50" y="85" fill="#ffffff" fontSize="18" fontWeight="bold">🔥 GO VIRAL</text>

      <rect x="120" y="120" width="150" height="80" rx="20" fill="#fbbf24" />
      <path d="M230 120 L250 100 L210 120 Z" fill="#fbbf24" />
      <text x="140" y="165" fill="#0f172a" fontSize="16" fontWeight="900">10M+ VIEWS</text>

      {/* Heart & Like Badges */}
      <circle cx="240" cy="50" r="22" fill="#ec4899" />
      <path d="M230 48 C230 42 240 40 240 46 C240 40 250 42 250 48 C250 54 240 60 240 60 C240 60 230 54 230 48 Z" fill="#ffffff" />
    </svg>
  );
}

// Video & Content Creation Vector Illustration
export function ContentCreationIllustration({ className = "w-full h-auto max-w-xs" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Video Clapper Board */}
      <rect x="40" y="60" width="220" height="140" rx="20" fill="#0f172a" />
      <polygon points="120,100 120,160 180,130" fill="#f43f5e" />
      {/* Top Strip */}
      <rect x="40" y="40" width="220" height="30" rx="8" fill="#fbbf24" />
      <path d="M70 40 L90 70 M130 40 L150 70 M190 40 L210 70" stroke="#0f172a" strokeWidth="4" />
      {/* Sparkles */}
      <circle cx="260" cy="30" r="12" fill="#10b981" />
      <circle cx="30" cy="180" r="16" fill="#8b5cf6" />
    </svg>
  );
}

// Creative Brainstorming & Strategy Vector Illustration
export function BrainstormingIllustration({ className = "w-full h-auto max-w-xs" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Lightbulb glowing */}
      <circle cx="150" cy="110" r="60" fill="#fbbf24" opacity="0.3" />
      <path d="M120 110 C120 80 180 80 180 110 C180 130 165 140 165 155 L135 155 C135 140 120 130 120 110 Z" fill="#fbbf24" stroke="#0f172a" strokeWidth="4" />
      <rect x="137" y="160" width="26" height="15" rx="4" fill="#0f172a" />
      {/* Energy rays */}
      <line x1="150" y1="30" x2="150" y2="10" stroke="#f43f5e" strokeWidth="5" strokeLinecap="round" />
      <line x1="70" y1="110" x2="50" y2="110" stroke="#f43f5e" strokeWidth="5" strokeLinecap="round" />
      <line x1="230" y1="110" x2="250" y2="110" stroke="#f43f5e" strokeWidth="5" strokeLinecap="round" />
      <line x1="90" y1="50" x2="75" y2="35" stroke="#8b5cf6" strokeWidth="5" strokeLinecap="round" />
      <line x1="210" y1="50" x2="225" y2="35" stroke="#8b5cf6" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}
