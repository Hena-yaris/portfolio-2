import Container from "@/src/components/ui/Container";
import SectionTitle from "@/src/components/ui/SectionTitle";

import { personalInfo } from "@/src/data/personal";

export default function About() {
  return (
    <section id="about" className="py-32">
      <Container>
        <div className="max-w-4xl">
          <SectionTitle
            subtitle="About"
            title="Thoughtful design meets scalable development."
          />

          <p
            className="
              text-xl
              md:text-2xl
              text-zinc-400
              leading-relaxed
            "
          >
            {personalInfo.about}
          </p>
        </div>
      </Container>
    </section>
  );
}
