import Container from "@/src/components/ui/Container";
import SectionTitle from "@/src/components/ui/SectionTitle";

import { skills } from "@/src/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <Container>
        <SectionTitle subtitle="Expertise" title="Skills & Technologies" />

        <div className="flex flex-wrap gap-4 max-w-4xl">
          {skills.map((skill) => (
            <div
              key={skill}
              className="
                glass-card
                px-5
                py-3
                text-sm
                text-zinc-300
                transition-all
                duration-300
                hover:translate-y-[-2px]
                hover:border-white/15
              "
            >
              {skill}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
