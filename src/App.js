import "./App.css";
import AboutMe from "./Components/About_Me";
import Contact from "./Components/Contact";
import Intro from "./Components/Intro";
import ProjectContainer from "./ProjectContainer";
// import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <Intro />
      <AboutMe />
      <ProjectContainer />

      <Contact />
    </div>
  );
}

export default App;
