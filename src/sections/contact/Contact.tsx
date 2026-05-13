import Container from "@/src/components/ui/Container";
import SectionTitle from "@/src/components/ui/SectionTitle";
import Button from "@/src/components/ui/Button";

import { personalInfo } from "@/src/data/personal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <Container>
        <div className="max-w-4xl">
          <SectionTitle
            subtitle="Contact"
            title="Let’s build something meaningful together."
          />

          <p
            className="
              text-zinc-400
              text-lg
              md:text-xl
              leading-relaxed
              mb-10
              max-w-2xl
            "
          >
            I’m currently open to internship opportunities, collaborations, and
            meaningful projects.
          </p>

          <a href={`mailto:${personalInfo.email}`}>
            <Button>Get In Touch</Button>
          </a>
        </div>
      </Container>
    </section>
  );
}
