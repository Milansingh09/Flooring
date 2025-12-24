import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SectionCutTitle = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return (
    <section
    className="section-cut-title"
      style={{
        position: "relative",
        height: "120px",        // visible window
        overflow: "hidden",
        backgroundColor: "#121212",
      }}
    >
      {/* INNER TALL WRAPPER */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -55%)",
          height: "400px",      // 👈 MUST be taller than section
          display: "flex",
          alignItems: "center",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            fontSize: isMobile
              ? "clamp(3.2rem, 14vw, 7rem)"   // 📱 MOBILE
              : "clamp(5rem, 16vw, 14rem)", // 🖥 DESKTOP
            fontWeight: 700,
            letterSpacing: isMobile ? "0.18em" : "0.25em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.08)",
            whiteSpace: "nowrap",
            lineHeight: 1,
            pointerEvents: "none",
          }}
        >
          Projects
        </motion.h2>
      </div>
      <style>
{`
  /* Desktop & tablet untouched */
  .section-cut-title {
    width: 100%;
  }

  /* 📱 MOBILE ONLY */
  @media (max-width: 767px) {
    .section-cut-title {
      max-width: 100vw;
      overflow-x: hidden;
    }
  }
`}
</style>

    </section>
  );
};

export default SectionCutTitle;
