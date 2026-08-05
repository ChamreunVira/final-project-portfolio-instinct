import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Blog from "./Blog";

function Landing() {
  return (
    <>
      <Home />
      <About sectionOverride="about" />
      <About sectionOverride="skills" />
      <About sectionOverride="projects" />
      <Services />
      <Blog embedded />
      <Contact />
    </>
  );
}

export default Landing;
