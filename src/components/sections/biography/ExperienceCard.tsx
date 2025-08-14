'use client';

import { motion } from "framer-motion";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export default function ExperienceCard({
  title,
  company,
  period,
  description,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600">{company}</p>
        </div>
        <span className="text-sm text-gray-500">{period}</span>
      </div>
      <ul className="list-disc list-inside space-y-2">
        {description.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
} 
