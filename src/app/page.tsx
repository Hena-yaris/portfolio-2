
import Footer from "../components/layout/Footer";
import About from "../sections/about/About";
import Contact from "../sections/contact/Contact";
import Hero from "../sections/hero/Hero";
import Projects from "../sections/projects/Projects";
import Skills from "../sections/skills/Skills";

export default function Home() {

  
  return (
     <main>
          <Hero/>
          <About/>
          <Projects/>
          <Skills/>
          <Contact/>
          <Footer/>
     </main>
  );
}
