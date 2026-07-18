import { FadeIn } from "@/components/animations/fade-in";
import { FolderOpen, Plus, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  title: string;
  description: string;
  type?: "search" | "projects" | "blog" | "default";
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({ title, description, type = "default", actionLabel, onAction }: EmptyStateProps) {
  const getIcon = () => {
    switch (type) {
      case "search": return <SearchX className="w-12 h-12" />;
      case "projects": return <FolderOpen className="w-12 h-12" />;
      default: return <FolderOpen className="w-12 h-12" />;
    }
  };

  return (
    <FadeIn>
      <div className="flex flex-col items-center justify-center p-12 text-center border border-dashed border-border/50 rounded-3xl bg-muted/10">
        <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center text-muted-foreground mb-6">
          {getIcon()}
        </div>
        <h3 className="text-2xl font-heading font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">{description}</p>
        
        {actionLabel && (
          <Button onClick={onAction} className="rounded-full flex items-center gap-2">
            <Plus className="w-4 h-4" /> {actionLabel}
          </Button>
        )}
      </div>
    </FadeIn>
  );
}
