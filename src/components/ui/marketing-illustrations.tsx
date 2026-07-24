"use client";

import React from "react";

// Digital Marketing Hero Vector Illustration
export function MarketingHeroIllustration({ className = "w-full h-auto max-w-xs" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 500 360" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="250" cy="180" r="140" fill="url(#hero-grad-1)" opacity="0.2" />
      <path d="M120 80 Q 250 30 380 100 T 420 280 Q 280 340 140 290 Z" fill="url(#hero-grad-2)" opacity="0.15" />
      
      {/* Central Megaphone / Growth Blast */}
      <g transform="translate(140, 70)">
        <path d="M70 120 L160 70 L160 170 Z" fill="#f43f5e" />
        <rect x="50" y="95" width="40" height="50" rx="8" fill="#fbbf24" />
        <circle cx="160" cy="120" r="45" fill="#ec4899" opacity="0.85" />
        <circle cx="160" cy="120" r="26" fill="#8b5cf6" />
        <path d="M210 85 A 50 50 0 0 1 210 155" stroke="#fbbf24" strokeWidth="8" strokeLinecap="round" />
        <path d="M235 65 A 75 75 0 0 1 235 175" stroke="#f43f5e" strokeWidth="8" strokeLinecap="round" />
      </g>

      {/* Floating Badges */}
      <g transform="translate(40, 50)">
        <rect width="100" height="50" rx="14" fill="#0f172a" stroke="#f43f5e" strokeWidth="2.5" />
        <circle cx="25" cy="25" r="10" fill="#f43f5e" />
        <text x="44" y="29" fill="#ffffff" fontSize="11" fontWeight="bold">#VIRAL</text>
      </g>

      <g transform="translate(340, 230)">
        <rect width="120" height="60" rx="16" fill="#fbbf24" stroke="#0f172a" strokeWidth="3" />
        <text x="18" y="30" fill="#0f172a" fontSize="14" fontWeight="900">+420%</text>
        <text x="18" y="46" fill="#0f172a" fontSize="9" fontWeight="bold">ROAS LIFT 📈</text>
      </g>

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

// Brand Strategy & Design Vector Illustration
export function BrandingIllustration({ className = "w-full h-auto max-w-xs" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="220" rx="20" fill="url(#brand-bg)" opacity="0.1" />
      <circle cx="80" cy="75" r="32" fill="#f43f5e" />
      <circle cx="140" cy="65" r="38" fill="#fbbf24" />
      <circle cx="210" cy="85" r="28" fill="#8b5cf6" />
      <circle cx="250" cy="135" r="22" fill="#10b981" />
      
      {/* Designer Stylus & Canvas */}
      <path d="M50 165 L170 110 L210 150 L90 205 Z" fill="#ec4899" />
      <path d="M170 110 L200 80 L230 110 L200 140 Z" fill="#fbbf24" />
      <circle cx="200" cy="80" r="7" fill="#ffffff" />

      <defs>
        <linearGradient id="brand-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Social Media & Growth Vector Illustration
export function SocialMediaIllustration({ className = "w-full h-auto max-w-xs" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="30" width="150" height="70" rx="18" fill="#f43f5e" />
      <path d="M55 100 L38 118 L72 100 Z" fill="#f43f5e" />
      <text x="42" y="70" fill="#ffffff" fontSize="15" fontWeight="bold">🔥 GO VIRAL</text>

      <rect x="130" y="110" width="150" height="70" rx="18" fill="#fbbf24" />
      <path d="M230 110 L248 92 L212 110 Z" fill="#fbbf24" />
      <text x="146" y="150" fill="#0f172a" fontSize="14" fontWeight="900">10M+ REACH</text>

      <circle cx="250" cy="45" r="20" fill="#ec4899" />
      <path d="M241 43 C241 38 250 36 250 41 C250 36 259 38 259 43 C259 48 250 53 250 53 C250 53 241 48 241 43 Z" fill="#ffffff" />
    </svg>
  );
}

// Video Studio & Production Vector Illustration
export function ContentCreationIllustration({ className = "w-full h-auto max-w-xs" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="45" y="55" width="230" height="130" rx="18" fill="#0f172a" />
      <polygon points="130,95 130,145 185,120" fill="#f43f5e" />
      <rect x="45" y="35" width="230" height="25" rx="6" fill="#fbbf24" />
      <path d="M75 35 L95 60 M135 35 L155 60 M195 35 L215 60" stroke="#0f172a" strokeWidth="3.5" />
      <circle cx="275" cy="25" r="10" fill="#10b981" />
      <circle cx="30" cy="165" r="14" fill="#8b5cf6" />
    </svg>
  );
}

// Creative Strategy & Brainstorming Vector Illustration
export function BrainstormingIllustration({ className = "w-full h-auto max-w-xs" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="160" cy="100" r="55" fill="#fbbf24" opacity="0.25" />
      <path d="M130 100 C130 75 190 75 190 100 C190 118 175 128 175 142 L145 142 C145 128 130 118 130 100 Z" fill="#fbbf24" stroke="#0f172a" strokeWidth="3.5" />
      <rect x="147" y="146" width="26" height="14" rx="3" fill="#0f172a" />
      <line x1="160" y1="30" x2="160" y2="12" stroke="#f43f5e" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="85" y1="100" x2="67" y2="100" stroke="#f43f5e" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="235" y1="100" x2="253" y2="100" stroke="#f43f5e" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="105" y1="45" x2="92" y2="32" stroke="#8b5cf6" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="215" y1="45" x2="228" y2="32" stroke="#8b5cf6" strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  );
}

// Performance Growth & Analytics Vector Illustration
export function GrowthAnalyticsIllustration({ className = "w-full h-auto max-w-xs" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="30" width="260" height="160" rx="20" fill="#0f172a" opacity="0.06" />
      {/* Growth Trend Line */}
      <path d="M50 150 Q 110 140 150 90 T 270 40" stroke="#f43f5e" strokeWidth="6" strokeLinecap="round" fill="none" />
      {/* Bars */}
      <rect x="60" y="120" width="24" height="40" rx="6" fill="#8b5cf6" opacity="0.7" />
      <rect x="110" y="100" width="24" height="60" rx="6" fill="#ec4899" opacity="0.8" />
      <rect x="160" y="70" width="24" height="90" rx="6" fill="#fbbf24" />
      <rect x="210" y="45" width="24" height="115" rx="6" fill="#10b981" />
      <circle cx="270" cy="40" r="10" fill="#f43f5e" />
    </svg>
  );
}
