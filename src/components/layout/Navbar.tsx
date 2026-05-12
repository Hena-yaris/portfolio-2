import Container from "../ui/Container";
import { navigationLinks } from "@/src/data/navigation";

export default function Navbar() {
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
            h-20
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
        </div>
      </Container>
    </header>
  );
}
