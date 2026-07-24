"use client";

import React from "react";

// Hand-drawn wavy arrow pointing right/down
export function HandDrawnArrow({ className = "w-12 h-12 text-amber-400" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 25C25 15 45 40 70 20C78 14 82 25 85 28M85 28C78 30 72 35 70 42M85 28L65 24"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Playful Curly Arrow
export function CurlyArrow({ className = "w-14 h-14 text-rose-500" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 20C10 50 40 80 70 60C90 45 70 20 50 35C40 45 55 75 80 80M80 80L68 68M80 80L68 88"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Sparkle / Star Burst Doodles
export function DoodleStar({ className = "w-6 h-6 text-amber-400" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 0L28.5 18.5L47 25L28.5 31.5L25 50L21.5 31.5L3 25L21.5 18.5L25 0Z" />
    </svg>
  );
}

// Smiley Face Icon Badge
export function SmileyBadge({ className = "w-8 h-8 text-slate-900 bg-amber-400" }: { className?: string }) {
  return (
    <div className={`rounded-full flex items-center justify-center font-black p-1 shadow-md rotate-3 hover:rotate-12 transition-transform ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="16" fill="currentColor" />
        <circle cx="12" cy="14" r="2.5" fill="#0f172a" />
        <circle cx="24" cy="14" r="2.5" fill="#0f172a" />
        <path
          d="M10 21C11.5 25.5 14.5 27 18 27C21.5 27 24.5 25.5 26 21"
          stroke="#0f172a"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

// Speech Bubble Sticker
export function SpeechBubble({
  text,
  className = "bg-rose-500 text-white"
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={`relative px-4 py-2 rounded-2xl font-extrabold text-xs shadow-lg uppercase tracking-wider inline-flex items-center gap-1.5 ${className}`}>
      <span>{text}</span>
      <div className="absolute -bottom-1.5 left-4 w-3 h-3 bg-inherit rotate-45" />
    </div>
  );
}

// Paper-Cut Sticker Tag
export function FunkySticker({
  children,
  color = "bg-amber-400 text-slate-950",
  rotation = "-rotate-3"
}: {
  children: React.ReactNode;
  color?: string;
  rotation?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-black text-xs uppercase tracking-wider shadow-md border-2 border-slate-900/10 ${color} ${rotation} hover:rotate-0 transition-transform cursor-pointer`}>
      {children}
    </span>
  );
}

// Highlight Underline / Paint Stroke Accent
export function HighlightStroke({ className = "text-amber-400/60" }: { className?: string }) {
  return (
    <svg className={`absolute -bottom-2 left-0 w-full h-3 -z-10 ${className}`} viewBox="0 0 200 20" preserveAspectRatio="none" fill="currentColor">
      <path d="M0 10 C 50 0, 150 20, 200 10 L 200 18 C 150 25, 50 5, 0 18 Z" />
    </svg>
  );
}

// Wavy Section Divider SVG
export function WavyDivider({ className = "text-card/50" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor">
        <path d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40 L1200,120 L0,120 Z" />
      </svg>
    </div>
  );
}
