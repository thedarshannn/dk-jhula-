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
    <section id="shop" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">

        {/* Section header — split layout */}
        <BlurFade delay={0.1} inView inViewMargin="-80px">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">
            <div>
              <div className="section-label">Our Collection</div>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-brand-brown tracking-tight leading-tight">
                Handcrafted<br className="hidden sm:block" /> with Love
              </h2>
            </div>
            <p className="font-body text-[16px] text-brand-brown-mid/85 leading-relaxed max-w-xs md:text-right md:pb-1">
              Premium resham doori. Washable, warranted, customizable.
              <br />Capacity: 150–200&nbsp;kg.
            </p>
          </div>
        </BlurFade>

        {/* Filter pill group — shadcn Button */}
        <BlurFade delay={0.2} inView inViewMargin="-80px">
          <div className="flex flex-wrap gap-1 mb-10 p-1 bg-beige-light/70 border border-beige w-fit">
            {categories.map((cat) => (
              <Button
                key={cat.key}
                variant={activeFilter === cat.key ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveFilter(cat.key)}
                className={cn(
                  "font-display text-[9.5px] tracking-[2px] uppercase font-semibold rounded-none",
                  activeFilter === cat.key
                    ? "bg-brand-brown text-warm-white hover:bg-brand-brown"
                    : "text-brand-brown-mid hover:text-brand-brown hover:bg-beige"
                )}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </BlurFade>

        {/* Grid — 2 cols mobile, 3 lg, 4 xl */}
        <motion.div
          layout
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4"
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
