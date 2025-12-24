import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const COLORS = {
  textPrimary: "#FFFFFF",
  textSecondary: "rgba(255,255,255,0.75)",
  accent: "#FFD400",
};
const isMobile =
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 767px)").matches;



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
const [activeIndex, setActiveIndex] = useState(isMobile ? 0 : 1);

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
const SWIPE_THRESHOLD = 80;

const handleSwipe = (offsetX: number) => {
  if (offsetX < -SWIPE_THRESHOLD && activeIndex < movies.length - 1) {
    setActiveIndex((i) => i + 1);
  }

  if (offsetX > SWIPE_THRESHOLD && activeIndex > 0) {
    setActiveIndex((i) => i - 1);
  }
};


  return (
    <section
      ref={sectionRef}
       className="upcoming-movies-section"
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
  className="bg-movie-text"
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

const xMapDesktop: Record<string, number> = {
  "-1": -420,
  "0": 0,
  "1": 420,
  "2": 720,
};

const xMapMobile: Record<string, number> = {
  "-3": -180,
  "-2": -90,
  "-1": 0,
  "0": 90,
  "1": 180,
  "2": 270,
};


            return (
<motion.div
  key={movie.title}
  onMouseEnter={() => !isMobile && setActiveIndex(index)}
  onTouchStart={() => isMobile && setActiveIndex(index)}

  /* 👇 MOBILE-ONLY SWIPE */
  drag={isMobile ? "x" : false}
  dragConstraints={{ left: 0, right: 0 }}
  dragElastic={0.2}
  onDragEnd={(_, info) => {
    if (isMobile) handleSwipe(info.offset.x);
  }}

  animate={{
    x: (isMobile ? xMapMobile : xMapDesktop)[offset.toString()] ?? 1200,
    scale: index === activeIndex ? 1 : 0.88,
  }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="movie-card"
  style={{
    position: "absolute",
    width: "500px",
    height: "500px",
    borderRadius: "14px",
    overflow: "hidden",
    cursor: isMobile ? "grab" : "pointer",
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
          className="movie-title"
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
        className="side-text-wrapper"
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
             onTouchStart={() => setHoverSide("left")}     // ✅ ADD
  onTouchEnd={() => setHoverSide(null)}         // ✅ ADD
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
            onTouchStart={() => setHoverSide("right")}    // ✅ ADD
  onTouchEnd={() => setHoverSide(null)}  
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
      <style>
{`
/* ================= MOBILE ONLY ================= */
@media (max-width: 767px) {

  /* Cards */
  .upcoming-movies-section .movie-card {
    width: 300px !important;
    height: 360px !important;
  }

  /* Background outlined text */
  .upcoming-movies-section .bg-movie-text {
    font-size: clamp(2.6rem, 10vw, 4.5rem) !important;
    -webkit-text-stroke-width: 1.5px;
    opacity: 0.4;
  }

  /* Center title */
  .upcoming-movies-section .movie-title {
    font-size: 1.6rem !important;
    letter-spacing: 0.02em;
  }

  /* Side text spacing */
  .upcoming-movies-section .side-text-wrapper {
    padding: 0 6vw !important;
    font-size: 0.85rem;
  }

  /* Reduce decorative lines */
  .upcoming-movies-section .side-text-wrapper div div {
    width: 110px !important;
  }
}
`}
</style>

    </section>
  );
};

export default UpcomingMoviesSection;
