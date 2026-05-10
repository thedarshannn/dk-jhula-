import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import CraftTeaser from "@/components/sections/CraftTeaser";
import TestimonialHighlight from "@/components/sections/TestimonialHighlight";
import CTABanner from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedProducts />
      <CraftTeaser />
      <TestimonialHighlight />
      <CTABanner />
    </>
  );
}
