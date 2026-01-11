import { useEffect, useRef, useState } from "react";
import heroVideo from "../assets/hero1.mp4";

const messages = [
  "Step into the lap of luxury with our one day flooring makeover which lasts a lifetime.",
  "Durell stands behind the promise of our quality product, hassle free installation and professional service."
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  // Rotating text
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Scroll-based curtain reveal
  useEffect(() => {
    const onScroll = () => {
      const section = heroRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;

      // 0 → 1 as hero scrolls out of view
      const value = Math.min(
        1,
        Math.max(0, (windowH - rect.bottom) / windowH)
      );

      setProgress(value);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        background: "#000",
      }}
    >
      {/* Background Video */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* Soft Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.25)",
          zIndex: 1,
        }}
      />

      {/* Center-Left Rotating Text */}
      <div
        style={{
          position: "absolute",
          left: "6%",
          top: "50%",
          transform: "translateY(-50%)",
          maxWidth: "420px",
          color: "#F1EBE1",
          zIndex: 2,
        }}
        className="body-font"
      >
        <p
          key={index}
          style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            opacity: 1,
            transition: "opacity 0.6s ease",
          }}
        >
          {messages[index]}
        </p>
      </div>

      {/* Bottom-Right Heading */}
      <div
        style={{
          position: "absolute",
          right: "5%",
          bottom: "8%",
          zIndex: 2,
          color: "#F1EBE1",
          textAlign: "right",
        }}
        className="heading-font"
      >
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: 600,
            lineHeight: "1.1",
            letterSpacing: "0.5px",
          }}
        >
          Modern Flooring
          <br />
          Solutions
        </h1>
      </div>

      {/* 🔽 CURTAIN MASK (THIS CREATES THE EFFECT) */}
      {/* 🔽 CURTAIN MASK (FIXED) */}
<div
  style={{
    position: "absolute",
    inset: 0,
    background: "#F1EBE1", // matches next section background
    transform: `translateY(${100 - progress * 100}%)`,
    transition: "transform 0.1s linear",
    zIndex: 3,
    pointerEvents: "none",
  }}
/>

    </section>
  );
};

export default HeroSection;
