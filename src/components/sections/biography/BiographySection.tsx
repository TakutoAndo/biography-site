'use client';

import { Experience } from "@/types";
import ExperienceCard from "@/components/sections/biography/ExperienceCard";
import { ExperienceCardSkeleton } from "@/components/sections/biography/ExperienceCardSkeleton";

interface BiographySectionProps {
  experiences: Experience[];
  loading: boolean;
}

export function BiographySection({ experiences, loading }: BiographySectionProps) {
  return (
    <section className="py-16" id="biography">
      <h2 className="text-3xl font-bold text-center mb-12">Biography</h2>
      <div className="space-y-8">
        {loading
          ? Array.from({ length: 2 }).map((_, index) => (
              <ExperienceCardSkeleton key={index} />
            ))
          : experiences.map((experience) => (
              <ExperienceCard key={experience.id} {...experience} />
            ))}
      </div>
    </section>
  );
} 
