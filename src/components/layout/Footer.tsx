import Container from "@/src/components/ui/Container";

import { Menu, Circle } from "lucide-react";

import { personalInfo } from "@/src/data/personal";

export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-white/10
        py-10
      "
    >
      <Container>
        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-6
          "
        >
          {/* Left */}
          <p
            className="
              text-sm
              text-zinc-500
            "
          >
            © 2026 Henok. Built with Next.js.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-5">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-zinc-400
                hover:text-white
                transition-colors
              "
              aria-label="GitHub Profile"
            >
              <Menu size={18} />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-zinc-400
                hover:text-white
                transition-colors
              "
              aria-label="LinkedIn Profile"
            >
              <Circle size={18} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
