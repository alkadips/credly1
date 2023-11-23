import {  HashRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import Footer from "./Footer";
import EmiCalc from "./EmiCalc";
import Faqs from "./Faqs";
import About from "./About";
import TermsCon from "./TermsCon";
import Contact from "./Contact";
import Personel from "./Personel";
import Blog from "./Blog";
import DuplicateCusLead from "./DuplicateCusLead";
import Privacy2 from "./Privecy2";

function App() {
  return (
    <div className="main-wrapper">
      <HashRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/personelloan" element={<Personel />} />
          <Route path="/emicalculator" element={<EmiCalc />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<TermsCon />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/duplicate" element={<DuplicateCusLead />} />
          <Route path="/privecy" element={<Privacy2 />} />

        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}
export default App;
