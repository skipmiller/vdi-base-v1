
import { FeatureCard } from "@/components/ui/feature-card";
import { GradientBlob } from "@/components/ui/gradient-blob";
import { Cloud, Database, Globe, Shield, LayoutGrid, Monitor } from "lucide-react";

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      <GradientBlob 
        className="w-[500px] h-[500px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
        colorStart="from-vdi-lightest/20" 
        colorEnd="to-vdi-light/10" 
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive VDI Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From implementation to optimization, we provide end-to-end virtual desktop infrastructure solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            title="Cloud VDI Deployment"
            description="Deploy virtual desktops in the cloud with scalability and flexibility to meet your business needs."
            icon={<Cloud size={24} />}
          />
          <FeatureCard 
            title="On-Premise Solutions"
            description="Custom VDI implementations for organizations requiring data sovereignty and control."
            icon={<Database size={24} />}
          />
          <FeatureCard 
            title="Hybrid Architectures"
            description="Balanced solutions combining cloud agility with on-premise security for optimal performance."
            icon={<Globe size={24} />}
          />
          <FeatureCard 
            title="VDI Security"
            description="Comprehensive security solutions to protect your virtual desktop environment and data."
            icon={<Shield size={24} />}
          />
          <FeatureCard 
            title="Performance Optimization"
            description="Tune your VDI environment for maximum performance and user satisfaction."
            icon={<LayoutGrid size={24} />}
          />
          <FeatureCard 
            title="Managed VDI Services"
            description="Fully managed virtual desktop environments with 24/7 monitoring and support."
            icon={<Monitor size={24} />}
          />
        </div>
      </div>
    </section>
  );
};
