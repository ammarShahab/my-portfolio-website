import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Experience from "./components/Experience/Experience";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Experience></Experience>
      <Projects></Projects>
    </>
  );
}

export default App;
