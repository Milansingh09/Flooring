import { motion } from "framer-motion";

const SectionCutTitle = () => {
  return (
    <section
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
            fontSize: "clamp(5rem, 16vw, 14rem)",
            fontWeight: 700,
            letterSpacing: "0.25em",
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
    </section>
  );
};

export default SectionCutTitle;
