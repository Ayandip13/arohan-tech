"use client";

import React from "react";
import { Image as ImageIcon, Smile, Laugh } from "lucide-react";
import { FunkySticker } from "@/components/ui/funky-elements";
import { BADGE_COLOR_PRESETS } from "@/config/theme-colors";

interface MemePlaceholderProps {
  title?: string;
  caption?: string;
  tag?: string;
  variant?: "rose" | "amber" | "purple" | "emerald";
  className?: string;
}

export function MemePlaceholderCard({
  title = "[Insert Hilarious Client vs Agency Meme Here]",
  caption = "When the client approves the first draft without any changes... 🤯",
  tag = "Agency Humor Corner",
  variant = "rose",
  className = "",
}: MemePlaceholderProps) {
  const variantStyles = {
    rose: {
      bg: "bg-rose-500/5 dark:bg-rose-500/10",
      border: "border-rose-500/30",
      stickerBg: BADGE_COLOR_PRESETS.rose.solid,
      iconColor: BADGE_COLOR_PRESETS.rose.text,
      accentBg: BADGE_COLOR_PRESETS.rose.bg,
    },
    amber: {
      bg: "bg-amber-500/5 dark:bg-amber-500/10",
      border: "border-amber-500/30",
      stickerBg: BADGE_COLOR_PRESETS.amber.solid,
      iconColor: BADGE_COLOR_PRESETS.amber.text,
      accentBg: BADGE_COLOR_PRESETS.amber.bg,
    },
    purple: {
      bg: "bg-purple-500/5 dark:bg-purple-500/10",
      border: "border-purple-500/30",
      stickerBg: BADGE_COLOR_PRESETS.purple.solid,
      iconColor: BADGE_COLOR_PRESETS.purple.text,
      accentBg: BADGE_COLOR_PRESETS.purple.bg,
    },
    emerald: {
      bg: "bg-emerald-500/5 dark:bg-emerald-500/10",
      border: "border-emerald-500/30",
      stickerBg: BADGE_COLOR_PRESETS.emerald.solid,
      iconColor: BADGE_COLOR_PRESETS.emerald.text,
      accentBg: BADGE_COLOR_PRESETS.emerald.bg,
    },
  };

  const style = variantStyles[variant];

  return (
    <div className={`py-6 flex justify-center px-4 ${className}`}>
      <div
        className={`relative w-full max-w-xl rounded-3xl p-5 border-2 ${style.border} ${style.bg} backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-[1.01]`}
      >
        {/* Floating Top Sticker */}
        <div className="absolute -top-3.5 right-6 z-10">
          <FunkySticker color={style.stickerBg} rotation="rotate-2">
            <span className="flex items-center gap-1 text-xs">
              <Laugh className="w-3.5 h-3.5" /> {tag}
            </span>
          </FunkySticker>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* SVG Graphic Image Placeholder Box */}
          <div
            className={`w-full sm:w-36 h-28 shrink-0 rounded-2xl ${style.accentBg} border-2 border-dashed ${style.border} flex flex-col items-center justify-center p-3 text-center relative overflow-hidden group`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent pointer-events-none" />
            <ImageIcon className={`w-8 h-8 ${style.iconColor} mb-1 opacity-75 group-hover:scale-110 transition-transform`} />
            <span className="text-[10px] font-extrabold text-muted-foreground tracking-wider uppercase">
              Meme Placeholder
            </span>
          </div>

          {/* Text & Caption */}
          <div className="flex-1 space-y-1.5 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-background/80 text-foreground font-extrabold text-[11px] border border-border/80">
              <Smile className={`w-3.5 h-3.5 ${style.iconColor}`} />
              <span>Agency Reality Check</span>
            </div>

            <h5 className="font-heading font-black text-sm md:text-base text-foreground leading-snug">
              {title}
            </h5>

            <p className="text-xs text-muted-foreground font-medium italic leading-relaxed">
              "{caption}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
