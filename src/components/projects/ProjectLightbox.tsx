
import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "@/types/project";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProjectLightboxProps {
  project: Project;
  onClose: () => void;
  onNavigate: (direction: "prev" | "next") => void;
}

export const ProjectLightbox = ({ project, onClose, onNavigate }: ProjectLightboxProps) => {
  // Close lightbox on escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    
    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8" onClick={onClose}>
      <div 
        className="bg-white rounded-xl overflow-hidden max-w-6xl w-full max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Close button */}
        <button 
          className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full z-10"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        
        {/* Image */}
        <div className="md:w-1/2 h-60 md:h-auto overflow-hidden bg-gray-100">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-vdi-medium font-medium mb-4">Industry: {project.industry}</p>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
            <p className="text-gray-700 mb-4">{project.challenge}</p>
            
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
            <p className="text-gray-700 mb-4">{project.solution}</p>
            
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Results</h4>
            <p className="text-gray-700 mb-6">{project.results}</p>
            
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-vdi-lightest/20 text-vdi-dark rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <Button asChild className="w-full bg-vdi-medium hover:bg-vdi-dark text-white">
              <Link to={`/projects/${project.id}`}>
                View Full Case Study
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Navigation arrows */}
        <button 
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full hidden md:block"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate("prev");
          }}
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full hidden md:block"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate("next");
          }}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};
