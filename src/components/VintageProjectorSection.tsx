import { motion } from "framer-motion";
import { useState } from "react";

const COLORS = {
  bg: "#000000",
  textPrimary: "#F5F5F5",
  textSecondary: "#9a9a9a",
  accent: "#FFD400",
};



const VintageProjectorSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        backgroundColor: COLORS.bg,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* ================= PROJECTOR IMAGE (INVERTED) ================= */}
      <motion.img
        src="/images/projector.jpg"
        alt="Vintage Film Projector"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          width: "8%",
          minWidth: "260px",
          marginLeft: "2vw",
          zIndex: 3,
          filter: "invert(1) grayscale(100%) contrast(1.1)",
        }}
      />

      {/* ================= YELLOW LIGHT BEAM (SIMPLE) ================= */}
<div
  style={{
    position: "absolute",

    /* 🔧 POSITION — you can tweak these */
    left: "8%",          // where beam starts (near projector)
    top: "49%",

    width: "48%",         // how far beam travels
    height: "55%",        // how wide beam spreads

    transform: "translateY(-50%)",

    /* 🔺 TRIANGLE SHAPE */
    clipPath: "polygon(0% 50%, 100% 0%, 100% 100%)",

    /* 🌟 LIGHT EFFECT */
    background:
      "linear-gradient(to right, rgba(255,212,0,0.45), rgba(255,212,0,0))",

    filter: "blur(12px)",
    opacity: 0.75,

    pointerEvents: "none",
    zIndex: 2,
  }}
/>


      {/* ================= FILM REEL WITH VIDEO INSIDE ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        style={{
          position: "absolute",
          right: "-1vw",
          width: "55%",
          aspectRatio: "16 / 9",
          zIndex: 3,
          backgroundImage: "url('/images/filmreel3.jpg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* VIDEO MASKED INSIDE FILM REEL */}
        <video
          src="/videos/v1.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "68%",
            height: "62%",
            objectFit: "cover",
            filter:
              "grayscale(100%) contrast(1.15) brightness(0.9)",
          }}
        />
      </motion.div>

      {/* ================= TEXT OVERLAY ================= */}
 <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.4 }}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  style={{
    position: "absolute",
    bottom: "4%",
    left: "8vw",
    maxWidth: "420px",
    zIndex: 4,
    color: COLORS.textPrimary,
    cursor: "pointer",
    transform: isHovered ? "translateY(-6px)" : "translateY(0)",
    transition: "all 0.4s ease",
  }}
>
  {/* TITLE */}
  <motion.h3
    key={isHovered ? "hovered" : "default"}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    style={{
      fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
      marginBottom: "12px",
      letterSpacing: "0.06em",
      color: isHovered ? COLORS.accent : COLORS.textPrimary,
      textShadow: isHovered
        ? "0 0 18px rgba(255,212,0,0.6)"
        : "none",
    }}
  >
    {isHovered ? "Cinema Was the First Medium" : "Where It All Began"}
  </motion.h3>

  {/* DESCRIPTION */}
  <p
    style={{
      fontSize: "1rem",
      color: COLORS.textSecondary,
      lineHeight: 1.6,
      opacity: isHovered ? 0.9 : 1,
      transition: "opacity 0.3s ease",
    }}
  >
    Before algorithms and billboards, there was light, film,
    and storytelling.  
    Cinema is still the most powerful way to move an audience.
  </p>
</motion.div>

    </section>
  );
};

export default VintageProjectorSection;
