import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ASSETS } from "@/lib/cloudinary";
import { BlurFade } from "@/components/ui/blur-fade";

export default function CraftTeaser() {
  return (
    <section className="bg-surface-container-low grain-overlay overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Image — bleeds to edge on large screens */}
          <BlurFade delay={0.1} inView inViewMargin="-80px">
            <div className="relative h-[400px] lg:h-full overflow-hidden">
              <img
                src={ASSETS.heroImage}
                alt="DK Jhula artisan at work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-container-low/30 hidden lg:block" />
            </div>
          </BlurFade>

          {/* Editorial copy */}
          <BlurFade delay={0.2} inView inViewMargin="-80px">
            <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 xl:px-24 py-16 lg:py-24">
              <div className="font-display text-[12px] uppercase tracking-[0.1em] font-semibold text-secondary mb-6">
                The Resham Doori Craft
              </div>

              <h2 className="font-display text-[32px] md:text-[40px] font-extrabold text-on-surface tracking-[0.04em] leading-[1.15] uppercase mb-6">
                Where Geometry<br />Meets Heritage
              </h2>

              <p className="font-body text-[18px] md:text-[20px] text-on-surface-variant leading-[1.7] mb-4">
                Founded in 2009 by master weaver Daxaben K. Prajapati, every
                DK Jhula piece begins with a single strand of silk rope —
                hand-tensioned into an architectural web of strength and beauty.
              </p>

              <p className="font-body text-[18px] italic text-on-surface-variant/70 leading-[1.7] mb-10">
                "True luxury is measured in generations, not seasons."
              </p>

              <Link
                to="/heritage"
                className="group inline-flex items-center gap-3 font-display text-[12px] tracking-[0.1em] uppercase font-semibold text-on-surface hover:text-secondary transition-colors self-start"
              >
                Discover Our Heritage
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
