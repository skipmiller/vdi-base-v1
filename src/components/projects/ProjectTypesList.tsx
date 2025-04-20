
import React from "react";
import { Monitor, Cloud, Shield, Link, Users } from "lucide-react";
import { FeatureCard } from "@/components/ui/feature-card";
import { projectTypes } from "@/data/projectsData";

export const ProjectTypesList = () => {
  // Map of icon names to components
  const iconMap: Record<string, React.ReactNode> = {
    "Monitor": <Monitor size={24} />,
    "Cloud": <Cloud size={24} />,
    "Shield": <Shield size={24} />,
    "Link": <Link size={24} />,
    "Users": <Users size={24} />
  };

  return (
    <section className="py-20 bg-gray-50" id="project-types">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Project Types</h2>
          <p className="text-xl text-gray-600">
            We specialize in a range of technology solutions tailored to your specific business needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectTypes.map((type) => (
            <FeatureCard
              key={type.id}
              title={type.name}
              description={type.description}
              icon={iconMap[type.icon]}
              className="hover:-translate-y-1 transition-transform"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
