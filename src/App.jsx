import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contacts from "./components/Contacts/Contacts";
import EducationalQualification from "./components/EducationalQualification/EducationalQualification";
import Footer from "./components/Footer/Footer";
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
      <EducationalQualification></EducationalQualification>
      <Projects></Projects>
      <Contacts></Contacts>
      <Footer></Footer>
    </>
  );
}

export default App;
