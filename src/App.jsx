import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Aboutpage from "./pages/Aboutpage";
import Contact from "./components/contact/Contact";
import Locate from "./components/locate/Locate";
import Testimonial from "./components/testimonial/Testimonial";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Root path */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
      <Testimonial />
      <Contact />
      <Locate />
      <Footer />
    </>
  );
};

export default App;
