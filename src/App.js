import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import CaseStudies from "./pages/case-studies/casestudies";
import Resume from "./pages/resume/resume";
import About from "./pages/about/about";
import OddsAndEnds from "./pages/odds-and-ends/oddsandends";
import CaseStudy1 from "./pages/case-studies-pages/case-study-1";
import CaseStudy2 from "./pages/case-studies-pages/case-study-2";
import CaseStudy3 from "./pages/case-studies-pages/case-study-3";
import PhonicsSystem from "./pages/odds-and-ends-pages/phonics-system";
import Rabbit from "./pages/odds-and-ends-pages/rabbitBicycle";
import JapanPostcards from "./pages/odds-and-ends-pages/japanPostcards";
import Newsletter from "./pages/odds-and-ends-pages/newsletter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/casestudies" element={<CaseStudies />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/oddsandends" element={<OddsAndEnds />} />
        <Route path="/casestudy1" element={<CaseStudy1 />} />
        <Route path="/casestudy2" element={<CaseStudy2 />} />
        <Route path="/casestudy3" element={<CaseStudy3 />} />
        <Route path="/phonicsproject" element={<PhonicsSystem />} />
        <Route path="/rabbitproject" element={<Rabbit />} />
        <Route path="/japanpostcards" element={<JapanPostcards />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
