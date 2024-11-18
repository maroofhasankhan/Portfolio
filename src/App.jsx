import React from "react";
//style
import GlobalStyle from "./components/GlobalStyle";
//components
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import { Routes, Route ,useLocation} from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import Resume from './pages/Resume';
//animation
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  console.log(location);
  
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location.pathname} key={location.pathname}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/work/:id" element={<MovieDetail />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </AnimatePresence>
      <Footer/>
      <ScrollTop />
    </div>
  );
}

export default App;
