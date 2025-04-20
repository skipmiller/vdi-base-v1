
import React from "react";
import { Button } from "@/components/ui/button";
import { GradientBlob } from "@/components/ui/gradient-blob";

export const ProjectsHero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
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
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Projects: Transforming Business Through Technology
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We partner with organizations to deliver tailored technology solutions that drive meaningful business outcomes. 
            Our proven approach combines technical expertise with deep industry knowledge to ensure successful transformations.
          </p>
          <Button asChild className="bg-vdi-medium hover:bg-vdi-dark text-white">
            <a href="#contact">Discuss Your Project</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
