import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-display text-[12px] font-semibold uppercase tracking-[0.1em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-on-primary hover:bg-primary-container active:scale-[0.98]",
        destructive:
          "bg-red-600 text-white hover:bg-red-700",
        outline:
          "bg-transparent text-on-surface border-b border-outline-variant hover:border-on-surface",
        secondary:
          "bg-surface-container-highest text-on-surface hover:bg-surface-container-high",
        ghost:
          "hover:bg-surface-container-high hover:text-on-surface",
        link:
          "text-on-surface underline-offset-4 hover:underline",
        gold:
          "bg-secondary-container text-on-secondary-container hover:bg-secondary-container/85 active:scale-[0.98]",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#1da851]",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 px-4 text-[11px]",
        lg: "h-12 px-10",
        xl: "px-12 py-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
