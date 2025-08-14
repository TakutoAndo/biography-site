'use client';

import { Skill } from "@/types";
import SkillCard from "@/components/sections/skills/SkillCard";
import { SkillCardSkeleton } from "@/components/sections/skills/SkillCardSkeleton";

interface SkillsSectionProps {
  skills: Skill[];
  loading: boolean;
}

export function SkillsSection({ skills, loading }: SkillsSectionProps) {
  return (
    <section className="py-16" id="skills">
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <SkillCardSkeleton key={index} />
            ))
          : skills.map((skill) => <SkillCard key={skill.id} {...skill} />)}
      </div>
    </section>
  );
} 
