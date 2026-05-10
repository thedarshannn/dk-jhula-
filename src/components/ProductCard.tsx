import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { getWhatsAppOrderUrl } from "@/lib/products";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const badgeConfig: Record<string, { label: string; variant: "default" | "secondary" | "outline" }> = {
  best: { label: "Bestseller",  variant: "default" },
  new:  { label: "New Arrival", variant: "secondary" },
  sale: { label: "On Sale",     variant: "outline" },
};

export default function ProductCard({ product }: { product: Product }) {
  const badge = product.badge ? badgeConfig[product.badge] : null;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="product-card group"
    >
      {/* Image — 4:5 portrait, no border, no shadow */}
      <div
        className="product-card-img relative overflow-hidden bg-surface-container"
        style={{ aspectRatio: "4 / 5" }}
      >
        {badge && (
          <Badge
            variant={badge.variant}
            className="absolute top-4 left-4 z-10"
          >
            {badge.label}
          </Badge>
        )}

        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />

        {/* Hover tint */}
        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500" />

        {/* Slide-up order bar */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo z-20">
          <a
            href={getWhatsAppOrderUrl(product.name, product.price)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-6 py-4 bg-surface text-on-surface font-display text-[11px] tracking-[0.08em] uppercase font-semibold hover:bg-secondary-container hover:text-on-secondary-container transition-colors duration-200"
          >
            Order via WhatsApp
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </a>
        </div>
      </div>

      {/* Body — minimal, editorial */}
      <div className="pt-5 pb-6">
        <h3 className="font-display font-bold text-[13px] tracking-[0.04em] text-on-surface mb-1.5 line-clamp-1">
          {product.name}
        </h3>
        <p className="font-body text-[14px] text-on-surface-variant leading-relaxed mb-4 line-clamp-2 italic">
          {product.desc}
        </p>
        <div className="flex items-end justify-between">
          <span className="font-body text-[22px] italic text-on-surface leading-none">
            {product.price}
          </span>
          <a
            href={getWhatsAppOrderUrl(product.name, product.price)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-[10px] tracking-[0.1em] uppercase text-on-surface-variant hover:text-secondary transition-colors duration-200 font-semibold"
          >
            Order →
          </a>
        </div>
      </div>
    </motion.article>
  );
}
