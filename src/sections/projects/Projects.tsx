import Container from "@/src/components/ui/Container";
import SectionTitle from "@/src/components/ui/SectionTitle";
import ProjectCard from "@/src/components/shared/ProjectCard";

import { projects } from "@/src/data/projects";
export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <Container>
        <SectionTitle subtitle="Selected Work" title="Projects" />

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8
          "
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
