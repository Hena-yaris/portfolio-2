"use client";

import { motion } from "framer-motion";

import { staggerContainer, fadeUp } from "@/src/lib/animations";

import Container from "@/src/components/ui/Container";
import SectionTitle from "@/src/components/ui/SectionTitle";
import ProjectCard from "@/src/components/shared/ProjectCard";

import { projects } from "@/src/data/projects";
export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <Container>
        <SectionTitle subtitle="Selected Work" title="Projects" />

        <motion.div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8
          "
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeUp}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
