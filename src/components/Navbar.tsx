import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Clients", href: "#clients" },
  { label: "Directors", href: "#directors" },
  { label: "Upcoming", href: "#upcoming" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      navItems.forEach((item) => {
        const el = document.querySelector(item.href);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(item.label);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        backgroundColor: scrolled
          ? "rgba(18,18,18,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background-color 0.4s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "16px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#ffffff",
        }}
      >
        {/* LOGO */}
        <a
          href="#hero"
          style={{
            fontSize: "22px",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textDecoration: "none",
            color: "#ffffff",
          }}
        >
          MEDIA
          <span style={{ color: "#FFD400" }}>HOUSE</span>
        </a>

        {/* NAV LINKS */}
        <ul
          className="navbar-links"
          style={{
            listStyle: "none",
            gap: "40px",
            fontSize: "11px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            margin: 0,
            padding: 0,
          }}
        >
          {navItems.map((item) => (
            <li
              key={item.label}
              onMouseEnter={() => setHovered(item.label)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative",
                cursor: "pointer",
                paddingBottom: "6px",
              }}
            >
              <a
                href={item.href}
                style={{
                  textDecoration: "none",
                  color:
                    active === item.label
                      ? "#FFD400"
                      : "#ffffff",
                  transition: "color 0.3s ease",
                }}
              >
                {item.label}
              </a>

              {/* UNDERLINE */}
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  height: "1px",
                  width:
                    hovered === item.label || active === item.label
                      ? "100%"
                      : "0%",
                  backgroundColor: "#FFD400",
                  transition: "width 0.3s ease",
                }}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* RESPONSIVE VISIBILITY */}
      <style>
        {`
          .navbar-links {
            display: none;
          }

          @media (min-width: 768px) {
            .navbar-links {
              display: flex;
            }
          }
        `}
      </style>
    </motion.nav>
  );
}
