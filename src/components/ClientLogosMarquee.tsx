import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const COLORS = {
  bg: "#121212",
  textPrimary: "#F5F5F5",
  textSecondary: "#8a8a8a",
};

const logos = [
  { src: "/images/l1.jpg", name: "Netflix" },
  { src: "/images/l2.jpg", name: "Amazon Prime" },
  { src: "/images/l3.png", name: "PVR Cinemas" },
  { src: "/images/l4.jpg", name: "INOX" },
  { src: "/images/l5.png", name: "Disney+" },
  { src: "/images/l6.png", name: "Spotify" },
];

const ClientLogosMarquee = () => {
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  /* 📱 MOBILE DETECTION */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      style={{
        backgroundColor: COLORS.bg,
        padding: isMobile ? "6px 0" : "10px 0",
        overflow: "hidden", // 🔒 LOCAL SAFETY
        maxWidth: "100vw",
      }}
    >
      {/* TITLE */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          textAlign: "center",
          fontSize: isMobile
            ? "clamp(1.2rem, 5vw, 1.6rem)"
            : "clamp(1.6rem, 3vw, 2.2rem)",
          letterSpacing: isMobile ? "0.16em" : "0.2em",
          textTransform: "uppercase",
          marginBottom: "16px",
          color: COLORS.textSecondary,
        }}
      >
        Trusted By
      </motion.h3>

      {/* MARQUEE VIEWPORT */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: isMobile ? "100px" : "140px",
          overflow: "hidden", // 🔒 HARD CLIP
        }}
      >
        {/* MOVING STRIP */}
        <motion.div
          animate={{
            x: paused ? undefined : ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            display: "flex",
            gap: isMobile ? "48px" : "86px",
            width: "200%",
            alignItems: "center",
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              onMouseEnter={() => {
                setPaused(true);
                setHovered(index);
              }}
              onMouseLeave={() => {
                setPaused(false);
                setHovered(null);
              }}
              style={{
                width: isMobile ? "140px" : "200px",
                height: isMobile ? "80px" : "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              {/* LOGO */}
              <motion.img
                src={logo.src}
                alt={logo.name}
                animate={{ opacity: hovered === index ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  maxWidth: isMobile ? "110px" : "160px",
                  maxHeight: isMobile ? "56px" : "80px",
                  objectFit: "contain",
                }}
              />

              {/* NAME */}
              <motion.span
                animate={{ opacity: hovered === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  fontSize: isMobile ? "0.75rem" : "0.95rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: COLORS.textPrimary,
                  pointerEvents: "none",
                }}
              >
                {logo.name}
              </motion.span>
            </div>
          ))}
        </motion.div>

        {/* FADE EDGES */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: isMobile ? "64px" : "140px",
            height: "100%",
            background:
              "linear-gradient(to right, #121212, transparent)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: isMobile ? "64px" : "140px",
            height: "100%",
            background:
              "linear-gradient(to left, #121212, transparent)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />
      </div>
    </section>
  );
};

export default ClientLogosMarquee;
