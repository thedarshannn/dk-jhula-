import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface Feedback {
  name: string;
  email: string;
  product: string;
  rating: number;
  text: string;
  date: string;
}

const STARS = [1, 2, 3, 4, 5];

export default function Reviews() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", product: "", text: "" });

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = () => {
    if (!form.name.trim()) return alert("Please enter your name.");
    if (!form.email.trim() || !form.email.includes("@")) return alert("Please enter a valid email.");
    if (!form.text.trim()) return alert("Please write your feedback.");

    const masked = form.email.replace(
      /(.{2})(.*)(@.*)/,
      (_: string, a: string, b: string, c: string) => a + b.replace(/./g, "*") + c
    );

    setFeedbacks((prev) => [
      {
        name: form.name,
        email: masked,
        product: form.product,
        rating,
        text: form.text,
        date: new Date().toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      },
      ...prev,
    ]);

    setForm({ name: "", email: "", product: "", text: "" });
    setRating(5);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <section id="reviews" className="section-padding bg-warm-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <BlurFade delay={0.1} inView inViewMargin="-80px">
          <div className="mb-14">
            <div className="section-label">Testimonials</div>
            <h2 className="font-display text-4xl md:text-5xl text-brand-brown font-extrabold tracking-tight">
              Reviews &amp; Feedback
            </h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16">

          {/* ── Form ──────────────────────────────────────────── */}
          <BlurFade delay={0.2} inView inViewMargin="-80px">
            <div>
              <h3 className="font-body text-2xl italic text-brand-brown mb-1.5">Leave a Review</h3>
              <p className="font-body text-[14px] text-brand-brown-mid/65 mb-9">
                Your name and email are required. Email will be partially masked for privacy.
              </p>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label className="font-display text-[9px] tracking-[2.5px] uppercase text-brand-brown-mid font-semibold">
                    Your Name *
                  </Label>
                  <Input
                    type="text"
                    value={form.name}
                    onChange={set("name")}
                    placeholder="e.g. Priya Sharma"
                    className="border-beige bg-transparent rounded-none border-t-0 border-x-0 px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-brand-brown"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-display text-[9px] tracking-[2.5px] uppercase text-brand-brown-mid font-semibold">
                    Email Address *
                  </Label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    placeholder="your@email.com"
                    className="border-beige bg-transparent rounded-none border-t-0 border-x-0 px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-brand-brown"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-display text-[9px] tracking-[2.5px] uppercase text-brand-brown-mid font-semibold">
                    Product Purchased
                  </Label>
                  <Input
                    type="text"
                    value={form.product}
                    onChange={set("product")}
                    placeholder="e.g. Pink Canopy Jhula"
                    className="border-beige bg-transparent rounded-none border-t-0 border-x-0 px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-brand-brown"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-display text-[9px] tracking-[2.5px] uppercase text-brand-brown-mid font-semibold">
                    Your Rating
                  </Label>
                  <div className="flex gap-2 pt-1">
                    {STARS.map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setRating(n)}
                        onMouseEnter={() => setHover(n)}
                        onMouseLeave={() => setHover(0)}
                        className={cn(
                          "text-[28px] leading-none cursor-pointer select-none transition-colors duration-100",
                          n <= (hover || rating) ? "text-gold" : "text-beige-mid"
                        )}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="font-display text-[9px] tracking-[2.5px] uppercase text-brand-brown-mid font-semibold">
                    Your Feedback *
                  </Label>
                  <Textarea
                    value={form.text}
                    onChange={set("text")}
                    placeholder="Tell us about quality, delivery, customization..."
                    rows={4}
                    className="border-beige bg-transparent rounded-none border-t-0 border-x-0 px-0 resize-none min-h-[100px] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-brand-brown"
                  />
                </div>

                <Button onClick={submit} className="w-full font-display text-[11px] tracking-[3px] uppercase font-bold">
                  <Send className="w-3.5 h-3.5" />
                  Submit Feedback
                </Button>

                <AnimatePresence>
                  {success && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                    >
                      <Card className="border-beige bg-beige-light">
                        <CardContent className="flex items-center gap-3 p-4">
                          <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                          <span className="font-body text-[15px] text-brand-brown">
                            Thank you! Your feedback means the world to us.
                          </span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </BlurFade>

          {/* ── Reviews list ──────────────────────────────────── */}
          <BlurFade delay={0.3} inView inViewMargin="-80px">
            <div>
              <h3 className="font-body text-2xl italic text-brand-brown mb-1.5">Customer Reviews</h3>
              <p className="font-body text-[14px] text-brand-brown-mid/65 mb-9">
                {feedbacks.length > 0
                  ? `${feedbacks.length} review${feedbacks.length > 1 ? "s" : ""} from our customers`
                  : "Be the first to leave a review!"}
              </p>

              <div className="space-y-6 max-h-[540px] overflow-y-auto pr-1">
                {feedbacks.length === 0 ? (
                  <div className="text-center py-16 text-brand-brown-mid/40 font-body italic text-[17px]">
                    No reviews yet. Share yours above!
                  </div>
                ) : (
                  feedbacks.map((fb, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Card className="border-beige/60 shadow-none">
                        <CardContent className="p-5">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <div className="font-display text-[12.5px] font-bold text-brand-brown">{fb.name}</div>
                              {fb.product && (
                                <div className="font-body text-[12px] italic text-brand-brown-mid/55 mt-0.5">
                                  {fb.product}
                                </div>
                              )}
                            </div>
                            <div className="flex shrink-0 text-[13px] leading-none">
                              <span className="text-gold">{"★".repeat(fb.rating)}</span>
                              <span className="text-beige-mid">{"★".repeat(5 - fb.rating)}</span>
                            </div>
                          </div>
                          <p className="font-body text-[15px] text-brand-brown-mid/80 leading-relaxed italic mb-2.5">
                            "{fb.text}"
                          </p>
                          <div className="font-display text-[10.5px] text-brand-brown-mid/35 tracking-wide">
                            {fb.date} · {fb.email}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
