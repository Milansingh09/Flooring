import logo from "../assets/logobg.png"; // 🔁 update with your actual logo path
import { Facebook, Twitter, Rss, Github, Dribbble } from "lucide-react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#F1EBE1",
        padding: "4rem 6% 2rem",
        borderTop: "1px solid rgba(1,104,84,0.15)",
      }}
    >
      {/* TOP GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr",
          gap: "2rem",
          alignItems: "flex-start",
        }}
      >
        {/* BRAND */}
        <div>
          <img
            src={logo}
            alt="Durell Logo"
            style={{
              height: "80px",
              marginBottom: "0.8rem",
            }}
          />
          <p
            className="body-font"
            style={{
              fontSize: "0.9rem",
              color: "#4A5A56",
              maxWidth: "220px",
              lineHeight: "1.6",
            }}
          >
            Premium SPC flooring engineered for durability, elegance, and timeless design.
          </p>
        </div>

        {/* COLUMN 1 */}
        <div>
          <h4 className="heading-font" style={{ fontSize: "0.9rem", marginBottom: "0.8rem" }}>
            Weekly Themes
          </h4>
          <ul className="body-font" style={listStyle}>
            <li><a href="#">Pre-sale FAQs</a></li>
            <li><a href="#">Submit a Ticket</a></li>
          </ul>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h4 className="heading-font" style={{ fontSize: "0.9rem", marginBottom: "0.8rem" }}>
            Services
          </h4>
          <ul className="body-font" style={listStyle}>
            <li><a href="#">Theme Tweak</a></li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h4 className="heading-font" style={{ fontSize: "0.9rem", marginBottom: "0.8rem" }}>
            Showcase
          </h4>
          <ul className="body-font" style={listStyle}>
            <li><a href="#">Widgetkit</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div>
          <h4 className="heading-font" style={{ fontSize: "0.9rem", marginBottom: "0.8rem" }}>
            About Us
          </h4>
          <ul className="body-font" style={listStyle}>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Affiliates</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div
        style={{
          margin: "3rem 0 2rem",
          height: "1px",
          background: "rgba(1,104,84,0.15)",
        }}
      />

      {/* SOCIAL ICONS */}
<div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "1rem",
  }}
>
  {[Facebook, Twitter, Rss, Dribbble].map((Icon, i) => (
    <div
      key={i}
      style={{
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        border: "1px solid rgba(1,104,84,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#1F2D2A",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#45A98F";
        e.currentTarget.style.color = "#ffffff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.color = "#1F2D2A";
      }}
    >
      <Icon size={16} />
    </div>
  ))}
</div>


      {/* COPYRIGHT */}
      <div
        className="body-font"
        style={{
          textAlign: "center",
          fontSize: "0.8rem",
          color: "#4A5A56",
        }}
      >
        © {new Date().getFullYear()} Durell Flooring. All rights reserved.
      </div>
    </footer>
  );
};

const listStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
};


export default Footer;
