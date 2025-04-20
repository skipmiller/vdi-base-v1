
import { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: "reference",
    client: "Reference Project",
    title: "Enterprise VDI Transformation",
    description: "Our reference architecture for large-scale VDI deployments demonstrates proven methodologies for secure, scalable, and high-performance virtual desktop infrastructure.",
    summary: "Showcasing our expertise in VDI design, implementation, and optimization for enterprise environments.",
    projectType: "Reference Architecture",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800",
    highlights: [
      "Scalable design supporting 10,000+ concurrent users",
      "99.99% availability with fault-tolerant architecture",
      "Streamlined user experience across all device types",
      "Enhanced security with multi-layer protection",
      "Optimized resource utilization and cost management"
    ]
  },
  {
    id: "tahoe-forest-hospital",
    client: "Tahoe Forest Hospital",
    title: "Healthcare VDI Implementation",
    description: "We transformed Tahoe Forest Hospital's desktop infrastructure with a secure and compliant VDI solution that improved clinical workflows and protected patient data.",
    summary: "HIPAA-compliant virtual desktop solution for healthcare professionals.",
    projectType: "Healthcare IT",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800",
    highlights: [
      "HIPAA-compliant security controls",
      "Fast access to patient records across all hospital areas",
      "Follow-me desktop experience for clinical staff",
      "Integrated with electronic health record systems",
      "Reduced IT management overhead by 40%"
    ]
  },
  {
    id: "lawrence-wholesale",
    client: "Lawrence Wholesale",
    title: "Retail Distribution VDI Rollout",
    description: "Lawrence Wholesale streamlined their operations with our VDI solution that connected warehouse, office, and remote staff with consistent access to business applications.",
    summary: "Unified desktop solution for retail distribution operations.",
    projectType: "Retail IT Infrastructure",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800",
    highlights: [
      "Integrated inventory management systems",
      "Consistent user experience across all locations",
      "Simplified application deployment and updates",
      "Enhanced security for customer and vendor data",
      "Improved system performance for critical business applications"
    ]
  },
  {
    id: "valley-health-system",
    client: "Valley Health System",
    title: "Multi-Facility Healthcare VDI",
    description: "Valley Health System deployed our VDI solution across their network of hospitals and clinics, providing seamless and secure access to critical healthcare applications.",
    summary: "Enterprise-scale VDI for integrated healthcare network.",
    projectType: "Enterprise Healthcare IT",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800",
    highlights: [
      "Deployed across 12 facilities with centralized management",
      "Accelerated login times from minutes to seconds",
      "Seamless integration with medical devices and systems",
      "Advanced disaster recovery capabilities",
      "Reduced endpoint hardware costs by 35%"
    ]
  },
  {
    id: "diversified-consultants",
    client: "Diversified Consultants",
    title: "Professional Services Desktop Modernization",
    description: "Diversified Consultants enhanced their client services with our VDI platform, allowing consultants to securely access company resources from anywhere in the world.",
    summary: "Mobile-friendly VDI for consulting professionals.",
    projectType: "Professional Services IT",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",
    highlights: [
      "Secure client data access with multi-factor authentication",
      "Optimized for mobile and remote work scenarios",
      "Consistent performance across diverse network conditions",
      "Granular access controls based on client and project",
      "Seamless integration with collaboration and productivity tools"
    ]
  }
];
