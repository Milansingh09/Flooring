import React, { } from "react";
import { motion } from "framer-motion";
import {
  Film,
  Github,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";

/* ===== COLORS ===== */
const COLORS = {
  bgMain: "#121212",
  bgCard: "#181818",
  textPrimary: "#F5F5F5",
  textSecondary: "#9A9A9A",
  border: "rgba(255,255,255,0.08)",
  accent: "#FFD400",
  accentSoft: "rgba(255,212,0,0.18)",
};

/* ===== BACKGROUND PATTERN ===== */
const FooterPattern = () => (
  <svg
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      opacity: 0.55,
    }}
    viewBox="0 0 1400 900"
    preserveAspectRatio="xMidYMid slice"
  >
    <g
      fill="none"
      stroke="#FFD400"
      strokeWidth="1"
      strokeDasharray="4 6"
      opacity="0.25"
    >
      <path d="M0 120 H260 Q320 120 320 180 V260" />
      <path d="M560 140 H780 Q840 140 840 200 V300" />
      <path d="M0 360 H300 Q360 360 360 420 V520" />
      <path d="M480 420 H720 Q780 420 780 480 V620" />
    </g>

    <g fill="#FFD400" opacity="0.45">
      <circle cx="260" cy="120" r="3" />
      <circle cx="320" cy="260" r="3" />
      <circle cx="780" cy="620" r="3" />
      <circle cx="620" cy="500" r="3" />
    </g>
  </svg>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        position: "relative",
        backgroundColor: COLORS.bgMain,
        borderTop: `1px solid ${COLORS.border}`,
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <FooterPattern />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at top, ${COLORS.accentSoft}, transparent 65%)`,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "96px 24px 48px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "64px",
          }}
        >
          {/* BRAND */}
          <div>
            <motion.div
              style={{ display: "flex", alignItems: "center", gap: "12px" }}
              whileHover={{ scale: 1.05 }}
            >
              <Film size={34} color={COLORS.accent} />
              <span
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: COLORS.textPrimary,
                }}
              >
                MediaHouse
              </span>
            </motion.div>

            <p
              style={{
                marginTop: "20px",
                fontSize: "0.9rem",
                lineHeight: 1.6,
                color: COLORS.textSecondary,
              }}
            >
              A cinematic media company delivering high-impact advertising across
              cinema, transit, and outdoor media.
            </p>

            <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Github, href: "#" },
                { icon: Mail, href: "mailto:hello@mediahouse.com" },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "12px",
                    borderRadius: "10px",
                    backgroundColor: COLORS.bgCard,
                    border: `1px solid ${COLORS.border}`,
                    color: COLORS.textSecondary,
                  }}
                  whileHover={{
                    scale: 1.1,
                    color: COLORS.accent,
                    boxShadow: `0 0 16px ${COLORS.accentSoft}`,
                  }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 style={{ color: COLORS.textPrimary, marginBottom: "16px" }}>
              Explore
            </h4>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
              <li><a href="#hero" style={{ color: COLORS.textSecondary }}>Top</a></li>
              <li><a href="#projects" style={{ color: COLORS.textSecondary }}>Featured Projects</a></li>
              <li><a href="#directors" style={{ color: COLORS.textSecondary }}>Directors</a></li>
              <li><a href="#upcoming" style={{ color: COLORS.textSecondary }}>Upcoming Movies</a></li>
              
              <li><a href="#Vintage" style={{ color: COLORS.textSecondary }}>Demo</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: COLORS.textPrimary, marginBottom: "16px" }}>
              Contact
            </h4>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
              <li><a href="mailto:media@mediahouse.com" style={{ color: COLORS.textSecondary }}>Media Enquiries</a></li>
              <li><a href="mailto:partners@mediahouse.com" style={{ color: COLORS.textSecondary }}>Partnerships</a></li>
              <li><a href="mailto:careers@mediahouse.com" style={{ color: COLORS.textSecondary }}>Careers</a></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          style={{
            marginTop: "64px",
            paddingTop: "24px",
            borderTop: `1px solid ${COLORS.border}`,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            fontSize: "0.8rem",
            color: COLORS.textSecondary,
          }}
        >
          <span>© {currentYear} MediaHouse. All rights reserved.</span>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="#" style={{ color: COLORS.textSecondary }}>Privacy</a>
            <a href="#" style={{ color: COLORS.textSecondary }}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
