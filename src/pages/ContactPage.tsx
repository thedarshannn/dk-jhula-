import PageHeader from "@/components/layout/PageHeader";
import OrderContact from "@/components/sections/OrderContact";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <>
      <PageHeader
        title="Get in Touch"
        subtitle="Commission a bespoke piece, inquire about availability, or schedule a studio visit."
        breadcrumb="Contact"
      />
      <OrderContact />

      {/* Inquiry Form */}
      <section className="section-padding bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left — copy */}
            <BlurFade delay={0.1} inView inViewMargin="-80px">
              <div>
                <div className="section-label">Inquiry</div>
                <h2 className="font-display text-[32px] md:text-[40px] font-extrabold text-on-surface tracking-[0.04em] leading-[1.15] uppercase mb-6">
                  Send Us a<br />Message
                </h2>
                <p className="font-body text-[18px] text-on-surface-variant leading-[1.7] mb-6">
                  Share your vision — custom dimensions, preferred wood types,
                  colour palettes, or any special requirements. Our artisan team
                  will respond within 24 hours.
                </p>
                <p className="font-body text-[16px] italic text-on-surface-variant/60 leading-[1.6]">
                  For urgent orders, please use WhatsApp or call us directly.
                </p>
              </div>
            </BlurFade>

            {/* Right — form */}
            <BlurFade delay={0.2} inView inViewMargin="-80px">
              <div className="bg-surface p-8 md:p-12">
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="font-display text-[24px] font-extrabold text-on-surface uppercase tracking-[0.04em] mb-3">
                      Thank You
                    </div>
                    <p className="font-body text-[18px] text-on-surface-variant italic">
                      We'll be in touch within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <label className="font-display text-[12px] uppercase tracking-[0.1em] font-semibold text-on-surface-variant block mb-2">
                        Full Name
                      </label>
                      <Input placeholder="Your name" required />
                    </div>

                    <div>
                      <label className="font-display text-[12px] uppercase tracking-[0.1em] font-semibold text-on-surface-variant block mb-2">
                        Email
                      </label>
                      <Input type="email" placeholder="email@example.com" required />
                    </div>

                    <div>
                      <label className="font-display text-[12px] uppercase tracking-[0.1em] font-semibold text-on-surface-variant block mb-2">
                        Phone (Optional)
                      </label>
                      <Input type="tel" placeholder="+91 XXXXX XXXXX" />
                    </div>

                    <div>
                      <label className="font-display text-[12px] uppercase tracking-[0.1em] font-semibold text-on-surface-variant block mb-2">
                        Your Message
                      </label>
                      <Textarea
                        placeholder="Describe the piece you're envisioning — size, style, colours, any customizations..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" size="xl" className="w-full justify-center">
                      Send Inquiry
                    </Button>
                  </form>
                )}
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
    </>
  );
}
