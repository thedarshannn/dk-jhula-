import { Ribbon, Droplets, ShieldCheck, Users, Palette } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const features = [
  {
    icon: Ribbon,
    title: "Resham Doori",
    desc: "Intricately woven premium silk ropes ensuring unmatched durability and a lustrous finish.",
  },
  {
    icon: Droplets,
    title: "Washable",
    desc: "Designed for modern living, our materials are fully washable, maintaining their pristine luxury.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty",
    desc: "Backed by a comprehensive warranty on our structural ropes, securing your heirloom piece.",
  },
  {
    icon: Users,
    title: "All Ages",
    desc: "Engineered for comfort and safety, perfectly suited for every member of the family.",
  },
  {
    icon: Palette,
    title: "Customize",
    desc: "Bespoke dimensions, finishes, and colors tailored exactly to your interior vision.",
  },
];

export default function TrustBar() {
  return (
    <section id="features" className="bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((f, i) => (
            <BlurFade key={f.title} delay={i * 0.08} inView inViewMargin="-40px">
              <div
                className="group px-8 py-12 lg:px-7 lg:py-16 h-full transition-colors duration-300 hover:bg-surface-container"
                style={{
                  /* Tonal dividers — using box-shadow instead of border per design system */
                  boxShadow: i < features.length - 1
                    ? "1px 0 0 0 rgba(207,197,187,0.3)"
                    : "none",
                }}
              >
                <f.icon
                  className="w-5 h-5 text-outline mb-5 transition-colors duration-300 group-hover:text-secondary"
                  strokeWidth={1.4}
                />
                <div className="font-display text-[12px] uppercase tracking-[0.1em] font-bold text-on-surface mb-3">
                  {f.title}
                </div>
                <div className="font-body text-[16px] text-on-surface-variant leading-[1.6]">
                  {f.desc}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
