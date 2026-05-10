import { Link } from "react-router-dom";
import { ASSETS } from "@/lib/cloudinary";
import { BlurFade } from "@/components/ui/blur-fade";

const footerLinks = [
  { label: "Collections", to: "/collections" },
  { label: "Heritage",    to: "/heritage" },
  { label: "Reviews",     to: "/reviews" },
  { label: "Contact",     to: "/contact" },
];

const legalLinks = [
  "Privacy Policy",
  "Shipping Info",
  "Terms of Service",
  "Bulk Orders",
];

export default function Footer() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16 py-16 md:py-24">
        <BlurFade delay={0.1} inView inViewMargin="-40px">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 md:gap-24 mb-16">
            {/* Brand */}
            <div>
              <Link to="/" className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 overflow-hidden shrink-0">
                  <img src={ASSETS.logo} alt="DK Jhula" className="w-full h-full object-cover" />
                </div>
                <span className="font-display text-[14px] font-extrabold uppercase tracking-[0.15em] text-inverse-on-surface">
                  DK Jhula
                </span>
              </Link>
              <p className="font-body text-[16px] italic text-inverse-on-surface/60 leading-relaxed max-w-xs">
                Handcrafted Indian Heritage.
                <br />Anand, Gujarat · Est. 2009
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-4">
              <div className="font-display text-[11px] uppercase tracking-[0.1em] font-semibold text-inverse-on-surface/40 mb-2">
                Navigate
              </div>
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-display text-[12px] uppercase tracking-[0.08em] text-inverse-on-surface/65 hover:text-secondary-container transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>


          </div>
        </BlurFade>

        {/* Bottom bar */}
        <BlurFade delay={0.2} inView inViewMargin="-40px">
          <div className="border-t border-inverse-on-surface/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="font-display text-[11px] uppercase tracking-[0.08em] text-inverse-on-surface/40">
              © {new Date().getFullYear()} DK Jhula. Crafted in India.
            </div>
          </div>
        </BlurFade>
      </div>
    </footer>
  );
}
