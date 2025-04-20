
import { useParams } from "react-router-dom";
import { projectsData } from "@/lib/projects-data";
import Navbar from "@/components/layout/Navbar";

const Project = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            {project.title}
          </h1>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />
          <div className="prose max-w-none">
            <p className="text-xl text-gray-600">{project.fullContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
