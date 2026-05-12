import Container from "@/src/components/ui/Container";
import SectionTitle from "@/src/components/ui/SectionTitle";

import { skills } from "@/src/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-32">
      <Container>
        <SectionTitle subtitle="Expertise" title="Skills & Technologies" />

        <div className="flex flex-wrap gap-4 max-w-4xl">
          {skills.map((skill) => (
            <div
              key={skill}
              className="
                px-5
                py-3
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                text-zinc-300
                text-sm
                transition-all
                duration-300
                hover:border-white/20
                hover:bg-white/[0.05]
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
