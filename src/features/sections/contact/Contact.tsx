
"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Mail, Copy, Check} from "lucide-react";
import Container from "@/src/components/ui/Container";
import { personalInfo } from "@/src/data/personal";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-32 border-t border-border-subtle bg-black"
    >
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeUpVariants}
          className="max-w-3xl mx-auto space-y-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start text-left">
            <div className="md:col-span-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
              <h2 className="text-xs font-semibold tracking-wider uppercase text-muted">
                Connect
              </h2>
            </div>
            <div className="md:col-span-9">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white max-w-xl">
                Let's build something intentional.
              </h3>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-border-subtle bg-[#050505] flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl mx-auto group hover:border-neutral-800 transition-colors duration-300">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="p-2.5 rounded-lg bg-neutral-900 text-muted group-hover:text-accent transition-colors duration-300">
                <Mail size={18} />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-mono text-muted uppercase tracking-wider">
                  Direct Mail
                </p>
                <p className="text-sm font-medium text-white select-all">
                  {personalInfo.email}
                </p>
              </div>
            </div>

            <button
              onClick={copyEmailToClipboard}
              className="w-full sm:w-auto flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-wider px-4 py-2.5 rounded-xl bg-white text-black hover:bg-neutral-200 active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={14} /> Copied!
                </>
              ) : (
                <>
                  <Copy size={14} /> Copy Address
                </>
              )}
            </button>
          </div>

          <div className="text-center space-y-4 pt-4">
            <p className="text-[11px] font-medium tracking-widest text-muted uppercase">
              Digital Profiles
            </p>
            <div className="flex items-center justify-center gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted hover:text-white border border-border-subtle/60 px-4 py-2 rounded-full bg-card/30 transition-all duration-200"
              >
                {/* <Github size={13} /> */}
                 GitHub
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted hover:text-white border border-border-subtle/60 px-4 py-2 rounded-full bg-card/30 transition-all duration-200"
              >
                {/* <Linkedin size={13} /> */}
                 LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}