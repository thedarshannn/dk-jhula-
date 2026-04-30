import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { getWhatsAppOrderUrl } from "@/lib/products";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
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
    >
      <Card className="product-card group overflow-hidden border-beige/50 shadow-none hover:shadow-md transition-shadow duration-500 rounded-sm">
        {/* Image — 4:5 portrait */}
        <div
          className="product-card-img relative overflow-hidden"
          style={{ aspectRatio: "4 / 5" }}
        >
          {badge && (
            <Badge
              variant={badge.variant}
              className={cn(
                "absolute top-3 left-3 z-10 font-display text-[7.5px] tracking-[2px] uppercase font-bold rounded-none",
                badge.variant === "default" && "bg-gold text-brand-brown hover:bg-gold border-gold",
                badge.variant === "secondary" && "bg-brand-brown text-warm-white hover:bg-brand-brown border-brand-brown",
                badge.variant === "outline" && "bg-beige-light text-brand-brown-mid border-beige-mid hover:bg-beige-light"
              )}
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
          <div className="absolute inset-0 bg-brand-brown opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500" />

          {/* Slide-up order bar */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo z-20">
            <a
              href={getWhatsAppOrderUrl(product.name, product.price)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-5 py-[14px] bg-warm-white text-brand-brown font-display text-[9.5px] tracking-[2.5px] uppercase font-bold hover:bg-gold hover:text-brand-brown transition-colors duration-200"
            >
              Order via WhatsApp
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </a>
          </div>
        </div>

        {/* Body */}
        <CardContent className="px-4 pt-4 pb-5">
          <h3 className="font-display font-semibold text-[12.5px] tracking-[0.2px] text-brand-brown mb-1.5 line-clamp-1">
            {product.name}
          </h3>
          <p className="font-body text-[13px] text-brand-brown-mid/65 leading-relaxed mb-3.5 line-clamp-2">
            {product.desc}
          </p>
          <div className="flex items-end justify-between border-t border-beige/70 pt-3.5">
            <span className="font-body text-[20px] italic text-brand-brown leading-none">
              {product.price}
            </span>
            <a
              href={getWhatsAppOrderUrl(product.name, product.price)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-[9px] tracking-[2.5px] uppercase text-brand-brown-mid hover:text-gold transition-colors duration-200 font-semibold"
            >
              Order
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.article>
  );
}
