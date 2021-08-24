import "./App.css";
import AboutMe from "./Components/About_Me";
import Contact from "./Components/Contact";
import Footer from "./Components/footer.jsx";
import Intro from "./Components/Intro";
import ProjectContainer from "./Components/ProjectContainer";
// import Projects from "./Components/Projects";
import Test from "./Components/Test";
function App() {
  return (
    <div className="App">
      <Intro />
      <AboutMe />
      <Test />
      {/* <ProjectContainer /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
