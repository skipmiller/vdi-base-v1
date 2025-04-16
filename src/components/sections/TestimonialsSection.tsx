
import { GradientBlob } from "@/components/ui/gradient-blob";
import { TestimonialCard } from "@/components/ui/testimonial-card";

export const TestimonialsSection = () => {
  return (
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
  );
};
