import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import SectionDivider from "./components/SectionDivider";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import KeySills from "./pages/KeySkills";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <div id="Home">
        <Home />
      </div>
      <SectionDivider />
      <div id="About">
        <About />
      </div>
      <SectionDivider />
      <div id="Education">
        <Education />
      </div>
      <SectionDivider />
      <div id="Experience">
        <Experience />
      </div>
      <SectionDivider />
      <div id="Projects">
        <Projects />
      </div>
      <SectionDivider />
      <div id="Key Skills">
        <KeySills />
      </div>
      <SectionDivider />
      <div id="Contact">
        <Contact />
      </div>
      <SectionDivider />
    </div>
  );
};

export default App;
