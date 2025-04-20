
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { FooterSection } from "@/components/sections/FooterSection";
import { featuredProject, recentProjects } from "@/data/projectsData";
import { DetailedProject, Project } from "@/types/project";

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<DetailedProject | Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Find the project in our data
    if (projectId === featuredProject.id) {
      setProject(featuredProject);
    } else {
      const foundProject = recentProjects.find(p => p.id === projectId);
      setProject(foundProject || null);
    }
    setLoading(false);
  }, [projectId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse text-3xl text-vdi-medium">Loading...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Project Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="bg-vdi-medium hover:bg-vdi-dark text-white">
            <a href="/projects">Back to Projects</a>
          </Button>
        </div>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Project Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-vdi-medium font-medium mb-2 block">{project.industry}</span>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">{project.title}</h1>
              <p className="text-xl text-gray-600 mb-8">{project.description}</p>
              <Button asChild className="bg-vdi-medium hover:bg-vdi-dark text-white">
                <a href="/projects">Back to Projects</a>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Details Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Challenge</h3>
                  <p className="text-gray-700">{project.challenge}</p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Solution</h3>
                  <p className="text-gray-700">{project.solution}</p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Results</h3>
                  <p className="text-gray-700">{project.results}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-vdi-lightest/20 text-vdi-dark rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Details for Featured Project */}
      {'clientProfile' in project && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Project Details</h2>
              
              {project.clientProfile && (
                <div className="mb-12 bg-white rounded-xl shadow-md p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Client Profile</h3>
                  <p className="text-gray-700">{project.clientProfile}</p>
                </div>
              )}
              
              {project.businessOutcomes && (
                <div className="mb-12 bg-white rounded-xl shadow-md p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Outcomes</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {project.businessOutcomes.map((outcome, index) => (
                      <li key={index}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {project.investmentSummary && (
                <div className="mb-12 bg-white rounded-xl shadow-md p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Investment Summary</h3>
                  <p className="text-gray-700">{project.investmentSummary}</p>
                </div>
              )}
              
              {project.riskMitigation && (
                <div className="mb-12 bg-white rounded-xl shadow-md p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Mitigation</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {project.riskMitigation.map((risk, index) => (
                      <li key={index}>{risk}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {project.recommendation && (
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Recommendation</h3>
                  <p className="text-gray-700">{project.recommendation}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
      
      <FooterSection />
    </div>
  );
};

export default ProjectDetail;
