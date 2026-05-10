import PageHeader from "@/components/layout/PageHeader";
import Reviews from "@/components/sections/Reviews";

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        title="Reviews"
        subtitle="Hear from families who have welcomed a DK Jhula piece into their homes."
        breadcrumb="Reviews"
      />
      <Reviews />
    </>
  );
}
