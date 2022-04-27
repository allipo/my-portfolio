import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import CaseStudies from "./pages/case-studies/casestudies";
import Resume from "./pages/resume/resume";
import About from "./pages/about/about";
import OddsAndEnds from "./pages/odds-and-ends/oddsandends";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/casestudies" element={<CaseStudies />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/oddsandends" element={<OddsAndEnds />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
