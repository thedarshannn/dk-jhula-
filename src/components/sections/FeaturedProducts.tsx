import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { BlurFade } from "@/components/ui/blur-fade";

export default function FeaturedProducts() {
  // Pick 4 bestsellers
  const featured = products.filter((p) => p.badge === "best").slice(0, 4);

  return (
    <section className="section-padding bg-surface">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <BlurFade delay={0.1} inView inViewMargin="-80px">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
            <div>
              <div className="section-label">Curated Selection</div>
              <h2 className="section-title">Featured Pieces</h2>
              <p className="section-subtitle">
                Our most sought-after creations, chosen for their exceptional
                craftsmanship and timeless appeal.
              </p>
            </div>
            <Link
              to="/collections"
              className="group inline-flex items-center gap-3 font-display text-[12px] tracking-[0.1em] uppercase font-semibold text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap"
            >
              View All Collections
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </BlurFade>

        {/* 4-column grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
