
import { Button } from "@/components/ui/button";
import { GradientBlob } from "@/components/ui/gradient-blob";
import { Monitor, Shield, Users } from "lucide-react";

export const CTASection = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <GradientBlob 
        className="w-[800px] h-[800px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
        colorStart="from-vdi-medium/20" 
        colorEnd="to-vdi-dark/10" 
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-vdi-dark p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Desktop Experience?</h3>
              <p className="mb-8 text-vdi-lightest">
                Schedule a consultation with our VDI experts to discover the right solution for your organization.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Users className="mr-4 text-vdi-lightest" />
                  <span>Personalized Assessment</span>
                </div>
                <div className="flex items-center">
                  <Monitor className="mr-4 text-vdi-lightest" />
                  <span>Tailored Solutions</span>
                </div>
                <div className="flex items-center">
                  <Shield className="mr-4 text-vdi-lightest" />
                  <span>Security-First Approach</span>
                </div>
              </div>
            </div>
            
            <div className="p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-vdi-medium focus:border-vdi-medium"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-vdi-medium focus:border-vdi-medium"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input
                    id="company"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-vdi-medium focus:border-vdi-medium"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-vdi-medium focus:border-vdi-medium"
                    placeholder="Tell us about your VDI needs"
                  ></textarea>
                </div>
                <Button className="w-full bg-vdi-medium hover:bg-vdi-dark text-white">
                  Book Consultation
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
