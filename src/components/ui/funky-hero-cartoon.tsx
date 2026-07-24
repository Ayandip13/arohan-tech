"use client";

import React from "react";
import { TrendingUp, Flame } from "lucide-react";
import { FunkySticker } from "@/components/ui/funky-elements";

export function FunkyHeroCartoon({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <div className={`relative mx-auto max-w-md ${className}`}>
      {/* Soft Glow Underneath Cartoon */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-rose-500/15 via-amber-400/20 to-purple-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      {/* Floating Top Badge */}
      <div className="absolute -top-2 left-2 z-20 animate-bounce">
        <FunkySticker color="bg-rose-500 text-white" rotation="-rotate-6">
          <span className="flex items-center gap-1.5 text-xs font-black">
            <Flame className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            <span>LET'S GO VIRAL! 🚀</span>
          </span>
        </FunkySticker>
      </div>

      {/* Floating Right Stats Sticker */}
      <div className="absolute bottom-2 -right-2 z-20">
        <FunkySticker color="bg-amber-400 text-slate-950 shadow-xl" rotation="rotate-3">
          <span className="flex items-center gap-1.5 text-xs font-black">
            <TrendingUp className="w-4 h-4 text-rose-600" />
            <span>+420% ROAS LIFT</span>
          </span>
        </FunkySticker>
      </div>

      {/* Floating SVG Cartoon Illustration Without Boxed Card Background */}
      <div className="relative py-4">
        <svg
          viewBox="0 0 500 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-xl"
        >
          {/* Background Ambient Circle */}
          <circle cx="250" cy="210" r="160" fill="url(#cartoon-bg-grad)" opacity="0.25" />
          <path d="M100 120 C180 60, 320 60, 400 130 C450 200, 420 320, 360 360 C280 410, 140 380, 90 310 C50 240, 50 160, 100 120 Z" fill="url(#blob-grad)" opacity="0.15" />

          {/* Cartoon Character: Body & Hoodie */}
          <g id="character-body">
            {/* Torso / Cool Hoodie */}
            <path d="M170 380 Q 250 330 330 380 L350 420 L150 420 Z" fill="#8b5cf6" />
            {/* Hoodie Collar Details */}
            <path d="M210 350 L250 385 L290 350 Z" fill="#7c3aed" />
            <path d="M235 350 L235 390 M265 350 L265 390" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" />

            {/* Neck */}
            <rect x="230" y="280" width="40" height="45" rx="10" fill="#fcd34d" />

            {/* Head */}
            <ellipse cx="250" cy="220" rx="65" ry="70" fill="#fcd34d" />

            {/* Cool Wavy Hair */}
            <path d="M185 200 C180 140, 240 120, 250 120 C270 120, 320 140, 315 200 C300 170, 280 160, 250 160 C220 160, 200 170, 185 200 Z" fill="#0f172a" />
            <path d="M190 150 Q 230 110 270 140 Q 310 110 320 160 Z" fill="#f43f5e" />

            {/* Cool Oversized Glasses */}
            <g id="glasses">
              {/* Left Lens Frame */}
              <rect x="200" y="195" width="42" height="34" rx="12" fill="#0f172a" stroke="#fbbf24" strokeWidth="4" />
              {/* Right Lens Frame */}
              <rect x="258" y="195" width="42" height="34" rx="12" fill="#0f172a" stroke="#fbbf24" strokeWidth="4" />
              {/* Bridge */}
              <rect x="242" y="208" width="16" height="6" rx="3" fill="#fbbf24" />
              {/* Eyes Reflection */}
              <circle cx="215" cy="210" r="5" fill="#ffffff" />
              <circle cx="273" cy="210" r="5" fill="#ffffff" />
            </g>

            {/* Expressive Smile */}
            <path d="M225 250 Q 250 275 275 250" stroke="#0f172a" strokeWidth="5" strokeLinecap="round" fill="none" />
            <path d="M232 253 Q 250 268 268 253 Z" fill="#f43f5e" />

            {/* Cheeks / Blush */}
            <circle cx="198" cy="242" r="10" fill="#f43f5e" opacity="0.35" />
            <circle cx="302" cy="242" r="10" fill="#f43f5e" opacity="0.35" />

            {/* Over-Ear Headphones */}
            <path d="M175 210 C175 140, 325 140, 325 210" stroke="#f43f5e" strokeWidth="12" fill="none" strokeLinecap="round" />
            <rect x="168" y="195" width="20" height="40" rx="8" fill="#fbbf24" stroke="#0f172a" strokeWidth="3" />
            <rect x="312" y="195" width="20" height="40" rx="8" fill="#fbbf24" stroke="#0f172a" strokeWidth="3" />
          </g>

          {/* Floating Props & Marketing Elements */}

          {/* 1. Floating Rocket */}
          <g transform="translate(340, 90) rotate(15)">
            <path d="M20 50 Q 35 10 50 50 L50 80 Q 35 90 20 80 Z" fill="#f43f5e" />
            <circle cx="35" cy="45" r="10" fill="#ffffff" stroke="#0f172a" strokeWidth="3" />
            <path d="M10 70 L20 80 L15 95 Z" fill="#fbbf24" />
            <path d="M60 70 L50 80 L55 95 Z" fill="#fbbf24" />
            {/* Thrust Flame */}
            <path d="M25 82 Q 35 110 45 82 Z" fill="#10b981" />
          </g>

          {/* 2. Floating Coffee Cup */}
          <g transform="translate(70, 260) rotate(-10)">
            <rect x="10" y="20" width="40" height="50" rx="10" fill="#fbbf24" stroke="#0f172a" strokeWidth="3" />
            <rect x="8" y="14" width="44" height="10" rx="5" fill="#f43f5e" />
            {/* Steam */}
            <path d="M20 8 Q 25 0 20 -8" stroke="#8b5cf6" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M35 8 Q 40 0 35 -8" stroke="#8b5cf6" strokeWidth="3" fill="none" strokeLinecap="round" />
          </g>

          {/* 3. Floating Speech Bubble ("GROWTH!") */}
          <g transform="translate(60, 80)">
            <rect width="110" height="50" rx="18" fill="#0f172a" stroke="#10b981" strokeWidth="3" />
            <path d="M40 50 L50 65 L60 50 Z" fill="#0f172a" />
            <text x="55" y="30" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="900">
              GROWTH ⚡
            </text>
          </g>

          {/* 4. Doodles & Sparkles */}
          <g transform="translate(390, 260)">
            <polygon points="15,0 20,10 30,15 20,20 15,30 10,20 0,15 10,10" fill="#fbbf24" />
          </g>
          <g transform="translate(110, 200)">
            <polygon points="12,0 15,8 24,12 15,16 12,24 9,16 0,12 9,8" fill="#ec4899" />
          </g>

          {/* Gradients */}
          <defs>
            <linearGradient id="cartoon-bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="blob-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
