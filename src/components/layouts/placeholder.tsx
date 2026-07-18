import React from "react";
import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlaceholderProps {
  title: string;
  description?: string;
}

export function PlaceholderPage({ title, description }: PlaceholderProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-background">
      {/* Background Decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto glass p-10 md:p-16 rounded-3xl border border-border">
        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-8">
          <Construction className="w-10 h-10 text-primary" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 tracking-tight">
          {title}
        </h1>
        
        <p className="text-lg text-muted-foreground mb-10 max-w-lg">
          {description || "We are currently crafting a premium digital experience for this section. Check back soon."}
        </p>
        
        <Link href="/" passHref legacyBehavior>
          <Button size="lg" className="rounded-full px-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
