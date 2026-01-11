import { useEffect, useState } from "react";
import logo from "../assets/logobg.png"; // adjust if needed

const navItems = ["Home", "About", "Products", "Blog", "FAQ"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        padding: "0.5rem 6%",
        display: "flex",
        alignItems: "center",
        background: scrolled ? "rgba(241,235,225,0.25)" : "#F1EBE1",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "background 0.3s ease, backdrop-filter 0.3s ease",
        boxSizing: "border-box",
      }}
    >
      {/* LEFT: LOGO */}
      <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="Logo"
          style={{
            height: "48px",
            width: "auto",
            objectFit: "contain",
            cursor: "pointer",
          }}
        />
      </div>

      {/* CENTER: NAV TABS */}
<nav
  style={{
    flex: 2,
    display: "flex",
    justifyContent: "center", // keeps tabs centered
    alignItems: "center",
    gap: "2rem", // ✅ adjust spacing between tabs here
    maxWidth: "520px",
  }}
>

        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="body-font"
            style={{
              fontSize: "0.95rem",
              color: "#4A5A56",
              textDecoration: "none",
              position: "relative",
              padding: "0.25rem 0",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#45A98F";
              const line = e.currentTarget.querySelector(
                ".nav-underline"
              ) as HTMLElement;
              line.style.transform = "scaleX(1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#4A5A56";
              const line = e.currentTarget.querySelector(
                ".nav-underline"
              ) as HTMLElement;
              line.style.transform = "scaleX(0)";
            }}
          >
            {item}

            {/* UNDERLINE */}
            <span
              className="nav-underline"
              style={{
                position: "absolute",
                left: 0,
                bottom: "-4px",
                width: "100%",
                height: "2px",
                backgroundColor: "#45A98F", // primary accent
                transform: "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.35s ease",
              }}
            />
          </a>
        ))}
      </nav>

      {/* RIGHT: CONTACT BUTTON */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <a
          href="#contact"
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "0.6rem 1.3rem",
            border: "1px solid #45A98F",
            borderRadius: "3px",
            textDecoration: "none",
            color: "#45A98F",
            fontSize: "0.9rem",
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            transition: "color 0.35s ease",
          }}
          onMouseEnter={(e) => {
            const fill = e.currentTarget.querySelector(
              ".btn-fill"
            ) as HTMLElement;
            const arrow = e.currentTarget.querySelector(
              ".btn-arrow"
            ) as HTMLElement;

            fill.style.transform = "translateX(0%)";
            arrow.style.transform = "translateX(4px)";
            e.currentTarget.style.color = "#FFFFFF";
          }}
          onMouseLeave={(e) => {
            const fill = e.currentTarget.querySelector(
              ".btn-fill"
            ) as HTMLElement;
            const arrow = e.currentTarget.querySelector(
              ".btn-arrow"
            ) as HTMLElement;

            fill.style.transform = "translateX(-100%)";
            arrow.style.transform = "translateX(0px)";
            e.currentTarget.style.color = "#45A98F";
          }}
        >
          {/* Sliding Fill */}
          <span
            className="btn-fill"
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "#45A98F",
              transform: "translateX(-100%)",
              transition: "transform 0.4s ease",
              zIndex: -1,
            }}
          />

          Contact
          <span
            className="btn-arrow"
            style={{
              display: "inline-block",
              transition: "transform 0.3s ease",
            }}
          >
            →
          </span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
