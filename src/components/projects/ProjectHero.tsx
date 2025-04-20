
import React, { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { FloatingFrame } from "@/components/ui/floating-frame";
import { FloatingImage } from "@/components/ui/floating-image";
import { GradientBlob } from "@/components/ui/gradient-blob";
import { ArrowRight } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectHeroProps {
  project: Project;
}

export const ProjectHero = forwardRef<HTMLDivElement, ProjectHeroProps>(
  ({ project }, ref) => {
    return (
      <section ref={ref} className="pt-32 pb-20 relative overflow-hidden" id={project.id}>
        <div className="container mx-auto px-6">
          <GradientBlob 
            className="w-[600px] h-[600px] -top-64 -left-40" 
            colorStart="from-vdi-light/30" 
            colorEnd="to-vdi-medium/20" 
          />
          <GradientBlob 
            className="w-[800px] h-[800px] top-40 -right-96" 
            colorStart="from-vdi-lightest/20" 
            colorEnd="to-vdi-light/10" 
          />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="text-white bg-vdi-medium hover:bg-vdi-dark">
                  View Project Details
                </Button>
                <Button variant="outline" className="border-vdi-light text-vdi-dark hover:bg-vdi-lightest/10">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[480px]">
                <FloatingImage 
                  src={project.imageUrl}
                  alt={project.title}
                  className="absolute z-20 top-0 right-0 w-3/4 shadow-xl float-animation rounded-xl"
                />
                <FloatingFrame className="absolute z-10 bottom-4 left-0 w-3/5 p-6 float-animation backdrop-blur-md bg-white/80" style={{ animationDelay: "1.5s" }}>
                  <h3 className="text-lg font-medium text-vdi-dark mb-2">{project.projectType}</h3>
                  <p className="text-gray-600 mb-4">{project.summary}</p>
                  <div className="flex items-center text-vdi-medium">
                    <span className="mr-2">View highlights</span>
                    <ArrowRight size={16} />
                  </div>
                </FloatingFrame>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

ProjectHero.displayName = "ProjectHero";
