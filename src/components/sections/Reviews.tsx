import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { fetchReviews, submitReview, type Review } from "@/lib/supabase";

// ── helper: format stored ISO date into "Month YYYY" ──────────────────────────
function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export default function Reviews() {
  // ── state ──────────────────────────────────────────────────────────────────
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [form, setForm] = useState({ name: "", location: "", text: "" });

  // ── fetch on mount ─────────────────────────────────────────────────────────
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchReviews();
        setReviews(data);
      } catch {
        setError("Could not load reviews. Please try again later.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // ── pagination ─────────────────────────────────────────────────────────────
  const reviewsPerPage = 2;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const visible = reviews.slice(
    currentPage * reviewsPerPage,
    currentPage * reviewsPerPage + reviewsPerPage
  );

  // ── form submit ────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.text.trim()) return;
    setSubmitting(true);
    try {
      await submitReview({
        name: form.name.trim(),
        location: form.location.trim() || undefined,
        rating,
        text: form.text.trim(),
      });
      setSubmitted(true);
      setForm({ name: "", location: "", text: "" });
      setRating(5);
      setTimeout(() => {
        setSubmitted(false);
        setShowForm(false);
      }, 3000);
    } catch {
      alert("Could not submit your review. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // ── render ─────────────────────────────────────────────────────────────────
  return (
    <section id="reviews" className="section-padding bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto">

        {/* Action bar */}
        <BlurFade delay={0.1} inView inViewMargin="-80px">
          <div className="flex justify-end mb-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowForm(!showForm)}
              className="whitespace-nowrap"
            >
              {showForm ? "Close" : "Leave a Review"}
            </Button>
          </div>
        </BlurFade>

        {/* Review form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-16"
            >
              <div className="bg-surface-container p-8 md:p-12 max-w-2xl">
                {submitted ? (
                  <div className="py-10 text-center">
                    <p className="font-display text-[22px] font-bold text-on-surface uppercase tracking-[0.04em] mb-2">
                      Thank You!
                    </p>
                    <p className="font-body text-[16px] text-on-surface-variant italic">
                      Your review is pending approval and will appear shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Stars */}
                    <div>
                      <label className="font-display text-[12px] uppercase tracking-[0.1em] font-semibold text-on-surface-variant block mb-4">
                        Your Rating
                      </label>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <button
                            key={s}
                            type="button"
                            onMouseEnter={() => setHoverRating(s)}
                            onMouseLeave={() => setHoverRating(0)}
                            onClick={() => setRating(s)}
                            className="cursor-pointer p-0.5"
                          >
                            <Star
                              className={`w-5 h-5 transition-colors ${
                                s <= (hoverRating || rating)
                                  ? "fill-secondary text-secondary"
                                  : "fill-transparent text-outline-variant"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="font-display text-[12px] uppercase tracking-[0.1em] font-semibold text-on-surface-variant block mb-2">
                        Name
                      </label>
                      <Input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div>
                      <label className="font-display text-[12px] uppercase tracking-[0.1em] font-semibold text-on-surface-variant block mb-2">
                        City / Location{" "}
                        <span className="text-on-surface-variant/50">(optional)</span>
                      </label>
                      <Input
                        value={form.location}
                        onChange={(e) => setForm({ ...form, location: e.target.value })}
                        placeholder="e.g. Mumbai"
                      />
                    </div>

                    <div>
                      <label className="font-display text-[12px] uppercase tracking-[0.1em] font-semibold text-on-surface-variant block mb-2">
                        Review
                      </label>
                      <Textarea
                        value={form.text}
                        onChange={(e) => setForm({ ...form, text: e.target.value })}
                        placeholder="Share your experience with DK Jhula..."
                        rows={4}
                        required
                      />
                    </div>

                    <Button type="submit" size="xl" disabled={submitting}>
                      {submitting ? (
                        <span className="flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting…
                        </span>
                      ) : (
                        "Submit Review"
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center items-center py-24">
            <Loader2 className="w-8 h-8 animate-spin text-on-surface-variant" />
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <p className="text-center font-body text-[16px] text-on-surface-variant italic py-16">
            {error}
          </p>
        )}

        {/* Empty state */}
        {!loading && !error && reviews.length === 0 && (
          <p className="text-center font-body text-[18px] text-on-surface-variant italic py-16">
            No reviews yet — be the first to share your experience!
          </p>
        )}

        {/* Review list */}
        {!loading && !error && reviews.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
              <AnimatePresence mode="wait">
                {visible.map((review, i) => (
                  <motion.div
                    key={`${review.id}-${currentPage}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="bg-surface p-8 md:p-10 h-full flex flex-col">
                      {/* Stars */}
                      <div className="flex gap-0.5 mb-5">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star
                            key={s}
                            className={`w-4 h-4 ${
                              s < review.rating
                                ? "fill-secondary text-secondary"
                                : "fill-transparent text-outline-variant"
                            }`}
                          />
                        ))}
                      </div>

                      <p className="font-body text-[18px] text-on-surface italic leading-[1.7] mb-8 flex-1">
                        "{review.text}"
                      </p>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-display text-[13px] font-bold tracking-[0.04em] text-on-surface">
                            {review.name}
                          </div>
                          {review.location && (
                            <div className="font-display text-[11px] tracking-[0.06em] text-on-surface-variant mt-0.5">
                              {review.location}
                            </div>
                          )}
                        </div>
                        <div className="font-display text-[11px] tracking-[0.06em] uppercase text-outline">
                          {formatDate(review.created_at)}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-6">
                <button
                  onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                  disabled={currentPage === 0}
                  className="p-2 text-on-surface-variant hover:text-on-surface disabled:opacity-25 transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="font-display text-[11px] tracking-[0.08em] uppercase text-on-surface-variant">
                  {currentPage + 1} / {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                  disabled={currentPage === totalPages - 1}
                  className="p-2 text-on-surface-variant hover:text-on-surface disabled:opacity-25 transition-all cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
