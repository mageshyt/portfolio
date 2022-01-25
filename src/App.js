import "./App.css";
import AboutMe from "./Components/About_Me";
import Contact from "./Components/Contact";
import Footer from "./Components/footer.jsx";
import Intro from "./Components/Intro";
import ProjectContainer from "./Components/ProjectContainer";
// import Projects from "./Components/Projects";

import React, { useState, useEffect } from "react";
function App() {
  // current window height and width;
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // window resize event
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    });
  });

  return (
    <div className="App">
      <Intro />
      <AboutMe />
      <ProjectContainer WidthSize={windowWidth} />
      {/* <ProjectContainer /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
