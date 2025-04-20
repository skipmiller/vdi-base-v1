
import React from "react";
import { Button } from "@/components/ui/button";
import { GradientBlob } from "@/components/ui/gradient-blob";

export const ProjectCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="project-cta">
      <GradientBlob 
        className="w-[800px] h-[800px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
        colorStart="from-vdi-medium/20" 
        colorEnd="to-vdi-dark/10" 
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Discuss Your Project?</h2>
              <p className="text-xl text-gray-600">
                Our team of experts is ready to help you transform your business with the right technology solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-vdi-medium hover:bg-vdi-dark text-white">
                <a href="#contact">Contact Us</a>
              </Button>
              <Button asChild variant="outline" className="border-vdi-light text-vdi-dark hover:bg-vdi-lightest/10">
                <a href="/projects">Explore More Projects</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
