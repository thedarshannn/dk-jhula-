import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

export default function TestimonialHighlight() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-center">
          {/* Left — label + link */}
          <BlurFade delay={0.1} inView inViewMargin="-80px">
            <div>
              <div className="section-label">Client Testimonials</div>
              <h2 className="font-display text-[32px] md:text-[40px] font-extrabold text-on-surface tracking-[0.04em] leading-[1.15] uppercase mb-6">
                Voices of<br />Our Patrons
              </h2>
              <div className="flex gap-1 mb-8">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <Link
                to="/reviews"
                className="group inline-flex items-center gap-3 font-display text-[12px] tracking-[0.1em] uppercase font-semibold text-on-surface-variant hover:text-on-surface transition-colors"
              >
                Read All Reviews
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </BlurFade>

          {/* Right — featured quote */}
          <BlurFade delay={0.2} inView inViewMargin="-80px">
            <div className="bg-surface-container-low p-10 md:p-14 relative">
              {/* Large decorative quote mark */}
              <div className="absolute top-6 left-8 font-body text-[120px] leading-none text-outline-variant/15 select-none pointer-events-none">
                "
              </div>
              <blockquote className="relative z-10">
                <p className="font-body text-[22px] md:text-[26px] italic text-on-surface leading-[1.6] mb-8">
                  The craftsmanship is extraordinary. Our jhula has become the
                  centerpiece of our home — every guest remarks on its beauty.
                  Truly generational quality.
                </p>
                <footer className="flex items-center justify-between">
                  <div>
                    <div className="font-display text-[13px] font-bold tracking-[0.04em] text-on-surface">
                      Priya Sharma
                    </div>
                    <div className="font-display text-[11px] tracking-[0.06em] text-on-surface-variant mt-1">
                      Mumbai
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                    ))}
                  </div>
                </footer>
              </blockquote>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
