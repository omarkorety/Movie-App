import "./App.css";
import HeroSection from "./components/heroSection/HeroSection";
import AboutMe from "./components/AboutMe/AboutMe";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
