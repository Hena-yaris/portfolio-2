
import About from "../sections/about/About";
import Contact from "../sections/contact/Contact";
import Hero from "../sections/hero/Hero";
import Skills from "../sections/skills/Skills";
import Works from "../sections/works/Works";

export default function Home() {

  
  return (
     <main>
          <Hero/>
          <About/>
          <Works/>
          <Skills/>
          <Contact/>
     </main>
  );
}
