import { ASSETS } from "@/lib/cloudinary";
import { Separator } from "@/components/ui/separator";
import { BlurFade } from "@/components/ui/blur-fade";

const footerLinks = [
  { label: "Shop",    href: "#shop" },
  { label: "About",   href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#order" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-brown">
      <div className="max-w-7xl mx-auto px-6 py-10 md:px-10 lg:px-16">
        <BlurFade delay={0.1} inView inViewMargin="-40px">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-7">
            {/* Brand */}
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-gold/22 shrink-0">
                <img src={ASSETS.logo} alt="DK Jhula" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-body text-[19px] italic text-warm-white leading-none">
                  DK <span className="text-gold">Jhula</span>
                </div>
                <div className="font-display text-[9px] tracking-[3px] uppercase text-warm-white/60 mt-1">
                  Handcrafted · Est. 2009 · Anand, Gujarat
                </div>
              </div>
            </div>

            {/* Links */}
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-display text-[11px] uppercase tracking-[2px] text-warm-white/70 hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </BlurFade>

        <Separator className="bg-white/[0.07]" />

        <BlurFade delay={0.2} inView inViewMargin="-40px">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-5">
            <div className="font-display text-[11px] uppercase tracking-[1px] text-warm-white/55">
              © {new Date().getFullYear()} DK Jhula. All rights reserved.
            </div>
            <div className="font-body text-[13px] italic text-warm-white/55">
              Made with love in Anand
            </div>
          </div>
        </BlurFade>
      </div>
    </footer>
  );
}
