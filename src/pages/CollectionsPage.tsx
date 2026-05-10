import PageHeader from "@/components/layout/PageHeader";
import Shop from "@/components/sections/Shop";

export default function CollectionsPage() {
  return (
    <>
      <PageHeader
        title="The Collection"
        subtitle="Discover our masterfully crafted Jhulas, blending centuries-old Indian artisan techniques with modern architectural poise."
        breadcrumb="Collections"
      />
      <Shop />
    </>
  );
}
