
import { DetailedProject, Project, ProjectType } from "@/types/project";

// Featured Case Study
export const featuredProject: DetailedProject = {
  id: "metrotech-vdi",
  title: "Virtual Desktop Infrastructure Modernization",
  industry: "Technology",
  image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200",
  description: "Complete VDI transformation for a leading technology solutions provider",
  challenge: "MetroTech Solutions was struggling with an aging VDI infrastructure that was causing performance issues, limiting user productivity, and creating security vulnerabilities. Their existing solution couldn't support modern applications and was becoming increasingly expensive to maintain.",
  solution: "Implemented a state-of-the-art VDI solution with dynamic resource allocation, enhanced security controls, and seamless application delivery. The solution included cloud-based components for scalability and disaster recovery.",
  results: "Achieved 40% faster application performance, reduced IT support tickets by 65%, and enabled secure remote work for 2,500+ employees across 12 global offices.",
  technologies: ["VDI", "Cloud", "Security", "Windows 11", "Zero Trust"],
  clientProfile: "MetroTech Solutions is a global technology services provider with 2,500+ employees across 12 locations. Their IT infrastructure supports critical business operations for clients in healthcare, finance, and manufacturing sectors.",
  timeline: [
    {
      name: "Assessment & Planning",
      duration: "3 weeks",
      start: "2025-05-01",
      end: "2025-05-21",
      deliverables: ["Requirements documentation", "Project plan approval"],
      color: "rgba(13, 110, 253, 0.7)"
    },
    {
      name: "Design & Architecture",
      duration: "4 weeks",
      start: "2025-05-22",
      end: "2025-06-19",
      deliverables: ["Solution design", "Technical specifications", "Security protocols"],
      color: "rgba(102, 16, 242, 0.7)"
    },
    {
      name: "Implementation - Phase 1",
      duration: "6 weeks",
      start: "2025-06-20",
      end: "2025-08-01",
      deliverables: ["Core infrastructure", "Initial user group migration"],
      color: "rgba(214, 51, 132, 0.7)"
    },
    {
      name: "Implementation - Phase 2",
      duration: "8 weeks",
      start: "2025-08-02",
      end: "2025-09-27",
      deliverables: ["Complete user migration", "Application deployment"],
      color: "rgba(253, 126, 20, 0.7)"
    },
    {
      name: "Testing & Optimization",
      duration: "3 weeks",
      start: "2025-09-28",
      end: "2025-10-18",
      deliverables: ["Performance testing", "User acceptance", "System optimization"],
      color: "rgba(25, 135, 84, 0.7)"
    },
    {
      name: "Training & Handover",
      duration: "2 weeks",
      start: "2025-10-19",
      end: "2025-11-01",
      deliverables: ["Admin training", "User documentation", "Support handover"],
      color: "rgba(13, 202, 240, 0.7)"
    }
  ],
  businessOutcomes: [
    "40% increase in desktop performance",
    "65% reduction in IT support tickets",
    "99.99% system availability",
    "30% reduction in total cost of ownership",
    "Enhanced security posture with zero major incidents"
  ],
  investmentSummary: "The project required an initial investment of $1.2M with projected 3-year ROI of 215% and annual cost savings of $420K through reduced support requirements and infrastructure optimization.",
  riskMitigation: [
    "Phased implementation approach to minimize business disruption",
    "Comprehensive backup and rollback procedures",
    "Parallel systems during migration",
    "24/7 support team during critical transition periods",
    "Detailed user communication plan"
  ],
  recommendation: "The VDI modernization project has delivered exceptional results, exceeding performance targets while reducing overall IT costs. We recommend continuing with the planned expansion to include contractor access systems and additional application virtualization in the next fiscal year."
};

// Recent Projects
export const recentProjects: Project[] = [
  {
    id: "healthcare-network",
    title: "Healthcare Provider Network Upgrade",
    industry: "Healthcare",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800",
    description: "Network infrastructure upgrade for a major healthcare provider",
    challenge: "Legacy network infrastructure causing reliability issues across 12 locations",
    solution: "Implemented redundant SD-WAN solution with centralized management",
    results: "99.99% uptime, 40% reduction in IT support tickets",
    technologies: ["SD-WAN", "Network Security", "Healthcare IT"]
  },
  {
    id: "financial-security",
    title: "Financial Services Cybersecurity Enhancement",
    industry: "Financial Services",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",
    description: "Comprehensive cybersecurity upgrade for financial institution",
    challenge: "Meeting new regulatory compliance requirements while improving threat protection",
    solution: "Zero-trust architecture with advanced endpoint protection",
    results: "Successful regulatory audit, 65% reduction in security incidents",
    technologies: ["Zero Trust", "Endpoint Security", "Compliance"]
  },
  {
    id: "manufacturing-integration",
    title: "Manufacturing Operations Technology Integration",
    industry: "Manufacturing",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800",
    description: "Integration of OT/IT systems for manufacturing efficiency",
    challenge: "Disconnected OT/IT systems creating data silos and inefficiency",
    solution: "Unified operations platform with secure OT/IT convergence",
    results: "28% improvement in production efficiency, real-time analytics capability",
    technologies: ["OT/IT Convergence", "IIoT", "Manufacturing Systems"]
  },
  {
    id: "government-cloud",
    title: "Government Agency Cloud Migration",
    industry: "Government",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800",
    description: "Secure cloud migration for government agency",
    challenge: "Aging infrastructure with high maintenance costs and limited scalability",
    solution: "FedRAMP-compliant hybrid cloud environment",
    results: "$1.2M annual cost reduction, 60% faster deployment of new services",
    technologies: ["Cloud Migration", "FedRAMP", "Public Sector IT"]
  },
  {
    id: "retail-transformation",
    title: "Retail Digital Transformation",
    industry: "Retail",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800",
    description: "End-to-end digital transformation for retail chain",
    challenge: "Outdated systems hindering omnichannel customer experience",
    solution: "Integrated retail platform with real-time inventory and customer insights",
    results: "32% increase in online sales, seamless omnichannel customer experience",
    technologies: ["Retail Systems", "POS", "Customer Analytics"]
  },
  {
    id: "education-collaboration",
    title: "Education Collaboration Platform",
    industry: "Education",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800",
    description: "Secure collaboration platform for educational institution",
    challenge: "Enabling secure remote learning and faculty collaboration",
    solution: "Custom collaboration platform with integrated learning management",
    results: "100% remote learning capability, 45% increase in student engagement",
    technologies: ["EdTech", "Collaboration Tools", "LMS Integration"]
  }
];

// Project Types
export const projectTypes: ProjectType[] = [
  {
    id: "vdi-implementation",
    name: "VDI Implementation",
    description: "End-to-end virtual desktop infrastructure solutions custom designed for your organization's unique requirements.",
    icon: "Monitor",
    link: "#services"
  },
  {
    id: "cloud-migration",
    name: "Cloud Migration",
    description: "Secure, efficient migration to cloud platforms with minimal disruption and maximum business value.",
    icon: "Cloud",
    link: "#services"
  },
  {
    id: "security-enhancement",
    name: "Security Enhancement",
    description: "Comprehensive security solutions to protect your critical assets and ensure regulatory compliance.",
    icon: "Shield",
    link: "#services"
  },
  {
    id: "network-infrastructure",
    name: "Network Infrastructure",
    description: "Resilient, high-performance network solutions designed for today's demanding business applications.",
    icon: "Link",
    link: "#services"
  },
  {
    id: "digital-workplace",
    name: "Digital Workplace",
    description: "Modern workplace solutions that enhance collaboration, productivity, and employee satisfaction.",
    icon: "Users",
    link: "#services"
  }
];
