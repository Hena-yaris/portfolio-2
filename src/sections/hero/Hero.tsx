
"use client";

import Container from "@/src/components/ui/Container";
import Button from "@/src/components/ui/Button";
import { personalInfo } from "@/src/data/personal";

import { motion } from "framer-motion";

import { fadeUp, staggerContainer } from "@/src/lib/animations";

export default function Hero() {
  return (
    <section
      className="
        min-h-[110vh]
        flex
        items-center
      "
    >
      <Container>
        <motion.div
          className="max-w-4xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Small Intro */}
          <motion.p
            className="
              text-sm
              text-zinc-300
              uppercase
              tracking-[0.2em]
              mb-6
            "
            variants={fadeUp}
          >
            {personalInfo.title}
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tight leading-[1] mb-8"
            variants={fadeUp}
          >
            Hi, I’m {personalInfo.name}.
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-2xl font-light leading-relaxed max-w-2xl mb-10 text-zinc-400"
            variants={fadeUp}
          >
            {personalInfo.description}
          </motion.p>

          {/* Actions */}
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <Button>View Projects</Button>

            <button
              className="
                text-sm
                
                transition-colors
              "
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
