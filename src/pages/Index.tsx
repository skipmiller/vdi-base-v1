
import { Button } from "@/components/ui/button";
import { FloatingFrame } from "@/components/ui/floating-frame";
import { FloatingImage } from "@/components/ui/floating-image";
import { GradientBlob } from "@/components/ui/gradient-blob";
import Navbar from "@/components/layout/Navbar";
import { ArrowRight, CheckCircle, Clock, Lock, MessageSquare, Shield, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with Edge-to-Edge Art */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80" 
            alt="Beautiful landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-vdi-dark/80 to-vdi-dark/40 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Be the Hero.<br />Start a Desktop Revolution.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Imagine the perfect plan that could liberate your employees, executives, and support staff from the tyranny of virtual desktop oppression.
            </p>
            <Button className="text-vdi-dark bg-white hover:bg-white/90 text-lg px-8 py-6 h-auto">
              Start my plan
            </Button>
          </div>
          
          <div className="mt-16 relative">
            <FloatingFrame 
              className="absolute -right-4 top-0 w-72 md:w-80 p-6 float-animation" 
              style={{ animationDelay: "0.3s" }}
            >
              <h3 className="text-lg font-medium text-vdi-dark mb-2">Simplified Management</h3>
              <p className="text-gray-600">No more copy-paste chaos with intelligent image management.</p>
            </FloatingFrame>
            
            <FloatingFrame 
              className="absolute right-1/4 bottom-4 w-64 md:w-72 p-6 float-animation" 
              variant="glass"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-start">
                <Zap className="text-vdi-medium mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-vdi-dark mb-1">Fast Logins</h3>
                  <p className="text-gray-600">Start mornings right with lightning-quick access.</p>
                </div>
              </div>
            </FloatingFrame>
          </div>
        </div>
      </section>

      {/* "You're Not Alone" Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <GradientBlob 
          className="w-[800px] h-[800px] top-1/3 -right-96" 
          colorStart="from-vdi-light/20" 
          colorEnd="to-vdi-medium/10" 
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              You're Not Alone.
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              You're not the only IT leader quietly holding together a fragile web of images, patches, and performance complaints.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-start">
                    <Clock className="text-vdi-medium mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Long logins ruin mornings.</p>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-vdi-medium mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">App updates take hours—or days.</p>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-vdi-medium mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Sprawl has become a full-time job.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div>
                  <p className="text-xl text-gray-700 mb-4">
                    And while you're fixing yesterday's fires, the next one's already burning.
                  </p>
                  <p className="text-xl text-gray-700 mb-4">
                    It's exhausting.
                  </p>
                  <p className="text-xl font-medium text-vdi-dark">
                    But it doesn't have to stay this way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "This Is What Calm Looks Like" Section with Edge-to-Edge Art */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=2000&q=80" 
            alt="Calm landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/80"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              This Is What Calm Looks Like.
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Desk-Ops brings together smart automation and real-world VDI experience to help you:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <FloatingFrame variant="bordered" className="float-animation" style={{ animationDelay: "0.1s" }}>
              <div className="flex flex-col h-full">
                <Zap className="text-vdi-medium mb-4 h-6 w-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Speed up logins and app launches</h3>
                <p className="text-gray-600 flex-grow">Start every session with speed, not frustration.</p>
              </div>
            </FloatingFrame>
            
            <FloatingFrame variant="bordered" className="float-animation" style={{ animationDelay: "0.3s" }}>
              <div className="flex flex-col h-full">
                <CheckCircle className="text-vdi-medium mb-4 h-6 w-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Simplify image management</h3>
                <p className="text-gray-600 flex-grow">No more copy-paste chaos.</p>
              </div>
            </FloatingFrame>
            
            <FloatingFrame variant="bordered" className="float-animation" style={{ animationDelay: "0.5s" }}>
              <div className="flex flex-col h-full">
                <Shield className="text-vdi-medium mb-4 h-6 w-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Stay ahead of compliance audits</h3>
                <p className="text-gray-600 flex-grow">Be prepared before the auditors arrive.</p>
              </div>
            </FloatingFrame>
            
            <FloatingFrame variant="bordered" className="float-animation" style={{ animationDelay: "0.7s" }}>
              <div className="flex flex-col h-full">
                <ArrowRight className="text-vdi-medium mb-4 h-6 w-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">See exactly what's happening</h3>
                <p className="text-gray-600 flex-grow">Without digging through endless logs.</p>
              </div>
            </FloatingFrame>
            
            <FloatingFrame variant="bordered" className="float-animation" style={{ animationDelay: "0.9s" }}>
              <div className="flex flex-col h-full">
                <MessageSquare className="text-vdi-medium mb-4 h-6 w-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Talk to someone who's done this before</h3>
                <p className="text-gray-600 flex-grow">Not just read the manual.</p>
              </div>
            </FloatingFrame>
            
            <FloatingFrame variant="bordered" className="float-animation" style={{ animationDelay: "1.1s" }}>
              <div className="flex flex-col h-full justify-center items-center text-center p-8">
                <p className="text-lg text-vdi-dark mb-2">No dashboards for the sake of dashboards.</p>
                <p className="text-lg text-vdi-dark">Just tools that quietly do their job—and a partner who gets it.</p>
              </div>
            </FloatingFrame>
          </div>
        </div>
      </section>

      {/* "Used by People Who Can't Afford to Get This Wrong" Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <GradientBlob 
          className="w-[700px] h-[700px] -bottom-96 -left-40" 
          colorStart="from-vdi-light/30" 
          colorEnd="to-vdi-medium/20" 
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              Used by People Who Can't Afford to Get This Wrong
            </h2>
            <p className="text-xl text-gray-600 text-center">
              We work with hospitals, MSPs, and teams supporting thousands of desktops—where downtime isn't an option and complexity is real.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <FloatingFrame className="bg-white p-8">
              <p className="text-lg text-gray-600 italic mb-6">
                "I didn't realize how much time we were wasting until we stopped."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-vdi-lightest flex items-center justify-center text-white font-bold text-xl mr-4">
                  J
                </div>
                <div>
                  <p className="font-medium">Jamie Chen</p>
                  <p className="text-sm text-gray-500">IT Director, Healthcare</p>
                </div>
              </div>
            </FloatingFrame>
            
            <FloatingFrame className="bg-white p-8">
              <p className="text-lg text-gray-600 italic mb-6">
                "I can finally focus on planning instead of patching."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-vdi-medium flex items-center justify-center text-white font-bold text-xl mr-4">
                  M
                </div>
                <div>
                  <p className="font-medium">Mike Reynolds</p>
                  <p className="text-sm text-gray-500">CIO, Enterprise</p>
                </div>
              </div>
            </FloatingFrame>
            
            <FloatingFrame className="bg-white p-8">
              <p className="text-lg text-gray-600 italic mb-6">
                "It just works. And when it doesn't, I can call someone who fixes it."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-vdi-dark flex items-center justify-center text-white font-bold text-xl mr-4">
                  S
                </div>
                <div>
                  <p className="font-medium">Sarah Williams</p>
                  <p className="text-sm text-gray-500">IT Manager, MSP</p>
                </div>
              </div>
            </FloatingFrame>
          </div>
          
          <div className="text-center">
            <div className="inline-block border border-vdi-medium/30 rounded-lg px-6 py-4 bg-white">
              <p className="text-vdi-dark font-medium">Certified for environments where security and compliance aren't negotiable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* "Software Is Only Half the Answer" Section with Edge-to-Edge Art */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=2000&q=80" 
            alt="Mystical landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white/90 to-white/70"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Software Is Only Half the Answer
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                You don't need another platform to babysit. You need a clean setup, a clear strategy, and someone you trust on the other end of the line.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="text-vdi-medium mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">A personalized PoC that matches your environment</h3>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-vdi-medium mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">AI automation that works quietly in the background</h3>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-vdi-medium mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">A direct line to an architect with 20+ years of experience</h3>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-vdi-medium mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Peace of mind when things go sideways</h3>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <FloatingImage 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
                alt="Working on code"
                className="rounded-xl shadow-xl"
              />
              
              <FloatingFrame 
                className="absolute -bottom-6 -left-6 w-64 p-4 bg-white shadow-lg float-animation" 
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center">
                  <Lock className="text-vdi-medium mr-3 flex-shrink-0" />
                  <p className="text-gray-800 font-medium">Secure by design, from day one</p>
                </div>
              </FloatingFrame>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <GradientBlob 
          className="w-[800px] h-[800px] top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
          colorStart="from-vdi-lightest/20" 
          colorEnd="to-vdi-light/10" 
          intensity="light"
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              Still Wondering? Let's Clear a Few Things Up.
            </h2>
            
            <div className="mt-12 space-y-8">
              <FloatingFrame className="bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">What if my environment is messy?</h3>
                <p className="text-gray-600">That's kind of the point. We're not here to judge—we're here to help clean it up.</p>
              </FloatingFrame>
              
              <FloatingFrame className="bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">How long does it take to get started?</h3>
                <p className="text-gray-600">Your custom PoC plan is ready in about a day. No long prep. No contracts.</p>
              </FloatingFrame>
              
              <FloatingFrame className="bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Is this secure?</h3>
                <p className="text-gray-600">Absolutely. Encryption, zero-trust, compliance—the works. We've built this for healthcare and legal.</p>
              </FloatingFrame>
              
              <FloatingFrame className="bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">What if I already use other tools?</h3>
                <p className="text-gray-600">Great. Desk-Ops works alongside your current stack to reduce noise, not add to it.</p>
              </FloatingFrame>
              
              <FloatingFrame className="bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Do I really get to talk to a person?</h3>
                <p className="text-gray-600">Yes. A real one. With deep VDI experience. No call center scripts.</p>
              </FloatingFrame>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Edge-to-Edge Art */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=2000&q=80" 
            alt="Abstract art" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-vdi-dark/70"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              You've Got Enough Fires to Put Out.<br />Let's Fix This One for Good.
            </h2>
            <p className="text-xl mb-12">
              Desk-Ops won't fix everything overnight. But it will take a huge weight off your shoulders—and make your desktops feel like they should've all along.
            </p>
            <Button className="text-vdi-dark bg-white hover:bg-white/90 text-lg px-8 py-6 h-auto">
              Start my plan
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Desk-Ops</h2>
              <p className="text-gray-400 mb-4">
                Professional Virtual Desktop Infrastructure solutions that make calm IT possible.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">VDI Automation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">Image Management</a></li>
                <li><a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">Compliance Tools</a></li>
                <li><a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">Security Services</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">info@desk-ops.com</li>
                <li className="text-gray-400">+1 (555) 123-4567</li>
                <li className="text-gray-400">123 Tech Plaza, Suite 400<br />San Francisco, CA 94105</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 Desk-Ops. All rights reserved.</p>
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
