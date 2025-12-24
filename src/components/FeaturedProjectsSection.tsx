import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const COLORS = {
  bg: "#121212",
  textPrimary: "#F5F5F5",
  textSecondary: "#8a8a8a",
  accent: "#FFD400",
};

const FeaturedProjectsSplitSection = () => {
  const [active, setActive] = useState<"transit" | "ooh">("transit");

  const content = {
    transit: {
      label: "Transit Advertising",
      video: "/videos/v2.mp4",
    },
    ooh: {
      label: "OOH Media",
      video: "/videos/v3.mp4",
    },
  };

  return (
    <section
    className="featured-split-section"
      style={{
        height: "90vh",
        backgroundColor: COLORS.bg,
        display: "flex",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* ================= LEFT COLUMN ================= */}
      <div
        onClick={() => setActive("transit")}
        style={{
          width: "12%",
          minWidth: "90px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:
            active === "transit" ? "#181818" : "#101010",
          transition: "background-color 0.5s ease",
        }}
      >
        <span
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontSize: "0.85rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color:
              active === "transit"
                ? COLORS.accent
                : COLORS.textSecondary,
            transition: "color 0.4s ease",
          }}
        >
          Transit Advertising
        </span>
      </div>

      {/* ================= CENTER WINDOW ================= */}
<div
  style={{
    flex: 1,
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#000",

    /* 👇 ADD GUTTERS */
    paddingLeft: "64px",
    paddingRight: "64px",
  }}
>

        {/* LEFT EDGE TEXT */}
        <div
          style={{
            position: "absolute",
            left: "12px",
            bottom: "24px",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontSize: "1.5rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: COLORS.textSecondary,
            zIndex: 3,
            pointerEvents: "none",
          }}
        >
          {content[active].label}
        </div>

        {/* RIGHT EDGE TEXT */}
        <div
          style={{
            position: "absolute",
            right: "12px",
            top: "24px",
            writingMode: "vertical-rl",
            fontSize: "1.5rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: COLORS.textSecondary,
            zIndex: 3,
            pointerEvents: "none",
          }}
        >
          {content[active].label}
        </div>

        {/* VIDEO */}
        <AnimatePresence mode="wait">
          <motion.video
            key={active}
            src={content[active].video}
            autoPlay
            muted
            loop
            playsInline
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
style={{
  width: "100%",
  height: "100%",
  objectFit: "cover",

  /* 👇 IMPORTANT */
  borderRadius: "2px",
}}

          />
        </AnimatePresence>

        {/* SUBTLE OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.35), transparent, rgba(0,0,0,0.35))",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* ================= RIGHT COLUMN ================= */}
      <div
        onClick={() => setActive("ooh")}
        style={{
          width: "12%",
          minWidth: "90px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:
            active === "ooh" ? "#181818" : "#101010",
          transition: "background-color 0.5s ease",
        }}
      >
        <span
          style={{
            writingMode: "vertical-rl",
            fontSize: "0.85rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color:
              active === "ooh"
                ? COLORS.accent
                : COLORS.textSecondary,
            transition: "color 0.4s ease",
          }}
        >
          OOH Media
        </span>
      </div>
      <style>
{`
  /* Desktop & tablet untouched */
  .featured-split-section {
    width: 100%;
  }

  /* 📱 MOBILE ONLY */
  @media (max-width: 767px) {
    .featured-split-section {
      max-width: 100vw;
      overflow-x: hidden;
    }
  }
`}
</style>

    </section>
  );
};

export default FeaturedProjectsSplitSection;
