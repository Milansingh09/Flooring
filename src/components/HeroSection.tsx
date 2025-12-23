import React from "react";
import { motion } from "framer-motion";

const COLORS = {
  bgMain: "#121212",
  textPrimary: "#F5F5F5",
  textSecondary: "#B5B5B5",
  accent: "#FFD400",
};

const HeroSection: React.FC = () => {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: COLORS.bgMain,
      }}
    >
      {/* ================= VIDEO BACKGROUND ================= */}
      <video
        src="/videos/hero1.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "blur(2px)",
          opacity: 0.85,
          zIndex: 0,
        }}
      />

      {/* ================= OVERLAY ================= */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(18,18,18,0.4), rgba(18,18,18,0.9))",
        }}
      />

      {/* ================= BACKGROUND BRAND ================= */}
<div
  style={{
    position: "absolute",
    top: "clamp(2vh, 5vh, 8vh)", // ⬆️ move slightly up
    left: "-8vw",               // ⬅️ allow breathing room
    right: "-8vw",              // ➡️ allow breathing room
    zIndex: 2,
    pointerEvents: "none",
    textAlign: "center",
  }}
>

        <span
          style={{
            display: "block",
      fontSize: "clamp(3rem, 16vw, 14.5rem)",

            fontFamily: "Playfair Display, serif",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "rgba(255,212,0,0.55)",
            lineHeight: 1,
            whiteSpace: "nowrap",
            filter: "blur(1px)",
          }}
        >
          MEDIAHOUSE
        </span>
      </div>

      {/* ================= CONTENT ================= */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1400px",
            padding: "0 clamp(1.2rem, 6vw, 8vw)",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            style={{
              fontSize: "clamp(2.1rem, 6vw, 4.2rem)",
              marginBottom: "16px",
              lineHeight: 1.1,
              color: COLORS.textPrimary,
              maxWidth: "720px",
              fontWeight: 600,
            }}
          >
            Advertising <br /> That Moves
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            style={{
              fontSize: "clamp(1.3rem, 4.5vw, 2.2rem)",
              marginBottom: "20px",
              lineHeight: 1.2,
              color: COLORS.accent,
              letterSpacing: "0.08em",
              maxWidth: "760px",
            }}
          >
            Screens. Streets. Stories.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            style={{
              fontSize: "clamp(0.95rem, 3.2vw, 1.25rem)",
              maxWidth: "680px",
              color: COLORS.textSecondary,
              lineHeight: 1.6,
            }}
          >
            High-impact cinema, transit, and OOH advertising — crafted to
            elevate brands and command attention.
          </motion.p>
        </div>
      </div>

      {/* ================= BOTTOM NAV ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{
          position: "absolute",
          bottom: "clamp(20px, 5vw, 40px)",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "clamp(16px, 6vw, 48px)",
          zIndex: 4,
          fontSize: "clamp(0.65rem, 2.5vw, 0.85rem)",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: COLORS.textSecondary,
          padding: "0 1rem",
          textAlign: "center",
        }}
      >
        {["Cinema Advertising", "Transit Media", "OOH Experiences"].map(
          (item) => (
            <span
              key={item}
              style={{
                cursor: "pointer",
                transition: "all 0.35s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = COLORS.accent;
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.textShadow =
                  "0 0 14px rgba(255,212,0,0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = COLORS.textSecondary;
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.textShadow = "none";
              }}
            >
              {item}
            </span>
          )
        )}
      </motion.div>
    </section>
  );
};

export default HeroSection;
