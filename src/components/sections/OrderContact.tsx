import { MessageCircle, Phone, MapPin, Mail } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/products";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const contactChannels = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    desc: "For inquiries, custom orders, and quick assistance.",
    action: "Message Us",
    href: getWhatsAppUrl(),
    primary: true,
  },
  {
    icon: Phone,
    title: "Phone",
    desc: "Speak directly with our artisan team.",
    action: "+91 97257 28655",
    href: "tel:+919725728655",
  },
  {
    icon: Mail,
    title: "Email",
    desc: "For bulk orders, partnerships, and bespoke commissions.",
    action: "dk@dkjhula.com",
    href: "mailto:dk@dkjhula.com",
  },
  {
    icon: MapPin,
    title: "Studio",
    desc: "Visit our workshop by appointment.",
    action: "Anand, Gujarat, India",
    href: "#",
  },
];

export default function OrderContact() {
  return (
    <section id="order" className="section-padding bg-surface grain-overlay">
      <div className="max-w-[1440px] mx-auto">

        {/* Contact grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {contactChannels.map((channel, i) => (
            <BlurFade key={channel.title} delay={0.15 + i * 0.08} inView inViewMargin="-60px">
              <a
                href={channel.href}
                target={channel.href.startsWith("http") || channel.href.startsWith("https") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={cn(
                  "group block p-8 lg:p-10 h-full transition-colors duration-300",
                  channel.primary
                    ? "bg-primary text-on-primary hover:bg-primary-container"
                    : "bg-surface-container-low hover:bg-surface-container"
                )}
                style={{
                  boxShadow: i < contactChannels.length - 1
                    ? "1px 0 0 0 rgba(207,197,187,0.2)"
                    : "none",
                }}
              >
                <channel.icon
                  className={cn(
                    "w-5 h-5 mb-6",
                    channel.primary
                      ? "text-secondary-container"
                      : "text-outline group-hover:text-secondary"
                  )}
                  strokeWidth={1.4}
                />
                <div
                  className={cn(
                    "font-display text-[12px] uppercase tracking-[0.1em] font-bold mb-3",
                    channel.primary ? "text-on-primary" : "text-on-surface"
                  )}
                >
                  {channel.title}
                </div>
                <p
                  className={cn(
                    "font-body text-[16px] leading-[1.6] mb-6",
                    channel.primary ? "text-on-primary/70" : "text-on-surface-variant"
                  )}
                >
                  {channel.desc}
                </p>
                <span
                  className={cn(
                    "font-display text-[11px] tracking-[0.06em] uppercase font-semibold",
                    channel.primary
                      ? "text-secondary-container"
                      : "text-on-surface-variant group-hover:text-secondary transition-colors"
                  )}
                >
                  {channel.action} →
                </span>
              </a>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
