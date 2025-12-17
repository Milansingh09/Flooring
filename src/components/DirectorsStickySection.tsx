import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

const COLORS = {
  bg: "#121212",
  textPrimary: "#F5F5F5",
  textSecondary: "#9a9a9a",
  accent: "#FFD400",
};

const directors = [
  {
    name: "Aarav Mehta",
    role: "Managing Director",
    image: "/images/d2.webp",
    quote: "Cinema is not advertising — it is emotion at scale.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Riya Kapoor",
    role: "Creative Director",
    image: "/images/d1.jpg",
    quote: "Every frame must earn attention.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Vikram Singh",
    role: "Strategy Director",
    image: "/images/d3.jpg",
    quote: "Media works when it respects the audience.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Neha Sharma",
    role: "Operations Director",
    image: "/images/d4.jpg",
    quote: "Precision is the real scale.",
    linkedin: "https://linkedin.com",
  },
];

const END_BUFFER = 1; 
const DirectorsStickySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

useMotionValueEvent(scrollYProgress, "change", (latest) => {
  const totalSteps = directors.length + END_BUFFER;
  const rawIndex = Math.floor(latest * totalSteps);

  const clampedIndex = Math.min(
    directors.length - 1,
    Math.max(0, rawIndex)
  );

  setActiveIndex(clampedIndex);
});


  const director = directors[activeIndex];

  return (
    <section
      ref={sectionRef}
      style={{
        height: `${(directors.length + END_BUFFER) * 100}vh`,
        backgroundColor: COLORS.bg,
      }}
    >
      {/* ✅ STICKY CONTAINER — NO MOTION HERE */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* TITLE */}
        <div
          style={{
            position: "absolute",
            top: "64px",
            left: "8vw",
            fontSize: "0.85rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: COLORS.textSecondary,
          }}
        >
          Our Directors
        </div>

        {/* ✅ NON-STICKY WRAPPER */}
        <div
          style={{
            maxWidth: "1400px",
            width: "100%",
            padding: "0 8vw",
          }}
        >
          {/* ✅ MOTION ONLY INSIDE */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{
              display: "flex",
              gap: "96px",
              alignItems: "center",
            }}
          >
            {/* IMAGE */}
            <motion.img
              src={director.image}
              alt={director.name}
              style={{
                width: "340px",
                height: "460px",
                objectFit: "cover",
              }}
            />

            {/* TEXT */}
            <div style={{ maxWidth: "420px" }}>
              <h3
                style={{
                  fontSize: "2.6rem",
                  marginBottom: "8px",
                  color: COLORS.textPrimary,
                }}
              >
                {director.name}
              </h3>

              <div
                style={{
                  fontSize: "0.85rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: COLORS.accent,
                  marginBottom: "24px",
                }}
              >
                {director.role}
              </div>

              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.6,
                  color: COLORS.textSecondary,
                  marginBottom: "32px",
                }}
              >
                “{director.quote}”
              </p>

              <a
                href={director.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.85rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: COLORS.textPrimary,
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.3)",
                  paddingBottom: "4px",
                }}
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DirectorsStickySection;
