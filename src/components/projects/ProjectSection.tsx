
import React, { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { Project } from "@/types/project";

interface ProjectSectionProps {
  project: Project;
  imagePosition: "left" | "right";
}

export const ProjectSection = forwardRef<HTMLDivElement, ProjectSectionProps>(
  ({ project, imagePosition }, ref) => {
    return (
      <section 
        ref={ref}
        className="py-20 bg-white"
        id={project.id}
      >
        <div className="container mx-auto px-6">
          <div className={`grid lg:grid-cols-2 gap-16 items-center ${imagePosition === 'right' ? '' : 'lg:flex-row-reverse'}`}>
            {/* Project Details */}
            <div className={imagePosition === "left" ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {project.description}
              </p>
              
              <div className="mb-6">
                <Button className="text-white bg-vdi-medium hover:bg-vdi-dark">
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Project Image & Highlights */}
            <div className={`relative ${imagePosition === "left" ? "order-1 lg:order-1" : "order-1 lg:order-2"}`}>
              <div className="relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full h-auto"
                />
                
                {/* Project Highlights */}
                <div className="mt-6 lg:absolute lg:-right-32 lg:top-1/2 lg:transform lg:-translate-y-1/2 bg-white p-6 rounded-xl shadow-lg border border-gray-100 lg:w-80">
                  <h3 className="text-xl font-semibold text-vdi-dark mb-4">Project Highlights</h3>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-vdi-medium mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

ProjectSection.displayName = "ProjectSection";
