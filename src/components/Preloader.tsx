import { useEffect, useState } from "react";
import logo from "../assets/logobg.png";
import curtainTop from "../assets/floor1.jpg";
import curtainBottom from "../assets/floor2.jpg";
import revealTop from "../assets/floor3.jpg";
import revealBottom from "../assets/floor4.jpg";

const Preloader: React.FC = () => {
  const isDev = import.meta.env.DEV;

  const hasSeen =
    typeof window !== "undefined"
      ? localStorage.getItem("durell_preloader")
      : "true";

  const shouldShow = isDev ? true : !hasSeen;

  const [show, setShow] = useState<boolean>(shouldShow);
  const [collapse, setCollapse] = useState<boolean>(false);
  const [revealDone, setRevealDone] = useState<boolean>(false);
  const [logoMove, setLogoMove] = useState<boolean>(false);

  useEffect(() => {
    if (!show) return;

    // 1️⃣ First curtain collapse
    const collapseTimer = setTimeout(() => {
      setCollapse(true);
    }, 800);

    // 2️⃣ Second batch fully visible
    const revealTimer = setTimeout(() => {
      setRevealDone(true);
    }, 2000);

    // 3️⃣ Logo slides to top-left
    const logoTimer = setTimeout(() => {
      setLogoMove(true);
    }, 2400);

    // 4️⃣ Hide preloader AFTER everything
    const hideTimer = setTimeout(() => {
      setShow(false);
      if (!isDev) {
        localStorage.setItem("durell_preloader", "true");
      }
    }, 3300);

    return () => {
      clearTimeout(collapseTimer);
      clearTimeout(revealTimer);
      clearTimeout(logoTimer);
      clearTimeout(hideTimer);
    };
  }, [show, isDev]);

  if (!show) return null;

  const containerStyle: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    zIndex: 9999,
    overflow: "hidden",
    background: "#F1EBE1",
    opacity: revealDone ? 0 : 1,
    visibility: revealDone ? "hidden" : "visible",
    transition: "opacity 0.8s ease, visibility 0.8s ease",
  };

  const baseLayerStyle: React.CSSProperties = {
    position: "absolute",
    left: 0,
    width: "100%",
    height: "50%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "transform 1.2s cubic-bezier(0.77, 0, 0.175, 1)",
  };

  const logoContainerStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    transform: logoMove
      ? "translate(-45vw, -40vh) scale(0.5)"
      : "translate(0, 0) scale(1)",
    transition: "transform 1s ease-in-out",
  };

  const logoStyle: React.CSSProperties = {
    width: "360px",
    maxWidth: "60%",
  };

  return (
    <div style={containerStyle}>
      {/* First Curtain Layer */}
      <div
        style={{
          ...baseLayerStyle,
          top: 0,
          backgroundImage: `url(${curtainTop})`,
          transform: collapse ? "translateY(100%)" : "translateY(0)",
        }}
      />
      <div
        style={{
          ...baseLayerStyle,
          bottom: 0,
          backgroundImage: `url(${curtainBottom})`,
          transform: collapse ? "translateY(-100%)" : "translateY(0)",
        }}
      />

      {/* Second Reveal Layer */}
      <div
        style={{
          ...baseLayerStyle,
          top: 0,
          backgroundImage: `url(${revealTop})`,
          transform: collapse ? "translateY(0)" : "translateY(-100%)",
        }}
      />
      <div
        style={{
          ...baseLayerStyle,
          bottom: 0,
          backgroundImage: `url(${revealBottom})`,
          transform: collapse ? "translateY(0)" : "translateY(100%)",
        }}
      />

      {/* Logo */}
      <div style={logoContainerStyle}>
        <img src={logo} alt="Durell Flooring" style={logoStyle} />
      </div>
    </div>
  );
};

export default Preloader;
