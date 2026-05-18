
"use client";

import { motion, Variants } from "framer-motion";
import Container from "@/src/components/ui/Container";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 12, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function About() {
  return (
    <section id="about" className="py-32 border-t border-border-subtle bg-black">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
        >
          <motion.div variants={itemVariants} className="md:col-span-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
            <h2 className="text-xs font-semibold tracking-wider uppercase text-muted">
              Core Discipline
            </h2>
          </motion.div>

          <div className="md:col-span-9 space-y-16">
            
            <motion.h3 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]"
            >
              Engineering digital systems where <span className="text-muted/80">clean frontend architecture</span> meets resilient backend performance.
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-border-subtle pt-10">
              
              <motion.div variants={itemVariants} className="space-y-2">
                <h4 className="text-base font-semibold text-white tracking-tight">
                  Thoughtful Interfaces
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  Building responsive, performance optimized UIs with strict typographic systems, layout intent, and purposeful micro interactions.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <h4 className="text-base font-semibold text-white tracking-tight">
                  Scalable Systems
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  Writing type safe, modular codebases, designing solid database models, and maintaining robust, decoupled state architecture.
                </p>
              </motion.div>

            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-border-subtle pt-10">
              <motion.div variants={itemVariants}>
                <div className="text-2xl font-bold tracking-tight text-white">Full-Stack</div>
                <div className="text-[11px] font-medium tracking-wider text-muted uppercase mt-0.5">Core Focus</div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <div className="text-2xl font-bold tracking-tight text-white">Next.js &amp; Flutter</div>
                <div className="text-[11px] font-medium tracking-wider text-muted uppercase mt-0.5">Primary Engines</div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="text-2xl font-bold tracking-tight text-white">TypeScript</div>
                <div className="text-[11px] font-medium tracking-wider text-muted uppercase mt-0.5">Development Rule</div>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </Container>
    </section>
  );
}