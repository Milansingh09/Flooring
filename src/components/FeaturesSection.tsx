import { useEffect, useRef, useState } from "react";
import img1 from "../assets/easyinstall.jpg";
import img2 from "../assets/kids.jpg";
import img3 from "../assets/water.jpg";
import img4 from "../assets/pet.jpg";
import img5 from "../assets/texture.jpg";
import img6 from "../assets/cleaning.jpg";

const IMAGES = [
  { title: "Easy Installation", image: img1 },
  { title: "Kid Friendly", image: img2 },
  { title: "Water Proof", image: img3 },
  { title: "Pet Friendly", image: img4 },
  { title: "Original Texture", image: img5 },
  { title: "Easy Cleaning", image: img6 },
];

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [mode, setMode] = useState<"normal" | "sticky" | "end">("normal");
  const [progress, setProgress] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const h = window.innerHeight;

      /* Sticky Controller */
      if (rect.top <= 0 && rect.bottom > h) setMode("sticky");
      else if (rect.bottom <= h) setMode("end");
      else setMode("normal");

      /* Normalized scroll progress */
      const raw = Math.min(
        1,
        Math.max(0, (h - rect.top) / (h + rect.height))
      );
      setProgress(raw);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- ENTRY PHASE ---------------- */

  // Phase 0 → 0.2 : Section visible, images completely hidden
  const hidden = progress < 0.2;

  // Phase 1 → 0.2–0.6 : Images enter one by one
  const revealProgress = hidden
    ? 0
    : Math.min((progress - 0.2) / 0.4, 1);

  const visibleCount = Math.floor(revealProgress * (IMAGES.length + 1));

  // 🔥 Auto fan-out when all images are visible
  const fanOut = visibleCount >= IMAGES.length;

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        height: "360vh",
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
            maxWidth: "1500px",
            height: "100%",
            padding: "0 6%",
          }}
        >
          {/* HEADING */}
          <h2
            className="heading-font"
            style={{
              position: "absolute",
              top: "12%",
              left: "6%",
              fontSize: "4.8rem",
              color: "#1F2D2A",
              margin: 0,
            }}
          >
            Features
          </h2>

          {/* SLOGAN */}
          <p
            className="body-font"
            style={{
              position: "absolute",
              top: "22%",
              left: "6%",
              fontSize: "1rem",
              color: "#4A5A56",
            }}
          >
            Crafted for performance. Designed for luxury.
          </p>

{/* DESCRIPTION */}
<p
  className="body-font"
  style={{
    position: "absolute",
    bottom: "62%",
    left: "24.5%",
    transform: "translateX(-50%)",
    maxWidth: "620px",
    textAlign: "center",
    lineHeight: "1.7",
    color: "#4A5A56",
  }}
>
  Durell flooring offers a range of unique benefits for residential and
  commercial applications. Engineered for homes with kids, pets and
  the elderly, it is durable, serviceable, and environmentally
  responsible through recycling.
</p>


          {/* IMAGE STACK */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              bottom: "1%",
              transform: "translateX(-50%)",
              width: "100%",
              maxWidth: "1400px",
              height: "520px",
            }}
          >
            {IMAGES.map((item, i) => {
              const isVisible = i < visibleCount;

              /* 🔥 Wider fan-out positions */
              const positions = [-420, -260, -100, 100, 260, 420];
              const baseX = positions[i] || 0;

              const isHovered = hoveredIndex === i;

              /* Entry & exit */
              const translateY = hidden ? 700 : isVisible ? 0 : 320;
              const spreadX = fanOut ? baseX : 0;

              return (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="feature-card"
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: 0,
                    width: "340px",
                    height: "460px",
                    transform: `
                      translateX(-50%)
                      translateY(${translateY}px)
                      translateX(${isHovered ? 0 : spreadX}px)
                      scale(${isHovered ? 1.08 : 1})
                    `,
                    transition:
                      "transform 0.9s cubic-bezier(0.77,0,0.175,1)",
                    zIndex: isHovered ? 20 : 10 - Math.abs(baseX),
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 28px 60px rgba(0,0,0,0.18)",
                    cursor: "pointer",
                    background: "#ffffff",
                  }}
                >
                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="feature-image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s ease",
                    }}
                  />

                  {/* CENTER LABEL */}
                  <div
                    className="feature-label body-font"
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      background: "#ffffff",
                      padding: "0.55rem 1.4rem",
                      borderRadius: "999px",
                      fontSize: "0.95rem",
                      color: "#1F2D2A",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                      pointerEvents: "none",
                      overflow: "hidden",
                    }}
                  >
                    <span className="label-text">{item.title}</span>
                    <span className="label-fill" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* HOVER EFFECTS */}
      <style>
        {`
          .feature-card:hover .feature-image {
            transform: scale(1.06);
          }

          /* Label fill animation */
          .feature-label {
            position: relative;
          }

          .label-text {
            position: relative;
            z-index: 2;
          }

          .label-fill {
            position: absolute;
            inset: 0;
            background: #45A98F;
            transform: translateX(-100%);
            transition: transform 0.35s ease;
            z-index: 1;
          }

          .feature-card:hover .label-fill {
            transform: translateX(0);
          }

          .feature-card:hover .feature-label {
            color: #ffffff;
          }
        `}
      </style>
    </section>
  );
};

export default FeaturesSection;
