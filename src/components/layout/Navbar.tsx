import { useState, useEffect } from "react";
import { Menu, MessageCircle } from "lucide-react";
import { ASSETS } from "@/lib/cloudinary";
import { getWhatsAppUrl } from "@/lib/products";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Shop", href: "#shop" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Order", href: "#order" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <ScrollProgress />
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-warm-white/96 backdrop-blur-md border-b border-beige shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-[68px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div
              className={cn(
                "w-8 h-8 rounded-full overflow-hidden border transition-all duration-300 shrink-0",
                scrolled ? "border-beige" : "border-white/25"
              )}
            >
              <img src={ASSETS.logo} alt="DK Jhula" className="w-full h-full object-cover" />
            </div>
            <div>
              <div
                className={cn(
                  "font-body text-[20px] italic leading-none transition-colors duration-300",
                  scrolled ? "text-brand-brown" : "text-white"
                )}
              >
                DK Jhula
              </div>
              <div
                className={cn(
                  "font-display text-[8px] tracking-[3px] uppercase transition-colors duration-300 mt-0.5",
                  scrolled ? "text-brand-brown-mid/70" : "text-white/65"
                )}
              >
                Handcrafted with Love
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative font-display text-[11px] tracking-[2px] uppercase font-semibold transition-colors duration-200",
                    "after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold",
                    "after:transition-[width] after:duration-300 hover:after:w-full",
                    scrolled
                      ? "text-brand-brown-mid hover:text-brand-brown"
                      : "text-white/85 hover:text-white"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="whatsapp" size="sm" asChild className="hidden sm:inline-flex font-display text-[12px] tracking-wide">
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </Button>

            {/* Mobile menu — shadcn Sheet */}
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className={cn(
                    "md:hidden p-2 transition-colors cursor-pointer",
                    scrolled ? "text-brand-brown" : "text-white"
                  )}
                  aria-label="Toggle menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 pt-12">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="font-display text-[11px] tracking-[2px] uppercase font-semibold text-brand-brown py-4 px-3 hover:text-brand-brown hover:bg-beige-light transition-all"
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="mt-5 pt-5 border-t border-beige">
                    <Button variant="whatsapp" className="w-full justify-center font-display text-[12px] tracking-wide" asChild>
                      <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp Order
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
}
