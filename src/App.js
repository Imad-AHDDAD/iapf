import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroPage from "./components/hero/HeroPage";
import DeveloperHome from "./components/developer-portfolio/DeveloperHome";
import Education from "./components/developer-portfolio/Education";
import Footer from "./common/footer/Footer"
import Skills from "./components/developer-portfolio/Skills";
import Experiences from "./components/developer-portfolio/Experiences";
import Projects from "./components/developer-portfolio/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Cv from "./components/cv/Cv";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/imad-as-developer" element={<DeveloperHome />} />
        <Route path="/imad-as-developer/education" element={<Education />} />
        <Route path="/imad-as-developer/skills" element={<Skills />} />
        <Route path="/imad-as-developer/experiences" element={<Experiences />} />
        <Route path="/imad-as-developer/projects" element={<Projects />} />
        <Route path="/about-imad-ahddad" element={<About />} />
        <Route path="/contact-imad-ahddad" element={<Contact />} />
        <Route path="/imad-as-developer-cv" element={<Cv />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;