


export default function ProjectCard({ project }: any) {
  return (
    <div
      className="
        glass-card
        p-8
        transition-all
        duration-300
        hover:translate-y-[-4px]
        hover:border-white/15
      "
    >
      {/* Title */}
      <h3
        className="
          text-2xl
          font-semibold
          tracking-tight
          mb-4
        "
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        className="
          text-zinc-400
          leading-relaxed
          mb-6
        "
      >
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.technologies.map((tech:any) => (
          <span
            key={tech}
            className="
              text-xs
              px-3
              py-1
              rounded-full
              border
              border-white/10
              text-zinc-300
            "
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-6">
        <a
          href={project.github}
          className="
            text-sm
            text-zinc-300
            hover:text-white
            transition-colors
          "
        >
          GitHub
        </a>

        <a
          href={project.live}
          className="
            text-sm
            text-zinc-300
            hover:text-white
            transition-colors
          "
        >
          Live Preview
        </a>
      </div>
    </div>
  );
}
