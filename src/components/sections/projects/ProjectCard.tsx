'use client';

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="relative h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">画像準備中</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            プロジェクトを見る →
          </a>
        )}
      </div>
    </motion.div>
  );
} 
