
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/ui/feature-card";
import { FloatingFrame } from "@/components/ui/floating-frame";
import { FloatingImage } from "@/components/ui/floating-image";
import { GradientBlob } from "@/components/ui/gradient-blob";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import Navbar from "@/components/layout/Navbar";
import { ArrowRight, CheckCircle, Cloud, Database, Globe, LayoutGrid, Monitor, Shield, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
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
                Lead an AI Powered <span className="text-vdi-dark">VDI Desktop Revolution</span>
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Let's plan the liberation of your employees, executives, and support staff from the tyranny of virtual desktop oppression.
              </p>
              <p className="text-xl text-gray-600 italic mb-8">
                Sure feels good to have a plan...
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

      {/* Services Section */}
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

      {/* Benefits Section */}
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

      {/* Testimonial Section */}
      <section id="testimonials" className="py-20 bg-gray-50 relative overflow-hidden">
        <GradientBlob 
          className="w-[700px] h-[700px] -bottom-96 -left-40" 
          colorStart="from-vdi-light/30" 
          colorEnd="to-vdi-medium/20" 
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by businesses of all sizes to deliver reliable virtual desktop solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="The VDI solution provided by VistaVDI has transformed how our team works. We've seen improved productivity and significant cost savings."
              author="Michael Johnson"
              position="CIO"
              company="Global Tech Industries"
            />
            <TestimonialCard 
              quote="Implementing virtual desktops has been seamless with exceptional support throughout the process. Our remote workforce is now more secure and productive."
              author="Sarah Williams"
              position="IT Director"
              company="Healthcare Partners"
            />
            <TestimonialCard 
              quote="The performance of our virtual desktops exceeds our expectations. Users can't tell the difference from physical machines, which has been crucial for adoption."
              author="David Chen"
              position="CTO"
              company="FutureSoft Solutions"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">VistaVDI</h2>
              <p className="text-gray-400 mb-4">
                Professional Virtual Desktop Infrastructure solutions for modern businesses.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">Cloud VDI</a></li>
                <li><a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">On-Premise VDI</a></li>
                <li><a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">Hybrid Solutions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">VDI Security</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">info@vistavdi.com</li>
                <li className="text-gray-400">+1 (555) 123-4567</li>
                <li className="text-gray-400">123 Tech Plaza, Suite 400<br />San Francisco, CA 94105</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 VistaVDI. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
