'use client';

import { Project } from "@/types";
import ProjectCard from "@/components/sections/projects/ProjectCard";
import { ProjectCardSkeleton } from "@/components/SkeletonLoader";

interface ProjectsSectionProps {
  projects: Project[];
  loading: boolean;
}

export function ProjectsSection({ projects, loading }: ProjectsSectionProps) {
  return (
    <section className="py-16" id="projects">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {loading
          ? Array.from({ length: 2 }).map((_, index) => (
              <ProjectCardSkeleton key={index} />
            ))
          : projects.map((project) => <ProjectCard key={project.id} {...project} />)}
      </div>
    </section>
  );
} 
