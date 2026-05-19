"use client";

import { motion, Variants } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Container from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";

import { personalInfo } from "@/src/constants/personal";

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

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[80vh] flex items-center justify-center pt-20 pb-32 overflow-hidden"
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm font-medium tracking-widest text-accent uppercase"
          >
            {personalInfo.title}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-white"
          >
            I'm {personalInfo.name}. <br />
            <span className="text-gradient">{personalInfo.tagline}</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            onClick={() =>
              document
                .getElementById("works")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center justify-center gap-4 pt-4"
          >
            <Button size="lg" className="flex items-center gap-2 group">
              Explore Work
              <ArrowDownRight
                size={16}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </Button>

            <div className="flex items-center gap-1 border-l border-border-subtle pl-4 h-10">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-muted hover:text-foreground transition-colors duration-200"
                aria-label="GitHub"
              >
                {/* <Github size={18} /> */}
                Github
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-muted hover:text-foreground transition-colors duration-200"
                aria-label="LinkedIn"
              >
                {/* <Linkedin size={18} /> */}
                LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
