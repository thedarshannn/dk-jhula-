import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-secondary-container text-on-secondary-container",
        secondary:
          "bg-primary text-on-primary",
        destructive:
          "bg-red-600 text-white",
        outline:
          "bg-transparent text-on-surface-variant border-b border-outline-variant",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
