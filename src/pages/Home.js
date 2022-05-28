import React from "react";

import { Introduction } from "../components/home/Introduction";
import { About } from "../components/home/About";
import { Experience } from "../components/home/Experience";
import Projects from "../components/home/Projects";
import GetInTouch from "../components/home/GetInTouch";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <div>
      <Introduction />
      <About />
      <Experience />
      <Projects />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
