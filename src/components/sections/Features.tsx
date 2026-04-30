import { Ribbon, Droplets, ShieldCheck, Users, Palette } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    num: "01",
    icon: Ribbon,
    title: "Premium Resham Doori",
    desc: "High-quality silk-finish rope for strength, shine, and lasting durability.",
  },
  {
    num: "02",
    icon: Droplets,
    title: "Fully Washable",
    desc: "Easy to clean — wash and it's as good as new. Hygienic for the whole family.",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Rope Warranty",
    desc: "If the doori breaks naturally, we repair it.",
  },
  {
    num: "04",
    icon: Users,
    title: "All Ages & Sizes",
    desc: "Holds 100-150 kg. Comfortable and safe for every member of the family.",
  },
  {
    num: "05",
    icon: Palette,
    title: "Customize Freely",
    desc: "Choose colour, design, and size. Every jhula made just for you.",
  },
];

export default function Features() {
  return (
    <div className="bg-warm-white border-b border-beige">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((f, i) => (
            <BlurFade key={f.title} delay={i * 0.08} inView inViewMargin="-40px">
              <Card
                className={[
                  "group border-0 shadow-none bg-transparent rounded-none px-7 py-9 lg:px-6 h-full",
                  /* vertical dividers on lg */
                  "lg:border-r border-beige last:border-r-0",
                  /* horizontal dividers on mobile/sm */
                  "border-b lg:border-b-0 last:border-b-0",
                ].join(" ")}
              >
                <CardContent className="p-0">
                  {/* Italic number */}
                  <div className="font-body text-[13px] italic text-gold/50 mb-4 leading-none">
                    {f.num}
                  </div>
                  <f.icon
                    className="w-5 h-5 text-brand-brown-mid mb-3 transition-colors duration-300 group-hover:text-gold"
                    strokeWidth={1.6}
                  />
                  <div className="font-display text-[10.5px] uppercase tracking-[1.5px] font-bold text-brand-brown mb-2 leading-snug">
                    {f.title}
                  </div>
                  <div className="font-body text-[13.5px] text-brand-brown-mid leading-relaxed">
                    {f.desc}
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  );
}
