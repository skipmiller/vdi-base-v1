
import React, { useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectNavigation } from "@/components/projects/ProjectNavigation";
import { ProjectSection } from "@/components/projects/ProjectSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { projectsData } from "@/data/projectsData";

const Projects = () => {
  const projectRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToProject = (id: string) => {
    if (projectRefs.current[id]) {
      projectRefs.current[id]?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero section for Reference project */}
      <ProjectHero
        ref={el => projectRefs.current['reference'] = el}
        project={projectsData[0]}
      />
      
      {/* Project navigation */}
      <ProjectNavigation 
        projects={projectsData} 
        onProjectClick={scrollToProject} 
      />
      
      {/* Individual project sections */}
      {projectsData.map((project, index) => (
        index > 0 && (
          <ProjectSection
            key={project.id}
            ref={el => projectRefs.current[project.id] = el}
            project={project}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
        )
      ))}
      
      <FooterSection />
    </div>
  );
};

export default Projects;
