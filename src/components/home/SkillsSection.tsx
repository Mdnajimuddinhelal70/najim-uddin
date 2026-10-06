import {
  Code2,
  Database,
  LayoutDashboard,
  ServerCog,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and accessible user interfaces.",
    icon: LayoutDashboard,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Backend Development",
    description: "Creating APIs and server-side application logic.",
    icon: ServerCog,
    skills: ["Node.js", "Express.js", "REST API", "Authentication", "Zod"],
  },
  {
    title: "Database",
    description: "Designing and working with application data.",
    icon: Database,
    skills: ["MongoDB", "Mongoose", "Data Modeling"],
  },
  {
    title: "Tools & Workflow",
    description: "Tools that help me build and maintain projects.",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Bun", "Vercel", "Render"],
  },
];

const SkillsSection = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <Code2 className="size-5 text-rose-600" />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600">
              Skills
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            A stack built for real-world applications.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            I use a modern development stack to create reliable interfaces,
            APIs, databases, and complete web applications.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="group rounded-3xl border border-slate-200 bg-[#fafaf9] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-xl hover:shadow-slate-950/5 sm:p-7"
              >
                {/* Icon + Title */}
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white transition-transform duration-300 group-hover:scale-105">
                    <Icon className="size-5" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                      {group.title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-slate-500">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 transition-colors duration-200 group-hover:border-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
