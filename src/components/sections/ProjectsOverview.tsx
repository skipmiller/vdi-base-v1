
import { ProjectCard } from "@/components/ui/project-card";
import { projectsData } from "@/lib/projects-data";

export const ProjectsOverview = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Our Projects
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
