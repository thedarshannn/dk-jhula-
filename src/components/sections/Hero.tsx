import { ArrowRight, MessageCircle } from "lucide-react";
import { ASSETS } from "@/lib/cloudinary";
import { getWhatsAppUrl } from "@/lib/products";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="grain-overlay relative min-h-screen flex items-end justify-start overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster={ASSETS.logo}
        >
          <source src={ASSETS.heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1409]/70 via-transparent to-transparent" />
      </div>

      {/* Content — bottom-left anchored, editorial layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full pb-20 md:pb-28 pt-36">
        <div className="max-w-4xl">

          {/* Eyebrow rule — AnimatedShinyText */}
          <BlurFade delay={0.1} inView={false}>
            <div className="flex items-center gap-4 mb-7">
              <div className="h-px w-10 bg-gold/80" />
              <AnimatedShinyText
                shimmerWidth={120}
                className="font-display text-[9px] tracking-[5px] uppercase !text-gold/80 !max-w-none"
              >
                Handcrafted in India · Est. 2009
              </AnimatedShinyText>
            </div>
          </BlurFade>

          {/* Headline — three-line editorial reveal */}
          <BlurFade delay={0.18} direction="up" offset={40} inView={false}>
            <h1 className="font-display text-[clamp(48px,8vw,104px)] text-white font-extrabold leading-[0.92] tracking-[-0.03em]">
              Beautiful
            </h1>
          </BlurFade>
          <BlurFade delay={0.3} direction="up" offset={40} inView={false}>
            <h1 className="font-body text-[clamp(48px,8vw,104px)] text-gold italic font-bold leading-[0.92] tracking-[-0.02em]">
              Jhulas
            </h1>
          </BlurFade>
          <BlurFade delay={0.42} direction="up" offset={40} inView={false}>
            <h1 className="font-display text-[clamp(48px,8vw,104px)] text-white/35 font-light leading-[0.92] tracking-[-0.03em] mb-8">
              &amp; Décor
            </h1>
          </BlurFade>

          {/* Byline */}
          <BlurFade delay={0.54} inView={false}>
            <p className="font-display text-[9px] uppercase tracking-[4px] text-white/65 mb-6">
              by Daxaben K. Prajapati · Anand, Gujarat
            </p>
          </BlurFade>

          {/* Description */}
          <BlurFade delay={0.62} inView={false}>
            <p className="font-body text-[17px] md:text-[18px] text-white/88 leading-relaxed max-w-md mb-10">
              Handmade with premium resham doori. Washable, warranted, and
              fully customizable in colour, size &amp; design. Ships worldwide.
            </p>
          </BlurFade>

          {/* CTAs — shadcn Button */}
          <BlurFade delay={0.72} inView={false}>
            <div className="flex flex-wrap gap-4 items-center">
              {/* Primary — gold fill slide-up */}
              <Button size="xl" asChild className="group relative overflow-hidden bg-warm-white text-brand-brown border-warm-white font-display text-[10px] tracking-[3.5px] uppercase font-bold hover:bg-warm-white">
                <a href="#shop">
                  <span className="relative z-10 flex items-center gap-2">
                    Shop Collection
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo" />
                </a>
              </Button>

              {/* Secondary — outline */}
              <Button variant="outline" size="xl" asChild className="border-white/30 text-white font-display text-[10px] tracking-[3.5px] uppercase font-semibold hover:border-white/65 hover:bg-white/5 hover:text-white">
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-3.5 h-3.5" />
                  Custom Order
                </a>
              </Button>
            </div>
          </BlurFade>
        </div>
      </div>

      {/* Vertical scroll cue — right side */}
      <BlurFade delay={2.0} inView={false}>
        <div className="absolute bottom-10 right-8 md:right-14 z-10 flex flex-col items-center gap-2">
          <div className="h-14 w-px bg-white/20" />
          <span className="font-display text-[7.5px] tracking-[3px] uppercase text-white/30 [writing-mode:vertical-rl]">
            Explore
          </span>
        </div>
      </BlurFade>
    </section>
  );
}
