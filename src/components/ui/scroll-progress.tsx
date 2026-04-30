import { motion, useScroll, type MotionProps } from "motion/react"

import { cn } from "@/lib/utils"

interface ScrollProgressProps extends Omit<
  React.HTMLAttributes<HTMLElement>,
  keyof MotionProps
> {
  ref?: React.Ref<HTMLDivElement>
}

export function ScrollProgress({
  className,
  ref,
  ...props
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-[60] h-[2px] origin-left",
        className
      )}
      style={{
        scaleX: scrollYProgress,
        background: "linear-gradient(to right, #C9A227, #E8CC7A, #C9A227)",
      }}
      {...props}
    />
  )
}
