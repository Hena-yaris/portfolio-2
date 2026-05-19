
import About from "../features/sections/about/About";
import Contact from "../features/sections/contact/Contact";
import Hero from "../features/sections/hero/Hero";
import Skills from "../features/sections/skills/Skills";
import Works from "../features/sections/works/Works";

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
