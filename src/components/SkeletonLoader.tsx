'use client';

import { motion } from "framer-motion";

export function SkillCardSkeleton() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="animate-pulse">
        <div className="w-8 h-8 bg-gray-200 rounded mb-4"></div>
        <div className="h-6 bg-gray-200 rounded mb-2"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );
}

export function ExperienceCardSkeleton() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="animate-pulse">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <div className="h-6 bg-gray-200 rounded mb-2 w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded w-24"></div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/5"></div>
        </div>
      </div>
    </div>
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="animate-pulse">
        <div className="h-48 bg-gray-200"></div>
        <div className="p-6">
          <div className="h-6 bg-gray-200 rounded mb-2"></div>
          <div className="space-y-2 mb-4">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="h-6 bg-gray-200 rounded-full w-16"></div>
            <div className="h-6 bg-gray-200 rounded-full w-20"></div>
            <div className="h-6 bg-gray-200 rounded-full w-24"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded w-32"></div>
        </div>
      </div>
    </div>
  );
}

export function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        className="flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-4 h-4 bg-blue-600 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
} 
