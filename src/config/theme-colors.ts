/**
 * Centralized Application Color & Design Token Registry
 * 
 * Every color value, brand palette token, gradient preset, badge style,
 * and ambient glow effect across the Arohan website is defined here.
 */

// 1. Raw Hex Colors
export const COLOR_HEX = {
  rose: "#f43f5e",
  roseLight: "#fb7185",
  roseDark: "#e11d48",

  amber: "#fbbf24",
  amberLight: "#fcd34d",
  amberDark: "#f59e0b",

  purple: "#8b5cf6",
  purpleLight: "#a78bfa",
  purpleDark: "#7c3aed",

  emerald: "#10b981",
  emeraldLight: "#34d399",
  emeraldDark: "#059669",

  sky: "#0ea5e9",
  skyLight: "#38bdf8",
  skyDark: "#0284c7",

  pink: "#ec4899",
  pinkLight: "#f472b6",

  slateDark: "#0f172a",
  slateVelvet: "#0b0713",
  white: "#ffffff",
} as const;

// 2. HSL Theme Tokens (Used by Tailwind CSS variables in globals.css)
export const COLOR_HSL = {
  light: {
    background: "40 33% 97%",
    foreground: "230 40% 12%",
    card: "0 0% 100%",
    cardForeground: "230 40% 12%",
    brandPrimary: "354 95% 62%",
    brandSecondary: "38 96% 54%",
    brandAccent: "270 85% 60%",
    brandPink: "330 90% 65%",
    brandMint: "162 80% 42%",
    brandSky: "198 90% 50%",
    border: "35 30% 88%",
  },
  dark: {
    background: "250 30% 8%",
    foreground: "40 33% 96%",
    card: "250 25% 12%",
    cardForeground: "40 33% 96%",
    brandPrimary: "354 100% 66%",
    brandSecondary: "40 100% 55%",
    brandAccent: "275 90% 68%",
    brandPink: "330 95% 70%",
    brandMint: "162 85% 50%",
    brandSky: "198 95% 60%",
    border: "250 20% 20%",
  },
} as const;

// 3. Centralized Gradient Presets (Tailwind utility class strings)
export const GRADIENT_PRESETS = {
  primary: "from-rose-500 to-amber-500",
  secondary: "from-amber-400 to-rose-500",
  accent: "from-purple-600 to-rose-500",
  emerald: "from-emerald-400 to-sky-500",
  purple: "from-purple-500 to-rose-500",
  hero: "from-amber-400 via-rose-500 to-purple-600",
  heroBackground: "from-rose-500/20 via-amber-500/20 to-purple-500/20",
  darkOverlay: "from-slate-950 via-slate-950/40 to-transparent",
} as const;

// 4. Centralized Badge Color Presets
export const BADGE_COLOR_PRESETS = {
  rose: {
    bg: "bg-rose-500/10",
    text: "text-rose-500",
    border: "border-rose-500/20",
    solid: "bg-rose-500 text-white",
  },
  amber: {
    bg: "bg-amber-500/10",
    text: "text-amber-600 dark:text-amber-400",
    border: "border-amber-500/20",
    solid: "bg-amber-400 text-slate-950",
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-500",
    border: "border-purple-500/20",
    solid: "bg-purple-600 text-white",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-500/20",
    solid: "bg-emerald-500 text-slate-950",
  },
  slate: {
    bg: "bg-muted",
    text: "text-muted-foreground",
    border: "border-border/60",
    solid: "bg-slate-950 text-white",
  },
} as const;

// 5. Centralized Ambient Glow Presets
export const AMBIENT_GLOWS = {
  rose: "bg-rose-500/10",
  amber: "bg-amber-500/10",
  purple: "bg-purple-500/10",
  emerald: "bg-emerald-500/10",
} as const;
