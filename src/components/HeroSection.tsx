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
        height: "100vh",
        width: "100%",
        overflow: "hidden", // 🔒 ABSOLUTE LOCK
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
            "linear-gradient(to bottom, rgba(18,18,18,0.35), rgba(18,18,18,0.85))",
        }}
      />

      {/* ================= BACKGROUND BRAND ================= */}
      <div
        style={{
          position: "absolute",
          top: "6vh",
          left: 0,
          right: 0,
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            display: "block",
            fontSize: "clamp(5rem, 20vw, 14.5rem)",
            fontFamily: "Playfair Display, serif",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "rgba(255,212,0,0.62)",
            lineHeight: 1,
            whiteSpace: "nowrap",
            filter: "blur(1px)",
          }}
        >
          MEDIAHOUSE
        </span>
      </div>

      {/* ================= CONTENT WRAPPER ================= */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1600px",
            paddingLeft: "8vw",
            paddingRight: "4vw",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            style={{
              fontSize: "clamp(2.6rem, 4.5vw, 4.2rem)",
              marginBottom: "20px",
              lineHeight: 1.1,
              color: COLORS.textPrimary,
              maxWidth: "720px",
              fontWeight: 600,
            }}
          >
            Advertising <br />
            That Moves
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              marginBottom: "24px",
              lineHeight: 1.2,
              color: COLORS.accent,
              letterSpacing: "0.04em",
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
              fontSize: "clamp(1.05rem, 2.3vw, 1.25rem)",
              maxWidth: "680px",
              color: COLORS.textSecondary,
              lineHeight: 1.65,
            }}
          >
            High-impact cinema, transit, and OOH advertising — crafted to
            elevate brands and command attention.
          </motion.p>
        </div>
      </div>

      {/* ================= BOTTOM NAV TEXT ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{
          position: "absolute",
          bottom: "40px",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: "48px",
          zIndex: 4,
          fontSize: "0.85rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: COLORS.textSecondary,
        }}
      >
        {["Cinema Advertising", "Transit Media", "OOH Experiences"].map(
          (item) => (
            <span
              key={item}
              style={{ cursor: "pointer", transition: "all 0.35s ease" }}
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
