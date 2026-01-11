import { useEffect, useRef, useState } from "react";
import img1 from "../assets/floor1.jpg";
import img2 from "../assets/floor2.jpg";

const TechnologySection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [stage, setStage] = useState(0);
  const [mode, setMode] = useState<"normal" | "sticky" | "end">("normal");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const h = window.innerHeight;

      /* Sticky control */
      if (rect.top <= 0 && rect.bottom > h) {
        setMode("sticky");
      } else if (rect.bottom <= h) {
        setMode("end");
      } else {
        setMode("normal");
      }

      /* Animation stages */
      if (rect.top > -h * 0.25) {
        setStage(0);
      } else if (rect.top <= -h * 0.25 && rect.top > -h * 1.2) {
        setStage(1);
      } else {
        setStage(2);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const CARD_WIDTH = "48%";
  const CARD_HEIGHT = "66vh";

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        height: "260vh",
        background: "#F1EBE1",
        overflowX: "hidden", // 🔒 prevent horizontal scroll
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
          overflow: "hidden",
          display: "flex",
          justifyContent: "center", // ✅ horizontal centering
        }}
      >
        {/* INNER CONTAINER (CONSTRAINS WIDTH) */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1400px", // ✅ prevents overflow
            height: "100%",
          }}
        >
          {/* HEADING (LEFT ALIGNED) */}
          <h2
            className="heading-font"
            style={{
              position: "absolute",
              top: "12%",
              left: "1%",
              fontSize: "4rem",
              fontWeight: 600,
              color: "#1F2D2A",
              zIndex: 20,
              margin: 0,
            }}
          >
            Technology & Space
          </h2>

{/* IMAGE 1 */}
<div
  className="tech-card"
  style={{
    position: "absolute",
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    left: "50%",
    top:
      stage === 0
        ? "55%"
        : stage === 1
        ? "26%"
        : "30%",
    transform:
      stage === 0
        ? "translate(-50%, -50%)"
        : "translate(-50%, 0)",
    transition: "all 1s cubic-bezier(0.77,0,0.175,1)",
    zIndex: stage === 2 ? 2 : 4,
    overflow: "hidden",
    borderRadius: "14px",
    backdropFilter: "blur(12px)",
    background: "rgba(255,255,255,0.22)",
  }}
>
  {/* CENTER LABEL */}
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "0.45rem 1.1rem",
      borderRadius: "999px",
      background: "rgba(255,255,255,0.65)",
      backdropFilter: "blur(10px)",
      fontSize: "1rem",
      letterSpacing: "1px",
      color: "#1F2D2A",
      zIndex: 5,
      pointerEvents: "none",
      whiteSpace: "nowrap",
    }}
  >
    CORE
  </div>

  <img
    src={img1}
    alt="Tech 1"
    className="tech-image"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.6s ease",
    }}
  />
</div>


          {/* LEFT TEXT */}
          <div
            style={{
              position: "absolute",
              left: "2%",
              top: "50%",
              transform:
                stage === 1
                  ? "translateY(-50%)"
                  : "translateY(-80%)",
              maxWidth: "300px",
              opacity: stage === 1 ? 1 : 0,
              transition: "all 1s cubic-bezier(0.77,0,0.175,1)",
              pointerEvents: "none",
            }}
          >
            <h3 className="heading-font" style={{ fontSize: "1.45rem" }}>
              Advanced Core Engineering
            </h3>
            <p className="body-font" style={{ fontSize: "0.95rem" }}>
              Our SPC flooring is built with a rigid stone polymer core that
              delivers unmatched strength, stability, and impact resistance.
            </p>
          </div>

{/* IMAGE 2 */}
<div
  className="tech-card"
  style={{
    position: "absolute",
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    left: "50%",
    top: stage < 2 ? "120%" : "34%",
    transform: "translate(-50%, 0)",
    transition: "all 1s cubic-bezier(0.77,0,0.175,1)",
    zIndex: 6,
    overflow: "hidden",
    borderRadius: "14px",
    backdropFilter: "blur(12px)",
    background: "rgba(255,255,255,0.25)",
  }}
>
  {/* CENTER LABEL */}
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "0.45rem 1.1rem",
      borderRadius: "999px",
      background: "rgba(255,255,255,0.65)",
      backdropFilter: "blur(10px)",
      fontSize: "1rem",
      letterSpacing: "1px",
      color: "#1F2D2A",
      zIndex: 5,
      pointerEvents: "none",
      whiteSpace: "nowrap",
    }}
  >
    DESIGN
  </div>

  <img
    src={img2}
    alt="Tech 2"
    className="tech-image"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.6s ease",
    }}
  />
</div>


          {/* RIGHT TEXT (SLIDES UP + DISAPPEARS) */}
          <div
            style={{
              position: "absolute",
              right: "2%",
              top: "50%",
              transform:
                stage === 2
                  ? "translateY(-50%)"
                  : "translateY(-80%)",
              maxWidth: "300px",
              textAlign: "right",
              opacity: stage === 2 ? 1 : 0,
              transition: "all 1s cubic-bezier(0.77,0,0.175,1)",
              pointerEvents: "none",
            }}
          >
            <h3 className="heading-font" style={{ fontSize: "1.45rem" }}>
              Design Meets Durability
            </h3>
            <p className="body-font" style={{ fontSize: "0.95rem" }}>
              Every plank is layered with high-definition textures and
              protective coatings.
            </p>
          </div>
        </div>
      </div>

      {/* HOVER ZOOM */}
      <style>
        {`
          .tech-card:hover .tech-image {
            transform: scale(1.06);
          }
        `}
      </style>
    </section>
  );
};

export default TechnologySection;
