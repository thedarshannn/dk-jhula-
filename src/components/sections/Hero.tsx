import { Link } from "react-router-dom";
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b14]/70 via-transparent to-transparent" />
      </div>

      {/* Content — editorial bottom-left */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16 w-full pb-24 md:pb-32 pt-40">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <BlurFade delay={0.1} inView={false}>
            <div className="flex items-center gap-5 mb-10">
              <div className="h-px w-16 bg-secondary-container/60" />
              <AnimatedShinyText
                shimmerWidth={140}
                className="font-display text-[12px] tracking-[0.1em] uppercase font-semibold !text-secondary-container/80 !max-w-none"
              >
                Handcrafted Indian Heritage
              </AnimatedShinyText>
            </div>
          </BlurFade>

          {/* Headline — massive editorial scale */}
          <BlurFade delay={0.2} direction="up" offset={40} inView={false}>
            <h1 className="font-display text-[clamp(56px,9vw,112px)] text-white font-extrabold leading-[0.95] tracking-[0.03em] uppercase">
              Beautiful
            </h1>
          </BlurFade>
          <BlurFade delay={0.32} direction="up" offset={40} inView={false}>
            <h1 className="font-body text-[clamp(56px,9vw,112px)] text-secondary-container italic font-bold leading-[0.95] tracking-[-0.02em]">
              Jhulas
            </h1>
          </BlurFade>
          <BlurFade delay={0.44} direction="up" offset={40} inView={false}>
            <h1 className="font-display text-[clamp(56px,9vw,112px)] text-white/25 font-light leading-[0.95] tracking-[0.03em] uppercase mb-10">
              &amp; Décor
            </h1>
          </BlurFade>

          {/* CTAs — architectural, sharp */}
          <BlurFade delay={0.6} inView={false}>
            <div className="flex flex-wrap gap-5 items-center">
              <Button size="xl" asChild className="group relative overflow-hidden bg-white text-primary border-0 font-display hover:bg-white">
                <Link to="/collections">
                  <span className="relative z-10 flex items-center gap-3">
                    Shop Collection
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-secondary-container translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo" />
                </Link>
              </Button>

              <Button variant="outline" size="xl" asChild className="border-0 border-b border-white/30 text-white hover:border-white/60 hover:bg-transparent hover:text-white">
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  Custom Order
                </a>
              </Button>
            </div>
          </BlurFade>
        </div>
      </div>

      {/* Vertical scroll cue */}
      <BlurFade delay={2.0} inView={false}>
        <div className="absolute bottom-12 right-12 md:right-16 z-10 flex flex-col items-center gap-3">
          <div className="h-16 w-px bg-white/15" />
          <span className="font-display text-[9px] tracking-[0.15em] uppercase text-white/25 [writing-mode:vertical-rl]">
            Scroll
          </span>
        </div>
      </BlurFade>
    </section>
  );
}
