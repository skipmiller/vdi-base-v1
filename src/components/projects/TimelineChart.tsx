
import React from "react";
import { TimelinePhase } from "@/types/project";

interface TimelineChartProps {
  phases: TimelinePhase[];
}

export const TimelineChart = ({ phases }: TimelineChartProps) => {
  const totalDurationInDays = 26 * 7; // 26 weeks * 7 days
  const allMonths = ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];
  
  // Calculate the width percentage for each phase based on duration
  const getPhaseWidth = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const durationInDays = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
    return (durationInDays / totalDurationInDays) * 100;
  };
  
  // Calculate the left position percentage for each phase
  const getPhaseLeft = (startDate: string) => {
    const start = new Date(startDate);
    const projectStart = new Date("2025-05-01");
    const daysFromStart = (start.getTime() - projectStart.getTime()) / (1000 * 60 * 60 * 24);
    return (daysFromStart / totalDurationInDays) * 100;
  };

  return (
    <div className="implementation-timeline">
      <div className="timeline-table-container overflow-x-auto">
        <div className="min-w-[700px]">
          {/* Month Headers */}
          <div className="flex border-b border-gray-200 pb-2 mb-4">
            {allMonths.map((month, index) => (
              <div 
                key={month} 
                className="flex-1 text-center font-medium text-gray-700"
                style={{ width: `${100 / allMonths.length}%` }}
              >
                {month}
              </div>
            ))}
          </div>
          
          {/* Timeline Bar */}
          <div className="h-2 bg-gray-200 rounded-full mb-8 relative">
            {/* Month Markers */}
            {allMonths.map((month, index) => (
              <div 
                key={month} 
                className="absolute top-0 w-px h-2 bg-gray-400"
                style={{ left: `${(index / allMonths.length) * 100}%` }}
              ></div>
            ))}
          </div>
          
          {/* Phase Bars */}
          <div className="space-y-6">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                <div className="flex mb-2">
                  <div className="w-1/4 pr-4">
                    <h5 className="font-medium text-gray-900">{phase.name}</h5>
                    <p className="text-sm text-gray-600">{phase.duration}</p>
                  </div>
                  <div className="w-3/4 relative">
                    <div 
                      className="absolute h-10 rounded-md flex items-center px-3 text-white text-sm whitespace-nowrap overflow-hidden"
                      style={{ 
                        left: `${getPhaseLeft(phase.start)}%`, 
                        width: `${getPhaseWidth(phase.start, phase.end)}%`,
                        backgroundColor: phase.color || 'rgba(0, 114, 156, 0.7)',
                        minWidth: '60px'
                      }}
                    >
                      {phase.name}
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/4"></div>
                  <div className="w-3/4 bg-gray-50 p-3 rounded-md border border-gray-100">
                    <p className="text-sm font-medium text-gray-700 mb-1">Key Deliverables:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="text-sm text-gray-600">{deliverable}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
