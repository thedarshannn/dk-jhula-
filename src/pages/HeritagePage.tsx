import PageHeader from "@/components/layout/PageHeader";
import About from "@/components/sections/About";

export default function HeritagePage() {
  return (
    <>
      <PageHeader
        title="Our Heritage"
        subtitle="Founded on the principles of unyielding craftsmanship, our journey begins with artisan Daxaben K. Prajapati."
        breadcrumb="Heritage"
      />
      <About />
    </>
  );
}
