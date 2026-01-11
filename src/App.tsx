import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Preloader from "./components/Preloader";

export default function App() {
  return (
    <>
      {/* PRELOADER (runs once) */}
      <Preloader />

      <div className="bg-[#121212] text-[#F5F5F5]">
        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <Home />

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}
