import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import TeamSection from "./pages/TeamSection";
import FaQSection from "./pages/FaQSection";
import Divider from "./components/Divider";
import ActiveContributions from "./pages/ActiveContribution";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import AllMembers from "./pages/AllMembers";

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Pearl Mist Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 60% 70% at 50% 0%, rgb(226, 232, 240), transparent 40%),rgba(10, 10, 10, 0.75)",
        }}
      />
      
      {/* Show Hero only on home page */}
      {isHomePage && <Hero />}
      
      <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <ActiveContributions/>
              <About/>
              <TeamSection />
              <FaQSection />
              <Footer />
            </>
          } />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/all-members" element={
            <>
              <TeamSection className="pt-100" />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="px-40">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;