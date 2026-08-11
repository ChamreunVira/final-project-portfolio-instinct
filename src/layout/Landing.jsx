import Home from "../page/Home";
import About from "../page/About";
import Services from "../page/Services";
import Contact from "../page/Contact";
import Blog from "../page/Blog";

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
