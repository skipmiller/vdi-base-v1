
import { ProjectsOverview } from "@/components/sections/ProjectsOverview";
import Navbar from "@/components/layout/Navbar";

const Projects = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ProjectsOverview />
    </div>
  );
};

export default Projects;
