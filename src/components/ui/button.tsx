import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent font-medium tracking-wide whitespace-nowrap transition-all duration-300 outline-none select-none focus-visible:ring-4 focus-visible:ring-primary/30 active:scale-95 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "gradient-button-primary text-white hover:scale-[1.03]",
        purple: "gradient-button-purple text-white hover:scale-[1.03]",
        gradient: "bg-gradient-to-r from-amber-400 via-rose-500 to-purple-600 text-white shadow-lg shadow-rose-500/25 hover:shadow-xl hover:shadow-rose-500/40 hover:scale-[1.03]",
        outline:
          "border-2 border-foreground/20 bg-background/50 backdrop-blur-md text-foreground hover:border-primary hover:text-primary hover:bg-primary/5",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md shadow-amber-500/20 hover:scale-[1.03]",
        ghost:
          "hover:bg-primary/10 hover:text-primary active:bg-primary/20",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 text-sm gap-2 [&_svg:not([class*='size-'])]:size-4",
        xs: "h-7 px-3 text-xs gap-1 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 px-4 text-xs gap-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-14 px-8 text-base font-semibold gap-2.5 [&_svg:not([class*='size-'])]:size-5",
        xl: "h-16 px-10 text-lg font-bold gap-3 [&_svg:not([class*='size-'])]:size-6",
        icon: "size-10 rounded-full",
        "icon-xs": "size-7 rounded-full",
        "icon-sm": "size-8 rounded-full",
        "icon-lg": "size-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
