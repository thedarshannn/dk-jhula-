import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseKey, {
  db: { schema: "dk_jhula" },
});

// ────────────────────────────────────────────────
// Types
// ────────────────────────────────────────────────
export interface Review {
  id: string;
  name: string;
  location: string | null;
  rating: number;
  text: string;
  approved: boolean;
  created_at: string;
}

export interface NewReview {
  name: string;
  location?: string;
  rating: number;
  text: string;
}

// ────────────────────────────────────────────────
// API helpers
// ────────────────────────────────────────────────

/** Fetch all approved reviews, newest first */
export async function fetchReviews(): Promise<Review[]> {
  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data as Review[];
}

/** Submit a new review (goes in as unapproved until manually approved) */
export async function submitReview(review: NewReview): Promise<void> {
  const { error } = await supabase.from("reviews").insert([review]);
  if (error) throw error;
}
