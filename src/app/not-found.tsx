import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 glass p-12 md:p-16 rounded-3xl border border-border/50 max-w-lg w-full shadow-2xl">
        <h1 className="text-8xl font-heading font-bold text-primary mb-6">404</h1>
        <h2 className="text-3xl font-heading font-bold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Looks like this page got lost in the cloud. Let's get you back to familiar territory.
        </p>
        <Link href="/">
          <Button className="rounded-full px-8 h-12 flex items-center gap-2 mx-auto">
            <Home className="w-5 h-5" /> Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}
