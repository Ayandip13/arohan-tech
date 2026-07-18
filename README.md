# Arohan Tech Solution

![Arohan Tech Solution](https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop)

A premium, production-ready corporate platform for Arohan Tech Solution. This repository contains the frontend architecture, focusing on a luxury digital experience with exceptional performance, SEO, accessibility, and high-end micro-interactions.

## 🚀 Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Motion & Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Scroll Effects**: [Lenis Smooth Scroll](https://github.com/darkroomengineering/lenis)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📂 Folder Structure

```
src/
├── app/                  # Next.js App Router (Pages, Layouts, SEO, Errors)
│   ├── blog/             # Insights & Blog Engine
│   ├── contact/          # Interactive Contact Forms
│   ├── faq/              # Advanced FAQ & Search
│   ├── work/             # Portfolio Case Studies
│   ├── team/             # Leadership & Culture
│   ├── careers/          # Job Board placeholders
│   ├── privacy-policy/   # Legal pages
│   └── ...
├── components/           # UI and Layout Components
│   ├── animations/       # Reusable Framer Motion wrappers (FadeIn, Reveal)
│   ├── forms/            # Client-side interactive forms
│   ├── layouts/          # Global layout parts (Navbar, Footer, Theme)
│   ├── sections/         # Complex page sections (Hero, Features, Newsletter)
│   └── ui/               # Atomic design UI elements (Buttons, Inputs, Modals)
├── config/               # Global constants and site configuration
├── lib/                  # Utility functions and API service placeholders
└── providers/            # React context providers (Theme, Smooth Scroll)
```

## 🛠️ Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔐 Environment Variables

Create a `.env.local` file in the root directory for future API integrations.

```env
# Future API Integrations
NEXT_PUBLIC_API_URL=https://api.arohantech.com
NEXT_PUBLIC_CMS_ENDPOINT=
NEXT_PUBLIC_ANALYTICS_ID=
```

## 🏗️ Future Roadmap & Architecture

This frontend is designed as a scalable foundation. Future backend integration targets include:

- **Authentication Structure**: Designed to support NextAuth.js or custom JWT workflows.
- **Client/Employee Portals**: Layouts accommodate role-based routing.
- **Headless CMS**: Blog and Projects are ready to be wired to Sanity, Contentful, or a custom API.
- **API Client**: A centralized API service layer (`src/lib/api-client.ts`) handles request interception and response normalization.

## 🎨 Design Philosophy & Coding Standards

1. **Strict TypeScript**: No `any` types. Interfaces and Types must be explicitly defined.
2. **Server-First Components**: Components default to Server Components for SEO and performance. `"use client"` is reserved strictly for interactive leaves (forms, modals, heavy animations).
3. **Motion Language**: `framer-motion` is utilized for entry animations (`FadeIn`, `Reveal`), utilizing spring physics for premium feel. Transitions must maintain 60FPS.
4. **Accessibility**: All interactive elements must maintain clear focus states (`focus:ring-2`), semantic HTML tags (`<nav>`, `<article>`, `<aside>`), and sufficient contrast ratios.

---

*Handcrafted by the Engineering Team.*
