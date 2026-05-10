import { useState, useEffect, useRef } from "react";
import { ASSETS } from "@/lib/cloudinary";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion, useMotionValue, useTransform, useInView } from "motion/react";

/* ── NumberTicker ───────────────────────────────────── */
function NumberTicker({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ── Timeline data ────────────────────────────────── */
const timeline = [
  {
    year: "2009",
    title: "The Foundation",
    text: "The first workshop opens in Anand, Gujarat. Daxaben begins training a small cadre of women in the precise, mathematically demanding art of structural weaving.",
  },
  {
    year: "2014",
    title: "The Solid Wood Era",
    text: "Transitioning from basic frames to ethically sourced, seasoned CP Teak. The introduction of traditional mortise and tenon joinery elevates the structural integrity of every piece.",
  },
  {
    year: "2021",
    title: "Modern Vernacular",
    text: "DK Jhula embraces high-contrast minimalism. The designs are stripped of unnecessary ornamentation, allowing the raw materiality of wood, brass, and silk rope to dictate the aesthetic.",
  },
];

/* ── Stats ─────────────────────────────────────────── */
const stats = [
  { label: "Years of Craft", value: 15, suffix: "+" },
  { label: "Pieces Delivered", value: 500, suffix: "+" },
  { label: "Happy Families", value: 350, suffix: "+" },
  { label: "Artisans", value: 12, suffix: "" },
];

export default function About() {
  return (
    <section id="about" className="bg-primary-container text-primary-fixed grain-overlay overflow-hidden">

      {/* ── Hero quote block ──────────────────────────── */}
      <div className="section-padding max-w-[1440px] mx-auto">
        <BlurFade delay={0.1} inView inViewMargin="-80px">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-center mb-0">
            {/* Left: Image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={ASSETS.heroImage}
                alt="DK Jhula craftsmanship"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/40 to-transparent" />
            </div>

            {/* Right: Quote */}
            <div>
              <div className="font-display text-[12px] uppercase tracking-[0.1em] font-semibold text-secondary-fixed-dim mb-8">
                Our Heritage
              </div>
              <p className="font-body text-[26px] md:text-[32px] italic text-primary-fixed leading-[1.5] mb-8">
                "True luxury is measured in generations, not seasons."
              </p>
              <div className="font-display text-[13px] uppercase tracking-[0.06em] font-bold text-primary-fixed-dim">
                Daxaben K. Prajapati
              </div>
              <div className="font-display text-[11px] uppercase tracking-[0.08em] text-on-primary-container mt-1">
                Master Weaver, Anand
              </div>
            </div>
          </div>
        </BlurFade>
      </div>

      {/* ── Craft description ─────────────────────────── */}
      <div className="px-8 md:px-12 lg:px-16 py-16 md:py-24 max-w-[1440px] mx-auto">
        <BlurFade delay={0.1} inView inViewMargin="-80px">
          <div className="max-w-3xl">
            <h2 className="font-display text-[32px] md:text-[48px] font-extrabold text-primary-fixed tracking-[0.04em] leading-[1.2] uppercase mb-6">
              The Resham Doori Craft
            </h2>
            <p className="font-body text-[18px] md:text-[22px] text-primary-fixed-dim leading-[1.6]">
              An uncompromising dedication to a fading art. Each strand is
              hand-tensioned, creating a structural web that offers both
              resilience and an architectural aesthetic.
            </p>
          </div>
        </BlurFade>
      </div>

      {/* ── Timeline ──────────────────────────────────── */}
      <div className="px-8 md:px-12 lg:px-16 pb-24 md:pb-32 max-w-[1440px] mx-auto">
        <BlurFade delay={0.1} inView inViewMargin="-80px">
          <div className="font-display text-[12px] uppercase tracking-[0.1em] font-semibold text-secondary-fixed-dim mb-12">
            Evolution of a Legacy
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {timeline.map((item, i) => (
            <BlurFade key={item.year} delay={0.15 + i * 0.12} inView inViewMargin="-60px">
              <div
                className="py-10 md:px-10 first:md:pl-0"
                style={{
                  boxShadow: i < timeline.length - 1
                    ? "0 1px 0 0 rgba(209,196,178,0.12)"
                    : "none",
                }}
              >
                <div className="font-display text-[48px] md:text-[64px] font-extrabold text-secondary-fixed-dim/20 leading-[1] mb-4">
                  {item.year}
                </div>
                <div className="font-display text-[16px] uppercase tracking-[0.06em] font-bold text-primary-fixed mb-3">
                  {item.title}
                </div>
                <p className="font-body text-[16px] text-primary-fixed-dim leading-[1.6]">
                  {item.text}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>

      {/* ── Editorial statement ───────────────────────── */}
      <div className="px-8 md:px-12 lg:px-16 pb-24 max-w-[1440px] mx-auto border-t border-primary-fixed-dim/10 pt-24">
        <BlurFade delay={0.1} inView inViewMargin="-80px">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <h2 className="font-display text-[28px] md:text-[40px] font-extrabold text-primary-fixed tracking-[0.04em] leading-[1.15] uppercase">
              Silence in Design.<br />Strength in Structure.
            </h2>
            <div>
              <p className="font-body text-[18px] text-primary-fixed-dim leading-[1.7] mb-6">
                We do not design to fill a room; we design to anchor it.
                A piece of furniture should possess enough physical and visual
                gravity to command the negative space around it.
              </p>
              <p className="font-body text-[18px] italic text-on-primary-container leading-[1.7]">
                True tactile luxury cannot be faked. It is felt in the resistance
                of the wood grain, the tension of the rope, and the cold,
                unyielding weight of solid brass.
              </p>
            </div>
          </div>
        </BlurFade>
      </div>

      {/* ── Stats ─────────────────────────────────────── */}
      <div className="bg-primary/20">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <BlurFade key={stat.label} delay={0.1 + i * 0.1} inView inViewMargin="-40px">
                <div className="text-center">
                  <div className="font-display text-[48px] md:text-[56px] font-extrabold text-secondary-fixed-dim leading-none mb-2">
                    <NumberTicker target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="font-display text-[11px] uppercase tracking-[0.1em] font-semibold text-primary-fixed-dim">
                    {stat.label}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
