"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service in production
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-destructive/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 glass p-12 md:p-16 rounded-3xl border border-destructive/20 max-w-lg w-full shadow-2xl">
        <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6 text-destructive">
          <AlertTriangle className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-heading font-bold mb-4">Server Error</h2>
        <p className="text-muted-foreground mb-8 text-lg">
          We encountered an unexpected issue while processing your request. Our engineers have been notified.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={reset} variant="outline" className="rounded-full px-8 h-12 flex items-center gap-2">
            <RotateCcw className="w-4 h-4" /> Try Again
          </Button>
          <Link href="/">
            <Button className="rounded-full px-8 h-12">Return to Homepage</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
