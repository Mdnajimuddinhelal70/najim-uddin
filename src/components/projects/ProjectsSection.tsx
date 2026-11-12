"use client";

import { motion } from "framer-motion";

import ProjectHeader from "./ProjectHeader";

import ProjectCard from "./ProjectCard";
import ProjectsCTA from "./ProjectsCTA";

import { projects } from "./project-data";

import FeaturedProject from "./FeaturedProject";
import {
  featuredContainerVariants,
  projectContainerVariants,
} from "./project-animations";

export default function ProjectsSection() {
  // Featured Project
  const featuredProject = projects.find((project) => project.featured);

  // Other Projects
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-[#080B16] px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Background Effects */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />

        <div className="absolute -right-40 top-[35%] h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      {/* Main Container */}

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}

        <ProjectHeader />

        {/* Featured Project */}

        {featuredProject && (
          <motion.div
            variants={featuredContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.12,
            }}
            className="mt-14"
          >
            <FeaturedProject />
          </motion.div>
        )}

        {/* Other Projects */}

        {otherProjects.length > 0 && (
          <motion.div
            variants={projectContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.12,
            }}
            className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2"
          >
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        )}

        {/* Bottom CTA */}

        <ProjectsCTA />
      </div>
    </section>
  );
}
