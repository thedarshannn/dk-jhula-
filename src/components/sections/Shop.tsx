import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { products, categories } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";

export default function Shop() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.cat === activeFilter);

  return (
    <section id="shop" className="section-padding bg-surface">
      <div className="max-w-[1440px] mx-auto">

        {/* Filter tabs — architectural, no rounded corners */}
        <BlurFade delay={0.2} inView inViewMargin="-80px">
          <div className="flex flex-wrap gap-0 mb-14">
            {categories.map((cat) => (
              <Button
                key={cat.key}
                variant="ghost"
                size="sm"
                onClick={() => setActiveFilter(cat.key)}
                className={cn(
                  "font-display text-[11px] tracking-[0.08em] uppercase font-semibold px-6",
                  activeFilter === cat.key
                    ? "bg-primary text-on-primary hover:bg-primary"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                )}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </BlurFade>

        {/* Grid — 2 cols → 3 → 4 */}
        <motion.div
          layout
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
