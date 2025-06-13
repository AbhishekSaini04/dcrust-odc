import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import TeamSection from "./pages/TeamSection";
import FaQSection from "./pages/FaQSection";
import Divider from "./components/Divider";
import ActiveContributions from "./pages/ActiveContribution";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Divider />
              <ActiveContributions/>
              <About/>
              <TeamSection />
              <Divider />
              <FaQSection />
              <Footer />
            </>
          } />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
