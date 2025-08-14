'use client';

import { useState, useEffect } from "react";
import { Skill, Experience, Project } from "@/types";
import { HeroSection, SkillsSection, BiographySection, ProjectsSection } from "@/components/sections";

export default function Home() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [skillsRes, experiencesRes, projectsRes] = await Promise.all([
          fetch('/api/skills'),
          fetch('/api/experiences'),
          fetch('/api/projects'),
        ]);

        const [skillsData, experiencesData, projectsData] = await Promise.all([
          skillsRes.json(),
          experiencesRes.json(),
          projectsRes.json(),
        ]);

        setSkills(skillsData);
        setExperiences(experiencesData);
        setProjects(projectsData);
      } catch (error) {
        console.error('データの取得に失敗しました:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />
      <SkillsSection skills={skills} loading={loading} />
      <BiographySection experiences={experiences} loading={loading} />
      <ProjectsSection projects={projects} loading={loading} />
    </div>
  );
}
