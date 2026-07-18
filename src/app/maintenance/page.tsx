import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Settings, Home } from "lucide-react";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 glass p-12 md:p-16 rounded-3xl border border-border/50 max-w-xl w-full shadow-2xl">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 relative">
          <Settings className="w-12 h-12 text-primary animate-spin-slow" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-background rounded-full flex items-center justify-center shadow-lg border border-border">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
        <h2 className="text-3xl font-heading font-bold mb-4">System Update in Progress</h2>
        <p className="text-muted-foreground mb-8 text-lg">
          We are currently upgrading our cloud infrastructure to serve you better. We'll be back online shortly. Thank you for your patience!
        </p>
        <Link href="/">
          <Button className="rounded-full px-8 h-12 flex items-center gap-2 mx-auto">
            <Home className="w-5 h-5" /> Check Status
          </Button>
        </Link>
      </div>
    </div>
  );
}
