import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import Footer from "./components/Footer"; // Import the Footer component
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/:id" element={<ProjectPage />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </div>
        <Footer /> {/* Add the Footer component here */}
      </Router>
    </div>
  );
}

export default App;