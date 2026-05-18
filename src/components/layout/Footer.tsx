

"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Container from "../ui/Container";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-border-subtle bg-black py-8 mt-auto">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted/60">
          <div className="tracking-wide">
            &copy; {new Date().getFullYear()} Henok. All rights reserved.
          </div>

          <div className="hidden md:block tracking-wide">
            <span className="text-foreground/80 font-medium">Next.js 15</span>{" "}
            &amp;{" "}
            <span className="text-foreground/80 font-medium">Tailwind v4</span>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2, color: "#FFFFFF" }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-1.5 hover:text-white transition-colors duration-200 group py-1 tracking-wider uppercase font-medium cursor-pointer"
          >
            Back to top
            <ArrowUp
              size={12}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </motion.button>
        </div>
      </Container>
    </footer>
  );
}