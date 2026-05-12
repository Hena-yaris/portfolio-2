import Container from "@/src/components/ui/Container";
import Button from "@/src/components/ui/Button";
import { personalInfo } from "@/src/data/personal";

export default function Hero() {
  return (
    <section
      className="
        min-h-screen
        flex
        items-center
      "
    >
      <Container>
        <div className="max-w-4xl">
          {/* Small Intro */}
          <p
            className="
              text-sm
              uppercase
              tracking-[0.2em]
              text-zinc-500
              mb-6
            "
          >
            {personalInfo.title}
          </p>

          {/* Main Heading */}
          <h1
            className="
              text-5xl
              md:text-7xl
              font-semibold
              tracking-tight
              leading-[1]
              mb-8
            "
          >
            Hi, I’m {personalInfo.name}.
          </h1>

          {/* Description */}
          <p
            className="
              text-lg
              md:text-xl
              text-zinc-400
              leading-relaxed
              max-w-2xl
              mb-10
            "
          >
            {personalInfo.description}
          </p>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button>View Projects</Button>

            <button
              className="
                text-sm
                text-zinc-300
                hover:text-white
                transition-colors
              "
            >
              Contact Me
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
