import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const COLORS = {
  textPrimary: "#FFFFFF",
  textSecondary: "rgba(255,255,255,0.75)",
  accent: "#FFD400",
};

const movies = [
  {
    title: "Paradise & Paradiso",
    image: "/images/p1.png",
    leftShort: "Cinema meets culture.",
    leftLong:
      "An immersive nightlife experience blending cinema, performance, and culture.",
    rightShort: "Luxury rooftop events.",
    rightLong:
      "Premium rooftop performances, curated events, and unforgettable ambience.",
  },
  {
    title: "Neon Nights",
    image: "/images/p2.jpg",
    leftShort: "Urban storytelling.",
    leftLong:
      "Where city lights merge with cinematic storytelling and rhythm.",
    rightShort: "Music & motion.",
    rightLong:
      "A celebration of sound, movement, and visual spectacle.",
  },
  {
    title: "Midnight Boulevard",
    image: "/images/p3.jpg",
    leftShort: "Dark glamour.",
    leftLong:
      "A nocturnal journey wrapped in elegance, mystery, and motion.",
    rightShort: "Night culture.",
    rightLong:
      "A visual exploration of nightlife, design, and atmosphere.",
  },
  {
    title: "After Hours",
    image: "/images/p4.jpg",
    leftShort: "Stories after dark.",
    leftLong:
      "Narratives that unfold when the city sleeps.",
    rightShort: "Mood & mystery.",
    rightLong:
      "Emotion-driven visuals shaped by sound and shadow.",
  },
];

const UpcomingMoviesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [hoverSide, setHoverSide] = useState<"left" | "right" | null>(null);

const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start end", "end start"], // ← THIS ONE
});

const textY = useTransform(
  scrollYProgress,
  [0, 1],
  ["-160vh", "160vh"]
);
 // Full travel background text


  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#121212",
      }}
    >
  {/* ================= BIG BACKGROUND OUTLINED TEXT ================= */}
{/* BACKGROUND OUTLINED TEXT (SCROLL) */}
<motion.div
  style={{
    position: "absolute",
    top: "50%",
    left: "50%",
    x: "-50%",
    y: textY,
    zIndex: 0,
    pointerEvents: "none",
    textAlign: "center",
  }}
>
  <span
    style={{
      fontSize: "clamp(4rem, 12vw, 8.5rem)",
      fontWeight: 800,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      color: "transparent",
      WebkitTextStroke: `2px ${COLORS.accent}`,
      opacity: 0.5,
    }}
  >
    Upcoming Movies
  </span>
</motion.div>



      {/* ================= CONTENT ================= */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          paddingTop: "42px", // 👈 push content to top
        }}
      >
        {/* ================= CARDS (TOP) ================= */}
        <div
          style={{
            position: "relative",
            height: "500px", // 👈 slightly taller area
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start", // 👈 cards start at top
          }}
        >
          {movies.map((movie, index) => {
            const offset = index - activeIndex;

            const xMap: Record<string, number> = {
              "-1": -420,
              "0": 0,
              "1": 420,
              "2": 720,
            };

            return (
              <motion.div
                key={movie.title}
                onMouseEnter={() => setActiveIndex(index)}
                animate={{
                  x: xMap[offset.toString()] ?? 1200,
                  scale: index === activeIndex ? 1 : 0.88,
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  width: "500px",
                  height: "500px", // 👈 increased card height
                  borderRadius: "14px",
                  overflow: "hidden",
                  cursor: "pointer",
                  zIndex: index === activeIndex ? 5 : 2,
                  backgroundColor: "#000",
                  border:
                    index === activeIndex
                      ? `2px solid ${COLORS.accent}`
                      : "1px solid rgba(255,212,0,0.35)",
                  boxShadow:
                    index === activeIndex
                      ? "0 40px 80px rgba(0,0,0,0.7)"
                      : "0 20px 40px rgba(0,0,0,0.4)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "10px",
                    border: "1px solid rgba(255,212,0,0.4)",
                    borderRadius: "10px",
                    pointerEvents: "none",
                  }}
                />

                <img
                  src={movie.image}
                  alt={movie.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* ================= CENTER TITLE ================= */}
        <div style={{ textAlign: "center", marginTop: "-40px" }}>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
              color: COLORS.textPrimary,
              letterSpacing: "0.04em",
            }}
          >
            {movies[activeIndex].title}
          </h2>
        </div>

        {/* ================= SIDE TEXT ================= */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 8vw",
            marginTop: "16px",
            color: COLORS.textSecondary,
            fontSize: "0.95rem",
          }}
        >
          {/* LEFT */}
          <div
            style={{ maxWidth: "320px", cursor: "pointer" }}
            onMouseEnter={() => setHoverSide("left")}
            onMouseLeave={() => setHoverSide(null)}
          >
            {hoverSide !== "left" && (
              <div
                style={{
                  width: "160px",
                  height: "2px",
                  backgroundColor: COLORS.accent,
                  marginBottom: "8px",
                }}
              />
            )}
            {hoverSide === "left"
              ? movies[activeIndex].leftLong
              : movies[activeIndex].leftShort}
          </div>

          {/* RIGHT */}
          <div
            style={{
              maxWidth: "320px",
              textAlign: "right",
              cursor: "pointer",
            }}
            onMouseEnter={() => setHoverSide("right")}
            onMouseLeave={() => setHoverSide(null)}
          >
            {hoverSide !== "right" && (
              <div
                style={{
                  width: "160px",
                  height: "2px",
                  backgroundColor: COLORS.accent,
                  marginBottom: "8px",
                  marginLeft: "auto",
                }}
              />
            )}
            {hoverSide === "right"
              ? movies[activeIndex].rightLong
              : movies[activeIndex].rightShort}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingMoviesSection;
