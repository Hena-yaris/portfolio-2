"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/src/components/ui/Container";
import { projectsData } from "@/src/constants/projects";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Works() {
  return (
    <section
      id="works"
      className="py-32 border-t border-border-subtle bg-black"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="md:col-span-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
            <h2 className="text-xs font-semibold tracking-wider uppercase text-muted">
              Selected Projects
            </h2>
          </div>
          <div className="md:col-span-9">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white max-w-xl">
              Production ready{" "}
              <span className="text-muted/80">systems through modular</span> ,
              feature based architecture.
            </h3>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="space-y-16 md:space-y-24"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 pt-8 border-t border-border-subtle/60 group"
            >
              <div className="md:col-span-3 space-y-2">
                <span className="text-xs font-mono text-muted block">
                  Project {project.id}
                </span>
                {project.metric && (
                  <div className="inline-block text-xs font-medium text-accent border border-accent/20 bg-accent/5 px-2.5 py-0.5 rounded-full">
                    {project.metric}
                  </div>
                )}
              </div>

              <div className="md:col-span-6 space-y-4">
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-xs font-mono text-muted uppercase mt-0.5 tracking-wider">
                    {project.tagline}
                  </p>
                </div>
                <p className="text-sm md:text-base text-muted leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-foreground/80 bg-card border border-border-subtle px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-3 flex items-start md:justify-end gap-3 pt-2 md:pt-0">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted hover:text-white border border-border-subtle px-3 py-1.5 rounded-full bg-card/40 transition-colors duration-200"
                >
                  {/* <Github size={12} /> Source */}
                  Source
                </a>

                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-background bg-white hover:bg-neutral-200 px-3 py-1.5 rounded-full transition-colors duration-200"
                  >
                    Demo <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
