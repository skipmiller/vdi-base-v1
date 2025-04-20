
import React from "react";
import { Button } from "@/components/ui/button";
import { DetailedProject } from "@/types/project";
import { TimelineChart } from "./TimelineChart";
import { Link } from "react-router-dom";

interface FeaturedCaseStudyProps {
  project: DetailedProject;
}

export const FeaturedCaseStudy = ({ project }: FeaturedCaseStudyProps) => {
  return (
    <section className="py-20 bg-gray-50" id="featured-case-study">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Reference Project</h2>
          <h3 className="text-4xl font-bold text-vdi-dark mb-8">{project.title}</h3>
          
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <img 
                src={project.image} 
                alt={project.title}
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            
            <div>
              <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Client Profile</h4>
                <p className="text-gray-700 mb-6">{project.clientProfile}</p>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Challenge</h4>
                <p className="text-gray-700 mb-6">{project.challenge}</p>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Solution Overview</h4>
                <p className="text-gray-700">{project.solution}</p>
              </div>
              
              <Link to={`/projects/${project.id}`}>
                <Button className="w-full bg-vdi-medium hover:bg-vdi-dark text-white">
                  View Full Case Study
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Implementation Timeline */}
          {project.timeline && (
            <div className="bg-white rounded-xl shadow-md p-8 mb-16">
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">Implementation Timeline</h4>
              <TimelineChart phases={project.timeline} />
              <div className="mt-4 text-right">
                <p className="font-medium text-gray-900">Total Duration: 26 weeks</p>
              </div>
            </div>
          )}
          
          {/* Business Outcomes */}
          {project.businessOutcomes && (
            <div className="bg-white rounded-xl shadow-md p-8 mb-16">
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">Business Outcomes</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.businessOutcomes.map((outcome, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <div className="text-3xl font-bold text-vdi-medium mb-2">{index + 1}</div>
                    <p className="text-gray-800">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Investment Summary */}
            {project.investmentSummary && (
              <div className="bg-white rounded-xl shadow-md p-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Investment Summary</h4>
                <p className="text-gray-700">{project.investmentSummary}</p>
              </div>
            )}
            
            {/* Risk Mitigation */}
            {project.riskMitigation && (
              <div className="bg-white rounded-xl shadow-md p-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Risk Mitigation Approach</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {project.riskMitigation.map((risk, index) => (
                    <li key={index}>{risk}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Recommendation */}
          {project.recommendation && (
            <div className="bg-vdi-dark text-white rounded-xl shadow-md p-8 mt-8">
              <h4 className="text-xl font-semibold mb-4">Final Recommendation</h4>
              <p>{project.recommendation}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
