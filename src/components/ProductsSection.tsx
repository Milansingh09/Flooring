import { useEffect, useRef, useState } from "react";
import product1 from "../assets/floor1.jpg";
import product2 from "../assets/floor2.jpg";
import product3 from "../assets/floor3.jpg";
import product4 from "../assets/floor4.jpg";

const products = [
  {
    name: "Durell Prime SPC",
    desc: "Engineered for durability and elegance, ideal for modern homes and commercial spaces.",
    image: product1,
  },
  {
    name: "Durell Elite SPC",
    desc: "High-performance flooring with enhanced water resistance and premium textures.",
    image: product2,
  },
  {
    name: "Durell Signature SPC",
    desc: "Luxury-grade SPC with refined finishes, crafted for long-lasting sophistication.",
    image: product3,
  },
  {
    name: "Durell Pro SPC",
    desc: "Built for heavy-duty usage with unmatched stability and impact resistance.",
    image: product4,
  },
];

const ProductsSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mode, setMode] = useState<"normal" | "sticky" | "end">("normal");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const h = window.innerHeight;

      /* ---------------- Sticky Controller ---------------- */
      if (rect.top <= 0 && rect.bottom > h) {
        setMode("sticky");
      } else if (rect.bottom <= h) {
        setMode("end");
      } else {
        setMode("normal");
      }

      /* ---------------- Progress (0 → 1) ---------------- */
      const rawProgress = Math.min(
        1,
        Math.max(0, (h - rect.top) / (h + rect.height))
      );

      /* ---------------- Hold First & Last ---------------- */
      // We give 15% buffer at start & end
      const startBuffer = 0.15;
      const endBuffer = 0.85;

      let adjusted = rawProgress;
      if (rawProgress < startBuffer) {
        adjusted = 0;
      } else if (rawProgress > endBuffer) {
        adjusted = 1;
      } else {
        adjusted = (rawProgress - startBuffer) / (endBuffer - startBuffer);
      }

      const index = Math.min(
        products.length - 1,
        Math.floor(adjusted * products.length)
      );

      setActiveIndex(index);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        height: "300vh",
        background: "#F1EBE1",
        overflowX: "hidden",
      }}
    >
      {/* STICKY LAYER */}
      <div
        style={{
          position:
            mode === "sticky" ? "fixed" : mode === "end" ? "absolute" : "relative",
          top: mode === "sticky" ? 0 : "auto",
          bottom: mode === "end" ? 0 : "auto",
          left: 0,
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1400px",
            height: "100%",
            padding: "0 6%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* ================= HEADING (TOP LEFT) ================= */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "6%",
            }}
          >
            <h2
              className="heading-font"
              style={{
                fontSize: "4rem",
                marginBottom: "0.5rem",
                color: "#1F2D2A",
              }}
            >
              Our Products
            </h2>

            <p
              className="body-font"
              style={{
                fontSize: "1rem",
                color: "#4A5A56",
                maxWidth: "420px",
              }}
            >
              Premium SPC flooring engineered for beauty, performance, and longevity.
            </p>
          </div>

          {/* ================= LEFT PANEL ================= */}
          <div style={{ width: "42%", marginTop: "6rem" }}>
            <h3
              className="heading-font"
              style={{
                fontSize: "2.2rem",
                marginBottom: "0.8rem",
                color: "#1F2D2A",
              }}
            >
              {products[activeIndex].name}
            </h3>

            <p
              className="body-font"
              style={{
                lineHeight: "1.7",
                marginBottom: "1.8rem",
                maxWidth: "380px",
                color: "#4A5A56",
              }}
            >
              {products[activeIndex].desc}
            </p>

<button
  className="checkout-btn"
  style={{
    position: "relative",
    background: "transparent",
    color: "#1F2D2A",
    padding: "0.7rem 1.8rem",
    borderRadius: "8px",
    border: "1px solid #45A98F",
    cursor: "pointer",
    fontFamily: "var(--font-body)",
    overflow: "hidden",
  }}
>
  <span style={{ position: "relative", zIndex: 2 }}>
    Check Out
  </span>
</button>


            {activeIndex === products.length - 1 && (
              <div style={{ marginTop: "2rem" }}>
                <button
                  style={{
                    background: "transparent",
                    color: "#45A98F",
                    padding: "0.6rem 1.4rem",
                    borderRadius: "8px",
                    border: "1px solid #45A98F",
                    cursor: "pointer",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  See All Products
                </button>
              </div>
            )}
          </div>

          {/* ================= RIGHT PANEL ================= */}
          <div
            style={{
              width: "45%",
              height: "70vh",
              border: "1px solid #D8CFC1",
              borderRadius: "18px",
              overflow: "hidden",
              position: "relative",
              background: "#ffffff",
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
            }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transform: `translateY(${(index - activeIndex) * 100}%)`,
                  transition: "transform 1s cubic-bezier(0.77,0,0.175,1)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
