import { MessageCircle, Instagram, MapPin, Package } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_NUMBER } from "@/lib/products";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactItems = [
  {
    icon: Instagram,
    title: "Instagram",
    sub: "@dkjhula_",
    href: "https://instagram.com/dkjhula_",
    hover: "hover:border-pink-300/50 hover:bg-pink-50/50",
  },
  {
    icon: MapPin,
    title: "Location",
    sub: "Anand, Gujarat, India",
    href: undefined,
    hover: "",
  },
  {
    icon: Package,
    title: "Delivery",
    sub: "India & Worldwide",
    href: undefined,
    hover: "",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    sub: "Quick response",
    href: getWhatsAppUrl(),
    hover: "hover:border-emerald-300/50 hover:bg-emerald-50/50",
  },
] as const;

export default function OrderContact() {
  return (
    <section id="order" className="bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left — CTA block */}
          <BlurFade delay={0.1} inView inViewMargin="-80px">
            <div>
              <div className="section-label">Place an Order</div>
              <h2 className="font-display text-4xl md:text-5xl text-brand-brown font-extrabold tracking-tight mb-5 leading-tight">
                Ready to<br />Order?
              </h2>
              <p className="font-body text-[16px] text-brand-brown-mid/85 leading-relaxed mb-9 max-w-sm">
                WhatsApp or Instagram to order, customize, or ask questions.
                Custom colour, size &amp; design available. Delivering across
                India and internationally.
              </p>

              {/* Primary WhatsApp CTA — shadcn Button */}
              <Button variant="whatsapp" size="xl" asChild className="group relative overflow-hidden font-display text-[10px] tracking-[3px] uppercase font-bold mb-4">
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 relative z-10 shrink-0" />
                  <span className="relative z-10">Chat on WhatsApp</span>
                  <div className="absolute inset-0 bg-[#1da851] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo" />
                </a>
              </Button>

              <div className="font-body text-[13px] italic text-brand-brown-mid/50">
                +91&nbsp;{WHATSAPP_NUMBER.slice(2, 7)}&nbsp;{WHATSAPP_NUMBER.slice(7)}
              </div>
            </div>
          </BlurFade>

          {/* Right — 2×2 contact grid — shadcn Card */}
          <div className="grid grid-cols-2 gap-3">
            {contactItems.map((item, i) => {
              const Tag = item.href ? "a" : "div";
              const props = item.href
                ? { href: item.href, target: "_blank" as const, rel: "noopener noreferrer" }
                : {};

              return (
                <BlurFade key={item.title} delay={0.18 + i * 0.07} inView inViewMargin="-80px">
                  <Tag {...props}>
                    <Card
                      className={[
                        "border-beige bg-warm-white shadow-none transition-all duration-300 h-full",
                        item.href ? "cursor-pointer" : "",
                        item.hover,
                      ].join(" ")}
                    >
                      <CardContent className="p-6">
                        <item.icon className="w-5 h-5 text-brand-brown-mid/70 mb-3.5" strokeWidth={1.6} />
                        <div className="font-display text-[10.5px] uppercase tracking-[2px] font-bold text-brand-brown mb-1">
                          {item.title}
                        </div>
                        <div className="font-body text-[14px] italic text-brand-brown-mid/75">
                          {item.sub}
                        </div>
                      </CardContent>
                    </Card>
                  </Tag>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
