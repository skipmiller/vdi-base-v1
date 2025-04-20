
import React from "react";
import { Project } from "@/types/project";

interface ProjectNavigationProps {
  projects: Project[];
  onProjectClick: (id: string) => void;
}

export const ProjectNavigation = ({ projects, onProjectClick }: ProjectNavigationProps) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Our Projects</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Browse through our successful VDI implementation projects. Click on any project to learn more.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onProjectClick(project.id)}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
            >
              <h3 className="text-lg font-medium text-vdi-dark mb-1">{project.client}</h3>
              <p className="text-sm text-gray-600">{project.projectType}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
