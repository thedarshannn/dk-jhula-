import { MessageCircle } from "lucide-react";
import { ASSETS } from "@/lib/cloudinary";
import { getWhatsAppUrl } from "@/lib/products";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BorderBeam } from "@/components/ui/border-beam";
import { BlurFade } from "@/components/ui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stats = [
  { value: 15, suffix: "+", label: "Years of Craft" },
  { value: 5, suffix: "+", label: "Countries Shipped" },
  { value: 200, suffix: " kg", label: "Load Capacity" },
];

const highlights = [
  "Resham Doori",
  "Fully Washable",
  "Rope Warranty",
  "Custom Orders",
  "Pan-India Delivery",
  "All Ages & Sizes",
];

export default function About() {
  return (
    <section id="about" className="bg-brand-brown relative overflow-hidden">
      {/* Radial warm glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 85% 50%, rgba(201,162,39,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 50% at 10% 20%, rgba(253,252,249,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* ── Image column ─────────────────────────────── */}
          <BlurFade delay={0.1} direction="right" inView inViewMargin="-80px">
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative inline-block">
                <div className="absolute -top-4 -left-4 w-full h-full border border-gold/18 pointer-events-none" />
                <div className="relative w-72 md:w-80 h-[420px] md:h-[500px]">
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src={ASSETS.logo}
                      alt="DK Jhula craftsmanship"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <BorderBeam
                    size={90}
                    duration={9}
                    colorFrom="#C9A227"
                    colorTo="#E8CC7A"
                    borderWidth={1.5}
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-gold px-5 py-3.5 shadow-xl">
                  <div className="font-display font-extrabold text-[13px] text-brand-brown tracking-[0.5px]">
                    DK Jhula
                  </div>
                  <div className="font-body text-[10px] italic text-brand-brown/70 mt-0.5">
                    Est. 2009
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* ── Text column ───────────────────────────────── */}
          <div>
            <BlurFade delay={0.15} inView inViewMargin="-80px">
              <div className="font-display text-[10px] uppercase tracking-[5px] text-gold mb-4">
                Our Story
              </div>
            </BlurFade>

            <BlurFade delay={0.25} inView inViewMargin="-80px">
              <h2 className="font-display text-4xl md:text-5xl text-warm-white font-extrabold tracking-tight mb-3 leading-[1.08]">
                Built on Craft
              </h2>
            </BlurFade>

            <BlurFade delay={0.35} inView inViewMargin="-80px">
              <div className="font-body text-[14px] italic text-gold-light/80 mb-10 tracking-wide">
                Owner &amp; Artisan — Daxaben K. Prajapati
              </div>
            </BlurFade>

            <BlurFade delay={0.4} inView inViewMargin="-80px">
              <p className="font-body text-[17px] md:text-[18px] text-warm-white/90 leading-[1.85] mb-6">
                Daxaben started making jhulas in a small room in Anand, Gujarat —
                not as a business, but as a craft. Fifteen years on, every knot is
                still tied by hand. No factories. No machines. Just her, the rope,
                and the same quiet dedication she has always had.
              </p>
            </BlurFade>

            <BlurFade delay={0.5} inView inViewMargin="-80px">
              <p className="font-body text-[17px] md:text-[18px] text-warm-white/90 leading-[1.85] mb-10">
                Each jhula is woven from premium resham doori — soft to the touch,
                strong enough for your whole family. Fully washable, holds up to
                200&nbsp;kg, and made to your exact colour, size, and design.
                Backed by a rope warranty, because she stands behind her work.
              </p>
            </BlurFade>

            {/* Pull quote — shadcn Card */}
            <BlurFade delay={0.6} inView inViewMargin="-80px">
              <Card className="mb-10 bg-white/[0.04] backdrop-blur-sm border-white/[0.08] rounded-sm">
                <CardContent className="px-7 py-6">
                  <div className="flex gap-5">
                    <div className="w-[2px] bg-gradient-to-b from-gold via-gold-light to-gold/30 flex-shrink-0 rounded-full" />
                    <div>
                      <p className="font-body text-[21px] md:text-[22px] italic text-gold-light leading-snug">
                        "I make each jhula as if it were
                        <br />going into my own home."
                      </p>
                      <p className="font-display text-[10px] uppercase tracking-[3px] text-warm-white/50 mt-3">
                        — Daxaben K. Prajapati, Founder
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>

            {/* Stats row */}
            <BlurFade delay={0.7} inView inViewMargin="-80px">
              <div className="flex items-center gap-0 mb-10">
                {stats.map((stat, i) => (
                  <div key={stat.label} className="flex items-center">
                    <div className={i > 0 ? "px-6" : "pr-6"}>
                      <div className="flex items-baseline gap-0.5 leading-none">
                        <NumberTicker
                          value={stat.value}
                          delay={0.5 + i * 0.18}
                          className="font-display text-[28px] md:text-[30px] font-extrabold text-warm-white"
                        />
                        <span className="font-display text-[18px] md:text-[20px] font-extrabold text-gold">
                          {stat.suffix}
                        </span>
                      </div>
                      <div className="font-display text-[10px] uppercase tracking-[2.5px] text-warm-white/50 mt-2">
                        {stat.label}
                      </div>
                    </div>
                    {i < stats.length - 1 && (
                      <div className="h-10 w-px bg-white/10" />
                    )}
                  </div>
                ))}
              </div>
            </BlurFade>

            {/* Highlight tags — shadcn Badge */}
            <BlurFade delay={0.8} inView inViewMargin="-80px">
              <div className="flex flex-wrap gap-2.5 mb-10">
                {highlights.map((h) => (
                  <Badge
                    key={h}
                    variant="outline"
                    className="px-4 py-2 bg-white/[0.04] border-white/[0.10] text-warm-white/70 font-display text-[10px] uppercase tracking-[2px] rounded-sm hover:border-gold/40 hover:text-gold/90 hover:bg-gold/[0.06] cursor-default transition-all duration-300"
                  >
                    {h}
                  </Badge>
                ))}
              </div>
            </BlurFade>

            {/* CTA — shadcn Button */}
            <BlurFade delay={0.9} inView inViewMargin="-80px">
              <Button variant="gold" size="xl" asChild className="font-display text-[11px] tracking-[3px] uppercase font-bold hover:shadow-[0_0_24px_rgba(201,162,39,0.25)]">
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  Chat for Custom Order
                </a>
              </Button>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
