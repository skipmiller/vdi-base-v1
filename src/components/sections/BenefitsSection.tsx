
import { FloatingFrame } from "@/components/ui/floating-frame";
import { FloatingImage } from "@/components/ui/floating-image";
import { GradientBlob } from "@/components/ui/gradient-blob";
import { CheckCircle } from "lucide-react";

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 relative overflow-hidden">
      <GradientBlob 
        className="w-[600px] h-[600px] bottom-0 -right-40" 
        colorStart="from-vdi-light/20" 
        colorEnd="to-vdi-medium/10" 
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[500px]">
              <FloatingImage 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800"
                alt="Multiple devices with VDI"
                className="absolute z-20 bottom-0 left-0 w-4/5 shadow-xl float-animation"
              />
              <FloatingFrame className="absolute z-10 top-8 right-0 w-3/5 p-6 float-animation" style={{ animationDelay: "1s" }}>
                <h3 className="text-lg font-medium text-vdi-dark mb-2">Multi-Device Access</h3>
                <p className="text-gray-600">Access your desktop from any device, anywhere, with consistent performance.</p>
              </FloatingFrame>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our VDI Solutions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Virtual Desktop Infrastructure transforms how your organization works, providing flexibility without compromising security or performance. Our solutions are designed to meet the unique needs of your business.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="text-vdi-medium mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Cost Efficiency</h3>
                  <p className="text-gray-600">Reduce hardware costs and extend device lifecycles with centralized computing resources.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-vdi-medium mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Enhanced Security</h3>
                  <p className="text-gray-600">Centralize data storage and implement robust security policies across all virtual desktops.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-vdi-medium mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Workforce Flexibility</h3>
                  <p className="text-gray-600">Enable seamless remote work and bring-your-own-device policies with consistent user experiences.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-vdi-medium mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Simplified IT Management</h3>
                  <p className="text-gray-600">Streamline desktop management with centralized updates, patches, and application deployments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
