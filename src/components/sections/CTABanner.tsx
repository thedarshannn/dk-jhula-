import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/products";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";

export default function CTABanner() {
  return (
    <section className="bg-primary-container grain-overlay">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16 py-20 md:py-28">
        <BlurFade delay={0.1} inView inViewMargin="-80px">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-center">
            {/* Left */}
            <div>
              <div className="font-display text-[12px] uppercase tracking-[0.1em] font-semibold text-secondary-fixed-dim mb-6">
                Bespoke Service
              </div>
              <h2 className="font-display text-[36px] md:text-[48px] font-extrabold text-primary-fixed tracking-[0.04em] leading-[1.1] uppercase mb-4">
                Commission<br />a Piece
              </h2>
              <p className="font-body text-[18px] md:text-[20px] text-primary-fixed-dim leading-[1.6] max-w-lg">
                Every DK Jhula can be customized — dimensions, finishes, and
                colours tailored to your vision. Begin the conversation.
              </p>
            </div>

            {/* Right — CTAs */}
            <div className="flex flex-col gap-4">
              <Button size="xl" asChild className="group relative overflow-hidden bg-secondary-container text-on-secondary-container hover:bg-secondary-container justify-center">
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center gap-3">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </span>
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild className="border-0 border-b border-primary-fixed-dim/30 text-primary-fixed hover:text-secondary-fixed-dim hover:border-secondary-fixed-dim/50 hover:bg-transparent justify-center">
                <Link to="/contact">
                  <span className="flex items-center gap-3">
                    View All Channels
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
