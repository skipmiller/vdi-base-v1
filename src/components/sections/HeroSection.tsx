import { Button } from "@/components/ui/button";
import { FloatingFrame } from "@/components/ui/floating-frame";
import { FloatingImage } from "@/components/ui/floating-image";
import { GradientBlob } from "@/components/ui/gradient-blob";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
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
        
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Be the Hero. <br />
              Lead an AI Powered <span className="text-vdi-dark">Desktop Revolution</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Let's plan the liberation of your employees, executives, and support staff from the tyranny of virtual desktop (VDI) oppression... together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="text-white bg-vdi-medium hover:bg-vdi-dark">
                Book a Consultation
              </Button>
              <Button variant="outline" className="border-vdi-light text-vdi-dark hover:bg-vdi-lightest/10">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[480px]">
              <FloatingImage 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800"
                alt="Windows 11 Start Menu & UX Features"
                className="absolute z-20 top-0 right-0 w-3/4 shadow-xl float-animation rounded-xl"
              />
              <FloatingFrame className="absolute z-10 bottom-4 left-0 w-3/5 p-6 float-animation backdrop-blur-md bg-white/80" style={{ animationDelay: "1.5s" }}>
                <h3 className="text-lg font-medium text-vdi-dark mb-2">Latest Windows 11 UX Features (2024-2025)</h3>
                <p className="text-gray-600 mb-4">Centered transparent Start Menu with beautiful nature-inspired backgrounds and color matching.</p>
                <div className="flex items-center text-vdi-medium">
                  <span className="mr-2">See more features</span>
                  <ArrowRight size={16} />
                </div>
              </FloatingFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
