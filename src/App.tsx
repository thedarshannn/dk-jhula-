import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Features from "@/components/sections/Features";
import Shop from "@/components/sections/Shop";
import About from "@/components/sections/About";
import Reviews from "@/components/sections/Reviews";
import OrderContact from "@/components/sections/OrderContact";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <Shop />
        <About />
        <Reviews />
        <OrderContact />
      </main>
      <Footer />
    </div>
  );
}
