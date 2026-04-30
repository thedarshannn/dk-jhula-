import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-brand-brown text-warm-white border border-brand-brown hover:bg-transparent hover:text-brand-brown active:scale-[0.98]",
        destructive:
          "bg-red-600 text-white hover:bg-red-700",
        outline:
          "border border-brand-brown/30 bg-transparent text-brand-brown hover:border-brand-brown",
        secondary:
          "bg-beige-light text-brand-brown hover:bg-beige",
        ghost:
          "hover:bg-beige-light hover:text-brand-brown",
        link:
          "text-brand-brown underline-offset-4 hover:underline",
        gold:
          "border border-gold/40 text-gold bg-transparent hover:bg-gold hover:text-brand-brown",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#1da851] hover:shadow-lg hover:shadow-[#25D366]/25",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-xs",
        lg: "h-11 px-8",
        xl: "px-10 py-4",
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
