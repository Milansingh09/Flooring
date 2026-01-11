import HeroSection from "../components/HeroSection";
import TechnologySection from "../components/TechnologySection";
import FeaturesSection from "../components/FeaturesSection";
import ProductsSection from "../components/ProductsSection";

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#F1EBE1",   // Brand background
        color: "#1F2D2A",             // Primary text color
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {/* HERO */}
      <section id="hero">
        <HeroSection />
      </section>

      
        <TechnologySection />

            <section id="features">
<FeaturesSection />
      </section>
                  <section id="products">
<ProductsSection />
      </section>
    </main>
  );
}
