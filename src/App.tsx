import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="bg-[#121212] text-[#F5F5F5] overflow-x-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <Home />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
