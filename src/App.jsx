
import Navbar from "./components/Navbar/Navbar.jsx";
import '@fortawesome/fontawesome-free/css/all.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Services from "./pages/Services/Services.jsx";
import Experience from "./pages/Experiences/Experiences.jsx";



function App() {
  return (
  <div className="app">
    <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>

  </div>
  )
}

export default App;
