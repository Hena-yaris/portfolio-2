"use client";

import { motion, Variants } from "framer-motion";
import Container from "@/src/components/ui/Container";
import { skillsData } from "@/src/constants/skills";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 border-t border-border-subtle bg-black"
    >
      <Container>
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="md:col-span-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
            <h2 className="text-xs font-semibold tracking-wider uppercase text-muted">
              Technical Stack
            </h2>
          </div>

          <div className="md:col-span-9">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white max-w-xl">
              My best selection of modern frameworks, languages, and tools.
            </h3>
          </div>
        </div>

        {/* Technical Matrix Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillsData.map((group) => (
            <motion.div
              key={group.index}
              variants={itemVariants}
              className="p-6 rounded-xl border border-border-subtle bg-[#050505] hover:border-accent/20 transition-colors duration-300 flex flex-col justify-between h-full group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-muted tracking-wider">
                    MODULE {group.index}
                  </span>
                  <div className="h-1 w-1 rounded-full bg-border-subtle group-hover:bg-accent transition-colors duration-300" />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    {group.category}
                  </h4>
                  <p className="text-xs text-muted mt-1 leading-relaxed">
                    {group.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-8">
                {group.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-foreground/80 bg-background border border-border-subtle/50 px-2 py-1 rounded hover:text-white hover:border-muted transition-colors duration-150"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
