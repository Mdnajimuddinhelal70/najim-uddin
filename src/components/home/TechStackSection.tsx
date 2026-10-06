import {
  Braces,
  Database,
  Globe,
  Layers3,
  Server,
  Terminal,
} from "lucide-react";

const technologies = [
  {
    name: "Next.js",
    description: "Full-stack React framework",
    icon: Globe,
  },
  {
    name: "React",
    description: "Modern UI development",
    icon: Layers3,
  },
  {
    name: "TypeScript",
    description: "Type-safe development",
    icon: Braces,
  },
  {
    name: "Node.js",
    description: "Backend development",
    icon: Server,
  },
  {
    name: "MongoDB",
    description: "Database & data modeling",
    icon: Database,
  },
  {
    name: "Git",
    description: "Version control",
    icon: Terminal,
  },
];

const TechStackSection = () => {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600">
              Tech Stack
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Tools I use to build
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500">
            A practical stack focused on building fast, scalable, and
            maintainable web applications.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <div
                key={technology.name}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-lg hover:shadow-slate-950/5"
              >
                {/* Icon */}
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 transition-colors duration-300 group-hover:bg-slate-950 group-hover:text-white group-hover:ring-slate-950">
                  <Icon className="size-5" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {technology.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {technology.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
