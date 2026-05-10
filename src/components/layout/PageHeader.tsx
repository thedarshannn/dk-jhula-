import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <section className="bg-primary-container grain-overlay">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16 pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Breadcrumb */}
        <BlurFade delay={0.05} inView={false}>
          <nav className="flex items-center gap-2 mb-8">
            <Link
              to="/"
              className="font-display text-[11px] uppercase tracking-[0.1em] font-semibold text-primary-fixed-dim/60 hover:text-secondary-fixed-dim transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-primary-fixed-dim/30" />
            <span className="font-display text-[11px] uppercase tracking-[0.1em] font-semibold text-secondary-fixed-dim">
              {breadcrumb || title}
            </span>
          </nav>
        </BlurFade>

        {/* Title */}
        <BlurFade delay={0.15} direction="up" offset={30} inView={false}>
          <h1 className="font-display text-[48px] md:text-[72px] font-extrabold text-primary-fixed tracking-[0.04em] leading-[1.05] uppercase max-w-4xl">
            {title}
          </h1>
        </BlurFade>

        {/* Subtitle */}
        {subtitle && (
          <BlurFade delay={0.25} inView={false}>
            <p className="font-body text-[20px] md:text-[22px] italic text-primary-fixed-dim leading-[1.6] mt-6 max-w-2xl">
              {subtitle}
            </p>
          </BlurFade>
        )}
      </div>
    </section>
  );
}
