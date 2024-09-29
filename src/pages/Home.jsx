import React from "react";
import Mains from "../components/mains/Mains";
import Services from "../components/subservice/Services";
import About from "../components/about/About";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";
import Locate from "../components/locate/Locate";
import Scripture from "../components/scripture/Scripture";

const Home = () => {
  return (
    <div>
      <Mains />
      <Scripture />
      <Services />
      <About />
    </div>
  );
};

export default Home;
