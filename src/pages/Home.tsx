import HeroSection from "../components/HeroSection";
import VintageProjectorSection from "../components/VintageProjectorSection";
import FeaturedProjectsSection from "../components/FeaturedProjectsSection";
import SectionCutTitle from "../components/SectionCutTitle";
import ClientLogosMarquee from "../components/ClientLogosMarquee";
import DirectorsStickySection from "../components/DirectorsStickySection";
import UpcomingMoviesSection from "../components/UpcomingMoviesSection";


export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#121212",
        color: "#F5F5F5",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {/* HERO */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* VINTAGE */}
      <section id="vintage">
        <VintageProjectorSection />
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects">
        <SectionCutTitle />
        <FeaturedProjectsSection />
      </section>

      {/* CLIENTS */}
      <section id="clients">
        <ClientLogosMarquee />
      </section>

      {/* DIRECTORS */}
      <section id="directors">
        <DirectorsStickySection />
      </section>

      {/* UPCOMING */}
      <section id="upcoming">
        <UpcomingMoviesSection />
      </section>
    </main>
  );
}
