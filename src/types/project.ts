
export interface Project {
  id: string;
  title: string;
  industry: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  technologies: string[];
}

export interface DetailedProject extends Project {
  clientProfile?: string;
  timeline?: TimelinePhase[];
  businessOutcomes?: string[];
  investmentSummary?: string;
  riskMitigation?: string[];
  recommendation?: string;
}

export interface TimelinePhase {
  name: string;
  duration: string;
  start: string; // date string
  end: string; // date string
  deliverables: string[];
  color?: string;
}

export interface ProjectType {
  id: string;
  name: string;
  description: string;
  icon: string;
  link: string;
}
