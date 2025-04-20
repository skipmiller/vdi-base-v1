
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { FeaturedCaseStudy } from "@/components/projects/FeaturedCaseStudy";
import { ProjectsGallery } from "@/components/projects/ProjectsGallery";
import { ProjectTypesList } from "@/components/projects/ProjectTypesList";
import { ProjectLightbox } from "@/components/projects/ProjectLightbox";
import { ProjectCTA } from "@/components/projects/ProjectCTA";
import { FooterSection } from "@/components/sections/FooterSection";
import { featuredProject, recentProjects } from "@/data/projectsData";
import { Project } from "@/types/project";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (project: Project) => {
    setSelectedProject(project);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const navigateProject = (direction: "prev" | "next") => {
    if (!selectedProject) return;
    
    const currentIndex = recentProjects.findIndex(p => p.id === selectedProject.id);
    if (currentIndex === -1) return;
    
    let newIndex;
    if (direction === "prev") {
      newIndex = currentIndex === 0 ? recentProjects.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === recentProjects.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedProject(recentProjects[newIndex]);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <ProjectsHero />
      
      <FeaturedCaseStudy project={featuredProject} />
      
      <ProjectsGallery 
        projects={recentProjects} 
        onProjectClick={openLightbox}
      />
      
      <ProjectTypesList />
      
      <ProjectCTA />
      
      <FooterSection />
      
      {lightboxOpen && selectedProject && (
        <ProjectLightbox 
          project={selectedProject}
          onClose={closeLightbox}
          onNavigate={navigateProject}
        />
      )}
    </div>
  );
};

export default Projects;
