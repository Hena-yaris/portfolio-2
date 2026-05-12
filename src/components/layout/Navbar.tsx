"use client";
import { useState } from "react";

import Container from "../ui/Container";
import { navigationLinks } from "@/src/data/navigation";

import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-md
        border-b
        border-white/10
        bg-black/30
      "
    >
      <Container>
        <div
          className="
            flex
            items-center
            justify-between
            h-24
          "
        >
          {/* Logo */}
          <a
            href="/"
            className="
              text-lg
              font-semibold
              tracking-tight
            "
          >
            Henok
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
                  text-sm
                  text-zinc-300
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
    md:hidden
    text-zinc-300
  "
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="
                md:hidden
                pb-6
                animate-in
                fade-in
                duration-300
              "
          >
            <nav
              className="
                  flex
                  flex-col
                  gap-4
                "
            >
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
            text-zinc-300
            hover:text-white
            transition-colors
          "
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
