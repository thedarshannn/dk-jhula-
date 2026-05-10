import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  { label: "Collections", to: "/collections" },
  { label: "Heritage",    to: "/heritage" },
  { label: "Reviews",     to: "/reviews" },
  { label: "Contact",     to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
            ? "bg-surface/96 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16 flex items-center justify-between h-[72px]">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3.5">
            <div className="w-8 h-8 overflow-hidden shrink-0">
              <img src={ASSETS.logo} alt="DK Jhula" className="w-full h-full object-cover" />
            </div>
            <span
              className={cn(
                "font-display text-[14px] font-extrabold uppercase tracking-[0.15em] transition-colors duration-300",
                scrolled ? "text-on-surface" : "text-white"
              )}
            >
              DK Jhula
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={cn(
                      "font-display text-[12px] tracking-[0.1em] uppercase font-semibold transition-colors duration-200",
                      scrolled
                        ? isActive
                          ? "text-on-surface"
                          : "text-on-surface-variant hover:text-on-surface"
                        : isActive
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="whatsapp" size="sm" asChild className="hidden sm:inline-flex">
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </Button>

            {/* Mobile Sheet */}
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className={cn(
                    "md:hidden p-2 transition-colors cursor-pointer",
                    scrolled ? "text-on-surface" : "text-white"
                  )}
                  aria-label="Toggle menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 pt-16">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <div className="flex flex-col gap-0">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={cn(
                        "font-display text-[12px] tracking-[0.1em] uppercase font-semibold py-5 border-b border-outline-variant/20 transition-all",
                        location.pathname === link.to
                          ? "text-secondary"
                          : "text-on-surface hover:text-secondary"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="mt-8">
                    <Button variant="whatsapp" className="w-full justify-center" asChild>
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
