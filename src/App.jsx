import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import TeamSection from "./pages/TeamSection";
import FaQSection from "./pages/FaQSection";
import Divider from "./components/Divider";
import ActiveContributions from "./pages/ActiveContribution";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="px-40">
      <BrowserRouter>
        <div className="min-h-screen w-full relative bg-black">
          {/* Pearl Mist Background with Top Glow */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "radial-gradient(ellipse 60% 70% at 50% 0%, rgb(226, 232, 240), transparent 40%),rgba(10, 10, 10, 0.75)",
            }}
          />
          
          <Hero />
          <div className="relative z-10">
            <Navbar />
            <Routes>
              <Route path="/" element={
                <>
                  
                  {/* <Divider /> */}
                  <ActiveContributions/>
                  <About/>
                  <TeamSection />
                  {/* <Divider /> */}
                  <FaQSection />
                  <Footer />
                </>
              } />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;