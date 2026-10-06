import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Madrasa Management System",
    description:
      "A full-stack management platform for managing teachers, students, managers, authentication, and administrative operations.",
    category: "Full Stack Web Application",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    href: "/projects/madrasa-management-system",
    github: "#",
    live: "#",
  },
  {
    title: "Madrasa Website",
    description:
      "A modern and responsive institutional website designed to present the madrasa, education programs, teachers, students, and important information.",
    category: "Frontend / Full Stack",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "/projects/madrasa-website",
    github: "#",
    live: "#",
  },
  {
    title: "The Jannath Foundation UK",
    description:
      "A professional bilingual website for a UK-based charitable foundation with responsive pages and a clean user-focused interface.",
    category: "Institutional Website",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "/projects/the-jannath-foundation-uk",
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section className="bg-[#fafaf9]">
      <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
        {/* Section Header */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600">
              Selected Work
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Projects I&apos;ve built.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              A selection of projects where I&apos;ve applied my development
              skills to solve practical problems and build complete web
              experiences.
            </p>
          </div>

          <Link
            href="/projects"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-slate-950"
          >
            View all projects
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Projects */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-950/5"
            >
              {/* Project Visual */}
              <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-slate-950">
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 size-40 rounded-full bg-rose-600/20 blur-3xl"
                />

                <div
                  aria-hidden="true"
                  className="absolute -bottom-20 -left-16 size-48 rounded-full bg-white/5 blur-3xl"
                />

                <div className="relative text-center">
                  <p className="text-4xl font-bold tracking-tight text-white/90">
                    {project.title
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 3)}
                  </p>

                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                    {project.category}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-auto flex items-center gap-4 pt-7">
                  <Link
                    href={project.href}
                    className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-slate-950"
                  >
                    View project
                    <ArrowUpRight className="size-4 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </Link>

                  <span className="h-4 w-px bg-slate-200" />

                  <Link
                    href={project.github}
                    aria-label={`${project.title} GitHub repository`}
                    className="text-slate-400 transition-colors hover:text-slate-950"
                  >
                    <FaGithub className="size-4" />
                  </Link>

                  <Link
                    href={project.live}
                    aria-label={`${project.title} live website`}
                    className="text-slate-400 transition-colors hover:text-slate-950"
                  >
                    <ExternalLink className="size-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;